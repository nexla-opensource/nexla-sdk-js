import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ToolsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"tools_index_tools">): Promise<OperationData<"tools_index_tools">> {
    return this.client.requestOperation("tools_index_tools", "get", "/tools", init);
  }

  async create(init?: OperationInit<"create_tool">): Promise<OperationData<"create_tool">> {
    return this.client.requestOperation("create_tool", "post", "/tools", init);
  }

  async get(init?: OperationInit<"show_tool">): Promise<OperationData<"show_tool">> {
    return this.client.requestOperation("show_tool", "get", "/tools/{tool_id}", init);
  }

  async update(init?: OperationInit<"tools_update_tool_put">): Promise<OperationData<"tools_update_tool_put">> {
    return this.client.requestOperation("tools_update_tool_put", "put", "/tools/{tool_id}", init);
  }

  async delete(init?: OperationInit<"delete_tool">): Promise<OperationData<"delete_tool">> {
    return this.client.requestOperation("delete_tool", "delete", "/tools/{tool_id}", init);
  }

  /** Activate Tool */
  async activate_tool(init?: OperationInit<"activate_tool">): Promise<OperationData<"activate_tool">> {
    return this.client.requestOperation("activate_tool", "put", "/tools/{tool_id}/activate", init);
  }

  /** Create Tool */
  async create_tool(init?: OperationInit<"create_tool">): Promise<OperationData<"create_tool">> {
    return this.client.requestOperation("create_tool", "post", "/tools", init);
  }

  /** Create Version */
  async create_version(init?: OperationInit<"create_version">): Promise<OperationData<"create_version">> {
    return this.client.requestOperation("create_version", "post", "/tools/{tool_id}/versions", init);
  }

  /** Delete Tool */
  async delete_tool(init?: OperationInit<"delete_tool">): Promise<OperationData<"delete_tool">> {
    return this.client.requestOperation("delete_tool", "delete", "/tools/{tool_id}", init);
  }

  /** Delete Version */
  async delete_version(init?: OperationInit<"delete_version">): Promise<OperationData<"delete_version">> {
    return this.client.requestOperation("delete_version", "delete", "/tools/{tool_id}/versions/{version_id}", init);
  }

  /** Deprecate Version */
  async deprecate_version(init?: OperationInit<"deprecate_version">): Promise<OperationData<"deprecate_version">> {
    return this.client.requestOperation("deprecate_version", "put", "/tools/{tool_id}/versions/{version_id}/deprecate", init);
  }

  /** Draft Version */
  async draft_version(init?: OperationInit<"draft_version">): Promise<OperationData<"draft_version">> {
    return this.client.requestOperation("draft_version", "put", "/tools/{tool_id}/versions/{version_id}/draft", init);
  }

  /** Index Versions */
  async index_versions(init?: OperationInit<"index_versions">): Promise<OperationData<"index_versions">> {
    return this.client.requestOperation("index_versions", "get", "/tools/{tool_id}/versions", init);
  }

  /** Pause Tool */
  async pause_tool(init?: OperationInit<"pause_tool">): Promise<OperationData<"pause_tool">> {
    return this.client.requestOperation("pause_tool", "put", "/tools/{tool_id}/pause", init);
  }

  /** Publish Version */
  async publish_version(init?: OperationInit<"publish_version">): Promise<OperationData<"publish_version">> {
    return this.client.requestOperation("publish_version", "put", "/tools/{tool_id}/versions/{version_id}/publish", init);
  }

  /** Retire Version */
  async retire_version(init?: OperationInit<"retire_version">): Promise<OperationData<"retire_version">> {
    return this.client.requestOperation("retire_version", "put", "/tools/{tool_id}/versions/{version_id}/retire", init);
  }

  /** Show Tool */
  async show_tool(init?: OperationInit<"show_tool">): Promise<OperationData<"show_tool">> {
    return this.client.requestOperation("show_tool", "get", "/tools/{tool_id}", init);
  }

  /** Show Version */
  async show_version(init?: OperationInit<"show_version">): Promise<OperationData<"show_version">> {
    return this.client.requestOperation("show_version", "get", "/tools/{tool_id}/versions/{version_id}", init);
  }

  /** Tool Audit Log */
  async tool_audit_log(init?: OperationInit<"tool_audit_log">): Promise<OperationData<"tool_audit_log">> {
    return this.client.requestOperation("tool_audit_log", "get", "/tools/{tool_id}/audit_log", init);
  }

  /** Tool Definition */
  async tool_definition(init?: OperationInit<"tool_definition">): Promise<OperationData<"tool_definition">> {
    return this.client.requestOperation("tool_definition", "get", "/tools/{tool_id}/definition", init);
  }

  /** Tool Receipts Index */
  async tool_receipts_index(init?: OperationInit<"tool_receipts_index">): Promise<OperationData<"tool_receipts_index">> {
    return this.client.requestOperation("tool_receipts_index", "get", "/tools/{tool_id}/receipts", init);
  }

  /** Tool Receipts Show */
  async tool_receipts_show(init?: OperationInit<"tool_receipts_show">): Promise<OperationData<"tool_receipts_show">> {
    return this.client.requestOperation("tool_receipts_show", "get", "/tools/{tool_id}/receipts/{receipt_id}", init);
  }

  /** Accessible Resources */
  async tools_accessible_resources(init?: OperationInit<"tools_accessible_resources">): Promise<OperationData<"tools_accessible_resources">> {
    return this.client.requestOperation("tools_accessible_resources", "get", "/tools/accessible", init);
  }

  /** Add Tool Accessor */
  async tools_add_accessor(init?: OperationInit<"tools_add_accessor">): Promise<OperationData<"tools_add_accessor">> {
    return this.client.requestOperation("tools_add_accessor", "post", "/tools/{resource_id}/accessors", init);
  }

  /** Explain Access */
  async tools_explain_access(init?: OperationInit<"tools_explain_access">): Promise<OperationData<"tools_explain_access">> {
    return this.client.requestOperation("tools_explain_access", "get", "/tools/{resource_id}/access", init);
  }

  /** List Tool Accessors */
  async tools_get_accessors(init?: OperationInit<"tools_get_accessors">): Promise<OperationData<"tools_get_accessors">> {
    return this.client.requestOperation("tools_get_accessors", "get", "/tools/{resource_id}/accessors", init);
  }

  /** Index Tools */
  async tools_index_tools(init?: OperationInit<"tools_index_tools">): Promise<OperationData<"tools_index_tools">> {
    return this.client.requestOperation("tools_index_tools", "get", "/tools", init);
  }

  /** Remove Tool Accessor */
  async tools_remove_accessor_body(init?: OperationInit<"tools_remove_accessor_body">): Promise<OperationData<"tools_remove_accessor_body">> {
    return this.client.requestOperation("tools_remove_accessor_body", "delete", "/tools/{resource_id}/accessors", init);
  }

  /** Update Tool Accessors */
  async tools_update_accessors(init?: OperationInit<"tools_update_accessors">): Promise<OperationData<"tools_update_accessors">> {
    return this.client.requestOperation("tools_update_accessors", "put", "/tools/{resource_id}/accessors", init);
  }

  /** Update Tool */
  async tools_update_tool(init?: OperationInit<"tools_update_tool">): Promise<OperationData<"tools_update_tool">> {
    return this.client.requestOperation("tools_update_tool", "patch", "/tools/{tool_id}", init);
  }

  /** Update Tool */
  async tools_update_tool_put(init?: OperationInit<"tools_update_tool_put">): Promise<OperationData<"tools_update_tool_put">> {
    return this.client.requestOperation("tools_update_tool_put", "put", "/tools/{tool_id}", init);
  }

  /** Users Access Insights */
  async tools_users_access_insights(init?: OperationInit<"tools_users_access_insights">): Promise<OperationData<"tools_users_access_insights">> {
    return this.client.requestOperation("tools_users_access_insights", "get", "/tools/{resource_id}/users_access_insights", init);
  }

  /** Top Level Receipts Index */
  async top_level_receipts_index(init?: OperationInit<"top_level_receipts_index">): Promise<OperationData<"top_level_receipts_index">> {
    return this.client.requestOperation("top_level_receipts_index", "get", "/tools/receipts", init);
  }

  /** Top Level Receipts Show */
  async top_level_receipts_show(init?: OperationInit<"top_level_receipts_show">): Promise<OperationData<"top_level_receipts_show">> {
    return this.client.requestOperation("top_level_receipts_show", "get", "/tools/receipts/{receipt_id}", init);
  }

  /** Version Definition */
  async version_definition(init?: OperationInit<"version_definition">): Promise<OperationData<"version_definition">> {
    return this.client.requestOperation("version_definition", "get", "/tools/{tool_id}/versions/{version_id}/definition", init);
  }

  /** Version Receipts Create */
  async version_receipts_create(init?: OperationInit<"version_receipts_create">): Promise<OperationData<"version_receipts_create">> {
    return this.client.requestOperation("version_receipts_create", "post", "/tools/{tool_id}/versions/{version_id}/receipts", init);
  }

  /** Version Receipts Index */
  async version_receipts_index(init?: OperationInit<"version_receipts_index">): Promise<OperationData<"version_receipts_index">> {
    return this.client.requestOperation("version_receipts_index", "get", "/tools/{tool_id}/versions/{version_id}/receipts", init);
  }

  /** Version Receipts Show */
  async version_receipts_show(init?: OperationInit<"version_receipts_show">): Promise<OperationData<"version_receipts_show">> {
    return this.client.requestOperation("version_receipts_show", "get", "/tools/{tool_id}/versions/{version_id}/receipts/{receipt_id}", init);
  }
}