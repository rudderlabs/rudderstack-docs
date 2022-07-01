export const jsonData = [

  // Home section (just a link actually)
  
    {
        key: "home",
        title: "Home",
        link: "/",
        content: []
    },

    // Getting Started section

    {
        key: "get-started",
        title: "What is RudderStack?",
        sectionTitle: "Getting Started",
        link: `/get-started/what-is-rudderstack/`,
        content: []
    },
    {
        key: "quickstart",
        title: "Quickstart",
        link: `/get-started/quickstart/`,
        content: []
    },
    {
        key: "rudderstack-cloud",
        title: "RudderStack Cloud",
        link: `/get-started/rudderstack-cloud/`,
        content: []
    },
    {
        key: "rudderstack-open-source",
        title: "RudderStack Open Source",
        link: "/get-started/rudderstack-open-source/",
        content: [
            {
                key: "control-plane-lite",
                title: "Control Plane Setup",
                link: "/get-started/rudderstack-open-source/control-plane-lite/",
                content: []
            }, {
                key: "data-plane-setup",
                title: "Data Plane Setup",
                link: "/get-started/rudderstack-open-source/data-plane-setup/",
                content: [
                    {
                        key: "docker",
                        title: "Docker",
                        link: "/get-started/rudderstack-open-source/data-plane-setup/docker/",
                        content: []
                    }, {
                        key: "kubernetes",
                        title: "Kubernetes",
                        link: "/get-started/rudderstack-open-source/data-plane-setup/kubernetes/",
                        content: []
                    }, {
                        key: "developer-machine-setup",
                        title: "Developer Machine Setup",
                        link: "/get-started/rudderstack-open-source/data-plane-setup/developer-machine-setup/",
                        content: []
                    },
                ]
            },
            {
                key: "sending-test-events",
                title: "Sending Test Events",
                link: "/get-started/rudderstack-open-source/sending-test-events/",
                content: []
            },
        ]
    },
    {
        key: "cloud-vs-open-source",
        title: "RudderStack Cloud vs. Open Source",
        link: "/get-started/cloud-vs-open-source/",
        content: []
    },

// Dashboard guides section

{
    key: "overview",
    title: "Overview",
    sectionTitle: "Dashboard Guides",
    link: "/dashboard-guides/overview/",
    content: []
},
{
    key: "sources",
    title: "Sources",
    link: "/dashboard-guides/sources/",
    content: []
},
{
    key: "destinations",
    title: "Destinations",
    link: "/dashboard-guides/destinations/",
    content: []
},
{
    key: "live-events",
    title: "Live Events",
    link: "/dashboard-guides/live-events/",
    content: []
},
{
    key: "teammates",
    title: "Teammates (User Management)",
    link: "/dashboard-guides/teammates/",
    content: []
},
{
    key: "audit-logs",
    title: "Audit Logs",
    link: "/dashboard-guides/audit-logs/",
    content: []
},
{
    key: "personal-access-token",
    title: "Personal Access Token",
    link: "/dashboard-guides/personal-access-token/",
    content: []
},

    // Sources section
    {
        key: "sources",
        title: "Overview",
        sectionTitle: "Sources",
        link: "/sources/",
        content: []
    }, {
        title: "SDKs",
        link: "/sources/sdks/",
        content: [
            {
                key: "rudderstack-javascript-sdk",
                title: "JavaScript",
                sectionTitle: "Web",
                link: "/sources/sdks/rudderstack-javascript-sdk/",
                content: [
                    {
                        key: "quick-start-guide",
                        title: "Quick Start Guide",
                        link: "/sources/sdks/rudderstack-javascript-sdk/quick-start-guide/",
                        content: []
                    },
                    {
                        key: "javascript-sdk-enhancements",
                        title: "JavaScript SDK Enhancements",
                        link: "/sources/sdks/rudderstack-javascript-sdk/javascript-sdk-enhancements/",
                        content: []
                    },
                    {
                        key: "data-storage-cookies",
                        title: "Data Storage in Cookies",
                        link: "/sources/sdks/rudderstack-javascript-sdk/data-storage-cookies/",
                        content: []
                    },
                    {
                        key: "querystring-api",
                        title: "Querystring API",
                        link: "/sources/sdks/rudderstack-javascript-sdk/querystring-api/",
                        content: []
                    }, {
                        key: "detecting-adblocked-pages",
                        title: "Detecting Ad-blocked Pages",
                        link: "/sources/sdks/rudderstack-javascript-sdk/detecting-adblocked-pages/",
                        content: []
                    }, {
                        key: "version-migration-guide",
                        title: "Version Migration Guide",
                        link: "/sources/sdks/rudderstack-javascript-sdk/version-migration-guide/",
                        content: []
                    }, {
                        key: "consent-managers",
                        title: "Consent Managers",
                        link: "/sources/sdks/rudderstack-javascript-sdk/consent-managers/",
                        content: [
                            {
                                key: "onetrust",
                                title: "OneTrust",
                                link: "/sources/sdks/rudderstack-javascript-sdk/consent-managers/onetrust/",
                                content: []
                            },
                        ]
                    }, {
                        key: "faq",
                        title: "JavaScript SDK FAQs",
                        link: "/sources/sdks/rudderstack-javascript-sdk/faq/",
                        content: []
                    },
                ]
            },
            {
                key: "rudderstack-amp-analytics",
                title: "AMP Analytics",
                link: "/sources/sdks/rudderstack-amp-analytics/",
                content: []
            }, 
            {
                key: "rudderstack-android-sdk",
                title: "Android",
                sectionTitle: "Mobile",
                link: "/sources/sdks/rudderstack-android-sdk/",
                content: [
                    {
                        key: "adding-an-application-class",
                        title: "Adding Application Class",
                        link: "/sources/sdks/rudderstack-android-sdk/adding-an-application-class/",
                        content: []
                    }, {
                        key: "flushing-events-periodically",
                        title: "Flushing Events",
                        link: "/sources/sdks/rudderstack-android-sdk/flushing-events-periodically/",
                        content: []
                    },
                ]
            },
            {
                key: "rudderstack-ios-sdk",
                title: "iOS",
                link: "/sources/sdks/rudderstack-ios-sdk/",
                content: [
                    {
                        key: "ios-v2",
                        title: "iOS v2",
                        link: "/sources/sdks/rudderstack-ios-sdk/ios-v2/",
                        content: []
                    }, {
                        key: "tvOS",
                        title: "tvOS",
                        link: "/sources/sdks/rudderstack-ios-sdk/tvOS/",
                        content: []
                    }, {
                        key: "macos",
                        title: "macOS",
                        link: "/sources/sdks/rudderstack-ios-sdk/macos/",
                        content: []
                    }, {
                        key: "watchOs",
                        title: "watchOS",
                        link: "/sources/sdks/rudderstack-ios-sdk/watchOS/",
                        content: []
                    },
                ]
            },
            {
                key: "rudderstack-unity-sdk",
                title: "Unity",
                link: "/sources/sdks/rudderstack-unity-sdk/",
                content: []
            }, {
                key: "rudderstack-react-native-sdk",
                title: "React Native",
                link: "/sources/sdks/rudderstack-react-native-sdk/",
                content: []
            }, {
                key: "rudderstack-flutter-sdk",
                title: "Flutter",
                link: "/sources/sdks/rudderstack-flutter-sdk/",
                content: [
                    {
                        key: "flutter-v2",
                        title: "Flutter SDK v2",
                        link: "/sources/sdks/rudderstack-flutter-sdk/flutter-v2/",
                        content: []
                    }, {
                        key: "flutter-v1",
                        title: "Flutter SDK v1",
                        link: "/sources/sdks/rudderstack-flutter-sdk/flutter-v1/",
                        content: []
                    },
                ]
            }, {
                key: "rudderstack-cordova-sdk",
                title: "Cordova",
                link: "/sources/sdks/rudderstack-cordova-sdk/",
                content: []
            }, {
                key: "rudderstack-java-sdk",
                title: "Java",
                sectionTitle: "Server",
                link: "/sources/sdks/rudderstack-java-sdk/",
                content: []
            }, {
                key: "rudderstack-python-sdk",
                title: "Python",
                link: "/sources/sdks/rudderstack-python-sdk/",
                content: []
            }, {
                key: "rudderstack-rust-sdk",
                title: "Rust",
                link: "/sources/sdks/rudderstack-rust-sdk/",
                content: []
            }, {
                key: "rudderstack-node-sdk",
                title: "Node.js",
                link: "/sources/sdks/rudderstack-node-sdk/",
                content: []
            }, {
                key: "rudderstack-go-sdk",
                title: "Go",
                link: "/sources/sdks/rudderstack-go-sdk/",
                content: []
            }, {
                key: "rudderstack-ruby-sdk",
                title: "Ruby",
                link: "/sources/sdks/rudderstack-ruby-sdk/",
                content: []
            }, {
                key: "rudderstack-dotnet-sdk",
                title: ".NET",
                link: "/sources/sdks/rudderstack-dotnet-sdk/",
                content: []
            }, {
                key: "rudderstack-php-sdk",
                title: "PHP",
                link: "/sources/sdks/rudderstack-php-sdk/",
                content: []
            },
            {
                key: "event-filtering",
                title: "Client-side Event Filtering",
                link: "/sources/sdks/event-filtering/",
                content: []
            },
            {
                key: "faq",
                title: "SDK FAQs",
                link: "/sources/sdks/faq/",
                content: []
            },

        ]


    },
    {
        key: "cloud-apps",
        title: "Cloud Apps",
        link: "/sources/cloud-apps/",
        content: [
            {
                key: "webhook-source",
                title: "Webhook Source",
                link: "/sources/cloud-apps/webhook-source/",
                content: []
            },
            {
                key: "braze-currents",
                title: "Braze",
                link: "/sources/cloud-apps/braze-currents/",
                content: []
            },
            {
                key: "appcenter",
                title: "App Center",
                link: "/sources/cloud-apps/appcenter/",
                content: []
            },
            {
                key: "appsflyer",
                title: "AppsFlyer",
                link: "/sources/cloud-apps/appsflyer/",
                content: []
            }, {
                key: "auth0",
                title: "Auth0",
                link: "/sources/cloud-apps/auth0/",
                content: []
            }, {
                key: "customerio",
                title: "Customer.io",
                link: "/sources/cloud-apps/customerio/",
                content: []
            }, {
                key: "extole",
                title: "Extole",
                link: "/sources/cloud-apps/extole/",
                content: []
            }, {
                key: "iterable",
                title: "Iterable",
                link: "/sources/cloud-apps/iterable/",
                content: []
            }, {
                key: "looker",
                title: "Looker",
                link: "/sources/cloud-apps/looker/",
                content: []
            }, {
                key: "posthog",
                title: "PostHog",
                link: "/sources/cloud-apps/posthog/",
                content: []
            }, {
                key: "shopify",
                title: "Shopify",
                link: "/sources/cloud-apps/shopify/",
                content: []
            }, {
                key: "segment",
                title: "Segment",
                link: "/sources/cloud-apps/segment/",
                content: []
            },
        ]
    }, {
        key: "cloud-extract-sources",
        title: "Cloud Extract",
        link: "/sources/extract/",
        content: [
            {
                key: "activecampaign",
                title: "ActiveCampaign",
                link: "/sources/extract/activecampaign/",
                content: []
            },
            {
                key: "bing-ads",
                title: "Bing Ads",
                link: "/sources/extract/bing-ads/",
                content: []
            },
            {
                key: "chargebee",
                title: "Chargebee",
                link: "/sources/extract/chargebee/",
                content: []
            },
            {
                key: "facebook-ads",
                title: "Facebook Ads",
                link: "/sources/extract/facebook-ads/",
                content: []
            }, {
                key: "freshdesk",
                title: "Freshdesk",
                link: "/sources/extract/freshdesk/",
                content: []
            }, {
                key: "google-adwords",
                title: "Google Ads (Adwords)",
                link: "/sources/extract/google-adwords/",
                content: []
            }, {
                key: "google-analytics",
                title: "Google Analytics",
                link: "/sources/extract/google-analytics/",
                content: []
            }, {
                key: "google-search-console",
                title: "Google Search Console",
                link: "/sources/extract/google-search-console/",
                content: []
            }, {
                key: "google-sheets",
                title: "Google Sheets",
                link: "/sources/extract/google-sheets/",
                content: []
            }, {
                key: "hubspot-v2",
                title: "HubSpot",
                link: "/sources/extract/hubspot-v2/",
                content: []
            }, {
                key: "intercom",
                title: "Intercom",
                link: "/sources/extract/intercom/",
                content: []
            }, {
                key: "intercom-v2",
                title: "Intercom v2",
                link: "/sources/extract/intercom-v2/",
                content: []
            }, {
                key: "mailchimp",
                title: "Mailchimp",
                link: "/sources/extract/mailchimp/",
                content: []
            }, {
                key: "mixpanel",
                title: "Mixpanel",
                link: "/sources/extract/mixpanel/",
                content: []
            }, {
                key: "marketo",
                title: "Marketo",
                link: "/sources/extract/marketo/",
                content: []
            }, {
                key: "netsuite",
                title: "NetSuite",
                link: "/sources/extract/netsuite/",
                content: []
            }, {
                key: "pipedrive",
                title: "Pipedrive",
                link: "/sources/extract/pipedrive/",
                content: []
            }, {
                key: "quickbooks",
                title: "QuickBooks",
                link: "/sources/extract/quickbooks/",
                content: []
            }, {
                key: "salesforce",
                title: "Salesforce",
                link: "/sources/extract/salesforce/",
                content: [
                    {
                        key: "schema-comparison-rudderstack-vs-segment",
                        title: "Schema Comparison: Rudderstack Vs Segment",
                        link: "/sources/extract/salesforce/schema-comparison-rudderstack-vs-segment/",
                        content: []
                    },
                ]
            }, {
                key: "salesforce-pardot",
                title: "Salesforce Pardot",
                link: "/sources/extract/salesforce-pardot/",
                content: []
            }, {
                key: "sendgrid",
                title: "Sendgrid",
                link: "/sources/extract/sendgrid/",
                content: []
            }, {
                key: "stripe",
                title: "Stripe",
                link: "/sources/extract/stripe/",
                content: []
            }, {
                key: "xero",
                title: "Xero",
                link: "/sources/extract/xero/",
                content: []
            }, {
                key: "zendesk",
                title: "Zendesk",
                link: "/sources/extract/zendesk/",
                content: []
            }, {
                key: "zendesk-chat",
                title: "Zendesk Chat",
                link: "/sources/extract/zendesk-chat/",
                content: []
            }, {
                key: "common-settings",
                title: "Common Settings",
                link: "/sources/extract/common-settings/",
                content: []
            },
        ]
    }, {
        key: "reverse-etl",
        title: "Reverse ETL",
        link: "/sources/reverse-etl/",
        content: [
            {
                key: "amazon-redshift",
                title: "Amazon Redshift",
                sectionTitle: "Sources",
                link: "/sources/reverse-etl/amazon-redshift/",
                content: []
            },
            {
                key: "amazon-s3",
                title: "Amazon S3",
                link: "/sources/reverse-etl/amazon-s3/",
                content: []
            },
            {
                key: "clickhouse",
                title: "ClickHouse",
                link: "/sources/reverse-etl/clickhouse/",
                content: []
            },
            {
                key: "google-bigquery",
                title: "Google BigQuery",
                link: "/sources/reverse-etl/google-bigquery/",
                content: []
            }, {
                key: "mysql",
                title: "MySQL",
                link: "/sources/reverse-etl/mysql/",
                content: []
            }, {
                key: "postgresql",
                title: "PostgreSQL",
                link: "/sources/reverse-etl/postgresql/",
                content: []
            }, {
                key: "snowflake",
                title: "Snowflake",
                link: "/sources/reverse-etl/snowflake/",
                content: []
            },

            {
                key: "models",
                title: "Models",
                sectionTitle: "Features",
                link: "/sources/reverse-etl/features/models/",
                content: []
            }, {
                key: "airflow-provider",
                title: "Airflow Provider",
                link: "/sources/reverse-etl/features/airflow-provider/",
                content: []
            }, {
                key: "visual-data-mapper",
                title: "Visual Data Mapper",
                link: "/sources/reverse-etl/features/visual-data-mapper/",
                content: []
            },
            {
                key: "sync-modes",
                title: "Sync Modes",
                sectionTitle: "Common Settings",
                link: "/sources/reverse-etl/common-settings/sync-modes/",
                content: []
            }, {
                key: "sync-schedule-settings",
                title: "Sync Schedule",
                link: "/sources/reverse-etl/common-settings/sync-schedule-settings/",
                content: []
            }, {
                key: "importing-data-using-tables",
                title: "Importing Data using Tables",
                link: "/sources/reverse-etl/common-settings/importing-data-using-tables/",
                content: []
            }, {
                key: "importing-data-using-models",
                title: "Importing Data using Models",
                link: "/sources/reverse-etl/common-settings/importing-data-using-models/",
                content: []
            },
            {
                key: "faq",
                title: "FAQ",
                sectionTitle: "",
                link: "/sources/reverse-etl/faq/",
                content: []
            },
        ]
    },

    // Destinations section
    {
        key: "overview",
        title: "Overview",
        sectionTitle: "Destinations",
        link: "/destinations/overview/",
        content: []
    },
    {
        key: "destinations",
        title: "Streaming Destinations",
        link: "/destinations/streaming-destinations/",
        content: [
            {
                key: "algolia-insights",
                title: "Algolia Insights",
                sectionTitle: "A/B Testing & Personalization",
                link: "/destinations/streaming-destinations/algolia-insights/",
                content: []
            },
            {
                key: "candu",
                title: "Candu",
                link: "/destinations/streaming-destinations/candu/",
                content: []
            },
            {
                key: "google-optimize",
                title: "Google Optimize",
                link: "/destinations/streaming-destinations/google-optimize/",
                content: []
            },
            {
                key: "launchdarkly",
                title: "LaunchDarkly",
                link: "/destinations/streaming-destinations/launchdarkly/",
                content: []
            }, {
                key: "monetate",
                title: "Monetate",
                link: "/destinations/streaming-destinations/monetate/",
                content: []
            }, {
                key: "optimizely-full-stack",
                title: "Optimizely Full Stack",
                link: "/destinations/streaming-destinations/optimizely-full-stack/",
                content: []
            }, {
                key: "optimizely-web",
                title: "Optimizely Web",
                link: "/destinations/streaming-destinations/optimizely-web/",
                content: []
            }, {
                key: "splitio",
                title: "Split.io",
                link: "/destinations/streaming-destinations/splitio/",
                content: []
            }, {
                key: "statsig",
                title: "Statsig",
                link: "/destinations/streaming-destinations/statsig/",
                content: []
            }, {
                key: "vwo-beta-visual-website-optimizer",
                title: "VWO (Visual Website Optimizer)",
                link: "/destinations/streaming-destinations/vwo-beta-visual-website-optimizer/",
                content: []
            },
            {
                key: "bingads",
                title: "Bing Ads",
                sectionTitle: "Advertising",
                link: "/destinations/streaming-destinations/bingads/",
                content: []
            },
            {
                key: "criteo",
                title: "Criteo",
                link: "/destinations/streaming-destinations/criteo/",
                content: []
            },
            {
                key: "dcm-floodlight",
                title: "DCM Floodlight",
                link: "/destinations/streaming-destinations/dcm-floodlight/",
                content: [
                    {
                        key: "setting-up-dcm-floodlight-in-rudderstack",
                        title: "Setting up DCM Floodlight",
                        link: "/destinations/streaming-destinations/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack/",
                        content: []
                    }, {
                        key: "dcm-floodlight-cloud-mode",
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/dcm-floodlight/dcm-floodlight-cloud-mode/",
                        content: []
                    }, {
                        key: "dcm-floodlight-device-mode",
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/dcm-floodlight/dcm-floodlight-device-mode/",
                        content: []
                    },
                ]
            },
            {
                key: "facebook-app-events",
                title: "Facebook App Events",
                link: "/destinations/streaming-destinations/facebook-app-events/",
                content: []
            }, {
                key: "fb-custom-audience",
                title: "Facebook Custom Audience",
                link: "/destinations/streaming-destinations/fb-custom-audience/",
                content: []
            }, {
                key: "fb-pixel",
                title: "Facebook Pixel",
                link: "/destinations/streaming-destinations/fb-pixel/",
                content: []
            }, {
                key: "g-ads-gtag",
                title: "Google Ads (gtag.js)",
                link: "/destinations/streaming-destinations/g-ads-gtag/",
                content: []
            }, {
                key: "google-adwords-enhanced-conversions",
                title: "Google Ads Enhanced Conversions",
                link: "/destinations/streaming-destinations/google-adwords-enhanced-conversions/",
                content: []
            }, {
                key: "google-adwords-remarketing-list",
                title: "Google Ads Remarketing Lists (Customer Match)",
                link: "/destinations/streaming-destinations/google-adwords-remarketing-list/",
                content: []
            }, {
                key: "linkedin-insight-tag",
                title: "LinkedIn Insight Tag",
                link: "/destinations/streaming-destinations/linkedin-insight-tag/",
                content: []
            }, {
                key: "lotame",
                title: "Lotame",
                link: "/destinations/streaming-destinations/lotame/",
                content: []
            }, {
                key: "pinterest-ads",
                title: "Pinterest Tag",
                link: "/destinations/streaming-destinations/pinterest-ads/",
                content: []
            }, {
                key: "reddit-pixel",
                title: "Reddit Pixel",
                link: "/destinations/streaming-destinations/reddit-pixel/",
                content: []
            }, {
                key: "snapchat-conversion",
                title: "Snapchat Conversion",
                link: "/destinations/streaming-destinations/snapchat-conversion/",
                content: []
            }, {
                key: "snap-pixel",
                title: "Snap Pixel",
                link: "/destinations/streaming-destinations/snap-pixel/",
                content: []
            }, {
                key: "tiktok-ads",
                title: "TikTok Ads",
                link: "/destinations/streaming-destinations/tiktok-ads/",
                content: []
            },
            {
                key: "yahoo-dsp",
                title: "Yahoo DSP",
                link: "/destinations/streaming-destinations/yahoo-dsp/",
                content: [],
            },
            {
                key: "adobe-analytics",
                title: "Adobe Analytics",
                sectionTitle: "Analytics",
                link: "/destinations/streaming-destinations/adobe-analytics/",
                content: [
                    {
                        key: "setting-up-adobe-analytics-in-rudderstack",
                        title: "Setting Up Adobe Analytics in RudderStack",
                        link: "/destinations/streaming-destinations/adobe-analytics/setting-up-adobe-analytics-in-rudderstack/",
                        content: []
                    },
                    {
                        key: "adobe-analytics-web-device-mode",
                        title: "Web Device Mode Settings",
                        link: "/destinations/streaming-destinations/adobe-analytics/adobe-analytics-web-device-mode/",
                        content: []
                    },
                    {
                        key: "adobe-analytics-mobile-device-mode",
                        title: "Mobile Device Mode Settings",
                        link: "/destinations/streaming-destinations/adobe-analytics/adobe-analytics-mobile-device-mode/",
                        content: []
                    },
                    {
                        key: "adobe-analytics-heartbeat",
                        title: "Adobe Analytics Heartbeat Measurement",
                        link: "/destinations/streaming-destinations/adobe-analytics/adobe-analytics-heartbeat/",
                        content: []
                    }, {
                        key: "e-commerce-events",
                        title: "E-commerce Events",
                        link: "/destinations/streaming-destinations/adobe-analytics/e-commerce-events/",
                        content: []
                    },
                ]
            },
            {
                key: "amplitude",
                title: "Amplitude",
                link: "/destinations/streaming-destinations/amplitude/",
                content: []
            },
            {
                key: "aws-personalize",
                title: "AWS Personalize",
                link: "/destinations/streaming-destinations/aws-personalize/",
                content: []
            },
            {
                key: "chartbeat",
                title: "Chartbeat",
                link: "/destinations/streaming-destinations/chartbeat/",
                content: []
            }, {
                key: "firebase",
                title: "Firebase",
                link: "/destinations/streaming-destinations/firebase/",
                content: []
            }, {
                key: "fullstory",
                title: "FullStory",
                link: "/destinations/streaming-destinations/fullstory/",
                content: []
            }, {
                key: "google-analytics-ga",
                title: "Google Analytics",
                link: "/destinations/streaming-destinations/google-analytics-ga/",
                content: []
            }, {
                key: "google-analytics-4",
                title: "Google Analytics 4",
                link: "/destinations/streaming-destinations/google-analytics-4/",
                content: [
                    {
                        key: "setting-up-google-analytics-4-in-rudderstack",
                        title: "Setting up Google Analytics 4",
                        link: "/destinations/streaming-destinations/google-analytics-4/setting-up-google-analytics-4-in-rudderstack/",
                        content: []
                    }, {
                        key: "google-analytics-4-cloud-mode",
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/google-analytics-4/google-analytics-4-cloud-mode/",
                        content: []
                    }, {
                        key: "google-analytics-4-device-mode",
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/google-analytics-4/google-analytics-4-device-mode/",
                        content: []
                    },
                ]
            }, {
                key: "google-analytics-360",
                title: "Google Analytics 360",
                link: "/destinations/streaming-destinations/google-analytics-360/",
                content: []
            }, {
                key: "heap.io",
                title: "Heap.io",
                link: "/destinations/streaming-destinations/heap.io/",
                content: []
            }, {
                key: "hotjar",
                title: "Hotjar",
                link: "/destinations/streaming-destinations/hotjar/",
                content: []
            }, {
                key: "indicative",
                title: "Indicative",
                link: "/destinations/streaming-destinations/indicative/",
                content: []
            }, {
                key: "keen",
                title: "Keen.io",
                link: "/destinations/streaming-destinations/keen/",
                content: []
            }, {
                key: "kissmetrics",
                title: "Kissmetrics",
                link: "/destinations/streaming-destinations/kissmetrics/",
                content: []
            }, {
                key: "kubit",
                title: "Kubit",
                link: "/destinations/streaming-destinations/kubit/",
                content: []
            }, {
                key: "lytics",
                title: "Lytics",
                link: "/destinations/streaming-destinations/lytics/",
                content: []
            }, {
                key: "mixpanel",
                title: "Mixpanel",
                link: "/destinations/streaming-destinations/mixpanel/",
                content: []
            }, {
                key: "new-relic",
                title: "New Relic",
                link: "/destinations/streaming-destinations/new-relic/",
                content: []
            }, {
                key: "pendo",
                title: "Pendo",
                link: "/destinations/streaming-destinations/pendo/",
                content: []
            }, {
                key: "posthog",
                title: "PostHog",
                link: "/destinations/streaming-destinations/posthog/",
                content: []
            }, {
                key: "profitwell",
                title: "Profitwell",
                link: "/destinations/streaming-destinations/profitwell/",
                content: [
                    {
                        key: "profitwell-cloud-mode",
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/profitwell/profitwell-cloud-mode/",
                        content: []
                    }, {
                        key: "profitwell-web-device-mode",
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/profitwell/profitwell-web-device-mode/",
                        content: []
                    },
                ]
            }, {
                key: "quantummetric",
                title: "Quantum Metric",
                link: "/destinations/streaming-destinations/quantummetric/",
                content: []
            }, {
                key: "singular",
                title: "Singular",
                link: "/destinations/streaming-destinations/singular/",
                content: [
                    {
                        key: "setting-up-singular-in-rudderstack",
                        title: "Setting up Singular",
                        link:
                            "/destinations/streaming-destinations/singular/setting-up-singular-in-rudderstack/",
                        content: [],
                    },
                    {
                        key: "singular-cloud-mode",
                        title: "Cloud Mode",
                        link:
                            "/destinations/streaming-destinations/singular/singular-cloud-mode/",
                        content: [],
                    },
                    {
                        key: "singular-device-mode",
                        title: "Device Mode",
                        link:
                            "/destinations/streaming-destinations/singular/singular-device-mode/",
                        content: [],
                    },
                ]
            },
            {
                key: "adjust",
                title: "Adjust",
                sectionTitle: "Attribution",
                link: "/destinations/streaming-destinations/adjust/",
                content: []
            },
            {
                key: "appsflyer",
                title: "AppsFlyer",
                link: "/destinations/streaming-destinations/appsflyer/",
                content: []
            },
            {
                key: "attribution",
                title: "Attribution",
                link: "/destinations/streaming-destinations/attribution/",
                content: []
            },
            {
                key: "branchio",
                title: "Branch",
                link: "/destinations/streaming-destinations/branchio/",
                content: []
            }, {
                key: "kochava",
                title: "Kochava",
                link: "/destinations/streaming-destinations/kochava/",
                content: []
            }, {
                key: "tvsquared",
                title: "TVSquared",
                link: "/destinations/streaming-destinations/tvsquared/",
                content: []
            },
            {
                key: "intercom",
                title: "Intercom",
                sectionTitle: "Business Messaging",
                link: "/destinations/streaming-destinations/intercom/",
                content: []
            }, {
                key: "kustomer",
                title: "Kustomer",
                link: "/destinations/streaming-destinations/kustomer/",
                content: []
            }, {
                key: "slack",
                title: "Slack",
                link: "/destinations/streaming-destinations/slack/",
                content: []
            }, {
                key: "trengo",
                title: "Trengo",
                link: "/destinations/streaming-destinations/trengo/",
                content: []
            },
            {
                key: "appcenter",
                title: "Visual Studio App Center",
                sectionTitle: "Continuous Integration",
                link: "/destinations/streaming-destinations/appcenter/",
                content: []
            },
            {
                key: "delighted",
                title: "Delighted",
                sectionTitle: "CRM",
                link: "/destinations/streaming-destinations/delighted/",
                content: []
            },
            {
                key: "hubspot",
                title: "HubSpot",
                link: "/destinations/streaming-destinations/hubspot/",
                content: []
            },
            {
                key: "salesforce",
                title: "Salesforce",
                link: "/destinations/streaming-destinations/salesforce/",
                content: []
            },
            {
                key: "variance",
                title: "Variance",
                link: "/destinations/streaming-destinations/variance/",
                content: []
            }, {
                key: "zendesk",
                title: "Zendesk",
                link: "/destinations/streaming-destinations/zendesk/",
                content: []
            },
            {
                key: "segment",
                title: "Segment",
                sectionTitle: "Customer Data Platform",
                link: "/destinations/streaming-destinations/segment/",
                content: []
            },
            {
                key: "bugsnag",
                title: "Bugsnag",
                sectionTitle: "Error Reporting",
                link: "/destinations/streaming-destinations/bugsnag/",
                content: []
            }, {
                key: "sentry",
                title: "Sentry",
                link: "/destinations/streaming-destinations/sentry/",
                content: []
            },
            {
                key: "activecampaign",
                title: "ActiveCampaign",
                sectionTitle: "Marketing",
                link: "/destinations/streaming-destinations/activecampaign/",
                content: []
            },
            {
                key: "adroll",
                title: "AdRoll",
                link: "/destinations/streaming-destinations/adroll/",
                content: []
            },
            {
                key: "airship",
                title: "Airship",
                link: "/destinations/streaming-destinations/airship/",
                content: []
            },
            {
                key: "appcues",
                title: "Appcues",
                link: "/destinations/streaming-destinations/appcues/",
                content: []
            }, {
                key: "attentive-tag",
                title: "Attentive Tag",
                link: "/destinations/streaming-destinations/attentive-tag/",
                content: []
            }, {
                key: "autopilot",
                title: "Autopilot",
                link: "/destinations/streaming-destinations/autopilot/",
                content: []
            }, {
                key: "blueshift",
                title: "Blueshift",
                link: "/destinations/streaming-destinations/blueshift/",
                content: []
            }, {
                key: "braze",
                title: "Braze",
                link: "/destinations/streaming-destinations/braze/",
                content: []
            }, {
                key: "clevertap",
                title: "CleverTap",
                link: "/destinations/streaming-destinations/clevertap/",
                content: []
            }, {
                key: "customer.io",
                title: "Customer.io",
                link: "/destinations/streaming-destinations/customer.io/",
                content: []
            }, {
                key: "drip",
                title: "Drip",
                link: "/destinations/streaming-destinations/drip/",
                content: [
                    {
                        key: "setting-up-drip-in-rudderstack",
                        title: "Setting Up Drip in RudderStack",
                        link: "/destinations/streaming-destinations/drip/setting-up-drip-in-rudderstack/",
                        content: []
                    }, {
                        key: "cloud-mode",
                        title: "Cloud Mode",
                        link: "/destinations/streaming-destinations/drip/drip-cloud-mode/",
                        content: []
                    }, {
                        key: "device-mode",
                        title: "Device Mode",
                        link: "/destinations/streaming-destinations/drip/drip-web-device-mode/",
                        content: []
                    },
                ]
            }, {
                key: "gainsight",
                title: "Gainsight",
                link: "/destinations/streaming-destinations/gainsight/",
                content: []
            }, {
                key: "gainsight-px",
                title: "Gainsight PX",
                link: "/destinations/streaming-destinations/gainsight-px/",
                content: []
            }, {
                key: "iterable",
                title: "Iterable",
                link: "/destinations/streaming-destinations/iterable/",
                content: []
            }, {
                key: "klaviyo",
                title: "Klaviyo",
                link: "/destinations/streaming-destinations/klaviyo/",
                content: []
            }, {
                key: "leanplum",
                title: "Leanplum",
                link: "/destinations/streaming-destinations/leanplum/",
                content: []
            }, {
                key: "mailchimp",
                title: "Mailchimp",
                link: "/destinations/streaming-destinations/mailchimp/",
                content: []
            }, {
                key: "marketo",
                title: "Marketo",
                link: "/destinations/streaming-destinations/marketo/",
                content: []
            }, {
                key: "marketo-lead-import",
                title: "Marketo Lead Import",
                link: "/destinations/streaming-destinations/marketo-lead-import/",
                content: []
            }, {
                key: "moengage",
                title: "MoEngage",
                link: "/destinations/streaming-destinations/moengage/",
                content: []
            }, {
                key: "ometria",
                title: "Ometria",
                link: "/destinations/streaming-destinations/ometria/",
                content: []
            }, {
                key: "post-affiliate-pro",
                title: "Post Affiliate Pro",
                link: "/destinations/streaming-destinations/post-affiliate-pro/",
                content: []
            }, {
                key: "qualtrics",
                title: "Qualtrics",
                link: "/destinations/streaming-destinations/qualtrics/",
                content: []
            }, {
                key: "revenue-cat",
                title: "Revenue Cat",
                link: "/destinations/streaming-destinations/revenue-cat/",
                content: []
            }, {
                key: "sfmc",
                title: "Salesforce Marketing Cloud",
                link: "/destinations/streaming-destinations/sfmc/",
                content: []
            }, {
                key: "pardot",
                title: "Salesforce Pardot",
                link: "/destinations/streaming-destinations/pardot/",
                content: []
            }, {
                key: "sendgrid",
                title: "SendGrid",
                link: "/destinations/streaming-destinations/sendgrid/",
                content: []
            }, {
                key: "userlist",
                title: "Userlist",
                link: "/destinations/streaming-destinations/userlist/",
                content: []
            }, {
                key: "webengage",
                title: "WebEngage",
                link: "/destinations/streaming-destinations/webengage/",
                content: []
            },
            {
                key: "google-sheets",
                title: "Google Sheets",
                sectionTitle: "Productivity",
                link: "/destinations/streaming-destinations/google-sheets/",
                content: []
            },
            {
                key: "amazon-s3",
                title: "Amazon S3",
                sectionTitle: "Storage Platforms",
                link: "/destinations/streaming-destinations/amazon-s3/",
                content: []
            },
            {
                key: "microsoft-azure-blob-storage",
                title: "Azure Blob Storage",
                link: "/destinations/streaming-destinations/microsoft-azure-blob-storage/",
                content: []
            },
            {
                key: "digitalocean-spaces",
                title: "DigitalOcean Spaces",
                link: "/destinations/streaming-destinations/digitalocean-spaces/",
                content: []
            },
            {
                key: "google-cloud-storage",
                title: "Google Cloud Storage",
                link: "/destinations/streaming-destinations/google-cloud-storage/",
                content: []
            }, {
                key: "minio",
                title: "MinIO",
                link: "/destinations/streaming-destinations/minio/",
                content: []
            }, {
                key: "redis",
                title: "Redis",
                link: "/destinations/streaming-destinations/redis/",
                content: []
            },
            {
                key: "amazon-eventbridge",
                title: "Amazon EventBridge",
                sectionTitle: "Streaming Platforms",
                link: "/destinations/streaming-destinations/amazon-eventbridge/",
                content: []
            },
            {
                key: "amazon-kinesis",
                title: "Amazon Kinesis",
                link: "/destinations/streaming-destinations/amazon-kinesis/",
                content: []
            },
            {
                key: "amazon-kinesis-firehose",
                title: "Amazon Firehose",
                link: "/destinations/streaming-destinations/amazon-kinesis-firehose/",
                content: []
            },
            {
                key: "kafka",
                title: "Apache Kafka",
                link: "/destinations/streaming-destinations/kafka/",
                content: []
            }, {
                key: "azure-event-hubs",
                title: "Azure Event Hubs",
                link: "/destinations/streaming-destinations/azure-event-hubs/",
                content: []
            }, {
                key: "biquery-stream",
                title: "BigQuery Stream",
                link: "/destinations/streaming-destinations/bigquery-stream/",
                content: []
            }, {
                key: "confluent-cloud",
                title: "Confluent Cloud",
                link: "/destinations/streaming-destinations/confluent-cloud/",
                content: []
            }, {
                key: "google-pub-sub",
                title: "Google Pub/Sub",
                link: "/destinations/streaming-destinations/google-pub-sub/",
                content: []
            },
            {
                key: "google-tag-manager",
                title: "Google Tag Manager",
                sectionTitle: "Tag Managers",
                link: "/destinations/streaming-destinations/google-tag-manager/",
                content: []
            },
        ]
    },
    {
        key: "data-warehouse-integrations",
        title: "Warehouse Destinations",
        link: "/destinations/warehouse-destinations/",
        content: [
            {
                key: "warehouse-schemas",
                title: "Warehouse Schema",
                link: "/destinations/warehouse-destinations/warehouse-schema/",
                content: []
            },
            {
                key: "warehouse-schemas",
                title: "FAQ",
                link: "/destinations/warehouse-destinations/faq/",
                content: []
            },
            {
                key: "amazon-redshift",
                title: "Amazon Redshift",
                sectionTitle: "Warehouse Integrations",
                link: "/destinations/warehouse-destinations/redshift/",
                content: []
            },
            {
                key: "s3-datalake",
                title: "Amazon S3 Data Lake",
                link: "/destinations/warehouse-destinations/s3-datalake/",
                content: []
            },
            {
                key: "azure-synapse",
                title: "Azure Synapse",
                link: "/destinations/warehouse-destinations/azure-synapse/",
                content: []
            },
            {
                key: "azure-datalake",
                title: "Azure Data Lake ",
                link: "/destinations/warehouse-destinations/azure-datalake/",
                content: []
            }, {
                key: "clickhouse",
                title: "ClickHouse",
                link: "/destinations/warehouse-destinations/clickhouse/",
                content: []
            }, {
                key: "delta-lake",
                title: "Databricks Delta Lake",
                link: "/destinations/warehouse-destinations/delta-lake/",
                content: []
            }, {
                key: "google-bigquery",
                title: "Google BigQuery",
                link: "/destinations/warehouse-destinations/bigquery/",
                content: []
            }, {
                key: "gcs-datalake",
                title: "Google Cloud Storage Data Lake ",
                link: "/destinations/warehouse-destinations/gcs-datalake/",
                content: []
            }, {
                key: "microsoft-sql-server",
                title: "Microsoft SQL Server",
                link: "/destinations/warehouse-destinations/sql-server/",
                content: []
            }, {
                key: "postgresql",
                title: "PostgreSQL",
                link: "/destinations/warehouse-destinations/postgresql/",
                content: []
            }, {
                key: "snowflake",
                title: "Snowflake",
                link: "/destinations/warehouse-destinations/snowflake/",
                content: []
            },
        ]
    },
    {
        key: "webhooks",
        title: "Webhooks",
        link: "/destinations/webhooks/",
        content: []
    },
    {
        key: "rudderstack-connection-modes",
        title: "Connection Modes: Cloud Mode vs. Device Mode",
        link: "/destinations/rudderstack-connection-modes/",
        content: []
    },

    // Features section
  {
    key: "transformations",
    title: "Transformations",
    sectionTitle: "Features",
    link: "/features/transformations/",
    content: []
  },
  {
    key: "data-governance",
    title: "Data Governance",
    link: "/features/data-governance/",
    content: [
       {
        key: "ruddertyper",
        title: "RudderTyper",
        link: "/features/data-governance/ruddertyper/",
        content: []
      }, {
        key: "tracking-plans",
        title: "Tracking Plans",
        link: "/features/data-governance/tracking-plans/",
        content: [
          {
            key: "tracking-plan-spreadsheet",
            title: "Tracking Plan Spreadsheet",
            link: "/features/data-governance/tracking-plans/tracking-plan-spreadsheet/",
            content: []
          },
        ]
      },
    ]
  }, {
    key: "identity-resolution",
    title: "Identity Resolution",
    link: "/features/identity-resolution/",
    content: []
  },


// Event Spec section

{
    key: "standard-events",
    title: "Standard Events",
    sectionTitle: "Events Spec",
    link: "/event-spec/standard-events/",
    content: [
      {
        key: "identify",
        title: "Identify",
        link: "/event-spec/standard-events/identify/",
        content: []
      },
      {
        key: "page",
        title: "Page",
        link: "/event-spec/standard-events/page/",
        content: []
      },
      {
        key: "screen",
        title: "Screen",
        link: "/event-spec/standard-events/screen/",
        content: []
      },
      {
        key: "track",
        title: "Track",
        link: "/event-spec/standard-events/track/",
        content: []
      },
      {
        key: "group",
        title: "Group",
        link: "/event-spec/standard-events/group/",
        content: []
      },
      {
        key: "alias",
        title: "Alias",
        link: "/event-spec/standard-events/alias/",
        content: []
      },
      {
        key: "common-fields",
        title: "Common Fields",
        link: "/event-spec/standard-events/common-fields/",
        content: []
      },
    ]
  },
  {
    key: "ecommerce-events-spec",
    title: "E-commerce Events",
    link: "/event-spec/ecommerce-events-spec/",
    content: [
      {
        key: "browsing",
        title: "Browsing",
        link: "/event-spec/ecommerce-events-spec/browsing/",
        content: []
      },
      {
        key: "ordering",
        title: "Ordering",
        link: "/event-spec/ecommerce-events-spec/ordering/",
        content: []
      },
      {
        key: "wishlisting",
        title: "Wishlisting",
        link: "/event-spec/ecommerce-events-spec/wishlisting/",
        content: []
      },
      {
        key: "promotions",
        title: "Promotions",
        link: "/event-spec/ecommerce-events-spec/promotions/",
        content: []
      },
      {
        key: "coupons",
        title: "Coupons",
        link: "/event-spec/ecommerce-events-spec/coupons/",
        content: []
      },
      {
        key: "sharing",
        title: "Sharing",
        link: "/event-spec/ecommerce-events-spec/sharing/",
        content: []
      },
      {
        key: "reviewing",
        title: "Reviewing",
        link: "/event-spec/ecommerce-events-spec/reviewing/",
        content: []
      },
    ]
  },
  {
    key: "application-lifecycle-events-spec",
    title: "Application Lifecycle Events",
    link: "/event-spec/application-lifecycle-events-spec/",
    content: []
  },
  {
    key: "video-events-spec",
    title: "Video Events",
    link: "/event-spec/video-events-spec/",
    content: []
  },


   // API section

  {
    key: "http-api",
    title: "HTTP API",
    sectionTitle: "API",
    link: "/api/http-api/",
    content: []
  },
   {
    key: "pixel-api-spec",
    title: "Pixel API",
    link: "/api/pixel-api-spec/",
    content: []
  }, {
    key: "tracking-plan-api",
    title: "Tracking Plan API",
    link: "/api/tracking-plan-api/",
    content: []
  }, {
    key: "transformation-api",
    title: "Transformation API",
    link: "/api/transformation-api/",
    content: []
  }, {
    key: "data-governance-api",
    title: "Data Governance API",
    link: "/api/data-governance-api/",
    content: []
  },
  {
    key: "data-regulation-api",
    title: "Data Regulation API",
    link: "/api/data-regulation-api/",
    content: []
  },
  {
    key: "test-api",
    title: "Test API",
    link: "/api/test-api/",
    content: []
  },

    // Guides section


    {
        key: "migration-guides",
        title: "Migration Guides",
        sectionTitle: "User Guides",
        link: "/user-guides/migration-guides/",
        content: [
            {
                key: "blendo-rudderstack-migration",
                title: "Migrating from Blendo to RudderStack",
                link: "/user-guides/migration-guides/blendo-rudderstack-migration/",
                content: []
            }, {
                key: "rudderstack-migration-guide",
                title: "Migrating from Segment to RudderStack",
                link: "/user-guides/migration-guides/rudderstack-migration-guide/",
                content: []
            }, {
                key: "how-to-migrate-warehouse-destination-from-segment-to-rudderstack",
                title: "Migrating Your Warehouse Destination from Segment to RudderStack",
                link: "/user-guides/migration-guides/how-to-migrate-warehouse-destination-from-segment-to-rudderstack/",
                content: []
            },
        ]
    }, {
        key: "administrators-guide",
        title: "Administator's Guides",
        link: "/user-guides/administrators-guide/",
        content: [
            {
                key: "onelogin-sso",
                title: "OneLogin SSO Setup",
                link: "/user-guides/administrators-guide/onelogin-sso/",
                content: []
            },
            {
                key: "okta-sso",
                title: "Okta SSO Setup",
                link: "/user-guides/administrators-guide/okta-sso/",
                content: []
            },
            {
                key: "rudderstack-grafana-dashboard",
                title: "RudderStack Grafana Dashboard",
                link: "/user-guides/administrators-guide/rudderstack-grafana-dashboard/",
                content: []
            },
            {
                key: "software-releases",
                title: "Software Releases",
                link: "/user-guides/administrators-guide/software-releases/",
                content: []
            }, {
                key: "high-availability",
                title: "High Availability",
                link: "/user-guides/administrators-guide/high-availability/",
                content: []
            }, {
                key: "horizontal-scaling-1",
                title: "Horizontal Scaling",
                link: "/user-guides/administrators-guide/horizontal-scaling-1/",
                content: []
            }, {
                key: "event-replay",
                title: "Event Replay",
                link: "/user-guides/administrators-guide/event-replay/",
                content: []
            }, {
                key: "bucket-configuration-settings",
                title: "Bucket Configuration Settings for Event Backups",
                link: "/user-guides/administrators-guide/bucket-configuration-settings/",
                content: []
            }, {
                key: "alerting",
                title: "Alerting Guide",
                link: "/user-guides/administrators-guide/alerting/",
                content: []
            }, {
                key: "infra-provisioning",
                title: "Infrastructure Provisioning",
                link: "/user-guides/administrators-guide/infra-provisioning/",
                content: []
            }, {
                key: "monitoring-and-metrics",
                title: "Monitoring and Metrics",
                link: "/user-guides/administrators-guide/monitoring-and-metrics/",
                content: []
            }, {
                key: "config-parameters",
                title: "Configuration Parameters",
                link: "/user-guides/administrators-guide/config-parameters/",
                content: []
            }, {
                key: "admin-troubleshooting-guide",
                title: "Troubleshooting Guide",
                link: "/user-guides/administrators-guide/admin-troubleshooting-guide/",
                content: []
            },
        ]
    }, {
        key: "how-to-guides",
        title: "How-to Guides",
        link: "/user-guides/how-to-guides/",
        content: [
            {
                key: "dynamic-destination-configuration",
                title: "How to Configure a Destination via the Event Payload",
                link: "/user-guides/how-to-guides/dynamic-destination-configuration/",
                content: []
            },
            {
                key: "how-to-submit-an-integration-pull-request",
                title: "How to Submit an Integration Pull Request",
                link: "/user-guides/how-to-guides/how-to-submit-an-integration-pull-request/",
                content: []
            },
            {
                key: "custom-domains",
                title: "How to Use Custom Domains",
                link: "/user-guides/how-to-guides/custom-domains/",
                content: []
            },
            {
                key: "using-aws-lambda-functions-with-rudderstack",
                title: "How to Use AWS Lambda Functions with RudderStack",
                link: "/user-guides/how-to-guides/using-aws-lambda-functions-with-rudderstack/",
                content: []
            }, {
                key: "live-destination-event-debugger",
                title: "How to Debug Live Destination Events",
                link: "/user-guides/how-to-guides/live-destination-event-debugger/",
                content: []
            }, {
                key: "filter-events",
                title: "How to Filter Events using Different Methods",
                link: "/user-guides/how-to-guides/filter-events/",
                content: []
            }, {
                key: "how-to-filter-selective-destinations",
                title: "How to Filter Selective Destinations using JavaScript SDK",
                link: "/user-guides/how-to-guides/how-to-filter-selective-destinations/",
                content: []
            }, {
                key: "create-a-new-destination-transformer-for-rudder",
                title: "How to Create a New Destination Transformation for RudderStack",
                link: "/user-guides/how-to-guides/create-a-new-destination-transformer-for-rudder/",
                content: [
                    {
                        key: "best-practices-for-coding-transformation-functions-in-javascript",
                        title: "Best Practices for Coding Transformation Functions in JavaScript",
                        link: "/user-guides/how-to-guides/create-a-new-destination-transformer-for-rudder/best-practices-for-coding-transformation-functions-in-javascript/",
                        content: []
                    },
                ]
            }, {
                key: "implement-native-js-sdk-integration",
                title: "How to Implement a Native JavaScript SDK Integration",
                link: "/user-guides/how-to-guides/implement-native-js-sdk-integration/",
                content: [
                    {
                        key: "add-device-mode-sdk-to-js",
                        title: "How to Add a Device Mode SDK to RudderStack JavaScript SDK",
                        link: "/user-guides/how-to-guides/implement-native-js-sdk-integration/add-device-mode-sdk-to-js/",
                        content: []
                    },
                ]
            }, {
                key: "developing-integrations-for-rudderstack",
                title: "How to Develop Integrations for RudderStack",
                link: "/user-guides/how-to-guides/developing-integrations-for-rudderstack/",
                content: []
            }, {
                key: "rudderstack-jamstack-integration",
                title: "How to Integrate RudderStack with Your JAMstack Site",
                link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/",
                content: [
                    {
                        key: "rudderstack-angular-integration",
                        title: "Angular",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-angular-integration/",
                        content: []
                    },
                    {
                        key: "rudderstack-astro-integration",
                        title: "Astro.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-astro-integration/",
                        content: []
                    },
                    {
                        key: "rudderstack-eleventy-integration",
                        title: "Eleventy",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-eleventy-integration/",
                        content: []
                    },
                    {
                        key: "rudderstack-ember-integration",
                        title: "Ember.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-ember-integration/",
                        content: []
                    }, {
                        key: "rudderstack-gatsby-integration",
                        title: "Gatsby",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-gatsby-integration/",
                        content: []
                    }, {
                        key: "rudderstack-hugo-integration",
                        title: "Hugo",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-hugo-integration/",
                        content: []
                    }, {
                        key: "rudderstack-jekyll-integration",
                        title: "Jekyll",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-jekyll-integration/",
                        content: []
                    }, {
                        key: "rudderstack-nextjs-integration",
                        title: "Next.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nextjs-integration/",
                        content: []
                    }, {
                        key: "rudderstack-nuxtjs-integration",
                        title: "Nuxt.js",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-nuxtjs-integration/",
                        content: []
                    }, {
                        key: "rudderstack-svelte-integration",
                        title: "Svelte",
                        link: "/user-guides/how-to-guides/rudderstack-jamstack-integration/rudderstack-svelte-integration/",
                        content: []
                    }, {
                        key: "rudderstack-vue-integration",
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
        key: "rudderstack-architecture",
        title: "RudderStack Architecture",
        sectionTitle: "Resources",
        link: "/resources/rudderstack-architecture/",
        content: []
    },
    {
        key: "glossary",
        title: "Glossary",
        link: "/resources/glossary/",
        content: []
    },
    {
        key: "faq",
        title: "FAQ",
        link: "/resources/faq/",
        content: []
    },
    {
        key: "community",
        title: "Community",
        link: "/resources/community/",
        content: []
    },
];