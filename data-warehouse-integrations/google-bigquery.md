---
description: Step-by-step guide to set up Google BigQuery as a destination in RudderStack.
---

# Google BigQuery

\*\*\*\*[**Google BigQuery**](https://cloud.google.com/bigquery) ****is an industry-leading fully-managed cloud data warehouse that allows you to store and analyze petabytes of data in no time.

RudderStack lets you add Google BigQuery as a destination where you can send your customer event data from the data source of your choice.

{% hint style="info" %}
Please check our [**Warehouse Schemas**](https://docs.rudderstack.com/data-warehouse-integration-guides/warehouse-schemas) ****guide to know how events are mapped to the tables in BigQuery.
{% endhint %}

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/bq)**.**
{% endhint %}

## **Setting up the BigQuery Project**

Follow these steps to set up your BigQuery project before adding it as a destination in RudderStack:

* Create a Google Cloud Platform \(**GCP**\) project if you do not have an existing one. More details can be found [**here**](https://cloud.google.com/resource-manager/docs/creating-managing-projects?hl=en&ref_topic=6158848&visit_id=637219216155418807-3094012232&rd=1)**.** 
* Enable the BigQuery API if you have an existing project and it is not enabled. More details can be found [**here**](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui). 
* Log into your [**Google BigQuery console**](https://console.cloud.google.com/). Copy the project **ID** as shown in the following image: 

![Project ID \(highlighted\)](../.gitbook/assets/screenshot-2020-04-08-at-11.36.30-am.png)

{% hint style="success" %}
You will require this project ID while configuring BigQuery as a destination in RudderStack.
{% endhint %}

{% hint style="info" %}
Ensure that [**billing**](https://cloud.google.com/billing/docs/how-to/modify-project) is enabled for the project to enable RudderStack to load data into the BigQuery cluster.
{% endhint %}

* Create a new Google Cloud Storage \(**GCS**\) bucket or provide an existing one to store files before loading data into your BigQuery.

{% hint style="warning" %}
To ensure loading data from cloud storage to BigQuery, make sure to co-locate your GCS storage bucket with BigQuery. More information can be found [**here**](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage#data-locations). 
{% endhint %}

## Setting up the Service Account for RudderStack

* Create a new service account under **IAM & Admin** **&gt;** **Service Accounts** 
* Add Service Account permissions as specified below: 
  * Add the `Storage Object Creator` and `Storage Object Viewer` roles to the account. 
  * Add the `BigQuery Job User` and `BigQuery Data Owner` roles to the account.

{% hint style="success" %}
If a dataset with the name \(configurable by the setting: **Namespace** in the RudderStack destination settings\) already exists, the role of **`BigQuery Data Editor`** would suffice instead of **`BigQuery Data Owner`**.
{% endhint %}

* Create a key for the service account with **JSON** as the type and store it.

![Service Account Permissions](../.gitbook/assets/screenshot-2020-04-08-at-12.09.07-pm%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29.png)

* Create and download the private JSON key which will be required while configuring BigQuery as a destination in RudderStack, as shown:

![JSON key required for the RudderStack UI](../.gitbook/assets/screenshot-2020-04-08-at-12.09.32-pm%20%281%29.png)

{% hint style="warning" %}
Make sure that you create the service account in the same project as BigQuery.
{% endhint %}

## Setting Up the Network Access

You will need to whitelist the RudderStack IPs to enable network access to it.

{% hint style="info" %}
**The IPs to be whitelisted are : `3.216.35.97`, `34.198.90.241` , `54.147.40.62`** , **`23.20.96.9`,** and  **`18.214.35.254`**.
{% endhint %}

## **Configuring Google BigQuery in RudderStack**

To enable sending data to Google BigQuery, you will first need to add it as a destination in RudderStack. Once the destination is configured and enabled, events from RudderStack will start to flow to BigQuery. 

To do so, please follow these steps:

* Choose a source to which you would like to add Google BigQuery as a destination.

{% hint style="info" %}
Please follow our [**Adding a Source and Destination**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* Once you have set up the source, select **Google BigQuery** from the list of destinations. Give your destination a name, and then click on **Next**. You will then see the following **Connection Credentials** screen:

![Google BigQuery Configuration Settings in RudderStack](../.gitbook/assets/image%20%2852%29.png)

* Add your **Project ID, Location** \(optional\) and the **Staging GCS Storage Bucket Name**, as specified in the [**Setting up Google BigQuery Project**](https://docs.rudderstack.com/destinations/google-bigquery#setting-up-google-bigquery) section. 
* Copy the contents of the credentials JSON file you created and stored, in the section above.

That's it! You have successfully added Google BigQuery as a destination in RudderStack.

## Schema, Partitioned Tables, and Views

RudderStack uses the source name \(written in snake case, e.g. `source_name`\) to create a dataset in BigQuery. 

{% hint style="info" %}
More details about the tables and columns created by RudderStack can be found [**here**](https://docs.rudderstack.com/data-warehouse-integration-guides/warehouse-schemas).
{% endhint %}

RudderStack creates ingestion-time partition tables based on the load date, so you can take advantage of it to query a subset of data. 

{% hint style="info" %}
More details about the BigQuery partitioned tables [**here**](https://cloud.google.com/bigquery/docs/partitioned-tables). Information on RudderStack creates these tables on load can be found [**here**](https://cloud.google.com/bigquery/docs/creating-partitioned-tables#creating_an_ingestion-time_partitioned_table_when_loading_data).
{% endhint %}

In addition to tables, a **view** \(`<table_name>_view`\) is created for every table for de-duplication purposes. 

{% hint style="info" %}
More information on views can be found in this [**guide**](https://cloud.google.com/bigquery/docs/views-intro). 
{% endhint %}

We recommend that you use the corresponding view \(which contains the events from the last 60 days\) to avoid duplicate events in your query results. Since BigQuery [**views**](https://cloud.google.com/bigquery/docs/views-intro#view_pricing) ****are merely logical views and are not cached, you can create a native table from it to save money by avoiding running the query that defines the view every time.   

{% hint style="success" %}
Users can modify the view query to change the time window of the view. The default value is set to **60 days**.
{% endhint %}

## FAQs

### How are reserved words handled by RudderStack? <a id="how-are-reserved-words-handled"></a>

There are some limitations when it comes to using [**reserved words**](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#reserved_keywords) in a schema, table, or column names. If such words are used in event names, traits or properties, they will be prefixed with a `_`when RudderStack creates tables or columns for them in your schema.

Besides, integers are not allowed at the start of the schema or table name. Hence, such schema, column or table names will be prefixed with a `_`.

For instance, `'25dollarpurchase`' will be changed to `'_25dollarpurchase`'.

### When sending data into a data warehouse, how can I change the table where this data is sent?

By default, RudderStack sends the data to the table / dataset based on the source it is connected to. For example, if the source is Google Tag Manager, RudderStack sets the schema name as **`gtm_*`**.

You can override this by setting the **Namespace** in the destination settings as shown:

![](../.gitbook/assets/image%20%2879%29.png)

### I'm looking to send data to BigQuery through RudderStack and I'm trying to understand what data is populated in each column. How do I go about this?

You can refer to the [**RudderStack Warehouse Schema**](warehouse-schemas.md) documentation for details on how RudderStack generates the schema in the warehouse.

### I am trying to load data into my BigQuery destination and I get this error:

```c
backend_1 | {Location: “”; Message: “Cannot read and write in different locations: 
source: US, destination: us-central1""; Reason: “invalid”}"
```

Make sure that both your BigQuery dataset and the bucket have the same region.

### When piping data to a BigQuery destination, I can set the bucket but not a folder within the bucket. Is there a way to put Rudderstack data in a specific bucket folder?

Yes, you can set the desired folder name in the **Prefix** input field while configuring your BigQuery destination.

### Does open-source RudderStack support near-realtime syncing to BigQuery and Event Replay?

The near-realtime BigQuery syncing feature is currently under development and is planned to be released in the coming months. Unfortunately, Event Replay is not a part of open-source RudderStack currently.

### What is the current sync frequency for BigQuery?

If you're using open-source RudderStack, the minimum sync frequency is 30 minutes. If you're self-hosting the data plane or using RudderStack Cloud Pro / Enterprise, you can tweak the config to set `uploadFreqInS` in **`config.yaml`**to 0 and determine the best possible value for near real-time sync.

For more information, please refer to this [**guide**](https://docs.rudderstack.com/data-warehouse-integrations/warehouse-faqs#is-there-a-way-to-force-my-data-load-into-the-warehouses).

### Do I need to stop the running pipeline to change my sync frequency? Or will the new change be effective even without stopping the pipeline?

To change the sync frequency, you need not stop the pipeline.

### When configuring the BigQuery destination, where does Google use the credentials JSON from?

BigQuery uses the credentials JSON from the configuration settings when setting up the destination. For more information, refer to [**this section**](https://docs.rudderstack.com/data-warehouse-integrations/google-bigquery#setting-up-the-service-account-for-rudderstack). 

### When configuring the BigQuery destination, should the user permissions be set for the specific dataset or the whole project?

You need to set project-wide user permissions. Otherwise you may encounter permissions issues.

### How long are the failed syncs retried before being aborted?

RudderStack retries the failed syncs for up to 3 hours before aborting them. For more information, refer to this FAQ [**guide**](https://docs.rudderstack.com/faqs#1-how-does-rudderstack-handle-retries-for-failed-events-in-case-of-destination-failure).

  
  
  






## Contact Us

If you come across any issues while configuring Google BigQuery with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.  


