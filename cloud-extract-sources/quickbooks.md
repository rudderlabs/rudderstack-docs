---
description: Step-by-step guide to ingest data from QuickBooks into RudderStack.
---

# QuickBooks

[QuickBooks](https://quickbooks.intuit.com/in/) is a cloud-based accounting software that allows small to medium-sized enterprises to track and manage their accounting and sales data efficiently. With QuickBooks, you can create custom invoices and sales receipts,  manage your cash flow and accounting reports, track your employees' billable hours, and do so much more.

This document guides you in setting up QuickBooks as a source in RudderStack. Once configured, RudderStack automatically ingests your specified QuickBooks accounting data, which can then be routed to your data warehouse destination supported by RudderStack.

## Getting Started

To set up QuickBooks as a source on the RudderStack dashboard, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).

![](../.gitbook/assets/1%20%2815%29%20%281%29.png)

* Then, click on the **Directory** option on the left navigation bar and go to **Cloud Extract** under **Sources**.

![](../.gitbook/assets/2%20%2821%29.png)

* From the list of sources, click on **QuickBooks**.
* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/3%20%2817%29.png)

### Specifying Connection Credentials

* Next, click on the **Connect with QuickBooks** option, as shown: 

![](../.gitbook/assets/4%20%2818%29.png)

{% hint style="info" %}
If you've already configured QuickBooks as a source before, you can choose the account visible under the **Use existing credentials** tab.
{% endhint %}

* Authorize RudderStack to access your QuickBooks account, as shown:

![](../.gitbook/assets/5%20%2819%29.png)

### Setting the Table Prefix, Run Frequency and Data Update Schedule

* Next, you will be required to set the **Table Prefix**. RudderStack will create a table with this prefix name in your database and load all your QuickBooks data into it.  
* Also, set the **Run Frequency** to schedule the data import from your QuickBooks account to RudderStack. Optionally, you can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option.

![](../.gitbook/assets/6%20%2817%29.png)

### Selecting the Data to Import

* Finally, choose the QuickBooks data that you wish to ingest via RudderStack. You can either select all the data, or choose specific QuickBooks attributes, as per your requirement.

![](../.gitbook/assets/7%20%2812%29.png)

That's it! QuickBooks is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start ingesting data from QuickBooks source as per the specified frequency. You can further connect this source to your data warehouse by clicking on **Connect Destinations** or **Add Destination**, as shown:

![](../.gitbook/assets/8%20%286%29.png)

{% hint style="success" %}
Use the **Connect Destinations** option if you have already configured a data warehouse destination in RudderStack. To configure a data warehouse destination from scratch, click on the **Add Destination** button.
{% endhint %}

## FAQs

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us

If you come across any issues while configuring QuickBooks as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

