import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ServiceKeysResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_service_keys">): Promise<OperationData<"list_service_keys">> {
    return this.client.requestOperation("list_service_keys", "get", "/service_keys", init);
  }

  async create(init?: OperationInit<"create_service_key">): Promise<OperationData<"create_service_key">> {
    return this.client.requestOperation("create_service_key", "post", "/service_keys", init);
  }

  async get(init?: OperationInit<"get_service_key">): Promise<OperationData<"get_service_key">> {
    return this.client.requestOperation("get_service_key", "get", "/service_keys/{key_id}", init);
  }

  async update(init?: OperationInit<"service_keys_update_service_key_put">): Promise<OperationData<"service_keys_update_service_key_put">> {
    return this.client.requestOperation("service_keys_update_service_key_put", "put", "/service_keys/{key_id}", init);
  }

  async delete(init?: OperationInit<"delete_service_key">): Promise<OperationData<"delete_service_key">> {
    return this.client.requestOperation("delete_service_key", "delete", "/service_keys/{key_id}", init);
  }

  /** Activate Service Key */
  async activate_service_key(init?: OperationInit<"activate_service_key">): Promise<OperationData<"activate_service_key">> {
    return this.client.requestOperation("activate_service_key", "put", "/service_keys/{key_id}/activate", init);
  }

  /** Create Service Key */
  async create_service_key(init?: OperationInit<"create_service_key">): Promise<OperationData<"create_service_key">> {
    return this.client.requestOperation("create_service_key", "post", "/service_keys", init);
  }

  /** Delete Service Key */
  async delete_service_key(init?: OperationInit<"delete_service_key">): Promise<OperationData<"delete_service_key">> {
    return this.client.requestOperation("delete_service_key", "delete", "/service_keys/{key_id}", init);
  }

  /** Get Service Key */
  async get_service_key(init?: OperationInit<"get_service_key">): Promise<OperationData<"get_service_key">> {
    return this.client.requestOperation("get_service_key", "get", "/service_keys/{key_id}", init);
  }

  /** List Service Keys */
  async list_service_keys(init?: OperationInit<"list_service_keys">): Promise<OperationData<"list_service_keys">> {
    return this.client.requestOperation("list_service_keys", "get", "/service_keys", init);
  }

  /** Pause Service Key */
  async pause_service_key(init?: OperationInit<"pause_service_key">): Promise<OperationData<"pause_service_key">> {
    return this.client.requestOperation("pause_service_key", "put", "/service_keys/{key_id}/pause", init);
  }

  /** Rotate Service Key */
  async rotate_service_key(init?: OperationInit<"rotate_service_key">): Promise<OperationData<"rotate_service_key">> {
    return this.client.requestOperation("rotate_service_key", "put", "/service_keys/{key_id}/rotate", init);
  }

  /** Update Service Key */
  async service_keys_update_service_key(init?: OperationInit<"service_keys_update_service_key">): Promise<OperationData<"service_keys_update_service_key">> {
    return this.client.requestOperation("service_keys_update_service_key", "patch", "/service_keys/{key_id}", init);
  }

  /** Update Service Key */
  async service_keys_update_service_key_put(init?: OperationInit<"service_keys_update_service_key_put">): Promise<OperationData<"service_keys_update_service_key_put">> {
    return this.client.requestOperation("service_keys_update_service_key_put", "put", "/service_keys/{key_id}", init);
  }
}