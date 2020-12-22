---
description: Step-by-step guide to send event data from RudderStack to Google Analytics 4.
---

# Google Analytics 4

[Google Analytics 4](https://analytics.google.com/) (formerly known as “App + Web) is a new kind of property, with different reports than what you're used to seeing in Universal Analytics properties.  With Google Analytics 4 property you can use it for a website, an app, or both a website and app together whereas Universal Analytics properties only support websites.

It helps you get better ROI from your marketing for the long term. It has machine learning at its core to automatically surface helpful insights and gives you a complete understanding of your customers across devices and platforms. It’s privacy-centric by design, so you can rely on Analytics even as industry changes like restrictions on cookies and identifiers create gaps in your data. The new Google Analytics will give you the essential insights you need to be ready for what’s next.

## Getting Started

To enable sending data to **GA4**, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from RudderStack will start flowing to GA4.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by GA4, by referring to the table below:

| **Connection Mode** | Web | Mobile | Server |
| :--- | :--- | :--- | :--- |
| **Device Mode** | **Supported** | **-** | **-** |
| **Cloud Mode** | **-** | **-** | **-** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to GA4, please perform the steps below:

* Choose a source to which you would like to add GA4 as a destination.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to add a source in RudderStack.
{% endhint %}

* Select the destination as **Google Analytics 4** to your source. Give your destination a name and then click on **Next**.
* On the **Connection Settings** page, fill all the fields with the relevant information and click **Next**.

![GA4 Connection Settings in RudderStack](../.gitbook/assets/ga4.png)

In the **Connection Settings**, please enter your **Measurement Id** as shown above.

## Identify

User-ID is an advanced feature that lets Analytics present a cross-platform, cross-device view of your users' behavior.
When you load rudder-sdk we a unique id is generated and consistently assign those IDs to your users, and include the IDs along with the data you send to Analytics. thus, GA creates a single user journey from all the data that is associated with the same user ID.

Google Analytics 4 allows you to set a user ID to the identified visitors if **Send User ID** **to GA** is enabled in the destination settings by the user.

A sample `identify` call is as shown:

```bash
rudderanalytics.identify("I am User"{
  name: "My name is",
  email: "myemailaddressis@gmail.com"
});
```

In the above snippet, the `userid` will be set to `I am User` for Google Analytics and the name and email will be set as `user_properties` in GA. 

If **Send User ID** **to GA** is disabled then we do not set user Id instead we only send user traits to set as `user_properties` in GA.

## Page

We measures `page_view` event to Google Analytics by default everytime our sdk is loaded.
You can also send `pageview` event to google analytics whenever you make a **`page()`** call.

We send following properties by default:

* `path`
* `title`
* `referrer`

You can also make `page()` call with properties as shown below:

```bash
rudderanalytics.page({
  path: "/test_browser.html",
  url: "http://localhost/test_browser.html?param1=true",
  title: "Page Load",
  search: "?param1=true",
  referrer: "referrer"
});
```

### Flag Specific Page Event

* Extend Page View Property
If **Extend Page View Property** config is enabled then we send following properties:

* `path`
* `url`
* `title`
* `search`
* `referrer`

* Block Page View Event
When this config is enabled we disable sending `page_view` events on load, instead now you can control when to send this event by simply calling rudder **page()** payload.

## Track

The `track` call allows you to capture any action that the user might perform, along with the properties that are associated with that action. Each action is considered to be an event.

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Track me");
```

## E-Commerce

RudderStack supports basic E-Commerce tracking for Google Analytics.

The required steps are:

* For each product in the order, there must be an `id` and `name`. Other properties are optional.

Here are few E-Commerce sample payload.

### Products Searched
```bash
rudderanalytics.track("Products Searched", {
  query: "HDMI cable",
});
```

### Product Clicked
```bash
rudderanalytics.track("Product Clicked", {
  product_id: "123",
  sku: "F15",
  category: "Games",
  name: "Game",
  brand: "Gamepro",
  variant: "111",
  price: 13.49,
  quantity: 11,
  coupon: "DISC21",
  position: 1,
  url: "https://www.website.com/product/path",
  image_url: "https://www.website.com/product/path.png",
});

```

### Product List Viewed
```bash
rudderanalytics.track("Product List Viewed", {
  list_id: "list1",
  category: "What's New",
  products: [
    {
      product_id: "223344ffdds3ff3",
      sku: "12345",
      name: "Just Another Game",
      price: 22,
      position: 2,
      category: "Games and Entertainment",
      url: "https://www.myecommercewebsite.com/product",
      image_url: "https://www.myecommercewebsite.com/product/path.jpg",
    },
    {
      product_id: "343344ff5567ff3",
      sku: "12346",
      name: "Wrestling Trump Cards",
      price: 4,
      position: 21,
      category: "Card Games",
    },
  ],
});
```

{% hint style="info" %}
For more information, please check our guide on the [RudderStack E-Commerce Events Specification](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-ecommerce-events-specification).
{% endhint %}

## FAQs

### **How do you get the GA4 Measurement Id?**

* Login to Google Analytics dashboard.
* Go to the **Admin** section from the left sidebar.
* Select the account and then property from the drop down for which you wish to get the id.
* Now click on data streams and select the stream for which you wish to get the id.
* Copy the measurement id by clicking on copy to clipboard icon.

## Contact Us

If you come across any issues while configuring Google Analytics 4 with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

