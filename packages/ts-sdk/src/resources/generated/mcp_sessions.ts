import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class McpSessionsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"index_mcp_sessions">): Promise<OperationData<"index_mcp_sessions">> {
    return this.client.requestOperation("index_mcp_sessions", "get", "/mcp_sessions", init);
  }

  async create(init?: OperationInit<"create_mcp_session">): Promise<OperationData<"create_mcp_session">> {
    return this.client.requestOperation("create_mcp_session", "post", "/mcp_sessions", init);
  }

  async get(init?: OperationInit<"show_mcp_session">): Promise<OperationData<"show_mcp_session">> {
    return this.client.requestOperation("show_mcp_session", "get", "/mcp_sessions/{session_id}", init);
  }

  async update(init?: OperationInit<"mcp_sessions_update_mcp_session_put">): Promise<OperationData<"mcp_sessions_update_mcp_session_put">> {
    return this.client.requestOperation("mcp_sessions_update_mcp_session_put", "put", "/mcp_sessions/{session_id}", init);
  }

  async delete(init?: OperationInit<"delete_mcp_session">): Promise<OperationData<"delete_mcp_session">> {
    return this.client.requestOperation("delete_mcp_session", "delete", "/mcp_sessions/{session_id}", init);
  }

  /** Create Mcp Session */
  async create_mcp_session(init?: OperationInit<"create_mcp_session">): Promise<OperationData<"create_mcp_session">> {
    return this.client.requestOperation("create_mcp_session", "post", "/mcp_sessions", init);
  }

  /** Delete Mcp Session */
  async delete_mcp_session(init?: OperationInit<"delete_mcp_session">): Promise<OperationData<"delete_mcp_session">> {
    return this.client.requestOperation("delete_mcp_session", "delete", "/mcp_sessions/{session_id}", init);
  }

  /** Index Mcp Sessions */
  async index_mcp_sessions(init?: OperationInit<"index_mcp_sessions">): Promise<OperationData<"index_mcp_sessions">> {
    return this.client.requestOperation("index_mcp_sessions", "get", "/mcp_sessions", init);
  }

  /** Update Mcp Session */
  async mcp_sessions_update_mcp_session(init?: OperationInit<"mcp_sessions_update_mcp_session">): Promise<OperationData<"mcp_sessions_update_mcp_session">> {
    return this.client.requestOperation("mcp_sessions_update_mcp_session", "patch", "/mcp_sessions/{session_id}", init);
  }

  /** Update Mcp Session */
  async mcp_sessions_update_mcp_session_put(init?: OperationInit<"mcp_sessions_update_mcp_session_put">): Promise<OperationData<"mcp_sessions_update_mcp_session_put">> {
    return this.client.requestOperation("mcp_sessions_update_mcp_session_put", "put", "/mcp_sessions/{session_id}", init);
  }

  /** Show Mcp Session */
  async show_mcp_session(init?: OperationInit<"show_mcp_session">): Promise<OperationData<"show_mcp_session">> {
    return this.client.requestOperation("show_mcp_session", "get", "/mcp_sessions/{session_id}", init);
  }
}