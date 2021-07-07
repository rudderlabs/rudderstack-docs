---
description: >-
  Detailed technical documentation on the web device mode settings for Adobe
  Analytics destination.
---

# Web Device Mode Settings

{% hint style="success" %}
**Find the open-source JavaScript SDK code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-sdk-js/tree/adobe-analytics-dest-prod-staging/integrations/AdobeAnalytics)**.**
{% endhint %}

## Initialization

We initialize [`appmeasurement.js`](https://cdn.rudderlabs.com/adobe-analytics-js/adobe-analytics-js.js) or [`mediaSDK.js`](https://cdn.rudderlabs.com/adobe-analytics-js/adobe-analytics-js-heartbeat.js) according to the settings in the RudderStack dashboard.

RudderStack first checks if any global properties are set in `window.s_account` or `window.s objects`. If already present, they will be used. Otherwise, RudderStack uses the Report Suite IDs, Tracking Server URL, and Tracking Server Secure URL \(optional\) as set in the RudderStack dashboard.

{% hint style="info" %}
Refer to the [**Dashboard Settings**](setting-up-adobe-analytics-in-rudderstack.md) guide for more information on these settings.
{% endhint %}

If Marketing Cloud Organization ID is set in the dashboard, RudderStack initializes `visitorApi.js` and sets the ID in `window.Visitor.getInstance(<Your Marketing Cloud Org Id>)`.

## Page

RudderStack sends a page view event to Adobe Analytics whenever you make a **`page()`** call.

A sample `page` call is as shown:

```javascript
// Passing page category, name and properties
rudderanalytics.page("category", "name", {
  path: "path",
  url: "url",
  title: "title",
  search: "search",
  referrer: "referrer"
});
```

If this call is made the `pageName` of the `window.s` variable will be set as **Viewed Page name**. RudderStack also sends other information like `referrer`,`url`, etc.

{% hint style="info" %}
The mappings done in the RudderStack dashboard will be set as context data, eVars, hiers, lists and props for every `page` call. The `t()` method is called to compile all the variables set and send them to Adobe Analytics.
{% endhint %}

## Track

According to the mapping done in RudderStack, the events can be sent as particular Adobe Events.

The `track` events for Adobe can be broadly categorized in 3 types:

1. Normal track events
2. E-Commerce track events
3. Video type \(Heartbeat\) track events

{% hint style="info" %}
For the regular and video type \(Heartbeat\) `track` events, it is necessary to map the events in the RudderStack dashboard.
{% endhint %}

For the E-Commerce track events, if the events fall under the following mapping they will be sent accordingly. Otherwise, the mapping should be done in the dashboard.

{% hint style="info" %}
For more info on the RudderStack E-Commerce Spec, follow the [**E-Commerce Tracking API**](../../../rudderstack-api/rudderstack-ecommerce-events-specification/) guide.
{% endhint %}

The mapping is as shown:

| Rudder E-Commerce Event | Adobe Event |
| :--- | :--- |
| `product viewed` | `prodView` |
| `product list viewed` | `prodView` |
| `product added` | `scAdd` |
| `product removed` | `scRemove` |
| `order completed` | `purchase` |
| `cart viewed` | `scView` |
| `checkout started` | `scCheckout` |
| `cart opened` | `scOpen` |
| `opened cart` | `scOpen` |

A sample `track` call is as shown:

```javascript
rudderanalytics.track("Track me", {
  category: "category",
  label: "label",
  value: "value"
});
```

## Contact Us

For more information on any of the sections mentioned in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

