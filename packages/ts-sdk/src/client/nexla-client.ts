import createClient, { type Client } from "openapi-fetch";
import type { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers";
import type { paths } from "../generated/schema.js";
import { AuthenticationError, NexlaError, errorFromResponse } from "../errors.js";
import { AccessTokenAuthProvider } from "../auth/access-token.js";
import { ServiceKeyAuthProvider } from "../auth/service-key.js";
import type { AuthProvider } from "../auth/types.js";
import { createFetchWithRetry, type HttpOptions, type RetryOptions } from "./http.js";
import type { RequestOptions } from "./types.js";
import type { OperationData, OperationId, OperationInit } from "./operation-types.js";
import { createGeneratedResources, type GeneratedResourceClients } from "../resources/generated/index.js";
import { WebhooksClient } from "../webhooks/index.js";

export interface NexlaClientOptions {
  serviceKey?: string;
  accessToken?: string;
  baseUrl?: string;
  apiVersion?: string;
  tokenRefreshMargin?: number;
  retry?: RetryOptions;
  /** Timeout for each HTTP attempt, in ms. Default 60000. */
  timeoutMs?: number;
  fetch?: typeof fetch;
  userAgent?: string;
  webhookApiKey?: string;
}

export class NexlaClient {
  readonly raw: Client<paths>;
  readonly baseUrl: string;
  readonly apiVersion: string;
  readonly acceptHeader: string;
  readonly authProvider: AuthProvider;
  readonly webhooks?: WebhooksClient;


  constructor(options: NexlaClientOptions = {}) {
    const serviceKey = options.serviceKey ?? process.env.NEXLA_SERVICE_KEY;
    const accessToken = options.accessToken ?? process.env.NEXLA_ACCESS_TOKEN;

    if (!serviceKey && !accessToken) {
      throw new NexlaError(
        "Either serviceKey or accessToken must be provided (or set NEXLA_SERVICE_KEY/NEXLA_ACCESS_TOKEN)."
      );
    }
    if (serviceKey && accessToken) {
      throw new NexlaError("Cannot provide both serviceKey and accessToken.");
    }

    this.baseUrl = (options.baseUrl ?? process.env.NEXLA_API_URL ?? "https://dataops.nexla.io/nexla-api").replace(/\/$/, "");
    this.apiVersion = options.apiVersion ?? "v1";
    this.acceptHeader = `application/vnd.nexla.api.${this.apiVersion}+json`;

    const fetchImpl = options.fetch ?? globalThis.fetch;
    const httpOptions: HttpOptions = {
      ...(options.retry ?? {}),
      ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {})
    };
    const fetchWithRetry = createFetchWithRetry(fetchImpl, httpOptions);
    // Token calls use the same retry and timeout policy as API calls.
    const authFetch: typeof fetch = (input, init) =>
      fetchWithRetry(input instanceof Request ? input : new Request(input, init));

    if (serviceKey) {
      const authOptions = {
        serviceKey,
        baseUrl: this.baseUrl,
        apiVersion: this.apiVersion,
        tokenRefreshMargin: options.tokenRefreshMargin ?? 3600,
        fetchFn: authFetch
      } as const;
      const provider = new ServiceKeyAuthProvider(
        options.userAgent ? { ...authOptions, userAgent: options.userAgent } : authOptions
      );
      this.authProvider = provider;
    } else {
      this.authProvider = new AccessTokenAuthProvider(accessToken ?? "");
    }

    this.raw = createClient<paths>({ baseUrl: this.baseUrl, fetch: fetchWithRetry });

    this.raw.use({
      onRequest: async ({ request }) => {
        const headers = new Headers(request.headers);
        const skipAuth = headers.get("x-nexla-skip-auth") === "true";
        headers.delete("x-nexla-skip-auth");

        if (!headers.has("Accept")) headers.set("Accept", this.acceptHeader);
        if (!headers.has("Content-Type") && request.method !== "GET" && request.method !== "HEAD") {
          headers.set("Content-Type", "application/json");
        }
        if (options.userAgent) {
          headers.set("User-Agent", options.userAgent);
        }
        if (!skipAuth) {
          const token = await this.authProvider.getAccessToken();
          headers.set("Authorization", `Bearer ${token}`);
        }

        return new Request(request, { headers });
      }
    });

    if (options.webhookApiKey) {
      this.webhooks = new WebhooksClient({ apiKey: options.webhookApiKey, fetch: fetchImpl });
    }

    Object.assign(this, createGeneratedResources(this));
  }

  async request<Method extends HttpMethod, Path extends PathsWithMethod<paths, Method>>(
    method: Method,
    path: Path,
    init?: RequestOptions
  ): Promise<unknown> {
    const execute = async (): Promise<unknown> => {
      const result = await this.invoke(method, path, init);
      const { data, error, response } = result as { data?: unknown; error?: unknown; response?: Response };
      // openapi-fetch returns an empty string as `error` for an empty error body,
      // so decide on the HTTP status, not on the error value.
      const res = response ?? new Response(null, { status: 500 });
      if (!res.ok) {
        throw this.mapError(error, res, method, path as string);
      }
      return data;
    };

    try {
      return await execute();
    } catch (error) {
      // Only a 401 means the token is stale. A 423 (locked account) is not refreshed.
      if (error instanceof AuthenticationError && error.statusCode === 401 && this.authProvider.isRefreshable) {
        await this.authProvider.refreshAccessToken();
        return await execute();
      }
      throw error;
    }
  }

  async requestOperation<OpId extends OperationId>(
    _operationId: OpId,
    method: HttpMethod,
    path: string,
    init?: OperationInit<OpId>
  ): Promise<OperationData<OpId>> {
    const data = await this.request(method, path as PathsWithMethod<paths, HttpMethod>, init as RequestOptions);
    return data as OperationData<OpId>;
  }

  async logout(): Promise<void> {
    await this.authProvider.logout();
  }

  private invoke<Method extends HttpMethod, Path extends PathsWithMethod<paths, Method>>(
    method: Method,
    path: Path,
    init?: RequestOptions
  ) {
    switch (method) {
      case "get":
        return this.raw.GET(path as never, init as never);
      case "post":
        return this.raw.POST(path as never, init as never);
      case "put":
        return this.raw.PUT(path as never, init as never);
      case "patch":
        return this.raw.PATCH(path as never, init as never);
      case "delete":
        return this.raw.DELETE(path as never, init as never);
      case "options":
        return this.raw.OPTIONS(path as never, init as never);
      case "head":
        return this.raw.HEAD(path as never, init as never);
      case "trace":
        return this.raw.TRACE(path as never, init as never);
      default:
        throw new NexlaError(`Unsupported HTTP method: ${method}`);
    }
  }

  private mapError(errorBody: unknown, response: Response, method?: string, path?: string): NexlaError {
    return errorFromResponse(response, errorBody, { method, path, url: response.url || undefined });
  }
}

export interface NexlaClient extends GeneratedResourceClients {}
