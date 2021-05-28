---
description: >-
  Detailed technical documentation on the RudderStack’s JavaScript SDK to send
  data from your website to your destinations via RudderStack
---

# JavaScript

## 1. **What is the RudderStack JavaScript SDK?**

The RudderStack JavaScript SDK allows you to utilize our `rudder-analytics.js` library to start sending data from your website to RudderStack. After integrating this SDK, you will also be able to connect to multiple destinations such as Amplitude, Google Analytics, and more, to send your event data.

## **2. Installing the** RudderStack **JavaScript SDK**

{% hint style="info" %}
**NOTE:** To quickly get up and running with setting up and using the RudderStack JavaScript SDK, please go through our [quick start guide](https://github.com/rudderlabs/rudder-sdk-js#how-to-use-the-rudderstack-javascript-sdk).
{% endhint %}

To integrate the RudderStack JavaScript SDK with your website, place either the minified or non-minified version of the code snippet in the `<head>` section of your website.

### **2.1. Minified Code**

```javascript
<script> 
rudderanalytics=window.rudderanalytics=[];for(var methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],i=0;i<methods.length;i++){var method=methods[i];rudderanalytics[method]=function(a){return function(){rudderanalytics.push([a].concat(Array.prototype.slice.call(arguments)))}}(method)}rudderanalytics.load(<YOUR_WRITE_KEY>,<DATA_PLANE_URL>),rudderanalytics.page();
</script>

<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

{% hint style="info" %}
**You can find your source write key and the data plane URL on your RudderStack dashboard.**
{% endhint %}

![Source write key and Data Plane URL](../../../.gitbook/assets/workspace-token%20%284%29%20%283%29%20%284%29%20%284%29%20%284%29%20%284%29%20%282%29%20%281%29%20%282%29.png)

### **2.2. Non-minified Code**

```javascript
<script>
    rudderanalytics = window.rudderanalytics = [];

    var  methods = [
        "load",
        "page",
        "track",
        "identify",
        "alias",
        "group",
        "ready",
        "reset",
        "getAnonymousId",
    "setAnonymousId"
    ];

    for (var i = 0; i < methods.length; i++) {
          var method = methods[i];
          rudderanalytics[method] = function (methodName) {
                return function () {
                      rudderanalytics.push([methodName].concat(Array.prototype.slice.call(arguments)));
                };
              }(method);
    }
    rudderanalytics.load(YOUR_WRITE_KEY, DATA_PLANE_URL);
    //For example,
    //rudderanalytics.load("1Qb1F3jSWv0eKFBPZcrM7ypgjVo", "http://localhost:8080");
    rudderanalytics.page();
</script>

<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

{% hint style="success" %}
**NOTE**: The above code snippet will load `rudder-analytics.js` on to your page synchronously. To load the SDK asynchronously to keep your page load time unaffected, use the following instead:  
  
**`<script async src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>`**
{% endhint %}

Combining the initialization and the above async script together, we get:

```javascript
<script type="text/javascript"> 
!function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),
 e.load(WRITE_KEY, DATA_PLANE_URL), e.page()}(); 
</script>
```

The above code snippet does the following:

* Creates an array to store the events until the analytics object is ready.
* Stores a list of methods to replay them when the analytics object is ready. These methods include:

| **Method** | **Description** |
| :--- | :--- |
| **`load()`** | Loads **`rudderanalytics.js`** with your write key |
| **`page()`** | Records page views whenever a user visits a page |
| **`track()`** | Keeps track of user actions and important events |
| **`identify()`** | Associates users and their traits or actions |
| **`reset()`** | Resets the `userid` and the associated traits |

* Loads the analytics object with your write key.
* Makes the `page()`call to track the page view. It auto-captures properties such as `path`, `referrer`, `search`, `title`, and `URL`. If you want to override them, use the call mentioned in the section JavaScript SDK APIs.

### 2.3. Alternative Installation

Although we recommend using the [minified or non-minified snippet](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#2-1-minified-code) as mentioned above to use RudderStack SDK with your website, you can also use this [NPM module](https://www.npmjs.com/package/rudder-sdk-js) to package RudderStack directly into your project.

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
import * as rudderanalytics from "rudder-sdk-js"
rudderanalytics.ready(() => {console.log("we are all set!!!")})
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL)
export { rudderanalytics }
```

You can also do so with **ES5**, using the `require` method, as shown:

```jsx
var rudderanalytics = require("rudder-sdk-js")
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL)
exports.rudderanalytics  =  rudderanalytics
```

Please refer to the following projects for a detailed walk-through of the above steps:

* [Sample Angular project](https://github.com/rudderlabs/rudder-analytics-angular)
* [Sample React project](https://github.com/rudderlabs/rudder-analytics-react)

{% hint style="info" %}
The related APIs exported by the module are:

* `load`
* `ready`
* `identify`
* `alias`
* `page`
* `track`
* `group`
* `reset`
* `getAnonymousId`
* `setAnonymousId`
{% endhint %}

## 3. JavaScript SDK APIs

RudderStack’s JavaScript SDK makes it very easy for you to send your event data to any destination without having to implement a new API every single time.

Let us take a look at some of the key methods in this section:

## 3.1. Load

The `load()` method loads the `rudderanalytics.js` file with your write key.

The `load()`method is defined as follows:

`rudderanalytics.load(<YOUR_WRITE_KEY>, <DATA_PLANE_URL>, options);`

{% hint style="info" %}
**NOTE**: You need to replace `<YOUR_WRITE_KEY>` with the write key in the RudderStack Control Plane and `<DATA_PLANE_URL>` with the URL of the RudderStack Server.
{% endhint %}

### 3.1.1. Load Options

The `options` parameter in the above `load` call looks like the following:

```text
{
 logLevel: "DEBUG" | "INFO" | "WARN", 
 integrations: IntegrationOpts,
 configUrl: string,  // defaults to https://api.rudderlabs.com
 queueOptions: QueueOpts,
 loadIntegration: boolean // defaults to true.
}
```

It includes the following details:

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`logLevel`** | String | Options include **`DEBUG`**, **`INFO`**, and **`WARN`** |
| **`integrations: IntegrationOpts`** | - | Refer to **`IntegrationOpts`** below. |
| **`configUrl`** | String | Defaults to **`https://api.rudderlabs.com`**. You need to provide the server endpoint serving your destination configurations. **`sourceConfig`** is appended to this endpoint by the SDK. |
| **`queueOpts`** | - | Refer to **`QueueOpts`** |
| **`loadIntegration`** | Boolean | Defaults to **`true`**. If set to **`false`**, the destination SDKs are not fetched by the SDK. This is supported for **Amplitude** and **Google Analytics**. |

