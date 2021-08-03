---
description: >-
  Step-by-step guide to add a custom source in RudderStack.
---

# Custom Sources

RudderStack lets you add any custom sources that have the provision of a webhook. You can then use this custom source to send events from that source to your preferred destination.

When you create a custom source in the RudderStack dashboard, you will get a write key associated with that source. Use this write key in a webhook endpoint, e.g., `http://<DATA_PLANE_URL>/v1/webhook?writeKey=<SOURCE_WRITE_KEY>`.

You can then add this webhook URL to any source. RudderStack will receive the data according to the settings made in the source and route it to your specified destination. You can also add [**User Transformations**](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) to manipulate the event data as your requirement.

{% hint style="success" %}
You can also add [**User Transformations**](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) to manipulate the event data as your requirement.
{% endhint %}

## Adding a Custom Source in RudderStack

This section details the steps involved in setting up a custom source in RudderStack. As an example, we will configure Mailchimp as a custom source.

* Create a custom source in your RudderStack dashboard as shown:

![](https://user-images.githubusercontent.com/59817155/127985229-cbafc185-f7ad-433c-a958-da508e5b962e.png)


* Then, add a destination in RudderStack. In this example, we have added [**Google Analytics**](https://docs.rudderstack.com/destinations/analytics/google-analytics-ga) as a destination, as shown:

![](https://user-images.githubusercontent.com/59817155/127983406-76fcf748-bd1b-4f18-9840-b19a71aaf601.png)


{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more details.
{% endhint %}

* Next, add the webhook URL to your desired source platform. Remember that you can configure custom sources only for the source platforms that support webhooks. The following image shows how to add the URL in Mailchimp:

![](https://user-images.githubusercontent.com/59817155/127986131-3740dbfe-7d55-4328-abe1-63fb8ac70de2.png)

{% hint style="info" %}
Remember to add and test your webhook URL.
{% endhint %}

* When the users perform any of the actions associated with the source, the source platform will send the generated events to the webhook URL. 

In this example, Mailchimp sends the updates under **What type of updates should we send?** (seen in the image above) as user events to the webhook URL with the content type `application/x-www-form-urlencoded`.

* RudderStack then takes the data, creates the payload and sends it to Google Analytics.

{% hint style="info" %}
For more information on how RudderStack creates the payload, refer to the next section.
{% endhint %}

{% hint style="success" %}
You can also add User Transformations to transform the payload in a specific format before sending it to the destination. Refer to the next section for more details.
{% endhint %}

## Payload Creation and Transformation

This section details how RudderStack receives the data from the custom source platform and creates the resulting payload.

Continuing with our Mailchimp example, let's assume that a customer subscribes to Mailchimp. Mailchimp then sends the following data (as raw content) to RudderStack:

```
type=subscribe&fired_at=2021-07-28+08%3A06%3A59&data%5Bid%5D=e2ff089583&data%5Bemail%5D=ruchira%40rudderlabs.com&data%5Bemail_type%5D=html&data%5Bip_opt%5D=115.187.35.152&data%5Bweb_id%5D=161912900&data%5Bmerges%5D%5BEMAIL%5D=name%40rudderlabs.com&data%5Bmerges%5D%5BFNAME%5D=Name&data%5Bmerges%5D%5BLNAME%5D=Surname&data%5Bmerges%5D%5BADDRESS%5D=&data%5Bmerges%5D%5BPHONE%5D=&data%5Bmerges%5D%5BBIRTHDAY%5D=&data%5Blist_id%5D=ec4689c266
```

RudderStack receives this data and creates the following payload:

```JavaScript
[{
  "type": "track",
  "event": "custom_source_event",
  "rudderId": "044448e2-a674-426c-ba61-8341262babcc",
  "messageId": "4379907d-689a-4e3a-a2f7-477e29a02299",
  "properties": {
    "type": [
      "subscribe"
    ],
    "data[id]": [
      "e2ff089583"
    ],
    "fired_at": [
      "2021-07-28 08:06:59"
    ],
    "data[email]": [
      "[name@rudderlabs.com](mailto:name@rudderlabs.com)"
    ],
    "data[ip_opt]": [
      "115.187.35.152"
    ],
    "data[web_id]": [
      "161912900"
    ],
    "data[list_id]": [
      "ec4689c266"
    ],
    "data[email_type]": [
      "html"
    ],
    "data[merges][EMAIL]": [
      "[name@rudderlabs.com](mailto:name@rudderlabs.com)"
    ],
    "data[merges][FNAME]": [
      "Name"
    ],
    "data[merges][LNAME]": [
      "Surname"
    ],
    "data[merges][PHONE]": [
      ""
    ],
    "data[merges][ADDRESS]": [
      ""
    ],
    "data[merges][BIRTHDAY]": [
      ""
    ]
  },
  "anonymousId": "d6597ba2-54db-4bd7-8769-86ac067b4178"
}]
```
You can also manipulate this payload according to the desired destination with the help of RudderStack's [**User Transformations**](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) feature.

A sample transformation is as shown below:

```JavaScript
function transformEvent(event) {

  const updatedEvent = event[0];

  const {
    properties
  } = event[0];

  if (properties) {

    updatedEvent.event = properties.type;

    updatedEvent.userId = properties["data[email]"];

    updatedEvent.properties.name = `${properties["data[merges][FNAME]"]} ${properties["data[merges][LNAME]"]}`;

    updatedEvent.properties.phone = properties["data[merges][PHONE]"];

    delete updatedEvent.properties["data[merges][PHONE]"];

    delete updatedEvent.properties["data[merges][FNAME]"];

    delete updatedEvent.properties["data[merges][LNAME]"];

  }

  return updatedEvent;

}
```

The transformed payload is as shown:

```JavaScript
{
  type: 'track',
  event: ['subscribe'],
  rudderId: '044448e2-a674-426c-ba61-8341262babcc',
  messageId: '4379907d-689a-4e3a-a2f7-477e29a02299',
  properties: {
    type: ['subscribe'],
    'data[id]': ['e2ff089583'],
    fired_at: ['2021-07-28 08:06:59'],
    'data[email]': ['name@rudderlabs.com'],
    'data[ip_opt]': ['115.187.35.152'],
    'data[web_id]': ['161912900'],
    'data[list_id]': ['ec4689c266'],
    'data[email_type]': ['html'],
    'data[merges][EMAIL]': ['name@rudderlabs.com'],
    'data[merges][ADDRESS]': [''],
    'data[merges][BIRTHDAY]': [''],
    name: 'Name Surname',
    phone: ['']
  },
  anonymousId: 'd6597ba2-54db-4bd7-8769-86ac067b4178',
  userId: ['name@rudderlabs.com']
}
```

RudderStack then sends this payload to your desired destination.

## Contact Us

If you come across any issues while setting up and using custom sources in RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
