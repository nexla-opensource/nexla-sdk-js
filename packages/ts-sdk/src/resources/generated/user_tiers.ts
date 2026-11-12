import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class UserTiersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async get(init?: OperationInit<"user_tiers_get_tier">): Promise<OperationData<"user_tiers_get_tier">> {
    return this.client.requestOperation("user_tiers_get_tier", "get", "/user_tiers/{tier_id}", init);
  }

  /** Get Tier */
  async user_tiers_get_tier(init?: OperationInit<"user_tiers_get_tier">): Promise<OperationData<"user_tiers_get_tier">> {
    return this.client.requestOperation("user_tiers_get_tier", "get", "/user_tiers/{tier_id}", init);
  }
}