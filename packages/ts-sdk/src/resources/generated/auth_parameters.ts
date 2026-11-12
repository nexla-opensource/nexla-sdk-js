import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class AuthParametersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_auth_parameters">): Promise<OperationData<"list_auth_parameters">> {
    return this.client.requestOperation("list_auth_parameters", "get", "/auth_parameters", init);
  }

  async get(init?: OperationInit<"get_auth_parameter">): Promise<OperationData<"get_auth_parameter">> {
    return this.client.requestOperation("get_auth_parameter", "get", "/auth_parameters/{auth_parameter_id}", init);
  }

  /** Get Auth Parameter */
  async get_auth_parameter(init?: OperationInit<"get_auth_parameter">): Promise<OperationData<"get_auth_parameter">> {
    return this.client.requestOperation("get_auth_parameter", "get", "/auth_parameters/{auth_parameter_id}", init);
  }

  /** Get Auth Parameter Audit Log */
  async get_auth_parameter_audit_log(init?: OperationInit<"get_auth_parameter_audit_log">): Promise<OperationData<"get_auth_parameter_audit_log">> {
    return this.client.requestOperation("get_auth_parameter_audit_log", "get", "/auth_parameters/{resource_id}/audit_log", init);
  }

  /** List Auth Parameters */
  async list_auth_parameters(init?: OperationInit<"list_auth_parameters">): Promise<OperationData<"list_auth_parameters">> {
    return this.client.requestOperation("list_auth_parameters", "get", "/auth_parameters", init);
  }
}