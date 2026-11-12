/**
 * Manually curated methods that augment generated resource clients.
 *
 * Why this exists: some convenience methods are not 1:1 with a single OpenAPI
 * operation (e.g., multi-step orchestrations like `copy_and_replace_credentials`),
 * and some operations live under a different OpenAPI tag than the resource that
 * exposes them ergonomically (e.g., `get_user_audit_log` is tagged "Audit Logs"
 * but is also exposed as `client.users.get_audit_log`).
 *
 * `generate-resource-map.mjs` reads this file and splices each resource's
 * snippets into the generated class body, so `pnpm gen` is fully idempotent
 * and these methods survive regeneration.
 *
 * Each entry is a raw string ready to be appended inside the class body, with
 * a leading newline. Use TS source as-is (no template substitution).
 */

const usersAuditLog = `
  /** Get Audit Log for a User */
  async get_audit_log(init?: OperationInit<"get_user_audit_log">): Promise<OperationData<"get_user_audit_log">> {
    return this.client.requestOperation("get_user_audit_log", "get", "/users/{user_id}/audit_log", init);
  }`;

const organizationsAuditLog = `
  /** Get Audit Log for an Organization */
  async get_audit_log(init?: OperationInit<"get_org_audit_log">): Promise<OperationData<"get_org_audit_log">> {
    return this.client.requestOperation("get_org_audit_log", "get", "/orgs/{org_id}/audit_log", init);
  }`;

const flowsCopyAndReplaceCredentials = `
  /**
   * Copy a flow and replace credentials on specified resources.
   *
   * Copies a flow with \`reuse_data_credentials: true\`, then updates
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
  }`;

/*
 * Compatibility aliases. The backend route for each name is the same as the
 * operation named in the call, so these names keep working after the spec
 * operations were renamed.
 */
const organizationsUpdateCustodians = `
  /**
   * Update organization custodians.
   *
   * @deprecated Use add_org_custodians (PUT) to add, or reset_org_custodians (POST) to replace all custodians.
   */
  async update_org_custodians(init?: OperationInit<"add_org_custodians">): Promise<OperationData<"add_org_custodians">> {
    return this.client.requestOperation("add_org_custodians", "put", "/orgs/{org_id}/custodians", init);
  }`;

const marketplaceCompat = `
  /** Create a marketplace domain. Same route as create_domains (POST /marketplace/domains). */
  async create_domain(init?: OperationInit<"create_domains">): Promise<OperationData<"create_domains">> {
    return this.client.requestOperation("create_domains", "post", "/marketplace/domains", init);
  }

  /**
   * Update custodians for a marketplace domain.
   *
   * @deprecated Use add_domain_custodians (PUT) to add, or reset_domain_custodians (POST) to replace all custodians.
   */
  async update_domain_custodians(init?: OperationInit<"add_domain_custodians">): Promise<OperationData<"add_domain_custodians">> {
    return this.client.requestOperation("add_domain_custodians", "put", "/marketplace/domains/{domain_id}/custodians", init);
  }`;

export const manualMethods = {
  users: [usersAuditLog],
  organizations: [organizationsAuditLog, organizationsUpdateCustodians],
  marketplace: [marketplaceCompat],
  flows: [flowsCopyAndReplaceCredentials],
};

export default manualMethods;
