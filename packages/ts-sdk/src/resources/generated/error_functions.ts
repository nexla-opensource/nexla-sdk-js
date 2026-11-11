import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ErrorFunctionsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** List Error Functions */
  async list_error_functions(init?: OperationInit<"list_error_functions">): Promise<OperationData<"list_error_functions">> {
    return this.client.requestOperation("list_error_functions", "get", "/error_functions", init);
  }
}