import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class VendorEndpointsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_vendor_endpoints">): Promise<OperationData<"list_vendor_endpoints">> {
    return this.client.requestOperation("list_vendor_endpoints", "get", "/vendor_endpoints", init);
  }

  async get(init?: OperationInit<"get_vendor_endpoint">): Promise<OperationData<"get_vendor_endpoint">> {
    return this.client.requestOperation("get_vendor_endpoint", "get", "/vendor_endpoints/{vendor_endpoint_id}", init);
  }

  /** Get Vendor Endpoint */
  async get_vendor_endpoint(init?: OperationInit<"get_vendor_endpoint">): Promise<OperationData<"get_vendor_endpoint">> {
    return this.client.requestOperation("get_vendor_endpoint", "get", "/vendor_endpoints/{vendor_endpoint_id}", init);
  }

  /** Get Vendor Endpoint Audit Log */
  async get_vendor_endpoint_audit_log(init?: OperationInit<"get_vendor_endpoint_audit_log">): Promise<OperationData<"get_vendor_endpoint_audit_log">> {
    return this.client.requestOperation("get_vendor_endpoint_audit_log", "get", "/vendor_endpoints/{resource_id}/audit_log", init);
  }

  /** List Vendor Endpoints */
  async list_vendor_endpoints(init?: OperationInit<"list_vendor_endpoints">): Promise<OperationData<"list_vendor_endpoints">> {
    return this.client.requestOperation("list_vendor_endpoints", "get", "/vendor_endpoints", init);
  }
}