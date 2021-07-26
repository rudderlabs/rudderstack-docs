---
description: Step-by-step guide to set up Delighted as a destination in RudderStack.
---

# Delighted

[**Delighted**](https://app.delighted.com/) is a customer feedback platform - providing a range of ways for you and your team to gather, view, and act on feedback from your customers.

RudderStack supports integration with Delighted and allows you to send customer data to Delighted seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/delighted)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Delighted by referring to the table below:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| **Device mode**     | -             | -             | -             |
| **Cloud** **mode**  | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the source supports sending events to Delighted, follow these steps:

* From your [**RudderStack dashboard**](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Delighted**.

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Delighted Connection Settings](../../.gitbook/assets/Delighted.png)

* Provide your Delighted API Key.

{% hint style="info" %}
To get your API key. Click [here](https://app.delighted.com/docs/api).
{% endhint %}

* By default channel is set to **Email**. You can also change it to **SMS**.

* You can also set the **Delay** value(in seconds) here. By default it is set to **0**.

* To make a **Track call**, you need to mention the **Event Names** for which track call will be triggered.

{% hint style="warning" %}
If the **dashboard** doesn't contain the **Event Name** with which **Track call** is triggered, it will throw an **error**.
{% endhint %}

* Click on **Next**. Delighted will now be enabled as a destination in Rudderstack.

## Identify

The `identify` call lets you to add user to your **People** [List](https://app.delighted.com/people). If the user already exists then it will update it with current field if any.
The information includes `userId` as well as other additional information related to user like name,phone number/email, channel and last sent at.

The `userId` provided during the call must match the `Channel type`. `Channel Type` can be either set from Rudderstack Dashboard or you can send it from the call with parameter `DelightedChannelType`. Call will have higher precedence.

You can provide `email/phone number`. Both are not required at the same time, since one of the value will be set from `userId`, so either can be provided at once.
`Last sent at` value can also be sent with the call.

{% hint style="info" %}
`Last sent at` (in Unix timestamp) is used to manually set the time a person was most recently sent a survey. This value will be used in `Survey throttling` system.`Survey throttling` is by default set to 1 month on your project. People added via the API who have already been sent a survey within this time period will not be sent another survey.
{% endhint %}

A sample `identify` call is as shown below:

```javascript
rudderanalytics.identify("sample@user.com", {
  name: "User",
  last_sent_at: "1621496889",
  phone_number: "+17132746524"},
  { externalId: [
    {
        type: "delightedChannelType",
        id: "sms"
    } 
  ]}
});
```

In the above example, since the `userId` is already an email, you can proivde `phone_number` in addition. Also, the `delightedChannelType` will override the `Channel Type` from the dashboard.

{% hint style="info" %}
Except `userId` all other fields are optional.
{% endhint %}

## Track

The `track` call lets you send the survey to the user which is added to the **People** [List](https://app.delighted.com/people) in your account. In addition to name, phone number/email,channel, last sent at, you can also add `Custom Properties`. You can add as many properties as you need.

{% hint style="info" %}
If the `user` doesnot exist, `track` call cannot be made. First `identify` call must be made to add `user` in the `People` List.
{% endhint %}

A sample `track` call is as shown below:

```javascript
rudderanalytics.track("Test", {
  delighted_email_subject: "Custom Email Subject.",
  customProperty: "Custom Value",
  delightedChannelType: "email"
});
```

Here `Test` is the Event Name.

{% hint style="warning" %}
If the **dashboard** doesn't contain the **Event Name** with which **Track call** is triggered, it will throw **error**.
Except `Event Name` all other fields are optional.
{% endhint %}

Delighted also provides some `Custom properties` by itself. Here `delighted_email_subject` sets the email subject of the survey to `Custom Email Subject`. Though this change can be done from the delighted website too. Some other default properties provided by Delighted are as follows.
| Property | Value |
| :--- | :--- |
| `question_product_name]` | This question will be shown in the survey. |
| `delighted_intro_message` | It will be displayed in the email subject. |
| `locale` | This will determine localization (including language) of the survey experience. |

For more default properties , click [here](https://help.delighted.com/article/577-special-properties).

In the above example `customProperty` is the `Custom Property Field` that can be set by you. The `value` must be provided to these fields else it will be dropped by Delighted.

## Alias

The `alias` call allows you to update the email/phone number of the user. You need to set `previousId` as the current value and `userId` as the updated value.

{% hint style="info" %}
The `previousId` and `userId` must be of the same type. Both must be either email or phone number.
{% endhint %}

A sample `alias` call is as shown below:

```javascript
rudderanalytics.alias("new@email.com", "old@email.com");
```

## Contact Us

If you come across any issues while configuring Delighted with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
