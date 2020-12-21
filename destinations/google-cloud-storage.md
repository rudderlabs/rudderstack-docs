---
description: >-
  Step-by-step guide to set up Google Cloud Storage as a destination in
  RudderStack
---

# Google Cloud Storage

[Google Cloud Storage](https://cloud.google.com/storage) is a popular web service for storing and accessing your data in the Google Cloud Platform infrastructure. It offers state-of-the-art performance and scalability, along with ensuring the security and privacy of your data.

RudderStack allows you to add Google Cloud Storage as a destination to which you can send your event data from any source reliably.

## Setting up Google Cloud Storage

Follow these steps to set up Google Cloud Storage before adding it as a destination in RudderStack:

* Log in to the your Google Cloud platform [console](https://console.cloud.google.com/).
* Create a new bucket. You can also use an already existing bucket.
* Create a new service account under **IAM & Admin** - **Service Accounts**
* Give `Storage Object Admin` access to the newly created service account.
* Create a key for the service account. Choose key type as JSON. This will cause a JSON key file to be downloaded.

## **Configuring** Google Cloud Storage **in RudderStack**

In order to enable sending data to Google Cloud Storage, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from RudderStack will start to flow to Google Cloud Storage.

To do so, please follow these steps:

* Choose a source to which you would like to add Google Cloud Storage as a destination. You can also create the destination first, and connect it to a source later.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Once you have set up the source, select **Google Cloud Storage** from the list of destinations. **\*\*Give your destination a name, and then click on** Next**. You will then see the following** Connection Settings\*\* screen:

![Connection settings for Google Cloud Storage in RudderStack](../.gitbook/assets/image%20%2814%29%20%281%29.png)

* Enter your **Google Cloud Storage Bucket Name**, as well as the content of the JSON key file \(refer to the [Setting up Google Cloud Storage](https://docs.rudderstack.com/destinations-guides/google-cloud-storage#setting-up-google-cloud-storage) section above\) in the **Credentials** field.
* If you need any transformation choose one from the list. Else, click **Next**.

That's it! You have successfully added Google Cloud Storage as a destination in RudderStack. Once you start sending events from your source, RudderStack dumps them into the Cloud Storage bucket automatically.

## Contact Us

If you come across any issues while configuring Google Cloud Storage with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

