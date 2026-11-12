import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class UserTiersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"user_tiers_list_tiers">): Promise<OperationData<"user_tiers_list_tiers">> {
    return this.client.requestOperation("user_tiers_list_tiers", "get", "/user_tiers", init);
  }

  async create(init?: OperationInit<"user_tiers_create_tier">): Promise<OperationData<"user_tiers_create_tier">> {
    return this.client.requestOperation("user_tiers_create_tier", "post", "/user_tiers", init);
  }

  async get(init?: OperationInit<"user_tiers_get_tier">): Promise<OperationData<"user_tiers_get_tier">> {
    return this.client.requestOperation("user_tiers_get_tier", "get", "/user_tiers/{tier_id}", init);
  }

  async update(init?: OperationInit<"user_tiers_update_tier_put">): Promise<OperationData<"user_tiers_update_tier_put">> {
    return this.client.requestOperation("user_tiers_update_tier_put", "put", "/user_tiers/{tier_id}", init);
  }

  async delete(init?: OperationInit<"user_tiers_destroy_tier">): Promise<OperationData<"user_tiers_destroy_tier">> {
    return this.client.requestOperation("user_tiers_destroy_tier", "delete", "/user_tiers/{tier_id}", init);
  }

  /** Create Tier */
  async user_tiers_create_tier(init?: OperationInit<"user_tiers_create_tier">): Promise<OperationData<"user_tiers_create_tier">> {
    return this.client.requestOperation("user_tiers_create_tier", "post", "/user_tiers", init);
  }

  /** Destroy Tier */
  async user_tiers_destroy_tier(init?: OperationInit<"user_tiers_destroy_tier">): Promise<OperationData<"user_tiers_destroy_tier">> {
    return this.client.requestOperation("user_tiers_destroy_tier", "delete", "/user_tiers/{tier_id}", init);
  }

  /** Get Tier */
  async user_tiers_get_tier(init?: OperationInit<"user_tiers_get_tier">): Promise<OperationData<"user_tiers_get_tier">> {
    return this.client.requestOperation("user_tiers_get_tier", "get", "/user_tiers/{tier_id}", init);
  }

  /** List Tiers */
  async user_tiers_list_tiers(init?: OperationInit<"user_tiers_list_tiers">): Promise<OperationData<"user_tiers_list_tiers">> {
    return this.client.requestOperation("user_tiers_list_tiers", "get", "/user_tiers", init);
  }

  /** Update Tier */
  async user_tiers_update_tier(init?: OperationInit<"user_tiers_update_tier">): Promise<OperationData<"user_tiers_update_tier">> {
    return this.client.requestOperation("user_tiers_update_tier", "patch", "/user_tiers/{tier_id}", init);
  }

  /** Update Tier */
  async user_tiers_update_tier_put(init?: OperationInit<"user_tiers_update_tier_put">): Promise<OperationData<"user_tiers_update_tier_put">> {
    return this.client.requestOperation("user_tiers_update_tier_put", "put", "/user_tiers/{tier_id}", init);
  }
}