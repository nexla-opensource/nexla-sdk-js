import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class NotificationSettingsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Notification Setting List */
  async notification_setting_notification_setting_list(init?: OperationInit<"notification_setting_notification_setting_list">): Promise<OperationData<"notification_setting_notification_setting_list">> {
    return this.client.requestOperation("notification_setting_notification_setting_list", "put", "/notification_setting/list", init);
  }

  /** Notification Setting List */
  async notification_setting_notification_setting_list_post(init?: OperationInit<"notification_setting_notification_setting_list_post">): Promise<OperationData<"notification_setting_notification_setting_list_post">> {
    return this.client.requestOperation("notification_setting_notification_setting_list_post", "post", "/notification_setting/list", init);
  }

  /** Index All */
  async notification_settings_index_all(init?: OperationInit<"notification_settings_index_all">): Promise<OperationData<"notification_settings_index_all">> {
    return this.client.requestOperation("notification_settings_index_all", "get", "/notification_settings/all", init);
  }

  /** Show Control Event */
  async notification_settings_show_control_event(init?: OperationInit<"notification_settings_show_control_event">): Promise<OperationData<"notification_settings_show_control_event">> {
    return this.client.requestOperation("notification_settings_show_control_event", "get", "/notification_settings/{resource_id}/control/{event}", init);
  }

  /** Update */
  async notification_settings_update(init?: OperationInit<"notification_settings_update">): Promise<OperationData<"notification_settings_update">> {
    return this.client.requestOperation("notification_settings_update", "patch", "/notification_settings/{id}", init);
  }
}