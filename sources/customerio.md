---
description: Step-by-step guide to ingest event data from Customer.io into RudderStack
---

# Customer.io

[Customer.io](https://customer.io/) is a popular marketing platform for sending targeted emails and push and SMS notifications to improve customer engagement and thereby the overall conversion rate. It leverages real-time behavioral data and advanced segmentation techniques across the web and mobile platforms to improve your customers' overall experience.

This document guides you in setting up Customer.io as a source in RudderStack. By adding a reporting webhook in Customer.io that points to RudderStack, you can send events to RudderStack whenever Customer.io sends messages to your customers. Events such as messages delivered, opened, and clicked by the customers are also captured and sent to RudderStack.

## Getting Started

In order to add Customer.io as a source in RudderStack, please follow these steps:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), click on **Add Source**. From the list of sources, select **Customer.io**, as shown:

![](../.gitbook/assets/image%20%2821%29.png)

* Enter the name of your source.

{% hint style="info" %}
If you wish to connect this source to our warehouse destinations, the source name should match the name of your warehouse schema.
{% endhint %}

* Once you have entered the name of your source, click on **Next** and save the source.

![](../.gitbook/assets/image%20%2881%29.png)

* Head over to your Customer.io account and navigate to the **Integrations** page from the sidebar. Look for the integration **Reporting Webhooks**, as shown:

![](../.gitbook/assets/image%20%2882%29.png)

* Click on **Add Webhook** and add a webhook pointing to the URL in the following format:`<your_dataplane_url>/v1/webhook?writeKey=<your_customer_io_source_write_key>`

An example URL would like the following:

```http
https://hosted.rudderlabs.com/v1/webhook?writeKey=1bCenS7ynqHh8ETX8s5Crjh22J
```

{% hint style="warning" %}
Make sure to add the `writeKey` as query parameter to the URL. This is required to prevent the webhook from failing for the lack of a valid write key.
{% endhint %}

A sample figure highlighting this step is as shown:

![Webhook Settings](../.gitbook/assets/image%20%2831%29.png)

* Finally, save the webhook.

## Supported Events

We currently support only the Email Events as listed in the table below:

| **Email Event** | **Description** |
| :--- | :--- |
| `Delivered` | The delivery provider's report that the email was delivered to the inbox of the recipient |
| `Opened` | An email was opened by the recipient |
| `Clicked` | A tracked link in an email was clicked by the recipient / customer |
| `Bounced` | The delivery provider's report that it was unable to deliver the email to the recipient |
| `Spammed` | An email was marked as spam by the recipient |
| `Unsubscribed` | The customer unsubscribed via a particular email |

## RudderStack Event Transformation

The webhook event from Customer.io is ingested into RudderStack after converting it into the format of a RudderStack event. The `customer_id` set by Customer.io is set as `userId` . In cases where Customer.io does not send the `customer_id`, the email address of the user is set as `anonymousId`.

## Contact Us

If you come across any issues while configuring Customer.io as a source with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel - we will be happy to talk to you!

