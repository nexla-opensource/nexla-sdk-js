import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class SignOnOptionsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Index Sign On Options */
  async index_sign_on_options(init?: OperationInit<"index_sign_on_options">): Promise<OperationData<"index_sign_on_options">> {
    return this.client.requestOperation("index_sign_on_options", "get", "/sign_on_options", init);
  }
}