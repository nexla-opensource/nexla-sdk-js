import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class StatusResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Status With Authentication */
  async status_with_authentication(init?: OperationInit<"status_with_authentication">): Promise<OperationData<"status_with_authentication">> {
    return this.client.requestOperation("status_with_authentication", "get", "/status", init);
  }
}