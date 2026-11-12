import type { NexlaClient } from "../../client/nexla-client.js";
import type { OperationData, OperationInit } from "../../client/operation-types.js";
import { withSkipAuth } from "./utils.js";

export class ApprovalRequestsResource {
  private readonly client: NexlaClient;

  constructor(client: NexlaClient) {
    this.client = client;
  }

  async get(init?: OperationInit<"get_approval_request">): Promise<OperationData<"get_approval_request">> {
    return this.client.requestOperation("get_approval_request", "get", "/approval_requests/{request_id}", init);
  }

  /** Approve pending approval requests */
  async approve_approval_request(init?: OperationInit<"approve_approval_request">): Promise<OperationData<"approve_approval_request">> {
    return this.client.requestOperation("approve_approval_request", "put", "/approval_requests/{request_id}/approve", init);
  }

  /** Cancel Request */
  async cancel_request(init?: OperationInit<"cancel_request">): Promise<OperationData<"cancel_request">> {
    return this.client.requestOperation("cancel_request", "put", "/approval_requests/{request_id}/cancel", init);
  }

  /** Get Access Pending */
  async get_access_pending(init?: OperationInit<"get_access_pending">): Promise<OperationData<"get_access_pending">> {
    return this.client.requestOperation("get_access_pending", "get", "/approval_requests/access/pending", init);
  }

  /** Get Access Requested */
  async get_access_requested(init?: OperationInit<"get_access_requested">): Promise<OperationData<"get_access_requested">> {
    return this.client.requestOperation("get_access_requested", "get", "/approval_requests/access/requested", init);
  }

  /** Get Approval Request */
  async get_approval_request(init?: OperationInit<"get_approval_request">): Promise<OperationData<"get_approval_request">> {
    return this.client.requestOperation("get_approval_request", "get", "/approval_requests/{request_id}", init);
  }

  /** Get Assigned */
  async get_assigned(init?: OperationInit<"get_assigned">): Promise<OperationData<"get_assigned">> {
    return this.client.requestOperation("get_assigned", "get", "/approval_requests/assigned", init);
  }

  /** Get Listings Pending */
  async get_listings_pending(init?: OperationInit<"get_listings_pending">): Promise<OperationData<"get_listings_pending">> {
    return this.client.requestOperation("get_listings_pending", "get", "/approval_requests/listings/pending", init);
  }

  /** Get Listings Requested */
  async get_listings_requested(init?: OperationInit<"get_listings_requested">): Promise<OperationData<"get_listings_requested">> {
    return this.client.requestOperation("get_listings_requested", "get", "/approval_requests/listings/requested", init);
  }

  /** Get all pending approval requests. */
  async get_pending_approval_requests(init?: OperationInit<"get_pending_approval_requests">): Promise<OperationData<"get_pending_approval_requests">> {
    return this.client.requestOperation("get_pending_approval_requests", "get", "/approval_requests/pending", init);
  }

  /** Get all requested approval requests by the user. */
  async get_requested_approval_requests(init?: OperationInit<"get_requested_approval_requests">): Promise<OperationData<"get_requested_approval_requests">> {
    return this.client.requestOperation("get_requested_approval_requests", "get", "/approval_requests/requested", init);
  }

  /** Reject pending approval requests */
  async reject_approval_request(init?: OperationInit<"reject_approval_request">): Promise<OperationData<"reject_approval_request">> {
    return this.client.requestOperation("reject_approval_request", "put", "/approval_requests/{request_id}/reject", init);
  }

  /** Show Data Set */
  async show_data_set(init?: OperationInit<"show_data_set">): Promise<OperationData<"show_data_set">> {
    return this.client.requestOperation("show_data_set", "get", "/approval_requests/data_sets/{data_set_id}", init);
  }
}