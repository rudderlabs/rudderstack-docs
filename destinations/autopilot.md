---
description: Step-by-step guide to set up Autopilot as a destination in RudderStack.
---

# Autopilot

[Autopilot ](https://www.autopilothq.com/)is a popular marketing automation platform that allows you to track and capture new leads and create detailed customer journeys. With Autopilot, you can connect with your existing customers by sending them personalized messages, and surveys to improve your product design. Autopilot allows you to boost your customer retention rate, and automate repetitive tasks with ease.

RudderStack allows you to configure Autopilot as a destination to which you can send your event data seamlessly.

## Getting Started

To enable sending data to Autopilot, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Autopilot.

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud mode** | - | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Autopilot, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Autopilot.**

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen.

![Autopilot Settings](../.gitbook/assets/autopilot.png)

* Fill up the details and click on **Next** to complete the configuration. Autopilot should now be added and enabled as a destination in RudderStack.

## Identify

The `identify` call captures the relevant details about the visiting user.

{% hint style="info" %}
For more information on the `identify` method, please refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec).
{% endhint %}

A sample `identify` payload is as shown in the snippet below:

```javascript
[[RSClient sharedInstance] identify:@"developer_user_id"
                                 traits:@{@"foo": @"bar", @"foo1": @"bar1"}];
```

## Track

The `track` call captures the information related to the actions performed by the user, along with their properties, or traits.

{% hint style="info" %}
For more information on the `track` method, please refer to our guide on [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec).
{% endhint %}

A sample `track` payload is as shown in the snippet below:

```text
[[RudderClient sharedInstance] track:@"test_event"
                          properties:@{@"key":@"value", @"foo": @"bar"}]
```

## FAQs

### Where can I get the API Key from?

You can retrieve the API key from the settings page of the [Autopilot](https://dashboard.branch.io/#/settings) dashboard. For more information, please check the Getting Started section above.

## Contact Us

If you come across any issues while configuring Autopilot with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

