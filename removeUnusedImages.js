const fs = require('fs')

/* Get this data by running: find docs/assets -type f > allImages.txt */
let allImages = `docs/assets/screenshot-2020-06-01-at-2.58.08-pm.png
docs/assets/screenshot-2021-02-23-at-11.23.47-am.png
docs/assets/identity-resolution/identity-merge-rules.png
docs/assets/identity-resolution/identity-mappings-table.png
docs/assets/identity-resolution/rudder-id.png
docs/assets/identity-resolution/identity-resolution-workflow.png
docs/assets/screenshot-2020-11-11-at-11.11.28-am.png
docs/assets/4 (9).png
docs/assets/faq2.png
docs/assets/screen-shot-2021-02-09-at-5.07.17-pm.png
docs/assets/image-7-.png
docs/assets/1 (15).png
docs/assets/rudderstack2x_-6-.png
docs/assets/screen-shot-2021-07-01-at-5.36.15-pm (3) (3) (2) (3) (3) (3) (3) (3) (1) (3).png
docs/assets/mssqlconnection (1).png
docs/assets/intercom.png
docs/assets/screen-shot-2021-07-28-at-5.43.26-pm.png
docs/assets/indicative.png
docs/assets/screen-shot-2021-02-19-at-2.59.05-pm.png
docs/assets/rudderstack-2x-66-.png
docs/assets/screen-shot-2021-02-08-at-1.24.13-pm.png
docs/assets/4 (21).png
docs/assets/5 (21).png
docs/assets/Algolia.png
docs/assets/screenshot-2021-05-05-at-4.29.24-pm.png
docs/assets/3 (14) (1).png
docs/assets/screenshot-2020-01-06-at-10.20.32-am.png
docs/assets/latest-1.png
docs/assets/screenshot-2020-05-05-at-1.53.41-pm.png
docs/assets/gainsightcs-custom-field-person.png
docs/assets/screenshot-202020-02-18-20at-201.09.51-20pm.png
docs/assets/final.png
docs/assets/source4.png
docs/assets/image (26).png
docs/assets/2 (26).png
docs/assets/3 (26).png
docs/assets/image (14) (1) (1).png
docs/assets/5 (8) (1).png
docs/assets/zendesk.png
docs/assets/image (5).png
docs/assets/screen-shot-2021-06-23-at-9.15.42-am (2) (2) (1).png
docs/assets/sfmc-2.png
docs/assets/image (71).png
docs/assets/image (127).png
docs/assets/screen-shot-2021-02-08-at-1.23.21-pm.png
docs/assets/screen-shot-2021-01-13-at-4.44.24-pm.png
docs/assets/am-dest-error.png
docs/assets/image (67).png
docs/assets/image (131).png
docs/assets/image (88).png
docs/assets/5 (8).png
docs/assets/screen-shot-2021-07-08-at-4.21.13-pm.png
docs/assets/sample-track-call.png
docs/assets/8 (6).png
docs/assets/dest5 (1).png
docs/assets/3 (30).png
docs/assets/screen-shot-2021-02-23-at-6.28.27-pm.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (6).png
docs/assets/2 (30).png
docs/assets/image (30).png
docs/assets/AppcenterCreation.png
docs/assets/screenshot-2020-02-25-at-2.52.44-pm.png
docs/assets/6 (12).png
docs/assets/7 (12).png
docs/assets/screenshot-2019-10-24-at-5.36.13-pm.png
docs/assets/gainsightcs-event-main-settings.png
docs/assets/4 (5).png
docs/assets/screenshot-2020-02-17-at-4.44.20-pm.png
docs/assets/screenshot-2019-12-23-at-7.40.31-pm.png
docs/assets/faq1.png
docs/assets/image (111).png
docs/assets/image (47).png
docs/assets/screenshot-2020-09-14-at-5.58.13-pm.png
docs/assets/mixpanle-increment.png
docs/assets/image (103) (2) (2) (2) (2) (2) (1) (2) (2) (2) (2) (1) (2).png
docs/assets/js-sdk.png
docs/assets/1 (19).png
docs/assets/3 (1).png
docs/assets/screen-shot-2021-01-06-at-4.05.51-pm (1) (1) (1) (1) (2) (2) (3) (2) (1) (1).png
docs/assets/3 (10).png
docs/assets/segment.png
docs/assets/2 (10).png
docs/assets/image (10).png
docs/assets/6 (24).png
docs/assets/drip-connection-settings.png
docs/assets/image (124) (1).png
docs/assets/screenshot-2020-08-24-at-10.24.37-am.png
docs/assets/settings-2.png
docs/assets/screen-shot-2021-01-12-at-12.23.55-pm.png
docs/assets/4 (1) (1).png
docs/assets/js-sdk-workflow.png
docs/assets/screenshot-2021-05-05-at-4.51.46-pm.png
docs/assets/screenshot-2020-02-25-at-2.54.29-pm.png
docs/assets/write-key-vs-token (2) (1) (2) (3) (3) (3) (3) (1) (1).png
docs/assets/7 (3).png
docs/assets/amplitude.png
docs/assets/image (107).png
docs/assets/screen-shot-2021-07-01-at-5.29.03-pm.png
docs/assets/image (51).png
docs/assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (1).png
docs/assets/screenshot-2020-04-22-at-12.25.01-pm.png
docs/assets/1 (23).png
docs/assets/image (9).png
docs/assets/1 (6).png
docs/assets/screenshot-2021-09-02-at-11.03.55-am.png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (3).png
docs/assets/screenshot-2020-11-12-at-2.32.04-pm.png
docs/assets/anotherDataStore.png
docs/assets/sfmc-1.png
docs/assets/screenshot_2021-03-18_at_3.52.00_pm.png
docs/assets/6 (2).png
docs/assets/screen-shot-2021-01-13-at-10.28.39-am.png
docs/assets/image (92).png
docs/assets/screenshot-2021-02-23-at-11.25.45-am.png
docs/assets/5 (4).png
docs/assets/image (84).png
docs/assets/screen-shot-2021-03-03-at-1.09.38-pm.png
docs/assets/screen-shot-2021-03-03-at-1.06.39-pm.png
docs/assets/config-1-.jpg
docs/assets/5 (17).png
docs/assets/4 (17).png
docs/assets/requireintegration-call-flow.png
docs/assets/screenshot-2020-02-26-at-3.41.29-pm.png
docs/assets/screenshot-2020-01-06-at-10.25.13-am.png
docs/assets/screen-shot-2020-12-08-at-9.37.06-pm.png
docs/assets/screen-shot-2021-02-19-at-2.57.28-pm.png
docs/assets/4 (3) (2) (2) (1) (2) (1).png
docs/assets/screen-shot-2021-01-06-at-4.06.07-pm.png
docs/assets/screenshot-2020-10-28-at-1.18.30-pm.png
docs/assets/5 (16).png
docs/assets/2 (1).png
docs/assets/kustomer-config.png
docs/assets/4 (16).png
docs/assets/image (85).png
docs/assets/5 (5).png
docs/assets/image (40) (1) (1).png
docs/assets/live-events.png
docs/assets/screenshot_2021-03-18_at_3.52.26_pm.png
docs/assets/screen-shot-2021-01-06-at-3.59.08-pm.png
docs/assets/kochava.png
docs/assets/image (93).png
docs/assets/screen-shot-2021-02-09-at-5.09.24-pm.png
docs/assets/screen-shot-2021-01-06-at-4.05.51-pm (1) (1) (1) (1) (2) (2) (3) (2) (1).png
docs/assets/6 (3).png
docs/assets/1 (22).png
docs/assets/image (8).png
docs/assets/1 (7).png
docs/assets/crawlerName.png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (2).png
docs/assets/source2.png
docs/assets/js-sdk-2x.png
docs/assets/7 (2).png
docs/assets/image (106).png
docs/assets/token.png
docs/assets/screen-shot-2021-03-03-at-1.19.03-pm.png
docs/assets/source3.png
docs/assets/image (50).png
docs/assets/screenshot-2020-02-23-at-3.25.23-pm.png
docs/assets/screenshot-2019-12-10-at-7.57.43-pm.png
docs/assets/screen-shot-2021-06-01-at-3.45.51-pm.png
docs/assets/screenshot-2020-08-05-at-11.40.12-am (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (1).png
docs/assets/rudderstack-api/personal-access-tokens-2.png
docs/assets/rudderstack-api/personal-access-tokens-3.png
docs/assets/rudderstack-api/new-personal-access-token.png
docs/assets/rudderstack-api/personal-access-tokens-1.png
docs/assets/mixpanel-config (1).png
docs/assets/1 (18).png
docs/assets/screen-shot-2021-05-19-at-5.01.56-pm (1).png
docs/assets/screenshot-2020-09-14-at-6.00.03-pm.png
docs/assets/3 (11).png
docs/assets/2 (11).png
docs/assets/webhooks.png
docs/assets/image (11).png
docs/assets/ga1 (1).png
docs/assets/clevertap-settings.png
docs/assets/3.1.png
docs/assets/image (110).png
docs/assets/image (46).png
docs/assets/settings.png
docs/assets/4 (4).png
docs/assets/screenshot-2020-08-05-at-11.38.37-am.png
docs/assets/6 (13).png
docs/assets/7 (13).png
docs/assets/tempImage (1).png
docs/assets/2 (31).png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (7).png
docs/assets/image (31).png
docs/assets/8 (1) (1).png
docs/assets/gainsightcs-settings.png
docs/assets/installation2.png
docs/assets/screen-shot-2021-07-01-at-5.27.53-pm.png
docs/assets/8 (7).png
docs/assets/image (66).png
docs/assets/slack-settings.png
docs/assets/unity3.png
docs/assets/8.png
docs/assets/wspace-token.png
docs/assets/image (13) (1).png
docs/assets/image (130).png
docs/assets/5 (9).png
docs/assets/screen-shot-2020-12-15-at-4.07.31-pm.png
docs/assets/image (89).png
docs/assets/screen-shot-2021-05-19-at-5.01.56-pm.png
docs/assets/lytics.png
docs/assets/screen-shot-2021-01-12-at-1.00.07-pm.png
docs/assets/js-sdk-version-migration.png
docs/assets/ExtoleSource.png
docs/assets/image (70).png
docs/assets/screen-shot-2021-06-02-at-11.51.32-am.png
docs/assets/image (126).png
docs/assets/putEvents.png
docs/assets/image (27).png
docs/assets/source1.png
docs/assets/2 (27).png
docs/assets/3 (4) (1).png
docs/assets/sheet-tabs.png
docs/assets/3 (27).png
docs/assets/image (18) (1) (1) (1) (1) (1) (1) (1).png
docs/assets/screen-shot-2021-01-05-at-3.18.17-pm (1) (1) (1) (2) (2) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (3) (3) (3) (3) (1).png
docs/assets/screen-shot-2020-12-17-at-4.41.10-pm.png
docs/assets/image (4).png
docs/assets/screen-shot-2021-05-19-at-4.54.30-pm.png
docs/assets/warehouse-destinations/exclusion-window.png
docs/assets/warehouse-destinations/read-write-database.png
docs/assets/warehouse-destinations/sync-frequency.png
docs/assets/screen-shot-2021-01-06-at-2.55.24-pm.png
docs/assets/sf_sandbox_1-736x141.png
docs/assets/rudderstack2x_-11-.png
docs/assets/4 (20).png
docs/assets/screen-shot-2020-12-18-at-10.59.43-am.png
docs/assets/5 (20).png
docs/assets/image (24) (1) (1).png
docs/assets/putItems.png
docs/assets/rudderstack2x_-7-.png
docs/assets/screen-shot-2021-07-01-at-5.36.15-pm (3) (3) (2) (3) (3) (3) (3) (3) (1) (2).png
docs/assets/9.png
docs/assets/screenshot-2020-05-26-at-5.12.19-pm.png
docs/assets/screen-shot-2020-12-18-at-11.00.31-am.png
docs/assets/unity2.png
docs/assets/screen-shot-2021-06-07-at-1.25.57-pm.png
docs/assets/mp-config.png
docs/assets/posthog-web.png
docs/assets/screenshot_2020-12-10_at_12.49.12_pm.png
docs/assets/1 (14).png
docs/assets/image-6-.png
docs/assets/sample-page-call.png
docs/assets/4 (8).png
docs/assets/screen-shot-2021-01-13-at-4.44.45-pm.png
docs/assets/screenshot-2021-02-23-at-11.24.06-am.png
docs/assets/4 (3).png
docs/assets/google-sheets-config.png
docs/assets/posthog-3.png
docs/assets/general/destination-event-metrics.png
docs/assets/general/wh-destination-namespace.png
docs/assets/image (84) (1) (1).png
docs/assets/image (117).png
docs/assets/screenshot-2021-05-05-at-4.02.38-pm.png
docs/assets/sentry.png
docs/assets/1 (15) (1) (1).png
docs/assets/image (41).png
docs/assets/screenshot-2020-04-08-at-12.06.31-pm.png
docs/assets/rudderstack2x_-13- (1) (1) (1) (1) (1) (1).png
docs/assets/14.png
docs/assets/3 (7).png
docs/assets/bugsnag.png
docs/assets/2 (16).png
docs/assets/image (16).png
docs/assets/SnapPixel-2.png
docs/assets/source4 (1).png
docs/assets/3 (16).png
docs/assets/6 (22).png
docs/assets/screenshot-2020-11-20-at-1.45.54-pm.png
docs/assets/screen-shot-2021-01-05-at-3.19.33-pm.png
docs/assets/screenshot-2019-12-10-at-7.22.25-pm.png
docs/assets/unity1 (1) (2) (2).png
docs/assets/review.png
docs/assets/AF_Dashboard.png
docs/assets/screenshot-202020-02-18-20at-201.09.08-20pm.png
docs/assets/screen-shot-2020-12-17-at-4.39.38-pm (1).png
docs/assets/7 (5).png
docs/assets/gainsightcs-person-map.png
docs/assets/image (101).png
docs/assets/screen-shot-2021-02-19-at-3.01.03-pm (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (1).png
docs/assets/image (57).png
docs/assets/dynamic-destination-configuration.png
docs/assets/screen-shot-2020-12-15-at-4.24.10-pm.png
docs/assets/screenshot-2020-02-27-at-5.34.41-pm.png
docs/assets/screenshot-2020-11-02-at-1.51.36-pm.png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (5).png
docs/assets/1 (25).png
docs/assets/image (79) (2) (2) (3) (3) (3) (2).png
docs/assets/6 (4).png
docs/assets/AF_src_name.png
docs/assets/screenshot-2020-12-15-at-3.11.49-pm.png
docs/assets/image (94).png
docs/assets/credentials.png
docs/assets/mapping-adobe.png
docs/assets/screenshot-2021-05-05-at-6.29.27-pm.png
docs/assets/cloud-extract-sources/size930.png
docs/assets/cloud-extract-sources/salesforce-connection-settings-3.png
docs/assets/cloud-extract-sources/sendgrid-api-key-permissions.png
docs/assets/cloud-extract-sources/chargebee-2.png
docs/assets/cloud-extract-sources/netsuite-settings-1.png
docs/assets/cloud-extract-sources/chargebee-3.png
docs/assets/cloud-extract-sources/salesforce-connection-settings-2.png
docs/assets/cloud-extract-sources/g-ads-customer-id.png
docs/assets/cloud-extract-sources/netsuite-settings-2.png
docs/assets/cloud-extract-sources/chargebee-1.png
docs/assets/cloud-extract-sources/netsuite-settings-3.png
docs/assets/cloud-extract-sources/salesforce-connection-settings-1.png
docs/assets/cloud-extract-sources/laptop_optimalscreen.png
docs/assets/cloud-extract-sources/hubspot-blendo-connection-settings-2.png
docs/assets/cloud-extract-sources/netsuite-settings-7.png
docs/assets/cloud-extract-sources/chargebee-4.png
docs/assets/cloud-extract-sources/stripe-data-import-settings.png
docs/assets/cloud-extract-sources/chargebee-5.png
docs/assets/cloud-extract-sources/netsuite-settings-6.png
docs/assets/cloud-extract-sources/stripe-api-version.png
docs/assets/cloud-extract-sources/recurly-connection-settings.png
docs/assets/cloud-extract-sources/zendesk-api-token.png
docs/assets/cloud-extract-sources/google-adwords-add-resource-2.png
docs/assets/cloud-extract-sources/hubspot-blendo-connection-settings-3.png
docs/assets/cloud-extract-sources/size1115.png
docs/assets/cloud-extract-sources/hubspot-blendo-connection-settings-1.png
docs/assets/cloud-extract-sources/netsuite-settings-4.png
docs/assets/cloud-extract-sources/BigScreen.png
docs/assets/cloud-extract-sources/netsuite-settings-5.png
docs/assets/cloud-extract-sources/chargebee-6.png
docs/assets/cloud-extract-sources/google-adwords-add-resource-1.png
docs/assets/cloud-extract-sources/recurly-connection-settings-2.png
docs/assets/cloud-extract-sources/g-ads-connection-settings-4.png
docs/assets/cloud-extract-sources/intercomv2-6.png
docs/assets/cloud-extract-sources/zendesk-subdomain.png
docs/assets/cloud-extract-sources/sendgrid-connection-settings.png
docs/assets/cloud-extract-sources/intercomv2-7.png
docs/assets/cloud-extract-sources/salesforce-6.png
docs/assets/cloud-extract-sources/g-ads-connection-settings-5.png
docs/assets/cloud-extract-sources/recurly-connection-settings-1.png
docs/assets/cloud-extract-sources/activecampaign-connection-settings-4.png
docs/assets/cloud-extract-sources/salesforce-4.png
docs/assets/cloud-extract-sources/intercomv2-5.png
docs/assets/cloud-extract-sources/sendgrid-connection-settings-2.png
docs/assets/cloud-extract-sources/google-adwords-dashboard.png
docs/assets/cloud-extract-sources/sendgrid-api-key.png
docs/assets/cloud-extract-sources/sendgrid-connection-settings-3.png
docs/assets/cloud-extract-sources/intercomv2-4.png
docs/assets/cloud-extract-sources/salesforce-5.png
docs/assets/cloud-extract-sources/destination-settings.png
docs/assets/cloud-extract-sources/g-ads-connection-settings-2.png
docs/assets/cloud-extract-sources/salesforce-1.png
docs/assets/cloud-extract-sources/intercomv2-1.png
docs/assets/cloud-extract-sources/g-ads-connection-settings-3.png
docs/assets/cloud-extract-sources/activecampaign-connection-settings-2.png
docs/assets/cloud-extract-sources/g-ads-connection-settings-1.png
docs/assets/cloud-extract-sources/salesforce-2.png
docs/assets/cloud-extract-sources/intercomv2-3.png
docs/assets/cloud-extract-sources/intercomv2-2.png
docs/assets/cloud-extract-sources/salesforce-3.png
docs/assets/cloud-extract-sources/activecampaign-connection-settings-3.png
docs/assets/cloud-extract-sources/zendesk-connection-settings-2.png
docs/assets/cloud-extract-sources/google-adwords-destination-settings.png
docs/assets/cloud-extract-sources/laptop_fullscreen.png
docs/assets/cloud-extract-sources/freshdesk-connection-settings.png
docs/assets/cloud-extract-sources/activecampaign-connection-settings.png
docs/assets/cloud-extract-sources/zendesk-connection-settings-1.png
docs/assets/cloud-extract-sources/freshdesk-connection-settings-2.png
docs/assets/cloud-extract-sources/add-destination.png
docs/assets/cloud-extract-sources/freshdesk-connection-settings-1.png
docs/assets/cloud-extract-sources/sync-schedule-settings-change.png
docs/assets/cloud-extract-sources/fb-ads-1.png
docs/assets/cloud-extract-sources/netsuite-settings-11.png
docs/assets/cloud-extract-sources/netsuite-settings-8.png
docs/assets/cloud-extract-sources/netsuite-settings-9.png
docs/assets/cloud-extract-sources/netsuite-settings-10.png
docs/assets/cloud-extract-sources/hubspot-connection-settings-2.png
docs/assets/cloud-extract-sources/fb-ads-2.png
docs/assets/cloud-extract-sources/ga-4.png
docs/assets/cloud-extract-sources/sync-schedule-manual.png
docs/assets/cloud-extract-sources/netsuite-settings-12.png
docs/assets/cloud-extract-sources/netsuite-settings-13.png
docs/assets/cloud-extract-sources/sendgrid-api-permissions.png
docs/assets/cloud-extract-sources/hubspot-connection-settings-1.png
docs/assets/cloud-extract-sources/fb-ads-3.png
docs/assets/cloud-extract-sources/ga-1.png
docs/assets/cloud-extract-sources/netsuite-settings-17.png
docs/assets/cloud-extract-sources/netsuite-settings-16.png
docs/assets/cloud-extract-sources/google-sheets-connection-settings-1.png
docs/assets/cloud-extract-sources/stripe-source-settings.png
docs/assets/cloud-extract-sources/ga-2.png
docs/assets/cloud-extract-sources/google-adwords-resources.png
docs/assets/cloud-extract-sources/netsuite-settings-14.png
docs/assets/cloud-extract-sources/google-adwords-source-settings.png
docs/assets/cloud-extract-sources/sendgrid-api-key-details.png
docs/assets/cloud-extract-sources/netsuite-settings-15.png
docs/assets/cloud-extract-sources/ga-3.png
docs/assets/cloud-extract-sources/google-adwords-connect-destinations.png
docs/assets/cloud-extract-sources/google-sheets-connection-settings-2.png
docs/assets/5 (2).png
docs/assets/image (82).png
docs/assets/6 (18).png
docs/assets/4 (11).png
docs/assets/2 (6).png
docs/assets/5 (11).png
docs/assets/image (20) (1).png
docs/assets/database.png
docs/assets/screen-shot-2020-12-18-at-11.01.14-am (1).png
docs/assets/posthog-2.png
docs/assets/screen-shot-2021-06-23-at-9.15.42-am (2) (2).png
docs/assets/9 (1).png
docs/assets/image (14) (1).png
docs/assets/screen-shot-2021-06-30-at-10.03.52-pm.png
docs/assets/warehouse-actions-sources/vdm-4.png
docs/assets/warehouse-actions-sources/add-constant-in-json.png
docs/assets/warehouse-actions-sources/airflow-provider-2.png
docs/assets/warehouse-actions-sources/postgresql-connection-settings.png
docs/assets/warehouse-actions-sources/warehouse-action-sources.png
docs/assets/warehouse-actions-sources/models-view-dashboard.png
docs/assets/warehouse-actions-sources/airflow-provider-3.png
docs/assets/warehouse-actions-sources/gcp-create-service-account.png
docs/assets/warehouse-actions-sources/sync-schedule-cron.png
docs/assets/warehouse-actions-sources/vdm-5.png
docs/assets/warehouse-actions-sources/vdm-7.png
docs/assets/warehouse-actions-sources/configure-model.png
docs/assets/warehouse-actions-sources/redshift-connection-settings.png
docs/assets/warehouse-actions-sources/airflow-provider-1.png
docs/assets/warehouse-actions-sources/gcp-service-account-details.png
docs/assets/warehouse-actions-sources/manage-keys.png
docs/assets/warehouse-actions-sources/vdm-6.png
docs/assets/warehouse-actions-sources/vdm-2.png
docs/assets/warehouse-actions-sources/select-source-model.png
docs/assets/warehouse-actions-sources/connection-settings-databricks-2.png
docs/assets/warehouse-actions-sources/update-table-selection-old.png
docs/assets/warehouse-actions-sources/select-source-databricks.png
docs/assets/warehouse-actions-sources/vdm-3.png
docs/assets/warehouse-actions-sources/bigquery-connection-settings.png
docs/assets/warehouse-actions-sources/sync-mirror-mode.png
docs/assets/warehouse-actions-sources/upsert-mode.png
docs/assets/warehouse-actions-sources/vdm-object.png
docs/assets/warehouse-actions-sources/select-model-option.png
docs/assets/warehouse-actions-sources/destination.png
docs/assets/warehouse-actions-sources/sync-schedule-cron-error.png
docs/assets/warehouse-actions-sources/select-source-old.png
docs/assets/warehouse-actions-sources/add-constant.png
docs/assets/warehouse-actions-sources/model-settings.png
docs/assets/warehouse-actions-sources/mysql-connection-settings.png
docs/assets/warehouse-actions-sources/clickhouse-connection-settings.png
docs/assets/warehouse-actions-sources/models-dashboard.png
docs/assets/warehouse-actions-sources/snowflake-source.png
docs/assets/warehouse-actions-sources/snowflake-accountadmin.png
docs/assets/warehouse-actions-sources/sample-sql-query.png
docs/assets/warehouse-actions-sources/create-new-key.png
docs/assets/warehouse-actions-sources/add-destination-1.png
docs/assets/warehouse-actions-sources/mirror-mode.png
docs/assets/warehouse-actions-sources/GCP-create-role.png
docs/assets/warehouse-actions-sources/model-rename.png
docs/assets/warehouse-actions-sources/schema-tab-options.png
docs/assets/warehouse-actions-sources/vdm-model.png
docs/assets/warehouse-actions-sources/update-table-selection-wh.png
docs/assets/warehouse-actions-sources/models-settings-configure.png
docs/assets/warehouse-actions-sources/postgresql-add-desitnation.png
docs/assets/warehouse-actions-sources/add-destination.png
docs/assets/warehouse-actions-sources/model-view-dashboard.png
docs/assets/warehouse-actions-sources/sync-schedule-settings-change.png
docs/assets/warehouse-actions-sources/models-name-enter.png
docs/assets/warehouse-actions-sources/sync-schedule-basic.png
docs/assets/warehouse-actions-sources/dot-notation-constant.png
docs/assets/warehouse-actions-sources/edit-model-configuration.png
docs/assets/warehouse-actions-sources/gcp-service-account-role-details.png
docs/assets/warehouse-actions-sources/validations.png
docs/assets/warehouse-actions-sources/permissions-error.png
docs/assets/warehouse-actions-sources/table-model-options.png
docs/assets/warehouse-actions-sources/gcp-role-details.png
docs/assets/warehouse-actions-sources/models-data-snippet.png
docs/assets/warehouse-actions-sources/sync-schedule-manual.png
docs/assets/warehouse-actions-sources/connection-settings-databricks.png
docs/assets/warehouse-actions-sources/postgresql-source.png
docs/assets/warehouse-actions-sources/gcp-add-key.png
docs/assets/warehouse-actions-sources/update-table-selection.png
docs/assets/warehouse-actions-sources/select-source.png
docs/assets/warehouse-actions-sources/sync-schedule-basic-options.png
docs/assets/warehouse-actions-sources/clickhouse-additional-settings.png
docs/assets/warehouse-actions-sources/GCP-service-account.png
docs/assets/warehouse-actions-sources/image2.png
docs/assets/warehouse-actions-sources/s3-bucket-settings.png
docs/assets/warehouse-actions-sources/source-id.png
docs/assets/Active_Campaign.png
docs/assets/image-1-.png
docs/assets/1 (13).png
docs/assets/screen-shot-2020-12-17-at-4.41.30-pm.png
docs/assets/dest8.png
docs/assets/event-stream-destinations/rev-cat-public-api-key.png
docs/assets/event-stream-destinations/klaviyo-connection-settings.png
docs/assets/event-stream-destinations/new-relic-insert-key.png
docs/assets/event-stream-destinations/fbp-connection-settings-3.png
docs/assets/event-stream-destinations/adroll-new-audience-settings.png
docs/assets/event-stream-destinations/splitio-connection-settings.png
docs/assets/event-stream-destinations/rudderstack-container-id.png
docs/assets/event-stream-destinations/airship-connection-settings.png
docs/assets/event-stream-destinations/dcm-floodlight-cat-vs-type.png
docs/assets/event-stream-destinations/Pardot-crmfid1.png
docs/assets/event-stream-destinations/snap-conversions-pixel-id.png
docs/assets/event-stream-destinations/fbp-connection-settings-2.png
docs/assets/event-stream-destinations/launchdarkly-clientsideID.png
docs/assets/event-stream-destinations/appsflyer-2.png
docs/assets/event-stream-destinations/mixpanel-connection-settings-4.png
docs/assets/event-stream-destinations/blueshift-connection-settings.png
docs/assets/event-stream-destinations/tiktokads-connection-settings.png
docs/assets/event-stream-destinations/ga-tracking-id.png
docs/assets/event-stream-destinations/s3-connection-settings.png
docs/assets/event-stream-destinations/Pardot-crmfid2.png
docs/assets/event-stream-destinations/fbp-connection-settings-1.png
docs/assets/event-stream-destinations/intercom-connection-settings.png
docs/assets/event-stream-destinations/adroll-new-audience.png
docs/assets/event-stream-destinations/mixpanel-connection-settings-5.png
docs/assets/event-stream-destinations/appsflyer-3.png
docs/assets/event-stream-destinations/webengage-license-api-key.png
docs/assets/event-stream-destinations/mixpanel-connection-settings-1.png
docs/assets/event-stream-destinations/pap-cookie-domain.png
docs/assets/event-stream-destinations/ga-md5-encryption-disabled.png
docs/assets/event-stream-destinations/fbp-connection-settings-5.png
docs/assets/event-stream-destinations/statsig-api-keys.png
docs/assets/event-stream-destinations/fbp-connection-settings-4.png
docs/assets/event-stream-destinations/launchdarkly-connection-settings.png
docs/assets/event-stream-destinations/fb-custom-audience-access-token.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-8.png
docs/assets/event-stream-destinations/launchdarkly-projects.png
docs/assets/event-stream-destinations/tvsquared-connection-settings.png
docs/assets/event-stream-destinations/mixpanel-connection-settings-2.png
docs/assets/event-stream-destinations/fullstory-devicemode-ios.png
docs/assets/event-stream-destinations/slack-settings.png
docs/assets/event-stream-destinations/posthog-additional-settings.png
docs/assets/event-stream-destinations/google-optimize-connection-settings-1.png
docs/assets/event-stream-destinations/dcm-floodlight-advertiser-id.png
docs/assets/event-stream-destinations/snap-conversions-add-new-app.png
docs/assets/event-stream-destinations/vero-authentication-token.png
docs/assets/event-stream-destinations/rev-cat-connection-settings.png
docs/assets/event-stream-destinations/fullstory-connection-settings.png
docs/assets/event-stream-destinations/marketo-lead-import-connection-settings.png
docs/assets/event-stream-destinations/mixpanel-connection-settings-3.png
docs/assets/event-stream-destinations/posthog-web-sdk-settings.png
docs/assets/event-stream-destinations/pardot-connection-settings3.png
docs/assets/event-stream-destinations/bqstream-service-account-2.png
docs/assets/event-stream-destinations/mailchimp-connection-settings.png
docs/assets/event-stream-destinations/airship-create-new-token.png
docs/assets/event-stream-destinations/sendgrid-connection-settings-1.png
docs/assets/event-stream-destinations/matomo-connection-settings-3.png
docs/assets/event-stream-destinations/vero-connection-settings.png
docs/assets/event-stream-destinations/splitio-environment.png
docs/assets/event-stream-destinations/new-relic-connection-settings.png
docs/assets/event-stream-destinations/pap-mergeproduct-true.png
docs/assets/event-stream-destinations/amplitude-connection-settings-1.png
docs/assets/event-stream-destinations/dcm-floodlight-connection-settings-2.png
docs/assets/event-stream-destinations/matomo-connection-settings-2.png
docs/assets/event-stream-destinations/singular-event-delivery-1.png
docs/assets/event-stream-destinations/rudderstack-server-container-url.png
docs/assets/event-stream-destinations/matomo-connection-settings.png
docs/assets/event-stream-destinations/bqstream-service-account-3.png
docs/assets/event-stream-destinations/attentive-tag-connection-settings-2.png
docs/assets/event-stream-destinations/lytics-connection-settings.png
docs/assets/event-stream-destinations/mixpanel-super-people.png
docs/assets/event-stream-destinations/bqstream-service-account-1.png
docs/assets/event-stream-destinations/gads-specify-access-level.png
docs/assets/event-stream-destinations/sendgrid-connection-settings-2.png
docs/assets/event-stream-destinations/salesforce-connection-settings.png
docs/assets/event-stream-destinations/google-analytics-4-connection-settings-4.png
docs/assets/event-stream-destinations/singular-event-delivery-3.png
docs/assets/event-stream-destinations/firebase-app-id.png
docs/assets/event-stream-destinations/amplitude-connection-settings-3.png
docs/assets/event-stream-destinations/attentive-tag-connection-settings.png
docs/assets/event-stream-destinations/adroll-event-mapping.png
docs/assets/event-stream-destinations/amplitude-connection-settings-2.png
docs/assets/event-stream-destinations/singular-event-delivery-2.png
docs/assets/event-stream-destinations/matomo-connection-settings-1.png
docs/assets/event-stream-destinations/pardot-business-unit-id.png
docs/assets/event-stream-destinations/sendgrid-connection-settings-3.png
docs/assets/event-stream-destinations/adjust-event-token.png
docs/assets/event-stream-destinations/traits-slack.png
docs/assets/event-stream-destinations/attentive-tag-connection-settings-1.png
docs/assets/event-stream-destinations/slack-settings4.png
docs/assets/event-stream-destinations/adjust-connection-settings-2.png
docs/assets/event-stream-destinations/bqstream-service-account-4.png
docs/assets/event-stream-destinations/google-analytics-4-connection-settings.png
docs/assets/event-stream-destinations/google-analytics-4-connection-settings-1.png
docs/assets/event-stream-destinations/singular-connection-settings-2.png
docs/assets/event-stream-destinations/matomo-connection-settings-4.png
docs/assets/event-stream-destinations/adroll-details.png
docs/assets/event-stream-destinations/adjust-partner-setup.png
docs/assets/event-stream-destinations/counter-tag.png
docs/assets/event-stream-destinations/slack-settings3.png
docs/assets/event-stream-destinations/candu-connection-settings.png
docs/assets/event-stream-destinations/fb-custom-audience-customer-value.png
docs/assets/event-stream-destinations/sendgrid-connection-settings-4.png
docs/assets/event-stream-destinations/google-analytics-4-connection-settings-2.png
docs/assets/event-stream-destinations/hotjar-connection-settings.png
docs/assets/event-stream-destinations/snap-conversions-setup-pixel.png
docs/assets/event-stream-destinations/ga-tracking-id-2.png
docs/assets/event-stream-destinations/bugsnag-connection-settings.png
docs/assets/event-stream-destinations/amplitude-connection-settings-4.png
docs/assets/event-stream-destinations/posthog-updated-group-mapping.png
docs/assets/event-stream-destinations/singular-event-delivery-4.png
docs/assets/event-stream-destinations/google-analytics-4-connection-settings-3.png
docs/assets/event-stream-destinations/snapchat-conversion-connection-settings-2.png
docs/assets/event-stream-destinations/blueshift-api-keys.png
docs/assets/event-stream-destinations/rev-cat-project.png
docs/assets/event-stream-destinations/slack-settings2.png
docs/assets/event-stream-destinations/yahoo-dsp.png
docs/assets/event-stream-destinations/customerio-connection-settings.png
docs/assets/event-stream-destinations/adjust-app-token-1.png
docs/assets/event-stream-destinations/customerio-device-token.png
docs/assets/event-stream-destinations/bqstream-6.png
docs/assets/event-stream-destinations/appsflyer-connection-settings.png
docs/assets/event-stream-destinations/activecampaign-eventname-truncation.png
docs/assets/event-stream-destinations/google-adwords-remarketing-lists-customer-id.png
docs/assets/event-stream-destinations/dcm-floodlight-connection-settings4.png
docs/assets/event-stream-destinations/enhanced-conversions-connection-settings.png
docs/assets/event-stream-destinations/Google-signals-4.png
docs/assets/event-stream-destinations/gtm-connection-settings.png
docs/assets/event-stream-destinations/adjust-app-token-2.png
docs/assets/event-stream-destinations/singular-session-events.png
docs/assets/event-stream-destinations/webengage-connection-settings.png
docs/assets/event-stream-destinations/snap-pixel-id.png
docs/assets/event-stream-destinations/firebase-connection-settings.png
docs/assets/event-stream-destinations/activecampaign-connection-settings.png
docs/assets/event-stream-destinations/bqstream-5.png
docs/assets/event-stream-destinations/hubspot-connection-settings.png
docs/assets/event-stream-destinations/singular-connection-settings.png
docs/assets/event-stream-destinations/bqstream-4.png
docs/assets/event-stream-destinations/customerio-siteid-apikey.png
docs/assets/event-stream-destinations/dcm-floodlight-report-settings.png
docs/assets/event-stream-destinations/dcm-floodlight-connection-settings.png
docs/assets/event-stream-destinations/matomo-dashboard.png
docs/assets/event-stream-destinations/Google-signals-5.png
docs/assets/event-stream-destinations/Google-signals-1.png
docs/assets/event-stream-destinations/appsflyer-connection-settings-final.png
docs/assets/event-stream-destinations/dcm-floodlight-connection-settings3.png
docs/assets/event-stream-destinations/webhook-connection-settings.png
docs/assets/event-stream-destinations/gads-connection-settings.png
docs/assets/event-stream-destinations/webhook-url-slack.png
docs/assets/event-stream-destinations/s3-default-encryption.png
docs/assets/event-stream-destinations/dcm-floodlight-report-builder.png
docs/assets/event-stream-destinations/sales-tag.png
docs/assets/event-stream-destinations/gads-access-security.png
docs/assets/event-stream-destinations/posthog-connection-settings.png
docs/assets/event-stream-destinations/bqstream-1.png
docs/assets/event-stream-destinations/fb-custom-audience-api-tools.png
docs/assets/event-stream-destinations/google-optimize-container-id.png
docs/assets/event-stream-destinations/rudderstack-custom-html-gtm.png
docs/assets/event-stream-destinations/Fb-custom-audience-connection-settings-2.png
docs/assets/event-stream-destinations/Google-signals-2.png
docs/assets/event-stream-destinations/google-optimize-ga-tracking-id.png
docs/assets/event-stream-destinations/bqstream-3.png
docs/assets/event-stream-destinations/tag-id-pinterest.png
docs/assets/event-stream-destinations/bqstream-2.png
docs/assets/event-stream-destinations/dcm-floodlight-custom-variables.png
docs/assets/event-stream-destinations/Fb-custom-audience-connection-settings-1.png
docs/assets/event-stream-destinations/Google-signals-3.png
docs/assets/event-stream-destinations/singular-api-key.png
docs/assets/event-stream-destinations/ga-connection-settings-5.png
docs/assets/event-stream-destinations/yahoo-dsp-2.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-6.png
docs/assets/event-stream-destinations/adroll-connection-settings.png
docs/assets/event-stream-destinations/snap-pixel-connection-settings.png
docs/assets/event-stream-destinations/api-secret.png
docs/assets/event-stream-destinations/statsig-settings.png
docs/assets/event-stream-destinations/new-attribute-airship.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-7.png
docs/assets/event-stream-destinations/yahoo-dsp-3.png
docs/assets/event-stream-destinations/ga-connection-settings-4.png
docs/assets/event-stream-destinations/hubspot-connection-settings-2.png
docs/assets/event-stream-destinations/adroll-pixel.png
docs/assets/event-stream-destinations/pap-mergeproduct-false.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-5.png
docs/assets/event-stream-destinations/fb-custom-audience-edit-permissions.png
docs/assets/event-stream-destinations/pap-tracking-url.png
docs/assets/event-stream-destinations/yahoo-dsp-connection-settings-3.png
docs/assets/event-stream-destinations/fullstory-devicemode-android.png
docs/assets/event-stream-destinations/mixpanel-group-key-settings.png
docs/assets/event-stream-destinations/yahoo-dsp-connection-settings-2.png
docs/assets/event-stream-destinations/choose-channel-slack.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-4.png
docs/assets/event-stream-destinations/snapchat-conversion-connection-settings.png
docs/assets/event-stream-destinations/hubspot-connection-settings-1.png
docs/assets/event-stream-destinations/vero-tags.png
docs/assets/event-stream-destinations/measurement-id.png
docs/assets/event-stream-destinations/snap-conversions-api-token.png
docs/assets/event-stream-destinations/pap-connection-settings-3.png
docs/assets/event-stream-destinations/ga-connection-settings-3.png
docs/assets/event-stream-destinations/appsflyer-connection-settings-1.png
docs/assets/event-stream-destinations/fb-custom-audience-source.png
docs/assets/event-stream-destinations/hubspot-create-property.png
docs/assets/event-stream-destinations/lytics-connection-settings-2.png
docs/assets/event-stream-destinations/google-adwords-remarketing-lists-developer-token.png
docs/assets/event-stream-destinations/google-adwords-remarketing-lists-connection-settings.png
docs/assets/event-stream-destinations/pinterest_tag.png
docs/assets/event-stream-destinations/personalize-1.png
docs/assets/event-stream-destinations/bugsnag-api-key.png
docs/assets/event-stream-destinations/airship-app-key-secret.png
docs/assets/event-stream-destinations/adjust-connection-settings.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-1.png
docs/assets/event-stream-destinations/ga-connection-settings-2.png
docs/assets/event-stream-destinations/pap-connection-settings-2.png
docs/assets/event-stream-destinations/yahoo-dsp-connection-settings.png
docs/assets/event-stream-destinations/appsflyer-connection-settings-2.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-3.png
docs/assets/event-stream-destinations/google-analytics-4-connection-settings3.png
docs/assets/event-stream-destinations/lytics-connection-settings-1.png
docs/assets/event-stream-destinations/splitio-api-key.png
docs/assets/event-stream-destinations/google-analytics-4-connection-settings2.png
docs/assets/event-stream-destinations/personalize-2.png
docs/assets/event-stream-destinations/iterable-connection-settings.png
docs/assets/event-stream-destinations/candu-api-key.png
docs/assets/event-stream-destinations/google-analytics-connection-settings-2.png
docs/assets/event-stream-destinations/moengage-background-mode.png
docs/assets/event-stream-destinations/ga-connection-settings-1.png
docs/assets/event-stream-destinations/pap-connection-settings-1.png
docs/assets/screen-shot-2021-05-19-at-4.54.45-pm.png
docs/assets/screenshot-2020-06-01-at-2.22.34-pm.png
docs/assets/14.-external-url.png
docs/assets/1-copy.png
docs/assets/SnapPixel-1.png
docs/assets/latest23.png
docs/assets/rudderstack-architecture.png
docs/assets/3 (2) (1).png
docs/assets/screenshot-2020-03-03-at-11.17.42-am.png
docs/assets/auth04.png
docs/assets/gainsight-px-global-context.png
docs/assets/7 (9).png
docs/assets/3 (20).png
docs/assets/image (20).png
docs/assets/2 (20).png
docs/assets/image (3).png
docs/assets/screen-shot-2021-01-06-at-3.58.22-pm.png
docs/assets/11.-new-script.png
docs/assets/kustomer-config-v2.png
docs/assets/screen-shot-2021-01-05-at-3.18.17-pm (1) (1) (1) (2) (2) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (3) (3) (3) (3) (1) (1).png
docs/assets/clone-1 (1).png
docs/assets/image (77).png
docs/assets/auth05.png
docs/assets/screen-shot-2021-01-06-at-3.54.12-pm.png
docs/assets/screen-shot-2021-02-23-at-6.27.16-pm.png
docs/assets/dest6 (1).png
docs/assets/image (105) (1) (1).png
docs/assets/yml-file.jpg
docs/assets/image (98).png
docs/assets/Cordova_Source.png
docs/assets/image (121).png
docs/assets/screen-shot-2020-12-04-at-11.02.19-am.png
docs/assets/6 (8).png
docs/assets/screen-shot-2021-03-03-at-1.44.33-pm.png
docs/assets/image (61).png
docs/assets/image (79) (2) (2) (3) (3) (3) (2) (3).png
docs/assets/write-key-vs-token (2) (1) (2) (3) (3) (3) (3) (1).png
docs/assets/image (100) (1) (1) (1) (1) (1) (1) (1) (1).png
docs/assets/installation1 (1).png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1).png
docs/assets/event-stream-sources/appsflyer-1.png
docs/assets/event-stream-sources/flutter-sdk-1.png
docs/assets/event-stream-sources/webhook-url-iterable.png
docs/assets/event-stream-sources/auth0-2.png
docs/assets/event-stream-sources/auth0-3.png
docs/assets/event-stream-sources/appsflyer-2.png
docs/assets/event-stream-sources/auth0-1.png
docs/assets/event-stream-sources/customerio-5.png
docs/assets/event-stream-sources/customerio-4.png
docs/assets/event-stream-sources/appsflyer-3.png
docs/assets/event-stream-sources/braze-2.png
docs/assets/event-stream-sources/php-sdk-1.png
docs/assets/event-stream-sources/auth0-4.png
docs/assets/event-stream-sources/customerio-1.png
docs/assets/event-stream-sources/auth0-5.png
docs/assets/event-stream-sources/rust-sdk-1.png
docs/assets/event-stream-sources/appsflyer-4.png
docs/assets/event-stream-sources/braze-1.png
docs/assets/event-stream-sources/customerio-3.png
docs/assets/event-stream-sources/auth0-6.png
docs/assets/event-stream-sources/customerio-2.png
docs/assets/event-stream-sources/posthog-3.png
docs/assets/event-stream-sources/iterable-1.png
docs/assets/event-stream-sources/onetrust-1.png
docs/assets/event-stream-sources/appcenter-2.png
docs/assets/event-stream-sources/appcenter-3.png
docs/assets/event-stream-sources/posthog-2.png
docs/assets/event-stream-sources/iterable-2.png
docs/assets/event-stream-sources/unity-sdk-4.png
docs/assets/event-stream-sources/appcenter-1.png
docs/assets/event-stream-sources/posthog-1.png
docs/assets/event-stream-sources/unity-sdk-1.png
docs/assets/event-stream-sources/shopify-data-plane-url.png
docs/assets/event-stream-sources/appcenter-4.png
docs/assets/event-stream-sources/rudderstack-event-filtering.png
docs/assets/event-stream-sources/posthog-4.png
docs/assets/event-stream-sources/unity-sdk-2.png
docs/assets/event-stream-sources/ruby-sdk-1.png
docs/assets/event-stream-sources/unity-sdk-3.png
docs/assets/event-stream-sources/android-sdk-1.png
docs/assets/event-stream-sources/webhook-1.png
docs/assets/event-stream-sources/shopify-3.png
docs/assets/event-stream-sources/shopify-2.png
docs/assets/event-stream-sources/react-native-1.png
docs/assets/event-stream-sources/extole-1.png
docs/assets/event-stream-sources/looker-4.png
docs/assets/event-stream-sources/webhook-2.png
docs/assets/event-stream-sources/extole-3.png
docs/assets/event-stream-sources/shopify-1.png
docs/assets/event-stream-sources/extole-2.png
docs/assets/event-stream-sources/webhook-3.png
docs/assets/event-stream-sources/looker-1.png
docs/assets/event-stream-sources/go-sdk-1.png
docs/assets/event-stream-sources/dot-net-1.png
docs/assets/event-stream-sources/shopify-5.png
docs/assets/event-stream-sources/shopify-4.png
docs/assets/event-stream-sources/RS-Shopify-app.png
docs/assets/event-stream-sources/looker-2.png
docs/assets/event-stream-sources/webhook-4.png
docs/assets/event-stream-sources/cordova-sdk-1.png
docs/assets/event-stream-sources/amp-analytics-1.png
docs/assets/event-stream-sources/shopify-6.png
docs/assets/event-stream-sources/extole-4.png
docs/assets/event-stream-sources/webhook-5.png
docs/assets/event-stream-sources/looker-3.png
docs/assets/event-stream-sources/segment-3.png
docs/assets/event-stream-sources/java-sdk-1.png
docs/assets/event-stream-sources/python-sdk-1.png
docs/assets/event-stream-sources/segment-2.png
docs/assets/event-stream-sources/ios-sdk-1.png
docs/assets/event-stream-sources/segment-1.png
docs/assets/event-stream-sources/segment-4.png
docs/assets/event-stream-sources/node-sdk-1.png
docs/assets/image (36).png
docs/assets/screen-shot-2021-01-05-at-5.19.23-pm.png
docs/assets/13.-script-deployment.png
docs/assets/posthog-1.png
docs/assets/connections.png
docs/assets/screenshot-2020-04-08-at-12.09.32-pm (1) (1).png
docs/assets/7 (14).png
docs/assets/6 (14).png
docs/assets/2 (1) (1).png
docs/assets/7 (15).png
docs/assets/screenshot-2020-08-05-at-11.41.24-am.png
docs/assets/posthog-5.png
docs/assets/6 (15).png
docs/assets/screen-shot-2021-02-09-at-5.08.24-pm.png
docs/assets/marketo_lead_import.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (1).png
docs/assets/image (37).png
docs/assets/image (120) (1) (1).png
docs/assets/braze (1).png
docs/assets/8 (1).png
docs/assets/image (60).png
docs/assets/screen-shot-2021-02-08-at-1.23.21-pm (1).png
docs/assets/image (79) (2) (2) (3) (3) (3) (2) (2).png
docs/assets/screen-shot-2020-12-03-at-2.20.59-pm.png
docs/assets/12.png
docs/assets/AppcenterWebhookTest.png
docs/assets/screen-shot-2021-02-09-at-5.08.36-pm.png
docs/assets/sheets-tab-config.png
docs/assets/screen-shot-2021-02-23-at-6.27.30-pm.png
docs/assets/6 (9).png
docs/assets/auth01.png
docs/assets/image (76).png
docs/assets/image (40) (1).png
docs/assets/image (99).png
docs/assets/crawlerSourceType.png
docs/assets/android-2 (1) (1) (2) (2) (2) (2) (2).png
docs/assets/screen-shot-2021-03-03-at-1.07.01-pm.png
docs/assets/screen-shot-2021-02-19-at-2.59.05-pm (1).png
docs/assets/role.png
docs/assets/screenshot-2020-05-26-at-5.02.38-pm.png
docs/assets/events.png
docs/assets/javascript-2.png
docs/assets/screenshot-2020-05-06-at-7.15.19-pm.png
docs/assets/3 (21).png
docs/assets/image (21).png
docs/assets/screen-shot-2021-02-23-at-6.27.53-pm.png
docs/assets/2 (21).png
docs/assets/1 (28).png
docs/assets/image (2).png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (8).png
docs/assets/source (1).png
docs/assets/screen-shot-2021-01-13-at-11.06.08-am.png
docs/assets/workspace-token-vs-write-key.png
docs/assets/image (118) (1) (1) (1) (1).png
docs/assets/7 (8).png
docs/assets/mixpanel (1).png
docs/assets/gainsight-px-create-attribute.png
docs/assets/screenshot-2020-04-08-at-11.36.30-am.png
docs/assets/4 (26).png
docs/assets/screen-shot-2021-07-28-at-5.43.41-pm.png
docs/assets/kustomer-v3-config.png
docs/assets/screen-shot-2021-05-19-at-4.53.08-pm.png
docs/assets/AF_src_sendtest.png
docs/assets/previewTable.png
docs/assets/screenshot-2020-04-08-at-12.09.32-pm (1).png
docs/assets/13.png
docs/assets/screen-shot-2021-01-06-at-4.03.08-pm.png
docs/assets/1 (12).png
docs/assets/screenshot-2021-05-05-at-5.27.54-pm.png
docs/assets/screenshot-2019-10-24-at-5.50.28-pm.png
docs/assets/screen-shot-2021-07-28-at-5.50.26-pm.png
docs/assets/Bing_Ads.PNG
docs/assets/image_-7-.png
docs/assets/screenshot-2020-08-10-at-6.38.46-pm.png
docs/assets/posthog-4.png
docs/assets/posthog-6.png
docs/assets/screenshot-2020-11-27-at-1.28.49-pm.png
docs/assets/6 (19).png
docs/assets/screen-shot-2021-05-14-at-3.46.05-pm.png
docs/assets/Ometria.png
docs/assets/4 (10).png
docs/assets/screen-shot-2021-02-08-at-1.22.07-pm.png
docs/assets/5 (10).png
docs/assets/2 (7).png
docs/assets/AppcenterSource.png
docs/assets/gainsightcs-event-create.png
docs/assets/image (83).png
docs/assets/5 (3).png
docs/assets/flutter_setup.png
docs/assets/11.png
docs/assets/android-2 (1) (1) (2) (2) (2) (2) (2) (2).png
docs/assets/screen-shot-2021-02-16-at-3.04.55-pm.png
docs/assets/image (95).png
docs/assets/screen-shot-2021-07-28-at-5.45.20-pm.png
docs/assets/auth02.png
docs/assets/6 (5).png
docs/assets/screen-shot-2021-01-05-at-3.23.18-pm.png
docs/assets/screen-shot-2021-01-13-at-4.45.10-pm.png
docs/assets/gainsightcs-event-map-sample.png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (4).png
docs/assets/1 (1).png
docs/assets/javascript-1.png
docs/assets/1 (24).png
docs/assets/gainsight-px-user-attribute-mapping-1.png
docs/assets/event-map-setting.png
docs/assets/7 (4).png
docs/assets/image (100).png
docs/assets/image (56).png
docs/assets/role-permissions.png
docs/assets/screen-shot-2021-02-08-at-1.21.12-pm.png
docs/assets/screen-shot-2021-01-12-at-1.01.23-pm.png
docs/assets/screen-shot-2021-01-05-at-2.07.29-pm.png
docs/assets/screen-shot-2020-12-18-at-10.44.25-am.png
docs/assets/auth03.png
docs/assets/screen-shot-2021-03-03-at-1.09.06-pm.png
docs/assets/screenshot-2020-08-05-at-11.40.12-am (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2).png
docs/assets/screen-shot-2021-03-03-at-1.05.55-pm.png
docs/assets/trengo-config.png
docs/assets/6 (23).png
docs/assets/2.1.png
docs/assets/ExtoleRewardWebhook.png
docs/assets/3 (6).png
docs/assets/rudderbackend-change4.png
docs/assets/ga.png
docs/assets/10.png
docs/assets/2 (17).png
docs/assets/image (17).png
docs/assets/3 (17).png
docs/assets/4 (3) (2) (2) (1) (2).png
docs/assets/android-1.png
docs/assets/image (116).png
docs/assets/react-native.png
docs/assets/gainsightcs-custom-field-company.png
docs/assets/image (40).png
docs/assets/screenshot_2021-03-18_at_3.51.11_pm.png
docs/assets/4 (2).png
docs/assets/screenshot-2020-08-05-at-11.53.34-am.png
docs/assets/posthog-7.png
docs/assets/image (38).png
docs/assets/screen-shot-2021-05-19-at-4.55.08-pm (1) (1).png
docs/assets/gainsight-px-product-tag.png
docs/assets/5 (13).png
docs/assets/2 (4).png
docs/assets/screen-shot-2021-01-12-at-12.23.01-pm.png
docs/assets/4 (13).png
docs/assets/image (80).png
docs/assets/image (118) (1) (1) (1).png
docs/assets/dest2.png
docs/assets/screen-shot-2021-01-13-at-10.16.55-am.png
docs/assets/screen-shot-2021-01-05-at-2.03.31-pm.png
docs/assets/autopilot.png
docs/assets/screen-shot-2021-07-28-at-5.42.42-pm.png
docs/assets/3 (4) (1) (1).png
docs/assets/image (96).png
docs/assets/image (79).png
docs/assets/android-2 (1) (1) (2) (2) (2) (2) (2) (1).png
docs/assets/6 (6).png
docs/assets/image (32) (1) (1) (1).png
docs/assets/1 (27).png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (7).png
docs/assets/1 (2).png
docs/assets/user-guides/onelogin-7.png
docs/assets/user-guides/successful-live-events-astro.png
docs/assets/user-guides/document-next-app.png
docs/assets/user-guides/data-plane-url.png
docs/assets/user-guides/onelogin-6.png
docs/assets/user-guides/onelogin-4.png
docs/assets/user-guides/dynamic-config-field-mapping.png
docs/assets/user-guides/browser-network-tab-1.png
docs/assets/user-guides/run-next-app.png
docs/assets/user-guides/ga-live-events.png
docs/assets/user-guides/onelogin-5.png
docs/assets/user-guides/onelogin-1.png
docs/assets/user-guides/live-events.png
docs/assets/user-guides/browser-network-tab.png
docs/assets/user-guides/successful-live-events-ember.png
docs/assets/user-guides/successful-live-events-svelte.png
docs/assets/user-guides/onelogin-2.png
docs/assets/user-guides/onelogin-3.png
docs/assets/user-guides/rudderstack-ga-connection.png
docs/assets/user-guides/custom-domains/custom-domains-8.png
docs/assets/user-guides/custom-domains/custom-domains-2.png
docs/assets/user-guides/custom-domains/custom-domains-3.png
docs/assets/user-guides/custom-domains/custom-domains-1.png
docs/assets/user-guides/custom-domains/custom-domains-4.png
docs/assets/user-guides/custom-domains/custom-domains-5.png
docs/assets/user-guides/custom-domains/custom-domains-7.png
docs/assets/user-guides/custom-domains/custom-domains-6.png
docs/assets/user-guides/dynamic-destination-configuration.png
docs/assets/user-guides/javascript-writekey.png
docs/assets/user-guides/segment-rudder-migration-dotnet-dependencies.png
docs/assets/user-guides/successful-live-events-angular.png
docs/assets/user-guides/rudderstack-dashboard.png
docs/assets/user-guides/okta-sso-3.png
docs/assets/user-guides/ga-live-events-svelte.png
docs/assets/user-guides/okta-sso-2.png
docs/assets/user-guides/ga-live-events-ember.png
docs/assets/user-guides/okta-sso-1.png
docs/assets/user-guides/okta-sso-5.png
docs/assets/user-guides/ga-live-events-angular.png
docs/assets/user-guides/ga-live-events-astro.png
docs/assets/user-guides/okta-sso-4.png
docs/assets/user-guides/onelogin-10.png
docs/assets/user-guides/okta-sso-6.png
docs/assets/user-guides/successful-live-events.png
docs/assets/user-guides/okta-sso-7.png
docs/assets/user-guides/index-next-app.png
docs/assets/user-guides/successful-live-events-vue.png
docs/assets/user-guides/rudderstack-directory.png
docs/assets/user-guides/onelogin-8.png
docs/assets/user-guides/nuxtjs-config.png
docs/assets/user-guides/onelogin-9.png
docs/assets/user-guides/ga-settings.png
docs/assets/user-guides/ga-live-events-vue.png
docs/assets/screenshot-2020-09-09-at-6.56.02-pm.png
docs/assets/Hotjar-1.png
docs/assets/screenshot-2020-04-08-at-12.09.07-pm (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png
docs/assets/screen-shot-2021-01-12-at-12.59.13-pm.png
docs/assets/image (55).png
docs/assets/7 (7).png
docs/assets/image (103).png
docs/assets/write-key-vs-token (2) (1) (2) (3) (3) (3) (3) (1) (5).png
docs/assets/screenshot-2020-11-11-at-10.51.26-am.png
docs/assets/6 (20).png
docs/assets/3 (14).png
docs/assets/2 (14).png
docs/assets/image (14).png
docs/assets/appcenter.png
docs/assets/posthog-web-settings-1.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3).png
docs/assets/3 (5).png
docs/assets/dest3.png
docs/assets/5 (8) (1) (1).png
docs/assets/screen-shot-2021-01-12-at-12.23.37-pm.png
docs/assets/screen-shot-2021-01-12-at-1.02.09-pm.png
docs/assets/image (43).png
docs/assets/screenshot-2021-09-17-at-6.46.08-pm.png
docs/assets/image (115).png
docs/assets/4 (1).png
docs/assets/2 (8).png
docs/assets/unity1 (1) (2).png
docs/assets/6 (16).png
docs/assets/screen-shot-2021-01-13-at-4.43.42-pm.png
docs/assets/7 (16).png
docs/assets/screenshot-2020-05-17-at-4.34.38-pm.png
docs/assets/visual.png
docs/assets/latest.png
docs/assets/screenshot-2020-04-29-at-8.06.07-pm.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (2).png
docs/assets/image (34).png
docs/assets/installation1 (1) (1).png
docs/assets/screenshot-2020-05-06-at-7.15.02-pm.png
docs/assets/8 (2).png
docs/assets/braze (2).png
docs/assets/dest1.png
docs/assets/image (63).png
docs/assets/image (79) (2) (2) (3) (3) (3) (2) (1).png
docs/assets/firebase-connection-settings.png
docs/assets/image (123).png
docs/assets/screenshot-2021-09-02-at-11.03.55-am (1).png
docs/assets/ga1.png
docs/assets/webhook.png
docs/assets/screen-shot-2021-01-05-at-3.18.17-pm (1) (1) (1) (2) (2) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (3) (3) (3) (3) (1) (3).png
docs/assets/photo-17-03-2021.png
docs/assets/image (75).png
docs/assets/screenshot-202020-02-18-20at-2012.20.57-20pm.png
docs/assets/screenshot-2020-02-27-at-5.32.27-pm.png
docs/assets/image (88) (1).png
docs/assets/screenshot-2021-02-23-at-11.24.17-am.png
docs/assets/image (1).png
docs/assets/image (22).png
docs/assets/2 (22).png
docs/assets/3 (22).png
docs/assets/screen-shot-2021-01-05-at-3.22.09-pm.png
docs/assets/screen-shot-2021-01-13-at-10.58.18-am.png
docs/assets/image (59).png
docs/assets/posthog-web-settings.png
docs/assets/screen-shot-2021-01-05-at-3.21.38-pm.png
docs/assets/AppcenterWebhookConfig.png
docs/assets/mixpanel (2).png
docs/assets/screen-shot-2021-02-23-at-6.28.10-pm.png
docs/assets/data-governance/tracking-plan-menu.png
docs/assets/data-governance/download-tracking-plan.png
docs/assets/data-governance/personal-access-token.png
docs/assets/data-governance/tracking-plan-source-id.png
docs/assets/data-governance/tracking-plans-permissions.png
docs/assets/data-governance/upload-tracking-plan.png
docs/assets/rudderstack2x_-14-.png
docs/assets/4 (25).png
docs/assets/screenshot-2020-11-27-at-2.29.18-pm.png
docs/assets/rudderstack-2x-62-.png
docs/assets/employee.png
docs/assets/image (24) (1).png
docs/assets/image (105) (1).png
docs/assets/personalize.png
docs/assets/gainsightcs-company-map.png
docs/assets/screenshot-2020-07-24-at-4.09.57-pm.png
docs/assets/image (18).png
docs/assets/2 (18).png
docs/assets/122.png
docs/assets/3 (18).png
docs/assets/3 (9).png
docs/assets/1 (11).png
docs/assets/screenshot-2020-06-05-at-5.48.32-pm.png
docs/assets/error.jpg
docs/assets/connections (1).png
docs/assets/screen-shot-2021-01-06-at-2.55.24-pm (1).png
docs/assets/screen-shot-2021-02-19-at-12.31.51-pm.png
docs/assets/image (119).png
docs/assets/9 (3).png
docs/assets/image (118).png
docs/assets/9 (2).png
docs/assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2).png
docs/assets/image (19).png
docs/assets/2 (19).png
docs/assets/3 (19).png
docs/assets/3 (8).png
docs/assets/1 (10).png
docs/assets/screenshot-2020-09-14-at-5.55.45-pm.png
docs/assets/screen-shot-2021-07-28-at-5.50.09-pm.png
docs/assets/mixpanel.png
docs/assets/screen-shot-2021-07-28-at-5.47.34-pm.png
docs/assets/scheduler.png
docs/assets/iam.png
docs/assets/screen-shot-2020-12-15-at-4.26.30-pm.png
docs/assets/test-event (1).jpg
docs/assets/ga4.png
docs/assets/output.png
docs/assets/4 (24).png
docs/assets/5 (24).png
docs/assets/image (58).png
docs/assets/screen-shot-2021-01-05-at-3.22.52-pm.png
docs/assets/image (23).png
docs/assets/2 (23).png
docs/assets/3 (23).png
docs/assets/addDataStore.png
docs/assets/screenshot-2020-04-08-at-12.09.07-pm (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png
docs/assets/image (122).png
docs/assets/gainsight-px-account-custom-attribute-mapping.png
docs/assets/screenshot-2020-07-14-at-10.37.02-pm.png
docs/assets/screen-shot-2021-01-05-at-3.18.17-pm (1) (1) (1) (2) (2) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (3) (3) (3) (3) (1) (2).png
docs/assets/image (74).png
docs/assets/screen-shot-2021-07-28-at-5.47.10-pm.png
docs/assets/sheets-config.png
docs/assets/screen-shot-2021-05-19-at-4.54.15-pm.png
docs/assets/image (62).png
docs/assets/screenshot-2020-08-05-at-11.49.10-am.png
docs/assets/8 (3).png
docs/assets/dest5.png
docs/assets/image (38) (1).png
docs/assets/screen-shot-2021-02-19-at-3.01.03-pm (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2).png
docs/assets/aws-lambda-1.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (3).png
docs/assets/image (35).png
docs/assets/screen-shot-2021-06-01-at-2.02.10-pm.png
docs/assets/2 (9).png
docs/assets/6 (17).png
docs/assets/RedditPixel-2.png
docs/assets/image (18) (1) (1) (1) (1) (1) (1).png
docs/assets/screen-shot-2021-06-08-at-4.01.45-pm.png
docs/assets/screen-shot-2021-06-01-at-1.53.46-pm.png
docs/assets/6 (7) (1).png
docs/assets/aws-lambda-3.png
docs/assets/image (114).png
docs/assets/image (17) (1) (1) (1).png
docs/assets/service-account.png
docs/assets/screen-shot-2020-12-17-at-4.39.38-pm.png
docs/assets/second.png
docs/assets/screenshot-2020-07-16-at-6.00.57-pm.png
docs/assets/kafka-sasl.png
docs/assets/splitioconfig.png
docs/assets/3 (15).png
docs/assets/2 (15).png
docs/assets/image (15).png
docs/assets/screenshot_2020-12-09_at_11.17.00_pm.png
docs/assets/3 (4).png
docs/assets/6 (21).png
docs/assets/test-event.jpg
docs/assets/screen-shot-2021-03-03-at-1.09.54-pm.png
docs/assets/Google-Sheet-ID.png
docs/assets/unity1 (1) (2) (1).png
docs/assets/write-key-vs-token (2) (1) (2) (3) (3) (3) (3) (1) (4).png
docs/assets/screen-shot-2021-02-19-at-3.01.03-pm (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2).png
docs/assets/image (54).png
docs/assets/7 (6).png
docs/assets/image (102).png
docs/assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (4).png
docs/assets/1 (26).png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (6).png
docs/assets/1 (3).png
docs/assets/screen-shot-2020-12-18-at-10.44.41-am.png
docs/assets/screenshot-2020-02-17-at-5.49.05-pm.png
docs/assets/ios.png
docs/assets/6 (7).png
docs/assets/screenshot-2019-12-10-at-7.21.35-pm.png
docs/assets/image (97).png
docs/assets/image (13) (2) (1).png
docs/assets/image (78).png
docs/assets/screenshot-2020-02-27-at-5.33.31-pm.png
docs/assets/screen-shot-2020-12-17-at-4.38.57-pm (1).png
docs/assets/screen-shot-2021-01-13-at-11.00.29-am.png
docs/assets/5 (1).png
docs/assets/image (81).png
docs/assets/validations.png
docs/assets/dest6.png
docs/assets/2 (5).png
docs/assets/aws-lambda-2.png
docs/assets/5 (12).png
docs/assets/screen-shot-2020-12-18-at-10.43.57-am.png
docs/assets/4 (12).png
docs/assets/screen-shot-2021-02-16-at-3.00.43-pm.png
docs/assets/rs-cloud/add-source.png
docs/assets/rs-cloud/duplicate-destination.png
docs/assets/rs-cloud/rename-source.png
docs/assets/rs-cloud/source-live-events-details.png
docs/assets/rs-cloud/sources.png
docs/assets/rs-cloud/audit-logs.png
docs/assets/rs-cloud/connections-dashboard.png
docs/assets/rs-cloud/source-configure.png
docs/assets/rs-cloud/rudderstack-destinations.png
docs/assets/rs-cloud/rudderstack-cloud-mode.png
docs/assets/rs-cloud/rudderstack-device-mode.png
docs/assets/rs-cloud/invite-teammates.png
docs/assets/rs-cloud/transformation-live-events-errors.png
docs/assets/rs-cloud/rudderstack-source-details.png
docs/assets/rs-cloud/syncs-dashboard.png
docs/assets/rs-cloud/transformations-dashboard.png
docs/assets/rs-cloud/audit-logs-source.png
docs/assets/rs-cloud/rudderstack-dashboard.png
docs/assets/rs-cloud/workspace-token.png
docs/assets/rs-cloud/audit-logs-details.png
docs/assets/rs-cloud/get-started.png
docs/assets/rs-cloud/web-device-mode-settings.png
docs/assets/rs-cloud/teammate-details.png
docs/assets/rs-cloud/destination-live-events-details.png
docs/assets/rs-cloud/audit-logs-dashboard.png
docs/assets/rs-cloud/destinations.png
docs/assets/rs-cloud/rename-destination.png
docs/assets/rs-cloud/rudderstack-sources.png
docs/assets/rs-cloud/directory.png
docs/assets/rs-cloud/custom-audience-error.png
docs/assets/rs-cloud/destination-live-events.png
docs/assets/rs-cloud/source-live-events.png
docs/assets/rs-cloud/getting-started-connection-modes.png
docs/assets/rs-cloud/transformations.png
docs/assets/rs-cloud/destination-configuration.png
docs/assets/rs-cloud/permissions-management-6.png
docs/assets/rs-cloud/permissions-management-4.png
docs/assets/rs-cloud/custom-audience-full-error.png
docs/assets/rs-cloud/permissions-management-5.png
docs/assets/rs-cloud/permissions-management-1.png
docs/assets/rs-cloud/select-source.png
docs/assets/rs-cloud/add-source-destination.png
docs/assets/rs-cloud/transformation-live-events-details.png
docs/assets/rs-cloud/settings-dashboard.png
docs/assets/rs-cloud/rs-cloud-workflow.png
docs/assets/rs-cloud/permissions-management-2.png
docs/assets/rs-cloud/permissions-management-3.png
docs/assets/rudderstack-open-source/test-event-error.png
docs/assets/rudderstack-open-source/write-key.png
docs/assets/rudderstack-open-source/control-plane-lite-dashboard.png
docs/assets/rudderstack-open-source/workspace-token.png
docs/assets/rudderstack-open-source/export-source-config.png
docs/assets/rudderstack-open-source/write-key-vs-workspace-token.png
docs/assets/rudderstack-open-source/rudder-docker-yml-file.png
docs/assets/rudderstack-open-source/source-write-key.png
docs/assets/rudderstack-open-source/test-event.png
docs/assets/rudderstack-open-source/control-plane-lite-source-writekey.png
docs/assets/rudderstack-open-source/rudder-config-1.png
docs/assets/screenshot-2020-01-09-at-12.08.19-pm.png
docs/assets/image (32) (1) (1) (1) (1).png
docs/assets/screen-shot-2020-12-04-at-11.02.19-am (1).png
docs/assets/screen-shot-2021-01-12-at-12.59.39-pm.png
docs/assets/RedditPixel-1.png
docs/assets/image (39).png
docs/assets/5 (19).png
docs/assets/screenshot-2020-09-14-at-5.56.58-pm.png
docs/assets/screenshot-2021-08-31-at-1.44.18-pm.png
docs/assets/screen-shot-2021-05-19-at-4.55.08-pm (1).png
docs/assets/4 (19).png
docs/assets/7 (10).png
docs/assets/6 (10).png
docs/assets/dw-integrations/snowflake-create-warehouse.png
docs/assets/dw-integrations/gcs-datalake-connection-settings-2.png
docs/assets/dw-integrations/gcs-datalake-4.png
docs/assets/dw-integrations/gcs-datalake-5.png
docs/assets/dw-integrations/snowflake-connection-settings.png
docs/assets/dw-integrations/postgresql-ssl-pem-contents.png
docs/assets/dw-integrations/redshift-connection-settings.png
docs/assets/dw-integrations/gcs-datalake-connection-settings-1.png
docs/assets/dw-integrations/azure-datalake-1.png
docs/assets/dw-integrations/gcs-datalake-7.png
docs/assets/dw-integrations/gcs-datalake-6.png
docs/assets/dw-integrations/snowflake-create-user.png
docs/assets/dw-integrations/bigquery-connection-settings-2.png
docs/assets/dw-integrations/gcs-datalake-2.png
docs/assets/dw-integrations/gcs-datalake-3.png
docs/assets/dw-integrations/redshift-connection-settings2.png
docs/assets/dw-integrations/snowflake-account-id-example.png
docs/assets/dw-integrations/mssqlconnection2.png
docs/assets/dw-integrations/bigquery-connection-settings-1.png
docs/assets/dw-integrations/gcs-datalake-1.png
docs/assets/dw-integrations/clickhouse-connection-settings2.png
docs/assets/dw-integrations/namespace-example.png
docs/assets/dw-integrations/delta-lake-5.png
docs/assets/dw-integrations/delta-lake-connection-settings-2.png
docs/assets/dw-integrations/s3-datalake-crawler-8.png
docs/assets/dw-integrations/delta-lake-connection-settings-3.png
docs/assets/dw-integrations/snowflake-connection-settings-2.png
docs/assets/dw-integrations/delta-lake-4.png
docs/assets/dw-integrations/delta-lake-6.png
docs/assets/dw-integrations/delta-lake-connection-settings-1.png
docs/assets/dw-integrations/gcs-datalake-time-window-layout.png
docs/assets/dw-integrations/snowflake-connection-settings-1.png
docs/assets/dw-integrations/delta-lake-7.png
docs/assets/dw-integrations/delta-lake-3.png
docs/assets/dw-integrations/delta-lake-connection-settings-4.png
docs/assets/dw-integrations/delta-lake-connection-settings-5.png
docs/assets/dw-integrations/delta-lake-2.png
docs/assets/dw-integrations/postgresql-connection-settings-2.png
docs/assets/dw-integrations/s3-datalake-connection-settings.png
docs/assets/dw-integrations/databricks-autopilot-options.png
docs/assets/dw-integrations/clickhouse-connection-settings.png
docs/assets/dw-integrations/postgresql-connection-settings-1.png
docs/assets/dw-integrations/delta-lake-1.png
docs/assets/dw-integrations/delta-lake-11.png
docs/assets/dw-integrations/s3-datalake-crawler-1.png
docs/assets/dw-integrations/delta-lake-10.png
docs/assets/dw-integrations/azure-synapse-connection2.png
docs/assets/dw-integrations/delta-lake-12.png
docs/assets/dw-integrations/s3-datalake-crawler-2.png
docs/assets/dw-integrations/s3-datalake-crawler-3.png
docs/assets/dw-integrations/s3-datalake-crawler-7.png
docs/assets/dw-integrations/snowflake-create-database.png
docs/assets/dw-integrations/s3-datalake-crawler-6.png
docs/assets/dw-integrations/namespace.png
docs/assets/dw-integrations/delta-lake-9.png
docs/assets/dw-integrations/s3-datalake-crawler-4.png
docs/assets/dw-integrations/s3-datalake-crawler-5.png
docs/assets/dw-integrations/delta-lake-8.png
docs/assets/dw-integrations/postgresql-verify-ca-dashboard.png
docs/assets/dw-integrations/azure-synapse-connection.png
docs/assets/dw-integrations/delta-lake-connection-settings-13.png
docs/assets/dw-integrations/mssqlconnection.png
docs/assets/dw-integrations/s3-datalake-querying-data-1.png
docs/assets/dw-integrations/snowflake-accountid-example.png
docs/assets/dw-integrations/s3-datalake-querying-data-3.png
docs/assets/dw-integrations/gcs-datalake-8.png
docs/assets/dw-integrations/json-column-dashboard-setting.png
docs/assets/dw-integrations/s3-datalake-querying-data-2.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (4).png
docs/assets/segment1.png
docs/assets/image (32).png
docs/assets/screenshot-2020-08-05-at-11.52.07-am.png
docs/assets/8 (4).png
docs/assets/writekey.jpg
docs/assets/4.png
docs/assets/image (13) (2).png
docs/assets/image (65).png
docs/assets/image (48) (1).png
docs/assets/screenshot-2020-01-10-at-3.05.31-pm.png
docs/assets/adjust.png
docs/assets/image (17) (1) (1).png
docs/assets/5.-consumer-key-secret.png
docs/assets/datasource.png
docs/assets/image (125).png
docs/assets/screenshot-2020-02-26-at-7.22.29-pm.png
docs/assets/image (73).png
docs/assets/screen-shot-2021-01-05-at-2.05.48-pm.png
docs/assets/image (120) (1).png
docs/assets/adobe-7.png
docs/assets/test-api-1.png
docs/assets/screen-shot-2021-06-07-at-4.24.51-pm.png
docs/assets/image (7).png
docs/assets/1 (8).png
docs/assets/3 (24).png
docs/assets/image (24).png
docs/assets/2 (24).png
docs/assets/source.png
docs/assets/image (109).png
docs/assets/adobe-6.png
docs/assets/screen-shot-2021-03-03-at-1.22.01-pm.png
docs/assets/transformations.png
docs/assets/braze.png
docs/assets/screenshot-2019-10-25-at-12.22.22-pm.png
docs/assets/screen-shot-2021-02-09-at-5.08.56-pm.png
docs/assets/screenshot-2020-09-14-at-5.59.00-pm.png
docs/assets/5 (23).png
docs/assets/rudderstack2x_-12-.png
docs/assets/4 (23).png
docs/assets/screen-shot-2021-01-06-at-3.58.07-pm.png
docs/assets/marketo-connection.png
docs/assets/screen-shot-2021-07-01-at-5.36.15-pm (3) (3) (2) (3) (3) (3) (3) (3) (1) (1).png
docs/assets/t.png
docs/assets/5.png
docs/assets/screenshot-2020-06-01-at-2.29.13-pm.png
docs/assets/image (100) (1) (1) (1) (1) (1) (1) (1) (1) (1).png
docs/assets/1 (17).png
docs/assets/screenshot-2020-07-13-at-5.35.25-pm.png
docs/assets/ExtoleSourceCreate.png
docs/assets/screenshot-202020-02-18-20at-204.01.19-20pm.png
docs/assets/clone-1.png
docs/assets/image (49).png
docs/assets/screen-shot-2021-02-16-at-3.05.09-pm.png
docs/assets/azure-synapse-connection.png
docs/assets/screenshot-2020-01-17-at-1.01.52-pm.png
docs/assets/Criteo.png
docs/assets/4 (3) (2) (2) (1) (2) (2).png
docs/assets/clone-3.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (8).png
docs/assets/4 (15).png
docs/assets/screenshot-2021-10-07-at-2.37.41-pm.png
docs/assets/screen-shot-2020-12-17-at-4.39.14-pm.png
docs/assets/5 (15).png
docs/assets/2 (2).png
docs/assets/screenshot-2021-08-31-at-1.45.36-pm.png
docs/assets/segment2.png
docs/assets/screenshot-2020-10-12-at-4.51.52-pm.png
docs/assets/image4.png
docs/assets/screenshot-2021-05-05-at-6.39.13-pm.png
docs/assets/image (86).png
docs/assets/5 (6).png
docs/assets/screenshot-2020-03-31-at-11.56.32-am.png
docs/assets/image (69).png
docs/assets/8 (8).png
docs/assets/7.png
docs/assets/image (129).png
docs/assets/image (90).png
docs/assets/AF_choose_src.png
docs/assets/image (103) (2) (2) (2) (2) (2) (1) (2) (2) (2) (2) (1).png
docs/assets/mssqlconnection.png
docs/assets/adobe-4.png
docs/assets/1 (4).png
docs/assets/workspace-token (4) (3) (4) (4) (4) (4) (2) (1) (1).png
docs/assets/1 (21).png
docs/assets/2 (28).png
docs/assets/image (28).png
docs/assets/test-api-2.png
docs/assets/3 (28).png
docs/assets/screenshot-2020-02-27-at-3.04.47-pm.png
docs/assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3).png
docs/assets/appcues.png
docs/assets/screen-shot-2021-05-19-at-5.07.08-pm.png
docs/assets/image (53).png
docs/assets/7 (1).png
docs/assets/team-2.png
docs/assets/image (105).png
docs/assets/screenshot-2020-07-31-at-1.01.29-pm.png
docs/assets/write-key-vs-token (2) (1) (2) (3) (3) (3) (3) (1) (3).png
docs/assets/test-api-3.png
docs/assets/7 (2) (1).png
docs/assets/adobe-5.png
docs/assets/screen-shot-2021-06-07-at-4.17.14-pm.png
docs/assets/amplitude (1).png
docs/assets/screenshot-2020-08-05-at-11.40.12-am (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2).png
docs/assets/12.-save-script.png
docs/assets/screen-shot-2020-12-17-at-4.40.01-pm.png
docs/assets/screen-shot-2021-02-19-at-3.56.01-pm.png
docs/assets/screenshot-2020-04-22-at-12.03.34-pm.png
docs/assets/screen-shot-2021-01-05-at-5.18.59-pm.png
docs/assets/2 (12).png
docs/assets/image (12).png
docs/assets/wspace-token (1).png
docs/assets/3 (12).png
docs/assets/3 (3).png
docs/assets/screen-shot-2021-01-06-at-4.05.51-pm (1) (1) (1) (1) (2) (2) (3) (2) (1) (3).png
docs/assets/6.png
docs/assets/home-3.png
docs/assets/segment3.png
docs/assets/unity3 (1).png
docs/assets/image (45).png
docs/assets/adjust1.png
docs/assets/js-sdk-2x-1-.png
docs/assets/image (113).png
docs/assets/14 (1).png
docs/assets/clone-2.png
docs/assets/4 (7).png
docs/assets/screen-shot-2021-02-09-at-5.06.53-pm.png
docs/assets/facebook.png
docs/assets/4 (6).png
docs/assets/image (44).png
docs/assets/image1.png
docs/assets/image (112).png
docs/assets/screen-shot-2020-12-17-at-4.40.48-pm.png
docs/assets/1 (15) (1).png
docs/assets/screenshot-2020-08-13-at-2.26.40-pm.png
docs/assets/sheet-name.png
docs/assets/image (103) (2) (2) (2) (2) (2) (1) (2) (2) (2) (2) (1) (1).png
docs/assets/screen-shot-2021-01-13-at-4.42.40-pm.png
docs/assets/rudderstack2x_-9-.png
docs/assets/2 (13).png
docs/assets/image (13).png
docs/assets/3 (13).png
docs/assets/3 (2).png
docs/assets/screen-shot-2021-01-06-at-4.05.51-pm (1) (1) (1) (1) (2) (2) (3) (2) (1) (2).png
docs/assets/2.png
docs/assets/image-8-.png
docs/assets/image (84) (1).png
docs/assets/write-key-vs-token (2) (1) (2) (3) (3) (3) (3) (1) (2).png
docs/assets/adobe-1.png
docs/assets/Delighted.png
docs/assets/image (52).png
docs/assets/image (104).png
docs/assets/screen-shot-2021-02-16-at-3.04.25-pm.png
docs/assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (2).png
docs/assets/device-mode.png
docs/assets/warehouse-migration.png
docs/assets/1 (5).png
docs/assets/1 (20).png
docs/assets/screen-shot-2021-06-07-at-4.17.14-pm (1).png
docs/assets/screenshot-2020-02-17-at-5.41.41-pm.png
docs/assets/2 (29).png
docs/assets/image (29).png
docs/assets/screenshot-2020-01-06-at-10.04.20-am.png
docs/assets/6 (1).png
docs/assets/quantum-metric.png
docs/assets/image (128).png
docs/assets/image (91).png
docs/assets/screen-shot-2020-12-18-at-11.01.14-am.png
docs/assets/dest.png
docs/assets/screenshot-2021-10-07-at-2.41.34-pm.png
docs/assets/3.png
docs/assets/screen-shot-2021-05-19-at-4.23.46-pm.png
docs/assets/unity2 (1).png
docs/assets/badge.png
docs/assets/5 (7).png
docs/assets/image (87).png
docs/assets/image (68).png
docs/assets/Klaviyo_conf.png
docs/assets/gainsight-px-connection-settings-1.png
docs/assets/4 (14).png
docs/assets/2 (3).png
docs/assets/5 (14).png
docs/assets/screenshot-2020-11-20-at-1.45.26-pm.png
docs/assets/image (48).png
docs/assets/clone-5.png
docs/assets/9 (4).png
docs/assets/image2.png
docs/assets/send-test-events.png
docs/assets/screenshot-2021-04-21-at-6.08.10-am.png
docs/assets/image-4-.png
docs/assets/1 (16).png
docs/assets/mssqlconnection (2).png
docs/assets/readme-example.gif
docs/assets/get-started/rudderstack-backend-architecture.png
docs/assets/get-started/connections-dashboard.png
docs/assets/get-started/adding-new-destination.png
docs/assets/get-started/rudderstack-architecture.png
docs/assets/get-started/source-details.png
docs/assets/get-started/rudderstack-backend-workflow.png
docs/assets/1.png
docs/assets/screen-shot-2020-12-17-at-4.38.57-pm.png
docs/assets/screen-shot-2021-07-01-at-5.36.15-pm332333331.png
docs/assets/5 (22).png
docs/assets/4 (22).png
docs/assets/mixpanel-config.png
docs/assets/test-api-4.png
docs/assets/rudder-core-architecture.png
docs/assets/image (108).png
docs/assets/adobe-2.png
docs/assets/rudderstack-connections.png
docs/assets/image.png
docs/assets/first.png
docs/assets/rudderstack2x_-13- (1) (1) (1) (1) (1) (1) (1).png
docs/assets/image (6).png
docs/assets/userlist.png
docs/assets/1 (9).png
docs/assets/3 (25).png
docs/assets/image (25).png
docs/assets/2 (25).png
docs/assets/adobe-3.png
docs/assets/screenshot-2021-05-05-at-6.33.40-pm.png
docs/assets/webhook (1).png
docs/assets/screen-shot-2021-06-23-at-9.15.42-am (2) (2) (2).png
docs/assets/test-api-5.png
docs/assets/screen-shot-2021-02-08-at-1.24.32-pm.png
docs/assets/image (124).png
docs/assets/image (72).png
docs/assets/screen-shot-2021-08-25-at-11.18.08-am.png
docs/assets/screenshot-2020-02-26-at-7.21.43-pm.png
docs/assets/screenshot-2020-05-06-at-7.15.14-pm.png
docs/assets/image (132).png
docs/assets/connectionScreen.png
docs/assets/screen-shot-2021-01-05-at-3.21.18-pm.png
docs/assets/image (64).png
docs/assets/8 (5).png
docs/assets/screenshot-2020-05-05-at-1.53.11-pm.png
docs/assets/image (97) (1) (1) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (3) (5).png
docs/assets/image (33).png
docs/assets/image3.png
docs/assets/5 (18).png
docs/assets/4 (18).png
docs/assets/1 (21) (1).png
docs/assets/7 (11).png
docs/assets/clone-4.png
docs/assets/6 (11).png`

