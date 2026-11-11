import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class NotificationChannelSettingsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Update */
  async notification_channel_settings_update(init?: OperationInit<"notification_channel_settings_update">): Promise<OperationData<"notification_channel_settings_update">> {
    return this.client.requestOperation("notification_channel_settings_update", "patch", "/notification_channel_settings/{id}", init);
  }
}