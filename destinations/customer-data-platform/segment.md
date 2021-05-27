---
description: Step-by-step guide to send event data from RudderStack to Segment.
---

# Segment

[Segment](http://segment.com/) is a leading Customer Data Platform \(CDP\). It lets you track and collect your customer events from a variety of digital touchpoints and send them to the marketing and analytics platforms of your choice.

With RudderStack, you can send your customer events to Segment in real-time.

## Getting Started <a id="getting-started"></a>

To enable sending data to Segment, you will first need to add it as a destination in the RudderStack dashboard. Once the destination is configured and enabled, events from RudderStack will start flowing to Segment.

Before configuring Segment in RudderStack, verify if the source platform supports sending events to RudderStack by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device Mode** | **-** | **-** | **-** |
| **Cloud Mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Then, perform the steps below:

* Configure the data source in RudderStack.

{% hint style="info" %}
Follow the guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more details.
{% endhint %}

* From the list of destinations, select **Segment**. 

![](../../.gitbook/assets/2%20%2827%29.png)

* Then, assign a name to the destination and click on **Next**.

![](../../.gitbook/assets/3%20%2824%29.png)

* Select the data source and click on **Next**.

![](../../.gitbook/assets/4%20%2823%29.png)

* Enter the Segment write key to configure the destination, as shown:

![](../../.gitbook/assets/5%20%2822%29.png)

* To transform your event data before sending it to this destination, click on **Create New Transformation**. Otherwise, click on **Next**.

![](../../.gitbook/assets/6%20%2820%29.png)

* Your Segment destination is now configured and enabled.

![](../../.gitbook/assets/7%20%2815%29.png)

## Identify

The `identify` call lets you associate a visiting user to their actions as well as record their traits.

{% hint style="info" %}
As a best practice, please make sure that the `identify`call is made at the start of every session or page load for logged-in users, if possible. This will ensure all the latest traits are captured.
{% endhint %}

A sample `identify` call is as shown:

```javascript
rudderanalytics.identify("userid", {
  name: "Name Surname",
  email: "name@website.com",
  phone: "phone",
  birthday: "birthday",
  gender: "M",
  avatar: "link to image",
  title: "Owner",
});
```

{% hint style="info" %}
For more information on the `identify` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Track

The `track` call allows you to record the customer events, i.e. the actions that they perform, along with their associated properties.

A sample `track` call is as shown:

```javascript
rudderanalytics.track("Event Name", {
  Plan: "plan value",
});
```

{% hint style="info" %}
For more information on the `track` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Page

The `page` call lets you record your website's page views, with any additional relevant information about the viewed page.

A sample `page` call is as shown:

```javascript
rudderanalytics.page("Cart", "Cart Viewed", {
  path: "/cart",
  referrer: "test.com",
  search: "term",
  title: "test_item",
  url: "http://test.in",
});
```

{% hint style="info" %}
For more information on the `page` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Group

The `group` call lets you associate a particular identified user with a group, such as a company, organization, or an account. It also lets you record the custom traits associated with that group, such as the name of the group, number of employees, etc.

A sample `group` call is as shown:

```text
rudderanalytics.group(
    "sample-group-id",
    { 
      name: "Example Company",
      employees: 1000,
      industry: "Software"
    },
  );
```

{% hint style="info" %}
For more information on the `group` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Alias

The alias call allows you to associate one user identity with another. This is quite useful in case of some destinations such as Mixpanel \(associating `anonymousId` with an identified user on signup\)  or Kissmetrics \(when the user switches IDs\).

A sample `alias` call is as shown:

```javascript
rudderanalytics.alias("to", "from", options, callback);
```

The above `alias` call has the following parameters:

| **Parameter** | **Presence** | **Description** |
| :--- | :--- | :--- |
| **`to`** | Required | Denotes the new identifier |
| **`from`** | Optional | Denotes the old identifier which will be an alias for the `to` parameter.  If not provided, the SDK will populate this as the currently identified `userId`, or `anonymousId` in case of anonymous users. |
| **`options`** | Optional | This dictionary provides additional context to the event payload. |
| **`callback`** | Optional | This function gets executed after successful execution of the **`alias()`** method. |

{% hint style="info" %}
For more information on the `alias` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## FAQs

### How do I get the Segment Write Key?

To get the Segment Write Key, you can create a HTTP source in your Segment dashboard. 

Once you create the source, you can copy the **Write Key** for that source and use it in RudderStack for sending the data.

## Contact Us

If you come across any issues while configuring or using Segment with RudderStack, feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

