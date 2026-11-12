import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class GtokenResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Google Token */
  async gtoken_create_google_token(init?: OperationInit<"gtoken_create_google_token">): Promise<OperationData<"gtoken_create_google_token">> {
    return this.client.requestOperation("gtoken_create_google_token", "put", "/gtoken", init);
  }

  /** Google Token */
  async gtoken_create_google_token_post(init?: OperationInit<"gtoken_create_google_token_post">): Promise<OperationData<"gtoken_create_google_token_post">> {
    return this.client.requestOperation("gtoken_create_google_token_post", "post", "/gtoken", init);
  }
}