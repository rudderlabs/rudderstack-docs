---
description: >-
  Detailed technical documentation on sending events to ProfitWell using the
  RudderStack Cloud mode.
---

# Sending Events to ProfitWell via Cloud Mode

{% hint style="info" %}
For more information on sending events via the RudderStack Cloud mode, refer to the [**RudderStack Connection Modes**](https://docs.rudderstack.com/connections/rudderstack-connection-modes) guide.
{% endhint %}

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/profitwell).
{% endhint %}

## Getting Started

To enable sending data to ProfitWell, you will first need to add it as a destination in RudderStack. Once the destination is enabled, events from our SDKs will automatically start flowing to ProfitWell.

Before configuring ProfitWell as a destination in RudderStack, make sure that the source platform is supported by ProfitWell by referring to the following table:

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| **Device mode**     | **Supported** | -             | -             |
| **Cloud mode**      | **Supported** | **Supported** | **Supported** |

Once you have confirmed that the source platform supports sending events to ProfitWell, follow the steps below:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source. From the list of destinations, select **ProfitWell**.

{% hint style="info" %}
Follow our guide on [**Adding a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

* Assign a name to the destination, and click on **Next**. You will then see the following **Connection Settings** window:

![Connection Settings for ProfitWell](https://user-images.githubusercontent.com/64877812/133475825-90fff9ed-73da-4d40-9c40-0140eb7f12d9.png)

### Connection Settings

To successfully configure ProfitWell as a Cloud Mode destination, enter the following connection settings:

* **Private API Key**: Enter your ProfitWell private API key here. To obtain the **Private API Key**, log into your ProfitWell account. Then, navigate to the **Account Settings** - **Integration** option. Here, you can get your API key under [**API Keys/Dev Kit**](https://www2.profitwell.com/app/account/integrations), as shown in the following image:

![](https://user-images.githubusercontent.com/59817155/132687515-dd2246e4-2239-4971-994d-167513fa3c96.png)

{% hint style="info" %}
To send events to ProfitWell via the Cloud Mode, you don't need to enter the **Public API Key**.
{% endhint %}

* Finally, click on **Next** to complete the setup. ProfitWell should now be configured and enabled as a destination in RudderStack.


## Identify

The `identify` call lets you create or update a subscription for a particular user.

{% hint style="info" %}
For more information on the `identify` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/identify) guide.
{% endhint %}

A sample `identify` call is as shown:

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
      phone: "+911234665544",
    },
    {
      externalId: [
        { type: "profitwellSubscriptionId", id: "pws_psqfbi9zODBB" },
        { type: "profitwellUserId", id: "pws_MS2g4ON214dU" },
      ],
    }
  );
```

{% hint style="info" %}
RudderStack passes the fields `profitwellUserId` and `profitwellSubscriptionId` as `externalId`.
{% endhint %}

{% hint style="info" %}
Note that:

* The `externalId` of type `profitwellUserId` is mapped to ProfitWell's `user_id` field. 
* The `externalId` of type `profitwellSubscriptionId` is mapped to ProfitWell's `subscription_id` field. 
{% endhint %}

### Identify Mapping

This section lists the various criteria for mapping RudderStack fields to ProfitWell fields.

The following table lists all the supported fields for **`Creating Subscriptions`** with their relative mapping to the ProfitWell fields:

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

The following table lists all the supported fields for **`Updating Subscriptions`** with their relative mapping to the ProfitWell fields:

| **RudderStack Field** | **ProfitWell Field** |
| :-------------------- | :------------------- |
| `planId`              | `plan_id`            |
| `planInterval`        | `plan_interval`      |
| `value`               | `value`              |
| `status`              | `status`             |
| `effectiveDate`       | `effective_date`     |

{% hint style="info" %}
While creating a subscription, if `effectiveDate` is not provided in the `identify` call, then RudderStack takes the date from the event call's `originalTimestamp`.
{% endhint %}

{% hint style="info" %}
For more information on using these fields, refer to the [**ProfitWell documentation**](https://profitwellapiv2.docs.apiary.io/#).
{% endhint %}

RudderStack discards the `identify` event in the following two scenarios:

* For a given `profitwellUserId`, a user account is not found in ProfitWell.
* For a given `profitWellUserId`, a `profitwellSubscriptionId` is not found.

{% hint style="info" %}
If you provide a `userId`\(mapped to `user_alias` in ProfitWell\) or a `subscriptionAlias` \(mapped to `subscription_alias`\) in the `identify` call, a new user subscription is created if it is not already present.
{% endhint %}

## FAQs

### Where do I get the API Key for ProfitWell?

To obtain your ProfitWell **Private API Key**, log into your ProfitWell dashboard. Navigate to the **Account Settings** - **Integration** option. Here, you can get your API key under [**API Keys/Dev Kit**](https://www2.profitwell.com/app/account/integrations), as shown in the following image:

![](https://user-images.githubusercontent.com/59817155/132687515-dd2246e4-2239-4971-994d-167513fa3c96.png)

## Contact Us

In case of any issues while configuring or using ProfitWell with RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

