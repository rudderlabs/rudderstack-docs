---
description: >-
  Step-by-step guide to ingest your payment data from your Stripe account into
  RudderStack.
---

# Stripe

[Stripe](https://stripe.com) is an online payment processing system for businesses. It offers cutting-edge software and APIs that allows thousands of businesses to manage their business payments online. Retailers, subscription businesses, software platforms, and online marketplaces all use Stripe for online payment.

This document guides you in setting up Stripe as a source in RudderStack. Once configured, RudderStack automatically ingests your specified Stripe data, which can then be routed to your data warehouse destination supported by RudderStack.

{% hint style="info" %}
**All the Cloud Extract sources support sending data only to a data warehouse destination.**
{% endhint %}

## Getting Started <a href="getting-started" id="getting-started"></a>

To add Stripe as a source in RudderStack, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Directory**. Then, click on **Cloud Extract** under **Sources**, as shown below. Then, choose **Stripe** from the list of sources.

![](https://gblobscdn.gitbook.com/assets%2F-Lq5Ea6fHVg3dSxMCgyQ%2F-MX0sNJ2Es2LZZMWwJZl%2F-MX0saF9wz8gHe-pPffd%2F1.png?alt=media\&token=ca33550d-ad92-472e-abf4-38224b0bd978)

* Assign a name to your source, and click on **Next**.

![](<../.gitbook/assets/2 (17).png>)

### Setting Up the Connection <a href="setting-up-the-connection" id="setting-up-the-connection"></a>

* Under **Create new account**, click on **Connect with Stripe** and grant RudderStack the access to your Stripe account.

![](../.gitbook/assets/2.1.png)

{% hint style="success" %}
If you have already connected RudderStack to your Stripe account, your credentials should appear automatically under **Use existing credentials**.
{% endhint %}

### Setting the Data Update Schedule <a href="setting-the-data-update-schedule" id="setting-the-data-update-schedule"></a>

* Next, you will be required to set the **Run Frequency** to schedule the data import from your Stripe account to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option, as shown:

![](<../.gitbook/assets/3 (14) (1).png>)

{% hint style="success" %}
You can also set a **Table Prefix** for the warehouse table where you want to send this data.
{% endhint %}

### Selecting the Data to Import <a href="selecting-the-data-to-import" id="selecting-the-data-to-import"></a>

* In the next screen, choose the data you want to import from Stripe. To import all the data, click on **Select All**, as shown:

![](<../.gitbook/assets/4 (14).png>)

That's it! Stripe is now successfully configured as a source on your RudderStack dashboard.

RudderStack will start importing data from your Stripe source as per the specified frequency. You can further connect this source to your data warehouse by clicking on **Connect Destinations** or **Add Destination**, as shown:

![](<../.gitbook/assets/5 (14).png>)

{% hint style="success" %}
Use the **Connect Destinations** option if you have already configured a data warehouse destination in RudderStack. To configure a data warehouse destination from scratch, click on the **Add Destination** button.
{% endhint %}

## FAQs <a href="faqs" id="faqs"></a>

#### Is it possible to have multiple Cloud Extract sources writing to the same schema? <a href="is-it-possible-to-have-multiple-cloud-extract-sources-writing-to-the-same-schema" id="is-it-possible-to-have-multiple-cloud-extract-sources-writing-to-the-same-schema"></a>

Yes, it is.

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us <a href="contact-us" id="contact-us"></a>

If you come across any issues while configuring Stripe as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you\![\
](https://docs.rudderstack.com/cloud-extract-sources/salesforce/schema-comparison-rudderstack-vs-segment)
