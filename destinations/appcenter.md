---
description: Step-by-step guide to send your event data from RudderStack to Appcenter
---

# Appcenter

[Appcenter](https://appcenter.ms/) lets you automate and manage the lifecycle of your iOS, Android, Windows, and macOS apps. Ship apps more frequently, at higher-quality, and with greater confidence. Connect your repo and within minutes automate your builds, test on real devices in the cloud, distribute apps to beta testers, and monitor real-world usage with crash and analytics data. All in one place.

RudderStack supports sending your event data to Appcenter from our native web SDKs, to help you understand your customers better.

## Getting Started

Before configuring your source and destination on the RudderStack, please check whether the platform you are sending the events from is supported by Appcenter. Please refer the following table to do so:

| **Connection Mode** | **Web** | **Mobile**    | **Server** |
| :------------------ | :------ | :------------ | :--------- |
| **Device mode**     | -       | **Supported** | -          |
| **Cloud mode**      | -       | -             | -          |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Appcenter, perform the steps below:

- From your [RudderStack dashboard](https://app.rudderstack.com/), add the source and select **Appcenter** from the list of destinations.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

- Name your destination, and click on **Next**. You should be able to see the following screen:

![Connection settings for Appcenter destination](../.gitbook/assets/appcenter.png)

- Enter the relevant details and click on **Next** to complete the setup. The **Api Secret Key** can be found as **App Secret** on the Getting Started page or Settings page on the App Center portal.

{% tabs %}
{% tab title="Android" %}
Follow these steps to add Appcenter to your Android project:

- Add the following `dependencies` to your `app/build.gradle` file as shown:

```text
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.rudderstack.android.integration:appcenter:1.0.0'
implementation 'com.google.code.gson:gson:2.8.6'
```

- also add the App center `analytics` depedencies to your `app/build.gradle` as shown below:

```text
def appCenterSdkVersion = '4.1.0'
implementation "com.microsoft.appcenter:appcenter-analytics:${appCenterSdkVersion}"
```

- Make sure that the `minSdkVersion` in your `app/build.gradle` is atleast `21`.

```text
defaultConfig {
        minSdkVersion 21
}
```

- Finally change the initialization of your `RudderClient` in your `Application` class.

```text
val rudderClient = RudderClient.getInstance(
    this,
    <YOUR_WRITE_KEY>,
    RudderConfig.Builder()
        .withDataPlaneUrl(<YOUR_DATA_PLANE_URL>)
        .withFactory(AppcenterIntegrationFactory.FACTORY)
        .build()
)
```

{% endtab %}

{% tab title="iOS" %}

{% endtab %}
{% endtabs %}

## Track

A `track` call lets you track custom events as they occur in your web application. For more information on the `track` call, please refer to the [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Clicked button", {
  color: "red",
  buttonText: "Get started",
});
```

{% hint style="info" %}
The above track call is directly passed on to Appcenter via its `trackEvent` api in both `Android` & `iOS` sdk's.
{% endhint %}

{% hint style="info" %}
The event properties object should only contain the values of type String and Number and the other types are simply ignored if sent.
{% endhint %}

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. This call is similar to the `page` call, but is exclusive to your mobile device.

A sample `screen` call using our Android SDK looks like the following code snippet:

```javascript
rudderClient.screen(
    "MainActivity",
    "HomeScreen",
    new RudderProperty().putValue("foo", "bar"),
    null
);
```

In the above snippet, we capture information related to the screen being viewed, such as screen's name and category.

{% hint style="info" %}
The above screen call is directly passed on to Appcenter as a `track` event via its `trackEvent` api with event name as `Viewed {screen name} screen` along with the its properties. The above example will be sent as a `track` event with name `Viewed MainActivity screen` along with its properties.
{% endhint %}

## FAQs

### How do I get the Appcenter API secret?

The **Api Secret Key** can be found as **App Secret** on the Getting Started page or Settings page on the App Center portal.

### What is transmission interval?

The App Center SDK uploads logs in a batch of 50 and if the SDK doesn't have 50 logs to send, it will still send logs after 3 seconds (by default). There can be a maximum of three batches sent in parallel. Here this 3 seconds interval is the transmission interval and value must be between 3 seconds and 86400 seconds (one day).

## Contact Us

If you come across any issues while configuring Appcenter with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
