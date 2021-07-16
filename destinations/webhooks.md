---
description: >-
  Step-by-step guide to send your event data from RudderStack to your configured
  webhook endpoint.
---

# Webhooks

Webhooks allow you to send the events generated via the RudderStack SDK to your own backend. It is useful in cases where you want to apply some custom logic on the event payload before sending it to your preferred destination platforms.

Once webhooks are enabled as a destination in your dashboard, RudderStack forwards the SDK events to your configured webhook endpoint.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/webhook)**.**
{% endhint %}

## Getting Started

In order to collect your events at the webhook endpoint, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from [**RudderStack**](https://github.com/rudderlabs/rudder-server) will start to flow to the webhook endpoint.

Before configuring your source and destination on the [**RudderStack dashboard**](https://app.rudderstack.com/), verify if the platform you are working on is supported by the webhook destination by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that your platform supports sending events to webhooks, perform the steps below:

* Choose a source to which you would like to add your webhook endpoint as a destination.

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Select the destination as **Webhook** to your source. Give your destination a name and then click on **Next**.
* Next, in the **Connection Settings** page, enter the relevant connection information and click on **Next**

![](../.gitbook/assets/screenshot-2020-08-24-at-10.24.37-am.png)

The settings are:

* **Webhook URL:** This is the endpoint where [**RudderStack**](https://github.com/rudderlabs/rudder-server) will send the events. Both `http` and `https` are supported. For `https`, the **TLS cert** needs to be **valid** for a successful event delivery.
* **URL Method:** This is the HTTP method of the request that would be sent to the configured endpoint. Supported methods are `POST` and `GET`. By default, the `POST` method is used.
* **Headers:** Add custom headers for your events via this option. These headers will be added to the request made from RudderStack to your webhook. By default, RudderStack adds the following headers for a `POST` request:

| Key | Value |
| :--- | :--- |
| `User-Agent` | `RudderLabs` |
| `Content-Type` | `application/json` |

{% hint style="info" %}
RudderStack also supports adding a dynamic header for your events through user transformation. For more information, refer to our [**user transformer code**](https://github.com/rudderlabs/sample-user-transformers/blob/master/AddDynamicHeader.js) in our GitHub repo.
{% endhint %}

{% hint style="info" %}
You can also add a dynamic path to your base URL. For more information on how to do this, refer to our [**user transformer code**](https://github.com/rudderlabs/sample-user-transformers/blob/master/DynamicPathtoBaseURL.js) in our GitHub repo.
{% endhint %}

## Identify

The `identify` call is used to associate a user to their actions. Apart from capturing a unique user ID, you can also send optional traits associated with that user, such as name, email, IP address, etc. using the RudderStack SDKs.

A sample `identify` payload is as shown:

```javascript
{
  "channel": "web",
  "context": {
    "app": {
      "build": "1.0.0",
      "name": "RudderLabs JavaScript SDK",
      "namespace": "com.rudderlabs.javascript",
      "version": "1.1.1-rc.2"
    },
    "traits": {
      "name": "User name",
      "email": "user@domain.com",
      "plan": "Enterprise",
      "company": { "id": "company-A" },
      "createdAt": "Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)"
    },
    "library": { "name": "RudderLabs JavaScript SDK", "version": "1.1.1-rc.2" },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
    "locale": "en-US",
    "os": { "name": "", "version": "" },
    "screen": { "density": 1.600000023841858 },
    "page": {
      "path": "/tests/html/script-test.html",
      "referrer": "http://localhost:1111/tests/html/",
      "search": "",
      "title": "",
      "url": "http://localhost:1111/tests/html/script-test.html"
    }
  },
  "type": "identify",
  "messageId": "508d5e8c-96e4-4301-bd46-1890dba5c866",
  "originalTimestamp": "2020-04-22T08:06:20.337Z",
  "anonymousId": "21b43de4-3b9b-423f-b51f-794eae31fc03",
  "userId": "my-user-id",
  "integrations": { "All": true },
  "sentAt": "2020-04-22T08:06:20.337Z"
}
```

For each `identify` call, RudderStack sends the request in the following manner \(depending on the URL method configured in the dashboard\):

* **`POST`:** RudderStack sends the whole event payload\(as shown above\) as the JSON body of the `POST` request.
* **`GET`:** RudderStack send the traits that you pass in the `identify` call as query parameters of the `GET` request. If your traits contain nested values, RudderStack flattens these values and sends them as query parameters. For example, the company ID specified in the above payload's traits is sent as `"company.id": "company-A"`.

## Page

The `page` call lets you record your website's page views, with any additional relevant information about the viewed page. For more information on the `page` call, refer to the [**RudderStack API Specification**](https://docs.rudderstack.com/rudderstack-api-spec) guide.

A sample `page` payload is as shown:

```javascript
{
  "channel": "web",
  "context": {
    "app": {
      "build": "1.0.0",
      "name": "RudderLabs JavaScript SDK",
      "namespace": "com.rudderlabs.javascript",
      "version": "1.1.1-rc.2"
    },
    "traits": {},
    "library": { "name": "RudderLabs JavaScript SDK", "version": "1.1.1-rc.2" },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
    "locale": "en-US",
    "os": { "name": "", "version": "" },
    "screen": { "density": 1.600000023841858 },
    "page": {
      "path": "/tests/html/script-test.html",
      "referrer": "http://localhost:1111/tests/html/",
      "search": "",
      "title": "",
      "url": "http://localhost:1111/tests/html/script-test.html"
    }
  },
  "type": "page",
  "messageId": "97114191-e2f2-42af-97db-14b358b1cfe1",
  "originalTimestamp": "2020-04-22T08:06:20.334Z",
  "anonymousId": "57d95a96-61dc-47bf-8f96-5d37543d7438",
  "userId": "user@domain.com",
  "properties": {
    "path": "/tests/html/script-test.html",
    "referrer": "http://localhost:1111/tests/html/",
    "search": "",
    "title": "",
    "url": "http://localhost:1111/tests/html/script-test.html",
    "experiment": {"variant": "old"}
  },
  "integrations": { "All": true },
  "sentAt": "2020-04-22T08:06:20.334Z"
}
```

For each `page` call, RudderStack sends the request in the following manner\(depending on the URL method configured in the dashboard\):

* **`POST`:** RudderStack send the whole event payload\(as shown above\) as the JSON body of the `POST` request.
* **`GET`:** RudderStack sends the properties that you pass on the `page` call as query parameters of the `GET`request. If your properties contain nested values, RudderStack flattens these values and sends them as query parameters. For example, the experiment variant specified in the above payload's properties is sent as `"experiment.variant": "old"`.

## Track

The `track` call captures all the activities that the user performs, along with any other properties that are associated with those activities. Each of these activities or actions is considered as an **event**. For more information on the `track` call, refer to the [**RudderStack API Specification**](https://docs.rudderstack.com/rudderstack-api-spec) guide.

A sample `track` payload is as shown:

```javascript
{
  "channel": "web",
  "context": {
    "app": {
      "build": "1.0.0",
      "name": "RudderLabs JavaScript SDK",
      "namespace": "com.rudderlabs.javascript",
      "version": "1.1.1-rc.2"
    },
    "traits": {
      "name": "User name",
      "email": "user@doamin.com",
      "plan": "Enterprise",
      "company": { "id": "comapny-A" },
      "createdAt": "Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)"
    },
    "library": { "name": "RudderLabs JavaScript SDK", "version": "1.1.1-rc.2" },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
    "locale": "en-US",
    "os": { "name": "", "version": "" },
    "screen": { "density": 1.600000023841858 },
    "page": {
      "path": "/tests/html/script-test.html",
      "referrer": "http://localhost:1111/tests/html/",
      "search": "",
      "title": "",
      "url": "http://localhost:1111/tests/html/script-test.html"
    }
  },
  "type": "track",
  "messageId": "04a303b1-a466-4e66-9022-2a24edaca4fc",
  "originalTimestamp": "2020-04-22T08:06:20.338Z",
  "anonymousId": "21b43de4-3b9b-423f-b51f-794eae31fc03",
  "userId": "my-user-id",
  "event": "Product Purchased",
  "properties": {
    "order_ID": "1",
    "category": "boots",
    "product_name": "new_boots",
    "price": 60,
    "currency": "USD"
  },
  "integrations": { "All": true },
  "sentAt": "2020-04-22T08:06:20.338Z"
}
```

To view the other events and detailed event structure for the types of events being sent, check out the [**RudderStack API Specification**](https://docs.rudderstack.com/rudderstack-api-spec).

For each `track` call, RudderStack sends the request in the following manner\(depending on the URL method configured in the dashboard\):

* **`POST`:** RudderStack sends the whole event payload\(as shown above\) as the JSON body of the `POST` request.
* **`GET`:** RudderStack sends the properties that you pass in the `track` call as query parameters of the `GET` request. If your properties contain nested values, RudderStack will flatten these values before sending them.

## FAQs

### How to check if there are any delivery failures for the events sent to the webhook?

* Login to your account in  [**RudderStack app**](https://app.rudderstack.com).
* Verify that you are sending the events in the **Live Events** tab of your source.
* Check if there are any delivery failures in the **Live Events** tab of your destination. An example of an event failure is as shown:

![Failed Event](https://user-images.githubusercontent.com/59817155/125619804-64033117-16f6-44c7-8050-286059ab404d.png)

* You can then check the **Error Response** to get more details about the error, including the reason of the failure, as shown:

![Error Response](https://user-images.githubusercontent.com/59817155/125619922-c68b1c48-50aa-4ce9-8803-8381170e3cc9.png)

## Contact Us

If you come across any issues while configuring webhooks with RudderStack, please feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

