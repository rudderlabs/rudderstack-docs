---
description: >-
  Solutions to some of the commonly faced issues while using the RudderStack JavaScript SDK on your website.
---

# **FAQs**

## **Where do I get the Data Plane URL?**

For routing and processing the events to the RudderStack backend, a **Data Plane URL** is required. Refer to [this section](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it) to get the Data Plane URL depending on your choice of setup.

## **How to load `rudder-analytics.js` correctly?**

In order to load `rudder-analytics.js`, simply follows the instructions in [Install RudderStack JavaScript SDK](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/quick-start-quide/#step-1:-install-rudderstack-javascript-sdk).

To check if it has loaded correctly, open the JavaScript console in your browser:

- Safari: `Ctrl+Alt+I` \(Windows\) or `Command+Option+I` \(Mac\) and go to the `Console` tab
- Chrome: `Ctrl+Shift+J` \(Windows\) or `Command+Option+J` \(Mac\)
- Firefox: `Ctrl+Shift+K` \(Windows\) or `Command+Option+K` \(Mac\) and select the `Console` tab
- Internet Explorer: Press `F12` and go to the `Console` tab

In the console, run `rudderanalytics`. If it returns an object as shown in the following code snippet, it means that the `rudder-analytics.js` file has loaded successfully:

```javascript
{Integrations: Object, _integrations: Object, _readied: true, _timeout: 300, _user: n_}
```

If it gives you an `undefined` error, you might want to verify if the installation procedure was correctly followed. Our [Quick Start Guide](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/quick-start-guide) may be able to help you get up and running.

## **Should I disable ad-blockers on my browser?**

Yes, it is important that you ensure no ad-blockers are running on your browser, as they restrict the`rudder-analytics.js` script from executing and storing user information in the browser.

## **Can I load multiple instances of `rudder-analytics.js`?**

No, it is not possible to load multiple instances of `rudder-analytics.js`, as it is bound to exceed the maximum stack call size and give you an error.

## **How to check if the data is being transmitted to the desired destinations?**

To check if data is being transmitted to the specified destinations, go to the `Network` tab of your JavaScript console on your browser.

![page call as seen in the Network tab](https://lh5.googleusercontent.com/h53eypqI3lWd_2wqzVnP_9KVXl8vHdJ39PP2b2oPLbUpEw5xMioO8wKhvDJHYnoMQLWQkQyMx-GDxzhxtTtgWECDFa0cLP85Mzd80relg6xkptwHoDJPiAixpH3XblrNosGJd4M3)

![track call as seen in the Network tab](https://lh5.googleusercontent.com/0Mw5GDmeE0C8pugsTHXn4Ss6bmF05UseoSAsi2z2S1QIhw6rBGlBROUVICHZxef3KNUOvt9o6uNE-czGxRU09huZV2SF6J24S_nLTywyKKPRsNjCCD9hAyGX3BzChcF3RbchKYQf)

{% hint style="info" %}
**NOTE**: If the outbound request is not being shown, check if you have installed and set up the RudderStack JavaScript SDK correctly, or if ad-blockers are enabled on your browser.
{% endhint %}

## **What is the size limit on the requests?**

The size limit on requests is 32 KB per message.

## **Can I send the event data to specific destinations only?**

Yes, you can. Refer to the [Filter Selective Destinations](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#filter-selective-destinations) section to see how to do this.

## **What is an anonymous ID and how to retrieve it?**

An anonymous ID is an auto-generated UUID \(Universally Unique Identifier\) that gets assigned to each unique visitor to your website.

To retrieve the anonymous ID of any visitor, simply call the following:

```javascript
rudderanalytics.getAnonymousId();
```

{% hint style="info" %}
**NOTE:** In case the `anonymousId` value is null in the SDK, calling the above function will lead to automatically setting a new `anonymousId`.
{% endhint %}

## **What is the `Reserved Keyword` error?**

When using the JavaScript SDK, you may run into the following error: `Warning! : Reserved keyword used in traits --> id with track call`. This is due to one or more of the keys in your `traits` and/or `properties` object is the same value as a reserved keyword.

The following list of reserved keywords are keys the RudderStack uses for a standard event payload and therefore should be avoided when naming traits and properties:

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

## **Contact Us**

To know more about the RudderStack JavaScript SDK, you can [contact us](mailto:%20docs@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you!

In case you come across any issues while using this SDK, please feel free to submit them on our [GitHub issues page](https://github.com/rudderlabs/rudder-sdk-js/issues).
