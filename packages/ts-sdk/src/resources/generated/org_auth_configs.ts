import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class OrgAuthConfigsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_api_auth_configs">): Promise<OperationData<"get_api_auth_configs">> {
    return this.client.requestOperation("get_api_auth_configs", "get", "/api_auth_configs", init);
  }

  async create(init?: OperationInit<"create_api_auth_config">): Promise<OperationData<"create_api_auth_config">> {
    return this.client.requestOperation("create_api_auth_config", "post", "/api_auth_configs", init);
  }

  async get(init?: OperationInit<"get_api_auth_config">): Promise<OperationData<"get_api_auth_config">> {
    return this.client.requestOperation("get_api_auth_config", "get", "/api_auth_configs/{auth_config_id}", init);
  }

  async update(init?: OperationInit<"update_api_auth_config">): Promise<OperationData<"update_api_auth_config">> {
    return this.client.requestOperation("update_api_auth_config", "put", "/api_auth_configs/{auth_config_id}", init);
  }

  async delete(init?: OperationInit<"delete_api_auth_config">): Promise<OperationData<"delete_api_auth_config">> {
    return this.client.requestOperation("delete_api_auth_config", "delete", "/api_auth_configs/{auth_config_id}", init);
  }

  /** Update Api Auth Config */
  async api_auth_configs_update_api_auth_config(init?: OperationInit<"api_auth_configs_update_api_auth_config">): Promise<OperationData<"api_auth_configs_update_api_auth_config">> {
    return this.client.requestOperation("api_auth_configs_update_api_auth_config", "patch", "/api_auth_configs/{id_or_uid}", init);
  }

  /** Create auth config. */
  async create_api_auth_config(init?: OperationInit<"create_api_auth_config">): Promise<OperationData<"create_api_auth_config">> {
    return this.client.requestOperation("create_api_auth_config", "post", "/api_auth_configs", init);
  }

  /** Delete auth config. */
  async delete_api_auth_config(init?: OperationInit<"delete_api_auth_config">): Promise<OperationData<"delete_api_auth_config">> {
    return this.client.requestOperation("delete_api_auth_config", "delete", "/api_auth_configs/{auth_config_id}", init);
  }

  /**
   * Get all auth configs.
   *
   * @deprecated No backend route exists for this path. Use get_api_auth_configs, which lists the caller's org configs.
   */
  async get_all_api_auth_configs(init?: OperationInit<"get_all_api_auth_configs">): Promise<OperationData<"get_all_api_auth_configs">> {
    return this.client.requestOperation("get_all_api_auth_configs", "get", "/api_auth_configs/all", init);
  }

  /** Get auth configs. */
  async get_api_auth_config(init?: OperationInit<"get_api_auth_config">): Promise<OperationData<"get_api_auth_config">> {
    return this.client.requestOperation("get_api_auth_config", "get", "/api_auth_configs/{auth_config_id}", init);
  }

  /** Get auth configs. */
  async get_api_auth_configs(init?: OperationInit<"get_api_auth_configs">): Promise<OperationData<"get_api_auth_configs">> {
    return this.client.requestOperation("get_api_auth_configs", "get", "/api_auth_configs", init);
  }

  /**
   * Get auth settings for org.
   *
   * @deprecated No backend route exists for this path. Calls fail.
   */
  async get_api_auth_settings(init?: OperationInit<"get_api_auth_settings">): Promise<OperationData<"get_api_auth_settings">> {
    return this.client.requestOperation("get_api_auth_settings", "get", "/orgs/{org_id}/auth_settings", init);
  }

  /** Index Client Config */
  async index_client_config(init?: OperationInit<"index_client_config">): Promise<OperationData<"index_client_config">> {
    return this.client.requestOperation("index_client_config", "get", "/api_auth_configs/client_config", init);
  }

  /** Update auth config. */
  async update_api_auth_config(init?: OperationInit<"update_api_auth_config">): Promise<OperationData<"update_api_auth_config">> {
    return this.client.requestOperation("update_api_auth_config", "put", "/api_auth_configs/{auth_config_id}", init);
  }

  /** Update auth config (enable/disable). */
  async update_org_auth_setting(init?: OperationInit<"update_org_auth_setting">): Promise<OperationData<"update_org_auth_setting">> {
    return this.client.requestOperation("update_org_auth_setting", "put", "/orgs/{org_id}/auth_settings/{auth_setting_id}", init);
  }
}