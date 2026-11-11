/**
 * Auto-generated resource map from OpenAPI.
 * Do not edit manually.
 */

export const resourceMap = {
  "api_keys": {
    "list": {
      "path": "/api_keys",
      "method": "get"
    },
    "get": {
      "path": "/api_keys/{key_id}",
      "method": "get"
    }
  },
  "approval_requests": {
    "get": {
      "path": "/approval_requests/{request_id}",
      "method": "get"
    }
  },
  "async_tasks": {
    "list": {
      "path": "/async_tasks",
      "method": "get"
    },
    "create": {
      "path": "/async_tasks",
      "method": "post"
    },
    "get": {
      "path": "/async_tasks/{task_id}",
      "method": "get"
    },
    "delete": {
      "path": "/async_tasks/{task_id}",
      "method": "delete"
    }
  },
  "attribute_transforms": {
    "list": {
      "path": "/attribute_transforms",
      "method": "get"
    },
    "create": {
      "path": "/attribute_transforms",
      "method": "post"
    },
    "get": {
      "path": "/attribute_transforms/{attribute_transform_id}",
      "method": "get"
    },
    "update": {
      "path": "/attribute_transforms/{attribute_transform_id}",
      "method": "put"
    },
    "delete": {
      "path": "/attribute_transforms/{attribute_transform_id}",
      "method": "delete"
    }
  },
  "auth_parameters": {
    "list": {
      "path": "/auth_parameters",
      "method": "get"
    },
    "create": {
      "path": "/auth_parameters",
      "method": "post"
    },
    "get": {
      "path": "/auth_parameters/{auth_parameter_id}",
      "method": "get"
    },
    "update": {
      "path": "/auth_parameters/{auth_parameter_id}",
      "method": "put"
    },
    "delete": {
      "path": "/auth_parameters/{auth_parameter_id}",
      "method": "delete"
    }
  },
  "auth_templates": {
    "list": {
      "path": "/auth_templates",
      "method": "get"
    },
    "create": {
      "path": "/auth_templates",
      "method": "post"
    },
    "get": {
      "path": "/auth_templates/{auth_template_id}",
      "method": "get"
    },
    "update": {
      "path": "/auth_templates/{auth_template_id}",
      "method": "put"
    },
    "delete": {
      "path": "/auth_templates/{auth_template_id}",
      "method": "delete"
    }
  },
  "catalog_configs": {
    "list": {
      "path": "/catalog_configs",
      "method": "get"
    },
    "create": {
      "path": "/catalog_configs",
      "method": "post"
    },
    "get": {
      "path": "/catalog_configs/{catalog_config_id}",
      "method": "get"
    },
    "update": {
      "path": "/catalog_configs/{catalog_config_id}",
      "method": "put"
    },
    "delete": {
      "path": "/catalog_configs/{catalog_config_id}",
      "method": "delete"
    }
  },
  "cluster_endpoints": {
    "get": {
      "path": "/cluster_endpoints/{endpoint_id}",
      "method": "get"
    },
    "update": {
      "path": "/cluster_endpoints/{endpoint_id}",
      "method": "put"
    },
    "delete": {
      "path": "/cluster_endpoints/{endpoint_id}",
      "method": "delete"
    }
  },
  "clusters": {
    "list": {
      "path": "/clusters",
      "method": "get"
    },
    "create": {
      "path": "/clusters",
      "method": "post"
    },
    "get": {
      "path": "/clusters/{cluster_id}",
      "method": "get"
    },
    "update": {
      "path": "/clusters/{cluster_id}",
      "method": "put"
    },
    "delete": {
      "path": "/clusters/{cluster_id}",
      "method": "delete"
    }
  },
  "code_containers": {
    "list": {
      "path": "/code_containers",
      "method": "get"
    },
    "create": {
      "path": "/code_containers",
      "method": "post"
    },
    "get": {
      "path": "/code_containers/{code_container_id}",
      "method": "get"
    },
    "update": {
      "path": "/code_containers/{code_container_id}",
      "method": "put"
    },
    "delete": {
      "path": "/code_containers/{code_container_id}",
      "method": "delete"
    }
  },
  "connectors": {
    "list": {
      "path": "/connectors",
      "method": "get"
    },
    "get": {
      "path": "/connectors/{connector_id}",
      "method": "get"
    },
    "update": {
      "path": "/connectors/{connector_id}",
      "method": "put"
    }
  },
  "credentials": {
    "list": {
      "path": "/data_credentials",
      "method": "get"
    },
    "create": {
      "path": "/data_credentials",
      "method": "post"
    },
    "get": {
      "path": "/data_credentials/{credential_id}",
      "method": "get"
    },
    "update": {
      "path": "/data_credentials/{credential_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_credentials/{credential_id}",
      "method": "delete"
    }
  },
  "custom_data_flows": {
    "list": {
      "path": "/custom_data_flows",
      "method": "get"
    },
    "create": {
      "path": "/custom_data_flows",
      "method": "post"
    },
    "get": {
      "path": "/custom_data_flows/{custom_data_flow_id}",
      "method": "get"
    },
    "update": {
      "path": "/custom_data_flows/{custom_data_flow_id}",
      "method": "put"
    },
    "delete": {
      "path": "/custom_data_flows/{custom_data_flow_id}",
      "method": "delete"
    }
  },
  "dashboard_transforms": {
    "list": {
      "path": "/dashboard_transforms",
      "method": "get"
    },
    "create": {
      "path": "/dashboard_transforms",
      "method": "post"
    },
    "get": {
      "path": "/dashboard_transforms/{transform_id}",
      "method": "get"
    },
    "update": {
      "path": "/dashboard_transforms/{transform_id}",
      "method": "put"
    },
    "delete": {
      "path": "/dashboard_transforms/{transform_id}",
      "method": "delete"
    }
  },
  "data_credentials_groups": {
    "list": {
      "path": "/data_credentials_groups",
      "method": "get"
    },
    "create": {
      "path": "/data_credentials_groups",
      "method": "post"
    },
    "get": {
      "path": "/data_credentials_groups/{group_id}",
      "method": "get"
    },
    "update": {
      "path": "/data_credentials_groups/{group_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_credentials_groups/{group_id}",
      "method": "delete"
    }
  },
  "data_flows": {
    "update": {
      "path": "/data_flows/{resource_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_flows/{resource_id}",
      "method": "delete"
    }
  },
  "data_schemas": {
    "get": {
      "path": "/data_schemas/{schema_id}",
      "method": "get"
    },
    "update": {
      "path": "/data_schemas/{schema_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_schemas/{schema_id}",
      "method": "delete"
    }
  },
  "destinations": {
    "list": {
      "path": "/data_sinks",
      "method": "get"
    },
    "create": {
      "path": "/data_sinks",
      "method": "post"
    },
    "get": {
      "path": "/data_sinks/{sink_id}",
      "method": "get"
    },
    "update": {
      "path": "/data_sinks/{sink_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_sinks/{sink_id}",
      "method": "delete"
    }
  },
  "doc_containers": {
    "get": {
      "path": "/doc_containers/{doc_container_id}",
      "method": "get"
    },
    "update": {
      "path": "/doc_containers/{doc_container_id}",
      "method": "put"
    },
    "delete": {
      "path": "/doc_containers/{doc_container_id}",
      "method": "delete"
    }
  },
  "flow_nodes": {
    "get": {
      "path": "/flow_nodes/{flow_node_id}",
      "method": "get"
    },
    "update": {
      "path": "/flow_nodes/{flow_node_id}",
      "method": "put"
    }
  },
  "flow_triggers": {
    "list": {
      "path": "/flow_triggers",
      "method": "get"
    },
    "create": {
      "path": "/flow_triggers",
      "method": "post"
    },
    "get": {
      "path": "/flow_triggers/{trigger_id}",
      "method": "get"
    },
    "update": {
      "path": "/flow_triggers/{trigger_id}",
      "method": "put"
    },
    "delete": {
      "path": "/flow_triggers/{trigger_id}",
      "method": "delete"
    }
  },
  "flows": {
    "list": {
      "path": "/flows",
      "method": "get"
    },
    "get": {
      "path": "/flows/{flow_id}",
      "method": "get"
    },
    "update": {
      "path": "/flows/{flow_id}",
      "method": "put"
    },
    "delete": {
      "path": "/flows/{flow_id}",
      "method": "delete"
    }
  },
  "lookups": {
    "list": {
      "path": "/data_maps",
      "method": "get"
    },
    "create": {
      "path": "/data_maps",
      "method": "post"
    },
    "get": {
      "path": "/data_maps/{data_map_id}",
      "method": "get"
    },
    "update": {
      "path": "/data_maps/{data_map_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_maps/{data_map_id}",
      "method": "delete"
    }
  },
  "mcp_sessions": {
    "list": {
      "path": "/mcp_sessions",
      "method": "get"
    },
    "create": {
      "path": "/mcp_sessions",
      "method": "post"
    },
    "get": {
      "path": "/mcp_sessions/{session_id}",
      "method": "get"
    },
    "update": {
      "path": "/mcp_sessions/{session_id}",
      "method": "put"
    },
    "delete": {
      "path": "/mcp_sessions/{session_id}",
      "method": "delete"
    }
  },
  "nexsets": {
    "list": {
      "path": "/data_sets",
      "method": "get"
    },
    "create": {
      "path": "/data_sets",
      "method": "post"
    },
    "get": {
      "path": "/data_sets/{set_id}",
      "method": "get"
    },
    "update": {
      "path": "/data_sets/{set_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_sets/{set_id}",
      "method": "delete"
    }
  },
  "notification_channel_settings": {
    "list": {
      "path": "/notification_channel_settings",
      "method": "get"
    },
    "create": {
      "path": "/notification_channel_settings",
      "method": "post"
    },
    "get": {
      "path": "/notification_channel_settings/{notification_channel_setting_id}",
      "method": "get"
    },
    "update": {
      "path": "/notification_channel_settings/{notification_channel_setting_id}",
      "method": "put"
    },
    "delete": {
      "path": "/notification_channel_settings/{notification_channel_setting_id}",
      "method": "delete"
    }
  },
  "notification_settings": {
    "list": {
      "path": "/notification_settings",
      "method": "get"
    },
    "create": {
      "path": "/notification_settings",
      "method": "post"
    },
    "get": {
      "path": "/notification_settings/{notification_setting_id}",
      "method": "get"
    },
    "update": {
      "path": "/notification_settings/{notification_setting_id}",
      "method": "put"
    },
    "delete": {
      "path": "/notification_settings/{notification_setting_id}",
      "method": "delete"
    }
  },
  "notification_types": {
    "list": {
      "path": "/notification_types",
      "method": "get"
    }
  },
  "notifications": {
    "list": {
      "path": "/notifications",
      "method": "get"
    },
    "get": {
      "path": "/notifications/{notification_id}",
      "method": "get"
    },
    "update": {
      "path": "/notifications/{notification_id}",
      "method": "put"
    },
    "delete": {
      "path": "/notifications/{notification_id}",
      "method": "delete"
    }
  },
  "org_auth_configs": {
    "list": {
      "path": "/api_auth_configs",
      "method": "get"
    },
    "create": {
      "path": "/api_auth_configs",
      "method": "post"
    },
    "get": {
      "path": "/api_auth_configs/{auth_config_id}",
      "method": "get"
    },
    "update": {
      "path": "/api_auth_configs/{auth_config_id}",
      "method": "put"
    },
    "delete": {
      "path": "/api_auth_configs/{auth_config_id}",
      "method": "delete"
    }
  },
  "org_tiers": {
    "list": {
      "path": "/org_tiers",
      "method": "get"
    },
    "create": {
      "path": "/org_tiers",
      "method": "post"
    },
    "get": {
      "path": "/org_tiers/{tier_id}",
      "method": "get"
    },
    "update": {
      "path": "/org_tiers/{tier_id}",
      "method": "put"
    },
    "delete": {
      "path": "/org_tiers/{tier_id}",
      "method": "delete"
    }
  },
  "organizations": {
    "list": {
      "path": "/orgs",
      "method": "get"
    },
    "get": {
      "path": "/orgs/{org_id}",
      "method": "get"
    },
    "update": {
      "path": "/orgs/{org_id}",
      "method": "put"
    },
    "delete": {
      "path": "/orgs/{org_id}",
      "method": "delete"
    }
  },
  "projects": {
    "list": {
      "path": "/projects",
      "method": "get"
    },
    "create": {
      "path": "/projects",
      "method": "post"
    },
    "get": {
      "path": "/projects/{project_id}",
      "method": "get"
    },
    "update": {
      "path": "/projects/{project_id}",
      "method": "put"
    },
    "delete": {
      "path": "/projects/{project_id}",
      "method": "delete"
    }
  },
  "quarantine_settings": {
    "list": {
      "path": "/quarantine_settings",
      "method": "get"
    },
    "get": {
      "path": "/quarantine_settings/{quarantine_setting_id}",
      "method": "get"
    }
  },
  "resource_parameters": {
    "list": {
      "path": "/resource_parameters",
      "method": "get"
    },
    "get": {
      "path": "/resource_parameters/{param_id}",
      "method": "get"
    }
  },
  "runtimes": {
    "list": {
      "path": "/runtimes",
      "method": "get"
    },
    "create": {
      "path": "/runtimes",
      "method": "post"
    },
    "get": {
      "path": "/runtimes/{runtime_id}",
      "method": "get"
    },
    "update": {
      "path": "/runtimes/{runtime_id}",
      "method": "put"
    },
    "delete": {
      "path": "/runtimes/{runtime_id}",
      "method": "delete"
    }
  },
  "self_signup_blocked_domains": {
    "list": {
      "path": "/self_signup_blocked_domains",
      "method": "get"
    },
    "create": {
      "path": "/self_signup_blocked_domains",
      "method": "post"
    },
    "update": {
      "path": "/self_signup_blocked_domains/{domain_id}",
      "method": "put"
    },
    "delete": {
      "path": "/self_signup_blocked_domains/{domain_id}",
      "method": "delete"
    }
  },
  "service_keys": {
    "list": {
      "path": "/service_keys",
      "method": "get"
    },
    "create": {
      "path": "/service_keys",
      "method": "post"
    },
    "get": {
      "path": "/service_keys/{key_id}",
      "method": "get"
    },
    "update": {
      "path": "/service_keys/{key_id}",
      "method": "put"
    },
    "delete": {
      "path": "/service_keys/{key_id}",
      "method": "delete"
    }
  },
  "sources": {
    "list": {
      "path": "/data_sources",
      "method": "get"
    },
    "create": {
      "path": "/data_sources",
      "method": "post"
    },
    "get": {
      "path": "/data_sources/{source_id}",
      "method": "get"
    },
    "update": {
      "path": "/data_sources/{source_id}",
      "method": "put"
    },
    "delete": {
      "path": "/data_sources/{source_id}",
      "method": "delete"
    }
  },
  "teams": {
    "list": {
      "path": "/teams",
      "method": "get"
    },
    "create": {
      "path": "/teams",
      "method": "post"
    },
    "get": {
      "path": "/teams/{team_id}",
      "method": "get"
    },
    "update": {
      "path": "/teams/{team_id}",
      "method": "put"
    },
    "delete": {
      "path": "/teams/{team_id}",
      "method": "delete"
    }
  },
  "tool_sets": {
    "list": {
      "path": "/tool_sets",
      "method": "get"
    },
    "create": {
      "path": "/tool_sets",
      "method": "post"
    },
    "get": {
      "path": "/tool_sets/{tool_set_id}",
      "method": "get"
    },
    "update": {
      "path": "/tool_sets/{tool_set_id}",
      "method": "put"
    },
    "delete": {
      "path": "/tool_sets/{tool_set_id}",
      "method": "delete"
    }
  },
  "tools": {
    "list": {
      "path": "/tools",
      "method": "get"
    },
    "create": {
      "path": "/tools",
      "method": "post"
    },
    "get": {
      "path": "/tools/{tool_id}",
      "method": "get"
    },
    "update": {
      "path": "/tools/{tool_id}",
      "method": "put"
    },
    "delete": {
      "path": "/tools/{tool_id}",
      "method": "delete"
    }
  },
  "transforms": {
    "list": {
      "path": "/transforms",
      "method": "get"
    },
    "create": {
      "path": "/transforms",
      "method": "post"
    },
    "get": {
      "path": "/transforms/{transform_id}",
      "method": "get"
    },
    "update": {
      "path": "/transforms/{transform_id}",
      "method": "put"
    },
    "delete": {
      "path": "/transforms/{transform_id}",
      "method": "delete"
    }
  },
  "user_settings": {
    "list": {
      "path": "/user_settings",
      "method": "get"
    },
    "create": {
      "path": "/user_settings",
      "method": "post"
    },
    "get": {
      "path": "/user_settings/{setting_id}",
      "method": "get"
    },
    "update": {
      "path": "/user_settings/{setting_id}",
      "method": "put"
    },
    "delete": {
      "path": "/user_settings/{setting_id}",
      "method": "delete"
    }
  },
  "user_tiers": {
    "list": {
      "path": "/user_tiers",
      "method": "get"
    },
    "create": {
      "path": "/user_tiers",
      "method": "post"
    },
    "get": {
      "path": "/user_tiers/{tier_id}",
      "method": "get"
    },
    "update": {
      "path": "/user_tiers/{tier_id}",
      "method": "put"
    },
    "delete": {
      "path": "/user_tiers/{tier_id}",
      "method": "delete"
    }
  },
  "users": {
    "list": {
      "path": "/users",
      "method": "get"
    },
    "create": {
      "path": "/users",
      "method": "post"
    },
    "get": {
      "path": "/users/{user_id}",
      "method": "get"
    },
    "update": {
      "path": "/users/{user_id}",
      "method": "put"
    },
    "delete": {
      "path": "/users/{user_id}",
      "method": "delete"
    }
  },
  "validators": {
    "list": {
      "path": "/validators",
      "method": "get"
    },
    "create": {
      "path": "/validators",
      "method": "post"
    },
    "get": {
      "path": "/validators/{validator_id}",
      "method": "get"
    },
    "update": {
      "path": "/validators/{validator_id}",
      "method": "put"
    },
    "delete": {
      "path": "/validators/{validator_id}",
      "method": "delete"
    }
  },
  "vendor_endpoints": {
    "list": {
      "path": "/vendor_endpoints",
      "method": "get"
    },
    "get": {
      "path": "/vendor_endpoints/{vendor_endpoint_id}",
      "method": "get"
    }
  },
  "vendors": {
    "list": {
      "path": "/vendors",
      "method": "get"
    },
    "get": {
      "path": "/vendors/{vendor_id}",
      "method": "get"
    }
  }
} as const;

export type ResourceMap = typeof resourceMap;
