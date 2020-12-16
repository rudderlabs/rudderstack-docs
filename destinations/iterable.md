---
description: Step-by-step guide to send event data from RudderStack to Iterable
---

# Iterable

Iterable is a popular growth marketing platform that allows you to maximize customer interaction, and improve your customers' overall LTV \(Life Time Value\).

RudderStack allows you to configure Iterable as a destination and send your event data to it directly.

## Getting Started

To enable sending data to Iterable, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from RudderStack will start flowing to Iterable.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Iterable, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **-** | - | - |
| **Cloud mode** | **-** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Iterable, please perform the steps below:

* Choose a source to which you would like to add Iterable as a destination.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* Select the destination as **Iterable** to your source. Give your destination a name and then click on **Next**.
* On the **Connection Settings** page, ****fill all the fields with the relevant information and click **Next.**

![Iterable Connection Settings in RudderStack](../.gitbook/assets/image%20%2873%29.png)

### Configurable settings

The following are the settings to be configured:

* **Iterable API Key**: The API key can be found under **API Configuration Settings** in your Iterable account.
* **Map All Pages to Single Event Name**: If this is enabled, all the pages will be tracked to Iterable with the same event name.
  * For page: `Loaded a Page`
  * For screen: `Loaded a Screen`
* **Track All Pages**: All page events will be sent, if enabled.
* **Track Categorized Pages**: Only pages having a category will be tracked, if enabled.
* **Track Named Pages**: Only pages having a name will be tracked, if enabled.

## Identify

