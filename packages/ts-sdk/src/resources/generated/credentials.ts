import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class CredentialsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_data_credentials">): Promise<OperationData<"get_data_credentials">> {
    return this.client.requestOperation("get_data_credentials", "get", "/data_credentials", init);
  }

  async create(init?: OperationInit<"create_data_credential">): Promise<OperationData<"create_data_credential">> {
    return this.client.requestOperation("create_data_credential", "post", "/data_credentials", init);
  }

  async get(init?: OperationInit<"get_data_credential">): Promise<OperationData<"get_data_credential">> {
    return this.client.requestOperation("get_data_credential", "get", "/data_credentials/{credential_id}", init);
  }

  async update(init?: OperationInit<"update_data_credential">): Promise<OperationData<"update_data_credential">> {
    return this.client.requestOperation("update_data_credential", "put", "/data_credentials/{credential_id}", init);
  }

  async delete(init?: OperationInit<"delete_data_credential">): Promise<OperationData<"delete_data_credential">> {
    return this.client.requestOperation("delete_data_credential", "delete", "/data_credentials/{credential_id}", init);
  }

  /** Copy Credentials */
  async copy_credentials(init?: OperationInit<"copy_credentials">): Promise<OperationData<"copy_credentials">> {
    return this.client.requestOperation("copy_credentials", "post", "/data_credentials/{credentials_id}/copy", init);
  }

  /** Create a Credential */
  async create_data_credential(init?: OperationInit<"create_data_credential">): Promise<OperationData<"create_data_credential">> {
    return this.client.requestOperation("create_data_credential", "post", "/data_credentials", init);
  }

  /** Test credential validity */
  async data_credential_probe(init?: OperationInit<"data_credential_probe">): Promise<OperationData<"data_credential_probe">> {
    return this.client.requestOperation("data_credential_probe", "get", "/data_credentials/{credential_id}/probe", init);
  }

  /** Accessible Resources */
  async data_credentials_accessible_resources(init?: OperationInit<"data_credentials_accessible_resources">): Promise<OperationData<"data_credentials_accessible_resources">> {
    return this.client.requestOperation("data_credentials_accessible_resources", "get", "/data_credentials/accessible", init);
  }

  /** Add Credentials Tags */
  async data_credentials_add_resource_tags(init?: OperationInit<"data_credentials_add_resource_tags">): Promise<OperationData<"data_credentials_add_resource_tags">> {
    return this.client.requestOperation("data_credentials_add_resource_tags", "post", "/data_credentials/{resource_id}/tags", init);
  }

  /** Capture Deployment Intent */
  async data_credentials_capture_deployment_intent(init?: OperationInit<"data_credentials_capture_deployment_intent">): Promise<OperationData<"data_credentials_capture_deployment_intent">> {
    return this.client.requestOperation("data_credentials_capture_deployment_intent", "put", "/data_credentials/{credentials_id}/intent", init);
  }

  /** Capture Deployment Intent */
  async data_credentials_capture_deployment_intent_post(init?: OperationInit<"data_credentials_capture_deployment_intent_post">): Promise<OperationData<"data_credentials_capture_deployment_intent_post">> {
    return this.client.requestOperation("data_credentials_capture_deployment_intent_post", "post", "/data_credentials/{credentials_id}/intent", init);
  }

  /** Get Credentials Schema (all) */
  async data_credentials_credentials_schema(init?: OperationInit<"data_credentials_credentials_schema">): Promise<OperationData<"data_credentials_credentials_schema">> {
    return this.client.requestOperation("data_credentials_credentials_schema", "get", "/data_credentials/format", init);
  }

  /** Get Credentials Schema */
  async data_credentials_credentials_schema_get(init?: OperationInit<"data_credentials_credentials_schema_get">): Promise<OperationData<"data_credentials_credentials_schema_get">> {
    return this.client.requestOperation("data_credentials_credentials_schema_get", "get", "/data_credentials/format/{source_type}", init);
  }

  /** Remove Credentials Tags */
  async data_credentials_delete_resource_tags(init?: OperationInit<"data_credentials_delete_resource_tags">): Promise<OperationData<"data_credentials_delete_resource_tags">> {
    return this.client.requestOperation("data_credentials_delete_resource_tags", "delete", "/data_credentials/{resource_id}/tags", init);
  }

  /** Get Credentials Tags */
  async data_credentials_get_resource_tags(init?: OperationInit<"data_credentials_get_resource_tags">): Promise<OperationData<"data_credentials_get_resource_tags">> {
    return this.client.requestOperation("data_credentials_get_resource_tags", "get", "/data_credentials/{resource_id}/tags", init);
  }

  /** Probe/Authenticate Credentials */
  async data_credentials_probe_credentials_get(init?: OperationInit<"data_credentials_probe_credentials_get">): Promise<OperationData<"data_credentials_probe_credentials_get">> {
    return this.client.requestOperation("data_credentials_probe_credentials_get", "get", "/data_credentials/{credentials_id}/probe/authenticate", init);
  }

  /** Probe Detect Schemas */
  async data_credentials_probe_detect_schemas_credentials(init?: OperationInit<"data_credentials_probe_detect_schemas_credentials">): Promise<OperationData<"data_credentials_probe_detect_schemas_credentials">> {
    return this.client.requestOperation("data_credentials_probe_detect_schemas_credentials", "put", "/data_credentials/{credentials_id}/probe/schemas", init);
  }

  /** Probe Detect Schemas */
  async data_credentials_probe_detect_schemas_credentials_post(init?: OperationInit<"data_credentials_probe_detect_schemas_credentials_post">): Promise<OperationData<"data_credentials_probe_detect_schemas_credentials_post">> {
    return this.client.requestOperation("data_credentials_probe_detect_schemas_credentials_post", "post", "/data_credentials/{credentials_id}/probe/schemas", init);
  }

  /** Probe File Download */
  async data_credentials_probe_file_download_credentials(init?: OperationInit<"data_credentials_probe_file_download_credentials">): Promise<OperationData<"data_credentials_probe_file_download_credentials">> {
    return this.client.requestOperation("data_credentials_probe_file_download_credentials", "put", "/data_credentials/{credentials_id}/probe/file/download", init);
  }

  /** Probe File Download */
  async data_credentials_probe_file_download_credentials_post(init?: OperationInit<"data_credentials_probe_file_download_credentials_post">): Promise<OperationData<"data_credentials_probe_file_download_credentials_post">> {
    return this.client.requestOperation("data_credentials_probe_file_download_credentials_post", "post", "/data_credentials/{credentials_id}/probe/file/download", init);
  }

  /** Probe List Files in Bucket */
  async data_credentials_probe_list_files_in_bucket_credentials(init?: OperationInit<"data_credentials_probe_list_files_in_bucket_credentials">): Promise<OperationData<"data_credentials_probe_list_files_in_bucket_credentials">> {
    return this.client.requestOperation("data_credentials_probe_list_files_in_bucket_credentials", "put", "/data_credentials/{credentials_id}/probe/buckets", init);
  }

  /** Probe List Files in Bucket */
  async data_credentials_probe_list_files_in_bucket_credentials_post(init?: OperationInit<"data_credentials_probe_list_files_in_bucket_credentials_post">): Promise<OperationData<"data_credentials_probe_list_files_in_bucket_credentials_post">> {
    return this.client.requestOperation("data_credentials_probe_list_files_in_bucket_credentials_post", "post", "/data_credentials/{credentials_id}/probe/buckets", init);
  }

  /** Probe Read File */
  async data_credentials_probe_read_file_credentials(init?: OperationInit<"data_credentials_probe_read_file_credentials">): Promise<OperationData<"data_credentials_probe_read_file_credentials">> {
    return this.client.requestOperation("data_credentials_probe_read_file_credentials", "put", "/data_credentials/{credentials_id}/probe/files", init);
  }

  /** Probe Read File */
  async data_credentials_probe_read_file_credentials_post(init?: OperationInit<"data_credentials_probe_read_file_credentials_post">): Promise<OperationData<"data_credentials_probe_read_file_credentials_post">> {
    return this.client.requestOperation("data_credentials_probe_read_file_credentials_post", "post", "/data_credentials/{credentials_id}/probe/files", init);
  }

  /** Probe Search Path */
  async data_credentials_probe_search_path_credentials(init?: OperationInit<"data_credentials_probe_search_path_credentials">): Promise<OperationData<"data_credentials_probe_search_path_credentials">> {
    return this.client.requestOperation("data_credentials_probe_search_path_credentials", "put", "/data_credentials/{credentials_id}/probe/search_path", init);
  }

  /** Probe Search Path */
  async data_credentials_probe_search_path_credentials_post(init?: OperationInit<"data_credentials_probe_search_path_credentials_post">): Promise<OperationData<"data_credentials_probe_search_path_credentials_post">> {
    return this.client.requestOperation("data_credentials_probe_search_path_credentials_post", "post", "/data_credentials/{credentials_id}/probe/search_path", init);
  }

  /** Referenced By */
  async data_credentials_referenced_by(init?: OperationInit<"data_credentials_referenced_by">): Promise<OperationData<"data_credentials_referenced_by">> {
    return this.client.requestOperation("data_credentials_referenced_by", "get", "/data_credentials/{resource_id}/referenced_by", init);
  }

  /** Legacy Summary Route */
  async data_credentials_summary_legacy(init?: OperationInit<"data_credentials_summary_legacy">): Promise<OperationData<"data_credentials_summary_legacy">> {
    return this.client.requestOperation("data_credentials_summary_legacy", "get", "/data_credentials/summary", init);
  }

  /** Update Credentials */
  async data_credentials_update_credentials(init?: OperationInit<"data_credentials_update_credentials">): Promise<OperationData<"data_credentials_update_credentials">> {
    return this.client.requestOperation("data_credentials_update_credentials", "patch", "/data_credentials/{credentials_id}", init);
  }

  /** Update Credentials Tags */
  async data_credentials_update_resource_tags(init?: OperationInit<"data_credentials_update_resource_tags">): Promise<OperationData<"data_credentials_update_resource_tags">> {
    return this.client.requestOperation("data_credentials_update_resource_tags", "put", "/data_credentials/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async data_credentials_users_access_insights(init?: OperationInit<"data_credentials_users_access_insights">): Promise<OperationData<"data_credentials_users_access_insights">> {
    return this.client.requestOperation("data_credentials_users_access_insights", "get", "/data_credentials/{resource_id}/users_access_insights", init);
  }

  /** Get DB Data Types */
  async db_data_types(init?: OperationInit<"db_data_types">): Promise<OperationData<"db_data_types">> {
    return this.client.requestOperation("db_data_types", "get", "/data_credentials/db_data_types/{source_type}", init);
  }

  /** Delete a Credential */
  async delete_data_credential(init?: OperationInit<"delete_data_credential">): Promise<OperationData<"delete_data_credential">> {
    return this.client.requestOperation("delete_data_credential", "delete", "/data_credentials/{credential_id}", init);
  }

  /** Explain Credential Access */
  async explain_credential_access(init?: OperationInit<"explain_credential_access">): Promise<OperationData<"explain_credential_access">> {
    return this.client.requestOperation("explain_credential_access", "get", "/data_credentials/{credential_id}/access", init);
  }

  /** Get Credentials Usage */
  async get_credentials_usage(init?: OperationInit<"get_credentials_usage">): Promise<OperationData<"get_credentials_usage">> {
    return this.client.requestOperation("get_credentials_usage", "get", "/data_credentials/{credentials_id}/usage", init);
  }

  /** Get Credential by ID */
  async get_data_credential(init?: OperationInit<"get_data_credential">): Promise<OperationData<"get_data_credential">> {
    return this.client.requestOperation("get_data_credential", "get", "/data_credentials/{credential_id}", init);
  }

  /** Get Credential by ID with expanded references */
  async get_data_credential_expanded(init?: OperationInit<"get_data_credential_expanded">): Promise<OperationData<"get_data_credential_expanded">> {
    return this.client.requestOperation("get_data_credential_expanded", "get", "/data_credentials/{credential_id}?expand=1", init);
  }

  /** Get All Credentials */
  async get_data_credentials(init?: OperationInit<"get_data_credentials">): Promise<OperationData<"get_data_credentials">> {
    return this.client.requestOperation("get_data_credentials", "get", "/data_credentials", init);
  }

  /** Iceberg Migration Status */
  async iceberg_migration_status(init?: OperationInit<"iceberg_migration_status">): Promise<OperationData<"iceberg_migration_status">> {
    return this.client.requestOperation("iceberg_migration_status", "get", "/data_credentials/{credentials_id}/migrate/iceberg/{run_id}/status", init);
  }

  /** List Public Credentials */
  async list_public_credentials(init?: OperationInit<"list_public_credentials">): Promise<OperationData<"list_public_credentials">> {
    return this.client.requestOperation("list_public_credentials", "get", "/data_credentials/public", init);
  }

  /** Migrate to Iceberg */
  async migrate_iceberg(init?: OperationInit<"migrate_iceberg">): Promise<OperationData<"migrate_iceberg">> {
    return this.client.requestOperation("migrate_iceberg", "post", "/data_credentials/{credentials_id}/migrate/iceberg", init);
  }

  /** Preview Connector Content */
  async preview_connector_content(init?: OperationInit<"preview_connector_content">): Promise<OperationData<"preview_connector_content">> {
    return this.client.requestOperation("preview_connector_content", "post", "/data_credentials/{credential_id}/probe/sample", init);
  }

  /** Preview Storage Structure */
  async preview_storage_structure(init?: OperationInit<"preview_storage_structure">): Promise<OperationData<"preview_storage_structure">> {
    return this.client.requestOperation("preview_storage_structure", "post", "/data_credentials/{credential_id}/probe/tree", init);
  }

  /** Probe Database Metadata */
  async probe_database_metadata_credentials(init?: OperationInit<"probe_database_metadata_credentials">): Promise<OperationData<"probe_database_metadata_credentials">> {
    return this.client.requestOperation("probe_database_metadata_credentials", "post", "/data_credentials/{credentials_id}/probe/database/metadata", init);
  }

  /** Probe Database Query Usage */
  async probe_database_query_usage_credentials(init?: OperationInit<"probe_database_query_usage_credentials">): Promise<OperationData<"probe_database_query_usage_credentials">> {
    return this.client.requestOperation("probe_database_query_usage_credentials", "post", "/data_credentials/{credentials_id}/probe/database/query-usage", init);
  }

  /** Probe List Buckets */
  async probe_list_buckets_credentials(init?: OperationInit<"probe_list_buckets_credentials">): Promise<OperationData<"probe_list_buckets_credentials">> {
    return this.client.requestOperation("probe_list_buckets_credentials", "get", "/data_credentials/{credentials_id}/probe/list", init);
  }

  /** Probe Summary */
  async probe_summary_credentials(init?: OperationInit<"probe_summary_credentials">): Promise<OperationData<"probe_summary_credentials">> {
    return this.client.requestOperation("probe_summary_credentials", "get", "/data_credentials/{credentials_id}/probe/summary", init);
  }

  /** Refresh Credentials */
  async refresh_credentials(init?: OperationInit<"refresh_credentials">): Promise<OperationData<"refresh_credentials">> {
    return this.client.requestOperation("refresh_credentials", "put", "/data_credentials/{credentials_id}/refresh", init);
  }

  /** Search Credentials */
  async search_credentials(init?: OperationInit<"search_credentials">): Promise<OperationData<"search_credentials">> {
    return this.client.requestOperation("search_credentials", "post", "/data_credentials/search", init);
  }

  /** Search Credentials by Tags */
  async search_data_credentials_tags(init?: OperationInit<"search_data_credentials_tags">): Promise<OperationData<"search_data_credentials_tags">> {
    return this.client.requestOperation("search_data_credentials_tags", "post", "/data_credentials/search_tags", init);
  }

  /** Update Credential */
  async update_data_credential(init?: OperationInit<"update_data_credential">): Promise<OperationData<"update_data_credential">> {
    return this.client.requestOperation("update_data_credential", "put", "/data_credentials/{credential_id}", init);
  }
}