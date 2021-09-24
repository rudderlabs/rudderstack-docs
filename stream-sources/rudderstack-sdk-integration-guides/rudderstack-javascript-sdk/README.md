---
description: >-
  Detailed technical documentation on the RudderStack’s JavaScript SDK to send data from your website to your destinations via RudderStack.
---

# JavaScript

## What is the RudderStack JavaScript SDK?

RudderStack's JavaScript SDK leverages the `rudder-analytics.js` library to track and send user events from your website to RudderStack. You can then further transform and route this event data to the destination platform of your choice.

## Installing the SDK

To quickly set up and start using the RudderStack JavaScript SDK, go through our [**quick start guide**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/quick-start-guide).

## Supported APIs

The JavaScript SDK makes it very easy for you to send your event data to any destination without implementing a new API every time.

The following sections detail all the API calls supported by RudderStack for this SDK.

## Load

The `load` method loads the `rudder-analytics.js` file with the source write key. It is defined as follows:

```javaascript
rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>, [options]);
```

{% hint style="info" %}
You need to replace the `<WRITE_KEY>` with the write key in the RudderStack dashboard and `<DATA_PLANE_URL>` with the URL of the RudderStack Server.
{% endhint %}

### The `options` parameter

The `options` parameter in the above `load` call looks like the following:

```javascript
{
 logLevel: "DEBUG" | "INFO" | "WARN",
 integrations: IntegrationOpts,
 configUrl: string,  // defaults to https://api.rudderlabs.com
 queueOptions: QueueOpts,
 loadIntegration: boolean // defaults to true.
}
```

It includes the following details:

| **Parameter**             | **Type**                                | **Description**                                                                                                                                                                                                |
| :-------------------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`logLevel`**        | String                              | Options include **`DEBUG`**, **`INFO`**, and **`WARN`**.                                                                                                                                                   |
| **`integrations`**    | [**IntegrationOpts**](#integrationopts) | Refer to the [**`IntegrationOpts`**](#integrationopts) section. More information on how to use this parameter can be found [**here**](#filter-selective-destinations).                                         |
| **`configUrl`**       | String                              | Defaults to **`https://api.rudderlabs.com`**. You need to provide the server (Control Plane) endpoint serving your destination configurations. **`sourceConfig`** is appended to this endpoint by the SDK. |
| **`queueOpts`**       | [QueueOpts](#queueopts)             | Refer to the [**`QueueOpts`**](#queueopts) section.                                                                                                                                                        |
| **`loadIntegration`** | Boolean                             | Defaults to **`true`**. If set to **`false`**, the destination SDKs are not fetched by the SDK. This is supported for **Amplitude** and **Google Analytics**.                                              |

### Loading the SDK for self-hosted control plane

If you are self-hosting the control plane using the [**RudderStack Control Plane Lite**](https://docs.rudderstack.com/get-started/control-plane-lite#what-is-the-control-plane-url) utility, your `load` call will look like the following:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  configUrl: CONTROL_PLANE_URL,
});
```

{% hint style="info" %}
More information on how to get the `CONTROL_PLANE_URL` can be found [**here**](https://docs.rudderstack.com/get-started/control-plane-lite#what-is-the-control-plane-url).
{% endhint %}


### Loading selective destinations

RudderStack lets you send your event data to selective destinations specified by you and disable sending events to the rest of the destinations. You can specify these destinations through the `load` call, as shown in the following snippet:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  integrations: { All: false, destination_name: true },
});
```

{% hint style="info" %}
For more information, check the [**Filter Selective Destinations**](#filter-selective-destinations) section.
{% endhint %}

## Identify

The `identify` method allows you to link the users and their actions to a specific `userid`. You can also add additional information as `traits` to a user. Once the `identify` call is made, the SDK persists the user information and passes it to the subsequent [`track`](#track) or [`page`](#page) calls. 

To reset the user identification, you can use the [`reset`](#reset) method.

{% hint style="info" %}
For more information on the `identify` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/identify) guide.
{% endhint %}

The SDK defines the `identify` method as shown:

```javascript
rudderanalytics.identify([userid], [traits], [options], [callback]);
```

A sample `identify` call is shown below:

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
    },
  },
  () => {
    console.log("Sample identify call");
  }
);
```

In the above example, information such as the `userId` and `email` along with the [**contextual information**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/common-fields#javascript-sdk) is captured.

{% hint style="warning" %}
If you explicitly specify the IP address in the event, RudderStack will use that address instead of capturing it in the backend. You can use this feature to anonymize your users' IP - e.g., by supplying an anonymous IP address.
{% endhint %}

### Identify parameters

The `identify` method has the following parameters:

| **Parameter**  | **Presence** | **Description**                                                                                                                                                                                     |
| :------------- | :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`userId`**   | Optional     | This string defines the database ID of the user. If provided, this argument will be sent to destinations as the user ID instead of an anonymous ID.                                                 |
| **`traits`**   | Optional     | This dictionary contains the traits or properties associated with a `userId` such as email, address, etc. More information on the `identify` traits can be found [**here**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/identify#identify-traits).                                                                                           |
| **`options`**  | Optional     | This dictionary provides information such as context, integrations, and `anonymousId`. Specific user traits can be provided as the context as well. Refer to the [**`options`**](#options) section. |
| **`callback`** | Optional     | This function gets executed after successful execution of the **`identify()`** method.                                                                                                              |

### AnonymousId

The `anonymousId` is a **UUID** (Universally Unique Identifier) generated to uniquely identify the user. Also, if it is provided by the user using the `setAnonymousId` method, the user-specified `anonymousId` overrides the SDK-generated one. For more information on how to do this, refer to the

{% hint style="success" %}
You don't have to call `identify()` for the anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`.
{% endhint %}

