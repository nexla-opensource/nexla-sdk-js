import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class LookupsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_data_maps">): Promise<OperationData<"get_data_maps">> {
    return this.client.requestOperation("get_data_maps", "get", "/data_maps", init);
  }

  async create(init?: OperationInit<"create_static_data_map">): Promise<OperationData<"create_static_data_map">> {
    return this.client.requestOperation("create_static_data_map", "post", "/data_maps", init);
  }

  async get(init?: OperationInit<"get_data_map">): Promise<OperationData<"get_data_map">> {
    return this.client.requestOperation("get_data_map", "get", "/data_maps/{data_map_id}", init);
  }

  async update(init?: OperationInit<"update_data_map_metadata">): Promise<OperationData<"update_data_map_metadata">> {
    return this.client.requestOperation("update_data_map_metadata", "put", "/data_maps/{data_map_id}", init);
  }

  async delete(init?: OperationInit<"delete_data_map">): Promise<OperationData<"delete_data_map">> {
    return this.client.requestOperation("delete_data_map", "delete", "/data_maps/{data_map_id}", init);
  }

  /** Check Data Map Entries */
  async check_data_map_entries(init?: OperationInit<"check_data_map_entries">): Promise<OperationData<"check_data_map_entries">> {
    return this.client.requestOperation("check_data_map_entries", "get", "/data_maps/{data_map_id}/entries/{entry_keys}", init);
  }

  /** Create a Static Data Map */
  async create_static_data_map(init?: OperationInit<"create_static_data_map">): Promise<OperationData<"create_static_data_map">> {
    return this.client.requestOperation("create_static_data_map", "post", "/data_maps", init);
  }

  /** Accessible Resources */
  async data_maps_accessible_resources(init?: OperationInit<"data_maps_accessible_resources">): Promise<OperationData<"data_maps_accessible_resources">> {
    return this.client.requestOperation("data_maps_accessible_resources", "get", "/data_maps/accessible", init);
  }

  /** Add Data map Docs */
  async data_maps_add_resource_docs(init?: OperationInit<"data_maps_add_resource_docs">): Promise<OperationData<"data_maps_add_resource_docs">> {
    return this.client.requestOperation("data_maps_add_resource_docs", "put", "/data_maps/{resource_id}/docs", init);
  }

  /** Add Data map Tags */
  async data_maps_add_resource_tags(init?: OperationInit<"data_maps_add_resource_tags">): Promise<OperationData<"data_maps_add_resource_tags">> {
    return this.client.requestOperation("data_maps_add_resource_tags", "post", "/data_maps/{resource_id}/tags", init);
  }

  /** Remove Data map Tags */
  async data_maps_delete_resource_tags(init?: OperationInit<"data_maps_delete_resource_tags">): Promise<OperationData<"data_maps_delete_resource_tags">> {
    return this.client.requestOperation("data_maps_delete_resource_tags", "delete", "/data_maps/{resource_id}/tags", init);
  }

  /** Get Data map Tags */
  async data_maps_get_resource_tags(init?: OperationInit<"data_maps_get_resource_tags">): Promise<OperationData<"data_maps_get_resource_tags">> {
    return this.client.requestOperation("data_maps_get_resource_tags", "get", "/data_maps/{resource_id}/tags", init);
  }

  /** List Data map Docs */
  async data_maps_list_resource_docs(init?: OperationInit<"data_maps_list_resource_docs">): Promise<OperationData<"data_maps_list_resource_docs">> {
    return this.client.requestOperation("data_maps_list_resource_docs", "get", "/data_maps/{resource_id}/docs", init);
  }

  /** Read Sample from Data Map */
  async data_maps_read_data_map_sample(init?: OperationInit<"data_maps_read_data_map_sample">): Promise<OperationData<"data_maps_read_data_map_sample">> {
    return this.client.requestOperation("data_maps_read_data_map_sample", "put", "/data_maps/{data_map_id}/probe/sample", init);
  }

  /** Read Sample from Data Map */
  async data_maps_read_data_map_sample_post(init?: OperationInit<"data_maps_read_data_map_sample_post">): Promise<OperationData<"data_maps_read_data_map_sample_post">> {
    return this.client.requestOperation("data_maps_read_data_map_sample_post", "post", "/data_maps/{data_map_id}/probe/sample", init);
  }

  /** Referenced By */
  async data_maps_referenced_by(init?: OperationInit<"data_maps_referenced_by">): Promise<OperationData<"data_maps_referenced_by">> {
    return this.client.requestOperation("data_maps_referenced_by", "get", "/data_maps/{resource_id}/referenced_by", init);
  }

  /** Remove Data map Docs */
  async data_maps_remove_resource_docs(init?: OperationInit<"data_maps_remove_resource_docs">): Promise<OperationData<"data_maps_remove_resource_docs">> {
    return this.client.requestOperation("data_maps_remove_resource_docs", "delete", "/data_maps/{resource_id}/docs", init);
  }

  /** Reset Data map Docs */
  async data_maps_reset_resource_docs(init?: OperationInit<"data_maps_reset_resource_docs">): Promise<OperationData<"data_maps_reset_resource_docs">> {
    return this.client.requestOperation("data_maps_reset_resource_docs", "post", "/data_maps/{resource_id}/docs", init);
  }

  /** Update Data Map */
  async data_maps_update_data_map(init?: OperationInit<"data_maps_update_data_map">): Promise<OperationData<"data_maps_update_data_map">> {
    return this.client.requestOperation("data_maps_update_data_map", "patch", "/data_maps/{data_map_id}", init);
  }

  /** Update Data map Tags */
  async data_maps_update_resource_tags(init?: OperationInit<"data_maps_update_resource_tags">): Promise<OperationData<"data_maps_update_resource_tags">> {
    return this.client.requestOperation("data_maps_update_resource_tags", "put", "/data_maps/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async data_maps_users_access_insights(init?: OperationInit<"data_maps_users_access_insights">): Promise<OperationData<"data_maps_users_access_insights">> {
    return this.client.requestOperation("data_maps_users_access_insights", "get", "/data_maps/{resource_id}/users_access_insights", init);
  }

  /** Delete a Data Map */
  async delete_data_map(init?: OperationInit<"delete_data_map">): Promise<OperationData<"delete_data_map">> {
    return this.client.requestOperation("delete_data_map", "delete", "/data_maps/{data_map_id}", init);
  }

  /** Delete Data Map Entries */
  async delete_data_map_entries(init?: OperationInit<"delete_data_map_entries">): Promise<OperationData<"delete_data_map_entries">> {
    return this.client.requestOperation("delete_data_map_entries", "delete", "/data_maps/{data_map_id}/entries/{entry_keys}", init);
  }

  /** Delete Map Entries by Body */
  async delete_entries_by_body(init?: OperationInit<"delete_entries_by_body">): Promise<OperationData<"delete_entries_by_body">> {
    return this.client.requestOperation("delete_entries_by_body", "delete", "/data_maps/{data_map_id}/entries", init);
  }

  /** Download Data Map */
  async download_map(init?: OperationInit<"download_map">): Promise<OperationData<"download_map">> {
    return this.client.requestOperation("download_map", "get", "/data_maps/{data_map_id}/download_map", init);
  }

  /** Explain Data Map Access */
  async explain_data_map_access(init?: OperationInit<"explain_data_map_access">): Promise<OperationData<"explain_data_map_access">> {
    return this.client.requestOperation("explain_data_map_access", "get", "/data_maps/{data_map_id}/access", init);
  }

  /** Get Data Map by ID */
  async get_data_map(init?: OperationInit<"get_data_map">): Promise<OperationData<"get_data_map">> {
    return this.client.requestOperation("get_data_map", "get", "/data_maps/{data_map_id}", init);
  }

  /** Get all Data Maps */
  async get_data_maps(init?: OperationInit<"get_data_maps">): Promise<OperationData<"get_data_maps">> {
    return this.client.requestOperation("get_data_maps", "get", "/data_maps", init);
  }

  /** Get Map Entries by POST */
  async get_entries_by_post(init?: OperationInit<"get_entries_by_post">): Promise<OperationData<"get_entries_by_post">> {
    return this.client.requestOperation("get_entries_by_post", "post", "/data_maps/{data_map_id}/get_entries", init);
  }

  /** List Public Data Maps */
  async list_public_data_maps(init?: OperationInit<"list_public_data_maps">): Promise<OperationData<"list_public_data_maps">> {
    return this.client.requestOperation("list_public_data_maps", "get", "/data_maps/public", init);
  }

  /** Search Data Maps */
  async search_data_maps(init?: OperationInit<"search_data_maps">): Promise<OperationData<"search_data_maps">> {
    return this.client.requestOperation("search_data_maps", "post", "/data_maps/search", init);
  }

  /** Search Data Maps by Tags */
  async search_data_maps_tags(init?: OperationInit<"search_data_maps_tags">): Promise<OperationData<"search_data_maps_tags">> {
    return this.client.requestOperation("search_data_maps_tags", "post", "/data_maps/search_tags", init);
  }

  /** Update Data Map Metadata */
  async update_data_map_metadata(init?: OperationInit<"update_data_map_metadata">): Promise<OperationData<"update_data_map_metadata">> {
    return this.client.requestOperation("update_data_map_metadata", "put", "/data_maps/{data_map_id}", init);
  }

  /** Upsert Static Data Map Entries */
  async upsert_data_map_entries(init?: OperationInit<"upsert_data_map_entries">): Promise<OperationData<"upsert_data_map_entries">> {
    return this.client.requestOperation("upsert_data_map_entries", "put", "/data_maps/{data_map_id}/entries", init);
  }

  /** Validate Data Map */
  async validate_data_map(init?: OperationInit<"validate_data_map">): Promise<OperationData<"validate_data_map">> {
    return this.client.requestOperation("validate_data_map", "get", "/data_maps/{data_map_id}/validate", init);
  }
}