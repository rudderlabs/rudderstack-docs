---
description: >-
  Detailed technical description and semantic definitions of the event data
  captured by the various RudderStack APIs
---

# RudderStack API

This **RudderStack API** helps you plan your event data, as well as provides various options for tracking your events. We have a unified event semantic for different destination platforms.

RudderStack Client SDKs support the following API calls:

1. **`identify`** : Captures the details about the visiting user
2. **`track`**: Captures information related to the actions performed by the user
3. **`page`**: Contains information such as the URL / web page visited by the user
4. **`screen`**: Captures details related to the screen being viewed by the user
5. **`reset`**: Resets the previously identified user.

These APIs send a set of common information about the user, which helps you get a better context of the user and their associated activities.

## How the RudderStack API Calls Work

1. The RudderStack API calls send the event data to the RudderStack Server.
2.  The server then transforms this data into formats specific to various destination platforms.
3. The transformed data is then forwarded to the desired destinations such as Google Analytics, Amplitude, MixPanel, and more.

## Event Data Format

The event data sent to the RudderStack Server has a `JSON` structure, which has common fields and an API-specific payload. Both of these formats are described in the subsequent sections. 

## Common Fields

The common fields define the core structure of the event data. These fields also describe the user identity and other vital information about your app or website.

```javascript
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
    "os": { "name": "Android", "version": "9" },
    "screen": { "density": 420, "height": 1794, "width": 1080 },
    "timezone": "Asia/Kolkata",
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

A detailed description of the common fields is documented in the table below:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `anonymousId` | `String` | Yes | Unique identification for the user. We keep it the same as the `deviceId` |
| `channel` | `String` | Yes | Identifies the source of the event. Permitted values are `mobile`, `web`, `server` |
| `context` | `Object` | Yes | This object contains all the additional information you might need for the user. The SDKs populate this information automatically. |
| `event` | `String` | No | The user action that you want to record is captured in this string. |
| `integrations` | `Object` | No | You can specify the destinations here to control the flow the events |
| `messageId` | `String` | No | Signifies a unique identification for the event |
| `properties` | `Object` | No | Used to pass all the required information to the destination along with the event |
| `originalTimestamp` | `Timestamp` | Yes | Records the actual time when the event occurred |
| `type` | `String` | Yes | Captures the type of API. Values can be either one of the `track`,`screen`,`identify`,`page` events |
| `sentAt` | `Timestamp` | Yes | Captures the time when the event was sent to the RudderStack Server from the client |

## Contextual Fields

| Name | Data Type | Description |
| :--- | :--- | :--- |
| `app` | `Object` | Gives detailed information on your application such as `build`, `name`, `namespace` and `version` |
| `device` | `Object` | Information about the device from which you are capturing the event. It contains `deviceId`, `manufacturer`, `model`, `name` and `type` |
| `library` | `Object` | Details about the `Rudder SDK` you are using, such as `name` and `version` |
| `locale` | `String` | Captures the language of the device |
| `network` | `Object` | Contains information about the reachability of the device. Also, it gives you the status of `bluetooth`, `wifi`, `cellular` network and `carrier` name |
| `os` | `Object` | Details of the operating system of the device you are tracking |
| `screen` | `Object` | It gives you the dimensions,  i.e. `height`, `width` and the `density` of the screen of the device |
| `timezone` | `String` | Captures the time zone of the user you are tracking |
| `traits` | `Object` | Contains detailed information of the user. We fill in the `anonymousId` for you. You can add more details here using `identify` call from the SDK |
| `userAgent` | `String` | The user agent of the device that you are tracking |

## Sample Payload Structures

This section demonstrates some sample payloads for the various RudderStack API calls:

### `identify`

{% hint style="info" %}
As a best practice, please make sure `identify` is called at the start of every session or page load for logged-in users, if possible. This will ensure all the latest traits are captured.
{% endhint %}

#### When and How Often Should I Call `identify`?

Ideally, you should call `identify` in the following scenarios:

* After a user registers on your website or app
* After a user logs in to your site or app
* When a user updates their information \(e.g. residential address, email ID, etc.\)
* When you load a page that is accessible by a logged-in user - Although this is optional, many tools \(such as Intercom, for example\) require an initial identify call to know who the user is when they first start the session.

#### Can I Pass Traits to an `identify` Call? If so, how?

Yes, you can pass traits to an `identify` call. These traits will be stored in a cookie on your browser or mobile device, and will be passed automatically to all the subsequent calls.

An example of how you can pass traits to an `identify` call from our JS SDK is as shown in the following code snippet. Check other [SDKs](https://docs.rudderstack.com/rudderstack-sdk-integration-guides) for more examples.

```javascript
rudderanalytics.identify("user-id", {name: "username", gender: "male"});
```

In the above example, `{name: "username", gender: "male"}` are the traits which are stored in cookie and passed along all the subsequent calls.

A sample payload for the `identify` event after removing the common fields mentioned in the [Common Fields](https://docs.rudderstack.com/getting-started/rudderstack-api-spec#common-fields) section:

```javascript
{
  "traits": {
    "id": "hashed_user_id",
    "email": "sample@example.com",
    "userId": "test_user_id",
    "lastname": "Bar",
    "firstname": "Foo"
  },
  "userId": "hashed_user_id"
}
```

### `track`

A sample payload for the `Product Reviewed` event after removing the common fields is as shown:

```javascript
{
  "properties": {
    "review_id": "review_id_1",
    "product_id": "product_id_1",
    "rating": 2.0,
    "review_body": "Sample Review Body"
  },
  "event": "Product Reviewed"
}
```

### `page`

The following code snippet demonstrates a sample payload for the `page` call after removing the common fields:

```javascript
{
  "properties": {
    "title": "Sample Title",
    "url": "https://sample.com/dashboard"
  },
  "event": "Dashboard"
}
```

### `screen`

A sample payload for `screen`call after removing the common fields is as follows:

```javascript
{
  "properties": {
    "feed" : "private"
  },
  "event": "Home"
}
```

## Useful Links

{% page-ref page="rudderstack-ecommerce-events-specification/" %}

{% page-ref page="http-api-specification.md" %}

## Contact Us

If you want to know more about the RudderStack API specs, feel free to [contact us](mailto:%20docs@rudderstack.com). You can also [request a demo](https://rudderstack.com/request-a-demo/) to see RudderStack in action, or join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) community for more support.

