---
description: >-
  This page provides information on detecting ad-blocked pages via RudderStack JavaScript SDK.
---

# **Detecting Ad-blocked Pages**

RudderStack's JavaScript SDK provides a way to send a page view containing relevant markers on whether a page is ad-blocked. You can analyze this data to find what percent of your site's page views are affected by ad-blockers.

To send an ad-blocked page view, load the SDK as follows:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
  sendAdblockPage: true,
  sendAdblockPageOptions: { integrations: { All: false, Amplitude: true } },
});
```

Some of the properties in the snippet above are:

- `sendAdblockPage`: Enables the JavaScript SDK to make a call to load the Google AdSense library. If RudderStack fails to load this library, it concludes that an ad blocker is enabled on the page.

{% hint style="info" %}
Since most ad blockers block the request to the Google AdSense servers, this is assumed as a good measure to detect ad-blocked pages.
{% endhint %}

- `sendAdblockPageOptions`: The RudderStack SDK will make an implicit `page` call about the ad-blocked pages if `sendAdblockPage` is set to `true`. With `sendAdblockPageOptions` \(which internally contains [`IntegrationOpts`](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#integrationopts) object\), you can provide the destinations to which you want to forward this `page` call. For more information on filtering destinations refer to [Filter Selective Destinations](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#filter-selective-destinations).

The implicit `page` call semantics is as follows:

```javascript
rudderanalytics.page(
  "RudderJS-Initiated",
  "ad-block page request",
  {
    path: "/ad-blocked",
    title:
      "error in script loading:: src::  http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js id:: ad-block",
  },
  sendAdblockPageOptions
);
```

## **Contact Us**

To know more about the RudderStack JavaScript SDK, you can [contact us](mailto:%20docs@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you!

In case you come across any issues while using this SDK, please feel free to submit them on our [GitHub issues page](https://github.com/rudderlabs/rudder-sdk-js/issues).
