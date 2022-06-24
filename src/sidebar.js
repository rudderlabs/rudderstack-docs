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
    link: `/tmp-get-started/`,
    content: []
  },
  {
    key: "quickstart",
    title: "Quickstart",
    link: `/tmp-get-started/quickstart/`,
    content: []
  },
  {
    key: "rudderstack-cloud",
    title: "RudderStack Cloud",
    link: `/tmp-get-started/rudderstack-cloud/`,
    content: []
  },


  {
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
    key: "sdk-faqs",
    title: "SDK FAQs",
    link: "/stream-sources/rudderstack-sdk-integration-guides/sdk-faqs/",
    content: []
  }, {
    title: "SDKs",
    link: "/sources/sdks/",
    content: [
      {
        key: "rudderstack-javascript-sdk",
        title: "JavaScript",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/",
        content: [
          {
            key: "quick-start-guide",
            title: "Quick Start Guide",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/quick-start-guide/",
            content: []
          },
          {
            key: "javascript-sdk-enhancements",
            title: "JavaScript SDK Enhancements",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/javascript-sdk-enhancements/",
            content: []
          },
          {
            key: "data-storage-cookies",
            title: "Data Storage in Cookies",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/data-storage-cookies/",
            content: []
          },
          {
            key: "querystring-api",
            title: "Querystring API",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/querystring-api/",
            content: []
          }, {
            key: "detecting-adblocked-pages",
            title: "Detecting Ad-blocked Pages",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/detecting-adblocked-pages/",
            content: []
          }, {
            key: "version-migration-guide",
            title: "Version Migration Guide",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/version-migration-guide/",
            content: []
          }, {
            key: "consent-managers",
            title: "Consent Managers",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/consent-managers/",
            content: [
              {
                key: "onetrust",
                title: "OneTrust",
                link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/consent-managers/onetrust/",
                content: []
              },
            ]
          }, {
            key: "js-sdk-faqs",
            title: "JavaScript SDK FAQs",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/js-sdk-faqs/",
            content: []
          },
        ]
      },

      {
        key: "rudderstack-android-sdk",
        title: "Android",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-android-sdk/",
        content: [
          {
            key: "add-an-application-class-to-you-android-application",
            title: "Adding Application Class",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-android-sdk/add-an-application-class-to-you-android-application/",
            content: []
          }, {
            key: "flushing-events-periodically",
            title: "Flushing Events",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-android-sdk/flushing-events-periodically/",
            content: []
          },
        ]
      },

      {
        key: "rudderstack-ios-sdk",
        title: "iOS",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk/",
        content: [
          {
            key: "ios-v2",
            title: "iOS v2",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk/ios-v2/",
            content: []
          }, {
            key: "tvOS",
            title: "tvOS",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk/tvOS/",
            content: []
          }, {
            key: "macos",
            title: "macOS",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk/macos/",
            content: []
          }, {
            key: "watchOs",
            title: "watchOS",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk/watchOS/",
            content: []
          },
        ]
      },
      {
        key: "rudderstack-unity-sdk",
        title: "Unity",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-unity-sdk/",
        content: []
      }, {
        key: "rudderstack-react-native-sdk",
        title: "React Native",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-react-native-sdk/",
        content: []
      }, {
        key: "rudderstack-flutter-sdk",
        title: "Flutter",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-flutter-sdk/",
        content: [
          {
            key: "flutter-v2",
            title: "Flutter SDK v2",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-flutter-sdk/flutter-v2/",
            content: []
          }, {
            key: "flutter-v1",
            title: "Flutter SDK v1",
            link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-flutter-sdk/flutter-v1/",
            content: []
          },
        ]
      }, {
        key: "rudderstack-cordova-sdk",
        title: "Cordova",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-cordova-sdk/",
        content: []
      }, {
        key: "rudderstack-amp-analytics",
        title: "AMP Analytics",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-amp-analytics/",
        content: []
      }, {
        key: "rudderstack-java-sdk",
        title: "Java",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-java-sdk/",
        content: []
      }, {
        key: "rudderstack-python-sdk",
        title: "Python",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-python-sdk/",
        content: []
      }, {
        key: "rudderstack-rust-sdk",
        title: "Rust",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-rust-sdk/",
        content: []
      }, {
        key: "rudderstack-node-sdk",
        title: "Node.js",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-node-sdk/",
        content: []
      }, {
        key: "rudderstack-go-sdk",
        title: "Go",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-go-sdk/",
        content: []
      }, {
        key: "rudderstack-ruby-sdk",
        title: "Ruby",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-ruby-sdk/",
        content: []
      }, {
        key: "rudderstack-dotnet-sdk",
        title: ".NET",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-dotnet-sdk/",
        content: []
      }, {
        key: "rudderstack-php-sdk",
        title: "PHP",
        link: "/stream-sources/rudderstack-sdk-integration-guides/rudderstack-php-sdk/",
        content: []
      }, {
        key: "event-filtering",
        title: "Client-side Event Filtering",
        link: "/stream-sources/rudderstack-sdk-integration-guides/event-filtering/",
        content: []
      },

    ],





  }, {
    key: "cloud-apps",
    title: "Cloud Apps",
    link: "/stream-sources/",
    content: [
      {
        key: "webhook-source",
        title: "Webhook Source",
        link: "/stream-sources/webhook-source/",
        content: []
      }, {
        key: "braze-currents",
        title: "Braze",
        link: "/stream-sources/braze-currents/",
        content: []
      }, {
        key: "appcenter",
        title: "App Center",
        link: "/stream-sources/appcenter/",
        content: []
      }, {
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
    ],
  },
  {
    key: "cloud-extract-sources",
    title: "Cloud Extract",
    link: "/cloud-extract-sources/",
    content: [
      {
        key: "activecampaign",
        title: "ActiveCampaign",
        link: "/cloud-extract-sources/activecampaign/",
        content: []
      },
      {
        key: "bing-ads",
        title: "Bing Ads",
        link: "/cloud-extract-sources/bing-ads/",
        content: []
      },
      {
        key: "chargebee",
        title: "Chargebee",
        link: "/cloud-extract-sources/chargebee/",
        content: []
      },
      {
        key: "facebook-ads",
        title: "Facebook Ads",
        link: "/cloud-extract-sources/facebook-ads/",
        content: []
      }, {
        key: "freshdesk",
        title: "Freshdesk",
        link: "/cloud-extract-sources/freshdesk/",
        content: []
      }, {
        key: "google-adwords",
        title: "Google Ads (Adwords)",
        link: "/cloud-extract-sources/google-adwords/",
        content: []
      }, {
        key: "google-analytics",
        title: "Google Analytics",
        link: "/cloud-extract-sources/google-analytics/",
        content: []
      }, {
        key: "google-search-console",
        title: "Google Search Console",
        link: "/cloud-extract-sources/google-search-console/",
        content: []
      }, {
        key: "google-sheets",
        title: "Google Sheets",
        link: "/cloud-extract-sources/google-sheets/",
        content: []
      }, {
        key: "hubspot-v2",
        title: "HubSpot",
        link: "/cloud-extract-sources/hubspot-v2/",
        content: []
      }, {
        key: "intercom",
        title: "Intercom",
        link: "/cloud-extract-sources/intercom/",
        content: []
      }, {
        key: "intercom-v2",
        title: "Intercom v2",
        link: "/cloud-extract-sources/intercom-v2/",
        content: []
      }, {
        key: "mailchimp",
        title: "Mailchimp",
        link: "/cloud-extract-sources/mailchimp/",
        content: []
      }, {
        key: "mixpanel",
        title: "Mixpanel",
        link: "/cloud-extract-sources/mixpanel/",
        content: []
      }, {
        key: "marketo",
        title: "Marketo",
        link: "/cloud-extract-sources/marketo/",
        content: []
      }, {
        key: "netsuite",
        title: "NetSuite",
        link: "/cloud-extract-sources/netsuite/",
        content: []
      }, {
        key: "pipedrive",
        title: "Pipedrive",
        link: "/cloud-extract-sources/pipedrive/",
        content: []
      }, {
        key: "quickbooks",
        title: "QuickBooks",
        link: "/cloud-extract-sources/quickbooks/",
        content: []
      }, {
        key: "salesforce",
        title: "Salesforce",
        link: "/cloud-extract-sources/salesforce/",
        content: [
          {
            key: "schema-comparison-rudderstack-vs-segment",
            title: "Schema Comparison: Rudderstack Vs Segment",
            link: "/cloud-extract-sources/salesforce/schema-comparison-rudderstack-vs-segment/",
            content: []
          },
        ]
      }, {
        key: "salesforce-pardot",
        title: "Salesforce Pardot",
        link: "/cloud-extract-sources/salesforce-pardot/",
        content: []
      }, {
        key: "sendgrid",
        title: "Sendgrid",
        link: "/cloud-extract-sources/sendgrid/",
        content: []
      }, {
        key: "stripe",
        title: "Stripe",
        link: "/cloud-extract-sources/stripe/",
        content: []
      }, {
        key: "xero",
        title: "Xero",
        link: "/cloud-extract-sources/xero/",
        content: []
      }, {
        key: "zendesk",
        title: "Zendesk",
        link: "/cloud-extract-sources/zendesk/",
        content: []
      }, {
        key: "zendesk-chat",
        title: "Zendesk Chat",
        link: "/cloud-extract-sources/zendesk-chat/",
        content: []
      }, {
        key: "common-settings",
        title: "Common Settings",
        link: "/cloud-extract-sources/common-settings/",
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
    link: "/tmp-destinations/streaming-destinations/",
    content: [
      {
        key: "algolia-insights",
        title: "Algolia Insights",
        sectionTitle: "A/B Testing & Personalization",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/algolia-insights/",
        content: []
      },
      {
        key: "candu",
        title: "Candu",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/candu/",
        content: []
      },
      {
        key: "google-optimize",
        title: "Google Optimize",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/google-optimize/",
        content: []
      },
      {
        key: "launchdarkly",
        title: "LaunchDarkly",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/launchdarkly/",
        content: []
      }, {
        key: "monetate",
        title: "Monetate",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/monetate/",
        content: []
      }, {
        key: "optimizely-full-stack",
        title: "Optimizely Full Stack",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/optimizely-full-stack/",
        content: []
      }, {
        key: "optimizely-web",
        title: "Optimizely Web",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/optimizely-web/",
        content: []
      }, {
        key: "splitio",
        title: "Split.io",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/splitio/",
        content: []
      }, {
        key: "statsig",
        title: "Statsig",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/statsig/",
        content: []
      }, {
        key: "vwo-beta-visual-website-optimizer",
        title: "VWO (Visual Website Optimizer)",
        link: "/tmp-destinations/streaming-destinations/testing-and-personalization/vwo-beta-visual-website-optimizer/",
        content: []
      },
      {
        key: "bingads",
        title: "Bing Ads",
        sectionTitle: "Advertising",
        link: "/tmp-destinations/streaming-destinations/advertising/bingads/",
        content: []
      },
      {
        key: "criteo",
        title: "Criteo",
        link: "/tmp-destinations/streaming-destinations/advertising/criteo/",
        content: []
      },
      {
        key: "dcm-floodlight",
        title: "DCM Floodlight",
        link: "/tmp-destinations/streaming-destinations/advertising/dcm-floodlight/",
        content: [
          {
            key: "setting-up-dcm-floodlight-in-rudderstack",
            title: "Setting up DCM Floodlight",
            link: "/tmp-destinations/streaming-destinations/advertising/dcm-floodlight/setting-up-dcm-floodlight-in-rudderstack/",
            content: []
          }, {
            key: "dcm-floodlight-cloud-mode",
            title: "Cloud Mode",
            link: "/tmp-destinations/streaming-destinations/advertising/dcm-floodlight/dcm-floodlight-cloud-mode/",
            content: []
          }, {
            key: "dcm-floodlight-device-mode",
            title: "Device Mode",
            link: "/tmp-destinations/streaming-destinations/advertising/dcm-floodlight/dcm-floodlight-device-mode/",
            content: []
          },
        ]
      },
      {
        key: "facebook-app-events",
        title: "Facebook App Events",
        link: "/tmp-destinations/streaming-destinations/advertising/facebook-app-events/",
        content: []
      }, {
        key: "fb-custom-audience",
        title: "Facebook Custom Audience",
        link: "/tmp-destinations/streaming-destinations/advertising/fb-custom-audience/",
        content: []
      }, {
        key: "fb-pixel",
        title: "Facebook Pixel",
        link: "/tmp-destinations/streaming-destinations/advertising/fb-pixel/",
        content: []
      }, {
        key: "g-ads-gtag",
        title: "Google Ads (gtag.js)",
        link: "/tmp-destinations/streaming-destinations/advertising/g-ads-gtag/",
        content: []
      }, {
        key: "google-adwords-enhanced-conversions",
        title: "Google Ads Enhanced Conversions",
        link: "/tmp-destinations/streaming-destinations/advertising/google-adwords-enhanced-conversions/",
        content: []
      }, {
        key: "google-adwords-remarketing-list",
        title: "Google Ads Remarketing Lists (Customer Match)",
        link: "/tmp-destinations/streaming-destinations/advertising/google-adwords-remarketing-list/",
        content: []
      }, {
        key: "linkedin-insight-tag",
        title: "LinkedIn Insight Tag",
        link: "/tmp-destinations/streaming-destinations/advertising/linkedin-insight-tag/",
        content: []
      }, {
        key: "lotame",
        title: "Lotame",
        link: "/tmp-destinations/streaming-destinations/advertising/lotame/",
        content: []
      }, {
        key: "pinterest-ads",
        title: "Pinterest Tag",
        link: "/tmp-destinations/streaming-destinations/advertising/pinterest-ads/",
        content: []
      }, {
        key: "reddit-pixel",
        title: "Reddit Pixel",
        link: "/tmp-destinations/streaming-destinations/advertising/reddit-pixel/",
        content: []
      }, {
        key: "snapchat-conversion",
        title: "Snapchat Conversion",
        link: "/tmp-destinations/streaming-destinations/advertising/snapchat-conversion/",
        content: []
      }, {
        key: "snap-pixel",
        title: "Snap Pixel",
        link: "/tmp-destinations/streaming-destinations/advertising/snap-pixel/",
        content: []
      }, {
        key: "tiktok-ads",
        title: "TikTok Ads",
        link: "/tmp-destinations/streaming-destinations/advertising/tiktok-ads/",
        content: []
      },
      {
        key: "yahoo-dsp",
        title: "Yahoo DSP",
        link: "/tmp-destinations/streaming-destinations/advertising/yahoo-dsp/",
        content: [],
      },
      {
        key: "adobe-analytics",
        title: "Adobe Analytics",
        sectionTitle: "Analytics",
        link: "/tmp-destinations/streaming-destinations/analytics/adobe-analytics/",
        content: [
          {
            key: "setting-up-adobe-analytics-in-rudderstack",
            title: "Setting Up Adobe Analytics in RudderStack",
            link: "/tmp-destinations/streaming-destinations/analytics/adobe-analytics/setting-up-adobe-analytics-in-rudderstack/",
            content: []
          },
          {
            key: "adobe-analytics-web-device-mode",
            title: "Web Device Mode Settings",
            link: "/tmp-destinations/streaming-destinations/analytics/adobe-analytics/adobe-analytics-web-device-mode/",
            content: []
          },
          {
            key: "adobe-analytics-mobile-device-mode",
            title: "Mobile Device Mode Settings",
            link: "/tmp-destinations/streaming-destinations/analytics/adobe-analytics/adobe-analytics-mobile-device-mode/",
            content: []
          },
          {
            key: "adobe-analytics-heartbeat",
            title: "Adobe Analytics Heartbeat Measurement",
            link: "/tmp-destinations/streaming-destinations/analytics/adobe-analytics/adobe-analytics-heartbeat/",
            content: []
          }, {
            key: "e-commerce-events",
            title: "E-commerce Events",
            link: "/tmp-destinations/streaming-destinations/analytics/adobe-analytics/e-commerce-events/",
            content: []
          },
        ]
      },
      {
        key: "amplitude",
        title: "Amplitude",
        link: "/tmp-destinations/streaming-destinations/analytics/amplitude/",
        content: []
      },
      {
        key: "aws-personalize",
        title: "AWS Personalize",
        link: "/tmp-destinations/streaming-destinations/analytics/aws-personalize/",
        content: []
      },
      {
        key: "chartbeat",
        title: "Chartbeat",
        link: "/tmp-destinations/streaming-destinations/analytics/chartbeat/",
        content: []
      }, {
        key: "firebase",
        title: "Firebase",
        link: "/tmp-destinations/streaming-destinations/analytics/firebase/",
        content: []
      }, {
        key: "fullstory",
        title: "FullStory",
        link: "/tmp-destinations/streaming-destinations/analytics/fullstory/",
        content: []
      }, {
        key: "google-analytics-ga",
        title: "Google Analytics",
        link: "/tmp-destinations/streaming-destinations/analytics/google-analytics-ga/",
        content: []
      }, {
        key: "google-analytics-4",
        title: "Google Analytics 4",
        link: "/tmp-destinations/streaming-destinations/analytics/google-analytics-4/",
        content: [
          {
            key: "setting-up-google-analytics-4-in-rudderstack",
            title: "Setting up Google Analytics 4",
            link: "/tmp-destinations/streaming-destinations/analytics/google-analytics-4/setting-up-google-analytics-4-in-rudderstack/",
            content: []
          }, {
            key: "google-analytics-4-cloud-mode",
            title: "Cloud Mode",
            link: "/tmp-destinations/streaming-destinations/analytics/google-analytics-4/google-analytics-4-cloud-mode/",
            content: []
          }, {
            key: "google-analytics-4-device-mode",
            title: "Device Mode",
            link: "/tmp-destinations/streaming-destinations/analytics/google-analytics-4/google-analytics-4-device-mode/",
            content: []
          },
        ]
      }, {
        key: "google-analytics-360",
        title: "Google Analytics 360",
        link: "/tmp-destinations/streaming-destinations/analytics/google-analytics-360/",
        content: []
      }, {
        key: "heap.io",
        title: "Heap.io",
        link: "/tmp-destinations/streaming-destinations/analytics/heap.io/",
        content: []
      }, {
        key: "hotjar",
        title: "Hotjar",
        link: "/tmp-destinations/streaming-destinations/analytics/hotjar/",
        content: []
      }, {
        key: "indicative",
        title: "Indicative",
        link: "/tmp-destinations/streaming-destinations/analytics/indicative/",
        content: []
      }, {
        key: "keen",
        title: "Keen.io",
        link: "/tmp-destinations/streaming-destinations/analytics/keen/",
        content: []
      }, {
        key: "kissmetrics",
        title: "Kissmetrics",
        link: "/tmp-destinations/streaming-destinations/analytics/kissmetrics/",
        content: []
      }, {
        key: "kubit",
        title: "Kubit",
        link: "/tmp-destinations/streaming-destinations/analytics/kubit/",
        content: []
      }, {
        key: "lytics",
        title: "Lytics",
        link: "/tmp-destinations/streaming-destinations/analytics/lytics/",
        content: []
      }, {
        key: "mixpanel",
        title: "Mixpanel",
        link: "/tmp-destinations/streaming-destinations/analytics/mixpanel/",
        content: []
      }, {
        key: "new-relic",
        title: "New Relic",
        link: "/tmp-destinations/streaming-destinations/analytics/new-relic/",
        content: []
      }, {
        key: "pendo",
        title: "Pendo",
        link: "/tmp-destinations/streaming-destinations/analytics/pendo/",
        content: []
      }, {
        key: "posthog",
        title: "PostHog",
        link: "/tmp-destinations/streaming-destinations/analytics/posthog/",
        content: []
      }, {
        key: "profitwell",
        title: "Profitwell",
        link: "/tmp-destinations/streaming-destinations/analytics/profitwell/",
        content: [
          {
            key: "profitwell-cloud-mode",
            title: "Cloud Mode",
            link: "/tmp-destinations/streaming-destinations/analytics/profitwell/profitwell-cloud-mode/",
            content: []
          }, {
            key: "profitwell-web-device-mode",
            title: "Device Mode",
            link: "/tmp-destinations/streaming-destinations/analytics/profitwell/profitwell-web-device-mode/",
            content: []
          },
        ]
      }, {
        key: "quantummetric",
        title: "Quantum Metric",
        link: "/tmp-destinations/streaming-destinations/analytics/quantummetric/",
        content: []
      }, {
        key: "singular",
        title: "Singular",
        link: "/tmp-destinations/streaming-destinations/analytics/singular/",
        content: [
              {
                key: "setting-up-singular-in-rudderstack",
                title: "Setting up Singular",
                link:
                  "/tmp-destinations/streaming-destinations/analytics/singular/setting-up-singular-in-rudderstack/",
                content: [],
              },
              {
                key: "singular-cloud-mode",
                title: "Cloud Mode",
                link:
                  "/tmp-destinations/streaming-destinations/analytics/singular/singular-cloud-mode/",
                content: [],
              },
              {
                key: "singular-device-mode",
                title: "Device Mode",
                link:
                  "/tmp-destinations/streaming-destinations/analytics/singular/singular-device-mode/",
                content: [],
              },
        ]
      },
      {
        key: "adjust",
        title: "Adjust",
        sectionTitle: "Attribution",
        link: "/tmp-destinations/streaming-destinations/attribution/adjust/",
        content: []
      },
      {
        key: "appsflyer",
        title: "AppsFlyer",
        link: "/tmp-destinations/streaming-destinations/attribution/appsflyer/",
        content: []
      },
      {
        key: "attribution",
        title: "Attribution",
        link: "/tmp-destinations/streaming-destinations/attribution/attribution/",
        content: []
      },
      {
        key: "branchio",
        title: "Branch",
        link: "/tmp-destinations/streaming-destinations/attribution/branchio/",
        content: []
      }, {
        key: "kochava",
        title: "Kochava",
        link: "/tmp-destinations/streaming-destinations/attribution/kochava/",
        content: []
      }, {
        key: "tvsquared",
        title: "TVSquared",
        link: "/tmp-destinations/streaming-destinations/attribution/tvsquared/",
        content: []
      },
      {
        key: "intercom",
        title: "Intercom",
        sectionTitle: "Business Messaging",
        link: "/tmp-destinations/streaming-destinations/business-messaging/intercom/",
        content: []
      }, {
        key: "kustomer",
        title: "Kustomer",
        link: "/tmp-destinations/streaming-destinations/business-messaging/kustomer/",
        content: []
      }, {
        key: "slack",
        title: "Slack",
        link: "/tmp-destinations/streaming-destinations/business-messaging/slack/",
        content: []
      }, {
        key: "trengo",
        title: "Trengo",
        link: "/tmp-destinations/streaming-destinations/business-messaging/trengo/",
        content: []
      },
      {
        key: "appcenter",
        title: "Visual Studio App Center",
        sectionTitle: "Continuous Integration",
        link: "/tmp-destinations/streaming-destinations/continuous-integration/appcenter/",
        content: []
      },
      {
        key: "delighted",
        title: "Delighted",
        sectionTitle: "CRM",
        link: "/tmp-destinations/streaming-destinations/crm/delighted/",
        content: []
      },
      {
        key: "hubspot",
        title: "HubSpot",
        link: "/tmp-destinations/streaming-destinations/crm/hubspot/",
        content: []
      },
      {
        key: "salesforce",
        title: "Salesforce",
        link: "/tmp-destinations/streaming-destinations/crm/salesforce/",
        content: []
      },
      {
        key: "variance",
        title: "Variance",
        link: "/tmp-destinations/streaming-destinations/crm/variance/",
        content: []
      }, {
        key: "zendesk",
        title: "Zendesk",
        link: "/tmp-destinations/streaming-destinations/crm/zendesk/",
        content: []
      },
      {
        key: "segment",
        title: "Segment",
        sectionTitle: "Customer Data Platform",
        link: "/tmp-destinations/streaming-destinations/customer-data-platform/segment/",
        content: []
      },
      {
        key: "bugsnag",
        title: "Bugsnag",
        sectionTitle: "Error Reporting",
        link: "/tmp-destinations/streaming-destinations/error-reporting/bugsnag/",
        content: []
      }, {
        key: "sentry",
        title: "Sentry",
        link: "/tmp-destinations/streaming-destinations/error-reporting/sentry/",
        content: []
      },
      {
        key: "activecampaign",
        title: "ActiveCampaign",
        sectionTitle: "Marketing",
        link: "/tmp-destinations/streaming-destinations/marketing/activecampaign/",
        content: []
      },
      {
        key: "adroll",
        title: "AdRoll",
        link: "/tmp-destinations/streaming-destinations/marketing/adroll/",
        content: []
      },
      {
        key: "airship",
        title: "Airship",
        link: "/tmp-destinations/streaming-destinations/marketing/airship/",
        content: []
      },
      {
        key: "appcues",
        title: "Appcues",
        link: "/tmp-destinations/streaming-destinations/marketing/appcues/",
        content: []
      }, {
        key: "attentive-tag",
        title: "Attentive Tag",
        link: "/tmp-destinations/streaming-destinations/marketing/attentive-tag/",
        content: []
      }, {
        key: "autopilot",
        title: "Autopilot",
        link: "/tmp-destinations/streaming-destinations/marketing/autopilot/",
        content: []
      }, {
        key: "blueshift",
        title: "Blueshift",
        link: "/tmp-destinations/streaming-destinations/marketing/blueshift/",
        content: []
      }, {
        key: "braze",
        title: "Braze",
        link: "/tmp-destinations/streaming-destinations/marketing/braze/",
        content: []
      }, {
        key: "clevertap",
        title: "CleverTap",
        link: "/tmp-destinations/streaming-destinations/marketing/clevertap/",
        content: []
      }, {
        key: "customer.io",
        title: "Customer.io",
        link: "/tmp-destinations/streaming-destinations/marketing/customer.io/",
        content: []
      }, {
        key: "drip",
        title: "Drip",
        link: "/tmp-destinations/streaming-destinations/marketing/drip/",
        content: [
          {
            key: "setting-up-drip-in-rudderstack",
            title: "Setting Up Drip in RudderStack",
            link: "/tmp-destinations/streaming-destinations/marketing/drip/setting-up-drip-in-rudderstack/",
            content: []
          }, {
            key: "cloud-mode",
            title: "Cloud Mode",
            link: "/tmp-destinations/streaming-destinations/marketing/drip/drip-cloud-mode/",
            content: []
          }, {
            key: "device-mode",
            title: "Device Mode",
            link: "/tmp-destinations/streaming-destinations/marketing/drip/drip-web-device-mode/",
            content: []
          },
        ]
      }, {
        key: "gainsight",
        title: "Gainsight",
        link: "/tmp-destinations/streaming-destinations/marketing/gainsight/",
        content: []
      }, {
        key: "gainsight-px",
        title: "Gainsight PX",
        link: "/tmp-destinations/streaming-destinations/marketing/gainsight-px/",
        content: []
      }, {
        key: "iterable",
        title: "Iterable",
        link: "/tmp-destinations/streaming-destinations/marketing/iterable/",
        content: []
      }, {
        key: "klaviyo",
        title: "Klaviyo",
        link: "/tmp-destinations/streaming-destinations/marketing/klaviyo/",
        content: []
      }, {
        key: "leanplum",
        title: "Leanplum",
        link: "/tmp-destinations/streaming-destinations/marketing/leanplum/",
        content: []
      }, {
        key: "mailchimp",
        title: "Mailchimp",
        link: "/tmp-destinations/streaming-destinations/marketing/mailchimp/",
        content: []
      }, {
        key: "marketo",
        title: "Marketo",
        link: "/tmp-destinations/streaming-destinations/marketing/marketo/",
        content: []
      }, {
        key: "marketo-lead-import",
        title: "Marketo Lead Import",
        link: "/tmp-destinations/streaming-destinations/marketing/marketo-lead-import/",
        content: []
      }, {
        key: "moengage",
        title: "MoEngage",
        link: "/tmp-destinations/streaming-destinations/marketing/moengage/",
        content: []
      }, {
        key: "ometria",
        title: "Ometria",
        link: "/tmp-destinations/streaming-destinations/marketing/ometria/",
        content: []
      }, {
        key: "post-affiliate-pro",
        title: "Post Affiliate Pro",
        link: "/tmp-destinations/streaming-destinations/marketing/post-affiliate-pro/",
        content: []
      }, {
        key: "qualtrics",
        title: "Qualtrics",
        link: "/tmp-destinations/streaming-destinations/marketing/qualtrics/",
        content: []
      }, {
        key: "revenue-cat",
        title: "Revenue Cat",
        link: "/tmp-destinations/streaming-destinations/marketing/revenue-cat/",
        content: []
      }, {
        key: "sfmc",
        title: "Salesforce Marketing Cloud",
        link: "/tmp-destinations/streaming-destinations/marketing/sfmc/",
        content: []
      }, {
        key: "pardot",
        title: "Salesforce Pardot",
        link: "/tmp-destinations/streaming-destinations/marketing/pardot/",
        content: []
      }, {
        key: "sendgrid",
        title: "SendGrid",
        link: "/tmp-destinations/streaming-destinations/marketing/sendgrid/",
        content: []
      }, {
        key: "userlist",
        title: "Userlist",
        link: "/tmp-destinations/streaming-destinations/marketing/userlist/",
        content: []
      }, {
        key: "webengage",
        title: "WebEngage",
        link: "/tmp-destinations/streaming-destinations/marketing/webengage/",
        content: []
      },
      {
        key: "google-sheets",
        title: "Google Sheets",
        sectionTitle: "Productivity",
        link: "/tmp-destinations/streaming-destinations/productivity/google-sheets/",
        content: []
      },
      {
        key: "amazon-s3",
        title: "Amazon S3",
        sectionTitle: "Storage Platforms",
        link: "/tmp-destinations/streaming-destinations/storage-platforms/amazon-s3/",
        content: []
      },
      {
        key: "microsoft-azure-blob-storage",
        title: "Azure Blob Storage",
        link: "/tmp-destinations/streaming-destinations/storage-platforms/microsoft-azure-blob-storage/",
        content: []
      },
      {
        key: "digitalocean-spaces",
        title: "DigitalOcean Spaces",
        link: "/tmp-destinations/streaming-destinations/storage-platforms/digitalocean-spaces/",
        content: []
      },
      {
        key: "google-cloud-storage",
        title: "Google Cloud Storage",
        link: "/tmp-destinations/streaming-destinations/storage-platforms/google-cloud-storage/",
        content: []
      }, {
        key: "minio",
        title: "MinIO",
        link: "/tmp-destinations/streaming-destinations/storage-platforms/minio/",
        content: []
      }, {
        key: "redis",
        title: "Redis",
        link: "/tmp-destinations/streaming-destinations/storage-platforms/redis/",
        content: []
      },
      {
        key: "amazon-eventbridge",
        title: "Amazon EventBridge",
        sectionTitle: "Streaming Platforms",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/amazon-eventbridge/",
        content: []
      },
      {
        key: "amazon-kinesis",
        title: "Amazon Kinesis",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/amazon-kinesis/",
        content: []
      },
      {
        key: "amazon-kinesis-firehose",
        title: "Amazon Firehose",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/amazon-kinesis-firehose/",
        content: []
      },
      {
        key: "kafka",
        title: "Apache Kafka",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/kafka/",
        content: []
      }, {
        key: "azure-event-hubs",
        title: "Azure Event Hubs",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/azure-event-hubs/",
        content: []
      }, {
        key: "biquery-stream",
        title: "BigQuery Stream",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/bigquery-stream/",
        content: []
      }, {
        key: "confluent-cloud",
        title: "Confluent Cloud",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/confluent-cloud/",
        content: []
      }, {
        key: "google-pub-sub",
        title: "Google Pub/Sub",
        link: "/tmp-destinations/streaming-destinations/streaming-platforms/google-pub-sub/",
        content: []
      },
      {
        key: "google-tag-manager",
        title: "Google Tag Manager",
        sectionTitle: "Tag Managers",
        link: "/tmp-destinations/streaming-destinations/tag-managers/google-tag-manager/",
        content: []
      },
    ]
  },
  {
    key: "data-warehouse-integrations",
    title: "Warehouse Destinations",
    link: "/tmp-destinations/warehouse-destinations/",
    content: [
      {
        key: "warehouse-schemas",
        title: "Warehouse Schema",
        link: "/tmp-destinations/warehouse-destinations/warehouse-schema/",
        content: []
      },
      {
        key: "warehouse-schemas",
        title: "FAQ",
        link: "/tmp-destinations/warehouse-destinations/faq/",
        content: []
      },
      {
        key: "amazon-redshift",
        title: "Amazon Redshift",
        sectionTitle: "Warehouse Integrations",
        link: "/tmp-destinations/warehouse-destinations/redshift/",
        content: []
      },
      {
        key: "s3-datalake",
        title: "Amazon S3 Data Lake",
        link: "/tmp-destinations/warehouse-destinations/s3-datalake/",
        content: []
      },
      {
        key: "azure-synapse",
        title: "Azure Synapse",
        link: "/tmp-destinations/warehouse-destinations/azure-synapse/",
        content: []
      },
      {
        key: "azure-datalake",
        title: "Azure Data Lake ",
        link: "/tmp-destinations/warehouse-destinations/azure-datalake/",
        content: []
      }, {
        key: "clickhouse",
        title: "ClickHouse",
        link: "/tmp-destinations/warehouse-destinations/clickhouse/",
        content: []
      }, {
        key: "delta-lake",
        title: "Databricks Delta Lake",
        link: "/tmp-destinations/warehouse-destinations/delta-lake/",
        content: []
      }, {
        key: "google-bigquery",
        title: "Google BigQuery",
        link: "/tmp-destinations/warehouse-destinations/bigquery/",
        content: []
      }, {
        key: "gcs-datalake",
        title: "Google Cloud Storage Data Lake ",
        link: "/tmp-destinations/warehouse-destinations/gcs-datalake/",
        content: []
      }, {
        key: "microsoft-sql-server",
        title: "Microsoft SQL Server",
        link: "/tmp-destinations/warehouse-destinations/sql-server/",
        content: []
      }, {
        key: "postgresql",
        title: "PostgreSQL",
        link: "/tmp-destinations/warehouse-destinations/postgresql/",
        content: []
      }, {
        key: "snowflake",
        title: "Snowflake",
        link: "/tmp-destinations/warehouse-destinations/snowflake/",
        content: []
      },
    ]
  },
  {
    key: "webhooks",
    title: "Webhooks",
    link: "/tmp-destinations/webhooks/",
    content: []
  },
  {
    key: "rudderstack-connection-modes",
    title: "Connection Modes: Cloud Mode vs. Device Mode",
    link: "/tmp-destinations/rudderstack-connection-modes/",
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
  },
  {
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
  },
  {
    key: "personal-access-tokens",
    title: "Personal Access Tokens",
    link: "/rudderstack-api/personal-access-tokens/",
    content: []
  },
  {
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
  },
  {
    key: "data-regulation-api",
    title: "Data Regulation API",
    link: "/rudderstack-api/data-regulation-api/",
    content: []
  },
  {
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
