---
description: Step-by-step guide to set up Quantum Metric as a destination in RudderStack
---

# Quantum Metric

[Quantum Metric](https://www.quantummetric.com/) is a popular behavior analytics platform, suitable for marketing teams and product managers to better understand and improve their product. It allows them to understand the behavior of their website's visitors through screen recording sessions and quantifying actions taken on your website.

RudderStack helps you integrate your website with Quantum Metric to auto-track all your user data.

## Getting Started

Before configuring Quantum Metric as a destination in RudderStack, please make sure that the source platform is supported by Quantum Metric. You can refer to the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that Quantum Metric supports the source type, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and select Quantum Metric as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to your destination, and then click on **Next**. You should see the following screen:

![Quantum Metric Connection Settings in RudderStack](../../.gitbook/assets/image%20%2842%29.png)

* Please provide the `Site ID`.  You will get your `Site ID` by first logging into you IAM Quantum Metric dashboard. Then, select the Account button in the top-right-hand corner. Then, click on **Install** and inspect the `Installation Tag`. Your `Site ID` will be found in the following line.
```
qtm.src = 'https://cdn.quantummetric.com/qscripts/quantum-<SITE_ID>.js';
```
Copy, the `Site ID` and paste it in the input field on your RudderStack settings.
* Finally, click on **Next** to complete the configuration. 

Quantum Metric will now be added and enabled as a device-mode destination in RudderStack.

## Sending events to Quantum Metric

There is **no need** to call any of `identify`, `page` or `track` methods explicitly, as Quantum Metric auto-tracks your user data.

## Contact Us

If you come across any issues while configuring Quantum Metric with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!





