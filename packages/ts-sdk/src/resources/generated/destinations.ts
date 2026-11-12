import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class DestinationsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_data_sinks">): Promise<OperationData<"get_data_sinks">> {
    return this.client.requestOperation("get_data_sinks", "get", "/data_sinks", init);
  }

  async create(init?: OperationInit<"create_data_sink">): Promise<OperationData<"create_data_sink">> {
    return this.client.requestOperation("create_data_sink", "post", "/data_sinks", init);
  }

  async get(init?: OperationInit<"get_data_sink">): Promise<OperationData<"get_data_sink">> {
    return this.client.requestOperation("get_data_sink", "get", "/data_sinks/{sink_id}", init);
  }

  async update(init?: OperationInit<"update_data_sink">): Promise<OperationData<"update_data_sink">> {
    return this.client.requestOperation("update_data_sink", "put", "/data_sinks/{sink_id}", init);
  }

  async delete(init?: OperationInit<"delete_data_sink">): Promise<OperationData<"delete_data_sink">> {
    return this.client.requestOperation("delete_data_sink", "delete", "/data_sinks/{sink_id}", init);
  }

  /** Activate a Sink */
  async activate_data_sink(init?: OperationInit<"activate_data_sink">): Promise<OperationData<"activate_data_sink">> {
    return this.client.requestOperation("activate_data_sink", "put", "/data_sinks/{sink_id}/activate", init);
  }

  /** Activate Data Sink Api Key */
  async activate_data_sink_api_key(init?: OperationInit<"activate_data_sink_api_key">): Promise<OperationData<"activate_data_sink_api_key">> {
    return this.client.requestOperation("activate_data_sink_api_key", "put", "/data_sinks/{data_sink_id}/api_keys/{api_key_id}/activate", init);
  }

  /** Activate Flow Via Data Sink */
  async activate_flow_via_data_sink(init?: OperationInit<"activate_flow_via_data_sink">): Promise<OperationData<"activate_flow_via_data_sink">> {
    return this.client.requestOperation("activate_flow_via_data_sink", "put", "/data_sinks/{resource_id}/flow/activate", init);
  }

  /** Add Flow Accessors Via Data Sink */
  async add_flow_accessors_via_data_sink(init?: OperationInit<"add_flow_accessors_via_data_sink">): Promise<OperationData<"add_flow_accessors_via_data_sink">> {
    return this.client.requestOperation("add_flow_accessors_via_data_sink", "put", "/data_sinks/{resource_id}/flow/accessors", init);
  }

  /** Add Flow Docs Via Data Sink */
  async add_flow_docs_via_data_sink(init?: OperationInit<"add_flow_docs_via_data_sink">): Promise<OperationData<"add_flow_docs_via_data_sink">> {
    return this.client.requestOperation("add_flow_docs_via_data_sink", "put", "/data_sinks/{resource_id}/flow/docs", init);
  }

  /** Copy a Sink */
  async copy_data_sink_source(init?: OperationInit<"copy_data_sink_source">): Promise<OperationData<"copy_data_sink_source">> {
    return this.client.requestOperation("copy_data_sink_source", "post", "/data_sinks/{sink_id}/copy", init);
  }

  /** Copy Flow Via Data Sink */
  async copy_flow_via_data_sink(init?: OperationInit<"copy_flow_via_data_sink">): Promise<OperationData<"copy_flow_via_data_sink">> {
    return this.client.requestOperation("copy_flow_via_data_sink", "post", "/data_sinks/{resource_id}/flow/copy", init);
  }

  /** Create a Sink */
  async create_data_sink(init?: OperationInit<"create_data_sink">): Promise<OperationData<"create_data_sink">> {
    return this.client.requestOperation("create_data_sink", "post", "/data_sinks", init);
  }

  /** Create Data Sink Api Key */
  async create_data_sink_api_key(init?: OperationInit<"create_data_sink_api_key">): Promise<OperationData<"create_data_sink_api_key">> {
    return this.client.requestOperation("create_data_sink_api_key", "post", "/data_sinks/{data_sink_id}/api_keys", init);
  }

  /** Create Data Sink Quarantine Setting */
  async create_data_sink_quarantine_setting(init?: OperationInit<"create_data_sink_quarantine_setting">): Promise<OperationData<"create_data_sink_quarantine_setting">> {
    return this.client.requestOperation("create_data_sink_quarantine_setting", "post", "/data_sinks/{data_sink_id}/quarantine_settings", init);
  }

  /** Accessible Resources */
  async data_sinks_accessible_resources(init?: OperationInit<"data_sinks_accessible_resources">): Promise<OperationData<"data_sinks_accessible_resources">> {
    return this.client.requestOperation("data_sinks_accessible_resources", "get", "/data_sinks/accessible", init);
  }

  /** Activate All Triggers */
  async data_sinks_activate_all_triggers(init?: OperationInit<"data_sinks_activate_all_triggers">): Promise<OperationData<"data_sinks_activate_all_triggers">> {
    return this.client.requestOperation("data_sinks_activate_all_triggers", "put", "/data_sinks/{data_sink_id}/flow_triggers/activate/all", init);
  }

  /** Activate Triggers */
  async data_sinks_activate_triggers(init?: OperationInit<"data_sinks_activate_triggers">): Promise<OperationData<"data_sinks_activate_triggers">> {
    return this.client.requestOperation("data_sinks_activate_triggers", "put", "/data_sinks/{data_sink_id}/flow_triggers/activate", init);
  }

  /** Add Data sink Docs */
  async data_sinks_add_resource_docs(init?: OperationInit<"data_sinks_add_resource_docs">): Promise<OperationData<"data_sinks_add_resource_docs">> {
    return this.client.requestOperation("data_sinks_add_resource_docs", "put", "/data_sinks/{resource_id}/docs", init);
  }

  /** Add Data sink Tags */
  async data_sinks_add_resource_tags(init?: OperationInit<"data_sinks_add_resource_tags">): Promise<OperationData<"data_sinks_add_resource_tags">> {
    return this.client.requestOperation("data_sinks_add_resource_tags", "post", "/data_sinks/{resource_id}/tags", init);
  }

  /** Add Triggers */
  async data_sinks_add_triggers(init?: OperationInit<"data_sinks_add_triggers">): Promise<OperationData<"data_sinks_add_triggers">> {
    return this.client.requestOperation("data_sinks_add_triggers", "put", "/data_sinks/{data_sink_id}/flow_triggers", init);
  }

  /** Create Dashboard Transform */
  async data_sinks_create_dashboard_transform(init?: OperationInit<"data_sinks_create_dashboard_transform">): Promise<OperationData<"data_sinks_create_dashboard_transform">> {
    return this.client.requestOperation("data_sinks_create_dashboard_transform", "post", "/data_sinks/{data_sink_id}/dashboard_transforms", init);
  }

  /** Create Triggers */
  async data_sinks_create_triggers(init?: OperationInit<"data_sinks_create_triggers">): Promise<OperationData<"data_sinks_create_triggers">> {
    return this.client.requestOperation("data_sinks_create_triggers", "post", "/data_sinks/{data_sink_id}/flow_triggers", init);
  }

  /** Delete Dashboard Transform */
  async data_sinks_delete_dashboard_transform(init?: OperationInit<"data_sinks_delete_dashboard_transform">): Promise<OperationData<"data_sinks_delete_dashboard_transform">> {
    return this.client.requestOperation("data_sinks_delete_dashboard_transform", "delete", "/data_sinks/{data_sink_id}/dashboard_transforms", init);
  }

  /** Remove Data sink Tags */
  async data_sinks_delete_resource_tags(init?: OperationInit<"data_sinks_delete_resource_tags">): Promise<OperationData<"data_sinks_delete_resource_tags">> {
    return this.client.requestOperation("data_sinks_delete_resource_tags", "delete", "/data_sinks/{resource_id}/tags", init);
  }

  /** Flow Audit Log */
  async data_sinks_flow_audit_log(init?: OperationInit<"data_sinks_flow_audit_log">): Promise<OperationData<"data_sinks_flow_audit_log">> {
    return this.client.requestOperation("data_sinks_flow_audit_log", "get", "/data_sinks/{resource_id}/flow/audit_log", init);
  }

  /** Flow Dashboard */
  async data_sinks_flow_dashboard(init?: OperationInit<"data_sinks_flow_dashboard">): Promise<OperationData<"data_sinks_flow_dashboard">> {
    return this.client.requestOperation("data_sinks_flow_dashboard", "get", "/data_sinks/{resource_id}/flow/dashboard", init);
  }

  /** Flow Logs */
  async data_sinks_flow_logs(init?: OperationInit<"data_sinks_flow_logs">): Promise<OperationData<"data_sinks_flow_logs">> {
    return this.client.requestOperation("data_sinks_flow_logs", "get", "/data_sinks/{resource_id}/flow/logs", init);
  }

  /** Flow Metrics */
  async data_sinks_flow_metrics(init?: OperationInit<"data_sinks_flow_metrics">): Promise<OperationData<"data_sinks_flow_metrics">> {
    return this.client.requestOperation("data_sinks_flow_metrics", "get", "/data_sinks/{resource_id}/flow/metrics", init);
  }

  /** Flow Status Metrics */
  async data_sinks_flow_status_metrics(init?: OperationInit<"data_sinks_flow_status_metrics">): Promise<OperationData<"data_sinks_flow_status_metrics">> {
    return this.client.requestOperation("data_sinks_flow_status_metrics", "get", "/data_sinks/{resource_id}/flow/status_metrics", init);
  }

  /** Get Offset */
  async data_sinks_get_data_sink_offset(init?: OperationInit<"data_sinks_get_data_sink_offset">): Promise<OperationData<"data_sinks_get_data_sink_offset">> {
    return this.client.requestOperation("data_sinks_get_data_sink_offset", "get", "/data_sinks/{data_sink_id}/offset", init);
  }

  /** Get Offset */
  async data_sinks_get_data_sink_offset_get(init?: OperationInit<"data_sinks_get_data_sink_offset_get">): Promise<OperationData<"data_sinks_get_data_sink_offset_get">> {
    return this.client.requestOperation("data_sinks_get_data_sink_offset_get", "get", "/data_sinks/{data_sink_id}/offset/{data_set_id}", init);
  }

  /** Get Quarantine Offset */
  async data_sinks_get_data_sink_quarantine_offset(init?: OperationInit<"data_sinks_get_data_sink_quarantine_offset">): Promise<OperationData<"data_sinks_get_data_sink_quarantine_offset">> {
    return this.client.requestOperation("data_sinks_get_data_sink_quarantine_offset", "get", "/data_sinks/{data_sink_id}/quarantine/offset", init);
  }

  /** Get Quarantine Offset */
  async data_sinks_get_data_sink_quarantine_offset_get(init?: OperationInit<"data_sinks_get_data_sink_quarantine_offset_get">): Promise<OperationData<"data_sinks_get_data_sink_quarantine_offset_get">> {
    return this.client.requestOperation("data_sinks_get_data_sink_quarantine_offset_get", "get", "/data_sinks/{data_sink_id}/quarantine/offset/{data_set_id}", init);
  }

  /** Get Run Status */
  async data_sinks_get_data_sink_run_status(init?: OperationInit<"data_sinks_get_data_sink_run_status">): Promise<OperationData<"data_sinks_get_data_sink_run_status">> {
    return this.client.requestOperation("data_sinks_get_data_sink_run_status", "get", "/data_sinks/{data_sink_id}/run_status", init);
  }

  /** Get Run Status */
  async data_sinks_get_data_sink_run_status_get(init?: OperationInit<"data_sinks_get_data_sink_run_status_get">): Promise<OperationData<"data_sinks_get_data_sink_run_status_get">> {
    return this.client.requestOperation("data_sinks_get_data_sink_run_status_get", "get", "/data_sinks/{data_sink_id}/run_status/{run_id}", init);
  }

  /** Get Quarantine Aggregation */
  async data_sinks_get_quarantine_aggregation(init?: OperationInit<"data_sinks_get_quarantine_aggregation">): Promise<OperationData<"data_sinks_get_quarantine_aggregation">> {
    return this.client.requestOperation("data_sinks_get_quarantine_aggregation", "get", "/data_sinks/{resource_id}/quarantine_aggregation", init);
  }

  /** Get Data sink Tags */
  async data_sinks_get_resource_tags(init?: OperationInit<"data_sinks_get_resource_tags">): Promise<OperationData<"data_sinks_get_resource_tags">> {
    return this.client.requestOperation("data_sinks_get_resource_tags", "get", "/data_sinks/{resource_id}/tags", init);
  }

  /** Index */
  async data_sinks_index(init?: OperationInit<"data_sinks_index">): Promise<OperationData<"data_sinks_index">> {
    return this.client.requestOperation("data_sinks_index", "get", "/data_sinks/{data_sink_id}/flow_triggers", init);
  }

  /** List Data sink Docs */
  async data_sinks_list_resource_docs(init?: OperationInit<"data_sinks_list_resource_docs">): Promise<OperationData<"data_sinks_list_resource_docs">> {
    return this.client.requestOperation("data_sinks_list_resource_docs", "get", "/data_sinks/{resource_id}/docs", init);
  }

  /** Pause All Triggers */
  async data_sinks_pause_all_triggers(init?: OperationInit<"data_sinks_pause_all_triggers">): Promise<OperationData<"data_sinks_pause_all_triggers">> {
    return this.client.requestOperation("data_sinks_pause_all_triggers", "put", "/data_sinks/{data_sink_id}/flow_triggers/pause/all", init);
  }

  /** Pause Triggers */
  async data_sinks_pause_triggers(init?: OperationInit<"data_sinks_pause_triggers">): Promise<OperationData<"data_sinks_pause_triggers">> {
    return this.client.requestOperation("data_sinks_pause_triggers", "put", "/data_sinks/{data_sink_id}/flow_triggers/pause", init);
  }

  /** Probe Detect Schemas Data Sink */
  async data_sinks_probe_detect_schemas_data_sink(init?: OperationInit<"data_sinks_probe_detect_schemas_data_sink">): Promise<OperationData<"data_sinks_probe_detect_schemas_data_sink">> {
    return this.client.requestOperation("data_sinks_probe_detect_schemas_data_sink", "put", "/data_sinks/{data_sink_id}/probe/schemas", init);
  }

  /** Probe Detect Schemas Data Sink */
  async data_sinks_probe_detect_schemas_data_sink_post(init?: OperationInit<"data_sinks_probe_detect_schemas_data_sink_post">): Promise<OperationData<"data_sinks_probe_detect_schemas_data_sink_post">> {
    return this.client.requestOperation("data_sinks_probe_detect_schemas_data_sink_post", "post", "/data_sinks/{data_sink_id}/probe/schemas", init);
  }

  /** Probe List Files In Bucket Data Sink */
  async data_sinks_probe_list_files_in_bucket_data_sink(init?: OperationInit<"data_sinks_probe_list_files_in_bucket_data_sink">): Promise<OperationData<"data_sinks_probe_list_files_in_bucket_data_sink">> {
    return this.client.requestOperation("data_sinks_probe_list_files_in_bucket_data_sink", "put", "/data_sinks/{data_sink_id}/probe/buckets", init);
  }

  /** Probe List Files In Bucket Data Sink */
  async data_sinks_probe_list_files_in_bucket_data_sink_post(init?: OperationInit<"data_sinks_probe_list_files_in_bucket_data_sink_post">): Promise<OperationData<"data_sinks_probe_list_files_in_bucket_data_sink_post">> {
    return this.client.requestOperation("data_sinks_probe_list_files_in_bucket_data_sink_post", "post", "/data_sinks/{data_sink_id}/probe/buckets", init);
  }

  /** Probe List Tree Data Sink */
  async data_sinks_probe_list_tree_data_sink(init?: OperationInit<"data_sinks_probe_list_tree_data_sink">): Promise<OperationData<"data_sinks_probe_list_tree_data_sink">> {
    return this.client.requestOperation("data_sinks_probe_list_tree_data_sink", "put", "/data_sinks/{data_sink_id}/probe/tree", init);
  }

  /** Probe List Tree Data Sink */
  async data_sinks_probe_list_tree_data_sink_post(init?: OperationInit<"data_sinks_probe_list_tree_data_sink_post">): Promise<OperationData<"data_sinks_probe_list_tree_data_sink_post">> {
    return this.client.requestOperation("data_sinks_probe_list_tree_data_sink_post", "post", "/data_sinks/{data_sink_id}/probe/tree", init);
  }

  /** Probe Read File Data Sink */
  async data_sinks_probe_read_file_data_sink(init?: OperationInit<"data_sinks_probe_read_file_data_sink">): Promise<OperationData<"data_sinks_probe_read_file_data_sink">> {
    return this.client.requestOperation("data_sinks_probe_read_file_data_sink", "put", "/data_sinks/{data_sink_id}/probe/files", init);
  }

  /** Probe Read File Data Sink */
  async data_sinks_probe_read_file_data_sink_post(init?: OperationInit<"data_sinks_probe_read_file_data_sink_post">): Promise<OperationData<"data_sinks_probe_read_file_data_sink_post">> {
    return this.client.requestOperation("data_sinks_probe_read_file_data_sink_post", "post", "/data_sinks/{data_sink_id}/probe/files", init);
  }

  /** Probe Read Quarantine Data Sink */
  async data_sinks_probe_read_quarantine_data_sink(init?: OperationInit<"data_sinks_probe_read_quarantine_data_sink">): Promise<OperationData<"data_sinks_probe_read_quarantine_data_sink">> {
    return this.client.requestOperation("data_sinks_probe_read_quarantine_data_sink", "put", "/data_sinks/{data_sink_id}/probe/quarantine/sample", init);
  }

  /** Probe Read Quarantine Data Sink */
  async data_sinks_probe_read_quarantine_data_sink_post(init?: OperationInit<"data_sinks_probe_read_quarantine_data_sink_post">): Promise<OperationData<"data_sinks_probe_read_quarantine_data_sink_post">> {
    return this.client.requestOperation("data_sinks_probe_read_quarantine_data_sink_post", "post", "/data_sinks/{data_sink_id}/probe/quarantine/sample", init);
  }

  /** Referenced By */
  async data_sinks_referenced_by(init?: OperationInit<"data_sinks_referenced_by">): Promise<OperationData<"data_sinks_referenced_by">> {
    return this.client.requestOperation("data_sinks_referenced_by", "get", "/data_sinks/{resource_id}/referenced_by", init);
  }

  /** Remove All Triggers */
  async data_sinks_remove_all_triggers(init?: OperationInit<"data_sinks_remove_all_triggers">): Promise<OperationData<"data_sinks_remove_all_triggers">> {
    return this.client.requestOperation("data_sinks_remove_all_triggers", "delete", "/data_sinks/{data_sink_id}/flow_triggers/all", init);
  }

  /** Remove Data sink Docs */
  async data_sinks_remove_resource_docs(init?: OperationInit<"data_sinks_remove_resource_docs">): Promise<OperationData<"data_sinks_remove_resource_docs">> {
    return this.client.requestOperation("data_sinks_remove_resource_docs", "delete", "/data_sinks/{resource_id}/docs", init);
  }

  /** Remove Triggers */
  async data_sinks_remove_triggers(init?: OperationInit<"data_sinks_remove_triggers">): Promise<OperationData<"data_sinks_remove_triggers">> {
    return this.client.requestOperation("data_sinks_remove_triggers", "delete", "/data_sinks/{data_sink_id}/flow_triggers", init);
  }

  /** Reset Data sink Docs */
  async data_sinks_reset_resource_docs(init?: OperationInit<"data_sinks_reset_resource_docs">): Promise<OperationData<"data_sinks_reset_resource_docs">> {
    return this.client.requestOperation("data_sinks_reset_resource_docs", "post", "/data_sinks/{resource_id}/docs", init);
  }

  /** Show Control Event */
  async data_sinks_show_control_event(init?: OperationInit<"data_sinks_show_control_event">): Promise<OperationData<"data_sinks_show_control_event">> {
    return this.client.requestOperation("data_sinks_show_control_event", "get", "/data_sinks/{resource_id}/control/{event}", init);
  }

  /** Show Dashboard Transform */
  async data_sinks_show_dashboard_transform(init?: OperationInit<"data_sinks_show_dashboard_transform">): Promise<OperationData<"data_sinks_show_dashboard_transform">> {
    return this.client.requestOperation("data_sinks_show_dashboard_transform", "get", "/data_sinks/{data_sink_id}/dashboard_transforms", init);
  }

  /** Trigger Quarantine Aggregation */
  async data_sinks_trigger_quarantine_aggregation(init?: OperationInit<"data_sinks_trigger_quarantine_aggregation">): Promise<OperationData<"data_sinks_trigger_quarantine_aggregation">> {
    return this.client.requestOperation("data_sinks_trigger_quarantine_aggregation", "post", "/data_sinks/{resource_id}/trigger_quarantine_aggregation", init);
  }

  /** Update Dashboard Transform */
  async data_sinks_update_dashboard_transform(init?: OperationInit<"data_sinks_update_dashboard_transform">): Promise<OperationData<"data_sinks_update_dashboard_transform">> {
    return this.client.requestOperation("data_sinks_update_dashboard_transform", "put", "/data_sinks/{data_sink_id}/dashboard_transforms", init);
  }

  /** Update Data Sink */
  async data_sinks_update_data_sink(init?: OperationInit<"data_sinks_update_data_sink">): Promise<OperationData<"data_sinks_update_data_sink">> {
    return this.client.requestOperation("data_sinks_update_data_sink", "patch", "/data_sinks/{data_sink_id}", init);
  }

  /** Update Data sink Tags */
  async data_sinks_update_resource_tags(init?: OperationInit<"data_sinks_update_resource_tags">): Promise<OperationData<"data_sinks_update_resource_tags">> {
    return this.client.requestOperation("data_sinks_update_resource_tags", "put", "/data_sinks/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async data_sinks_users_access_insights(init?: OperationInit<"data_sinks_users_access_insights">): Promise<OperationData<"data_sinks_users_access_insights">> {
    return this.client.requestOperation("data_sinks_users_access_insights", "get", "/data_sinks/{resource_id}/users_access_insights", init);
  }

  /** Delete a Sink */
  async delete_data_sink(init?: OperationInit<"delete_data_sink">): Promise<OperationData<"delete_data_sink">> {
    return this.client.requestOperation("delete_data_sink", "delete", "/data_sinks/{sink_id}", init);
  }

  /** Delete Data Sink Api Key */
  async delete_data_sink_api_key(init?: OperationInit<"delete_data_sink_api_key">): Promise<OperationData<"delete_data_sink_api_key">> {
    return this.client.requestOperation("delete_data_sink_api_key", "delete", "/data_sinks/{data_sink_id}/api_keys/{api_key_id}", init);
  }

  /** Delete Data Sink Quarantine Setting */
  async delete_data_sink_quarantine_setting(init?: OperationInit<"delete_data_sink_quarantine_setting">): Promise<OperationData<"delete_data_sink_quarantine_setting">> {
    return this.client.requestOperation("delete_data_sink_quarantine_setting", "delete", "/data_sinks/{data_sink_id}/quarantine_settings", init);
  }

  /** Delete Flow Via Data Sink */
  async delete_flow_via_data_sink(init?: OperationInit<"delete_flow_via_data_sink">): Promise<OperationData<"delete_flow_via_data_sink">> {
    return this.client.requestOperation("delete_flow_via_data_sink", "delete", "/data_sinks/{resource_id}/flow", init);
  }

  /** Explain Sink Access */
  async explain_sink_access(init?: OperationInit<"explain_sink_access">): Promise<OperationData<"explain_sink_access">> {
    return this.client.requestOperation("explain_sink_access", "get", "/data_sinks/{sink_id}/access", init);
  }

  /** Flow Run Status Via Data Sink */
  async flow_run_status_via_data_sink(init?: OperationInit<"flow_run_status_via_data_sink">): Promise<OperationData<"flow_run_status_via_data_sink">> {
    return this.client.requestOperation("flow_run_status_via_data_sink", "get", "/data_sinks/{resource_id}/flow/run_status", init);
  }

  /** Get Sink by ID */
  async get_data_sink(init?: OperationInit<"get_data_sink">): Promise<OperationData<"get_data_sink">> {
    return this.client.requestOperation("get_data_sink", "get", "/data_sinks/{sink_id}", init);
  }

  /** Get Data Sink Api Key */
  async get_data_sink_api_key(init?: OperationInit<"get_data_sink_api_key">): Promise<OperationData<"get_data_sink_api_key">> {
    return this.client.requestOperation("get_data_sink_api_key", "get", "/data_sinks/{data_sink_id}/api_keys/{api_key_id}", init);
  }

  /** Get Sink by ID with Expanded References */
  async get_data_sink_expanded(init?: OperationInit<"get_data_sink_expanded">): Promise<OperationData<"get_data_sink_expanded">> {
    return this.client.requestOperation("get_data_sink_expanded", "get", "/data_sinks/{sink_id}?expand=1", init);
  }

  /** Get Data Sink Metrics */
  async get_data_sink_metrics(init?: OperationInit<"get_data_sink_metrics">): Promise<OperationData<"get_data_sink_metrics">> {
    return this.client.requestOperation("get_data_sink_metrics", "get", "/data_sinks/{data_sink_id}/metrics", init);
  }

  /** Get Data Sink Metrics By Name */
  async get_data_sink_metrics_by_name(init?: OperationInit<"get_data_sink_metrics_by_name">): Promise<OperationData<"get_data_sink_metrics_by_name">> {
    return this.client.requestOperation("get_data_sink_metrics_by_name", "get", "/data_sinks/{data_sink_id}/metrics/{metrics_name}", init);
  }

  /** Get Data Sink Metrics File Stats Alias Not Found */
  async get_data_sink_metrics_file_stats_alias_not_found(init?: OperationInit<"get_data_sink_metrics_file_stats_alias_not_found">): Promise<OperationData<"get_data_sink_metrics_file_stats_alias_not_found">> {
    return this.client.requestOperation("get_data_sink_metrics_file_stats_alias_not_found", "get", "/data_sinks/{data_sink_id}/metrics/file_stats", init);
  }

  /** Get Data Sink Metrics Files */
  async get_data_sink_metrics_files(init?: OperationInit<"get_data_sink_metrics_files">): Promise<OperationData<"get_data_sink_metrics_files">> {
    return this.client.requestOperation("get_data_sink_metrics_files", "get", "/data_sinks/{data_sink_id}/metrics/files", init);
  }

  /** Get Data Sink Metrics Files Details */
  async get_data_sink_metrics_files_details(init?: OperationInit<"get_data_sink_metrics_files_details">): Promise<OperationData<"get_data_sink_metrics_files_details">> {
    return this.client.requestOperation("get_data_sink_metrics_files_details", "get", "/data_sinks/{data_sink_id}/metrics/files_details", init);
  }

  /** Get Data Sink Metrics Files Stats */
  async get_data_sink_metrics_files_stats(init?: OperationInit<"get_data_sink_metrics_files_stats">): Promise<OperationData<"get_data_sink_metrics_files_stats">> {
    return this.client.requestOperation("get_data_sink_metrics_files_stats", "get", "/data_sinks/{data_sink_id}/metrics/files_stats", init);
  }

  /** Get Data Sink Metrics Quarantine Files */
  async get_data_sink_metrics_quarantine_files(init?: OperationInit<"get_data_sink_metrics_quarantine_files">): Promise<OperationData<"get_data_sink_metrics_quarantine_files">> {
    return this.client.requestOperation("get_data_sink_metrics_quarantine_files", "get", "/data_sinks/{data_sink_id}/metrics/quarantine_files", init);
  }

  /** Get Data Sink Metrics Run Summary */
  async get_data_sink_metrics_run_summary(init?: OperationInit<"get_data_sink_metrics_run_summary">): Promise<OperationData<"get_data_sink_metrics_run_summary">> {
    return this.client.requestOperation("get_data_sink_metrics_run_summary", "get", "/data_sinks/{data_sink_id}/metrics/run_summary", init);
  }

  /** Get Data Sink Quarantine Setting */
  async get_data_sink_quarantine_settings(init?: OperationInit<"get_data_sink_quarantine_settings">): Promise<OperationData<"get_data_sink_quarantine_settings">> {
    return this.client.requestOperation("get_data_sink_quarantine_settings", "get", "/data_sinks/{data_sink_id}/quarantine_settings", init);
  }

  /** Get All Sinks */
  async get_data_sinks(init?: OperationInit<"get_data_sinks">): Promise<OperationData<"get_data_sinks">> {
    return this.client.requestOperation("get_data_sinks", "get", "/data_sinks", init);
  }

  /** Get Data Sinks Metrics Collection Not Found */
  async get_data_sinks_metrics_collection_not_found(init?: OperationInit<"get_data_sinks_metrics_collection_not_found">): Promise<OperationData<"get_data_sinks_metrics_collection_not_found">> {
    return this.client.requestOperation("get_data_sinks_metrics_collection_not_found", "get", "/data_sinks/metrics", init);
  }

  /** Get Script Sink Config */
  async get_script_sink_config(init?: OperationInit<"get_script_sink_config">): Promise<OperationData<"get_script_sink_config">> {
    return this.client.requestOperation("get_script_sink_config", "get", "/data_sinks/script_sink_config", init);
  }

  /** List All Data Sink IDs */
  async list_all_data_sink_ids(init?: OperationInit<"list_all_data_sink_ids">): Promise<OperationData<"list_all_data_sink_ids">> {
    return this.client.requestOperation("list_all_data_sink_ids", "get", "/data_sinks/all/ids", init);
  }

  /** List All Data Sinks */
  async list_all_data_sinks(init?: OperationInit<"list_all_data_sinks">): Promise<OperationData<"list_all_data_sinks">> {
    return this.client.requestOperation("list_all_data_sinks", "get", "/data_sinks/all", init);
  }

  /** List All Data Sinks By Data Set */
  async list_all_data_sinks_by_data_set(init?: OperationInit<"list_all_data_sinks_by_data_set">): Promise<OperationData<"list_all_data_sinks_by_data_set">> {
    return this.client.requestOperation("list_all_data_sinks_by_data_set", "get", "/data_sinks/all/data_set", init);
  }

  /** List All Data Sinks Condensed */
  async list_all_data_sinks_condensed(init?: OperationInit<"list_all_data_sinks_condensed">): Promise<OperationData<"list_all_data_sinks_condensed">> {
    return this.client.requestOperation("list_all_data_sinks_condensed", "get", "/data_sinks/all/condensed", init);
  }

  /** List Data Sink Api Keys */
  async list_data_sink_api_keys(init?: OperationInit<"list_data_sink_api_keys">): Promise<OperationData<"list_data_sink_api_keys">> {
    return this.client.requestOperation("list_data_sink_api_keys", "get", "/data_sinks/{data_sink_id}/api_keys", init);
  }

  /** List Flow Accessors Via Data Sink */
  async list_flow_accessors_via_data_sink(init?: OperationInit<"list_flow_accessors_via_data_sink">): Promise<OperationData<"list_flow_accessors_via_data_sink">> {
    return this.client.requestOperation("list_flow_accessors_via_data_sink", "get", "/data_sinks/{resource_id}/flow/accessors", init);
  }

  /** List Flow Docs Via Data Sink */
  async list_flow_docs_via_data_sink(init?: OperationInit<"list_flow_docs_via_data_sink">): Promise<OperationData<"list_flow_docs_via_data_sink">> {
    return this.client.requestOperation("list_flow_docs_via_data_sink", "get", "/data_sinks/{resource_id}/flow/docs", init);
  }

  /** Pause All Data Sink Api Keys */
  async pause_all_data_sink_api_keys(init?: OperationInit<"pause_all_data_sink_api_keys">): Promise<OperationData<"pause_all_data_sink_api_keys">> {
    return this.client.requestOperation("pause_all_data_sink_api_keys", "put", "/data_sinks/{data_sink_id}/api_keys/pause", init);
  }

  /** Pause a Sink */
  async pause_data_sink(init?: OperationInit<"pause_data_sink">): Promise<OperationData<"pause_data_sink">> {
    return this.client.requestOperation("pause_data_sink", "put", "/data_sinks/{sink_id}/pause", init);
  }

  /** Pause Data Sink Api Key */
  async pause_data_sink_api_key(init?: OperationInit<"pause_data_sink_api_key">): Promise<OperationData<"pause_data_sink_api_key">> {
    return this.client.requestOperation("pause_data_sink_api_key", "put", "/data_sinks/{data_sink_id}/api_keys/{api_key_id}/pause", init);
  }

  /** Pause Flow Via Data Sink */
  async pause_flow_via_data_sink(init?: OperationInit<"pause_flow_via_data_sink">): Promise<OperationData<"pause_flow_via_data_sink">> {
    return this.client.requestOperation("pause_flow_via_data_sink", "put", "/data_sinks/{resource_id}/flow/pause", init);
  }

  /** Probe Data Sink */
  async probe_data_sink(init?: OperationInit<"probe_data_sink">): Promise<OperationData<"probe_data_sink">> {
    return this.client.requestOperation("probe_data_sink", "get", "/data_sinks/{data_sink_id}/probe", init);
  }

  /** Probe Summary Data Sink */
  async probe_summary_data_sink(init?: OperationInit<"probe_summary_data_sink">): Promise<OperationData<"probe_summary_data_sink">> {
    return this.client.requestOperation("probe_summary_data_sink", "get", "/data_sinks/{data_sink_id}/probe/summary", init);
  }

  /** Remove Flow Accessors Via Data Sink */
  async remove_flow_accessors_via_data_sink(init?: OperationInit<"remove_flow_accessors_via_data_sink">): Promise<OperationData<"remove_flow_accessors_via_data_sink">> {
    return this.client.requestOperation("remove_flow_accessors_via_data_sink", "delete", "/data_sinks/{resource_id}/flow/accessors", init);
  }

  /** Remove Flow Docs Via Data Sink */
  async remove_flow_docs_via_data_sink(init?: OperationInit<"remove_flow_docs_via_data_sink">): Promise<OperationData<"remove_flow_docs_via_data_sink">> {
    return this.client.requestOperation("remove_flow_docs_via_data_sink", "delete", "/data_sinks/{resource_id}/flow/docs", init);
  }

  /** Reset Flow Accessors Via Data Sink */
  async reset_flow_accessors_via_data_sink(init?: OperationInit<"reset_flow_accessors_via_data_sink">): Promise<OperationData<"reset_flow_accessors_via_data_sink">> {
    return this.client.requestOperation("reset_flow_accessors_via_data_sink", "post", "/data_sinks/{resource_id}/flow/accessors", init);
  }

  /** Reset Flow Docs Via Data Sink */
  async reset_flow_docs_via_data_sink(init?: OperationInit<"reset_flow_docs_via_data_sink">): Promise<OperationData<"reset_flow_docs_via_data_sink">> {
    return this.client.requestOperation("reset_flow_docs_via_data_sink", "post", "/data_sinks/{resource_id}/flow/docs", init);
  }

  /** Rotate Data Sink Api Key */
  async rotate_data_sink_api_key(init?: OperationInit<"rotate_data_sink_api_key">): Promise<OperationData<"rotate_data_sink_api_key">> {
    return this.client.requestOperation("rotate_data_sink_api_key", "put", "/data_sinks/{data_sink_id}/api_keys/{api_key_id}/rotate", init);
  }

  /** Run Analysis */
  async run_analysis(init?: OperationInit<"run_analysis">): Promise<OperationData<"run_analysis">> {
    return this.client.requestOperation("run_analysis", "get", "/data_sinks/{data_sink_id}/run_analysis", init);
  }

  /** Search Data Sink Api Keys */
  async search_data_sink_api_keys(init?: OperationInit<"search_data_sink_api_keys">): Promise<OperationData<"search_data_sink_api_keys">> {
    return this.client.requestOperation("search_data_sink_api_keys", "post", "/data_sinks/{data_sink_id}/api_keys/search", init);
  }

  /** Search Data Sinks */
  async search_data_sinks(init?: OperationInit<"search_data_sinks">): Promise<OperationData<"search_data_sinks">> {
    return this.client.requestOperation("search_data_sinks", "post", "/data_sinks/search", init);
  }

  /** Search Data Sinks by Tags */
  async search_data_sinks_tags(init?: OperationInit<"search_data_sinks_tags">): Promise<OperationData<"search_data_sinks_tags">> {
    return this.client.requestOperation("search_data_sinks_tags", "post", "/data_sinks/search_tags", init);
  }

  /** Show Flow Via Data Sink */
  async show_flow_via_data_sink(init?: OperationInit<"show_flow_via_data_sink">): Promise<OperationData<"show_flow_via_data_sink">> {
    return this.client.requestOperation("show_flow_via_data_sink", "get", "/data_sinks/{resource_id}/flow", init);
  }

  /** Test Data Sink Authentication */
  async test_data_sink_authentication(init?: OperationInit<"test_data_sink_authentication">): Promise<OperationData<"test_data_sink_authentication">> {
    return this.client.requestOperation("test_data_sink_authentication", "get", "/data_sinks/{data_sink_id}/probe/authenticate", init);
  }

  /** Test Data Sink Config */
  async test_data_sink_config(init?: OperationInit<"test_data_sink_config">): Promise<OperationData<"test_data_sink_config">> {
    return this.client.requestOperation("test_data_sink_config", "post", "/data_sinks/test_config", init);
  }

  /** Update Sink */
  async update_data_sink(init?: OperationInit<"update_data_sink">): Promise<OperationData<"update_data_sink">> {
    return this.client.requestOperation("update_data_sink", "put", "/data_sinks/{sink_id}", init);
  }

  /** Update Data Sink Api Key */
  async update_data_sink_api_key(init?: OperationInit<"update_data_sink_api_key">): Promise<OperationData<"update_data_sink_api_key">> {
    return this.client.requestOperation("update_data_sink_api_key", "put", "/data_sinks/{data_sink_id}/api_keys/{api_key_id}", init);
  }

  /** Update Data Sink Quarantine Setting */
  async update_data_sink_quarantine_setting(init?: OperationInit<"update_data_sink_quarantine_setting">): Promise<OperationData<"update_data_sink_quarantine_setting">> {
    return this.client.requestOperation("update_data_sink_quarantine_setting", "put", "/data_sinks/{data_sink_id}/quarantine_settings", init);
  }

  /** Update Data Sink Runtime Status */
  async update_data_sink_runtime_status(init?: OperationInit<"update_data_sink_runtime_status">): Promise<OperationData<"update_data_sink_runtime_status">> {
    return this.client.requestOperation("update_data_sink_runtime_status", "put", "/data_sinks/{data_sink_id}/runtime_status/{runtime_status}", init);
  }

  /** Update Flow Via Data Sink */
  async update_flow_via_data_sink(init?: OperationInit<"update_flow_via_data_sink">): Promise<OperationData<"update_flow_via_data_sink">> {
    return this.client.requestOperation("update_flow_via_data_sink", "put", "/data_sinks/{resource_id}/flow", init);
  }

  /** Validate Config */
  async validate_data_sink_config(init?: OperationInit<"validate_data_sink_config">): Promise<OperationData<"validate_data_sink_config">> {
    return this.client.requestOperation("validate_data_sink_config", "post", "/data_sinks/{data_sink_id}/config/validate", init);
  }
}