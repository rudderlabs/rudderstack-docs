---
description: Step-by-step guide to send event data from RudderStack to Pinterest.
---

# Pinterest Tag

[Pinterest Tag](https://ads.pinterest.com/advertiser/549762398656/conversions/tag/) helps you to give conversion report when someone takes an action on your website, such as signing up for a newsletter or buying a product.

RudderStack supports the `pintrk` way of tagging in websites.

## Getting Started

To enable sending data to **Pinterest**, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from RudderStack will start flowing to Pinterest.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Pinterest Tag, by referring to the table below:

| **Connection Mode** | Web | Mobile | Server |
| :--- | :--- | :--- | :--- |
| **Device Mode** | **Supported** | **-** | **-** |
| **Cloud Mode** | **-** | **-** | **-** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Pinterest, please perform the steps below:

* Choose a source to which you would like to add Pinterest as a destination.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to add a source in RudderStack.
{% endhint %}

* Select the destination as **Pinterest Tag** to your source. Give your destination a name and then click on **Next**.
* On the **Connection Settings** page, fill all the fields with the relevant information and click **Next**.

![Pinterest Tag Connection Settings in RudderStack](../.gitbook/assets/pinterest_tag.png)

* In the **Connection Settings**, please enter your **Tag Id** as shown above.

## Track

The `track` call allows you to capture any action that the user might perform, along with the properties that are associated with that action. Each action is considered to be an event.

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Track me");
```

RudderStack's SDK will send the track event name and any properties as custom properties to Pinterest.

## eCommerce

RudderStack supports eCommerce conversion tracking for Pinterest. Use the [RudderStack eCommerce spec](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-ecommerce-events-specification) for sending events while instrumenting your site with the RudderStack SDK.

Below are some examples of the track event names that are passed to Pinterest event name:

| RudderStack event name | Pinterest event name |
| :--- | :--- |
| Order Completed | `Checkout` |
| Order Completed | `Checkout` |
| Product Added | `AddToCart` |
| Products Searched | `Search` |
| Product List Viewed | `Search` |

You can also track a custom event that you want to include in your conversion reporting. This will get map to pipnterest custom event.
```javascript
rudderanalytics.track("custom");
```

If you wish to map your event to Pinterest event you can do so by adding it in our config section at **Map Your Events To Pinterest Events**. 

Pinterest supports following 9 standard events that one can map and track them for reporting.

* `Checkout`
* `AddToCart`
* `PageVisit`
* `SignUp`
* `WatchVideo`
* `Lead`
* `Search`
* `ViewCategory`
* `Custom`

Apart from that if the event sent is not found in our list we pass those events and Pinterest treats them as user-defined events. Note, these custom events aren’t available for conversion reporting.

## Properties Mapping

Rudderstack automatically binds the following properties to Pinterest Event Properties:

| RudderStack property name | Pinterest property name |
| :--- | :--- |
| query | `search_query` |
| value | `value` |
| order_quantity | `order_quantity` |
| currency | `currency` |
| order_id | `order_id` |
| promo_code | `promo_code` |
| property | `property` |
| video_title | `video_title` |
| lead_type | `lead_type` |
| coupon | `coupon` |

Following properties are nested within e-commerce products array : 
| product_id | `product_id` |
| sku | `product_id` |
| name | `product_name` |
| price | `product_price` |
| category | `product_category` |
| variant | `product_variant` |
| quantity | `product_quantity` |
| brand | `product_brand` |

If you wish to pass any extra properties other than what we support, you can use our **Custom Properties** configuration. 
```javascript
rudderanalytics.track('Event', {customProperty: { customValue: 2 }, someRandomMailId: 'user@gmail.com'})
```
For streaming above properties in Pinterest destination you need to add following two properties : 
* `customProperty.customValue`
* `someRandomMailId`

## Page

Pinterest `pintrk` sends any one following of two events everytime you make a page call.
When making page call you can provide name, category and additional properties. We send `ViewCategory` event if both name and category is present. 
If only name is present we send `PageVisit` event. We drop of additional properties. In case if you wish to send additional properties you need to mention them in our **Custom Properties** configuration.

```javascript
rudderanalytics.page("I am new page", "new page category", {
  path: "path",
  url: "url",
  title: "title",
  search: "search",
  referrer: "referrer",
  testDimension: "true",
});
```
This example will map to Pinterest `ViewCategory` event.

```javascript
rudderanalytics.page("I am new page with no name", {
  path: "path"
});
```
This example will map to Pinterest `PageVisit` event.


## Identify

To support the second scenario, where a user visits your site anonymously, but is identified at a later point, you do not need to change any of the Pinterest destination settings. Instead, you can make an identify() call with the user’s email address, which triggers a Pinterest set() method. This saves the identification parameters so they can be sent with the next event, so it’s important to set the values as early as possible.

Note: Nothing appears in the network tab in your browser or in the tag helper extension after set() is called. However, a hashed value for an 'em' parameter is added in the next event call, in a JSON object encoded in the URL. You can also see the email box in the tag helper extension.
A sample `identify` call is as shown:

```javascript
rudderanalytics.identify("sample_user_id", {
  name: "Test name",
  email: "test@emai.com"
});
```



## FAQs

### **How do you get the Pinterest Tag Id?**

* Login to Pinterest Ads dashboard.
* Go to the **Admin** section from the left sidebar.
* Select the account and then property from the drop down for which you wish to get the id.
* Now click on data streams and select the stream for which you wish to get the id.
* Copy the measurement id by clicking on copy to clipboard icon.

## Contact Us

If you come across any issues while configuring Pinterest Tag with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

