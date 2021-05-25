---
description: Step-by-step guide to send event data from RudderStack to Keen.
---

# Keen

[Keen](https://keen.io/) is a customer analytics platform that allows you to collect, analyze and get invaluable marketing insights from your customer event data.

RudderStack supports S2S \(Server to Server\) cloud mode and Web Native SDK for integration with Keen. You can thus send event data attached to Keen collections using RudderStack APIs.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/keen)**.**
{% endhint %}

## Getting Started

To enable sending data to Keen, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Keen.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Keen, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Keen, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Keen**.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Connection Settings for Keen in RudderStack](../../.gitbook/assets/image%20%2824%29.png)

* Please enter the **Project ID** and **Write Key**. 
* You can enable the **Use native SDK to send events** setting to send events through Keen's native JavaScript SDK.

### Configuring Add-ons

If enabled, RudderStack attaches the following Keen add-ons to the events, which helps in their data enrichment before routing them to Keen:

| Add-on | Description |
| :--- | :--- |
| **Geo IP Add On** | The enriched  output will be available under the `ip_geo_info` key. |
| **User Agent Add On** | The enriched  output will be available under the `parsed_user_agent` key. |
| **URL Parsing Add On** | The enriched  output will be available under the  `parsed_page_url` key. |
| **Referrer Parsing Add On** | The enriched  output will be available under the `referrer_info` key. |

{% hint style="info" %}
Note: We only pass the IP, page and referrer add-ons to Keen if the event contains a valid `ip`, `page`, `URL` and `referrer` property.
{% endhint %}

![Keen add-ons settings in RudderStack](../../.gitbook/assets/image%20%2838%29.png)

* Once you have finalized all the settings, click on **Next** to complete the configuration. Keen will now be added as a destination in RudderStack.

## Identify

Calling `rudderanalytics.identify()` **** has no effect on Keen whatsoever, when called from the server-side SDKs. However, when called from client-side SDKs, RudderStack calls the Keen `extendEvents`with a user object `userId`and traits passed in from the `identify` call.

Calling `extendEvents` adds the user object to all subsequent`recordEvent` calls to Keen. Hence, to view the `identify` data , you will have to make a subsequent `page` and `track` call from RudderStack.

A sample `identify` call is as shown in the following code snippet:

```text
rudderanalytics.identify("my-userID", {
        name: "Tintin",
        city: "Brussels",
        country: "Belgium",
        email: "tintin@herge.com"
});
```

This will pass the below user to every subsequent event data:

```text
user: {
  userId: "my-userID",
  traits: {
    name: "Tintin",
    city: "Brussels",
    country: "Belgium",
    email: "tintin@herge.com"
  }
} 
```

## Page

Calling `rudderanalytics.page()` ****will pass the `page` properties to the Keen collection `Viewed <category> <name> page`. To know more about the `page`call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

A sample `page` call is as shown in the snippet below:

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

This will send the following properties to the Keen `Viewed Home Page` collection:

* `path`
* `url`
* `title`
* `search`
* `referrer`
* `userId`
* `user traits` \(If coming from the client SDKs\)

## Track

Calling `rudderanalytics.track()` ****will pass the event properties to Keen on the collection `event-name`. To know more about the `track`call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

An example `track` call is as shown:

```text
rudderanalytics.track("Track me", {
        category: "category",
        label: "label",
        value: "value"
 });
```

The above call will send the following properties to Keen's `Track me` collection:

* `category`
* `label`
* `value`
* `userId`
* `user traits` \(If coming from the client SDKs\)

## Screen

The `screen` call records the screen views of the user in your App. If you have turned on the screen views in your App implementation from the [iOS](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk) or [Android](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk) SDK it will be registered in your dashboard. We'll forward the `properties` you've passed along with the `screen` call as it is.

Here is a sample `screen` call in using RudderStack iOS SDK.

```text
[[RudderClient sharedInstance] screen:@"Main" 
            properties:@{@"prop_key" : @"prop_value"}];
```

## FAQs

### Where do I get the Project ID and Write Key for configuring Keen on RudderStack?

You will find the **Project ID** and **Write Key** by navigating to **Projects** - \(select your project\) - **Access** - **Project Details**.

## Contact Us

If you come across any issues while configuring Keen with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

