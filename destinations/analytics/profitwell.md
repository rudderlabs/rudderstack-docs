---
description: Step-by-step guide to send event data from RudderStack to ProfitWell
---

# ProfitWell

[**ProfitWell**](https://www.profitwell.com/) provides users with all their financial and subscription metrics in one place.

RudderStack allows you to seamlessly configure ProfitWell as a destination to which you can send your event data seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/profitwell)**.**
{% endhint %}

## Getting Started

To enable sending data to ProfitWell, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from our SDKs will start to flow to ProfitWell.

Before configuring ProfitWell as a destination in RudderStack, please make sure that the source platform is supported by ProfitWell. You can refer to the following table to do so:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| **Device mode**     | -             | -             | -             |
| **Cloud mode**      | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that ProfitWell supports the source type, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderstack.com/), add the source and select **ProfitWell** as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to your destination, and then click on **Next**. You should see the following screen:

![Connection Settings for ProfitWell in RudderStack](../../.gitbook/assets/Profitwell-1.png)

* Please enter the **Private API Key** in the **Connection Settings**.

* Once you have finalized the settings, click on **Next** to complete the configuration and add ProfitWell as a destination in RudderStack.

## Identify

The `identify` call lets you create or update a subscription for a user.

A sample `identify` call is as shown below:

```javascript
  rudderanalytics.identify(
    "user0001",
    {
      planId: "Starter",
      email: "axel@testmail.com",
      planInterval: "month",
      effectiveDate: 1630645519,
      planCurrency: "USD",
      subscriptionAlias: "starter_axel",
      value: "2000",
      name: "Axel Rose",
      age: 25,
      phone: "+918899665544",
    },
    {
      externalId: [
        { type: "profitwellSubscriptionId", id: "pws_psqfbi9zODBB" },
        { type: "profitwellUserId", id: "pws_MS2g4ON214dU" },
      ],
    }
  );
```

### Identify Mapping

{% hint style="info" %}
`externalId` of type `profitwellUserId` is mapped to `user_id` of ProfitWell Field. Similarly, `externalId` of type `profitwellSubscriptionId` is mapped to `subscription_id` of ProfitWell Field. While creating subscription if `effectiveDate` is not given then it is taken from `originalTimestamp`.
{% endhint %}

The following table lists all the supported fields for `Creating Subscriptions` with their relative mapping to the ProfitWell fields:

| **RudderStack Field** | **ProfitWell Field** |
| :-------------------- | :------------------- |
| `userId`              | `user_alias`         |
| `subscriptionAlias`   | `subscription_alias` |
| `email`               | `email`              |
| `planId`              | `plan_id`            |
| `planInterval`        | `plan_interval`      |
| `planCurrency`        | `plan_currency`      |
| `status`              | `status`             |
| `value`               | `value`              |
| `effectiveDate`       | `effective_date`     |

The following table lists all the supported fields for `Updating Subscriptions` with their relative mapping to the ProfitWell fields:

| **RudderStack Field** | **Drip Field**   |
| :-------------------- | :--------------- |
| `planId`              | `plan_id`        |
| `planInterval`        | `plan_interval`  |
| `value`               | `value`          |
| `status`              | `status`         |
| `effectiveDate`       | `effective_date` |

{% hint style="info" %}
For more information on using these fields, refer to the [**ProfitWell documentation**](https://profitwellapiv2.docs.apiary.io/#).
{% endhint %}

## FAQs

### Where do I get the API Key for ProfitWell?

You can obtain the ProfitWell Private API Key by logging into your ProfitWell account, and navigating to the **Account Settings** -> **Integration**, under [**API Keys/Dev Kit**](https://www2.profitwell.com/app/account/integrations) you can get you API Keys. Please refer to the following screenshot for more details:

![ProfitWell API Key](../../.gitbook/assets/profitwell-2.png)

## Contact Us

In case of any issues while configuring or using ProfitWell with RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
