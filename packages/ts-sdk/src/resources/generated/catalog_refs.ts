import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class CatalogRefsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Bulk Update Catalog Refs */
  async bulk_update_catalog_refs(init?: OperationInit<"bulk_update_catalog_refs">): Promise<OperationData<"bulk_update_catalog_refs">> {
    return this.client.requestOperation("bulk_update_catalog_refs", "put", "/catalog_refs/bulk_update_refs", init);
  }
}