import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class NexsetsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_nexsets">): Promise<OperationData<"get_nexsets">> {
    return this.client.requestOperation("get_nexsets", "get", "/data_sets", init);
  }

  async create(init?: OperationInit<"create_nexset">): Promise<OperationData<"create_nexset">> {
    return this.client.requestOperation("create_nexset", "post", "/data_sets", init);
  }

  async get(init?: OperationInit<"get_nexset">): Promise<OperationData<"get_nexset">> {
    return this.client.requestOperation("get_nexset", "get", "/data_sets/{set_id}", init);
  }

  async update(init?: OperationInit<"update_nexset">): Promise<OperationData<"update_nexset">> {
    return this.client.requestOperation("update_nexset", "put", "/data_sets/{set_id}", init);
  }

  async delete(init?: OperationInit<"delete_nexset">): Promise<OperationData<"delete_nexset">> {
    return this.client.requestOperation("delete_nexset", "delete", "/data_sets/{set_id}", init);
  }

  /** Activate Data Set Api Key */
  async activate_data_set_api_key(init?: OperationInit<"activate_data_set_api_key">): Promise<OperationData<"activate_data_set_api_key">> {
    return this.client.requestOperation("activate_data_set_api_key", "put", "/data_sets/{data_set_id}/api_keys/{api_key_id}/activate", init);
  }

  /** Activate Flow Via Data Set */
  async activate_flow_via_data_set(init?: OperationInit<"activate_flow_via_data_set">): Promise<OperationData<"activate_flow_via_data_set">> {
    return this.client.requestOperation("activate_flow_via_data_set", "put", "/data_sets/{resource_id}/flow/activate", init);
  }

  /** Activate Nexset */
  async activate_nexset(init?: OperationInit<"activate_nexset">): Promise<OperationData<"activate_nexset">> {
    return this.client.requestOperation("activate_nexset", "put", "/data_sets/{set_id}/activate", init);
  }

  /** Add Flow Accessors Via Data Set */
  async add_flow_accessors_via_data_set(init?: OperationInit<"add_flow_accessors_via_data_set">): Promise<OperationData<"add_flow_accessors_via_data_set">> {
    return this.client.requestOperation("add_flow_accessors_via_data_set", "put", "/data_sets/{resource_id}/flow/accessors", init);
  }

  /** Add Flow Docs Via Data Set */
  async add_flow_docs_via_data_set(init?: OperationInit<"add_flow_docs_via_data_set">): Promise<OperationData<"add_flow_docs_via_data_set">> {
    return this.client.requestOperation("add_flow_docs_via_data_set", "put", "/data_sets/{resource_id}/flow/docs", init);
  }

  /** Add Sharers */
  async add_sharers(init?: OperationInit<"add_sharers">): Promise<OperationData<"add_sharers">> {
    return this.client.requestOperation("add_sharers", "put", "/data_sets/{data_set_id}/sharers", init);
  }

  /** Copy Flow Via Data Set */
  async copy_flow_via_data_set(init?: OperationInit<"copy_flow_via_data_set">): Promise<OperationData<"copy_flow_via_data_set">> {
    return this.client.requestOperation("copy_flow_via_data_set", "post", "/data_sets/{resource_id}/flow/copy", init);
  }

  /** Copy Nexset */
  async copy_nexset(init?: OperationInit<"copy_nexset">): Promise<OperationData<"copy_nexset">> {
    return this.client.requestOperation("copy_nexset", "post", "/data_sets/{set_id}/copy", init);
  }

  /** Create Catalog Ref */
  async create_catalog_ref(init?: OperationInit<"create_catalog_ref">): Promise<OperationData<"create_catalog_ref">> {
    return this.client.requestOperation("create_catalog_ref", "post", "/data_sets/{data_set_id}/catalog_refs", init);
  }

  /** Create Catalog Ref Collection */
  async create_catalog_ref_collection(init?: OperationInit<"create_catalog_ref_collection">): Promise<OperationData<"create_catalog_ref_collection">> {
    return this.client.requestOperation("create_catalog_ref_collection", "post", "/data_sets/catalog_refs", init);
  }

  /** Create Data Set Api Key */
  async create_data_set_api_key(init?: OperationInit<"create_data_set_api_key">): Promise<OperationData<"create_data_set_api_key">> {
    return this.client.requestOperation("create_data_set_api_key", "post", "/data_sets/{data_set_id}/api_keys", init);
  }

  /** Create Data Set Quarantine Setting */
  async create_data_set_quarantine_setting(init?: OperationInit<"create_data_set_quarantine_setting">): Promise<OperationData<"create_data_set_quarantine_setting">> {
    return this.client.requestOperation("create_data_set_quarantine_setting", "post", "/data_sets/{data_set_id}/quarantine_settings", init);
  }

  /** Create a Nexset */
  async create_nexset(init?: OperationInit<"create_nexset">): Promise<OperationData<"create_nexset">> {
    return this.client.requestOperation("create_nexset", "post", "/data_sets", init);
  }

  /** Generate an AI suggestion for Nexset documentation */
  async data_set_docs_recommendation(init?: OperationInit<"data_set_docs_recommendation">): Promise<OperationData<"data_set_docs_recommendation">> {
    return this.client.requestOperation("data_set_docs_recommendation", "post", "/data_sets/{data_set_id}/docs/recommendation", init);
  }

  /** Accessible Resources */
  async data_sets_accessible_resources(init?: OperationInit<"data_sets_accessible_resources">): Promise<OperationData<"data_sets_accessible_resources">> {
    return this.client.requestOperation("data_sets_accessible_resources", "get", "/data_sets/accessible", init);
  }

  /** Add Data set Docs */
  async data_sets_add_resource_docs(init?: OperationInit<"data_sets_add_resource_docs">): Promise<OperationData<"data_sets_add_resource_docs">> {
    return this.client.requestOperation("data_sets_add_resource_docs", "put", "/data_sets/{resource_id}/docs", init);
  }

  /** Add Data set Tags */
  async data_sets_add_resource_tags(init?: OperationInit<"data_sets_add_resource_tags">): Promise<OperationData<"data_sets_add_resource_tags">> {
    return this.client.requestOperation("data_sets_add_resource_tags", "post", "/data_sets/{resource_id}/tags", init);
  }

  /** Apply Transformation */
  async data_sets_apply_transformation(init?: OperationInit<"data_sets_apply_transformation">): Promise<OperationData<"data_sets_apply_transformation">> {
    return this.client.requestOperation("data_sets_apply_transformation", "put", "/data_sets/{data_set_id}/transform", init);
  }

  /** Apply Transformation */
  async data_sets_apply_transformation_post(init?: OperationInit<"data_sets_apply_transformation_post">): Promise<OperationData<"data_sets_apply_transformation_post">> {
    return this.client.requestOperation("data_sets_apply_transformation_post", "post", "/data_sets/{data_set_id}/transform", init);
  }

  /** Create Dashboard Transform */
  async data_sets_create_dashboard_transform(init?: OperationInit<"data_sets_create_dashboard_transform">): Promise<OperationData<"data_sets_create_dashboard_transform">> {
    return this.client.requestOperation("data_sets_create_dashboard_transform", "post", "/data_sets/{data_set_id}/dashboard_transforms", init);
  }

  /** Delete Dashboard Transform */
  async data_sets_delete_dashboard_transform(init?: OperationInit<"data_sets_delete_dashboard_transform">): Promise<OperationData<"data_sets_delete_dashboard_transform">> {
    return this.client.requestOperation("data_sets_delete_dashboard_transform", "delete", "/data_sets/{data_set_id}/dashboard_transforms", init);
  }

  /** Remove Data set Tags */
  async data_sets_delete_resource_tags(init?: OperationInit<"data_sets_delete_resource_tags">): Promise<OperationData<"data_sets_delete_resource_tags">> {
    return this.client.requestOperation("data_sets_delete_resource_tags", "delete", "/data_sets/{resource_id}/tags", init);
  }

  /** Flow Audit Log */
  async data_sets_flow_audit_log(init?: OperationInit<"data_sets_flow_audit_log">): Promise<OperationData<"data_sets_flow_audit_log">> {
    return this.client.requestOperation("data_sets_flow_audit_log", "get", "/data_sets/{resource_id}/flow/audit_log", init);
  }

  /** Flow Dashboard */
  async data_sets_flow_dashboard(init?: OperationInit<"data_sets_flow_dashboard">): Promise<OperationData<"data_sets_flow_dashboard">> {
    return this.client.requestOperation("data_sets_flow_dashboard", "get", "/data_sets/{resource_id}/flow/dashboard", init);
  }

  /** Flow Logs */
  async data_sets_flow_logs(init?: OperationInit<"data_sets_flow_logs">): Promise<OperationData<"data_sets_flow_logs">> {
    return this.client.requestOperation("data_sets_flow_logs", "get", "/data_sets/{resource_id}/flow/logs", init);
  }

  /** Flow Metrics */
  async data_sets_flow_metrics(init?: OperationInit<"data_sets_flow_metrics">): Promise<OperationData<"data_sets_flow_metrics">> {
    return this.client.requestOperation("data_sets_flow_metrics", "get", "/data_sets/{resource_id}/flow/metrics", init);
  }

  /** Flow Status Metrics */
  async data_sets_flow_status_metrics(init?: OperationInit<"data_sets_flow_status_metrics">): Promise<OperationData<"data_sets_flow_status_metrics">> {
    return this.client.requestOperation("data_sets_flow_status_metrics", "get", "/data_sets/{resource_id}/flow/status_metrics", init);
  }

  /** Get Quarantine Aggregation */
  async data_sets_get_quarantine_aggregation(init?: OperationInit<"data_sets_get_quarantine_aggregation">): Promise<OperationData<"data_sets_get_quarantine_aggregation">> {
    return this.client.requestOperation("data_sets_get_quarantine_aggregation", "get", "/data_sets/{resource_id}/quarantine_aggregation", init);
  }

  /** Get Data set Tags */
  async data_sets_get_resource_tags(init?: OperationInit<"data_sets_get_resource_tags">): Promise<OperationData<"data_sets_get_resource_tags">> {
    return this.client.requestOperation("data_sets_get_resource_tags", "get", "/data_sets/{resource_id}/tags", init);
  }

  /** List Data set Docs */
  async data_sets_list_resource_docs(init?: OperationInit<"data_sets_list_resource_docs">): Promise<OperationData<"data_sets_list_resource_docs">> {
    return this.client.requestOperation("data_sets_list_resource_docs", "get", "/data_sets/{resource_id}/docs", init);
  }

  /** Probe Read Quarantine Data Set */
  async data_sets_probe_read_quarantine_data_set(init?: OperationInit<"data_sets_probe_read_quarantine_data_set">): Promise<OperationData<"data_sets_probe_read_quarantine_data_set">> {
    return this.client.requestOperation("data_sets_probe_read_quarantine_data_set", "put", "/data_sets/{data_set_id}/probe/quarantine/sample", init);
  }

  /** Probe Read Quarantine Data Set */
  async data_sets_probe_read_quarantine_data_set_post(init?: OperationInit<"data_sets_probe_read_quarantine_data_set_post">): Promise<OperationData<"data_sets_probe_read_quarantine_data_set_post">> {
    return this.client.requestOperation("data_sets_probe_read_quarantine_data_set_post", "post", "/data_sets/{data_set_id}/probe/quarantine/sample", init);
  }

  /** Referenced By */
  async data_sets_referenced_by(init?: OperationInit<"data_sets_referenced_by">): Promise<OperationData<"data_sets_referenced_by">> {
    return this.client.requestOperation("data_sets_referenced_by", "get", "/data_sets/{resource_id}/referenced_by", init);
  }

  /** Remove Data set Docs */
  async data_sets_remove_resource_docs(init?: OperationInit<"data_sets_remove_resource_docs">): Promise<OperationData<"data_sets_remove_resource_docs">> {
    return this.client.requestOperation("data_sets_remove_resource_docs", "delete", "/data_sets/{resource_id}/docs", init);
  }

  /** Reset Data set Docs */
  async data_sets_reset_resource_docs(init?: OperationInit<"data_sets_reset_resource_docs">): Promise<OperationData<"data_sets_reset_resource_docs">> {
    return this.client.requestOperation("data_sets_reset_resource_docs", "post", "/data_sets/{resource_id}/docs", init);
  }

  /** Show Dashboard Transform */
  async data_sets_show_dashboard_transform(init?: OperationInit<"data_sets_show_dashboard_transform">): Promise<OperationData<"data_sets_show_dashboard_transform">> {
    return this.client.requestOperation("data_sets_show_dashboard_transform", "get", "/data_sets/{data_set_id}/dashboard_transforms", init);
  }

  /** Trigger Quarantine Aggregation */
  async data_sets_trigger_quarantine_aggregation(init?: OperationInit<"data_sets_trigger_quarantine_aggregation">): Promise<OperationData<"data_sets_trigger_quarantine_aggregation">> {
    return this.client.requestOperation("data_sets_trigger_quarantine_aggregation", "post", "/data_sets/{resource_id}/trigger_quarantine_aggregation", init);
  }

  /** Update Catalog Ref */
  async data_sets_update_catalog_ref(init?: OperationInit<"data_sets_update_catalog_ref">): Promise<OperationData<"data_sets_update_catalog_ref">> {
    return this.client.requestOperation("data_sets_update_catalog_ref", "patch", "/data_sets/{data_set_id}/catalog_refs/{ref_id}", init);
  }

  /** Update Catalog Ref Collection */
  async data_sets_update_catalog_ref_collection(init?: OperationInit<"data_sets_update_catalog_ref_collection">): Promise<OperationData<"data_sets_update_catalog_ref_collection">> {
    return this.client.requestOperation("data_sets_update_catalog_ref_collection", "patch", "/data_sets/catalog_refs/{ref_id}", init);
  }

  /** Update Catalog Ref Collection */
  async data_sets_update_catalog_ref_collection_put(init?: OperationInit<"data_sets_update_catalog_ref_collection_put">): Promise<OperationData<"data_sets_update_catalog_ref_collection_put">> {
    return this.client.requestOperation("data_sets_update_catalog_ref_collection_put", "put", "/data_sets/catalog_refs/{ref_id}", init);
  }

  /** Update Catalog Ref */
  async data_sets_update_catalog_ref_put(init?: OperationInit<"data_sets_update_catalog_ref_put">): Promise<OperationData<"data_sets_update_catalog_ref_put">> {
    return this.client.requestOperation("data_sets_update_catalog_ref_put", "put", "/data_sets/{data_set_id}/catalog_refs/{ref_id}", init);
  }

  /** Update Dashboard Transform */
  async data_sets_update_dashboard_transform(init?: OperationInit<"data_sets_update_dashboard_transform">): Promise<OperationData<"data_sets_update_dashboard_transform">> {
    return this.client.requestOperation("data_sets_update_dashboard_transform", "put", "/data_sets/{data_set_id}/dashboard_transforms", init);
  }

  /** Update Data Set */
  async data_sets_update_data_set(init?: OperationInit<"data_sets_update_data_set">): Promise<OperationData<"data_sets_update_data_set">> {
    return this.client.requestOperation("data_sets_update_data_set", "patch", "/data_sets/{data_set_id}", init);
  }

  /** Update Data set Tags */
  async data_sets_update_resource_tags(init?: OperationInit<"data_sets_update_resource_tags">): Promise<OperationData<"data_sets_update_resource_tags">> {
    return this.client.requestOperation("data_sets_update_resource_tags", "put", "/data_sets/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async data_sets_users_access_insights(init?: OperationInit<"data_sets_users_access_insights">): Promise<OperationData<"data_sets_users_access_insights">> {
    return this.client.requestOperation("data_sets_users_access_insights", "get", "/data_sets/{resource_id}/users_access_insights", init);
  }

  /** Delete Catalog Ref */
  async delete_catalog_ref(init?: OperationInit<"delete_catalog_ref">): Promise<OperationData<"delete_catalog_ref">> {
    return this.client.requestOperation("delete_catalog_ref", "delete", "/data_sets/{data_set_id}/catalog_refs/{ref_id}", init);
  }

  /** Delete Catalog Ref Collection */
  async delete_catalog_ref_collection(init?: OperationInit<"delete_catalog_ref_collection">): Promise<OperationData<"delete_catalog_ref_collection">> {
    return this.client.requestOperation("delete_catalog_ref_collection", "delete", "/data_sets/catalog_refs/{ref_id}", init);
  }

  /** Delete Data Set Api Key */
  async delete_data_set_api_key(init?: OperationInit<"delete_data_set_api_key">): Promise<OperationData<"delete_data_set_api_key">> {
    return this.client.requestOperation("delete_data_set_api_key", "delete", "/data_sets/{data_set_id}/api_keys/{api_key_id}", init);
  }

  /** Delete Data Set Quarantine Setting */
  async delete_data_set_quarantine_setting(init?: OperationInit<"delete_data_set_quarantine_setting">): Promise<OperationData<"delete_data_set_quarantine_setting">> {
    return this.client.requestOperation("delete_data_set_quarantine_setting", "delete", "/data_sets/{data_set_id}/quarantine_settings", init);
  }

  /** Delete Flow Via Data Set */
  async delete_flow_via_data_set(init?: OperationInit<"delete_flow_via_data_set">): Promise<OperationData<"delete_flow_via_data_set">> {
    return this.client.requestOperation("delete_flow_via_data_set", "delete", "/data_sets/{resource_id}/flow", init);
  }

  /** Delete a Nexset */
  async delete_nexset(init?: OperationInit<"delete_nexset">): Promise<OperationData<"delete_nexset">> {
    return this.client.requestOperation("delete_nexset", "delete", "/data_sets/{set_id}", init);
  }

  /** Explain Data Set Access */
  async explain_data_set_access(init?: OperationInit<"explain_data_set_access">): Promise<OperationData<"explain_data_set_access">> {
    return this.client.requestOperation("explain_data_set_access", "get", "/data_sets/{data_set_id}/access", init);
  }

  /** Flow Run Status Via Data Set */
  async flow_run_status_via_data_set(init?: OperationInit<"flow_run_status_via_data_set">): Promise<OperationData<"flow_run_status_via_data_set">> {
    return this.client.requestOperation("flow_run_status_via_data_set", "get", "/data_sets/{resource_id}/flow/run_status", init);
  }

  /** Get Catalog Ref */
  async get_catalog_ref(init?: OperationInit<"get_catalog_ref">): Promise<OperationData<"get_catalog_ref">> {
    return this.client.requestOperation("get_catalog_ref", "get", "/data_sets/{data_set_id}/catalog_refs/{ref_id}", init);
  }

  /** Get Catalog Ref Collection */
  async get_catalog_ref_collection(init?: OperationInit<"get_catalog_ref_collection">): Promise<OperationData<"get_catalog_ref_collection">> {
    return this.client.requestOperation("get_catalog_ref_collection", "get", "/data_sets/catalog_refs/{ref_id}", init);
  }

  /** Get Data Set Api Key */
  async get_data_set_api_key(init?: OperationInit<"get_data_set_api_key">): Promise<OperationData<"get_data_set_api_key">> {
    return this.client.requestOperation("get_data_set_api_key", "get", "/data_sets/{data_set_id}/api_keys/{api_key_id}", init);
  }

  /** Get Data Set Characteristics */
  async get_data_set_characteristics(init?: OperationInit<"get_data_set_characteristics">): Promise<OperationData<"get_data_set_characteristics">> {
    return this.client.requestOperation("get_data_set_characteristics", "get", "/data_sets/{data_set_id}/characteristics", init);
  }

  /** Get Data Set Data Update Time */
  async get_data_set_data_update_time(init?: OperationInit<"get_data_set_data_update_time">): Promise<OperationData<"get_data_set_data_update_time">> {
    return this.client.requestOperation("get_data_set_data_update_time", "get", "/data_sets/{data_set_id}/data_update_time", init);
  }

  /** Get Data Set Metrics */
  async get_data_set_metrics(init?: OperationInit<"get_data_set_metrics">): Promise<OperationData<"get_data_set_metrics">> {
    return this.client.requestOperation("get_data_set_metrics", "get", "/data_sets/{data_set_id}/metrics", init);
  }

  /** Get Data Set Metrics By Name */
  async get_data_set_metrics_by_name(init?: OperationInit<"get_data_set_metrics_by_name">): Promise<OperationData<"get_data_set_metrics_by_name">> {
    return this.client.requestOperation("get_data_set_metrics_by_name", "get", "/data_sets/{data_set_id}/metrics/{metrics_name}", init);
  }

  /** Get Data Set Metrics Files */
  async get_data_set_metrics_files(init?: OperationInit<"get_data_set_metrics_files">): Promise<OperationData<"get_data_set_metrics_files">> {
    return this.client.requestOperation("get_data_set_metrics_files", "get", "/data_sets/{data_set_id}/metrics/files", init);
  }

  /** Get Data Set Metrics Files Details */
  async get_data_set_metrics_files_details(init?: OperationInit<"get_data_set_metrics_files_details">): Promise<OperationData<"get_data_set_metrics_files_details">> {
    return this.client.requestOperation("get_data_set_metrics_files_details", "get", "/data_sets/{data_set_id}/metrics/files_details", init);
  }

  /** Get Data Set Metrics Files Stats */
  async get_data_set_metrics_files_stats(init?: OperationInit<"get_data_set_metrics_files_stats">): Promise<OperationData<"get_data_set_metrics_files_stats">> {
    return this.client.requestOperation("get_data_set_metrics_files_stats", "get", "/data_sets/{data_set_id}/metrics/files_stats", init);
  }

  /** Get Data Set Metrics Quarantine Files */
  async get_data_set_metrics_quarantine_files(init?: OperationInit<"get_data_set_metrics_quarantine_files">): Promise<OperationData<"get_data_set_metrics_quarantine_files">> {
    return this.client.requestOperation("get_data_set_metrics_quarantine_files", "get", "/data_sets/{data_set_id}/metrics/quarantine_files", init);
  }

  /** Get Data Set Metrics Run Summary */
  async get_data_set_metrics_run_summary(init?: OperationInit<"get_data_set_metrics_run_summary">): Promise<OperationData<"get_data_set_metrics_run_summary">> {
    return this.client.requestOperation("get_data_set_metrics_run_summary", "get", "/data_sets/{data_set_id}/metrics/run_summary", init);
  }

  /** Get Data Set Offset */
  async get_data_set_offset(init?: OperationInit<"get_data_set_offset">): Promise<OperationData<"get_data_set_offset">> {
    return this.client.requestOperation("get_data_set_offset", "get", "/data_sets/{data_set_id}/offset", init);
  }

  /** Get Data Set Quarantine Offset */
  async get_data_set_quarantine_offset(init?: OperationInit<"get_data_set_quarantine_offset">): Promise<OperationData<"get_data_set_quarantine_offset">> {
    return this.client.requestOperation("get_data_set_quarantine_offset", "get", "/data_sets/{data_set_id}/quarantine/offset", init);
  }

  /** Get Data Set Quarantine Setting */
  async get_data_set_quarantine_settings(init?: OperationInit<"get_data_set_quarantine_settings">): Promise<OperationData<"get_data_set_quarantine_settings">> {
    return this.client.requestOperation("get_data_set_quarantine_settings", "get", "/data_sets/{data_set_id}/quarantine_settings", init);
  }

  /** Get Data Set Summary */
  async get_data_set_summary(init?: OperationInit<"get_data_set_summary">): Promise<OperationData<"get_data_set_summary">> {
    return this.client.requestOperation("get_data_set_summary", "get", "/data_sets/{data_set_id}/summary", init);
  }

  /** Get a Nexset */
  async get_nexset(init?: OperationInit<"get_nexset">): Promise<OperationData<"get_nexset">> {
    return this.client.requestOperation("get_nexset", "get", "/data_sets/{set_id}", init);
  }

  /** Get Nexset Samples */
  async get_nexset_samples(init?: OperationInit<"get_nexset_samples">): Promise<OperationData<"get_nexset_samples">> {
    return this.client.requestOperation("get_nexset_samples", "get", "/data_sets/{set_id}/samples", init);
  }

  /** Get All Nexsets */
  async get_nexsets(init?: OperationInit<"get_nexsets">): Promise<OperationData<"get_nexsets">> {
    return this.client.requestOperation("get_nexsets", "get", "/data_sets", init);
  }

  /** Get Semantic Schemas */
  async get_semantic_schemas(init?: OperationInit<"get_semantic_schemas">): Promise<OperationData<"get_semantic_schemas">> {
    return this.client.requestOperation("get_semantic_schemas", "get", "/data_sets/{data_set_id}/semantic_schemas", init);
  }

  /** List All Data Set Ids */
  async list_all_data_set_ids(init?: OperationInit<"list_all_data_set_ids">): Promise<OperationData<"list_all_data_set_ids">> {
    return this.client.requestOperation("list_all_data_set_ids", "get", "/data_sets/all/ids", init);
  }

  /** List All Data Sets Condensed */
  async list_all_data_sets_condensed(init?: OperationInit<"list_all_data_sets_condensed">): Promise<OperationData<"list_all_data_sets_condensed">> {
    return this.client.requestOperation("list_all_data_sets_condensed", "get", "/data_sets/all/condensed", init);
  }

  /** List Catalog Refs Collection */
  async list_catalog_refs_collection(init?: OperationInit<"list_catalog_refs_collection">): Promise<OperationData<"list_catalog_refs_collection">> {
    return this.client.requestOperation("list_catalog_refs_collection", "get", "/data_sets/catalog_refs", init);
  }

  /** List Data Set Api Keys */
  async list_data_set_api_keys(init?: OperationInit<"list_data_set_api_keys">): Promise<OperationData<"list_data_set_api_keys">> {
    return this.client.requestOperation("list_data_set_api_keys", "get", "/data_sets/{data_set_id}/api_keys", init);
  }

  /** List Data Set Summaries */
  async list_data_set_summaries(init?: OperationInit<"list_data_set_summaries">): Promise<OperationData<"list_data_set_summaries">> {
    return this.client.requestOperation("list_data_set_summaries", "get", "/data_sets/summary", init);
  }

  /** List Flow Accessors Via Data Set */
  async list_flow_accessors_via_data_set(init?: OperationInit<"list_flow_accessors_via_data_set">): Promise<OperationData<"list_flow_accessors_via_data_set">> {
    return this.client.requestOperation("list_flow_accessors_via_data_set", "get", "/data_sets/{resource_id}/flow/accessors", init);
  }

  /** List Flow Docs Via Data Set */
  async list_flow_docs_via_data_set(init?: OperationInit<"list_flow_docs_via_data_set">): Promise<OperationData<"list_flow_docs_via_data_set">> {
    return this.client.requestOperation("list_flow_docs_via_data_set", "get", "/data_sets/{resource_id}/flow/docs", init);
  }

  /** Nexset API Compatible */
  async list_nexset_api_compatible(init?: OperationInit<"list_nexset_api_compatible">): Promise<OperationData<"list_nexset_api_compatible">> {
    return this.client.requestOperation("list_nexset_api_compatible", "get", "/data_sets/nexset_api_compatible", init);
  }

  /** List Public Data Sets */
  async list_public_data_sets(init?: OperationInit<"list_public_data_sets">): Promise<OperationData<"list_public_data_sets">> {
    return this.client.requestOperation("list_public_data_sets", "get", "/data_sets/public", init);
  }

  /** Shared By User (Rails: 405) */
  async list_shared_by_user(init?: OperationInit<"list_shared_by_user">): Promise<OperationData<"list_shared_by_user">> {
    return this.client.requestOperation("list_shared_by_user", "get", "/data_sets/shared", init);
  }

  /** List Shared With User */
  async list_shared_with_user(init?: OperationInit<"list_shared_with_user">): Promise<OperationData<"list_shared_with_user">> {
    return this.client.requestOperation("list_shared_with_user", "get", "/data_sets/available", init);
  }

  /** List Sharers */
  async list_sharers(init?: OperationInit<"list_sharers">): Promise<OperationData<"list_sharers">> {
    return this.client.requestOperation("list_sharers", "get", "/data_sets/{data_set_id}/sharers", init);
  }

  /** Sync API Compatible (alias) */
  async list_sync_api_compatible(init?: OperationInit<"list_sync_api_compatible">): Promise<OperationData<"list_sync_api_compatible">> {
    return this.client.requestOperation("list_sync_api_compatible", "get", "/data_sets/sync_api_compatible", init);
  }

  /** Mark Shared */
  async mark_shared(init?: OperationInit<"mark_shared">): Promise<OperationData<"mark_shared">> {
    return this.client.requestOperation("mark_shared", "put", "/data_sets/{data_set_id}/sharers/shared", init);
  }

  /** Pause All Data Set Api Keys */
  async pause_all_data_set_api_keys(init?: OperationInit<"pause_all_data_set_api_keys">): Promise<OperationData<"pause_all_data_set_api_keys">> {
    return this.client.requestOperation("pause_all_data_set_api_keys", "put", "/data_sets/{data_set_id}/api_keys/pause", init);
  }

  /** Pause Data Set Api Key */
  async pause_data_set_api_key(init?: OperationInit<"pause_data_set_api_key">): Promise<OperationData<"pause_data_set_api_key">> {
    return this.client.requestOperation("pause_data_set_api_key", "put", "/data_sets/{data_set_id}/api_keys/{api_key_id}/pause", init);
  }

  /** Pause Flow Via Data Set */
  async pause_flow_via_data_set(init?: OperationInit<"pause_flow_via_data_set">): Promise<OperationData<"pause_flow_via_data_set">> {
    return this.client.requestOperation("pause_flow_via_data_set", "put", "/data_sets/{resource_id}/flow/pause", init);
  }

  /** Pause Nexset */
  async pause_nexset(init?: OperationInit<"pause_nexset">): Promise<OperationData<"pause_nexset">> {
    return this.client.requestOperation("pause_nexset", "put", "/data_sets/{set_id}/pause", init);
  }

  /** Put Data Set Samples */
  async put_data_set_samples(init?: OperationInit<"put_data_set_samples">): Promise<OperationData<"put_data_set_samples">> {
    return this.client.requestOperation("put_data_set_samples", "put", "/data_sets/{data_set_id}/samples", init);
  }

  /** Remove Flow Accessors Via Data Set */
  async remove_flow_accessors_via_data_set(init?: OperationInit<"remove_flow_accessors_via_data_set">): Promise<OperationData<"remove_flow_accessors_via_data_set">> {
    return this.client.requestOperation("remove_flow_accessors_via_data_set", "delete", "/data_sets/{resource_id}/flow/accessors", init);
  }

  /** Remove Flow Docs Via Data Set */
  async remove_flow_docs_via_data_set(init?: OperationInit<"remove_flow_docs_via_data_set">): Promise<OperationData<"remove_flow_docs_via_data_set">> {
    return this.client.requestOperation("remove_flow_docs_via_data_set", "delete", "/data_sets/{resource_id}/flow/docs", init);
  }

  /** Remove Sharers */
  async remove_sharers(init?: OperationInit<"remove_sharers">): Promise<OperationData<"remove_sharers">> {
    return this.client.requestOperation("remove_sharers", "delete", "/data_sets/{data_set_id}/sharers", init);
  }

  /** Reset Flow Accessors Via Data Set */
  async reset_flow_accessors_via_data_set(init?: OperationInit<"reset_flow_accessors_via_data_set">): Promise<OperationData<"reset_flow_accessors_via_data_set">> {
    return this.client.requestOperation("reset_flow_accessors_via_data_set", "post", "/data_sets/{resource_id}/flow/accessors", init);
  }

  /** Reset Flow Docs Via Data Set */
  async reset_flow_docs_via_data_set(init?: OperationInit<"reset_flow_docs_via_data_set">): Promise<OperationData<"reset_flow_docs_via_data_set">> {
    return this.client.requestOperation("reset_flow_docs_via_data_set", "post", "/data_sets/{resource_id}/flow/docs", init);
  }

  /** Reset Sharers */
  async reset_sharers(init?: OperationInit<"reset_sharers">): Promise<OperationData<"reset_sharers">> {
    return this.client.requestOperation("reset_sharers", "post", "/data_sets/{data_set_id}/sharers", init);
  }

  /** Rotate Data Set Api Key */
  async rotate_data_set_api_key(init?: OperationInit<"rotate_data_set_api_key">): Promise<OperationData<"rotate_data_set_api_key">> {
    return this.client.requestOperation("rotate_data_set_api_key", "put", "/data_sets/{data_set_id}/api_keys/{api_key_id}/rotate", init);
  }

  /** Search Data Characteristics */
  async search_data_characteristics(init?: OperationInit<"search_data_characteristics">): Promise<OperationData<"search_data_characteristics">> {
    return this.client.requestOperation("search_data_characteristics", "get", "/data_sets/characteristics/search", init);
  }

  /** Search Data Set Api Keys */
  async search_data_set_api_keys(init?: OperationInit<"search_data_set_api_keys">): Promise<OperationData<"search_data_set_api_keys">> {
    return this.client.requestOperation("search_data_set_api_keys", "post", "/data_sets/{data_set_id}/api_keys/search", init);
  }

  /** Search Data Sets */
  async search_data_sets(init?: OperationInit<"search_data_sets">): Promise<OperationData<"search_data_sets">> {
    return this.client.requestOperation("search_data_sets", "post", "/data_sets/search", init);
  }

  /** Search Data Sets by Tags */
  async search_data_sets_tags(init?: OperationInit<"search_data_sets_tags">): Promise<OperationData<"search_data_sets_tags">> {
    return this.client.requestOperation("search_data_sets_tags", "post", "/data_sets/search_tags", init);
  }

  /** Search Public Data Sets by Tags */
  async search_public_data_sets_tags(init?: OperationInit<"search_public_data_sets_tags">): Promise<OperationData<"search_public_data_sets_tags">> {
    return this.client.requestOperation("search_public_data_sets_tags", "post", "/data_sets/public/search_tags", init);
  }

  /** Search Shared Data Sets */
  async search_shared_with_user(init?: OperationInit<"search_shared_with_user">): Promise<OperationData<"search_shared_with_user">> {
    return this.client.requestOperation("search_shared_with_user", "post", "/data_sets/available/search", init);
  }

  /** Show Flow Via Data Set */
  async show_flow_via_data_set(init?: OperationInit<"show_flow_via_data_set">): Promise<OperationData<"show_flow_via_data_set">> {
    return this.client.requestOperation("show_flow_via_data_set", "get", "/data_sets/{resource_id}/flow", init);
  }

  /** Sync With Catalog */
  async sync_with_catalog(init?: OperationInit<"sync_with_catalog">): Promise<OperationData<"sync_with_catalog">> {
    return this.client.requestOperation("sync_with_catalog", "post", "/data_sets/{data_set_id}/sync_with_catalog", init);
  }

  /** Unvote Data Set */
  async unvote_data_set(init?: OperationInit<"unvote_data_set">): Promise<OperationData<"unvote_data_set">> {
    return this.client.requestOperation("unvote_data_set", "delete", "/data_sets/{data_set_id}/unvote", init);
  }

  /** Update Data Set Api Key */
  async update_data_set_api_key(init?: OperationInit<"update_data_set_api_key">): Promise<OperationData<"update_data_set_api_key">> {
    return this.client.requestOperation("update_data_set_api_key", "put", "/data_sets/{data_set_id}/api_keys/{api_key_id}", init);
  }

  /** Update Data Set Quarantine Setting */
  async update_data_set_quarantine_setting(init?: OperationInit<"update_data_set_quarantine_setting">): Promise<OperationData<"update_data_set_quarantine_setting">> {
    return this.client.requestOperation("update_data_set_quarantine_setting", "put", "/data_sets/{data_set_id}/quarantine_settings", init);
  }

  /** Update Data Set Samples */
  async update_data_set_samples(init?: OperationInit<"update_data_set_samples">): Promise<OperationData<"update_data_set_samples">> {
    return this.client.requestOperation("update_data_set_samples", "post", "/data_sets/{data_set_id}/samples", init);
  }

  /** Update Flow Via Data Set */
  async update_flow_via_data_set(init?: OperationInit<"update_flow_via_data_set">): Promise<OperationData<"update_flow_via_data_set">> {
    return this.client.requestOperation("update_flow_via_data_set", "put", "/data_sets/{resource_id}/flow", init);
  }

  /** Update a Nexset */
  async update_nexset(init?: OperationInit<"update_nexset">): Promise<OperationData<"update_nexset">> {
    return this.client.requestOperation("update_nexset", "put", "/data_sets/{set_id}", init);
  }

  /** Vote Data Set */
  async vote_data_set(init?: OperationInit<"vote_data_set">): Promise<OperationData<"vote_data_set">> {
    return this.client.requestOperation("vote_data_set", "post", "/data_sets/{data_set_id}/vote", init);
  }
}