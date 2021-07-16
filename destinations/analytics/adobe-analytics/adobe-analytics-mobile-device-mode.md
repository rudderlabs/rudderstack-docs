---
description: >-
  Detailed technical documentation on the mobile device mode settings for Adobe
  Analytics destination.
---

# Mobile Device Mode Settings

This document covers the necessary settings and configurations to send events to Adobe Analytics via your mobile device mode.

{% hint style="success" %}
Mobile [**device mode**](https://docs.rudderstack.com/connections/rudderstack-connection-modes#device-mode) refers to using the Android or iOS SDK to send your events directly to Adobe Analytics.
{% endhint %}

To configure Adobe Analytics via the mobile device mode, follow these steps:

* Click on the **Manage Apps** option on the left nav bar on your [**Adobe Mobile Services**](https://mobilemarketing.adobe.com/) dashboard. 
* **Add** your app or click on an existing app and configure the required settings under the **Manage App Settings** tab, as shown:

![](https://user-images.githubusercontent.com/59817155/124233542-92a2fb80-db30-11eb-8722-c91a07cfa7ab.png)

* Click on the **Config File** option present at the bottom of the same page, as shown:

![](https://user-images.githubusercontent.com/59817155/124233808-db5ab480-db30-11eb-900f-75a3aa9a5367.png)

### Android

For Android, place the `ADBMobileConfig.json` file inside your app under `src/main/assets/`.

Then, follow the instructions in the [**Adobe documentation**](https://experienceleague.adobe.com/docs/mobile-services/android/getting-started-android/dev-qs.html?lang=en) to create the report suite.

### iOS

For iOS, drag and drop the `ADBMobileConfig.json` under the `Pods` section in the `Project Navigator`and verify the following:

* The `Copy items if needed` checkbox is selected.
* `Create groups` is selected.
* None of the checkboxes in the `Add to targets` section is selected.

In the File Inspector, add the JSON file to the `AdobeMobileSDK` target.

Then, follow the instructions in the [**Adobe documentation**](https://experienceleague.adobe.com/docs/media-analytics/using/sdk-implement/setup/set-up-ios.html?lang=en#) to create the report suite.

## Adding Device Mode Integration

{% tabs %}
{% tab title="iOS" %}
Follow these steps to add Adobe Analytics to your iOS project:

* In your `Podfile`, add the `Rudder-Adobe` extension:

```ruby
pod 'Rudder-Adobe'
```

* After adding the dependency followed by `pod install` , add the imports to your `AppDelegate.m` file as shown:

```objectivec
#import <Rudder/Rudder.h>
#import <RudderAdobeFactory.h>
```

* Then, add the initialization of your `RSClient` as shown:

```objectivec
RSConfigBuilder *configBuilder = [[RSConfigBuilder alloc] init];
[configBuilder withDataPlaneUrl:DATA_PLANE_URL];
[configBuilder withFactory:[RudderAdobeFactory instance]];
[RSClient getInstance:<YOUR_WRITE_KEY> config:[configBuilder build]];
```
{% endtab %}

{% tab title="Android" %}
To add Adobe Analytics to your Android project, follow these steps :

* Open your `app/build.gradle` file and add the following under the `dependencies` section :

```groovy
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.google.code.gson:gson:2.8.6'
implementation 'com.rudderstack.android.integration:adobe:1.0.0'

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
{% endtabs %}

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
For mobile device mode, RudderStack currently does not support the [**Initialize Heartbeat**](https://docs.rudderstack.com/destinations/analytics/adobe-analytics/adobe-analytics-heartbeat#initialize-heartbeat) and [**Heartbeat Playhead Update**](https://docs.rudderstack.com/destinations/analytics/adobe-analytics/adobe-analytics-heartbeat#heartbeat-playhead-update) video events.
{% endhint %}

## Identify

When you make an `identify` call, RudderStack sets the Adobe `visitorId` to the value of the user’s RudderStack `userId`.

A sample `identify` call looks like the following:

{% tabs %}
{% tab title="iOS" %}
```objectivec
[[RSClient sharedInstance] identify:@"Adobe_iOS_user"];
```
{% endtab %}

{% tab title="Android" %}
```java
MainApplication.rudderClient.identify("AdobeUser");
```
{% endtab %}
{% endtabs %}

## Track

When you make a `track` call, RudderStack sends an Adobe `trackAction` event and passes your event name and any associated properties mapped to Adobe as context data values.

A sample `track` call is as shown:

{% tabs %}
{% tab title="iOS" %}
```objectivec
[[RSClient sharedInstance] track:@"Order Completed" properties:@{
        @"orderId" : @2002,
        @"category" : @"Cloths",
        @"productId" : @"2200013",
        @"name": @"Shirt",
        @"price" : @10001,
        @"quantity" : @12
    }];
```
{% endtab %}

{% tab title="Android" %}
```java
MainApplication.rudderClient.track("Order Completed",
            RudderProperty()
                .putValue("orderId", "12345")
                .putValue("category", "category")
                .putValue("revenue", 99.9)
                .putValue("shipping", 13.99)
                .putValue("tax", 20.99)
                .putValue("promotion_id", "PROMO_1234")
        );
```
{% endtab %}
{% endtabs %}

## Screen

When you make a `screen` call, RudderStack sends an Adobe `trackState` event and passes the screen name along with any associated properties mapped to Adobe as context data values.

A sample `screen` call looks like the following:

{% tabs %}
{% tab title="iOS" %}
```objectivec
[[RSClient sharedInstance] track:@"Home Screen"
                              properties:@{
                                  @"Width" : @"13"
                              }];
```
{% endtab %}

{% tab title="Android" %}
```java
MainApplication.rudderClient.screen("Home Screen",
            RudderProperty()
                .putValue("Width",12)
        )
```
{% endtab %}
{% endtabs %}

## Reset

Calling `reset` sets the user’s Adobe `visitorId` to `null`.

{% hint style="info" %}
The default value of Adobe's `visitorId` is `null` until you explicitly set it \(by calling `identify`\).
{% endhint %}

A sample `reset` call is as shown:

{% tabs %}
{% tab title="iOS" %}
```objectivec
[[RSClient sharedInstance] reset];
```
{% endtab %}

{% tab title="Android" %}
```java
MainApplication.rudderClient.reset()
```
{% endtab %}
{% endtabs %}

## Flush

Calling the `flush` method immediately sends all the locally queued events to Adobe.

A sample `flush` call is as follows:

```java
MainApplication.rudderClient.flush()
```

{% hint style="info" %}
The `flush` call is supported only in Android.
{% endhint %}

## Contact Us

For more information on any of the sections mentioned in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

