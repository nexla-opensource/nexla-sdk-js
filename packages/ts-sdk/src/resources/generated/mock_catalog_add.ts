import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class MockCatalogAddResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Mock Catalog Add */
  async mock_catalog_add(init?: OperationInit<"mock_catalog_add">): Promise<OperationData<"mock_catalog_add">> {
    return this.client.requestOperation("mock_catalog_add", "post", "/mock_catalog_add", init);
  }
}