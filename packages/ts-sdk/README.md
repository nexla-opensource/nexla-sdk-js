# Nexla TypeScript SDK

TypeScript SDK for interacting with the Nexla API.

## Installation

```bash
npm install @nexla/sdk
```

## Authentication

### Service key (recommended)

```ts
import { NexlaClient } from "@nexla/sdk";

const client = new NexlaClient({ serviceKey: process.env.NEXLA_SERVICE_KEY });
```

### Access token

```ts
import { NexlaClient } from "@nexla/sdk";

const client = new NexlaClient({ accessToken: process.env.NEXLA_ACCESS_TOKEN });
```

### API key and email/password

```ts
// API key: sent as Basic <apiKey> on POST /token
const byKey = new NexlaClient({ apiKey: process.env.NEXLA_API_KEY });

// Email and password: sent as Basic base64(email:password[:orgId]) on POST /token
const byLogin = new NexlaClient({ email: "dev@example.com", password: "...", orgId: 3 });

// Switch the session to another org (not available for a direct access token)
await byKey.switchOrg(7);
```

Pass one credential. Two explicit credentials throw. An explicit option takes precedence over an environment variable.

Supported env vars:

- `NEXLA_SERVICE_KEY`
- `NEXLA_API_KEY`
- `NEXLA_ACCESS_TOKEN`
- `NEXLA_API_URL`

### Pagination

```ts
// One page at a time (page and per_page are sent; per_page defaults to 100)
for await (const page of client.paginate("get", "/data_sources", { params: { query: { status: "ACTIVE" } } })) {
  console.log(page.page, page.items.length, page.totalCount);
}

// Every item, across all pages
for await (const source of client.paginateItems("get", "/data_sources")) {
  console.log(source);
}
```

The iterator stops at the last page (`X-Total-Page-Count`), then when there is no `Link` with `rel="Next"`, then when a page is shorter than `per_page`. It never follows the `Link` URL itself.

### Timeouts, retries, and cancellation

- `timeoutMs` (default `60000`) bounds each HTTP attempt. A timeout throws `NexlaTimeoutError`. A connection failure throws `NexlaConnectionError`.
- Retries use `retry: { maxRetries, backoffMs, maxBackoffMs, retryOn, retryMethods }`. POST and PATCH are not retried on 5xx. A 429 is retried for every method. A `Retry-After` wait over 60 seconds is not retried and throws `RateLimitError` with `retryAfter`.
- Each call accepts `signal` (an `AbortSignal`) to cancel it.

## Quick Start

```ts
import { NexlaClient } from "@nexla/sdk";

const client = new NexlaClient({ serviceKey: process.env.NEXLA_SERVICE_KEY });

const flows = await client.flows.list();
const activated = await client.flows.flow_activate_with_flow_id({
  params: { path: { flow_id: 123 } }
});
```

## Raw OpenAPI Access

Use the raw client when you need direct path-level access:

```ts
const { data } = await client.raw.GET("/flows", {
  params: { query: { page: 1 } }
});
```

## Webhooks

```ts
import { WebhooksClient } from "@nexla/sdk";

const webhooks = new WebhooksClient({ apiKey: process.env.NEXLA_WEBHOOK_API_KEY });
await webhooks.sendOneRecord("https://api.nexla.com/webhook/abc", { id: 1 });
```

## SDK Configuration

```ts
const client = new NexlaClient({
  serviceKey: process.env.NEXLA_SERVICE_KEY,
  baseUrl: "https://dataops.nexla.io/nexla-api",
  apiVersion: "v1",
  retry: { maxRetries: 3 },
  userAgent: "my-app/1.2.3"
});
```

## Documentation Map

- [Architecture](../../docs/ts-sdk/architecture.md)
- [API coverage process](../../docs/ts-sdk/api-coverage.md)
- [Integration test policy (non-blocking)](../../docs/ts-sdk/integration-tests.md)

## Refreshing Generated Code

From repository root:

```bash
pnpm -C packages/ts-sdk gen
```

This regenerates the OpenAPI types, the resource map, and the spec metadata under `packages/ts-sdk/src/generated/` and `packages/ts-sdk/src/resources/generated/`.

## License

MIT
