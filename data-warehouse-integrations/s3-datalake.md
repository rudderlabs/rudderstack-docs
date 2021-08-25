
  

# S3 Datalakes

  

  

S3 datalake intro

  

  

# Setting up a new S3 Datalake destination

  

  

In order to start dumping data to your S3 datalake, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from RudderStack will automatically start flowing to your datalake.

  

  

To configure S3 Datalake as a destination, please follow these steps:

  

  

  

* Choose a source to which you would like to add S3 Datalake as a destination. You can also simply create a destination and connect it to a source later.

  

  

  

{% hint style="info" %}

  

  

Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.

  

  

{% endhint %}

  

  

  

* After choosing a source, select **S3 Datalake** from the list of destinations.

  

  

* Give your destination a name and then click on **Next**. You should then see the following screen:

  

* add image

  

* Add the required credentials in the **Connection Settings** as mentioned below:

  

*  **Staging S3 Storage Bucket Name-** The name of the S3 bucket that will be used to store data.

  

  

*  **Register schema on AWS Glue -** If you enable this option, we register the schema of your incoming data on AWS Glue's Data catalog.

  

* **AWS Glue Region** - Your AWS Glue's region.Ex for N.Virginia it would be `us-east-1`

  

*  **S3 Prefix** - If configured, we create a folder in the bucket with the same name as the configured prefix and push all data inside that folder. OR If configured, all data pushed by rudderstack for this destination would be inside the prefix folder.

  
  

  

*  **Namespace** - Defaults to source name.All data for the destination would be pushed to `s3://<bucketName>/<prefix>/rudder-datalake/<namespace>`.If glue is enabled, all table definitions are created in a database with name set to namespace.

  

  

*  **AWS Access Key ID, AWS Secret Access Key** - Your AWS Access Key ID and AWS Secret Access Key.

  

## Where to find your data

We convert your events into paruqet files and dump them to the configured s3 bucket.Before dumping your events to s3, we group them based on the time(UTC) we received them.All events belonging to an hour are stored in the same folder.(grouped by event name).The folder structure looks something like -

  

`s3://<bucketName>/<prefix>/rudder-datalake/<namespace>/<tableName>/YYYY/MM/DD/HH`

  
*  **prefix**  - the configured prefix.if prefix is not configured, we omit this value.
*  **namespace** - defaults to source name if not configured while adding destination.

*  **tableName** - this is the same as the event name.

  

YYYY, MM, DD and HH are replaced by actual time values. A combination of these values represents an hour in UTC time.

  

If glue is enabled, all table definitions are created in a database with name set to namespace.

## Querying your data using AWS Athena

You can query your data using something like [AWS Athena](https://aws.amazon.com/athena/), which lets you run SQL queries on your S3 data.Before trying out the steps below, you should make sure that you have sent some data and the sync has completed.

### AWS Glue enabled -

If you enabled glue while setting up the destination, follow these steps to start querying your data on s3 -

* Open the AWS Athena console and go to the same AWS region which you used while configuring glue.

* In the left pane, select `AwsDataCatalog` as your data source.

* Select your configured namespace from the database drop down menu.(The namespace defaults to your source name)

* You should see some tables already created under the tables section in the left pane.

* You can either preview data by clicking on the three dots next to the table and selecting `Preview Data` or you can even run your custom SQL queries

* Attach screenshots.

  

### AWS Glue not enabled -

If you didn't enable glue while setting up the destination, you need to create a crawler to go through your data and create table definitions out of them.

  

#### Creating a crawler

Follow these steps to create a crawler -

* Go to the AWS Glue console and select `Crawler` from the left pane.

* Select Add Crawler

* Specify a name for your crawler

* Choose `Data stores` under `Crawler source type`

* Configure `Repeat crawls of S3 data stores` based on your needs.

* Under `Choose a data store` choose `S3` from the dropdown

* Under `Crawl data in` choose `Specified path in my account`

* Under `Include path` enter the S3 URI of your configured bucket followed by the sufix `/<prefix>/rudder-datalake/<namespace>/`. For example if your bucket name is `testBucket` and the configured prefix and namespace is `testPrefix` and `testNS` - then your include path should look like `s3://testBucket/testPrefix/rudder-datalake/testNS/`.If you have not configured any prefix, you should omit the prefix part - your include path would be `s3://testBucket/rudder-datalake/testNS/` in that case.

* Select `No` under `Add another data store`

* Configure a suitable IAM role in the `Choose an IAM role` section

* In the schedule section, configure the frequency of your crawler.

* In the output secntion, configure a database which would store all your tables.

* Select `Create a single schema for each S3 path` under `Grouping behavior for S3 data`

* Also specify the `Table level` as 5. This value indicates the table location(the absolute level in the bucket).The level for the top level folder is 1.For example, for the path mydataset/a/b, if the level is set to 3, the table is created at location mydataset/a/b.
Since all tables are created under `s3://testBucket/<prefix>/rudder-datalake/<namespace>/`, the table level should be set to-
	* 5 if a prefix is configured
	* 4 if no prefix is configured
* Review your crawler configuration.
* Click on finish
* Once done, click on your crawler and run it
* Wait for it to finish, you should see some tables getting created in your configured database.

#### Querying data
* Open the AWS Athena console and go to the same AWS region which you used while configuring the crawler on glue.

* In the left pane, select `AwsDataCatalog` as your data source.

* Select your configured database from the database drop down menu.

* You should see some tables already created under the tables section in the left pane.

* You can either preview data by clicking on the three dots next to the table and selecting `Preview Data` or you can even run your custom SQL queries

* Attach screenshots.