---
description: >-
  Step-by-step guide to send your event data from RudderStack to Google Tag
  Manager
---

# Google Tag Manager

[Google Tag Manager](https://support.google.com/tagmanager) is a popular tag management system that allows you to quickly update tags for your web or mobile applications. Once added to your project, it makes it easier for you to configure, deploy and measure your tags from a web-based UI without needing additional code.

RudderStack enables you to send events to the **GTM dataLayer** using the JavaScript SDK. This document explains in detail how to do that.

## Getting Started

To enable sending data to Google Tag Manager, you will first need to add it as a destination to the source from which you are sending the event data. Before that, however, please ensure that the source type is supported by Google Tag Manager by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

{% hint style="warning" %}
Google Tag Manager is available only for the RudderStack JavaScript SDK. You should enable the Native SDK flag for the same.
{% endhint %}

Once you have confirmed that the platform supports sending data to Google Tag Manager, please perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and Google Tag Manager as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* In the configuration settings, please add the **Container ID** which you can find in the Admin section of your [GTM dashboard](https://tagmanager.google.com/#/admin/).

![](../.gitbook/assets/image%20%2816%29.png)

That's it! Google Tag Manager will now load on any page where the RudderStack snippet is initialized, and `rudderanalytics.page` is called on the client-side. 

{% hint style="info" %}
You can use the RudderStack track events to populate the Google Tag Manager `dataLayer` once you have enabled GTM through RudderStack.
{% endhint %}

It is also possible to load RudderStack as a custom tag in Google Tag Manager. However, we recommend that you load Google Tag Manager through RudderStack by following the steps described above.

The following screenshot shows how to add RudderStack as a custom HTML tag which can then be called through Google Tag Manager:

![Adding RudderStack as a tag in Google Tag Manager](../.gitbook/assets/image%20%2868%29.png)

## Page

The `page` call allows you to record whenever a user visits a page of your website, along with the properties associated with that page. The `page` call must be made for Google Tag Manager to load.

{% hint style="info" %}
In `rudderanalytics.js` , a `page` call is included by default, just after `rudderanalytics.load` is executed. This is because this call must be executed **at least once** per page load.
{% endhint %}

A sample `page` call looks like the following:

```text
// "home" is the name of the page. 
rudderanalytics.page("home", {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer"
});
```

The above call will populate Google Tag Manager with the below properties along with their values:

* `userId`
* `anonymousId`
* `event` - The viewed `home` page
* `path` 
* `url`
* `title`
* `search`
* `referrer`

{% hint style="info" %}
Making a call to the `page` API will send out an object to the **GTM dataLayer** containing your page related properties and an event name with its associated value.
{% endhint %}

## Track

The `track` call allows you to record any actions that the users might perform, along with the properties associated with that action.

Calling the RudderStack SDK `track` API with the event and its properties similarly passes the data to GTM as seen in the Page section above.

```text
rudderanalytics.track("Track me", {
        category: "category",
        label: "label",
        value: "value"
 });
```

The above call will populate Google Tag Manager with the below properties along with their values:

* `userId`
* `anonymousId`
* `event`
* `category` 
* `label`
* `value`

## FAQs

### I am getting a 404 error

If you are getting a 404 error on the JavaScript console of your web page related to the Google Tag Manager, there are chances that you have not yet published your Google Tag Manager Container. Please follow [this guide](https://support.google.com/tagmanager/answer/6107163?hl=en) to know how to do so.

### Where do I get the GTM Container ID?

You can find the Container ID in the admin section of your [GTM dashboard](https://tagmanager.google.com/#/admin/).

## Contact Us

If you come across any issues while configuring Google Tag Manager with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

