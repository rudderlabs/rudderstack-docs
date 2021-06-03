---
description: >-
  An easy-to-follow guide on filtering selective destinations while sending event data in RudderStack
---

# How to Filter Selective Destinations to Send Event Data

RudderStack allows you to send your event data only to a few intended destinations by filtering out the rest. For the JavaScript SDK, you can do so by passing an integrations object in the **options** parameter of the event method. For most of the other SDK's you can use the **integrations** object parameter for the associated event. The filter destination feature is currently only supported for cloud mode integrations.

## How it works

The following is an example of how to send a sample message **only** to `Google Analytics` and `Intercom` in the JavaScript SDK:

```javascript
rudderanalytics.identify(
  "samplename",
  {
    email: "name@email.org",
    name: "Samplename",
  },
  {
    integrations: {
      All: false,
      "Google Analytics": true,
      "Intercom": true
    }
  }
);
```
{% hint style="success" %}
**NOTE**: Unless explicitly defined otherwise, `'All'` is always set to `true`. This means that sending events to all destinations is enabled by default.
{% endhint %}

{% hint style="info" %}
The line **`All: false`** instructs RudderStack **not** to send the event data to any destinations **by default,** unless they are explicitly listed as **`true`** in the subsequent lines.
{% endhint %}

You can also disable sending event data to certain destinations. In this case, the event data is sent to **all the other destinations** except the specified ones. An example of this is as shown from the JavaScript SDK:

```javascript
rudderanalytics.identify(
  "samplename",
  {
    email: "name@email.org",
    name: "Samplename",
  },
  {
    integrations: {
      "Google Analytics": false,
      "Intercom": false,
    },
  }
);
```

{% hint style="info" %}
As seen in the above code snippet, RudderStack will send the event data to all the destinations except `Google Analytics` and `Intercom`.
{% endhint %}

## Examples

The following are examples for the same `track()` call from a variety of SDK's. 

{% hint style="info" %}
Please Note: Some of the SDK's follow their own convention that is different than the examples below. The notable SDK's with different convention are IOS and Android. Please read the respective `SDK Integration Guide` section for your given SDK to find the correct format to filter selective destinations.
{% endhint %}

### JavaScript SDK

```javascript
rudderanalytics.track(
  "samplename",
  "sampleEventName",
  {
    email: "name@email.org",
    name: "Samplename",
  },
  {
    integrations: {
      All: false,
      "Amazon S3": true,
      "Heap.io": false
    },
  }
);
```

### Python SDK

```python
rudder_analytics.track(
    'sampleName', 
    'sampleEventName', 
    {
      'email': 'name@email.org',
      'name': 'Samplename'
    },
    integrations={
      'All': False,
      'Amazon S3': True,
      'Heap.io': False
    }
)
```

{% hint style="info" %}
In these examples above, the track events will only be sent to `Amazon S3` and `Heap.io` destinations.
{% endhint %}

## Destination Naming Convention

By default, for the destination name please use the `displayed destination name` on the [RudderStack directory in your control plane](https://app.rudderstack.com/directory).

{% hint style="info" %}
These destination names are case sensitive.
{% endhint %}

## Contact Us

For more information on any of the sections in this guide, feel free to [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you!
