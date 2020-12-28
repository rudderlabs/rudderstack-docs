---
description: Step-by-step guide to ingest your Google Search Console data into RudderStack.
---

# Google Search Console

[Google Search Console](https://search.google.com/search-console/about) is Google's web service that allows webmasters to check the indexing status of their websites, and optimize their visibility. Formerly known as Google Webmasters, this platform offers tools and reports to measure and optimize your website's search traffic and performance, optimize your website's content, as well as fix any issues that you might come across.

This document guides you in setting up Google Search Console as a source in RudderStack. Once configured, RudderStack automatically ingests your specified Search Console data, which can then be routed to your data warehouse or any other third-party destination supported by RudderStack.

## Getting Started

To add Google Search Console as a source in RudderStack, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Sources**. Then, click on **Add Source**, as shown:

![](../.gitbook/assets/1%20%284%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29.png)

* Next, select **Google Search Console** from the list of **Cloud Sources**, and click on **Next**.

![](../.gitbook/assets/screen-shot-2020-12-18-at-10.43.57-am.png)

* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/screen-shot-2020-12-18-at-10.44.25-am.png)

### Setting Up the Connection

* Click on **Connect with Google Search Console** and give RudderStack the required access permissions. Then, click on **Next**.

![](../.gitbook/assets/screen-shot-2020-12-18-at-10.44.41-am.png)

{% hint style="info" %}
If you have already connected RudderStack to your Google Search Console account, your credentials should appear automatically under **Use existing credentials**.
{% endhint %}

### Configuring the Source Settings

* For configuring the source, enter the **Site URL** of the website linked to your Google Search Console account, as well as the **Dimensions** you want RudderStack to sync. You also need to specify the **Start from date**, which corresponds to the date RudderStack will start importing the historical data.

![](../.gitbook/assets/screen-shot-2020-12-18-at-10.59.43-am.png)

In the **Site URL**, make sure to use the **exact URL** of the website as specified in your Google Search Console. Read [this guide](https://support.google.com/webmasters/answer/34592?hl=en) for more information.

![](../.gitbook/assets/image%20%2813%29%20%281%29.png)

{% hint style="success" %}
The available dimensions that you can query are **country**, **device**, ****and **page**. 
{% endhint %}

{% hint style="info" %}
Please note that this **Start from date** is valid only for the first \(historical\) sync.
{% endhint %}

### Setting the Data Update Schedule

* Next, you will be required to set the **Run Frequency** to schedule the data import from your Google Search Console account to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option.

![](../.gitbook/assets/screen-shot-2020-12-18-at-11.00.31-am.png)

That's it! Google Search Console is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start importing data from Google Search Console as per the specified frequency. You can further connect this source to your data warehouse or other third-party destinations by clicking on **Connect Destinations** or **Add Destinations**, as shown:

![](../.gitbook/assets/screen-shot-2020-12-18-at-11.01.14-am%20%281%29.png)

## Data Synchronization

After have added Google Search Console as a source, RudderStack will schedule an initial synchronization of your historical data from the specified date. This may take some time to complete.

After that, your Google Search Console data will be fetched as per the specified sync schedule.

{% hint style="info" %}
The synchronization also depends on your destination's sync schedule.
{% endhint %}

## Contact Us

If you come across any issues while configuring Google Search Console as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

