---
description: Commonly asked questions about RudderStack's Transformations feature.
---

# FAQ

This document contains some of the commonly asked questions regarding RudderStack's Transformations feature.

## Why do I need to use RudderStack's Transformations feature?

RudderStack's Transformations feature lets you transform the events collected from a source into a destination-specific format. Some key benefits of this feature are:

* These transformations can be applied to your in-transit events, in real-time.
* You can implement specific use-cases depending on your business requirements using this feature. Some examples include PII masking, event filtering based on specific criteria, aggregating and enriching events, and so on.
* They're easier to build and manage, and can be reused as well.

{% hint style="success" %}
Read more about why your data pipeline needs to have an efficient event transformations capability in our [blog](https://rudderstack.com/blog/the-future-of-data-pipeline-tools-must-include-better-transformations-than-etl-ever-had).
{% endhint %}

## I used to write transformations like `function transform(events) {}`. Why am I not able to create new transformations this way?

We have changed the way transformations are written. RudderStack now supports writing functions that transform a single event instead of a batch of events. You can now define your transformation in the following manner:

```javascript
export function transformEvent(event, metadata) {
    return event;
}
```

## I want to write a transformation that can be applied to a small batch of events. Can I not do this anymore?

You can. Simply define your transformation in the following manner:

```javascript
export function transformBatch(events, metadata) {
    return events;
}
```

{% hint style="warning" %}
This can cause a loss of the event metadata that RudderStack uses internally to maintain event ordering for you.
{% endhint %}

## I cannot import libraries into my existing transformations. What do I do?

Previously created transformations shown as `Version: V0` don't support libraries. If you want to use libraries, please create a new transformation with `Version: V1` that support libraries. You can then reconnect your destinations with this new transformation that you have created.

## I want to update my existing version v0 transformation code to version v1. What do I do?

You cannot update transformation `Version: V0` directly to `Version: V1`. Please create a new transformation with updated code `Version: V1`. You can then reconnect your destinations with this new transformation that you have created and delete existing `Version: V0` transformation.

## Contact Us

For more information on transformations and libraries in RudderStack, feel free to [contact us](mailto:%20docs@rudderstack.com). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

