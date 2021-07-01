---
description: >-
  Detailed technical documentation on the mobile device mode settings for Adobe Analytics destination.
---

# Mobile Device Mode Settings

## Adding Device Mode Integration

* Configure the Manage App Settings tab on the [**Adobe Mobile Services**](https://mobilemarketing.adobe.com/) dashboard.

* Download the `ADBMobileConfig.json` file by clicking on `Config File` present at the bottom of the same tab and place it inside your app. Follow the instruction in Adobe's documentation for [**Android**](https://experienceleague.adobe.com/docs/mobile-services/android/getting-started-android/dev-qs.html?lang=en)

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

* For Android, be sure to add these permission to your app `AndroidManifest.xml`:

```groovy
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

{% endtab %}
{% tab title="Android" %}


## Sending Events

Map all the events defined at the Adobe Mobile Service dashboard to the `Map Rudder Events to Adobe Custom Eevnts` settings at the Rudderstack dashboard.

## Sending Custom Properties

Map all the properties defined at the Adobe Mobile Service dashboard to the `Map Rudder Context data to Adobe Contex Data` settings at the Rudderstack

% hint style="warning" %}
**Note**: For Android device mode, do not map `Initialise Heartbeat` & `Heartbeat Playhead Update` with any video events.
{% endhint %}

## Identify

When you make an Identify call, Rudderstack sets the Adobe visitorId to the value of the userId. 

A sample `identify` calls looks like the following:

```java
MainApplication.rudderClient.identify("AdobeUser");
```

## Track

The `track` call allows you to capture any action that the user might perform and the properties associated with that action. Each action is considered to be an event.

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

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. This call is similar to the `page` call but is exclusive to your mobile device.

A sample `screen` calls looks like the following:

```java
MainApplication.rudderClient.screen("Home Screen",
            RudderProperty()
                .putValue("Width",12)
        )
```

## Reset

Calling reset sets the user’s visitorId to null. Null is Adobe’s default visitorId value until you explicitly set it (by calling identify).

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

* Set `Heartbeat Tracking Server URL` and it should be like `[your_namespace].hb.omtrdc.net`.
* Toggle `Check for Heartbeat calls to be made over https` to set the ssl on or off.
* Fill `Prefix to add before all conextData property` to add a prefix before custom property.
* Select `Product Identifier` default is `Product Name`.

## Contact Us

For more information on any of the sections mentioned in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.