* The structure of **`IntegrationOpts`** looks like the following:

```javascript
IntegrationOpts {
 All: boolean, // default true
 <Destination1>: boolean,
 <Destination2>: boolean,
 ...
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`All`** | Boolean | Corresponds to all the destinations to which the event has to be sent. Default is set to **`true`**. **`All: false`** instructs RudderStack not to send the event data to any destinations by default. |
| **`<Destination>`** | Boolean | Specific destination to which the event is to be sent or not sent, depending on the boolean value assigned to it. |

{% hint style="info" %}
More information on the Load **`IntegrationOpts`** option can be found here: 

* [Specifying Selective Destinations in the `load` Method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-1-specifying-selective-destinations-in-the-load-method)
* [Common Destination Names for sending events through the `load` method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-2-common-destination-names)
{% endhint %}

* The structure of **`QueueOpts`** looks like the following:

```text
QueueOpts {
 maxRetryDelay: 360000, // Upper cap on maximum delay for an event
 minRetryDelay: 1000, // minimum delay before sending an event
 backoffFactor: 2, // exponentional base
 maxAttempts: 10, // max attempts
 maxItems: 100,  // max number of events in storage
}
```

| Parameter | Description |
| :--- | :--- |
| **`maxRetryDelay`** | Corresponds to the upper limit on the maximum delay for an event. Default value is set as 36000ms.  |
| **`minRetryDelay`** | Corresponds to the minimum delay expected before sending an event. Default value is set to 1000ms. |
| **`backoffFactor`** | Refers to the exponential base. Default value is set to 2. |
| **`maxAttempts`** | Refers to the maximum attempts to send the event to the destination. Default value is set to 10. |
| **`maxItems`** | Refers to the maximum number of events kept in the storage. Default value is set to 100. |

### 3.1.**2**. Self-hosted Control Plane

If you are self-hosting the Control Plane, your `load` call will look like the following:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {configUrl: CONTROL_PLANE_URL});
```

### 3.1.3. Selective Destinations