#### How RudderStack uses anonymousId

The JavaScript SDK generates a unique `anonymousId`, stores it in a cookie named `rl_anonymous_id` in the top-level domain, and attaches to every subsequent event. This helps RudderStack in identifying the unknown users from other sites that are hosted under a sub-domain.

{% hint style="info" %}
If you identify a user with your application's unique identifier like email, database ID etc. RudderStack stores this ID in a cookie named `rl_user_id` and attaches to every event.
{% endhint %}

For example, if you include the RudderStack JavaScript SDK in both **admin.samplewebsite.com** and **app.samplewebsite.com**, the SDK will store the cookie in the top-level domain **samplewebsite.com**.

There are two options that you can use to identify anonymous users with the JavaScript SDK:

#### Overriding `anonymousId` in the `options` parameter

There can be scenarios where you may want to provide your own `anonymousId` instead of an SDK-generated ID. To do so, you can provide the `anonymousId` in the `options` parameter of the `identify` call, as mentioned above. This will send the value provided by you in the `anonymousId` key of the event.

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
);
js;
```

#### Overriding the `anonymousId` for all future events using `setAnonymousId`

You can also override the `anonymousId` for all the future events using the `rudderananlytics.setAnonymousId` method.

An example of this is shown in the following snippet:

```javascript
rudderanalytics.setAnonymousId("my-anonymous-id");

// All event payloads will have the anonymousId key set "my-anonymous-id".

rudderanalytics.identify("userId", { email1: "name@domain.com" }, () => {
  console.log("in identify call");
});
```

### AMP Analytics

You can also parse the AMP Linker ID and set the `anonymousId`, as shown:

```javascript
rudderanalytics.setAnonymousId(
  null,
  "<version>*<checkSum>*<idName1>*<idValue1>*<idName2>*<idValue2>..."
);
```

Here, the second parameter is the AMP Linker ID format in accordance with the [**specified structure**](https://github.com/ampproject/amphtml/blob/master/extensions/amp-analytics/linker-id-receiving.md#format). For the links decorated with the [**RudderStack Linker parameter**](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/amp-analytics#amp-linker), the **`<idName1>`** value will be **`rs_amp_id`**.

Calling the above method will parse the Linker ID and set the **`anonymousId`** as the value of the **`rs_amp_id`** key.

### Setting a blank `userId`

If you would like to set a blank `userid`, pass an empty string or `""`.

{% hint style="warning" %}
Do **not** identify with `null`, as this will not allow you to pass a traits object and it will keep the current `userid`.
{% endhint %}

#### Use-case

Suppose an anonymous user is identified with a `userid` and then logs out of their account. You can then `identify("", {isLoggedIn: false})` and the user will continue to be identified by their `anonymousId` for future events.

### Identifying new users

To identify new users in scenarios like new logins, you can take one of the following two approaches:

- Call the `identify` API with a new `userid`. RudderStack will reset all the cookies related to the user associated with the `userid` and `traits` and update them with the new values provided by you.

{% hint style="info" %}
The `anonymousId` will remain unchanged in this case. It will be the value that you set explicitly using `setAnonymousId` , or the auto-generated value set by the SDK while loading.
{% endhint %}

- Explicitly call `reset` and then call `identify`. It has the exactly same outcome as described in the first approach.

For updating the traits of a user, you can call identify with the same `userId` multiple times with the new traits. This results in all the traits associated with that user getting appended or modified.

An example is shown below:

```javascript
rudderanalytics.identify("userId", { email1: "name@domain.com" }, () => {
  console.log("in identify call");
});

