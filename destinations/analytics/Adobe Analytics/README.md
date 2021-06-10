---
description: >-
  Step-by-step guide to send your event data from RudderStack to Adobe Analytics
---

## Adobe Analytics

[Adobe Analytics](https://www.adobe.io/apis/experiencecloud/analytics.html) is a real-time marketing analytics platform that provides cross-channel insights to discover high-value audiences and deliver business growth. It offers APIs that enable you to integrate all the important customer data into your key business processes.

RudderStack supports sending real-time customer events to Adobe Analytics.

## Getting Started

To enable sending data to Adobe Analytics, you will first need to add it as a destination in RudderStack. Once the destination is configured and enabled, events from RudderStack will start flowing to Adobe Analytics.

Before configuring Adobe Analytics as a destination, verify if the source platform supports sending events to RudderStack, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device Mode** | **Supported** | **Supported** | **Supported** |
| **Cloud Mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}
