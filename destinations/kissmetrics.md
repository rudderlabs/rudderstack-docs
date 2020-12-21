---
description: Step-by-step guide to send event data from RudderStack to Kissmetrics
---

# Kissmetrics

[Kissmetrics](https://www.kissmetricshq.com/) is a product analytics platform to help you increase conversion, as well as drive customer engagement and retention. 

RudderStack supports sending your events from cloud mode S2S \(Server to Server\) and Web Native SDKs by calling our APIs.

## Getting Started

To enable sending data to Kissmetrics, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from our SDKs will start to flow to Kissmetrics.

Before configuring Kissmetrics as a destination in RudderStack, please make sure that the source platform is supported by Kissmetrics. You can refer to the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that Kissmetrics supports the source type, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and select **Kissmetrics** as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to your destination, and then click on **Next**. You should see the following screen:

![Connection Settings for Kissmetrics in RudderStack](../.gitbook/assets/image%20%2824%29%20%281%29.png)

* Please enter the **API Key** in the **Connection Settings**. You may also enable the **Use native SDK to send events** setting to send events through Kissmetrics' native JavaScript SDK.

### Prefix Properties

Enabling this setting will add the event name to all the properties of the event. This works for `page` ****and `track` ****properties**.**

{% hint style="info" %}
You will need to enable this setting while building reports in Kissmetrics.
{% endhint %}

* Once you have finalized the settings, click on **Next** to complete the configuration and add Kissmetrics as a destination in RudderStack.

## Identify

Calling `rudderanalytics.identify()` ****pushes an `identify`  call with the `userId` ****and ****`set` _****_ ****with the `user-traits` to the Kissmetrics queue object while using the the Native SDK. For more information on the `identify` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

For sending data through the API's cloud mode, we call the [http://trk.kissmetrics.com/s](https://trk.kissmetrics.com/s) end-point for registering users and their traits.

A sample `identify` call is as shown:

```text
// a sample identify 
rudderanalytics.identify("my-userID", {
        name: "Tintin",
        city: "Brussels",
        country: "Belgium",
        email: "tintin@herge.com"
});
```

will pass the following to the `_kmq kissmetrics` object.

```text
  ['identify', 'my-userID']
  ['set', {
                  name: "Tintin",
                  city: "Brussels",
                  country: "Belgium",
                  email: "tintin@herge.com"
          }
  ]
```

{% hint style="info" %}
Nested objects are flattened as `a.b.c` ****for input data ****`{a:{b:c}}` before sending the data to Kissmetrics, as it is unable to parse nested objects.
{% endhint %}

## Page

Calling `rudderanalytics.page()` ****will record the page  properties for event `Viewed <category> <name> page`. For more information on the `page` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

A sample page event is as shown:

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

The above snippet will pass the following to the `_kmq kissmetrics` object:

```text
['record', 'Viewed home page',  {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer"
}] 
```

{% hint style="info" %}
Automatically-tracked Kissmetrics events such as **Visited a site**, etc. will function as and when integrated with RudderStack. Stay tuned!
{% endhint %}

## Track

Calling `rudderanalytics.track()` pushes a record with the event name and the associated properties _****_when using the native SDK integration. For more information on the `track` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

For sending data through the API's cloud mode, we call the [http://trk.kissmetrics.com/e](http://trk.kissmetrics.com/e) end-point for registering the event and its associated properties.

 A sample `track` call is as shown:

```text
rudderanalytics.track("Track me", {
        category: "category",
        label: "label",
        value: "value"
 });
```

will pass the following to the `_kmq kissmetrics` object.

```text
 ['record', "Track me", {
        category: "category",
        label: "label",
        value: "value"
 }]
```

 An event sent to RudderStack with a property called `revenue` , is passed on to Kissmetrics as `Billing amount` as well as `revenue`.

{% hint style="info" %}
In order to send eCommerce events that have a product array as one of their `track` properties, RudderStack sends each product property to the `/s` endpoint from the cloud mode, or pushes it as `['set', {id:, sku: ...}]` from the native SDK.

Please check the [Kissmetrics eCommerce documentation](http://support.kissmetrics.com/article/show/ecommerce-essentials) for more details.
{% endhint %}

## Alias

Calling `rudderanalytics.alias()` ****passes an `alias`call with `userId` and `previousId` to the Kissmetrics queue, when used as a Native SDK integration.  
  
While passing data using the cloud mode, we call the [http://trk.kissmetrics.com/a](http://trk.kissmetrics.com/a) endpoint to alias user identities.

The following code snippet shows a sample `alias` call in RudderStack:

```text
// assuming the previous set userId was "my-userID"
rudderanalytics.alias("my-new-userID");
```

will pass the following to the `_kmq kissmetrics` object.

```text
['alias', "my-new-userID", "userId"]
```

## Screen

The `screen` call records the screen views of the user in your App. If you have turned on the screen views in your App implementation from the [iOS](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk) or [Android](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk) SDK it will register in your dashboard. We'll forward the `properties` you've passed along with the `screen` call as it is.

Here is a sample `screen` call in using RudderStack iOS SDK:

```text
[[RudderClient sharedInstance] screen:@"Main" 
            properties:@{@"prop_key" : @"prop_value"}];
```

## FAQs

### Where do I get the API Key for Kissmetrics?

You can obtain the Kissmetrics API Key by logging into your Kissmetrics account, and navigating to the [Product Settings](https://www.kissmetrics.com/settings). Please refer to the following screenshot for more details:

![Kissmetrics API Key](../.gitbook/assets/image%20%2813%29.png)

## Contact Us

If you come across any issues while configuring Kissmetrics with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

