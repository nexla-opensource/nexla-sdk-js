import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class TokensResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Get info on current user */
  async get_current_user(init?: OperationInit<"get_current_user">): Promise<OperationData<"get_current_user">> {
    return this.client.requestOperation("get_current_user", "get", "/users/current", init);
  }

  /** Login with Basic Authentication */
  async login_with_basic_auth(init?: OperationInit<"login_with_basic_auth">): Promise<OperationData<"login_with_basic_auth">> {
    return this.client.requestOperation("login_with_basic_auth", "post", "/token", withSkipAuth(init));
  }

  /** Logout */
  async logout(init?: OperationInit<"logout">): Promise<OperationData<"logout">> {
    return this.client.requestOperation("logout", "post", "/token/logout", init);
  }

  /** IDP Token */
  async token_create_idp_token(init?: OperationInit<"token_create_idp_token">): Promise<OperationData<"token_create_idp_token">> {
    return this.client.requestOperation("token_create_idp_token", "post", "/token/{uid}", init);
  }

  /** IDP Token */
  async token_create_idp_token_put(init?: OperationInit<"token_create_idp_token_put">): Promise<OperationData<"token_create_idp_token_put">> {
    return this.client.requestOperation("token_create_idp_token_put", "put", "/token/{uid}", init);
  }

  /** Generate Token */
  async token_create_token(init?: OperationInit<"token_create_token">): Promise<OperationData<"token_create_token">> {
    return this.client.requestOperation("token_create_token", "put", "/token", init);
  }

  /** Logout */
  async token_logout_token(init?: OperationInit<"token_logout_token">): Promise<OperationData<"token_logout_token">> {
    return this.client.requestOperation("token_logout_token", "put", "/token/logout", init);
  }

  /** Refresh Token */
  async token_refresh_token(init?: OperationInit<"token_refresh_token">): Promise<OperationData<"token_refresh_token">> {
    return this.client.requestOperation("token_refresh_token", "put", "/token/refresh", init);
  }

  /** Refresh Token */
  async token_refresh_token_post(init?: OperationInit<"token_refresh_token_post">): Promise<OperationData<"token_refresh_token_post">> {
    return this.client.requestOperation("token_refresh_token_post", "post", "/token/refresh", init);
  }
}