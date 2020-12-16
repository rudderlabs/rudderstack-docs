---
description: Step-by-step guide to set up PostgreSQL as a destination in RudderStack
---

# PostgreSQL

PostgreSQL is an enterprise-grade, open source database management system. It supports both SQL and JSON for relational and non-relational queries respectively. Many companies in the market use PostgreSQL as their low-cost data warehousing solution in order to deliver efficient analytics and user insights. A myriad of other analytical tools in the market also integrate seamlessly with PostgreSQL. In fact, Amazon Redshift's design is inspired from PostgreSQL.

RudderStack allows you to configure PostgreSQL as a destination to which you can dump your event data seamlessly.

{% hint style="info" %}
Please check our [Warehouse Schemas](https://docs.rudderstack.com/data-warehouse-integration-guides/warehouse-schemas) guide to know how events are mapped to the tables in PostgreSQL.
{% endhint %}

## Setting PostgreSQL User Permissions

After setting up your PostgreSQL database, create a user. You should also assign privileges to the created user in order to create schemas and temporary tables on the specified database.

Below are the SQL queries that let you create a user, and grant the above-mentioned privileges to that created user:

```text
CREATE USER <user name> WITH PASSWORD '<enter password here>';

-- grants the above created user to create new schemas and temporary tables on the specified database.
GRANT CREATE, TEMPORARY ON DATABASE <enter database name here> TO <user name>;
```

{% hint style="warning" %}
If you don't grant the `CREATE, TEMPORARY` privileges the events don't get exported to PostgreSQL.
{% endhint %}

## Configuring PostgreSQL in RudderStack

In order to enable dumping data to PostgreSQL, you will first need to add it as a destination to the source from which you are sending the event data. Once the destination is enabled, events from RudderStack will automatically start to flow to PostgreSQL.

To configure PostgreSQL as a destination, please follow these steps:

* Choose a source to which you would like to add PostgreSQL as a destination. You can also simply create a destination and connect it to a source later.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* After choosing a source, select **PostgreSQL** from the list of destinations.
* Give your destination a name and then click on **Next**. You should then see the following screen:

![PostgreSQL Destination Settings on the RudderStack dashboard](../.gitbook/assets/image%20%2887%29.png)

* Add the required credentials in the **Connection Settings** as mentioned below:
  * **Host -** The host name of your PostgreSQL service.
  * **Database -** The database name in your PostgreSQL instance where the data gets loaded.
  * **User** - The username which has the required read/write access to the above database.
  * **Password** - The password for the above user.
  * **SSL Mode** - SSL modes for connecting to your PostgreSQL instance.
  * **Bucket Provider** - Intermediate storage for storing staging files. Currently we support S3, MinIO, Google Cloud Storage, and Azure Blob Storage.

## FAQs

### **How are reserved words handled by RudderStack?**

There are some limitations when it comes to using [reserved words](https://www.postgresql.org/docs/current/sql-keywords-appendix.html) in a schema, table, or column names. If such words are used as event names, traits or properties, they will be prefixed with a `_` when  RudderStack creates tables or columns for them in your schema.

Also, it is important to note that integers are not allowed at the start of the schema or table name. Hence, RudderStack prefixes such schema, column or table names with a `_`.

For instance, `'25dollarpurchase'` will be changed by RudderStack to `'_25dollarpurchase`'.

### How does RudderStack handle cases when loading data into PostgreSQL?

RudderStack converts the event keys into lower case before exporting the data into PostgreSQL, so that it does not create two tables if the event name has two different cases.

## Contact Us

If you come across any issues while configuring PostgreSQL with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