RudderStack allows you to load selective destinations as specified by you and disable sending events to the remaining destinations. You can specify these destinations through the `load` call, as shown:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  integrations: { All: false, destination_name: true },
});
```

For more information, please check the [How to Filter Selective Destinations](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-how-to-filter-selective-destinations-to-send-event-data) section.

## 3.2. Identify

This method allows you to link the users and their actions to a specific `userid`. You can also add additional information as `traits` to a user. Once you set the `identify` information to the user, those will be passed to the successive `track` or `page` calls. To reset the user identification, you can use the `reset` method.

The `identify()` method definition is as follows:

`rudderanalytics.identify([userid], [traits], [options], [callback]);`

A sample example of how to use the `identify()` method is as shown:

```javascript
rudderanalytics.identify(
  "userId",
  { email: "name@domain.com" },
  {
    page: {
      path: "",
      referrer: "",
      search: "",
      title: "",
      url: "",
    }
  },
  () => {
    console.log("in identify call");
  }
);
```

In the above example, information such as the `userid` and email along with contextual information such as IP address, etc. is captured.

The above `identify` call has the following parameters:

| **Parameter** | **Description** |
| :--- | :--- |
| **`userid`** | This string defines the database ID of the user. If provided, this **optional** argument will be sent to destinations as the user ID instead of an anonymous ID |
| **`traits`** | This **optional** dictionary contains the traits or properties associated with a `userid` such as email, address, etc. |
| **`options`** | This dictionary is also **optional**, and provides information such as context, integrations, and `anonymousId`. Specific user traits can be provided as the context as well |
| **`callback`** | This function gets executed after successful execution of the **`identify()`** method. |

### 3.2.1. The `options` parameter

The options parameter in the `identify` call looks like the following:

```text
    {
integrations: IntegrationOpts,
anonymousId: string,
originalTimestamp: ISO 8601 date string,
<other keys>: <value> // merged with event's contextual information
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`integrations: IntegrationOpts`** | - | Refer to **`IntegrationOpts`** below. More information can be found [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-how-to-filter-selective-destinations-to-send-event-data). |
| **`anonymousId`** | String | Overrides the current event **`anonymousId`** at the top level |
| **`originalTimestamp`** | ISO 8601 date string | Overrides the current event **`originalTimestamp`** at the top level |
| **`<other keys>: <value>`** | - | Merged with the event's contextual information |

* The structure of **`IntegrationOpts`** looks like the following:

```javascript
IntegrationOpts {
 All: boolean, // default true
 <Destination1>: boolean,
 <Destination2>: boolean,
 ...
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`All`** | Boolean | Corresponds to all the destinations to which the event has to be sent. Default is set to **`true`**. **`All: false`** instructs RudderStack not to send the event data to any destinations by default. |
| **`<Destination>`** | Boolean | Specific destination to which the event is to be sent or not sent, depending on the boolean value assigned to it. |

{% hint style="info" %}
More information on the **`IntegrationOpts`** option can be found here: 

* [Specifying Selective Destinations in the `load` Method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-1-specifying-selective-destinations-in-the-load-method)
* [Common Destination Names for sending events through the `load` method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-2-common-destination-names)
{% endhint %}

{% hint style="info" %}
**NOTE**: The `anonymousId` is a **UUID** **\(Universally Unique Identifier\)** generated to uniquely identify the user. Also, if it is provided by the user using the `setAnonymousId` method, the user-specified `anonymousId` overrides the SDK-generated one.
{% endhint %}

{% hint style="success" %}
There is no need to call`identify()`for anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`
{% endhint %}

### 3.2.2. `identify` Options

The JavaScript SDK generates one unique `anonymousId` , stores it in a cookie named `rl_anonymous_id` , and attaches to every subsequent event. This helps in identifying the users from other sites that hosted under a sub-domain.

{% hint style="info" %}
As an example, if you include the RudderStack JavaScript SDK in both **admin.samplewebsite.com** and **app.samplewebsite.com**, the SDK will store the cookie in the top-level domain **samplewebsite.com**.
{% endhint %}

If you identify a user with your application's unique identifier like email, database ID etc. RudderStack stores this ID in a cookie named `rl_user_id` and attaches to every event.

There are two options that you can use to identify users when using the JavaScript SDK:

### 3.2.3. Overriding `anonymousID` in the `options` parameter

There can be scenarios where you may want to provide your own `anonymousID` instead of an auto-generated ID by the SDK. To do so, you can provide the `anonymousId` in the `options` parameter of the `identify` call, as mentioned above. This will send the value provided by you in the `anonymousId` key of the event.

{% hint style="info" %}
All other events will have`anonymousId` from the one persisted in the cookie, except this event where you override the options.
{% endhint %}

An example of this approach is as shown in the code snippet below:

```javascript
rudderanalytics.identify(
  "12345",
  { email: "name@domain.com" },
  {
    anonymousId: "my-anonymous-id",
  },
  () => {
    console.log("in identify call");
  }
);js
```

### 3.2.4. Overriding the `anonymousId` for all future events using `setAnonymousId`

You can also override the `anonymousId` for all the future events using the `rudderAnanlytics.setAnonymousId` method.

An example of this is shown in the code snippet below:

```javascript
rudderanalytics.setAnonymousId("my-anonymous-id");

// All event payloads will have the anonymousId key set "my-anonymous-id".

rudderanalytics.identify("userId", { email1: "name@domain.com" }, () => {
  console.log("in identify call");
});
```

#### 3.2.4.1. AMP Analytics

You can call the following method to parse the AMP Linker ID and set the **`anonymousId`** as shown:

```text
setAnonymousId(null, "<version>*<checkSum>*<idName1>*<idValue1>*<idName2>*<idValue2>...")
```

Here, the second parameter is the AMP Linker ID format in accordance with the [specified structure](https://github.com/ampproject/amphtml/blob/master/extensions/amp-analytics/linker-id-receiving.md#format). For the links decorated with the [RudderStack Linker parameter](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/amp-analytics#amp-linker), the **`<idName1>`** value will be **`rs_amp_id`**.

Calling the above method will parse the Linker ID and set the **`anonymousId`** as the value of the **`rs_amp_id`** key.

### 3.2.5 Setting `userid` to Empty

If you would like to set the `userid` to be empty, pass an empty string or `""`. A common use case for this is if an anonymous user was identified with a `userid` and then logs out of their account. You can then `identify("", {isLoggedIn: false})` and the user will continue to be identified by their `anonymousId` for future events.

{% hint style="warning" %}
Do **not** identify with `null`, as this will not allow you to pass a traits object and it will keep the current `userid`.
{% endhint %}

### 3.2.6. Identifying New Users

To identify new users in scenarios like a new login, you can take one of the following approaches:

* Call the `identify` API with a new `userid`. RudderStack will reset all cookies related to the user for `userid` and `user-traits` and update them with the new values provided by you.

{% hint style="info" %}
The `anonymousId` will remain unchanged in this case. It will be the value that you set explicitly using `setAnonymousId` , or the auto-generated value set by the SDK while loading.
{% endhint %}

* Explicitly call `rudderanalytics.reset()` and then call `identify`. It has the same effect as described above.

For updating the traits of a user, you can call identify with the same `userid` multiple times with new traits. All the traits for that user keep on getting appended/modified.

Calling `reset()` or identifying with a new `userId` with new traits will reset the earlier traits and update them with the new values, as shown:

```javascript
rudderanalytics.identify("userId",
  { email1: "name@domain.com" },
  () => { console.log("in identify call"); }
);

rudderanalytics.identify("userId",
  { email2: "name@domain.com" },
  () => { console.log("in identify call"); }
);

// both email1 and email2 with be sent in the identify payload
// for the second call.
```

## 3.3. Page

This method lets you record information about the web page being viewed by the user. This includes page views, category, and other relevant information about the page.

The `page()` method definition is as follows:

`rudderanalytics.page([category],[name],[properties],[options],[callback]);`

A sample example of how to use the `page()` method is as shown:

```javascript
rudderanalytics.page(
  "Cart",
  "Cart Viewed",
  {
    path: "",
    referrer: "",
    search: "",
    title: "",
    url: "",
  },
  () => {
    console.log("in page call");
  }
);
```

In the above example, the `page()` method captures information such as the page category and page name. It also captures contextual information such as IP address and the ID of the user.

The above code snippet has the following parameters:

| **Parameter** | **Description** |
| :--- | :--- |
| **`category`** | An **optional** string that defines the category of the page |
| **`name`** | An **optional** string that defines the name of the page |
| **`properties`** | An **optional** dictionary that defines the properties of the page. These properties are auto-captured by the page |
| **`options`** | An **optional** dictionary that provides information such as context, integrations, `anonymousId`, etc. Specific user traits can be provided as the context as well |
| **`callback`** | This function gets executed after successful execution of the **`page()`** method |

### 3.3.1. The `options` parameter

The `options` parameter in the `page` call looks like the following:

```text
    {
integrations: IntegrationOpts,
anonymousId: string,
originalTimestamp: ISO 8601 date string,
<other keys>: <value> // merged with event's contextual information
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`integrations: IntegrationOpts`** | - | Refer to **`IntegrationOpts`** below. More information can be found [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-how-to-filter-selective-destinations-to-send-event-data). |
| **`anonymousId`** | String | Overrides the current event **`anonymousId`** at the top level |
| **`originalTimestamp`** | ISO 8601 date string | Overrides the current event **`originalTimestamp`** at the top level |
| **`<other keys>: <value>`** | - | Merged with the event's contextual information |

* The structure of **`IntegrationOpts`** looks like the following:

```javascript
IntegrationOpts {
 All: boolean, // default true
 <Destination1>: boolean,
 <Destination2>: boolean,
 ...
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`All`** | Boolean | Corresponds to all the destinations to which the event has to be sent. Default is set to **`true`**. **`All: false`** instructs RudderStack not to send the event data to any destinations by default. |
| **`<Destination>`** | Boolean | Specific destination to which the event is to be sent or not sent, depending on the boolean value assigned to it. |

{% hint style="info" %}
More information on the **`IntegrationOpts`** option can be found here: 

* [Specifying Selective Destinations in the `load` Method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-1-specifying-selective-destinations-in-the-load-method)
* [Common Destination Names for sending events through the `load` method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-2-common-destination-names)
{% endhint %}

## 3.4. Track

This method allows you to track any actions that your users might perform. Each of these actions is commonly referred to as an **event**.

The `track()`method definition is as follows:

`rudderanalytics.track(event,[properties],[options],[callback]);`

A sample example of how to use the `track()` method is as shown:

```javascript
rudderanalytics.track(
  "test track event GA3",
  {
    revenue:  30,
    currency:  'USD' ,
    user_actual_id:  12345
  }, 
  () => {console.log("in track call");}
);
```

In the above example, the method tracks the event `test track event GA3`, information such as the revenue, currently, user ID, and other contextual information such as IP address.

The above code snippet has the following parameters:

| **Parameter** | **Description** |
| :--- | :--- |
| **`event`** | A string that captures the name of the event that is being tracked |
| **`properties`** | An **optional** dictionary that tracks the properties of the event |
| **`options`** | An **optional** dictionary of information such as context, integrations, etc. Specific user traits can be provided as the context as well |
| **`callback`** | This function gets executed after successful execution of the **`track`** call |

### 3.4.1. The `options` parameter

The `options` parameter in the `track` call looks like the following:

```text
    {
integrations: IntegrationOpts,
anonymousId: string,
originalTimestamp: ISO 8601 date string,
<other keys>: <value> // merged with event's contextual information
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`integrations: IntegrationOpts`** | - | Refer to **`IntegrationOpts`** below. More information can be found [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-how-to-filter-selective-destinations-to-send-event-data). |
| **`anonymousId`** | String | Overrides the current event **`anonymousId`** at the top level |
| **`originalTimestamp`** | ISO 8601 date string | Overrides the current event **`originalTimestamp`** at the top level |
| **`<other keys>: <value>`** | - | Merged with the event's contextual information |

* The structure of **`IntegrationOpts`** looks like the following:

```javascript
IntegrationOpts {
 All: boolean, // default true
 <Destination1>: boolean,
 <Destination2>: boolean,
 ...
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`All`** | Boolean | Corresponds to all the destinations to which the event has to be sent. Default is set to **`true`**. **`All: false`** instructs RudderStack not to send the event data to any destinations by default. |
| **`<Destination>`** | Boolean | Specific destination to which the event is to be sent or not sent, depending on the boolean value assigned to it. |

{% hint style="info" %}
More information on the **`IntegrationOpts`** option can be found here: 

* [Specifying Selective Destinations in the `load` Method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-1-specifying-selective-destinations-in-the-load-method)
* [Common Destination Names for sending events through the `load` method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-2-common-destination-names)
{% endhint %}

## 3.5.  Alias

Many destination platforms need an explicit `alias` call for mapping the already identified users to a new identifier that you may want to use, to track the users in the future. The RudderStack `alias` API allows you to implement this functionality.

{% hint style="success" %}
Simply put, the `alias` call associates the user with a new identification.
{% endhint %}

The format of an `alias` call is as shown:

```javascript
rudderanalytics.alias("to", "from", options, callback);
```

The above `alias` call has the following parameters:

| **Parameter** | **Presence** | **Description** |
| :--- | :--- | :--- |
| **`to`** | Required | Denotes the new identifier |
| **`from`** | Optional | Denotes the old identifier which will be an alias for the `to` parameter.  If not provided, the SDK will populate this as the currently identified `userId`, or `anonymousId` in case of anonymous users. |
| **`options`** | Optional | This dictionary provides additional context to the event payload. |
| **`callback`** | Optional | This function gets executed after successful execution of the **`alias()`** method. |

### 3.5.1. The `options` parameter

The `options` parameter in the `alias` call looks like the following:

```text
    {
integrations: IntegrationOpts,
anonymousId: string,
originalTimestamp: ISO 8601 date string,
<other keys>: <value> // merged with event's contextual information
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`integrations: IntegrationOpts`** | - | Refer to **`IntegrationOpts`** below. More information can be found [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-how-to-filter-selective-destinations-to-send-event-data). |
| **`anonymousId`** | String | Overrides the current event **`anonymousId`** at the top level |
| **`originalTimestamp`** | ISO 8601 date string | Overrides the current event **`originalTimestamp`** at the top level |
| **`<other keys>: <value>`** | - | Merged with the event's contextual information |

* The structure of **`IntegrationOpts`** looks like the following:

```javascript
IntegrationOpts {
 All: boolean, // default true
 <Destination1>: boolean,
 <Destination2>: boolean,
 ...
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`All`** | Boolean | Corresponds to all the destinations to which the event has to be sent. Default is set to **`true`**. **`All: false`** instructs RudderStack not to send the event data to any destinations by default. |
| **`<Destination>`** | Boolean | Specific destination to which the event is to be sent or not sent, depending on the boolean value assigned to it. |

{% hint style="info" %}
More information on the **`IntegrationOpts`** option can be found here: 

* [Specifying Selective Destinations in the `load` Method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-1-specifying-selective-destinations-in-the-load-method)
* [Common Destination Names for sending events through the `load` method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-2-common-destination-names)
{% endhint %}

A sample example of how to use the `alias()` method is as shown:

```javascript
rudderanalytics.alias("test_new_id");
```

## 3.6.  Group

The `group` call associates a user to a specific organization.

The format of a group call is as shown:

```javascript
rudderanalytics.group("groupId", traits, options, callback);
```

The above `group` call has the following parameters:

| **Parameter** | **Presence** | **Description** |
| :--- | :--- | :--- |
| **`groupId`** | Required | Denotes the group identifier to which the traits are to be modified or added. RudderStack will call the destination APIs to attach the currently identified user to this group. |
| **`traits`** | Optional | Denotes the traits of the group. RudderStack will pass these traits to the destination to enhance the group properties. |
| **`options`** | Optional | This dictionary provides additional context to the event payload. |
| **`callback`** | Optional | This function gets executed after successful execution of the **`group()`** method. |

### 3.6.1. The `options` parameter

The `options` parameter in the `group` call looks like the following:

```text
    {
integrations: IntegrationOpts,
anonymousId: string,
originalTimestamp: ISO 8601 date string,
<other keys>: <value> // merged with event's contextual information
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`integrations: IntegrationOpts`** | - | Refer to **`IntegrationOpts`** below. More information can be found [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-how-to-filter-selective-destinations-to-send-event-data). |
| **`anonymousId`** | String | Overrides the current event **`anonymousId`** at the top level |
| **`originalTimestamp`** | ISO 8601 date string | Overrides the current event **`originalTimestamp`** at the top level |
| **`<other keys>: <value>`** | - | This info is merged with the event's contextual information |

* The structure of **`IntegrationOpts`** looks like the following:

```javascript
IntegrationOpts {
 All: boolean, // default true
 <Destination1>: boolean,
 <Destination2>: boolean,
 ...
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **`All`** | Boolean | Corresponds to all the destinations to which the event has to be sent. Default is set to **`true`**. **`All: false`** instructs RudderStack not to send the event data to any destinations by default. |
| **`<Destination>`** | Boolean | Specific destination to which the event is to be sent or not sent, depending on the boolean value assigned to it. |

{% hint style="info" %}
More information on the **`IntegrationOpts`** option can be found here: 

* [Specifying Selective Destinations in the `load` Method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-1-specifying-selective-destinations-in-the-load-method)
* [Common Destination Names for sending events through the `load` method](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-2-common-destination-names)
{% endhint %}

An example of how to use the `group` call is as shown below:

```javascript
rudderanalytics.group("sample_group_id", {
  name: "CompanyA",
  location: "USA",
});
```

## 3.7. Reset

This method resets the `userid` and the associated traits and properties of that specific user.

The `reset()` method can be used as shown:

```javascript
rudderanalytics.reset();
```

{% hint style="info" %}
**NOTE**: The `reset()`method only clears the cookies and local storage set by RudderStack, and not the information stored by the integrated destinations. To completely clear the user session, please refer to the documentation provided by those respective tools.
{% endhint %}

## 4. How to Filter Selective Destinations to Send Event Data

RudderStack allows you to send your event data only to a few intended destinations by filtering out the rest. You can do so by passing an integrations object in the **options** parameter of the `identify()`, `page()`, and `track()` methods. Please refer to the [How to Filter Selective Destinations](https://docs.rudderstack.com/how-to-guides/how-to-filter-selective-destinations-to-send-event-data) section.

### 4.1. Common Destination Names
Below shows some of the supported names that RudderStack can intake for each destination when sending the event data through the event method as described above (please note that not all destinations are listed below):

| Destination | Supported Common Names |
| :--- | :--- |
| Google Analytics | `Google Analytics` |
|  | `GoogleAnalytics` |
|  | `GA` |
| Google Ads | `Google Ads` |
|  | `GoogleAds` |
|  | `GOOGLEADS` |
| Braze | `Braze` |
|  | `BRAZE` |
| Chartbeat | `Chartbeat` |
|  | `CHARTBEAT` |
| Customer.io | `Customer.io` |
|  | `CUSTOMERIO` |
| Facebook Pixel | `FB Pixel` |
|  | `Facebook Pixel` |
|  | `FB_PIXEL` |
| Google Tag Manager | `Google Tag Manager` |
|  | `GTM` |
| Hotjar | `Hotjar` |
|  | `HOTJAR` |
| Hubspot | `Hubspot` |
|  | `HUBSPOT` |
| Intercom | `Intercom` |
|  | `INTERCOM` |
| Keen.IO | `Keen` |
|  | `KEEN` |
|  | `Keen.io` |
| Kissmetrics | `Kissmetrics` |
|  | `KISSMETRICS` |
| Lotame | `Lotame` |
|  | `LOTAME` |
| VWO | `Visual Website Optimizer` |
|  | `VWO` |
| Amplitude | `Amplitude` |
| Mixpanel | `Mixpanel` |
| Facebook App Events | `Facebook App Events` |
| Amazon S3 | `Amazon S3` |
| MinIO | `MinIO` |
| Salesforce | `Salesforce` |
| Autopilot | `Autopilot` |
| Heap.io | `Heap.io` |
| Mailchimp | `Mailchimp` |
| Redshift | `Redshift` |
| BigQuery | `BigQuery` |
| Google Cloud Storage | `Google Cloud Storage` |
| Azure Blob Storage | `Azure Blob Storage` |
| Branch Metrics | `Branch Metrics` |
| Kochava | `Kochava` |
| Leanplum | `Leanplum` |
| Slack | `Slack` |
| Zendesk | `Zendesk` |
| AWS Personalize | `AWS Personalize` |
| Amazon Kinesis | `Amazon Kinesis` |

{% hint style="info" %}
**NOTE:** You can also refer to [this section](https://docs.rudderstack.com/how-to-guides/how-to-filter-selective-destinations-to-send-event-data#destination-naming-convention) for more information on the naming convention of the `destinations names`. 
{% endhint %}

### 4.2. Specifying Selective Destinations in the `load` Method

You can also choose to load selective destinations by modifying the [`load`](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#3-1-load) method to take a third argument. You can pass an`integrations` object containing the destination names in the format specified [here](https://docs.rudderstack.com/how-to-guides/how-to-filter-selective-destinations-to-send-event-data#destination-naming-convention). RudderStack loads only those destinations that are marked as enabled with the boolean value `true` .

A sample RudderStack load method with integration names passed as arguments will look like the following snippet:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  integrations: { All: false, <destination_name>: true },
});
```

Where `<destination_name>` is the name of the destination. 

{% hint style="info" %}
Please refer to the section above for the common destinations names or refer to [this section](https://docs.rudderstack.com/how-to-guides/how-to-filter-selective-destinations-to-send-event-data#destination-naming-convention) for destination naming convention.
{% endhint %}

An example of the `load` method is as shown:

```javascript
rudderanalytics.load(YOUR_WRITE_KEY, DATA_PLANE_URL, {
  integrations: { All: false, "Google Analytics": true, Intercom: true },
});
```

As seen from the example above, **three** arguments are now passed in the `load` method:

* `writekey`
* `<DATA_PLANE_URL>`
* The `integrations` dictionary containing `Google Analytics` and `Intercom` as the destination names

## 5. Contexts and Traits in RudderStack

RudderStack gives you the option to automatically capture certain event-specific and user-specific data, based on the type of the event.

In this section, we cover two specific dictionaries, within the `options` argument, which is included in the `identify()`, `page()`, and `track()` methods.

### 5.1. Context

A context is a dictionary of additional information about a particular data, such as a user’s IP address.

{% hint style="info" %}
**NOTE**: A context is a complete and specific piece of information. Any other information provided outside of this specification is ignored.
{% endhint %}

### 5.2. Trait

A trait is an optional dictionary included within `context`, which specifies the unique traits of the user. This is a very useful field for linking information of a user from a previously made `identify()` call to a `track()` or `page()` event.

In order to better understand how contexts and traits work, let us look at the following `identify` event:

```javascript
rudderanalytics.identify("userId", {
  plan: "Paid, Premium",
  email: "name@surname.org",
});
```

The trait in the above event is `plan`. If you wish to include this trait in a subsequent `track()` or `page()`event that is triggered by the user, you can establish the association by passing this trait into `context.traits` as shown:

```javascript
rudderanalytics.track(
  "Subscribed",
  {
    campaign: "Subscribe",
  },
  {
    traits: {
      plan: "Paid, Premium",
    },
  }
);
```

The above code snippet will append `plan` as a trait to the track event.The trait `email` will not be appended, as it was not specified in the `context.traits` field.

## 6. Querystring API

RudderStack's Querystring API allows you to trigger `track`, `identify` calls using the query parameters.

You may use the below parameters as a query string parameters and trigger the corresponding call.

| Parameter | Action |
| :--- | :--- |
| `ajs_uid` | Makes a `rudderanalytics.identify()` call with `userId` having the parameter value. |
| `ajs_aid` | Makes a `rudderanalytics.setAnonymousId()` call with `anonymousId` having the parameter value. |
| `ajs_event` | Makes a `rudderanalytics.track()` call with `event` name as the parameter value. |
| `ajs_prop_<property>` | If `ajs_event` is passed as a query string, value of this parameter will populate the `properties` of the corresponding event in the `track` call. |
| `ajs_trait_<trait>` | If `ajs_uid` is provided as a query sting, the value of this parameter will populate the `traits` of the `identify` call made. |

As an example, if you pass the following parameters in the URL as shown:

```javascript
http://hostname.com/?ajs_uid=12345&ajs_event=test%20event&ajs_aid=abcde&ajs_prop_testProp=prop1&ajs_trait_name=Firstname+Lastname
```

The following SDK calls will be triggered:

```javascript
rudderanalytics.identify("userId", {name: "Firstname Lastname"});
rudderanalytics.track("test event", {testProp: "prop1"});
rudderanalytics.setAnonymousId("anonymousId");
```

## 7. Detect**ing** Ad-blocked Pages

RudderStack's JavaScript SDK provides a way to send a page view containing relevant markers on whether a page is ad-blocked. You can analyze this data to find what percent of your site's page views are affected by ad-blockers.

To send an ad-blocked page view, load the SDK as follows:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  sendAdblockPage: true,
  sendAdblockPageOptions: { integrations: { All: false, Amplitude: true } },
});
```

Some of the properties in the snippet above are:

* `sendAdblockPage`: Enables the JavaScript SDK to make a call to load the Google AdSense library. If RudderStack fails to load this library, it concludes that an ad blocker is enabled on the page. 

{% hint style="info" %}
Since most ad blockers block the request to the Google AdSense servers, this is assumed as a good measure to detect ad-blocked pages.
{% endhint %}

* `sendAdblockPageOptions`: The RudderStack SDK will make an implicit `page` call about the ad-blocked pages if `sendAdblockPage` is set to `true`. With `sendAdblockPageOptions`, you can provide the destinations to which you want to forward this `page` call.

The implicit `page` call semantics is as follows:

```javascript
rudderanalytics.page("RudderJS-Initiated", "ad-block page request", {
  path: "/ad-blocked",
  title:
    "error in script loading:: src::  http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js id:: ad-block",
});
```

## **8. Troubleshooting**

This section provides solutions to some of the commonly faced issues while using the RudderStack JavaScript SDK on your website.

### Where do I get the Data Plane URL?

Simply put, the **Data Plane URL** is used to connect to the RudderStack backend for processing and routing your events.

{% hint style="info" %}
To get the **Data Plane URL**: _\*\*_

* If you're using the **open-source** version of RudderStack, you are required to set up your own data plane by [installing and setting up RudderStack](https://docs.rudderstack.com/installing-and-setting-up-rudderstack) in your preferred dev environment.
* If you're using the **enterprise** version of RudderStack, please contact us for the data plane URL with the email ID used to sign up for RudderStack.
{% endhint %}

### How to load `analytics.js` correctly?

In order to load `analytics.js`, simply copy the minified or non-minified version of the code snippet provided in the [Installing the RudderStack JavaScript SDK](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#2-installing-the-rudderstack-javascript-sdk) section.

To check if it has loaded correctly, open the JavaScript console in your browser:

* Safari: `Ctrl+Alt+I` \(Windows\) or `Command+Option+I` \(Mac\) and go to the `Console` tab
* Chrome: `Ctrl+Shift+J` \(Windows\) or `Command+Option+J` \(Mac\)
* Firefox: `Ctrl+Shift+K` \(Windows\) or `Command+Option+K` \(Mac\) and select the `Console` tab
* Internet Explorer: Press `F12` and go to the `Console` tab

In the console, run `rudderanalytics`. If it returns an object as shown in the following code snippet, it means that the `rudderanalytics.js` file has loaded successfully:

```text
{Integrations: Object, _integrations: Object, _readied: true, _timeout: 300, _user: n_}
```

If it gives you an `undefined` error, you might want to verify if the setting up procedure was correctly followed. [Our Quick Start Guide](https://github.com/rudderlabs/rudder-sdk-js#how-to-use-the-rudderstack-javascript-sdk) may be able to help you get up and running.

### **Should I disable ad-blockers on my browser?**

Yes, it is important that you ensure no ad-blockers are running on your browser, as they restrict the`rudderanalytics.js` script from executing and storing user information in the browser.

### **Can I load multiple instances of `rudderanalytics.js`?**

No, it is not possible to load multiple instances of `rudderanalytics.js`, as it is bound to exceed the maximum stack call size and give you an error.

### **How to check if the data is being transmitted to the desired destinations?**

To check if data is being transmitted to the specified destinations, go to the `Network` tab of your JavaScript console on your browser.

![page call as seen in the Network tab](https://lh5.googleusercontent.com/h53eypqI3lWd_2wqzVnP_9KVXl8vHdJ39PP2b2oPLbUpEw5xMioO8wKhvDJHYnoMQLWQkQyMx-GDxzhxtTtgWECDFa0cLP85Mzd80relg6xkptwHoDJPiAixpH3XblrNosGJd4M3)

![track call as seen in the Network tab](https://lh5.googleusercontent.com/0Mw5GDmeE0C8pugsTHXn4Ss6bmF05UseoSAsi2z2S1QIhw6rBGlBROUVICHZxef3KNUOvt9o6uNE-czGxRU09huZV2SF6J24S_nLTywyKKPRsNjCCD9hAyGX3BzChcF3RbchKYQf)

{% hint style="info" %}
**NOTE**: If the outbound request is not being shown, check if you have installed and set up the RudderStack JavaScript SDK correctly, or if ad-blockers are enabled on your browser.
{% endhint %}

### **What is the size limit on the requests?**

The size limit on requests is 32 KB per message.

### **Can I send the event data to specific destinations only?**

Yes, you can. Refer to the [How to Filter Selective Destinations to Send Your Event Data](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#4-how-to-filter-selective-destinations-to-send-event-data) section above to see how to do this.

### **What is an Anonymous ID and how to retrieve it?**

An Anonymous ID is an auto-generated UUID \(Universally Unique Identifier\) that gets assigned to each unique visitor to your website.

To retrieve the anonymous ID of any visitor, simply call the following:

```javascript
rudderanalytics.getAnonymousId();
```

{% hint style="info" %}
**NOTE:** In case the `anonymousId` value is null, calling the above function will lead to automatically setting a new `anonymousId`.
{% endhint %}

## Contact Us

To know more about the RudderStack JavaScript SDK or to see it in action, you can [contact us](mailto:%20docs@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

In case you come across any issues while using this SDK, please feel free to submit them on our [GitHub issues page](https://github.com/rudderlabs/rudder-sdk-js/issues).

