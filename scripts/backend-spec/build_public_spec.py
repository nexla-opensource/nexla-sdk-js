"""Build openapi/nexla-api.public.json from a checkout of the Nexla backend (admin-api-python).

Run it with the backend's own environment, from the backend checkout:

    cd "$NEXLA_ADMIN_API_PATH"
    ENVIRONMENT=test ACCESS_TOKEN_SECRET_KEY=ci uv run --frozen python \
        /path/to/nexla-sdk-js/scripts/backend-spec/build_public_spec.py \
        --out /path/to/nexla-sdk-js/openapi/nexla-api.public.json

ENVIRONMENT=test skips the backend's startup config checks; importing the app opens no database.

Steps:
1. Export app.openapi(); strip the /api/v1 prefix; merge root and /api/v1 twins.
2. Set each operationId to the route function name (prefixed with the resource, then the
   method, only when a name repeats).
3. Drop routes that are not public API:
   - admin-only: a dependency whose name contains super_user, nexla_admin, infra, or
     require_*admin; a handler that calls require_nexla_admin, an infrastructure-user check,
     or super_user_read_only; a handler whose first super-user check is a bare
     `if not ...super_user...:` followed by raise / 403 / return Response;
   - non-API: GET /, GET /health, POST /mock_catalog_add, /internal/*, *_dead_route handlers.
"""

from __future__ import annotations

import argparse
import collections
import copy
import inspect
import json
import re
import sys

M = ("get", "post", "put", "patch", "delete")
GUARD_DEP = re.compile(
    r"super_user|nexla_admin|infra|require_admin|require_user_admin|require_data_admin"
)
SRC_ADMIN = re.compile(
    r"\b(require_nexla_admin|is_infrastructure_user|infrastructure_user|super_user_read_only)\b"
)
SU_CHECK = re.compile(r"if not (?:await )?[\w.]*(super_user_|is_super_user)")
NON_API = {"GET /", "GET /health", "POST /mock_catalog_add"}
# Super-user checks that live below the handler (in the module layer), so the source scan cannot see them.
ADMIN_EXPLICIT = {"PUT /users/{}/transfer"}


def strip(p: str) -> str:
    return (p[len("/api/v1") :] or "/") if p.startswith("/api/v1") else p


def norm(p: str) -> str:
    return re.sub(r"\{[^}]*\}", "{}", p).rstrip("/") or "/"


def dep_names(dependant, acc):
    for sub in dependant.dependencies:
        if sub.call is not None:
            acc.add(getattr(sub.call, "__name__", str(sub.call)))
        dep_names(sub, acc)
    return acc


def is_admin_only(route) -> bool:
    if any(GUARD_DEP.search(n) for n in dep_names(route.dependant, set())):
        return True
    try:
        src = inspect.getsource(route.endpoint).splitlines()
    except (OSError, TypeError):
        return False
    if SRC_ADMIN.search("\n".join(src)):
        return True
    # A super-user gate is a TOP-LEVEL `if` in the handler body (indent = def indent + 4) with
    # no other condition, followed by a rejection. A check nested in a branch does not gate the
    # whole route.
    def_line = next(
        i for i, ln in enumerate(src) if re.match(r"\s*(async\s+)?def\b", ln)
    )
    body_indent = len(src[def_line]) - len(src[def_line].lstrip()) + 4
    for i, line in enumerate(src[def_line + 1 :], start=def_line + 1):
        indent = len(line) - len(line.lstrip())
        if indent != body_indent or not SU_CHECK.search(line):
            continue
        head = line.split("#")[0]
        nxt = " ".join(src[i + 1 : i + 5])
        if (
            " and " not in head
            and " or " not in head
            and re.search(
                r"raise|403|404|FORBIDDEN|401|return Response|_forbidden\(", nxt
            )
        ):
            return True
    return False


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    ap.add_argument(
        "--excluded-out", help="optional: write the dropped 'METHOD /path' keys as JSON"
    )
    args = ap.parse_args()
    from app.main import app  # noqa: PLC0415  (backend import, needs the backend env)

    excluded, names = set(), {}
    for r in app.routes:
        if not hasattr(r, "dependant"):
            continue
        admin = is_admin_only(r)
        for meth in r.methods or []:
            key = f"{meth} {norm(strip(r.path))}"
            names[(meth.lower(), strip(r.path))] = r.name
            if admin:
                excluded.add(key)

    spec = app.openapi()
    merged: dict = collections.OrderedDict()
    for p in sorted(spec["paths"], key=lambda p: (not p.startswith("/api/v1"), p)):
        sp = strip(p)
        for m, op in spec["paths"][p].items():
            if m in M:
                merged.setdefault(sp, {}).setdefault(m, copy.deepcopy(op))
            elif m == "parameters":
                merged.setdefault(sp, {}).setdefault("parameters", op)

    keys = [(sp, m) for sp, ops in merged.items() for m in ops if m in M]
    base = {}
    for sp, m in keys:
        res = next((s for s in sp.split("/") if s and not s.startswith("{")), "root")
        base[(sp, m)] = (res, names.get((m, sp)) or merged[sp][m].get("operationId"))
    count = collections.Counter(n for _, n in base.values())
    seen: collections.Counter = collections.Counter()
    for (sp, m), (res, n) in base.items():
        oid = n if count[n] == 1 else f"{res}_{n}"
        seen[oid] += 1
        if seen[oid] > 1:
            oid = f"{oid}_{m}" if seen[oid] == 2 else f"{oid}_{m}_{seen[oid]}"
        merged[sp][m]["operationId"] = re.sub(r"[^A-Za-z0-9_]", "_", oid)

    public, dropped = {}, []
    for sp, ops in merged.items():
        keep = {}
        for m, op in ops.items():
            if m == "parameters":
                keep[m] = op
                continue
            key = f"{m.upper()} {norm(sp)}"
            oid = op["operationId"]
            if (
                key in excluded
                or key in NON_API
                or key in ADMIN_EXPLICIT
                or sp.startswith("/internal")
                or "_dead_route" in oid
            ):
                dropped.append(key)
                continue
            keep[m] = op
        if any(k != "parameters" for k in keep):
            public[sp] = keep

    out = {k: v for k, v in spec.items() if k != "paths"}
    out["info"] = {
        **spec.get("info", {}),
        "description": "Derived from admin-api-python app.openapi(); /api/v1 prefix stripped; "
        "operationIds from route function names.",
    }
    out["paths"] = public
    with open(args.out, "w") as fh:
        json.dump(out, fh, indent=1)
        fh.write("\n")
    if args.excluded_out:
        with open(args.excluded_out, "w") as fh:
            json.dump(sorted(set(dropped)), fh, indent=1)
            fh.write("\n")
    n = sum(1 for o in public.values() for m in o if m != "parameters")
    print(f"public operations: {n}; dropped: {len(dropped)}", file=sys.stderr)


if __name__ == "__main__":
    main()
