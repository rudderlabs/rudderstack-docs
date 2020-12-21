---
description: Step-by-step guide to ingest event data from Salesforce into RudderStack
---

# Salesforce

[Salesforce](https://www.salesforce.com/in/?ir=1) is an industry leader in enterprise CRM. It offers a suite of enterprise applications revolving around marketing automation, customer engagement and support, application development as well as analytics. 

This guide is aimed at helping you set up Salesforce as a source in RudderStack in the easiest possible way. With this integration, you can send your Salesforce data to RudderStack as events, which can then be further routed to your preferred third-party destinations.

## Getting Started

To set up Salesforce as a source on the RudderStack dashboard, follow these steps:

* Sign into your RudderStack dashboard.
* Click on **Sources** on the left panel of your dashboard. Select **Salesforce**, and then click on **Next**.

![](../.gitbook/assets/1%20%284%29%20%281%29.png)

* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/2%20%284%29%20%281%29.png)

* Next, you will be required to connect your Salesforce account with RudderStack. To do so, click on **Connect with Salesforce**.  After allowing the necessary permissions, your account should be successfully connected to RudderStack and visible on the dashboard. Then, click on **Next**. 

![](../.gitbook/assets/3%20%285%29.png)

{% hint style="success" %}
If you have already logged into your Salesforce account previously, clicking on the **Connect with Salesforce** option will automatically connect that account to RudderStack. To connect RudderStack to a different account, you will have to log out of your Salesforce account.
{% endhint %}

* In the next window, select the suitable **Run Frequency**. This configuration controls how often RudderStack will pull data from your Salesforce integration. Then, click on **Next**.

![](../.gitbook/assets/4%20%284%29.png)

{% hint style="info" %}
Please note that loading to your data warehouse could take a little bit longer than the specified frequency.
{% endhint %}

{% hint style="warning" %}
Salesforce’s API strictly enforces a limit on its usage. A high **Run Frequency** may exceed your Salesforce’s API. This may cause a failure when RudderStack tries to sync your data.
{% endhint %}

* Finally, specify the Salesforce data you want to import via RudderStack, and click on **Next**. You can choose to import selected Salesforce resources or all of them.

![](../.gitbook/assets/5%20%283%29%20%281%29.png)

That's it! Salesforce is now successfully configured as a source on your RudderStack dashboard. RudderStack will start ingesting data at the specified frequency. You can further connect this source to your data warehouse or other third-party destinations by clicking on **Connect Destinations** or **Add Destinations**, as shown: 

![](../.gitbook/assets/6%20%283%29%20%281%29.png)

## How RudderStack Syncs Salesforce Data

The following sections will help you better understand the overall replication process once RudderStack connects to your Salesforce data source.

### Historical Import

When RudderStack first connects to your Salesforce data source, it will pull **all** your historical data. 

### Sync Schedule

RudderStack synchronizes with your Salesforce data source based on the schedule and run frequency you choose while configuring the source.

### Replication Process

The first time RudderStack syncs with your Salesforce data, it performs a full replication - as mentioned above. After that, your Salesforce data is replicated incrementally. This means that RudderStack will replicate only the new and updated rows to your destination. 

{% hint style="info" %}
**Note that RudderStack will only read your data**.
{% endhint %}

## Sync Time and Salesforce API Quota

Salesforce imposes a strict API quota that regulates its API usage. This quota corresponds to the total number of API requests that can be made over a period of time. 

{% hint style="info" %}
**The Salesforce API usage includes RudderStack and any other apps you may use.**
{% endhint %}

{% hint style="warning" %}
Because of Salesforce's API quotas and the data volume to be synchronized, the initial data sync could take some time. 
{% endhint %}

Here's how RudderStack handles these API quotas:

* If a single replication attempt utilizes 20% of your daily quota, the replication process will stop.
* If more than 80% of your daily API quota has been utilized \(by RudderStack or any other apps\), the replication will stop. The process will resume once the API limit is lifted.

{% hint style="info" %}
Refer to [this](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm) article by Salesforce to calculate and increase your total API calls.
{% endhint %}

## FAQs

#### How do I enable Sandbox mode for Salesforce?

Salesforce has a Production and a Sandbox Environment. In case you need to work with both your production as well as development data, it is recommended that you create two pipelines.

To connect to your sandbox environment, follow these steps:

* Create a new Salesforce data pipeline.
* Check the **Connect to Sandbox Account** option and click **Connect with Salesforce** button, as shown:

![](../.gitbook/assets/sf_sandbox_1-736x141.png)

* Use your sandbox account credentials to log in and continue with the rest of the setup.

{% hint style="warning" %}
Make sure you use a relevant table prefix in your setup in order to avoid creating conflicting tables in your database with your Salesforce production pipeline \(if one is already set up\).
{% endhint %}

## Contact Us

If you come across any issues while configuring Salesforce as a source with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

