---
description: Step-by-step guide to ingest data from your Marketo account into RudderStack.
---

# Marketo

[Marketo](https://marketo.com) is a leading marketing automation platform that allows you to identify the right audiences through effective behavioral tracking, and deliver automated, personalized marketing campaigns to enhance their overall product experience. It also offers cutting-edge email marketing, lead management, and revenue attribution solutions. With Marketo, you can deliver enhanced customer experiences and build customized products for businesses across all spectrum - including tech, healthcare, media, manufacturing, and education.

This document guides you in setting up Marketo as a source in RudderStack. Once configured, RudderStack automatically ingests your specified Marketo data, which can then be routed to your data warehouse or any other third-party destination supported by RudderStack.

## Getting Started

To add Marketo as a source in RudderStack, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Sources**. Then, click on **Add Source**, as shown:

![](../.gitbook/assets/1%20%284%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%282%29%20%283%29.png)

* Next, navigate to **Cloud Extract** within the **Sources** directory and select **Marketo**.

![](../.gitbook/assets/2%20%289%29.png)

* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/3%20%284%29.png)

### Setting Up the Connection

* Under **Create new account**, fill in the relevant connection credentials.

![](../.gitbook/assets/4%20%283%29.png)

* The connection settings are: 
  * **Account Name**: Your Marketo account name goes here.
  * **Marketo Client ID**: To get the Client ID, navigate to the **LaunchPoint** page under **Integration** on your admin settings page. Then select the API service and click on **View Details**.
  * **Marketo Client Secret**: You can find the client secret next to the ID from the previous step.
  * **Marketo Munchkin Account ID**: You can find the Munchkin Account ID on the **Munchkin** page under **Integration** on your Admin settings page.

{% hint style="success" %}
If you have already connected RudderStack to your Marketo account, your credentials should appear automatically under **Use existing credentials**.
{% endhint %}

### Configuring the Source

* In the next screen, choose the **Start Date** under **Source Settings**. This is the date from which RudderStack ingests the data from Marketo.

![](../.gitbook/assets/5%20%289%29.png)

### Setting the Data Update Schedule

* Next, you will be required to set the **Run Frequency** to schedule the data import from your Marketo account to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option, as shown:

![](../.gitbook/assets/6%20%289%29.png)

That's it! Marketo is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start importing data from Marketo as per the specified frequency. You can further connect this source to your data warehouse or other third-party destinations by clicking on **Connect Destinations** or **Add Destinations**, as shown:

![](../.gitbook/assets/7%20%285%29.png)

## FAQs

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us

If you come across any issues while configuring Marketo as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

