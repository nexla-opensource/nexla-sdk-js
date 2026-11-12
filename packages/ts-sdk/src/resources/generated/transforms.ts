import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class TransformsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async list(init?: OperationInit<"get_reusable_record_transforms">): Promise<OperationData<"get_reusable_record_transforms">> {
    return this.client.requestOperation("get_reusable_record_transforms", "get", "/transforms", init);
  }

  async create(init?: OperationInit<"create_reusable_record_transform">): Promise<OperationData<"create_reusable_record_transform">> {
    return this.client.requestOperation("create_reusable_record_transform", "post", "/transforms", init);
  }

  async get(init?: OperationInit<"get_reusable_record_transform">): Promise<OperationData<"get_reusable_record_transform">> {
    return this.client.requestOperation("get_reusable_record_transform", "get", "/transforms/{transform_id}", init);
  }

  async update(init?: OperationInit<"update_reusable_record_transform">): Promise<OperationData<"update_reusable_record_transform">> {
    return this.client.requestOperation("update_reusable_record_transform", "put", "/transforms/{transform_id}", init);
  }

  async delete(init?: OperationInit<"delete_reusable_record_transform">): Promise<OperationData<"delete_reusable_record_transform">> {
    return this.client.requestOperation("delete_reusable_record_transform", "delete", "/transforms/{transform_id}", init);
  }

  /** Copy a Reusable Record Transform */
  async copy_transform(init?: OperationInit<"copy_transform">): Promise<OperationData<"copy_transform">> {
    return this.client.requestOperation("copy_transform", "post", "/transforms/{transform_id}/copy", init);
  }

  /** Create an Attribute Transform */
  async create_attribute_transform(init?: OperationInit<"create_attribute_transform">): Promise<OperationData<"create_attribute_transform">> {
    return this.client.requestOperation("create_attribute_transform", "post", "/attribute_transforms", init);
  }

  /** Create a Reusable Record Transform */
  async create_reusable_record_transform(init?: OperationInit<"create_reusable_record_transform">): Promise<OperationData<"create_reusable_record_transform">> {
    return this.client.requestOperation("create_reusable_record_transform", "post", "/transforms", init);
  }

  /** Delete an Attribute Transform */
  async delete_attribute_transform(init?: OperationInit<"delete_attribute_transform">): Promise<OperationData<"delete_attribute_transform">> {
    return this.client.requestOperation("delete_attribute_transform", "delete", "/attribute_transforms/{attribute_transform_id}", init);
  }

  /** Delete a Reusable Record Transform */
  async delete_reusable_record_transform(init?: OperationInit<"delete_reusable_record_transform">): Promise<OperationData<"delete_reusable_record_transform">> {
    return this.client.requestOperation("delete_reusable_record_transform", "delete", "/transforms/{transform_id}", init);
  }

  /** Get Attribute Transform by ID */
  async get_attribute_transform(init?: OperationInit<"get_attribute_transform">): Promise<OperationData<"get_attribute_transform">> {
    return this.client.requestOperation("get_attribute_transform", "get", "/attribute_transforms/{attribute_transform_id}", init);
  }

  /** Get all Attribute Transforms */
  async get_attribute_transforms(init?: OperationInit<"get_attribute_transforms">): Promise<OperationData<"get_attribute_transforms">> {
    return this.client.requestOperation("get_attribute_transforms", "get", "/attribute_transforms", init);
  }

  /** Get all Public Attribute Transforms */
  async get_public_attribute_transforms(init?: OperationInit<"get_public_attribute_transforms">): Promise<OperationData<"get_public_attribute_transforms">> {
    return this.client.requestOperation("get_public_attribute_transforms", "get", "/attribute_transforms/public", init);
  }

  /** Get all Public Reusable Record Transforms */
  async get_public_reusable_record_transforms(init?: OperationInit<"get_public_reusable_record_transforms">): Promise<OperationData<"get_public_reusable_record_transforms">> {
    return this.client.requestOperation("get_public_reusable_record_transforms", "get", "/transforms/public", init);
  }

  /** Get A Reusable Record Transform */
  async get_reusable_record_transform(init?: OperationInit<"get_reusable_record_transform">): Promise<OperationData<"get_reusable_record_transform">> {
    return this.client.requestOperation("get_reusable_record_transform", "get", "/transforms/{transform_id}", init);
  }

  /** Get all Reusable Record Transforms */
  async get_reusable_record_transforms(init?: OperationInit<"get_reusable_record_transforms">): Promise<OperationData<"get_reusable_record_transforms">> {
    return this.client.requestOperation("get_reusable_record_transforms", "get", "/transforms", init);
  }

  /** Search Transforms */
  async search_transforms(init?: OperationInit<"search_transforms">): Promise<OperationData<"search_transforms">> {
    return this.client.requestOperation("search_transforms", "post", "/transforms/search", init);
  }

  /** Accessible Resources */
  async transform_accessible_resources(init?: OperationInit<"transform_accessible_resources">): Promise<OperationData<"transform_accessible_resources">> {
    return this.client.requestOperation("transform_accessible_resources", "get", "/transform/accessible", init);
  }

  /** Execute Transform */
  async transform_execute_transform(init?: OperationInit<"transform_execute_transform">): Promise<OperationData<"transform_execute_transform">> {
    return this.client.requestOperation("transform_execute_transform", "put", "/transform/", init);
  }

  /** Execute Transform */
  async transform_execute_transform_post(init?: OperationInit<"transform_execute_transform_post">): Promise<OperationData<"transform_execute_transform_post">> {
    return this.client.requestOperation("transform_execute_transform_post", "post", "/transform/", init);
  }

  /** Get Transform Features */
  async transform_features(init?: OperationInit<"transform_features">): Promise<OperationData<"transform_features">> {
    return this.client.requestOperation("transform_features", "get", "/transform/features", init);
  }

  /** Add Transform Accessor */
  async transforms_add_accessor(init?: OperationInit<"transforms_add_accessor">): Promise<OperationData<"transforms_add_accessor">> {
    return this.client.requestOperation("transforms_add_accessor", "post", "/transforms/{resource_id}/accessors", init);
  }

  /** Add Transform Tags */
  async transforms_add_resource_tags(init?: OperationInit<"transforms_add_resource_tags">): Promise<OperationData<"transforms_add_resource_tags">> {
    return this.client.requestOperation("transforms_add_resource_tags", "post", "/transforms/{resource_id}/tags", init);
  }

  /** Remove Transform Tags */
  async transforms_delete_resource_tags(init?: OperationInit<"transforms_delete_resource_tags">): Promise<OperationData<"transforms_delete_resource_tags">> {
    return this.client.requestOperation("transforms_delete_resource_tags", "delete", "/transforms/{resource_id}/tags", init);
  }

  /** Execute Transform On Resource */
  async transforms_execute_transform_on_resource(init?: OperationInit<"transforms_execute_transform_on_resource">): Promise<OperationData<"transforms_execute_transform_on_resource">> {
    return this.client.requestOperation("transforms_execute_transform_on_resource", "put", "/transforms/{transform_id}/transform", init);
  }

  /** Execute Transform On Resource */
  async transforms_execute_transform_on_resource_post(init?: OperationInit<"transforms_execute_transform_on_resource_post">): Promise<OperationData<"transforms_execute_transform_on_resource_post">> {
    return this.client.requestOperation("transforms_execute_transform_on_resource_post", "post", "/transforms/{transform_id}/transform", init);
  }

  /** List Transform Accessors */
  async transforms_get_accessors(init?: OperationInit<"transforms_get_accessors">): Promise<OperationData<"transforms_get_accessors">> {
    return this.client.requestOperation("transforms_get_accessors", "get", "/transforms/{resource_id}/accessors", init);
  }

  /** Get Transform Tags */
  async transforms_get_resource_tags(init?: OperationInit<"transforms_get_resource_tags">): Promise<OperationData<"transforms_get_resource_tags">> {
    return this.client.requestOperation("transforms_get_resource_tags", "get", "/transforms/{resource_id}/tags", init);
  }

  /** Remove Transform Accessor */
  async transforms_remove_accessor_body(init?: OperationInit<"transforms_remove_accessor_body">): Promise<OperationData<"transforms_remove_accessor_body">> {
    return this.client.requestOperation("transforms_remove_accessor_body", "delete", "/transforms/{resource_id}/accessors", init);
  }

  /** Update Transform Accessors */
  async transforms_update_accessors(init?: OperationInit<"transforms_update_accessors">): Promise<OperationData<"transforms_update_accessors">> {
    return this.client.requestOperation("transforms_update_accessors", "put", "/transforms/{resource_id}/accessors", init);
  }

  /** Update Transform Tags */
  async transforms_update_resource_tags(init?: OperationInit<"transforms_update_resource_tags">): Promise<OperationData<"transforms_update_resource_tags">> {
    return this.client.requestOperation("transforms_update_resource_tags", "put", "/transforms/{resource_id}/tags", init);
  }

  /** Update Transform */
  async transforms_update_transform(init?: OperationInit<"transforms_update_transform">): Promise<OperationData<"transforms_update_transform">> {
    return this.client.requestOperation("transforms_update_transform", "patch", "/transforms/{transform_id}", init);
  }

  /** Update Attribute Transform */
  async update_attribute_transform(init?: OperationInit<"update_attribute_transform">): Promise<OperationData<"update_attribute_transform">> {
    return this.client.requestOperation("update_attribute_transform", "put", "/attribute_transforms/{attribute_transform_id}", init);
  }

  /** Update Reusable Record Transform */
  async update_reusable_record_transform(init?: OperationInit<"update_reusable_record_transform">): Promise<OperationData<"update_reusable_record_transform">> {
    return this.client.requestOperation("update_reusable_record_transform", "put", "/transforms/{transform_id}", init);
  }
}