import { NexlaConnectionError, NexlaTimeoutError, isRecord, parseRetryAfterSeconds } from "../errors.js";

export interface RetryOptions {
  /** Retries after the first attempt. Default 3. */
  maxRetries?: number;
  /** Base backoff in ms. Default 500. The wait before retry n is min(maxBackoffMs, backoffMs * 2^(n-1)) plus 0-100 ms. */
  backoffMs?: number;
  /** Backoff cap in ms. Default 8000. */
  maxBackoffMs?: number;
  /** Statuses retried for retryMethods. Default [502, 503, 504]. 429 is retried for every method. */
  retryOn?: number[];
  /** Methods retried after a retryOn status, a timeout, or a reset after send. Default GET, HEAD, OPTIONS, PUT, DELETE. */
  retryMethods?: string[];
  /** Replaces the wait between attempts. Intended for tests. */
  sleep?: (ms: number, signal?: AbortSignal) => Promise<void>;
}

export interface HttpOptions extends RetryOptions {
  /** Timeout for each attempt, in ms. Default 60000. */
  timeoutMs?: number;
}

const DEFAULT_RETRY_ON = [502, 503, 504];
const DEFAULT_RETRY_METHODS = ["GET", "HEAD", "OPTIONS", "PUT", "DELETE"];
const MAX_RETRY_WAIT_SECONDS = 60;
// shortcut: connect failures are recognized by Node error codes. Other runtimes
// fall back to idempotent-only retry. Upgrade when the runtime exposes connect-phase errors.
const CONNECT_ERROR_CODES = new Set(["ECONNREFUSED", "ENOTFOUND", "EAI_AGAIN", "ENETUNREACH", "EHOSTUNREACH"]);

export const createFetchWithRetry = (
  baseFetch: typeof fetch,
  options: HttpOptions = {}
): ((input: Request) => Promise<Response>) => {
  const maxRetries = options.maxRetries ?? 3;
  const backoffMs = options.backoffMs ?? 500;
  const maxBackoffMs = options.maxBackoffMs ?? 8000;
  const retryOn = options.retryOn ?? DEFAULT_RETRY_ON;
  const retryMethods = new Set((options.retryMethods ?? DEFAULT_RETRY_METHODS).map((method) => method.toUpperCase()));
  const timeoutMs = options.timeoutMs ?? 60000;
  const sleep = options.sleep ?? defaultSleep;

  const backoff = (retriesDone: number): number =>
    Math.min(maxBackoffMs, backoffMs * 2 ** retriesDone) + Math.random() * 100;

  return async (original: Request): Promise<Response> => {
    const idempotent = retryMethods.has(original.method.toUpperCase());
    let retriesDone = 0;

    while (true) {
      const canRetry = retriesDone < maxRetries;
      let response: Response;
      try {
        response = await sendOnce(baseFetch, original, timeoutMs);
      } catch (error) {
        if (error instanceof NexlaTimeoutError) {
          if (!idempotent || !canRetry) throw error;
        } else if (original.signal.aborted) {
          throw error;
        } else {
          const connect = isConnectError(error);
          if (!canRetry || (!connect && !idempotent)) {
            throw new NexlaConnectionError(`Connection failed: ${messageOf(error)}`, {
              method: original.method,
              url: original.url,
              ...(error instanceof Error ? { originalError: error } : {})
            });
          }
        }
        await sleep(backoff(retriesDone), original.signal);
        retriesDone += 1;
        continue;
      }

      if (response.status === 429) {
        const waitSeconds = await retryAfterSeconds(response);
        if (!canRetry || (waitSeconds !== undefined && waitSeconds > MAX_RETRY_WAIT_SECONDS)) return response;
        await sleep(waitSeconds === undefined ? backoff(retriesDone) : waitSeconds * 1000, original.signal);
        retriesDone += 1;
        continue;
      }

      if (idempotent && canRetry && retryOn.includes(response.status)) {
        await sleep(backoff(retriesDone), original.signal);
        retriesDone += 1;
        continue;
      }

      return response;
    }
  };
};

/** One attempt, bounded by timeoutMs. The caller's signal, if any, still cancels it. */
const sendOnce = async (baseFetch: typeof fetch, original: Request, timeoutMs: number): Promise<Response> => {
  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  const forwardAbort = () => controller.abort(original.signal.reason);
  if (original.signal.aborted) forwardAbort();
  original.signal.addEventListener("abort", forwardAbort, { once: true });

  try {
    return await baseFetch(new Request(original.clone(), { signal: controller.signal }));
  } catch (error) {
    if (timedOut) {
      throw new NexlaTimeoutError(`Request timed out after ${timeoutMs} ms`, {
        method: original.method,
        url: original.url,
        ...(error instanceof Error ? { originalError: error } : {})
      });
    }
    throw error;
  } finally {
    clearTimeout(timer);
    original.signal.removeEventListener("abort", forwardAbort);
  }
};

/** Wait time from a 429: body error.retry_after, then Retry-After (seconds or HTTP date). */
const retryAfterSeconds = async (response: Response): Promise<number | undefined> => {
  const text = await response.clone().text().catch(() => "");
  try {
    const parsed: unknown = JSON.parse(text);
    if (isRecord(parsed) && isRecord(parsed["error"])) {
      const raw = parsed["error"]["retry_after"];
      if (typeof raw === "number" && Number.isFinite(raw)) return raw;
    }
  } catch {
    // Not JSON: fall through to the header.
  }
  return parseRetryAfterSeconds(response.headers.get("retry-after"));
};

const isConnectError = (error: unknown): boolean => {
  let current: unknown = error;
  for (let depth = 0; depth < 3 && isRecord(current); depth += 1) {
    const code = current["code"];
    if (typeof code === "string") return CONNECT_ERROR_CODES.has(code);
    current = current["cause"];
  }
  return false;
};

const messageOf = (error: unknown): string => (error instanceof Error ? error.message : String(error));

const defaultSleep = (ms: number, signal?: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason as Error);
      return;
    }
    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason as Error);
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
