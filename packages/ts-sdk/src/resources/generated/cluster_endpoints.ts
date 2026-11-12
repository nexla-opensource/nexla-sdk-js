import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ClusterEndpointsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async delete(init?: OperationInit<"cluster_endpoints_delete_cluster_endpoint">): Promise<OperationData<"cluster_endpoints_delete_cluster_endpoint">> {
    return this.client.requestOperation("cluster_endpoints_delete_cluster_endpoint", "delete", "/cluster_endpoints/{endpoint_id}", init);
  }

  /** Delete Cluster Endpoint */
  async cluster_endpoints_delete_cluster_endpoint(init?: OperationInit<"cluster_endpoints_delete_cluster_endpoint">): Promise<OperationData<"cluster_endpoints_delete_cluster_endpoint">> {
    return this.client.requestOperation("cluster_endpoints_delete_cluster_endpoint", "delete", "/cluster_endpoints/{endpoint_id}", init);
  }

  /** Get Cluster Endpoint Audit Log */
  async get_cluster_endpoint_audit_log(init?: OperationInit<"get_cluster_endpoint_audit_log">): Promise<OperationData<"get_cluster_endpoint_audit_log">> {
    return this.client.requestOperation("get_cluster_endpoint_audit_log", "get", "/cluster_endpoints/{resource_id}/audit_log", init);
  }

  /** Get Cluster Endpoint Schema */
  async get_cluster_endpoint_schema(init?: OperationInit<"get_cluster_endpoint_schema">): Promise<OperationData<"get_cluster_endpoint_schema">> {
    return this.client.requestOperation("get_cluster_endpoint_schema", "get", "/cluster_endpoints/schema", init);
  }
}