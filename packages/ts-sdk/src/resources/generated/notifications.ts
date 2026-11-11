import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class NotificationsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_notifications">): Promise<OperationData<"get_notifications">> {
    return this.client.requestOperation("get_notifications", "get", "/notifications", init);
  }

  async get(init?: OperationInit<"get_notification">): Promise<OperationData<"get_notification">> {
    return this.client.requestOperation("get_notification", "get", "/notifications/{notification_id}", init);
  }

  async update(init?: OperationInit<"notifications_update_notification_put">): Promise<OperationData<"notifications_update_notification_put">> {
    return this.client.requestOperation("notifications_update_notification_put", "put", "/notifications/{notification_id}", init);
  }

  async delete(init?: OperationInit<"delete_notifications">): Promise<OperationData<"delete_notifications">> {
    return this.client.requestOperation("delete_notifications", "delete", "/notifications/{notification_id}", init);
  }

  /** Create a Notification Channel Setting */
  async create_notification_channel_setting(init?: OperationInit<"create_notification_channel_setting">): Promise<OperationData<"create_notification_channel_setting">> {
    return this.client.requestOperation("create_notification_channel_setting", "post", "/notification_channel_settings", init);
  }

  /** Create a Notification Setting */
  async create_notification_setting(init?: OperationInit<"create_notification_setting">): Promise<OperationData<"create_notification_setting">> {
    return this.client.requestOperation("create_notification_setting", "post", "/notification_settings", init);
  }

  /**
   * Delete All Notifications
   *
   * @deprecated No backend route exists for this path. DELETE /notifications deletes by IDs in the body and is not a delete-all.
   */
  async delete_all_notifications(init?: OperationInit<"delete_all_notifications">): Promise<OperationData<"delete_all_notifications">> {
    return this.client.requestOperation("delete_all_notifications", "delete", "/notifications/all", init);
  }

  /** Delete a Notification Channel Setting */
  async delete_notification_channel_setting(init?: OperationInit<"delete_notification_channel_setting">): Promise<OperationData<"delete_notification_channel_setting">> {
    return this.client.requestOperation("delete_notification_channel_setting", "delete", "/notification_channel_settings/{notification_channel_setting_id}", init);
  }

  /** Delete a Notification Setting */
  async delete_notification_setting(init?: OperationInit<"delete_notification_setting">): Promise<OperationData<"delete_notification_setting">> {
    return this.client.requestOperation("delete_notification_setting", "delete", "/notification_settings/{notification_setting_id}", init);
  }

  /** Delete a Notification */
  async delete_notifications(init?: OperationInit<"delete_notifications">): Promise<OperationData<"delete_notifications">> {
    return this.client.requestOperation("delete_notifications", "delete", "/notifications/{notification_id}", init);
  }

  /** Delete Notifications Collection */
  async delete_notifications_collection(init?: OperationInit<"delete_notifications_collection">): Promise<OperationData<"delete_notifications_collection">> {
    return this.client.requestOperation("delete_notifications_collection", "delete", "/notifications", init);
  }

  /** Get a Notification */
  async get_notification(init?: OperationInit<"get_notification">): Promise<OperationData<"get_notification">> {
    return this.client.requestOperation("get_notification", "get", "/notifications/{notification_id}", init);
  }

  /** Get a Notification Channel Setting */
  async get_notification_channel_setting(init?: OperationInit<"get_notification_channel_setting">): Promise<OperationData<"get_notification_channel_setting">> {
    return this.client.requestOperation("get_notification_channel_setting", "get", "/notification_channel_settings/{notification_channel_setting_id}", init);
  }

  /** Get Notifications Count */
  async get_notification_count(init?: OperationInit<"get_notification_count">): Promise<OperationData<"get_notification_count">> {
    return this.client.requestOperation("get_notification_count", "get", "/notifications/count", init);
  }

  /** Get Notification Schema */
  async get_notification_schema(init?: OperationInit<"get_notification_schema">): Promise<OperationData<"get_notification_schema">> {
    return this.client.requestOperation("get_notification_schema", "get", "/notifications/schema", init);
  }

  /** Get a Notification Setting */
  async get_notification_setting(init?: OperationInit<"get_notification_setting">): Promise<OperationData<"get_notification_setting">> {
    return this.client.requestOperation("get_notification_setting", "get", "/notification_settings/{notification_setting_id}", init);
  }

  /** Get Notification Summary */
  async get_notification_summary(init?: OperationInit<"get_notification_summary">): Promise<OperationData<"get_notification_summary">> {
    return this.client.requestOperation("get_notification_summary", "get", "/notifications/summary", init);
  }

  /** Get All Notification Types */
  async get_notification_types(init?: OperationInit<"get_notification_types">): Promise<OperationData<"get_notification_types">> {
    return this.client.requestOperation("get_notification_types", "get", "/notification_types", init);
  }

  /** Get All Notifications */
  async get_notifications(init?: OperationInit<"get_notifications">): Promise<OperationData<"get_notifications">> {
    return this.client.requestOperation("get_notifications", "get", "/notifications", init);
  }

  /** Get Unread Count */
  async get_unread_count(init?: OperationInit<"get_unread_count">): Promise<OperationData<"get_unread_count">> {
    return this.client.requestOperation("get_unread_count", "get", "/notifications/unread-count", init);
  }

  /** List Notification Channel Settings */
  async list_notification_channel_settings(init?: OperationInit<"list_notification_channel_settings">): Promise<OperationData<"list_notification_channel_settings">> {
    return this.client.requestOperation("list_notification_channel_settings", "get", "/notification_channel_settings", init);
  }

  /** List Notification Settings */
  async list_notification_settings(init?: OperationInit<"list_notification_settings">): Promise<OperationData<"list_notification_settings">> {
    return this.client.requestOperation("list_notification_settings", "get", "/notification_settings", init);
  }

  /** Get Notification Settings for an Event */
  async list_notification_settings_by_type(init?: OperationInit<"list_notification_settings_by_type">): Promise<OperationData<"list_notification_settings_by_type">> {
    return this.client.requestOperation("list_notification_settings_by_type", "get", "/notification_settings/notification_types/{notification_type_id}", init);
  }

  /** Get One Notification Type */
  async list_notification_type(init?: OperationInit<"list_notification_type">): Promise<OperationData<"list_notification_type">> {
    return this.client.requestOperation("list_notification_type", "get", "/notification_types/list", init);
  }

  /** Get Notification Settings For a Resource */
  async list_resource_notification_settings(init?: OperationInit<"list_resource_notification_settings">): Promise<OperationData<"list_resource_notification_settings">> {
    return this.client.requestOperation("list_resource_notification_settings", "get", "/notification_settings/{resource_type}/{resource_id}", init);
  }

  /** Mark All As Read */
  async mark_all_as_read(init?: OperationInit<"mark_all_as_read">): Promise<OperationData<"mark_all_as_read">> {
    return this.client.requestOperation("mark_all_as_read", "put", "/notifications/read-all", init);
  }

  /** Mark Single Notification Read */
  async mark_single_notification_read(init?: OperationInit<"mark_single_notification_read">): Promise<OperationData<"mark_single_notification_read">> {
    return this.client.requestOperation("mark_single_notification_read", "put", "/notifications/{notification_id}/mark_read", init);
  }

  /** Mark Single Notification Unread */
  async mark_single_notification_unread(init?: OperationInit<"mark_single_notification_unread">): Promise<OperationData<"mark_single_notification_unread">> {
    return this.client.requestOperation("mark_single_notification_unread", "put", "/notifications/{notification_id}/mark_unread", init);
  }

  /** Mark Notification Read */
  async notifications_mark_read(init?: OperationInit<"notifications_mark_read">): Promise<OperationData<"notifications_mark_read">> {
    return this.client.requestOperation("notifications_mark_read", "put", "/notifications/mark_read", init);
  }

  /** Mark Notification Unread */
  async notifications_mark_unread(init?: OperationInit<"notifications_mark_unread">): Promise<OperationData<"notifications_mark_unread">> {
    return this.client.requestOperation("notifications_mark_unread", "put", "/notifications/mark_unread", init);
  }

  /** Update Notification */
  async notifications_update_notification(init?: OperationInit<"notifications_update_notification">): Promise<OperationData<"notifications_update_notification">> {
    return this.client.requestOperation("notifications_update_notification", "patch", "/notifications/{notification_id}", init);
  }

  /** Update Notification */
  async notifications_update_notification_put(init?: OperationInit<"notifications_update_notification_put">): Promise<OperationData<"notifications_update_notification_put">> {
    return this.client.requestOperation("notifications_update_notification_put", "put", "/notifications/{notification_id}", init);
  }

  /** Update a Notification Channel Setting */
  async update_notification_channel_setting(init?: OperationInit<"update_notification_channel_setting">): Promise<OperationData<"update_notification_channel_setting">> {
    return this.client.requestOperation("update_notification_channel_setting", "put", "/notification_channel_settings/{notification_channel_setting_id}", init);
  }

  /** Modify a Notification Setting */
  async update_notification_setting(init?: OperationInit<"update_notification_setting">): Promise<OperationData<"update_notification_setting">> {
    return this.client.requestOperation("update_notification_setting", "put", "/notification_settings/{notification_setting_id}", init);
  }
}