---
description: Step-by-step guide to set up Amazon Redshift as a destination in RudderStack.
---

# Amazon Redshift

Amazon Redshift is the world's fastest cloud data warehouse. It allows you to handle large analytical workloads with best-in-class performance, speed, and efficiency. With Redshift, you don't have to worry about the scale of your data or the cost of running queries on them.

You can integrate RudderStack with Redshift seamlessly and store your customer event data into it, from the source of your choice.

{% hint style="info" %}
Please check our [Warehouse Schemas](https://docs.rudderstack.com/data-warehouse-integration-guides/warehouse-schemas) guide to know how events are mapped to the tables in Redshift.
{% endhint %}

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/rs)**.**
{% endhint %}

## Setting Up a Redshift Cluster

Before adding Redshift as a destination in RudderStack, it is recommended that you create a new Redshift cluster depending on the type of instance needed. The following sections give you step-by-step instructions on how to do so.

### Choosing the type of Redshift instance

Amazon Redshift provides two types of clusters: **Dense Compute** and **Dense Storage** clusters

* **Dense Compute** clusters maximize CPU usage, resulting in an increase in query performance. However, there is a trade-off with respect to the storage.
* **Dense Storage** clusters maximize storage for customers with hundreds of millions of rows of data. However, there is a trade-off in the CPU usage, resulting in a lower query performance.

