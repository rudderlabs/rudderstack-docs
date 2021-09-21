---
description: Description of RudderStack's data governance feature.
---

# Data Governance

Modern companies generate real-time events across their websites and applications. These events are mainly used by the product and marketing teams to better understand their customers' product interactions. They are captured in a specific format which generally includes the event name, properties, and the associated metadata.

To effectively analyze customer behavior or drive high-value marketing campaigns and personalizations, teams rely on the consistency of the event data formats. Any inconsistency in the events can lower the quality of analytics significantly and requires a lot of time and engineering effort to clean up.

In reality, however, as multiple stakeholders define and implement the event specifications differently, there are always some inconsistencies introduced in the event data. Some of the reasons for these inconsistencies include:

* **Missing fields**
* **Capitalization / Casing errors**: For example, one event sets the product name to lower case, while another sets it to upper case.
* **Unit errors**: For example, one event tracks the revenue in 100 dollar units, while another tracks it in dollars.

## Data Governance with RudderStack

RudderStack's [**Data Governance API**](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-data-governance-api) gives you the ability to access all your events and their metadata programmatically. This includes vital information related to the event schema, event payload versions, data types, and more.

{% hint style="info" %}
**Refer to the [RudderStack Data Governance API](rudderstack-data-governance-api.md) reference for the detailed technical documentation.**
{% endhint %}

By leveraging the Data Governance API, the data engineering team can narrow down the specific nature and source of any event data inconsistencies. With these insights, they update the instrumentation or leverage [**RudderStack Transformations**](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) to clean the incoming events.

Here's a video that explains the features of the Data Governance API in detail:

{% embed url="https://www.youtube.com/watch?v=fs3Nkzm-NqY&t=18s&ab\_channel=RudderStack" %}

## How to Use the Data Governance API

At a high level, you can take the following steps to investigate and troubleshoot any event data inconsistencies:

1. Get all the event models into RudderStack using [`schemas/event-models`](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-data-governance-api#schemas-event-models).
2. Identify the source of the event models.
3. Count the event models to determine the number for each event type.
4. Identify the differences in the schema versions for a single event model using [`schemas/event-versions`](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-data-governance-api#schemas-event-versions).

{% hint style="success" %}
The RudderStack Data Governance API also lets you gather other useful diagnostics related to both the events as well as the versions of individual event schemas. You can leverage this information to find and fix issues in your events.
{% endhint %}

Once you have identified the inconsistencies, you can implement specific processes and set alerts for your data governance workflows. For instance, you can create alerts for notifying any missing keys in your events, or use RudderStack transformations to validate your event schemas and transform the faulty incoming event payloads.

{% hint style="info" %}
A detailed, step-by-step explanation of using the RudderStack Data Governance API can be found in our [technical blog](https://rudderstack.com/blog/rudderstacks-data-governance-api).
{% endhint %}

## Contact Us

For more information on the RudderStack Data Governance API, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.

