import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class FlowTriggersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"flow_triggers_index">): Promise<OperationData<"flow_triggers_index">> {
    return this.client.requestOperation("flow_triggers_index", "get", "/flow_triggers", init);
  }

  async create(init?: OperationInit<"flow_triggers_create">): Promise<OperationData<"flow_triggers_create">> {
    return this.client.requestOperation("flow_triggers_create", "post", "/flow_triggers", init);
  }

  async get(init?: OperationInit<"flow_triggers_show">): Promise<OperationData<"flow_triggers_show">> {
    return this.client.requestOperation("flow_triggers_show", "get", "/flow_triggers/{trigger_id}", init);
  }

  async update(init?: OperationInit<"flow_triggers_update_put">): Promise<OperationData<"flow_triggers_update_put">> {
    return this.client.requestOperation("flow_triggers_update_put", "put", "/flow_triggers/{trigger_id}", init);
  }

  async delete(init?: OperationInit<"flow_triggers_destroy">): Promise<OperationData<"flow_triggers_destroy">> {
    return this.client.requestOperation("flow_triggers_destroy", "delete", "/flow_triggers/{trigger_id}", init);
  }

  /** Activate */
  async activate(init?: OperationInit<"activate">): Promise<OperationData<"activate">> {
    return this.client.requestOperation("activate", "put", "/flow_triggers/{trigger_id}/activate", init);
  }

  /** All Triggers */
  async all_triggers(init?: OperationInit<"all_triggers">): Promise<OperationData<"all_triggers">> {
    return this.client.requestOperation("all_triggers", "get", "/flow_triggers/all", init);
  }

  /** Create */
  async flow_triggers_create(init?: OperationInit<"flow_triggers_create">): Promise<OperationData<"flow_triggers_create">> {
    return this.client.requestOperation("flow_triggers_create", "post", "/flow_triggers", init);
  }

  /** Destroy */
  async flow_triggers_destroy(init?: OperationInit<"flow_triggers_destroy">): Promise<OperationData<"flow_triggers_destroy">> {
    return this.client.requestOperation("flow_triggers_destroy", "delete", "/flow_triggers/{trigger_id}", init);
  }

  /** Index */
  async flow_triggers_index(init?: OperationInit<"flow_triggers_index">): Promise<OperationData<"flow_triggers_index">> {
    return this.client.requestOperation("flow_triggers_index", "get", "/flow_triggers", init);
  }

  /** Show */
  async flow_triggers_show(init?: OperationInit<"flow_triggers_show">): Promise<OperationData<"flow_triggers_show">> {
    return this.client.requestOperation("flow_triggers_show", "get", "/flow_triggers/{trigger_id}", init);
  }

  /** Update */
  async flow_triggers_update(init?: OperationInit<"flow_triggers_update">): Promise<OperationData<"flow_triggers_update">> {
    return this.client.requestOperation("flow_triggers_update", "patch", "/flow_triggers/{trigger_id}", init);
  }

  /** Update */
  async flow_triggers_update_put(init?: OperationInit<"flow_triggers_update_put">): Promise<OperationData<"flow_triggers_update_put">> {
    return this.client.requestOperation("flow_triggers_update_put", "put", "/flow_triggers/{trigger_id}", init);
  }

  /** Pause */
  async pause(init?: OperationInit<"pause">): Promise<OperationData<"pause">> {
    return this.client.requestOperation("pause", "put", "/flow_triggers/{trigger_id}/pause", init);
  }
}