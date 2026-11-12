/** One page of a list response. */
export interface Page<T = unknown> {
  items: T[];
  /** 1-based page number that was requested. */
  page: number;
  perPage: number;
  /** From the X-Total-Count header, when the backend sends it. */
  totalCount: number | undefined;
  /** From the X-Total-Page-Count header, when the backend sends it. */
  totalPages: number | undefined;
}

export const DEFAULT_PER_PAGE = 100;

export const numberHeader = (headers: Headers, name: string): number | undefined => {
  const raw = headers.get(name);
  if (raw === null || raw.trim() === "") return undefined;
  const value = Number(raw);
  return Number.isFinite(value) ? value : undefined;
};

/**
 * Whether another page follows. The first rule that applies wins:
 * 1. X-Current-Page and X-Total-Page-Count: continue while current < total.
 * 2. A Link header: continue only when it has rel="Next" (any case).
 * 3. Otherwise continue only when the page is full.
 * An empty page never has a next page.
 */
export const hasNextPage = (itemCount: number, perPage: number, headers: Headers): boolean => {
  if (itemCount === 0) return false;

  const current = numberHeader(headers, "x-current-page");
  const total = numberHeader(headers, "x-total-page-count");
  if (current !== undefined && total !== undefined) return current < total;

  const link = headers.get("link");
  if (link !== null) return /rel\s*=\s*"?next"?(?=[\s;,]|$)/i.test(link);

  return itemCount >= perPage;
};
