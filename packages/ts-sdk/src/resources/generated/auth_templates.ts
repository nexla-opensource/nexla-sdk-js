import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class AuthTemplatesResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_auth_templates">): Promise<OperationData<"list_auth_templates">> {
    return this.client.requestOperation("list_auth_templates", "get", "/auth_templates", init);
  }

  async get(init?: OperationInit<"get_auth_template">): Promise<OperationData<"get_auth_template">> {
    return this.client.requestOperation("get_auth_template", "get", "/auth_templates/{auth_template_id}", init);
  }

  /** Get Auth Template */
  async get_auth_template(init?: OperationInit<"get_auth_template">): Promise<OperationData<"get_auth_template">> {
    return this.client.requestOperation("get_auth_template", "get", "/auth_templates/{auth_template_id}", init);
  }

  /** Get Auth Template Audit Log */
  async get_auth_template_audit_log(init?: OperationInit<"get_auth_template_audit_log">): Promise<OperationData<"get_auth_template_audit_log">> {
    return this.client.requestOperation("get_auth_template_audit_log", "get", "/auth_templates/{resource_id}/audit_log", init);
  }

  /** List Auth Templates */
  async list_auth_templates(init?: OperationInit<"list_auth_templates">): Promise<OperationData<"list_auth_templates">> {
    return this.client.requestOperation("list_auth_templates", "get", "/auth_templates", init);
  }
}