---
description: Step-by-step guide to send event data from RudderStack to Google Pub/Sub.
---

# Google Pub/Sub

[Google Pub/Sub](https://cloud.google.com/pubsub/docs/overview) is an asynchronous messaging service that allows you to decouple the services that produce events from the services that process events. With Pub/Sub, you get durable message storage as well as a real-time message delivery system. The Google Pub/Sub servers run reliably with a consistent performance in all the Google Cloud regions over the world.

RudderStack allows you to configure Google Pub/Sub as a destination and send your event data to it directly.

## Getting Started

To enable sending data to Google Pub/Sub, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Google Pub/Sub.

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| Device mode | **-** | **-** | **-** |
| Cloud mode | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Google Pub/Sub, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Google Pub/Sub.**

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Google Pub/Sub Connection Settings](../.gitbook/assets/image%20%2878%29.png)

* Enter the following details:
  * **Connection Settings**
    * **Project ID** and the **Credentials**: Follow these steps to obtain the project ID as well as the required credentials:

      * Create a service account from Google Cloud Console.
      * You can get the **Project ID** when you log in to your Google Cloud Console.
      * Use the **Select a role** dropdown to add the **Pub/Sub Publisher** role.
      * Create a key as JSON and download it.
      * Paste this downloaded JSON in the **Credentials** field

    * Enter the **Event Name** as well as the corresponding **Topic ID**. You can get the topic id from your topics page, as shown:

![Google Pub/Sub Topic ID and Name](../.gitbook/assets/image%20%2847%29.png)

{% hint style="info" %}
You can send an event `type` like `page,` `identify,` `track`.   
For the `track` events you can specify the event name based on the `event` name in the payload.

For example:

* If the event name is **`page`** it will send all the calls with the `type` page.
* If the event name is  **`product added`** , it will send all the track events with the **`event`** as **`product added`**.
{% endhint %}

{% hint style="success" %}
If you want to send all the events to a particular stream irrespective of the type or name, you can use **`*`** as the event name.
{% endhint %}

{% hint style="warning" %}
The **topic ID** is **case-sensitive** and has to be exactly as seen in Google Pub/Sub. On the other hand, the **event name** is **case insensitive**, and thus `Page` or `page` will both be considered as valid.
{% endhint %}

* Finally, click on **Next** to complete the configuration. Pub/Sub should now be added and enabled as a destination in RudderStack.

## Page

The `page` call contains information related to the page, such as the URL of the web page visited by the user.

{% hint style="info" %}
For more information on the `page` method, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

A sample `page` payload is as shown in the snippet below:

```javascript
rudderanalytics.page({
  path: "path",
  url: "url",
  title: "title",
  search: "search",
  referrer: "referrer"
});
```

## Identify

The `identify` call captures the relevant details about the visiting user.

{% hint style="info" %}
For more information on the `identify` method, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

A sample `identify` payload is as shown in the snippet below:

```javascript
rudderanalytics.identify("abc123", {
  name: "FirstName LastName",
  email: "example@gmail.com"
});
```

## Track

The `track` call captures the information related to the actions performed by the user, along with their properties, or traits.

{% hint style="info" %}
For more information on the `track` method, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

A sample `track` payload is as shown in the snippet below:

```javascript
rudderanalytics.track("Track me", {
        category: "category",
        label: "label",
        value: "value"
 });
```

## FAQs <a id="faqs"></a>

### How does event mapping work with the topic ID? <a id="how-does-event-mapping-work-with-the-delivery-stream"></a>

* If there is no topic ID set for an event, it will not be sent.
* If an event is set with a topic id, the payload will be sent to Pub/Sub to that particular topic id.

{% hint style="info" %}
If you have set all event type, event and \* for mapping the priority will be given to `event` ,   
then `type` , followed by \*.
{% endhint %}

Eg.  
Let the type of event be track,  
Event name be product added.  
And the mapping is done as: 

![](../.gitbook/assets/screenshot-2020-09-09-at-6.56.02-pm.png)

Then all events should go to the one mapped with product added.

## Contact Us

If you come across any issues while configuring or using Google Pub/Sub with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

