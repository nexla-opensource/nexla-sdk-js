import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ApiKeysResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"api_keys_list_api_keys">): Promise<OperationData<"api_keys_list_api_keys">> {
    return this.client.requestOperation("api_keys_list_api_keys", "get", "/api_keys", init);
  }

  async get(init?: OperationInit<"get_api_key">): Promise<OperationData<"get_api_key">> {
    return this.client.requestOperation("get_api_key", "get", "/api_keys/{key_id}", init);
  }

  /** List Api Keys */
  async api_keys_list_api_keys(init?: OperationInit<"api_keys_list_api_keys">): Promise<OperationData<"api_keys_list_api_keys">> {
    return this.client.requestOperation("api_keys_list_api_keys", "get", "/api_keys", init);
  }

  /** Get Api Key */
  async get_api_key(init?: OperationInit<"get_api_key">): Promise<OperationData<"get_api_key">> {
    return this.client.requestOperation("get_api_key", "get", "/api_keys/{key_id}", init);
  }

  /** Search Api Keys */
  async search_api_keys(init?: OperationInit<"search_api_keys">): Promise<OperationData<"search_api_keys">> {
    return this.client.requestOperation("search_api_keys", "post", "/api_keys/search", init);
  }
}