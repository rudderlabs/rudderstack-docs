---
description: Step-by-step guide to send your event data from RudderStack to Recurly.
---

# Recurly

[Recurly](https://recurly.com/) is a popular subscription management and billing platform. It offers features such as SaaS and cloud billing, recurring billing, and analytics to optimize your revenue and boost your user subscription rate.

RudderStack allows you to seamlessly configure Recurly as a destination to which you can send your event data seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/recurly)**.**
{% endhint %}

## Getting Started

To enable sending data to Recurly, you will first need to add it as a destination in the RudderStack dashboard. Once the destination is configured and enabled, events from RudderStack will start flowing to Recurly.

Before configuring Recurly as a destination, verify if the source platform supports sending events to RudderStack, by referring to the table below:

| **Connection Mode** | Web           | Mobile        | Server        |
| :------------------ | :------------ | :------------ | :------------ |
| **Device Mode**     | **-**         | **-**         | **-**         |
| **Cloud Mode**      | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Recurly, please perform the steps below:

- Add a source in RudderStack.

{% hint style="info" %}
Follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide for more information on adding a source in RudderStack.
{% endhint %}

- From the list of destinations, select **Recurly**. Assign a name for your destination and then click on **Next**.
- In the **Connection Settings** page, fill all the relevant connection settings including the **Recurly API Key**. Then, click on **Next**.

![Recurly Connection Settings in RudderStack](../../.gitbook/assets/recurly.png)

### Web Settings

- **Custom Fields Mapping** - This field lets you map any RudderStack event to a Recurly Event. To do successful mapping, make sure you have created a custom field on your Recurly dashboard. You can then map the RudderStack properties to Recurly's custom fields by listing them in this section.

{% hint style="info" %}
Note that these properties are case-sensitive and can be nested. For example, if you have created `paymentValue` and `personalMailId` in your Recurly dashboard and you want to send `rudderanalytics.track('Event', {customProperty: { customValue: 2 }, someRandomMailId: 'user@gmail.com'})`, then input these two properties `customProperty.customValue` and `someRandomMailId` under the the RudderStack field and `paymentValue` and `personalMailId` in the Recurly field.
{% endhint %}

A sample `track` event which demonstrates this is as shown below:

```javascript
rudderanalytics.track("Event", {
  customProperty: { customValue: 2 },
  someRandomMailId: "user@gmail.com",
});
```

## Identify

To create an account in Recurly, you need to call the `identify` method.

{% hint style="info" %}
For information on the `identify` call, refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

A sample `identify` call is as shown below:

```javascript
rudderanalytics.identify("name123", {
  name: "name1",
  email: "google@gmail.com",
  plan: "Enterprise",
  phone: "123456789",
  company: {
    id: "abc123",
    name: "Companyname",
  },
  address: {
    city: "kolkata",
    country: "India",
    postalCode: 789223,
    state: "WB",
    street: "",
  },
});
```

{% hint style="info" %}

- When you make an `identify` call with the new `userId`, RudderStack creates a new account.
- When you make an `identify` call with an existing `userId`, RudderStack will update the existing account with the new traits.
  {% endhint %}

RudderStack maps the following properties to Recurly when you make an `identify` call:

| **Standard RudderStack Field** | **Standard Recurly Field** |
| :----------------------------- | :------------------------- |
| `userId`                       | `code`                     |
| `email`                        | `email`                    |
| `firstName`                    | `first_name`               |
| `lastName`                     | `last_name`                |
| `context.locale`               | `preferred_locale`         |
| `traits.company.name`          | `company`                  |
| `context.campaign.name`        | `acquisition.campaign`     |
| `phone`                        | `address.phone`            |
| `traits.address.street`        | `address.street1`          |
| `traits.address.city`          | `address.city`             |
| `traits.address.state`         | `address.region`           |
| `traits.address.postalCode`    | `address.postal_code`      |
| `traits.address.country`       | `address.country`          |

## Track

The `track` call to Recurly is supported only for the following two ECommerce events.

- Checkout Started
- Order Completed

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Order Completed", {
  currency: "INR",
  products: [
    {
      product_id: "product-mixedfruit-jam",
      sku: "sku-1",
      category: "Food",
      name: "Food/Drink",
      price: 10.0,
      currency: "INR",
    },
    {
      product_id: "cash123",
      sku: "G-32",
      currency: "USD",
      name: "Testing-5-Clash Of Clan",
      price: 1999,
      category: "Games",
    },
  ],
});
```

Note that:

- To make a successful `track` call, an account must be present in Recurly. The RudderStack `track` calls get mapped to `line_items` for that account in Recurly.
- All the `products` that you send in the payload are associated with `items` in Recurly.
- If a product is not present in the Recurly dashboard, RudderStack creates new `items` for that product and associates it with `line_items`.

RudderStack maps the following properties to Recurly during a `track` call:

| Standard RudderStack Field | Standard Recurly Field   |
| :------------------------- | :----------------------- |
| `products.$.name`          | `name`                   |
| `products.$.product_id`    | `code`                   |
| `products.$.currency`      | `currencies.currency`    |
| `products.$.price`         | `currencies.unit_amount` |
| `products.$.sku`           | `external_sku`           |
| `category`                 | `description`            |
| `properties.currency`      | `currency`               |

{% hint style="warning" %}
Recurly only allows a string with numbers, lowercase letters, dashes, pluses, and underscores when mapping `product_id` to `code`.
{% endhint %}

## FAQs

### **How do you get the Recurly API Key?**

- Login to the Recurly dashboard.
- Go to the **Integrations** tab and then click on the **API Credentials** on the left sidebar.
- You will find your API key listed as **Private API Key**.

### **How do you create custom fields in Recurly?**

To create custom fields in Recurly:

- Login to the Recurly dashboard.
- Go to the **Configuration** tab and then click on the **Custom Fields** on the left sidebar.
- Click on **Create Custom Fields** on top left.
- You can add the name of the custom field in **API FIELD NAME**. Select **RECURLY OBJECT** as Account and **ADMIN CONSOLE FIELD NAME** as the name to appear in the console.

For more information on custom fields in Recurly, refer to their [documentation](https://docs.recurly.com/docs/custom-fields).

## Contact Us

If you come across any issues while configuring Recurly with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.
