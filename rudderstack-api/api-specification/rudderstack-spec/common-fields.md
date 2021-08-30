---
description: >-
  Detailed technical description of the common fields that define the core event
  data structure.
---

# Common Fields

The common fields define the core event data structure in RudderStack. These fields also describe the user identity and other vital information about your app or website.

{% hint style="success" %}
Every RudderStack API call shares the same common fields.
{% endhint %}

## Common Fields

The following table lists all the common fields with their detailed description:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `anonymousId` | `String` | Required | Unique identification for the user. This is the same as the `deviceId`. |
| `channel` | `String` | Required | Identifies the source of the event. Permitted values are `mobile`, `web`, `server` |
| `context` | `Object` | Required | Contains all the additional user information. The RudderStack SDKs populate this information automatically. |
| `event` | `String` | Optional | Captures the user action that you want to record. |
| `integrations` | `Object` | Optional | You can specify the destinations for which you want to enable/disable sending events. |
| `messageId` | `String` | Optional | Unique identification for the event. |
| `properties` | `Object` | Optional | Passes all the relevant information associated with the event. |
| `originalTimestamp` | `Timestamp` | Required | Records the actual time when the event occurred. |
| `type` | `String` | Required | Captures the type of API. Values can be either `track`,`screen`,`identify`,`page .` |
| `sentAt` | `Timestamp` | Required | Captures the time when the event was sent to RudderStack from the client. |

## Contextual Fields

The contextual fields give additional useful context about a particular event.

The following table lists all the contextual fields with their detailed description:

| Name | Data Type | Description |
| :--- | :--- | :--- |
| `app` | `Object` | Gives detailed information related to your app, like `build`, `name`, `namespace` and `version`. |
| `device` | `Object` | Information about the device from which you are capturing the event. It contains `deviceId`, `manufacturer`, `model`, `name` and `type`. |
| `library` | `Object` | Details about the RudderStack SDK you are using, like `name` and `version`. |
| `locale` | `String` | Captures the language of the device. |
| `network` | `Object` | Contains information about the reachability of the device. Also, it gives you the status of the device's `bluetooth`, `wifi`, `cellular` network and `carrier` name. |
| `os` | `Object` | Captures the operating system details of the device you are tracking. |
| `screen` | `Object` | Gives you the screen dimensions of the device,  i.e. `height`, `width` and the `density` . |
| `timezone` | `String` | Captures the timezone of the user you are tracking. |
| `traits` | `Object` | Captures any additional relevant information about the user. RudderStack fills in the `anonymousId` for you. You can also associate the   [**traits**](https://docs.rudderstack.com/rudderstack-api/rudderstack-spec/identify#identify-traits) from the previously-made `identify` call from the SDK. |
| `userAgent` | `String` | The user agent of the device that you are tracking. |
| `campaign` | `Object` | Gives detailed information about campaigns, like `name`, `source`, `medium`, `content` and `term`. |

## Payload with Common Fields

The following sample payload highlights how the above common and contextual fields are used:

```text
{
  "anonymousId": "7e32188a4dab669f",
  "channel": "mobile",
  "context": {
    "app": {
      "build": "1",
      "name": "RudderAndroidClient",
      "namespace": "com.rudderstack.demo.android",
      "version": "1.0"
    },
    "device": {
      "id": "7e32188a4dab669f",
      "manufacturer": "Google",
      "model": "Android SDK built for x86",
      "name": "generic_x86",
      "type": "android"
    },
    "library": {
      "name": "com.rudderstack.android.sdk.core",
      "version": "0.1.4"
    },
    "locale": "en-US",
    "network": {
      "carrier": "Android",
      "bluetooth": false,
      "cellular": true,
      "wifi": true
    },
    "campaign": {
      "source": "google",
      "medium": "medium",
      "term": "keyword",
      "content": "some content",
      "name": "some campaign"
    },
    "os": { "name": "Android", "version": "9" },
    "screen": { "density": 420, "height": 1794, "width": 1080 },
    "timezone": "Asia/Mumbai",
    "traits": { "anonymousId": "7e32188a4dab669f" },
    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)"
  },
  "event": "Product Reviewed",
  "integrations": { "All": true },
  "messageId": "1578564113557-af022c68-429e-4af4-b99b-2b9174056383",
  "properties": {
    "review_id": "review_id_1",
    "product_id": "product_id_1",
    "rating": 2.0,
    "review_body": "Sample Review Body"
  },
  "originalTimestamp": "2020-01-09T10:01:53.558Z",
  "type": "track",
  "sentAt": "2020-01-09T10:02:03.257Z"
}
```

## Contact Us

For more information on the common fields, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

