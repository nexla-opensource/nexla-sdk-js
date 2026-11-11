import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ResourceParametersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_resource_parameters">): Promise<OperationData<"list_resource_parameters">> {
    return this.client.requestOperation("list_resource_parameters", "get", "/resource_parameters", init);
  }

  async get(init?: OperationInit<"get_resource_parameter">): Promise<OperationData<"get_resource_parameter">> {
    return this.client.requestOperation("get_resource_parameter", "get", "/resource_parameters/{param_id}", init);
  }

  /** Get Resource Parameter */
  async get_resource_parameter(init?: OperationInit<"get_resource_parameter">): Promise<OperationData<"get_resource_parameter">> {
    return this.client.requestOperation("get_resource_parameter", "get", "/resource_parameters/{param_id}", init);
  }

  /** Get Resource Parameter Audit Log */
  async get_resource_parameter_audit_log(init?: OperationInit<"get_resource_parameter_audit_log">): Promise<OperationData<"get_resource_parameter_audit_log">> {
    return this.client.requestOperation("get_resource_parameter_audit_log", "get", "/resource_parameters/{resource_id}/audit_log", init);
  }

  /** List Resource Parameters */
  async list_resource_parameters(init?: OperationInit<"list_resource_parameters">): Promise<OperationData<"list_resource_parameters">> {
    return this.client.requestOperation("list_resource_parameters", "get", "/resource_parameters", init);
  }
}