import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class SourcesResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_data_sources">): Promise<OperationData<"get_data_sources">> {
    return this.client.requestOperation("get_data_sources", "get", "/data_sources", init);
  }

  async create(init?: OperationInit<"create_data_source">): Promise<OperationData<"create_data_source">> {
    return this.client.requestOperation("create_data_source", "post", "/data_sources", init);
  }

  async get(init?: OperationInit<"get_data_source">): Promise<OperationData<"get_data_source">> {
    return this.client.requestOperation("get_data_source", "get", "/data_sources/{source_id}", init);
  }

  async update(init?: OperationInit<"update_data_source">): Promise<OperationData<"update_data_source">> {
    return this.client.requestOperation("update_data_source", "put", "/data_sources/{source_id}", init);
  }

  async delete(init?: OperationInit<"delete_data_source">): Promise<OperationData<"delete_data_source">> {
    return this.client.requestOperation("delete_data_source", "delete", "/data_sources/{source_id}", init);
  }

  /** Activate Data Source Api Key */
  async activate_data_source_api_key(init?: OperationInit<"activate_data_source_api_key">): Promise<OperationData<"activate_data_source_api_key">> {
    return this.client.requestOperation("activate_data_source_api_key", "put", "/data_sources/{data_source_id}/api_keys/{api_key_id}/activate", init);
  }

  /** Activate Flow Via Data Source */
  async activate_flow_via_data_source(init?: OperationInit<"activate_flow_via_data_source">): Promise<OperationData<"activate_flow_via_data_source">> {
    return this.client.requestOperation("activate_flow_via_data_source", "put", "/data_sources/{resource_id}/flow/activate", init);
  }

  /** Activate a Source */
  async activate_source(init?: OperationInit<"activate_source">): Promise<OperationData<"activate_source">> {
    return this.client.requestOperation("activate_source", "put", "/data_sources/{source_id}/activate", init);
  }

  /** Add Flow Accessors Via Data Source */
  async add_flow_accessors_via_data_source(init?: OperationInit<"add_flow_accessors_via_data_source">): Promise<OperationData<"add_flow_accessors_via_data_source">> {
    return this.client.requestOperation("add_flow_accessors_via_data_source", "put", "/data_sources/{resource_id}/flow/accessors", init);
  }

  /** Add Flow Docs Via Data Source */
  async add_flow_docs_via_data_source(init?: OperationInit<"add_flow_docs_via_data_source">): Promise<OperationData<"add_flow_docs_via_data_source">> {
    return this.client.requestOperation("add_flow_docs_via_data_source", "put", "/data_sources/{resource_id}/flow/docs", init);
  }

  /** Auto Create Nexset */
  async auto_create_nexset(init?: OperationInit<"auto_create_nexset">): Promise<OperationData<"auto_create_nexset">> {
    return this.client.requestOperation("auto_create_nexset", "post", "/data_sources/{data_source_id}/nexset", init);
  }

  /** Copy Flow Via Data Source */
  async copy_flow_via_data_source(init?: OperationInit<"copy_flow_via_data_source">): Promise<OperationData<"copy_flow_via_data_source">> {
    return this.client.requestOperation("copy_flow_via_data_source", "post", "/data_sources/{resource_id}/flow/copy", init);
  }

  /** Copy a Source */
  async copy_source(init?: OperationInit<"copy_source">): Promise<OperationData<"copy_source">> {
    return this.client.requestOperation("copy_source", "post", "/data_sources/{source_id}/copy", init);
  }

  /** Create a Source */
  async create_data_source(init?: OperationInit<"create_data_source">): Promise<OperationData<"create_data_source">> {
    return this.client.requestOperation("create_data_source", "post", "/data_sources", init);
  }

  /** Create Data Source Api Key */
  async create_data_source_api_key(init?: OperationInit<"create_data_source_api_key">): Promise<OperationData<"create_data_source_api_key">> {
    return this.client.requestOperation("create_data_source_api_key", "post", "/data_sources/{data_source_id}/api_keys", init);
  }

  /** Create Data Source Quarantine Setting */
  async create_data_source_quarantine_setting(init?: OperationInit<"create_data_source_quarantine_setting">): Promise<OperationData<"create_data_source_quarantine_setting">> {
    return this.client.requestOperation("create_data_source_quarantine_setting", "post", "/data_sources/{data_source_id}/quarantine_settings", init);
  }

  /** Accessible Resources */
  async data_sources_accessible_resources(init?: OperationInit<"data_sources_accessible_resources">): Promise<OperationData<"data_sources_accessible_resources">> {
    return this.client.requestOperation("data_sources_accessible_resources", "get", "/data_sources/accessible", init);
  }

  /** Activate All Triggers */
  async data_sources_activate_all_triggers(init?: OperationInit<"data_sources_activate_all_triggers">): Promise<OperationData<"data_sources_activate_all_triggers">> {
    return this.client.requestOperation("data_sources_activate_all_triggers", "put", "/data_sources/{data_source_id}/flow_triggers/activate/all", init);
  }

  /** Activate Triggers */
  async data_sources_activate_triggers(init?: OperationInit<"data_sources_activate_triggers">): Promise<OperationData<"data_sources_activate_triggers">> {
    return this.client.requestOperation("data_sources_activate_triggers", "put", "/data_sources/{data_source_id}/flow_triggers/activate", init);
  }

  /** Add Data source Docs */
  async data_sources_add_resource_docs(init?: OperationInit<"data_sources_add_resource_docs">): Promise<OperationData<"data_sources_add_resource_docs">> {
    return this.client.requestOperation("data_sources_add_resource_docs", "put", "/data_sources/{resource_id}/docs", init);
  }

  /** Add Data source Tags */
  async data_sources_add_resource_tags(init?: OperationInit<"data_sources_add_resource_tags">): Promise<OperationData<"data_sources_add_resource_tags">> {
    return this.client.requestOperation("data_sources_add_resource_tags", "post", "/data_sources/{resource_id}/tags", init);
  }

  /** Add Triggers */
  async data_sources_add_triggers(init?: OperationInit<"data_sources_add_triggers">): Promise<OperationData<"data_sources_add_triggers">> {
    return this.client.requestOperation("data_sources_add_triggers", "put", "/data_sources/{data_source_id}/flow_triggers", init);
  }

  /** Create Dashboard Transform */
  async data_sources_create_dashboard_transform(init?: OperationInit<"data_sources_create_dashboard_transform">): Promise<OperationData<"data_sources_create_dashboard_transform">> {
    return this.client.requestOperation("data_sources_create_dashboard_transform", "post", "/data_sources/{data_source_id}/dashboard_transforms", init);
  }

  /** Create Triggers */
  async data_sources_create_triggers(init?: OperationInit<"data_sources_create_triggers">): Promise<OperationData<"data_sources_create_triggers">> {
    return this.client.requestOperation("data_sources_create_triggers", "post", "/data_sources/{data_source_id}/flow_triggers", init);
  }

  /** Delete Dashboard Transform */
  async data_sources_delete_dashboard_transform(init?: OperationInit<"data_sources_delete_dashboard_transform">): Promise<OperationData<"data_sources_delete_dashboard_transform">> {
    return this.client.requestOperation("data_sources_delete_dashboard_transform", "delete", "/data_sources/{data_source_id}/dashboard_transforms", init);
  }

  /** Remove Data source Tags */
  async data_sources_delete_resource_tags(init?: OperationInit<"data_sources_delete_resource_tags">): Promise<OperationData<"data_sources_delete_resource_tags">> {
    return this.client.requestOperation("data_sources_delete_resource_tags", "delete", "/data_sources/{resource_id}/tags", init);
  }

  /** Flow Audit Log */
  async data_sources_flow_audit_log(init?: OperationInit<"data_sources_flow_audit_log">): Promise<OperationData<"data_sources_flow_audit_log">> {
    return this.client.requestOperation("data_sources_flow_audit_log", "get", "/data_sources/{resource_id}/flow/audit_log", init);
  }

  /** Flow Dashboard */
  async data_sources_flow_dashboard(init?: OperationInit<"data_sources_flow_dashboard">): Promise<OperationData<"data_sources_flow_dashboard">> {
    return this.client.requestOperation("data_sources_flow_dashboard", "get", "/data_sources/{resource_id}/flow/dashboard", init);
  }

  /** Flow Logs */
  async data_sources_flow_logs(init?: OperationInit<"data_sources_flow_logs">): Promise<OperationData<"data_sources_flow_logs">> {
    return this.client.requestOperation("data_sources_flow_logs", "get", "/data_sources/{resource_id}/flow/logs", init);
  }

  /** Flow Metrics */
  async data_sources_flow_metrics(init?: OperationInit<"data_sources_flow_metrics">): Promise<OperationData<"data_sources_flow_metrics">> {
    return this.client.requestOperation("data_sources_flow_metrics", "get", "/data_sources/{resource_id}/flow/metrics", init);
  }

  /** Flow Status Metrics */
  async data_sources_flow_status_metrics(init?: OperationInit<"data_sources_flow_status_metrics">): Promise<OperationData<"data_sources_flow_status_metrics">> {
    return this.client.requestOperation("data_sources_flow_status_metrics", "get", "/data_sources/{resource_id}/flow/status_metrics", init);
  }

  /** Get Data Source Offset */
  async data_sources_get_data_source_offset(init?: OperationInit<"data_sources_get_data_source_offset">): Promise<OperationData<"data_sources_get_data_source_offset">> {
    return this.client.requestOperation("data_sources_get_data_source_offset", "get", "/data_sources/{data_source_id}/offset", init);
  }

  /** Get Data Source Offset */
  async data_sources_get_data_source_offset_get(init?: OperationInit<"data_sources_get_data_source_offset_get">): Promise<OperationData<"data_sources_get_data_source_offset_get">> {
    return this.client.requestOperation("data_sources_get_data_source_offset_get", "get", "/data_sources/{data_source_id}/offset/{data_set_id}", init);
  }

  /** Get Data Source Quarantine Offset */
  async data_sources_get_data_source_quarantine_offset(init?: OperationInit<"data_sources_get_data_source_quarantine_offset">): Promise<OperationData<"data_sources_get_data_source_quarantine_offset">> {
    return this.client.requestOperation("data_sources_get_data_source_quarantine_offset", "get", "/data_sources/{data_source_id}/quarantine/offset", init);
  }

  /** Get Data Source Quarantine Offset */
  async data_sources_get_data_source_quarantine_offset_get(init?: OperationInit<"data_sources_get_data_source_quarantine_offset_get">): Promise<OperationData<"data_sources_get_data_source_quarantine_offset_get">> {
    return this.client.requestOperation("data_sources_get_data_source_quarantine_offset_get", "get", "/data_sources/{data_source_id}/quarantine/offset/{data_set_id}", init);
  }

  /** Get Quarantine Aggregation */
  async data_sources_get_quarantine_aggregation(init?: OperationInit<"data_sources_get_quarantine_aggregation">): Promise<OperationData<"data_sources_get_quarantine_aggregation">> {
    return this.client.requestOperation("data_sources_get_quarantine_aggregation", "get", "/data_sources/{resource_id}/quarantine_aggregation", init);
  }

  /** Get Data source Tags */
  async data_sources_get_resource_tags(init?: OperationInit<"data_sources_get_resource_tags">): Promise<OperationData<"data_sources_get_resource_tags">> {
    return this.client.requestOperation("data_sources_get_resource_tags", "get", "/data_sources/{resource_id}/tags", init);
  }

  /** Index */
  async data_sources_index(init?: OperationInit<"data_sources_index">): Promise<OperationData<"data_sources_index">> {
    return this.client.requestOperation("data_sources_index", "get", "/data_sources/{data_source_id}/flow_triggers", init);
  }

  /** List Data source Docs */
  async data_sources_list_resource_docs(init?: OperationInit<"data_sources_list_resource_docs">): Promise<OperationData<"data_sources_list_resource_docs">> {
    return this.client.requestOperation("data_sources_list_resource_docs", "get", "/data_sources/{resource_id}/docs", init);
  }

  /** Pause All Triggers */
  async data_sources_pause_all_triggers(init?: OperationInit<"data_sources_pause_all_triggers">): Promise<OperationData<"data_sources_pause_all_triggers">> {
    return this.client.requestOperation("data_sources_pause_all_triggers", "put", "/data_sources/{data_source_id}/flow_triggers/pause/all", init);
  }

  /** Pause Triggers */
  async data_sources_pause_triggers(init?: OperationInit<"data_sources_pause_triggers">): Promise<OperationData<"data_sources_pause_triggers">> {
    return this.client.requestOperation("data_sources_pause_triggers", "put", "/data_sources/{data_source_id}/flow_triggers/pause", init);
  }

  /** Probe Detect Schemas Data Source */
  async data_sources_probe_detect_schemas_data_source(init?: OperationInit<"data_sources_probe_detect_schemas_data_source">): Promise<OperationData<"data_sources_probe_detect_schemas_data_source">> {
    return this.client.requestOperation("data_sources_probe_detect_schemas_data_source", "put", "/data_sources/{data_source_id}/probe/schemas", init);
  }

  /** Probe Detect Schemas Data Source */
  async data_sources_probe_detect_schemas_data_source_post(init?: OperationInit<"data_sources_probe_detect_schemas_data_source_post">): Promise<OperationData<"data_sources_probe_detect_schemas_data_source_post">> {
    return this.client.requestOperation("data_sources_probe_detect_schemas_data_source_post", "post", "/data_sources/{data_source_id}/probe/schemas", init);
  }

  /** Probe List Files Data Source */
  async data_sources_probe_list_files_data_source(init?: OperationInit<"data_sources_probe_list_files_data_source">): Promise<OperationData<"data_sources_probe_list_files_data_source">> {
    return this.client.requestOperation("data_sources_probe_list_files_data_source", "put", "/data_sources/{data_source_id}/probe/buckets", init);
  }

  /** Probe List Files Data Source */
  async data_sources_probe_list_files_data_source_post(init?: OperationInit<"data_sources_probe_list_files_data_source_post">): Promise<OperationData<"data_sources_probe_list_files_data_source_post">> {
    return this.client.requestOperation("data_sources_probe_list_files_data_source_post", "post", "/data_sources/{data_source_id}/probe/buckets", init);
  }

  /** Probe List Tree Data Source */
  async data_sources_probe_list_tree_data_source(init?: OperationInit<"data_sources_probe_list_tree_data_source">): Promise<OperationData<"data_sources_probe_list_tree_data_source">> {
    return this.client.requestOperation("data_sources_probe_list_tree_data_source", "put", "/data_sources/{data_source_id}/probe/tree", init);
  }

  /** Probe List Tree Data Source */
  async data_sources_probe_list_tree_data_source_post(init?: OperationInit<"data_sources_probe_list_tree_data_source_post">): Promise<OperationData<"data_sources_probe_list_tree_data_source_post">> {
    return this.client.requestOperation("data_sources_probe_list_tree_data_source_post", "post", "/data_sources/{data_source_id}/probe/tree", init);
  }

  /** Probe Read File Data Source */
  async data_sources_probe_read_file_data_source(init?: OperationInit<"data_sources_probe_read_file_data_source">): Promise<OperationData<"data_sources_probe_read_file_data_source">> {
    return this.client.requestOperation("data_sources_probe_read_file_data_source", "put", "/data_sources/{data_source_id}/probe/files", init);
  }

  /** Probe Read File Data Source */
  async data_sources_probe_read_file_data_source_post(init?: OperationInit<"data_sources_probe_read_file_data_source_post">): Promise<OperationData<"data_sources_probe_read_file_data_source_post">> {
    return this.client.requestOperation("data_sources_probe_read_file_data_source_post", "post", "/data_sources/{data_source_id}/probe/files", init);
  }

  /** Probe Read Quarantine Data Source */
  async data_sources_probe_read_quarantine_data_source(init?: OperationInit<"data_sources_probe_read_quarantine_data_source">): Promise<OperationData<"data_sources_probe_read_quarantine_data_source">> {
    return this.client.requestOperation("data_sources_probe_read_quarantine_data_source", "put", "/data_sources/{data_source_id}/probe/quarantine/sample", init);
  }

  /** Probe Read Quarantine Data Source */
  async data_sources_probe_read_quarantine_data_source_post(init?: OperationInit<"data_sources_probe_read_quarantine_data_source_post">): Promise<OperationData<"data_sources_probe_read_quarantine_data_source_post">> {
    return this.client.requestOperation("data_sources_probe_read_quarantine_data_source_post", "post", "/data_sources/{data_source_id}/probe/quarantine/sample", init);
  }

  /** Probe Read Sample Data Source */
  async data_sources_probe_read_sample_data_source(init?: OperationInit<"data_sources_probe_read_sample_data_source">): Promise<OperationData<"data_sources_probe_read_sample_data_source">> {
    return this.client.requestOperation("data_sources_probe_read_sample_data_source", "put", "/data_sources/{data_source_id}/probe/sample", init);
  }

  /** Probe Read Sample Data Source */
  async data_sources_probe_read_sample_data_source_post(init?: OperationInit<"data_sources_probe_read_sample_data_source_post">): Promise<OperationData<"data_sources_probe_read_sample_data_source_post">> {
    return this.client.requestOperation("data_sources_probe_read_sample_data_source_post", "post", "/data_sources/{data_source_id}/probe/sample", init);
  }

  /** Referenced By */
  async data_sources_referenced_by(init?: OperationInit<"data_sources_referenced_by">): Promise<OperationData<"data_sources_referenced_by">> {
    return this.client.requestOperation("data_sources_referenced_by", "get", "/data_sources/{resource_id}/referenced_by", init);
  }

  /** Remove All Triggers */
  async data_sources_remove_all_triggers(init?: OperationInit<"data_sources_remove_all_triggers">): Promise<OperationData<"data_sources_remove_all_triggers">> {
    return this.client.requestOperation("data_sources_remove_all_triggers", "delete", "/data_sources/{data_source_id}/flow_triggers/all", init);
  }

  /** Remove Data source Docs */
  async data_sources_remove_resource_docs(init?: OperationInit<"data_sources_remove_resource_docs">): Promise<OperationData<"data_sources_remove_resource_docs">> {
    return this.client.requestOperation("data_sources_remove_resource_docs", "delete", "/data_sources/{resource_id}/docs", init);
  }

  /** Remove Triggers */
  async data_sources_remove_triggers(init?: OperationInit<"data_sources_remove_triggers">): Promise<OperationData<"data_sources_remove_triggers">> {
    return this.client.requestOperation("data_sources_remove_triggers", "delete", "/data_sources/{data_source_id}/flow_triggers", init);
  }

  /** Reset Data source Docs */
  async data_sources_reset_resource_docs(init?: OperationInit<"data_sources_reset_resource_docs">): Promise<OperationData<"data_sources_reset_resource_docs">> {
    return this.client.requestOperation("data_sources_reset_resource_docs", "post", "/data_sources/{resource_id}/docs", init);
  }

  /** Run Data Source Now */
  async data_sources_run_data_source_now(init?: OperationInit<"data_sources_run_data_source_now">): Promise<OperationData<"data_sources_run_data_source_now">> {
    return this.client.requestOperation("data_sources_run_data_source_now", "put", "/data_sources/{data_source_id}/run_now", init);
  }

  /** Run Data Source Now */
  async data_sources_run_data_source_now_post(init?: OperationInit<"data_sources_run_data_source_now_post">): Promise<OperationData<"data_sources_run_data_source_now_post">> {
    return this.client.requestOperation("data_sources_run_data_source_now_post", "post", "/data_sources/{data_source_id}/run_now", init);
  }

  /** Show Dashboard Transform */
  async data_sources_show_dashboard_transform(init?: OperationInit<"data_sources_show_dashboard_transform">): Promise<OperationData<"data_sources_show_dashboard_transform">> {
    return this.client.requestOperation("data_sources_show_dashboard_transform", "get", "/data_sources/{data_source_id}/dashboard_transforms", init);
  }

  /** Trigger Quarantine Aggregation */
  async data_sources_trigger_quarantine_aggregation(init?: OperationInit<"data_sources_trigger_quarantine_aggregation">): Promise<OperationData<"data_sources_trigger_quarantine_aggregation">> {
    return this.client.requestOperation("data_sources_trigger_quarantine_aggregation", "post", "/data_sources/{resource_id}/trigger_quarantine_aggregation", init);
  }

  /** Update Dashboard Transform */
  async data_sources_update_dashboard_transform(init?: OperationInit<"data_sources_update_dashboard_transform">): Promise<OperationData<"data_sources_update_dashboard_transform">> {
    return this.client.requestOperation("data_sources_update_dashboard_transform", "put", "/data_sources/{data_source_id}/dashboard_transforms", init);
  }

  /** Update Data Source */
  async data_sources_update_data_source(init?: OperationInit<"data_sources_update_data_source">): Promise<OperationData<"data_sources_update_data_source">> {
    return this.client.requestOperation("data_sources_update_data_source", "patch", "/data_sources/{data_source_id}", init);
  }

  /** Update Data source Tags */
  async data_sources_update_resource_tags(init?: OperationInit<"data_sources_update_resource_tags">): Promise<OperationData<"data_sources_update_resource_tags">> {
    return this.client.requestOperation("data_sources_update_resource_tags", "put", "/data_sources/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async data_sources_users_access_insights(init?: OperationInit<"data_sources_users_access_insights">): Promise<OperationData<"data_sources_users_access_insights">> {
    return this.client.requestOperation("data_sources_users_access_insights", "get", "/data_sources/{resource_id}/users_access_insights", init);
  }

  /** Delete a Source */
  async delete_data_source(init?: OperationInit<"delete_data_source">): Promise<OperationData<"delete_data_source">> {
    return this.client.requestOperation("delete_data_source", "delete", "/data_sources/{source_id}", init);
  }

  /** Delete Data Source Api Key */
  async delete_data_source_api_key(init?: OperationInit<"delete_data_source_api_key">): Promise<OperationData<"delete_data_source_api_key">> {
    return this.client.requestOperation("delete_data_source_api_key", "delete", "/data_sources/{data_source_id}/api_keys/{api_key_id}", init);
  }

  /** Delete Data Source Quarantine Setting */
  async delete_data_source_quarantine_setting(init?: OperationInit<"delete_data_source_quarantine_setting">): Promise<OperationData<"delete_data_source_quarantine_setting">> {
    return this.client.requestOperation("delete_data_source_quarantine_setting", "delete", "/data_sources/{data_source_id}/quarantine_settings", init);
  }

  /** Delete Flow Via Data Source */
  async delete_flow_via_data_source(init?: OperationInit<"delete_flow_via_data_source">): Promise<OperationData<"delete_flow_via_data_source">> {
    return this.client.requestOperation("delete_flow_via_data_source", "delete", "/data_sources/{resource_id}/flow", init);
  }

  /** Dequeue External File */
  async dequeue_external_file(init?: OperationInit<"dequeue_external_file">): Promise<OperationData<"dequeue_external_file">> {
    return this.client.requestOperation("dequeue_external_file", "delete", "/data_sources/{data_source_id}/file/external/{file_id}", init);
  }

  /** Explain Source Access */
  async explain_source_access(init?: OperationInit<"explain_source_access">): Promise<OperationData<"explain_source_access">> {
    return this.client.requestOperation("explain_source_access", "get", "/data_sources/{source_id}/access", init);
  }

  /** Flow Run Status Via Data Source */
  async flow_run_status_via_data_source(init?: OperationInit<"flow_run_status_via_data_source">): Promise<OperationData<"flow_run_status_via_data_source">> {
    return this.client.requestOperation("flow_run_status_via_data_source", "get", "/data_sources/{resource_id}/flow/run_status", init);
  }

  /** Get Source by ID */
  async get_data_source(init?: OperationInit<"get_data_source">): Promise<OperationData<"get_data_source">> {
    return this.client.requestOperation("get_data_source", "get", "/data_sources/{source_id}", init);
  }

  /** Get Data Source Api Key */
  async get_data_source_api_key(init?: OperationInit<"get_data_source_api_key">): Promise<OperationData<"get_data_source_api_key">> {
    return this.client.requestOperation("get_data_source_api_key", "get", "/data_sources/{data_source_id}/api_keys/{api_key_id}", init);
  }

  /** Get Source by ID with Expanded References */
  async get_data_source_expanded(init?: OperationInit<"get_data_source_expanded">): Promise<OperationData<"get_data_source_expanded">> {
    return this.client.requestOperation("get_data_source_expanded", "get", "/data_sources/{source_id}?expand=1", init);
  }

  /** Get Data Source Metrics */
  async get_data_source_metrics(init?: OperationInit<"get_data_source_metrics">): Promise<OperationData<"get_data_source_metrics">> {
    return this.client.requestOperation("get_data_source_metrics", "get", "/data_sources/{data_source_id}/metrics", init);
  }

  /** Get Data Source Metrics By Name */
  async get_data_source_metrics_by_name(init?: OperationInit<"get_data_source_metrics_by_name">): Promise<OperationData<"get_data_source_metrics_by_name">> {
    return this.client.requestOperation("get_data_source_metrics_by_name", "get", "/data_sources/{data_source_id}/metrics/{metrics_name}", init);
  }

  /** Get Data Source Metrics Files */
  async get_data_source_metrics_files(init?: OperationInit<"get_data_source_metrics_files">): Promise<OperationData<"get_data_source_metrics_files">> {
    return this.client.requestOperation("get_data_source_metrics_files", "get", "/data_sources/{data_source_id}/metrics/files", init);
  }

  /** Get Data Source Metrics Files Details */
  async get_data_source_metrics_files_details(init?: OperationInit<"get_data_source_metrics_files_details">): Promise<OperationData<"get_data_source_metrics_files_details">> {
    return this.client.requestOperation("get_data_source_metrics_files_details", "get", "/data_sources/{data_source_id}/metrics/files_details", init);
  }

  /** Get Data Source Metrics Files Stats */
  async get_data_source_metrics_files_stats(init?: OperationInit<"get_data_source_metrics_files_stats">): Promise<OperationData<"get_data_source_metrics_files_stats">> {
    return this.client.requestOperation("get_data_source_metrics_files_stats", "get", "/data_sources/{data_source_id}/metrics/files_stats", init);
  }

  /** Get Data Source Metrics Files Stats Alias Not Found */
  async get_data_source_metrics_files_stats_alias_not_found(init?: OperationInit<"get_data_source_metrics_files_stats_alias_not_found">): Promise<OperationData<"get_data_source_metrics_files_stats_alias_not_found">> {
    return this.client.requestOperation("get_data_source_metrics_files_stats_alias_not_found", "get", "/data_sources/{data_source_id}/metrics/files/stats", init);
  }

  /** Get Data Source Metrics Quarantine Files */
  async get_data_source_metrics_quarantine_files(init?: OperationInit<"get_data_source_metrics_quarantine_files">): Promise<OperationData<"get_data_source_metrics_quarantine_files">> {
    return this.client.requestOperation("get_data_source_metrics_quarantine_files", "get", "/data_sources/{data_source_id}/metrics/quarantine_files", init);
  }

  /** Get Data Source Metrics Run Summary */
  async get_data_source_metrics_run_summary(init?: OperationInit<"get_data_source_metrics_run_summary">): Promise<OperationData<"get_data_source_metrics_run_summary">> {
    return this.client.requestOperation("get_data_source_metrics_run_summary", "get", "/data_sources/{data_source_id}/metrics/run_summary", init);
  }

  /** Get Data Source Quarantine Setting */
  async get_data_source_quarantine_settings(init?: OperationInit<"get_data_source_quarantine_settings">): Promise<OperationData<"get_data_source_quarantine_settings">> {
    return this.client.requestOperation("get_data_source_quarantine_settings", "get", "/data_sources/{data_source_id}/quarantine_settings", init);
  }

  /** Get Data Source Runs */
  async get_data_source_runs(init?: OperationInit<"get_data_source_runs">): Promise<OperationData<"get_data_source_runs">> {
    return this.client.requestOperation("get_data_source_runs", "get", "/data_sources/{data_source_id}/runs", init);
  }

  /** Get All Sources */
  async get_data_sources(init?: OperationInit<"get_data_sources">): Promise<OperationData<"get_data_sources">> {
    return this.client.requestOperation("get_data_sources", "get", "/data_sources", init);
  }

  /** Get External File Status */
  async get_external_file_status(init?: OperationInit<"get_external_file_status">): Promise<OperationData<"get_external_file_status">> {
    return this.client.requestOperation("get_external_file_status", "get", "/data_sources/{data_source_id}/file/status", init);
  }

  /** Get External File Status Alias */
  async get_external_file_status_alias(init?: OperationInit<"get_external_file_status_alias">): Promise<OperationData<"get_external_file_status_alias">> {
    return this.client.requestOperation("get_external_file_status_alias", "get", "/data_sources/{data_source_id}/file/external/status", init);
  }

  /** Get Reingested Data Source Files */
  async get_reingested_data_source_files(init?: OperationInit<"get_reingested_data_source_files">): Promise<OperationData<"get_reingested_data_source_files">> {
    return this.client.requestOperation("get_reingested_data_source_files", "get", "/data_sources/{data_source_id}/file/ingest", init);
  }

  /** Get Script Source Config */
  async get_script_source_config(init?: OperationInit<"get_script_source_config">): Promise<OperationData<"get_script_source_config">> {
    return this.client.requestOperation("get_script_source_config", "get", "/data_sources/script_source_config", init);
  }

  /** List All Data Source Ids */
  async list_all_data_source_ids(init?: OperationInit<"list_all_data_source_ids">): Promise<OperationData<"list_all_data_source_ids">> {
    return this.client.requestOperation("list_all_data_source_ids", "get", "/data_sources/all/ids", init);
  }

  /** List All Data Sources */
  async list_all_data_sources(init?: OperationInit<"list_all_data_sources">): Promise<OperationData<"list_all_data_sources">> {
    return this.client.requestOperation("list_all_data_sources", "get", "/data_sources/all", init);
  }

  /** List All Data Sources Condensed */
  async list_all_data_sources_condensed(init?: OperationInit<"list_all_data_sources_condensed">): Promise<OperationData<"list_all_data_sources_condensed">> {
    return this.client.requestOperation("list_all_data_sources_condensed", "get", "/data_sources/all/condensed", init);
  }

  /** List Data Source Api Keys */
  async list_data_source_api_keys(init?: OperationInit<"list_data_source_api_keys">): Promise<OperationData<"list_data_source_api_keys">> {
    return this.client.requestOperation("list_data_source_api_keys", "get", "/data_sources/{data_source_id}/api_keys", init);
  }

  /** List Data Source Data Sinks */
  async list_data_source_data_sinks(init?: OperationInit<"list_data_source_data_sinks">): Promise<OperationData<"list_data_source_data_sinks">> {
    return this.client.requestOperation("list_data_source_data_sinks", "get", "/data_sources/{data_source_id}/data_sinks", init);
  }

  /** List Flow Accessors Via Data Source */
  async list_flow_accessors_via_data_source(init?: OperationInit<"list_flow_accessors_via_data_source">): Promise<OperationData<"list_flow_accessors_via_data_source">> {
    return this.client.requestOperation("list_flow_accessors_via_data_source", "get", "/data_sources/{resource_id}/flow/accessors", init);
  }

  /** List Flow Docs Via Data Source */
  async list_flow_docs_via_data_source(init?: OperationInit<"list_flow_docs_via_data_source">): Promise<OperationData<"list_flow_docs_via_data_source">> {
    return this.client.requestOperation("list_flow_docs_via_data_source", "get", "/data_sources/{resource_id}/flow/docs", init);
  }

  /** Pause All Data Source Api Keys */
  async pause_all_data_source_api_keys(init?: OperationInit<"pause_all_data_source_api_keys">): Promise<OperationData<"pause_all_data_source_api_keys">> {
    return this.client.requestOperation("pause_all_data_source_api_keys", "put", "/data_sources/{data_source_id}/api_keys/pause", init);
  }

  /** Pause Data Source Api Key */
  async pause_data_source_api_key(init?: OperationInit<"pause_data_source_api_key">): Promise<OperationData<"pause_data_source_api_key">> {
    return this.client.requestOperation("pause_data_source_api_key", "put", "/data_sources/{data_source_id}/api_keys/{api_key_id}/pause", init);
  }

  /** Pause Flow Via Data Source */
  async pause_flow_via_data_source(init?: OperationInit<"pause_flow_via_data_source">): Promise<OperationData<"pause_flow_via_data_source">> {
    return this.client.requestOperation("pause_flow_via_data_source", "put", "/data_sources/{resource_id}/flow/pause", init);
  }

  /** Pause a Source */
  async pause_source(init?: OperationInit<"pause_source">): Promise<OperationData<"pause_source">> {
    return this.client.requestOperation("pause_source", "put", "/data_sources/{source_id}/pause", init);
  }

  /** Probe Data Source */
  async probe_data_source(init?: OperationInit<"probe_data_source">): Promise<OperationData<"probe_data_source">> {
    return this.client.requestOperation("probe_data_source", "get", "/data_sources/{data_source_id}/probe", init);
  }

  /** Probe Summary Data Source */
  async probe_summary_data_source(init?: OperationInit<"probe_summary_data_source">): Promise<OperationData<"probe_summary_data_source">> {
    return this.client.requestOperation("probe_summary_data_source", "get", "/data_sources/{data_source_id}/probe/summary", init);
  }

  /** Ready Data Source */
  async ready_data_source(init?: OperationInit<"ready_data_source">): Promise<OperationData<"ready_data_source">> {
    return this.client.requestOperation("ready_data_source", "post", "/data_sources/{data_source_id}/ready", init);
  }

  /** Register External Files */
  async register_external_files(init?: OperationInit<"register_external_files">): Promise<OperationData<"register_external_files">> {
    return this.client.requestOperation("register_external_files", "post", "/data_sources/{data_source_id}/file/external", init);
  }

  /** Reingest Data Source Files */
  async reingest_data_source_files(init?: OperationInit<"reingest_data_source_files">): Promise<OperationData<"reingest_data_source_files">> {
    return this.client.requestOperation("reingest_data_source_files", "post", "/data_sources/{data_source_id}/file/ingest", init);
  }

  /** Remove Flow Accessors Via Data Source */
  async remove_flow_accessors_via_data_source(init?: OperationInit<"remove_flow_accessors_via_data_source">): Promise<OperationData<"remove_flow_accessors_via_data_source">> {
    return this.client.requestOperation("remove_flow_accessors_via_data_source", "delete", "/data_sources/{resource_id}/flow/accessors", init);
  }

  /** Remove Flow Docs Via Data Source */
  async remove_flow_docs_via_data_source(init?: OperationInit<"remove_flow_docs_via_data_source">): Promise<OperationData<"remove_flow_docs_via_data_source">> {
    return this.client.requestOperation("remove_flow_docs_via_data_source", "delete", "/data_sources/{resource_id}/flow/docs", init);
  }

  /** Reset Flow Accessors Via Data Source */
  async reset_flow_accessors_via_data_source(init?: OperationInit<"reset_flow_accessors_via_data_source">): Promise<OperationData<"reset_flow_accessors_via_data_source">> {
    return this.client.requestOperation("reset_flow_accessors_via_data_source", "post", "/data_sources/{resource_id}/flow/accessors", init);
  }

  /** Reset Flow Docs Via Data Source */
  async reset_flow_docs_via_data_source(init?: OperationInit<"reset_flow_docs_via_data_source">): Promise<OperationData<"reset_flow_docs_via_data_source">> {
    return this.client.requestOperation("reset_flow_docs_via_data_source", "post", "/data_sources/{resource_id}/flow/docs", init);
  }

  /** Rotate Data Source Api Key */
  async rotate_data_source_api_key(init?: OperationInit<"rotate_data_source_api_key">): Promise<OperationData<"rotate_data_source_api_key">> {
    return this.client.requestOperation("rotate_data_source_api_key", "put", "/data_sources/{data_source_id}/api_keys/{api_key_id}/rotate", init);
  }

  /** Search Data Source Api Keys */
  async search_data_source_api_keys(init?: OperationInit<"search_data_source_api_keys">): Promise<OperationData<"search_data_source_api_keys">> {
    return this.client.requestOperation("search_data_source_api_keys", "post", "/data_sources/{data_source_id}/api_keys/search", init);
  }

  /** Search Data Sources */
  async search_data_sources(init?: OperationInit<"search_data_sources">): Promise<OperationData<"search_data_sources">> {
    return this.client.requestOperation("search_data_sources", "post", "/data_sources/search", init);
  }

  /** Search Data Sources by Tags */
  async search_data_sources_tags(init?: OperationInit<"search_data_sources_tags">): Promise<OperationData<"search_data_sources_tags">> {
    return this.client.requestOperation("search_data_sources_tags", "post", "/data_sources/search_tags", init);
  }

  /** Show Flow Via Data Source */
  async show_flow_via_data_source(init?: OperationInit<"show_flow_via_data_source">): Promise<OperationData<"show_flow_via_data_source">> {
    return this.client.requestOperation("show_flow_via_data_source", "get", "/data_sources/{resource_id}/flow", init);
  }

  /** Test Data Source Authentication */
  async test_data_source_authentication(init?: OperationInit<"test_data_source_authentication">): Promise<OperationData<"test_data_source_authentication">> {
    return this.client.requestOperation("test_data_source_authentication", "get", "/data_sources/{data_source_id}/probe/authenticate", init);
  }

  /** Test Data Source Config */
  async test_data_source_config(init?: OperationInit<"test_data_source_config">): Promise<OperationData<"test_data_source_config">> {
    return this.client.requestOperation("test_data_source_config", "post", "/data_sources/test_config", init);
  }

  /** Update a Source */
  async update_data_source(init?: OperationInit<"update_data_source">): Promise<OperationData<"update_data_source">> {
    return this.client.requestOperation("update_data_source", "put", "/data_sources/{source_id}", init);
  }

  /** Update Data Source Api Key */
  async update_data_source_api_key(init?: OperationInit<"update_data_source_api_key">): Promise<OperationData<"update_data_source_api_key">> {
    return this.client.requestOperation("update_data_source_api_key", "put", "/data_sources/{data_source_id}/api_keys/{api_key_id}", init);
  }

  /** Update Data Source Quarantine Setting */
  async update_data_source_quarantine_setting(init?: OperationInit<"update_data_source_quarantine_setting">): Promise<OperationData<"update_data_source_quarantine_setting">> {
    return this.client.requestOperation("update_data_source_quarantine_setting", "put", "/data_sources/{data_source_id}/quarantine_settings", init);
  }

  /** Update Flow Via Data Source */
  async update_flow_via_data_source(init?: OperationInit<"update_flow_via_data_source">): Promise<OperationData<"update_flow_via_data_source">> {
    return this.client.requestOperation("update_flow_via_data_source", "put", "/data_sources/{resource_id}/flow", init);
  }

  /** Validate Data Source Config */
  async validate_data_source_config(init?: OperationInit<"validate_data_source_config">): Promise<OperationData<"validate_data_source_config">> {
    return this.client.requestOperation("validate_data_source_config", "post", "/data_sources/{data_source_id}/config/validate", init);
  }
}