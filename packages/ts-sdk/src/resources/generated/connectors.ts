import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ConnectorsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"index_connectors">): Promise<OperationData<"index_connectors">> {
    return this.client.requestOperation("index_connectors", "get", "/connectors", init);
  }

  async get(init?: OperationInit<"show_connector">): Promise<OperationData<"show_connector">> {
    return this.client.requestOperation("show_connector", "get", "/connectors/{connector_id}", init);
  }

  async update(init?: OperationInit<"connectors_update_connector_put">): Promise<OperationData<"connectors_update_connector_put">> {
    return this.client.requestOperation("connectors_update_connector_put", "put", "/connectors/{connector_id}", init);
  }

  /** Update Connector */
  async connectors_update_connector(init?: OperationInit<"connectors_update_connector">): Promise<OperationData<"connectors_update_connector">> {
    return this.client.requestOperation("connectors_update_connector", "patch", "/connectors/{connector_id}", init);
  }

  /** Update Connector */
  async connectors_update_connector_put(init?: OperationInit<"connectors_update_connector_put">): Promise<OperationData<"connectors_update_connector_put">> {
    return this.client.requestOperation("connectors_update_connector_put", "put", "/connectors/{connector_id}", init);
  }

  /** Index Connectors */
  async index_connectors(init?: OperationInit<"index_connectors">): Promise<OperationData<"index_connectors">> {
    return this.client.requestOperation("index_connectors", "get", "/connectors", init);
  }

  /** Show Connector */
  async show_connector(init?: OperationInit<"show_connector">): Promise<OperationData<"show_connector">> {
    return this.client.requestOperation("show_connector", "get", "/connectors/{connector_id}", init);
  }
}