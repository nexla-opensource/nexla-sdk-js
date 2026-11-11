import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class CatalogConfigsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_catalog_configs">): Promise<OperationData<"list_catalog_configs">> {
    return this.client.requestOperation("list_catalog_configs", "get", "/catalog_configs", init);
  }

  async create(init?: OperationInit<"create_catalog_config">): Promise<OperationData<"create_catalog_config">> {
    return this.client.requestOperation("create_catalog_config", "post", "/catalog_configs", init);
  }

  async get(init?: OperationInit<"get_catalog_config">): Promise<OperationData<"get_catalog_config">> {
    return this.client.requestOperation("get_catalog_config", "get", "/catalog_configs/{catalog_config_id}", init);
  }

  async update(init?: OperationInit<"catalog_configs_update_catalog_config_put">): Promise<OperationData<"catalog_configs_update_catalog_config_put">> {
    return this.client.requestOperation("catalog_configs_update_catalog_config_put", "put", "/catalog_configs/{catalog_config_id}", init);
  }

  async delete(init?: OperationInit<"delete_catalog_config">): Promise<OperationData<"delete_catalog_config">> {
    return this.client.requestOperation("delete_catalog_config", "delete", "/catalog_configs/{catalog_config_id}", init);
  }

  /** Bulk Create Update Catalog Refs */
  async bulk_create_update_catalog_refs(init?: OperationInit<"bulk_create_update_catalog_refs">): Promise<OperationData<"bulk_create_update_catalog_refs">> {
    return this.client.requestOperation("bulk_create_update_catalog_refs", "get", "/catalog_configs/{catalog_config_id}/bulk_create_update_refs", init);
  }

  /** Add Catalog config Docs */
  async catalog_configs_add_resource_docs(init?: OperationInit<"catalog_configs_add_resource_docs">): Promise<OperationData<"catalog_configs_add_resource_docs">> {
    return this.client.requestOperation("catalog_configs_add_resource_docs", "put", "/catalog_configs/{resource_id}/docs", init);
  }

  /** List Catalog config Docs */
  async catalog_configs_list_resource_docs(init?: OperationInit<"catalog_configs_list_resource_docs">): Promise<OperationData<"catalog_configs_list_resource_docs">> {
    return this.client.requestOperation("catalog_configs_list_resource_docs", "get", "/catalog_configs/{resource_id}/docs", init);
  }

  /** Remove Catalog config Docs */
  async catalog_configs_remove_resource_docs(init?: OperationInit<"catalog_configs_remove_resource_docs">): Promise<OperationData<"catalog_configs_remove_resource_docs">> {
    return this.client.requestOperation("catalog_configs_remove_resource_docs", "delete", "/catalog_configs/{resource_id}/docs", init);
  }

  /** Reset Catalog config Docs */
  async catalog_configs_reset_resource_docs(init?: OperationInit<"catalog_configs_reset_resource_docs">): Promise<OperationData<"catalog_configs_reset_resource_docs">> {
    return this.client.requestOperation("catalog_configs_reset_resource_docs", "post", "/catalog_configs/{resource_id}/docs", init);
  }

  /** Update Catalog Config */
  async catalog_configs_update_catalog_config(init?: OperationInit<"catalog_configs_update_catalog_config">): Promise<OperationData<"catalog_configs_update_catalog_config">> {
    return this.client.requestOperation("catalog_configs_update_catalog_config", "patch", "/catalog_configs/{catalog_config_id}", init);
  }

  /** Update Catalog Config */
  async catalog_configs_update_catalog_config_put(init?: OperationInit<"catalog_configs_update_catalog_config_put">): Promise<OperationData<"catalog_configs_update_catalog_config_put">> {
    return this.client.requestOperation("catalog_configs_update_catalog_config_put", "put", "/catalog_configs/{catalog_config_id}", init);
  }

  /** Check Job Status */
  async check_job_status(init?: OperationInit<"check_job_status">): Promise<OperationData<"check_job_status">> {
    return this.client.requestOperation("check_job_status", "get", "/catalog_configs/{catalog_config_id}/check_job_status", init);
  }

  /** Create Catalog Config */
  async create_catalog_config(init?: OperationInit<"create_catalog_config">): Promise<OperationData<"create_catalog_config">> {
    return this.client.requestOperation("create_catalog_config", "post", "/catalog_configs", init);
  }

  /** Delete Catalog Config */
  async delete_catalog_config(init?: OperationInit<"delete_catalog_config">): Promise<OperationData<"delete_catalog_config">> {
    return this.client.requestOperation("delete_catalog_config", "delete", "/catalog_configs/{catalog_config_id}", init);
  }

  /** Get Catalog Config */
  async get_catalog_config(init?: OperationInit<"get_catalog_config">): Promise<OperationData<"get_catalog_config">> {
    return this.client.requestOperation("get_catalog_config", "get", "/catalog_configs/{catalog_config_id}", init);
  }

  /** List All Catalog Configs */
  async list_all_catalog_configs(init?: OperationInit<"list_all_catalog_configs">): Promise<OperationData<"list_all_catalog_configs">> {
    return this.client.requestOperation("list_all_catalog_configs", "get", "/catalog_configs/all", init);
  }

  /** List Catalog Configs */
  async list_catalog_configs(init?: OperationInit<"list_catalog_configs">): Promise<OperationData<"list_catalog_configs">> {
    return this.client.requestOperation("list_catalog_configs", "get", "/catalog_configs", init);
  }
}