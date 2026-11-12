import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class DataCredentialsGroupsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_data_credentials_groups">): Promise<OperationData<"list_data_credentials_groups">> {
    return this.client.requestOperation("list_data_credentials_groups", "get", "/data_credentials_groups", init);
  }

  async create(init?: OperationInit<"create_data_credentials_group">): Promise<OperationData<"create_data_credentials_group">> {
    return this.client.requestOperation("create_data_credentials_group", "post", "/data_credentials_groups", init);
  }

  async get(init?: OperationInit<"get_data_credentials_group">): Promise<OperationData<"get_data_credentials_group">> {
    return this.client.requestOperation("get_data_credentials_group", "get", "/data_credentials_groups/{group_id}", init);
  }

  async update(init?: OperationInit<"data_credentials_groups_update_data_credentials_group_put">): Promise<OperationData<"data_credentials_groups_update_data_credentials_group_put">> {
    return this.client.requestOperation("data_credentials_groups_update_data_credentials_group_put", "put", "/data_credentials_groups/{group_id}", init);
  }

  async delete(init?: OperationInit<"delete_data_credentials_group">): Promise<OperationData<"delete_data_credentials_group">> {
    return this.client.requestOperation("delete_data_credentials_group", "delete", "/data_credentials_groups/{group_id}", init);
  }

  /** Create Data Credentials Group */
  async create_data_credentials_group(init?: OperationInit<"create_data_credentials_group">): Promise<OperationData<"create_data_credentials_group">> {
    return this.client.requestOperation("create_data_credentials_group", "post", "/data_credentials_groups", init);
  }

  /** Accessible Resources */
  async data_credentials_groups_accessible_resources(init?: OperationInit<"data_credentials_groups_accessible_resources">): Promise<OperationData<"data_credentials_groups_accessible_resources">> {
    return this.client.requestOperation("data_credentials_groups_accessible_resources", "get", "/data_credentials_groups/accessible", init);
  }

  /** Add Data credentials group Accessor */
  async data_credentials_groups_add_accessor(init?: OperationInit<"data_credentials_groups_add_accessor">): Promise<OperationData<"data_credentials_groups_add_accessor">> {
    return this.client.requestOperation("data_credentials_groups_add_accessor", "post", "/data_credentials_groups/{resource_id}/accessors", init);
  }

  /** Explain Access */
  async data_credentials_groups_explain_access(init?: OperationInit<"data_credentials_groups_explain_access">): Promise<OperationData<"data_credentials_groups_explain_access">> {
    return this.client.requestOperation("data_credentials_groups_explain_access", "get", "/data_credentials_groups/{resource_id}/access", init);
  }

  /** List Data credentials group Accessors */
  async data_credentials_groups_get_accessors(init?: OperationInit<"data_credentials_groups_get_accessors">): Promise<OperationData<"data_credentials_groups_get_accessors">> {
    return this.client.requestOperation("data_credentials_groups_get_accessors", "get", "/data_credentials_groups/{resource_id}/accessors", init);
  }

  /** Remove Data credentials group Accessor */
  async data_credentials_groups_remove_accessor_body(init?: OperationInit<"data_credentials_groups_remove_accessor_body">): Promise<OperationData<"data_credentials_groups_remove_accessor_body">> {
    return this.client.requestOperation("data_credentials_groups_remove_accessor_body", "delete", "/data_credentials_groups/{resource_id}/accessors", init);
  }

  /** Update Data credentials group Accessors */
  async data_credentials_groups_update_accessors(init?: OperationInit<"data_credentials_groups_update_accessors">): Promise<OperationData<"data_credentials_groups_update_accessors">> {
    return this.client.requestOperation("data_credentials_groups_update_accessors", "put", "/data_credentials_groups/{resource_id}/accessors", init);
  }

  /** Update Data Credentials Group */
  async data_credentials_groups_update_data_credentials_group(init?: OperationInit<"data_credentials_groups_update_data_credentials_group">): Promise<OperationData<"data_credentials_groups_update_data_credentials_group">> {
    return this.client.requestOperation("data_credentials_groups_update_data_credentials_group", "patch", "/data_credentials_groups/{group_id}", init);
  }

  /** Update Data Credentials Group */
  async data_credentials_groups_update_data_credentials_group_put(init?: OperationInit<"data_credentials_groups_update_data_credentials_group_put">): Promise<OperationData<"data_credentials_groups_update_data_credentials_group_put">> {
    return this.client.requestOperation("data_credentials_groups_update_data_credentials_group_put", "put", "/data_credentials_groups/{group_id}", init);
  }

  /** Users Access Insights */
  async data_credentials_groups_users_access_insights(init?: OperationInit<"data_credentials_groups_users_access_insights">): Promise<OperationData<"data_credentials_groups_users_access_insights">> {
    return this.client.requestOperation("data_credentials_groups_users_access_insights", "get", "/data_credentials_groups/{resource_id}/users_access_insights", init);
  }

  /** Delete Data Credentials Group */
  async delete_data_credentials_group(init?: OperationInit<"delete_data_credentials_group">): Promise<OperationData<"delete_data_credentials_group">> {
    return this.client.requestOperation("delete_data_credentials_group", "delete", "/data_credentials_groups/{group_id}", init);
  }

  /** Get Data Credentials Group */
  async get_data_credentials_group(init?: OperationInit<"get_data_credentials_group">): Promise<OperationData<"get_data_credentials_group">> {
    return this.client.requestOperation("get_data_credentials_group", "get", "/data_credentials_groups/{group_id}", init);
  }

  /** Index Group Credentials */
  async index_group_credentials(init?: OperationInit<"index_group_credentials">): Promise<OperationData<"index_group_credentials">> {
    return this.client.requestOperation("index_group_credentials", "get", "/data_credentials_groups/{group_id}/data_credentials", init);
  }

  /** List Data Credentials Groups */
  async list_data_credentials_groups(init?: OperationInit<"list_data_credentials_groups">): Promise<OperationData<"list_data_credentials_groups">> {
    return this.client.requestOperation("list_data_credentials_groups", "get", "/data_credentials_groups", init);
  }

  /** Remove Group Credentials */
  async remove_group_credentials(init?: OperationInit<"remove_group_credentials">): Promise<OperationData<"remove_group_credentials">> {
    return this.client.requestOperation("remove_group_credentials", "delete", "/data_credentials_groups/{group_id}/data_credentials", init);
  }
}