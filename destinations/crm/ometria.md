---
description: Step-by-step guide to set up Ometria as a destination in RudderStack.
---

# Ometria

[**Ometria**](https://ometria.com/) is a customer data and marketing platform that helps retailers increase CRM revenue by sending personalized marketing messages throughout the customer journey.

RudderStack supports Ometria as a destination to which you can seamlessly send your customer data.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/ometria)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, verify if the source platform is supported by Ometria by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud** **mode** | **Supported** | **Supported** | **Supported** |

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

* You can choose **Marketing Optin** status from the drop down list. By default it is set to **Explicitly Opted Out**.

{% hint style="info" %}
You can additionally pass this value in `identify` call as shown in example. Value sent via call will have `higher` priority.
{% endhint %}

* In SMS channel settings you can set **Allow marketing** to `true` or `false`. This implies whether contact is opted in or out for SMS marketing. By default it is set to **false**.

* You can also set **Allow Transactional** to `true` or `false`. It implies whether contact is opted in or out for transactional SMS. By default it is set to **false**.

{% hint style="info" %}
You can additionally pass **Allow marketing** and **Allow Transactional** in `identify` call as shown in example. Value sent via call will have `higher` priority.
{% endhint %}

* click on **Next**. Ometria will now be enabled as a destination in Rudderstack.

## Identify

The `identify` call lets you add a new contact or update the already existing contact.

`listingId` and `email` are required for `identify` call. You can set value of `Marketing Optin`, `Allow Marketing` and `Allow Transactional` from Rudderstack dashboard. You can also send these values using integrations object in payload which will have higher precedence.

The sms channel fields `dt_updated_marketing` and `dt_updated_transactional` can also be passed using the integrations object.


{% hint style="info" %}
`listingId` is id specific to a contact in a particular `collection`. If `listingId` is sent inside `integrations` object as shown below, it will have higher precedence than the one in traits.
{% endhint %}
                                                                        

A sample `identify` call is as shown below:

```javascript
rudderanalytics.identify(
  "userId",
  {
    listingId: "listingId123",
    email: "sampleuser@testmail.com",
    firstName: "Demo",
    lastName: "Example",
    phoneNumber: "+447812122136",
    custom_fields: {
      field1: "val1",
    }
  },
  {
    integrations: {
      Ometria: {
        marketingOptin: "EXPLICITLY_OPTEDIN",
        allow_marketing: "true",
        allow_transactional: "true",
      }
    }
  }
);
```

{% hint style="info" %}
Note that:

* `phoneNumber` must follow E.164 format, else it will be set to `null`.
* `custom_fields` is mapped to `properties` and it will be same for track call too.
* If `custom_fields` is not provided then Rudderstack will try to make that object with extra fields, which are not present in the below mapping list.
  {% endhint %}
* Inside integration object you can additionally send two timestamps `dt_updated_marketing` and `dt_updated_transactional`.

### Identify Mapping

The following table includes all the fields in `identify` call with their relative mapping to the Ometria fields:

| **RudderStack Field**                      | **Ometria Field**        |
| :----------------------------------------- | :----------------------- |
| `userId / anonymousId`                     | `customer_id`            |
| `email`                                    | `email`                  |
| `listingId`                                | `id`                     |
| `firstName`/`first_name`/`firstname`       | `firstname`              |
| `middleName`/ `middle_name` / `middlename` | `middlename`             |
| `lastName`/`last_name`/`lastname`          | `lastname`               |
| `phoneNumber`                              | `phone_number`           |
| `collection`                               | `@collection`            |
| `prefix`                                   | `prefix`                 |
| `dateOfBirth`                              | `date_of_birth`          |
| `countryId`                                | `country_id`             |
| `timezone`                                 | `timezone`               |
| `timestampAcquired`                        | `timestamp_acquired`     |
| `timestampSubscribed`                      | `timestamp_subscribed`   |
| `timestampUnsubscribed`                    | `timestamp_unsubscribed` |
| `storeIds`                                 | `store_ids`              |
| `gender`                                   | `gender`                 |
| `removeFromLists`                          | `remove_from_lists`      |
| `addToLists`                               | `add_to_lists`           |
| `custom_fields`                            | `properties`             |
| `forceOptin`                               | `@force_optin`           |
| `merge`                                    | `@merge`                 |

{% hint style="info" %}
In addition to above fields, name can be sent using the `name` field. If it consists of two words `firstname` and `lastname` will be set.
{% endhint %}

## Track

The `track` call allows you to record `custom events`, with information such as `event_id`, `timestamp`, `properties` etc.

