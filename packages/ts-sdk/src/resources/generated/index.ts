import type { NexlaClient } from "../../client/nexla-client.js";
import { AccessControlResource } from "./access_control.js";
import { ApiKeysResource } from "./api_keys.js";
import { ApprovalRequestsResource } from "./approval_requests.js";
import { AsyncTasksResource } from "./async_tasks.js";
import { AttributeTransformsResource } from "./attribute_transforms.js";
import { AuditLogsResource } from "./audit_logs.js";
import { AuthParametersResource } from "./auth_parameters.js";
import { AuthTemplatesResource } from "./auth_templates.js";
import { AwsMarketplaceTokenResource } from "./aws_marketplace_token.js";
import { CatalogConfigsResource } from "./catalog_configs.js";
import { CatalogRefsResource } from "./catalog_refs.js";
import { ClusterEndpointsResource } from "./cluster_endpoints.js";
import { ClustersResource } from "./clusters.js";
import { CodeContainersResource } from "./code_containers.js";
import { ConnectorsResource } from "./connectors.js";
import { CredentialsResource } from "./credentials.js";
import { CustomDataFlowsResource } from "./custom_data_flows.js";
import { DashboardTransformsResource } from "./dashboard_transforms.js";
import { DataCredentialsGroupsResource } from "./data_credentials_groups.js";
import { DataFlowsResource } from "./data_flows.js";
import { DataSchemasResource } from "./data_schemas.js";
import { DestinationsResource } from "./destinations.js";
import { DocContainersResource } from "./doc_containers.js";
import { ErrorFunctionsResource } from "./error_functions.js";
import { FlowNodesResource } from "./flow_nodes.js";
import { FlowTriggersResource } from "./flow_triggers.js";
import { FlowsResource } from "./flows.js";
import { GenaiResource } from "./genai.js";
import { GtokenResource } from "./gtoken.js";
import { HealthResource } from "./health.js";
import { LimitsResource } from "./limits.js";
import { LookupsResource } from "./lookups.js";
import { MarketplaceResource } from "./marketplace.js";
import { McpSessionsResource } from "./mcp_sessions.js";
import { MetadataResource } from "./metadata.js";
import { MetricsResource } from "./metrics.js";
import { MockCatalogAddResource } from "./mock_catalog_add.js";
import { NexsetsResource } from "./nexsets.js";
import { NotificationChannelSettingsResource } from "./notification_channel_settings.js";
import { NotificationSettingsResource } from "./notification_settings.js";
import { NotificationsResource } from "./notifications.js";
import { OauthResource } from "./oauth.js";
import { OrgAuthConfigsResource } from "./org_auth_configs.js";
import { OrgTiersResource } from "./org_tiers.js";
import { OrganizationsResource } from "./organizations.js";
import { ProjectsResource } from "./projects.js";
import { QuarantineSettingsResource } from "./quarantine_settings.js";
import { ResetPasswordResource } from "./reset_password.js";
import { ResourceParametersResource } from "./resource_parameters.js";
import { RootResource } from "./root.js";
import { RuntimesResource } from "./runtimes.js";
import { SdkApplicationsResource } from "./sdk_applications.js";
import { SelfSignupResource } from "./self_signup.js";
import { SelfSignupAdminResource } from "./self_signup_admin.js";
import { ServiceKeysResource } from "./service_keys.js";
import { SetPasswordResource } from "./set_password.js";
import { SignOnOptionsResource } from "./sign_on_options.js";
import { SourcesResource } from "./sources.js";
import { StatusResource } from "./status.js";
import { TeamsResource } from "./teams.js";
import { TokensResource } from "./tokens.js";
import { ToolSetsResource } from "./tool_sets.js";
import { ToolsResource } from "./tools.js";
import { TransformsResource } from "./transforms.js";
import { UserSettingsResource } from "./user_settings.js";
import { UserTiersResource } from "./user_tiers.js";
import { UsersResource } from "./users.js";
import { ValidatorsResource } from "./validators.js";
import { VendorEndpointsResource } from "./vendor_endpoints.js";
import { VendorsResource } from "./vendors.js";

