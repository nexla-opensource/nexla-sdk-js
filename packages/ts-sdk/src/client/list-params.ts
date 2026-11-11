/** Access roles accepted by list endpoints (backend AccessRoleQuery). Upper case is also accepted by the backend. */
export type AccessRole =
  | "admin"
  | "admin_only"
  | "all"
  | "collaborator"
  | "collaborator_only"
  | "member"
  | "operator"
  | "owner"
  | "owner_only"
  | "sharer"
  | "sharer_only";

/**
 * Common list query parameters, keyed by their wire names. Use with request(), paginate(),
 * and paginateItems(). A tags array is sent as one comma-separated value.
 */
export type ListParams = {
  page?: number;
  per_page?: number;
  expand?: boolean;
  sort_by?: string;
  sort_order?: "asc" | "desc";
  status?: string;
  tags?: string[];
  name?: string;
  access_role?: AccessRole;
  /** Start date filter. Wire name is `from`. */
  from?: string;
  /** End date filter. Wire name is `to`. */
  to?: string;
  org_id?: number;
};
