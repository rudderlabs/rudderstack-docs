export const jsonData = [
    // Home section (just a link actually)
    {
        title: "Home",
        link: "/",
        content: []
    },
    // Getting Started section
    {
        title: "What is RudderStack?",
        sectionTitle: "Get Started",
        link: `/get-started/what-is-rudderstack/`,
        content: []
    },
    {
        title: "Quickstart",
        link: `/get-started/quickstart/`,
        content: []
    },
    {
        title: "RudderStack Cloud",
        link: `/get-started/rudderstack-cloud/`,
        content: []
    },
    {
        title: "RudderStack Open Source",
        link: "/get-started/rudderstack-open-source/",
        content: [
            {
                title: "Control Plane Setup",
                link: "/get-started/rudderstack-open-source/control-plane-lite/",
                content: []
            }, {
                title: "Data Plane Setup",
                link: "/get-started/rudderstack-open-source/data-plane-setup/",
                content: [
                    {
                        title: "Docker",
                        link: "/get-started/rudderstack-open-source/data-plane-setup/docker/",
                        content: []
                    }, {
                        title: "Kubernetes",
                        link: "/get-started/rudderstack-open-source/data-plane-setup/kubernetes/",
                        content: []
                    }, {
                        title: "Developer Machine Setup",
                        link: "/get-started/rudderstack-open-source/data-plane-setup/developer-machine-setup/",
                        content: []
                    },
                ]
            },
            {
                title: "Sending Test Events",
                link: "/get-started/rudderstack-open-source/sending-test-events/",
                content: []
            },
        ]
    },
    {
        title: "RudderStack Cloud vs. Open Source",
        link: "/get-started/cloud-vs-open-source/",
        content: []
    },

// Dashboard guides section

{
    title: "Overview",
    sectionTitle: "Dashboard Guides",
    link: "/dashboard-guides/overview/",
    content: []
},
{
    title: "Sources",
    link: "/dashboard-guides/sources/",
    content: []
},
{
    title: "Destinations",
    link: "/dashboard-guides/destinations/",
    content: []
},
{
    title: "Live Events",
    link: "/dashboard-guides/live-events/",
    content: []
},
{
    title: "Permissions Management",
    link: "/dashboard-guides/permissions-management/",
    content: []
},
{
    title: "Audit Logs",
    link: "/dashboard-guides/audit-logs/",
    content: []
},
{
    title: "Personal Access Token",
    link: "/dashboard-guides/personal-access-token/",
    content: []
},
    // Sources section
    {
        title: "Overview",
        sectionTitle: "Sources",
        link: "/sources/",
        content: []
    }, 
    {
        title: "Event Streams",
        link: "/sources/event-streams",
        content: [
            {
                title: "SDKs",
                link: "/sources/event-streams/sdks/",
                content: [
                    {
                        title: "JavaScript",
                        sectionTitle: "Web",
                        link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/",
                        content: [
                            {
                                title: "Quickstart",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/quick-start-guide/",
                                content: []
                            },
                            {
                                title: "Load the SDK",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/load-js-sdk/",
                                content: []
                            },
                            {
                                title: "Supported API",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/supported-api/",
                                content: [],
                            },
                            {
                                title: "Data Storage",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/data-storage-cookies/",
                                content: []
                            },
                            {
                                title: "Filtering",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/filtering/",
                                content: [],
                            },
                            {
                                title: "Version Migration",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/version-migration-guide/",
                                content: []
                            },
                            {
                                title: "OneTrust Consent Manager",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/onetrust-consent-manager/",
                                content: [],
                            },
                            {
                                title: "Detect Ad-blocked Pages",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/detecting-adblocked-pages/",
                                content: []
                            },
                            {
                                title: "Enhancements",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/javascript-sdk-enhancements/",
                                content: []
                            },
                            {
                                title: "FAQ",
                                link: "/sources/event-streams/sdks/rudderstack-javascript-sdk/faq/",
                                content: []
                            },
                        ]
                    },
                    {
                        title: "AMP Analytics",
                        link: "/sources/event-streams/sdks/rudderstack-amp-analytics/",
                        content: []
                    },
                    {
                        title: "Android",
                        sectionTitle: "Mobile",
                        link: "/sources/event-streams/sdks/rudderstack-android-sdk/",
                        content: [
                            {
                                title: "Adding Application Class",
                                link: "/sources/event-streams/sdks/rudderstack-android-sdk/adding-an-application-class/",
                                content: []
                            }, {
                                title: "Flushing Events",
                                link: "/sources/event-streams/sdks/rudderstack-android-sdk/flushing-events-periodically/",
                                content: []
                            },
                        ]
                    },
                    {
                        title: "iOS",
                        link: "/sources/event-streams/sdks/rudderstack-ios-sdk/",
                        content: [
                            {
                                title: "iOS v2",
                                link: "/sources/event-streams/sdks/rudderstack-ios-sdk/ios-v2/",
                                content: []
                            }, {
                                title: "tvOS",
                                link: "/sources/event-streams/sdks/rudderstack-ios-sdk/tvOS/",
                                content: []
                            }, {
                                title: "macOS",
                                link: "/sources/event-streams/sdks/rudderstack-ios-sdk/macos/",
                                content: []
                            }, {
                                title: "watchOS",
                                link: "/sources/event-streams/sdks/rudderstack-ios-sdk/watchOS/",
                                content: []
                            },
                        ]
                    },
                    {
                        title: "Unity",
                        link: "/sources/event-streams/sdks/rudderstack-unity-sdk/",
                        content: []
                    }, {
                        title: "React Native",
                        link: "/sources/event-streams/sdks/rudderstack-react-native-sdk/",
                        content: []
                    }, {
                        title: "Flutter",
                        link: "/sources/event-streams/sdks/rudderstack-flutter-sdk/",
                        content: [
                            {
                                title: "Flutter SDK v2",
                                link: "/sources/event-streams/sdks/rudderstack-flutter-sdk/flutter-v2/",
                                content: []
                            }, {
                                title: "Flutter SDK v1",
                                link: "/sources/event-streams/sdks/rudderstack-flutter-sdk/flutter-v1/",
                                content: []
                            },
                        ]
                    }, {
                        title: "Cordova",
                        link: "/sources/event-streams/sdks/rudderstack-cordova-sdk/",
                        content: []
                    }, {
                        title: "Java",
                        sectionTitle: "Server",
                        link: "/sources/event-streams/sdks/rudderstack-java-sdk/",
                        content: []
                    }, {
                        title: "Python",
                        link: "/sources/event-streams/sdks/rudderstack-python-sdk/",
                        content: []
                    }, {
                        title: "Rust",
                        link: "/sources/event-streams/sdks/rudderstack-rust-sdk/",
                        content: []
                    }, {
                        title: "Node.js",
                        link: "/sources/event-streams/sdks/rudderstack-node-sdk/",
                        content: []
                    }, {
                        title: "Go",
                        link: "/sources/event-streams/sdks/rudderstack-go-sdk/",
                        content: []
                    }, {
                        title: "Ruby",
                        link: "/sources/event-streams/sdks/rudderstack-ruby-sdk/",
                        content: []
                    }, {
                        title: ".NET",
                        link: "/sources/event-streams/sdks/rudderstack-dotnet-sdk/",
                        content: []
                    }, {
                        title: "PHP",
                        link: "/sources/event-streams/sdks/rudderstack-php-sdk/",
                        content: []
                    },
                    {
                        title: "Client-side Event Filtering",
                        link: "/sources/event-streams/sdks/event-filtering/",
                        content: []
                    },
                    {
                        title: "SDK FAQ",
                        link: "/sources/event-streams/sdks/faq/",
                        content: []
                    },
                ]
            },
            {
                title: "Cloud Apps",
                link: "/sources/event-streams/cloud-apps/",
                content: [
                    {
                        title: "App Center",
                        link: "/sources/event-streams/cloud-apps/appcenter/",
                        content: []
                    },
                    {
                        title: "AppsFlyer",
                        link: "/sources/event-streams/cloud-apps/appsflyer/",
                        content: []
                    },
                    {
                        title: "Auth0",
                        link: "/sources/event-streams/cloud-apps/auth0/",
                        content: []
                    },
                    {
                        title: "Braze",
                        link: "/sources/event-streams/cloud-apps/braze-currents/",
                        content: []
                    },
                    {
                        title: "Canny",
                        link: "/sources/event-streams/cloud-apps/canny/",
                        content: []
                    },
                     {
                        title: "Customer.io",
                        link: "/sources/event-streams/cloud-apps/customerio/",
                        content: []
                    }, {
                        title: "Extole",
                        link: "/sources/event-streams/cloud-apps/extole/",
                        content: []
                    }, {
                        title: "Iterable",
                        link: "/sources/event-streams/cloud-apps/iterable/",
                        content: []
                    }, {
                        title: "Looker",
                        link: "/sources/event-streams/cloud-apps/looker/",
                        content: []
                    }, {
                        title: "PostHog",
                        link: "/sources/event-streams/cloud-apps/posthog/",
                        content: []
                    },
                    {
                        title: "Segment",
                        link: "/sources/event-streams/cloud-apps/segment/",
                        content: []
                    },
                    {
                        title: "Shopify",
                        link: "/sources/event-streams/cloud-apps/shopify/",
                        content: []
                    },
                    {
                        title: "Webhook Source",
                        link: "/sources/event-streams/cloud-apps/webhook-source/",
                        content: []
                    },
                ]
            }
        ]
    }, 
    {
        title: "Cloud Extract",
        link: "/sources/extract/",
        content: [
            {
                title: "Common Settings",
                link: "/sources/extract/common-settings/",
                content: []
            },
            {
                title: "ActiveCampaign",
                sectionTitle: "Sources",
                link: "/sources/extract/activecampaign/",
                content: []
            },
            {
                title: "Bing Ads",
                link: "/sources/extract/bing-ads/",
                content: []
            },
            {
                title: "Chargebee",
                link: "/sources/extract/chargebee/",
                content: []
            },
            {
                title: "Facebook Ads",
                link: "/sources/extract/facebook-ads/",
                content: []
            }, {
                title: "Freshdesk",
                link: "/sources/extract/freshdesk/",
                content: []
            }, {
                title: "Google Ads (Adwords)",
                link: "/sources/extract/google-adwords/",
                content: []
            }, {
                title: "Google Analytics",
                link: "/sources/extract/google-analytics/",
                content: []
            }, {
                title: "Google Search Console",
                link: "/sources/extract/google-search-console/",
                content: []
            }, {
                title: "Google Sheets",
                link: "/sources/extract/google-sheets/",
                content: []
            }, {
                title: "HubSpot",
                link: "/sources/extract/hubspot-v2/",
                content: []
            }, {
                title: "Intercom",
                link: "/sources/extract/intercom/",
                content: []
            }, {
                title: "Intercom V2",
                link: "/sources/extract/intercom-v2/",
                content: []
            }, {
                title: "Mailchimp",
                link: "/sources/extract/mailchimp/",
                content: []
            }, 
            {
                title: "Mixpanel",
                link: "/sources/extract/mixpanel/",
                content: []
            },
            {
                title: "Mixpanel V2",
                link: "/sources/extract/mixpanel-v2/",
                content: []
            }, 
            {
                title: "Marketo",
                link: "/sources/extract/marketo/",
                content: []
            }, {
                title: "NetSuite",
                link: "/sources/extract/netsuite/",
                content: []
            }, {
                title: "Pipedrive",
                link: "/sources/extract/pipedrive/",
                content: []
            }, 
            {
                title: "QuickBooks",
                link: "/sources/extract/quickbooks/",
                content: []
            }, 
            {
                title: "Recurly",
                link: "/sources/extract/recurly/",
                content: []
            },
            {
                title: "Salesforce",
                link: "/sources/extract/salesforce/",
                content: [
                    {
                        title: "Schema Comparison: Rudderstack Vs Segment",
                        link: "/sources/extract/salesforce/schema-comparison-rudderstack-vs-segment/",
                        content: []
                    },
                ]
            },
            {
                title: "Salesforce V2",
                link: "/sources/extract/salesforce-v2/",
                content: []
            },
            {
                title: "Salesforce Pardot",
                link: "/sources/extract/salesforce-pardot/",
                content: []
            }, {
                title: "SendGrid",
                link: "/sources/extract/sendgrid/",
                content: []
            },{
                title: "SendGrid V2",
                link: "/sources/extract/sendgrid-v2/",
                content: []
            }, {
                title: "Stripe",
                link: "/sources/extract/stripe/",
                content: []
            }, 
            {
                title: "Zendesk",
                link: "/sources/extract/zendesk/",
                content: []
            }, {
                title: "Zendesk Chat",
                link: "/sources/extract/zendesk-chat/",
                content: []
            },
        ]
    }, {
        title: "Reverse ETL",
        link: "/sources/reverse-etl/",
        content: [
            {
                title: "Amazon Redshift",
                sectionTitle: "Sources",
                link: "/sources/reverse-etl/amazon-redshift/",
                content: []
            },
            {
                title: "Amazon S3",
                link: "/sources/reverse-etl/amazon-s3/",
                content: []
            },
            {
                title: "ClickHouse",
                link: "/sources/reverse-etl/clickhouse/",
                content: []
            },
            {
                title: "Databricks",
                link: "/sources/reverse-etl/databricks/",
                content: []
            },
            {
                title: "Google BigQuery",
                link: "/sources/reverse-etl/google-bigquery/",
                content: []
            },
            {
                title: "MySQL",
                link: "/sources/reverse-etl/mysql/",
                content: []
            },
            {
                title: "PostgreSQL",
                link: "/sources/reverse-etl/postgresql/",
                content: []
            },
            {
                title: "Snowflake",
                link: "/sources/reverse-etl/snowflake/",
                content: []
            },
            {
                title: "Models",
                sectionTitle: "Features",
                link: "/sources/reverse-etl/features/models/",
                content: []
            }, {
                title: "Airflow Provider",
                link: "/sources/reverse-etl/features/airflow-provider/",
                content: []
            }, {
                title: "Visual Data Mapper",
                link: "/sources/reverse-etl/features/visual-data-mapper/",
                content: []
            },
            {
                title: "Sync Modes",
                sectionTitle: "Common Settings",
                link: "/sources/reverse-etl/common-settings/sync-modes/",
                content: []
            }, {
                title: "Sync Schedule",
                link: "/sources/reverse-etl/common-settings/sync-schedule-settings/",
                content: []
            }, {
                title: "Importing Data using Tables",
                link: "/sources/reverse-etl/common-settings/importing-data-using-tables/",
                content: []
            }, {
                title: "Importing Data using Models",
                link: "/sources/reverse-etl/common-settings/importing-data-using-models/",
                content: []
            },
            {
                title: "FAQ",
                sectionTitle: "",
                link: "/sources/reverse-etl/faq/",
                content: []
            },
        ]
    },
    // Destinations section
    {
        title: "Overview",
        sectionTitle: "Destinations",
        link: "/destinations/overview/",
        content: []
    },
    {
        title: "Cloud Destinations",
        link: "/destinations/streaming-destinations/",
        content: [
            {
                title: "Algolia Insights",
                sectionTitle: "A/B Testing & Personalization",
                link: "/destinations/streaming-destinations/algolia-insights/",
                content: []
            },
            {
                title: "Candu",
                link: "/destinations/streaming-destinations/candu/",
                content: []
            },
            {
                title: "ConvertFlow",
                link: "/destinations/streaming-destinations/convertflow/",
                content: []
            },
            {
                title: "Google Optimize",
                link: "/destinations/streaming-destinations/google-optimize/",
                content: []
            },
            {
                title: "LaunchDarkly",
                link: "/destinations/streaming-destinations/launchdarkly/",
                content: []
            }, {
                title: "Monetate",
                link: "/destinations/streaming-destinations/monetate/",
                content: []
            }, {
                title: "Optimizely Full Stack",
                link: "/destinations/streaming-destinations/optimizely-full-stack/",
                content: []
            }, {
                title: "Optimizely Web",
                link: "/destinations/streaming-destinations/optimizely-web/",
                content: []
            }, {
                title: "Split.io",
                link: "/destinations/streaming-destinations/splitio/",
                content: []
            }, {
                title: "Statsig",
                link: "/destinations/streaming-destinations/statsig/",
                content: []
            }, {
                title: "VWO (Visual Website Optimizer)",
                link: "/destinations/streaming-destinations/vwo-beta-visual-website-optimizer/",
                content: []
            },
            {
                title: "Bing Ads",
                sectionTitle: "Advertising",
                link: "/destinations/streaming-destinations/bingads/",
                content: []
            },
            {
                title: "Criteo",
                link: "/destinations/streaming-destinations/criteo/",
                content: []
            },
            {
                title: "DCM Floodlight",
                link: "/destinations/streaming-destinations/dcm-floodlight/",
                content: [
                    {
                        title: "Setting up DCM Floodlight",
                        link: "/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack/",
                        content: []
                    }, {
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/dcm-floodlight/dcm-floodlight-cloud-mode/",
                        content: []
                    }, {
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/dcm-floodlight/dcm-floodlight-device-mode/",
                        content: []
                    },
                ]
            },
            {
                title: "Facebook App Events",
                link: "/destinations/streaming-destinations/facebook-app-events/",
                content: []
            }, {
                title: "Facebook Custom Audience",
                link: "/destinations/streaming-destinations/fb-custom-audience/",
                content: []
            }, {
                title: "Facebook Pixel",
                link: "/destinations/streaming-destinations/fb-pixel/",
                content: []
            }, {
                title: "Google Ads (gtag.js)",
                link: "/destinations/streaming-destinations/g-ads-gtag/",
                content: []
            }, {
                title: "Google Ads Enhanced Conversions",
                link: "/destinations/streaming-destinations/google-adwords-enhanced-conversions/",
                content: []
            }, {
                title: "Google Ads Remarketing Lists (Customer Match)",
                link: "/destinations/streaming-destinations/google-adwords-remarketing-list/",
                content: []
            }, {
                title: "LinkedIn Insight Tag",
                link: "/destinations/streaming-destinations/linkedin-insight-tag/",
                content: []
            }, {
                title: "Lotame",
                link: "/destinations/streaming-destinations/lotame/",
                content: []
            }, {
                title: "Pinterest Tag",
                link: "/destinations/streaming-destinations/pinterest-ads/",
                content: []
            },
            {
                title: "Reddit Pixel",
                link: "/destinations/streaming-destinations/reddit-pixel/",
                content: []
            }, {
                title: "Snapchat Conversion",
                link: "/destinations/streaming-destinations/snapchat-conversion/",
                content: []
            }, {
                title: "Snap Pixel",
                link: "/destinations/streaming-destinations/snap-pixel/",
                content: []
            }, {
                title: "TikTok Ads",
                link: "/destinations/streaming-destinations/tiktok-ads/",
                content: []
            },
            {
                title: "Yahoo DSP",
                link: "/destinations/streaming-destinations/yahoo-dsp/",
                content: [],
            },
            {
                title: "Adobe Analytics",
                sectionTitle: "Analytics",
                link: "/destinations/streaming-destinations/adobe-analytics/",
                content: [
                    {
                        title: "Setting Up Adobe Analytics in RudderStack",
                        link: "/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack/",
                        content: []
                    },
                    {
                        title: "Web Device Mode Settings",
                        link: "/destinations/streaming-destinations/adobe-analytics/adobe-analytics-web-device-mode/",
                        content: []
                    },
                    {
                        title: "Mobile Device Mode Settings",
                        link: "/destinations/streaming-destinations/adobe-analytics/adobe-analytics-mobile-device-mode/",
                        content: []
                    },
                    {
                        title: "Adobe Analytics Heartbeat Measurement",
                        link: "/destinations/streaming-destinations/adobe-analytics/adobe-analytics-heartbeat/",
                        content: []
                    }, {
                        title: "E-commerce Events",
                        link: "/destinations/streaming-destinations/adobe-analytics/e-commerce-events/",
                        content: []
                    },
                ]
            },
            {
                title: "Amplitude",
                link: "/destinations/streaming-destinations/amplitude/",
                content: []
            },
            {
                title: "AWS Personalize",
                link: "/destinations/streaming-destinations/aws-personalize/",
                content: []
            },
            {
                title: "Chartbeat",
                link: "/destinations/streaming-destinations/chartbeat/",
                content: []
            }, {
                title: "Firebase",
                link: "/destinations/streaming-destinations/firebase/",
                content: []
            }, {
                title: "FullStory",
                link: "/destinations/streaming-destinations/fullstory/",
                content: []
            }, {
                title: "Google Analytics",
                link: "/destinations/streaming-destinations/google-analytics-ga/",
                content: []
            }, {
                title: "Google Analytics 4",
                link: "/destinations/streaming-destinations/google-analytics-4/",
                content: [
                    {
                        title: "Setting up Google Analytics 4",
                        link: "/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack/",
                        content: []
                    }, {
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/google-analytics-4/google-analytics-4-cloud-mode/",
                        content: []
                    }, {
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/google-analytics-4/google-analytics-4-device-mode/",
                        content: []
                    },
                ]
            }, {
                title: "Google Analytics 360",
                link: "/destinations/streaming-destinations/google-analytics-360/",
                content: []
            }, {
                title: "Heap.io",
                link: "/destinations/streaming-destinations/heap.io/",
                content: []
            }, {
                title: "Hotjar",
                link: "/destinations/streaming-destinations/hotjar/",
                content: []
            }, {
                title: "Indicative",
                link: "/destinations/streaming-destinations/indicative/",
                content: []
            }, {
                title: "Keen.io",
                link: "/destinations/streaming-destinations/keen/",
                content: []
            }, {
                title: "Kissmetrics",
                link: "/destinations/streaming-destinations/kissmetrics/",
                content: []
            }, {
                title: "Kubit",
                link: "/destinations/streaming-destinations/kubit/",
                content: []
            }, {
                title: "Lytics",
                link: "/destinations/streaming-destinations/lytics/",
                content: []
            },
            {
                key: "matomo",
                title: "Matomo",
                link: "/destinations/streaming-destinations/matomo/",
                content: [],
            },
            {
                title: "Mixpanel",
                link: "/destinations/streaming-destinations/mixpanel/",
                content: []
            },
            {
                title: "Mouseflow",
                link: "/destinations/streaming-destinations/mouseflow/",
                content: []
            },
            {
                title: "New Relic",
                link: "/destinations/streaming-destinations/new-relic/",
                content: []
            },
            {
                title: "PostHog",
                link: "/destinations/streaming-destinations/posthog/",
                content: []
            },
            {
                title: "Profitwell",
                link: "/destinations/streaming-destinations/profitwell/",
                content: [
                    {
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/profitwell/profitwell-cloud-mode/",
                        content: []
                    }, {
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/profitwell/profitwell-web-device-mode/",
                        content: []
                    },
                ]
            }, {
                title: "Quantum Metric",
                link: "/destinations/streaming-destinations/quantummetric/",
                content: []
            }, {
                title: "Singular",
                link: "/destinations/streaming-destinations/singular/",
                content: [
                    {
                        title: "Setting up Singular",
                        link:
                            "/destinations/streaming-destinations/singular/setting-up-singular-in-rudderstack/",
                        content: [],
                    },
                    {
                        title: "Cloud Mode",
                        link:
                            "/destinations/streaming-destinations/singular/singular-cloud-mode/",
                        content: [],
                    },
                    {
                        title: "Device Mode",
                        link:
                            "/destinations/streaming-destinations/singular/singular-device-mode/",
                        content: [],
                    },
                ]
            },
            {
                title: "Adjust",
                sectionTitle: "Attribution",
                link: "/destinations/streaming-destinations/adjust/",
                content: []
            },
            {
                title: "AppsFlyer",
                link: "/destinations/streaming-destinations/appsflyer/",
                content: []
            },
            {
                title: "Attribution",
                link: "/destinations/streaming-destinations/attribution/",
                content: []
            },
            {
                title: "Branch",
                link: "/destinations/streaming-destinations/branchio/",
                content: []
            }, {
                title: "Kochava",
                link: "/destinations/streaming-destinations/kochava/",
                content: []
            }, {
                title: "TVSquared",
                link: "/destinations/streaming-destinations/tvsquared/",
                content: []
            },
            {
                title: "Intercom",
                sectionTitle: "Business Messaging",
                link: "/destinations/streaming-destinations/intercom/",
                content: []
            }, {
                title: "Kustomer",
                link: "/destinations/streaming-destinations/kustomer/",
                content: []
            }, {
                title: "Slack",
                link: "/destinations/streaming-destinations/slack/",
                content: []
            },
            {
                title: "SnapEngage",
                link: "/destinations/streaming-destinations/snapengage/",
                content: []
            },
            {
                title: "Trengo",
                link: "/destinations/streaming-destinations/trengo/",
                content: []
            },
            {
                title: "Visual Studio App Center",
                sectionTitle: "Continuous Integration",
                link: "/destinations/streaming-destinations/appcenter/",
                content: []
            },
            {
                title: "HubSpot (Legacy API)",
                sectionTitle: "CRM",
                link: "/destinations/streaming-destinations/hubspot/",
                content: []
            },
            {
                title: "HubSpot (New API)",
                link: "/destinations/streaming-destinations/hubspot-v2/",
                content: []
            },
            {
                title: "Salesforce",
                link: "/destinations/streaming-destinations/salesforce/",
                content: []
            },
            {
                title: "Variance",
                link: "/destinations/streaming-destinations/variance/",
                content: []
            }, {
                title: "Zendesk",
                link: "/destinations/streaming-destinations/zendesk/",
                content: []
            },
            {
                title: "Segment",
                sectionTitle: "Customer Data Platform",
                link: "/destinations/streaming-destinations/segment/",
                content: []
            },
            {
                title: "Shynet",
                link: "/destinations/streaming-destinations/shynet/",
                content: []
            },
            {
                title: "Bugsnag",
                sectionTitle: "Error Reporting",
                link: "/destinations/streaming-destinations/bugsnag/",
                content: []
            }, {
                title: "Sentry",
                link: "/destinations/streaming-destinations/sentry/",
                content: []
            },
            {
                title: "ActiveCampaign",
                sectionTitle: "Marketing",
                link: "/destinations/streaming-destinations/activecampaign/",
                content: []
            },
            {
                title: "AdRoll",
                link: "/destinations/streaming-destinations/adroll/",
                content: []
            },
            {
                title: "Airship",
                link: "/destinations/streaming-destinations/airship/",
                content: []
            },
            {
                title: "Appcues",
                link: "/destinations/streaming-destinations/appcues/",
                content: []
            }, {
                title: "Attentive Tag",
                link: "/destinations/streaming-destinations/attentive-tag/",
                content: []
            }, {
                title: "Autopilot",
                link: "/destinations/streaming-destinations/autopilot/",
                content: []
            }, {
                title: "Blueshift",
                link: "/destinations/streaming-destinations/blueshift/",
                content: []
            }, {
                title: "Braze",
                link: "/destinations/streaming-destinations/braze/",
                content: []
            }, {
                title: "CleverTap",
                link: "/destinations/streaming-destinations/clevertap/",
                content: []
            }, {
                title: "Customer.io",
                link: "/destinations/streaming-destinations/customer.io/",
                content: []
            }, {
                title: "Drip",
                link: "/destinations/streaming-destinations/drip/",
                content: [
                    {
                        title: "Setting Up Drip in RudderStack",
                        link: "/destinations/streaming-destinations/drip/setting-up-drip-in-rudderstack/",
                        content: []
                    }, {
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/drip/drip-cloud-mode/",
                        content: []
                    }, {
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/drip/drip-web-device-mode/",
                        content: []
                    },
                ]
            },  {
                title: "Iterable",
                link: "/destinations/streaming-destinations/iterable/",
                content: []
            }, {
                title: "Klaviyo",
                link: "/destinations/streaming-destinations/klaviyo/",
                content: []
            }, {
                title: "Leanplum",
                link: "/destinations/streaming-destinations/leanplum/",
                content: []
            }, {
                title: "Mailchimp",
                link: "/destinations/streaming-destinations/mailchimp/",
                content: []
            }, {
                title: "Marketo",
                link: "/destinations/streaming-destinations/marketo/",
                content: []
            }, {
                title: "Marketo Lead Import",
                link: "/destinations/streaming-destinations/marketo-lead-import/",
                content: []
            }, 
            {
                title: "MoEngage",
                link: "/destinations/streaming-destinations/moengage/",
                content: []
            },
            {
                title: "Mautic",
                link: "/destinations/streaming-destinations/mautic/",
                content: []
            },  
            {
                title: "Ometria",
                link: "/destinations/streaming-destinations/ometria/",
                content: []
            }, {
                title: "OneSignal",
                link: "/destinations/streaming-destinations/onesignal/",
                content: []
            },{
                title: "Post Affiliate Pro",
                link: "/destinations/streaming-destinations/post-affiliate-pro/",
                content: []
            }, {
                title: "Qualtrics",
                link: "/destinations/streaming-destinations/qualtrics/",
                content: []
            }, {
                title: "Revenue Cat",
                link: "/destinations/streaming-destinations/revenue-cat/",
                content: []
            }, {
                title: "Salesforce Marketing Cloud",
                link: "/destinations/streaming-destinations/sfmc/",
                content: []
            },
            {
                title: "Salesforce Pardot",
                link: "/destinations/streaming-destinations/pardot/",
                content: []
            }, 
            {
                title: "SendGrid",
                link: "/destinations/streaming-destinations/sendgrid/",
                content: []
            }, 
            {
                title: "Userlist",
                link: "/destinations/streaming-destinations/userlist/",
                content: []
            },
            {
                title: "Vero",
                link: "/destinations/streaming-destinations/vero/",
                content: [
                    {
                        title: "Setting up Vero",
                        link: "/destinations/streaming-destinations/vero/setting-up-vero/",
                        content: []
                    },
                    {
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/vero/cloud-mode/",
                        content: []
                    },
                    {
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/vero/device-mode/",
                        content: []
                    },
                ]
            },
            {
                title: "Google Sheets",
                sectionTitle: "Productivity",
                link: "/destinations/streaming-destinations/google-sheets/",
                content: []
            },
            {
                title: "Zapier",
                link: "/destinations/streaming-destinations/zapier/",
                content: []
            },
            {
                title: "AWS Lambda",
                sectionTitle: "Serverless",
                link: "/destinations/streaming-destinations/aws-lambda/",
                content: []
            },
            {
                title: "Google Cloud Functions",
                link: "/destinations/streaming-destinations/google-cloud-functions/",
                content: []
            },
            {
                title: "Amazon S3",
                sectionTitle: "Storage Platforms",
                link: "/destinations/streaming-destinations/amazon-s3/",
                content: []
            },
            {
                title: "Azure Blob Storage",
                link: "/destinations/streaming-destinations/microsoft-azure-blob-storage/",
                content: []
            },
            {
                title: "DigitalOcean Spaces",
                link: "/destinations/streaming-destinations/digitalocean-spaces/",
                content: []
            },
            {
                title: "Google Cloud Storage",
                link: "/destinations/streaming-destinations/google-cloud-storage/",
                content: []
            }, {
                title: "MinIO",
                link: "/destinations/streaming-destinations/minio/",
                content: []
            }, {
                title: "Redis",
                link: "/destinations/streaming-destinations/redis/",
                content: []
            },
            {
                title: "Amazon EventBridge",
                sectionTitle: "Streaming Platforms",
                link: "/destinations/streaming-destinations/amazon-eventbridge/",
                content: []
            },
            {
                title: "Amazon Kinesis",
                link: "/destinations/streaming-destinations/amazon-kinesis/",
                content: []
            },
            {
                title: "Amazon Firehose",
                link: "/destinations/streaming-destinations/amazon-kinesis-firehose/",
                content: []
            },
            {
                title: "Apache Kafka",
                link: "/destinations/streaming-destinations/kafka/",
                content: []
            },
            {
                title: "Azure Event Hubs",
                link: "/destinations/streaming-destinations/azure-event-hubs/",
                content: []
            }, 
            {
                title: "BigQuery Stream",
                link: "/destinations/streaming-destinations/bigquery-stream/",
                content: []
            }, {
                title: "Confluent Cloud",
                link: "/destinations/streaming-destinations/confluent-cloud/",
                content: []
            }, {
                title: "Google Pub/Sub",
                link: "/destinations/streaming-destinations/google-pub-sub/",
                content: []
            },
            {
                title: "Google Tag Manager",
                sectionTitle: "Tag Managers",
                link: "/destinations/streaming-destinations/google-tag-manager/",
                content: []
            },
            {
                title: "Canny",
                sectionTitle: "Surveys",
                link: "/destinations/streaming-destinations/canny/",
                content: []
            },{
                title: "Delighted",
                link: "/destinations/streaming-destinations/delighted/",
                content: []
            },{
                title: "Gainsight",
                link: "/destinations/streaming-destinations/gainsight/",
                content: []
            }, {
                title: "Gainsight PX",
                link: "/destinations/streaming-destinations/gainsight-px/",
                content: []
            },{
                title: "InMoment (Wootric)",
                link: "/destinations/streaming-destinations/inmoment/",
                content: []
            },{
                title: "Pendo",
                link: "/destinations/streaming-destinations/pendo/",
                content: []
            },
            {
                title: "WebEngage",
                link: "/destinations/streaming-destinations/webengage/",
                content: []
            },
        ]
    },
    {
        title: "Warehouse Destinations",
        link: "/destinations/warehouse-destinations/",
        content: [
            {
                title: "Warehouse Schema",
                link: "/destinations/warehouse-destinations/warehouse-schema/",
                content: []
            },
            {
                title: "JSON Column Support",
                link: "/destinations/warehouse-destinations/json-column-support/",
                content: []
            },
            {
                title: "FAQ",
                link: "/destinations/warehouse-destinations/faq/",
                content: []
            },
            {
                title: "Amazon Redshift",
                sectionTitle: "Warehouse Integrations",
                link: "/destinations/warehouse-destinations/redshift/",
                content: []
            },
            {
                title: "Amazon S3 Data Lake",
                link: "/destinations/warehouse-destinations/s3-datalake/",
                content: []
            },
            {
                title: "Azure Synapse",
                link: "/destinations/warehouse-destinations/azure-synapse/",
                content: []
            },
            {
                title: "Azure Data Lake ",
                link: "/destinations/warehouse-destinations/azure-datalake/",
                content: []
            }, {
                title: "ClickHouse",
                link: "/destinations/warehouse-destinations/clickhouse/",
                content: []
            }, {
                title: "Databricks Delta Lake",
                link: "/destinations/warehouse-destinations/delta-lake/",
                content: []
            }, {
                title: "Google BigQuery",
                link: "/destinations/warehouse-destinations/bigquery/",
                content: []
            }, {
                title: "Google Cloud Storage Data Lake ",
                link: "/destinations/warehouse-destinations/gcs-datalake/",
                content: []
            }, {
                title: "Microsoft SQL Server",
                link: "/destinations/warehouse-destinations/sql-server/",
                content: []
            }, {
                title: "PostgreSQL",
                link: "/destinations/warehouse-destinations/postgresql/",
                content: []
            }, {
                title: "Snowflake",
                link: "/destinations/warehouse-destinations/snowflake/",
                content: []
            },
        ]
    },
    {
        title: "Webhooks",
        link: "/destinations/webhooks/",
        content: []
    },
    {
        title: "Connection Modes: Cloud Mode vs. Device Mode",
        link: "/destinations/rudderstack-connection-modes/",
        content: []
    },
    // Features section
    {
        title: "Transformations",
        sectionTitle: "Features",
        link: "/features/transformations/",
        content: [
            {
                title: "FAQ",
                link: "/features/transformations/faq",
                content: [],
            },
        ]
    },
    {
        title: "Data Governance",
        link: "/features/data-governance/",
        content: [
            {
                title: "RudderTyper",
                link: "/features/data-governance/ruddertyper/",
                content: []
            }, {
                title: "Tracking Plans",
                link: "/features/data-governance/tracking-plans/",
                content: [
                    {
                        title: "Tracking Plan Spreadsheet",
                        link: "/features/data-governance/tracking-plans/tracking-plan-spreadsheet/",
                        content: []
                    },
                ]
            },
        ]
    }, {
        title: "Identity Resolution",
        link: "/features/identity-resolution/",
        content: []
    },
    // Event Spec section
    {
        title: "Standard Events",
        sectionTitle: "Events Spec",
        link: "/event-spec/standard-events/",
        content: [
            {
                title: "Identify",
                link: "/event-spec/standard-events/identify/",
                content: []
            },
            {
                title: "Page",
                link: "/event-spec/standard-events/page/",
                content: []
            },
            {
                title: "Screen",
                link: "/event-spec/standard-events/screen/",
                content: []
            },
            {
                title: "Track",
                link: "/event-spec/standard-events/track/",
                content: []
            },
            {
                title: "Group",
                link: "/event-spec/standard-events/group/",
                content: []
            },
            {
                title: "Alias",
                link: "/event-spec/standard-events/alias/",
                content: []
            },
            {
                title: "Merge",
                link: "/event-spec/standard-events/merge/",
                content: []
            },
            {
                title: "Common Fields",
                link: "/event-spec/standard-events/common-fields/",
                content: []
            },
            {
                title: "Application Lifecycle Events",
                link: "/event-spec/standard-events/application-lifecycle-events-spec/",
                content: []
            },
            {
                title: "Video Events",
                link: "/event-spec/standard-events/video-events-spec/",
                content: []
            },
        ]
    },
    {
        title: "E-commerce Events",
        link: "/event-spec/ecommerce-events-spec/",
        content: [
            {
                title: "Browsing",
                link: "/event-spec/ecommerce-events-spec/browsing/",
                content: []
            },
            {
                title: "Ordering",
                link: "/event-spec/ecommerce-events-spec/ordering/",
                content: []
            },
            {
                title: "Wishlisting",
                link: "/event-spec/ecommerce-events-spec/wishlisting/",
                content: []
            },
            {
                title: "Promotions",
                link: "/event-spec/ecommerce-events-spec/promotions/",
                content: []
            },
            {
                title: "Coupons",
                link: "/event-spec/ecommerce-events-spec/coupons/",
                content: []
            },
            {
                title: "Sharing",
                link: "/event-spec/ecommerce-events-spec/sharing/",
                content: []
            },
            {
                title: "Reviewing",
                link: "/event-spec/ecommerce-events-spec/reviewing/",
                content: []
            },
        ]
    },
    // API section
    {
        title: "HTTP API",
        sectionTitle: "API",
        link: "/api/http-api/",
        content: []
    },
    {
        title: "Pixel API",
        link: "/api/pixel-api-spec/",
        content: []
    }, {
        title: "Tracking Plan API",
        link: "/api/tracking-plan-api/",
        content: []
    }, {
        title: "Transformation API",
        link: "/api/transformation-api/",
        content: []
    }, {
        title: "Data Governance API",
        link: "/api/data-governance-api/",
        content: []
    },
    {
        title: "Data Regulation API",
        link: "/api/data-regulation-api/",
        content: []
    },
    {
        title: "Test API",
        link: "/api/test-api/",
        content: []
    },
    // Guides section
    {
        title: "Migration Guides",
        sectionTitle: "User Guides",
        link: "/user-guides/migration-guides/",
        content: [
            {
                title: "Migrating from Segment to RudderStack",
                link: "/user-guides/migration-guides/rudderstack-migration-guide/",
                content: []
            }, 
            {
                title: "Migrating Your Warehouse Destination from Segment to RudderStack",
                link: "/user-guides/migration-guides/how-to-migrate-warehouse-destination-from-segment-to-rudderstack/",
                content: []
            },
            {
                title: "Migrating from Self-hosted RudderStack to RudderStack Cloud",
                link: "/user-guides/migration-guides/switch-to-rudderstack-hosted-data-plane/",
                content: [],
            },
        ]
    }, {
        title: "Administator's Guides",
        link: "/user-guides/administrators-guide/",
        content: [
            {
                title: "OneLogin SSO Setup",
                link: "/user-guides/administrators-guide/onelogin-sso/",
                content: []
            },
            {
                title: "Okta SSO Setup",
                link: "/user-guides/administrators-guide/okta-sso/",
                content: []
            },
            {
                title: "RudderStack Grafana Dashboard",
                link: "/user-guides/administrators-guide/rudderstack-grafana-dashboard/",
                content: []
            },
            {
                title: "Software Releases",
                link: "/user-guides/administrators-guide/software-releases/",
                content: []
            }, {
                title: "High Availability",
                link: "/user-guides/administrators-guide/high-availability/",
                content: []
            }, {
                title: "Horizontal Scaling",
                link: "/user-guides/administrators-guide/horizontal-scaling-1/",
                content: []
            }, {
                title: "Event Replay",
                link: "/user-guides/administrators-guide/event-replay/",
                content: []
            }, {
                title: "Bucket Configuration Settings for Event Backups",
                link: "/user-guides/administrators-guide/bucket-configuration-settings/",
                content: []
            }, {
                title: "Alerting Guide",
                link: "/user-guides/administrators-guide/alerting/",
                content: []
            }, {
                title: "Infrastructure Provisioning",
                link: "/user-guides/administrators-guide/infra-provisioning/",
                content: []
            }, {
                title: "Monitoring and Metrics",
                link: "/user-guides/administrators-guide/monitoring-and-metrics/",
                content: []
            }, {
                title: "Configuration Parameters",
                link: "/user-guides/administrators-guide/config-parameters/",
                content: []
            }, {
                title: "Troubleshooting Guide",
                link: "/user-guides/administrators-guide/admin-troubleshooting-guide/",
                content: []
            },
        ]
    }, {
        title: "How-to Guides",
        link: "/user-guides/how-to-guides/",
        content: [
            {
                title: "How to Configure a Destination via the Event Payload",
                link: "/user-guides/how-to-guides/dynamic-destination-configuration/",
                content: []
            },
            {
                title: "How to Submit an Integration Pull Request",
                link: "/user-guides/how-to-guides/how-to-submit-an-integration-pull-request/",
                content: []
            },
            {
                title: "How to Use Custom Domains",
                link: "/user-guides/how-to-guides/custom-domains/",
                content: []
            },
            {
                title: "How to Use AWS Lambda Functions with RudderStack",
                link: "/user-guides/how-to-guides/using-aws-lambda-functions-with-rudderstack/",
                content: []
            }, {
                title: "How to Debug Live Destination Events",
                link: "/user-guides/how-to-guides/live-destination-event-debugger/",
                content: []
            }, {
                title: "How to Filter Events using Different Methods",
                link: "/user-guides/how-to-guides/filter-events/",
                content: []
            }, {
                title: "How to Filter Selective Destinations using JavaScript SDK",
                link: "/user-guides/how-to-guides/how-to-filter-selective-destinations/",
                content: []
            }, {
                title: "How to Create a New Destination Transformation for RudderStack",
                link: "/user-guides/how-to-guides/create-a-new-destination-transformer-for-rudder/",
                content: [
                    {
                        title: "Best Practices for Coding Transformation Functions in JavaScript",
                        link: "/user-guides/how-to-guides/create-a-new-destination-transformer-for-rudder/best-practices-for-coding-transformation-functions-in-javascript/",
                        content: []
                    },
                ]
            }, {
                title: "How to Implement a Native JavaScript SDK Integration",
                link: "/user-guides/how-to-guides/implement-native-js-sdk-integration/",
                content: [
                    {
                        title: "How to Add a Device Mode SDK to RudderStack JavaScript SDK",
                        link: "/user-guides/how-to-guides/implement-native-js-sdk-integration/add-device-mode-sdk-to-js/",
                        content: []
                    },
                ]
            }, {
                title: "How to Develop Integrations for RudderStack",
                link: "/user-guides/how-to-guides/developing-integrations-for-rudderstack/",
                content: []
            }, {
                title: "How to Integrate RudderStack with Your JAMstack Site",
                link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/",
                content: [
                    {
                        title: "Angular",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration/",
                        content: []
                    },
                    {
                        title: "Astro.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration/",
                        content: []
                    },
                    {
                        title: "Eleventy",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration/",
                        content: []
                    },
                    {
                        title: "Ember.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration/",
                        content: []
                    }, {
                        title: "Gatsby",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-gatsby-integration/",
                        content: []
                    }, {
                        title: "Hugo",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration/",
                        content: []
                    }, {
                        title: "Jekyll",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration/",
                        content: []
                    }, {
                        title: "Next.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration/",
                        content: []
                    }, {
                        title: "Nuxt.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration/",
                        content: []
                    }, {
                        title: "Svelte",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration/",
                        content: []
                    }, {
                        title: "Vue.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-vue-integration/",
                        content: []
                    },
                ]
            },
        ]
    },
    // Resources section
    {
        title: "RudderStack Architecture",
        sectionTitle: "Resources",
        link: "/resources/rudderstack-architecture/",
        content: []
    },
    {
        title: "Glossary",
        link: "/resources/glossary/",
        content: []
    },
    {
        title: "FAQ",
        link: "/resources/faq/",
        content: []
    },
    {
        title: "Community",
        link: "/resources/community/",
        content: []
    },
];
