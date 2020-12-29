---
description: >-
  Comprehensive overview of RudderStack - the open-source Segment alternative
  for collecting, storing and routing customer event data securely
---

# Get Started

## What is RudderStack?

[RudderStack](https://rudderstack.com/) is an open-source, warehouse-first Customer Data Platform built for developers**.** With RudderStack, you can collect and route your customer event data securely to your data warehouse and dozens of other tools.

RudderStack also provides a powerful transformation framework to process your event data on the fly.

{% hint style="success" %}
**Start building a better, warehouse-first CDP that delivers complete, unified data to every part of your marketing and analytics stack. Sign up for** [**RudderStack Cloud Free**](https://app.rudderlabs.com/signup?type=freetrial) **today.**
{% endhint %}

RudderStack's backend is written in Go, with a rich UI written in React.js. 

{% hint style="info" %}
For routing and processing the events to the RudderStack backend, a **Data Plane URL** is required. ****

* If you're using the **open-source** version of RudderStack, you are required to set up your own data plane by [installing and setting up RudderStack](https://docs.rudderstack.com/installing-and-setting-up-rudderstack) in your preferred dev environment.
* If you're using the **enterprise** version of RudderStack, please contact us for the data plane URL with the email ID you used to sign up for RudderStack.
{% endhint %}

Do you have any questions about RudderStack? Please join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel or follow us on [Twitter](https://twitter.com/rudderstack).

## Key Features

* **Segment API-compatible**: RudderStack is Segment API compatible. So you don't need to change your app if you are using Segment, just integrate the RudderStack SDKs into your app and your events will keep flowing as before \(including data-warehouse\).
* **Processing Flexibility**: With RudderStack's powerful JavaScript-based event transformation framework, you can enhance or transform your event data by combining it with your other internal data.
* **Unlimited Events**: Event volume-based pricing of most of the commercial systems is broken. With RudderStack, you are able to collect as much data as possible without worrying about overrunning event budgets.
* **Stand-alone System**: RudderStack runs as a single Go binary with the dependencies being on a PostgreSQL server and a Node.js service. There is no other dependency required to run RudderStack.
* **Platform-independent**: RudderStack is Kubernetes-native and can run on any Kubernetes cluster with our Helm charts. RudderStack is cloud-agnostic and can run on stand-alone machines in all popular cloud platforms, namely AWS, Microsoft Azure, GCP, and others.
* **High Performance**: On a single m4.2xlarge AWS EC2 instance, RudderStack can process 3000 events/second.
* **Enhanced Telemetry**: To help us improve RudderStack, we collect performance and diagnostic metrics about how you use RudderStack, and how it is working. **No customer data is present in the metrics**. For more technical details, please check out our GitHub wiki page on [Telemetry](https://github.com/rudderlabs/rudder-server/wiki/RudderStack-Telemetry).

## UI Pages

![RudderStack Connections Page](../.gitbook/assets/image%20%2871%29.png)

![RudderStack Events Page](../.gitbook/assets/image%20%283%29.png)

## Useful Links

{% page-ref page="rudderstack-architecture.md" %}

{% page-ref page="../faqs.md" %}

{% page-ref page="../installing-and-setting-up-rudderstack/" %}

## Contact Us

If you want to know more about RudderStack, feel free to [contact us](mailto:%20contact@rudderstack.com) . You can also see [RudderStack in action](https://app.rudderstack.com/signup?type=freetrial) to check out all the cool features the platform has to offer.

For community support, you can always start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you!



