---
description: >-
  Detailed technical documentation on the Mobile device mode settings for Adobe Analytics destination.
---

# Mobile Device Mode Settings

## Adding Device Mode Integration

* Configure the Manage App Settings tab with the required details on the [**Adobe Mobile Services**](https://mobilemarketing.adobe.com/) dashboard.

* Download the `ADBMobileConfig.json` file by clicking on `Config File` option present at the bottom of the same page and place it inside your app in the following path `src/main/assets/`. 

* Follow the instructions in Adobe documentation here to create the report suite [**Android**](https://experienceleague.adobe.com/docs/mobile-services/android/getting-started-android/dev-qs.html?lang=en)

{% tabs %}
{% tab title="Android" %}
To add Adobe Analytics to your Android Project please follow these steps :

* Open your `app/build.gradle` \(Module: app\) file, and add the following under the `dependencies` section :

```groovy
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.google.code.gson:gson:2.8.6'

// Adobe Analytics
implementation 'com.adobe.mobile:adobeMobileLibrary:4.18.2'
```

* Initialize the Rudder SDK in the `Application` class's  `onCreate()` method as following:

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


## Sending Events

Map all the events defined at the Adobe Mobile Services dashboard at the `Map Rudder Events to Adobe Custom Events` settings on the Rudderstack dashboard.

## Sending Custom Properties

Map all the properties defined at the Adobe Mobile Services dashboard at the `Map Rudder Context data to Adobe Context Data` settings on the Rudderstack dashboard.

{% hint style="warning" %}
**Note**: In Android device mode we do not support `Initialise Heartbeat` & `Heartbeat Playhead Update` video events.
{% endhint %}

## Identify

When you make an Identify call, Rudderstack sets the Adobe visitorId to the value of the user’s Rudder userId.

A sample `identify` calls looks like the following:

```java
MainApplication.rudderClient.identify("AdobeUser");
```

## Track

When you call `track`, Rudder sends an Adobe `trackAction` event, and passes your event name and any properties you mapped to Adobe, as context data values.

A sample `track` calls looks like the following:

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

When you call `screen`, Rudder sends an Adobe `trackState` event, and passes the screen name and any properties you mapped to Adobe, as context data values.

A sample `screen` calls looks like the following:

```java
MainApplication.rudderClient.screen("Home Screen",
            RudderProperty()
                .putValue("Width",12)
        )
```

## Reset

Calling reset sets the user’s Adobe visitorId to `null`. Default value of Adobe's visitorId is null until you explicitly set it (by calling identify).

A sample `reset` calls looks like the following:

```java
MainApplication.rudderClient.reset()
```

## Flush

Calling flush immediately sends all locally queued events to Adobe.

A sample `flush` calls looks like the following:

```java
MainApplication.rudderClient.flush()
```

## Settings required for mobile device mode

Configure the below settings at the Rudderstack dashboard:

* Set the `Heartbeat Tracking Server URL` and it should be in the format of `[your_namespace].hb.omtrdc.net`.
* Toggle `Check for Heartbeat calls to be made over https` to enable or disable the `ssl`.
* Enter `Prefix to add before all contextData property` to append a prefix before custom property.
* Select `Product Identifier` to look for `Product Id` and its defaulted to `Product Name`.

## Contact Us

For more information on any of the sections mentioned in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.
