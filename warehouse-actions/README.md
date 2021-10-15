---
description: >-
  Detailed technical description of RudderStack's Warehouse Actions feature,
  with step-by-step instructions for configuration.
---

# Warehouse Actions Sources

## What are Sources in RudderStack?

Sources are the tools or platforms from which you can send event data to RudderStack. These events can then be routed (with or without transformation) into your data warehouse or third-party destinations for analytics and other activation use-cases.

{% hint style="success" %}
For more information on sources in RudderStack, check out the [**Connections guide**](https://docs.rudderstack.com/connections).
{% endhint %}

## RudderStack Warehouse Actions

With RudderStack **Warehouse Actions**, you can leverage the already processed customer data residing in your data warehouse and route this enriched information to your desired destinations.

With this feature, you can configure your data warehouse as a source in the [**RudderStack dashboard**](https://app.rudderlabs.com/signup?type=freetrial), select the right data and then sync this data to all the supported destinations.

{% hint style="warning" %}
**You can connect only one destination to a Warehouse Actions source**. Also, note that this destination **should not be connected to any other source** (including [**Event Stream**](../stream-sources/) sources.)
{% endhint %}

{% hint style="info" %}
**If you want to send data from a warehouse source to multiple destinations, we recommend creating multiple copies of the source with the same settings and connect them with each of the destinations.**
{% endhint %}

{% hint style="danger" %}
**You cannot connect a Warehouse Actions source to a warehouse destination in RudderStack.**
{% endhint %}

Here's a detailed walkthrough of the Warehouse Actions feature:

{% embed url="https://www.youtube.com/watch?v=krFbHHjX-AU" %}

## Configuring Warehouse Actions Sources in RudderStack

{% hint style="warning" %}
**The** **Warehouse Actions** **feature supports only source-driven configuration of your data pipeline**. 

So, you need to configure a Warehouse Actions source in RudderStack first, and then connect it to a new or existing destination (the existing destination should not be connected to any other source), as shown below.
{% endhint %}

![](<../.gitbook/assets/screenshot-2021-09-02-at-11.03.55-am (1).png>)

To configure your data warehouse as a source in the RudderStack dashboard, follow these steps:

* Log into your [**RudderStack dashboard**](https://app.rudderlabs.com/signup?type=freetrial).
* Navigate to **Sources**, present in the left panel of the dashboard.
* Choose your preferred data warehouse which you want to configure as a source, as shown. Then, click on **Next**.

![](<../.gitbook/assets/1 (8).png>)

### Specifying Connection Credentials

* Assign a name to your source. Then, click on the **Create credentials from scratch** button, if you are configuring your data warehouse in the RudderStack dashboard for the first time.

![](<../.gitbook/assets/2 (1).png>)

{% hint style="info" %}
If you have previously configured your data warehouse as a source on the RudderStack dashboard, you can simply use the existing credentials and proceed. 
{% endhint %}

* Next, enter the connection credentials to configure your data warehouse connection with RudderStack, as shown:

![](../.gitbook/assets/screen-shot-2020-12-08-at-9.37.06-pm.png)

{% hint style="warning" %}
RudderStack currently supports **Google BigQuery**, **PostgreSQL**, **ClickHouse**, **Amazon Redshift**, and **Snowflake** as sources. The connection settings will vary according to each warehouse.
{% endhint %}

### Specifying Warehouse Schema and Table

* Next, enter the data warehouse schema and the table name. RudderStack will collect the data from this table.

![](<../.gitbook/assets/4 (7).png>)

{% hint style="warning" %}
Please note that your source table must include at least one of the following columns for it to be considered a valid source:

* **`email`**
* **`user_id`**
* **`anonymous_id`**
{% endhint %}

* If the table is valid, you can then preview a snippet of the data, as shown:

![](../.gitbook/assets/5.png)

* You can also filter, select and edit the column names of the table to be included as the data source, as shown:

![](<../.gitbook/assets/6 (6).png>)

![](<../.gitbook/assets/7 (2).png>)

* Once you've selected all the the required table columns, click on **Next**.

### Setting the Data Update Schedule

* RudderStack also allows you to specify the data update frequency and set a data synchronization time as per your requirement.

![](../.gitbook/assets/8.png)

That's it! Your data warehouse is now configured and added as a RudderStack source.

![](../.gitbook/assets/9.png)

{% hint style="info" %}
Currently all events sent to RudderStack via warehouse as a source will be `identify()` events
{% endhint %}

Now you can connect this source to any RudderStack destination of your choice. RudderStack will collect the enriched customer data from the specified table columns in your warehouse source and send it to the destination for your activation use-cases.

## Warehouse Actions Constants

Constants give you the ability to add new fields to each event with a pre-defined value. The **key** of a Warehouse Actions constant has the same functionality as modifying an existing column, and is in the format (**test.value, test.value\[0]**).

### How to add a Warehouse Actions constant

Adding a new constant when configuring a Warehouse Actions source is very easy: 

* Click on the **Add Constant** button as shown below, while [mapping your table](https://docs.rudderstack.com/warehouse-actions#specifying-warehouse-schema-and-table):

![](<../.gitbook/assets/image (77).png>)

* Add your preferred key and value for the constant, select **Ok** and then click on **Confirm**, as shown:

![](<../.gitbook/assets/image (76).png>)

* The new constant appears in the table and also in the JSON preview inside the traits, as shown:

![](../.gitbook/assets/screenshot\_2021-03-18\_at\_3.51.11\_pm.png)

* You can also use dot notation to define a Warehouse Actions constant, as shown below:

![](../.gitbook/assets/screenshot\_2021-03-18\_at\_3.52.00\_pm.png)

* The result would look something like:

![](../.gitbook/assets/screenshot\_2021-03-18\_at\_3.52.26\_pm.png)

## FAQs

### I cannot add a Warehouse Actions source to an already configured destination. Why?

Warehouse Actions supports only source-driven configuration of your pipeline. So you need to configure a Warehouse Actions source in RudderStack and then connect it an existing, **free** destination (this destination should not be connected to any other source), as shown:

![](../.gitbook/assets/screenshot-2021-09-02-at-11.03.55-am.png)

### Can I connect a Warehouse Actions source to multiple destinations?

We recommend creating a separate Warehouse Actions source with the same settings for each destination where you want to send the data.

### What type of events are supported by the RudderStack Warehouse Actions?

Currently all events from the RudderStack warehouse actions are `identify()` events.

## Popular Sources

{% content-ref url="amazon-s3.md" %}
[amazon-s3.md](amazon-s3.md)
{% endcontent-ref %}

{% content-ref url="snowflake.md" %}
[snowflake.md](snowflake.md)
{% endcontent-ref %}

{% content-ref url="amazon-redshift.md" %}
[amazon-redshift.md](amazon-redshift.md)
{% endcontent-ref %}

{% content-ref url="google-bigquery.md" %}
[google-bigquery.md](google-bigquery.md)
{% endcontent-ref %}

{% content-ref url="postgresql.md" %}
[postgresql.md](postgresql.md)
{% endcontent-ref %}

## Contact Us

To know more about RudderStack's Warehouse Actions feature, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
