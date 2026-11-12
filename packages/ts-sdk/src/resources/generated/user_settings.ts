import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class UserSettingsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_user_settings">): Promise<OperationData<"get_user_settings">> {
    return this.client.requestOperation("get_user_settings", "get", "/user_settings", init);
  }

  async create(init?: OperationInit<"create_user_setting">): Promise<OperationData<"create_user_setting">> {
    return this.client.requestOperation("create_user_setting", "post", "/user_settings", init);
  }

  async get(init?: OperationInit<"get_user_setting">): Promise<OperationData<"get_user_setting">> {
    return this.client.requestOperation("get_user_setting", "get", "/user_settings/{setting_id}", init);
  }

  async update(init?: OperationInit<"user_settings_update_user_setting_put">): Promise<OperationData<"user_settings_update_user_setting_put">> {
    return this.client.requestOperation("user_settings_update_user_setting_put", "put", "/user_settings/{setting_id}", init);
  }

  async delete(init?: OperationInit<"delete_user_setting">): Promise<OperationData<"delete_user_setting">> {
    return this.client.requestOperation("delete_user_setting", "delete", "/user_settings/{setting_id}", init);
  }

  /** Create User Setting */
  async create_user_setting(init?: OperationInit<"create_user_setting">): Promise<OperationData<"create_user_setting">> {
    return this.client.requestOperation("create_user_setting", "post", "/user_settings", init);
  }

  /** Delete User Setting */
  async delete_user_setting(init?: OperationInit<"delete_user_setting">): Promise<OperationData<"delete_user_setting">> {
    return this.client.requestOperation("delete_user_setting", "delete", "/user_settings/{setting_id}", init);
  }

  /** Get User Setting */
  async get_user_setting(init?: OperationInit<"get_user_setting">): Promise<OperationData<"get_user_setting">> {
    return this.client.requestOperation("get_user_setting", "get", "/user_settings/{setting_id}", init);
  }

  /** Get the current user's settings */
  async get_user_settings(init?: OperationInit<"get_user_settings">): Promise<OperationData<"get_user_settings">> {
    return this.client.requestOperation("get_user_settings", "get", "/user_settings", init);
  }

  /** Search User Settings */
  async user_settings_search_user_settings(init?: OperationInit<"user_settings_search_user_settings">): Promise<OperationData<"user_settings_search_user_settings">> {
    return this.client.requestOperation("user_settings_search_user_settings", "post", "/user_settings/search", init);
  }

  /** Search User Settings */
  async user_settings_search_user_settings_put(init?: OperationInit<"user_settings_search_user_settings_put">): Promise<OperationData<"user_settings_search_user_settings_put">> {
    return this.client.requestOperation("user_settings_search_user_settings_put", "put", "/user_settings/search", init);
  }

  /** Update User Setting */
  async user_settings_update_user_setting(init?: OperationInit<"user_settings_update_user_setting">): Promise<OperationData<"user_settings_update_user_setting">> {
    return this.client.requestOperation("user_settings_update_user_setting", "patch", "/user_settings/{setting_id}", init);
  }

  /** Update User Setting */
  async user_settings_update_user_setting_put(init?: OperationInit<"user_settings_update_user_setting_put">): Promise<OperationData<"user_settings_update_user_setting_put">> {
    return this.client.requestOperation("user_settings_update_user_setting_put", "put", "/user_settings/{setting_id}", init);
  }
}