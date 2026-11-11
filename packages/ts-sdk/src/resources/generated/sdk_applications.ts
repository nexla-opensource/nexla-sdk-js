import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class SdkApplicationsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Activate Sdk Application */
  async activate_sdk_application(init?: OperationInit<"activate_sdk_application">): Promise<OperationData<"activate_sdk_application">> {
    return this.client.requestOperation("activate_sdk_application", "put", "/sdk_applications/{app_id}/activate", init);
  }

  /** Create Sdk Application */
  async create_sdk_application(init?: OperationInit<"create_sdk_application">): Promise<OperationData<"create_sdk_application">> {
    return this.client.requestOperation("create_sdk_application", "post", "/sdk_applications", init);
  }

  /** Delete Sdk Application */
  async delete_sdk_application(init?: OperationInit<"delete_sdk_application">): Promise<OperationData<"delete_sdk_application">> {
    return this.client.requestOperation("delete_sdk_application", "delete", "/sdk_applications/{app_id}", init);
  }

  /** Get Sdk Application */
  async get_sdk_application(init?: OperationInit<"get_sdk_application">): Promise<OperationData<"get_sdk_application">> {
    return this.client.requestOperation("get_sdk_application", "get", "/sdk_applications/{app_id}", init);
  }

  /** List Sdk Applications */
  async list_sdk_applications(init?: OperationInit<"list_sdk_applications">): Promise<OperationData<"list_sdk_applications">> {
    return this.client.requestOperation("list_sdk_applications", "get", "/sdk_applications", init);
  }

  /** Pause Sdk Application */
  async pause_sdk_application(init?: OperationInit<"pause_sdk_application">): Promise<OperationData<"pause_sdk_application">> {
    return this.client.requestOperation("pause_sdk_application", "put", "/sdk_applications/{app_id}/pause", init);
  }

  /** Update Sdk Application */
  async update_sdk_application(init?: OperationInit<"update_sdk_application">): Promise<OperationData<"update_sdk_application">> {
    return this.client.requestOperation("update_sdk_application", "put", "/sdk_applications/{app_id}", init);
  }
}