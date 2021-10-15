---
description: Step-by-step guide to integrate RudderStack with VWO for efficient A/B testing
---

# VWO (Visual Website Optimizer)

VWO is an A/B testing and product optimization platform that helps you improve your key business metrics through valuable insights and better product engagement. VWO provides an intuitive visual editor where you can run A/B tests without the need to write any HTML code.

RudderStack supports integration with VWO that allows you to send relevant events from VWO to other destinations configured to that source.

![](https://img.shields.io/badge/stability-beta-blueviolet?style=for-the-badge\&logo=github)

## Getting Started

Before configuring your source and destination on the RudderStack app, please check whether the platform you are working on is supported by VWO. Refer the table below:

| **Connection Mode** | **Web**       | **Mobile** | **Server** |
| ------------------- | ------------- | ---------- | ---------- |
| **Device mode**     | **Supported** | -          | -          |
| **Cloud mode**      | -             | -          | -          |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

{% hint style="warning" %}
We support only JavaScript as a source while adding VWO as a destination in RudderStack.
{% endhint %}

Once you have confirmed that the platform is supported, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com), add the JavaScript source and select VWO as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* After naming the destination, click on **Next**. You should see the following screen:

![](<../../.gitbook/assets/image (43).png>)

You can configure the settings such as enabling **Single Page Application**, setting **Library Tolerance **and **Settings Tolerance**, and **Use Existing jQuery** while initializing the VWO SDK. Send experiment viewed as track or identify traits can also be configured. To complete the configuration, click on **Next**.

## Sending Experiment Viewed from VWO

When one of the variations from an experiment is loaded for a user, RudderStack sends a `track` call with `Experiment Viewed` as the event name, along with the experiment and variation details as the associated properties.

A sample code snippet for this activity is as shown:

```
rudderanalytics.track('Experiment Viewed', {
  experiment_id: 'Signup',
  variation_name: 'Signup as a default landing'
});
```

This `track` event will be sent to the other destinations such as Google Analytics, Mixpanel, etc. This is useful in analyzing the experiment results on a different platform. You can also set experiment-related data such as user traits, so that the other destinations have the knowledge of the variations a user has seen.

## Tracking Revenue Goals

RudderStack also allows forwarding the revenue amount to VWO when `Order Completed` track event is called.

A sample code snippet for the above `track` call is as shown:

```
// We use revenue or amount from the properties
rudderanalytics.track('Order Completed', {
  revenue: 125
});
```

## FAQs

### How to get the VWO Account ID?

The VWO Account ID can be obtained by logging into your VWO dashboard. Then, click on the Settings icon and click on **Account**. Here, you should be able to view your Account ID.

For detailed step-by-step instructions, please refer to this [VWO help guide](https://help.vwo.com/hc/en-us/articles/360008469173-How-to-find-your-account-ID).

## Contact Us

If you come across any issues while configuring VWO with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

