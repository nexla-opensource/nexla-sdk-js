export type ErrorDetails = Record<string, unknown>;

export interface NexlaErrorOptions {
  details?: ErrorDetails;
  operation?: string;
  resourceType?: string;
  resourceId?: string;
  step?: string;
  context?: ErrorDetails;
  originalError?: Error;
  statusCode?: number;
  /** @deprecated Use `body`. Kept as the same parsed error body. */
  response?: unknown;
  body?: unknown;
  errorCode?: string | undefined;
  requestId?: string | undefined;
  method?: string | undefined;
  url?: string | undefined;
}

export class NexlaError extends Error {
  readonly details: ErrorDetails;
  readonly operation: string | undefined;
  readonly resourceType: string | undefined;
  readonly resourceId: string | undefined;
  readonly step: string | undefined;
  readonly context: ErrorDetails;
  readonly originalError: Error | undefined;
  readonly statusCode: number | undefined;
  /** @deprecated Use `body`. */
  readonly response: unknown | undefined;
  /** Parsed JSON body, the text body, or `undefined` when the body was empty. */
  readonly body: unknown;
  /** Backend error code: `error_code`, or `error.type` on 429 responses. */
  readonly errorCode: string | undefined;
  /** Value of the `X-Request-Id` response header. */
  readonly requestId: string | undefined;
  readonly method: string | undefined;
  readonly url: string | undefined;

  constructor(message: string, options: NexlaErrorOptions = {}) {
    super(message);
    this.name = "NexlaError";
    this.details = options.details ?? {};
    this.operation = options.operation;
    this.resourceType = options.resourceType;
    this.resourceId = options.resourceId;
    this.step = options.step;
    this.context = options.context ?? {};
    this.originalError = options.originalError;
    this.statusCode = options.statusCode;
    this.response = options.response;
    this.body = options.body ?? options.response;
    this.errorCode = options.errorCode;
    this.requestId = options.requestId;
    this.method = options.method;
    this.url = options.url;
  }

  getErrorSummary(): Record<string, unknown> {
    return {
      message: this.message,
      step: this.step,
      operation: this.operation,
      resource_type: this.resourceType,
      resource_id: this.resourceId,
      details: this.details,
      context: this.context,
      status_code: this.statusCode,
      response: this.response,
      original_error: this.originalError?.message
    };
  }
}

export class AuthenticationError extends NexlaError {
  constructor(message = "Authentication failed", options: NexlaErrorOptions = {}) {
    super(message, { operation: "authentication", ...options });
    this.name = "AuthenticationError";
  }
}

/** HTTP 423. The account is locked. Not refreshed like a 401. */
export class AccountLockedError extends AuthenticationError {
  constructor(message = "Account locked", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "AccountLockedError";
  }
}

export class AuthorizationError extends NexlaError {
  constructor(message = "Authorization failed", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "AuthorizationError";
  }
}

export class NotFoundError extends NexlaError {
  constructor(message = "Resource not found", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "NotFoundError";
  }
}

export class ValidationError extends NexlaError {
  constructor(message = "Validation failed", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "ValidationError";
  }
}

export class RateLimitError extends NexlaError {
  readonly retryAfter: number | undefined;

  constructor(message = "Rate limit exceeded", options: NexlaErrorOptions & { retryAfter?: number } = {}) {
    super(message, options);
    this.name = "RateLimitError";
    this.retryAfter = options.retryAfter;
  }
}

export class ServerError extends NexlaError {
  constructor(message = "Server error", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "ServerError";
  }
}

export class ResourceConflictError extends NexlaError {
  constructor(message = "Resource conflict", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "ResourceConflictError";
  }
}

/** The request timed out before a response arrived. */
export class NexlaTimeoutError extends NexlaError {
  constructor(message = "Request timed out", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "NexlaTimeoutError";
  }
}

/** The connection failed before a response arrived. */
export class NexlaConnectionError extends NexlaError {
  constructor(message = "Connection failed", options: NexlaErrorOptions = {}) {
    super(message, options);
    this.name = "NexlaConnectionError";
  }
}

export const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

/**
 * Read an error response body as text, then parse it as JSON when possible.
 * Returns `undefined` for an empty body and the raw text for a non-JSON body.
 */
export const readErrorBody = async (response: Response): Promise<unknown> => {
  const text = await response.text().catch(() => "");
  if (text.trim() === "") return undefined;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
};

/**
 * Parse a Retry-After value. Accepts seconds or an HTTP date.
 * Returns seconds from `now`, or `undefined` when the value is not usable.
 */
export const parseRetryAfterSeconds = (value: string | null | undefined, now: number = Date.now()): number | undefined => {
  if (!value || value.trim() === "") return undefined;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds);
  const date = Date.parse(value);
  if (Number.isFinite(date)) return Math.max(0, (date - now) / 1000);
  return undefined;
};

const messageOf = (body: unknown, response: Response): string => {
  if (typeof body === "string" && body.trim() !== "") return body.trim();
  if (isRecord(body)) {
    const message = body["message"];
    if (typeof message === "string" && message !== "") return message;
    const error = body["error"];
    if (isRecord(error) && typeof error["detail"] === "string" && error["detail"] !== "") return error["detail"];
    if (typeof error === "string" && error !== "") return error;
    const detail = body["detail"];
    if (typeof detail === "string" && detail !== "") return detail;
  }
  return [response.status, response.statusText].filter((part) => part !== "" && part !== undefined).join(" ");
};

const errorCodeOf = (body: unknown): string | undefined => {
  if (!isRecord(body)) return undefined;
  const code = body["error_code"];
  if (typeof code === "string") return code;
  const error = body["error"];
  if (isRecord(error) && typeof error["type"] === "string") return error["type"];
  return undefined;
};

const retryAfterOf = (body: unknown, response: Response): number | undefined => {
  if (isRecord(body) && isRecord(body["error"])) {
    const raw = body["error"]["retry_after"];
    if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  }
  return parseRetryAfterSeconds(response.headers.get("retry-after"));
};

/**
 * Build the SDK error for a non-2xx response.
 * `body` is the parsed body (JSON value, text, or undefined when empty).
 * Pass `request.url` only when it carries no secrets.
 */
export const errorFromResponse = (
  response: Response,
  body: unknown,
  request: { method?: string | undefined; path?: string | undefined; url?: string | undefined } = {}
): NexlaError => {
  const errorBody = typeof body === "string" && body.trim() === "" ? undefined : body;
  const message = messageOf(errorBody, response);
  const method = request.method?.toUpperCase();
  const options: NexlaErrorOptions = {
    statusCode: response.status,
    response: errorBody,
    body: errorBody,
    errorCode: errorCodeOf(errorBody),
    requestId: response.headers.get("x-request-id") ?? undefined,
    method,
    url: request.url,
    context: { method, path: request.path, url: request.url, status_code: response.status }
  };

  switch (response.status) {
    case 400:
    case 422:
      return new ValidationError(message, options);
    case 401:
      return new AuthenticationError(message, options);
    case 403:
      return new AuthorizationError(message, options);
    case 404:
      return new NotFoundError(message, options);
    case 409:
      return new ResourceConflictError(message, options);
    case 423:
      return new AccountLockedError(message, options);
    case 429: {
      const retryAfter = retryAfterOf(errorBody, response);
      return new RateLimitError(message, retryAfter === undefined ? options : { ...options, retryAfter });
    }
    default:
      return new ServerError(message, options);
  }
};
