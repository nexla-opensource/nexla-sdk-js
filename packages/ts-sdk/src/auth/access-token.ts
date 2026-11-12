import { AuthenticationError, NexlaError } from "../errors.js";
import type { AuthProvider } from "./types.js";

export class AccessTokenAuthProvider implements AuthProvider {
  readonly isRefreshable = false;
  private readonly accessToken: string;

  constructor(accessToken: string) {
    if (!accessToken) {
      throw new AuthenticationError("Access token must be provided");
    }
    this.accessToken = accessToken;
  }

  getAccessToken(): Promise<string> {
    return Promise.resolve(this.accessToken);
  }

  refreshAccessToken(): Promise<void> {
    return Promise.reject(new AuthenticationError("Direct access tokens cannot be refreshed"));
  }

  switchOrg(): Promise<void> {
    return Promise.reject(
      new NexlaError(
        "switchOrg needs a credential that exchanges for tokens (apiKey, serviceKey, or email and password).",
      ),
    );
  }

  async logout(): Promise<void> {
    // No-op for direct tokens.
  }
}
