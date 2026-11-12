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

  async create(init?: OperationInit<"create_auth_template">): Promise<OperationData<"create_auth_template">> {
    return this.client.requestOperation("create_auth_template", "post", "/auth_templates", init);
  }

  async get(init?: OperationInit<"get_auth_template">): Promise<OperationData<"get_auth_template">> {
    return this.client.requestOperation("get_auth_template", "get", "/auth_templates/{auth_template_id}", init);
  }

  async update(init?: OperationInit<"auth_templates_update_auth_template_put">): Promise<OperationData<"auth_templates_update_auth_template_put">> {
    return this.client.requestOperation("auth_templates_update_auth_template_put", "put", "/auth_templates/{auth_template_id}", init);
  }

  async delete(init?: OperationInit<"delete_auth_template_endpoint">): Promise<OperationData<"delete_auth_template_endpoint">> {
    return this.client.requestOperation("delete_auth_template_endpoint", "delete", "/auth_templates/{auth_template_id}", init);
  }

  /** Update Auth Template */
  async auth_templates_update_auth_template(init?: OperationInit<"auth_templates_update_auth_template">): Promise<OperationData<"auth_templates_update_auth_template">> {
    return this.client.requestOperation("auth_templates_update_auth_template", "patch", "/auth_templates/{auth_template_id}", init);
  }

  /** Update Auth Template */
  async auth_templates_update_auth_template_put(init?: OperationInit<"auth_templates_update_auth_template_put">): Promise<OperationData<"auth_templates_update_auth_template_put">> {
    return this.client.requestOperation("auth_templates_update_auth_template_put", "put", "/auth_templates/{auth_template_id}", init);
  }

  /** Create Auth Template */
  async create_auth_template(init?: OperationInit<"create_auth_template">): Promise<OperationData<"create_auth_template">> {
    return this.client.requestOperation("create_auth_template", "post", "/auth_templates", init);
  }

  /** Delete Auth Template By Name */
  async delete_auth_template_by_name(init?: OperationInit<"delete_auth_template_by_name">): Promise<OperationData<"delete_auth_template_by_name">> {
    return this.client.requestOperation("delete_auth_template_by_name", "delete", "/auth_templates", init);
  }

  /** Delete Auth Template Endpoint */
  async delete_auth_template_endpoint(init?: OperationInit<"delete_auth_template_endpoint">): Promise<OperationData<"delete_auth_template_endpoint">> {
    return this.client.requestOperation("delete_auth_template_endpoint", "delete", "/auth_templates/{auth_template_id}", init);
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

  /** Update Auth Template By Name */
  async update_auth_template_by_name(init?: OperationInit<"update_auth_template_by_name">): Promise<OperationData<"update_auth_template_by_name">> {
    return this.client.requestOperation("update_auth_template_by_name", "put", "/auth_templates", init);
  }
}