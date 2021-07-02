---
description: >-
  Detailed technical documentation on the mobile device mode settings for Adobe Analytics destination.
---

# Mobile Device Mode Settings

To configure Adobe Analytics via the mobile [**device mode**](https://docs.rudderstack.com/connections/rudderstack-connection-modes#device-mode), follow these steps:

{% hint style="info" %}
Mobile device mode refers to using the Android or iOS SDK to send your events directly to Adobe Analytics.
{% endhint %}

* Click on the **Manage Apps** option on the left nav bar on your [**Adobe Mobile Services**](https://mobilemarketing.adobe.com/) dashboard.

* **Add** your app or click on an existing app and configure the required settings under the **Manage App Settings** tab, as shown:

![](https://user-images.githubusercontent.com/59817155/124233542-92a2fb80-db30-11eb-8722-c91a07cfa7ab.png)

* Click on the **Config File** option present at the bottom of the same page, as shown:

![](https://user-images.githubusercontent.com/59817155/124233808-db5ab480-db30-11eb-900f-75a3aa9a5367.png)

* Then, place the `ADBMobileConfig.json` file inside your app under `src/main/assets/`. 

* Finally, follow the instructions in Adobe documentation [**here**]((https://experienceleague.adobe.com/docs/mobile-services/android/getting-started-android/dev-qs.html?lang=en) to create the report suite in Android.

{% tabs %}
{% tab title="Android" %}

To add Adobe Analytics to your Android project, follow these steps :

* Open your `app/build.gradle` \(Module: app\) file, and add the following under the `dependencies` section :

```groovy
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.google.code.gson:gson:2.8.6'

// Adobe Analytics
implementation 'com.adobe.mobile:adobeMobileLibrary:4.18.2'
```

* Initialize the RudderStack SDK in the `Application` class'  `onCreate()` method as shown:

```kotlin
// initializing Rudder SDK
val rudderClient = RudderClient.getInstance(
    this,
    WRITE_KEY,
    RudderConfig.Builder()
        .withDataPlaneUrl(DATA_PLANE_URL)
        .withFactory(AdobeIntegrationFactory.FACTORY)
        .build()
)
```

* For Android, make sure you add these permissions to your `AndroidManifest.xml`:

```groovy
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

{% endtab %}
{% tab title="Android" %}

## Dashboard Settings to Send Events via the Mobile Device Mode

Configure the following settings in the RudderStack dashboard to use the mobile device mode:

* Set the **Heartbeat Tracking Server URL** and it should be in the format of `[your_namespace].hb.omtrdc.net`.
* Toggle **Check for Heartbeat calls to be made over HTTPS** to enable or disable the SSL mode.
* Enter **Prefix to add before all contextData property** to append a prefix before a custom property.
* Select **Product Identifier** to look for `Product Id`. By default, it is set to `Product Name`.

## Sending Events

Map all the events defined in the [**Adobe Mobile Services**](https://mobilemarketing.adobe.com/) dashboard in the **Map Rudder Events to Adobe Custom Events** setting in the RudderStack dashboard.

## Sending Custom Properties

Map all the properties defined at the [**Adobe Mobile Services**](https://mobilemarketing.adobe.com/) dashboard in the **Map Rudder Context data to Adobe Context Data** settings in the Rudderstack dashboard.

{% hint style="warning" %}
For mobile device mode (Android), RudderStack currently does not support the [`**Initialise Heartbeat**`](https://docs.rudderstack.com/destinations/analytics/adobe-analytics/adobe-analytics-heartbeat#initialize-heartbeat) and [`**Heartbeat Playhead Update**`](https://docs.rudderstack.com/destinations/analytics/adobe-analytics/adobe-analytics-heartbeat#heartbeat-playhead-update) video events.
{% endhint %}

## Identify

When you make an `identify` call, RudderStack sets the Adobe `visitorId` to the value of the user’s RudderStack `userId`.

A sample `identify` calls looks like the following:

```java
MainApplication.rudderClient.identify("AdobeUser");
```

## Track

When you make a `track` call, RudderStack sends an Adobe `trackAction` event and passes your event name and any associated properties mapped to Adobe as context data values.

A sample `track` call is as shown:

```java
MainApplication.rudderClient.track("Order Completed",
            RudderProperty()
                .putValue("orderId", "1a2b3c4d")
                .putValue("category", "category")
                .putValue("revenue", 99.9)
                .putValue("shipping", 13.99)
                .putValue("tax", 20.99)
                .putValue("promotion_id", "PROMO_1234")
        );
```

## Screen

When you make a `screen` call, RudderStack sends an Adobe `trackState` event and passes the screen name along with any associated properties mapped to Adobe as context data values.

A sample `screen` call looks like the following:

```java
MainApplication.rudderClient.screen("Home Screen",
            RudderProperty()
                .putValue("Width",12)
        )
```

## Reset

Calling `reset` sets the user’s Adobe `visitorId` to `null`. 

{% hint style="info" %}
The default value of Adobe's `visitorId` is `null` until you explicitly set it (by calling `identify`).
{% endhint %}

A sample `reset` call is as shown:

```java
MainApplication.rudderClient.reset()
```

## Flush

Calling the `flush` method immediately sends all the locally queued events to Adobe.

A sample `flush` call is as follows:

```java
MainApplication.rudderClient.flush()
```

## Contact Us

For more information on any of the sections mentioned in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
