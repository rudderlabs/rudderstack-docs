---
description: Step-by-step guide to add Snowflake as a destination in RudderStack
---

# Snowflake

Snowflake is a cloud-based data warehouse provided as Software-as-a-Service \(SaaS\). It offers all the features of a modern data warehouse, including scalability, ease of use, secure access to your data, accelerated analytics capabilities, and much more.

RudderStack allows you to configure Snowflake as a destination to dump your event data seamlessly.

{% hint style="info" %}
Please check our [Warehouse Schemas](https://docs.rudderstack.com/data-warehouse-integration-guides/warehouse-schemas) guide to know how events are mapped to the tables in Snowflake.
{% endhint %}

## Snowflake User Setup

To enable RudderStack access, please make sure you have an `ACCOUNTADMIN`, or an account that has `MANAGE GRANTS`.

The following sections illustrate how to create a virtual warehouse, a database, a role, and an user in Snowflake:

### Creating a Virtual Warehouse

Create a `X-Small warehouse`by following the wizard on Snowflake's website as shown in the screenshot below:

![](../.gitbook/assets/screenshot-2020-03-31-at-11.56.32-am.png)

{% hint style="info" %}
You can set your data warehouse size as per your future data volume.
{% endhint %}

Alternatively, you can also use SQL to create a warehouse, as shown:

```text
CREATE WAREHOUSE "RUDDER_WAREHOUSE"
  WITH WAREHOUSE_SIZE = 'XSMALL'
    WAREHOUSE_TYPE = 'STANDARD'
    AUTO_SUSPEND = 600
    AUTO_RESUME = TRUE;
```

{% hint style="info" %}
It is recommended that you set `AUTO_SUSPEND` to ~10 mins, and enable `AUTO_RESUME` to avoid any extra costs.
{% endhint %}

### Creating a Database

{% hint style="warning" %}
Please create a new database to avoid conflicts with your existing data, as RudderStack creates its own tables.
{% endhint %}

The following screenshot demonstrates the **Create Database** option in Snowflake.

![Creating a database in Snowflake](../.gitbook/assets/screenshot-2020-02-27-at-5.33.31-pm.png)

Alternatively, you can also use SQL to create a database, as shown:

```text
CREATE DATABASE "RUDDER_EVENTS";
```

### Creating a Role for RudderStack

Please execute the following SQL commands to create a new role with the required permissions to load your data into the warehouse:

* Create a new role

```text
CREATE ROLE "RUDDER";
```

* Grant access to the virtual warehouse

```text
GRANT USAGE ON WAREHOUSE "RUDDER_WAREHOUSE" TO ROLE "RUDDER";
```

* Grant access to the database

```text
GRANT USAGE ON DATABASE "RUDDER_EVENTS" TO ROLE "RUDDER";
GRANT CREATE SCHEMA ON DATABASE "RUDDER_EVENTS" TO ROLE "RUDDER";
```

### Creating a User

Finally, please create a user to connect RudderStack to the previously created Snowflake warehouse, as shown:

![Creating a user in Snowflake](../.gitbook/assets/screenshot-2020-02-27-at-5.34.41-pm.png)

Alternatively, you can use SQL to create a user in Snowflake, as shown:

```text
CREATE USER "RUDDER_USER"
  MUST_CHANGE_PASSWORD = FALSE
  DEFAULT_ROLE = "RUDDER"
  PASSWORD = "strong_unique_password";  
GRANT ROLE "RUDDER" TO USER "RUDDER_USER";
```

## Configuring Snowflake in RudderStack

In order to enable dumping data to Snowflake, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from RudderStack will start to flow to Snowflake.

To do so, please follow these steps:

* Choose a source to which you would like to add Snowflake as a destination. You can also simply create a destination and connect it to a source later.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* After choosing a source, select **Snowflake** from the list of destinations.
* Give your destination a name and then click on **Next**. You should then see the following screen:

![](../.gitbook/assets/4%20%283%29.png)

![Connection Settings for configuring Snowflake as a Destination](../.gitbook/assets/5%20%282%29.png)

* Add the required credentials in the **Connection Settings** as described below:

  * **Account** - This is the account ID of your warehouse. Account ID is part of the Snowflake URL. The following examples illustrate the slight differences in the account ID for various cloud providers**.**

  | Account ID sample | Snowflake URL | Snowflake cloud provider |
  | :--- | :--- | :--- |
  | **qya56091.us-east-1** | `https://`**`qya56091.us-east-1`**`.snowflakecomputing.com` | Amazon Web Services \(AWS\) |
  | **rx18795.east-us-2.azure** | `https://`**`rx18795.east-us-2.azure`**`.snowflakecomputing.com` | Microsoft Azure \(Azure[\)](https://azure.microsoft.com/en-us/) |
  | **ah76025.us-central1.gcp** | `https://`**`ah76025.us-central1.gcp`**`.snowflakecomputing.com` | Google Cloud Platform \(GCP\) _\*\*_ |

  * **Database** - The name of the database, as created in the [Creating a Database](https://docs.rudderstack.com/destinations/snowflake#creating-a-database) section
  * **Warehouse** - The name of the warehouse, as created in the [Creating a Virtual Warehouse](https://docs.rudderstack.com/destinations/snowflake#creating-a-virtual-warehouse) section
  * **User** - This is the username, as created in [Creating a User](https://docs.rudderstack.com/destinations/snowflake#creating-a-user) section.
  * **Password** - This is the password, as created in [Creating a User](https://docs.rudderstack.com/destinations/snowflake#creating-a-user) section. 

  The following settings are applicable if you are using an Amazon S3 bucket for object storage:

* **S3 bucket name** - This is your unique S3 bucket name
* **AWS Access Key ID** - This can be obtained from the AWS Console. 
* **AWS Secret Access Key** -  This can be obtained from AWS Console. Please refer to the [Setting Up Amazon S3](https://docs.rudderstack.com/destinations-guides/amazon-s3#setting-up-amazon-s3) section for more details.

## Configuring Snowflake Integration

{% tabs %}
{% tab title="AWS" %}
If you have Amazon Web Services \(AWS\) as your cloud provider and want to leverage S3 as your object storage, you will need to follow a few more steps to configure your Snowflake destination with a snowflake integration.

Detailed instructions can be found [here](https://docs.snowflake.com/en/user-guide/data-load-s3-config.html#option-1-configuring-a-snowflake-storage-integration)

**Configuring snowflake integration with AWS -**

1. Create a policy in AWS:

   Replace `<bucket>` and `<prefix>` with your values in the JSON below. And create the policy with a name of your choice.

   ```text
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Effect": "Allow",
               "Action": [
                 "s3:PutObject",
                 "s3:GetObject",
                 "s3:GetObjectVersion",
                 "s3:DeleteObject",
                 "s3:DeleteObjectVersion"
               ],
               "Resource": "arn:aws:s3:::<bucket>/<prefix>/*"
           },
           {
               "Effect": "Allow",
               "Action": "s3:ListBucket",
               "Resource": "arn:aws:s3:::<bucket>",
               "Condition": {
                   "StringLike": {
                       "s3:prefix": [
                           "<prefix>/*"
                       ]
                   }
               }
           }
       ]
   }
   ```

2. Create a role and attach the above policy in AWS: - Create role of type **Another AWS account** - Enter your AWS account ID and enable **Require External ID** - For external ID enter a dummy ID such as 0000. We will modify this later on. - And attach the policy created in Step 1. - Give your role a name and keep the role ARN handy for the next step. _\*\*_
3. Create cloud storage integration in Snowflake -

   ```text
   CREATE STORAGE INTEGRATION <integration_name>
     TYPE = EXTERNAL_STAGE
     STORAGE_PROVIDER = S3
     ENABLED = TRUE
     STORAGE_AWS_ROLE_ARN = '<iam_role>'
     STORAGE_ALLOWED_LOCATIONS = ('s3://<bucket>/<path>/', 's3://<bucket>/<path>/')
     [ STORAGE_BLOCKED_LOCATIONS = ('s3://<bucket>/<path>/', 's3://<bucket>/<path>/') ]
   ```

   `<integration_name>` with an integration name of your choice.  
   `<iam_role>` with the role ARN from the previous step.

   Record the values - `<integration_name>`.

4. Retrieve the AWS IAM user for your Snowflake account as shown:

   ```text
   DESC INTEGRATION <integration_name>;
   ```

   `<integration_name>` - The integration name used in the previous step.

   Record the values - `STORAGE_AWS_ROLE_ARN` and `STORAGE_AWS_EXTERNAL_ID` .

5. Grant IAM user permission to access bucket objects in AWS -

   * Choose the role created in Step 2 and edit the trust relationship with the following JSON.

   ```text
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "",
         "Effect": "Allow",
         "Principal": {
           "AWS": "<snowflake_user_arn>"
         },
         "Action": "sts:AssumeRole",
         "Condition": {
           "StringEquals": {
             "sts:ExternalId": "<snowflake_external_id>"
           }
         }
       }
     ]
   }
   ```

   `<snowflake_user_arn>` is the `STORAGE_AWS_ROLE_ARN` in the previous step.  
   `<snowflake_external_id>` is the `STORAGE_AWS_EXTERNAL_ID` in the previous step.

6. Grant integration access to role in Snowflake:

   ```text
   grant usage on integration <ingration_name> to role <sf_role>;
   ```

   `<integration_name>` is the integration created in the Step 3.  
   `<sf_role>` is the role in Snowflake you want to grant access to.
{% endtab %}

{% tab title="Azure" %}
If you have Microsoft Azure as your cloud provider and want to leverage Azure Blob Storage as your object storage, you will need to follow a few more steps to configure your Snowflake destination with a snowflake integration.

Detailed instructions can be found [here](https://docs.snowflake.com/en/user-guide/data-load-gcs-config.html#configuring-an-integration-for-google-cloud-storage).

From the above instructions, make sure you perform the below steps:

* Create a storage integration on Snowflake with `STORAGE_ALLOWED_LOCATIONS` that includes the bucket you provided in the [Configuring Snowflake in RudderStack](https://docs.rudderstack.com/data-warehouse-integration-guides/snowflake#configuring-snowflake-in-rudderstack) section
* The service account associated with the Snowflake integration created in the step above has Data Loading permissions \(`storage.buckets.get`, `storage.objects.get`, `storage.objects.list`\) configured already. This is, however, different from the service account provided in RudderStack-Snowflake configuration which also needs to have the `storage.objects.create`  permission for GCP bucket
* Grant usage on the integration created to the Snowflake role provided in the [Configuring Snowflake in RudderStack](https://docs.rudderstack.com/data-warehouse-integration-guides/snowflake#configuring-snowflake-in-rudderstack) section above.
{% endtab %}

{% tab title="GCP" %}
If you have Google Cloud Platform \(GCP\) as your cloud provider and want to leverage Google Cloud Storage as your object storage, you will need to follow a few more steps to configure your Snowflake destination with a snowflake integration.

Detailed instructions can be found [here](https://docs.snowflake.com/en/user-guide/data-load-azure-config.html#option-1-configuring-a-snowflake-storage-integration).

**Configuring snowflake integration with Azure -**

1. Create a storage account in Azure. 
2. Create a container in the storage account created above by navigating to **&lt;storage\_account&gt;** - **Storage Explorer** - **Blob Containers** - **Create a Blob Container**. 
3. Create cloud storage integration in Snowflake:

   ```text
   CREATE STORAGE INTEGRATION <integration_name>
     TYPE = EXTERNAL_STAGE
     STORAGE_PROVIDER = AZURE
     ENABLED = TRUE
     AZURE_TENANT_ID = '<tenant_id>'
     STORAGE_ALLOWED_LOCATIONS = ('azure://<account>.blob.core.windows.net/<container>/<path>/', 'azure://<account>.blob.core.windows.net/<container>/<path>/')
     [ STORAGE_BLOCKED_LOCATIONS = ('azure://<account>.blob.core.windows.net/<container>/<path>/', 'azure://<account>.blob.core.windows.net/<container>/<path>/') ]
   ```

   `<tenant_id>` - Get your tenant id by navigating to **Azure Active Directory** - **Properties.** The tenant ID is displayed in the **Directory ID** field.  
   **&lt;account&gt;** - **&lt;storage\_account&gt;** - **Access keys** - &lt;`storageAccountName`&gt;

4. Grant Snowflake access to the storage locations -

   Replace `<integration_name>` with the integration name created in the previous step.

   ```text
   DESC INTEGRATION <integration_name>;
   ```

   And record the values `AZURE_CONSENT_URL` and `AZURE_MULTI_TENANT_APP_NAME` .

5. Navigate to the URL in the `AZURE_CONSENT_URL` obtained in the previous step and accept.
6. Grant snowflake access to the container created in Step 2:    - Navigate to **Azure Services** - **Storage Accounts** and select the storage account created in  Step 1. - Add role : Navigate to **Access Control \(IAM\)** - **Add Role Assignment** and select either **Storage Blob Data Reader\(Read Access\)** or **Storage Blob Data Contributor\(Read and Write Access\)**  - Add **Assign Access** : Add **Service Principal** as  the type of security principal to assign the role to. And search for `AZURE_MULTI_TENANT_APP_NAME` obtained in step 4.
7. Grant integration access to role in Snowflake:

   ```text
   grant usage on integration <ingration_name> to role <sf_role>;
   ```

   `<integration_name>` is the integration created in the Step 4.  
   `<sf_role>` is the role in Snowflake you want to grant access to.
{% endtab %}
{% endtabs %}

## Contact Us

If you come across any issues while configuring Snowflake with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

