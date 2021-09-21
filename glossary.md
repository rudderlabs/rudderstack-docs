---
description: General glossary of the RudderStack-related terminology.
---

# Glossary

This guide lists the definitions of the RudderStack-related terms that you are likely to encounter throughout our documentation and while using RudderStack.

{% hint style="success" %}
If you come across any term that is not listed here, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our ****[**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) ****channel.
{% endhint %}

## General

### Customer Data Platform

A **Customer Data Platform \(CDP\)** is a software/collection of tools that unifies and persists all the customer-specific records across multiple data sources in a centralized location accessible to other tools/platforms. A CDP lets you build a comprehensive customer profile and use the insights for a variety of use-cases.

### ELT \(Extract, Load, Transform\)

The **ELT \(Extract, Load, Transform\)** process can be defined as:

* **Extract:** Obtaining data from the source platform or application.
* **Load:** Replicating the data from the source into the target system, typically a data warehouse or a data lake.
* **Transformation:** Transforming the data in the desired format according to the business requirement/use-case.

{% hint style="success" %}
Check out our [**blog**](https://rudderstack.com/blog/rudderstack-cloud-extract-makes-cloud-to-warehouse-pipelines-easy) to read more about ELT and how RudderStack facilitates it via the [**Cloud Extract**](cloud-extract-sources/) feature.
{% endhint %}

### Reverse ETL

The **ETL \(Extract, Transform, Load\)** process can be defined as:

* **Extract**: Collecting/pulling data from a variety of sources.
* **Transform**: Refining and transforming the data as per the required data quality and business requirements.
* **Load**: Pushing the data into a consolidated data store \(for e.g., data warehouse\)

On the other hand, **Reverse ETL** is the process of routing the enriched data residing in your data warehouse to various downstream tools within your customer data stack. This includes various SaaS marketing, analytics, sales, and customer support tools.

{% hint style="success" %}
Check out our [**blog**](https://rudderstack.com/blog/reverse-etl-is-just-another-data-pipeline) to read more about Reverse ETL and how RudderStack facilitates it via the [**Warehouse Actions**](warehouse-actions/) feature.
{% endhint %}

## Core Product

### Control Plane

The Control Plane manages the configuration of your sources and destinations. The interface for the control plane is the [**RudderStack web app**](https://app.rudderstack.com/).

{% hint style="info" %}
For more information on the Data Plane and Control Plane, refer to RudderStack's [**architecture**](get-started/rudderstack-architecture.md).
{% endhint %}

### Data Plane

The Data Plane is RudderStack's core engine responsible for:

* Receiving and buffering the event data
* Transforming the events into the required destination format
* Relaying the events to the destination

{% hint style="success" %}
The Data Plane is intentionally separated from the Control Plane to give you complete ownership of your data. Depending on how RudderStack is deployed, you can set up your Control Plane and Data Plane via one of the following approaches:

* **RudderStack-hosted**: RudderStack hosts both Control Plane and Data Plane
* **Hybrid**: RudderStack hosts the Control Plane and the user hosts the Data Plane
* **Customer**: User hosts both the Control Plane and Data Plane via open-source.
{% endhint %}

### Control Plane Lite

RudderStack's **Control Plane** offers an intuitive UI to configure your event data sources and destinations.

If you want to self-host these configurations, you can use the open-source **Control Plane Lite** utility to set up your Control Plane. You can then manage the source and destination configurations locally by exporting to or importing them from a JSON file.

{% hint style="info" %}
For information on Control Plane Lite and how to use it, refer to the [**docs**](https://docs.rudderstack.com/get-started/config-generator).
{% endhint %}

## **Features**

### Event Stream

RudderStack's [**Event Stream**](stream-sources/) feature lets you collect your event data from all of your web and mobile apps and route it to a wide array of customer tools and data warehouses via RudderStack.

{% hint style="info" %}
For more information on the various Event Stream sources supported by RudderStack, check out the [**docs**](https://docs.rudderstack.com/stream-sources).
{% endhint %}

### Cloud Extract

[**Cloud Extract**](cloud-extract-sources/) is RudderStack's ETL feature that lets you collect your raw events and data from various third-party cloud platforms such as Google Analytics, Marketo, Facebook Ads, Stripe, etc. and send it to your data warehouse with a user-specified frequency.

{% hint style="info" %}
For more information on the various Cloud Extract sources and how to set them up in RudderStack, check out the [**docs**](https://docs.rudderstack.com/cloud-extract-sources).
{% endhint %}

### Warehouse Actions

[**Warehouse Actions**](warehouse-actions/) is RudderStack's Reverse-ETL feature. It allows you to leverage the already processed customer data residing in your data warehouse and route this enriched information to your desired destinations, including SaaS marketing, analytics, sales, and customer support tools.

{% hint style="info" %}
For more information on the various Warehouse Actions sources and how to set them up in RudderStack, check out the [**docs**](https://docs.rudderstack.com/warehouse-actions).
{% endhint %}

### Transformations

RudderStack's [**Transformations**](transformations/) feature lets you leverage your custom JavaScript functions that you can use to implement a variety of use-cases like: 

* * Filtering or sampling events
  * Implementing a static logic to enrich your events
  * Removing any sensitive PII information from your customer events, and a lot more.

{% hint style="info" %}
For more details on this feature and how to use it, check out our [**Transformations**](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) ****docs.
{% endhint %}

### Live Events

RudderStack's [**Live Events**](https://docs.rudderstack.com/get-started/live-events) is a debugger that shows the live events collected from your sources and sent to the connected destinations in real-time. With this feature, you can easily debug any errors in the failing events at a destination level and reduce your troubleshooting time and efforts.

Broadly speaking, this feature can be further classified into two categories:

* [**Source Live Events**](https://docs.rudderstack.com/get-started/live-events#source-live-events): This feature gives you real-time visibility into the source events collected by RudderStack. This way, you can confirm if your source is configured correctly and is collecting & sending data as expected. 
* [**Destination Live Events**](https://docs.rudderstack.com/get-started/live-events#destination-live-events): When routing events to a destination, sometimes events don't show up in your destination. This feature gives you real-time visibility into the destination's responses and helps you troubleshoot the problem.

{% hint style="info" %}
For more information on this feature, check out our [**docs**](https://docs.rudderstack.com/get-started/live-events).
{% endhint %}

### Data Governance

RudderStack's [**Data Governance**](data-governance/) feature gives you the ability to access all your events and their metadata programmatically and identify any inconsistencies in them. This includes vital information related to the event schema, event payload versions, data types, and more.

{% hint style="info" %}
Refer to the [**RudderStack Data Governance API**](data-governance/rudderstack-data-governance-api.md) reference for the detailed technical documentation.
{% endhint %}

### User Suppression

[**User Suppression**](rudderstack-api/user-suppression.md) is RudderStack's enterprise feature that lets you programmatically suppress user data identified by a user ID. With this feature, you can block all the user data for all the sources and destinations in RudderStack.

{% hint style="info" %}
Refer to the [**RudderStack User Suppression API**](rudderstack-api/user-suppression.md) reference for more information.
{% endhint %}

## Integrations

### Connection \(Pipeline\)

A connection is a one-to-one directional flow of events between a RudderStack source and a destination.

{% hint style="info" %}
For more information on sources and destinations in RudderStack, check our [**Connections**](connections/) guide.
{% endhint %}

You can set up different types of connections in RudderStack to send your events, based on the type of source:

* **Event Stream**:  One source to many destinations
* **Cloud Extract**: Multiple sources to one warehouse destination
* **Warehouse Action**: One warehouse source to one downstream destination \(mainly due to the mappings required when setting up the connection\).

{% hint style="info" %}
Setting up a connection involves [**adding a source and destination**](connections/adding-source-and-destination-rudderstack.md) in RudderStack.
{% endhint %}

### Connection Modes \(Cloud Mode & Device Mode\)

You can send the event data from your website/mobile app to your desired destination via RudderStack in two ways:

* **Cloud Mode**: In this mode, the RudderStack SDKs track and send the event data directly to the RudderStack server for processing. RudderStack processes this data and routes it to the desired destination. This mode is useful when you want to transform your source events in a destination-specific format. 
* **Device Mode**: In this mode, you can send the source events to your destination using the client-specific libraries on your website/mobile app. These libraries allow RudderStack to use the data you collect on your device to call the destination APIs without sending it to the RudderStack server first. This mode is useful when you want to send the events to a destination as-is, without any transformation.

These two modes are commonly referred to as **RudderStack Connection Modes**.

{% hint style="info" %}
For more information on these modes, check the [**RudderStack Connection Modes**](connections/rudderstack-connection-modes.md) guide.
{% endhint %}

### Source

A **source** is a platform or an application \(web, mobile, server-side, or a third-party cloud app\) from where RudderStack tracks and collects your event data. We highly recommend creating a source for every unique data source that you want to track.

{% hint style="info" %}
For more information on RudderStack sources, check out our [**documentation**](https://docs.rudderstack.com/connections#sources).
{% endhint %}

### Destination

A destination is a tool or application where you want to send the data via RudderStack.

{% hint style="success" %}
RudderStack currently supports over 80 destinations. These include [**data warehouses**](https://docs.rudderstack.com/data-warehouse-integrations), [**analytics**](https://docs.rudderstack.com/destinations/analytics) platforms, [**CRMs**](https://docs.rudderstack.com/destinations/crm), [**marketing**](https://docs.rudderstack.com/destinations/marketing) platforms, and more.

Check out the [**Destinations**](destinations/) guide for the complete list of supported destinations.
{% endhint %}

### Warehouse Destination

RudderStack supports sending events to your data warehouse. These are called the warehouse destinations.

Currently, RudderStack supports integration with all the leading data warehouses like Amazon Redshift, Azure Synapse, Google BigQuery, Snowflake, PostgreSQL, ClickHouse, and Microsoft SQL Server.

{% hint style="info" %}
For more information on how to use these warehouse destinations, check out our [**Data Warehouse Integration**](https://docs.rudderstack.com/data-warehouse-integrations) guides.
{% endhint %}

## Other Terminology

### API Specification

The **RudderStack API Spec** helps you plan your event data and provides various options for tracking your events across all the RudderStack SDKs and APIs. As RudderStack has a unified event semantic for different destination platforms, you can easily translate your event data to different downstream tools by following this spec.

{% hint style="info" %}
For more information on the RudderStack API Specification, refer to our [**docs**](rudderstack-api/api-specification/rudderstack-spec/).
{% endhint %}

### SDK

RudderStack offers client-side SDK support for web \([**JavaScript**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/)\), mobile \([**Android**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-android-sdk/), [**iOS**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk.md)\), as well as server-side apps \([**Java**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-java-sdk.md), [**Python**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-python-sdk.md), [**Node.js**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-node-sdk.md), [**PHP**](stream-sources/rudderstack-sdk-integration-guides/php.md), [**Go**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-go-sdk.md), and [**Ruby**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-ruby-sdk.md)\).

You can also track your event data from your Flutter app via the [**Flutter SDK**](stream-sources/rudderstack-sdk-integration-guides/rudderstack-flutter-sdk.md) or from your AMP page via the [**RudderStack AMP Component**](stream-sources/rudderstack-sdk-integration-guides/amp-analytics.md).

{% hint style="info" %}
Refer to the [**SDK documentation**](stream-sources/rudderstack-sdk-integration-guides/) for more details.
{% endhint %}

### Warehouse Schema

When sending your events to a data warehouse via RudderStack, you need not define a schema for the event data before sending it from your source. Instead, RudderStack automatically does that for you by following a predefined warehouse schema. This schema defines the different tables and columns created based on different events.

{% hint style="info" %}
Refer to the [**Warehouse Schema documentation**](https://docs.rudderstack.com/data-warehouse-integrations/warehouse-schemas) for more details.
{% endhint %}

### Workspace Token

The workspace token is a unique identifier of your RudderStack workspace. You can find it by logging in to the RudderStack web app.

### Write Key

The write key is a unique identifier for your source. It is used while sending events from that source to your specified destination via RudderStack.

![Workspace Token vs Source Write Key](.gitbook/assets/workspace-token-vs-write-key.png)

## Contact Us

For any questions on any of the topics covered in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

