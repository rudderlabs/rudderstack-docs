---
description: >-
  Detailed technical documentation on the Android device mode settings for Adobe Analytics destination.
---

# Mobile Device Mode Settings

## Initialization

* First configure the Manage App Settings tab on the [**Adobe Mobile Servces**](https://mobilemarketing.adobe.com/) dashbaord.

* Download the `ADBMobileConfig.json` file by clicking on `Config File` present at the bottom of the same tab and place in inside your app. Follow the instruction in Adobe's documentation for [**Android**](https://experienceleague.adobe.com/docs/mobile-services/android/getting-started-android/dev-qs.html?lang=en)

{% tabs %}
{% tab title="Android" %}
To add Adobe Analytics to your Android Project please follow these steps :

* Open your `app/build.gradle` \(Module: app\) file, and add the following under the `dependencies` section :

```javascript
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.google.code.gson:gson:2.8.6'

// Adobe Analytics
implementation group: 'com.adobe.mobile', name: 'adobeMobileLibrary', version: '4.18.2'
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

```javascript
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

{% endtab %}
{% tab title="Android" %}


## Sending Events

Map all the events which are defined at the Adobe Mobile Service dashbaord to the `Map Rudder Events to Adobe Custom Eevnts` settigns at the Rudderstack dashboard.

## Sending Custom Properties

Map all the properties which is defined at the the Adobe Mobile Service dashbaord to the `Map Rudder Context data to Adobe Contex Data` settings at the Rudderstack

% hint style="warning" %}
**Note**: For Android device mode, do not map `Initialise Heartbeat` & `Heartbeat Playhead Update` with any video events.
{% endhint %}

## Identify

When you make an Identify call, Segment sets the Adobe visitorId to the value of the user’s Segment userId. 

A sample `identify` calls looks like the following:

```javascript
MainApplication.rudderClient.identify("AdobeUser");
```

## Track

When you call track, Rudderstack sends an Adobe trackAction event, and passes your event name and any properties you mapped to Adobe, as context data values.

A sample `track` calls looks like the following:

```javascript
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

When you call screen, Rudderstack sends an Adobe trackState event, and passes the screen name and any properties you mapped to Adobe, as context data values.

A sample `screen` calls looks like the following:

```javascript
MainApplication.rudderClient.screen("Home Screen",
            RudderProperty()
                .putValue("Width",12)
        )
```

## Reset

Calling reset sets the user’s visitorId to null. null is Adobe’s default visitorId value until you explicitly set it (by calling identify).

A sample `reset` calls looks like the following:

```javascript
MainApplication.rudderClient.reset()
```

## Flush

Calling flush immediately sends all locally queued events to Adobe.

A sample `flush` calls looks like the following:

```javascript
MainApplication.rudderClient.flush()
```

## Settings required for mobile device mode

Configure below settings at the Rudderstack dashboard:

* Set `Heartbeat Tracking Server URL` and it should be like `[your_namespace].hb.omtrdc.net`.
* Toggle `Check for Heartbeat calls to be made over https` to set the ssl on or off.
* Fill `Prefix to add before all conextData property` to add prefix before custom property.
* Select `Product Identifier`, default is `Product Name`.

## Contact Us

For more information on any of the sections mentioned in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.