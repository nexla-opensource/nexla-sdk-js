import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class DataSchemasResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async get(init?: OperationInit<"get_schema">): Promise<OperationData<"get_schema">> {
    return this.client.requestOperation("get_schema", "get", "/data_schemas/{schema_id}", init);
  }

  async update(init?: OperationInit<"data_schemas_update_schema_put">): Promise<OperationData<"data_schemas_update_schema_put">> {
    return this.client.requestOperation("data_schemas_update_schema_put", "put", "/data_schemas/{schema_id}", init);
  }

  async delete(init?: OperationInit<"delete_schema">): Promise<OperationData<"delete_schema">> {
    return this.client.requestOperation("delete_schema", "delete", "/data_schemas/{schema_id}", init);
  }

  /** Copy Schema */
  async copy_schema(init?: OperationInit<"copy_schema">): Promise<OperationData<"copy_schema">> {
    return this.client.requestOperation("copy_schema", "post", "/data_schemas/{schema_id}/copy", init);
  }

  /** Create Schema */
  async create_schema(init?: OperationInit<"create_schema">): Promise<OperationData<"create_schema">> {
    return this.client.requestOperation("create_schema", "post", "/data_schemas/", init);
  }

  /** Accessible Resources */
  async data_schemas_accessible_resources(init?: OperationInit<"data_schemas_accessible_resources">): Promise<OperationData<"data_schemas_accessible_resources">> {
    return this.client.requestOperation("data_schemas_accessible_resources", "get", "/data_schemas/accessible", init);
  }

  /** Add Data schema Docs */
  async data_schemas_add_resource_docs(init?: OperationInit<"data_schemas_add_resource_docs">): Promise<OperationData<"data_schemas_add_resource_docs">> {
    return this.client.requestOperation("data_schemas_add_resource_docs", "put", "/data_schemas/{resource_id}/docs", init);
  }

  /** Add Data schema Tags */
  async data_schemas_add_resource_tags(init?: OperationInit<"data_schemas_add_resource_tags">): Promise<OperationData<"data_schemas_add_resource_tags">> {
    return this.client.requestOperation("data_schemas_add_resource_tags", "post", "/data_schemas/{resource_id}/tags", init);
  }

  /** Remove Data schema Tags */
  async data_schemas_delete_resource_tags(init?: OperationInit<"data_schemas_delete_resource_tags">): Promise<OperationData<"data_schemas_delete_resource_tags">> {
    return this.client.requestOperation("data_schemas_delete_resource_tags", "delete", "/data_schemas/{resource_id}/tags", init);
  }

  /** Get Data schema Tags */
  async data_schemas_get_resource_tags(init?: OperationInit<"data_schemas_get_resource_tags">): Promise<OperationData<"data_schemas_get_resource_tags">> {
    return this.client.requestOperation("data_schemas_get_resource_tags", "get", "/data_schemas/{resource_id}/tags", init);
  }

  /** List Data schema Docs */
  async data_schemas_list_resource_docs(init?: OperationInit<"data_schemas_list_resource_docs">): Promise<OperationData<"data_schemas_list_resource_docs">> {
    return this.client.requestOperation("data_schemas_list_resource_docs", "get", "/data_schemas/{resource_id}/docs", init);
  }

  /** Remove Data schema Docs */
  async data_schemas_remove_resource_docs(init?: OperationInit<"data_schemas_remove_resource_docs">): Promise<OperationData<"data_schemas_remove_resource_docs">> {
    return this.client.requestOperation("data_schemas_remove_resource_docs", "delete", "/data_schemas/{resource_id}/docs", init);
  }

  /** Reset Data schema Docs */
  async data_schemas_reset_resource_docs(init?: OperationInit<"data_schemas_reset_resource_docs">): Promise<OperationData<"data_schemas_reset_resource_docs">> {
    return this.client.requestOperation("data_schemas_reset_resource_docs", "post", "/data_schemas/{resource_id}/docs", init);
  }

  /** Update Data schema Tags */
  async data_schemas_update_resource_tags(init?: OperationInit<"data_schemas_update_resource_tags">): Promise<OperationData<"data_schemas_update_resource_tags">> {
    return this.client.requestOperation("data_schemas_update_resource_tags", "put", "/data_schemas/{resource_id}/tags", init);
  }

  /** Update Schema */
  async data_schemas_update_schema(init?: OperationInit<"data_schemas_update_schema">): Promise<OperationData<"data_schemas_update_schema">> {
    return this.client.requestOperation("data_schemas_update_schema", "patch", "/data_schemas/{schema_id}", init);
  }

  /** Update Schema */
  async data_schemas_update_schema_put(init?: OperationInit<"data_schemas_update_schema_put">): Promise<OperationData<"data_schemas_update_schema_put">> {
    return this.client.requestOperation("data_schemas_update_schema_put", "put", "/data_schemas/{schema_id}", init);
  }

  /** Users Access Insights */
  async data_schemas_users_access_insights(init?: OperationInit<"data_schemas_users_access_insights">): Promise<OperationData<"data_schemas_users_access_insights">> {
    return this.client.requestOperation("data_schemas_users_access_insights", "get", "/data_schemas/{resource_id}/users_access_insights", init);
  }

  /** Delete Schema */
  async delete_schema(init?: OperationInit<"delete_schema">): Promise<OperationData<"delete_schema">> {
    return this.client.requestOperation("delete_schema", "delete", "/data_schemas/{schema_id}", init);
  }

  /** Explain Schema Access */
  async explain_schema_access(init?: OperationInit<"explain_schema_access">): Promise<OperationData<"explain_schema_access">> {
    return this.client.requestOperation("explain_schema_access", "get", "/data_schemas/{schema_id}/access", init);
  }

  /** Get Data Schema Metrics */
  async get_data_schema_metrics(init?: OperationInit<"get_data_schema_metrics">): Promise<OperationData<"get_data_schema_metrics">> {
    return this.client.requestOperation("get_data_schema_metrics", "get", "/data_schemas/{data_schema_id}/metrics", init);
  }

  /** Get Data Schema Metrics By Name */
  async get_data_schema_metrics_by_name(init?: OperationInit<"get_data_schema_metrics_by_name">): Promise<OperationData<"get_data_schema_metrics_by_name">> {
    return this.client.requestOperation("get_data_schema_metrics_by_name", "get", "/data_schemas/{data_schema_id}/metrics/{metrics_name}", init);
  }

  /** Get Schema */
  async get_schema(init?: OperationInit<"get_schema">): Promise<OperationData<"get_schema">> {
    return this.client.requestOperation("get_schema", "get", "/data_schemas/{schema_id}", init);
  }

  /** List Public Schemas */
  async list_public_schemas(init?: OperationInit<"list_public_schemas">): Promise<OperationData<"list_public_schemas">> {
    return this.client.requestOperation("list_public_schemas", "get", "/data_schemas/public", init);
  }

  /** List Schemas */
  async list_schemas(init?: OperationInit<"list_schemas">): Promise<OperationData<"list_schemas">> {
    return this.client.requestOperation("list_schemas", "get", "/data_schemas/", init);
  }

  /** Search Data Schemas */
  async search_data_schemas(init?: OperationInit<"search_data_schemas">): Promise<OperationData<"search_data_schemas">> {
    return this.client.requestOperation("search_data_schemas", "post", "/data_schemas/search", init);
  }

  /** Search Data Schemas Tags */
  async search_data_schemas_tags(init?: OperationInit<"search_data_schemas_tags">): Promise<OperationData<"search_data_schemas_tags">> {
    return this.client.requestOperation("search_data_schemas_tags", "post", "/data_schemas/search_tags", init);
  }
}