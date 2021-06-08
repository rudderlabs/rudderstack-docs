## JS SDK DEVICE MODE

{% hint style="success" %}
**Find the open-source ruder-sdk-js code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-sdk-js/tree/adobe-analytics-dest-prod-staging/integrations/AdobeAnalytics)**.**
{% endhint %}

## Initialisation

We initialise appmeasurement.js (https://cdn.rudderlabs.com/adobe-analytics-js/adobe-analytics-js.js) or mediaSDK.js (https://cdn.rudderlabs.com/adobe-analytics-js/adobe-analytics-js-heartbeat.js) according to the settings in our dashboard. 

Rudder first checks if any global properties are set in window.s_account or window.s objects. It will be used if already present. Otherwise it will use Report Suite Ids, Tracking Server Url, Tracking Server Secure URl(optional) as set in the dashboard.

If Marketing Cloud Organization ID is set on dashboard, Rudder initialises visitorApi.js an sets the id in the window.Visitor.getInstance(<Your Marketing Cloud Org Id>.

## Page

We send a page view to Adobe Analytics whenever you make a **`page()`** call from our SDKs.

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

If this call is made the pageName of window.s variable will be set as Viewed Page name.
Other informations like referrer,url etc will be sent. 
Mappings done in dashboard will be set context data, eVars, hiers, lists and props for every page call. 
The t() method is called to compile all the variables set and send them to Adobe Analytics.

## Track

According to the mapping events can be sent as particular Adobe Events. 
Track Events for Adobe can be broadly categorised under 3 types.
1. Normal Track Events
2. Ecomm Track Events
3. Video Type (Heartbeat) Track Events

For the 1st and 3rd type it is necessary to map the events in our dashboard. 
For the 2nd type if the events fall under the following mapping it will be sent accordingly otherwise mapping should be done on the dashboard.

For more info on the Rudder Ecomm Spec: 
[E-Commerce Tracking API](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-ecommerce-events-specification)

| Rudder Ecomm event | Adobe Event |
| :--- | :--- |
| product viewed | `prodView` |
| product list viewed  | `prodView` |
| product added | `scAdd` |
| product removed | `scRemove` |
| order completed | `purchase` |
| cart viewed | `scView` |
| checkout started | `scCheckout` |
| cart opened | `scOpen` |
| opened cart | `scOpen` |

An example normal track call:

```javascript
rudderanalytics.track("Track me", {
        category: "category",
        label: "label",
        value: "value"
 });
```


