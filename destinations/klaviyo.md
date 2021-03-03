---
description: Step-by-step guide to send your event data from RudderStack to Klaviyo.
---

# Klaviyo

[Klaviyo](https://www.klaviyo.com/) is a powerful eCommerce platform that allows you to boost your business revenue. It supports unique features such as category-based segmentation and various event triggers based on page views, purchases, email engagement, and more. With Klaviyo, you can easily track and measure all your user activity and the resulting revenue and get a breakdown of this revenue based on custom attributes like campaign type or revenue per recipient. It also offers features such as trend reports, cohort analysis, and various options for boosting customer engagement, such as personalized newsletters, product recommendations, in-app push notifications, and more.

You can now send your event data directly to Klaviyo through RudderStack.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/klaviyo)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please check whether the platform you are sending the events from is supported by ActiveCampaign. Please refer the following table to do so:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| **Device mode**     | **Supported** | -             | -             |
| **Cloud mode**      | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Klaviyo, perform the steps below:

- From your [RudderStack dashboard](https://app.rudderstack.com/), add the source and Klaviyo as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

![Configuration Settings for ActiveCampaign](../.gitbook/assets/klaviyo_conf.png)

## Klaviyo Configuration Settings on the RudderStack Dashboard

To successfully configure Klaviyo as a destination, you will need to configure the following settings:

- **Public API Key:** Your Public API Key is the unique key generated against your account. It can be found in your account on the **Account** section under the **Settings** tab.
- **Private API Key:** Your Private API key can be generated for your account on the **Account** section under the **Settings** tab. This key allows you to add users to list or subscribe them using personalised emails/sms.
- **List Id:** Your default List Id to which you want to add/subscribe identified users.
- **Consent:** If you are a GDPR-compliant business, you will need to include `consent` in your API call,`consent` is a Klaviyo-specific property and only accepts the following values: `email`, `web`, `sms`, `directmail`, and `mobile`.
- **SMS Consent:** If you are updating the consent for a phone number, or would like to send an opt-in SMS to the profile (for double opt-in lists), include an `smsConsent` key in the properties with a value of `true` or `false`
- **Send Page As Track:** If you wish send page events as track events, along with `name` and `category` you need to enable this option.
- **Additional Page info:** If you are sending page events as track, you can also choose to send in additional `properties` for the event by enabling this field.
- **Use Native SDK to send Events:** If you want to send events using device mode.

{% hint style="info" %}
Note that in case of absence of `userId` rudderstack will try to fallback on `anonymousId` for mapping the user with an unique identifier. In case of absence of `userId` and `anonymousId` then `email` or `phone` will be considered as primary identifier for the user.
{% endhint %}

## Page

The `page` call allows you the web page that a user is viewing, along with its associated properties.

An example `page` call would look like:

```javascript
rudderanalytics.page();
```

If you want to send `name` and `category` info in the page event you can do it so by adding the `Send Page As Track` key in the Control-Plane. If you also want to associate `properties` with the page-view event, you can do so by enabling `Additional Page info` property in Control-Plane.

```javascript
rudderanalytics.page("Cart", "Cart Viewed", {
  path: "/cart",
  referrer: "test.com",
  search: "term",
  title: "test_item",
  url: "http://test.in",
});
```

{% hint style="info" %}
Note that `page` calls are only supported in the RudderStack device mode integration. To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. This call is similar to the `page` call, but is exclusive to your mobile device.

A sample `screen` call looks like the following code snippet:

```javascript
MainApplication.rudderClient.screen(
  "Sample Screen Name: ",
  "Screen Category",
  RudderProperty()
    .putValue("url", "https://gana.com")
    .putValue("title", "Screen Title")
    .putValue("referrer", "https://screen.com")
    .putValue("path", "/home"),
  null
);
```

In the above snippet, RudderStack captures all the information related to the screen being viewed, along with any additional info associated with that screen view event. In destination the above screen call will be shown as -  "Sample Screen Name: " along with the properties.

{% hint style="info" %}
Note that `screen` calls are only supported in the RudderStack cloud mode integration. To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

## Track

The `track` call allows you to capture any action that the user might perform, and the properties associated with that action. Each action is considered to be an event. It is similar to `screen` event, and the user has to be associated with an event either by using `userId`, `email` or `phone`.

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Checked Out", {
  Clicked_Rush_delivery_Button: true,
  total_value: 2000,
  Odered: ["T-Shirt", "jacket"],
  revenue: 2000,
});
```

In the above snippet, RudderStack captures the information related to the `Checked Out` event, along with any additional info about that event - in this case the details of the `Checked out` event.

A sample server-side `track` call along with user-info looks like th following:

```javascript
client.track({
  userId: "user2",
  event: "Item Purcahsed",
  properties: {
    revenue: 97.5,
    products: [
      {
        productId: "pro1",
        price: 32.5,
        quantity: 3,
      },
    ],
  },
  context: {
    traits: {
      email: "user2@gmail.com",
    },
  },
});
```

In the above snippet, RudderStack captures the information related to the `Item Purchased` event, along with any additional info about that event in `properties` - in this case the revenue, along with product information. Moreover since this event is captured usinng server-side sdk we are passing user information in `context`, along with an unique `userId`.

{% hint style="info" %}
If you are sending `track`/ `screen` type event using some SDK which does not persist user context info after `identify`, you need to pass the user info in `context.traits`.
{% endhint %}

{% hint style="info" %}
If you want to set a specific value to the `screen` and `track` type event, you need to pass the `event` related property in event properties, aslo you can send `revenue` property in track we will map it to klaviyo special property `$value`.
{% endhint %}

## Identify

The `identify` call lets you associate a user with their actions and capture all the relevant traits about them. This information includes unique `userid` as well as any optional information such as name, email address, etc.

A sample `identify` call looks like the following:

```javascript
rudderanalytics.identify("userid", {
  firstName: "Name",
  lastName: "Surname",
  email: "name@website.com",
  phone: "+12 345 678 900",
  userId: "userId",
  title: "Owner",
  organization: "Company",
  city: "Tokyo",
  region: "ABC",
  country: "JP",
  zip: "100-0001",
  Flagged: false,
  Residence: "Shibuya",
  properties: {
    listId: "XUepkK",
    subscribe: true,
    consent: "email",
    smsConsent: true,
  },
});
```

In the above snippet, RudderStack captures relevant information about the user such as the `email`, `phone` as well as the associated traits of that user.

{% hint style="info" %}
The `userId`,`email` or `phone` trait is a mandatory trait for mapping a user to Klaviyo. If a user already exists, the new values will be updated for that user . You can further add the user to the list if default `listId` is present in Rudderstack control-plane  or by adding `listId` in the `properties` within the `traits`, this will override the `listId` you used in the control plane for this event. You can also subscribe the user to a list by setting `subscribe` option to `true`.
{% endhint %}

{% hint style="info" %}
Similar to `listId` adding `consent` and `smsConsent` property will override the value stored in the control plane for the specific event.
{% endhint %}

{% hint style="info" %}
Adding or subscribing users to specific list is only available in cloud-mode integration. To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

## Group

The `group` call lets you associate a user with a list. You can also subscribe a user to the list. If you haven't already added or subscribed the user using the `identify` call, you can do so by using `group` call.

A sample server-side `group` call looks like the following:

```javascript
client.group({
  anonymousId: 'userId',
  groupId: 'listId',
  traits: {
    subscribe: true
  },
  context:{
    traits: {
      email: "user.test@gmail.com",
      city: "city",
      country: "country",
      zip: "213456",
      age: 23,
      plan: "free",
      consent: "email",
      phone: '1-617-555-1333',
      smsConsent: true
    }
  }
});
```

In the above snippet, the user with the associated traits is added to list, and also subscribed using the `subscribe` flag.

{% hint style="info" %}
Apart from either `userId`,`email` or `phone`, the other fields are not mandatory.
{% endhint %}

{% hint style="info" %}
Adding `consent` and `smsConsent` property in user traits will override the value stored in control plane for the specific event.
{% endhint %}

{% hint style="info" %}
You can add or subscribe users to a specific list via the `group` event only in the cloud mode. This feature is not available in the device mode. To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

## Contact Us

If you come across any issues while configuring Klaviyo with RudderStack, please feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
