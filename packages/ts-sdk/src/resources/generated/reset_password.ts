import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ResetPasswordResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Reset Password (canonical path) */
  async reset_password_reset_password(init?: OperationInit<"reset_password_reset_password">): Promise<OperationData<"reset_password_reset_password">> {
    return this.client.requestOperation("reset_password_reset_password", "put", "/reset_password", init);
  }

  /** Reset Password (canonical path) */
  async reset_password_reset_password_post(init?: OperationInit<"reset_password_reset_password_post">): Promise<OperationData<"reset_password_reset_password_post">> {
    return this.client.requestOperation("reset_password_reset_password_post", "post", "/reset_password", init);
  }
}