rudderanalytics.identify("userId", { email2: "name@domain.com" }, () => {
  console.log("in identify call");
});
// both email1 and email2 with be sent in the identify payload
// for the second call.
```

In the above example, both `email1` and `email2` will be sent in the payload for the second `identify` call.

{% hint style="info" %}
Calling `reset()` or identifying with a new `userId` with the new traits will reset the earlier traits and update them with the new values.
{% endhint %}


## Page

The `page` method lets you record information about the web page being viewed by the user. This includes page views, category, and other relevant information about the page.

It is defined as follows:

`rudderanalytics.page([category], [name], [properties], [options], [callback]);`

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

In the above example, information such as the page category and page name along with the [**contextual information**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/common-fields#javascript-sdk) is captured.

The `page` method has the following parameters:

| **Parameter**    | **Presence** | **Description**                                                                                                                                                                                        |
| :--------------- | :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`category`**   | Optional     | A string that defines the category of the page.                                                                                                                                                        |
| **`name`**       | Optional     | A string that defines the name of the page.                                                                                                                                                            |
| **`properties`** | Optional     | A dictionary that defines the properties of the page. These properties are auto-captured by the SDK.                                                                                                   |
| **`options`**    | Optional     | A dictionary that provides information such as context, integrations, `anonymousId`, etc. Specific user traits can be provided as the context as well. Refer to the [**`options`**](#options) section. |
| **`callback`**   | Optional     | This function gets executed after successful execution of the **`page()`** method.                                                                                                                     |

### **Track**

The `track` method allows you to track any actions that your users might perform. Each of these actions is commonly referred to as an **event**.

It is defined as follows:

`rudderanalytics.track(event, [properties], [options], [callback]);`

A sample example of how to use the `track()` method is as shown:

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

In the above example, the method tracks the event `test track event GA3`, information such as the revenue, currently, user ID, and other [**contextual information**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/common-fields#javascript-sdk).

The `track` method has the following parameters:

| **Parameter**    | **Presence** | **Description**                                                                                                                                                                            |
| :--------------- | :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`event`**      | Required     | A string that captures the name of the event that is being tracked.                                                                                                                        |
| **`properties`** | Optional     | An **optional** dictionary that tracks the properties of the event.                                                                                                                        |
| **`options`**    | Optional     | An **optional** dictionary of information such as context, integrations, etc. Specific user traits can be provided as the context as well. Refer to the [**`options`**](#options) section. |
| **`callback`**   | Optional     | This function gets executed after successful execution of the **`track`** call.                                                                                                            |

### **Alias**

Many destination platforms need an explicit `alias` call for mapping the already identified users to a new identifier that you may want to use, to track the users in the future. The RudderStack `alias` API allows you to implement this functionality.

{% hint style="success" %}
Simply put, the `alias` call associates the user with a new identification.
{% endhint %}

It is defined as follows:

`rudderanalytics.alias(to, [from], [options], [callback]);`

A sample example of how to use the `alias()` method is as shown:

```javascript
rudderanalytics.alias("test_new_id", "old_user_id", () => {
  console.log("in alias call");
});
```

The `alias` call has the following parameters:

| **Parameter**  | **Presence** | **Description**                                                                                                                                                                                          |
| :------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`to`**       | Required     | Denotes the new identifier of the user.                                                                                                                                                                  |
| **`from`**     | Optional     | Denotes the old identifier which will be an alias for the `to` parameter. If not provided, the SDK will populate this as the currently identified `userId`, or `anonymousId` in case of anonymous users. |
| **`options`**  | Optional     | A dictionary of information such as context, integrations, etc. Specific user traits can be provided as the context as well. Refer to the [**`options`**](#options) section.                             |
| **`callback`** | Optional     | This function gets executed after successful execution of the **`alias()`** method.                                                                                                                      |

### **Group**

The `group` method associates a user to a specific organization.

It is defined as follows:

`rudderanalytics.group(groupId, [traits], [options], [callback]);`

A sample example of how to use the `group()` method is as shown:

```javascript
rudderanalytics.group("sample_group_id", {
  name: "CompanyA",
  location: "USA",
});
```

The `group` method has the following parameters:

| **Parameter**  | **Presence** | **Description**                                                                                                                                                                 |
| :------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`groupId`**  | Required     | Denotes the group identifier to which the traits are to be modified or added. RudderStack will call the destination APIs to attach the currently identified user to this group. |
| **`traits`**   | Optional     | Denotes the traits of the group. RudderStack will pass these traits to the destination to enhance the group properties.                                                         |
| **`options`**  | Optional     | A dictionary of information such as context, integrations, etc. Specific user traits can be provided as the context as well. Refer to the [**`options`**](#options) section.    |
| **`callback`** | Optional     | This function gets executed after successful execution of the **`group()`** method.                                                                                             |

### **Reset**

The `reset` method resets the `userid` and the associated traits and properties of that specific user.

It can be used as shown:

```javascript
rudderanalytics.reset();
```

{% hint style="info" %}
**NOTE**: The `reset()` method only clears the cookies and local storage set by RudderStack, and not the information stored by the integrated destinations. To completely clear the user session, please refer to the documentation provided by those respective tools.
{% endhint %}

### **Types**

The following are the type definitions of the parameters used in some of the API methods:

#### **`options`**

The structure of **`options`** parameter looks like the following:

```javascript
{
  integrations: IntegrationOpts,
  anonymousId: string,
  originalTimestamp: ISO 8601 date string,
  <other keys>: <value> // merged with event's contextual information
}
```

| Parameter                   | Type                                | Description                                                                                                                                                        |
| :-------------------------- | :---------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`integrations`**          | [IntegrationOpts](#integrationopts) | Refer to the [**`IntegrationOpts`**](#integrationopts) section. More information on how to use this parameter can be found [here](#filter-selective-destinations). |
| **`anonymousId`**           | String                              | Overrides the current event's **`anonymousId`** at the top level.                                                                                                  |
| **`originalTimestamp`**     | ISO 8601 date string                | Overrides the current event's **`originalTimestamp`** at the top level.                                                                                            |
| **`<other keys>: <value>`** | -                                   | Merged with the event's contextual information.                                                                                                                    |

#### **`IntegrationOpts`**

The structure of **`IntegrationOpts`** looks like the following:

```javascript
{
 All: boolean, // default true
 <Destination1>: boolean,
 <Destination2>: boolean,
 ...
}
```

| Parameter           | Type    | Description                                                                                                                                                                                                  |
| :------------------ | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`All`**           | Boolean | Corresponds to all the destinations to which the event has to be sent. Default value is set to **`true`**. **`All: false`** instructs RudderStack not to send the event data to any destinations by default. |
| **`<Destination>`** | Boolean | Specific destination to which the event is to be sent or not sent, depending on the boolean value assigned to it.                                                                                            |

{% hint style="info" %}
More information on using the **`IntegrationOpts`** option can be found in [Filter Selective Destinations to Send Event Data](#filter-selective-destinations) section.
{% endhint %}

#### **`QueueOpts`**

The structure of **`QueueOpts`** looks like the following:

```javascript
{
 maxRetryDelay: 360000, // Upper cap on maximum delay for an event
 minRetryDelay: 1000, // minimum delay before sending an event
 backoffFactor: 2, // exponential base
 maxAttempts: 10, // max attempts
 maxItems: 100,  // max number of events in storage
}
```

| Parameter           | Type    | Description                                                                                        |
| :------------------ | :------ | :------------------------------------------------------------------------------------------------- |
| **`maxRetryDelay`** | Integer | Corresponds to the upper limit on the maximum delay for an event. Default value is set as 36000ms. |
| **`minRetryDelay`** | Integer | Corresponds to the minimum delay expected before sending an event. Default value is set to 1000ms. |
| **`backoffFactor`** | Integer | Refers to the exponential base. Default value is set to 2.                                         |
| **`maxAttempts`**   | Integer | Refers to the maximum attempts to send the event to the destination. Default value is set to 10.   |
| **`maxItems`**      | Integer | Refers to the maximum number of events kept in the storage. Default value is set to 100.           |

### **Adding Callbacks to Standard Methods**

You can also define callbacks to the common methods of the `rudderanalytics` object.

{% hint style="info" %}
**Note**: For now, the functionality is supported for `syncPixel` method which is called in the SDK when making sync calls in integrations for relevant destinations.
{% endhint %}

For example:

```javascript
<script>
rudderanalytics.syncPixelCallback = obj  => {
    rudderanalytics.track(
         "sync lotame",
         { destination: obj.destination },
         { integrations: { All: false, S3: true } }
    );
};
</script>

