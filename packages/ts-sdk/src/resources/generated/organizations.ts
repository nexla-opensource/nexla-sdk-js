import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class OrganizationsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_orgs">): Promise<OperationData<"get_orgs">> {
    return this.client.requestOperation("get_orgs", "get", "/orgs", init);
  }

  async get(init?: OperationInit<"get_org">): Promise<OperationData<"get_org">> {
    return this.client.requestOperation("get_org", "get", "/orgs/{org_id}", init);
  }

  async update(init?: OperationInit<"update_org">): Promise<OperationData<"update_org">> {
    return this.client.requestOperation("update_org", "put", "/orgs/{org_id}", init);
  }

  async delete(init?: OperationInit<"destroy_org">): Promise<OperationData<"destroy_org">> {
    return this.client.requestOperation("destroy_org", "delete", "/orgs/{org_id}", init);
  }

  /** Activate Org Cluster */
  async activate_org_cluster(init?: OperationInit<"activate_org_cluster">): Promise<OperationData<"activate_org_cluster">> {
    return this.client.requestOperation("activate_org_cluster", "put", "/orgs/{org_id}/cluster/activate", init);
  }

  /** Activate Org Members */
  async activate_org_members(init?: OperationInit<"activate_org_members">): Promise<OperationData<"activate_org_members">> {
    return this.client.requestOperation("activate_org_members", "put", "/orgs/{org_id}/members/activate", init);
  }

  /** Add organization custodians. */
  async add_org_custodians(init?: OperationInit<"add_org_custodians">): Promise<OperationData<"add_org_custodians">> {
    return this.client.requestOperation("add_org_custodians", "put", "/orgs/{org_id}/custodians", init);
  }

  /** Create Org Quarantine Setting */
  async create_org_quarantine_setting(init?: OperationInit<"create_org_quarantine_setting">): Promise<OperationData<"create_org_quarantine_setting">> {
    return this.client.requestOperation("create_org_quarantine_setting", "post", "/orgs/{org_id}/quarantine_settings", init);
  }

  /** Deactivate Org Members */
  async deactivate_org_members(init?: OperationInit<"deactivate_org_members">): Promise<OperationData<"deactivate_org_members">> {
    return this.client.requestOperation("deactivate_org_members", "put", "/orgs/{org_id}/members/deactivate", init);
  }

  /** Remove Members from an Organization. */
  async delete_org_members(init?: OperationInit<"delete_org_members">): Promise<OperationData<"delete_org_members">> {
    return this.client.requestOperation("delete_org_members", "delete", "/orgs/{org_id}/members", init);
  }

  /** Delete Org Quarantine Setting */
  async delete_org_quarantine_setting(init?: OperationInit<"delete_org_quarantine_setting">): Promise<OperationData<"delete_org_quarantine_setting">> {
    return this.client.requestOperation("delete_org_quarantine_setting", "delete", "/orgs/{org_id}/quarantine_settings", init);
  }

  /** Destroy Org */
  async destroy_org(init?: OperationInit<"destroy_org">): Promise<OperationData<"destroy_org">> {
    return this.client.requestOperation("destroy_org", "delete", "/orgs/{org_id}", init);
  }

  /** Disable Org Feature */
  async disable_org_feature(init?: OperationInit<"disable_org_feature">): Promise<OperationData<"disable_org_feature">> {
    return this.client.requestOperation("disable_org_feature", "put", "/orgs/{org_id}/features/{feature_name}/disable", init);
  }

  /** Enable Org Feature */
  async enable_org_feature(init?: OperationInit<"enable_org_feature">): Promise<OperationData<"enable_org_feature">> {
    return this.client.requestOperation("enable_org_feature", "put", "/orgs/{org_id}/features/{feature_name}/enable", init);
  }

  /** Get Allowed Clusters */
  async get_allowed_clusters(init?: OperationInit<"get_allowed_clusters">): Promise<OperationData<"get_allowed_clusters">> {
    return this.client.requestOperation("get_allowed_clusters", "get", "/orgs/{org_id}/allowed_clusters", init);
  }

  /** Get Current Org Account Summary */
  async get_current_org_account_summary(init?: OperationInit<"get_current_org_account_summary">): Promise<OperationData<"get_current_org_account_summary">> {
    return this.client.requestOperation("get_current_org_account_summary", "get", "/orgs/account_summary", init);
  }

  /** Get Organization by ID */
  async get_org(init?: OperationInit<"get_org">): Promise<OperationData<"get_org">> {
    return this.client.requestOperation("get_org", "get", "/orgs/{org_id}", init);
  }

  /** Get Org Account Summary */
  async get_org_account_summary(init?: OperationInit<"get_org_account_summary">): Promise<OperationData<"get_org_account_summary">> {
    return this.client.requestOperation("get_org_account_summary", "get", "/orgs/{org_id}/account_summary", init);
  }

  /** Get Org Clusters */
  async get_org_clusters(init?: OperationInit<"get_org_clusters">): Promise<OperationData<"get_org_clusters">> {
    return this.client.requestOperation("get_org_clusters", "get", "/orgs/{org_id}/clusters", init);
  }

  /** Get organization custodians. */
  async get_org_custodians(init?: OperationInit<"get_org_custodians">): Promise<OperationData<"get_org_custodians">> {
    return this.client.requestOperation("get_org_custodians", "get", "/orgs/{org_id}/custodians", init);
  }

  /** Get Org Flows Dashboard */
  async get_org_flows_dashboard(init?: OperationInit<"get_org_flows_dashboard">): Promise<OperationData<"get_org_flows_dashboard">> {
    return this.client.requestOperation("get_org_flows_dashboard", "get", "/orgs/{org_id}/flows/dashboard", init);
  }

  /** Get Org Flows Report */
  async get_org_flows_report(init?: OperationInit<"get_org_flows_report">): Promise<OperationData<"get_org_flows_report">> {
    return this.client.requestOperation("get_org_flows_report", "get", "/orgs/{org_id}/flows_report", init);
  }

  /** Get Org Flows Status Metrics */
  async get_org_flows_status_metrics(init?: OperationInit<"get_org_flows_status_metrics">): Promise<OperationData<"get_org_flows_status_metrics">> {
    return this.client.requestOperation("get_org_flows_status_metrics", "get", "/orgs/{org_id}/flows/status_metrics", init);
  }

  /** Get Org Login History */
  async get_org_login_history(init?: OperationInit<"get_org_login_history">): Promise<OperationData<"get_org_login_history">> {
    return this.client.requestOperation("get_org_login_history", "get", "/orgs/{org_id}/login_history", init);
  }

  /** Get All Members in Organization */
  async get_org_members(init?: OperationInit<"get_org_members">): Promise<OperationData<"get_org_members">> {
    return this.client.requestOperation("get_org_members", "get", "/orgs/{org_id}/members", init);
  }

  /** Get Org Metrics */
  async get_org_metrics(init?: OperationInit<"get_org_metrics">): Promise<OperationData<"get_org_metrics">> {
    return this.client.requestOperation("get_org_metrics", "get", "/orgs/{org_id}/metrics", init);
  }

  /** Get Org Metrics By Name */
  async get_org_metrics_by_name(init?: OperationInit<"get_org_metrics_by_name">): Promise<OperationData<"get_org_metrics_by_name">> {
    return this.client.requestOperation("get_org_metrics_by_name", "get", "/orgs/{org_id}/metrics/{metrics_name}", init);
  }

  /** Get Org Quarantine Setting */
  async get_org_quarantine_settings(init?: OperationInit<"get_org_quarantine_settings">): Promise<OperationData<"get_org_quarantine_settings">> {
    return this.client.requestOperation("get_org_quarantine_settings", "get", "/orgs/{org_id}/quarantine_settings", init);
  }

  /** Get Org Resource Audit Log */
  async get_org_resource_audit_log(init?: OperationInit<"get_org_resource_audit_log">): Promise<OperationData<"get_org_resource_audit_log">> {
    return this.client.requestOperation("get_org_resource_audit_log", "get", "/orgs/{org_id}/{resource_type}/audit_log", init);
  }

  /** Get all Organizations */
  async get_orgs(init?: OperationInit<"get_orgs">): Promise<OperationData<"get_orgs">> {
    return this.client.requestOperation("get_orgs", "get", "/orgs", init);
  }

  /** List Catalog Config Data Sets for Org */
  async index_data_sets_catalog_configs(init?: OperationInit<"index_data_sets_catalog_configs">): Promise<OperationData<"index_data_sets_catalog_configs">> {
    return this.client.requestOperation("index_data_sets_catalog_configs", "get", "/orgs/{org_id}/data_sets_catalog_configs", init);
  }

  /** List All Orgs */
  async list_all_orgs(init?: OperationInit<"list_all_orgs">): Promise<OperationData<"list_all_orgs">> {
    return this.client.requestOperation("list_all_orgs", "get", "/orgs/all", init);
  }

  /** Org Create */
  async org_create(init?: OperationInit<"org_create">): Promise<OperationData<"org_create">> {
    return this.client.requestOperation("org_create", "post", "/orgs/{org_id}/notification_settings", init);
  }

  /** Org Destroy */
  async org_destroy(init?: OperationInit<"org_destroy">): Promise<OperationData<"org_destroy">> {
    return this.client.requestOperation("org_destroy", "delete", "/orgs/{org_id}/notification_settings/{notification_settings_id}", init);
  }

  /** Org Index */
  async org_index(init?: OperationInit<"org_index">): Promise<OperationData<"org_index">> {
    return this.client.requestOperation("org_index", "get", "/orgs/{org_id}/notification_settings", init);
  }

  /** Org Update */
  async org_update(init?: OperationInit<"org_update">): Promise<OperationData<"org_update">> {
    return this.client.requestOperation("org_update", "put", "/orgs/{org_id}/notification_settings/{notification_settings_id}", init);
  }

  /** Activate Rate Limited Sources */
  async orgs_activate_rate_limited_sources(init?: OperationInit<"orgs_activate_rate_limited_sources">): Promise<OperationData<"orgs_activate_rate_limited_sources">> {
    return this.client.requestOperation("orgs_activate_rate_limited_sources", "put", "/orgs/{org_id}/source_activate", init);
  }

  /** Activate Rate Limited Sources */
  async orgs_activate_rate_limited_sources_put(init?: OperationInit<"orgs_activate_rate_limited_sources_put">): Promise<OperationData<"orgs_activate_rate_limited_sources_put">> {
    return this.client.requestOperation("orgs_activate_rate_limited_sources_put", "put", "/orgs/{org_id}/source_activate/{status_param}", init);
  }

  /** Add Organization Docs */
  async orgs_add_resource_docs(init?: OperationInit<"orgs_add_resource_docs">): Promise<OperationData<"orgs_add_resource_docs">> {
    return this.client.requestOperation("orgs_add_resource_docs", "put", "/orgs/{resource_id}/docs", init);
  }

  /** Create Dashboard Transform */
  async orgs_create_dashboard_transform(init?: OperationInit<"orgs_create_dashboard_transform">): Promise<OperationData<"orgs_create_dashboard_transform">> {
    return this.client.requestOperation("orgs_create_dashboard_transform", "post", "/orgs/{org_id}/dashboard_transforms", init);
  }

  /** Delete Dashboard Transform */
  async orgs_delete_dashboard_transform(init?: OperationInit<"orgs_delete_dashboard_transform">): Promise<OperationData<"orgs_delete_dashboard_transform">> {
    return this.client.requestOperation("orgs_delete_dashboard_transform", "delete", "/orgs/{org_id}/dashboard_transforms", init);
  }

  /** Get Account Rate Limited Status */
  async orgs_get_account_rate_limited(init?: OperationInit<"orgs_get_account_rate_limited">): Promise<OperationData<"orgs_get_account_rate_limited">> {
    return this.client.requestOperation("orgs_get_account_rate_limited", "get", "/orgs/{org_id}/account_rate_limited", init);
  }

  /** List Organization Docs */
  async orgs_list_resource_docs(init?: OperationInit<"orgs_list_resource_docs">): Promise<OperationData<"orgs_list_resource_docs">> {
    return this.client.requestOperation("orgs_list_resource_docs", "get", "/orgs/{resource_id}/docs", init);
  }

  /** Pause Rate Limited Sources */
  async orgs_pause_rate_limited_sources(init?: OperationInit<"orgs_pause_rate_limited_sources">): Promise<OperationData<"orgs_pause_rate_limited_sources">> {
    return this.client.requestOperation("orgs_pause_rate_limited_sources", "put", "/orgs/{org_id}/source_pause", init);
  }

  /** Pause Rate Limited Sources */
  async orgs_pause_rate_limited_sources_put(init?: OperationInit<"orgs_pause_rate_limited_sources_put">): Promise<OperationData<"orgs_pause_rate_limited_sources_put">> {
    return this.client.requestOperation("orgs_pause_rate_limited_sources_put", "put", "/orgs/{org_id}/source_pause/{status_param}", init);
  }

  /** Remove Organization Docs */
  async orgs_remove_resource_docs(init?: OperationInit<"orgs_remove_resource_docs">): Promise<OperationData<"orgs_remove_resource_docs">> {
    return this.client.requestOperation("orgs_remove_resource_docs", "delete", "/orgs/{resource_id}/docs", init);
  }

  /** Reset Organization Docs */
  async orgs_reset_resource_docs(init?: OperationInit<"orgs_reset_resource_docs">): Promise<OperationData<"orgs_reset_resource_docs">> {
    return this.client.requestOperation("orgs_reset_resource_docs", "post", "/orgs/{resource_id}/docs", init);
  }

  /** Show Control Event */
  async orgs_show_control_event(init?: OperationInit<"orgs_show_control_event">): Promise<OperationData<"orgs_show_control_event">> {
    return this.client.requestOperation("orgs_show_control_event", "get", "/orgs/{resource_id}/control/{event}", init);
  }

  /** Show Dashboard Transform */
  async orgs_show_dashboard_transform(init?: OperationInit<"orgs_show_dashboard_transform">): Promise<OperationData<"orgs_show_dashboard_transform">> {
    return this.client.requestOperation("orgs_show_dashboard_transform", "get", "/orgs/{org_id}/dashboard_transforms", init);
  }

  /** Update Dashboard Transform */
  async orgs_update_dashboard_transform(init?: OperationInit<"orgs_update_dashboard_transform">): Promise<OperationData<"orgs_update_dashboard_transform">> {
    return this.client.requestOperation("orgs_update_dashboard_transform", "put", "/orgs/{org_id}/dashboard_transforms", init);
  }

  /** Update Org */
  async orgs_update_org(init?: OperationInit<"orgs_update_org">): Promise<OperationData<"orgs_update_org">> {
    return this.client.requestOperation("orgs_update_org", "patch", "/orgs/{org_id}", init);
  }

  /** Remove organization custodians. */
  async remove_org_custodians(init?: OperationInit<"remove_org_custodians">): Promise<OperationData<"remove_org_custodians">> {
    return this.client.requestOperation("remove_org_custodians", "delete", "/orgs/{org_id}/custodians", init);
  }

  /** Reset organization custodians. */
  async reset_org_custodians(init?: OperationInit<"reset_org_custodians">): Promise<OperationData<"reset_org_custodians">> {
    return this.client.requestOperation("reset_org_custodians", "post", "/orgs/{org_id}/custodians", init);
  }

  /** Revert Org Cluster */
  async revert_org_cluster(init?: OperationInit<"revert_org_cluster">): Promise<OperationData<"revert_org_cluster">> {
    return this.client.requestOperation("revert_org_cluster", "put", "/orgs/{org_id}/cluster/revert", init);
  }

  /** Set Rate Limits */
  async set_rate_limits(init?: OperationInit<"set_rate_limits">): Promise<OperationData<"set_rate_limits">> {
    return this.client.requestOperation("set_rate_limits", "put", "/orgs/{org_id}/rate_limits", init);
  }

  /** Show Catalog Config Data Set */
  async show_data_sets_catalog_config(init?: OperationInit<"show_data_sets_catalog_config">): Promise<OperationData<"show_data_sets_catalog_config">> {
    return this.client.requestOperation("show_data_sets_catalog_config", "get", "/orgs/data_sets_catalog_configs/{data_set_id}", init);
  }

  /** Throttle Organization */
  async throttle_org(init?: OperationInit<"throttle_org">): Promise<OperationData<"throttle_org">> {
    return this.client.requestOperation("throttle_org", "put", "/orgs/{org_id}/throttle", init);
  }

  /** Update Allowed Clusters */
  async update_allowed_clusters(init?: OperationInit<"update_allowed_clusters">): Promise<OperationData<"update_allowed_clusters">> {
    return this.client.requestOperation("update_allowed_clusters", "put", "/orgs/{org_id}/allowed_clusters", init);
  }

  /** Update an Organization */
  async update_org(init?: OperationInit<"update_org">): Promise<OperationData<"update_org">> {
    return this.client.requestOperation("update_org", "put", "/orgs/{org_id}", init);
  }

  /** Update Org Cluster */
  async update_org_cluster(init?: OperationInit<"update_org_cluster">): Promise<OperationData<"update_org_cluster">> {
    return this.client.requestOperation("update_org_cluster", "put", "/orgs/{org_id}/cluster", init);
  }

  /** Update Organization Members */
  async update_org_members(init?: OperationInit<"update_org_members">): Promise<OperationData<"update_org_members">> {
    return this.client.requestOperation("update_org_members", "put", "/orgs/{org_id}/members", init);
  }

  /** Update Org Quarantine Setting */
  async update_org_quarantine_setting(init?: OperationInit<"update_org_quarantine_setting">): Promise<OperationData<"update_org_quarantine_setting">> {
    return this.client.requestOperation("update_org_quarantine_setting", "put", "/orgs/{org_id}/quarantine_settings", init);
  }

  /** Get Audit Log for an Organization */
  async get_audit_log(init?: OperationInit<"get_org_audit_log">): Promise<OperationData<"get_org_audit_log">> {
    return this.client.requestOperation("get_org_audit_log", "get", "/orgs/{org_id}/audit_log", init);
  }

  /**
   * Update organization custodians.
   *
   * @deprecated Use add_org_custodians (PUT) to add, or reset_org_custodians (POST) to replace all custodians.
   */
  async update_org_custodians(init?: OperationInit<"add_org_custodians">): Promise<OperationData<"add_org_custodians">> {
    return this.client.requestOperation("add_org_custodians", "put", "/orgs/{org_id}/custodians", init);
  }
}