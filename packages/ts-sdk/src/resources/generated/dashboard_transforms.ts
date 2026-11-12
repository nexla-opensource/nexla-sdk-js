import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class DashboardTransformsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"index_dashboard_transforms">): Promise<OperationData<"index_dashboard_transforms">> {
    return this.client.requestOperation("index_dashboard_transforms", "get", "/dashboard_transforms", init);
  }

  async create(init?: OperationInit<"dashboard_transforms_create_dashboard_transform">): Promise<OperationData<"dashboard_transforms_create_dashboard_transform">> {
    return this.client.requestOperation("dashboard_transforms_create_dashboard_transform", "post", "/dashboard_transforms", init);
  }

  async get(init?: OperationInit<"dashboard_transforms_show_dashboard_transform">): Promise<OperationData<"dashboard_transforms_show_dashboard_transform">> {
    return this.client.requestOperation("dashboard_transforms_show_dashboard_transform", "get", "/dashboard_transforms/{transform_id}", init);
  }

  async update(init?: OperationInit<"dashboard_transforms_update_dashboard_transform_put">): Promise<OperationData<"dashboard_transforms_update_dashboard_transform_put">> {
    return this.client.requestOperation("dashboard_transforms_update_dashboard_transform_put", "put", "/dashboard_transforms/{transform_id}", init);
  }

  async delete(init?: OperationInit<"destroy_dashboard_transform">): Promise<OperationData<"destroy_dashboard_transform">> {
    return this.client.requestOperation("destroy_dashboard_transform", "delete", "/dashboard_transforms/{transform_id}", init);
  }

  /** Create Dashboard Transform */
  async dashboard_transforms_create_dashboard_transform(init?: OperationInit<"dashboard_transforms_create_dashboard_transform">): Promise<OperationData<"dashboard_transforms_create_dashboard_transform">> {
    return this.client.requestOperation("dashboard_transforms_create_dashboard_transform", "post", "/dashboard_transforms", init);
  }

  /** Show Dashboard Transform */
  async dashboard_transforms_show_dashboard_transform(init?: OperationInit<"dashboard_transforms_show_dashboard_transform">): Promise<OperationData<"dashboard_transforms_show_dashboard_transform">> {
    return this.client.requestOperation("dashboard_transforms_show_dashboard_transform", "get", "/dashboard_transforms/{transform_id}", init);
  }

  /** Update Dashboard Transform */
  async dashboard_transforms_update_dashboard_transform(init?: OperationInit<"dashboard_transforms_update_dashboard_transform">): Promise<OperationData<"dashboard_transforms_update_dashboard_transform">> {
    return this.client.requestOperation("dashboard_transforms_update_dashboard_transform", "patch", "/dashboard_transforms/{transform_id}", init);
  }

  /** Update Dashboard Transform */
  async dashboard_transforms_update_dashboard_transform_put(init?: OperationInit<"dashboard_transforms_update_dashboard_transform_put">): Promise<OperationData<"dashboard_transforms_update_dashboard_transform_put">> {
    return this.client.requestOperation("dashboard_transforms_update_dashboard_transform_put", "put", "/dashboard_transforms/{transform_id}", init);
  }

  /** Destroy Dashboard Transform */
  async destroy_dashboard_transform(init?: OperationInit<"destroy_dashboard_transform">): Promise<OperationData<"destroy_dashboard_transform">> {
    return this.client.requestOperation("destroy_dashboard_transform", "delete", "/dashboard_transforms/{transform_id}", init);
  }

  /** Index All Dashboard Transforms */
  async index_all_dashboard_transforms(init?: OperationInit<"index_all_dashboard_transforms">): Promise<OperationData<"index_all_dashboard_transforms">> {
    return this.client.requestOperation("index_all_dashboard_transforms", "get", "/dashboard_transforms/all", init);
  }

  /** Index Dashboard Transforms */
  async index_dashboard_transforms(init?: OperationInit<"index_dashboard_transforms">): Promise<OperationData<"index_dashboard_transforms">> {
    return this.client.requestOperation("index_dashboard_transforms", "get", "/dashboard_transforms", init);
  }
}