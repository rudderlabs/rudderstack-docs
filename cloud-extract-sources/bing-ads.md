---
description: Step-by-step guide to ingest your Bing Ads data into RudderStack.
---

# Bing Ads

****[**Bing Ads**](https://ads.microsoft.com) is a pay per click (PPC) advertising platform that works on both Bing and Yahoo search engines. It allows marketers to track and monitor their ad campaigns, resulting clicks, CTRs, and more. With Bing Ads, you can also implement efficient ad retargeting for your customers who have completed actions like adding product to a cart or view a product without purchasing it.

This document guides you in setting up Bing Ads as a source in RudderStack. Once configured, RudderStack automatically ingests your specified Bing Ads data, which can then be routed to your data warehouse destination via RudderStack.

{% hint style="info" %}
**All the Cloud Extract sources support sending data only to a data warehouse destination.**
{% endhint %}

****

## Getting Started

To set up **Bing Ads** as a source in RudderStack, follow these steps:

* Log into your [**RudderStack dashboard**](https://app.rudderlabs.com/signup?type=freetrial).

![](<../.gitbook/assets/1 (15) (1).png>)

* Then, click on the **Directory** option on the left navigation bar and go to **Cloud Extract** under **Sources**. From the list of sources, click on **Bing Ads**.

![](<../.gitbook/assets/1 (26).png>)

* Assign a name to your source, and click on **Next**.
* Then, click on the **Connect with Bing Ads **option. Give RudderStack the required permissions to access your Bing Ads account. 

![](<../.gitbook/assets/2 (30).png>)

{% hint style="success" %}
If you've already configured Bing Ads as a source before, you can choose the account visible under the **Use existing credentials** tab.
{% endhint %}

* Under **Source Settings**, choose the Bing Ads **Customer Account** and the **Report Name**.\

* Once you select the report using **Report Name**, the **Report Columns **option will appear automatically. Choose the required columns from which from which you want to ingest the data into RudderStack.

![](<../.gitbook/assets/3 (30).png>)

* Next, under **Destination Settings**, specify the **Table Prefix**. RudderStack will create a table in your warehouse destination with this prefix and store the Bing Ads source data.\

* Under** Schedule Settings**, specify the **Run Frequency **with which RudderStack will sync the data to the warehouse destination. Optionally, you can also specify the time when you want this synchronization to happen, by choosing the time under the **Sync Starting At** option.

That's it! Bing Ads is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start ingesting data from Bing Ads as per the specified frequency. You can then connect this source to your data warehouse by clicking on **Add Destination**, as shown:

![](<../.gitbook/assets/6 (24).png>)

{% hint style="info" %}
Select the **Use Existing Destination** option if you have already configured a data warehouse destination in RudderStack. To configure a data warehouse destination from scratch, select the **Create New Destination** option.
{% endhint %}

## FAQs

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us

If you come across any issues while configuring Bing Ads as a source on the RudderStack dashboard, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
