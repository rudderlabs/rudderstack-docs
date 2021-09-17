---
description: Step-by-step guide to ingest your data from Snowflake into RudderStack.
---

# Snowflake

[Snowflake](https://www.snowflake.com/) is a cloud-based data warehouse provided as Software-as-a-Service \(SaaS\). It offers all the features of a modern data warehouse, including scalability, ease of use, secure access to your data, accelerated analytics capabilities, and much more.

This guide will help you configure Snowflake as a source from which you can route event data to your desired destinations through RudderStack.

## Granting Permissions

{% hint style="warning" %}
You must have the **ACCOUNTADMIN** role in order to grant the necessary permissions.
{% endhint %}

![](../.gitbook/assets/screenshot-2021-09-17-at-6.46.08-pm.png)

Run the following SQL queries in the **exact order** to grant the necessary permissions for the Snowflake Warehouse Actions source:

```text
CREATE ROLE RUDDER_ROLE;
```

The above command creates the role `RUDDER_ROLE` in Snowflake. After creating the role, you can grant object privileges to it.

```text
SHOW ROLES;
```

This command verifies if the role `RUDDER_ROLE` is successfully created.

```text
CREATE USER RUDDER PASSWORD = '<strong_unique_password>' DEFAULT_ROLE = 'RUDDER_ROLE';
```

This command creates a new user `RUDDER` with your password `<strong_unique_password>` in Snowflake.

```text
SHOW USERS;
```

The above command verifies if the user `RUDDER` is successfully created.

```text
GRANT ROLE RUDDER_ROLE TO USER RUDDER;
```

This command enables the user \(`RUDDER`\) to perform all the operations allowed for the role \(via the access privileges granted to it\).

```text
GRANT USAGE ON WAREHOUSE "<YOUR_WAREHOUSE>" TO ROLE RUDDER_ROLE;
```

This command allows the role `RUDDER_ROLE` to look up the objects within the warehouse `<YOUR_WAREHOUSE>`. Replace `<YOUR_WAREHOUSE>` with the exact name of your data warehouse in Snowflake.

```text
GRANT USAGE ON DATABASE "<YOUR_DATABASE>" TO ROLE RUDDER_ROLE;
```

The above command allows the role `RUDDER_ROLE` to look up objects within the database `<YOUR_DATABASE>`. Replace `<YOUR_DATABASE>` with the exact name of your database in Snowflake.

```text
GRANT USAGE ON SCHEMA "<YOUR_DATABASE>"."<YOUR_SCHEMA>" TO ROLE RUDDER_ROLE;
```

This command lets the role `RUDDER_ROLE` look up objects within the schema `<YOUR_SCHEMA>`. Replace `<YOUR_DATABASE>` and `<YOUR_SCHEMA>` with the exact name of your database and the schema in Snowflake.

```text
GRANT SELECT ON TABLE "<YOUR_DATABASE>"."<YOUR_SCHEMA>"."<YOUR_TABLE>" TO ROLE  RUDDER_ROLE;
```

This command allows the role `RUDDER_ROLE` to read the data from the specified table `<YOUR_TABLE>`. Replace `<YOUR_DATABASE>`, `<YOUR_SCHEMA>`, and `<YOUR_TABLE>` with the exact database, schema, and table names in Snowflake.

```text
GRANT SELECT ON VIEW "<YOUR_DATABASE>"."<YOUR_SCHEMA>"."<YOUR_VIEW>" TO ROLE  RUDDER_ROLE;
```

The above command allows the role `RUDDER_ROLE` to read the data from the specified view `<YOUR_VIEW>`. Replace `<YOUR_DATABASE>`, `<YOUR_SCHEMA>`, and `<YOUR_VIEW>` with the exact database, schema, and view names in Snowflake.

```text
CREATE SCHEMA "<YOUR_DATABASE>"."_RUDDERSTACK";
```

This command creates a dedicated schema `_RUDDERSTACK` to be used by RudderStack for storing the state of each data sync.

{% hint style="warning" %}
The `_RUDDERSTACK` schema is used by RudderStack. Its name **should not** be changed.
{% endhint %}

```text
GRANT ALL PRIVILEGES ON SCHEMA "<YOUR_DATABASE>"."_RUDDERSTACK" TO ROLE RUDDER_ROLE;
```

This command allows `RUDDER_ROLE` to have full access to the schema `_RUDDERSTACK`.

**Optional**: Run the following commands to allow the role `RUDDER_ROLE` to read the data from all the tables and views in the schema `<YOUR_SCHEMA>`:

```text
GRANT SELECT ON ALL TABLES IN SCHEMA "<YOUR_DATABASE>"."<YOUR_SCHEMA>" TO ROLE RUDDER_ROLE;
```

The above command allows the role `RUDDER_ROLE` to read data from all the tables in the schema `<YOUR_SCHEMA>`.

```text
GRANT SELECT ON FUTURE TABLES IN SCHEMA "<YOUR_DATABASE>"."<YOUR_SCHEMA>" TO ROLE RUDDER_ROLE;
```

This command allows the role `RUDDER_ROLE` to read the data from all the future tables in the schema `<YOUR_SCHEMA>`.

```text
GRANT SELECT ON ALL VIEWS IN SCHEMA "<YOUR_DATABASE>"."<YOUR_SCHEMA>" TO ROLE RUDDER_ROLE;
```

The above command allows the role `RUDDER_ROLE` to read data from all the views in the schema `<YOUR_SCHEMA>`.

```text
GRANT SELECT ON FUTURE VIEWS IN SCHEMA "<YOUR_DATABASE>"."<YOUR_SCHEMA>" TO ROLE RUDDER_ROLE;
```

This command allows the role `RUDDER_ROLE` __to read the data from all the future views in the schema `<YOUR_SCHEMA>`.

## Set Up as Source

To set up Snowflake as a source in RudderStack, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Sources**. Then, click on **Add Source**, as shown:

![](../.gitbook/assets/image%20%2897%29%20%281%29%20%281%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%283%29%20%284%29.png)

* Scroll down to the **Warehouse Sources** and select **Snowflake**. Then, click on **Next**.

![](../.gitbook/assets/screen-shot-2021-01-13-at-4.42.40-pm.png)

### Setting Up the Connection

* Assign a name to your source, and click on **Create Credentials from Scratch**. Then, click on **Next**.

{% hint style="success" %}
If you've already configured Snowflake as a source before, your existing credentials will automatically appear under **Use Existing Credentials**.
{% endhint %}

* Next, enter the relevant connection details in the **Connection Credentials** as shown below:

![](../.gitbook/assets/screen-shot-2021-01-13-at-4.43.42-pm.png)

* The required settings are:
  * **Account -** This is the account ID of your warehouse. The account ID is part of the Snowflake URL. The following examples illustrate the slight differences in the account ID for various cloud providers**.**

    | Account ID sample | Snowflake URL | Snowflake cloud provider |
    | :--- | :--- | :--- |
    | **qya56091.us-east-1** | `https://`**`qya56091.us-east-1`**`.snowflakecomputing.com` | Amazon Web Services \(AWS\) |
    | **rx18795.east-us-2.azure** | `https://`**`rx18795.east-us-2.azure`**`.snowflakecomputing.com` | Microsoft Azure \(Azure[\)](https://azure.microsoft.com/en-us/) |
    | **ah76025.us-central1.gcp** | `https://`**`ah76025.us-central1.gcp`**`.snowflakecomputing.com` | Google Cloud Platform \(GCP\) |

  * **Database -** The name of the database in which your data resides goes here.
  * **Warehouse** - Specify the name of the warehouse here.
  * **User** - The username which has the required read/write access to the above database.
  * **Password** - The password for the above user should be specified here.
  * **Your Cloud** - Please specify the cloud service in this field.

### Specifying the Data to Import

* Next, select the **Schema** and the **Table** from which you want RudderStack to import the data.

![](../.gitbook/assets/screen-shot-2021-01-13-at-4.44.24-pm.png)

{% hint style="warning" %}
Your table must include one of the following columns - `email`, `user_id`, or `anonymous_id`.
{% endhint %}

* Once you specify the table containing the required columns, you will be able to preview a snippet of your data, as shown below:

![](../.gitbook/assets/screen-shot-2021-01-05-at-3.21.38-pm.png)

* Here, you can select all or only a few specific columns of your choice, search the columns by a keyword, and also edit the **JSON Trait Key**, as shown below. You can also preview the resultant JSON on the right. Once you've select the required table columns to import the data from, click on **Next**.

![](../.gitbook/assets/screen-shot-2021-01-05-at-3.22.09-pm.png)

### Setting the Data Update Schedule

* Next, you will be required to set the **Run Frequency** to schedule the data import from your Snowflake instance to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option. Then, click on **Next**.

![](../.gitbook/assets/screen-shot-2021-01-13-at-4.44.45-pm.png)

That's it! Snowflake is now successfully configured as a source on your RudderStack dashboard.

RudderStack will start importing data from your Snowflake instance as per the specified frequency. You can further connect this source to your preferred destination by clicking on **Connect Destinations** or **Add Destinations**, as shown:

![](../.gitbook/assets/screen-shot-2021-01-13-at-4.45.10-pm.png)

{% hint style="info" %}
If you have already configured a destination on the RudderStack platform, choose the **Connect Destinations** option. To add a new destination from scratch, you can select the **Add Destination** option.
{% endhint %}

## Contact Us

If you come across any issues while configuring Snowflake as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

