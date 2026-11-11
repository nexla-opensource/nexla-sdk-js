import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class DataFlowsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async update(init?: OperationInit<"update_flow_via_data_flows_data_set">): Promise<OperationData<"update_flow_via_data_flows_data_set">> {
    return this.client.requestOperation("update_flow_via_data_flows_data_set", "put", "/data_flows/{resource_id}", init);
  }

  async delete(init?: OperationInit<"delete_flow_via_data_flows_data_set">): Promise<OperationData<"delete_flow_via_data_flows_data_set">> {
    return this.client.requestOperation("delete_flow_via_data_flows_data_set", "delete", "/data_flows/{resource_id}", init);
  }

  /** Activate Flow Via Data Flows Data Set */
  async activate_flow_via_data_flows_data_set(init?: OperationInit<"activate_flow_via_data_flows_data_set">): Promise<OperationData<"activate_flow_via_data_flows_data_set">> {
    return this.client.requestOperation("activate_flow_via_data_flows_data_set", "put", "/data_flows/{resource_id}/activate", init);
  }

  /** Activate Flow Via Data Flows Data Sink */
  async activate_flow_via_data_flows_data_sink(init?: OperationInit<"activate_flow_via_data_flows_data_sink">): Promise<OperationData<"activate_flow_via_data_flows_data_sink">> {
    return this.client.requestOperation("activate_flow_via_data_flows_data_sink", "put", "/data_flows/data_sink/{resource_id}/activate", init);
  }

  /** Activate Flow Via Data Flows Data Source */
  async activate_flow_via_data_flows_data_source(init?: OperationInit<"activate_flow_via_data_flows_data_source">): Promise<OperationData<"activate_flow_via_data_flows_data_source">> {
    return this.client.requestOperation("activate_flow_via_data_flows_data_source", "put", "/data_flows/data_source/{resource_id}/activate", init);
  }

  /** Active Flows Metrics */
  async active_flows_metrics(init?: OperationInit<"active_flows_metrics">): Promise<OperationData<"active_flows_metrics">> {
    return this.client.requestOperation("active_flows_metrics", "get", "/data_flows/metrics/active_flows_metrics", init);
  }

  /** Add Data Source Flow Docs Bc */
  async add_data_source_flow_docs_bc(init?: OperationInit<"add_data_source_flow_docs_bc">): Promise<OperationData<"add_data_source_flow_docs_bc">> {
    return this.client.requestOperation("add_data_source_flow_docs_bc", "put", "/data_flows/data_source/{resource_id}/docs", init);
  }

  /** Copy Flow Via Data Flows Data Set */
  async copy_flow_via_data_flows_data_set(init?: OperationInit<"copy_flow_via_data_flows_data_set">): Promise<OperationData<"copy_flow_via_data_flows_data_set">> {
    return this.client.requestOperation("copy_flow_via_data_flows_data_set", "post", "/data_flows/{resource_id}/copy", init);
  }

  /** Copy Flow Via Data Flows Data Sink */
  async copy_flow_via_data_flows_data_sink(init?: OperationInit<"copy_flow_via_data_flows_data_sink">): Promise<OperationData<"copy_flow_via_data_flows_data_sink">> {
    return this.client.requestOperation("copy_flow_via_data_flows_data_sink", "post", "/data_flows/data_sink/{resource_id}/copy", init);
  }

  /** Copy Flow Via Data Flows Data Source */
  async copy_flow_via_data_flows_data_source(init?: OperationInit<"copy_flow_via_data_flows_data_source">): Promise<OperationData<"copy_flow_via_data_flows_data_source">> {
    return this.client.requestOperation("copy_flow_via_data_flows_data_source", "post", "/data_flows/data_source/{resource_id}/copy", init);
  }

  /** Data Flows Metrics Daily */
  async data_flows_metrics_daily(init?: OperationInit<"data_flows_metrics_daily">): Promise<OperationData<"data_flows_metrics_daily">> {
    return this.client.requestOperation("data_flows_metrics_daily", "get", "/data_flows/metrics/daily", init);
  }

  /** Data Flows Metrics Total */
  async data_flows_metrics_total(init?: OperationInit<"data_flows_metrics_total">): Promise<OperationData<"data_flows_metrics_total">> {
    return this.client.requestOperation("data_flows_metrics_total", "get", "/data_flows/metrics/total", init);
  }

  /** Delete Flow Via Data Flows Data Set */
  async delete_flow_via_data_flows_data_set(init?: OperationInit<"delete_flow_via_data_flows_data_set">): Promise<OperationData<"delete_flow_via_data_flows_data_set">> {
    return this.client.requestOperation("delete_flow_via_data_flows_data_set", "delete", "/data_flows/{resource_id}", init);
  }

  /** Delete Flow Via Data Flows Data Sink */
  async delete_flow_via_data_flows_data_sink(init?: OperationInit<"delete_flow_via_data_flows_data_sink">): Promise<OperationData<"delete_flow_via_data_flows_data_sink">> {
    return this.client.requestOperation("delete_flow_via_data_flows_data_sink", "delete", "/data_flows/data_sink/{resource_id}", init);
  }

  /** Delete Flow Via Data Flows Data Source */
  async delete_flow_via_data_flows_data_source(init?: OperationInit<"delete_flow_via_data_flows_data_source">): Promise<OperationData<"delete_flow_via_data_flows_data_source">> {
    return this.client.requestOperation("delete_flow_via_data_flows_data_source", "delete", "/data_flows/data_source/{resource_id}", init);
  }

  /** List Data Source Flow Docs Bc */
  async list_data_source_flow_docs_bc(init?: OperationInit<"list_data_source_flow_docs_bc">): Promise<OperationData<"list_data_source_flow_docs_bc">> {
    return this.client.requestOperation("list_data_source_flow_docs_bc", "get", "/data_flows/data_source/{resource_id}/docs", init);
  }

  /** Pause Flow Via Data Flows Data Set */
  async pause_flow_via_data_flows_data_set(init?: OperationInit<"pause_flow_via_data_flows_data_set">): Promise<OperationData<"pause_flow_via_data_flows_data_set">> {
    return this.client.requestOperation("pause_flow_via_data_flows_data_set", "put", "/data_flows/{resource_id}/pause", init);
  }

  /** Pause Flow Via Data Flows Data Sink */
  async pause_flow_via_data_flows_data_sink(init?: OperationInit<"pause_flow_via_data_flows_data_sink">): Promise<OperationData<"pause_flow_via_data_flows_data_sink">> {
    return this.client.requestOperation("pause_flow_via_data_flows_data_sink", "put", "/data_flows/data_sink/{resource_id}/pause", init);
  }

  /** Pause Flow Via Data Flows Data Source */
  async pause_flow_via_data_flows_data_source(init?: OperationInit<"pause_flow_via_data_flows_data_source">): Promise<OperationData<"pause_flow_via_data_flows_data_source">> {
    return this.client.requestOperation("pause_flow_via_data_flows_data_source", "put", "/data_flows/data_source/{resource_id}/pause", init);
  }

  /** Remove Data Source Flow Docs Bc */
  async remove_data_source_flow_docs_bc(init?: OperationInit<"remove_data_source_flow_docs_bc">): Promise<OperationData<"remove_data_source_flow_docs_bc">> {
    return this.client.requestOperation("remove_data_source_flow_docs_bc", "delete", "/data_flows/data_source/{resource_id}/docs", init);
  }

  /** Reset Data Source Flow Docs Bc */
  async reset_data_source_flow_docs_bc(init?: OperationInit<"reset_data_source_flow_docs_bc">): Promise<OperationData<"reset_data_source_flow_docs_bc">> {
    return this.client.requestOperation("reset_data_source_flow_docs_bc", "post", "/data_flows/data_source/{resource_id}/docs", init);
  }

  /** Show Data Sink Flow */
  async show_data_sink_flow(init?: OperationInit<"show_data_sink_flow">): Promise<OperationData<"show_data_sink_flow">> {
    return this.client.requestOperation("show_data_sink_flow", "get", "/data_flows/data_sink/{data_sink_id}", init);
  }

  /** Show Data Source Flow */
  async show_data_source_flow(init?: OperationInit<"show_data_source_flow">): Promise<OperationData<"show_data_source_flow">> {
    return this.client.requestOperation("show_data_source_flow", "get", "/data_flows/data_source/{data_source_id}", init);
  }

  /** Update Flow Via Data Flows Data Set */
  async update_flow_via_data_flows_data_set(init?: OperationInit<"update_flow_via_data_flows_data_set">): Promise<OperationData<"update_flow_via_data_flows_data_set">> {
    return this.client.requestOperation("update_flow_via_data_flows_data_set", "put", "/data_flows/{resource_id}", init);
  }

  /** Update Flow Via Data Flows Data Sink */
  async update_flow_via_data_flows_data_sink(init?: OperationInit<"update_flow_via_data_flows_data_sink">): Promise<OperationData<"update_flow_via_data_flows_data_sink">> {
    return this.client.requestOperation("update_flow_via_data_flows_data_sink", "put", "/data_flows/data_sink/{resource_id}", init);
  }

  /** Update Flow Via Data Flows Data Source */
  async update_flow_via_data_flows_data_source(init?: OperationInit<"update_flow_via_data_flows_data_source">): Promise<OperationData<"update_flow_via_data_flows_data_source">> {
    return this.client.requestOperation("update_flow_via_data_flows_data_source", "put", "/data_flows/data_source/{resource_id}", init);
  }
}