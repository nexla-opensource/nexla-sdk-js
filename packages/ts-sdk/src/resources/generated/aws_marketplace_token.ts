import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class AwsMarketplaceTokenResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  /** AWS Marketplace Token */
  async aws_marketplace_token_aws_marketplace_token(init?: OperationInit<"aws_marketplace_token_aws_marketplace_token">): Promise<OperationData<"aws_marketplace_token_aws_marketplace_token">> {
    return this.client.requestOperation("aws_marketplace_token_aws_marketplace_token", "put", "/aws_marketplace_token", init);
  }

  /** AWS Marketplace Token */
  async aws_marketplace_token_aws_marketplace_token_post(init?: OperationInit<"aws_marketplace_token_aws_marketplace_token_post">): Promise<OperationData<"aws_marketplace_token_aws_marketplace_token_post">> {
    return this.client.requestOperation("aws_marketplace_token_aws_marketplace_token_post", "post", "/aws_marketplace_token", init);
  }
}