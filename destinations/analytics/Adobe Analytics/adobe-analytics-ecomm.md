---
description: >-
  Detailed technical documentation on the supported E-commerce events for the Adobe Analytics destination.
---

# E-commerce Events

RudderStack broadly classifies the E-commerce events (Merchandising) in the following manner:

## Product Viewed

- Adobe Event Name: `prodView`

- RudderStack Events: `Product Viewed`, `Product List Viewed`

- Properties used:

| RudderStack property| Adobe Property | Default Value |
| :--- | :--- | :--- |
| currency | currencyCode | "USD" |


## Product Added

- Adobe Event Name: `scAdd`

- RudderStack Event: `Product Added`

- Properties used:

| RudderStack property| Adobe Property | Default Value |
| :--- | :--- | :--- |
| currency | currencyCode | "USD" |


## Product Removed

- Adobe Event Name: `scRemove`

- RudderStack Event: `Product Removed`

- Properties used:

| RudderStack property| Adobe Property | Default Value |
| :--- | :--- | :--- |
| currency | currencyCode | "USD" |


## Order Completed

- Adobe Event Name: `purchase`

- Rudder Events: `Order Completed`

- Properties used:

| RudderStack property| Adobe Property |
| :--- | :--- |
| currency | currencyCode. Default "USD" |
| purchaseId | purchaseID |
| transactionId | transactionID |
| order_id | purchaseID/transactionID (if purchaseId or transactionId is not present) |


## Cart Viewed

- Adobe Event Name: `scView`

- Rudder Events: `Cart Viewed`

- Properties used:

| RudderStack property| Adobe Property | Default Value |
| :--- | :--- | :--- |
| currency | currencyCode | "USD" |


## Checkout Started

- Adobe Event Name: `scCheckout`

- Rudder Events: `Checkout Started`

- Properties used:

| RudderStack property| Adobe Property |
| :--- | :--- |
| currency | currencyCode. Default "USD" |
| purchaseId | purchaseID |
| transactionId | transactionID |
| order_id | purchaseID/transactionID (If purchaseId or transactionId is not present) |


## Cart Opened 

- Adobe Event Name: `scOpen`

- Rudder Events: `Cart Opened`

- Properties used:

| RudderStack property| Adobe Property | Default Value |
| :--- | :--- | :--- |
| currency | currencyCode | "USD" |


## Workflow for Sending Ecommerce Events to Adobe Analytics

1. The channel, campaign, state, and zip window properties are updated.

2. RudderStack sets the timestamp according to the [**dashboard settings**](https://docs.rudderstack.com/destinations/analytics/Adobe Analytics/adobe-analytics-ecomm).

3. The `currencyCode` window property is set.

5. The Event string (if mapped on the dashboard) is set.

6. The Product string (if mapped on the dashboard) is set.

7. `contextData`, `eVars`, `lists`, `hiers`, and `props` are set.

8. `linkTrackVars` is set.

9. The mapped Adobe event is set.

10. Finally, `tl()` is called. The `tl()` method is a core component of Adobe Analytics. It takes all the analytics variables defined in the page, compiles them into an image request, and sends that data to the Adobe data collection servers. It works similarly to the `t()` method, except this method does not increment page views. 

{% hint style="info" %}
The `tl()` method is useful for tracking links and other elements that would not otherwise be considered in a full page load.
{% endhint %}

## Contact Us

For more information on any of the sections covered in this guide, you can [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.
