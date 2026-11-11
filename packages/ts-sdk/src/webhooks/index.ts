import { errorFromResponse, readErrorBody } from "../errors.js";
import { base64Encode } from "../runtime.js";

export interface WebhookSendOptions {
  includeHeaders?: boolean;
  includeUrlParams?: boolean;
  forceSchemaDetection?: boolean;
  authMethod?: "query" | "header";
}

export interface WebhooksClientOptions {
  apiKey: string;
  fetch?: typeof fetch;
}

export class WebhooksClient {
  private readonly apiKey: string;
  private readonly fetchFn: typeof fetch;

  constructor(options: WebhooksClientOptions) {
    this.apiKey = options.apiKey;
    this.fetchFn = options.fetch ?? globalThis.fetch;
  }

  async sendOneRecord(
    webhookUrl: string,
    record: Record<string, unknown>,
    options?: WebhookSendOptions,
  ): Promise<unknown> {
    return this.makeRequest(webhookUrl, record, options);
  }

  async sendManyRecords(
    webhookUrl: string,
    records: Record<string, unknown>[],
    options?: WebhookSendOptions,
  ): Promise<unknown> {
    return this.makeRequest(webhookUrl, records, options);
  }

  private async makeRequest(
    webhookUrl: string,
    body: Record<string, unknown> | Record<string, unknown>[],
    options?: WebhookSendOptions,
  ): Promise<unknown> {
    const authMethod = options?.authMethod ?? "query";
    const url = new URL(webhookUrl);

    if (authMethod === "query") {
      url.searchParams.set("api_key", this.apiKey);
    }
    if (options?.includeHeaders) url.searchParams.set("include_headers", "true");
    if (options?.includeUrlParams) url.searchParams.set("include_url_params", "true");
    if (options?.forceSchemaDetection) url.searchParams.set("force_schema_detection", "true");

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (authMethod === "header") {
      headers["Authorization"] = `Basic ${base64Encode(this.apiKey)}`;
    }

    const response = await this.fetchFn(url.toString(), {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // No url: the request URL carries the API key as a query parameter.
      throw errorFromResponse(response, await readErrorBody(response), { method: "POST" });
    }

    return safeParseJson(response);
  }
}

const safeParseJson = async (response: Response): Promise<unknown> => {
  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) {
    return undefined;
  }
  try {
    return await response.json();
  } catch {
    return undefined;
  }
};
