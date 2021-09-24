---
description: >-
  Solutions to some of the commonly faced issues while using the RudderStack JavaScript SDK.
---

# FAQs

## Where do I get the Data Plane URL?

For routing and processing the events to the RudderStack backend, a **Data Plane URL** is required. Refer to [**this section**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it) to get the Data Plane URL depending on your choice of setup.

## How do I load the SDK (`rudder-analytics.js`) correctly?

To load `rudder-analytics.js`, follow the instructions in the [**Install RudderStack JavaScript SDK**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/quick-start-guide) section.

To check if the library has loaded correctly, open the JavaScript console in your browser:

- Safari: `Ctrl+Alt+I` \(Windows\) or `Command+Option+I` \(Mac\) and go to the `Console` tab
- Chrome: `Ctrl+Shift+J` \(Windows\) or `Command+Option+J` \(Mac\)
- Firefox: `Ctrl+Shift+K` \(Windows\) or `Command+Option+K` \(Mac\) and select the `Console` tab
- Internet Explorer: Press `F12` and go to the `Console` tab

In the console, run `rudderanalytics`. If it returns an object as shown in the following code snippet, it means that the `rudder-analytics.js` file has loaded successfully:

```javascript
{Integrations: Object, _integrations: Object, _readied: true, _timeout: 300, _user: n_}
```

If it gives you an `undefined` error, verify if the installation is done correctly. Our [**Quick Start Guide**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/quick-start-guide) may be able to help you get up and running.

## Should I disable ad-blockers on my browser?

Yes, it is important that you ensure no ad blockers are running on your browser, as they restrict the`rudder-analytics.js` script from executing and storing user information in the browser.

## Can I load multiple instances of `rudder-analytics.js`?

No, it is not possible to load multiple instances of `rudder-analytics.js`, as it is bound to exceed the maximum stack call size and give you an error.

## How to check if the data is being transmitted to the desired destinations?

To check if data is being transmitted to the specified destinations, go to the **Network** tab of your JavaScript console in your browser.

![Sample page call as seen in the Network tab](https://lh5.googleusercontent.com/h53eypqI3lWd_2wqzVnP_9KVXl8vHdJ39PP2b2oPLbUpEw5xMioO8wKhvDJHYnoMQLWQkQyMx-GDxzhxtTtgWECDFa0cLP85Mzd80relg6xkptwHoDJPiAixpH3XblrNosGJd4M3)

![Sample track call as seen in the Network tab](https://lh5.googleusercontent.com/0Mw5GDmeE0C8pugsTHXn4Ss6bmF05UseoSAsi2z2S1QIhw6rBGlBROUVICHZxef3KNUOvt9o6uNE-czGxRU09huZV2SF6J24S_nLTywyKKPRsNjCCD9hAyGX3BzChcF3RbchKYQf)

{% hint style="info" %}
If the outbound request is not shown, check if you have installed and set up the RudderStack JavaScript SDK correctly. Also, check if any ad blockers are enabled in your browser.
{% endhint %}

## What is the size limit on the requests?

The size limit on requests is 32 KB per message and 4 MB per batch request.

## Can I send the event data to specific destinations only?

Yes, you can. Refer to the [**Filter Selective Destinations**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#filter-selective-destinations) section in the SDK guide for more information.

## What is an anonymous ID and how to retrieve it?

An anonymous ID is an auto-generated **UUID** \(Universally Unique Identifier\) that gets assigned to each unique, unidentified visitor to your website.

To retrieve the anonymous ID of any visitor, call the following:

```javascript
rudderanalytics.getAnonymousId();
```

{% hint style="info" %}
If the `anonymousId` value is null in the SDK, calling the above function will lead to automatically setting a new `anonymousId`.
{% endhint %}

## What is the `Reserved Keyword` error?

When using the JavaScript SDK, you may run into the following error: **Warning! : Reserved keyword used in traits --> id with track call**. This is because one or more of the keys in your `traits` and/or `properties` object is the same value as a reserved keyword.

RudderStack has reserved the following keywords as keys for a standard event payload:

```javascript
"anonymous_id";
"id";
"sent_at";
"received_at";
"timestamp";
"original_timestamp";
"event_text";
"event";
```

The above keywords should be avoided when naming your event traits and properties.


## Contact Us

For more information on the RudderStack JavaScript SDK, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

If you come across any issues while using this SDK, feel free to submit them on our [**GitHub issues page**](https://github.com/rudderlabs/rudder-sdk-js/issues).
