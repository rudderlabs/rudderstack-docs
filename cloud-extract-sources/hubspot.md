---
description: Step-by-step guide to ingest data from HubSpot into RudderStack.
---

# HubSpot

[HubSpot](https://www.hubspot.com/) is a leading marketing and sales platform that helps you track leads, as well as inbound marketing and sales. It offers state-of-the-art tools for efficient marketing, tracking sales, and offering better customer support.

This document guides you in setting up HubSpot as a source in RudderStack. Once configured, RudderStack automatically ingests your specified HubSpot data, which can then be routed to your data warehouse or any other third-party destination supported by RudderStack.

## Getting Started

To set up HubSpot as a source on the RudderStack dashboard, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).

![](../.gitbook/assets/1%20%2814%29.png)

* Then, click on the **Directory** option on the left navigation bar and go to **Cloud Extract** under **Sources**.

![](../.gitbook/assets/2%20%2818%29.png)

* From the list of sources, click on **HubSpot**.
* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/3%20%2813%29.png)

### Specifying Connection Credentials

* Next, authenticate RudderStack with HubSpot by clicking on the **Connect with HubSpot** option, as shown: 

![](../.gitbook/assets/4%20%2815%29.png)

{% hint style="info" %}
If you've already configured HubSpot as a source before, you can choose the account visible under the **Use existing credentials** tab.
{% endhint %}

### Setting the Table Prefix, Run Frequency and Data Update Schedule

* Next, you will be required to set the **Table Prefix**. RudderStack will create a table in your warehouse with this prefix name and load all your HubSpot data into it. 
* Also, set the **Run Frequency** to schedule the data import from your HubSpot account to RudderStack. Optionally, you can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option.

![](../.gitbook/assets/5%20%2815%29.png)

### Selecting the Data to Import

* Finally, choose the HubSpot data that you wish to ingest via RudderStack. You can either select all the data, or choose specific HubSpot data attributes, as per your requirement.

![](../.gitbook/assets/6%20%2814%29.png)

That's it! HubSpot is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start ingesting data from HubSpot as per the specified frequency. You can further connect this source to your data warehouse or other third-party destinations by clicking on **Connect Destinations** or **Add Destinations**, as shown:

![](../.gitbook/assets/7%20%289%29.png)

## FAQs

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us

If you come across any issues while configuring HubSpot as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

