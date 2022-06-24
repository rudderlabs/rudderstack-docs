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
        link: `/get-started/`,
        content: []
    },
    {
        key: "cloud-vs-open-source",
        title: "RudderStack Cloud vs. Open Source",
        // sectionTitle: "Inner Section Title 1",
        link: "/get-started/cloud-vs-open-source/",
        content: []
    },
    {
        key: "get-started",
        title: "Quickstart",
        link: `/get-started/quickstart/`,
        content: []
    }, {
        key: "rudderstack-open-source",
        title: "RudderStack Open Source",
        link: "/rudderstack-open-source/",
        content: [
            {
                key: "control-plane-lite",
                title: "Control Plane Setup",
                link: "/rudderstack-open-source/control-plane-lite/",
                content: []
            }, {
                key: "installing-and-setting-up-rudderstack",
                title: "Data Plane Setup",
                link: "/rudderstack-open-source/installing-and-setting-up-rudderstack/",
                content: [
                    {
                        key: "docker",
                        title: "Docker",
                        link: "/rudderstack-open-source/installing-and-setting-up-rudderstack/docker/",
                        content: []
                    }, {
                        key: "kubernetes",
                        title: "Kubernetes",
                        link: "/rudderstack-open-source/installing-and-setting-up-rudderstack/kubernetes/",
                        content: []
                    }, {
                        key: "developer-machine-setup",
                        title: "Developer Machine Setup",
                        link: "/rudderstack-open-source/installing-and-setting-up-rudderstack/developer-machine-setup/",
                        content: []
                    }, {
                        key: "sending-test-events",
                        title: "Sending Test Events",
                        link: "/rudderstack-open-source/installing-and-setting-up-rudderstack/sending-test-events/",
                        content: []
                    },
                ]
            },
        ]
    },


    // Dashboard guide section

    {
        key: "rudderstack-cloud",
        title: "Overview",
        sectionTitle: "Dashboard Guide",
        link: "/rudderstack-cloud/",
        content: []
    }, {
        key: "sources",
        title: "Sources",
        link: "/rudderstack-cloud/sources/",
        content: []
    }, {
        key: "destinations",
        title: "Destinations",
        link: "/rudderstack-cloud/destinations/",
        content: []
    }, {
        key: "live-events",
        title: "Live Events",
        link: "/rudderstack-cloud/live-events/",
        content: []
    }, {
        key: "audit-logs",
        title: "Audit Logs",
        link: "/rudderstack-cloud/audit-logs/",
        content: []
    }, {
        key: "teammates",
        title: "Teammates (User Management)",
        link: "/rudderstack-cloud/teammates/",
        content: []
    }, {
        key: "rudderstack-connection-modes",
        title: "Connection Modes: Cloud Mode vs. Device Mode",
        link: "/rudderstack-cloud/rudderstack-connection-modes/",
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
                        key: "js-sdk-faqs",
                        title: "JavaScript SDK FAQs",
                        link: "/sources/sdks/rudderstack-javascript-sdk/js-sdk-faqs/",
                        content: []
                    },
                ]
            },


            {
                key: "rudderstack-android-sdk",
                title: "Android",
                sectionTitle: "Mobile",
                link: "/sources/sdks/rudderstack-android-sdk/",
                content: [
                    {
                        key: "add-an-application-class-to-you-android-application",
                        title: "Adding Application Class",
                        link: "/sources/sdks/rudderstack-android-sdk/add-an-application-class-to-you-android-application/",
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
                key: "rudderstack-amp-analytics",
                title: "AMP Analytics",
                link: "/sources/sdks/rudderstack-amp-analytics/",
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
              sectionTitle: "",
              link: "/sources/sdks/event-filtering/",
              content: []
          },
          {
            key: "sdk-faqs",
            title: "SDK FAQs",
            link: "/sources/sdks/sdk-faqs/",
            content: []
        },

        ]


    }, 
    {
        key: "cloud-apps",
        title: "Cloud Apps",
        link: "/stream-sources/",
        content: [
            {
                key: "webhook-source",
                title: "Webhook Source",
                link: "/stream-sources/webhook-source/",
                content: []
            },
            {
                key: "braze-currents",
                title: "Braze",
                link: "/stream-sources/braze-currents/",
                content: []
            },
            {
                key: "appcenter",
                title: "App Center",
                link: "/stream-sources/appcenter/",
                content: []
            },
            {
                key: "appsflyer",
                title: "AppsFlyer",
                link: "/stream-sources/appsflyer/",
                content: []
            }, {
                key: "auth0",
                title: "Auth0",
                link: "/stream-sources/auth0/",
                content: []
            }, {
                key: "customerio",
                title: "Customer.io",
                link: "/stream-sources/customerio/",
                content: []
            }, {
                key: "extole",
                title: "Extole",
                link: "/stream-sources/extole/",
                content: []
            }, {
                key: "iterable",
                title: "Iterable",
                link: "/stream-sources/iterable/",
                content: []
            }, {
                key: "looker",
                title: "Looker",
                link: "/stream-sources/looker/",
                content: []
            }, {
                key: "posthog",
                title: "PostHog",
                link: "/stream-sources/posthog/",
                content: []
            }, {
                key: "shopify",
                title: "Shopify",
                link: "/stream-sources/shopify/",
                content: []
            }, {
                key: "segment",
                title: "Segment",
                link: "/stream-sources/segment/",
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
        link: "/reverse-etl/",
        content: [
            {
                key: "amazon-redshift",
                title: "Amazon Redshift",
                link: "/reverse-etl/amazon-redshift/",
                content: []
            },
            {
                key: "amazon-s3",
                title: "Amazon S3",
                link: "/reverse-etl/amazon-s3/",
                content: []
            },
            {
                key: "clickhouse",
                title: "ClickHouse",
                link: "/reverse-etl/clickhouse/",
                content: []
            },
            {
                key: "google-bigquery",
                title: "Google BigQuery",
                link: "/reverse-etl/google-bigquery/",
                content: []
            }, {
                key: "mysql",
                title: "MySQL",
                link: "/reverse-etl/mysql/",
                content: []
            }, {
                key: "postgresql",
                title: "PostgreSQL",
                link: "/reverse-etl/postgresql/",
                content: []
            }, {
                key: "snowflake",
                title: "Snowflake",
                link: "/reverse-etl/snowflake/",
                content: []
            }, {
                key: "features",
                title: "Features",
                link: "/reverse-etl/features/",
                content: [
                    {
                        key: "models",
                        title: "Models",
                        link: "/reverse-etl/features/models/",
                        content: []
                    }, {
                        key: "airflow-provider",
                        title: "Airflow Provider",
                        link: "/reverse-etl/features/airflow-provider/",
                        content: []
                    }, {
                        key: "visual-data-mapper",
                        title: "Visual Data Mapper",
                        link: "/reverse-etl/features/visual-data-mapper/",
                        content: []
                    },
                ]
            }, {
                key: "common-settings",
                title: "Common Settings",
                link: "/reverse-etl/common-settings/",
                content: [
                    {
                        key: "sync-modes",
                        title: "Sync Modes",
                        link: "/reverse-etl/common-settings/sync-modes/",
                        content: []
                    }, {
                        key: "sync-schedule-settings",
                        title: "Sync Schedule",
                        link: "/reverse-etl/common-settings/sync-schedule-settings/",
                        content: []
                    }, {
                        key: "importing-data-using-tables",
                        title: "Importing Data using Tables",
                        link: "/reverse-etl/common-settings/importing-data-using-tables/",
                        content: []
                    }, {
                        key: "importing-data-using-models",
                        title: "Importing Data using Models",
                        link: "/reverse-etl/common-settings/importing-data-using-models/",
                        content: []
                    },
                ]
            }, {
                key: "faq",
                title: "FAQ",
                link: "/reverse-etl/faq/",
                content: []
            },
        ]
    },

    // Destinations section

    {
        key: "destinations",
        title: "Streaming Destinations",
        sectionTitle: "Destinations",
        link: "/destinations/",
        content: [
            {
                key: "testing-and-personalization",
                title: "A/B Testing & Personalization",
                link: "/destinations/testing-and-personalization/",
                content: [
                    {
                        key: "algolia-insights",
                        title: "Algolia Insights",
                        link: "/destinations/testing-and-personalization/algolia-insights/",
                        content: []
                    },
                    {
                        key: "candu",
                        title: "Candu",
                        link: "/destinations/testing-and-personalization/candu/",
                        content: []
                    },
                    {
                        key: "google-optimize",
                        title: "Google Optimize",
                        link: "/destinations/testing-and-personalization/google-optimize/",
                        content: []
                    },
                    {
                        key: "launchdarkly",
                        title: "LaunchDarkly",
                        link: "/destinations/testing-and-personalization/launchdarkly/",
                        content: []
                    }, {
                        key: "monetate",
                        title: "Monetate",
                        link: "/destinations/testing-and-personalization/monetate/",
                        content: []
                    }, {
                        key: "optimizely-full-stack",
                        title: "Optimizely Full Stack",
                        link: "/destinations/testing-and-personalization/optimizely-full-stack/",
                        content: []
                    }, {
                        key: "optimizely-web",
                        title: "Optimizely Web",
                        link: "/destinations/testing-and-personalization/optimizely-web/",
                        content: []
                    }, {
                        key: "splitio",
                        title: "Split.io",
                        link: "/destinations/testing-and-personalization/splitio/",
                        content: []
                    }, {
                        key: "statsig",
                        title: "Statsig",
                        link: "/destinations/testing-and-personalization/statsig/",
                        content: []
                    }, {
                        key: "vwo-beta-visual-website-optimizer",
                        title: "VWO (Visual Website Optimizer)",
                        link: "/destinations/testing-and-personalization/vwo-beta-visual-website-optimizer/",
                        content: []
                    },
                ]
            },
            {
                key: "advertising",
                title: "Advertising",
                link: "/destinations/advertising/",
                content: [
                    {
                        key: "bingads",
                        title: "Bing Ads",
                        link: "/destinations/advertising/bingads/",
                        content: []
                    },
                    {
                        key: "criteo",
                        title: "Criteo",
                        link: "/destinations/advertising/criteo/",
                        content: []
                    },
                    {
                        key: "dcm-floodlight",
                        title: "DCM Floodlight",
                        link: "/destinations/advertising/dcm-floodlight/",
                        content: [
                            {
                                key: "setting-up-dcm-floodlight-in-rudderstack",
                                title: "Setting up DCM Floodlight",
                                link: "/destinations/advertising/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack/",
                                content: []
                            }, {
                                key: "dcm-floodlight-cloud-mode",
                                title: "Cloud Mode",
                                link: "/destinations/advertising/dcm-floodlight/dcm-floodlight-cloud-mode/",
                                content: []
                            }, {
                                key: "dcm-floodlight-device-mode",
                                title: "Device Mode",
                                link: "/destinations/advertising/dcm-floodlight/dcm-floodlight-device-mode/",
                                content: []
                            },
                        ]
                    },
                    {
                        key: "facebook-app-events",
                        title: "Facebook App Events",
                        link: "/destinations/advertising/facebook-app-events/",
                        content: []
                    }, {
                        key: "fb-custom-audience",
                        title: "Facebook Custom Audience",
                        link: "/destinations/advertising/fb-custom-audience/",
                        content: []
                    }, {
                        key: "fb-pixel",
                        title: "Facebook Pixel",
                        link: "/destinations/advertising/fb-pixel/",
                        content: []
                    }, {
                        key: "g-ads-gtag",
                        title: "Google Ads (gtag.js)",
                        link: "/destinations/advertising/g-ads-gtag/",
                        content: []
                    }, {
                        key: "google-adwords-enhanced-conversions",
                        title: "Google Ads Enhanced Conversions",
                        link: "/destinations/advertising/google-adwords-enhanced-conversions/",
                        content: []
                    }, {
                        key: "google-adwords-remarketing-list",
                        title: "Google Ads Remarketing Lists (Customer Match)",
                        link: "/destinations/advertising/google-adwords-remarketing-list/",
                        content: []
                    }, {
                        key: "linkedin-insight-tag",
                        title: "LinkedIn Insight Tag",
                        link: "/destinations/advertising/linkedin-insight-tag/",
                        content: []
                    }, {
                        key: "lotame",
                        title: "Lotame",
                        link: "/destinations/advertising/lotame/",
                        content: []
                    }, {
                        key: "pinterest-ads",
                        title: "Pinterest Tag",
                        link: "/destinations/advertising/pinterest-ads/",
                        content: []
                    }, {
                        key: "reddit-pixel",
                        title: "Reddit Pixel",
                        link: "/destinations/advertising/reddit-pixel/",
                        content: []
                    }, {
                        key: "snapchat-conversion",
                        title: "Snapchat Conversion",
                        link: "/destinations/advertising/snapchat-conversion/",
                        content: []
                    }, {
                        key: "snap-pixel",
                        title: "Snap Pixel",
                        link: "/destinations/advertising/snap-pixel/",
                        content: []
                    }, {
                        key: "tiktok-ads",
                        title: "TikTok Ads",
                        link: "/destinations/advertising/tiktok-ads/",
                        content: []
                    }, {
                        key: "yahoo-dsp",
                        title: "Yahoo DSP",
                        link: "/destinations/advertising/yahoo-dsp/",
                        content: []
                    },
                ]
            },
            {
                key: "analytics",
                title: "Analytics",
                link: "/destinations/analytics/",
                content: [
                    {
                        key: "adobe-analytics",
                        title: "Adobe Analytics",
                        link: "/destinations/analytics/adobe-analytics/",
                        content: [
                            {
                                key: "setting-up-adobe-analytics-in-rudderstack",
                                title: "Setting Up Adobe Analytics in RudderStack",
                                link: "/destinations/analytics/adobe-analytics/setting-up-adobe-analytics-in-rudderstack/",
                                content: []
                            },
                            {
                                key: "adobe-analytics-web-device-mode",
                                title: "Web Device Mode Settings",
                                link: "/destinations/analytics/adobe-analytics/adobe-analytics-web-device-mode/",
                                content: []
                            },
                            {
                                key: "adobe-analytics-mobile-device-mode",
                                title: "Mobile Device Mode Settings",
                                link: "/destinations/analytics/adobe-analytics/adobe-analytics-mobile-device-mode/",
                                content: []
                            },
                            {
                                key: "adobe-analytics-heartbeat",
                                title: "Adobe Analytics Heartbeat Measurement",
                                link: "/destinations/analytics/adobe-analytics/adobe-analytics-heartbeat/",
                                content: []
                            }, {
                                key: "e-commerce-events",
                                title: "E-commerce Events",
                                link: "/destinations/analytics/adobe-analytics/e-commerce-events/",
                                content: []
                            },
                        ]
                    },
                    {
                        key: "amplitude",
                        title: "Amplitude",
                        link: "/destinations/analytics/amplitude/",
                        content: []
                    },
                    {
                        key: "aws-personalize",
                        title: "AWS Personalize",
                        link: "/destinations/analytics/aws-personalize/",
                        content: []
                    },
                    {
                        key: "chartbeat",
                        title: "Chartbeat",
                        link: "/destinations/analytics/chartbeat/",
                        content: []
                    }, {
                        key: "firebase",
                        title: "Firebase",
                        link: "/destinations/analytics/firebase/",
                        content: []
                    }, {
                        key: "fullstory",
                        title: "FullStory",
                        link: "/destinations/analytics/fullstory/",
                        content: []
                    }, {
                        key: "google-analytics-ga",
                        title: "Google Analytics",
                        link: "/destinations/analytics/google-analytics-ga/",
                        content: []
                    }, {
                        key: "google-analytics-4",
                        title: "Google Analytics 4",
                        link: "/destinations/analytics/google-analytics-4/",
                        content: [
                            {
                                key: "setting-up-google-analytics-4-in-rudderstack",
                                title: "Setting up Google Analytics 4",
                                link: "/destinations/analytics/google-analytics-4/setting-up-google-analytics-4-in-rudderstack/",
                                content: []
                            }, {
                                key: "google-analytics-4-cloud-mode",
                                title: "Cloud Mode",
                                link: "/destinations/analytics/google-analytics-4/google-analytics-4-cloud-mode/",
                                content: []
                            }, {
                                key: "google-analytics-4-device-mode",
                                title: "Device Mode",
                                link: "/destinations/analytics/google-analytics-4/google-analytics-4-device-mode/",
                                content: []
                            },
                        ]
                    }, {
                        key: "google-analytics-360",
                        title: "Google Analytics 360",
                        link: "/destinations/analytics/google-analytics-360/",
                        content: []
                    }, {
                        key: "heap.io",
                        title: "Heap.io",
                        link: "/destinations/analytics/heap.io/",
                        content: []
                    }, {
                        key: "hotjar",
                        title: "Hotjar",
                        link: "/destinations/analytics/hotjar/",
                        content: []
                    }, {
                        key: "indicative",
                        title: "Indicative",
                        link: "/destinations/analytics/indicative/",
                        content: []
                    }, {
                        key: "keen",
                        title: "Keen.io",
                        link: "/destinations/analytics/keen/",
                        content: []
                    }, {
                        key: "kissmetrics",
                        title: "Kissmetrics",
                        link: "/destinations/analytics/kissmetrics/",
                        content: []
                    }, {
                        key: "kubit",
                        title: "Kubit",
                        link: "/destinations/analytics/kubit/",
                        content: []
                    }, {
                        key: "lytics",
                        title: "Lytics",
                        link: "/destinations/analytics/lytics/",
                        content: []
                    }, {
                        key: "mixpanel",
                        title: "Mixpanel",
                        link: "/destinations/analytics/mixpanel/",
                        content: []
                    }, {
                        key: "new-relic",
                        title: "New Relic",
                        link: "/destinations/analytics/new-relic/",
                        content: []
                    }, {
                        key: "pendo",
                        title: "Pendo",
                        link: "/destinations/analytics/pendo/",
                        content: []
                    }, {
                        key: "posthog",
                        title: "PostHog",
                        link: "/destinations/analytics/posthog/",
                        content: []
                    }, {
                        key: "profitwell",
                        title: "Profitwell",
                        link: "/destinations/analytics/profitwell/",
                        content: [
                            {
                                key: "profitwell-cloud-mode",
                                title: "Cloud Mode",
                                link: "/destinations/analytics/profitwell/profitwell-cloud-mode/",
                                content: []
                            }, {
                                key: "profitwell-web-device-mode",
                                title: "Device Mode",
                                link: "/destinations/analytics/profitwell/profitwell-web-device-mode/",
                                content: []
                            },
                        ]
                    }, {
                        key: "quantummetric",
                        title: "Quantum Metric",
                        link: "/destinations/analytics/quantummetric/",
                        content: []
                    }, {
                        key: "singular",
                        title: "Singular",
                        link: "/destinations/analytics/singular/",
                        content: []
                    },
                ]
            },
            {
                key: "attribution",
                title: "Attribution",
                link: "/destinations/attribution/",
                content: [
                    {
                        key: "adjust",
                        title: "Adjust",
                        link: "/destinations/attribution/adjust/",
                        content: []
                    },
                    {
                        key: "appsflyer",
                        title: "AppsFlyer",
                        link: "/destinations/attribution/appsflyer/",
                        content: []
                    },
                    {
                        key: "attribution",
                        title: "Attribution",
                        link: "/destinations/attribution/attribution/",
                        content: []
                    },
                    {
                        key: "branchio",
                        title: "Branch",
                        link: "/destinations/attribution/branchio/",
                        content: []
                    }, {
                        key: "kochava",
                        title: "Kochava",
                        link: "/destinations/attribution/kochava/",
                        content: []
                    }, {
                        key: "tvsquared",
                        title: "TVSquared",
                        link: "/destinations/attribution/tvsquared/",
                        content: []
                    },
                ]
            }, {
                key: "business-messaging",
                title: "Business Messaging",
                link: "/destinations/business-messaging/",
                content: [
                    {
                        key: "intercom",
                        title: "Intercom",
                        link: "/destinations/business-messaging/intercom/",
                        content: []
                    }, {
                        key: "kustomer",
                        title: "Kustomer",
                        link: "/destinations/business-messaging/kustomer/",
                        content: []
                    }, {
                        key: "slack",
                        title: "Slack",
                        link: "/destinations/business-messaging/slack/",
                        content: []
                    }, {
                        key: "trengo",
                        title: "Trengo",
                        link: "/destinations/business-messaging/trengo/",
                        content: []
                    },
                ]
            }, {
                key: "continuous-integration",
                title: "Continuous Integration",
                link: "/destinations/continuous-integration/",
                content: [
                    {
                        key: "appcenter",
                        title: "Visual Studio App Center",
                        link: "/destinations/continuous-integration/appcenter/",
                        content: []
                    },
                ]
            }, {
                key: "crm",
                title: "CRM",
                link: "/destinations/crm/",
                content: [
                    {
                        key: "delighted",
                        title: "Delighted",
                        link: "/destinations/crm/delighted/",
                        content: []
                    },
                    {
                        key: "hubspot",
                        title: "HubSpot",
                        link: "/destinations/crm/hubspot/",
                        content: []
                    },
                    {
                        key: "salesforce",
                        title: "Salesforce",
                        link: "/destinations/crm/salesforce/",
                        content: []
                    },
                    {
                        key: "variance",
                        title: "Variance",
                        link: "/destinations/crm/variance/",
                        content: []
                    }, {
                        key: "zendesk",
                        title: "Zendesk",
                        link: "/destinations/crm/zendesk/",
                        content: []
                    },
                ]
            }, {
                key: "customer-data-platform",
                title: "Customer Data Platforms",
                link: "/destinations/customer-data-platform/",
                content: [
                    {
                        key: "segment",
                        title: "Segment",
                        link: "/destinations/customer-data-platform/segment/",
                        content: []
                    },
                ]
            }, {
                key: "error-reporting",
                title: "Error Reporting",
                link: "/destinations/error-reporting/",
                content: [
                    {
                        key: "bugsnag",
                        title: "Bugsnag",
                        link: "/destinations/error-reporting/bugsnag/",
                        content: []
                    }, {
                        key: "sentry",
                        title: "Sentry",
                        link: "/destinations/error-reporting/sentry/",
                        content: []
                    },
                ]
            }, {
                key: "marketing",
                title: "Marketing",
                link: "/destinations/marketing/",
                content: [
                    {
                        key: "activecampaign",
                        title: "ActiveCampaign",
                        link: "/destinations/marketing/activecampaign/",
                        content: []
                    },
                    {
                        key: "adroll",
                        title: "AdRoll",
                        link: "/destinations/marketing/adroll/",
                        content: []
                    },
                    {
                        key: "airship",
                        title: "Airship",
                        link: "/destinations/marketing/airship/",
                        content: []
                    },
                    {
                        key: "appcues",
                        title: "Appcues",
                        link: "/destinations/marketing/appcues/",
                        content: []
                    }, {
                        key: "attentive-tag",
                        title: "Attentive Tag",
                        link: "/destinations/marketing/attentive-tag/",
                        content: []
                    }, {
                        key: "autopilot",
                        title: "Autopilot",
                        link: "/destinations/marketing/autopilot/",
                        content: []
                    }, {
                        key: "blueshift",
                        title: "Blueshift",
                        link: "/destinations/marketing/blueshift/",
                        content: []
                    }, {
                        key: "braze",
                        title: "Braze",
                        link: "/destinations/marketing/braze/",
                        content: []
                    }, {
                        key: "clevertap",
                        title: "CleverTap",
                        link: "/destinations/marketing/clevertap/",
                        content: []
                    }, {
                        key: "customer.io",
                        title: "Customer.io",
                        link: "/destinations/marketing/customer.io/",
                        content: []
                    }, {
                        key: "drip",
                        title: "Drip",
                        link: "/destinations/marketing/drip/",
                        content: [
                            {
                                key: "setting-up-drip-in-rudderstack",
                                title: "Setting Up Drip in RudderStack",
                                link: "/destinations/marketing/drip/setting-up-drip-in-rudderstack/",
                                content: []
                            }, {
                                key: "cloud-mode",
                                title: "Cloud Mode",
                                link: "/destinations/marketing/drip/drip-cloud-mode/",
                                content: []
                            }, {
                                key: "device-mode",
                                title: "Device Mode",
                                link: "/destinations/marketing/drip/drip-web-device-mode/",
                                content: []
                            },
                        ]
                    }, {
                        key: "gainsight",
                        title: "Gainsight",
                        link: "/destinations/marketing/gainsight/",
                        content: []
                    }, {
                        key: "gainsight-px",
                        title: "Gainsight PX",
                        link: "/destinations/marketing/gainsight-px/",
                        content: []
                    }, {
                        key: "iterable",
                        title: "Iterable",
                        link: "/destinations/marketing/iterable/",
                        content: []
                    }, {
                        key: "klaviyo",
                        title: "Klaviyo",
                        link: "/destinations/marketing/klaviyo/",
                        content: []
                    }, {
                        key: "leanplum",
                        title: "Leanplum",
                        link: "/destinations/marketing/leanplum/",
                        content: []
                    }, {
                        key: "mailchimp",
                        title: "Mailchimp",
                        link: "/destinations/marketing/mailchimp/",
                        content: []
                    }, {
                        key: "marketo",
                        title: "Marketo",
                        link: "/destinations/marketing/marketo/",
                        content: []
                    }, {
                        key: "marketo-lead-import",
                        title: "Marketo Lead Import",
                        link: "/destinations/marketing/marketo-lead-import/",
                        content: []
                    }, {
                        key: "moengage",
                        title: "MoEngage",
                        link: "/destinations/marketing/moengage/",
                        content: []
                    }, {
                        key: "ometria",
                        title: "Ometria",
                        link: "/destinations/marketing/ometria/",
                        content: []
                    }, {
                        key: "post-affiliate-pro",
                        title: "Post Affiliate Pro",
                        link: "/destinations/marketing/post-affiliate-pro/",
                        content: []
                    }, {
                        key: "qualtrics",
                        title: "Qualtrics",
                        link: "/destinations/marketing/qualtrics/",
                        content: []
                    }, {
                        key: "revenue-cat",
                        title: "Revenue Cat",
                        link: "/destinations/marketing/revenue-cat/",
                        content: []
                    }, {
                        key: "sfmc",
                        title: "Salesforce Marketing Cloud",
                        link: "/destinations/marketing/sfmc/",
                        content: []
                    }, {
                        key: "pardot",
                        title: "Salesforce Pardot",
                        link: "/destinations/marketing/pardot/",
                        content: []
                    }, {
                        key: "sendgrid",
                        title: "SendGrid",
                        link: "/destinations/marketing/sendgrid/",
                        content: []
                    }, {
                        key: "userlist",
                        title: "Userlist",
                        link: "/destinations/marketing/userlist/",
                        content: []
                    }, {
                        key: "webengage",
                        title: "WebEngage",
                        link: "/destinations/marketing/webengage/",
                        content: []
                    },
                ]
            }, {
                key: "productivity",
                title: "Productivity",
                link: "/destinations/productivity/",
                content: [
                    {
                        key: "google-sheets",
                        title: "Google Sheets",
                        link: "/destinations/productivity/google-sheets/",
                        content: []
                    },
                ]
            }, {
                key: "storage-platforms",
                title: "Storage Platforms",
                link: "/destinations/storage-platforms/",
                content: [
                    {
                        key: "amazon-s3",
                        title: "Amazon S3",
                        link: "/destinations/storage-platforms/amazon-s3/",
                        content: []
                    },
                    {
                        key: "microsoft-azure-blob-storage",
                        title: "Azure Blob Storage",
                        link: "/destinations/storage-platforms/microsoft-azure-blob-storage/",
                        content: []
                    },
                    {
                        key: "digitalocean-spaces",
                        title: "DigitalOcean Spaces",
                        link: "/destinations/storage-platforms/digitalocean-spaces/",
                        content: []
                    },
                    {
                        key: "google-cloud-storage",
                        title: "Google Cloud Storage",
                        link: "/destinations/storage-platforms/google-cloud-storage/",
                        content: []
                    }, {
                        key: "minio",
                        title: "MinIO",
                        link: "/destinations/storage-platforms/minio/",
                        content: []
                    }, {
                        key: "redis",
                        title: "Redis",
                        link: "/destinations/storage-platforms/redis/",
                        content: []
                    },
                ]
            }, {
                key: "streaming-platforms",
                title: "Streaming Platforms",
                link: "/destinations/streaming-platforms/",
                content: [
                    {
                        key: "amazon-eventbridge",
                        title: "Amazon EventBridge",
                        link: "/destinations/streaming-platforms/amazon-eventbridge/",
                        content: []
                    },
                    {
                        key: "amazon-kinesis",
                        title: "Amazon Kinesis",
                        link: "/destinations/streaming-platforms/amazon-kinesis/",
                        content: []
                    },
                    {
                        key: "amazon-kinesis-firehose",
                        title: "Amazon Firehose",
                        link: "/destinations/streaming-platforms/amazon-kinesis-firehose/",
                        content: []
                    },
                    {
                        key: "kafka",
                        title: "Apache Kafka",
                        link: "/destinations/streaming-platforms/kafka/",
                        content: []
                    }, {
                        key: "azure-event-hubs",
                        title: "Azure Event Hubs",
                        link: "/destinations/streaming-platforms/azure-event-hubs/",
                        content: []
                    }, {
                        key: "biquery-stream",
                        title: "BigQuery Stream",
                        link: "/destinations/streaming-platforms/bigquery-stream/",
                        content: []
                    }, {
                        key: "confluent-cloud",
                        title: "Confluent Cloud",
                        link: "/destinations/streaming-platforms/confluent-cloud/",
                        content: []
                    }, {
                        key: "google-pub-sub",
                        title: "Google Pub/Sub",
                        link: "/destinations/streaming-platforms/google-pub-sub/",
                        content: []
                    },
                ]
            }, {
                key: "tag-managers",
                title: "Tag Managers",
                link: "/destinations/tag-managers/",
                content: [
                    {
                        key: "google-tag-manager",
                        title: "Google Tag Manager",
                        link: "/destinations/tag-managers/google-tag-manager/",
                        content: []
                    },
                ]
            },
        ]
    }, {
        key: "data-warehouse-integrations",
        title: "Warehouse Destinations",
        link: "/data-warehouse-integrations/",
        content: [
            {
                key: "amazon-redshift",
                title: "Amazon Redshift",
                link: "/data-warehouse-integrations/amazon-redshift/",
                content: []
            },
            {
                key: "s3-datalake",
                title: "Amazon S3 Data Lake",
                link: "/data-warehouse-integrations/s3-datalake/",
                content: []
            },
            {
                key: "azure-synapse",
                title: "Azure Synapse",
                link: "/data-warehouse-integrations/azure-synapse/",
                content: []
            },
            {
                key: "azure-datalake",
                title: "Azure Data Lake ",
                link: "/data-warehouse-integrations/azure-datalake/",
                content: []
            }, {
                key: "clickhouse",
                title: "ClickHouse",
                link: "/data-warehouse-integrations/clickhouse/",
                content: []
            }, {
                key: "delta-lake",
                title: "Databricks Delta Lake",
                link: "/data-warehouse-integrations/delta-lake/",
                content: []
            }, {
                key: "google-bigquery",
                title: "Google BigQuery",
                link: "/data-warehouse-integrations/google-bigquery/",
                content: []
            }, {
                key: "gcs-datalake",
                title: "Google Cloud Storage Data Lake ",
                link: "/data-warehouse-integrations/gcs-datalake/",
                content: []
            }, {
                key: "microsoft-sql-server",
                title: "Microsoft SQL Server",
                link: "/data-warehouse-integrations/microsoft-sql-server/",
                content: []
            }, {
                key: "postgresql",
                title: "PostgreSQL",
                link: "/data-warehouse-integrations/postgresql/",
                content: []
            }, {
                key: "snowflake",
                title: "Snowflake",
                link: "/data-warehouse-integrations/snowflake/",
                content: []
            }, {
                key: "warehouse-schemas",
                title: "Warehouse Schema",
                link: "/data-warehouse-integrations/warehouse-schemas/",
                content: []
            }, {
                key: "warehouse-faqs",
                title: "FAQ",
                link: "/data-warehouse-integrations/warehouse-faqs/",
                content: []
            },
        ]
    }, {
        key: "webhooks",
        title: "Webhooks",
        link: "/destinations/webhooks/",
        content: []
    },

    // Features section


    {
        key: "transformations",
        title: "Transformations",
        sectionTitle: "Features",
        link: "/transformations/",
        content: [
            {
                key: "rudderstack-transformation-api",
                title: "Transformations API",
                link: "/transformations/rudderstack-transformation-api/",
                content: []
            }, {
                key: "faq",
                title: "FAQ",
                link: "/transformations/faq/",
                content: []
            },
        ]
    }, {
        key: "data-governance",
        title: "Data Governance",
        link: "/data-governance/",
        content: [
            {
                key: "rudderstack-data-governance-api",
                title: "Data Governance API",
                link: "/data-governance/rudderstack-data-governance-api/",
                content: []
            }, {
                key: "ruddertyper",
                title: "RudderTyper",
                link: "/data-governance/ruddertyper/",
                content: []
            }, {
                key: "tracking-plans",
                title: "Tracking Plans",
                link: "/data-governance/tracking-plans/",
                content: [
                    {
                        key: "tracking-plan-spreadsheet",
                        title: "Tracking Plan Spreadsheet",
                        link: "/data-governance/tracking-plans/tracking-plan-spreadsheet/",
                        content: []
                    },
                ]
            },
        ]
    }, {
        key: "identity-resolution",
        title: "Identity Resolution",
        link: "/identity-resolution/",
        content: []
    },


    // API section

    {
        key: "rudderstack-api",
        title: "RudderStack API Overview",
        sectionTitle: "API",
        link: "/rudderstack-api/",
        content: []
    }, {
        key: "personal-access-tokens",
        title: "Personal Access Tokens",
        link: "/rudderstack-api/personal-access-tokens/",
        content: []
    }, {
        key: "api-specification",
        title: "API Specification",
        link: "/rudderstack-api/api-specification/",
        content: [
            {
                key: "rudderstack-events-specification",
                title: "RudderStack Events Specification",
                link: "/rudderstack-api/api-specification/rudderstack-spec/",
                content: [
                    {
                        key: "identify",
                        title: "Identify",
                        link: "/rudderstack-api/api-specification/rudderstack-spec/identify/",
                        content: []
                    },
                    {
                        key: "page",
                        title: "Page",
                        link: "/rudderstack-api/api-specification/rudderstack-spec/page/",
                        content: []
                    },
                    {
                        key: "screen",
                        title: "Screen",
                        link: "/rudderstack-api/api-specification/rudderstack-spec/screen/",
                        content: []
                    },
                    {
                        key: "track",
                        title: "Track",
                        link: "/rudderstack-api/api-specification/rudderstack-spec/track/",
                        content: []
                    }, {
                        key: "group",
                        title: "Group",
                        link: "/rudderstack-api/api-specification/rudderstack-spec/group/",
                        content: []
                    }, {
                        key: "alias",
                        title: "Alias",
                        link: "/rudderstack-api/api-specification/rudderstack-spec/alias/",
                        content: []
                    }, {
                        key: "common-fields",
                        title: "Common Fields",
                        link: "/rudderstack-api/api-specification/rudderstack-spec/common-fields/",
                        content: []
                    },
                ]
            }, {
                key: "rudderstack-ecommerce-events-specification",
                title: "E-commerce Events",
                link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/",
                content: [
                    {
                        key: "browsing",
                        title: "Browsing",
                        link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/browsing/",
                        content: []
                    },
                    {
                        key: "promotions",
                        title: "Promotions",
                        link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/promotions/",
                        content: []
                    },
                    {
                        key: "ordering",
                        title: "Ordering",
                        link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/ordering/",
                        content: []
                    },
                    {
                        key: "coupons",
                        title: "Coupons",
                        link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/coupons/",
                        content: []
                    }, {
                        key: "wishlisting",
                        title: "Wishlist",
                        link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/wishlisting/",
                        content: []
                    }, {
                        key: "sharing",
                        title: "Sharing",
                        link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/sharing/",
                        content: []
                    }, {
                        key: "reviewing",
                        title: "Reviewing",
                        link: "/rudderstack-api/api-specification/rudderstack-ecommerce-events-specification/reviewing/",
                        content: []
                    },
                ]
            }, {
                key: "application-lifecycle-events-spec",
                title: "Application Lifecycle Events",
                link: "/rudderstack-api/api-specification/application-lifecycle-events-spec/",
                content: []
            }, {
                key: "video-specification",
                title: "Video Events",
                link: "/rudderstack-api/api-specification/video-specification/",
                content: []
            },
        ]
    }, {
        key: "data-regulation-api",
        title: "Data Regulation API",
        link: "/rudderstack-api/data-regulation-api/",
        content: []
    }, {
        key: "http-api",
        title: "HTTP API",
        link: "/rudderstack-api/http-api/",
        content: []
    }, {
        key: "pixel-api-spec",
        title: "Pixel API",
        link: "/rudderstack-api/pixel-api-spec/",
        content: []
    }, {
        key: "test-api",
        title: "Test API",
        link: "/rudderstack-api/test-api/",
        content: []
    },


    // Guides section


    {
        key: "migration-guides",
        title: "Migration Guides",
        sectionTitle: "Guides",
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
        key: "resources",
        title: "Community",
        sectionTitle: "Resources",
        link: "/resources/",
        content: []
    }, {
        key: "faqs",
        title: "FAQ",
        link: "/resources/faqs/",
        content: []
    }, {
        key: "rudderstack-architecture",
        title: "Architecture",
        link: "/resources/rudderstack-architecture/",
        content: []
    }, {
        key: "glossary",
        title: "Glossary",
        // sectionTitle: "Inner Section Title 2",
        link: "/resources/glossary/",
        content: []
    },


];
