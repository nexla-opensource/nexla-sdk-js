import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class UsersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_users">): Promise<OperationData<"get_users">> {
    return this.client.requestOperation("get_users", "get", "/users", init);
  }

  async create(init?: OperationInit<"create_user">): Promise<OperationData<"create_user">> {
    return this.client.requestOperation("create_user", "post", "/users", init);
  }

  async get(init?: OperationInit<"get_user">): Promise<OperationData<"get_user">> {
    return this.client.requestOperation("get_user", "get", "/users/{user_id}", init);
  }

  async update(init?: OperationInit<"update_user">): Promise<OperationData<"update_user">> {
    return this.client.requestOperation("update_user", "put", "/users/{user_id}", init);
  }

  async delete(init?: OperationInit<"delete_user">): Promise<OperationData<"delete_user">> {
    return this.client.requestOperation("delete_user", "delete", "/users/{user_id}", init);
  }

  /** Activate User */
  async activate_user(init?: OperationInit<"activate_user">): Promise<OperationData<"activate_user">> {
    return this.client.requestOperation("activate_user", "put", "/users/{user_id}/activate", init);
  }

  /** Activate User API Key */
  async activate_user_api_key(init?: OperationInit<"activate_user_api_key">): Promise<OperationData<"activate_user_api_key">> {
    return this.client.requestOperation("activate_user_api_key", "put", "/users/{user_id}/api_keys/{api_key_id}/activate", init);
  }

  /** Change User Password (admin) */
  async change_user_password(init?: OperationInit<"change_user_password">): Promise<OperationData<"change_user_password">> {
    return this.client.requestOperation("change_user_password", "put", "/users/{user_id}/change_password", init);
  }

  /** Create user credit */
  async create_credit(init?: OperationInit<"create_credit">): Promise<OperationData<"create_credit">> {
    return this.client.requestOperation("create_credit", "post", "/users/{user_id}/credits", init);
  }

  /** Create a User */
  async create_user(init?: OperationInit<"create_user">): Promise<OperationData<"create_user">> {
    return this.client.requestOperation("create_user", "post", "/users", init);
  }

  /** Create User API Key */
  async create_user_api_key(init?: OperationInit<"create_user_api_key">): Promise<OperationData<"create_user_api_key">> {
    return this.client.requestOperation("create_user_api_key", "post", "/users/{user_id}/api_keys", init);
  }

  /** Deactivate User */
  async deactivate_user(init?: OperationInit<"deactivate_user">): Promise<OperationData<"deactivate_user">> {
    return this.client.requestOperation("deactivate_user", "put", "/users/{user_id}/deactivate", init);
  }

  /** Delete user credit */
  async delete_credit(init?: OperationInit<"delete_credit">): Promise<OperationData<"delete_credit">> {
    return this.client.requestOperation("delete_credit", "delete", "/users/{user_id}/credits/{credit_id}", init);
  }

  /** Delete User */
  async delete_user(init?: OperationInit<"delete_user">): Promise<OperationData<"delete_user">> {
    return this.client.requestOperation("delete_user", "delete", "/users/{user_id}", init);
  }

  /** Delete User API Key */
  async delete_user_api_key(init?: OperationInit<"delete_user_api_key">): Promise<OperationData<"delete_user_api_key">> {
    return this.client.requestOperation("delete_user_api_key", "delete", "/users/{user_id}/api_keys/{api_key_id}", init);
  }

  /** Expire user credit */
  async expire_credit(init?: OperationInit<"expire_credit">): Promise<OperationData<"expire_credit">> {
    return this.client.requestOperation("expire_credit", "put", "/users/{user_id}/credits/{credit_id}/expire", init);
  }

  /** Get Account Summary */
  async get_current_user_account_summary(init?: OperationInit<"get_current_user_account_summary">): Promise<OperationData<"get_current_user_account_summary">> {
    return this.client.requestOperation("get_current_user_account_summary", "get", "/users/account_summary", init);
  }

  /** Get SSO Options */
  async get_sso_options(init?: OperationInit<"get_sso_options">): Promise<OperationData<"get_sso_options">> {
    return this.client.requestOperation("get_sso_options", "get", "/users/sso_options", init);
  }

  /** Get Transferable Resources */
  async get_transferable_resources(init?: OperationInit<"get_transferable_resources">): Promise<OperationData<"get_transferable_resources">> {
    return this.client.requestOperation("get_transferable_resources", "get", "/users/{user_id}/transferable", init);
  }

  /** Get User by ID */
  async get_user(init?: OperationInit<"get_user">): Promise<OperationData<"get_user">> {
    return this.client.requestOperation("get_user", "get", "/users/{user_id}", init);
  }

  /** Get User Account Summary */
  async get_user_account_summary(init?: OperationInit<"get_user_account_summary">): Promise<OperationData<"get_user_account_summary">> {
    return this.client.requestOperation("get_user_account_summary", "get", "/users/{user_id}/account_summary", init);
  }

  /** Get User API Key */
  async get_user_api_key(init?: OperationInit<"get_user_api_key">): Promise<OperationData<"get_user_api_key">> {
    return this.client.requestOperation("get_user_api_key", "get", "/users/{user_id}/api_keys/{api_key_id}", init);
  }

  /** Get User API Key Events */
  async get_user_api_key_events(init?: OperationInit<"get_user_api_key_events">): Promise<OperationData<"get_user_api_key_events">> {
    return this.client.requestOperation("get_user_api_key_events", "get", "/users/{user_id}/api_keys/events", init);
  }

  /** Get User Audit History */
  async get_user_audit_history(init?: OperationInit<"get_user_audit_history">): Promise<OperationData<"get_user_audit_history">> {
    return this.client.requestOperation("get_user_audit_history", "get", "/users/{user_id}/audit_history", init);
  }

  /** Get User by ID with Expanded References */
  async get_user_expand(init?: OperationInit<"get_user_expand">): Promise<OperationData<"get_user_expand">> {
    return this.client.requestOperation("get_user_expand", "get", "/users/{user_id}?expand=1", init);
  }

  /** Get User Flows Status Metrics */
  async get_user_flows_status_metrics(init?: OperationInit<"get_user_flows_status_metrics">): Promise<OperationData<"get_user_flows_status_metrics">> {
    return this.client.requestOperation("get_user_flows_status_metrics", "get", "/users/{user_id}/flows/status_metrics", init);
  }

  /** Get User Login History */
  async get_user_login_history(init?: OperationInit<"get_user_login_history">): Promise<OperationData<"get_user_login_history">> {
    return this.client.requestOperation("get_user_login_history", "get", "/users/{user_id}/login_history", init);
  }

  /** Get All User Metrics */
  async get_user_metrics_all(init?: OperationInit<"get_user_metrics_all">): Promise<OperationData<"get_user_metrics_all">> {
    return this.client.requestOperation("get_user_metrics_all", "get", "/users/{user_id}/metrics/all", init);
  }

  /** Get User Metrics By Name */
  async get_user_metrics_by_name(init?: OperationInit<"get_user_metrics_by_name">): Promise<OperationData<"get_user_metrics_by_name">> {
    return this.client.requestOperation("get_user_metrics_by_name", "get", "/users/{user_id}/metrics/{metrics_name}", init);
  }

  /** Get User Lineage Metrics */
  async get_user_metrics_lineage(init?: OperationInit<"get_user_metrics_lineage">): Promise<OperationData<"get_user_metrics_lineage">> {
    return this.client.requestOperation("get_user_metrics_lineage", "get", "/users/{user_id}/metrics/lineage", init);
  }

  /** Get User Organizations */
  async get_user_organizations(init?: OperationInit<"get_user_organizations">): Promise<OperationData<"get_user_organizations">> {
    return this.client.requestOperation("get_user_organizations", "get", "/users/{user_id}/orgs", init);
  }

  /** Get User Tags */
  async get_user_tags(init?: OperationInit<"get_user_tags">): Promise<OperationData<"get_user_tags">> {
    return this.client.requestOperation("get_user_tags", "get", "/users/{user_id}/tags", init);
  }

  /** Get All Users */
  async get_users(init?: OperationInit<"get_users">): Promise<OperationData<"get_users">> {
    return this.client.requestOperation("get_users", "get", "/users", init);
  }

  /** Get All Users with Expanded References */
  async get_users_expand(init?: OperationInit<"get_users_expand">): Promise<OperationData<"get_users_expand">> {
    return this.client.requestOperation("get_users_expand", "get", "/users?expand=1", init);
  }

  /** List User API Keys */
  async list_user_api_keys(init?: OperationInit<"list_user_api_keys">): Promise<OperationData<"list_user_api_keys">> {
    return this.client.requestOperation("list_user_api_keys", "get", "/users/{user_id}/api_keys", init);
  }

  /** Pause All User API Keys */
  async pause_all_user_api_keys(init?: OperationInit<"pause_all_user_api_keys">): Promise<OperationData<"pause_all_user_api_keys">> {
    return this.client.requestOperation("pause_all_user_api_keys", "put", "/users/{user_id}/api_keys/pause", init);
  }

  /** Pause User API Key */
  async pause_user_api_key(init?: OperationInit<"pause_user_api_key">): Promise<OperationData<"pause_user_api_key">> {
    return this.client.requestOperation("pause_user_api_key", "put", "/users/{user_id}/api_keys/{api_key_id}/pause", init);
  }

  /** Refresh user credits */
  async refresh_user_credits(init?: OperationInit<"refresh_user_credits">): Promise<OperationData<"refresh_user_credits">> {
    return this.client.requestOperation("refresh_user_credits", "put", "/users/{user_id}/credits/refresh", init);
  }

  /** Rotate User API Key */
  async rotate_user_api_key(init?: OperationInit<"rotate_user_api_key">): Promise<OperationData<"rotate_user_api_key">> {
    return this.client.requestOperation("rotate_user_api_key", "put", "/users/{user_id}/api_keys/{api_key_id}/rotate", init);
  }

  /** Search User API Keys */
  async search_user_api_keys(init?: OperationInit<"search_user_api_keys">): Promise<OperationData<"search_user_api_keys">> {
    return this.client.requestOperation("search_user_api_keys", "post", "/users/{user_id}/api_keys/search", init);
  }

  /** Send User Invitation */
  async send_user_invitation(init?: OperationInit<"send_user_invitation">): Promise<OperationData<"send_user_invitation">> {
    return this.client.requestOperation("send_user_invitation", "post", "/users/send_invite", init);
  }

  /** Set Rate Limits */
  async set_user_rate_limits(init?: OperationInit<"set_user_rate_limits">): Promise<OperationData<"set_user_rate_limits">> {
    return this.client.requestOperation("set_user_rate_limits", "put", "/users/{user_id}/rate_limits", init);
  }

  /** Show user credit */
  async show_credit(init?: OperationInit<"show_credit">): Promise<OperationData<"show_credit">> {
    return this.client.requestOperation("show_credit", "get", "/users/{user_id}/credits/{credit_id}", init);
  }

  /** Throttle User */
  async throttle_user(init?: OperationInit<"throttle_user">): Promise<OperationData<"throttle_user">> {
    return this.client.requestOperation("throttle_user", "put", "/users/{user_id}/throttle", init);
  }

  /** Modify a User */
  async update_user(init?: OperationInit<"update_user">): Promise<OperationData<"update_user">> {
    return this.client.requestOperation("update_user", "put", "/users/{user_id}", init);
  }

  /** Update User API Key */
  async update_user_api_key(init?: OperationInit<"update_user_api_key">): Promise<OperationData<"update_user_api_key">> {
    return this.client.requestOperation("update_user_api_key", "put", "/users/{user_id}/api_keys/{api_key_id}", init);
  }

  /** Use user credits */
  async use_user_credits(init?: OperationInit<"use_user_credits">): Promise<OperationData<"use_user_credits">> {
    return this.client.requestOperation("use_user_credits", "put", "/users/{user_id}/credits/use", init);
  }

  /** Activate Rate Limited Sources */
  async users_activate_rate_limited_sources(init?: OperationInit<"users_activate_rate_limited_sources">): Promise<OperationData<"users_activate_rate_limited_sources">> {
    return this.client.requestOperation("users_activate_rate_limited_sources", "put", "/users/{user_id}/source_activate", init);
  }

  /** Activate Rate Limited Sources */
  async users_activate_rate_limited_sources_put(init?: OperationInit<"users_activate_rate_limited_sources_put">): Promise<OperationData<"users_activate_rate_limited_sources_put">> {
    return this.client.requestOperation("users_activate_rate_limited_sources_put", "put", "/users/{user_id}/source_activate/{status_param}", init);
  }

  /** Create Dashboard Transform */
  async users_create_dashboard_transform(init?: OperationInit<"users_create_dashboard_transform">): Promise<OperationData<"users_create_dashboard_transform">> {
    return this.client.requestOperation("users_create_dashboard_transform", "post", "/users/{user_id}/dashboard_transforms", init);
  }

  /** Delete Dashboard Transform */
  async users_delete_dashboard_transform(init?: OperationInit<"users_delete_dashboard_transform">): Promise<OperationData<"users_delete_dashboard_transform">> {
    return this.client.requestOperation("users_delete_dashboard_transform", "delete", "/users/{user_id}/dashboard_transforms", init);
  }

  /** Get Account Rate Limited Status */
  async users_get_account_rate_limited(init?: OperationInit<"users_get_account_rate_limited">): Promise<OperationData<"users_get_account_rate_limited">> {
    return this.client.requestOperation("users_get_account_rate_limited", "get", "/users/{user_id}/account_rate_limited", init);
  }

  /** Get User Audit Log */
  async users_get_user_audit_log_get(init?: OperationInit<"users_get_user_audit_log_get">): Promise<OperationData<"users_get_user_audit_log_get">> {
    return this.client.requestOperation("users_get_user_audit_log_get", "get", "/users/{user_id}/{resource_type}/audit_log", init);
  }

  /** Pause Rate Limited Sources */
  async users_pause_rate_limited_sources(init?: OperationInit<"users_pause_rate_limited_sources">): Promise<OperationData<"users_pause_rate_limited_sources">> {
    return this.client.requestOperation("users_pause_rate_limited_sources", "put", "/users/{user_id}/source_pause", init);
  }

  /** Pause Rate Limited Sources */
  async users_pause_rate_limited_sources_put(init?: OperationInit<"users_pause_rate_limited_sources_put">): Promise<OperationData<"users_pause_rate_limited_sources_put">> {
    return this.client.requestOperation("users_pause_rate_limited_sources_put", "put", "/users/{user_id}/source_pause/{status_param}", init);
  }

  /** Reset Password */
  async users_reset_password(init?: OperationInit<"users_reset_password">): Promise<OperationData<"users_reset_password">> {
    return this.client.requestOperation("users_reset_password", "put", "/users/reset_password", init);
  }

  /** Reset Password */
  async users_reset_password_post(init?: OperationInit<"users_reset_password_post">): Promise<OperationData<"users_reset_password_post">> {
    return this.client.requestOperation("users_reset_password_post", "post", "/users/reset_password", init);
  }

  /** Set Password */
  async users_set_password(init?: OperationInit<"users_set_password">): Promise<OperationData<"users_set_password">> {
    return this.client.requestOperation("users_set_password", "put", "/users/set_password", init);
  }

  /** Set Password */
  async users_set_password_post(init?: OperationInit<"users_set_password_post">): Promise<OperationData<"users_set_password_post">> {
    return this.client.requestOperation("users_set_password_post", "post", "/users/set_password", init);
  }

  /** Show Dashboard Transform */
  async users_show_dashboard_transform(init?: OperationInit<"users_show_dashboard_transform">): Promise<OperationData<"users_show_dashboard_transform">> {
    return this.client.requestOperation("users_show_dashboard_transform", "get", "/users/{user_id}/dashboard_transforms", init);
  }

  /** Update Dashboard Transform */
  async users_update_dashboard_transform(init?: OperationInit<"users_update_dashboard_transform">): Promise<OperationData<"users_update_dashboard_transform">> {
    return this.client.requestOperation("users_update_dashboard_transform", "put", "/users/{user_id}/dashboard_transforms", init);
  }

  /** Update User */
  async users_update_user(init?: OperationInit<"users_update_user">): Promise<OperationData<"users_update_user">> {
    return this.client.requestOperation("users_update_user", "patch", "/users/{user_id}", init);
  }

  /** Get Audit Log for a User */
  async get_audit_log(init?: OperationInit<"get_user_audit_log">): Promise<OperationData<"get_user_audit_log">> {
    return this.client.requestOperation("get_user_audit_log", "get", "/users/{user_id}/audit_log", init);
  }
}