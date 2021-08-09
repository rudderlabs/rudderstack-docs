---
description: Step-by-step guide to send your event data from RudderStack to Qualtrics.
---

# Qualtrics

[**Qualtrics**](https://www.qualtrics.com/au/core-xm/survey-software/) is a servey software which helps to create surveys in real time and collaborate effortlessly. It helps to acquire better insights regarding the market, brand, customer and product and that makes it useful to target ideal customers with befitted messaging.

RudderStack supports Qualtrics as a destination to which you can send your event data directly.

## Getting Started

Before configuring Qualtrics as a destination in RudderStack, verify if Qualtrics supports the source platform you are sending the events from. Refer to the following table:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the source platform supports sending events to Qualtrics, follow these steps:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source and select **Qualtrics** from the list of destinations.

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

![Configuration Settings for Qualtrics](../../.gitbook/assets/Screenshot_Qualtrics.png)

### Configuration Settings

To successfully configure Qualtrics as a destination, you will need to configure the following settings:

* **Project ID:** Enter your Qualtrics Project ID here.

{% hint style="info" %}
Refer to the **FAQ** section below for more information on getting your Project ID.
{% endhint %}

* **Brand ID:** Enter your Qualtrics Brand ID here.

{% hint style="info" %}
Refer to the **FAQ** section below for more information on getting your Project ID.
{% endhint %}

* **Enable Generic Page Title:** This field useful only when you are using `page` call. If this field is enabled, the page call is sent with the name `Viewed a Page`. 

{% hint style="info" %}
If this option is disabled, Rudderstack will search for category and name of the page call and send the event as `Viewed catergory-field name-field Page`. If any of the two is absent, the page call will be sent as `Viewed catergory-field/name-field Page`.
{% endhint %}

## Page

The `page` call lets you keep track on how many time a user performs certain actions. Any events being tracked can be passed as embedded data to the intercept target.

Some sample `page` calls are shown below:

```javascript
window.rudderanalytics.page("category", "name", {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer",
        testDimension: "true"
});
```
{% hint style="warning" %}
For the above example, The event will be sent as `Viewed catergory name Page`, if the Generic Page Title option is disabled. Otherwise, the event will be sent as `Viewed a Page`.
{% endhint %}

If category field is not mentioned in the root of the page call but specified inside the properties, then also category field is included while sending the event.

```javascript
window.rudderanalytics.page( "name", {
        category: "category",
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer",
        testDimension: "true"
});
```

{% hint style="warning" %}
For the above example, The event will be sent as `Viewed catergory name Page`, if the Generic Page Title option is disabled. Otherwise, the event will be sent as `Viewed a Page`.
{% endhint %}

If category field is not specified both in the root of the event or the properties, Rudderstack will send the event with the page name only.

```javascript
window.rudderanalytics.page( "name", {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer",
        testDimension: "true"
});
```
{% hint style="warning" %}
For the above example, The event will be sent as `Viewed name Page`, if the Generic Page Title option is disabled. Otherwise, the event will be sent as `Viewed a Page`.
{% endhint %}

{% hint style="warning" %}
if both the name and category fields are absent in the page call, while this option is disabled, RudderStack will not be sending the event to Qualtrics.
{% endhint %}

## Track

The `track` call lets you keep track on how many time a user performs certain actions. Any events being tracked can be passed as embedded data to the intercept target.

In this case, the value of event field of the track call will be used while sending the event.

A sample `track` call is as shown:

```javascript
   rudderanalytics.track('Product Viewed', {
            product_id: 'Prod12345',
            quantity: 1,
            price: 19.99,
            name: 'my product',
            category: 'categ 1',
            sku: 'p-666',
            list: 'Gallery',
            testDimension: true,
            testMetric: true
          });
```

{% hint style="warning" %}
In the above example, The event will be sent as `Product Viewed`. 
{% endhint %}

## FAQ

### How do I get my Project ID and Brand ID?

To get your Qualtrics Project ID and Brand ID, follow these steps:

* Log into your [**Qualtrics account**](https://login.qualtrics.com/login?lang=au).
* Click on the project you will be using.
* Click on **Settings** tab, followed by **Manage Project** drop down option which is the right most menu in the project dashboard.
* Click on `Project ID's` option in the resulting drop down menu and you will find both Project ID and Brand ID.


## Contact Us

If you come across any issues while configuring Criteo with RudderStack, feel free to [**contact us**](mailto:docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

