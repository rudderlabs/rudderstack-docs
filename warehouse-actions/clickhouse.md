---
description: Step-by-step guide to ingest your data from ClickHouse into RudderStack.
---

# ClickHouse

[ClickHouse](https://clickhouse.tech/) is an open-source, column-oriented database management system mainly used for online analytical processing \(OLAP\). It is fast, and allows for real-time analysis of your data. ClickHouse was originally developed by Yandex, the Russian IT company,  for the Yandex Metrica web analytics service. ClickHouse is highly scalable, and built for high performance.

This guide will help you configure ClickHouse as a source from which you can route event data to your desired destinations through RudderStack.

## Getting Started

To set up ClickHouse as a source in RudderStack, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Sources**. Then, click on **Add Source**, as shown:

![](../.gitbook/assets/image%20%2897%29%20%281%29%20%281%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%283%29%20%289%29.png)

* Scroll down to the **Warehouse Sources** and select **ClickHouse**. Then, click on **Next**.

![](../.gitbook/assets/screen-shot-2021-01-12-at-1.00.07-pm.png)

### Setting Up the Connection

* Assign a name to your source, and click on **Create Credentials from Scratch**. Then, click on **Next**.

![](../.gitbook/assets/screen-shot-2021-01-13-at-10.16.55-am.png)

{% hint style="success" %}
If you've already configured ClickHouse as a source before, your existing credentials will automatically appear under **Use Existing Credentials**.
{% endhint %}

* Next, enter the relevant connection details in the **Connection Credentials** as shown below:

![](../.gitbook/assets/screen-shot-2021-01-12-at-1.01.23-pm.png)

* The required settings are:
  * **Host -** The host name of your ClickHouse service.
  * **Database -** The database name in your ClickHouse instance where the data is loaded.
  * **User** - The username which has the required read/write access to the above database.
  * **Password** - The password for the above user should be specified here.
  * **Port** - The port number of your ClickHouse service should be specified here.

### Specifying the Data to Import

* Next, select the **Schema** and the **Table** from which you want RudderStack to import the data.

![](../.gitbook/assets/screen-shot-2021-01-12-at-12.59.13-pm.png)

{% hint style="warning" %}
Your table must include one of the following columns - `email`, `user_id`, or `anonymous_id`.
{% endhint %}

* Once you specify the table containing the required columns, you will be able to preview a snippet of your data, as shown below:

![](../.gitbook/assets/screen-shot-2021-01-05-at-3.21.38-pm.png)

* Here, you can select all or only a few specific columns of your choice, search the columns by a keyword, and also edit the **JSON Trait Key**, as shown below. You can also preview the resultant JSON on the right. Once you've select the required table columns to import the data from, click on **Next**.

![](../.gitbook/assets/screen-shot-2021-01-05-at-3.22.09-pm.png)

### Setting the Data Update Schedule

* Next, you will be required to set the **Run Frequency** to schedule the data import from your ClickHouse instance to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option. Then, click on **Next**.

![](../.gitbook/assets/screen-shot-2021-01-12-at-12.59.39-pm.png)

That's it! ClickHouse is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start importing data from your ClickHouse instance as per the specified frequency. You can further connect this source to your preferred destination by clicking on **Connect Destinations** or **Add Destinations**, as shown:

![](../.gitbook/assets/screen-shot-2021-01-12-at-1.02.09-pm.png)

{% hint style="info" %}
If you have already configured a destination on the RudderStack platform, choose the **Connect Destinations** option. To add a new destination from scratch, you can select the **Add Destination** option.
{% endhint %}

## Contact Us

If you come across any issues while configuring ClickHouse as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

