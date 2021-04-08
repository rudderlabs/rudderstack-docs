---
description: >-
  A quick tour of RudderStack’s architecture, with a special focus on the data
  plane
---

# RudderStack Architecture

RudderStack is an independent, stand-alone system with dependency only on the database \(**PostgreSQL**\). 

{% hint style="success" %}
**Start building a better, warehouse-first CDP that delivers complete, unified data to every part of your marketing and analytics stack.** [**Sign up**](https://app.rudderlabs.com/signup?type=freetrial) **for** [**RudderStack Cloud Free**](https://app.rudderlabs.com/signup?type=freetrial) **today.** 
{% endhint %}

RudderStack's architecture consists of 2 major components, namely the **Control Plane**, and **Data Plane**. A broad, high-level view of RudderStack’s architecture is as shown in the diagram below:

![RudderStack Architecture](../.gitbook/assets/rudderstack-architecture.png)

Let us look at each of the above major components in a bit more detail: ****

* **RudderStack Control Plane**: The control plane mainly consists of the UI to configure the source and destination of the event data. The control plane is further divided into 2 major components:
  * **Web App**: This is the front-end application that allows you to set up your data routing with RudderStack.
  * **Configuration Backend**: The backend gives you the options to configure your event data sources, destinations, and connections.
* **RudderStack Data Plane**: The data plane is the core engine that is responsible for:
  * Receiving and buffering the event data
  * Transforming them into the required destination format, and finally
  * Relaying it to the destination

{% hint style="info" %}
As mentioned earlier, the data plane uses PostgreSQL as a streaming database for the event data. We will dive more into the data plane later in this post.
{% endhint %}

* **RudderStack Transformation**: The transformation module is responsible for converting the received event data into a suitable destination-specific format. All the transformation codes are written in JavaScript. RudderStack also supports user-specific transformations for real-time operations, such as aggregation and sampling.

## **RudderStack’s Data Plane Architecture**

RudderStack’s data plane is responsible for receiving, transforming, and routing the transformed event data to its destination in the required format. To do so, it receives the event data from sources that include web apps or Android/iOS devices. RudderStack’s backend is written in Go.

A basic, simplified version of the RudderStack Backend architecture is demonstrated in the figure below:

![RudderStack Data Plane Architecture](https://lh4.googleusercontent.com/cI7FcmudLVOedkLXA2AwV0tWVI3fZtA66v3Mt8WYGEZnhC8_D-pW53twoh-BbfEBHGw-dvg5tCllbE0xwvGj1b1uPN3KpZU2PAWi0IAS36XzrrzYTm2jcSmjegti_Z57Ca9hZRn4)

Let us now dive deep into the components of the RudderStack Backend**:**

### **Gateway**

The Gateway is primarily responsible for receiving and forwarding the event data for transformation.

It accepts the event requests and sends an acknowledgement back to the source depending on the acceptance \(an HTTP 200 response\) or rejection of the event data. The event data is rejected in case of the following scenarios:

* Invalid JSON
* Invalid write key
* Improper Request size

The source event can come from an iOS/Android device or a web application. In case of a successful receipt, the events are then forwarded for transformation.

The gateway also temporarily stores all the received event data into PostgreSQL before sending the acknowledgment of a successful receipt. Once the event is transformed and sent to the destination, the stored data in the database is then deleted by the Processor.

### **Processor**

The processor fetches the data from the Gateway and forwards it to the Transformation module. Once the event data is transformed, the Processor forwards it to the Router, so that it can be sent to the required destination.

### **Router**

The Router sends the processed and transformed event data received from the Processor to the desired destinations, such as Google Analytics, Amplitude, and more. There is also a provision of sending data dumps to Amazon S3, or warehouses such as Amazon Redshift. 

### **Transformation Module**

The Transformation Module takes the event data from the Processor and converts the event data in the required destination format. It then sends this transformed event data back to the Processor, so that it can be forwarded to the Router and eventually the desired destination.

As discussed previously, RudderStack also supports user-specific transformation where event data can be transformed using specific functions such as modifying the events, performing aggregation of the events, sampling, etc.

## **The Backend Workflow**

The following flow explains the working of the backend:

1. Client SDK sends events to the Gateway.
2. The Gateway then: 
   1. Stores the event data to the database \(PostgreSQL\).
   2. Sends an HTTP 200 status acknowledging receipt of the data.
3. The Processor picks the data from the Gateway and forwards the event data to the Transformation module.
4. The Transformation module sends the transformed data back to the Processor.
5. Once the event is transformed and sent to the Router, it is deleted from the Gateway store.
6. The Router then: 
   1. Forwards the transformed event data to the desired destinations.
   2. Stores the information in a separate table in the database.
7. Once the transformed data reaches the destination, the event data from the router database is deleted by the Router.

## **Summary**

We saw how the RudderStack data plane plays a crucial role in receiving, storing, and transforming the source events and delivering them reliably to the destination. The backend engine can be customized with a variety of configuration options. Some of these options include backing up events to S3, rejecting malicious requests by defining the maximum size of the event, and more. Although the default configuration works just fine for most of the companies, RudderStack gives you the flexibility to customize it, if required.

## Contact Us

To know more about RudderStack's architecture or the platform in general, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, or even see RudderStack [in action](https://rudderstack.com/request-a-demo/).

