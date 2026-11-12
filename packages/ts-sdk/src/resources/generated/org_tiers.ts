import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class OrgTiersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async get(init?: OperationInit<"org_tiers_get_tier">): Promise<OperationData<"org_tiers_get_tier">> {
    return this.client.requestOperation("org_tiers_get_tier", "get", "/org_tiers/{tier_id}", init);
  }

  /** Get Tier */
  async org_tiers_get_tier(init?: OperationInit<"org_tiers_get_tier">): Promise<OperationData<"org_tiers_get_tier">> {
    return this.client.requestOperation("org_tiers_get_tier", "get", "/org_tiers/{tier_id}", init);
  }
}