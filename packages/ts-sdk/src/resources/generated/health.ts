import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class HealthResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Health Flow */
  async health_flow(init?: OperationInit<"health_flow">): Promise<OperationData<"health_flow">> {
    return this.client.requestOperation("health_flow", "get", "/health/flow/{flow_id}", init);
  }

  /** Health Org All */
  async health_org_all(init?: OperationInit<"health_org_all">): Promise<OperationData<"health_org_all">> {
    return this.client.requestOperation("health_org_all", "get", "/health/org/all", init);
  }

  /** Health Org Flows */
  async health_org_flows(init?: OperationInit<"health_org_flows">): Promise<OperationData<"health_org_flows">> {
    return this.client.requestOperation("health_org_flows", "get", "/health/org/flows", init);
  }
}