---
description: Step-by-step guide to send event data from RudderStack to Variance.
---

# Variance

The [**Variance**](https://www.variance.com) customer growth platform makes your product, marketing, and sales data operational. It lets you to create, access, and manage intent-based signals across all stages of your customers' journey.

RudderStack lets you add Variance as a destination to which you can seamlessly send your event data.

## Getting Started <a href="getting-started" id="getting-started"></a>

To enable sending data to Variance, you will first need to add it as a destination in the RudderStack dashboard. Once the destination is configured and enabled, events from RudderStack will start flowing to Variance.

Before configuring Variance in RudderStack, verify if the source platform supports sending events to RudderStack by referring to the table below:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| ------------------- | ------------- | ------------- | ------------- |
| **Device Mode**     | **-**         | **-**         | **-**         |
| **Cloud Mode**      | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the source platform is supported by Variance, perform the steps below:

* Configure the data source in RudderStack.

{% hint style="info" %}
Follow the guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more details on adding a source in RudderStack.
{% endhint %}

* From the list of destinations, select **Variance**.\

* Then, assign a name to the destination and click on **Next**.\

* Select the data source and click on **Next**. You will then see the following **Connection Settings** page:\


![](<../../.gitbook/assets/image (114).png>)

* Enter the Variance **Webhook URL** and **Authorization Header Value** to configure the destination.\

* To transform your event data before sending it to this destination, click on **Create New Transformation**. Otherwise, click on **Next**.

That's it! Your Variance destination is now configured and enabled.

## Identify

The `identify` call lets you associate a visiting user to their actions as well as record their traits.

{% hint style="info" %}
As a best practice, make sure that the `identify` call is made at the start of every session or page load for logged-in users, if possible. This will ensure all their latest traits are captured.
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

## Account Mapping

Variance offers a few different ways of mapping your users to accounts/companies. Here's an overview:

### **Group**

If you already use the `group` call to indicate the Account, then you don’t need to fill in anything. Variance will extract the Account automatically, and you’re good to go.

### **Identify** **with Custom Traits** (ex. `company.id` and `company.name`): 

Choose this option if you include some information about the Account/Company/Organization as a trait in each `identify` call. When you choose this option you'll need to let Variance know the name of the trait you use. 

For instance, if you pass something like `{'company':{'id':1,'name':'Awesome Inc.'}}` , you could add `company.id` as the **Account ID** trait and `company.name` as the **Account Name** trait.

### Identify Email Trait Domain Extraction (Fallback) 

If you don't use either of the methods above, Variance can extract the domain from the `email` trait and use that as the Account name.

{% hint style="info" %}
If none of these methods work for your setup, [**reach out to Variance support**](mailto:support@variance.com)** **to discuss alternatives.
{% endhint %}

## FAQs

### How do I get the Variance Webhook URL/Authorization Header Value?

Head to the [**Integrations - Rudderstack**](https://app.variance.com/integrations) page in Variance and then add a Rudderstack Connection. For more information check the [**Variance docs for RudderStack**.](https://www.variance.com/docs/rudderstack)

## Contact Us

If you come across any issues while configuring or using Variance with RudderStack, feel free to [**contact the Variance team **](mailto:support@variance.com)** **or [**get in touch**](mailto:%20docs@rudderstack.com)** **with us. You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack)** **channel.
