---
description: >-
  Detailed technical documentation on the RudderStack’s JavaScript SDK to send data from your website to your destinations via RudderStack.
---

# **JavaScript**

## **What is the RudderStack JavaScript SDK?**

RudderStack's JavaScript SDK leverages the `rudder-analytics.js` library to track and send user events from your website to RudderStack. You can then further transform and route this event data to the destination platform of your choice.

## **Installing the RudderStack JavaScript SDK**

To quickly get up and running with setting up and using the RudderStack JavaScript SDK, go through our [quick start guide](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/quick-start-guide).

## **JavaScript SDK APIs**

RudderStack’s JavaScript SDK makes it very easy for you to send your event data to any destination without having to implement a new API every single time.

Let us take a look at some of the key methods in this section:

### **Load**

The `load` method loads the `rudder-analytics.js` file with your write key.

It is defined as follows:

`rudderanalytics.load(<YOUR_WRITE_KEY>, <DATA_PLANE_URL>, [options]);`

{% hint style="info" %}
**NOTE**: You need to replace `<YOUR_WRITE_KEY>` with the write key in the RudderStack Control Plane and `<DATA_PLANE_URL>` with the URL of the RudderStack Server.
{% endhint %}

#### **The `options` parameter**

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

| Parameter             | Type                                | Description                                                                                                                                                                                                |
| :-------------------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`logLevel`**        | String                              | Options include **`DEBUG`**, **`INFO`**, and **`WARN`**.                                                                                                                                                   |
| **`integrations`**    | [IntegrationOpts](#integrationopts) | Refer to the [**`IntegrationOpts`**](#integrationopts) section.                                                                                                                                            |
| **`configUrl`**       | String                              | Defaults to **`https://api.rudderlabs.com`**. You need to provide the server (Control Plane) endpoint serving your destination configurations. **`sourceConfig`** is appended to this endpoint by the SDK. |
| **`queueOpts`**       | [QueueOpts](#queueopts)             | Refer to the [**`QueueOpts`**](#queueopts) section.                                                                                                                                                        |
| **`loadIntegration`** | Boolean                             | Defaults to **`true`**. If set to **`false`**, the destination SDKs are not fetched by the SDK. This is supported for **Amplitude** and **Google Analytics**.                                              |

#### **Self-hosted Control Plane**

If you are self-hosting the Control Plane, your `load` call will look like the following:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  configUrl: CONTROL_PLANE_URL,
});
```

#### **Selective Destinations**

RudderStack allows you to load selective destinations as specified by you and disable sending events to the remaining destinations. You can specify these destinations through the `load` call, as shown:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  integrations: { All: false, destination_name: true },
});
```

