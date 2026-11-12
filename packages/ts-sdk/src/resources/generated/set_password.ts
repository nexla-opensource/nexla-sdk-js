import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class SetPasswordResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Set Password (canonical path) */
  async set_password_set_password(init?: OperationInit<"set_password_set_password">): Promise<OperationData<"set_password_set_password">> {
    return this.client.requestOperation("set_password_set_password", "put", "/set_password", init);
  }

  /** Set Password (canonical path) */
  async set_password_set_password_post(init?: OperationInit<"set_password_set_password_post">): Promise<OperationData<"set_password_set_password_post">> {
    return this.client.requestOperation("set_password_set_password_post", "post", "/set_password", init);
  }
}