import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class OrgTiersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"org_tiers_list_tiers">): Promise<OperationData<"org_tiers_list_tiers">> {
    return this.client.requestOperation("org_tiers_list_tiers", "get", "/org_tiers", init);
  }

  async create(init?: OperationInit<"org_tiers_create_tier">): Promise<OperationData<"org_tiers_create_tier">> {
    return this.client.requestOperation("org_tiers_create_tier", "post", "/org_tiers", init);
  }

  async get(init?: OperationInit<"org_tiers_get_tier">): Promise<OperationData<"org_tiers_get_tier">> {
    return this.client.requestOperation("org_tiers_get_tier", "get", "/org_tiers/{tier_id}", init);
  }

  async update(init?: OperationInit<"org_tiers_update_tier_put">): Promise<OperationData<"org_tiers_update_tier_put">> {
    return this.client.requestOperation("org_tiers_update_tier_put", "put", "/org_tiers/{tier_id}", init);
  }

  async delete(init?: OperationInit<"org_tiers_destroy_tier">): Promise<OperationData<"org_tiers_destroy_tier">> {
    return this.client.requestOperation("org_tiers_destroy_tier", "delete", "/org_tiers/{tier_id}", init);
  }

  /** Create Tier */
  async org_tiers_create_tier(init?: OperationInit<"org_tiers_create_tier">): Promise<OperationData<"org_tiers_create_tier">> {
    return this.client.requestOperation("org_tiers_create_tier", "post", "/org_tiers", init);
  }

  /** Destroy Tier */
  async org_tiers_destroy_tier(init?: OperationInit<"org_tiers_destroy_tier">): Promise<OperationData<"org_tiers_destroy_tier">> {
    return this.client.requestOperation("org_tiers_destroy_tier", "delete", "/org_tiers/{tier_id}", init);
  }

  /** Get Tier */
  async org_tiers_get_tier(init?: OperationInit<"org_tiers_get_tier">): Promise<OperationData<"org_tiers_get_tier">> {
    return this.client.requestOperation("org_tiers_get_tier", "get", "/org_tiers/{tier_id}", init);
  }

  /** List Tiers */
  async org_tiers_list_tiers(init?: OperationInit<"org_tiers_list_tiers">): Promise<OperationData<"org_tiers_list_tiers">> {
    return this.client.requestOperation("org_tiers_list_tiers", "get", "/org_tiers", init);
  }

  /** Update Tier */
  async org_tiers_update_tier(init?: OperationInit<"org_tiers_update_tier">): Promise<OperationData<"org_tiers_update_tier">> {
    return this.client.requestOperation("org_tiers_update_tier", "patch", "/org_tiers/{tier_id}", init);
  }

  /** Update Tier */
  async org_tiers_update_tier_put(init?: OperationInit<"org_tiers_update_tier_put">): Promise<OperationData<"org_tiers_update_tier_put">> {
    return this.client.requestOperation("org_tiers_update_tier_put", "put", "/org_tiers/{tier_id}", init);
  }
}