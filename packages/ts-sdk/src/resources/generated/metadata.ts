import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class MetadataResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** IDP Metadata (no uid) */
  async metadata_get_idp_metadata(init?: OperationInit<"metadata_get_idp_metadata">): Promise<OperationData<"metadata_get_idp_metadata">> {
    return this.client.requestOperation("metadata_get_idp_metadata", "get", "/metadata", init);
  }

  /** IDP Metadata */
  async metadata_get_idp_metadata_get(init?: OperationInit<"metadata_get_idp_metadata_get">): Promise<OperationData<"metadata_get_idp_metadata_get">> {
    return this.client.requestOperation("metadata_get_idp_metadata_get", "get", "/metadata/{uid}", init);
  }
}