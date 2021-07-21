---
description: >-
  Detailed technical documentation on ingesting your event data from your
  specified Cloud Extract sources into RudderStack.
---

# Cloud Extract Sources

With RudderStack Cloud Extract, you can collect your raw events and data from different cloud tools such as [**Facebook Ads**](https://www.facebook.com/business/ads), [**Google Analytics**](https://analytics.google.com/), [**Marketo**](https://www.marketo.com/), [**HubSpot**](https://www.hubspot.com/), [**Stripe**](stripe.md), and more. You can then build efficient ELT pipelines from these cloud apps to your data warehouse.

{% hint style="info" %}
**All the Cloud Extract sources support sending data only to a data warehouse destination.**
{% endhint %}

{% hint style="warning" %}
We highly recommend connecting **only one** warehouse destination to a Cloud Extract source. To send data to multiple data warehouses from the same source, we recommend creating individual sources with the same settings for each warehouse destination.
{% endhint %}

Here's a quick 1-minute walkthrough of the Cloud Extract feature:

{% embed url="https://www.youtube.com/watch?v=F9dIv5Pp0EE" %}



## FAQs

#### Can I connect a Cloud Extract source to multiple data warehouse destinations?

You can connect **only one data warehouse destination per Cloud Extract source**. If you wish to send data to multiple warehouses, you can configure multiple Cloud Extract sources with the same settings and connect them to each data warehouse.

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Popular Cloud Extract Sources

{% page-ref page="marketo.md" %}

{% page-ref page="salesforce/" %}

{% page-ref page="zendesk.md" %}

{% page-ref page="stripe.md" %}

{% page-ref page="google-sheets.md" %}

{% page-ref page="google-analytics.md" %}

{% hint style="success" %}
If you wish to contribute to developing more Cloud Extract integrations for RudderStack, please refer to the contributing guide [**here**](../user-guides/how-to-guides/how-to-submit-an-integration-pull-request.md).
{% endhint %}

## Contact Us

For more information on the RudderStack Cloud Extract sources or the platform in general, feel free to [**contact us**](mailto:%20contact@rudderstack.com) ****or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

