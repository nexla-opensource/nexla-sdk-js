import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class DocContainersResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async get(init?: OperationInit<"show_doc_container">): Promise<OperationData<"show_doc_container">> {
    return this.client.requestOperation("show_doc_container", "get", "/doc_containers/{doc_container_id}", init);
  }

  async update(init?: OperationInit<"doc_containers_update_doc_container_put">): Promise<OperationData<"doc_containers_update_doc_container_put">> {
    return this.client.requestOperation("doc_containers_update_doc_container_put", "put", "/doc_containers/{doc_container_id}", init);
  }

  async delete(init?: OperationInit<"destroy_doc_container">): Promise<OperationData<"destroy_doc_container">> {
    return this.client.requestOperation("destroy_doc_container", "delete", "/doc_containers/{doc_container_id}", init);
  }

  /** Copy Doc Container */
  async copy_doc_container(init?: OperationInit<"copy_doc_container">): Promise<OperationData<"copy_doc_container">> {
    return this.client.requestOperation("copy_doc_container", "post", "/doc_containers/{doc_container_id}/copy", init);
  }

  /** Create Doc Container */
  async create_doc_container(init?: OperationInit<"create_doc_container">): Promise<OperationData<"create_doc_container">> {
    return this.client.requestOperation("create_doc_container", "post", "/doc_containers/", init);
  }

  /** Destroy Doc Container */
  async destroy_doc_container(init?: OperationInit<"destroy_doc_container">): Promise<OperationData<"destroy_doc_container">> {
    return this.client.requestOperation("destroy_doc_container", "delete", "/doc_containers/{doc_container_id}", init);
  }

  /** Accessible Resources */
  async doc_containers_accessible_resources(init?: OperationInit<"doc_containers_accessible_resources">): Promise<OperationData<"doc_containers_accessible_resources">> {
    return this.client.requestOperation("doc_containers_accessible_resources", "get", "/doc_containers/accessible", init);
  }

  /** Add Doc container Tags */
  async doc_containers_add_resource_tags(init?: OperationInit<"doc_containers_add_resource_tags">): Promise<OperationData<"doc_containers_add_resource_tags">> {
    return this.client.requestOperation("doc_containers_add_resource_tags", "post", "/doc_containers/{resource_id}/tags", init);
  }

  /** Remove Doc container Tags */
  async doc_containers_delete_resource_tags(init?: OperationInit<"doc_containers_delete_resource_tags">): Promise<OperationData<"doc_containers_delete_resource_tags">> {
    return this.client.requestOperation("doc_containers_delete_resource_tags", "delete", "/doc_containers/{resource_id}/tags", init);
  }

  /** Explain Access */
  async doc_containers_explain_access(init?: OperationInit<"doc_containers_explain_access">): Promise<OperationData<"doc_containers_explain_access">> {
    return this.client.requestOperation("doc_containers_explain_access", "get", "/doc_containers/{resource_id}/access", init);
  }

  /** Get Doc container Tags */
  async doc_containers_get_resource_tags(init?: OperationInit<"doc_containers_get_resource_tags">): Promise<OperationData<"doc_containers_get_resource_tags">> {
    return this.client.requestOperation("doc_containers_get_resource_tags", "get", "/doc_containers/{resource_id}/tags", init);
  }

  /** Update Doc Container */
  async doc_containers_update_doc_container(init?: OperationInit<"doc_containers_update_doc_container">): Promise<OperationData<"doc_containers_update_doc_container">> {
    return this.client.requestOperation("doc_containers_update_doc_container", "patch", "/doc_containers/{doc_container_id}", init);
  }

  /** Update Doc Container */
  async doc_containers_update_doc_container_put(init?: OperationInit<"doc_containers_update_doc_container_put">): Promise<OperationData<"doc_containers_update_doc_container_put">> {
    return this.client.requestOperation("doc_containers_update_doc_container_put", "put", "/doc_containers/{doc_container_id}", init);
  }

  /** Update Doc container Tags */
  async doc_containers_update_resource_tags(init?: OperationInit<"doc_containers_update_resource_tags">): Promise<OperationData<"doc_containers_update_resource_tags">> {
    return this.client.requestOperation("doc_containers_update_resource_tags", "put", "/doc_containers/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async doc_containers_users_access_insights(init?: OperationInit<"doc_containers_users_access_insights">): Promise<OperationData<"doc_containers_users_access_insights">> {
    return this.client.requestOperation("doc_containers_users_access_insights", "get", "/doc_containers/{resource_id}/users_access_insights", init);
  }

  /** Index Doc Containers */
  async index_doc_containers(init?: OperationInit<"index_doc_containers">): Promise<OperationData<"index_doc_containers">> {
    return this.client.requestOperation("index_doc_containers", "get", "/doc_containers/", init);
  }

  /** Search Doc Containers */
  async search_doc_containers(init?: OperationInit<"search_doc_containers">): Promise<OperationData<"search_doc_containers">> {
    return this.client.requestOperation("search_doc_containers", "post", "/doc_containers/search", init);
  }

  /** Search Doc Containers Tags */
  async search_doc_containers_tags(init?: OperationInit<"search_doc_containers_tags">): Promise<OperationData<"search_doc_containers_tags">> {
    return this.client.requestOperation("search_doc_containers_tags", "post", "/doc_containers/search_tags", init);
  }

  /** Show Doc Container */
  async show_doc_container(init?: OperationInit<"show_doc_container">): Promise<OperationData<"show_doc_container">> {
    return this.client.requestOperation("show_doc_container", "get", "/doc_containers/{doc_container_id}", init);
  }
}