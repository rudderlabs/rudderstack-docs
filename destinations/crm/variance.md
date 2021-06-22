---
description: Step-by-step guide to send event data from RudderStack to Variance.
---

# Variance

The [Variance](https://www.variance.com) Customer Growth Platform hooks into your customer data and makes it easy for anyone to create, access, and manage intent-based signals across all stages of a customer’s journey.

## Getting Started <a id="getting-started"></a>

To enable sending data to Variance, you will first need to add it as a destination in the RudderStack dashboard. Once the destination is configured and enabled, events from RudderStack will start flowing to Variance.

Before configuring Variance in RudderStack, verify if the source platform supports sending events to RudderStack by referring to the table below:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| **Device Mode**     | **-**         | **-**         | **-**         |
| **Cloud Mode**      | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Then, perform the steps below:

- Configure the data source in RudderStack.

{% hint style="info" %}
Follow the guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more details.
{% endhint %}

- From the list of destinations, select **Variance**.

<!--TODO-->

- Then, assign a name to the destination and click on **Next**.

<!--TODO-->

- Select the data source and click on **Next**.

<!--TODO-->

- Enter the Variance "Webhook URL" and "Authorization Header Value" to configure the destination, as shown:

<!--TODO-->

- To transform your event data before sending it to this destination, click on **Create New Transformation**. Otherwise, click on **Next**.

<!--TODO-->

- Your Variance destination is now configured and enabled.

<!--TODO-->

## Identify

The `identify` call lets you associate a visiting user to their actions as well as record their traits.

{% hint style="info" %}
As a best practice, please make sure that the `identify` call is made at the start of every session or page load for logged-in users, if possible. This will ensure all the latest traits are captured.
{% endhint %}

A sample `identify` call is as shown:

```javascript
rudderanalytics.identify("userid", {
  name: "Name Surname",
  email: "name@website.com",
  company: {
    id: "1",
    name: "Website",
  },
});
```

{% hint style="info" %}
For more information on the `identify` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Track

The `track` call allows you to record the customer events, i.e. the actions that they perform, along with their associated properties.

A sample `track` call is as shown:

```javascript
rudderanalytics.track("Event Name", {
  plan: "plan value",
});
```

{% hint style="info" %}
For more information on the `track` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Page

The `page` call lets you record your website's page views, with any additional relevant information about the viewed page.

A sample `page` call is as shown:

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
For more information on the `page` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Group

The `group` call lets you associate a particular identified user with a group, such as a company, organization, or an account. It also lets you record the custom traits associated with that group, such as the name of the group, number of employees, etc.

A sample `group` call is as shown:

```javascript
rudderanalytics.group("sample-group-id", {
  name: "Example Company",
  employees: 1000,
  industry: "Software",
});
```

{% hint style="info" %}
For more information on the `group` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Alias

Variance does not support Alias at this time.

{% hint style="info" %}
For more information on the `alias` call, refer to the [**RudderStack HTTP API Specification**](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification) guide.
{% endhint %}

## Account Mapping

Variance offers a few different ways of mapping your users to accounts/companies. Here's an overview:

1. Group: if you already use the Group call to indicate the Account, then you don’t need to fill in anything. We will extract the Account automatically, and you’re good to go.
1. Identify with custom traits (ex. `company.id` and `company.name`): choose this option if you include some information about the Account/Company/Organization as a trait in each Identify call. When you choose this option you'll need to let us know the name of the trait you use. For instance, if you do something like `{'company':{'id':1,'name':'Awesome Inc.'}}` you could add `company.id` as the Account ID trait and `company.name` as the Account Name trait.
1. (Fallback) Identify email trait domain extraction: if you don't use either of the methods above, we can extract the domain from the `email` trait and use that as the Account name.

Note: if none of these work for your setup, [reach out to Variance support](mailto:support@variance.com) and we can discuss alternatives.

## FAQs

### How do I get the Variance Webhook URL/Authorization Header Value?

Head to the [Integrations > Rudderstack](https://app.variance.com/integrations) page in Variance then add a Rudderstack Connection. For more information visit our [Docs @Variance: RudderStack](https://www.variance.com/docs/rudderstack).

## Contact Us

If you come across any issues while configuring or using Variance with RudderStack, feel free to [contact us](mailto:support@variance.com). We are happy to help.
