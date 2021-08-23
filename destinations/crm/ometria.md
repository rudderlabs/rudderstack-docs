---
description: Step-by-step guide to set up Ometria as a destination in RudderStack.
---

# Ometria

[**Ometria**](https://ometria.com/) Ometria is a customer data and marketing platform that helps retailers increase CRM revenue by sending personalized marketing messages throughout the customer journey.

RudderStack supports Ometria as a destination to which you can seamlessly send your customer data.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/ometria)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, verify if the source platform is supported by Ometria by referring to the table below:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| **Device mode**     | -             | -             | -             |
| **Cloud** **mode**  | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the source supports sending events to Ometria, follow these steps:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source. From the list of destinations, select **Ometria**.

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Ometria Connection Settings](../../.gitbook/assets/Ometria.png)

* Enter your Ometria **API Token**.

{% hint style="info" %}
To get your API key go to **settings** and click on **API Keys** tab.
{% endhint %}

* click on **Next**. Ometria will now be enabled as a destination in Rudderstack.

## Identify

The `identify` call lets you add a new contact or update the already existing contact, with latest information such as `id`, `email` etc.

`listingId` and `email` are required for `identify` call. If `listingId` is not provided it will set to value of `userId`. Rudderstack will map `userId` to `customer_id` field.

A sample `identify` call is as shown below:

```javascript
rudderanalytics.identify("userId", {
  listingId: "listingId123",
  email: "sampleuser@testmail.com",
  firstName: "Demo",
  lastName: "Example",
  channels: {
    sms: {},
  },
  phoneNumber: "+447812122136",
  custom_fields: {
    field1: "val1",
  }
});
```

{% hint style="info" %}
Note that:

* `phoneNumber` must follow E.164 format, else it will be set to `null`.
* If you are sending `sms` in `channels` field then you must also send a valid `phoneNumber`, else `channels` field will be dropped.
* `custom_fields` is mapped to `properties` and it will be same for track call too.
* If `custom_fields` is not provided then Rudderstack will try to make that object with extra fields, which are not present in the below list.
{% endhint %}

### Identify Mapping

The following table includes all the fields in `identify` call with their relative mapping to the Ometria fields:

| **RudderStack Field** | **Ometria Field** |
| :--- | :--- |
| `email` | `email` |
| `listingId` | `id` |
| `firstName`/`first_name`/`firstname` | `firstname` |
| `middleName`/ `middle_name` / `middlename` | `middlename`
| `lastName`/`last_name`/`lastname` | `lastname` |
| `phoneNumber` | `phone_number` |
| `collection` | `@collection` |
| `marketinOptin` | `marketin_optin` |
| `prefix` | `prefix` |
| `dateOfBirth` | `date_of_birth` |
| `countryId` | `country_id` |
| `timezone` | `timezone` |
| `timestampAcquired` | `timestamp_acquired` |
| `timestampSubscribed` | `timestamp_subscribed` |
| `timestampUnsubscribed` | `timestamp_unsubscribed` |
| `channels` | `channels` |
| `storeIds` | `store_ids` |
| `gender` | `gender` |
| `removeFromLists` | `remove_from_lists` |
| `addToLists` | `add_to_lists` |
| `custom_fields` | `properties` |
| `forceOptin` | `@force_optin` |
| `merge` | `@merge` |


## Track

The `track` call allows you to record `custom events`, with information such as `event_id`, `timestamp`, `properties` etc.

Rudderstack will try to map `identity_email` to the `email` provided in `identify` call, if not found then it will be mapped to `email` present in `track` call.
`identity_account_id` is mapped to `userId` from `identify` call. userId is `mandatory`.

A sample track call for `custom_event` is as shown below:

```javascript
rudderanalytics.track("Sample Event", {
  event_id: "sample123",
  timestamp: "2017-05-01T14:00:00Z",
  profile_id: "sample",
  custom_fields: {
    field1: "val1",
  }
});
```

