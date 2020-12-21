---
description: Step-by-step guide to set up Hotjar as a destination in RudderStack
---

# Hotjar

[Hotjar](https://www.hotjar.com/) is a popular behavior analytics platform, suitable for marketing teams and product managers to better understand and improve their product. It allows them to understand the behavior of their website's visitors through heat maps, surveys and conversion funnels.

RudderStack helps you integrate your website with Hotjar to auto-track all your user data.

## Getting Started

Before configuring Hotjar as a destination in RudderStack, please make sure that the source platform is supported by Hotjar. You can refer to the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that Hotjar supports the source type, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and select Hotjar as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to your destination, and then click on **Next**. You should see the following screen:

![Hotjar Connection Settings in RudderStack](../.gitbook/assets/image%20%2842%29.png)

* Please provide the `Site ID`.  You will get your `Site ID` under **Settings** - **Sites & Organizations** after logging into your Hotjar account.
* You can enable or disable native SDK to send your events as per your preference. Finally, click on **Next** to complete the configuration. 

Hotjar will now be added and enabled as a destination in RudderStack.

## Sending events to Hotjar

There is **no need** to call any of `identify`, `page` or `track`methods explicitly, as Hotjar auto-tracks your user data.

## Contact Us

If you come across any issues while configuring Hotjar with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

