---
description: >-
  Step-by-step guide to set up Trengo as a destination in RudderStack.
---

# Trengo

[Trengo](https://trengo.com/en) is a popular business messaging and communications platform that lets you bring together all your messages via email, SMS, social media, etc. into a single central communication hub. It allows you to set up cross-platform collaborations with your team, automate conversations with your users, and deliver personalized customer experiences.

RudderStack allows you to configure Trengo as a destination to which you can send your event data.

{% hint style="success" %}
Find the open-source transformer code for this destination in our[**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/trengo).
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Trengo by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud** **mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Trengo, perform the steps below:

- From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. Then, select **Trengo** from the list of destinations.

{% hint style="info" %}
Follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for details on adding a source in the RudderStack dashboard.
{% endhint %}

- Assign a name to the destination and click on **Next**. You should then see the following screen:

![Trengo Connection Settings](../.gitbook/assets/trengo-config.png)

### Connection Settings

In the **Connection Settings**, you will see the following options:

- **API Token:** This is an unique token generated for your Trengo account. To generate this API token, you need to select **REST API** from **Apps and Integrations** under the **Settings** option in your Trengo account.

- **Channel ID:** This corresponds to the unique ID for the channel to which you want to send your data via RudderStack.

- **Channel Identifier:** Select this option depending on the type of channel you want to send your data.

- **Enable deduplication for Contacts:** By default, Rudderstack will _Deduplicate_ contacts generated from your `identify` events. You can disable this option if you want to create duplicate contacts with same identifier.

- **Map events with template:** To send `track` events to Trengo, you need to add the `event` to the _Event Name_ field. If you wish to customize the subject for the event, you can do so by adding a _template_.

{% hint style="info" %}
For a particular event the **Channel ID** can be overriden using `externalId`, For example: `(context.externalId: [{type:trengo, id:channelId}])`.
{% endhint %}

{% hint style="warning" %}
When you are using an `externalId` to override _channelId_ , make sure that the **Channel Identifier** of that specific channel matches with the **Channel Identifier** you have selected in Rudderstack dashboard.
{% endhint %}


### Effects on the Identify events

Disabling the option **Enable deduplication for Contacts** will have the following consequences on the `identify` events:

- Rudderstack will not update exising contacts with the same `identifier`.

- For the channel identifier **phone**:

  - If a contact is present with the same `phone`number as an identifier, it will be duplicated.

  - If you want to store multiple contacts for a particular `phone` number as an identifier for different channels (where the `channel identifiers` are **phone** too), you will need to disable the `deduplication` option from Rudderstack dashboard.


- For the channel identifier **email**:
  
  - If a contact is present with the same `email` address as an identifier, it will not be duplicated. This is a known destination behavior.

  - For creating multiple contacts with `email` address as an identifer, you need a unique email address.


## Identify

The `identify` call lets you associate a user with their actions and capture all the relevant traits about them. 

For each `identify` call, Rudderstack creates a `contact` using `email` or `phone` as an identifier (depending on the `channel identifier`) using the [Trengo Contact API](https://developers.trengo.com/reference#create-update-a-user).

If a contact is already present with same `identifier` (`email`/`phone`), Rudderstack will update the contact using the [Trengo Contact API](https://developers.trengo.com/reference#update-a-user-1).

A sample `identify` call looks like the following:

```javascript
rudderanalytics.identify("userid", {
  firstName: "Name",
  lastName: "Surname",
  email: "name@website.com",
});
```

{% hint style="info" %}
**Note:** If you already have Trengo `contactId` you can pass it in `externalId`, `(example context.externalId: [{type:trengoContactId, id:channelId}])`, in that case will we avoid searching for `contactId` using `identifier(email/phone)` before updating.
{% endhint %}

## Track

The `track` call allows you to capture any action that the user might perform along with the properties associated with that action. Each action is considered to be an event. For every `track` event, Rudderstack creates a `ticket` in Trengo using the [Trengo Ticket API](https://developers.trengo.com/reference#create-a-ticket).

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Product Purchased", {
  Clicked_Rush_delivery_Button: true,
  total_value: 2000,
  revenue: 2000,
});
```

## Mapping Track Events with Trengo's Event Template

The following table demonstrates the use of the **Map events with template:** option for your `track` events:

| **Event Name**      | **Event Template**                   | **Subject Generated**              |
| :------------------ | :----------------------------------- | :--------------------------------- |
| `Product Purchased` | `{{ event }} from our store`         | `Product Purchased from our store` |
| `Added to cart`     | `Product was of value:{{ revenue }}` | `Product was of value:2000`        |
| `Checked Out`       | `Cart was checked out`               | `Cart was checked out`             |

A few things to note while using this option:

- For particular **Event Name**, the **Event Template** is optional. If left blank, the subject will not generated using the Template. (Note: Subjects are generally used for creating tickets in the channels where the channel identifier is `email`.)

- For `track` calls, the `contact identifier` is mandatory. For example, for tracking events to an `email` channel, `email` is a mandatory event field. Similarly, for tracking events to a `phone` channel, `phone` is a mandatory event field.


{% hint style="warning" %}
For lodging your `track` events to Trengo, it is mandatory to add the `event` name in **Event Name** field. If the **Event Name** is not present, the particular `track` events will not flow through.
{% endhint %}

## Contact Us
If you come across any issues while configuring Trengo with RudderStack, please feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you.
