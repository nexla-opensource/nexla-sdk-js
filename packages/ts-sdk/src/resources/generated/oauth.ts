import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class OauthResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Oauth Callback */
  async oauth_callback(init?: OperationInit<"oauth_callback">): Promise<OperationData<"oauth_callback">> {
    return this.client.requestOperation("oauth_callback", "get", "/oauth/callback", init);
  }

  /** Oauth Redirect */
  async oauth_redirect(init?: OperationInit<"oauth_redirect">): Promise<OperationData<"oauth_redirect">> {
    return this.client.requestOperation("oauth_redirect", "get", "/oauth/redirect", init);
  }

  /** Oauth Start */
  async oauth_start(init?: OperationInit<"oauth_start">): Promise<OperationData<"oauth_start">> {
    return this.client.requestOperation("oauth_start", "post", "/oauth/start", init);
  }
}