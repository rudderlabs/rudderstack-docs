---
description: Step-by-step guide to set up Mixpanel as a destination in RudderStack
---

# Mixpanel

Mixpanel is an analytics platform that helps you to track user actions with your application. It also provides specific tools for targeted business communication and engagement with your customers. In-app A/B testing, user survey forms, and custom reports to measure customer retention are some of the other features offered by Mixpanel.

RudderStack supports Mixpanel as a destination to send your event data through our APIs.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/mp)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Mixpanel by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Mixpanel, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select Mixpanel.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Connection settings for Mixpanel](../.gitbook/assets/mixpanel%20%282%29.png)

We need your Mixpanel’s `Token`, please provide it into the Connection Settings in Rudder. Currently, we do not support sending events through the native SDK.

{% hint style="info" %}
Choose **EU** in Data Residency settings to send your event data to the Mixpanel EU server. 
{% endhint %}

## Page

We pass all the page properties that you provide through our `page` call along with the properties that we auto collect through our SDK to Mixpanel. The event name would be **Page** for `page` call and **Screen** for a `screen` call. A sample page call is:

```text
rudderanalytics.page();
```

## Identify

To identify a user to Mixpanel, you need to call the `identify` API. Mixpanel needs a unique identifier to identify a user. So, if you provide `userId` in your `identify` call, RudderStack will pass it as that `distinct_id` . Otherwise, it will send an `anonymousId` if `userId` is not present, and set the traits that you have provided as the properties corresponding to the distinct ID. 

After making this request, RudderStack makes a `$merge` of `anonymousId` and `userId` as a `distinct_id` and the new `userId` is mapped to `alias` so that both of these users are mapped to a single entity in the Mixpanel dashboard.

A sample `identify` call is as shown:

```text
rudderanalytics.identify("12345",
  {
    firstname: "Tintin",
    city: "Brussels",
    country: "Belgium",
    phone: "1234567890",
    email: "tintin@twentiethcentury.com"
  }
)
```

Mixpanel has some reserved properties:

* `$first_name`
* `$last_name`
* `$name`
* `$username`
* `$created`
* `$email`
* `$phone`
* `$avatar`

{% hint style="warning" %}
You may also create custom properties but you should not create properties that begin with a `$` sign.
{% endhint %}

## Track

To track users' actions, you can use our `track` API. You can call `track` with `eventname` and properties. A sample track call is:

```text
rudderanalytics.track("track event", {
    test_prop1: 50,
    test_prop2: "prop_value"
});
```

### Tracking Revenue

As Mixpanel also tracks revenue, if you send **revenue** as a key in `properties` in `track` call, then RudderStack will track it as a revenue event. 

Revenue tracking is done with `distinct_id` \(that is `userId` that you provide in your `identify` call, if `userId` is not present then it will be associated with `anonymousId`.\) 

A sample revenue `track` call is as shown:

```text
rudderanalytics.track("Purchase", {
    revenue: 30,
    currency: "USD"
});
```

## **Group**

{% hint style="info" %}
For more information ****on how `group` call works in Mixpanel, check out Mixpanel's [Group Analytics documentation](https://help.mixpanel.com/hc/en-us/articles/360025333632-Group-Analytics).
{% endhint %}

RudderStack allows you to record the custom traits associated with the group such as name of the organization, number of employees, etc., and send this information to Mixpanel.

A sample `group` call is as shown:

```text
{
  "userId": "user123",
  "traits": {
    "name": "Company",
    "industry": "Industry",
    "employees": 123
  },
  "context": {
    "traits": {
       "trait1": "new-val"  
    },
    "library": {
        "name": "http"
    }
  },
  "timestamp": "2020-01-21T00:21:34.208Z"
}
```

RudderStack sends `group` calls to Mixpanel only if one or more group keys are specified during the destination configuration in RudderStack, as shown:

![Mixpanel Group Key Settings](../.gitbook/assets/1%20%2812%29.png)

{% hint style="warning" %}
You should also have created the group key/s of the same name in Mixpanel's [project settings](https://help.mixpanel.com/hc/en-us/articles/360025333632-Group-Analytics#implementation). To administer group keys, simply navigate to your project settings and click on **Add Group Key** under the **Group Keys** section.
{% endhint %}

## **Sending Historic Events**

Mixpanel supports historical event data import. But the timestamp of the event should be within the **last 5 years**. Mixpanel rejects any data older than this duration. To send historic events, you need to provide the timestamp at the `timestamp` field in the message. RudderStack will then send the event with the same timestamp to Mixpanel.

## Mapping of RudderStack properties to Mixpanel properties

Below is the mapping of some of Mixpanel properties with the RudderStack properties that we send over their HTTP API.

{% hint style="info" %}
We map these fields only in `identify` requests.
{% endhint %}

| Mixpanel properties | RudderStack properties |
| :--- | :--- |
| `$created` | `traits.createdAt` |
| `$email` | `traits.email` |
| `$firstName` | `traits.firstName` |
| `$lastName` | `traits.lastName` |
| `$name` | `traits.name` |
| `$username` | `traits.username` |
| `$phone` | `traits.phone` |
| `$avator` | `traits.avator` |
| `ip` or `$ip` | `context.ip` |
| `campaign_id` | `context.campaign.name` |
| `$current_url` | `context.page.url` |
| `$os` | `context.os.name` |
| `$referrer` | `context.page.referrer` |
| `$carrier` | `context.network.carrier` |

## Contact Us

If you come across any issues while configuring Mixpanel with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

