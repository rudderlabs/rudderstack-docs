---
description: >-
  Here is how you can quickly and easily get Rudderstack up and running in your Gatsby application.
---

# How to Integrate Rudderstack with a Gatsby Website

Here is how you can quickly and easily get Rudderstack up and running in your Gatsby application.

Questions? Please join our [Slack channel](https://resources.rudderstack.com/join-rudderstack-slack) or read about us on [Product Hunt](https://www.producthunt.com/posts/rudderstack).

# Why Use This plugin

This plugin makes it easy to integrate your Gatsby website with the Rudderstack API and easily track events.

# Key Features

- use multiple write keys (one for prod env, another optional one for dev)
- disable page view tracking (just in case you want to add it later manually)
- up to date (Rudderstack team maintained)

## Install

- NPM: `$ npm install --save gatsby-plugin-rudderstack`
- YARN: `$ yarn add gatsby-plugin-rudderstack`

# [](https://github.com/rudderlabs/gatsby-plugin-rudderstack/blob/master/README.md#setup) Setup

## [](https://github.com/rudderlabs/gatsby-plugin-rudderstack/blob/master/README.md#step-1-configure-gatsby) Step 1: Configure Your Gatsby Config File

In your gatsby-config.js file:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-rudderstack`,
    options: {
      // your rudderstack write key for your production environment
      // when process.env.NODE_ENV === 'production'
      // required; non-empty string
      //NOTE: Do not commit this to git. Process from env.
      prodKey: `RUDDERSTACK_PRODUCTION_WRITE_KEY`,

      // if you have a development env for your rudderstack account, paste that key here
      // when process.env.NODE_ENV === 'development'
      // optional; non-empty string
      //NOTE: Do not commit this to git. Process from env.
      devKey: `RUDDERSTACK_DEV_WRITE_KEY`,

      // boolean (defaults to false) on whether you want
      // to include analytics.page() automatically
      // if false, see below on how to track pageviews manually
      trackPage: false,

      // number (defaults to 50); time to wait after a route update before it should
      // track the page change, to implement this, make sure your `trackPage` property is set to `true`
      trackPageDelay: 50,

      // If you need to proxy events through a custom data plane,
      // add a `dataPlaneUrl` property (defaults to https://hosted.rudderlabs.com )
      // Rudderstack docs:
      //   - https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#3-1-load
      dataPlaneUrl: `https://override-rudderstack-endpoint`,

      // Add a `controlPlaneUrl` property if you are self-hosting the Control Plane
      // Rudderstack docs:
      //   - https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#3-1-1-self-hosted-control-plane
      controlPlaneUrl: `https://override-control-plane-url`,

      // boolean (defaults to false); whether to delay load Rudderstack
      // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
      // This feature will force Rudderstack to load _after_ either a page routing change
      // or user scroll, whichever comes first. This delay time is controlled by
      // `delayLoadTime` setting. This feature is used to help improve your website's
      // TTI (for SEO, UX, etc).  See links below for more info.
      // NOTE: But if you are using server-side routing and enable this feature,
      // Rudderstack will never load (because although client-side routing does not do
      // a full page refresh, server-side routing does, thereby preventing Rudderstack
      // from ever loading).
      // See here for more context:
      // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment/pull/19#issuecomment-559569483
      // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
      // Problem/solution: https://marketingexamples.com/seo/performance
      delayLoad: false,

      // number (default to 1000); time to wait after scroll or route change
      // To be used when `delayLoad` is set to `true`
      delayLoadTime: 1000

      // Whether to completely skip calling `analytics.load()`.
      // ADVANCED FEATURE: only use if you are calling `analytics.load()` manually
      // elsewhere in your code or are using a library
      // that will call it for you.
      // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
      // *Another use case is if you want to add callbacks to the methods at load time.
      manualLoad: false
    }
  }
];
```

## [](https://github.com/rudderlabs/gatsby-plugin-rudderstack/blob/master/README.md#step-2-identify-your-users-using-the-identify-method)Step 2: Identify Your Users With the `identify()` Method:

The `identify()` method allows you to link users and their actions to a specific userid.

A sample example of how the `identify()` method works in Gatsby is as shown:

```javascript
class CallToAction extends React.Component {
    _handleCallToAction() {
        window.rudderanalytics.identify(
          "12345", {
            email: "name@domain.com"
          }, {
            page: {
              path: "/post",
              referrer: "internal",
              search: "",
              title: "Post Page",
              url: "",
            },
          }
        }

        render() {
            return (
                <Link onClick={ this._handleCallToAction } to="/write-post">Write a Post</Link>
              )
        }
}
```

In the above example, information such as the user ID, email along with contextual information such as IP address, anonymousId, etc. will be captured.

> **NOTE**: There is no need to call `identify()` for anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`.

## [](https://github.com/rudderlabs/rudder-sdk-js/blob/master/README.md#step-3-track-your-users-actions-using-the-track-method)Step 3: Track Your Users’ Actions With the `track()` Method

The `track()` method allows you to track any actions that your users might perform.

A sample example of how the `track()` method works is as shown:

```javascript
window.rudderanalytics.track(
  "test track event GA3",
  {
    revenue: 30,
    currency: "USD",
    user_actual_id: 12345,
  },
  () => {
    console.log("in track call");
  }
);
```

In the above example, the method tracks the event ‘**test track event GA3**’, and information such as the revenue, currency, anonymousId.

You can use this method to track various other success metrics for your website, such as user signups, item purchases, article bookmarks, and much more.

> **NOTE**: To override contextual information, for ex: anonymizing IP and other contextual fields like page properties, the following template can be used. Similarly one can override the auto-generated anonymousId with provided ID. For this:

```javascript
window.rudderanalytics.track(
  "test track event GA3",
  {
    revenue: 30,
    currency: "USD",
    user_actual_id: 12345,
  },
  () => {
    console.log("in track call");
  }
);
```

### Track Pageviews

**If you want to track pageviews automatically,** set `trackPage` to `true` in your `gatsby-config.js` file. What we mean by _"automatically"_ is that whenever there is a route change, we leverage Gatsby's `onRouteUpdate` API in the `gatsby-browser.js` file ([link](https://www.gatsbyjs.org/docs/browser-apis/#onRouteUpdate)) to invoke `window.rudderanalytics.page()` on each route change. But if you want to pass in properties along with the pageview call (ie, it's common to see folks pass in some user or account data with each page call), then you'll have to set `trackPage: false` and call it yourself in your `gatsby-browser.js` file, like this:

