import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class VendorsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_vendors">): Promise<OperationData<"list_vendors">> {
    return this.client.requestOperation("list_vendors", "get", "/vendors", init);
  }

  async get(init?: OperationInit<"get_vendor">): Promise<OperationData<"get_vendor">> {
    return this.client.requestOperation("get_vendor", "get", "/vendors/{vendor_id}", init);
  }

  /** Get Vendor */
  async get_vendor(init?: OperationInit<"get_vendor">): Promise<OperationData<"get_vendor">> {
    return this.client.requestOperation("get_vendor", "get", "/vendors/{vendor_id}", init);
  }

  /** Get Vendor Audit Log */
  async get_vendor_audit_log(init?: OperationInit<"get_vendor_audit_log">): Promise<OperationData<"get_vendor_audit_log">> {
    return this.client.requestOperation("get_vendor_audit_log", "get", "/vendors/{resource_id}/audit_log", init);
  }

  /** List Vendors */
  async list_vendors(init?: OperationInit<"list_vendors">): Promise<OperationData<"list_vendors">> {
    return this.client.requestOperation("list_vendors", "get", "/vendors", init);
  }

  /** Add Vendor Docs */
  async vendors_add_resource_docs(init?: OperationInit<"vendors_add_resource_docs">): Promise<OperationData<"vendors_add_resource_docs">> {
    return this.client.requestOperation("vendors_add_resource_docs", "put", "/vendors/{resource_id}/docs", init);
  }

  /** List Vendor Docs */
  async vendors_list_resource_docs(init?: OperationInit<"vendors_list_resource_docs">): Promise<OperationData<"vendors_list_resource_docs">> {
    return this.client.requestOperation("vendors_list_resource_docs", "get", "/vendors/{resource_id}/docs", init);
  }

  /** Remove Vendor Docs */
  async vendors_remove_resource_docs(init?: OperationInit<"vendors_remove_resource_docs">): Promise<OperationData<"vendors_remove_resource_docs">> {
    return this.client.requestOperation("vendors_remove_resource_docs", "delete", "/vendors/{resource_id}/docs", init);
  }

  /** Reset Vendor Docs */
  async vendors_reset_resource_docs(init?: OperationInit<"vendors_reset_resource_docs">): Promise<OperationData<"vendors_reset_resource_docs">> {
    return this.client.requestOperation("vendors_reset_resource_docs", "post", "/vendors/{resource_id}/docs", init);
  }
}