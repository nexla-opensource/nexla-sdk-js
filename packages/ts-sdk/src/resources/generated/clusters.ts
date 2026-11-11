import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ClustersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_clusters">): Promise<OperationData<"list_clusters">> {
    return this.client.requestOperation("list_clusters", "get", "/clusters", init);
  }

  async create(init?: OperationInit<"create_cluster">): Promise<OperationData<"create_cluster">> {
    return this.client.requestOperation("create_cluster", "post", "/clusters", init);
  }

  async get(init?: OperationInit<"get_cluster">): Promise<OperationData<"get_cluster">> {
    return this.client.requestOperation("get_cluster", "get", "/clusters/{cluster_id}", init);
  }

  async update(init?: OperationInit<"clusters_update_cluster_put">): Promise<OperationData<"clusters_update_cluster_put">> {
    return this.client.requestOperation("clusters_update_cluster_put", "put", "/clusters/{cluster_id}", init);
  }

  async delete(init?: OperationInit<"delete_cluster">): Promise<OperationData<"delete_cluster">> {
    return this.client.requestOperation("delete_cluster", "delete", "/clusters/{cluster_id}", init);
  }

  /** Update Cluster */
  async clusters_update_cluster(init?: OperationInit<"clusters_update_cluster">): Promise<OperationData<"clusters_update_cluster">> {
    return this.client.requestOperation("clusters_update_cluster", "patch", "/clusters/{cluster_id}", init);
  }

  /** Update Cluster */
  async clusters_update_cluster_put(init?: OperationInit<"clusters_update_cluster_put">): Promise<OperationData<"clusters_update_cluster_put">> {
    return this.client.requestOperation("clusters_update_cluster_put", "put", "/clusters/{cluster_id}", init);
  }

  /** Create Cluster */
  async create_cluster(init?: OperationInit<"create_cluster">): Promise<OperationData<"create_cluster">> {
    return this.client.requestOperation("create_cluster", "post", "/clusters", init);
  }

  /** Delete Cluster */
  async delete_cluster(init?: OperationInit<"delete_cluster">): Promise<OperationData<"delete_cluster">> {
    return this.client.requestOperation("delete_cluster", "delete", "/clusters/{cluster_id}", init);
  }

  /** Get Cluster */
  async get_cluster(init?: OperationInit<"get_cluster">): Promise<OperationData<"get_cluster">> {
    return this.client.requestOperation("get_cluster", "get", "/clusters/{cluster_id}", init);
  }

  /** List Clusters */
  async list_clusters(init?: OperationInit<"list_clusters">): Promise<OperationData<"list_clusters">> {
    return this.client.requestOperation("list_clusters", "get", "/clusters", init);
  }
}