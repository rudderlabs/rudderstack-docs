---
description: >-
  Detailed technical description of the Cloud and Device Modes supported by
  RudderStack, along with the differences between the two connection modes.
---

# RudderStack Cloud Mode vs. Device Mode

[RudderStack](https://rudderstack.com/) is an open source **Customer Data Platform \(CDP\)** that allows you to collect your customer event data from a variety of sources, and route it securely to your preferred data warehouse, analytics tools, and dozens of other destinations.

The underlying principle is quite simple - RudderStack receives the event data from a variety of **Sources**, and routes this data to the **Destinations**.

{% hint style="success" %}
RudderStack currently supports over 60 destinations. You can find them in our [Destinations Guides](https://docs.rudderstack.com/destinations). You can also check our [Sources Guides](https://docs.rudderstack.com/sources) to get a list of the sources through which you can send your event data to RudderStack.
{% endhint %}

## Connection Modes in RudderStack

There are two modes in which you can route your event data from your website or mobile app to the desired destinations, through RudderStack:

* Cloud Mode
* Device Mode

### Cloud Mode

In this mode, the SDK sends the event data directly to RudderStack. RudderStack then transforms this data and routes it to the desired destination. This transformation is done in the RudderStack backend, using the [Transformer](https://github.com/rudderlabs/rudder-transformer) module.

#### How It Works

Let's assume you want to analyze your website users' event data using Amplitude, and you've decided to use RudderStack's [JavaScript SDK](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk) to do so.

RudderStack defines a fixed event structure. If you track your events in this format, RudderStack will take care of transforming the events as required by Amplitude. You can start by [adding a source and an Amplitude destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) in the RudderStack dashboard. Then, add the RudderStack JavaScript SDK snippet into the web page which you wish to track. And that's all you have to do! The SDK automatically sends the events to RudderStack. These events are then transformed by RudderStack and then routed to Amplitude.

{% hint style="info" %}
While the above example uses the JavaScript SDK, our [Android](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk), [iOS](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk), and [server-side SDKs](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-node-sdk) also work in the same way.
{% endhint %}

![How Cloud Mode Works](../.gitbook/assets/image%20%289%29.png)

{% hint style="success" %}
In the Cloud Mode, you get the flexibility to use transformations to enrich the events, or filter selective events to forward to destinations.
{% endhint %}

Some of the other destinations that currently support only cloud mode are _\*\*_[Amplitude](https://docs.rudderstack.com/destinations/amplitude), [Kochava](https://docs.rudderstack.com/destinations/kochava), [Mailchimp](https://docs.rudderstack.com/destinations/mailchimp), [Mixpanel](https://docs.rudderstack.com/destinations/mixpanel), [Salesforce](https://docs.rudderstack.com/destinations/salesforce), and [Zendesk](https://docs.rudderstack.com/destinations/zendesk). Our [Data Warehouse Integrations](https://docs.rudderstack.com/data-warehouse-integrations) also support only cloud mode.

{% hint style="warning" %}
Please note that all our server-side SDKs \([Java](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-java-sdk), [Python](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-python-sdk), [Node.js](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-node-sdk), [Go](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-go-sdk), [Ruby](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ruby-sdk)\) support only **Cloud Mode**. This is because our server-side SDKs operate in the RudderStack backend, and cannot load any additional destination-specific SDKs.
{% endhint %}

### Device Mode

Another way you can send your events to the preferred destinations is through using the client-specific libraries on your website or mobile app. These libraries allow RudderStack to use the data you collect on your device to call the destination APIs, without sending it to the RudderStack first.

#### How It Works

Similar to the example given above, let's assume you want to send your event data from your source mobile apps to Firebase through RudderStack's mobile SDK \([Android](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk), [iOS](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk), or [Unity](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/getting-started-with-unity-sdk), depending on your requirement\). You can start by [adding a source and a Firebase destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) in the RudderStack dashboard.

If you enable the `Native SDK` option on the RudderStack dashboard, the RudderStack SDK will download the Firebase SDK, transform the events and will send them to Firebase for analytics.

![How Device Mode Works](../.gitbook/assets/image%20%2829%29.png)

{% hint style="success" %}
Device mode integrations will send data to the destinations directly from your client \(browser or mobile application\).
{% endhint %}

Some of the destinations that currently support only device mode are [Adjust](https://docs.rudderstack.com/destinations/adjust), [Firebase](https://docs.rudderstack.com/destinations/firebase), [Hotjar](https://docs.rudderstack.com/destinations/hotjar), [AppsFlyer](https://docs.rudderstack.com/destinations/appsflyer), [Chartbeat](https://docs.rudderstack.com/destinations/chartbeat), [Google Ads](https://docs.rudderstack.com/destinations/google-ads), and [Facebook Pixel](https://docs.rudderstack.com/destinations/fb-pixel).

### Support for Cloud Mode and Device Mode Both

Some of our destinations support sending event data via both the cloud and device mode. These are [Google Analytics](https://docs.rudderstack.com/destinations/google-analytics-ga), [HubSpot](https://docs.rudderstack.com/destinations/hubspot), [Intercom](https://docs.rudderstack.com/destinations/intercom), [Kissmetrics](https://docs.rudderstack.com/destinations/kissmetrics), [Branch](https://docs.rudderstack.com/destinations/branchio), [Braze](https://docs.rudderstack.com/destinations/braze), [Customer.io](https://docs.rudderstack.com/destinations/customer.io), and [Facebook App Events](https://docs.rudderstack.com/destinations/facebook-app-events). You can choose to integrate these destinations with RudderStack via cloud mode or device mode, depending on your requirement.

## Which Connection Mode Should I Choose?

* Consider using **Cloud Mode** if you wish to benefit from RudderStack's custom transformation capabilities.
* If you are planning to work with destinations that record information directly on your users' devices, you can opt for **Device Mode**. There is a possibility that these destinations might not function correctly if they are not loaded directly on the device.

As you can see, there are some clear benefits as well as trade-offs when using cloud mode \(sending the data to your destinations through RudderStack\) and device mode \(sending the data directly to the destinations in parallel to RudderStack\).

## How to Check If a Destination Supports Cloud Mode or Device Mode, or Both?

The easiest way to check if a destination supports Cloud mode, Device mode, or both is to go through the individual destination's [documentation](https://docs.rudderstack.com/destinations). We explicitly mention the supported connection modes for every destination in the **Getting Started** section of each guide. A sample example is as shown:

![Checking the Supported Connection Mode for a Destination](../.gitbook/assets/image%20%282%29.png)

## Contact Us

To learn more about the connection modes supported by RudderStack, or if you come across any issues while using them with any of our SDKs, feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