{% hint style="info" %}
Note that:

* Event name must be provided in track call.
* If `custom_fields` is not provided then Rudderstack will try to make that object with extra fields if provided, else it will be left empty.
* `Timestamp` follows `ISO-8601`. If it is not in correct format, call will be dropped.
* Either `profile_id`, `email` or `identity account id` is required.
{% endhint %}

### Track Custom Event Mapping

The following table includes all the fields in `track` call for `custom_events` with their relative mapping to the Ometria fields:

| **RudderStack Field** | **Ometria Field** |
| :--- | :--- |
| `event_id` | `id` |
| `timestamp` | `timestamp` |
| `custom_fields` | `properties` |
| `profile_id` | `profile_id` |
| `email` | `identity_email` |


Track call also allows you to record `orders` with information like `order_id`, `grandtotal`, `timestamp`, `currency` etc.

Rudderstack will make `customer` object with `userId`, `email`, `firstname` and `lastname` using records from `identify` call. `userId` is mandatory field for customer object.

Supported `order` events are:
* `order completed` / `complete`/ `order complete`
* `order shipped` / `shipped`
* `order pending` / `pending`

A sample track call for `order` is as shown below:

```javascript
rudderanalytics.track("order completed", {
  order_id: "order1",
  timestamp: "2017-05-01T14:00:00Z",
  currency: "usd",
  grand_total: 1,
  field1: "val1",
  products: [
    {
      product_id: "prod123",
      quantity: 4,
      subtotal: 10,
    }
  ]
});
```

{% hint style="info" %}
Note that:

* `Currency` should follow ISO 4217. If format is not corrected, call will be dropped.
* If `custom_fields` is not provided then Rudderstack will try to make that object with extra fields if provided, else it will be left empty. In above example `field1` will be mapped inside `custom_fields`.
* The `products` field is not mandatory. However, if provided each object should contain `product_id`, `quantity` and either `subtotal` or `unit_price`. If not present then that object will be dropped. Track call will **not** be aborted.
* Rudderstack will set `status` according to the event name. For instance, if event name is `order pending` status will be set to `pending` and likewise.
{% endhint %}

### Track Orders Mapping

The following table includes all the fields in `track` call for `orders` with their relative mapping to the Ometria fields:

| **RudderStack Field** | **Ometria Field** |
| :--- | :--- |
| `order_id` | `id` |
| `timestamp` | `timestamp` |
| `grand_total` | `grand_total` |
| `subtotal` | `subtotal` |
| `marketinOptin` | `marketin_optin` |
| `discount` | `discount` |
| `shipping` | `shipping` |
| `tax` | `tax` |
| `currency` | `currency` |
| `web_id` | `web_id` |
| `ip_address` | `ip_address` |
| `timestampUnsubscribed` | `timestamp_unsubscribed` |
| `channel` | `channel` |
| `store` | `store` |
| `payment_method` | `payment_method` |
| `shipping_method` | `shipping_method` |
| `shipping_address` | `shipping_address` |
| `billing_address` | `billing_address` |
| `coupon_code` | `coupon_code` |
| **`products`** | `lineitems` |

Note that **`products`** is an array of objects. Every object in this array can contain the following fields:

| **RudderStack Field** | **Drip Field** |
| :--- | :--- |
| `product_id` | `product_id` |
| `variant_id` | `variant_id` |
| `quantity` | `quantity` |
| `sku` | `sku` |
| `unit_price` | `unit_price` |
| `quantity_refunded` | `quantity_refunded` |
| `refunded` | `refunded` |
| `subtotal` | `subtotal` |
| `tax` | `tax` |
| `total` | `total` |
| `discount` | `discount` |
| `is_on_sale` | `is_on_sale` |
| `totals` | `totals` |
| `properties` | `properties` |


## Contact Us

For any issues or questions on any of the sections covered in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
