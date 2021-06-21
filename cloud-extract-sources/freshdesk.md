---
description: Step-by-step guide to ingest data from Freshdesk into RudderStack.
---

# Freshdesk

[Freshdesk](https://freshdesk.com/) is a popular customer support software. It provides cutting-edge, cross-channel customer support features including bots and various other self-service solutions. You can track and manage your customer support tickets, set deadlines for their response, and bring together all your customer communications via different channels into a single platform.

This document guides you in setting up Freshdesk as a source in RudderStack. Once configured, RudderStack automatically ingests your specified Freshdesk data, which can then be routed to your data warehouse destination supported by RudderStack.

{% hint style="info" %}
**All the Cloud Extract sources support sending data only to a data warehouse destination.**
{% endhint %}

## Getting Started

To set up Freshdesk as a source on the RudderStack dashboard, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).

![](../.gitbook/assets/1%20%2815%29%20%281%29%20%281%29.png)

* Then, click on the **Directory** option on the left navigation bar and go to **Cloud Extract** under **Sources**.

![](../.gitbook/assets/2%20%2819%29.png)

* From the list of sources, click on **Freshdesk**.
* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/3%20%2816%29.png)

### Specifying Connection Credentials

* Next, click on the **Create Credentials from Scratch** option, as shown:

![](../.gitbook/assets/4%20%2816%29.png)

* Then, enter the required connection credentials to give RudderStack access to your Freshdesk account. The required settings are: 
  * **Account Name**: Your Freshdesk account name goes here.
  * **Subdomain**: Enter your Freshdesk subdomain here.
  * **API Key**: Enter your Freshdesk API key in this field. You can get this key by logging into your Freshdesk account, clicking on your profile picture and navigating to Profile Settings. You can find the API key on the right sidebar.

{% hint style="success" %}
More information on how to get your Freshdesk subdomain can be found in this [support page](https://support.freshdesk.com/support/discussions/topics/314793). 

For detailed steps on procuring the Freshdesk API key, check out this [support page](https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key).
{% endhint %}

![](../.gitbook/assets/5%20%2816%29.png)

{% hint style="info" %}
If you've already configured Freshdesk as a source before, you can choose the account visible under the **Use existing credentials** tab.
{% endhint %}

### Setting the Table Prefix, Run Frequency and Data Update Schedule

* Next, you will be required to set the **Table Prefix**. RudderStack will create a table in your warehouse with this prefix name and load all your Freshdesk data into it. 
* Also, set the **Run Frequency** to schedule the data import from your Freshdesk account to RudderStack. Optionally, you can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option.

![](../.gitbook/assets/6%20%2815%29.png)

### Selecting the Data to Import

* Finally, choose the Freshdesk data that you wish to ingest via RudderStack. You can either select all the data, or choose specific Freshdesk data attributes, as per your requirement.

![](../.gitbook/assets/7%20%2810%29.png)

That's it! Freshdesk is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start ingesting data from Freshdesk as per the specified frequency. You can further connect this source to your data warehouse by clicking on **Connect Destinations** or **Add Destinations**, as shown:

![](../.gitbook/assets/8%20%284%29.png)

{% hint style="success" %}
Use the **Connect Destinations** option if you have already configured a data warehouse destination in RudderStack. To configure a data warehouse destination from scratch, click on the **Add Destination** button.
{% endhint %}

## FAQs

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

#### Where do I find the Freshdesk API Key?

To get your Freshdesk API key, follow these steps:

* Log into your [Freshdesk account](https://freshdesk.com/login).
* Click on your profile picture and go to **Profile Settings**.
* You can find the Freshdesk API key on the right sidebar.

You can get the detailed steps along with the screenshots on the [Freshdesk support page](https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key).

## Contact Us

If you come across any issues while configuring Freshdesk as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!



