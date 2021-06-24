---
description: Step-by-step guide to send your event data from RudderStack to Heap.io.
---

# Heap.io

[Heap.io](https://heap.io/) is a popular analytics platform built for marketers, product managers, and customer success teams. With Heap, you can track every clip, tap or screen swipe action of your customers. With this data, and combining Heap's cutting-edge analytics capabilities, you can segment your users based on their behavior, and offer them unique digital experiences. If boosting your conversion rates and customer engagement is your goal, then Heap.io is a great tool to have in your marketing stack.

RudderStack supports Heap.io as a destination to which you can send your event data in real-time.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/heap)**.**
{% endhint %}

## Getting Started

To enable sending data to Heap.io, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Heap. 

Before configuring your source and destination on the RudderStack, verify if the source platform is supported by Heap, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported**| - | **-** |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Heap.io, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderstack.com/signup?type=freetrial), add the source. Then, from the list of destinations, select Heap.io**.**

{% hint style="info" %}
Follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Heap.io Connection Settings on RudderStack dashboard](../../.gitbook/assets/screen-shot-2020-12-03-at-2.20.59-pm.png)

To configure Heap.io as a destination, you need the Heap App ID. To get the App ID, login to your Heap account and navigate to [**App** - **Settings** - **Projects**](https://heapanalytics.com/app/settings/projects), and copy the development or production App ID.

* Once you've entered the Heap App ID, click on **Next**. Heap.io should now be configured as a destination on your RudderStack dashboard.

{% hint style="info" %}
The Heap destination currently supports only **`track`** and **`identify`** calls.
{% endhint %}

## Identify

RudderStack's `identify` method captures the relevant details about the visiting user.

{% hint style="info" %}
For more information on the `identify` call, refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec).
{% endhint %}

A sample `identify` payload is as shown in the snippet below:

```javascript
rudderanalytics.identify("user123", {
  name: "Name LastName",
  email: "example@domain.com",
});
```

## Track

With the `track` API, RudderStack makes a call to Heap.io to track your user actions as well as their associated properties.

{% hint style="info" %}
For more information on the `track` method, refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec).
{% endhint %}

A sample `track` call is as shown:

```javascript
rudderanalytics.track("Order Completed", {
  order_id: "12345",
  category: "clothing",
  revenue: 99.9,
  shipping: 13.99,
  tax: 10.99,
  promotion_id: "PROMO_NOW",
});
```

## FAQs

#### How do I get my Heap App ID?

You can procure your Heap ID by logging into your Heap account and navigate to App - Settings - Projects, and copying the required development or production App ID. Click [here](https://heapanalytics.com/app/settings/projects) to go to your Heap dashboard and get the App ID.

## Contact Us

To know more about the Heap.io integration and how to use it, feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.

