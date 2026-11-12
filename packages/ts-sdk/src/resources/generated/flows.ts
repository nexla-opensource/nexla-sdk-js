import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class FlowsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_flows">): Promise<OperationData<"get_flows">> {
    return this.client.requestOperation("get_flows", "get", "/flows", init);
  }

  async get(init?: OperationInit<"get_flow_by_id">): Promise<OperationData<"get_flow_by_id">> {
    return this.client.requestOperation("get_flow_by_id", "get", "/flows/{flow_id}", init);
  }

  async update(init?: OperationInit<"flows_update_flow_put">): Promise<OperationData<"flows_update_flow_put">> {
    return this.client.requestOperation("flows_update_flow_put", "put", "/flows/{flow_id}", init);
  }

  async delete(init?: OperationInit<"delete_flow">): Promise<OperationData<"delete_flow">> {
    return this.client.requestOperation("delete_flow", "delete", "/flows/{flow_id}", init);
  }

  /** Add Flow Docs */
  async add_flow_docs(init?: OperationInit<"add_flow_docs">): Promise<OperationData<"add_flow_docs">> {
    return this.client.requestOperation("add_flow_docs", "put", "/flows/{flow_id}/docs", init);
  }

  /** Bulk Assign Project */
  async bulk_assign_project(init?: OperationInit<"bulk_assign_project">): Promise<OperationData<"bulk_assign_project">> {
    return this.client.requestOperation("bulk_assign_project", "put", "/flows/project", init);
  }

  /** Cancel Flow Run */
  async cancel_flow_run(init?: OperationInit<"cancel_flow_run">): Promise<OperationData<"cancel_flow_run">> {
    return this.client.requestOperation("cancel_flow_run", "post", "/flows/{flow_id}/runs/{run_id}/cancel", init);
  }

  /** Create Flow */
  async create_flow(init?: OperationInit<"create_flow">): Promise<OperationData<"create_flow">> {
    return this.client.requestOperation("create_flow", "post", "/flows/", init);
  }

  /** Create Linked Flows */
  async create_linked_flows(init?: OperationInit<"create_linked_flows">): Promise<OperationData<"create_linked_flows">> {
    return this.client.requestOperation("create_linked_flows", "post", "/flows/{flow_id}/links", init);
  }

  /** Delete All Linked Flows */
  async delete_all_linked_flows(init?: OperationInit<"delete_all_linked_flows">): Promise<OperationData<"delete_all_linked_flows">> {
    return this.client.requestOperation("delete_all_linked_flows", "delete", "/flows/{flow_id}/links/all", init);
  }

  /** Delete a Flow */
  async delete_flow(init?: OperationInit<"delete_flow">): Promise<OperationData<"delete_flow">> {
    return this.client.requestOperation("delete_flow", "delete", "/flows/{flow_id}", init);
  }

  /** Delete a Flow (by Resource ID) */
  async delete_flow_by_resource_id(init?: OperationInit<"delete_flow_by_resource_id">): Promise<OperationData<"delete_flow_by_resource_id">> {
    return this.client.requestOperation("delete_flow_by_resource_id", "delete", "/{resource_type}/{resource_id}/flow", init);
  }

  /** Delete Linked Flows */
  async delete_linked_flows(init?: OperationInit<"delete_linked_flows">): Promise<OperationData<"delete_linked_flows">> {
    return this.client.requestOperation("delete_linked_flows", "delete", "/flows/{flow_id}/links", init);
  }

  /** Explain Flow Access */
  async explain_flow_access(init?: OperationInit<"explain_flow_access">): Promise<OperationData<"explain_flow_access">> {
    return this.client.requestOperation("explain_flow_access", "get", "/flows/{flow_id}/access", init);
  }

  /** Explain Flow Resources Access Route */
  async explain_flow_resources_access_route(init?: OperationInit<"explain_flow_resources_access_route">): Promise<OperationData<"explain_flow_resources_access_route">> {
    return this.client.requestOperation("explain_flow_resources_access_route", "get", "/flows/{flow_id}/resources_access", init);
  }

  /** Activate a Flow */
  async flow_activate_with_flow_id(init?: OperationInit<"flow_activate_with_flow_id">): Promise<OperationData<"flow_activate_with_flow_id">> {
    return this.client.requestOperation("flow_activate_with_flow_id", "put", "/flows/{flow_id}/activate", init);
  }

  /** Activate a Flow (with Resource ID) */
  async flow_activate_with_resource_id(init?: OperationInit<"flow_activate_with_resource_id">): Promise<OperationData<"flow_activate_with_resource_id">> {
    return this.client.requestOperation("flow_activate_with_resource_id", "put", "/{resource_type}/{resource_id}/activate", init);
  }

  /** Copy a Flow */
  async flow_copy_with_flow_id(init?: OperationInit<"flow_copy_with_flow_id">): Promise<OperationData<"flow_copy_with_flow_id">> {
    return this.client.requestOperation("flow_copy_with_flow_id", "post", "/flows/{flow_id}/copy", init);
  }

  /** Generate an AI suggestion for flow documentation */
  async flow_docs_recommendation(init?: OperationInit<"flow_docs_recommendation">): Promise<OperationData<"flow_docs_recommendation">> {
    return this.client.requestOperation("flow_docs_recommendation", "post", "/flows/{flow_id}/docs/recommendation", init);
  }

  /** Flow Metrics Daily */
  async flow_metrics_daily(init?: OperationInit<"flow_metrics_daily">): Promise<OperationData<"flow_metrics_daily">> {
    return this.client.requestOperation("flow_metrics_daily", "get", "/flows/{origin_node_id}/metrics/daily", init);
  }

  /** Pause a Flow */
  async flow_pause_with_flow_id(init?: OperationInit<"flow_pause_with_flow_id">): Promise<OperationData<"flow_pause_with_flow_id">> {
    return this.client.requestOperation("flow_pause_with_flow_id", "put", "/flows/{flow_id}/pause", init);
  }

  /** Pause a Flow (with Resource ID) */
  async flow_pause_with_resource_id(init?: OperationInit<"flow_pause_with_resource_id">): Promise<OperationData<"flow_pause_with_resource_id">> {
    return this.client.requestOperation("flow_pause_with_resource_id", "put", "/{resource_type}/{resource_id}/pause", init);
  }

  /** Get Flow Metrics */
  async flows_get_flow_metrics(init?: OperationInit<"flows_get_flow_metrics">): Promise<OperationData<"flows_get_flow_metrics">> {
    return this.client.requestOperation("flows_get_flow_metrics", "get", "/flows/{flow_id}/metrics", init);
  }

  /** Get Flow Run Status */
  async flows_get_flow_run_status(init?: OperationInit<"flows_get_flow_run_status">): Promise<OperationData<"flows_get_flow_run_status">> {
    return this.client.requestOperation("flows_get_flow_run_status", "get", "/flows/{flow_id}/run_status", init);
  }

  /** Get Flow Run Status */
  async flows_get_flow_run_status_get(init?: OperationInit<"flows_get_flow_run_status_get">): Promise<OperationData<"flows_get_flow_run_status_get">> {
    return this.client.requestOperation("flows_get_flow_run_status_get", "get", "/flows/{flow_id}/run_status/{run_id}", init);
  }

  /** Insert Flow Node Endpoint */
  async flows_insert_flow_node_endpoint(init?: OperationInit<"flows_insert_flow_node_endpoint">): Promise<OperationData<"flows_insert_flow_node_endpoint">> {
    return this.client.requestOperation("flows_insert_flow_node_endpoint", "put", "/flows/{flow_id}/insert_flow_node", init);
  }

  /** Insert Flow Node Endpoint */
  async flows_insert_flow_node_endpoint_post(init?: OperationInit<"flows_insert_flow_node_endpoint_post">): Promise<OperationData<"flows_insert_flow_node_endpoint_post">> {
    return this.client.requestOperation("flows_insert_flow_node_endpoint_post", "post", "/flows/{flow_id}/insert_flow_node", init);
  }

  /** Remove Flow Node Endpoint */
  async flows_remove_flow_node_endpoint(init?: OperationInit<"flows_remove_flow_node_endpoint">): Promise<OperationData<"flows_remove_flow_node_endpoint">> {
    return this.client.requestOperation("flows_remove_flow_node_endpoint", "put", "/flows/{flow_id}/remove_flow_node", init);
  }

  /** Remove Flow Node Endpoint */
  async flows_remove_flow_node_endpoint_post(init?: OperationInit<"flows_remove_flow_node_endpoint_post">): Promise<OperationData<"flows_remove_flow_node_endpoint_post">> {
    return this.client.requestOperation("flows_remove_flow_node_endpoint_post", "post", "/flows/{flow_id}/remove_flow_node", init);
  }

  /** Run Flow Now */
  async flows_run_flow_now(init?: OperationInit<"flows_run_flow_now">): Promise<OperationData<"flows_run_flow_now">> {
    return this.client.requestOperation("flows_run_flow_now", "put", "/flows/{flow_id}/run_now", init);
  }

  /** Run Flow Now */
  async flows_run_flow_now_post(init?: OperationInit<"flows_run_flow_now_post">): Promise<OperationData<"flows_run_flow_now_post">> {
    return this.client.requestOperation("flows_run_flow_now_post", "post", "/flows/{flow_id}/run_now", init);
  }

  /** Update Flow */
  async flows_update_flow(init?: OperationInit<"flows_update_flow">): Promise<OperationData<"flows_update_flow">> {
    return this.client.requestOperation("flows_update_flow", "patch", "/flows/{flow_id}", init);
  }

  /** Update Flow */
  async flows_update_flow_put(init?: OperationInit<"flows_update_flow_put">): Promise<OperationData<"flows_update_flow_put">> {
    return this.client.requestOperation("flows_update_flow_put", "put", "/flows/{flow_id}", init);
  }

  /** Users Access Insights */
  async flows_users_access_insights(init?: OperationInit<"flows_users_access_insights">): Promise<OperationData<"flows_users_access_insights">> {
    return this.client.requestOperation("flows_users_access_insights", "get", "/flows/{resource_id}/users_access_insights", init);
  }

  /** Get Flow Audit Log */
  async get_flow_audit_log(init?: OperationInit<"get_flow_audit_log">): Promise<OperationData<"get_flow_audit_log">> {
    return this.client.requestOperation("get_flow_audit_log", "get", "/flows/{flow_node_id}/audit_log", init);
  }

  /** Get Flow by ID */
  async get_flow_by_id(init?: OperationInit<"get_flow_by_id">): Promise<OperationData<"get_flow_by_id">> {
    return this.client.requestOperation("get_flow_by_id", "get", "/flows/{flow_id}", init);
  }

  /** Get Flow (by Resource ID) */
  async get_flow_by_resource_id(init?: OperationInit<"get_flow_by_resource_id">): Promise<OperationData<"get_flow_by_resource_id">> {
    return this.client.requestOperation("get_flow_by_resource_id", "get", "/{resource_type}/{resource_id}/flow", init);
  }

  /** Get Flow Document */
  async get_flow_document(init?: OperationInit<"get_flow_document">): Promise<OperationData<"get_flow_document">> {
    return this.client.requestOperation("get_flow_document", "get", "/flows/{flow_id}/document", init);
  }

  /** Get Flow Document Schema */
  async get_flow_document_schema(init?: OperationInit<"get_flow_document_schema">): Promise<OperationData<"get_flow_document_schema">> {
    return this.client.requestOperation("get_flow_document_schema", "get", "/flows/document/schema", init);
  }

  /** Get Flow Logs */
  async get_flow_logs(init?: OperationInit<"get_flow_logs">): Promise<OperationData<"get_flow_logs">> {
    return this.client.requestOperation("get_flow_logs", "get", "/flows/{flow_id}/logs", init);
  }

  /** Get Flow Logs V2 */
  async get_flow_logs_v2(init?: OperationInit<"get_flow_logs_v2">): Promise<OperationData<"get_flow_logs_v2">> {
    return this.client.requestOperation("get_flow_logs_v2", "post", "/flows/{flow_id}/logs_v2", init);
  }

  /** Get Flow Run Details */
  async get_flow_run_details(init?: OperationInit<"get_flow_run_details">): Promise<OperationData<"get_flow_run_details">> {
    return this.client.requestOperation("get_flow_run_details", "get", "/flows/{flow_id}/runs/{run_id}", init);
  }

  /** Get Flow Runs */
  async get_flow_runs(init?: OperationInit<"get_flow_runs">): Promise<OperationData<"get_flow_runs">> {
    return this.client.requestOperation("get_flow_runs", "get", "/flows/{flow_id}/runs", init);
  }

  /** Get All Flows */
  async get_flows(init?: OperationInit<"get_flows">): Promise<OperationData<"get_flows">> {
    return this.client.requestOperation("get_flows", "get", "/flows", init);
  }

  /** Import Flow */
  async import_flow(init?: OperationInit<"import_flow">): Promise<OperationData<"import_flow">> {
    return this.client.requestOperation("import_flow", "post", "/flows/import", init);
  }

  /** List Flow Docs */
  async list_flow_docs(init?: OperationInit<"list_flow_docs">): Promise<OperationData<"list_flow_docs">> {
    return this.client.requestOperation("list_flow_docs", "get", "/flows/{flow_id}/docs", init);
  }

  /** List Linked Flows */
  async list_linked_flows(init?: OperationInit<"list_linked_flows">): Promise<OperationData<"list_linked_flows">> {
    return this.client.requestOperation("list_linked_flows", "get", "/flows/{flow_id}/links", init);
  }

  /** Plan Flow */
  async plan_flow(init?: OperationInit<"plan_flow">): Promise<OperationData<"plan_flow">> {
    return this.client.requestOperation("plan_flow", "post", "/flows/plan", init);
  }

  /** Publish Rag */
  async publish_rag(init?: OperationInit<"publish_rag">): Promise<OperationData<"publish_rag">> {
    return this.client.requestOperation("publish_rag", "put", "/flows/{flow_id}/rag/publish", init);
  }

  /** Remove Flow Docs */
  async remove_flow_docs(init?: OperationInit<"remove_flow_docs">): Promise<OperationData<"remove_flow_docs">> {
    return this.client.requestOperation("remove_flow_docs", "delete", "/flows/{flow_id}/docs", init);
  }

  /** Reset Flow Docs */
  async reset_flow_docs(init?: OperationInit<"reset_flow_docs">): Promise<OperationData<"reset_flow_docs">> {
    return this.client.requestOperation("reset_flow_docs", "post", "/flows/{flow_id}/docs", init);
  }

  /** Restore Archival */
  async restore_archival(init?: OperationInit<"restore_archival">): Promise<OperationData<"restore_archival">> {
    return this.client.requestOperation("restore_archival", "post", "/flows/{flow_id}/archival/restore", init);
  }

  /** Retry Flow Run */
  async retry_flow_run(init?: OperationInit<"retry_flow_run">): Promise<OperationData<"retry_flow_run">> {
    return this.client.requestOperation("retry_flow_run", "post", "/flows/{flow_id}/runs/{run_id}/retry", init);
  }

  /** Run Profiles Activate */
  async run_profiles_activate(init?: OperationInit<"run_profiles_activate">): Promise<OperationData<"run_profiles_activate">> {
    return this.client.requestOperation("run_profiles_activate", "post", "/flows/{flow_node_id}/run_profiles/activate", init);
  }

  /** Search Flows */
  async search_flows(init?: OperationInit<"search_flows">): Promise<OperationData<"search_flows">> {
    return this.client.requestOperation("search_flows", "post", "/flows/search", init);
  }

  /** Update Archival Status */
  async update_archival_status(init?: OperationInit<"update_archival_status">): Promise<OperationData<"update_archival_status">> {
    return this.client.requestOperation("update_archival_status", "post", "/flows/{flow_id}/archival/status", init);
  }

  /** Update Flow Samples */
  async update_flow_samples(init?: OperationInit<"update_flow_samples">): Promise<OperationData<"update_flow_samples">> {
    return this.client.requestOperation("update_flow_samples", "put", "/flows/{flow_id}/samples", init);
  }

  /** Update Linked Flows */
  async update_linked_flows(init?: OperationInit<"update_linked_flows">): Promise<OperationData<"update_linked_flows">> {
    return this.client.requestOperation("update_linked_flows", "put", "/flows/{flow_id}/links", init);
  }

  /**
   * Copy a flow and replace credentials on specified resources.
   *
   * Copies a flow with `reuse_data_credentials: true`, then updates
   * the credentials for resources listed in the mapping. Keys are
   * original resource IDs (source/sink), values are new credential IDs.
   * Resources not in the mapping keep their original credentials.
   *
   * @param flowId - The ID of the flow to copy
   * @param resourceCredentialMapping - Map of original resource IDs to new credential IDs
   * @param copyOptions - Additional copy options (reuse_data_credentials is always forced true)
   * @param targetProjectId - Optional project ID to move the copied flow into
   */
  async copy_and_replace_credentials(
    flowId: number,
    resourceCredentialMapping: Record<number, number>,
    copyOptions?: Record<string, unknown>,
    targetProjectId?: number,
  ): Promise<OperationData<"get_flow_by_id">> {
    // Step 1: Copy the flow with reuse_data_credentials=true
    const body = { ...copyOptions, reuse_data_credentials: true };
    const copiedFlow = await this.client.requestOperation(
      "flow_copy_with_flow_id",
      "post",
      "/flows/{flow_id}/copy",
      { params: { path: { flow_id: flowId } }, body } as OperationInit<"flow_copy_with_flow_id">,
    );

    const flowResponse = copiedFlow as Record<string, unknown>;
    const dataSources = (flowResponse.data_sources ?? []) as Array<Record<string, unknown>>;
    const dataSinks = (flowResponse.data_sinks ?? []) as Array<Record<string, unknown>>;
    const flows = (flowResponse.flows ?? []) as Array<Record<string, unknown>>;

    // Step 2: Update credentials on copied sources that match the mapping
    for (const source of dataSources) {
      const copiedFromId = source.copied_from_id as number | undefined;
      if (copiedFromId != null && copiedFromId in resourceCredentialMapping) {
        await this.client.requestOperation(
          "update_data_source",
          "put",
          "/data_sources/{source_id}",
          {
            params: { path: { source_id: source.id as number } },
            body: { data_credentials_id: resourceCredentialMapping[copiedFromId] },
          } as OperationInit<"update_data_source">,
        );
      }
    }

    // Step 3: Update credentials on copied sinks that match the mapping
    for (const sink of dataSinks) {
      const copiedFromId = sink.copied_from_id as number | undefined;
      if (copiedFromId != null && copiedFromId in resourceCredentialMapping) {
        await this.client.requestOperation(
          "update_data_sink",
          "put",
          "/data_sinks/{sink_id}",
          {
            params: { path: { sink_id: sink.id as number } },
            body: { data_credentials_id: resourceCredentialMapping[copiedFromId] },
          } as OperationInit<"update_data_sink">,
        );
      }
    }

    // Step 4: Optionally move the copied flow into a target project
    const originNodeId = (flows[0]?.origin_node_id ?? flows[0]?.id) as number;
    if (targetProjectId != null) {
      await this.client.requestOperation(
        "add_project_flows",
        "put",
        "/projects/{project_id}/flows",
        {
          params: { path: { project_id: targetProjectId } },
          body: { flows: [originNodeId] },
        } as OperationInit<"add_project_flows">,
      );
    }

    // Step 5: Re-fetch the flow to return an up-to-date response
    return this.client.requestOperation(
      "get_flow_by_id",
      "get",
      "/flows/{flow_id}",
      { params: { path: { flow_id: originNodeId } } } as OperationInit<"get_flow_by_id">,
    );
  }
}