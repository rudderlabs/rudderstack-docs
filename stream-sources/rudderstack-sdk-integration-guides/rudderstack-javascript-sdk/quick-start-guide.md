---
description: >-
  Step-by-step guide on installing and using the RudderStack JavaScript SDK on your website.
---

# JavaScript SDK Quick Start Guide

This guide is aimed at helping you quickly get up and running with the JavaScript SDK. The following sections cover the SDK installation steps and details on using the SDK to identify your website users and track their actions.

## Step 1: Install RudderStack JavaScript SDK

To integrate the SDK with your website, place the following version of the code in the `<head>` section of your website.

```javascript
<script type="text/javascript">
!function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),
e.load(<WRITE_KEY>,<DATA_PLANE_URL>),
e.page()}();
</script>
```

{% hint style="success" %}
The above snippet lets you integrate the SDK with your website and load it asynchronously to keep your page load time unaffected.
{% endhint %}

{% hint style="info" %}
To load `rudder-analytics.js` on to your page synchronously, refer to the [**minified**](#minified-code) or [**non-minified**](#non-minified-code) version of the code below.
{% endhint %}

The above code snippet does the following:

- Creates an array to store the events until the analytics object is ready.
- Stores a list of methods to replay them when the analytics object is ready. These methods are:

| **Method**       | **Description**                                      |
| :--------------- | :--------------------------------------------------- |
| **`load()`**     | Loads **`rudder-analytics.js`** with your write key. |
| **`page()`**     | Records page views whenever a user visits a page.    |
| **`track()`**    | Tracks user actions and important events.            |
| **`identify()`** | Associates users and their traits or actions.        |
| **`reset()`**    | Resets the `userid` and the associated traits.       |

- Loads the analytics object with your write key.
- Makes the `page()`call to track the page view. It auto-captures properties such as `path`, `referrer`, `search`, `title`, and `URL`. If you want to override them, refer to the [**`page`**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/#page) API method.

### Minified code

```javascript
<script>
rudderanalytics=window.rudderanalytics=[];for(var methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],i=0;i<methods.length;i++){var method=methods[i];rudderanalytics[method]=function(a){return function(){rudderanalytics.push([a].concat(Array.prototype.slice.call(arguments)))}}(method)}rudderanalytics.load(<WRITE_KEY>,<DATA_PLANE_URL>),rudderanalytics.page();
</script>

<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

### Non-Minified code

```html
<script>
  rudderanalytics = window.rudderanalytics = [];
  var methods = [
    "load",
    "page",
    "track",
    "identify",
    "alias",
    "group",
    "ready",
    "reset",
    "getAnonymousId",
    "setAnonymousId",
  ];
  for (var i = 0; i < methods.length; i++) {
    var method = methods[i];
    rudderanalytics[method] = (function (methodName) {
      return function () {
        rudderanalytics.push(
          [methodName].concat(Array.prototype.slice.call(arguments))
        );
      };
    })(method);
  }

  rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>);
  //For example,
  //rudderanalytics.load("1Qb1F3jSWv0eKFBPZcrM7ypgjVo", "http://localhost:8080");
  rudderanalytics.page();
</script>

<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

{% hint style="info" %}
In all the above versions, there is an explicit `page` call at the end. This is added to ensure that whenever the SDK loads in a page, a `page` call is sent. You can remove this call completely or modify it with the extra page properties to suit your requirement. You can also add `page` calls in your application in places not tied directly to page load, e.g., virtual page views, page renders on route change such as in SPAs.
{% endhint %}

### Write key and data plane URL

To integrate and initialize the JavaScript SDK, you need the source write key and the data plane URL.

- To get the source write key, follow [**this guide**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/sending-test-events#get-the-source-write-key).
- To get the data plane URL, follow [**this guide**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it).

### Alternative installation using NPM

Although we recommend using the snippets mentioned above to use the JavaScript SDK with your website, you can also use this [**NPM module**](https://www.npmjs.com/package/rudder-sdk-js) to package RudderStack directly into your project.

To install the SDK via npm, run the following command:

```bash
npm install rudder-sdk-js --save
```

{% hint style="info" %}
**This NPM module is only meant to be used for a browser installation**. If you want to integrate RudderStack with a Node.js application, refer to the [**RudderStack Node.js repository**](https://github.com/rudderlabs/rudder-sdk-node).
{% endhint %}

**Important**: Since the module exports the related APIs on an already-defined object combined with the Node.js module caching, you should run the following code snippet **only once** and use the exported object throughout your project:

```jsx
import * as rudderanalytics from "rudder-sdk-js";
rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>);
export { rudderanalytics };
```

You can also do this with **ES5** using the `require` method, as shown in the following snippet:

```jsx
var rudderanalytics = require("rudder-sdk-js");
rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>);
exports.rudderanalytics = rudderanalytics;
```

{% hint style="info" %}
The related APIs exported by the module are:

- `load`
- `ready`
- `identify`
- `alias`
- `page`
- `track`
- `group`
- `reset`
- `getAnonymousId`
- `setAnonymousId`
{% endhint %}

#### Sample implementations

Refer to the following projects for a detailed walk-through of the above steps:

- [**Sample Angular project**](https://github.com/rudderlabs/rudder-analytics-angular)
- [**Sample React project**](https://github.com/rudderlabs/rudder-analytics-react)

### Supported browser versions

| **Browser**         | **Supported Versions** |
| :------------------ | :--------------------- |
| Safari              | v7 or later            |
| IE                  | v10 or later           |
| Edge                | v15 or later           |
| Mozilla Firefox     | v40 or later           |
| Chrome              | v37 or later           |
| Opera               | v23 or later           |
| Yandex              | v14.12 or later        |

{% hint style="info" %}
If the SDK does not work on the browser versions that you are targeting, verify if adding the browser polyfills to your application solves the issue.
{% endhint %}

## Step 2: Identify your users with the `identify()` method

The `identify` call lets you identify a visiting user and associate them to their actions. It also lets you record the traits about them like their name, email address, etc.

A sample `identify()` call is shown below:

```javascript
rudderanalytics.identify(
  "12345", {
    email: "name@domain.com"
  }, {
    page: {
      path: "",
      referrer: "",
      search: "",
      title: "",
      url: "",
    },
  },
  () => {
    console.log("in identify call");
  }
);
```

In the above example, the user-related information like the `userId` and `email` along with the [**contextual information**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/common-fields#javascript-sdk) is captured.

{% hint style="info" %}
There is no need to call `identify()` for anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`.
{% endhint %}

For more information, refer to the [**`identify`**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#identify) documentation.

## Step 3: Track your users' actions with `track()`

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any properties associated with them.

A sample `track` call is shown below:

```javascript
rudderanalytics.track(
  "test track event GA3", {
    revenue: 30,
    currency: "USD",
    user_actual_id: 12345,
  },
  () => {
    console.log("in track call");
  }
);
```

In the above example, the `track` method tracks the user event ‘**test track event GA3**’ and information such as the `revenue`, `currency`, `anonymousId`.

{% hint style="success" %}
You can use the `track` method to track various success metrics for your website like user signups, item purchases, article bookmarks, and more.
{% endhint %}

## Step 4: Check ready state

There are cases when you may want to tap into the features provided by the end-destination SDKs to enhance tracking and other functionalities. The JavaScript SDK exposes a `ready` API with a `callback` parameter that fires when the SDK is done initializing itself and the other third-party native SDK destinations.

For example:

```javascript
rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
```

{% hint style="success" %}
For more information on the JavaScript SDK API methods, refer to the [**JavaScript SDK APIs**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#supported-apis).
{% endhint %}

## Contact Us

For more information on any of the sections covered in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

If you come across any issues while using this SDK, please feel free to submit them on our [**GitHub issues page**](https://github.com/rudderlabs/rudder-sdk-js/issues).
