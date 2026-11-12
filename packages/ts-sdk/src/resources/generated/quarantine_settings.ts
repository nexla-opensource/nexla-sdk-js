import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class QuarantineSettingsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"quarantine_settings_index">): Promise<OperationData<"quarantine_settings_index">> {
    return this.client.requestOperation("quarantine_settings_index", "get", "/quarantine_settings", init);
  }

  async get(init?: OperationInit<"quarantine_settings_show">): Promise<OperationData<"quarantine_settings_show">> {
    return this.client.requestOperation("quarantine_settings_show", "get", "/quarantine_settings/{quarantine_setting_id}", init);
  }

  /** Set Quarantine Data Export Settings for A User */
  async create_quarantine_data_export_settings(init?: OperationInit<"create_quarantine_data_export_settings">): Promise<OperationData<"create_quarantine_data_export_settings">> {
    return this.client.requestOperation("create_quarantine_data_export_settings", "post", "/users/{user_id}/quarantine_settings", init);
  }

  /** Delete Quarantine Data Export Settings for A User */
  async delete_user_quarantine_data_export_settings(init?: OperationInit<"delete_user_quarantine_data_export_settings">): Promise<OperationData<"delete_user_quarantine_data_export_settings">> {
    return this.client.requestOperation("delete_user_quarantine_data_export_settings", "delete", "/users/{user_id}/quarantine_settings", init);
  }

  /** Get Quarantine Data Export Settings for A User */
  async get_user_quarantine_data_export_settings(init?: OperationInit<"get_user_quarantine_data_export_settings">): Promise<OperationData<"get_user_quarantine_data_export_settings">> {
    return this.client.requestOperation("get_user_quarantine_data_export_settings", "get", "/users/{user_id}/quarantine_settings", init);
  }

  /** Index */
  async quarantine_settings_index(init?: OperationInit<"quarantine_settings_index">): Promise<OperationData<"quarantine_settings_index">> {
    return this.client.requestOperation("quarantine_settings_index", "get", "/quarantine_settings", init);
  }

  /** Show */
  async quarantine_settings_show(init?: OperationInit<"quarantine_settings_show">): Promise<OperationData<"quarantine_settings_show">> {
    return this.client.requestOperation("quarantine_settings_show", "get", "/quarantine_settings/{quarantine_setting_id}", init);
  }

  /** Update Quarantine Data Export Settings for A User */
  async update_user_quarantine_data_export_settings(init?: OperationInit<"update_user_quarantine_data_export_settings">): Promise<OperationData<"update_user_quarantine_data_export_settings">> {
    return this.client.requestOperation("update_user_quarantine_data_export_settings", "put", "/users/{user_id}/quarantine_settings", init);
  }
}