<script src="https://cdn.rudderlabs.com/rudder-analytics.min.js"></script>

```

In the above example, we are defining a `syncPixelCallback` on the analytics object before the call to load the SDK. This will lead to calling of this registered callback with the parameter `{destination: <destination_name>}` whenever a sync call is made from the SDK for relevant integrations like _Lotame_.

The callback can be supplied in options parameter like below as well:

```javascript
// define the callbacks directly on the load method like:
rudderanalytics.load(YOUR_WRITE_KEY, DATA_PLANE_URL, {
  clientSuppliedCallbacks: {
    syncPixelCallback: () => {
      console.log("sync done!");
    },
  },
});
```

We will be adding similar callbacks for APIs such as `track`, `page`, `identify`, etc.

## **Filter Selective Destinations**

RudderStack allows you to load or send your event data only to a few intended destinations by filtering out the rest. You can do so by passing an [integrations object](#integrationopts) in the options parameter of the supported API methods.

### **Common Destination Names**

Below shows some of the supported names that RudderStack can intake for each destination when sending the event data \(please note that not all destinations are listed below\).

| Destination          | Supported Common Names     |
| :------------------- | :------------------------- |
| Google Analytics     | `Google Analytics`         |
|                      | `GoogleAnalytics`          |
|                      | `GA`                       |
| Google Ads           | `Google Ads`               |
|                      | `GoogleAds`                |
|                      | `GOOGLEADS`                |
| Braze                | `Braze`                    |
|                      | `BRAZE`                    |
| Chartbeat            | `Chartbeat`                |
|                      | `CHARTBEAT`                |
| Customer.io          | `Customer.io`              |
|                      | `CUSTOMERIO`               |
| Facebook Pixel       | `FB Pixel`                 |
|                      | `Facebook Pixel`           |
|                      | `FB_PIXEL`                 |
| Google Tag Manager   | `Google Tag Manager`       |
|                      | `GTM`                      |
| Hotjar               | `Hotjar`                   |
|                      | `HOTJAR`                   |
| Hubspot              | `Hubspot`                  |
|                      | `HUBSPOT`                  |
| Intercom             | `Intercom`                 |
|                      | `INTERCOM`                 |
| Keen.IO              | `Keen`                     |
|                      | `KEEN`                     |
|                      | `Keen.io`                  |
| Kissmetrics          | `Kissmetrics`              |
|                      | `KISSMETRICS`              |
| Lotame               | `Lotame`                   |
|                      | `LOTAME`                   |
| VWO                  | `Visual Website Optimizer` |
|                      | `VWO`                      |
| Amplitude            | `Amplitude`                |
| Mixpanel             | `Mixpanel`                 |
| Facebook App Events  | `Facebook App Events`      |
| Amazon S3            | `Amazon S3`                |
| MinIO                | `MinIO`                    |
| Salesforce           | `Salesforce`               |
| Autopilot            | `Autopilot`                |
| Heap.io              | `Heap.io`                  |
| Mailchimp            | `Mailchimp`                |
| Redshift             | `Redshift`                 |
| BigQuery             | `BigQuery`                 |
| Google Cloud Storage | `Google Cloud Storage`     |
| Azure Blob Storage   | `Azure Blob Storage`       |
| Branch Metrics       | `Branch Metrics`           |
| Kochava              | `Kochava`                  |
| Leanplum             | `Leanplum`                 |
| Slack                | `Slack`                    |
| Zendesk              | `Zendesk`                  |
| AWS Personalize      | `AWS Personalize`          |
| Amazon Kinesis       | `Amazon Kinesis`           |

{% hint style="info" %}
**NOTE:** You can also refer to [this section](https://docs.rudderstack.com/user-guides/how-to-guides/how-to-filter-selective-destinations#destination-naming-convention) for more information on the naming convention of the `destinations names`.
{% endhint %}

### Specifying selective destinations

You can also choose to load or send events to selective destinations by passing an [integrations object](#integrationopts) in the options parameter of the supported API methods. RudderStack loads or sends events only to those destinations that are enabled.

The format of the `load` method with integration names passed as arguments will look like the following:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  integrations: { All: false, <destination_name>: true },
});
```

