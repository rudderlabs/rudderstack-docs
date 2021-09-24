---
description: >-
  This page provides information on detecting ad-blocked pages via RudderStack JavaScript SDK.
---

# Detecting ad-blocked pages

The JavaScript SDK provides a way to send a page view containing relevant markers that determine whether a page is ad-blocked. You can analyze this data to find what percent of your website's page views are affected by ad blockers.

## Sending an ad-blocked page view

To send an ad-blocked page view, load the JavaScript SDK as shown below:

```javascript
rudderanalytics.load( < WRITE_KEY > , < DATA_PLANE_URL > , {
  sendAdblockPage: true,
  sendAdblockPageOptions: {
    integrations: {
      All: false,
      Amplitude: true
    }
  },
});
```

Some of the properties in the snippet above are described in the following sections.

### `sendAdblockPage`

This property enables the JavaScript SDK to make a call to load the [**Google AdSense**](https://www.google.com/adsense/start/) library. If RudderStack fails to load this library, it concludes that an ad blocker is enabled on the page.

{% hint style="info" %}
Since most ad blockers block the request to the Google AdSense servers, this is assumed to be a good measure to detect ad-blocked pages.
{% endhint %}

### `sendAdblockPageOptions`

The JavaScript SDK will make an implicit `page` call about the ad-blocked pages if `sendAdblockPage` is set to `true`. 

With `sendAdblockPageOptions` \(which internally contains the [**`IntegrationOpts`**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#integrationopts) object\), you can provide the destinations to which you want to forward this `page` call. 

{% hint style="info" %}
For more information on filtering destinations refer to the [**Filtering selective destinations**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#filter-selective-destinations) section of the SDK guide.
{% endhint %}

The implicit `page` call semantics is as shown:

```javascript
rudderanalytics.page(
  "RudderJS-Initiated",
  "ad-block page request", {
    path: "/ad-blocked",
    title: "error in script loading:: src::  http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js id:: ad-block",
  },
  sendAdblockPageOptions
);
```

## Contact Us

For questions or queries on any of the sections covered in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

If you come across any issues while using this SDK, feel free to submit them on our [**GitHub issues page**](https://github.com/rudderlabs/rudder-sdk-js/issues).