{% hint style="info" %}
Please refer to [this article](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#working-with-clusters-overview) to read more about the cluster and node types in Amazon Redshift.
{% endhint %}

### Creating a new Redshift cluster

Please follow the steps below in order to create a new Redshift cluster:

* Open the Redshift Console as shown:

![Redshift Console](../.gitbook/assets/1%20%283%29.png)

* Click on the **Create Cluster** option as shown:

![](../.gitbook/assets/2%20%285%29.png)

* Enter the cluster details**.** First, fill in the **Cluster identifier** and choose the instance type as shown:

![Redshift cluster configuration settings](../.gitbook/assets/3%20%284%29%20%281%29%20%281%29.png)

* Enter the number of nodes for your cluster. This will primarily depend on the amount of data you expect to work with.

![](../.gitbook/assets/4%20%281%29%20%281%29.png)

* Enter the database name, and create the admin user with the name of your choice.

![](../.gitbook/assets/5%20%287%29.png)

{% hint style="warning" %}
For security purposes, we recommend that you choose a strong password.
{% endhint %}

* Finish creating the cluster by allowing the default options for **Additional Configurations**. 

{% hint style="info" %}
As a part of this setup, we will also have to edit the VPC network and configure the security settings. We will cover these aspects in the [Connecting RudderStack to Redshift](https://docs.rudderstack.com/destinations/amazon-redshift#connecting-rudderstack-to-redshift) section.
{% endhint %}

With the Redshift cluster now created and ready to use, the next section covers the necessary steps to configure Redshift as a destination in RudderStack.

## Connecting RudderStack to Redshift

The following sections describe creating a database user, setting up the network and security, as well as configuring Redshift in the RudderStack dashboard.

### Creating a Database User

{% hint style="info" %}
The  username and password we provided earlier while creating the Redshift cluster should be strictly used for administration purposes. We will create a different user to enable RudderStack access to Redshift. This also helps us keep the queries separate as well as maintain an audit log.
{% endhint %}

* Click on the **Editor** option visible in the left pane. You can run the queries to create a new user to access the Redshift cluster in the **Query editor**, as shown in the image below:

![](../.gitbook/assets/6%20%281%29.png)

* The queries to create a new user are:

```text
-- create a user named "rudder" RudderStack can use to access Redshift
CREATE USER rudder PASSWORD '<password goes here>'; 

-- granting schema creation permission to the "rudder" user on the database you chose earlier
GRANT CREATE ON DATABASE "<database name goes here>" TO "rudder";
```

* Log into the Redshift cluster with the newly created user credentials.

{% hint style="info" %}
The newly created user credentials should be used while configuring Redshift as a destination, in the RudderStack dashboard.
{% endhint %}

### Setting up Network & Security

The Redshift cluster needs to whitelist the RudderStack IPs to enable network access to it. This section explains how to add a security group and assign it to Redshift. 

{% hint style="info" %}
This procedure works for **EC2-VPC**. However, **EC2-Classic** works similarly.
{% endhint %}

**The IPs to be whitelisted are : `3.216.35.97`, `34.198.90.241` and `54.147.40.62`.**

* Go to EC2 from the services on AWS console,  as shown:

![](../.gitbook/assets/7%20%283%29.png)

* Go to **Security Groups** under **Network & Security** and click on **Create Security Group**.

![](../.gitbook/assets/8%20%281%29%20%281%29.png)

* Enter the details of the security group. The **Security group name** will be used to select the group later.

![](../.gitbook/assets/9%20%281%29.png)

* Add an **Inbound rule** with IPs listed above, and enter the Redshift port as `5439` in the **Port range** field, as shown:

![](../.gitbook/assets/10.png)

* Next, go to the Redshift cluster and select **Properties**, where you can modify the network and security rules of the cluster.

![](../.gitbook/assets/11.png)

* Edit the **Network and security** option, and choose the VPC security group you selected earlier.

![](../.gitbook/assets/12.png)

* Click on **Modify cluster** to finish the **Network and Security** setup.

![](../.gitbook/assets/13.png)

### Configuring Redshift as a destination in RudderStack

In order to enable RudderStack to send data to Redshift, you will first need to add Redshift as a destination to the source from which you are sending the events. 

To do so, please follow these steps:

* Choose a source to which you would like to add Redshift as a destination. You can also simply create the destination and connect it to a source later.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* Once you have set up the source, select **Redshift** from the list of destinations. Give your destination a name, and then click on **Next**. You will then see the following **Connection Credentials** screen:

![Connection Settings for adding Redshift as a destination in RudderStack](../.gitbook/assets/14.png)

* Enter the details of the cluster you have created in the [Setting Up a Redshift Cluster](https://docs.rudderstack.com/destinations/amazon-redshift#setting-up-a-redshift-cluster) section. You will also need to create a S3 bucket to which the data will be dumped. 
* You will also need to enter the AWS Access Key ID and AWS Secret Access Key. you can avoid this by setting up permission for your S3 bucket by following [this guide](https://docs.rudderstack.com/data-warehouse-integration-guides/amazon-redshift#s3-permissions).

{% hint style="info" %}
You can read more about creating a S3 bucket in [this article](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html).
{% endhint %}

That's it! You have successfully added Redshift as a destination in RudderStack. Once you start sending events from your source, RudderStack will dump them into the specified S3 bucket periodically.

## S3 Permissions

The alternative to providing AWS credentials for S3 access, is to set up permissions on your bucket as per the below steps

### RudderStack-hosted Data Plane

You need to edit your bucket policy to allow RudderStack to write to your bucket with the following JSON:

```jsx
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::422074288268:user/s3-copy"
            },
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::YOUR_BUCKET_NAME/*",
                "arn:aws:s3:::YOUR_BUCKET_NAME"
            ]
        }
    ]
}
```

### Self-hosted Data Plane

1. Create an IAM policy with the following JSON:

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "arn:aws:s3:::*"
        }
    ]
}
```

 2. Create an IAM user with programmatic access keys and attach the above created IAM policy. Copy the ARN of this user.

3. Edit your bucket policy to allow the data plane to write to your bucket with the following JSON. Make sure you edit the account id and user ARN with your AWS Account ID and the above created user ARN:

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::ACCOUNT_ID:user/USER_ARN"
            },
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::YOUR_BUCKET_NAME/*",
                "arn:aws:s3:::YOUR_BUCKET_NAME"
            ]
        }
    ]
}
```

4. Add the programmatic access credentials to the environment of your data plane.

```bash
RUDDER_AWS_S3_COPY_USER_ACCESS_KEY_ID=<above created user access key>
RUDDER_AWS_S3_COPY_USER_ACCESS_KEY=<above created user access key secret>
```

## Column Compression Encoding

Compression encoding specifies the type of compression that is applied to a column of data values as rows are added to a table. Redshift automatically assigns [compression encoding](https://docs.aws.amazon.com/redshift/latest/dg/c_Compression_encodings.html) if not specified. We explicitly set [runlength](https://docs.aws.amazon.com/redshift/latest/dg/c_Runlength_encoding.html) encoding for boolean columns.

## FAQs

### How are reserved words handled?

There are some limitations when it comes to using [reserved words](http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in a schema, table, or column names. If such words are used in event names, traits or properties, they will be prefixed with a `_`when RudderStack creates tables or columns for them in your schema. 

Besides, integers are not allowed at the start of the schema or table name. Hence, such schema, column or table names will be prefixed with a `_`.

For instance, `'25dollarpurchase`' will be changed to `'_25dollarpurchase`'.

## Contact Us

If you come across any issues while configuring Redshift with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

