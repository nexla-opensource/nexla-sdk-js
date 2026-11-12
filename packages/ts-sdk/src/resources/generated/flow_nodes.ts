import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class FlowNodesResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async get(init?: OperationInit<"show_flow_node">): Promise<OperationData<"show_flow_node">> {
    return this.client.requestOperation("show_flow_node", "get", "/flow_nodes/{flow_node_id}", init);
  }

  async update(init?: OperationInit<"flow_nodes_update_flow_node_put">): Promise<OperationData<"flow_nodes_update_flow_node_put">> {
    return this.client.requestOperation("flow_nodes_update_flow_node_put", "put", "/flow_nodes/{flow_node_id}", init);
  }

  /** Add Flow Node Docs */
  async add_flow_node_docs(init?: OperationInit<"add_flow_node_docs">): Promise<OperationData<"add_flow_node_docs">> {
    return this.client.requestOperation("add_flow_node_docs", "put", "/flow_nodes/{flow_node_id}/docs", init);
  }

  /** Update Flow Node */
  async flow_nodes_update_flow_node(init?: OperationInit<"flow_nodes_update_flow_node">): Promise<OperationData<"flow_nodes_update_flow_node">> {
    return this.client.requestOperation("flow_nodes_update_flow_node", "patch", "/flow_nodes/{flow_node_id}", init);
  }

  /** Update Flow Node */
  async flow_nodes_update_flow_node_put(init?: OperationInit<"flow_nodes_update_flow_node_put">): Promise<OperationData<"flow_nodes_update_flow_node_put">> {
    return this.client.requestOperation("flow_nodes_update_flow_node_put", "put", "/flow_nodes/{flow_node_id}", init);
  }

  /** List Flow Node Docs */
  async list_flow_node_docs(init?: OperationInit<"list_flow_node_docs">): Promise<OperationData<"list_flow_node_docs">> {
    return this.client.requestOperation("list_flow_node_docs", "get", "/flow_nodes/{flow_node_id}/docs", init);
  }

  /** Remove Flow Node Docs */
  async remove_flow_node_docs(init?: OperationInit<"remove_flow_node_docs">): Promise<OperationData<"remove_flow_node_docs">> {
    return this.client.requestOperation("remove_flow_node_docs", "delete", "/flow_nodes/{flow_node_id}/docs", init);
  }

  /** Reset Flow Node Docs */
  async reset_flow_node_docs(init?: OperationInit<"reset_flow_node_docs">): Promise<OperationData<"reset_flow_node_docs">> {
    return this.client.requestOperation("reset_flow_node_docs", "post", "/flow_nodes/{flow_node_id}/docs", init);
  }

  /** Show Flow Node */
  async show_flow_node(init?: OperationInit<"show_flow_node">): Promise<OperationData<"show_flow_node">> {
    return this.client.requestOperation("show_flow_node", "get", "/flow_nodes/{flow_node_id}", init);
  }
}