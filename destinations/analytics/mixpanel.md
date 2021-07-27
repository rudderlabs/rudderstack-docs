---
description: Step-by-step guide to set up Mixpanel as a destination in RudderStack.
---

# Mixpanel

[**Mixpanel**](https://mixpanel.com/) is an analytics platform that lets you track user actions with your application. It offers features like in-app A/B testing, user survey forms, and custom reports to measure customer retention. It also provides specific tools for targeted business communication and engagement with your customers.

RudderStack supports Mixpanel as a destination to which you can seamlessly send your event data.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/mp)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, verify if the source platform is supported by Mixpanel by referring to the table below:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| **Device mode**     | **Supported** | -             | -             |
| **Cloud mode**      | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the source supports sending events to Mixpanel, perform the steps below:

- From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source. From the list of destinations, select **Mixpanel**.

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

- Give a name to the destination and click on **Next**. You should then see the following screen:

![Connection settings for Mixpanel](../../.gitbook/assets/mixpanel-config.png)

### Configuration Settings

To configure Mixpanel as a destination, you need to provide your Mixpanel **API Token** in the **Connection Settings**.

{% hint style="info" %}
Choose **EU** in **Data Residency** settings to send your event data to the Mixpanel EU server.
{% endhint %}

## Page

We pass all the page properties that you provide through our `page` call along with the properties that we auto collect through our SDK to Mixpanel. The event name would be **Page** for `page` call and **Screen** for a `screen` call. A sample page call is:

```text
rudderanalytics.page();
```

### Page Web Device Mode

Rudderstack will send 1 event to Mixpanel per `page` call.

For Device mode, RudderStack offers three options for `page` calls:

* RudderStack transforms the `page` call to the corresponding Mixpanel events. **This is the default behavior**. RudderStack sends all the `page` and `screen` calls with a single name (for e.g., `Loaded a Page`) with the corresponding properties of the call in the body and the **Track All Pages with a Consolidated Event Name** option enabled by default. This allows you to leverage Mixpanel's reporting for page/screen analytics in the best possible way.
 
* RudderStack tracks the categorized pages to Mixpanel. If you enable the **Track Categorized Pages to Mixpanel** option, RudderStack sends a `Viewed [category page_name] Page` event.

* RudderStack tracks the named pages to Mixpanel. If you enable the **Track Named Pages to Mixpanel** option, RudderStack will send a `Viewed [page_name] Page` event.


{% hint style="info" %}
If both **Track Categorized Pages to Mixpanel** and **Track Named Pages to Mixpanel** options are enabled, RudderStack sets a higher precedence for the **Track Categorized Pages to Mixpanel**. For instance, if you pass both the page category and name, (e.g. `rudderanalytics.page('category', 'name')`), RudderStack will send a `Viewed category name Page` event to Mixpanel.
{% endhint %}

{% hint style="info" %}
RudderStack expects atleast one of the three options listed above to be enabled for sending the `page` events to Mixpanel using device mode.
{% endhint %}

## Identify

To identify a user to Mixpanel, you need to call the `identify` method. Mixpanel needs a unique identifier to identify a user. If you provide `userId` in your `identify` call, RudderStack will pass it to Mixpanel as `distinct_id` . If `userId` is not present, RudderStack sends an `anonymousId` and sets the traits that you have provided as the properties corresponding to the `distinct_id`.

After making this request, RudderStack merges the `anonymousId` and `userId` as a `distinct_id` and the new `userId` is mapped to `alias`, so that both of these users are mapped to a single entity in the Mixpanel dashboard.

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

- `$first_name`
- `$last_name`
- `$name`
- `$username`
- `$created`
- `$email`
- `$phone`
- `$avatar`

{% hint style="warning" %}
You can create custom properties. However, note that you should not create properties that begin with a `$` sign.
{% endhint %}

### Mixpanel People

Rudderstack does not send data to Mixpanel People by default, as it usually requires upgrading the Mixpanel account. You can enable the **Use Mixpanel People** option in the Rudderstack dashboard if you want to use this feature.

We recommend identifying the user traits without the `userId` if you wish to add the people properties in Mixpanel before knowing the `userId`. To do this, refer to the following snippet:

```text
rudderanalytics.identify({
  email: 'hello@example.com',
  name: 'Ian Taylor'
})
```

{% hint style="info" %}
Currently, RudderStack supports this feature only for the native web device mode.
{% endhint %}

## Track

To track user events, use the `track` method with the event name and the associated properties. A sample `track` call is as shown:

```text
rudderanalytics.track("track event", {
    test_prop1: 50,
    test_prop2: "prop_value"
});
```

### Tracking Revenue

Mixpanel allows you to track revenue. If you send `revenue` a property in your `track` call, RudderStack tracks it as a revenue event.

Revenue tracking is done with a `distinct_id` \(`userId` that you provide in your `identify` call; if `userId` is not present then it will be associated with an `anonymousId`.\)

A sample revenue `track` call is as shown:

```text
rudderanalytics.track("Purchase", {
    revenue: 30,
    currency: "USD"
});
```

### Track Charge

If **Use Mixpanel People** is enabled in your RudderStack dashboard and you include `revenue` as an event property, RudderStack will track a charge for the current user.

## Alias

The `alias` call lets you associate multiple identities of a known user. A sample `alias` call is as shown:

