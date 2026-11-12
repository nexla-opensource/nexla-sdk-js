import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class CodeContainersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_code_containers">): Promise<OperationData<"get_code_containers">> {
    return this.client.requestOperation("get_code_containers", "get", "/code_containers", init);
  }

  async create(init?: OperationInit<"create_code_container">): Promise<OperationData<"create_code_container">> {
    return this.client.requestOperation("create_code_container", "post", "/code_containers", init);
  }

  async get(init?: OperationInit<"get_code_container">): Promise<OperationData<"get_code_container">> {
    return this.client.requestOperation("get_code_container", "get", "/code_containers/{code_container_id}", init);
  }

  async update(init?: OperationInit<"update_code_container">): Promise<OperationData<"update_code_container">> {
    return this.client.requestOperation("update_code_container", "put", "/code_containers/{code_container_id}", init);
  }

  async delete(init?: OperationInit<"delete_code_container">): Promise<OperationData<"delete_code_container">> {
    return this.client.requestOperation("delete_code_container", "delete", "/code_containers/{code_container_id}", init);
  }

  /** Accessible Resources */
  async code_containers_accessible_resources(init?: OperationInit<"code_containers_accessible_resources">): Promise<OperationData<"code_containers_accessible_resources">> {
    return this.client.requestOperation("code_containers_accessible_resources", "get", "/code_containers/accessible", init);
  }

  /** Add Code container Docs */
  async code_containers_add_resource_docs(init?: OperationInit<"code_containers_add_resource_docs">): Promise<OperationData<"code_containers_add_resource_docs">> {
    return this.client.requestOperation("code_containers_add_resource_docs", "put", "/code_containers/{resource_id}/docs", init);
  }

  /** Add Code container Tags */
  async code_containers_add_resource_tags(init?: OperationInit<"code_containers_add_resource_tags">): Promise<OperationData<"code_containers_add_resource_tags">> {
    return this.client.requestOperation("code_containers_add_resource_tags", "post", "/code_containers/{resource_id}/tags", init);
  }

  /** Remove Code container Tags */
  async code_containers_delete_resource_tags(init?: OperationInit<"code_containers_delete_resource_tags">): Promise<OperationData<"code_containers_delete_resource_tags">> {
    return this.client.requestOperation("code_containers_delete_resource_tags", "delete", "/code_containers/{resource_id}/tags", init);
  }

  /** Explain Access */
  async code_containers_explain_access(init?: OperationInit<"code_containers_explain_access">): Promise<OperationData<"code_containers_explain_access">> {
    return this.client.requestOperation("code_containers_explain_access", "get", "/code_containers/{resource_id}/access", init);
  }

  /** Get Code container Tags */
  async code_containers_get_resource_tags(init?: OperationInit<"code_containers_get_resource_tags">): Promise<OperationData<"code_containers_get_resource_tags">> {
    return this.client.requestOperation("code_containers_get_resource_tags", "get", "/code_containers/{resource_id}/tags", init);
  }

  /** List Code container Docs */
  async code_containers_list_resource_docs(init?: OperationInit<"code_containers_list_resource_docs">): Promise<OperationData<"code_containers_list_resource_docs">> {
    return this.client.requestOperation("code_containers_list_resource_docs", "get", "/code_containers/{resource_id}/docs", init);
  }

  /** Referenced By */
  async code_containers_referenced_by(init?: OperationInit<"code_containers_referenced_by">): Promise<OperationData<"code_containers_referenced_by">> {
    return this.client.requestOperation("code_containers_referenced_by", "get", "/code_containers/{resource_id}/referenced_by", init);
  }

  /** Remove Code container Docs */
  async code_containers_remove_resource_docs(init?: OperationInit<"code_containers_remove_resource_docs">): Promise<OperationData<"code_containers_remove_resource_docs">> {
    return this.client.requestOperation("code_containers_remove_resource_docs", "delete", "/code_containers/{resource_id}/docs", init);
  }

  /** Reset Code container Docs */
  async code_containers_reset_resource_docs(init?: OperationInit<"code_containers_reset_resource_docs">): Promise<OperationData<"code_containers_reset_resource_docs">> {
    return this.client.requestOperation("code_containers_reset_resource_docs", "post", "/code_containers/{resource_id}/docs", init);
  }

  /** Update Code Container */
  async code_containers_update_code_container(init?: OperationInit<"code_containers_update_code_container">): Promise<OperationData<"code_containers_update_code_container">> {
    return this.client.requestOperation("code_containers_update_code_container", "patch", "/code_containers/{code_container_id}", init);
  }

  /** Update Code container Tags */
  async code_containers_update_resource_tags(init?: OperationInit<"code_containers_update_resource_tags">): Promise<OperationData<"code_containers_update_resource_tags">> {
    return this.client.requestOperation("code_containers_update_resource_tags", "put", "/code_containers/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async code_containers_users_access_insights(init?: OperationInit<"code_containers_users_access_insights">): Promise<OperationData<"code_containers_users_access_insights">> {
    return this.client.requestOperation("code_containers_users_access_insights", "get", "/code_containers/{resource_id}/users_access_insights", init);
  }

  /** Copy a Code Container */
  async copy_code_container(init?: OperationInit<"copy_code_container">): Promise<OperationData<"copy_code_container">> {
    return this.client.requestOperation("copy_code_container", "post", "/code_containers/{code_container_id}/copy", init);
  }

  /** Create a Code Container */
  async create_code_container(init?: OperationInit<"create_code_container">): Promise<OperationData<"create_code_container">> {
    return this.client.requestOperation("create_code_container", "post", "/code_containers", init);
  }

  /** Delete a Code Container */
  async delete_code_container(init?: OperationInit<"delete_code_container">): Promise<OperationData<"delete_code_container">> {
    return this.client.requestOperation("delete_code_container", "delete", "/code_containers/{code_container_id}", init);
  }

  /** Get Code Container by ID */
  async get_code_container(init?: OperationInit<"get_code_container">): Promise<OperationData<"get_code_container">> {
    return this.client.requestOperation("get_code_container", "get", "/code_containers/{code_container_id}", init);
  }

  /** Get Code Container Repo */
  async get_code_container_repo(init?: OperationInit<"get_code_container_repo">): Promise<OperationData<"get_code_container_repo">> {
    return this.client.requestOperation("get_code_container_repo", "get", "/code_containers/{code_container_id}/repo", init);
  }

  /** Get Code Container Schema */
  async get_code_container_schema(init?: OperationInit<"get_code_container_schema">): Promise<OperationData<"get_code_container_schema">> {
    return this.client.requestOperation("get_code_container_schema", "get", "/code_containers/schema", init);
  }

  /** Get all Code Containers */
  async get_code_containers(init?: OperationInit<"get_code_containers">): Promise<OperationData<"get_code_containers">> {
    return this.client.requestOperation("get_code_containers", "get", "/code_containers", init);
  }

  /** Get all Public Code Containers */
  async get_public_code_containers(init?: OperationInit<"get_public_code_containers">): Promise<OperationData<"get_public_code_containers">> {
    return this.client.requestOperation("get_public_code_containers", "get", "/code_containers/public", init);
  }

  /** Search Code Containers */
  async search_code_containers(init?: OperationInit<"search_code_containers">): Promise<OperationData<"search_code_containers">> {
    return this.client.requestOperation("search_code_containers", "post", "/code_containers/search", init);
  }

  /** Search Code Containers Tags */
  async search_code_containers_tags(init?: OperationInit<"search_code_containers_tags">): Promise<OperationData<"search_code_containers_tags">> {
    return this.client.requestOperation("search_code_containers_tags", "post", "/code_containers/search_tags", init);
  }

  /** Update a Code Container */
  async update_code_container(init?: OperationInit<"update_code_container">): Promise<OperationData<"update_code_container">> {
    return this.client.requestOperation("update_code_container", "put", "/code_containers/{code_container_id}", init);
  }
}