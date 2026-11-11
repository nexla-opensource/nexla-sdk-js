import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class RootResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Root */
  async root(init?: OperationInit<"root">): Promise<OperationData<"root">> {
    return this.client.requestOperation("root", "get", "/", init);
  }
}