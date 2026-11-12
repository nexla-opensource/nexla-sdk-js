import { AuthenticationError, NexlaError, errorFromResponse, isRecord, readErrorBody } from "../errors.js";
import type { AuthProvider, TokenResponse } from "./types.js";

export interface ServiceKeyAuthOptions {
  /** Sent as `Authorization: Basic <value>` on POST /token. Already encoded for email and password login. */
  basicCredential: string;
  baseUrl: string;
  tokenRefreshMargin: number;
  fetchFn: typeof fetch;
  userAgent?: string;
  /** Sent as X-Nexla-Dataplane on POST /token only. */
  dataplane?: string;
}

const DEFAULT_TOKEN_LIFETIME_SECONDS = 86400;

/** Exchanges a Basic credential (service key, API key, or email and password) for a session token. */
export class ServiceKeyAuthProvider implements AuthProvider {
  readonly isRefreshable = true;

  private readonly basicCredential: string;
  private readonly baseUrl: string;
  private readonly tokenRefreshMargin: number;
  private readonly fetchFn: typeof fetch;
  private readonly userAgent: string | undefined;
  private readonly dataplane: string | undefined;

  private accessToken: string | undefined;
  private tokenExpiry = 0;
  private pendingToken: Promise<void> | undefined;

  constructor(options: ServiceKeyAuthOptions) {
    this.basicCredential = options.basicCredential;
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.tokenRefreshMargin = options.tokenRefreshMargin;
    this.fetchFn = options.fetchFn;
    this.userAgent = options.userAgent;
    this.dataplane = options.dataplane;
  }

  async getAccessToken(): Promise<string> {
    if (!this.accessToken || this.isTokenNearExpiry()) {
      await this.obtainSessionToken();
    }

    if (!this.accessToken) {
      throw new AuthenticationError("No access token available after authentication");
    }

    return this.accessToken;
  }

  async refreshAccessToken(): Promise<void> {
    await this.obtainSessionToken();
  }

  async switchOrg(orgId: number): Promise<void> {
    const token = await this.getAccessToken();
    const url = `${this.baseUrl}/token/refresh?org_id=${encodeURIComponent(String(orgId))}`;
    const response = await this.fetchFn(url, {
      method: "POST",
      headers: this.headers({ Authorization: `Bearer ${token}` }),
    });

    if (!response.ok) {
      throw errorFromResponse(response, await readErrorBody(response), { method: "POST", path: "/token/refresh", url });
    }

    this.applyToken(await parseTokenResponse(response));
  }

  async logout(): Promise<void> {
    if (!this.accessToken) return;

    try {
      await this.fetchFn(`${this.baseUrl}/token/logout`, {
        method: "POST",
        headers: this.headers({ Authorization: `Bearer ${this.accessToken}` }),
      });
    } catch {
      // Best-effort logout; ignore errors.
    } finally {
      this.accessToken = undefined;
      this.tokenExpiry = 0;
    }
  }

  private isTokenNearExpiry(): boolean {
    if (!this.tokenExpiry) return true;
    const now = Date.now() / 1000;
    return this.tokenExpiry - now < this.tokenRefreshMargin;
  }

  /** Concurrent callers share one in-flight /token request. */
  private obtainSessionToken(): Promise<void> {
    if (!this.pendingToken) {
      this.pendingToken = this.requestSessionToken().finally(() => {
        this.pendingToken = undefined;
      });
    }
    return this.pendingToken;
  }

  private async requestSessionToken(): Promise<void> {
    const headers = this.headers({ Authorization: `Basic ${this.basicCredential}`, "Content-Length": "0" });
    if (this.dataplane) headers["X-Nexla-Dataplane"] = this.dataplane;

    const response = await this.fetchFn(`${this.baseUrl}/token`, { method: "POST", headers });

    if (!response.ok) {
      throw errorFromResponse(response, await readErrorBody(response), {
        method: "POST",
        path: "/token",
        url: `${this.baseUrl}/token`,
      });
    }

    this.applyToken(await parseTokenResponse(response));
  }

  private applyToken(token: TokenResponse): void {
    this.accessToken = token.access_token;
    this.tokenExpiry = Date.now() / 1000 + (token.expires_in ?? DEFAULT_TOKEN_LIFETIME_SECONDS);
  }

  private headers(extra: Record<string, string>): Record<string, string> {
    const headers: Record<string, string> = { Accept: "application/json", ...extra };
    if (this.userAgent) headers["User-Agent"] = this.userAgent;
    return headers;
  }
}

const parseTokenResponse = async (response: Response): Promise<TokenResponse> => {
  const data = await safeParseJson(response);
  if (!isRecord(data)) {
    throw new NexlaError("Invalid token response format", { response: data });
  }

  const accessToken = data["access_token"];
  if (typeof accessToken !== "string") {
    throw new NexlaError("Missing access token in response", { response: data });
  }

  return { ...data, access_token: accessToken };
};

const safeParseJson = async (response: Response): Promise<unknown> => {
  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) {
    return undefined;
  }
  try {
    return await response.json();
  } catch {
    return undefined;
  }
};
