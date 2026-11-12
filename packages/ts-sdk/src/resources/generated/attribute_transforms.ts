import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class AttributeTransformsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** Accessible Resources */
  async attribute_transforms_accessible_resources(init?: OperationInit<"attribute_transforms_accessible_resources">): Promise<OperationData<"attribute_transforms_accessible_resources">> {
    return this.client.requestOperation("attribute_transforms_accessible_resources", "get", "/attribute_transforms/accessible", init);
  }

  /** Add Attribute transform Accessor */
  async attribute_transforms_add_accessor(init?: OperationInit<"attribute_transforms_add_accessor">): Promise<OperationData<"attribute_transforms_add_accessor">> {
    return this.client.requestOperation("attribute_transforms_add_accessor", "post", "/attribute_transforms/{resource_id}/accessors", init);
  }

  /** Add Attribute transform Tags */
  async attribute_transforms_add_resource_tags(init?: OperationInit<"attribute_transforms_add_resource_tags">): Promise<OperationData<"attribute_transforms_add_resource_tags">> {
    return this.client.requestOperation("attribute_transforms_add_resource_tags", "post", "/attribute_transforms/{resource_id}/tags", init);
  }

  /** Remove Attribute transform Tags */
  async attribute_transforms_delete_resource_tags(init?: OperationInit<"attribute_transforms_delete_resource_tags">): Promise<OperationData<"attribute_transforms_delete_resource_tags">> {
    return this.client.requestOperation("attribute_transforms_delete_resource_tags", "delete", "/attribute_transforms/{resource_id}/tags", init);
  }

  /** List Attribute transform Accessors */
  async attribute_transforms_get_accessors(init?: OperationInit<"attribute_transforms_get_accessors">): Promise<OperationData<"attribute_transforms_get_accessors">> {
    return this.client.requestOperation("attribute_transforms_get_accessors", "get", "/attribute_transforms/{resource_id}/accessors", init);
  }

  /** Get Attribute transform Tags */
  async attribute_transforms_get_resource_tags(init?: OperationInit<"attribute_transforms_get_resource_tags">): Promise<OperationData<"attribute_transforms_get_resource_tags">> {
    return this.client.requestOperation("attribute_transforms_get_resource_tags", "get", "/attribute_transforms/{resource_id}/tags", init);
  }

  /** Remove Attribute transform Accessor */
  async attribute_transforms_remove_accessor_body(init?: OperationInit<"attribute_transforms_remove_accessor_body">): Promise<OperationData<"attribute_transforms_remove_accessor_body">> {
    return this.client.requestOperation("attribute_transforms_remove_accessor_body", "delete", "/attribute_transforms/{resource_id}/accessors", init);
  }

  /** Update Attribute transform Accessors */
  async attribute_transforms_update_accessors(init?: OperationInit<"attribute_transforms_update_accessors">): Promise<OperationData<"attribute_transforms_update_accessors">> {
    return this.client.requestOperation("attribute_transforms_update_accessors", "put", "/attribute_transforms/{resource_id}/accessors", init);
  }

  /** Update Attribute Transform */
  async attribute_transforms_update_attribute_transform(init?: OperationInit<"attribute_transforms_update_attribute_transform">): Promise<OperationData<"attribute_transforms_update_attribute_transform">> {
    return this.client.requestOperation("attribute_transforms_update_attribute_transform", "patch", "/attribute_transforms/{attribute_transform_id}", init);
  }

  /** Update Attribute transform Tags */
  async attribute_transforms_update_resource_tags(init?: OperationInit<"attribute_transforms_update_resource_tags">): Promise<OperationData<"attribute_transforms_update_resource_tags">> {
    return this.client.requestOperation("attribute_transforms_update_resource_tags", "put", "/attribute_transforms/{resource_id}/tags", init);
  }

  /** Copy Attribute Transform */
  async copy_attribute_transform(init?: OperationInit<"copy_attribute_transform">): Promise<OperationData<"copy_attribute_transform">> {
    return this.client.requestOperation("copy_attribute_transform", "post", "/attribute_transforms/{attribute_transform_id}/copy", init);
  }

  /** Search Attribute Transforms */
  async search_attribute_transforms(init?: OperationInit<"search_attribute_transforms">): Promise<OperationData<"search_attribute_transforms">> {
    return this.client.requestOperation("search_attribute_transforms", "post", "/attribute_transforms/search", init);
  }
}