export { AccessControlResource };
export { ApiKeysResource };
export { ApprovalRequestsResource };
export { AsyncTasksResource };
export { AttributeTransformsResource };
export { AuditLogsResource };
export { AuthParametersResource };
export { AuthTemplatesResource };
export { AwsMarketplaceTokenResource };
export { CatalogConfigsResource };
export { CatalogRefsResource };
export { ClusterEndpointsResource };
export { ClustersResource };
export { CodeContainersResource };
export { ConnectorsResource };
export { CredentialsResource };
export { CustomDataFlowsResource };
export { DashboardTransformsResource };
export { DataCredentialsGroupsResource };
export { DataFlowsResource };
export { DataSchemasResource };
export { DestinationsResource };
export { DocContainersResource };
export { ErrorFunctionsResource };
export { FlowNodesResource };
export { FlowTriggersResource };
export { FlowsResource };
export { GenaiResource };
export { GtokenResource };
export { HealthResource };
export { LimitsResource };
export { LookupsResource };
export { MarketplaceResource };
export { McpSessionsResource };
export { MetadataResource };
export { MetricsResource };
export { MockCatalogAddResource };
export { NexsetsResource };
export { NotificationChannelSettingsResource };
export { NotificationSettingsResource };
export { NotificationsResource };
export { OauthResource };
export { OrgAuthConfigsResource };
export { OrgTiersResource };
export { OrganizationsResource };
export { ProjectsResource };
export { QuarantineSettingsResource };
export { ResetPasswordResource };
export { ResourceParametersResource };
export { RootResource };
export { RuntimesResource };
export { SdkApplicationsResource };
export { SelfSignupResource };
export { SelfSignupAdminResource };
export { ServiceKeysResource };
export { SetPasswordResource };
export { SignOnOptionsResource };
export { SourcesResource };
export { StatusResource };
export { TeamsResource };
export { TokensResource };
export { ToolSetsResource };
export { ToolsResource };
export { TransformsResource };
export { UserSettingsResource };
export { UserTiersResource };
export { UsersResource };
export { ValidatorsResource };
export { VendorEndpointsResource };
export { VendorsResource };

export interface GeneratedResourceClients {
  access_control: AccessControlResource;
  api_keys: ApiKeysResource;
  approval_requests: ApprovalRequestsResource;
  async_tasks: AsyncTasksResource;
  attribute_transforms: AttributeTransformsResource;
  audit_logs: AuditLogsResource;
  auth_parameters: AuthParametersResource;
  auth_templates: AuthTemplatesResource;
  aws_marketplace_token: AwsMarketplaceTokenResource;
  catalog_configs: CatalogConfigsResource;
  catalog_refs: CatalogRefsResource;
  cluster_endpoints: ClusterEndpointsResource;
  clusters: ClustersResource;
  code_containers: CodeContainersResource;
  connectors: ConnectorsResource;
  credentials: CredentialsResource;
  custom_data_flows: CustomDataFlowsResource;
  dashboard_transforms: DashboardTransformsResource;
  data_credentials_groups: DataCredentialsGroupsResource;
  data_flows: DataFlowsResource;
  data_schemas: DataSchemasResource;
  destinations: DestinationsResource;
  doc_containers: DocContainersResource;
  error_functions: ErrorFunctionsResource;
  flow_nodes: FlowNodesResource;
  flow_triggers: FlowTriggersResource;
  flows: FlowsResource;
  genai: GenaiResource;
  gtoken: GtokenResource;
  health: HealthResource;
  limits: LimitsResource;
  lookups: LookupsResource;
  marketplace: MarketplaceResource;
  mcp_sessions: McpSessionsResource;
  metadata: MetadataResource;
  metrics: MetricsResource;
  mock_catalog_add: MockCatalogAddResource;
  nexsets: NexsetsResource;
  notification_channel_settings: NotificationChannelSettingsResource;
  notification_settings: NotificationSettingsResource;
  notifications: NotificationsResource;
  oauth: OauthResource;
  org_auth_configs: OrgAuthConfigsResource;
  org_tiers: OrgTiersResource;
  organizations: OrganizationsResource;
  projects: ProjectsResource;
  quarantine_settings: QuarantineSettingsResource;
  reset_password: ResetPasswordResource;
  resource_parameters: ResourceParametersResource;
  root: RootResource;
  runtimes: RuntimesResource;
  sdk_applications: SdkApplicationsResource;
  self_signup: SelfSignupResource;
  self_signup_admin: SelfSignupAdminResource;
  service_keys: ServiceKeysResource;
  set_password: SetPasswordResource;
  sign_on_options: SignOnOptionsResource;
  sources: SourcesResource;
  status: StatusResource;
  teams: TeamsResource;
  tokens: TokensResource;
  tool_sets: ToolSetsResource;
  tools: ToolsResource;
  transforms: TransformsResource;
  user_settings: UserSettingsResource;
  user_tiers: UserTiersResource;
  users: UsersResource;
  validators: ValidatorsResource;
  vendor_endpoints: VendorEndpointsResource;
  vendors: VendorsResource;
}

