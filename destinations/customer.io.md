---
description: Step-by-step guide to send your event data from RudderStack to Customer.io
---

# Customer.io

[Customer.io](https://customer.io/) is a popular platform for sending automated messages and emails to your customers, with a focus on security and privacy. With Customer.io, you get complete information about your customers in one place, and use it to create personalized messages and campaigns for them.

RudderStack supports sending your events to CustomerIO from the cloud mode S2S \(Server to Server\) and native web SDKs by calling the relevant RudderStack APIs.

## Getting Started

Before configuring your source and destination on the RudderStack app, please check whether the platform you are working on is supported. You can refer the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Customer.io, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and Customer.io as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Fill the required fields such as API Key and Site ID as shown in the screenshot below:

![Customer.io Connection Settings](../.gitbook/assets/image%20%2845%29.png)

Once the destination is enabled, events from our SDK will start to flow to Customer.io.

{% hint style="info" %}
We primarily need the properties API Key and Site ID to start sending events to Customer.io. You may enable the **Use native SDK to send events** option to send events through Customer.io's native JavaScript SDK.
{% endhint %}

## Identify

The `identify` call sends the event data to Customer.io along with the properties that you pass as the RudderStack traits. For more information on the identify call, please refer our [RudderStack API specification](https://docs.rudderstack.com/getting-started/rudderstack-api-spec) documentation.

RudderStack sends the `createdAt` field as `created_at` field to Customer.io to register user `sign up` time in the dashboard. If you don't send that field, we'll fill that field with the `timestamp` from the `identify` event.

`userId` is a mandatory field for Customer.io and if it is not provided, we use `anonymousId` in place of that.

The following code snippet is an example of an `identify` call in RudderStack:

```text
// a sample identify 
rudderanalytics.identify("my-userID", {
        name: "Tintin",
        city: "Brussels",
        country: "Belgium",
        email: "tintin@herge.com"
});

// As created at is not present in the above call, we will append it with
current timestamp value.
```

## Page

If you are using a native SDK, the Customer.io JavaScript snippet is loaded and it captures the `page` view automatically. However, if you want to pass additional properties, you can call `rudderanalytics.page()` _\*\*_that sends the `page`event with the associated properties that you pass along with the call.

Here is a sample of a `page` call in RudderStack:

```text
// "home" is the name of the page. 
rudderanalytics.page("home", {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer"
});
```

## Screen

The `screen` call records the screen views of the user in your App. If you have turned on the screen views in your App implementation from the [iOS](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk) or [Android](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk) SDK it will register as `Viewed <screen name> Screen` under the Activities tab for the user. We'll forward the `properties` you've passed along with the `screen` call to [Customer.io](https://customer.io) dashboard as it is.

Here is a sample `screen` call in using RudderStack iOS SDK:

```text
[[RudderClient sharedInstance] screen:@"Main" 
            properties:@{@"prop_key" : @"prop_value"}];
```

The above event will be transformed as `Viewed Main Screen` in your dashboard.

## Track

The `track` call _\*\*_will pass the event properties to Customer.io. You may call `rudderanalytics.track()`with or without the event properties. For more information on how `track`call works, please refer to our [RudderStack API specification](https://docs.rudderstack.com/getting-started/rudderstack-api-spec) documentation.

The following code snippet shows how a sample `track` call is made in RudderStack:

```text
rudderanalytics.track("Track me", {
        category: "category",
        label: "label",
        value: "value"
 });
```

## Device Token Registration

We register the `deviceToken` to [Customer.io](https://customer.io) on the following Application Lifecycle Events.

* `Application Installed`
* `Application Opened`
* `Application Unistalled` 

To use this feature, you've to turn on the feature `trackApplicationLifecycleEvents` in your mobile SDK implementation code. Moreover, you have to register your `deviceToken` after initializing the SDK.

Example for registering `deviceToken` is as follows:

{% tabs %}
{% tab title="iOS" %}
```text
[[[RudderClient sharedInstance] getContext] putDeviceToken:[self getDeviceToken]];
```
{% endtab %}

{% tab title="Android" %}
```text
rudderClient!!.rudderContext.putDeviceToken(getDeviceToken())
```
{% endtab %}
{% endtabs %}

## FAQs

### Where do I find the **API Key** and **Site ID** for configuring Customer.io in RudderStack?

In order to obtain the API Key and Site ID, you will first need to create an account in Customer.io. Once you have done that, you can find this information on their Integration page.

## Contact Us

If you come across any issues while configuring Customer.io with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

