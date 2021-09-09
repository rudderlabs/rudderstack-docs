---
description: >-
  This Quick Start Guide will help you get up and running with using the RudderStack JavaScript SDK in no time.
---

# **JavaScript SDK Quick Start Guide**

## **Step 1: Install RudderStack Using the Code Snippet**

To integrate the SDK, place the following minified or non-minified version of the code in the `<head>` section of your website.

### **Minified Code**

```javascript
<script>
rudderanalytics=window.rudderanalytics=[];for(var methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],i=0;i<methods.length;i++){var method=methods[i];rudderanalytics[method]=function(a){return function(){rudderanalytics.push([a].concat(Array.prototype.slice.call(arguments)))}}(method)}rudderanalytics.load(<YOUR_WRITE_KEY>,<DATA_PLANE_URL>),rudderanalytics.page();
</script>

<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

### **Non-Minified Code**

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
  rudderanalytics.load(YOUR_WRITE_KEY, DATA_PLANE_URL);
  //For example,
  //rudderanalytics.load("1Qb1F3jSWv0eKFBPZcrM7ypgjVo", "http://localhost:8080");
  rudderanalytics.page();
</script>
<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

{% hint style="success" %}
**NOTE**: The above code snippets will load `rudder-analytics.js` on to your page synchronously. To load the SDK asynchronously to keep your page load time unaffected, use the following instead:

**`<script async src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>`**
{% endhint %}

Combining the initialization and the above async script together

```javascript
<script type="text/javascript">
!function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),
e.load(YOUR_WRITE_KEY,DATA_PLANE_URL),
e.page()}();
</script>
```

{% hint style="info" %}
**You can find your source write key and the data plane URL on your RudderStack dashboard.**
{% endhint %}

![Source write key and Data Plane URL](../../../.gitbook/assets/workspace-token%20%284%29%20%283%29%20%284%29%20%284%29%20%284%29%20%284%29%20%282%29%20%281%29%20%284%29.png)

The above code snippet does the following:

- Creates an array to store the events until the analytics object is ready.
- Stores a list of methods to replay them when the analytics object is ready. These methods include:

| **Method**       | **Description**                                     |
| :--------------- | :-------------------------------------------------- |
| **`load()`**     | Loads **`rudder-analytics.js`** with your write key |
| **`page()`**     | Records page views whenever a user visits a page    |
| **`track()`**    | Keeps track of user actions and important events    |
| **`identify()`** | Associates users and their traits or actions        |
| **`reset()`**    | Resets the `userid` and the associated traits       |

- Loads the analytics object with your write key.
- Makes the `page()`call to track the page view. It auto-captures properties such as `path`, `referrer`, `search`, `title`, and `URL`. If you want to override them, use the call mentioned in the section [JavaScript SDK APIs](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/#javascript-sdk-apis).

{% hint style="info" %}
**NOTE** : In all the above versions, there is an explicit `page` call at the end. This is added to ensure that whenever the SDK loads in a page, a `page` call is being sent. You can remove this call completely or modify with extra page properties to suit your requirement. You can also add `page` calls in your application in places not tied directly to page load, ex: virtual page views, page renders on route change such as in SPAs.
{% endhint %}

### **Alternative Installation using NPM**

Although we recommend using the [minified](#minified-code) or [non-minified snippet](#non-minified-code) as mentioned above to use RudderStack SDK with your website, you can also use this [NPM module](https://www.npmjs.com/package/rudder-sdk-js) to package RudderStack directly into your project.

To install, run the following command:

```bash
npm install rudder-sdk-js --save
```

{% hint style="info" %}
This NPM module is only meant to be used for a browser installation. If you want to integrate RudderStack with your Node.js applications, please refer to [the RudderStack Node.js repository](https://github.com/rudderlabs/rudder-sdk-node).
{% endhint %}

{% hint style="warning" %}
**Important**: Since the module exports the related APIs on an already-defined object combined with the Node.js module caching, you should run the below code snippet **only once** and use the exported object throughout your project.
{% endhint %}

```jsx
import * as rudderanalytics from "rudder-sdk-js";
rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL);
export { rudderanalytics };
```

You can also do so with **ES5**, using the `require` method, as shown:

```jsx
var rudderanalytics = require("rudder-sdk-js");
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL);
exports.rudderanalytics = rudderanalytics;
```

Please refer to the following projects for a detailed walk-through of the above steps:

- [Sample Angular project](https://github.com/rudderlabs/rudder-analytics-angular)
- [Sample React project](https://github.com/rudderlabs/rudder-analytics-react)

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

### **Supported Browser Versions**

| Browser             | Supported Versions |
| :------------------ | :----------------- |
| **Safari**          | v7 or later        |
| **IE**              | v10 or later       |
| **Edge**            | v15 or later       |
| **Mozilla Firefox** | v40 or later       |
| **Chrome**          | v37 or later       |
| **Opera**           | v23 or later       |
| **Yandex**          | v14.12 or later    |

{% hint style="info" %}
If the SDK doesn't work on the versions you are targeting, verify if adding the browser polyfills to your application solves the issue.
{% endhint %}

## **Step 2: Identify Your Users With the `identify()` Method**

The `identify()` method allows you to link users and their actions to a specific `userid`.

A sample example of how the `identify()` method works is as shown:

```javascript
rudderanalytics.identify(
  "12345",
  { email: "name@domain.com" },
  {
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

In the above example, information such as the `userId` and `email` along with the [**contextual information**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/common-fields#javascript-sdk) is captured.

{% hint style="warning" %}
If you explicitly specify the IP address in the event, RudderStack will use that IP instead of capturing it in the backend. You can use this feature to anonymize your users' IP - e.g., by supplying an anonymous IP address.
{% endhint %}

{% hint style="info" %}
**NOTE**: There is no need to call `identify()` for anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`.
{% endhint %}

## **Step 3: Track Your Users’ Actions With the `track()` Method**

The `track()` method allows you to track any actions that your users might perform.

A sample example of how the `track()` method works is as shown:

```javascript
rudderanalytics.track(
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

You’ve now successfully installed `rudder-analytics.js` tracking. You can enable and use any event destination to send your event data via RudderStack, in no time at all.

## **Step 4: Check Ready State**

There are cases when you may want to tap into the features provide by end destination SDKs to enhance tracking and other functionalities. RudderStack's JavaScript SDK exposes a `ready` API with a `callback` parameter, that fires when the SDK is done initializing itself and other third-party native SDK destinations.

For example:

```javascript
rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
```

For detailed information on the API calls, visit [JavaScript SDK APIs](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#javascript-sdk-apis).