/* Get this data by running: git grep -n '<img src=".*>' > mdxImages.txt */
let mdxImages = `docs/api/test-api.mdx:67:<img src="../assets/test-api-1.png" alt="Destination ID" />
docs/api/test-api.mdx:265:<img src="../assets/test-api-3.png" alt="Configuration variables" />
docs/api/test-api.mdx:269:<img src="../assets/test-api-4.png" alt="Dashboard settings" />
docs/api/test-api.mdx:291:<img src="../assets/test-api-2.png" alt="Source ID" />
docs/api/test-api.mdx:739:<img src="../assets/test-api-5.png" alt="Dashboard settings for webhook destination" />
docs/api/test-api.mdx:771:<img src="../assets/test-api-3.png" alt="Configuration variables" />
docs/dashboard-guides/audit-logs.mdx:27:<img src="../assets/rs-cloud/audit-logs.png" align="left" alt="Audit Logs" />
docs/dashboard-guides/audit-logs.mdx:31:<img src="../assets/rs-cloud/audit-logs-source.png" alt="Audit Logs details" />
docs/dashboard-guides/audit-logs.mdx:43:<img src="../assets/rs-cloud/audit-logs-details.png" alt="Source Audit Logs" />
docs/dashboard-guides/destinations.mdx:15:<img src="../assets/rs-cloud/destinations.png" alt="RudderStack destinations" />
docs/dashboard-guides/destinations.mdx:26:<img src="../assets/rs-cloud/add-source-destination.png" alt="RudderStack destinations" />
docs/dashboard-guides/destinations.mdx:30:<img src="../assets/rs-cloud/select-source.png" alt="Select the data source" />
docs/dashboard-guides/destinations.mdx:35:<img src="../assets/rs-cloud/destination-configuration.png" alt="Configuration successful" />
docs/dashboard-guides/destinations.mdx:43:<img src="../assets/rs-cloud/rename-destination.png" align="left" alt="Rename a destination" />
docs/dashboard-guides/destinations.mdx:77:<img src="../assets/rs-cloud/duplicate-destination.png" align="left" alt="Duplicate a destination" />
docs/dashboard-guides/live-events.mdx:44:<img src="../assets/rs-cloud/source-live-events.png" alt="Live Events" />
docs/dashboard-guides/live-events.mdx:48:<img src="../assets/rs-cloud/source-live-events-details.png" alt="Source live events details" />
docs/dashboard-guides/live-events.mdx:76:<img src="../assets/rs-cloud/destination-live-events.png" alt="Destination live events" />
docs/dashboard-guides/live-events.mdx:80:<img src="../assets/rs-cloud/destination-live-events-details.png" alt="Payload to the destination" />
docs/dashboard-guides/live-events.mdx:86:<img src="../assets/rs-cloud/custom-audience-error.png" alt="Custom Audience destination error" />
docs/dashboard-guides/live-events.mdx:90:<img src="../assets/rs-cloud/custom-audience-full-error.png" alt="Custom Audience full destination error" />
docs/dashboard-guides/live-events.mdx:102:<img src="../assets/rs-cloud/transformation-live-events-details.png" alt="Transformation live events" />
docs/dashboard-guides/live-events.mdx:106:<img src="../assets/rs-cloud/transformation-live-events-errors.png" alt="Transformation live events error message" />
docs/dashboard-guides/overview.mdx:14:<img src="../assets/rs-cloud/get-started.png" alt="RudderStack Dashboard" />
docs/dashboard-guides/overview.mdx:24:<img src="../assets/rs-cloud/connections-dashboard.png" alt="RudderStack Dashboard" />
docs/dashboard-guides/overview.mdx:48:<img src="../assets/rs-cloud/sources.png" alt="RudderStack sources" />
docs/dashboard-guides/overview.mdx:58:<img src="../assets/rs-cloud/destinations.png" alt="RudderStack destinations" />
docs/dashboard-guides/overview.mdx:68:<img src="../assets/rs-cloud/syncs-dashboard.png" alt="RudderStack Syncs" />
docs/dashboard-guides/overview.mdx:82:<img src="../assets/rs-cloud/transformations.png" alt="RudderStack Transformations and Libraries option" />
docs/dashboard-guides/overview.mdx:96:<img src="../assets/rs-cloud/audit-logs-dashboard.png" alt="Audit Logs" />
docs/dashboard-guides/overview.mdx:114:<img src="../assets/rs-cloud/settings-dashboard.png" alt="Settings in RudderStack dashboard" />
docs/dashboard-guides/overview.mdx:148:<img src="../assets/rs-cloud/workspace-token.png" alt="Workspace Token" />
docs/dashboard-guides/permissions-management.mdx:18:<img src="../assets/rs-cloud/permissions-management-1.png" alt="Invite teammates option" />
docs/dashboard-guides/permissions-management.mdx:129:<img src="../assets/rs-cloud/permissions-management-2.png" alt="Permissions tab" />
docs/dashboard-guides/permissions-management.mdx:145:<img src="../assets/rs-cloud/permissions-management-2.png" alt="Permissions tab" />
docs/dashboard-guides/permissions-management.mdx:154:<img src="../assets/rs-cloud/permissions-management-3.png" alt="Add members option" />
docs/dashboard-guides/permissions-management.mdx:166:<img src="../assets/rs-cloud/permissions-management-4.png" alt="Error logs" />
docs/dashboard-guides/permissions-management.mdx:172:<img src="../assets/rs-cloud/permissions-management-5.png" alt="Data privacy option" />
docs/dashboard-guides/permissions-management.mdx:185:<img src="../assets/rs-cloud/permissions-management-6.png" alt="Add members option" />
docs/dashboard-guides/personal-access-token.mdx:16:<img src="../assets/rudderstack-api/personal-access-tokens-1.png" alt="Personal access tokens setting in RudderStack dashboard" />
docs/dashboard-guides/personal-access-token.mdx:20:<img src="../assets/rudderstack-api/new-personal-access-token.png" alt="New personal access token in RudderStack dashboard" />
docs/dashboard-guides/personal-access-token.mdx:24:<img src="../assets/rudderstack-api/personal-access-tokens-2.png" alt="Personal access token name and role" />
docs/dashboard-guides/personal-access-token.mdx:29:<img src="../assets/rudderstack-api/personal-access-tokens-3.png" alt="Personal access token details" />
docs/dashboard-guides/sources.mdx:15:<img src="../assets/rs-cloud/rudderstack-sources.png" alt="RudderStack sources" />
docs/dashboard-guides/sources.mdx:24:<img src="../assets/rs-cloud/add-source.png" alt="Add Source" />
docs/dashboard-guides/sources.mdx:44:<img src="../assets/rs-cloud/source-configure.png" alt="Source configuration" />
docs/dashboard-guides/sources.mdx:60:<img src="../assets/rs-cloud/rename-source.png" align="left" alt="Rename source" />
docs/dashboard-guides/teammates.mdx:27:<img src="../assets/rs-cloud/invite-teammates.png" />
docs/dashboard-guides/teammates.mdx:31:<img src="../assets/rs-cloud/teammate-details.png" />
docs/destinations/rudderstack-connection-modes.mdx:40:<img src="../assets/rs-cloud/rudderstack-cloud-mode.png" alt="RudderStack Cloud Mode" />
docs/destinations/rudderstack-connection-modes.mdx:65:<img src="../assets/rs-cloud/rudderstack-device-mode.png" alt="RudderStack device mode" />
docs/destinations/rudderstack-connection-modes.mdx:69:<img src="../assets/rs-cloud/web-device-mode-settings.png" alt="RudderStack web SDK settings" />
docs/destinations/rudderstack-connection-modes.mdx:84:<img src="../assets/rs-cloud/getting-started-connection-modes.png" alt="Getting Started section in destination docs" />
docs/destinations/streaming-destinations/activecampaign.mdx:36:<img src="../../assets/event-stream-destinations/activecampaign-connection-settings.png" alt="ActiveCampaign connection settings" />
docs/destinations/streaming-destinations/activecampaign.mdx:223:<img src="../../assets/event-stream-destinations/activecampaign-eventname-truncation.png" alt="ActiveCampaign truncating event names" />
docs/destinations/streaming-destinations/adjust.mdx:36:<img src="../../assets/event-stream-destinations/adjust-connection-settings.png" alt="Adjust connection settings"/>
docs/destinations/streaming-destinations/adjust.mdx:37:<img src="../../assets/event-stream-destinations/adjust-connection-settings-2.png" alt="Adjust connection settings"/>
docs/destinations/streaming-destinations/adjust.mdx:425:<img src="../../assets/event-stream-destinations/adjust-app-token-1.png" alt="Adjust app token" />
docs/destinations/streaming-destinations/adjust.mdx:429:<img src="../../assets/event-stream-destinations/adjust-app-token-2.png" alt="Adjust app token"/>
docs/destinations/streaming-destinations/adjust.mdx:438:<img src="../../assets/event-stream-destinations/adjust-app-token-1.png" alt="Adjust app token" />
docs/destinations/streaming-destinations/adjust.mdx:442:<img src="../../assets/event-stream-destinations/adjust-event-token.png" alt="Adjust event token" />
docs/destinations/streaming-destinations/adjust.mdx:453:<img src="../../assets/event-stream-destinations/adjust-app-token-1.png" alt="Adjust app token" />
docs/destinations/streaming-destinations/adjust.mdx:457:<img src="../../assets/event-stream-destinations/adjust-partner-setup.png" alt="Adjust partner setup" />
docs/destinations/streaming-destinations/adobe-analytics/adobe-analytics-mobile-device-mode.mdx:19:<img src="https://user-images.githubusercontent.com/59817155/124233542-92a2fb80-db30-11eb-8722-c91a07cfa7ab.png" />
docs/destinations/streaming-destinations/adobe-analytics/adobe-analytics-mobile-device-mode.mdx:23:<img src="https://user-images.githubusercontent.com/59817155/124233808-db5ab480-db30-11eb-900f-75a3aa9a5367.png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:29:<img src="../../../assets/adobe-1.png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:30:<img src="../../../assets/adobe-2.png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:67:<img src="../../../assets/image (110).png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:68:<img src="../../../assets/adobe-3.png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:126:<img src="../../../assets/image (111).png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:127:<img src="../../../assets/mapping-adobe.png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:165:<img src="../../../assets/image (108).png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:191:<img src="../../../assets/image (109).png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:212:<img src="../../../assets/image (107).png" />
docs/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack.mdx:217:<img src="../../../assets/image (105).png" />
docs/destinations/streaming-destinations/adroll.mdx:32:<img src="../../assets/event-stream-destinations/adroll-connection-settings.png" alt="AdRoll connection settings"/>
docs/destinations/streaming-destinations/adroll.mdx:103:<img src="../../assets/event-stream-destinations/adroll-event-mapping.png" alt="AdRoll event mapping to audience"/>
docs/destinations/streaming-destinations/adroll.mdx:159:<img src="../../assets/event-stream-destinations/adroll-pixel.png" alt="AdRoll view Pixel"/>
docs/destinations/streaming-destinations/adroll.mdx:163:<img src="../../assets/event-stream-destinations/adroll-details.png" alt="AdRoll advertiser ID and Pixel ID"/>
docs/destinations/streaming-destinations/adroll.mdx:173:<img src="../../assets/event-stream-destinations/adroll-new-audience.png" alt="AdRoll new audience"/>
docs/destinations/streaming-destinations/adroll.mdx:185:<img src="../../assets/event-stream-destinations/adroll-new-audience-settings.png" alt="AdRoll new audience"/>
docs/destinations/streaming-destinations/adroll.mdx:192:<img src="../../assets/event-stream-destinations/adroll-event-mapping.png" alt="AdRoll event mapping to audience"/>
docs/destinations/streaming-destinations/airship.mdx:36:<img src="../../assets/event-stream-destinations/airship-connection-settings.png" alt="Airship connection settings" />
docs/destinations/streaming-destinations/airship.mdx:202:<img src="../../assets/event-stream-destinations/airship-create-new-token.png" alt="Airship project token" />
docs/destinations/streaming-destinations/airship.mdx:237:<img src="../../assets/event-stream-destinations/new-attribute-airship.png" alt="Airship new attributes" />
docs/destinations/streaming-destinations/algolia-insights.mdx:28:<img src="../../assets/Algolia.png"/>
docs/destinations/streaming-destinations/amazon-eventbridge.mdx:36:<img src="../../assets/image (70).png" />
docs/destinations/streaming-destinations/amazon-kinesis-firehose.mdx:33:<img src="../../assets/image (88).png" />
docs/destinations/streaming-destinations/amazon-kinesis-firehose.mdx:116:<img src="../../assets/screenshot-2020-07-14-at-10.37.02-pm.png" />
docs/destinations/streaming-destinations/amazon-kinesis.mdx:34:<img src="../../assets/image (7).png" />
docs/destinations/streaming-destinations/amazon-s3.mdx:148:<img src="../../assets/event-stream-destinations/s3-connection-settings.png" alt="S3 connection settings" />
docs/destinations/streaming-destinations/amazon-s3.mdx:171:<img src="../../assets/event-stream-destinations/s3-default-encryption.png" alt="S3 default encryption" />
docs/destinations/streaming-destinations/amplitude.mdx:519:<img src="../../assets/screenshot-2020-02-17-at-5.41.41-pm.png" />
docs/destinations/streaming-destinations/amplitude.mdx:521:<img src="../../assets/screenshot-2020-02-17-at-5.49.05-pm.png" />
docs/destinations/streaming-destinations/appcenter.mdx:30:<img src="../../assets/appcenter.png" /><span class="imageTitle">Connection settings for App Center destination</span>
docs/destinations/streaming-destinations/appcues.mdx:36:<img src="../../assets/appcues.png" /><span class="imageTitle">Connection settings for Appcues destination</span>
docs/destinations/streaming-destinations/appsflyer.mdx:41:<img src="../../assets/event-stream-destinations/appsflyer-connection-settings-final.png" alt="AppsFlyer connection settings in RudderStack" />
docs/destinations/streaming-destinations/appsflyer.mdx:621:<img src="../../assets/event-stream-destinations/appsflyer-2.png" alt="AppsFlyer transformation settings in RudderStack" />
docs/destinations/streaming-destinations/appsflyer.mdx:625:<img src="../../assets/event-stream-destinations/appsflyer-3.png" alt="Transformation settings after adding destination" />
docs/destinations/streaming-destinations/attentive-tag.mdx:38:<img src="../../assets/event-stream-destinations/attentive-tag-connection-settings.png" alt="Attentive Tag Connection Settings"/>
docs/destinations/streaming-destinations/attentive-tag.mdx:306:<img src="../../assets/event-stream-destinations/attentive-tag-connection-settings-1.png" alt="Attentive Tag Connection Settings"/>
docs/destinations/streaming-destinations/attentive-tag.mdx:312:<img src="../../assets/event-stream-destinations/attentive-tag-connection-settings-2.png" alt="Attentive Tag Connection Settings"/>
docs/destinations/streaming-destinations/autopilot.mdx:32:<img src="../../assets/autopilot.png" /><span class="imageTitle">Autopilot Settings</span>
docs/destinations/streaming-destinations/aws-personalize.mdx:47:<img src="../../assets/event-stream-destinations/personalize-1.png" alt="Destination Settings for AWS Personalize" />
docs/destinations/streaming-destinations/aws-personalize.mdx:48:<img src="../../assets/event-stream-destinations/personalize-2.png" alt="Destination Settings for AWS Personalize" />
docs/destinations/streaming-destinations/aws-personalize.mdx:157:<img src="../../assets/putItems.png" alt="PutItems" />
docs/destinations/streaming-destinations/aws-personalize.mdx:161:<img src="../../assets/putEvents.png" alt="Dashboard Configuration Based On The Above Example" />
docs/destinations/streaming-destinations/azure-event-hubs.mdx:44:<img src="../../assets/image (100) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Azure Event Hubs Connection Settings" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:28:<img src="../../assets/event-stream-destinations/bqstream-2.png" alt="BigQuery Stream connection settings" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:38:<img src="../../assets/event-stream-destinations/bqstream-3.png" alt="BigQuery Stream connection settings" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:73:<img src="../../assets/event-stream-destinations/bqstream-5.png" alt="BigQuery table schema" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:92:<img src="../../assets/event-stream-destinations/bqstream-5.png" alt="BigQuery table schema" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:106:<img src="../../assets/event-stream-destinations/bqstream-6.png" alt="BigQuery result" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:116:<img src="../../assets/event-stream-destinations/bqstream-service-account-1.png" alt="Service account under Create Credentials" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:122:<img src="../../assets/event-stream-destinations/bqstream-service-account-4.png" alt="BigQuery User role" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:128:<img src="../../assets/event-stream-destinations/bqstream-service-account-2.png" alt="Service account" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:134:<img src="../../assets/event-stream-destinations/bqstream-service-account-3.png" alt="Service account type" />
docs/destinations/streaming-destinations/bigquery-stream.mdx:148:<img src="../../assets/event-stream-destinations/bqstream-5.png" alt="BigQuery table schema" />
docs/destinations/streaming-destinations/bingads.mdx:30:<img src="../../assets/Bing_Ads.PNG" /><span class="imageTitle">Configuration Settings for Bing Ads</span>
docs/destinations/streaming-destinations/blueshift.mdx:35:<img src="../../assets/event-stream-destinations/blueshift-connection-settings.png" alt="Blueshift connection settings"/>
docs/destinations/streaming-destinations/blueshift.mdx:235:<img src="../../assets/event-stream-destinations/blueshift-api-keys.png" alt="Blueshift API key"/>
docs/destinations/streaming-destinations/branchio.mdx:33:<img src="../../assets/screenshot-2020-02-23-at-3.25.23-pm.png" /><span class="imageTitle">BranchIO Dashboard Settings</span>
docs/destinations/streaming-destinations/braze.mdx:29:<img src="../../assets/braze.png" />
docs/destinations/streaming-destinations/bugsnag.mdx:32:<img src="../../assets/event-stream-destinations/bugsnag-connection-settings.png" />
docs/destinations/streaming-destinations/bugsnag.mdx:213:<img src="../../assets/event-stream-destinations/bugsnag-api-key.png" />
docs/destinations/streaming-destinations/candu.mdx:33:<img src="../../assets/event-stream-destinations/candu-connection-settings.png" alt="Candu connection settings"/>
docs/destinations/streaming-destinations/candu.mdx:92:<img src="../../assets/event-stream-destinations/candu-api-key.png" alt="API Key Candu Account"/>
docs/destinations/streaming-destinations/chartbeat.mdx:28:<img src="../../assets/image (18).png" /><span class="imageTitle">Connection Settings for Chartbeat</span>
docs/destinations/streaming-destinations/clevertap.mdx:31:<img src="../../assets/clevertap-settings.png" alt="CleverTap connection settings" />
docs/destinations/streaming-destinations/confluent-cloud.mdx:35:<img src="../../assets/screenshot-2020-11-27-at-1.28.49-pm.png" /><span class="imageTitle">Confluent Cloud connection settings</span>
docs/destinations/streaming-destinations/criteo.mdx:27:<img src="../../assets/Criteo.png" />
docs/destinations/streaming-destinations/criteo.mdx:168:<img src="https://user-images.githubusercontent.com/59817155/127632648-75ef6105-09fc-4344-b59d-876d45d82951.png" />
docs/destinations/streaming-destinations/criteo.mdx:173:<img src="https://user-images.githubusercontent.com/59817155/127632914-01fb0c10-1741-478e-b5d3-685d4c145f26.png" />
docs/destinations/streaming-destinations/customer.io.mdx:32:<img src="../../assets/event-stream-destinations/customerio-connection-settings.png" alt="Customer.io connection settings" />
docs/destinations/streaming-destinations/customer.io.mdx:209:<img src="../../assets/event-stream-destinations/customerio-device-token.png" alt="Customer.io device token settings" />
docs/destinations/streaming-destinations/customer.io.mdx:255:<img src="../../assets/event-stream-destinations/customerio-siteid-apikey.png" alt="Customer.io site ID and API key" />
docs/destinations/streaming-destinations/dcm-floodlight/dcm-floodlight-device-mode.mdx:106:<img src="../../../assets/event-stream-destinations/sales-tag.png" alt="DCM Floodlight report builder"/>
docs/destinations/streaming-destinations/dcm-floodlight/dcm-floodlight-device-mode.mdx:109:<img src="../../../assets/event-stream-destinations/counter-tag.png" alt="DCM Floodlight report builder"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:26:<img src="../../../assets/event-stream-destinations/dcm-floodlight-connection-settings.png" alt="DCM Floodlight connection settings"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:43:<img src="../../../assets/event-stream-destinations/dcm-floodlight-connection-settings-2.png" alt="DCM Floodlight connection settings"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:65:<img src="../../../assets/event-stream-destinations/dcm-floodlight-connection-settings3.png" alt="DCM Floodlight connection settings"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:77:<img src="../../../assets/event-stream-destinations/dcm-floodlight-connection-settings4.png" alt="DCM Floodlight connection settings"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:98:<img src="../../../assets/event-stream-destinations/dcm-floodlight-cat-vs-type.png" alt="DCM Floodlight cat and type strings"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:104:<img src="../../../assets/event-stream-destinations/dcm-floodlight-advertiser-id.png" alt="DCM Floodlight advertiser ID"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:112:<img src="../../../assets/event-stream-destinations/dcm-floodlight-custom-variables.png" alt="DCM Floodlight custom variables"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:118:<img src="../../../assets/event-stream-destinations/dcm-floodlight-report-builder.png" alt="DCM Floodlight report builder"/>
docs/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack.mdx:125:<img src="../../../assets/event-stream-destinations/dcm-floodlight-report-settings.png" alt="DCM Floodlight report settings"/>
docs/destinations/streaming-destinations/delighted.mdx:32:<img src="../../assets/Delighted.png" /><span class="imageTitle">Delighted Connection Settings</span>
docs/destinations/streaming-destinations/digitalocean-spaces.mdx:34:<img src="../../assets/screenshot-2020-08-10-at-6.38.46-pm.png" />
docs/destinations/streaming-destinations/drip/setting-up-drip-in-rudderstack.mdx:24:<img src="../../../assets/3 (27).png" /><span class="imageTitle">Connection Settings for Drip</span>
docs/destinations/streaming-destinations/drip/setting-up-drip-in-rudderstack.mdx:28:<img src="https://user-images.githubusercontent.com/59817155/128679489-3cce8c00-3203-4ec6-ac7b-ae883fcd4e69.png" />
docs/destinations/streaming-destinations/drip/setting-up-drip-in-rudderstack.mdx:32:<img src="https://user-images.githubusercontent.com/59817155/128698438-9e37b1ca-eb3b-4217-9deb-53a47ded5119.png" />
docs/destinations/streaming-destinations/facebook-app-events.mdx:36:<img src="../../assets/image (118).png" />
docs/destinations/streaming-destinations/fb-custom-audience.mdx:46:<img src="../../assets/event-stream-destinations/Fb-custom-audience-connection-settings-1.png" />
docs/destinations/streaming-destinations/fb-custom-audience.mdx:47:<img src="../../assets/event-stream-destinations/Fb-custom-audience-connection-settings-2.png" /><span class="imageTitle">Facebook Custom Audience Setup</span>
docs/destinations/streaming-destinations/fb-custom-audience.mdx:227:<img src="../../assets/event-stream-destinations/fb-custom-audience-source.png" alt="Audience source" /> 
docs/destinations/streaming-destinations/fb-custom-audience.mdx:231:<img src="../../assets/event-stream-destinations/fb-custom-audience-customer-value.png" alt="Customer value" /> 
docs/destinations/streaming-destinations/fb-custom-audience.mdx:250:<img src="../../assets/event-stream-destinations/fb-custom-audience-edit-permissions.png" alt="Customer audience edit permissions" />
docs/destinations/streaming-destinations/fb-custom-audience.mdx:256:<img src="https://user-images.githubusercontent.com/59817155/123789893-4ae75e80-d8fb-11eb-879f-825b7b6662b7.png" />
docs/destinations/streaming-destinations/fb-custom-audience.mdx:261:<img src="https://user-images.githubusercontent.com/59817155/123789891-49b63180-d8fb-11eb-8c60-0232bfedaffe.png" />
docs/destinations/streaming-destinations/fb-custom-audience.mdx:270:<img src="https://user-images.githubusercontent.com/59817155/123803294-cc45ed80-d909-11eb-9ff6-9839c29005fa.png" />
docs/destinations/streaming-destinations/fb-custom-audience.mdx:274:<img src="https://user-images.githubusercontent.com/59817155/123803479-f697ab00-d909-11eb-8df9-d003c0803d7e.png" />
docs/destinations/streaming-destinations/fb-custom-audience.mdx:278:<img src="../../assets/event-stream-destinations/fb-custom-audience-api-tools.png" alt="Marketing API tools" /> 
docs/destinations/streaming-destinations/fb-custom-audience.mdx:282:<img src="../../assets/event-stream-destinations/fb-custom-audience-access-token.png" alt="Access token" />
docs/destinations/streaming-destinations/fb-pixel.mdx:38:<img src="../../assets/event-stream-destinations/fbp-connection-settings-1.png" alt="Connection settings" />
docs/destinations/streaming-destinations/fb-pixel.mdx:51:<img src="../../assets/event-stream-destinations/fbp-connection-settings-2.png" alt="Connection settings" />
docs/destinations/streaming-destinations/fb-pixel.mdx:88:<img src="../../assets/event-stream-destinations/fbp-connection-settings-4.png" alt="Connection settings" />
docs/destinations/streaming-destinations/fb-pixel.mdx:143:<img src="../../assets/event-stream-destinations/fbp-connection-settings-5.png" alt="Connection settings" />
docs/destinations/streaming-destinations/fb-pixel.mdx:362:<img src="../../assets/screen-shot-2021-03-03-at-1.22.01-pm.png" />
docs/destinations/streaming-destinations/fb-pixel.mdx:366:<img src="../../assets/screen-shot-2021-03-03-at-1.19.03-pm.png" />
docs/destinations/streaming-destinations/fb-pixel.mdx:375:<img src="../../assets/screen-shot-2021-03-03-at-1.44.33-pm.png" />
docs/destinations/streaming-destinations/firebase.mdx:36:<img src="../../assets/event-stream-destinations/firebase-connection-settings.png" alt="Firebase connection settings" />
docs/destinations/streaming-destinations/fullstory.mdx:28:<img src="../../assets/event-stream-destinations/fullstory-connection-settings.png" alt="FullStory connection settings" />
docs/destinations/streaming-destinations/fullstory.mdx:85:<img src="../../assets/event-stream-destinations/fullstory-devicemode-ios.png" alt="Final entry"/>
docs/destinations/streaming-destinations/fullstory.mdx:148:<img src="../../assets/event-stream-destinations/fullstory-devicemode-android.png" alt="Final entry"/>
docs/destinations/streaming-destinations/g-ads-gtag.mdx:33:<img src="../../assets/event-stream-destinations/gads-connection-settings.png" alt="Google Ads connection settings" />
docs/destinations/streaming-destinations/gainsight-px.mdx:32:<img src="../../assets/gainsight-px-connection-settings-1.png" />
docs/destinations/streaming-destinations/gainsight-px.mdx:47:<img src="../../assets/gainsight-px-product-tag.png" />
docs/destinations/streaming-destinations/gainsight-px.mdx:56:<img src="../../assets/gainsight-px-create-attribute.png" />
docs/destinations/streaming-destinations/gainsight-px.mdx:61:<img src="https://user-images.githubusercontent.com/59817155/123422602-119dae80-d5dc-11eb-869f-6c796c821821.png" /><span class="imageTitle">Connection Settings 2</span>
docs/destinations/streaming-destinations/gainsight-px.mdx:75:<img src="../../assets/gainsight-px-user-attribute-mapping-1.png" />
docs/destinations/streaming-destinations/gainsight-px.mdx:127:<img src="../../assets/gainsight-px-account-custom-attribute-mapping.png" /><span class="imageTitle">Account Custom Attribute Mapping</span>
docs/destinations/streaming-destinations/gainsight-px.mdx:179:<img src="../../assets/gainsight-px-global-context.png" />
docs/destinations/streaming-destinations/gainsight.mdx:38:<img src="../../assets/gainsightcs-settings.png" /><span class="imageTitle">Connection screen for Gainsight</span>
docs/destinations/streaming-destinations/gainsight.mdx:113:<img src="../../assets/gainsightcs-custom-field-person.png" /><span class="imageTitle">gainsightcs-custom-field-person</span>
docs/destinations/streaming-destinations/gainsight.mdx:117:<img src="../../assets/gainsightcs-person-map.png" /><span class="imageTitle">gainsightcs-field-map-person</span>
docs/destinations/streaming-destinations/gainsight.mdx:182:<img src="../../assets/gainsightcs-custom-field-company.png" /><span class="imageTitle">gainsightcs-custom-field-company</span>
docs/destinations/streaming-destinations/gainsight.mdx:186:<img src="../../assets/gainsightcs-company-map.png" /><span class="imageTitle">gainsightcs-field-map-company</span>
docs/destinations/streaming-destinations/gainsight.mdx:209:<img src="../../assets/gainsightcs-event-main-settings.png" /><span class="imageTitle">gainsight-event-main-settings</span>
docs/destinations/streaming-destinations/gainsight.mdx:250:<img src="../../assets/gainsightcs-event-create.png" /><span class="imageTitle">gainsightcs-event-map-sample</span>
docs/destinations/streaming-destinations/gainsight.mdx:254:<img src="../../assets/gainsightcs-event-map-sample.png" /><span class="imageTitle">gainsightcs-event-map-sample</span>
docs/destinations/streaming-destinations/google-adwords-enhanced-conversions.mdx:39:<img src="../../assets/event-stream-destinations/enhanced-conversions-connection-settings.png" alt="Google AdWords Enhanced Conversions connection settings" />
docs/destinations/streaming-destinations/google-adwords-enhanced-conversions.mdx:147:<img src="../../assets/event-stream-destinations/google-adwords-remarketing-lists-customer-id.png" alt="Google AdWords Enhanced Conversions connection settings" />
docs/destinations/streaming-destinations/google-adwords-enhanced-conversions.mdx:157:<img src="../../assets/event-stream-destinations/gads-access-security.png" alt="Access and Security option in Google Ads dashboard" />
docs/destinations/streaming-destinations/google-adwords-enhanced-conversions.mdx:161:<img src="../../assets/event-stream-destinations/gads-specify-access-level.png" alt="Specifying access levels" />
docs/destinations/streaming-destinations/google-adwords-remarketing-list.mdx:35:<img src="../../assets/event-stream-destinations/google-adwords-remarketing-lists-connection-settings.png" alt="Google Adwords Remarketing Lists (Customer Match) connection settings" />
docs/destinations/streaming-destinations/google-adwords-remarketing-list.mdx:160:<img src="../../assets/event-stream-destinations/google-adwords-remarketing-lists-customer-id.png" alt="Google Adwords Remarketing Lists (Customer Match) connection settings" />
docs/destinations/streaming-destinations/google-adwords-remarketing-list.mdx:187:<img src="../../assets/event-stream-destinations/gads-access-security.png" alt="Access and Security option in Google Ads dashboard" />
docs/destinations/streaming-destinations/google-adwords-remarketing-list.mdx:191:<img src="../../assets/event-stream-destinations/gads-specify-access-level.png" alt="Specifying access levels" />
docs/destinations/streaming-destinations/google-analytics-360.mdx:37:<img src="../../assets/1 (20).png" />
docs/destinations/streaming-destinations/google-analytics-360.mdx:39:<img src="../../assets/2 (26).png" />
docs/destinations/streaming-destinations/google-analytics-360.mdx:41:<img src="../../assets/3 (23).png" />
docs/destinations/streaming-destinations/google-analytics-360.mdx:52:<img src="../../assets/final.png" />
docs/destinations/streaming-destinations/google-analytics-4/google-analytics-4-device-mode.mdx:117:<img src="../../../assets/event-stream-destinations/Google-signals-1.png" alt="Google Signals" />
docs/destinations/streaming-destinations/google-analytics-4/google-analytics-4-device-mode.mdx:121:<img src="../../../assets/event-stream-destinations/Google-signals-2.png" alt="Google Signals" />
docs/destinations/streaming-destinations/google-analytics-4/google-analytics-4-device-mode.mdx:124:<img src="../../../assets/event-stream-destinations/Google-signals-3.png" alt="Google Signals" />
docs/destinations/streaming-destinations/google-analytics-4/google-analytics-4-device-mode.mdx:127:<img src="../../../assets/event-stream-destinations/Google-signals-4.png" alt="Google Signals" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:26:<img src="../../../assets/event-stream-destinations/google-analytics-4-connection-settings.png" alt="Google Analytics 4 Connection Settings in RudderStack" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:52:<img src="../../../assets/event-stream-destinations/google-analytics-4-connection-settings-1.png" alt="Google Analytics 4 Connection Settings in RudderStack" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:77:<img src="../../../assets/event-stream-destinations/google-analytics-4-connection-settings-2.png" alt="Google Analytics 4 Connection Settings in RudderStack" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:98:<img src="../../../assets/event-stream-destinations/google-analytics-4-connection-settings-3.png" alt="Google Analytics 4 Connection Settings in RudderStack" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:104:<img src="../../../assets/event-stream-destinations/google-analytics-4-connection-settings-4.png" alt="Google Analytics 4 Connection Settings in RudderStack" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:119:<img src="../../../assets/event-stream-destinations/measurement-id.png" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:129:<img src="../../../assets/event-stream-destinations/api-secret.png" />
docs/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack.mdx:137:<img src="../../../assets/event-stream-destinations/firebase-app-id.png" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:42:<img src="../../assets/event-stream-destinations/ga-connection-settings-1.png" alt="Google Analytics dashboard settings" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:43:<img src="../../assets/event-stream-destinations/ga-connection-settings-2.png" alt="Google Analytics dashboard settings" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:44:<img src="../../assets/event-stream-destinations/ga-connection-settings-3.png" alt="Google Analytics dashboard settings" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:45:<img src="../../assets/event-stream-destinations/ga-connection-settings-4.png" alt="Google Analytics dashboard settings" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:46:<img src="../../assets/event-stream-destinations/ga-connection-settings-5.png" alt="Google Analytics dashboard settings" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:146:<img src="../../assets/image (59).png" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:148:<img src="../../assets/image (36).png" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:245:<img src="../../assets/image (21).png" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:463:<img src="../../assets/event-stream-destinations/ga-md5-encryption-disabled.png" alt="MD5 disabled" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:575:<img src="../../assets/image (18) (1) (1) (1) (1) (1) (1) (1).png" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:589:<img src="../../assets/image (67).png" /><span class="imageTitle">Content Group Mapping in RudderStack</span>
docs/destinations/streaming-destinations/google-analytics-ga.mdx:591:<img src="../../assets/image (26).png" /><span class="imageTitle">Content Grouping Settings in Google Analytics</span>
docs/destinations/streaming-destinations/google-analytics-ga.mdx:634:<img src="../../assets/event-stream-destinations/ga-tracking-id.png" alt="Google Analytics tracking ID" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:638:<img src="../../assets/event-stream-destinations/ga-tracking-id-2.png" alt="Google Analytics tracking ID" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:652:<img src="../../assets/image (49).png" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:658:<img src="../../assets/faq2.png" />
docs/destinations/streaming-destinations/google-analytics-ga.mdx:664:<img src="../../assets/faq1.png" />
docs/destinations/streaming-destinations/google-cloud-storage.mdx:35:<img src="../../assets/image (14) (1).png" />
docs/destinations/streaming-destinations/google-optimize.mdx:35:<img src="../../assets/event-stream-destinations/google-optimize-connection-settings-1.png" alt="Google Optimize connection settings" />
docs/destinations/streaming-destinations/google-optimize.mdx:60:<img src="../../assets/event-stream-destinations/google-optimize-container-id.png" alt="Google Optimize container ID" />
docs/destinations/streaming-destinations/google-optimize.mdx:95:<img src="../../assets/event-stream-destinations/google-optimize-ga-tracking-id.png" alt="Google Analytics tracking ID" />
docs/destinations/streaming-destinations/google-pub-sub.mdx:32:<img src="../../assets/image (79) (2) (2) (3) (3) (3) (2) (2).png" /><span class="imageTitle">Google Pub/Sub Connection Settings</span>
docs/destinations/streaming-destinations/google-pub-sub.mdx:44:<img src="../../assets/image (48).png" /><span class="imageTitle">Google Pub/Sub Topic ID and Name</span>
docs/destinations/streaming-destinations/google-pub-sub.mdx:83:<img src="../../assets/image (113).png" />
docs/destinations/streaming-destinations/google-pub-sub.mdx:185:<img src="../../assets/screenshot-2020-09-09-at-6.56.02-pm.png" />
docs/destinations/streaming-destinations/google-pub-sub.mdx:193:<img src="../../assets/image (112).png" />
docs/destinations/streaming-destinations/google-sheets.mdx:32:<img src="../../assets/google-sheets-config.png" />
docs/destinations/streaming-destinations/google-sheets.mdx:41:<img src="../../assets/image (84) (1) (1).png" />
docs/destinations/streaming-destinations/google-sheets.mdx:45:<img src="../../assets/image (83).png" />
docs/destinations/streaming-destinations/google-sheets.mdx:59:<img src="../../assets/image (85).png" />
docs/destinations/streaming-destinations/google-sheets.mdx:164:<img src="../../assets/Google-Sheet-ID.png" />
docs/destinations/streaming-destinations/google-tag-manager.mdx:30:<img src="../../assets/event-stream-destinations/gtm-connection-settings.png" />
docs/destinations/streaming-destinations/google-tag-manager.mdx:57:<img src="../../assets/event-stream-destinations/rudderstack-custom-html-gtm.png" alt="RudderStack as a custom tag" />
docs/destinations/streaming-destinations/google-tag-manager.mdx:135:<img src="../../assets/event-stream-destinations/rudderstack-container-id.png" />
docs/destinations/streaming-destinations/google-tag-manager.mdx:145:<img src="../../assets/event-stream-destinations/rudderstack-server-container-url.png" />
docs/destinations/streaming-destinations/heap.io.mdx:34:<img src="../../assets/screen-shot-2020-12-03-at-2.20.59-pm.png" /><span class="imageTitle">Heap.io Connection Settings on RudderStack dashboard</span>
docs/destinations/streaming-destinations/hotjar.mdx:28:<img src="../../assets/event-stream-destinations/hotjar-connection-settings.png" alt="Hotjar connection settings" />
docs/destinations/streaming-destinations/hubspot.mdx:36:<img src="../../assets/event-stream-destinations/hubspot-connection-settings-1.png" alt="HubSpot connection settings" />
docs/destinations/streaming-destinations/hubspot.mdx:53:<img src="../../assets/event-stream-destinations/hubspot-connection-settings-2.png" alt="HubSpot web SDK settings" />
docs/destinations/streaming-destinations/hubspot.mdx:135:<img src="../../assets/event-stream-destinations/hubspot-create-property.png" alt="HubSpot create property" />
docs/destinations/streaming-destinations/indicative.mdx:32:<img src="../../assets/indicative.png" /><span class="imageTitle">Indicative Connection Settings in RudderStack</span>
docs/destinations/streaming-destinations/intercom.mdx:39:<img src="../../assets/event-stream-destinations/intercom-connection-settings.png" alt="Intercom connection settings"/>
docs/destinations/streaming-destinations/iterable.mdx:37:<img src="../../assets/event-stream-destinations/iterable-connection-settings.png" alt="Iterable connection settings" />
docs/destinations/streaming-destinations/kafka.mdx:35:<img src="../../assets/screenshot-2020-05-17-at-4.34.38-pm.png" />
docs/destinations/streaming-destinations/kafka.mdx:50:<img src="../../assets/kafka-sasl.png" />
docs/destinations/streaming-destinations/keen.mdx:34:<img src="../../assets/image (24).png" /><span class="imageTitle">Connection Settings for Keen in RudderStack</span>
docs/destinations/streaming-destinations/keen.mdx:56:<img src="../../assets/image (38).png" /><span class="imageTitle">Keen add-ons settings in RudderStack</span>
docs/destinations/streaming-destinations/kissmetrics.mdx:34:<img src="../../assets/image (24) (1) (1).png" />
docs/destinations/streaming-destinations/kissmetrics.mdx:189:<img src="../../assets/image (13) (2).png" /><span class="imageTitle">Kissmetrics API Key</span>
docs/destinations/streaming-destinations/klaviyo.mdx:33:<img src="../../assets/event-stream-destinations/klaviyo-connection-settings.png" alt="Klaviyo connection settings"/>
docs/destinations/streaming-destinations/kochava.mdx:33:<img src="../../assets/kochava.png" /><span class="imageTitle">Destination Settings for Kochava</span>
docs/destinations/streaming-destinations/kubit.mdx:12:<img src="../../assets/image (104).png" />
docs/destinations/streaming-destinations/kustomer.mdx:31:<img src="../../assets/kustomer-v3-config.png" /><span class="imageTitle">Configuration Settings for Kustomer</span>
docs/destinations/streaming-destinations/launchdarkly.mdx:33:<img src="../../assets/event-stream-destinations/launchdarkly-connection-settings.png" alt="LaunchDarkly connection settings" />
docs/destinations/streaming-destinations/launchdarkly.mdx:137:<img src="../../assets/event-stream-destinations/launchdarkly-projects.png" alt="LaunchDarkly projects" />
docs/destinations/streaming-destinations/launchdarkly.mdx:142:<img src="../../assets/event-stream-destinations/launchdarkly-clientsideID.png" alt="LaunchDarkly client-side ID" />
docs/destinations/streaming-destinations/leanplum.mdx:34:<img src="../../assets/image (32) (1) (1) (1) (1).png" /><span class="imageTitle">Leanplum Connection Settings in RudderStack</span>
docs/destinations/streaming-destinations/linkedin-insight-tag.mdx:54:<img src="https://user-images.githubusercontent.com/59817155/123381912-f36d8980-d5ae-11eb-9f4c-cb75fb42ba47.png" /><span class="imageTitle">Configuration Settings</span>
docs/destinations/streaming-destinations/linkedin-insight-tag.mdx:63:<img src="https://user-images.githubusercontent.com/59817155/123381910-f23c5c80-d5ae-11eb-843c-5b1a0e4dedd2.png" /><span class="imageTitle">Campaign Manager ad Account</span>
docs/destinations/streaming-destinations/linkedin-insight-tag.mdx:67:<img src="https://user-images.githubusercontent.com/59817155/123381898-f0729900-d5ae-11eb-9cfa-f5063eeebb81.png" /><span class="imageTitle">Account Assets</span>
docs/destinations/streaming-destinations/linkedin-insight-tag.mdx:71:<img src="https://user-images.githubusercontent.com/59817155/123381916-f4062000-d5ae-11eb-945a-960e2dce869e.png" /><span class="imageTitle">Insight Tag</span>
docs/destinations/streaming-destinations/linkedin-insight-tag.mdx:81:<img src="https://user-images.githubusercontent.com/59817155/123381921-f49eb680-d5ae-11eb-9135-48b3e6f7aac7.png" /><span class="imageTitle">Partner ID</span>
docs/destinations/streaming-destinations/linkedin-insight-tag.mdx:87:<img src="https://user-images.githubusercontent.com/59817155/123381914-f36d8980-d5ae-11eb-91a1-31f90e7e3557.png" /><span class="imageTitle">Domains</span>
docs/destinations/streaming-destinations/lotame.mdx:40:<img src="../../assets/image (25).png" /><span class="imageTitle">Lotame Destination Settings on the RudderStack dashboard</span>
docs/destinations/streaming-destinations/lytics.mdx:36:<img src="../../assets/event-stream-destinations/lytics-connection-settings-1.png" alt="Lytics connection settings" />
docs/destinations/streaming-destinations/lytics.mdx:55:<img src="../../assets/event-stream-destinations/lytics-connection-settings-2.png" alt="Lytics connection settings" />
docs/destinations/streaming-destinations/mailchimp.mdx:36:<img src="../../assets/event-stream-destinations/mailchimp-connection-settings.png" />
docs/destinations/streaming-destinations/marketo-lead-import.mdx:40:<img src="../../assets/event-stream-destinations/marketo-lead-import-connection-settings.png" />
docs/destinations/streaming-destinations/marketo.mdx:35:<img src="../../assets/marketo-connection.png" />
docs/destinations/streaming-destinations/marketo.mdx:64:<img src="../../assets/screen-shot-2021-06-02-at-11.51.32-am.png" />
docs/destinations/streaming-destinations/matomo.mdx:32:<img src="../../assets/event-stream-destinations/matomo-connection-settings.png" alt="Matomo connection settings"/>
docs/destinations/streaming-destinations/matomo.mdx:43:<img src="../../assets/event-stream-destinations/matomo-connection-settings-1.png" alt="Matomo connection settings"/>
docs/destinations/streaming-destinations/matomo.mdx:44:<img src="../../assets/event-stream-destinations/matomo-connection-settings-2.png" alt="Matomo connection settings"/>
docs/destinations/streaming-destinations/matomo.mdx:45:<img src="../../assets/event-stream-destinations/matomo-connection-settings-3.png" alt="Matomo connection settings"/>
docs/destinations/streaming-destinations/matomo.mdx:76:<img src="../../assets/event-stream-destinations/matomo-connection-settings-4.png" alt="Matomo connection settings"/>
docs/destinations/streaming-destinations/matomo.mdx:376:<img src="../../assets/event-stream-destinations/matomo-dashboard.png" alt="Matomo dashboard"/>
docs/destinations/streaming-destinations/microsoft-azure-blob-storage.mdx:42:<img src="../../assets/screenshot-2020-01-06-at-10.04.20-am.png" />
docs/destinations/streaming-destinations/minio.mdx:40:<img src="../../assets/screenshot-2020-02-26-at-7.22.29-pm.png" />
docs/destinations/streaming-destinations/mixpanel.mdx:32:<img src="../../assets/event-stream-destinations/mixpanel-connection-settings-1.png" />
docs/destinations/streaming-destinations/mixpanel.mdx:33:<img src="../../assets/event-stream-destinations/mixpanel-connection-settings-2.png" />
docs/destinations/streaming-destinations/mixpanel.mdx:34:<img src="../../assets/event-stream-destinations/mixpanel-connection-settings-3.png" />
docs/destinations/streaming-destinations/mixpanel.mdx:35:<img src="../../assets/event-stream-destinations/mixpanel-connection-settings-4.png" />
docs/destinations/streaming-destinations/mixpanel.mdx:36:<img src="../../assets/event-stream-destinations/mixpanel-connection-settings-5.png" />
docs/destinations/streaming-destinations/mixpanel.mdx:261:<img src="../../assets/event-stream-destinations/mixpanel-group-key-settings.png" alt="Mixpanel group key settings" />
docs/destinations/streaming-destinations/mixpanel.mdx:320:<img src="../../assets/event-stream-destinations/mixpanel-super-people.png" />
docs/destinations/streaming-destinations/moengage.mdx:32:<img src="../../assets/screenshot-2020-11-11-at-11.11.28-am.png" />
docs/destinations/streaming-destinations/monetate.mdx:34:<img src="../../assets/image (6).png" />
docs/destinations/streaming-destinations/new-relic.mdx:36:<img src="../../assets/event-stream-destinations/new-relic-connection-settings.png" alt="New Relic connection settings"/>
docs/destinations/streaming-destinations/new-relic.mdx:112:<img src="../../assets/event-stream-destinations/new-relic-insert-key.png" alt="New Relic insert key"/>
docs/destinations/streaming-destinations/ometria.mdx:28:<img src="../../assets/Ometria.png" alt="Ometria" />
docs/destinations/streaming-destinations/optimizely-full-stack.mdx:34:<img src="../../assets/image.png" />
docs/destinations/streaming-destinations/optimizely-web.mdx:32:<img src="../../assets/image (50).png" />
docs/destinations/streaming-destinations/pardot.mdx:35:<img src="../../assets/event-stream-destinations/pardot-connection-settings3.png" alt="Pardot connection settings"/>
docs/destinations/streaming-destinations/pardot.mdx:41:<img src="../../assets/event-stream-destinations/pardot-business-unit-id.png" alt="Pardot Business Unit Id"/>
docs/destinations/streaming-destinations/pardot.mdx:112:<img src="../../assets/event-stream-destinations/Pardot-crmfid1.png" alt="Pardot CRM Lead ID"/>
docs/destinations/streaming-destinations/pardot.mdx:114:<img src="../../assets/event-stream-destinations/Pardot-crmfid2.png" alt="Pardot CRM Lead ID"/>
docs/destinations/streaming-destinations/pendo.mdx:31:<img src="../../assets/screenshot-2020-11-27-at-2.29.18-pm.png" /><span class="imageTitle">Pendo Connection Settings in RudderStack</span>
docs/destinations/streaming-destinations/pinterest-ads.mdx:36:<img src="../../assets/event-stream-destinations/pinterest_tag.png" />
docs/destinations/streaming-destinations/pinterest-ads.mdx:238:<img src="../../assets/event-stream-destinations/tag-id-pinterest.png" />
docs/destinations/streaming-destinations/post-affiliate-pro.mdx:33:<img src="../../assets/event-stream-destinations/pap-connection-settings-1.png" alt="Post Affiliate Pro connection settings" />
docs/destinations/streaming-destinations/post-affiliate-pro.mdx:34:<img src="../../assets/event-stream-destinations/pap-connection-settings-2.png" alt="Post Affiliate Pro connection settings" />
docs/destinations/streaming-destinations/post-affiliate-pro.mdx:35:<img src="../../assets/event-stream-destinations/pap-connection-settings-3.png" alt="Post Affiliate Pro connection settings" />
docs/destinations/streaming-destinations/post-affiliate-pro.mdx:55:<img src="../../assets/event-stream-destinations/pap-cookie-domain.png" alt="Post Affiliate Pro cookie domain setting" />
docs/destinations/streaming-destinations/post-affiliate-pro.mdx:225:<img src="../../assets/event-stream-destinations/pap-mergeproduct-true.png" alt="Post Affiliate Pro sale object with combined product information" />
docs/destinations/streaming-destinations/post-affiliate-pro.mdx:229:<img src="../../assets/event-stream-destinations/pap-mergeproduct-false.png" alt="Post Affiliate Pro separate sale objects" />
docs/destinations/streaming-destinations/post-affiliate-pro.mdx:242:<img src="../../assets/event-stream-destinations/pap-tracking-url.png" alt="Post Affiliate Pro tracking URL" />
docs/destinations/streaming-destinations/posthog.mdx:36:<img src="../../assets/event-stream-destinations/posthog-connection-settings.png" alt="PostHog connection settings" />
docs/destinations/streaming-destinations/posthog.mdx:54:<img src="../../assets/event-stream-destinations/posthog-updated-group-mapping.png" alt="PostHog updated group mapping settings" />
docs/destinations/streaming-destinations/posthog.mdx:67:<img src="../../assets/event-stream-destinations/posthog-web-sdk-settings.png" alt="PostHog web SDK settings" />
docs/destinations/streaming-destinations/posthog.mdx:208:<img src="../../assets/event-stream-destinations/posthog-updated-group-mapping.png" alt="PostHog group mapping setting" />
docs/destinations/streaming-destinations/qualtrics.mdx:27:<img src="https://user-images.githubusercontent.com/59817155/128999630-37a8cac7-cd8c-4ba8-8b15-1435afeff4ca.png" alt="Configuration Settings for Qualtrics" />
docs/destinations/streaming-destinations/quantummetric.mdx:30:<img src="../../assets/quantum-metric.png" alt="Quantum Metric Connection Settings" />
docs/destinations/streaming-destinations/reddit-pixel.mdx:28:<img src="../../assets/RedditPixel-1.png" />
docs/destinations/streaming-destinations/reddit-pixel.mdx:96:<img src="../../assets/RedditPixel-2.png" />
docs/destinations/streaming-destinations/redis.mdx:30:<img src="../../assets/screenshot-2020-11-02-at-1.51.36-pm.png" />
docs/destinations/streaming-destinations/redis.mdx:133:<img src="../../assets/image (37).png" />
docs/destinations/streaming-destinations/revenue-cat.mdx:36:<img src="../../assets/event-stream-destinations/rev-cat-connection-settings.png" alt="Revenue Cat connection settings"/>
docs/destinations/streaming-destinations/revenue-cat.mdx:166:<img src="../../assets/event-stream-destinations/rev-cat-project.png" alt="Revenue Cat project in the dashboard"/>
docs/destinations/streaming-destinations/revenue-cat.mdx:170:<img src="../../assets/event-stream-destinations/rev-cat-public-api-key.png" alt="Revenue Cat public API key"/>
docs/destinations/streaming-destinations/salesforce.mdx:43:<img src="../../assets/event-stream-destinations/salesforce-connection-settings.png" alt="Salesforce connection settings" />
docs/destinations/streaming-destinations/segment.mdx:30:<img src="../../assets/2 (27).png" />
docs/destinations/streaming-destinations/segment.mdx:34:<img src="../../assets/3 (24).png" />
docs/destinations/streaming-destinations/segment.mdx:38:<img src="../../assets/4 (23).png" />
docs/destinations/streaming-destinations/segment.mdx:42:<img src="../../assets/5 (22).png" />
docs/destinations/streaming-destinations/segment.mdx:46:<img src="../../assets/6 (20).png" />
docs/destinations/streaming-destinations/segment.mdx:50:<img src="../../assets/7 (15).png" />
docs/destinations/streaming-destinations/sendgrid.mdx:29:<img src="../../assets/event-stream-destinations/sendgrid-connection-settings-1.png" alt="Sendgrid connection settings" />
docs/destinations/streaming-destinations/sendgrid.mdx:30:<img src="../../assets/event-stream-destinations/sendgrid-connection-settings-2.png" alt="Sendgrid connection settings" />
docs/destinations/streaming-destinations/sendgrid.mdx:31:<img src="../../assets/event-stream-destinations/sendgrid-connection-settings-3.png" alt="Sendgrid connection settings" />
docs/destinations/streaming-destinations/sendgrid.mdx:32:<img src="../../assets/event-stream-destinations/sendgrid-connection-settings-4.png" alt="Sendgrid connection settings" />
docs/destinations/streaming-destinations/sentry.mdx:28:<img src="../../assets/sentry.png" alt="Configuration settings for sentry" />
docs/destinations/streaming-destinations/sentry.mdx:74:<img src="../../assets/sentry.png" alt="Configuration" />
docs/destinations/streaming-destinations/sfmc.mdx:34:<img src="../../assets/sfmc-1.png" />
docs/destinations/streaming-destinations/sfmc.mdx:65:<img src="../../assets/sfmc-2.png" />
docs/destinations/streaming-destinations/singular/setting-up-singular-in-rudderstack.mdx:27:<img src="../../../assets/event-stream-destinations/singular-connection-settings.png" alt="Singular connection settings" />
docs/destinations/streaming-destinations/singular/setting-up-singular-in-rudderstack.mdx:44:<img src="../../../assets/event-stream-destinations/singular-connection-settings-2.png" alt="Singular connection settings" />
docs/destinations/streaming-destinations/singular/setting-up-singular-in-rudderstack.mdx:56:<img src="../../../assets/event-stream-destinations/singular-api-key.png" alt="Singular API key" />
docs/destinations/streaming-destinations/singular/singular-cloud-mode.mdx:21:<img src="../../../assets/event-stream-destinations/singular-session-events.png" alt="Singular session events settings" />
docs/destinations/streaming-destinations/singular/singular-cloud-mode.mdx:180:<img src="../../../assets/event-stream-destinations/singular-event-delivery-1.png" alt="Singular event delivery settings" />
docs/destinations/streaming-destinations/singular/singular-cloud-mode.mdx:184:<img src="../../../assets/event-stream-destinations/singular-event-delivery-2.png" alt="Singular event delivery settings" />
docs/destinations/streaming-destinations/singular/singular-cloud-mode.mdx:188:<img src="../../../assets/event-stream-destinations/singular-event-delivery-3.png" alt="Singular event delivery settings" />
docs/destinations/streaming-destinations/singular/singular-cloud-mode.mdx:192:<img src="../../../assets/event-stream-destinations/singular-event-delivery-4.png" alt="Singular event delivery settings" />
docs/destinations/streaming-destinations/slack.mdx:38:<img src="../../assets/event-stream-destinations/slack-settings.png" alt="Slack connection settings" />
docs/destinations/streaming-destinations/slack.mdx:51:<img src="../../assets/event-stream-destinations/slack-settings4.png" alt="Slack connection settings" />
docs/destinations/streaming-destinations/slack.mdx:73:<img src="../../assets/event-stream-destinations/traits-slack.png" alt="Allowlisted traits" />
docs/destinations/streaming-destinations/slack.mdx:77:<img src="../../assets/event-stream-destinations/slack-settings2.png" alt="Event templates settings" />
docs/destinations/streaming-destinations/slack.mdx:92:<img src="../../assets/event-stream-destinations/slack-settings3.png" alt="Slack connection settings" />
docs/destinations/streaming-destinations/slack.mdx:102:<img src="../../assets/event-stream-destinations/choose-channel-slack.png" alt="Slack connection settings" />
docs/destinations/streaming-destinations/slack.mdx:106:<img src="../../assets/event-stream-destinations/webhook-url-slack.png" alt="Slack connection settings" />
docs/destinations/streaming-destinations/snap-pixel.mdx:32:<img src="../../assets/event-stream-destinations/snap-pixel-connection-settings.png" alt="Snapchat Pixel connection settings" />
docs/destinations/streaming-destinations/snap-pixel.mdx:189:<img src="../../assets/event-stream-destinations/snap-pixel-id.png" alt="Snap Pixel ID" />
docs/destinations/streaming-destinations/snapchat-conversion.mdx:40:<img src="../../assets/event-stream-destinations/snapchat-conversion-connection-settings.png" alt="Snapchat Conversion connection settings"/>
docs/destinations/streaming-destinations/snapchat-conversion.mdx:41:<img src="../../assets/event-stream-destinations/snapchat-conversion-connection-settings-2.png" alt="Snapchat Conversion connection settings"/>
docs/destinations/streaming-destinations/snapchat-conversion.mdx:206:<img src="../../assets/event-stream-destinations/snap-conversions-api-token.png" alt="Snap Conversions API token" />
docs/destinations/streaming-destinations/snapchat-conversion.mdx:216:<img src="../../assets/event-stream-destinations/snap-conversions-setup-pixel.png" alt="Snap Conversions set up Pixel" />
docs/destinations/streaming-destinations/snapchat-conversion.mdx:221:<img src="../../assets/event-stream-destinations/snap-conversions-pixel-id.png" alt="Snap Conversions Pixel ID" />
docs/destinations/streaming-destinations/snapchat-conversion.mdx:237:<img src="../../assets/event-stream-destinations/snap-conversions-add-new-app.png" alt="Snap Conversions add new app" />
docs/destinations/streaming-destinations/splitio.mdx:36:<img src="../../assets/event-stream-destinations/splitio-connection-settings.png" />
docs/destinations/streaming-destinations/splitio.mdx:147:<img src="../../assets/event-stream-destinations/splitio-api-key.png" alt="Split.io API key" />
docs/destinations/streaming-destinations/splitio.mdx:151:<img src="../../assets/event-stream-destinations/splitio-environment.png" alt="Split.io environments" />
docs/destinations/streaming-destinations/statsig.mdx:41:<img src="../../assets/event-stream-destinations/statsig-settings.png" alt="Statsig settings" />
docs/destinations/streaming-destinations/statsig.mdx:45:<img src="../../assets/event-stream-destinations/statsig-api-keys.png" alt="Statsig API key" />
docs/destinations/streaming-destinations/tiktok-ads.mdx:34:<img src="../../assets/event-stream-destinations/tiktokads-connection-settings.png" alt="TikTok ads connection settings"/>
docs/destinations/streaming-destinations/trengo.mdx:32:<img src="../../assets/trengo-config.png" />
docs/destinations/streaming-destinations/tvsquared.mdx:30:<img src="../../assets/event-stream-destinations/tvsquared-connection-settings.png" />
docs/destinations/streaming-destinations/userlist.mdx:36:<img src="../../assets/userlist.png" />
docs/destinations/streaming-destinations/variance.mdx:32:<img src="../../assets/image (114).png" />
docs/destinations/streaming-destinations/vero/cloud-mode.mdx:176:<img src="../../../assets/event-stream-destinations/vero-tags.png" alt="User tags in Vero dashboard" />
docs/destinations/streaming-destinations/vero/device-mode.mdx:144:<img src="../../../assets/event-stream-destinations/vero-tags.png" alt="User tags in Vero dashboard" />
docs/destinations/streaming-destinations/vero/setting-up-vero.mdx:26:<img src="../../../assets/event-stream-destinations/vero-connection-settings.png" alt="Vero connection settings"/>
docs/destinations/streaming-destinations/vero/setting-up-vero.mdx:52:<img src="../../../assets/event-stream-destinations/vero-authentication-token.png" alt="Vero auth token and api key" />
docs/destinations/streaming-destinations/vwo-beta-visual-website-optimizer.mdx:39:<img src="../../assets/image (43).png" />
docs/destinations/streaming-destinations/webengage.mdx:36:<img src="../../assets/event-stream-destinations/webengage-connection-settings.png" alt="WebEngage connection settings"/>
docs/destinations/streaming-destinations/webengage.mdx:198:<img src="../../assets/event-stream-destinations/webengage-license-api-key.png" alt="WebEngage license code and API key" />
docs/destinations/streaming-destinations/yahoo-dsp.mdx:37:<img src="../../assets/event-stream-destinations/yahoo-dsp-connection-settings.png" alt="Yahoo DSP connection settings"/>
docs/destinations/streaming-destinations/yahoo-dsp.mdx:39:<img src="../../assets/event-stream-destinations/yahoo-dsp-connection-settings-2.png" alt="Yahoo DSP connection settings"/>
docs/destinations/streaming-destinations/yahoo-dsp.mdx:53:  <img src="../../assets/event-stream-destinations/yahoo-dsp-connection-settings-3.png" alt="Yahoo DSP connection settings"/>
docs/destinations/streaming-destinations/yahoo-dsp.mdx:153:<img src="../../assets/event-stream-destinations/yahoo-dsp.png" alt="Yahoo DSP connection settings"/>
docs/destinations/streaming-destinations/yahoo-dsp.mdx:163:<img src="../../assets/event-stream-destinations/yahoo-dsp-3.png" alt="Yahoo DSP connection settings"/>
docs/destinations/streaming-destinations/yahoo-dsp.mdx:172:<img src="../../assets/event-stream-destinations/yahoo-dsp-2.png" alt="Yahoo DSP connection settings"/>
docs/destinations/streaming-destinations/zendesk.mdx:33:<img src="https://user-images.githubusercontent.com/59817155/136159593-9a019f5b-1f0b-4009-afba-d767bc93dc97.png" />
docs/destinations/warehouse-destinations/azure-datalake.mdx:29:<img src="../../assets/dw-integrations/azure-datalake-1.png" alt="Azure data lake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/azure-synapse.mdx:41:<img src="../../assets/dw-integrations/azure-synapse-connection.png" alt="Azure Synapse connection settings" />
docs/destinations/warehouse-destinations/azure-synapse.mdx:42:<img src="../../assets/dw-integrations/azure-synapse-connection2.png" alt="Azure Synapse connection settings" />
docs/destinations/warehouse-destinations/bigquery.mdx:26:<img src="../../assets/screenshot-2020-04-08-at-11.36.30-am.png" alt="Copy the Project ID" />
docs/destinations/warehouse-destinations/bigquery.mdx:63:<img src="../../assets/screenshot-2020-04-08-at-12.09.07-pm (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Create a key" />
docs/destinations/warehouse-destinations/bigquery.mdx:67:<img src="../../assets/screenshot-2020-04-08-at-12.09.32-pm (1).png" alt="JSON key required for the RudderStack UI" />
docs/destinations/warehouse-destinations/bigquery.mdx:108:<img src="../../assets/dw-integrations/bigquery-connection-settings-1.png" alt="BigQuery connection settings" />
docs/destinations/warehouse-destinations/bigquery.mdx:109:<img src="../../assets/dw-integrations/bigquery-connection-settings-2.png" alt="BigQuery connection settings" />
docs/destinations/warehouse-destinations/bigquery.mdx:216:<img src="../../assets/image (79).png" alt="Namespace" />
docs/destinations/warehouse-destinations/clickhouse.mdx:47:<img src="../../assets/dw-integrations/clickhouse-connection-settings.png" alt="ClickHouse connection settings" />
docs/destinations/warehouse-destinations/clickhouse.mdx:48:<img src="../../assets/dw-integrations/clickhouse-connection-settings2.png" alt="ClickHouse connection settings" />
docs/destinations/warehouse-destinations/delta-lake.mdx:37:<img src="../../assets/dw-integrations/delta-lake-connection-settings-1.png" alt="Delta Lake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/delta-lake.mdx:38:<img src="../../assets/dw-integrations/delta-lake-connection-settings-2.png" alt="Delta Lake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/delta-lake.mdx:191:<img src="../../assets/dw-integrations/delta-lake-connection-settings-3.png" alt="S3 settings in RudderStack dashboard" />
docs/destinations/warehouse-destinations/delta-lake.mdx:287:<img src="../../assets/dw-integrations/delta-lake-1.png" alt="Delta Lake Compute option" />
docs/destinations/warehouse-destinations/delta-lake.mdx:292:<img src="../../assets/dw-integrations/delta-lake-2.png" alt="Delta Lake Cluster name" />
docs/destinations/warehouse-destinations/delta-lake.mdx:296:<img src="../../assets/dw-integrations/delta-lake-3.png" alt="Delta Lake cluster modes" />
docs/destinations/warehouse-destinations/delta-lake.mdx:300:<img src="../../assets/dw-integrations/delta-lake-4.png" alt="Delta Lake runtime version" />
docs/destinations/warehouse-destinations/delta-lake.mdx:305:<img src="../../assets/dw-integrations/delta-lake-5.png" alt="Delta Lake instances" />
docs/destinations/warehouse-destinations/delta-lake.mdx:309:<img src="../../assets/dw-integrations/delta-lake-6.png" alt="Delta Lake instances field" />
docs/destinations/warehouse-destinations/delta-lake.mdx:313:<img src="../../assets/dw-integrations/delta-lake-7.png" alt="Delta Lake create cluster option" />
docs/destinations/warehouse-destinations/delta-lake.mdx:321:<img src="../../assets/dw-integrations/delta-lake-1.png" alt="Delta Lake Compute option" />
docs/destinations/warehouse-destinations/delta-lake.mdx:325:<img src="../../assets/dw-integrations/delta-lake-8.png" alt="Delta Lake cluster" />
docs/destinations/warehouse-destinations/delta-lake.mdx:329:<img src="../../assets/dw-integrations/delta-lake-9.png" alt="Delta Lake JDBC/ODBC settings" />
docs/destinations/warehouse-destinations/delta-lake.mdx:341:<img src="../../assets/dw-integrations/delta-lake-10.png" alt="Databricks user settings" />
docs/destinations/warehouse-destinations/delta-lake.mdx:345:<img src="../../assets/dw-integrations/delta-lake-11.png" alt="Access tokens" />
docs/destinations/warehouse-destinations/delta-lake.mdx:349:<img src="../../assets/dw-integrations/delta-lake-12.png" alt="Databricks generating new token" />
docs/destinations/warehouse-destinations/delta-lake.mdx:409:<img src="../../assets/dw-integrations/databricks-autopilot-options.png" alt="Databricks autopilot options" />
docs/destinations/warehouse-destinations/faq.mdx:91:<img src="../../assets/warehouse-destinations/exclusion-window.png" />
docs/destinations/warehouse-destinations/faq.mdx:95:<img src="../../assets/warehouse-destinations/sync-frequency.png" />
docs/destinations/warehouse-destinations/faq.mdx:99:<img src="../../assets/warehouse-destinations/read-write-database.png" />
docs/destinations/warehouse-destinations/faq.mdx:170:<img src="../../assets/dw-integrations/namespace-example.png" />
docs/destinations/warehouse-destinations/faq.mdx:362:<img src="../../assets/dw-integrations/snowflake-accountid-example.png" alt="Snowflake account ID example" />
docs/destinations/warehouse-destinations/faq.mdx:388:<img src="../../assets/dw-integrations/namespace.png" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:19:<img src="../../assets/dw-integrations/gcs-datalake-2.png" alt="Role details" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:24:<img src="../../assets/dw-integrations/gcs-datalake-3.png" alt="Setting permissions" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:41:<img src="../../assets/dw-integrations/gcs-datalake-4.png" alt="Service account details" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:45:<img src="../../assets/dw-integrations/gcs-datalake-5.png" alt="Role details" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:53:<img src="../../assets/dw-integrations/gcs-datalake-6.png" alt="Manage keys option" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:57:<img src="../../assets/dw-integrations/gcs-datalake-7.png" alt="Creating new key" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:61:<img src="../../assets/dw-integrations/gcs-datalake-8.png" alt="Downloading JSON key" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:76:<img src="../../assets/dw-integrations/gcs-datalake-connection-settings-1.png" alt="GCS data lake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:77:<img src="../../assets/dw-integrations/gcs-datalake-connection-settings-2.png" alt="GCS data lake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/gcs-datalake.mdx:87:<img src="../../assets/dw-integrations/gcs-datalake-time-window-layout.png" alt="GCS data lake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/json-column-support.mdx:94:<img src="../../assets/dw-integrations/json-column-dashboard-setting.png" alt="JSON column setting in RudderStack dashboard" />
docs/destinations/warehouse-destinations/postgresql.mdx:49:<img src="../../assets/dw-integrations/postgresql-connection-settings-1.png" alt="PostgreSQL connection settings" />
docs/destinations/warehouse-destinations/postgresql.mdx:50:<img src="../../assets/dw-integrations/postgresql-connection-settings-2.png" alt="PostgreSQL connection settings" />
docs/destinations/warehouse-destinations/postgresql.mdx:122:<img src="../../assets/dw-integrations/postgresql-ssl-pem-contents.png" alt="PostgreSQL SSL certificate contents" />
docs/destinations/warehouse-destinations/postgresql.mdx:126:<img src="../../assets/dw-integrations/postgresql-verify-ca-dashboard.png" alt="PostgreSQL verify-ca dashboard settings" />
docs/destinations/warehouse-destinations/redshift.mdx:41:<img src="../../assets/1 (3).png" alt="Redshift Console" /><span class="imageTitle">Redshift Console</span>
docs/destinations/warehouse-destinations/redshift.mdx:45:<img src="../../assets/2 (5).png" alt="Create Cluster" />
docs/destinations/warehouse-destinations/redshift.mdx:49:<img src="../../assets/3 (4) (1) (1).png" alt="Cluster Identifier" /><span class="imageTitle">Redshift cluster configuration settings</span>
docs/destinations/warehouse-destinations/redshift.mdx:53:<img src="../../assets/4 (1) (1).png" alt="Enter the number of nodes" />
docs/destinations/warehouse-destinations/redshift.mdx:57:<img src="../../assets/5 (7).png" alt="Add Source" />
docs/destinations/warehouse-destinations/redshift.mdx:81:<img src="../../assets/6 (1).png" alt="Query editor" />
docs/destinations/warehouse-destinations/redshift.mdx:139:<img src="../../assets/7 (3).png" alt="Go to EC2" />
docs/destinations/warehouse-destinations/redshift.mdx:143:<img src="../../assets/8 (1) (1).png" alt="Create Security Group" />
docs/destinations/warehouse-destinations/redshift.mdx:147:<img src="../../assets/9 (1).png" alt="Security group name" />
docs/destinations/warehouse-destinations/redshift.mdx:151:<img src="../../assets/10.png" alt="Port range" />
docs/destinations/warehouse-destinations/redshift.mdx:155:<img src="../../assets/11.png" alt="Properties" />
docs/destinations/warehouse-destinations/redshift.mdx:159:<img src="../../assets/12.png" alt="Network and security" />
docs/destinations/warehouse-destinations/redshift.mdx:163:<img src="../../assets/13.png" alt="Modify cluster" />
docs/destinations/warehouse-destinations/redshift.mdx:180:<img src="../../assets/dw-integrations/redshift-connection-settings.png" alt="Redshift connection settings" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:46:<img src="../../assets/dw-integrations/s3-datalake-connection-settings.png" alt="S3 data lake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:140:<img src="../../assets/dw-integrations/s3-datalake-crawler-1.png" alt="Add Crawler" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:144:<img src="../../assets/dw-integrations/s3-datalake-crawler-2.png" alt="Crawler source type" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:149:<img src="../../assets/dw-integrations/s3-datalake-crawler-3.png" alt="Choose a data store" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:166:<img src="../../assets/dw-integrations/s3-datalake-crawler-4.png" alt="Add another data store" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:170:<img src="../../assets/dw-integrations/s3-datalake-crawler-5.png" alt="IAM Role" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:174:<img src="../../assets/dw-integrations/s3-datalake-crawler-6.png" alt="Scheduler" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:178:<img src="../../assets/dw-integrations/s3-datalake-crawler-7.png" alt="Output" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:196:<img src="../../assets/dw-integrations/s3-datalake-crawler-8.png" alt="Review crawler configuration" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:213:<img src="../../assets/dw-integrations/s3-datalake-querying-data-1.png" alt="AwsDataCatalog" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:217:<img src="../../assets/dw-integrations/s3-datalake-querying-data-2.png" alt="Database" />
docs/destinations/warehouse-destinations/s3-datalake.mdx:226:<img src="../../assets/dw-integrations/s3-datalake-querying-data-3.png" alt="Preview Data" />
docs/destinations/warehouse-destinations/snowflake.mdx:28:<img src="../../assets/dw-integrations/snowflake-create-warehouse.png" />
docs/destinations/warehouse-destinations/snowflake.mdx:57:<img src="../../assets/dw-integrations/snowflake-create-database.png" />
docs/destinations/warehouse-destinations/snowflake.mdx:112:<img src="../../assets/dw-integrations/snowflake-connection-settings-1.png" alt="Snowflake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/snowflake.mdx:113:<img src="../../assets/dw-integrations/snowflake-connection-settings-2.png" alt="Snowflake destination settings in RudderStack" />
docs/destinations/warehouse-destinations/snowflake.mdx:442:<img src="../../assets/dw-integrations/snowflake-account-id-example.png" alt="Snowflake account ID example" />
docs/destinations/warehouse-destinations/sql-server.mdx:63:<img src="../../assets/dw-integrations/mssqlconnection.png" />
docs/destinations/warehouse-destinations/sql-server.mdx:64:<img src="../../assets/dw-integrations/mssqlconnection2.png" />
docs/destinations/webhooks.mdx:38:<img src="../assets/event-stream-destinations/webhook-connection-settings.png" alt="Webhook connection settings" />
docs/destinations/webhooks.mdx:272:<img src="https://user-images.githubusercontent.com/59817155/125619804-64033117-16f6-44c7-8050-286059ab404d.png" />
docs/destinations/webhooks.mdx:276:<img src="https://user-images.githubusercontent.com/59817155/125619922-c68b1c48-50aa-4ce9-8803-8381170e3cc9.png" />
docs/features/data-governance/ruddertyper.mdx:23:<img src="../../assets/readme-example.gif" alt="Readme" />
docs/features/data-governance/tracking-plans/tracking-plan-spreadsheet.mdx:19:<img src="../../../assets/data-governance/tracking-plan-menu.png" alt="Tracking Plan menu" />
docs/features/data-governance/tracking-plans/tracking-plan-spreadsheet.mdx:73:<img src="../../../assets/data-governance/download-tracking-plan.png" alt="Download Tracking Plan" />
docs/features/data-governance/tracking-plans/tracking-plan-spreadsheet.mdx:89:<img src="../../../assets/data-governance/upload-tracking-plan.png" alt="Upload Tracking Plan" />
docs/features/data-governance/tracking-plans/tracking-plan-spreadsheet.mdx:122:<img src="../../../assets/data-governance/tracking-plan-source-id.png" alt="Source ID" />
docs/features/data-governance/tracking-plans/tracking-plan-spreadsheet.mdx:175:<img src="../../../assets/data-governance/personal-access-token.png" alt="Personal Access Token" />
docs/features/data-governance/tracking-plans/tracking-plan-spreadsheet.mdx:195:<img src="../../../assets/data-governance/tracking-plans-permissions.png" alt="Google Apps permissions" />
docs/features/identity-resolution.mdx:42:<img src="../assets/identity-resolution/rudder-id.png" alt="Identity graph Rudder ID" />
docs/features/identity-resolution.mdx:56:<img src="../assets/identity-resolution/identity-resolution-workflow.png" alt="Identity Resolution workfow" />
docs/features/identity-resolution.mdx:142:<img src="../assets/identity-resolution/identity-mappings-table.png" alt="Identity Mappings table in warehouse" />
docs/features/identity-resolution.mdx:146:<img src="../assets/identity-resolution/identity-merge-rules.png" alt="Identity merge rules table in the warehouse" />
docs/features/transformations.mdx:33:<img src="../assets/image (90).png" alt="Adding a Transformation" />
docs/features/transformations.mdx:37:<img src="../assets/image (92).png" alt="Create New Transformation" />
docs/features/transformations.mdx:48:<img src="../assets/image (99).png" alt="transformEvent function" />
docs/features/transformations.mdx:63:<img src="../assets/image (97).png" alt="Run Test" />
docs/features/transformations.mdx:91:<img src="../assets/image (89).png" alt="Create new library" />
docs/features/transformations.mdx:117:<img src="../assets/image (101).png" alt="Using libraries in transformations" />
docs/features/transformations.mdx:137:<img src="../assets/image (86).png" alt="Event filtered out without specifying email domain" />
docs/features/transformations.mdx:199:<img src="../assets/image (98).png" alt="Source ID" />
docs/features/transformations.mdx:201:<img src="../assets/image (120) (1) (1).png" alt="Source ID" />
docs/get-started/quickstart.mdx:14:<img src="../assets/rs-cloud/get-started.png" alt="Connections Dashboard" />
docs/get-started/quickstart.mdx:30:<img src="../assets/get-started/source-details.png" alt="Source details" />
docs/get-started/quickstart.mdx:39:<img src="../assets/get-started/adding-new-destination.png" alt="Adding a new destination" />
docs/get-started/rudderstack-cloud.mdx:17:<img src="../assets/rs-cloud/get-started.png" alt="RudderStack Dashboard" />
docs/get-started/rudderstack-open-source/control-plane-lite.mdx:41:<img src="../../assets/rudderstack-open-source/control-plane-lite-dashboard.png" alt="Control Plane Lite dashboard" />
docs/get-started/rudderstack-open-source/control-plane-lite.mdx:76:<img src="../../assets/rudderstack-open-source/rudder-docker-yml-file.png" alt="Rudder Docker YML file" />
docs/get-started/rudderstack-open-source/control-plane-lite.mdx:151:<img src="../../assets/rudderstack-open-source/rudder-config-1.png" alt="RudderStack config JSON path" />
docs/get-started/rudderstack-open-source/control-plane-lite.mdx:181:<img src="../../assets/rudderstack-open-source/export-source-config.png" alt="Export source config option" />
docs/get-started/rudderstack-open-source/control-plane-lite.mdx:268:<img src="../../assets/rudderstack-open-source/export-source-config.png" alt="Export source config option" />
docs/get-started/rudderstack-open-source/data-plane-setup/developer-machine-setup.mdx:23:<img src="../../../assets/rs-cloud/workspace-token.png" alt="Workspace Token" />
docs/get-started/rudderstack-open-source/data-plane-setup/docker.mdx:19:<img src="../../../assets/rs-cloud/workspace-token.png" alt="Workspace Token" />
docs/get-started/rudderstack-open-source/data-plane-setup/kubernetes.mdx:26:<img src="../../../assets/rs-cloud/workspace-token.png" alt="Workspace Token" />
docs/get-started/rudderstack-open-source/sending-test-events.mdx:35:<img src="../../assets/rudderstack-open-source/source-write-key.png" alt="RudderStack source write key" />
docs/get-started/rudderstack-open-source/sending-test-events.mdx:48:<img src="../../assets/rudderstack-open-source/control-plane-lite-source-writekey.png" alt="Control plane lite source write Key" />
docs/get-started/rudderstack-open-source/sending-test-events.mdx:64:<img src="../../assets/rudderstack-open-source/test-event.png" alt="Test Event" />
docs/get-started/rudderstack-open-source/sending-test-events.mdx:84:<img src="../../assets/rudderstack-open-source/test-event-error.png" alt="Test Event error" />
docs/index.mdx:9:<img src="/assets/rs-cloud/rs-cloud-workflow.png" alt="RudderStack Cloud" />
docs/resources/faq.mdx:29:<img src="../assets/rs-cloud/workspace-token.png" alt="Workspace Token" />
docs/resources/faq.mdx:141:<img src="../assets/general/destination-event-metrics.png" alt="Destination event metrics" />
docs/resources/faq.mdx:191:<img src="../assets/rudderstack-open-source/export-source-config.png" alt="Export source config option" />
docs/resources/faq.mdx:221:<img src="../assets/rudderstack-open-source/write-key.png" alt="Source Write Key" />
docs/resources/faq.mdx:225:<img src="../assets/rs-cloud/workspace-token.png" alt="Workspace Token" />
docs/resources/faq.mdx:313:<img src="../assets/general/wh-destination-namespace.png" alt="Set namespace in the destination settings" />
docs/resources/glossary.mdx:213:<img src="../assets/rs-cloud/workspace-token.png" alt="Workspace Token" />
docs/resources/glossary.mdx:225:<img src="../assets/rudderstack-open-source/write-key.png" alt="Source Write Key" />
docs/resources/rudderstack-architecture.mdx:11:<img src="../assets/get-started/rudderstack-architecture.png" alt="RudderStack Architecture" />
docs/resources/rudderstack-architecture.mdx:44:<img src="../assets/get-started/rudderstack-backend-architecture.png" alt="RudderStack backend architecture" />
docs/resources/rudderstack-architecture.mdx:112:<img src="../assets/get-started/rudderstack-backend-workflow.png" alt="RudderStack Backend Workflow" />
docs/sources/cloud-apps/appcenter.mdx:18:<img src="../../assets/event-stream-sources/appcenter-1.png" alt="App Center source in RudderStack dashboard" />
docs/sources/cloud-apps/appcenter.mdx:24:<img src="../../assets/event-stream-sources/appcenter-4.png" alt="App Center source write key" />
docs/sources/cloud-apps/appcenter.mdx:28:<img src="../../assets/event-stream-sources/appcenter-2.png" alt="App Center source configuration" />
docs/sources/cloud-apps/appcenter.mdx:55:<img src="../../assets/event-stream-sources/appcenter-3.png" alt="Endpoint configuration" />
docs/sources/cloud-apps/appsflyer.mdx:18:<img src="../../assets/event-stream-sources/appsflyer-1.png" alt="AppsFlyer source in RudderStack" />
docs/sources/cloud-apps/appsflyer.mdx:24:<img src="../../assets/event-stream-sources/appsflyer-2.png" alt="AppsFlyer source write key" />
docs/sources/cloud-apps/appsflyer.mdx:28:<img src="../../assets/event-stream-sources/appsflyer-3.png" alt="AppsFlyer dashboard" />
docs/sources/cloud-apps/appsflyer.mdx:55:<img src="../../assets/event-stream-sources/appsflyer-4.png" alt="Send Test button" />
docs/sources/cloud-apps/auth0.mdx:18:<img src="../../assets/event-stream-sources/auth0-1.png" alt="Auth0 source in RudderStack" />
docs/sources/cloud-apps/auth0.mdx:23:<img src="../../assets/event-stream-sources/auth0-2.png" alt="Auth0 source write key" />
docs/sources/cloud-apps/auth0.mdx:28:<img src="../../assets/event-stream-sources/auth0-3.png" alt="Auth0 API webhook" />
docs/sources/cloud-apps/auth0.mdx:32:<img src="../../assets/event-stream-sources/auth0-4.png" alt="Auth0 extension installation page" />
docs/sources/cloud-apps/auth0.mdx:36:<img src="../../assets/event-stream-sources/auth0-5.png" alt="Auth0 log types" />
docs/sources/cloud-apps/auth0.mdx:40:<img src="../../assets/event-stream-sources/auth0-6.png" alt="Auth0 webhook URL" />
docs/sources/cloud-apps/braze-currents.mdx:20:<img src="../../assets/event-stream-sources/braze-2.png" alt="Braze source write key" />
docs/sources/cloud-apps/customerio.mdx:19:<img src="../../assets/event-stream-sources/customerio-1.png" alt="Customer.io source in RudderStack" />
docs/sources/cloud-apps/customerio.mdx:30:<img src="../../assets/event-stream-sources/customerio-2.png" alt="Customer.io source write key" />
docs/sources/cloud-apps/customerio.mdx:34:<img src="../../assets/event-stream-sources/customerio-3.png" alt="Customer.io reporting webhooks" />
docs/sources/cloud-apps/customerio.mdx:38:<img src="../../assets/event-stream-sources/customerio-4.png" alt="Customer.io webhook URL" />
docs/sources/cloud-apps/customerio.mdx:239:<img src="../../assets/event-stream-sources/customerio-5.png" alt="Customer.io event settings" />
docs/sources/cloud-apps/extole.mdx:18:<img src="../../assets/event-stream-sources/extole-1.png" alt="Extole source in RudderStack" />
docs/sources/cloud-apps/extole.mdx:24:<img src="../../assets/event-stream-sources/extole-2.png" alt="Extole source write key" />
docs/sources/cloud-apps/extole.mdx:32:<img src="../../assets/event-stream-sources/extole-3.png" alt="Extole new webhook" />
docs/sources/cloud-apps/extole.mdx:36:<img src="../../assets/event-stream-sources/auth0-4.png" alt="Extole webhook URL" />
docs/sources/cloud-apps/iterable.mdx:16:<img src="../../assets/event-stream-sources/iterable-1.png" alt="Iterable source" />
docs/sources/cloud-apps/iterable.mdx:21:<img src="../../assets/event-stream-sources/iterable-2.png" alt="Iterable source webhook URL" />
docs/sources/cloud-apps/iterable.mdx:26:<img src="../../assets/event-stream-sources/webhook-url-iterable.png" alt="Iterable source webhook URL" />
docs/sources/cloud-apps/looker.mdx:32:<img src="../../assets/event-stream-sources/looker-1.png" alt="Looker source in RudderStack" />
docs/sources/cloud-apps/looker.mdx:38:<img src="../../assets/event-stream-sources/looker-2.png" alt="Looker source write key" />
docs/sources/cloud-apps/looker.mdx:63:<img src="../../assets/event-stream-sources/looker-3.png" alt="RudderStack-hosted Action Hub" />
docs/sources/cloud-apps/looker.mdx:71:<img src="../../assets/event-stream-sources/looker-2.png" alt="Looker source write key" />
docs/sources/cloud-apps/looker.mdx:75:<img src="../../assets/event-stream-sources/looker-4.png" alt="Configuring the Rudder Write Key and Rudder Server URL" />
docs/sources/cloud-apps/posthog.mdx:16:<img src="../../assets/event-stream-sources/posthog-1.png" alt="PostHog source in RudderStack" />
docs/sources/cloud-apps/posthog.mdx:22:<img src="../../assets/event-stream-sources/posthog-2.png" alt="PostHog source write key" />
docs/sources/cloud-apps/posthog.mdx:44:<img src="../../assets/event-stream-sources/posthog-4.png" alt="RudderStack Server URL" />
docs/sources/cloud-apps/segment.mdx:18:<img src="../../assets/event-stream-sources/segment-1.png" alt="Segment source in RudderStack" />
docs/sources/cloud-apps/segment.mdx:24:<img src="../../assets/event-stream-sources/segment-2.png" alt="Segment source write key" />
docs/sources/cloud-apps/segment.mdx:28:<img src="../../assets/event-stream-sources/segment-3.png" alt="Webhooks destination in Segment" />
docs/sources/cloud-apps/segment.mdx:32:<img src="../../assets/event-stream-sources/segment-4.png" alt="RudderStack webhook URL setting in Segment" />
docs/sources/cloud-apps/shopify.mdx:26:<img src="../../assets/event-stream-sources/shopify-1.png" alt="Shopify source in RudderStack dashboard" />
docs/sources/cloud-apps/shopify.mdx:32:<img src="../../assets/event-stream-sources/shopify-2.png" alt="Shopify source webhook URL" />
docs/sources/cloud-apps/shopify.mdx:43:<img src="../../assets/event-stream-sources/shopify-3.png" alt="Customizing Shopify store" />
docs/sources/cloud-apps/shopify.mdx:47:<img src="../../assets/event-stream-sources/shopify-4.png" alt="RudderStack app search" />
docs/sources/cloud-apps/shopify.mdx:51:<img src="../../assets/event-stream-sources/RS-Shopify-app.png" alt="Add RudderStack app" />
docs/sources/cloud-apps/shopify.mdx:60:<img src="../../assets/event-stream-sources/shopify-5.png" alt="Installed RudderStack app" />
docs/sources/cloud-apps/shopify.mdx:65:<img src="../../assets/event-stream-sources/shopify-6.png" alt="Data plane URL and source write key" />
docs/sources/cloud-apps/shopify.mdx:350:<img src="../../assets/event-stream-sources/shopify-6.png" alt="Data plane URL and source write key" />
docs/sources/cloud-apps/shopify.mdx:358:<img src="../../assets/event-stream-sources/shopify-data-plane-url.png" alt="RudderStack data plane URL" />
docs/sources/cloud-apps/webhook-source.mdx:23:<img src="../../assets/event-stream-sources/webhook-1.png" alt="Webhook source in RudderStack dashboard" />
docs/sources/cloud-apps/webhook-source.mdx:29:<img src="../../assets/event-stream-sources/webhook-2.png" alt="Webhook endpoint" />
docs/sources/cloud-apps/webhook-source.mdx:48:<img src="../../assets/event-stream-sources/webhook-3.png" alt="GA destination" />
docs/sources/cloud-apps/webhook-source.mdx:64:<img src="../../assets/event-stream-sources/webhook-5.png" alt="Adding the webhook to an event source" />
docs/sources/extract/activecampaign.mdx:26:<img src="../../assets/cloud-extract-sources/activecampaign-connection-settings.png" alt="ActiveCampaign credentials" />
docs/sources/extract/activecampaign.mdx:57:<img src="../../assets/cloud-extract-sources/activecampaign-connection-settings-2.png" alt="Selecting the data to import" />
docs/sources/extract/activecampaign.mdx:63:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/activecampaign.mdx:76:<img src="../../assets/cloud-extract-sources/activecampaign-connection-settings-4.png" alt="ActiveCampaign account name" />
docs/sources/extract/activecampaign.mdx:82:<img src="../../assets/cloud-extract-sources/activecampaign-connection-settings-3.png" alt="ActiveCampaign API key and URL" />
docs/sources/extract/bing-ads.mdx:20:<!--<img src="../../assets/1 (15) (1) (1).png" />-->
docs/sources/extract/bing-ads.mdx:29:<!--<img src="../../assets/1 (26).png" />-->
docs/sources/extract/bing-ads.mdx:31:<img src="../../assets/1 (26).png" alt="Directory" />
docs/sources/extract/bing-ads.mdx:36:<!--<img src="../../assets/2 (30).png" />-->
docs/sources/extract/bing-ads.mdx:38:<img src="../../assets/2 (30).png" alt="Connect with Bing Ads" />
docs/sources/extract/bing-ads.mdx:49:<!--<img src="../../assets/3 (30).png" />-->
docs/sources/extract/bing-ads.mdx:63:<!--<img src="../../assets/6 (24).png" />-->
docs/sources/extract/bing-ads.mdx:65:<img src="../../assets/6 (24).png" alt="Add Destination" />
docs/sources/extract/chargebee.mdx:32:<img src="../../assets/cloud-extract-sources/chargebee-1.png" alt="Chargebee connection settings" />
docs/sources/extract/chargebee.mdx:63:<img src="../../assets/cloud-extract-sources/chargebee-2.png" alt="Selecting the data to import" />
docs/sources/extract/chargebee.mdx:69:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/common-settings.mdx:14:<img src="../../assets/cloud-extract-sources/sendgrid-connection-settings-2.png" alt="Sendgrid destination settings" />
docs/sources/extract/common-settings.mdx:43:<img src="../../assets/warehouse-actions-sources/sync-schedule-basic.png" alt="Basic sync schedule" />
docs/sources/extract/common-settings.mdx:64:<img src="../../assets/warehouse-actions-sources/sync-schedule-cron.png" alt="CRON schedule" />
docs/sources/extract/common-settings.mdx:71:<img src="../../assets/warehouse-actions-sources/sync-schedule-cron-error.png" alt="CRON schedule error" />
docs/sources/extract/common-settings.mdx:79:<img src="../../assets/cloud-extract-sources/sync-schedule-manual.png" alt="Manual sync schedule" />
docs/sources/extract/common-settings.mdx:89:<img src="../../assets/cloud-extract-sources/sync-schedule-settings-change.png" alt="Syncs schedule settings change" />
docs/sources/extract/facebook-ads.mdx:34:<img src="../../assets/cloud-extract-sources/fb-ads-1.png" alt="Facebook Ads connection settings" />
docs/sources/extract/facebook-ads.mdx:38:<img src="../../assets/cloud-extract-sources/fb-ads-2.png" alt="Facebook Ads connection settings" />
docs/sources/extract/facebook-ads.mdx:68:<img src="../../assets/cloud-extract-sources/fb-ads-3.png" alt="Selecting the data to import" />
docs/sources/extract/facebook-ads.mdx:74:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/freshdesk.mdx:26:<img src="../../assets/cloud-extract-sources/freshdesk-connection-settings.png" alt="Freshdesk credentials" />
docs/sources/extract/freshdesk.mdx:55:<img src="../../assets/cloud-extract-sources/freshdesk-connection-settings-1.png" alt="Selecting the data to import" />
docs/sources/extract/freshdesk.mdx:61:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/freshdesk.mdx:77:<img src="../../assets/cloud-extract-sources/freshdesk-connection-settings-2.png" alt="Freshdesk API key" />
docs/sources/extract/google-adwords.mdx:26:<img src="../../assets/cloud-extract-sources/g-ads-connection-settings-1.png" alt="Verifying credentials" />
docs/sources/extract/google-adwords.mdx:35:<img src="../../assets/cloud-extract-sources/g-ads-connection-settings-2.png" alt="Connection settings" />
docs/sources/extract/google-adwords.mdx:69:<img src="../../assets/cloud-extract-sources/g-ads-connection-settings-4.png" alt="Connection settings" />
docs/sources/extract/google-adwords.mdx:73:<img src="../../assets/cloud-extract-sources/g-ads-connection-settings-5.png" alt="Connection settings" />
docs/sources/extract/google-adwords.mdx:94:<img src="../../assets/cloud-extract-sources/g-ads-connection-settings-3.png" alt="Selecting the data to import" />
docs/sources/extract/google-adwords.mdx:100:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/google-adwords.mdx:113:<img src="../../assets/cloud-extract-sources/g-ads-customer-id.png" alt="Customer ID" />
docs/sources/extract/google-analytics.mdx:22:<img src="../../assets/cloud-extract-sources/ga-1.png" alt="Google Analytics source" />
docs/sources/extract/google-analytics.mdx:41:<img src="../../assets/cloud-extract-sources/ga-2.png" alt="Selecting the data to import" />
docs/sources/extract/google-analytics.mdx:61:<img src="../../assets/cloud-extract-sources/ga-3.png" alt="Prefix, run frequency, and data update settings" />
docs/sources/extract/google-analytics.mdx:65:<img src="../../assets/cloud-extract-sources/ga-4.png" alt="Adding warehouse destination" />
docs/sources/extract/google-search-console.mdx:21:<!--<img src="../../assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2).png" />-->
docs/sources/extract/google-search-console.mdx:30:<!--<img src="../../assets/screen-shot-2020-12-18-at-10.43.57-am.png" />-->
docs/sources/extract/google-search-console.mdx:39:<!--<img src="../../assets/screen-shot-2020-12-18-at-10.44.25-am.png" />-->
docs/sources/extract/google-search-console.mdx:50:<!--<img src="../../assets/screen-shot-2020-12-18-at-10.44.41-am.png" />-->
docs/sources/extract/google-search-console.mdx:67:<!--<img src="../../assets/screen-shot-2020-12-18-at-10.59.43-am.png" />-->
docs/sources/extract/google-search-console.mdx:80:<!-- <img src="../../assets/image (13) (1).png" />-->
docs/sources/extract/google-search-console.mdx:82:<img src="../../assets/image (13) (1).png" alt="Site URL" />
docs/sources/extract/google-search-console.mdx:100:<!--<img src="../../assets/screen-shot-2020-12-18-at-11.00.31-am.png" />-->
docs/sources/extract/google-search-console.mdx:111:<!--<img src="../../assets/screen-shot-2020-12-18-at-11.01.14-am (1).png" />-->
docs/sources/extract/google-sheets.mdx:26:<img src="../../assets/cloud-extract-sources/google-sheets-connection-settings-1.png" alt="Google Sheets credentials" />
docs/sources/extract/google-sheets.mdx:33:<img src="../../assets/cloud-extract-sources/google-sheets-connection-settings-2.png" alt="Google Sheets credentials" />
docs/sources/extract/google-sheets.mdx:59:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/hubspot-v2.mdx:32:<img src="../../assets/cloud-extract-sources/hubspot-connection-settings-1.png" alt="HubSpot connection settings" />
docs/sources/extract/hubspot-v2.mdx:65:<img src="../../assets/cloud-extract-sources/hubspot-connection-settings-2.png" alt="Selecting the data to import" />
docs/sources/extract/hubspot-v2.mdx:71:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/intercom-v2.mdx:37:<img src="../../assets/cloud-extract-sources/intercomv2-1.png" alt="Intercom v2 source" />
docs/sources/extract/intercom-v2.mdx:41:<img src="../../assets/cloud-extract-sources/intercomv2-2.png" alt="Assigning source name" />
docs/sources/extract/intercom-v2.mdx:54:<img src="../../assets/cloud-extract-sources/intercomv2-3.png" alt="Configuring Intercom" />
docs/sources/extract/intercom-v2.mdx:62:<img src="../../assets/cloud-extract-sources/intercomv2-4.png" alt="Configuring the source" />
docs/sources/extract/intercom-v2.mdx:68:<img src="../../assets/cloud-extract-sources/intercomv2-5.png" alt="Selecting the data to import" />
docs/sources/extract/intercom-v2.mdx:74:<img src="../../assets/cloud-extract-sources/intercomv2-6.png" alt="Configuring the source" />
docs/sources/extract/intercom-v2.mdx:102:<img src="../../assets/cloud-extract-sources/intercomv2-7.png" alt="Access token" />
docs/sources/extract/intercom.mdx:21:<!--<img src="../../assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (1).png" />-->
docs/sources/extract/intercom.mdx:30:<!--<img src="../../assets/2 (12).png" />-->
docs/sources/extract/intercom.mdx:32:<img src="../../assets/2 (12).png" alt="Intercom" />
docs/sources/extract/intercom.mdx:36:<!--<img src="../../assets/3 (10).png" />-->
docs/sources/extract/intercom.mdx:38:<img src="../../assets/3 (10).png" alt="Next" />
docs/sources/extract/intercom.mdx:44:<!--<img src="../../assets/4 (10).png" />-->
docs/sources/extract/intercom.mdx:61:<!--<img src="../../assets/5 (11).png" />-->
docs/sources/extract/intercom.mdx:63:<img src="../../assets/5 (11).png" alt="Run Frequency" />
docs/sources/extract/intercom.mdx:69:<!--<img src="../../assets/6 (12).png" />-->
docs/sources/extract/intercom.mdx:71:<img src="../../assets/6 (12).png" alt="Choose Intercom data" />
docs/sources/extract/intercom.mdx:77:<!--<img src="../../assets/7 (7).png" />-->
docs/sources/extract/intercom.mdx:79:<img src="../../assets/7 (7).png" alt="Connect Destinations" />
docs/sources/extract/mailchimp.mdx:20:<!--<img src="../../assets/1 (15) (1).png" />-->
docs/sources/extract/mailchimp.mdx:22:<img src="../../assets/1 (15) (1).png" alt="Rudderstack Dashboard" />
docs/sources/extract/mailchimp.mdx:26:<!--<img src="../../assets/2 (20).png" />-->
docs/sources/extract/mailchimp.mdx:28:<img src="../../assets/2 (20).png" alt="Directory" />
docs/sources/extract/mailchimp.mdx:33:<!--<img src="../../assets/3 (18).png" />-->
docs/sources/extract/mailchimp.mdx:35:<img src="../../assets/3 (18).png" alt="Mailchimp" />
docs/sources/extract/mailchimp.mdx:41:<!--<img src="../../assets/4 (17).png" />-->
docs/sources/extract/mailchimp.mdx:43:<img src="../../assets/4 (17).png" alt="Connect with Mailchimp" />
docs/sources/extract/mailchimp.mdx:53:<!--<img src="../../assets/5 (18).png" />-->
docs/sources/extract/mailchimp.mdx:55:<img src="../../assets/5 (18).png" alt="Authorize RudderStack" />
docs/sources/extract/mailchimp.mdx:63:<!--<img src="../../assets/6 (16).png" />-->
docs/sources/extract/mailchimp.mdx:65:<img src="../../assets/6 (16).png" alt="Earliest Campaign Year" />
docs/sources/extract/mailchimp.mdx:72:<!--<img src="../../assets/7 (11).png" />-->
docs/sources/extract/mailchimp.mdx:74:<img src="../../assets/7 (11).png" alt="Google Analytics" />
docs/sources/extract/mailchimp.mdx:80:<img src="../../assets/8 (5).png" alt="Ingest via RudderStack" />
docs/sources/extract/mailchimp.mdx:86:<img src="../../assets/9 (3).png" alt="Add Destinations" />
docs/sources/extract/marketo.mdx:21:<img src="../../assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3).png" alt="Add Source" />
docs/sources/extract/marketo.mdx:25:<img src="../../assets/2 (9).png" alt="Select Marketo" />
docs/sources/extract/marketo.mdx:29:<img src="../../assets/3 (4).png" alt="Assign a name" />
docs/sources/extract/marketo.mdx:35:<img src="../../assets/4 (3).png" alt="Create new account" />
docs/sources/extract/marketo.mdx:54:<img src="../../assets/5 (9).png" alt="Source Settings" />
docs/sources/extract/marketo.mdx:60:<img src="../../assets/6 (9).png" alt="Run Frequency" />
docs/sources/extract/marketo.mdx:66:<img src="../../assets/7 (5).png" alt="Add Destination" />
docs/sources/extract/mixpanel.mdx:21:<img src="../../assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3).png" alt="Add Source" />
docs/sources/extract/mixpanel.mdx:25:<img src="../../assets/2 (10).png" alt="Select Mixpanel" />
docs/sources/extract/mixpanel.mdx:29:<img src="../../assets/3 (8).png" alt="Assign a name" />
docs/sources/extract/mixpanel.mdx:35:<img src="../../assets/4 (9).png" alt="Create new account" />
docs/sources/extract/mixpanel.mdx:58:<img src="../../assets/5 (10).png" alt="Source Settings" />
docs/sources/extract/mixpanel.mdx:64:<img src="../../assets/6 (10).png" alt="Run Frequency" />
docs/sources/extract/mixpanel.mdx:70:<img src="../../assets/7 (6).png" alt="Import data from your Mixpanel source" />
docs/sources/extract/netsuite.mdx:45:<img src="../../assets/cloud-extract-sources/netsuite-settings-1.png" alt="Token based Authentication in Netsuite" />
docs/sources/extract/netsuite.mdx:51:<img src="../../assets/cloud-extract-sources/netsuite-settings-2.png" alt="New integration in Netsuite" />
docs/sources/extract/netsuite.mdx:62:<img src="../../assets/cloud-extract-sources/netsuite-settings-3.png" alt="Consume key/token in Netsuite" />
docs/sources/extract/netsuite.mdx:81:<img src="../../assets/cloud-extract-sources/netsuite-settings-4.png" alt="2FA Authentication in Netsuite" />
docs/sources/extract/netsuite.mdx:92:<img src="../../assets/cloud-extract-sources/netsuite-settings-5.png" alt="Permissions in Netsuite" />
docs/sources/extract/netsuite.mdx:117:<img src="../../assets/cloud-extract-sources/netsuite-settings-6.png" alt="Adding an employee in Netsuite" />
docs/sources/extract/netsuite.mdx:128:<img src="../../assets/cloud-extract-sources/netsuite-settings-7.png" alt="Access token settings in Netsuite" />
docs/sources/extract/netsuite.mdx:143:<img src="../../assets/cloud-extract-sources/netsuite-settings-8.png" alt="Access token settings in Netsuite" />
docs/sources/extract/netsuite.mdx:151:<img src="../../assets/cloud-extract-sources/netsuite-settings-9.png" alt="Account ID in Netsuite" />
docs/sources/extract/netsuite.mdx:170:<img src="../../assets/cloud-extract-sources/netsuite-settings-10.png" alt="Netsuite connection settings" />
docs/sources/extract/netsuite.mdx:194:<img src="../../assets/cloud-extract-sources/netsuite-settings-11.png" alt="Netsuite connection settings" />
docs/sources/extract/netsuite.mdx:225:<img src="../../assets/cloud-extract-sources/netsuite-settings-12.png" alt="Selecting import data" />
docs/sources/extract/netsuite.mdx:231:<img src="../../assets/cloud-extract-sources/netsuite-settings-13.png" alt="Cloning resources" />
docs/sources/extract/netsuite.mdx:244:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/netsuite.mdx:267:<img src="../../assets/cloud-extract-sources/netsuite-settings-14.png" alt="Creating a new script in NetSuite" />
docs/sources/extract/netsuite.mdx:271:<img src="../../assets/cloud-extract-sources/netsuite-settings-15.png" alt="Employee details NetSuite" />
docs/sources/extract/netsuite.mdx:275:<img src="../../assets/cloud-extract-sources/netsuite-settings-16.png" alt="Script deployment NetSuite" />
docs/sources/extract/netsuite.mdx:279:<img src="../../assets/cloud-extract-sources/netsuite-settings-17.png" alt="Restlet URL NetSuite" />
docs/sources/extract/pipedrive.mdx:21:<img src="../../assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3).png" alt="Add Source" />
docs/sources/extract/pipedrive.mdx:25:<img src="../../assets/screen-shot-2021-02-09-at-5.06.53-pm.png" alt="Select Pipedrive" />
docs/sources/extract/pipedrive.mdx:29:<img src="../../assets/screen-shot-2021-02-09-at-5.07.17-pm.png" alt="Assign a name" />
docs/sources/extract/pipedrive.mdx:35:<img src="../../assets/screen-shot-2021-02-09-at-5.08.24-pm.png" alt="Create new account" />
docs/sources/extract/pipedrive.mdx:57:<img src="../../assets/screen-shot-2021-02-09-at-5.08.36-pm.png" alt="Run Frequency" />
docs/sources/extract/pipedrive.mdx:63:<img src="../../assets/screen-shot-2021-02-09-at-5.08.56-pm.png" alt="Select All" />
docs/sources/extract/pipedrive.mdx:69:<img src="../../assets/screen-shot-2021-02-09-at-5.09.24-pm.png" alt="Add Destination" />
docs/sources/extract/quickbooks.mdx:20:<img src="../../assets/1 (15) (1).png" alt="Rudderstack Dashboard" />
docs/sources/extract/quickbooks.mdx:24:<img src="../../assets/2 (21).png" alt="Cloud Extract" />
docs/sources/extract/quickbooks.mdx:29:<img src="../../assets/3 (17).png" alt="Select QuickBooks" />
docs/sources/extract/quickbooks.mdx:35:<img src="../../assets/4 (18).png" alt="Connect with QuickBooks" />
docs/sources/extract/quickbooks.mdx:45:<img src="../../assets/5 (19).png" alt="Authorize RudderStack" />
docs/sources/extract/quickbooks.mdx:52:<img src="../../assets/6 (17).png" alt="Run Frequency" />
docs/sources/extract/quickbooks.mdx:58:<img src="../../assets/7 (12).png" alt="Choose QuickBooks data" />
docs/sources/extract/quickbooks.mdx:64:<img src="../../assets/8 (6).png" alt="Add Destination" />
docs/sources/extract/recurly.mdx:30:<img src="../../assets/cloud-extract-sources/recurly-connection-settings.png" alt="Recurly credentials" />
docs/sources/extract/recurly.mdx:58:<img src="../../assets/cloud-extract-sources/recurly-connection-settings-1.png" alt="Selecting the data to import" />
docs/sources/extract/recurly.mdx:64:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/recurly.mdx:79:<img src="../../assets/cloud-extract-sources/recurly-connection-settings-2.png" alt="Recurly API key" />
docs/sources/extract/salesforce-pardot.mdx:21:<img src="../../assets/1 (13).png" alt="Choose Pardot" />
docs/sources/extract/salesforce-pardot.mdx:25:<img src="../../assets/2 (16).png" alt="Assign a name to your source" />
docs/sources/extract/salesforce-pardot.mdx:31:<img src="../../assets/3 (15).png" alt="Create Credentials from Scratch" />
docs/sources/extract/salesforce-pardot.mdx:35:<img src="../../assets/3.1.png" alt="Connection Settings" />
docs/sources/extract/salesforce-pardot.mdx:54:<img src="../../assets/4 (13).png" alt="Run Frequency" />
docs/sources/extract/salesforce-pardot.mdx:66:<img src="../../assets/5 (13).png" alt="Select All" />
docs/sources/extract/salesforce-pardot.mdx:72:<img src="../../assets/6 (13).png" alt="Add Destination" />
docs/sources/extract/salesforce-v2.mdx:32:<img src="../../assets/cloud-extract-sources/salesforce-connection-settings-1.png" alt="Salesforce credentials" />
docs/sources/extract/salesforce-v2.mdx:55:<img src="../../assets/cloud-extract-sources/salesforce-connection-settings-2.png" alt="Salesforce credentials" />
docs/sources/extract/salesforce-v2.mdx:75:<img src="../../assets/cloud-extract-sources/salesforce-connection-settings-3.png" alt="Selecting the data to import" />
docs/sources/extract/salesforce-v2.mdx:85:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/salesforce/index.mdx:26:<img src="../../../assets/cloud-extract-sources/salesforce-1.png" alt="Salesforce source" />
docs/sources/extract/salesforce/index.mdx:30:<img src="../../../assets/cloud-extract-sources/salesforce-2.png" alt="Assigning source name" />
docs/sources/extract/salesforce/index.mdx:36:<img src="../../../assets/cloud-extract-sources/salesforce-3.png" alt="Connecting with RudderStack" />
docs/sources/extract/salesforce/index.mdx:50:<img src="../../../assets/cloud-extract-sources/salesforce-4.png" alt="Generic options" />
docs/sources/extract/salesforce/index.mdx:60:<img src="../../../assets/cloud-extract-sources/salesforce-5.png" alt="Selecting the data to import" />
docs/sources/extract/salesforce/index.mdx:66:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/sendgrid.mdx:26:<img src="../../assets/cloud-extract-sources/sendgrid-connection-settings.png" alt="Sendgrid credentials" />
docs/sources/extract/sendgrid.mdx:56:<img src="../../assets/cloud-extract-sources/sendgrid-connection-settings-3.png" alt="Selecting the data to import" />
docs/sources/extract/sendgrid.mdx:62:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/sendgrid.mdx:79:<img src="../../assets/cloud-extract-sources/sendgrid-api-key.png" alt="Sendgrid API key" />
docs/sources/extract/sendgrid.mdx:83:<img src="../../assets/cloud-extract-sources/sendgrid-api-key-permissions.png" alt="Sendgrid API key permissions" />
docs/sources/extract/sendgrid.mdx:87:<img src="../../assets/cloud-extract-sources/sendgrid-api-permissions.png" alt="Sendgrid required permissions" />
docs/sources/extract/sendgrid.mdx:91:<img src="../../assets/cloud-extract-sources/sendgrid-api-key-details.png" alt="Sendgrid API details" />
docs/sources/extract/stripe.mdx:33:<img src="../../assets/cloud-extract-sources/stripe-source-settings.png" alt="Specifying the Stripe API version" />
docs/sources/extract/stripe.mdx:54:<img src="../../assets/cloud-extract-sources/stripe-data-import-settings.png" alt="Selecting the data to import" />
docs/sources/extract/stripe.mdx:60:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/stripe.mdx:73:<img src="../../assets/cloud-extract-sources/stripe-api-version.png" alt="Stripe API version" />
docs/sources/extract/zendesk-chat.mdx:23:<img src="../../assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (1).png" alt="Add Source" />
docs/sources/extract/zendesk-chat.mdx:27:<img src="../../assets/2 (13).png" alt="Cloud Sources" />
docs/sources/extract/zendesk-chat.mdx:31:<img src="../../assets/3 (9).png" alt="Assign a name" />
docs/sources/extract/zendesk-chat.mdx:37:<img src="../../assets/4 (11).png" alt="Connect with Zendesk Chat" />
docs/sources/extract/zendesk-chat.mdx:54:<img src="../../assets/5 (12).png" alt="Sync Starting At" />
docs/sources/extract/zendesk-chat.mdx:60:<img src="../../assets/6 (11).png" alt="Select data to import" />
docs/sources/extract/zendesk-chat.mdx:66:<img src="../../assets/7 (8).png" alt="Add Destination" />
docs/sources/extract/zendesk.mdx:26:<img src="../../assets/cloud-extract-sources/zendesk-connection-settings-1.png" alt="Zendesk connection settings" />
docs/sources/extract/zendesk.mdx:63:<img src="../../assets/cloud-extract-sources/zendesk-connection-settings-2.png" alt="Selecting the data to import" />
docs/sources/extract/zendesk.mdx:69:<img src="../../assets/cloud-extract-sources/add-destination.png" alt="Adding a destination" />
docs/sources/extract/zendesk.mdx:81:<img src="../../assets/cloud-extract-sources/zendesk-subdomain.png" alt="Zendesk subdomain" />
docs/sources/extract/zendesk.mdx:89:<img src="../../assets/cloud-extract-sources/zendesk-api-token.png" alt="Zendesk API token" />
docs/sources/reverse-etl/amazon-redshift.mdx:113:<img src="../../assets/warehouse-actions-sources/select-source.png" alt="Select Reverse ETL source in RudderStack" />
docs/sources/reverse-etl/amazon-redshift.mdx:133:<img src="../../assets/warehouse-actions-sources/redshift-connection-settings.png" />
docs/sources/reverse-etl/amazon-redshift.mdx:169:<img src="../../assets/warehouse-actions-sources/destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/amazon-redshift.mdx:203:<img src="../../assets/warehouse-actions-sources/validations.png" alt="Validations" />
docs/sources/reverse-etl/amazon-redshift.mdx:226:<img src="../../assets/warehouse-actions-sources/table-model-options.png" />
docs/sources/reverse-etl/amazon-s3.mdx:19:<img src="../../assets/warehouse-actions-sources/select-source.png" alt="Select S3 source in RudderStack" />
docs/sources/reverse-etl/amazon-s3.mdx:64:<img src="../../assets/warehouse-actions-sources/destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/amazon-s3.mdx:78:<img src="../../assets/warehouse-actions-sources/s3-bucket-settings.png" alt="Bucket configuration settings" />
docs/sources/reverse-etl/amazon-s3.mdx:88:<img src="../../assets/warehouse-actions-sources/models-data-snippet.png" alt="Data snippet preview" />
docs/sources/reverse-etl/amazon-s3.mdx:93:<img src="../../assets/warehouse-actions-sources/add-constant.png" alt="Add constant option in RudderStack dashboard" />
docs/sources/reverse-etl/clickhouse.mdx:19:<img src="../../assets/warehouse-actions-sources/select-source.png" alt="Select Reverse ETL source in RudderStack" />
docs/sources/reverse-etl/clickhouse.mdx:34:<img src="../../assets/warehouse-actions-sources/clickhouse-additional-settings.png" />
docs/sources/reverse-etl/clickhouse.mdx:59:<img src="../../assets/warehouse-actions-sources/destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/common-settings/importing-data-using-models.mdx:22:<img src="../../../assets/warehouse-actions-sources/models-name-enter.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-models.mdx:38:<img src="../../../assets/warehouse-actions-sources/models-settings-configure.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-models.mdx:42:<img src="../../../assets/warehouse-actions-sources/models-data-snippet.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-models.mdx:59:<img src="../../../assets/warehouse-actions-sources/add-constant.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-models.mdx:63:<img src="../../../assets/warehouse-actions-sources/add-constant-in-json.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-models.mdx:67:<img src="../../../assets/warehouse-actions-sources/dot-notation-constant.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-models.mdx:78:<img src="../../../assets/warehouse-actions-sources/update-table-selection.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-tables.mdx:18:<img src="../../../assets/warehouse-actions-sources/schema-tab-options.png" alt="Schema tab options in RudderStack" />
docs/sources/reverse-etl/common-settings/importing-data-using-tables.mdx:32:<img src="../../../assets/warehouse-actions-sources/models-data-snippet.png" alt="Schema tab options in RudderStack" />
docs/sources/reverse-etl/common-settings/importing-data-using-tables.mdx:50:<img src="../../../assets/warehouse-actions-sources/add-constant.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-tables.mdx:54:<img src="../../../assets/warehouse-actions-sources/add-constant-in-json.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-tables.mdx:58:<img src="../../../assets/warehouse-actions-sources/dot-notation-constant.png" />
docs/sources/reverse-etl/common-settings/importing-data-using-tables.mdx:69:<img src="../../../assets/warehouse-actions-sources/update-table-selection-wh.png" alt="Updating table selection" />
docs/sources/reverse-etl/common-settings/sync-modes.mdx:37:<img src="../../../assets/warehouse-actions-sources/upsert-mode.png" alt="Upsert mode" />
docs/sources/reverse-etl/common-settings/sync-modes.mdx:51:<img src="../../../assets/warehouse-actions-sources/mirror-mode.png" alt="Mirror mode" />
docs/sources/reverse-etl/common-settings/sync-schedule-settings.mdx:21:<img src="../../../assets/warehouse-actions-sources/sync-schedule-basic.png" alt="Basic sync schedule" />
docs/sources/reverse-etl/common-settings/sync-schedule-settings.mdx:42:<img src="../../../assets/warehouse-actions-sources/sync-schedule-cron.png" alt="CRON schedule" />
docs/sources/reverse-etl/common-settings/sync-schedule-settings.mdx:49:<img src="../../../assets/warehouse-actions-sources/sync-schedule-cron-error.png" alt="CRON schedule error" />
docs/sources/reverse-etl/common-settings/sync-schedule-settings.mdx:57:<img src="../../../assets/warehouse-actions-sources/sync-schedule-manual.png" alt="Manual sync schedule" />
docs/sources/reverse-etl/common-settings/sync-schedule-settings.mdx:88:<img src="../../../assets/warehouse-actions-sources/sync-schedule-settings-change.png" alt="Syncs schedule settings change" />
docs/sources/reverse-etl/databricks.mdx:48:<img src="../../assets/warehouse-actions-sources/select-source-databricks.png" alt="Select Databricks source in RudderStack" />
docs/sources/reverse-etl/databricks.mdx:82:<img src="../../assets/warehouse-actions-sources/destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/databricks.mdx:109:<img src="../../assets/warehouse-actions-sources/connection-settings-databricks.png" alt="Select Databricks source in RudderStack" />
docs/sources/reverse-etl/databricks.mdx:113:<img src="../../assets/warehouse-actions-sources/connection-settings-databricks-2.png" alt="Select Databricks source in RudderStack" />
docs/sources/reverse-etl/databricks.mdx:123:<img src="../../assets/warehouse-actions-sources/validations.png" alt="Validations" />
docs/sources/reverse-etl/faq.mdx:39:<img src="../../assets/warehouse-actions-sources/table-model-options.png" />
docs/sources/reverse-etl/features/airflow-provider.mdx:50:<img src="../../../assets/warehouse-actions-sources/airflow-provider-1.png" alt="Airflow dashboard Connections option" />
docs/sources/reverse-etl/features/airflow-provider.mdx:54:<img src="../../../assets/warehouse-actions-sources/airflow-provider-2.png" alt="Airflow dashboard edit connection" />
docs/sources/reverse-etl/features/airflow-provider.mdx:124:<img src="../../../assets/warehouse-actions-sources/airflow-provider-3.png" alt="enabling Airflow DAG in dashboard" />
docs/sources/reverse-etl/features/airflow-provider.mdx:139:<img src="../../../assets/warehouse-actions-sources/source-id.png" alt="Source ID for Reverse ETL sources" />
docs/sources/reverse-etl/features/models.mdx:33:<img src="../../../assets/warehouse-actions-sources/models-view-dashboard.png" alt="RudderStack Models" />
docs/sources/reverse-etl/features/models.mdx:43:<img src="../../../assets/warehouse-actions-sources/models-dashboard.png" alt="RudderStack Models"/>
docs/sources/reverse-etl/features/models.mdx:47:<img src="../../../assets/warehouse-actions-sources/select-source-model.png" alt="Add Model"/>
docs/sources/reverse-etl/features/models.mdx:57:<img src="../../../assets/warehouse-actions-sources/model-settings.png" alt="Model settings" />
docs/sources/reverse-etl/features/models.mdx:66:<img src="../../../assets/warehouse-actions-sources/sample-sql-query.png" alt="Sample SQL query" />
docs/sources/reverse-etl/features/models.mdx:88:<img src="../../../assets/warehouse-actions-sources/edit-model-configuration.png" alt="Edit existing Model configuration" />
docs/sources/reverse-etl/features/models.mdx:101:<img src="../../../assets/warehouse-actions-sources/model-rename.png" alt="Rename model" />
docs/sources/reverse-etl/features/models.mdx:121:<img src="../../../assets/validations.png" alt="Verifying Credentials" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:39:<img src="../../../assets/warehouse-actions-sources/vdm-object.png" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:43:<img src="../../../assets/warehouse-actions-sources/vdm-model.png" alt="VDM model options" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:60:<img src="../../../assets/warehouse-actions-sources/vdm-2.png" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:83:<img src="../../../assets/warehouse-actions-sources/vdm-3.png" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:96:<img src="../../../assets/warehouse-actions-sources/vdm-4.png" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:107:<img src="../../../assets/warehouse-actions-sources/vdm-5.png" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:115:<img src="../../../assets/warehouse-actions-sources/vdm-6.png" />
docs/sources/reverse-etl/features/visual-data-mapper.mdx:137:<img src="../../../assets/warehouse-actions-sources/vdm-7.png" alt="Map another field" />
docs/sources/reverse-etl/google-bigquery.mdx:21:<img src="../../assets/warehouse-actions-sources/GCP-create-role.png" alt="Google Cloud Platform dashboard create role" />
docs/sources/reverse-etl/google-bigquery.mdx:25:<img src="../../assets/warehouse-actions-sources/gcp-role-details.png" alt="GCP role details" />
docs/sources/reverse-etl/google-bigquery.mdx:48:<img src="../../assets/warehouse-actions-sources/gcp-create-service-account.png" alt="Create service account in GCP" />
docs/sources/reverse-etl/google-bigquery.mdx:52:<img src="../../assets/warehouse-actions-sources/gcp-service-account-details.png" />
docs/sources/reverse-etl/google-bigquery.mdx:61:<img src="../../assets/warehouse-actions-sources/gcp-service-account-role-details.png" alt="Service account role details" />
docs/sources/reverse-etl/google-bigquery.mdx:69:<img src="../../assets/warehouse-actions-sources/manage-keys.png" alt="Managing keys in GCP" />
docs/sources/reverse-etl/google-bigquery.mdx:73:<img src="../../assets/warehouse-actions-sources/gcp-add-key.png" alt="GCP Adding a new key" />
docs/sources/reverse-etl/google-bigquery.mdx:77:<img src="../../assets/warehouse-actions-sources/create-new-key.png" />
docs/sources/reverse-etl/google-bigquery.mdx:110:<img src="../../assets/warehouse-actions-sources/select-source.png" alt="Select Reverse ETL source in RudderStack" />
docs/sources/reverse-etl/google-bigquery.mdx:129:<img src="../../assets/warehouse-actions-sources/bigquery-connection-settings.png" />
docs/sources/reverse-etl/google-bigquery.mdx:162:<img src="../../assets/warehouse-actions-sources/destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/google-bigquery.mdx:190:<img src="../../assets/warehouse-actions-sources/table-model-options.png" />
docs/sources/reverse-etl/google-bigquery.mdx:199:<img src="../../assets/validations.png" />
docs/sources/reverse-etl/mysql.mdx:60:<img src="../../assets/warehouse-actions-sources/mysql-connection-settings.png" />
docs/sources/reverse-etl/mysql.mdx:93:<img src="../../assets/warehouse-actions-sources/add-destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/mysql.mdx:115:<img src="../../assets/warehouse-actions-sources/validations.png" alt="Validations" />
docs/sources/reverse-etl/postgresql.mdx:95:<img src="../../assets/warehouse-actions-sources/select-source.png" alt="Select Reverse ETL source in RudderStack" />
docs/sources/reverse-etl/postgresql.mdx:103:<img src="../../assets/warehouse-actions-sources/table-model-options.png" />
docs/sources/reverse-etl/postgresql.mdx:116:<img src="../../assets/warehouse-actions-sources/postgresql-connection-settings.png" />
docs/sources/reverse-etl/postgresql.mdx:152:<img src="../../assets/warehouse-actions-sources/add-destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/postgresql.mdx:186:<img src="../../assets/warehouse-actions-sources/validations.png" alt="Validations" />
docs/sources/reverse-etl/snowflake.mdx:21:<img src="../../assets/warehouse-actions-sources/snowflake-accountadmin.png" alt="Snowflake account admin role" />
docs/sources/reverse-etl/snowflake.mdx:130:<img src="../../assets/warehouse-actions-sources/select-source.png" alt="Select Reverse ETL source in RudderStack" />
docs/sources/reverse-etl/snowflake.mdx:190:<img src="../../assets/warehouse-actions-sources/add-destination.png" alt="Add destination in RudderStack" />
docs/sources/reverse-etl/snowflake.mdx:217:<img src="../../assets/warehouse-actions-sources/table-model-options.png" />
docs/sources/reverse-etl/snowflake.mdx:226:<img src="../../assets/warehouse-actions-sources/validations.png" alt="Validations" />
docs/sources/reverse-etl/snowflake.mdx:247:<img src="../../assets/warehouse-actions-sources/permissions-error.png" alt="Permissions error" />
docs/sources/sdks/event-filtering.mdx:38:<img src="../../assets/event-stream-sources/rudderstack-event-filtering.png" alt="Event filtering options" />
docs/sources/sdks/rudderstack-amp-analytics.mdx:32:<img src="../../assets/event-stream-sources/amp-analytics-1.png" />
docs/sources/sdks/rudderstack-android-sdk/index.mdx:26:<img src="../../../assets/event-stream-sources/android-sdk-1.png" alt="Android source write key" />
docs/sources/sdks/rudderstack-cordova-sdk.mdx:28:<img src="../../assets/event-stream-sources/cordova-sdk-1.png" alt="Cordova source write key" />
docs/sources/sdks/rudderstack-cordova-sdk.mdx:490:<img src="../../assets/event-stream-sources/cordova-sdk-1.png" alt="Cordova source write key" />
docs/sources/sdks/rudderstack-dotnet-sdk.mdx:25:<img src="../../assets/event-stream-sources/dot-net-1.png" alt=".NET source write key" />
docs/sources/sdks/rudderstack-flutter-sdk/flutter-v1.mdx:22:<img src="../../../assets/event-stream-sources/flutter-sdk-1.png" alt="Flutter source write key" />
docs/sources/sdks/rudderstack-flutter-sdk/flutter-v2.mdx:35:<img src="../../../assets/event-stream-sources/flutter-sdk-1.png" alt="Flutter source write key" />
docs/sources/sdks/rudderstack-flutter-sdk/index.mdx:33:<img src="../../../assets/event-stream-sources/flutter-sdk-1.png" alt="Flutter source write key" />
docs/sources/sdks/rudderstack-go-sdk.mdx:24:<img src="../../assets/event-stream-sources/go-sdk-1.png" alt="Go source write key" />
docs/sources/sdks/rudderstack-ios-sdk/index.mdx:50:<img src="../../../assets/event-stream-sources/ios-sdk-1.png" alt="iOS source write key" />
docs/sources/sdks/rudderstack-ios-sdk/ios-v2.mdx:42:<img src="../../../assets/event-stream-sources/ios-sdk-1.png" alt="iOS source write key" />
docs/sources/sdks/rudderstack-java-sdk.mdx:24:<img src="../../assets/event-stream-sources/java-sdk-1.png" alt="Java source write key" />
docs/sources/sdks/rudderstack-javascript-sdk/consent-managers/onetrust.mdx:43:<img src="../../../../assets/event-stream-sources/onetrust-1.png" alt="OneTrust category names" />
docs/sources/sdks/rudderstack-javascript-sdk/faq.mdx:48:<img src="../../../assets/sample-page-call.png" alt="Sample page call" />
docs/sources/sdks/rudderstack-javascript-sdk/faq.mdx:50:<img src="../../../assets/sample-track-call.png" alt="Sample track call" />
docs/sources/sdks/rudderstack-javascript-sdk/javascript-sdk-enhancements.mdx:140:<img src="../../../assets/requireintegration-call-flow.png" alt="requireIntegration call flow" />
docs/sources/sdks/rudderstack-javascript-sdk/version-migration-guide.mdx:97:<img src="../../../assets/js-sdk-version-migration.png" alt="Recommended structure for self-hosting RudderStack's CDN" />
docs/sources/sdks/rudderstack-node-sdk.mdx:25:<img src="../../assets/event-stream-sources/node-sdk-1.png" alt="Node.js source write key" />
docs/sources/sdks/rudderstack-php-sdk.mdx:25:<img src="../../assets/event-stream-sources/php-sdk-1.png" alt="PHP source write key" />
docs/sources/sdks/rudderstack-python-sdk.mdx:25:<img src="../../assets/event-stream-sources/python-sdk-1.png" alt="Python source write key" />
docs/sources/sdks/rudderstack-react-native-sdk.mdx:25:<img src="../../assets/event-stream-sources/react-native-1.png" alt="React Native source write key" />
docs/sources/sdks/rudderstack-ruby-sdk.mdx:25:<img src="../../assets/event-stream-sources/ruby-sdk-1.png" alt="Ruby source write key" />
docs/sources/sdks/rudderstack-rust-sdk.mdx:25:<img src="../../assets/event-stream-sources/rust-sdk-1.png" alt="Rust source write key" />
docs/sources/sdks/rudderstack-unity-sdk.mdx:19:<img src="../../assets/event-stream-sources/unity-sdk-1.png" alt="Unity source write key" />
docs/sources/sdks/rudderstack-unity-sdk.mdx:32:<img src="../../assets/event-stream-sources/unity-sdk-2.png" alt="Importing the downloaded package" />
docs/sources/sdks/rudderstack-unity-sdk.mdx:36:<img src="../../assets/event-stream-sources/unity-sdk-3.png" alt="Selecting the Unity package for integration" />
docs/sources/sdks/rudderstack-unity-sdk.mdx:40:<img src="../../assets/event-stream-sources/unity-sdk-4.png" alt="Importing the Unity package" />
docs/user-guides/administrators-guide/alerting.mdx:103:<img src="../../assets/image (56).png" />
docs/user-guides/administrators-guide/bucket-configuration-settings.mdx:118:<img src="../../assets/screenshot-2020-08-05-at-11.38.37-am.png" alt="Permission" />
docs/user-guides/administrators-guide/bucket-configuration-settings.mdx:125:<img src="../../assets/screenshot-2020-08-05-at-11.40.12-am (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (2) (1).png" alt="Assign a name" />
docs/user-guides/administrators-guide/bucket-configuration-settings.mdx:130:<img src="../../assets/screenshot-2020-08-05-at-11.41.24-am.png" alt="" />
docs/user-guides/administrators-guide/bucket-configuration-settings.mdx:135:<img src="../../assets/screenshot-2020-08-05-at-11.49.10-am.png" alt="Create a key" />
docs/user-guides/administrators-guide/bucket-configuration-settings.mdx:141:<img src="../../assets/screenshot-2020-08-05-at-11.52.07-am.png" alt="Create a bucket" />
docs/user-guides/administrators-guide/bucket-configuration-settings.mdx:149:<img src="../../assets/screenshot-2020-08-05-at-11.53.34-am.png" alt="Go to Permissions" />
docs/user-guides/administrators-guide/high-availability.mdx:16:<img src="../../assets/rudderstack2x_-7-.png" />
docs/user-guides/administrators-guide/high-availability.mdx:22:<img src="../../assets/rudderstack2x_-9-.png" />
docs/user-guides/administrators-guide/high-availability.mdx:31:<img src="../../assets/rudderstack2x_-11-.png" />
docs/user-guides/administrators-guide/high-availability.mdx:47:<img src="../../assets/rudderstack2x_-12-.png" />
docs/user-guides/administrators-guide/high-availability.mdx:56:<img src="../../assets/rudderstack2x_-13- (1) (1) (1) (1) (1) (1) (1).png" />
docs/user-guides/administrators-guide/high-availability.mdx:78:<img src="../../assets/rudderstack2x_-6-.png" />
docs/user-guides/administrators-guide/horizontal-scaling-1.mdx:24:<img src="../../assets/image (17).png" />
docs/user-guides/administrators-guide/horizontal-scaling-1.mdx:31:<img src="../../assets/image (65).png" />
docs/user-guides/administrators-guide/horizontal-scaling-1.mdx:46:<img src="../../assets/image (27).png" />
docs/user-guides/administrators-guide/horizontal-scaling-1.mdx:53:<img src="../../assets/image (55).png" />
docs/user-guides/administrators-guide/infra-provisioning.mdx:214:<img src="../../assets/screenshot-2019-10-25-at-12.22.22-pm.png" />
docs/user-guides/administrators-guide/okta-sso.mdx:25:<img src="../../assets/user-guides/okta-sso-1.png" alt="Create App Integration" />
docs/user-guides/administrators-guide/okta-sso.mdx:29:<img src="../../assets/user-guides/okta-sso-2.png" alt="SAML 2.0" />
docs/user-guides/administrators-guide/okta-sso.mdx:33:<img src="../../assets/user-guides/okta-sso-3.png" alt="Rudderstack as app name" />
docs/user-guides/administrators-guide/okta-sso.mdx:39:<img src="../../assets/user-guides/okta-sso-4.png" alt="Enter the settings" />
docs/user-guides/administrators-guide/okta-sso.mdx:57:<img src="../../assets/user-guides/okta-sso-5.png" />
docs/user-guides/administrators-guide/okta-sso.mdx:80:<img src="../../assets/user-guides/okta-sso-6.png" alt="Identity provider metadata" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:20:<img src="../../assets/user-guides/onelogin-1.png" alt="Administration option in OneLogin" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:24:<img src="../../assets/user-guides/onelogin-2.png" alt="Applications option" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:28:<img src="../../assets/user-guides/onelogin-3.png" alt="Add App option" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:32:<img src="../../assets/user-guides/onelogin-4.png" alt="Select SAML Custom Connector option" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:36:<img src="../../assets/user-guides/onelogin-5.png" alt="Select SAML app name" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:40:<img src="../../assets/user-guides/onelogin-6.png" alt="SAML app configuration" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:58:<img src="../../assets/user-guides/onelogin-7.png" alt="SAML settings" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:66:<img src="../../assets/user-guides/onelogin-8.png" alt="Custom parameters" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:82:<img src="../../assets/user-guides/onelogin-9.png" alt="Custom parameter configuration" />
docs/user-guides/administrators-guide/onelogin-sso.mdx:94:<img src="../../assets/user-guides/onelogin-10.png" alt="Issuer URL" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:55:<img src="../../assets/1 (4).png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:72:<img src="../../assets/2 (8).png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:99:<img src="../../assets/3.png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:114:<img src="../../assets/screenshot_2020-12-09_at_11.17.00_pm.png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:132:<img src="../../assets/4 (8).png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:142:<img src="../../assets/5 (8).png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:153:<img src="../../assets/screenshot_2020-12-10_at_12.49.12_pm.png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:163:<img src="../../assets/6 (8).png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:182:<img src="../../assets/7 (4).png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:193:<img src="../../assets/8 (2).png" />
docs/user-guides/administrators-guide/rudderstack-grafana-dashboard.mdx:218:<img src="../../assets/9 (2).png" />
docs/user-guides/how-to-guides/custom-domains.mdx:41:<img src="../../assets/user-guides/custom-domains/custom-domains-1.png" alt="Custom domains distribution settings" />
docs/user-guides/how-to-guides/custom-domains.mdx:54:<img src="../../assets/user-guides/custom-domains/custom-domains-2.png" alt="Custom domains distribution settings" />
docs/user-guides/how-to-guides/custom-domains.mdx:76:<img src="../../assets/user-guides/custom-domains/custom-domains-3.png" alt="Custom domains distribution settings" />
docs/user-guides/how-to-guides/custom-domains.mdx:89:<img src="../../assets/user-guides/custom-domains/custom-domains-5.png" alt="CloudFront deployment" />
docs/user-guides/how-to-guides/custom-domains.mdx:93:<img src="../../assets/user-guides/custom-domains/custom-domains-4.png" alt="Custom domains create policy settings" />
docs/user-guides/how-to-guides/custom-domains.mdx:125:<img src="../../assets/user-guides/custom-domains/custom-domains-6.png" alt="CDN distribution URL" />
docs/user-guides/how-to-guides/custom-domains.mdx:224:<img src="../../assets/user-guides/custom-domains/custom-domains-7.png" alt="Allowlist authorization header" />
docs/user-guides/how-to-guides/custom-domains.mdx:250:<img src="../../assets/user-guides/custom-domains/custom-domains-8.png" alt="Custom SSL certificate" />
docs/user-guides/how-to-guides/dynamic-destination-configuration.mdx:79:<img src="../../assets/user-guides/dynamic-destination-configuration.png" />
docs/user-guides/how-to-guides/implement-native-js-sdk-integration/add-device-mode-sdk-to-js.mdx:21:<img src="../../../assets/screenshot-2019-12-10-at-7.57.43-pm.png" />
docs/user-guides/how-to-guides/implement-native-js-sdk-integration/add-device-mode-sdk-to-js.mdx:75:<img src="../../../assets/screenshot-2019-12-10-at-7.21.35-pm.png" />
docs/user-guides/how-to-guides/implement-native-js-sdk-integration/add-device-mode-sdk-to-js.mdx:78:<img src="../../../assets/screenshot-2019-12-10-at-7.22.25-pm.png" />
docs/user-guides/how-to-guides/implement-native-js-sdk-integration/index.mdx:15:<img src="../../../assets/screenshot-2019-12-10-at-7.57.43-pm.png" />
docs/user-guides/how-to-guides/implement-native-js-sdk-integration/index.mdx:36:<img src="../../../assets/screenshot-2019-12-10-at-7.21.35-pm.png" />
docs/user-guides/how-to-guides/implement-native-js-sdk-integration/index.mdx:38:<img src="../../../assets/screenshot-2019-12-10-at-7.22.25-pm.png" />
docs/user-guides/how-to-guides/live-destination-event-debugger.mdx:30:<img src="../../assets/am-dest-error.png" alt="Payload sent to the destination" />
docs/user-guides/how-to-guides/live-destination-event-debugger.mdx:49:<img src="../../assets/image (33).png" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:103:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:111:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:130:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:135:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:143:<img src="../../../assets/user-guides/successful-live-events-angular.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration.mdx:147:<img src="../../../assets/user-guides/ga-live-events-angular.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:103:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:111:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:130:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:135:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:143:<img src="../../../assets/user-guides/successful-live-events-astro.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration.mdx:147:<img src="../../../assets/user-guides/ga-live-events-astro.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:42:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:98:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:106:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:125:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:130:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:138:<img src="../../../assets/user-guides/successful-live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration.mdx:142:<img src="../../../assets/user-guides/ga-live-events.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:103:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:111:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:130:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:135:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:143:<img src="../../../assets/user-guides/successful-live-events-ember.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration.mdx:147:<img src="../../../assets/user-guides/ga-live-events-ember.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-gatsby-integration.mdx:28:<img src="../../../assets/source (1).png" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:106:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:114:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:133:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:138:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:146:<img src="../../../assets/user-guides/successful-live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration.mdx:150:<img src="../../../assets/user-guides/ga-live-events.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:126:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:134:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:153:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:158:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:166:<img src="../../../assets/user-guides/successful-live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration.mdx:170:<img src="../../../assets/user-guides/ga-live-events.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:81:<img src="../../../assets/user-guides/document-next-app.png" alt="New document Next.js" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:161:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:169:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:189:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:194:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:203:<img src="../../../assets/user-guides/successful-live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration.mdx:207:<img src="../../../assets/user-guides/ga-live-events.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:93:<img src="../../../assets/user-guides/nuxtjs-config.png" alt="Nuxt.js configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:114:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:122:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:141:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:146:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:154:<img src="../../../assets/user-guides/successful-live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration.mdx:158:<img src="../../../assets/user-guides/ga-live-events.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:102:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:110:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:129:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:134:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:142:<img src="../../../assets/user-guides/successful-live-events-svelte.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration.mdx:146:<img src="../../../assets/user-guides/ga-live-events-svelte.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:32:<img src="../../../assets/user-guides/rudderstack-dashboard.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:36:<img src="../../../assets/user-guides/rudderstack-directory.png" alt="RudderStack directory" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:41:<img src="../../../assets/user-guides/javascript-writekey.png" alt="RudderStack dashboard" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:80:<img src="../../../assets/user-guides/ga-settings.png" alt="Google Analytics destination configuration" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:88:<img src="../../../assets/user-guides/rudderstack-ga-connection.png" alt="Google Analytics connection" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:107:<img src="../../../assets/user-guides/browser-network-tab.png" alt="Chrome Network tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:112:<img src="../../../assets/user-guides/live-events.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:121:<img src="../../../assets/user-guides/successful-live-events-vue.png" alt="RudderStack live events tab" />
docs/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration.mdx:125:<img src="../../../assets/user-guides/ga-live-events-vue.png" alt="Google Analytics live events tab" />
docs/user-guides/how-to-guides/using-aws-lambda-functions-with-rudderstack.mdx:33:<img src="../../assets/aws-lambda-1.png" alt="Install the rudderstack node sdk" />
docs/user-guides/how-to-guides/using-aws-lambda-functions-with-rudderstack.mdx:37:<img src="../../assets/aws-lambda-2.png" alt="Archive all the contents of the lambda function" />
docs/user-guides/how-to-guides/using-aws-lambda-functions-with-rudderstack.mdx:41:<img src="../../assets/aws-lambda-3.png" alt="Update the lambda function" />
docs/user-guides/migration-guides/how-to-migrate-warehouse-destination-from-segment-to-rudderstack.mdx:38:<img src="../../assets/warehouse-migration.png" alt="Migrating Warehouse Destinations from Segment to RudderStack" />
docs/user-guides/migration-guides/rudderstack-migration-guide.mdx:12:<img src="../../assets/user-guides/data-plane-url.png" alt="RudderStack data plane URL" />`

/* Get all images being used in mdx files */
let usedFiles = []
mdxImages.split('\n').forEach(x => {
  let filename = 'docs/assets' + x.split('assets')[1]?.split('"')[0]

  if (x.includes('assets') && !usedFiles.includes(filename)) {
    usedFiles.push(filename)
  }
})

/* Get all images not being used and remove them using unlinkSync(filename) */
let unusedFiles = []
allImages.split('\n').forEach(x => {
  if (!usedFiles.includes(x)) {
    unusedFiles.push(x)
    // fs.unlinkSync(x)
  }
})

console.log(fs.appendFileSync('removedFiles.json', JSON.stringify(unusedFiles)))