export const createGeneratedResources = (client: NexlaClient): GeneratedResourceClients => ({
    access_control: new AccessControlResource(client),
    api_keys: new ApiKeysResource(client),
    approval_requests: new ApprovalRequestsResource(client),
    async_tasks: new AsyncTasksResource(client),
    attribute_transforms: new AttributeTransformsResource(client),
    audit_logs: new AuditLogsResource(client),
    auth_parameters: new AuthParametersResource(client),
    auth_templates: new AuthTemplatesResource(client),
    aws_marketplace_token: new AwsMarketplaceTokenResource(client),
    catalog_configs: new CatalogConfigsResource(client),
    catalog_refs: new CatalogRefsResource(client),
    cluster_endpoints: new ClusterEndpointsResource(client),
    clusters: new ClustersResource(client),
    code_containers: new CodeContainersResource(client),
    connectors: new ConnectorsResource(client),
    credentials: new CredentialsResource(client),
    custom_data_flows: new CustomDataFlowsResource(client),
    dashboard_transforms: new DashboardTransformsResource(client),
    data_credentials_groups: new DataCredentialsGroupsResource(client),
    data_flows: new DataFlowsResource(client),
    data_schemas: new DataSchemasResource(client),
    destinations: new DestinationsResource(client),
    doc_containers: new DocContainersResource(client),
    error_functions: new ErrorFunctionsResource(client),
    flow_nodes: new FlowNodesResource(client),
    flow_triggers: new FlowTriggersResource(client),
    flows: new FlowsResource(client),
    genai: new GenaiResource(client),
    gtoken: new GtokenResource(client),
    health: new HealthResource(client),
    limits: new LimitsResource(client),
    lookups: new LookupsResource(client),
    marketplace: new MarketplaceResource(client),
    mcp_sessions: new McpSessionsResource(client),
    metadata: new MetadataResource(client),
    metrics: new MetricsResource(client),
    mock_catalog_add: new MockCatalogAddResource(client),
    nexsets: new NexsetsResource(client),
    notification_channel_settings: new NotificationChannelSettingsResource(client),
    notification_settings: new NotificationSettingsResource(client),
    notifications: new NotificationsResource(client),
    oauth: new OauthResource(client),
    org_auth_configs: new OrgAuthConfigsResource(client),
    org_tiers: new OrgTiersResource(client),
    organizations: new OrganizationsResource(client),
    projects: new ProjectsResource(client),
    quarantine_settings: new QuarantineSettingsResource(client),
    reset_password: new ResetPasswordResource(client),
    resource_parameters: new ResourceParametersResource(client),
    root: new RootResource(client),
    runtimes: new RuntimesResource(client),
    sdk_applications: new SdkApplicationsResource(client),
    self_signup: new SelfSignupResource(client),
    self_signup_admin: new SelfSignupAdminResource(client),
    service_keys: new ServiceKeysResource(client),
    set_password: new SetPasswordResource(client),
    sign_on_options: new SignOnOptionsResource(client),
    sources: new SourcesResource(client),
    status: new StatusResource(client),
    teams: new TeamsResource(client),
    tokens: new TokensResource(client),
    tool_sets: new ToolSetsResource(client),
    tools: new ToolsResource(client),
    transforms: new TransformsResource(client),
    user_settings: new UserSettingsResource(client),
    user_tiers: new UserTiersResource(client),
    users: new UsersResource(client),
    validators: new ValidatorsResource(client),
    vendor_endpoints: new VendorEndpointsResource(client),
    vendors: new VendorsResource(client),
});