Rudderstack will try to map `identity_email` to the `email` provided in `identify` call, if not found then it will be mapped to `email` present in `track` call.
`identity_account_id` is mapped to `userId` from `identify` call. `userId` and `email` is **mandatory**.

A sample track call for `custom_event` is as shown below:

```javascript
rudderanalytics.track("Sample Event", {
  event_id: "sample123",
  timestamp: "2017-05-01T14:00:00Z",
  profile_id: "sample",
  custom_fields: {
    field1: "val1",
  },
});
```

{% hint style="info" %}
Note that:

* Event name must be provided in track call.
* If `custom_fields` is not provided then Rudderstack will try to make that object with extra fields if provided, else it will be left empty.
* `Timestamp` follows `ISO-8601`. If it is not in correct format, call will be dropped.
  {% endhint %}

### Track

Track allows you to send custom events to Ometria. Ecommerce Events are also supported. For RudderStack ecommerce events, events are sent using the Ometria Order Object.

### Ometria Custom Event

The following table includes all the fields in `track` call for `custom_events` with their relative mapping to the Ometria fields:

| **RudderStack Field** | **Ometria Field**      |
| :-------------------- | :----------------      |
| `event_id`            | `id`                   |
| `timestamp`           | `timestamp`            |
| `custom_fields`       | `properties`           |
| `profile_id`          | `profile_id`           |
| `email`               | `identity_email`       |
| `userId / anonymousId`| `identity_account_id`  |

Track call also allows you to record `orders` with information like `order_id`, `grandtotal`, `timestamp`, `currency` etc.

Rudderstack will make `customer` object with `userId`, `email`, `firstname` and `lastname` using records from `identify` call. `userId` and `email` are mandatory fields for customer object.

Supported `order` Ecomm events are:

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
      variant_options:[
        {
          type: "size",
          id: "newid",
          label: "5"
        }
      ]
    }
  ]
});
```

{% hint style="info" %}
Note that:

* `Currency` should follow ISO 4217. If format is not corrected, call will be **dropped**.
* If `custom_fields` is not provided then Rudderstack will try to make that object with extra fields if provided, else it will be left empty. In above example `field1` will be mapped inside `custom_fields`.
* The `products` field is not mandatory. However, if provided each object should contain `product_id`, `quantity` and either `subtotal` or `unit_price`. If not present then that object will be dropped. Track call will **not** be aborted.
* Rudderstack will set `status` according to the event name. For instance, if event name is `order pending` status will be set to `pending` and likewise.
* The field `is_valid` is always set to true.
  {% endhint %}

### Track Orders Mapping

The following table includes all the fields in `track` call for `orders` with their relative mapping to the Ometria fields:

| **RudderStack Field**   | **Ometria Field**        |
| :---------------------- | :----------------------- |
| `order_id`              | `id`                     |
| `timestamp`             | `timestamp`              |
| `grand_total`           | `grand_total`            |
| `subtotal`              | `subtotal`               |
| `marketinOptin`         | `marketin_optin`         |
| `discount`              | `discount`               |
| `shipping`              | `shipping`               |
| `tax`                   | `tax`                    |
| `currency`              | `currency`               |
| `web_id`                | `web_id`                 |
| `ip_address`            | `ip_address`             |
| `timestampUnsubscribed` | `timestamp_unsubscribed` |
| `channel`               | `channel`                |
| `store`                 | `store`                  |
| `payment_method`        | `payment_method`         |
| `shipping_method`       | `shipping_method`        |
| `shipping_address`      | `shipping_address`       |
| `billing_address`       | `billing_address`        |
| `coupon_code`           | `coupon_code`            |
| **`products`**          | `lineitems`              |

{% hint style="info" %}
`shipping_address` and `billing_address` should be an `object`, else it will be dropped.

Note that **`products`** is an array of objects. Every object in this array can contain the following fields:

| **RudderStack Field** | **Ometria Field**   |
| :--- | :--- |
| `product_id`          | `product_id`        |
| `variant_id`          | `variant_id`        |
| `quantity`            | `quantity`          |
| `sku`                 | `sku`               |
| `unit_price`          | `unit_price`        |
| `quantity_refunded`   | `quantity_refunded` |
| `refunded`            | `refunded`          |
| `subtotal`            | `subtotal`          |
| `tax`                 | `tax`               |
| `total`               | `total`             |
| `discount`            | `discount`          |
| `is_on_sale`          | `is_on_sale`        |
| `totals`              | `totals`            |
| `properties`          | `properties`        |

## Contact Us

For any issues or questions on any of the sections covered in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
