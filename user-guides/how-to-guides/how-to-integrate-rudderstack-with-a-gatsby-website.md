---
description: >-
  Step-by-step guide to quickly and easily get Rudderstack up and running in
  your Gatsby application.
---

# How to Integrate Rudderstack with a Gatsby Website

You can quickly and easily get Rudderstack up and running in your Gatsby application via our team-backed Gatsby plugin!

This plugin makes it easy to integrate your Gatsby website with the Rudderstack API and easily track events.

## Key features of this plugin

* Use multiple write keys (one for production environment, another optional one for development)
* Disable page view tracking (just in case you want to add it later manually)
* Always up-to-date and maintained by the RudderStack team

## Installing the plugin

To install the plugin, run the following command with the package manager of your choice:

* NPM: `$ npm install --save gatsby-plugin-rudderstack`
* YARN: `$ yarn add gatsby-plugin-rudderstack`

## Setup

### Step 1: Configure your Gatsby config file

In your `gatsby-config.js` file you first need to add your write key from your account. You can find this in your RudderStack dashboard.

![](<../../.gitbook/assets/source (1).png>)

#### The Configuration Options

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

### Step 2: Identify your users with the `identify()` method:

The `identify()` method allows you to link users and their actions to a specific user ID.

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

In the above example, information such as the user ID, email along with contextual information such as IP address, `anonymousId`, etc. will be captured.

{% hint style="info" %}
There is no need to call `identify()` for anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`.
{% endhint %}

### Step 3: Track your users' actions with the `track()` method

The `track()` method allows you to track any actions that your users might perform. A sample example of how the `track()` method works is as shown:

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

In the above example, the method tracks the event ‘**test track event GA3**’, and information such as the revenue, currency, and anonymousId. You can use this method to track various other success metrics for your website, such as user signups, item purchases, article bookmarks, and much more.

{% hint style="info" %}
To override contextual information, for ex: anonymizing IP and other contextual fields like `page` properties, the following template can be used. Similarly, you can override the auto-generated `anonymousId` with the provided ID. For this, follow the snippet below:
{% endhint %}

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

#### Tracking pageviews

If you want to track pageviews automatically, set `trackPage` to `true` in your `gatsby-config.js` file. What we mean by _**automatically **_is that whenever there is a route change, RudderStack leverages Gatsby's `onRouteUpdate` API in the `gatsby-browser.js` file ([link](https://www.gatsbyjs.org/docs/browser-apis/#onRouteUpdate)) to invoke `window.rudderanalytics.page()` on each route change. 

However, if you want to pass in properties along with the pageview call (it is common to see some users pass in some user or account data with each `page` call), then you'll have to set `trackPage: false` and call it yourself in your `gatsby-browser.js` file, as shown below:

```javascript
// gatsby-browser.js
exports.onRouteUpdate = () => {
  window.rudderanalytics && window.rudderanalytics.page();
};
```

You’ve now successfully installed `rudder-analytics.js` tracking. You can enable and use any event destination to send your event data via RudderStack, in no time at all!

### Step 4: Check ready state

There are cases when you may want to tap into the features provided by end destination SDKs to enhance tracking and other functionalities. 

RudderStack's JavaScript SDK exposes a `ready` API with a `callback` parameter, that fires when the SDK is done initializing itself and other third-party native SDK destinations. For example:

```javascript
window.rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
```

{% hint style="info" %}
For detailed technical documentation and troubleshooting guide on the RudderStack’s JavaScript SDK, check out our [docs](https://docs.rudderlabs.com/sdk-integration-guide/getting-started-with-javascript-sdk).
{% endhint %}

## Using the Querystring API

RudderStack's Querystring API allows you to trigger `track`, `identify` calls using query parameters. 

If you pass the following parameters in the URL, then it will trigger the corresponding SDK API call. For example:

```markup
http://hostname.com/?ajs_uid=12345&ajs_event=test%20event&ajs_aid=abcde&ajs_prop_testProp=prop1&ajs_trait_name=Firstname+Lastname
```

For the above URL, the below SDK calls will be triggered:

```javascript
rudderanalytics.identify("12345", { name: "Firstname Lastname" });
rudderanalytics.track("test event", { testProp: "prop1" });
rudderanalytics.setAnonymousId("abcde");
```

You may use the below parameters as a querystring parameter and trigger the corresponding call:

| **Parameter**                                       | **Description**                                                                                                                               |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <p></p><p><code>ajs_uid</code></p>                  | <p></p><p>Makes a <code>rudderanalytics.identify()</code> call with <code>userId</code> having the value of the parameter value.</p>          |
| <p></p><p><code>ajs_aid</code></p>                  | Makes a `rudderanalytics.setAnonymousId()` call with `anonymousId` having the value of the parameter value.                                   |
| <p></p><p><code>ajs_event</code></p>                | Makes a `rudderanalytics.track()` call with `event` name as parameter value.                                                                  |
| <p></p><p><code>ajs_prop_&#x3C;property></code></p> | If `ajs_event` is passed as querystring, value of this parameter will populate the properties of the corresponding event in the `track` call. |
| <p></p><p><code>ajs_trait_&#x3C;trait></code></p>   | If `ajs_uid` is provided as querystring, value of this parameter will populate the traits of the `identify` call made.                        |

## Adding callbacks to standard methods

You can also define callbacks to the common methods of the `rudderanalytics` object.

{% hint style="info" %}
For now, the functionality is supported for `syncPixel` method which is called in the SDK when making sync calls in integrations for relevant destinations. For example, you can load `rudderanalytics` with callbacks in your Gatsby browser file as shown below:
{% endhint %}

```javascript
window.rudderanalytics.syncPixelCallback = (obj) => {
  window.rudderanalytics.track(
    "sync lotame",
    { destination: obj.destination },
    { integrations: { All: false, S3: true } }
  );
};
```

{% hint style="warning" %}
In order for this to work well, you must also set the `manualLoad` option to `true` in your Gatsby configuration, and load RudderStack in the browser's Gatsby file manually.
{% endhint %}

In the above example, we defined a `syncPixelCallback` on the `rudderanalytics` object before the call to load the SDK. This will lead to calling of this registered callback with the parameter `{destination: <destination_name>}` whenever a sync call is made from the SDK for relevant integrations like **Lotame**. 

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

## License

This plugin is released under the [AGPLv3 License](https://www.gnu.org/licenses/agpl-3.0-standalone.html).

## Contact Us

For more information on any of the sections in this guide, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, or even see RudderStack [in action](https://rudderstack.com/request-a-demo/).