```text
analytics.alias('userId', `previousId`);
```

## Group

The `group` call allows you to link an identified user with a group, such as a company, organization, or an account. It also lets you record any custom traits associated with that group like the name of the company, the number of employees, etc.

{% hint style="info" %}
For more information on how the `group` call works in Mixpanel, check out Mixpanel's [**Group Analytics documentation**](https://help.mixpanel.com/hc/en-us/articles/360025333632-Group-Analytics).
{% endhint %}

RudderStack allows you to record the custom traits associated with a user group and send this information to Mixpanel.

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

RudderStack sends the `group` calls to Mixpanel only if one or more group keys are specified during the destination configuration in RudderStack, as shown:

![Mixpanel Group Key Settings](../../.gitbook/assets/1%20%2812%29.png)

{% hint style="warning" %}
You should also have created the group key/s of the same name in Mixpanel's [**project settings**](https://help.mixpanel.com/hc/en-us/articles/360025333632-Group-Analytics#implementation). To administer the group keys, navigate to your project settings and click on **Add Group Key** under the **Group Keys** section.
{% endhint %}

## **Sending Historic Events**

Mixpanel supports historical event data import. However, note that the timestamp of the event should be within the **last 5 years**. Mixpanel rejects any data older than this duration. To send historic events, provide the timestamp in the `timestamp` field of the message. RudderStack will then send the event with the same timestamp to Mixpanel.

## Mapping RudderStack Properties to Mixpanel Properties

RudderStack maps the following properties to the Mixpanel properties before sending them over the HTTP API.

{% hint style="info" %}
RudderStack maps these fields only in the `identify` requests.
{% endhint %}

| Mixpanel Property Name | RudderStack Property Name    |
| :----------------------| :--------------------------- |
| `$created`          | `traits.createdAt`        |
| `$email`            | `traits.email`            |
| `$firstName`        | `traits.firstName`        |
| `$lastName`         | `traits.lastName`         |
| `$name`             | `traits.name`             |
| `$username`         | `traits.username`         |
| `$phone`            | `traits.phone`            |
| `$avator`           | `traits.avator`           |
| `ip` or `$ip`       | `context.ip`              |
| `campaign_id`       | `context.campaign.name`   |
| `$current_url`      | `context.page.url`        |
| `$os`               | `context.os.name`         |
| `$referrer`         | `context.page.referrer`   |
| `$carrier`          | `context.network.carrier` |


## Explicitly Setting People Properties and Super Properties

You can set all of your traits as both **Super Properties** and **People Properties** (If you have **Use Mixpanel People** option enabled) by enabling the **Automatically set all Traits as Super Properties and People Properties** option in the Rudderstack dashboard.

You can choose to filter your reports by both People Properties and Super Properties. This gives you better control over what traits you can set as a Super Property or People Property. To do this, disable the **Automatically set all Traits as Super Properties and People Properties** option in the dashboard and add the traits that you want to send to Mixpanel as Super Properties or People Properties in the specified fields, as shown below. 

{% hint style="info" %}
RudderStack will send all the Mixpanel's special traits as People Properties. Hence, you only need to add the properties that are not in this list.
{% endhint %}

![Mixpanel Super Properties and People Properties](../../.gitbook/assets/mixpanle-super-people.png)

{% hint style="warning" %}
This feature is available in the native web Device mode only.
{% endhint %}

### Mixpanel Special Traits

The following table lists all the properties that RudderStack sends to Mixpanel as special traits:

| Mixpanel Properties | RudderStack Properties |
| :------------------ | :------------------------ |
|`created`| `$created`|
|`email`| `$email`|
|`firstName`| `$first_name`|
|`lastName`|`$last_name`|
|`lastSeen`| `$last_seen`|
|`name`| `$name`|
|`username`| `$username`|
|`phone`| `$phone`|

## Incrementing Events

If you're tracking known users, you dont need to add any extra code to increment event counts for Mixpanel People. Just add the events you want to increment and RudderStack will take care of the rest.

{% hint style="warning" %}
This feature is available in the native web Device mode only.
{% endhint %}

For each event name added, RudderStack automatically calls Mixpanel and sets a user trait as `Last + <event_name>`. For example, if you add `Logged In` to the list of increment events, RudderStack will increment a user trait called `Logged In` and set a trait called `Last Logged In` with the current date and time.

If you’d like to add an increment a specific page or screen view, make sure you have enabled the **Track Named Pages** setting in the dashboard and use the dynamically generated event name under **Events to Increment in People**. For example, `rudderanalytics.page('Signup')` would translate to `Viewed Signup Page`.

{% hint style="warning" %}
RudderStack will only send one event per `page` call.
{% endhint %}

{% hint style="info" %}
Increment works for known users only. So, if your `track` call is being made on the server-side, you will need to pass a `userId`. If your `track` call is being made on the client-side, you will need to identify your user first.
{% endhint %}


### Incrementing Properties

To increment properties, you can specify which properties you want RudderStack to increment using the **Properties to Increment in People** field. RudderStack will call Mixpanel’s increment when you attach a number to the specified property. For example, `'items purchased': 5`.

![Mixpanel Event Increment ](../../.gitbook/assets/mixpanle-increment.png)

{% hint style="warning" %}
This feature is available in the native web Device mode only.
{% endhint %}


## Contact Us

If you come across any issues while configuring Mixpanel with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
