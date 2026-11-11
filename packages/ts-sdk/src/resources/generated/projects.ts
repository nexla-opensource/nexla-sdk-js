import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ProjectsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_projects">): Promise<OperationData<"get_projects">> {
    return this.client.requestOperation("get_projects", "get", "/projects", init);
  }

  async create(init?: OperationInit<"create_project">): Promise<OperationData<"create_project">> {
    return this.client.requestOperation("create_project", "post", "/projects", init);
  }

  async get(init?: OperationInit<"get_project">): Promise<OperationData<"get_project">> {
    return this.client.requestOperation("get_project", "get", "/projects/{project_id}", init);
  }

  async update(init?: OperationInit<"update_project">): Promise<OperationData<"update_project">> {
    return this.client.requestOperation("update_project", "put", "/projects/{project_id}", init);
  }

  async delete(init?: OperationInit<"delete_project">): Promise<OperationData<"delete_project">> {
    return this.client.requestOperation("delete_project", "delete", "/projects/{project_id}", init);
  }

  /** Add Flows to Project */
  async add_project_flows(init?: OperationInit<"add_project_flows">): Promise<OperationData<"add_project_flows">> {
    return this.client.requestOperation("add_project_flows", "put", "/projects/{project_id}/flows", init);
  }

  /**
   * Add Flows to Project (Deprecated)
   *
   * @deprecated No backend route exists for this path. Calls fail.
   */
  async ["add_project_flows_(deprecated)"](init?: OperationInit<"add_project_flows_(deprecated)">): Promise<OperationData<"add_project_flows_(deprecated)">> {
    return this.client.requestOperation("add_project_flows_(deprecated)", "put", "/projects/{project_id}/data_flows", init);
  }

  /** Copy Project */
  async copy_project(init?: OperationInit<"copy_project">): Promise<OperationData<"copy_project">> {
    return this.client.requestOperation("copy_project", "post", "/projects/{project_id}/copy", init);
  }

  /** Create a project */
  async create_project(init?: OperationInit<"create_project">): Promise<OperationData<"create_project">> {
    return this.client.requestOperation("create_project", "post", "/projects", init);
  }

  /** Delete Project by ID */
  async delete_project(init?: OperationInit<"delete_project">): Promise<OperationData<"delete_project">> {
    return this.client.requestOperation("delete_project", "delete", "/projects/{project_id}", init);
  }

  /** Explain Project Access */
  async explain_project_access(init?: OperationInit<"explain_project_access">): Promise<OperationData<"explain_project_access">> {
    return this.client.requestOperation("explain_project_access", "get", "/projects/{project_id}/access", init);
  }

  /** Explain Project Resources Access Route */
  async explain_project_resources_access_route(init?: OperationInit<"explain_project_resources_access_route">): Promise<OperationData<"explain_project_resources_access_route">> {
    return this.client.requestOperation("explain_project_resources_access_route", "get", "/projects/{project_id}/resources_access", init);
  }

  /** Get Project by ID */
  async get_project(init?: OperationInit<"get_project">): Promise<OperationData<"get_project">> {
    return this.client.requestOperation("get_project", "get", "/projects/{project_id}", init);
  }

  /** Get Project Flows */
  async get_project_flows(init?: OperationInit<"get_project_flows">): Promise<OperationData<"get_project_flows">> {
    return this.client.requestOperation("get_project_flows", "get", "/projects/{project_id}/flows", init);
  }

  /**
   * Get Project Flows (Deprecated)
   *
   * @deprecated No backend route exists for this path. Calls fail.
   */
  async ["get_project_flows_(deprecated)"](init?: OperationInit<"get_project_flows_(deprecated)">): Promise<OperationData<"get_project_flows_(deprecated)">> {
    return this.client.requestOperation("get_project_flows_(deprecated)", "get", "/projects/{project_id}/data_flows", init);
  }

  /** Get all Projects */
  async get_projects(init?: OperationInit<"get_projects">): Promise<OperationData<"get_projects">> {
    return this.client.requestOperation("get_projects", "get", "/projects", init);
  }

  /** Accessible Resources */
  async projects_accessible_resources(init?: OperationInit<"projects_accessible_resources">): Promise<OperationData<"projects_accessible_resources">> {
    return this.client.requestOperation("projects_accessible_resources", "get", "/projects/accessible", init);
  }

  /** Add Project Docs */
  async projects_add_resource_docs(init?: OperationInit<"projects_add_resource_docs">): Promise<OperationData<"projects_add_resource_docs">> {
    return this.client.requestOperation("projects_add_resource_docs", "put", "/projects/{resource_id}/docs", init);
  }

  /** Add Project Tags */
  async projects_add_resource_tags(init?: OperationInit<"projects_add_resource_tags">): Promise<OperationData<"projects_add_resource_tags">> {
    return this.client.requestOperation("projects_add_resource_tags", "post", "/projects/{resource_id}/tags", init);
  }

  /** Remove Project Tags */
  async projects_delete_resource_tags(init?: OperationInit<"projects_delete_resource_tags">): Promise<OperationData<"projects_delete_resource_tags">> {
    return this.client.requestOperation("projects_delete_resource_tags", "delete", "/projects/{resource_id}/tags", init);
  }

  /** Get Project Tags */
  async projects_get_resource_tags(init?: OperationInit<"projects_get_resource_tags">): Promise<OperationData<"projects_get_resource_tags">> {
    return this.client.requestOperation("projects_get_resource_tags", "get", "/projects/{resource_id}/tags", init);
  }

  /** List Project Docs */
  async projects_list_resource_docs(init?: OperationInit<"projects_list_resource_docs">): Promise<OperationData<"projects_list_resource_docs">> {
    return this.client.requestOperation("projects_list_resource_docs", "get", "/projects/{resource_id}/docs", init);
  }

  /** Remove Project Docs */
  async projects_remove_resource_docs(init?: OperationInit<"projects_remove_resource_docs">): Promise<OperationData<"projects_remove_resource_docs">> {
    return this.client.requestOperation("projects_remove_resource_docs", "delete", "/projects/{resource_id}/docs", init);
  }

  /** Reset Project Docs */
  async projects_reset_resource_docs(init?: OperationInit<"projects_reset_resource_docs">): Promise<OperationData<"projects_reset_resource_docs">> {
    return this.client.requestOperation("projects_reset_resource_docs", "post", "/projects/{resource_id}/docs", init);
  }

  /** Update Project */
  async projects_update_project(init?: OperationInit<"projects_update_project">): Promise<OperationData<"projects_update_project">> {
    return this.client.requestOperation("projects_update_project", "patch", "/projects/{project_id}", init);
  }

  /** Update Project Tags */
  async projects_update_resource_tags(init?: OperationInit<"projects_update_resource_tags">): Promise<OperationData<"projects_update_resource_tags">> {
    return this.client.requestOperation("projects_update_resource_tags", "put", "/projects/{resource_id}/tags", init);
  }

  /** Users Access Insights */
  async projects_users_access_insights(init?: OperationInit<"projects_users_access_insights">): Promise<OperationData<"projects_users_access_insights">> {
    return this.client.requestOperation("projects_users_access_insights", "get", "/projects/{resource_id}/users_access_insights", init);
  }

  /** Remove Flows From A Project */
  async remove_project_flows(init?: OperationInit<"remove_project_flows">): Promise<OperationData<"remove_project_flows">> {
    return this.client.requestOperation("remove_project_flows", "delete", "/projects/{project_id}/flows", init);
  }

  /**
   * Remove Flows From A Project (Deprecated)
   *
   * @deprecated No backend route exists for this path. Calls fail.
   */
  async ["remove_project_flows_(deprecated)"](init?: OperationInit<"remove_project_flows_(deprecated)">): Promise<OperationData<"remove_project_flows_(deprecated)">> {
    return this.client.requestOperation("remove_project_flows_(deprecated)", "delete", "/projects/{project_id}/data_flows", init);
  }

  /** Replace Project Flows List */
  async replace_project_flows(init?: OperationInit<"replace_project_flows">): Promise<OperationData<"replace_project_flows">> {
    return this.client.requestOperation("replace_project_flows", "post", "/projects/{project_id}/flows", init);
  }

  /**
   * Replace Project Flows List (Deprecated)
   *
   * @deprecated No backend route exists for this path. Calls fail.
   */
  async ["replace_project_flows_(deprecated)"](init?: OperationInit<"replace_project_flows_(deprecated)">): Promise<OperationData<"replace_project_flows_(deprecated)">> {
    return this.client.requestOperation("replace_project_flows_(deprecated)", "post", "/projects/{project_id}/data_flows", init);
  }

  /** Search Project Flows */
  async search_project_flows(init?: OperationInit<"search_project_flows">): Promise<OperationData<"search_project_flows">> {
    return this.client.requestOperation("search_project_flows", "post", "/projects/{project_id}/flows/search", init);
  }

  /** Search Projects */
  async search_projects(init?: OperationInit<"search_projects">): Promise<OperationData<"search_projects">> {
    return this.client.requestOperation("search_projects", "post", "/projects/search", init);
  }

  /** Search Projects By Tags */
  async search_projects_by_tags(init?: OperationInit<"search_projects_by_tags">): Promise<OperationData<"search_projects_by_tags">> {
    return this.client.requestOperation("search_projects_by_tags", "post", "/projects/search_tags", init);
  }

  /** Modify a Project */
  async update_project(init?: OperationInit<"update_project">): Promise<OperationData<"update_project">> {
    return this.client.requestOperation("update_project", "put", "/projects/{project_id}", init);
  }
}