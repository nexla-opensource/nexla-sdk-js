/** Response of POST /token and POST /token/refresh. Unknown fields are kept. */
export interface TokenResponse {
  access_token: string;
  token_type?: string;
  /** Lifetime in seconds. The backend default is 86400. */
  expires_in?: number;
  sdk_application_id?: number | null;
  user?: Record<string, unknown> | null;
  org?: Record<string, unknown> | null;
  org_membership?: Record<string, unknown> | null;
  [field: string]: unknown;
}

export interface AuthProvider {
  getAccessToken(): Promise<string>;
  refreshAccessToken(): Promise<void>;
  /** Replaces the session token with one scoped to `orgId`. */
  switchOrg(orgId: number): Promise<void>;
  logout(): Promise<void>;
  readonly isRefreshable: boolean;
}
