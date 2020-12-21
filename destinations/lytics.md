---
description: Step-by-step guide to send your event data from RudderStack to Lytics.
---

# Lytics

[Lytics](https://www.lytics.com/) is a popular customer data platform, built for marketers. It allows you to efficiently leverage your first-party customer data to deliver tailored customer journeys. With Lytics, you can better engage with your customers through personalized messages and automated, AI-driven marketing campaigns.

RudderStack supports Lytics as a destination to which you can send your event data in real-time.

## Getting Started

To enable sending data to Lytics, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Lytics.

Before configuring your source and destination on the RudderStack, verify if the source platform is supported by Lytics, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | **-** |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Lytics, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderstack.com/signup?type=freetrial), add the source. Then, from the list of destinations, select Lytics**.**

{% hint style="info" %}
Follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Lytics Destination Settings on the RudderStack dashboard](../.gitbook/assets/lytics.png)

The connection settings are explained in more detail as follows:

* **Account ID**: The Lytics account ID you can get from their dashboard should be entered here.
* **API Key**: Create an API key from Lytics dashboard and enter the details here.

{% hint style="info" %}
To get the API Key, go to your Lytics dashboard, and navigate to **Account** - **Manage Accounts** - **Account Settings** - **API Token**. You can create an API token here and use this information to configure Lytics as a destination.
{% endhint %}

* **Stream**: Assign a name for the stream you want to send your data to.
* **Block Load**: This is used to get your most updated audience membership and profile data, before sending it to Lytics.
* **Load ID**: This information is used to identify users across domains.

## Page

With the `page` method, RudderStack makes a call to Lytics to record a page view.

{% hint style="info" %}
For more information on the `page` method, refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec).
{% endhint %}

A sample `page` call is as shown:

```javascript
rudderanalytics.page("new category", "page name", {
  url: "url",
  path: "/path",
});
```

Similarly, we can also make `screen` calls. However, this is supported only in the cloud-mode.

{% hint style="info" %}
To know more about how the `screen` call works, refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#9-screen).
{% endhint %}

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

A sample screen call is as shown:

```objectivec
[[RSClient sharedInstance] screen:@"Main"];
```

## Track

With the `track` API, RudderStack makes a call to Lytics to track user actions and their associated properties.

{% hint style="info" %}
For more information on the `track` method, refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec).
{% endhint %}

A sample `track` call is as shown:

```javascript
rudderanalytics.track("Order Completed", {
  order_id: "1a2b3c4d",
  category: "category",
  revenue: 99.9,
  shipping: 13.99,
  tax: 20.99,
  promotion_id: "PROMO_1234",
});
```

## Identify

The `identify` call captures the relevant details about the visiting user.

{% hint style="info" %}
For more information on the `identify` method, refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec).
{% endhint %}

A sample `identify` payload is as shown in the snippet below:

```javascript
rudderanalytics.identify("abc123", {
  name: "FirstName LastName",
  email: "example@gmail.com",
});
```

## FAQs

### Where do I get the Lytics API Key?

Go to your Lytics dashboard, and navigate to **Account** - **Manage Accounts** - **Account Settings** - **API Token**. You can create an API token here, which can be used to configure the destination on the RudderStack dashboard.

## Contact Us

To know more about the Lytics integration and how to use it, feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.

