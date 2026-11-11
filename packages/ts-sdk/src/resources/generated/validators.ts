import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ValidatorsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"list_validators">): Promise<OperationData<"list_validators">> {
    return this.client.requestOperation("list_validators", "get", "/validators", init);
  }

  async create(init?: OperationInit<"create_validator">): Promise<OperationData<"create_validator">> {
    return this.client.requestOperation("create_validator", "post", "/validators", init);
  }

  async get(init?: OperationInit<"get_validator">): Promise<OperationData<"get_validator">> {
    return this.client.requestOperation("get_validator", "get", "/validators/{validator_id}", init);
  }

  async update(init?: OperationInit<"validators_update_validator_put">): Promise<OperationData<"validators_update_validator_put">> {
    return this.client.requestOperation("validators_update_validator_put", "put", "/validators/{validator_id}", init);
  }

  async delete(init?: OperationInit<"delete_validator">): Promise<OperationData<"delete_validator">> {
    return this.client.requestOperation("delete_validator", "delete", "/validators/{validator_id}", init);
  }

  /** Copy Validator */
  async copy_validator(init?: OperationInit<"copy_validator">): Promise<OperationData<"copy_validator">> {
    return this.client.requestOperation("copy_validator", "post", "/validators/{validator_id}/copy", init);
  }

  /** Create Validator */
  async create_validator(init?: OperationInit<"create_validator">): Promise<OperationData<"create_validator">> {
    return this.client.requestOperation("create_validator", "post", "/validators", init);
  }

  /** Delete Validator */
  async delete_validator(init?: OperationInit<"delete_validator">): Promise<OperationData<"delete_validator">> {
    return this.client.requestOperation("delete_validator", "delete", "/validators/{validator_id}", init);
  }

  /** Get Validator */
  async get_validator(init?: OperationInit<"get_validator">): Promise<OperationData<"get_validator">> {
    return this.client.requestOperation("get_validator", "get", "/validators/{validator_id}", init);
  }

  /** Get Validator Schema */
  async get_validator_schema(init?: OperationInit<"get_validator_schema">): Promise<OperationData<"get_validator_schema">> {
    return this.client.requestOperation("get_validator_schema", "get", "/validators/schema", init);
  }

  /** List Public Validators */
  async list_public_validators(init?: OperationInit<"list_public_validators">): Promise<OperationData<"list_public_validators">> {
    return this.client.requestOperation("list_public_validators", "get", "/validators/public", init);
  }

  /** List Validators */
  async list_validators(init?: OperationInit<"list_validators">): Promise<OperationData<"list_validators">> {
    return this.client.requestOperation("list_validators", "get", "/validators", init);
  }

  /** Search Validators */
  async search_validators(init?: OperationInit<"search_validators">): Promise<OperationData<"search_validators">> {
    return this.client.requestOperation("search_validators", "post", "/validators/search", init);
  }

  /** Accessible Resources */
  async validators_accessible_resources(init?: OperationInit<"validators_accessible_resources">): Promise<OperationData<"validators_accessible_resources">> {
    return this.client.requestOperation("validators_accessible_resources", "get", "/validators/accessible", init);
  }

  /** Add Validator Accessor */
  async validators_add_accessor(init?: OperationInit<"validators_add_accessor">): Promise<OperationData<"validators_add_accessor">> {
    return this.client.requestOperation("validators_add_accessor", "post", "/validators/{resource_id}/accessors", init);
  }

  /** Add Validator Tags */
  async validators_add_resource_tags(init?: OperationInit<"validators_add_resource_tags">): Promise<OperationData<"validators_add_resource_tags">> {
    return this.client.requestOperation("validators_add_resource_tags", "post", "/validators/{resource_id}/tags", init);
  }

  /** Remove Validator Tags */
  async validators_delete_resource_tags(init?: OperationInit<"validators_delete_resource_tags">): Promise<OperationData<"validators_delete_resource_tags">> {
    return this.client.requestOperation("validators_delete_resource_tags", "delete", "/validators/{resource_id}/tags", init);
  }

  /** List Validator Accessors */
  async validators_get_accessors(init?: OperationInit<"validators_get_accessors">): Promise<OperationData<"validators_get_accessors">> {
    return this.client.requestOperation("validators_get_accessors", "get", "/validators/{resource_id}/accessors", init);
  }

  /** Get Validator Tags */
  async validators_get_resource_tags(init?: OperationInit<"validators_get_resource_tags">): Promise<OperationData<"validators_get_resource_tags">> {
    return this.client.requestOperation("validators_get_resource_tags", "get", "/validators/{resource_id}/tags", init);
  }

  /** Remove Validator Accessor */
  async validators_remove_accessor_body(init?: OperationInit<"validators_remove_accessor_body">): Promise<OperationData<"validators_remove_accessor_body">> {
    return this.client.requestOperation("validators_remove_accessor_body", "delete", "/validators/{resource_id}/accessors", init);
  }

  /** Update Validator Accessors */
  async validators_update_accessors(init?: OperationInit<"validators_update_accessors">): Promise<OperationData<"validators_update_accessors">> {
    return this.client.requestOperation("validators_update_accessors", "put", "/validators/{resource_id}/accessors", init);
  }

  /** Update Validator Tags */
  async validators_update_resource_tags(init?: OperationInit<"validators_update_resource_tags">): Promise<OperationData<"validators_update_resource_tags">> {
    return this.client.requestOperation("validators_update_resource_tags", "put", "/validators/{resource_id}/tags", init);
  }

  /** Update Validator */
  async validators_update_validator(init?: OperationInit<"validators_update_validator">): Promise<OperationData<"validators_update_validator">> {
    return this.client.requestOperation("validators_update_validator", "patch", "/validators/{validator_id}", init);
  }

  /** Update Validator */
  async validators_update_validator_put(init?: OperationInit<"validators_update_validator_put">): Promise<OperationData<"validators_update_validator_put">> {
    return this.client.requestOperation("validators_update_validator_put", "put", "/validators/{validator_id}", init);
  }
}