```javascript
// gatsby-browser.js
exports.onRouteUpdate = () => {
  window.rudderanalytics && window.rudderanalytics.page();
};
```

You’ve now successfully installed `rudder-analytics.js` tracking. You can enable and use any event destination to send your event data via RudderStack, in no time at all!

## [](https://github.com/rudderlabs/rudder-sdk-js/blob/master/README.md#step-4-check-ready-state)Step 4: Check Ready State

**There are cases when you may want to tap into the features provide by end destination SDKs to enhance tracking and other functionalities.** RudderStack's JavaScript SDK exposes a `ready` API with a `callback` parameter, that fires when the SDK is done initializing itself and other third-party native SDK destinations.

For example:

```javascript
window.rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
```

| **For detailed technical documentation and troubleshooting guide on the RudderStack’s JavaScript SDK, check out our [docs](https://docs.rudderlabs.com/sdk-integration-guide/getting-started-with-javascript-sdk).** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

# [](https://github.com/rudderlabs/rudder-sdk-js/blob/master/README.md#querystring-api)Querystring API

RudderStack's Querystring API allows you to trigger `track`, `identify` calls using query parameters. If you pass the following parameters in the URL, then it will trigger the corresponding SDK API call.

For example:

```html
http://hostname.com/?ajs_uid=12345&ajs_event=test%20event&ajs_aid=abcde&ajs_prop_testProp=prop1&ajs_trait_name=Firstname+Lastname
```

For the above URL, the below SDK calls will be triggered:

```javascript
rudderanalytics.identify("12345", { name: "Firstname Lastname" });
rudderanalytics.track("test event", { testProp: "prop1" });
rudderanalytics.setAnonymousId("abcde");
```

You may use the below parameters as querystring parameter and trigger the corresponding call.

`ajs_uid` : Makes a `rudderanalytics.identify()` call with `userId` having the value of the parameter value.

`ajs_aid` : Makes a `rudderanalytics.setAnonymousId()` call with `anonymousId` having the value of the parameter value.

`ajs_event` : Makes a `rudderanalytics.track()` call with `event` name as parameter value.

`ajs_prop_<property>` : If `ajs_event` is passed as querystring, value of this parameter will populate the `properties` of the corresponding event in the `track` call.

`ajs_trait_<trait>` : If `ajs_uid` is provided as querysting, value of this parameter will populate the `traits` of the `identify` call made.

# [](https://github.com/rudderlabs/rudder-sdk-js/blob/master/README.md#adding-callbacks-to-standard-methods)Adding Callbacks to Standard Methods

You can also define callbacks to the common methods of the `rudderanalytics` object.

> **Note**: For now, the functionality is supported for `syncPixel` method which is called in the SDK when making sync calls in integrations for relevant destinations.

For example, you can load the rudderanalytics with callbacks in your Gatsby browser file:

```javascript
window.rudderanalytics.syncPixelCallback = (obj) => {
  window.rudderanalytics.track(
    "sync lotame",
    { destination: obj.destination },
    { integrations: { All: false, S3: true } }
  );
};
```

Note: in order for this to work well, you must also set the manualLoad option to true in your Gatsby configuration, and load rudderstack in the browser gatsby file manually.

In the above example, we are defining a `syncPixelCallback` on the analytics object before the call to load the SDK. This will lead to calling of this registered callback with the parameter `{destination: <destination_name>}` whenever a sync call is made from the SDK for relevant integrations like _Lotame_.

The callback can be supplied in options parameter like below as well:

```javascript
// Define the callbacks directly on the load method like:
rudderanalytics.load(YOUR_WRITE_KEY, DATA_PLANE_URL, {
  clientSuppliedCallbacks: {
    syncPixelCallback: () => {
      console.log("sync done!");
    },
  },
});
```

# License

RudderStack **gatsby-plugin-rudderstack** is released under the [AGPLv3 License][agplv3_license].

# Contribute

We would love to see you contribute to RudderStack. Get more information on how to contribute [here](CONTRIBUTING.md).

# Follow Us

- [RudderStack Blog][rudderstack-blog]
- [Slack][slack]
- [Twitter][twitter]
- [LinkedIn][linkedin]
- [dev.to][devto]
- [Medium][medium]
- [YouTube][youtube]
- [HackerNews][hackernews]
- [Product Hunt][producthunt]

# :clap: Our Supporters

[![Stargazers repo roster for @rudderlabs/rudder-server](https://reporoster.com/stars/rudderlabs/gatsby-plugin-rudderstack)](https://github.com/rudderlabs/gatsby-plugin-rudderstack/stargazers)
[![Forkers repo roster for @rudderlabs/rudder-server](https://reporoster.com/forks/rudderlabs/gatsby-plugin-rudderstack)](https://github.com/rudderlabs/gatsby-plugin-rudderstack/network/members)

<!----variables---->

[slack]: https://resources.rudderstack.com/join-rudderstack-slack
[twitter]: https://twitter.com/rudderstack
[linkedin]: https://www.linkedin.com/company/rudderlabs/
[devto]: https://dev.to/rudderstack
[medium]: https://rudderstack.medium.com/
[youtube]: https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw
[rudderstack-blog]: https://rudderstack.com/blog/
[hackernews]: https://news.ycombinator.com/item?id=21081756
[producthunt]: https://www.producthunt.com/posts/rudderstack
[agplv3_license]: https://www.gnu.org/licenses/agpl-3.0-standalone.html
[sspl_license]: https://www.mongodb.com/licensing/server-side-public-license
[config-generator]: https://github.com/rudderlabs/config-generator
[config-generator-section]: https://github.com/rudderlabs/rudder-server/blob/master/README.md#rudderstack-config-generator
[rudder-logo]: https://repository-images.githubusercontent.com/197743848/b352c900-dbc8-11e9-9d45-4deb9274101f