For more information, check the [Filter Selective Destinations](#filter-selective-destinations-to-send-event-data) section.

### **Identify**

The `identify` method allows you to link the users and their actions to a specific `userid`. You can also add additional information as `traits` to a user. Once you set the `identify` information to the user, those will be passed to the successive [`track`](#track) or [`page`](#page) calls. To reset the user identification, you can use the [`reset`](#reset) method.

It is defined as follows:

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

The `identify` method has the following parameters:

| **Parameter**  | **Presence** | **Description**                                                                                                                                                                                     |
| :------------- | :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`userid`**   | Optional     | This string defines the database ID of the user. If provided, this argument will be sent to destinations as the user ID instead of an anonymous ID.                                                 |
| **`traits`**   | Optional     | This dictionary contains the traits or properties associated with a `userid` such as email, address, etc.                                                                                           |
| **`options`**  | Optional     | This dictionary provides information such as context, integrations, and `anonymousId`. Specific user traits can be provided as the context as well. Refer to the [**`options`**](#options) section. |
| **`callback`** | Optional     | This function gets executed after successful execution of the **`identify()`** method.                                                                                                              |

{% hint style="success" %}
There is no need to call `identify()` for anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`.
{% endhint %}

{% hint style="info" %}
**NOTE**: The `anonymousId` is a **UUID** **\(Universally Unique Identifier\)** generated to uniquely identify the user. Also, if it is provided by the user using the `setAnonymousId` method, the user-specified `anonymousId` overrides the SDK-generated one.
{% endhint %}

The JavaScript SDK generates a unique `anonymousId`, stores it in a cookie named `rl_anonymous_id` in the top-level domain, and attaches to every subsequent event. This helps in identifying the users from other sites that are hosted under a sub-domain.

{% hint style="info" %}
As an example, if you include the RudderStack JavaScript SDK in both **admin.samplewebsite.com** and **app.samplewebsite.com**, the SDK will store the cookie in the top-level domain **samplewebsite.com**.
{% endhint %}

If you identify a user with your application's unique identifier like email, database ID etc. RudderStack stores this ID in a cookie named `rl_user_id` and attaches to every event.

There are two options that you can use to identify anonymous users when using the JavaScript SDK:

#### **Overriding `anonymousId` in the `options` parameter**

There can be scenarios where you may want to provide your own `anonymousId` instead of an auto-generated ID by the SDK. To do so, you can provide the `anonymousId` in the `options` parameter of the `identify` call, as mentioned above. This will send the value provided by you in the `anonymousId` key of the event.

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

#### **Overriding the `anonymousId` for all future events using `setAnonymousId`**

You can also override the `anonymousId` for all the future events using the `rudderananlytics.setAnonymousId` method.

An example of this is shown in the code snippet below:

```javascript
rudderanalytics.setAnonymousId("my-anonymous-id");

// All event payloads will have the anonymousId key set "my-anonymous-id".

rudderanalytics.identify("userId", { email1: "name@domain.com" }, () => {
  console.log("in identify call");
});
```

##### **AMP Analytics**

You can also parse the AMP Linker ID and set the `anonymousId` as shown:

```javascript
rudderanalytics.setAnonymousId(
  null,
  "<version>*<checkSum>*<idName1>*<idValue1>*<idName2>*<idValue2>..."
);
```

Here, the second parameter is the AMP Linker ID format in accordance with the [specified structure](https://github.com/ampproject/amphtml/blob/master/extensions/amp-analytics/linker-id-receiving.md#format). For the links decorated with the [RudderStack Linker parameter](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/amp-analytics#amp-linker), the **`<idName1>`** value will be **`rs_amp_id`**.

Calling the above method will parse the Linker ID and set the **`anonymousId`** as the value of the **`rs_amp_id`** key.

#### **Setting `userid` to Empty**

If you would like to set the `userid` to be empty, pass an empty string or `""`. A common use case for this is if an anonymous user was identified with a `userid` and then logs out of their account. You can then `identify("", {isLoggedIn: false})` and the user will continue to be identified by their `anonymousId` for future events.

{% hint style="warning" %}
Do **not** identify with `null`, as this will not allow you to pass a traits object and it will keep the current `userid`.
{% endhint %}

#### **Identifying New Users**

To identify new users in scenarios like a new login, you can take one of the following approaches:

- Call the `identify` API with a new `userid`. RudderStack will reset all cookies related to the user for `userid` and `user-traits` and update them with the new values provided by you.

{% hint style="info" %}
The `anonymousId` will remain unchanged in this case. It will be the value that you set explicitly using `setAnonymousId` , or the auto-generated value set by the SDK while loading.
{% endhint %}

- Explicitly call `reset` and then call `identify`. It has the same effect as described above.

For updating the traits of a user, you can call identify with the same `userid` multiple times with new traits. All the traits for that user keep on getting appended/modified.

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

Calling `reset()` or identifying with a new `userId` with new traits will reset the earlier traits and update them with the new values.

### **Page**

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

| Parameter                   | Type                                | Description                                                                                                                                                                                  |
| :-------------------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`integrations`**          | [IntegrationOpts](#integrationopts) | Refer to the [**`IntegrationOpts`**](#integrationopts) section. More information on how to use this parameter can be found [here](#how-to-filter-selective-destinations-to-send-event-data). |
| **`anonymousId`**           | String                              | Overrides the current event's **`anonymousId`** at the top level.                                                                                                                            |
| **`originalTimestamp`**     | ISO 8601 date string                | Overrides the current event's **`originalTimestamp`** at the top level.                                                                                                                      |
| **`<other keys>: <value>`** | -                                   | Merged with the event's contextual information.                                                                                                                                              |

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
More information on using the **`IntegrationOpts`** option can be found in [Filter Selective Destinations to Send Event Data](#filter-selective-destinations-to-send-event-data) section.
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

## **Filter Selective Destinations to Send Event Data**

RudderStack allows you to send your event data only to a few intended destinations by filtering out the rest. You can do so by passing an [integrations object](#integrationopts) in the options parameter of the supported API methods.

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

### **Specifying Selective Destinations**

You can also choose to load or send events to selective destinations by passing an [integrations object](#integrationopts) in the options parameter to the supported API methods. RudderStack loads or sends events only to those destinations that are enabled.

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

## **Context and Traits in RudderStack**

RudderStack gives you the option to automatically capture certain event-specific and user-specific data, based on the type of the event.

In this section, we cover two specific dictionaries, within the [`options`](#options) parameter, which is included in the supported API methods.

### **Context**

A context is a dictionary of additional information about a particular data, such as a user’s locale.

{% hint style="info" %}
**NOTE**: A context is a complete and specific piece of information. Any other information provided outside of this specification is ignored.
{% endhint %}

### **Traits**

Traits is an optional dictionary included within [`context`](#context), which specifies the unique traits of the user. This is a very useful field for linking information of a user from a previously made [`identify()`](#identify) call to a [`track()`](#track) or [`page()`](#page) event.

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
    context: {
      traits: {
        plan: "Paid, Premium",
      },
    },
  }
);
```

The above code snippet will append `plan` as a trait to the track event. The trait `email` will not be appended, as it was not specified in the `context.traits` field.

## **FAQs**

Refer to [FAQs](ttps://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/faqs) page for solutions to some of the commonly faced issues while using the RudderStack JavaScript SDK on your website.

## **Contact Us**

To know more about the RudderStack JavaScript SDK or to see it in action, you can [contact us](mailto:%20docs@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

In case you come across any issues while using this SDK, please feel free to submit them on our [GitHub issues page](https://github.com/rudderlabs/rudder-sdk-js/issues).
