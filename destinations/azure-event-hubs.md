---
description: Step-by-step guide to set up Azure Event Hubs as a destination in RudderStack
---

# Azure Event Hubs

[Azure Event Hubs](https://docs.microsoft.com/en-us/azure/event-hubs/) is a data streaming platform and an event ingestion service. It provides a Kafka endpoint which can be used by your existing Kafka-based applications as an alternative to running your own Kafka clusters.

RudderStack allows you to seamlessly configure Azure Event Hubs as a destination to which you can send your event data seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/azure_event_hub)**.**
{% endhint %}

## Configuring Azure Event Hubs in RudderStack

In order to enable sending data to Azure Event Hubs, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from RudderStack will start to flow to Azure Event Hubs. 

Before configuring your source and destination on [RudderStack](https://app.rudderstack.com/), please check whether the platform you are working on is supported by Azure Event Hubs, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device Mode** | - | - | - |
| **Cloud Mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
 To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Azure Event Hubs, perform the steps as mentioned below:

* Choose a source to which you would like to add Azure Event Hubs as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Select the destination as **Azure Event Hubs**. Give your destination a name, and then click on **Next**.
* In the **Connection Settings**, ****fill the required fields with the relevant information and click **Next.**

![Azure Event Hubs Connection Settings](../.gitbook/assets/image%20%28100%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29.png)

The required fields are as follows:

* **Bootstrap server**: The bootstrap server information goes here. This is in the format`hostname of your event hub namespace`:`port`
* **Topic Name**: The topic name, or the name of the Event Hub.
* **Event Hubs Connection String**: Your event hubs' primary connection string

## Partition Key

We use `userId` as the partition key of a given message. 

{% hint style="info" %}
If `userId` is not present in the payload, then `anonymousId` is used.
{% endhint %}

If you have a multi-partitioned topic, then the records of the same `userId` \(or `anonymousId` in absence of `userId`\) will always go to the same partition.

## FAQs

#### **What is my Bootstrap server address?**

The Bootstrap server address is in the following format:

`hostname of Event Hub namespace`: `port`

For example:  `NAMESPACENAME.servicebus.windows.net:9093` 

Here `NAMESPACENAME` is your event hubs namespace, while `9093` is the port number.

#### **Where can I get the Topic name?**

The Topic name is the name of the **Event Hub** that you have created in your [Azure portal](https://portal.azure.com).

#### **Where can I get the Event Hubs connection string?**

Event hubs connection string is the Primary Connection string of your shared access policy. For more information, please refer to Microsoft's [How to get Event hubs connection string](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string) guide. 

#### **Why am I getting the "The client is not authorized to access this topic" error?**

Please check whether you are using the proper Event Hubs connection string for the policy that you have created. 

You need to create a policy to write to the Event Hub with a `Send` permission, and put the corresponding primary connection string in the destination settings, as described in the Configuring Azure Event Hubs in RudderStack section of this guide.

## Contact Us

If you come across any issues while configuring or using Azure Event Hubs with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

