import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ToolSetsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"index_tool_sets">): Promise<OperationData<"index_tool_sets">> {
    return this.client.requestOperation("index_tool_sets", "get", "/tool_sets", init);
  }

  async create(init?: OperationInit<"create_tool_set">): Promise<OperationData<"create_tool_set">> {
    return this.client.requestOperation("create_tool_set", "post", "/tool_sets", init);
  }

  async get(init?: OperationInit<"show_tool_set">): Promise<OperationData<"show_tool_set">> {
    return this.client.requestOperation("show_tool_set", "get", "/tool_sets/{tool_set_id}", init);
  }

  async update(init?: OperationInit<"tool_sets_update_tool_set_put">): Promise<OperationData<"tool_sets_update_tool_set_put">> {
    return this.client.requestOperation("tool_sets_update_tool_set_put", "put", "/tool_sets/{tool_set_id}", init);
  }

  async delete(init?: OperationInit<"delete_tool_set">): Promise<OperationData<"delete_tool_set">> {
    return this.client.requestOperation("delete_tool_set", "delete", "/tool_sets/{tool_set_id}", init);
  }

  /** Activate Export */
  async activate_export(init?: OperationInit<"activate_export">): Promise<OperationData<"activate_export">> {
    return this.client.requestOperation("activate_export", "put", "/tool_sets/{tool_set_id}/exports/{export_id}/activate", init);
  }

  /** Activate Tool Set */
  async activate_tool_set(init?: OperationInit<"activate_tool_set">): Promise<OperationData<"activate_tool_set">> {
    return this.client.requestOperation("activate_tool_set", "put", "/tool_sets/{tool_set_id}/activate", init);
  }

  /** Add Tools */
  async add_tools(init?: OperationInit<"add_tools">): Promise<OperationData<"add_tools">> {
    return this.client.requestOperation("add_tools", "put", "/tool_sets/{tool_set_id}/tools", init);
  }

  /** Create Export */
  async create_export(init?: OperationInit<"create_export">): Promise<OperationData<"create_export">> {
    return this.client.requestOperation("create_export", "post", "/tool_sets/{tool_set_id}/exports", init);
  }

  /** Create Revision */
  async create_revision(init?: OperationInit<"create_revision">): Promise<OperationData<"create_revision">> {
    return this.client.requestOperation("create_revision", "post", "/tool_sets/{tool_set_id}/revisions", init);
  }

  /** Create Tool Set */
  async create_tool_set(init?: OperationInit<"create_tool_set">): Promise<OperationData<"create_tool_set">> {
    return this.client.requestOperation("create_tool_set", "post", "/tool_sets", init);
  }

  /** Delete Export */
  async delete_export(init?: OperationInit<"delete_export">): Promise<OperationData<"delete_export">> {
    return this.client.requestOperation("delete_export", "delete", "/tool_sets/{tool_set_id}/exports/{export_id}", init);
  }

  /** Delete Revision */
  async delete_revision(init?: OperationInit<"delete_revision">): Promise<OperationData<"delete_revision">> {
    return this.client.requestOperation("delete_revision", "delete", "/tool_sets/{tool_set_id}/revisions/{revision_id}", init);
  }

  /** Delete Tool Set */
  async delete_tool_set(init?: OperationInit<"delete_tool_set">): Promise<OperationData<"delete_tool_set">> {
    return this.client.requestOperation("delete_tool_set", "delete", "/tool_sets/{tool_set_id}", init);
  }

  /** Deprecate Revision */
  async deprecate_revision(init?: OperationInit<"deprecate_revision">): Promise<OperationData<"deprecate_revision">> {
    return this.client.requestOperation("deprecate_revision", "put", "/tool_sets/{tool_set_id}/revisions/{revision_id}/deprecate", init);
  }

  /** Draft Revision */
  async draft_revision(init?: OperationInit<"draft_revision">): Promise<OperationData<"draft_revision">> {
    return this.client.requestOperation("draft_revision", "put", "/tool_sets/{tool_set_id}/revisions/{revision_id}/draft", init);
  }

  /** Index Exports */
  async index_exports(init?: OperationInit<"index_exports">): Promise<OperationData<"index_exports">> {
    return this.client.requestOperation("index_exports", "get", "/tool_sets/{tool_set_id}/exports", init);
  }

  /** Index Revisions */
  async index_revisions(init?: OperationInit<"index_revisions">): Promise<OperationData<"index_revisions">> {
    return this.client.requestOperation("index_revisions", "get", "/tool_sets/{tool_set_id}/revisions", init);
  }

  /** Index Tool Sets */
  async index_tool_sets(init?: OperationInit<"index_tool_sets">): Promise<OperationData<"index_tool_sets">> {
    return this.client.requestOperation("index_tool_sets", "get", "/tool_sets", init);
  }

  /** Pause Export */
  async pause_export(init?: OperationInit<"pause_export">): Promise<OperationData<"pause_export">> {
    return this.client.requestOperation("pause_export", "put", "/tool_sets/{tool_set_id}/exports/{export_id}/pause", init);
  }

  /** Pause Tool Set */
  async pause_tool_set(init?: OperationInit<"pause_tool_set">): Promise<OperationData<"pause_tool_set">> {
    return this.client.requestOperation("pause_tool_set", "put", "/tool_sets/{tool_set_id}/pause", init);
  }

  /** Publish Revision */
  async publish_revision(init?: OperationInit<"publish_revision">): Promise<OperationData<"publish_revision">> {
    return this.client.requestOperation("publish_revision", "put", "/tool_sets/{tool_set_id}/revisions/{revision_id}/publish", init);
  }

  /** Remove Tools */
  async remove_tools(init?: OperationInit<"remove_tools">): Promise<OperationData<"remove_tools">> {
    return this.client.requestOperation("remove_tools", "delete", "/tool_sets/{tool_set_id}/tools", init);
  }

  /** Reset Tools */
  async reset_tools(init?: OperationInit<"reset_tools">): Promise<OperationData<"reset_tools">> {
    return this.client.requestOperation("reset_tools", "post", "/tool_sets/{tool_set_id}/tools", init);
  }

  /** Retire Export */
  async retire_export(init?: OperationInit<"retire_export">): Promise<OperationData<"retire_export">> {
    return this.client.requestOperation("retire_export", "put", "/tool_sets/{tool_set_id}/exports/{export_id}/retire", init);
  }

  /** Retire Revision */
  async retire_revision(init?: OperationInit<"retire_revision">): Promise<OperationData<"retire_revision">> {
    return this.client.requestOperation("retire_revision", "put", "/tool_sets/{tool_set_id}/revisions/{revision_id}/retire", init);
  }

  /** Show Export */
  async show_export(init?: OperationInit<"show_export">): Promise<OperationData<"show_export">> {
    return this.client.requestOperation("show_export", "get", "/tool_sets/{tool_set_id}/exports/{export_id}", init);
  }

  /** Show Revision */
  async show_revision(init?: OperationInit<"show_revision">): Promise<OperationData<"show_revision">> {
    return this.client.requestOperation("show_revision", "get", "/tool_sets/{tool_set_id}/revisions/{revision_id}", init);
  }

  /** Show Tool Set */
  async show_tool_set(init?: OperationInit<"show_tool_set">): Promise<OperationData<"show_tool_set">> {
    return this.client.requestOperation("show_tool_set", "get", "/tool_sets/{tool_set_id}", init);
  }

  /** Tool Set Audit Log */
  async tool_set_audit_log(init?: OperationInit<"tool_set_audit_log">): Promise<OperationData<"tool_set_audit_log">> {
    return this.client.requestOperation("tool_set_audit_log", "get", "/tool_sets/{tool_set_id}/audit_log", init);
  }

  /** Accessible Resources */
  async tool_sets_accessible_resources(init?: OperationInit<"tool_sets_accessible_resources">): Promise<OperationData<"tool_sets_accessible_resources">> {
    return this.client.requestOperation("tool_sets_accessible_resources", "get", "/tool_sets/accessible", init);
  }

  /** Add Tool set Accessor */
  async tool_sets_add_accessor(init?: OperationInit<"tool_sets_add_accessor">): Promise<OperationData<"tool_sets_add_accessor">> {
    return this.client.requestOperation("tool_sets_add_accessor", "post", "/tool_sets/{resource_id}/accessors", init);
  }

  /** Explain Access */
  async tool_sets_explain_access(init?: OperationInit<"tool_sets_explain_access">): Promise<OperationData<"tool_sets_explain_access">> {
    return this.client.requestOperation("tool_sets_explain_access", "get", "/tool_sets/{resource_id}/access", init);
  }

  /** List Tool set Accessors */
  async tool_sets_get_accessors(init?: OperationInit<"tool_sets_get_accessors">): Promise<OperationData<"tool_sets_get_accessors">> {
    return this.client.requestOperation("tool_sets_get_accessors", "get", "/tool_sets/{resource_id}/accessors", init);
  }

  /** Index Tools */
  async tool_sets_index_tools(init?: OperationInit<"tool_sets_index_tools">): Promise<OperationData<"tool_sets_index_tools">> {
    return this.client.requestOperation("tool_sets_index_tools", "get", "/tool_sets/{tool_set_id}/tools", init);
  }

  /** Remove Tool set Accessor */
  async tool_sets_remove_accessor_body(init?: OperationInit<"tool_sets_remove_accessor_body">): Promise<OperationData<"tool_sets_remove_accessor_body">> {
    return this.client.requestOperation("tool_sets_remove_accessor_body", "delete", "/tool_sets/{resource_id}/accessors", init);
  }

  /** Update Tool set Accessors */
  async tool_sets_update_accessors(init?: OperationInit<"tool_sets_update_accessors">): Promise<OperationData<"tool_sets_update_accessors">> {
    return this.client.requestOperation("tool_sets_update_accessors", "put", "/tool_sets/{resource_id}/accessors", init);
  }

  /** Update Tool Set */
  async tool_sets_update_tool_set(init?: OperationInit<"tool_sets_update_tool_set">): Promise<OperationData<"tool_sets_update_tool_set">> {
    return this.client.requestOperation("tool_sets_update_tool_set", "patch", "/tool_sets/{tool_set_id}", init);
  }

  /** Update Tool Set */
  async tool_sets_update_tool_set_put(init?: OperationInit<"tool_sets_update_tool_set_put">): Promise<OperationData<"tool_sets_update_tool_set_put">> {
    return this.client.requestOperation("tool_sets_update_tool_set_put", "put", "/tool_sets/{tool_set_id}", init);
  }

  /** Users Access Insights */
  async tool_sets_users_access_insights(init?: OperationInit<"tool_sets_users_access_insights">): Promise<OperationData<"tool_sets_users_access_insights">> {
    return this.client.requestOperation("tool_sets_users_access_insights", "get", "/tool_sets/{resource_id}/users_access_insights", init);
  }

  /** Update Export */
  async update_export(init?: OperationInit<"update_export">): Promise<OperationData<"update_export">> {
    return this.client.requestOperation("update_export", "put", "/tool_sets/{tool_set_id}/exports/{export_id}", init);
  }
}