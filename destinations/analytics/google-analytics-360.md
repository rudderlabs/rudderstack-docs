---
description: >-
  Step-by-step guide to send your event data from RudderStack to Google
  Analytics 360.
---

# Google Analytics 360

[Google Analytics 360](https://marketingplatform.google.com/about/analytics-360/) is the enterprise version of Google Analytics that allows you to get actionable insights from your data. It provides enterprise teams with all the standard Google Analytics features along with more sophisticated analytics capabilities and the ability to export your data and insights to BigQuery. You also get SLA obligations, guaranteed uptime, extended support, and a lot more.

RudderStack supports sending real-time customer events to Google Analytics 360.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/ga360)**.**
{% endhint %}

## Getting Started <a id="getting-started"></a>

To enable sending data to Google Analytics 360, you will first need to add it as a destination in the RudderStack dashboard. Once the destination is configured and enabled, events from RudderStack will start flowing to Google Analytics 360.

Before configuring Google Analytics 360 as a destination, verify if the source platform supports sending events to RudderStack, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device Mode** | **Supported** | - | - |
| **Cloud Mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Then, perform the steps below:

* Choose a source for which you would like to add Google Analytics 360 as a destination. 

{% hint style="info" %}
Follow the guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more details.
{% endhint %}

* From the list of destinations, select **Google Analytics 360**. Then, assign a name to the destination and click on **Next**.
* You should then see the following **Connection Settings** page:

![](../../.gitbook/assets/1%20%2820%29.png)

![](../../.gitbook/assets/2%20%2826%29.png)

![](../../.gitbook/assets/3%20%2823%29.png)

* **Tracking ID** is a required field to configure the destination. You can configure the other options as per your preference. 
* To add a transformation, click on **Create New Transformation**. Otherwise, click on **Next**.

{% hint style="info" %}
See the [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) guide for more details on this feature.
{% endhint %}

* The destination is now configured and enabled.

![](../../.gitbook/assets/final.png)

You can now start sending your real-time events and view them in Google Analytics 360 by going to your Google Analytics 360 dashboard and navigating to **Realtime** - **Events**.

{% hint style="success" %}
For details on the supported events and other additional features refer to the [**Google Analytics documentation**](https://docs.rudderstack.com/destinations/analytics/google-analytics-ga).
{% endhint %}

## FAQs

### Can I anonymize an IP Address in Google Analytics 360?

Yes, you can. Turn on the **Anonymize IP Addresses** setting under the **Other Settings** option in the RudderStack dashboard while configuring Google Analytics 360. 

This setting lets Google Analytics anonymize the address at the earliest possible stage of the data collection.

{% hint style="info" %}
For more information and other FAQs, refer to the [**Google Analytics documentation**](https://docs.rudderstack.com/destinations/analytics/google-analytics-ga).
{% endhint %}

## Contact Us

If you come across any issues while configuring Google Analytics 360 with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!





\*\*\*\*

## 