The format of the `track` method with integration names passed as arguments will look like the following:

```javascript
rudderanalytics.track(
  "test track event GA3",
  {
    revenue: 30,
    currency: "USD",
    user_actual_id: 12345,
  },
  {
    integrations: { All: false, <destination_name>: true }
  },
);
```

where `<destination_name>` is the name of the destination.

{% hint style="info" %}
Please refer to the section above for the [common destinations](#common-destination-names) names or refer to [this section](https://docs.rudderstack.com/user-guides/how-to-guides/how-to-filter-selective-destinations#destination-naming-convention) for destination naming convention.
{% endhint %}

An example to only load `Google Analytics` and `Intercom` destinations is as shown:

```javascript
rudderanalytics.load(YOUR_WRITE_KEY, DATA_PLANE_URL, {
  integrations: { All: false, "Google Analytics": true, Intercom: true },
});
```

An example to only send `track` event to `Google Analytics` destination is as shown:

```javascript
rudderanalytics.track(
  "test track event GA3",
  {
    revenue: 30,
    currency: "USD",
    user_actual_id: 12345,
  },
  {
    integrations: { All: false, "Google Analytics": true },
  }
);
```

For more information, refer to the [How to Filter Selective Destinations](https://docs.rudderstack.com/user-guides/how-to-guides/how-to-filter-selective-destinations) section.

## Context and traits

RudderStack gives you the option to automatically capture certain event-specific and user-specific data, based on the type of the event.

In this section, we cover two specific dictionaries within the [**`options`**](#options) parameter included in the SDK-supported API methods.

### Context

A context is a dictionary of additional information about a particular event data, such as a user’s locale.

{% hint style="warning" %}
A context is a complete and specific piece of information. Any other information provided outside of this specification is ignored.
{% endhint %}

### Traits

Traits is an optional dictionary included within [**`context`**](#context) which specifies the user's unique traits. This is a very useful field for linking the user's information from a previously made [**`identify()`**](#identify) call to the subsequent [**`track()`**](#track) or [**`page()`**](#page) calls.

To better understand how contexts and traits work, refer to the following `identify` event:

```javascript
rudderanalytics.identify("userId", {
  plan: "Paid, Premium",
  email: "name@surname.org",
});
```

The trait in the above event is `plan`. If you wish to include this trait in a subsequent `track()` or `page()`event triggered by the user, you can establish the association by passing this trait into `context.traits` as shown:

```javascript
rudderanalytics.track(
  "Subscribed",
  {
    campaign: "Subscribe",
  },
  {
    context: {
      traits: {
        plan: "Paid, Premium",
      },
    },
  }
);
```

The above snippet will append `plan` as a trait to the `track` event. Note that the trait `email` will not be appended, as it was not specified in the `context.traits` field.

## FAQs

Refer to the [**FAQs**](ttps://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/faqs) section for solutions to some of the commonly faced issues while using the RudderStack JavaScript SDK on your website.

## Contact Us

For more information on any of the sections covered in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

If you come across any issues while using this SDK, feel free to submit them on our [**GitHub issues page**](https://github.com/rudderlabs/rudder-sdk-js/issues).
