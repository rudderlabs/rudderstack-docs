---
description: Step-by-step guide to add a Webhook source in RudderStack.
---

# Webhook Source

RudderStack lets you add any source that supports a webhook and use it to send events to your preferred destination.

When you create a webhook source in the RudderStack dashboard, you get a write key associated with it. Use this write key in a webhook endpoint, e.g., `http://<DATA_PLANE_URL>/v1/webhook?writeKey=<SOURCE_WRITE_KEY>`. You can then add this webhook URL to any source. RudderStack will receive the data according to the settings made in the source and route it to your specified destination.

{% hint style="success" %}
You can also add [**User Transformations**](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) to transform the event data as your requirement.
{% endhint %}

## Adding a Webhook Source in RudderStack

This section details the steps involved in setting up a webhook source. As an example, we will configure Mailchimp as a source in RudderStack.

* Create a webhook source in your RudderStack dashboard as shown:

![](https://user-images.githubusercontent.com/59817155/128315856-0d71db9a-fbc3-4f71-8692-f2a0faa4c5b3.png)

* Then, add a destination in RudderStack and connect it to this webhook source. In this example, we will configure [**Google Analytics**](https://docs.rudderstack.com/destinations/analytics/google-analytics-ga) as a destination, as shown:

![](https://user-images.githubusercontent.com/59817155/127983406-76fcf748-bd1b-4f18-9840-b19a71aaf601.png)

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more details.
{% endhint %}

* Next, add the webhook URL to your desired source platform. **Remember that you can configure webhook sources only for the source platforms that support webhooks**. The following image shows how to add the URL in [Mailchimp](https://mailchimp.com):

![](https://user-images.githubusercontent.com/59817155/127986131-3740dbfe-7d55-4328-abe1-63fb8ac70de2.png)

{% hint style="info" %}
Remember to add and test your webhook URL.
{% endhint %}

* When the users perform any of the actions configured in the source, the platform will send the generated events to the webhook URL.

In this example, Mailchimp sends the updates under **What type of updates should we send?** \(seen in the image above\) as user events to the webhook URL with the content type `application/x-www-form-urlencoded`.

{% hint style="info" %}
The content type can vary in case of other webhook sources.
{% endhint %}

* RudderStack then takes the data, creates the payload and sends it to Google Analytics.

{% hint style="info" %}
For more information on how RudderStack creates the payload, refer to the **Payload Creation and Transformation** section.
{% endhint %}

{% hint style="success" %}
You can also add **User Transformations** to transform the payload into a specific format before sending it to your destination. Refer to the **Payload Creation and Transformation** section for more details.
{% endhint %}

## Payload Creation and Transformation

This section details how RudderStack receives the data from the webhook source platform and creates the resulting payload.

Continuing with our Mailchimp example, let's assume that a customer subscribes to Mailchimp. Mailchimp then sends the following data to RudderStack:

```text
type=subscribe&fired_at=2021-07-28+08%3A06%3A59&data%5Bid%5D=e2ff089583&data%5Bemail%5D=ruchira%40rudderlabs.com&data%5Bemail_type%5D=html&data%5Bip_opt%5D=115.187.35.152&data%5Bweb_id%5D=161912900&data%5Bmerges%5D%5BEMAIL%5D=name%40rudderlabs.com&data%5Bmerges%5D%5BFNAME%5D=Name&data%5Bmerges%5D%5BLNAME%5D=Surname&data%5Bmerges%5D%5BADDRESS%5D=&data%5Bmerges%5D%5BPHONE%5D=&data%5Bmerges%5D%5BBIRTHDAY%5D=&data%5Blist_id%5D=ec4689c266
```

RudderStack receives this data and creates the following payload:

```javascript
[
  {
    "type": "track",
    "event": "webhook_source_event",
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
  }
]
```

You can also transform this payload according to the desired destination with the help of RudderStack's [**User Transformations**](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) feature.

A sample transformation is as shown below:

```javascript
function transformEvent(event) {
  const updatedEvent = event[0];
  const { properties } = event[0];

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

```javascript
{
  type: 'track',
  event: [
    'subscribe'
  ],
  rudderId: '044448e2-a674-426c-ba61-8341262babcc',
  messageId: '4379907d-689a-4e3a-a2f7-477e29a02299',
  properties: {
    type: [
      'subscribe'
    ],
    'data[id]': [
      'e2ff089583'
    ],
    fired_at: [
      '2021-07-28 08:06:59'
    ],
    'data[email]': [
      'name@rudderlabs.com'
    ],
    'data[ip_opt]': [
      '115.187.35.152'
    ],
    'data[web_id]': [
      '161912900'
    ],
    'data[list_id]': [
      'ec4689c266'
    ],
    'data[email_type]': [
      'html'
    ],
    'data[merges][EMAIL]': [
      'name@rudderlabs.com'
    ],
    'data[merges][ADDRESS]': [
      ''
    ],
    'data[merges][BIRTHDAY]': [
      ''
    ],
    name: 'Name Surname',
    phone: [
      ''
    ]
  },
  anonymousId: 'd6597ba2-54db-4bd7-8769-86ac067b4178',
  userId: [
    'name@rudderlabs.com'
  ]
}
```

RudderStack then sends this payload to your destination.

## Contact Us

If you come across any issues while setting up and using webhook sources in RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

