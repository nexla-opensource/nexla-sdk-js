import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class NotificationSettingsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Index All */
  async notification_settings_index_all(init?: OperationInit<"notification_settings_index_all">): Promise<OperationData<"notification_settings_index_all">> {
    return this.client.requestOperation("notification_settings_index_all", "get", "/notification_settings/all", init);
  }

  /** Update */
  async notification_settings_update(init?: OperationInit<"notification_settings_update">): Promise<OperationData<"notification_settings_update">> {
    return this.client.requestOperation("notification_settings_update", "patch", "/notification_settings/{id}", init);
  }
}