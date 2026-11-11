import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class CustomDataFlowsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_custom_data_flows">): Promise<OperationData<"list_custom_data_flows">> {
    return this.client.requestOperation("list_custom_data_flows", "get", "/custom_data_flows", init);
  }

  async create(init?: OperationInit<"create_custom_data_flow">): Promise<OperationData<"create_custom_data_flow">> {
    return this.client.requestOperation("create_custom_data_flow", "post", "/custom_data_flows", init);
  }

  async get(init?: OperationInit<"show_custom_data_flow">): Promise<OperationData<"show_custom_data_flow">> {
    return this.client.requestOperation("show_custom_data_flow", "get", "/custom_data_flows/{custom_data_flow_id}", init);
  }

  async update(init?: OperationInit<"custom_data_flows_update_custom_data_flow_put">): Promise<OperationData<"custom_data_flows_update_custom_data_flow_put">> {
    return this.client.requestOperation("custom_data_flows_update_custom_data_flow_put", "put", "/custom_data_flows/{custom_data_flow_id}", init);
  }

  async delete(init?: OperationInit<"destroy_custom_data_flow">): Promise<OperationData<"destroy_custom_data_flow">> {
    return this.client.requestOperation("destroy_custom_data_flow", "delete", "/custom_data_flows/{custom_data_flow_id}", init);
  }

  /** Activate Custom Data Flow */
  async activate_custom_data_flow(init?: OperationInit<"activate_custom_data_flow">): Promise<OperationData<"activate_custom_data_flow">> {
    return this.client.requestOperation("activate_custom_data_flow", "put", "/custom_data_flows/{custom_data_flow_id}/activate", init);
  }

  /** Add code containers to Custom Data Flow */
  async add_code_containers(init?: OperationInit<"add_code_containers">): Promise<OperationData<"add_code_containers">> {
    return this.client.requestOperation("add_code_containers", "put", "/custom_data_flows/{custom_data_flow_id}/code_containers", init);
  }

  /** Add data credentials to Custom Data Flow */
  async add_data_credentials(init?: OperationInit<"add_data_credentials">): Promise<OperationData<"add_data_credentials">> {
    return this.client.requestOperation("add_data_credentials", "put", "/custom_data_flows/{custom_data_flow_id}/data_credentials", init);
  }

  /** Copy Custom Data Flow */
  async copy_custom_data_flow(init?: OperationInit<"copy_custom_data_flow">): Promise<OperationData<"copy_custom_data_flow">> {
    return this.client.requestOperation("copy_custom_data_flow", "post", "/custom_data_flows/{custom_data_flow_id}/copy", init);
  }

  /** Create Custom Data Flow */
  async create_custom_data_flow(init?: OperationInit<"create_custom_data_flow">): Promise<OperationData<"create_custom_data_flow">> {
    return this.client.requestOperation("create_custom_data_flow", "post", "/custom_data_flows", init);
  }

  /** Accessible Resources */
  async custom_data_flows_accessible_resources(init?: OperationInit<"custom_data_flows_accessible_resources">): Promise<OperationData<"custom_data_flows_accessible_resources">> {
    return this.client.requestOperation("custom_data_flows_accessible_resources", "get", "/custom_data_flows/accessible", init);
  }

  /** Add Custom data flow Accessor */
  async custom_data_flows_add_accessor(init?: OperationInit<"custom_data_flows_add_accessor">): Promise<OperationData<"custom_data_flows_add_accessor">> {
    return this.client.requestOperation("custom_data_flows_add_accessor", "post", "/custom_data_flows/{resource_id}/accessors", init);
  }

  /** Add Custom data flow Docs */
  async custom_data_flows_add_resource_docs(init?: OperationInit<"custom_data_flows_add_resource_docs">): Promise<OperationData<"custom_data_flows_add_resource_docs">> {
    return this.client.requestOperation("custom_data_flows_add_resource_docs", "put", "/custom_data_flows/{resource_id}/docs", init);
  }

  /** Add Custom data flow Tags */
  async custom_data_flows_add_resource_tags(init?: OperationInit<"custom_data_flows_add_resource_tags">): Promise<OperationData<"custom_data_flows_add_resource_tags">> {
    return this.client.requestOperation("custom_data_flows_add_resource_tags", "post", "/custom_data_flows/{resource_id}/tags", init);
  }

  /** Remove Custom data flow Tags */
  async custom_data_flows_delete_resource_tags(init?: OperationInit<"custom_data_flows_delete_resource_tags">): Promise<OperationData<"custom_data_flows_delete_resource_tags">> {
    return this.client.requestOperation("custom_data_flows_delete_resource_tags", "delete", "/custom_data_flows/{resource_id}/tags", init);
  }

  /** Explain Access */
  async custom_data_flows_explain_access(init?: OperationInit<"custom_data_flows_explain_access">): Promise<OperationData<"custom_data_flows_explain_access">> {
    return this.client.requestOperation("custom_data_flows_explain_access", "get", "/custom_data_flows/{resource_id}/access", init);
  }

  /** List Custom data flow Accessors */
  async custom_data_flows_get_accessors(init?: OperationInit<"custom_data_flows_get_accessors">): Promise<OperationData<"custom_data_flows_get_accessors">> {
    return this.client.requestOperation("custom_data_flows_get_accessors", "get", "/custom_data_flows/{resource_id}/accessors", init);
  }

  /** Get Custom data flow Tags */
  async custom_data_flows_get_resource_tags(init?: OperationInit<"custom_data_flows_get_resource_tags">): Promise<OperationData<"custom_data_flows_get_resource_tags">> {
    return this.client.requestOperation("custom_data_flows_get_resource_tags", "get", "/custom_data_flows/{resource_id}/tags", init);
  }

  /** List Custom Data Flow code containers */
  async custom_data_flows_list_code_containers(init?: OperationInit<"custom_data_flows_list_code_containers">): Promise<OperationData<"custom_data_flows_list_code_containers">> {
    return this.client.requestOperation("custom_data_flows_list_code_containers", "get", "/custom_data_flows/{custom_data_flow_id}/code_containers", init);
  }

  /** List Custom data flow Docs */
  async custom_data_flows_list_resource_docs(init?: OperationInit<"custom_data_flows_list_resource_docs">): Promise<OperationData<"custom_data_flows_list_resource_docs">> {
    return this.client.requestOperation("custom_data_flows_list_resource_docs", "get", "/custom_data_flows/{resource_id}/docs", init);
  }

  /** Remove Custom data flow Accessor */
  async custom_data_flows_remove_accessor_body(init?: OperationInit<"custom_data_flows_remove_accessor_body">): Promise<OperationData<"custom_data_flows_remove_accessor_body">> {
    return this.client.requestOperation("custom_data_flows_remove_accessor_body", "delete", "/custom_data_flows/{resource_id}/accessors", init);
  }

  /** Remove Custom data flow Docs */
  async custom_data_flows_remove_resource_docs(init?: OperationInit<"custom_data_flows_remove_resource_docs">): Promise<OperationData<"custom_data_flows_remove_resource_docs">> {
    return this.client.requestOperation("custom_data_flows_remove_resource_docs", "delete", "/custom_data_flows/{resource_id}/docs", init);
  }

  /** Reset Custom data flow Docs */
  async custom_data_flows_reset_resource_docs(init?: OperationInit<"custom_data_flows_reset_resource_docs">): Promise<OperationData<"custom_data_flows_reset_resource_docs">> {
    return this.client.requestOperation("custom_data_flows_reset_resource_docs", "post", "/custom_data_flows/{resource_id}/docs", init);
  }

  /** Update Custom data flow Accessors */
  async custom_data_flows_update_accessors(init?: OperationInit<"custom_data_flows_update_accessors">): Promise<OperationData<"custom_data_flows_update_accessors">> {
    return this.client.requestOperation("custom_data_flows_update_accessors", "put", "/custom_data_flows/{resource_id}/accessors", init);
  }

  /** Update Custom Data Flow */
  async custom_data_flows_update_custom_data_flow(init?: OperationInit<"custom_data_flows_update_custom_data_flow">): Promise<OperationData<"custom_data_flows_update_custom_data_flow">> {
    return this.client.requestOperation("custom_data_flows_update_custom_data_flow", "patch", "/custom_data_flows/{custom_data_flow_id}", init);
  }

  /** Update Custom Data Flow */
  async custom_data_flows_update_custom_data_flow_put(init?: OperationInit<"custom_data_flows_update_custom_data_flow_put">): Promise<OperationData<"custom_data_flows_update_custom_data_flow_put">> {
    return this.client.requestOperation("custom_data_flows_update_custom_data_flow_put", "put", "/custom_data_flows/{custom_data_flow_id}", init);
  }

  /** Update Custom data flow Tags */
  async custom_data_flows_update_resource_tags(init?: OperationInit<"custom_data_flows_update_resource_tags">): Promise<OperationData<"custom_data_flows_update_resource_tags">> {
    return this.client.requestOperation("custom_data_flows_update_resource_tags", "put", "/custom_data_flows/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async custom_data_flows_users_access_insights(init?: OperationInit<"custom_data_flows_users_access_insights">): Promise<OperationData<"custom_data_flows_users_access_insights">> {
    return this.client.requestOperation("custom_data_flows_users_access_insights", "get", "/custom_data_flows/{resource_id}/users_access_insights", init);
  }

  /** Destroy Custom Data Flow */
  async destroy_custom_data_flow(init?: OperationInit<"destroy_custom_data_flow">): Promise<OperationData<"destroy_custom_data_flow">> {
    return this.client.requestOperation("destroy_custom_data_flow", "delete", "/custom_data_flows/{custom_data_flow_id}", init);
  }

  /** Get Custom Data Flow Audit Log */
  async get_custom_data_flow_audit_log(init?: OperationInit<"get_custom_data_flow_audit_log">): Promise<OperationData<"get_custom_data_flow_audit_log">> {
    return this.client.requestOperation("get_custom_data_flow_audit_log", "get", "/custom_data_flows/{resource_id}/audit_log", init);
  }

  /** Get Custom Data Flow Metrics */
  async get_custom_data_flow_metrics(init?: OperationInit<"get_custom_data_flow_metrics">): Promise<OperationData<"get_custom_data_flow_metrics">> {
    return this.client.requestOperation("get_custom_data_flow_metrics", "get", "/custom_data_flows/{custom_data_flow_id}/metrics", init);
  }

  /** Get Custom Data Flow Metrics By Name */
  async get_custom_data_flow_metrics_by_name(init?: OperationInit<"get_custom_data_flow_metrics_by_name">): Promise<OperationData<"get_custom_data_flow_metrics_by_name">> {
    return this.client.requestOperation("get_custom_data_flow_metrics_by_name", "get", "/custom_data_flows/{custom_data_flow_id}/metrics/{metrics_name}", init);
  }

  /** List Custom Data Flows */
  async list_custom_data_flows(init?: OperationInit<"list_custom_data_flows">): Promise<OperationData<"list_custom_data_flows">> {
    return this.client.requestOperation("list_custom_data_flows", "get", "/custom_data_flows", init);
  }

  /** List Custom Data Flow data credentials */
  async list_data_credentials(init?: OperationInit<"list_data_credentials">): Promise<OperationData<"list_data_credentials">> {
    return this.client.requestOperation("list_data_credentials", "get", "/custom_data_flows/{custom_data_flow_id}/data_credentials", init);
  }

  /** Pause Custom Data Flow */
  async pause_custom_data_flow(init?: OperationInit<"pause_custom_data_flow">): Promise<OperationData<"pause_custom_data_flow">> {
    return this.client.requestOperation("pause_custom_data_flow", "put", "/custom_data_flows/{custom_data_flow_id}/pause", init);
  }

  /** Remove code containers from Custom Data Flow */
  async remove_code_containers(init?: OperationInit<"remove_code_containers">): Promise<OperationData<"remove_code_containers">> {
    return this.client.requestOperation("remove_code_containers", "delete", "/custom_data_flows/{custom_data_flow_id}/code_containers", init);
  }

  /** Remove data credentials from Custom Data Flow */
  async remove_data_credentials(init?: OperationInit<"remove_data_credentials">): Promise<OperationData<"remove_data_credentials">> {
    return this.client.requestOperation("remove_data_credentials", "delete", "/custom_data_flows/{custom_data_flow_id}/data_credentials", init);
  }

  /** Reset Custom Data Flow code containers */
  async reset_code_containers(init?: OperationInit<"reset_code_containers">): Promise<OperationData<"reset_code_containers">> {
    return this.client.requestOperation("reset_code_containers", "post", "/custom_data_flows/{custom_data_flow_id}/code_containers", init);
  }

  /** Reset Custom Data Flow data credentials */
  async reset_data_credentials(init?: OperationInit<"reset_data_credentials">): Promise<OperationData<"reset_data_credentials">> {
    return this.client.requestOperation("reset_data_credentials", "post", "/custom_data_flows/{custom_data_flow_id}/data_credentials", init);
  }

  /** Search Custom Data Flows */
  async search_custom_data_flows(init?: OperationInit<"search_custom_data_flows">): Promise<OperationData<"search_custom_data_flows">> {
    return this.client.requestOperation("search_custom_data_flows", "post", "/custom_data_flows/search", init);
  }

  /** Search Custom Data Flows Tags */
  async search_custom_data_flows_tags(init?: OperationInit<"search_custom_data_flows_tags">): Promise<OperationData<"search_custom_data_flows_tags">> {
    return this.client.requestOperation("search_custom_data_flows_tags", "post", "/custom_data_flows/search_tags", init);
  }

  /** Show Custom Data Flow */
  async show_custom_data_flow(init?: OperationInit<"show_custom_data_flow">): Promise<OperationData<"show_custom_data_flow">> {
    return this.client.requestOperation("show_custom_data_flow", "get", "/custom_data_flows/{custom_data_flow_id}", init);
  }
}