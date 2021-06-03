---
description: Step-by-step guide to send your event data from RudderStack to Kubit.
---

# Kubit

[Kubit](https://www.kubit.ai/) is a self-service product analytics platform with no-code integration that facilitates efficient data discovery. With Kubit, you can better understand your users' behavior and use the insights to drive customer retention and your product growth.

{% hint style="success" %}
Kubit can also consume data from your cloud data warehouse directly, so you don't have to configure it as a destination in RudderStack separately.

For more information, check out their [docs](https://www.kubit.ai/doc).
{% endhint %}

![](../../.gitbook/assets/image%20%28104%29.png)

{% hint style="info" %}
Follow our [guide](../../connections/adding-source-and-destination-rudderstack.md) to add a source and a warehouse destination in RudderStack.
{% endhint %}

## Supported Calls

Kubit currently supports only `identify` and `track` calls.

### Identify

The `identify` call lets you capture the actions of a visiting user. It also lets you record any traits associated with them such as their name, email address, etc.

{% hint style="info" %}
For more information on the `identify` call, refer to the [HTTP API Specification](../../rudderstack-api-spec/http-api-specification.md) guide.
{% endhint %}

A sample `identify` call is as shown:

```javascript
rudderanalytics.identify("userId", {
  name: "Name",
  email: "name@xyz.com"
  });
```

### Track

The `track` call allows you to capture any user action along with the properties associated with that action.

{% hint style="info" %}
For more information on the `track` call, refer to the [HTTP API Specification](../../rudderstack-api-spec/http-api-specification.md) guide.
{% endhint %}

A sample `track` call is as shown:

```javascript
rudderanalytics.track("Order Completed", {
  orderId: "1234567",
  price: "567",
  currency: "USD"
});
```

## Contact Us

If you come across any issues while using the Kubit integration, please feel free to [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

