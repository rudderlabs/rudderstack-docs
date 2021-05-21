---
description: >-
  Step-by-step guide to set up Trengo as a destination in RudderStack
---

# Trengo

[Trengo](https://trengo.com/en) is a popular Help Desk software which improves team efficiency by leveraging all communication channels in once collaborative inbox. You can receive messages from Email, SMS, WhatsApp, Facebook Messenger, and many more into a single central communication hub.

RudderStack allows you to seamlessly configure Trengo as a destination to which you can send your event data easily.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/trengo)**.**
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

- From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select Trengo.

{% hint style="info" %}
Follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

- Give a name to the destination and click on **Next**. You should then see the following screen:

![Trengo Connection Settings](../.gitbook/assets/trengo-config.png)

## Settings

- **API Token:** This is an unique `API Token` generated for your trengo account. To generate `API token` you need to select Resr API from **Apps and Integrations** under **Settings**.
- **Channel Id:** It is an unique `id` for the channel for which you want to send your data to.
- **Channel Identifier:** Depending on the type of channel you want to send your data you need to select the `channel identifier`.
- **Enable deduplication for Contacts:** By default Rudderstack will _Deduplicate_ contacts generated from your identify events. You can disable this option if you want to create duplicate contacts with same identifier.
- **Map events with template:** To send `track` events to Trengo you need to add the `event` to the _Event Name_ field. If you wish to customize the subject for the event you can do so by adding _template_.

{% hint style="info" %}
For a particular event the **Channel Id** can be overriden using `externalId`, `(example context.externalId: [{type:trengoChannelId, id:channelId}])`

**Caution**: When you are using `externalId` to override _channelId_ be mindful that **channel identifier** of that specific channel matches with the **Channel Identifier** selected in Rudderstack Dashboard

{% endhint %}

{% hint style="warning" %}
**Effects Identify events**

Disabling the option **Enable deduplication for Contacts** consequences:

- If the `deduplication` option is disabled Rudderstack will not update exising contact with same `identifier`

- Channel identifier: **phone**

  - For _identify_ events even if `contact` is present with same _phone_ number as identifier it will be duplucated.

  - If you want to store multiple `contacts` for particular _phone_ number as identifier, for different _channels_ (where the `channel identifiers` are phone) you need to disable `deduplication` option from Rudderstack dashboard

- Channel identifier: **email**

  - For _identify_ events even if `contact` is present with same _email_ address as identifier it will not be duplucated. (_This is a destination behaviour_)

  - For creating multiple contacts with _email_ address as identifer you need unique email address to do so.

{% endhint %}

## Identify

The `identify` call lets you associate a user with their actions and capture all the relevant traits about them. For each `identify` call Rudderstack creates a `contact` using `email` or `phone` as identifier (depending on `channel identifier`) using [Trengo Contact API](https://developers.trengo.com/reference#create-update-a-user)

If a contact is already present with same `identifier` (`email`/`phone`) Rudderstack will update the contact using [Trengo Contact API](https://developers.trengo.com/reference#update-a-user-1)

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

The `track` call allows you to capture any action that the user might perform, along with the properties associated with that action. Each action is considered to be an event. For every `track` event Rudderstack creates a `ticket` in Trengo using [Trengo Ticket API](https://developers.trengo.com/reference#create-a-ticket)

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Product Purchased", {
  Clicked_Rush_delivery_Button: true,
  total_value: 2000,
  revenue: 2000,
});
```

{% hint style="info" %}
Using **Map events with template:** for `track` events

| **Event Name**      | **Event Template**                   | **Subject Generated**              |
| :------------------ | :----------------------------------- | :--------------------------------- |
| `Product Purchased` | `{{ event }} from our store`         | `Product Purchased from our store` |
| `Added to cart`     | `Product was of value:{{ revenue }}` | `Product was of value:2000`        |
| `Checked Out`       | `Cart was checked out`               | `Cart was checked out`             |

**Note:** For particular Event Name, Event Template is optional, if left blank subject will not generated using Template. (_Subjects are generally used for creating tickets in channels where channel identifier is `email`_)

**Note:** For `track` calls the `contact identifier` is mandatory. For example for `tracking` events to an `email` channel `email` is a mandatory field in the event, similarly for `tracking` events to a `phone` type
channel `phone` is a mandatory field in the event.

**Caution:** For lodging your `track` events to trengo it is mandatory to add the `event` name in `Event Name` field. If the `event` name is not present, those particular `track` events will not flow through.

{% endhint %}

## Contact Us

If you come across any issues while configuring Trengo with RudderStack, please feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