When an `identify` call is made, RudderStack calls the [Update User](https://api.iterable.com/api/docs#users_updateUser) API of Iterable and sends the data accordingly.

{% hint style="warning" %}
A user is identified by `emailId` or `userId`. If none of these is passed in the call, the sending of event fails.
{% endhint %}

A sample `identify` call is as shown:

```objectivec
[[RSClient sharedInstance] identify:@"test_user_id"
                             traits:@{@"foo": @"bar",
                                      @"foo1": @"bar1",
                                      @"email": @"test@gmail.com",
                                      @"key_1" : @"value_1",
                                      @"key_2" : @"value_2"
                             }
];
```

If the `deviceToken` for Push Notification is present in `context` of the payload then a mapping will be done for the user with the device to register for push. This will add the data if it doesn't exist yet. It will also update data fields on the device.

We use [mobile device registration](https://api.iterable.com/api/docs#users_registerDeviceToken) API for sending the token information from a device. We set the `platform` parameter as `APNS` and `GCM` for iOS and Android devices respectively. Similarly, we use the [browser token registration](https://api.iterable.com/api/docs#users_registerBrowserToken) API for Web platform. 

{% hint style="info" %}
To understand more about Push Notification registration check the Iterable guides for [Android](https://support.iterable.com/hc/en-us/articles/115000331943#_2-create-a-mobile-app-in-iterable) and [iOS](https://support.iterable.com/hc/en-us/articles/115000315806#_4-create-a-mobile-app-in-iterable).
{% endhint %}

## Page

When the `page` method is called, the RudderStack server sends a track event to Iterable with the `userId`, `emailId`, and `eventName` parameters. 

If the user does not already exist in Iterable, RudderStack will add the user to the system as long as `email` is present in the call. If email is not present, Iterable will reject the event.

{% hint style="info" %}
Iterable requires that you pass `email` the first time you call `page` for a user. Subsequent calls can use the `userId` identifier.
{% endhint %}

If the name of the page is **Application Home** the event name in iterable will be **Application Home Page.**

{% hint style="info" %}
Note that the above case will differ according to the settings set by the user in RudderStack dashboard. Refer to the configurable settings in the Getting Started section above for more information.
{% endhint %}

A sample `page` call is as shown:

```javascript
rudderanalytics.page({
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer"
 });
```

## Screen

The `screen` call is the mobile equivalent of the `page`. When called, it sends a `track` event to Iterable with `userId`,`emailId`, and `eventName` . In this case, the email ID will be checked if present and will create a new user if not. If the name of the page is **Main Activity**, the event name will set as **Main Activity Screen**.

{% hint style="info" %}
Note that the above case will differ according to the settings set by the user in RudderStack dashboard. Refer to the configurable settings in the Getting Started section above for more information.
{% endhint %}

A sample `screen` call is as shown:

```objectivec
[[RSClient sharedInstance] screen:@"Main"];
```

## Track

When the `track` call is made, the [track API endpoint](https://api.iterable.com/api/docs#!/events/track_post_0) of Iterable is called by RudderStack to send the events. The event properties are sent as data fields in the request, while the name of the event is sent as a Custom Event.

A sample`track` call is as shown:

```objectivec
[[RSClient sharedInstance] track:@"Accepted Terms of Service" 
                          properties:@{
                                  @"foo": @"bar",
                              @"foo_int": @134
}];
```

{% hint style="info" %}
If a user does not exist in Iterable, the `track` call for the user event will add the user in Iterable. 
{% endhint %}

## E-Commerce

You can find the relevant details of the eCommerce events in the [RudderStack E-Commerce Events Specification](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-ecommerce-events-specification) guide.

### Order Completed

The E-Commerce event `Order Completed` is supported by RudderStack. The other events will be sent as simple track events. The end point details of Iterable is in the [Track a purchase](https://api.iterable.com/api/docs#commerce_trackPurchase) event.

User properties, item properties and total are compulsory for sending the order completed event.

Below is an example `Order Completed` event.

```javascript
rudderanalytics.track('Order Completed', {
  "total": 1000,
  "products": [
    {
      "product_id": "507f1f77bcf86cd799439011",
      "sku": "45790-32",
      "name": "Monopoly: 3rd Edition",
      "price": "19",
      "position": "1",
      "category": "Cars",
      "url": "https://www.example.com/product/path",
      "image_url": "https://www.example.com/product/path.jpg"
    },
    {
      "product_id": "507f1f77bcf86cd799439011",
      "sku": "45790-32",
      "name": "Monopoly: 3rd Edition",
      "price": "19",
      "quantity": "2",
      "position": "1",
      "category": "Cars",
      "url": "https://www.example.com/product/path",
      "image_url": "https://www.example.com/product/path.jpg"
    }
  ]
})
```

### Product Added/Removed

The eCommerce event `Product Added` or `Product Removed` is supported by RudderStack. It is sent to Iterable with the end point details present in the [Update a user's shopping cart items](https://api.iterable.com/api/docs#commerce_updateCart) event.

For this event, the user has to send the whole updated cart and not the individual items that are being added or removed.

```javascript
rudderanalytics.track('Product Added', {
  "total": 1000,
  "products": [
    {
      "product_id": "507f1f77bcf86cd799439011",
      "sku": "45790-32",
      "name": "Monopoly: 3rd Edition",
      "price": "19",
      "position": "1",
      "category": "Cars",
      "url": "https://www.example.com/product/path",
      "image_url": "https://www.example.com/product/path.jpg"
    },
    {
      "product_id": "507f1f77bcf86cd799439011",
      "sku": "45790-32",
      "name": "Monopoly: 3rd Edition",
      "price": "19",
      "quantity": "2",
      "position": "1",
      "category": "Cars",
      "url": "https://www.example.com/product/path",
      "image_url": "https://www.example.com/product/path.jpg"
    }
  ]
})
```

{% hint style="info" %}
For this event, the user properties and item properties are compulsory.
{% endhint %}

## FAQs

### Where can I get the Iterable API key?

You can get the Iterable API key under the **API Configuration Settings** section in your Iterable account.

### What does the **Track Named Pages** setting imply?

If this setting is enabled in the RudderStack dashboard, only the pages having a name will be tracked. 

### What does the **Track Categorized Pages** imply?

If this setting is enabled, only the pages having a category will be tracked.

## Contact Us

If you come across any issues while configuring or using Iterable with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

