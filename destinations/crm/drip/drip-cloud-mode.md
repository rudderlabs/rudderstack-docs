---
description: Detailed technical documentation on sending events to Drip using the RudderStack Cloud mode.
---

# Sending Events to Drip via Cloud Mode

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/drip)**.**
{% endhint %}

## Identify

The `identify` call lets you create a new subscriber or update an already existing subscriber and their related information. This information includes the subscriber's `dripId` ,`email` , `name`,  etc.

If you provide the **Campaign ID** in the dashboard while setting up the destination, RudderStack will subscribe every user to this `campaign ID` by default. Alternatively, you can also send the information via the `identify` call, which takes a higher precedence than the campaign ID provided in the dashboard.

{% hint style="info" %}
Either the `dripId` or `email` is required for the `identify` call. If you are creating a user, then you must provide the `email`. In case of updating a user, you can provide either the assigned `dripId` or `email`.
{% endhint %}

A sample `identify` call is as shown below:

```javascript
rudderanalytics.identify(
  "user123",
  {
    email: "sampleuser@testmail.com",
    firstName: "Demo",
    lastName: "Example",
    tags: ["tag1", "tag2"],
    customFields: {
      filter1: "filterval1",
    },
  },
  {
    externalId: [
      {
        type: "dripCampaignId",
        id: "<your campaign id>",
      },
      {
        type: "dripId",
        id: "<user's drip id>",
      },
    ],
  }
);
```

### Identify Mapping

The following table includes all the fields in `identify` call with their relative mapping to the Drip fields:

| **RudderStack Field**                | **Drip Field**       |
| :----------------------------------- | :--------------------|
| `newEmail`                           | `new_email`          |
| `phone`                              | `phone`              |
| `firstName`/`first_name`/`firstname` | `first_name`         |
| `lastName`/`last_name`/`lastname`    | `last_name`          |
| `tags`                               | `tags`               |
| `removeTags`                         | `remove_tags`        |
| `status`                             | `status`             |
| `initialStatus`                      | `initial_status`     |
| `timezone`                           | `time_zone`          |
| `country`                            | `country`            |
| `city`                               | `city`               |
| `zip`                                | `zip`                |
| `euConsent`                          | `eu_consent`         |
| `euConsentMessage`                   | `eu_consent_message` |
| `ip`                                 | `ip_address`         |
| `address`                            | `address1`           |
| `address2`                           | `address2`           |
| `lifetimeValue`                      | `lifetime_value`     |
| `prospect`                           | `prospect`           |
| `baseLeadScore`                      | `base_lead_score`    |
| `customFields`                       | `custom_fields`      |

{% hint style="info" %}
Note that:

* If `customFields` is not present, RudderStack extracts all the fields apart from the ones mentioned in the table above and constructs a `customFields` object.

* If `customFields` is present **and** there are other fields apart from the ones mentioned in the table, RudderStack ignores them.
{% endhint %}

When you provide the **Campaign ID**, you can also send some extra fields with the call. 

The following table lists all the supported fields for the `campaign` call:

| **RudderStack Field** | **Drip Field**          |
| :-------------------- | :---------------------- |
| `doubleOptin`         | `double_optin`          |
| `startingEmailIndex`  | `starting_email_index`  |
| `reactivateIfRemoved` | `reactivate_if_removed` |

{% hint style="info" %}
For more information on using these fields, refer to the [**Drip documentation**](https://developer.drip.com/#subscribe-someone-to-an-email-series-campaign).
{% endhint %}

## Track

The `track` call lets you record the user events and the information associated with them, like `action`, `occurred_at`, and `custom field`. Either `id` or `email` must be provided in this call.

The **User Creation Mode** option in the RudderStack dashboard lets you create a user with their `email` if they don't already exist. If you don't want new users to be created, you can disable this option.

{% hint style="warning" %}
If the `dripId` is provided in the call, then new users will not be created even if the **User Creation Mode** option is enabled in the RudderStack dashboard.
{% endhint %}

### Special Events

You can also create or update an order if the event name belongs to either of the following special events:

* `order updated`
* `order completed`
* `order refunded`
* `order cancelled`
* `checkout started`
* `fulfilled` / `order fulfilled`

A sample `track` call is as shown below:

```javascript
rudderanalytics.track(
  "Event Name",
  {
    email: "sampleuser@testmail.com",
    affiliation: "custom_store",
    order_id: "123456",
    products: [
      {
        name: "product_name",
        price: 10.0,
      },
    ],
  },
  {
    externalId: [
      {
        type: "dripId",
        id: "<user's drip id>",
      },
    ],
  }
);
```

### Track Fields

A `track` call can contain following fields:

| **RudderStack Field** | **Drip Field** |
| :-------------------- | :--------------|
| `prospect`            | `prospect`     |
| `customFields`        | `properties`   |
| `occurred_at`         | `occurred_at`  |

{% hint style="info" %}
Note that:

* If `customFields` is not present, RudderStack extracts all the fields apart from the ones mentioned in the table above and constructs a `customFields` object.

* If `customFields` is present **and** there are other fields apart from the ones mentioned in the table, RudderStack ignores them.
{% endhint %}

For the special events mentioned above, the following fields are also supported:

| **RudderStack Field** | **Drip Field**      |
| :-------------------- | :-------------------|
| `affiliation`         | `provider`          |
| `initial_status`      | `initial_status`    |
| `order_id`            | `order_id`          |
| `order_public_id`     | `order_public_id`   |
| `total`               | `grand_total`       |
| `discount`            | `discounts`         |
| `tax`                 | `total_taxes`       |
| `total_fees`          | `total_fees`        |
| `shipping`            | `total_shipping`    |
| `refund_amount`       | `refund_amount`     |
| `currency`            | `currency`          |
| `order_url`           | `order_url`         |
| `billing_address`     | `billing_address`   |
| `shipping_address`    | `shipping_address`  |
| `occurred_at`         | `occurred_at`       |
| `**products**`        | `items`             |

Note that the last field in the above list - `**products**` - is an array of objects. Every object in this array can contain the following fields:

| **RudderStack Field** | **Drip Field**        |
| :-------------------- | :-------------------- |
| `product_id`          | `product_id`          |
| `sku`                 | `sku`                 |
| `name`                | `name`                |
| `product_variant_id`  | `product_variant_id`  |
| `brand`               | `brand`               |
| `price`               | `price`               |
| `quantity`            | `quantity`            |
| `categories`          | `categories`          |
| `discounts`           | `discounts`           |
| `taxes`               | `taxes`               |
| `fees`                | `fees`                |
| `shipping`            | `shipping`            |
| `total`               | `total`               |
| `url`                 | `product_url`         |
| `image_url`           | `image_url`           |

{% hint style="info" %}
The `products` field is not mandatory. However, if provided, each object must contain the `name` and `price` field, otherwise it will be dropped. Note that the  `track` call will still not be aborted in such a scenario.
{% endhint %}

## Contact Us

For any issues or questions on any of the sections covered in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
