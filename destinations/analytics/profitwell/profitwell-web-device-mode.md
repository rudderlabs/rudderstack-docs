---
description: >-
  Detailed technical documentation on sending events to ProfitWell using the
  RudderStack Web Device mode.
---

# Device Mode

RudderStack lets you send your event data to ProfitWell via the Device mode, i.e. using the native web SDK.

{% hint style="info" %}
For more information on sending events via the Device mode, refer to the [**RudderStack connection modes**](https://docs.rudderstack.com/connections/rudderstack-connection-modes) guide.
{% endhint %}

{% hint style="success" %}
**Find the open-source JavaScript SDK code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-sdk-js/tree/production/integrations/ProfitWell)**.**
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

![Connection Settings for ProfitWell](https://user-images.githubusercontent.com/64877812/133275863-5babdaa6-d45d-4e08-ab36-a61629b19e2b.png)

### Connection Settings

To successfully configure ProfitWell as a web device-mode destination, enter the following connection settings:

* **Public API Key**: Enter your ProfitWell public API key here. To obtain the **Public API Key**, log into your ProfitWell account. Then, navigate to the **Account Settings** - **Integration** option. Here, you can get your API key under [**API Keys/Dev Kit**](https://www2.profitwell.com/app/account/integrations), as shown in the following image:

![](https://user-images.githubusercontent.com/59817155/132687515-dd2246e4-2239-4971-994d-167513fa3c96.png)

* **Site Type**:  If Site Type is `Web App` then Identify call is needed to start the ProfitWell service. A `marketing` Site Type will start the Profitwell service on load and will assume that the user will be anonymous.

* **Use device-mode to send events**: Enable this option to send events via the **Device mode**.

* Finally, click on **Next** to complete the setup. ProfitWell should now be configured and enabled as a destination in RudderStack.

{% hint style="info" %}
Settings apart from stated above are for configuring ProfitWell as a cloud-mode destination.
{% endhint %}

## Identify

Identify call will start the Profitwell Service using the customer's email. If no email is provided then it will start the service with userId.

A sample `identify` call is as shown:

```javascript
  rudderanalytics.identify( "userId", {email: "sample@domain.com"});
```

For `identify` call to trigger their engagements, [**Customers**](https://www2.profitwell.com/app/customers) first needs to created within ProfitWell.

## Contact Us

In case of any issues while configuring or using ProfitWell with RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

