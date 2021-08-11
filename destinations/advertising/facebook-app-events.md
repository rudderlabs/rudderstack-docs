---
description: >-
  Step-by-step guide to send your event data from RudderStack to Facebook App
  Events for analytics
---

# Facebook App Events

[**Facebook App Events**](https://developers.facebook.com/docs/app-events/) ****is Facebook's event tracking functionality. It lets you track events via your app or web page, including user activities such as app installation, purchases, etc. This information is sent to Facebook for analytics and ad targeting, optimization, and measurement.

RudderStack supports Facebook App Events as a destination to which you can send your event data seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/fb)**.**
{% endhint %}

## Getting Started

To enable sending your event data to Facebook, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Facebook.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Facebook, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | **Supported** | - |
| **Cloud mode** | **Supported** | **Supported** | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Facebook App Events, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Facebook**.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Destination Settings for Facebook App Events](../../.gitbook/assets/screenshot-2020-07-31-at-1.01.29-pm.png)

* Enter the **Facebook App Id**. 
* Turn on the `Use native SDK to send events` button so that we can send data to Facebook using the native SDK.
* Click on **Next** to complete the configuration. 

Facebook App Events should now be added and enabled as a destination in RudderStack.

## Adding Facebook App Events to your project

Depending on your platform of integration, follow these steps below to add Facebook to your project:

{% tabs %}



To add Facebook to your iOS project:

* Add the following line to your [CocoaPods](https://cocoapods.org/) `Podfile` 

```groovy
pod 'Rudder-Facebook'
```

* Initialize the Facebook App Events iOS SDK just before intializing the RudderStack iOS SDK as shown:

```objectivec
[[FBSDKApplicationDelegate sharedInstance] application:application
                             didFinishLaunchingWithOptions:launchOptions];
```

* Send the user's consent to App Events as shown below:

{% tabs %}
{% tab title="Objective-C" %}

{% tab %}
```objectivec
// Set AdvertiserTrackingEnabled to YES if a user provides consent
[FBSDKSettings setAdvertiserTrackingEnabled:YES];
// Set AdvertiserTrackingEnabled to NO if a user does not provide consent
[FBSDKSettings setAdvertiserTrackingEnabled:NO];
```
{% endtab %}

{% tab title="Swift" %}
```swift
// Set AdvertiserTrackingEnabled to true if a user provides consent
Settings.setAdvertiserTrackingEnabled(true)
// Set AdvertiserTrackingEnabled to false if a user does not provide consent
Settings.setAdvertiserTrackingEnabled(false)
```

* Configure your project by adding the following lines to `(<dict>...</dict>)` in your `Info.plist` :

```markup
<key>CFBundleURLTypes</key>
<array>
  <dict>
  <key>CFBundleURLSchemes</key>
  <array>
    <string>fbAPP-ID</string>
  </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>APP-ID</string>
<key>FacebookClientToken</key>
<string>CLIENT-TOKEN</string>
<key>FacebookDisplayName</key>
<string>APP-NAME</string>
```

{% hint style="info" %}
Make sure you replace `fbAPP-ID` , `APP-ID`, `CLIENT-TOKEN`, `APP-NAME` with the app-specific details from the [**Facebook for Developers platform**](https://developers.facebook.com/).
{% endhint %}

* After adding the dependency, register the `RudderFacebookFactory` with your `RudderClient` initialization as a `factory` of `RudderConfig`. To do this, run the following command to import the `RudderFacebookFactory.h` file in your `AppDelegate.m` file:

```objectivec
#import <Rudder-Facebook/RudderFacebookFactory.h>
```

* Then, add the RudderStack iOS SDK initialization as shown:

```objectivec
RSConfigBuilder *builder = [[RSConfigBuilder alloc] init];
[builder withDataPlaneUrl:DATA_PLANE_URL];
[builder withFactory:[RudderFacebookFactory instance]];
[RSClient getInstance:WRITE_KEY config:[builder build]];
```
{% endtab %}

{% tab title="Android" %}
To add Facebook App Events to your Android project, follow these steps:

* Add the repository as shown:

```groovy
repositories {
    mavenCentral()
}
```

* Add the following lines to your `app/build.gradle` file under the `dependencies` section as shown:

```groovy
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.rudderstack.android.integration:facebook:1.0.0'
implementation 'com.facebook.android:facebook-android-sdk:11.1.0'
```

* Open your `/app/res/values/strings.xml` file and add the following lines. **Remember to replace `[APP_ID]` with your actual app ID**.

```markup
<string name="facebook_app_id">[APP_ID]</string>
<string name="fb_login_protocol_scheme">fb[APP_ID]</string>
```

* In the `app/manifests/AndroidManifest.xml` file, add a `meta-data` element to the `application` element as shown:

```markup
<application android:label="@string/app_name" ...>
    ...
    <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
    ...
</application>
```

* Finally, change the initialization of your `RudderClient` in your `Application` class, as shown below:

```java
val rudderClient = RudderClient.getInstance(
    this,
    WRITE_KEY,
    RudderConfig.Builder()
        .withDataPlaneUrl(DATA_PLANE_URL)
        .withFactory(FacebookIntegrationFactory.FACTORY)
        .build()
)
```
{% endtab %}
{% endtabs %}

## Identify

The `identify` call from RudderStack sets the `userId` through the `setUserID` method from `AppEventsLogger` .

RudderStack sets the following properties \(if available\) using the `setUserData` method.

* `email`
* `firstName`
* `lastName`
* `phone`
* `birthday`
* `gender`
* `city`
* `state`
* `zip`
* `country`

A Sample `identify` call for an iOS application will look like the below.

```text
[[RSClient sharedInstance] identify:@"developer_user_id"
                                 traits:@{@"email": @"bar@foo.com"}];
```

## Track

The `track` call from RudderStack is logged to Facebook using `logEvent` method of the `AppEventsLogger` class. We'll use the `eventName` as same as you have passed to the `track` method. Along with that, we'll pass all the `properties` you've passed after converting it to the accepted format.

A Sample `track` call for an iOS application will look like the below.

```text
[[RSClient sharedInstance] track:@"Accepted Terms of Service" 
                          properties:@{
                                  @"foo": @"bar",
                              @"foo_int": @134
}];
```

{% hint style="info" %}
When `revenue` and `currency` are present in the event properties of any track call we will make a `Purchase` call to Facebook using its `logPurchase` api along with the normal track call using `logEvent` api. If `currency` is absent in the event properties we fall back to a default value of `USD`.
{% endhint %}

## Screen

The `screen` method allows you to record whenever the user views their mobile screen, along with any associated properties. This call is similar to the `page` call, but is exclusive to your mobile device.

A sample `screen` call using the RudderStack Android SDK is shown below:

```text
[[RSClient sharedInstance] screen:@"Home" properties:@{
    @"category" : @"launcher"
}];
```

In the above snippet, RudderStack captures the information related to the viewed screen, such as screen name and `category`.

{% hint style="info" %}
The above `screen` call is directly passed on to Facebook as a `track` event via its `logEvent` API, with the event name as `Viewed {screen name} screen` along with the the associated properties. The above example will be sent as a `track` event with name `Viewed MainActivity screen` along with its properties.
{% endhint %}

## Limited Data Use

In July 2020, Facebook released a [**Limited Data Use**](https://developers.facebook.com/docs/marketing-apis/data-processing-options) feature to give businesses better control over how their data is used while supporting businesses in their **California Consumer Privacy Act \(CCPA\)** compliance efforts.

You can now send **Limited Data Use** data processing parameters to Facebook for each event via RudderStack, so that Facebook can appropriately apply the user’s data choice.

To use this feature, simply enable the **Limited Data Use** setting on the RudderStack dashboard and control its behavior via the following data processing parameters:

| **Parameter** | **Default Value** | **Description** |
| :--- | :--- | :--- |
| **Data Processing Options State** | **`0`** | Use Facebook’s geolocation to determine the country. |
| **Data Processing Options Country** | **`0`** | Use Facebook’s geolocation to determine the state. |

{% hint style="success" %}
Learn more about the different data processing options accepted by Facebook [**here**](https://developers.facebook.com/docs/marketing-apis/data-processing-options).
{% endhint %}

## Configuring Facebook App Events SDK based on User's Consent

This section highlights the different consent-based options for configuring the App Events SDK.

### Disable Automatically Logged Events

{% tabs %}



To disable automatic event logging, open the application's `.plist` as code in Xcode and add the following XML to the property dictionary:

```markup
<key>FacebookAutoLogAppEventsEnabled</key>
<false/>
```

In some cases, you can delay the collection of automatically logged events to obtain user consent or fulfill legal obligations instead of disabling it entirely. To do so, call the `setAutoLogAppEventsEnabled` method of the `FBSDKSettings` class to re-enable auto-logging after the end-user provides the required consent.

{% tabs %}



```objectivec
[FBSDKSettings setAutoLogAppEventsEnabled:YES];
```



```swift
FBSDKSettings.setAutoLogAppEventsEnabled(true)
```

To suspend event collection for any reason, set the `setAutoLogAppEventsEnabled` method to `NO` for iOS or `false` for Swift.

{% tabs %}



```objectivec
[FBSDKSettings setAutoLogAppEventsEnabled:NO];
```



```swift
FBSDKSettings.setAutoLogAppEventsEnabled(false)
```



To disable automatically logged events, add the following to your `AndroidManifest.xml` file:

```markup
<application>
  ...
  <meta-data android:name="com.facebook.sdk.AutoLogAppEventsEnabled"
           android:value="false"/>
  ...
</application>
```

In some cases, you can delay the collection of automatically logged events to obtain user consent or fulfill legal obligations instead of disabling it entirely. To do so, call the `setAutoLogAppEventsEnabled()` method of the `FacebookSDK` class and set it to `true` to re-enable event logging after the end-user provides the required consent.

```java
setAutoLogAppEventsEnabled(true);
```

To suspend event logging again for any reason, set the `setAutoLogAppEventsEnabled()` method to `false`, as shown:

```java
setAutoLogAppEventsEnabled(false);
```

### Disable Collection of Advertiser IDs

{% tabs %}



To disable collection of advertiser ID, open the application's `.plist` as code in Xcode and add the following XML to the property dictionary:

```markup
<key>FacebookAdvertiserIDCollectionEnabled</key>
<false/>
```

In some cases, you can delay the collection of `advertiser_id` to obtain the user consent or fulfill any legal obligations instead of disabling it entirely. To do so, call the `setAdvertiserIDCollectionEnabled` method of the `FBSDKSettings` class and set it to `YES` for iOS, or `true` for Swift after the end-user provides consent, as shown:

{% tabs %}



```objectivec
[FBSDKSettings setAdvertiserIDCollectionEnabled:@YES];
```



```swift
FBSDKSettings.setAdvertiserIDCollectionEnabled(true);
```

To suspend collection for any reason, set the `setAdvertiserIDCollectionEnabled` method to `NO` for iOS or `false` for Swift.

{% tabs %}



```objectivec
[FBSDKSettings setAdvertiserIDCollectionEnabled:@NO];
```



```swift
FBSDKSettings.setAdvertiserIDCollectionEnabled(false)
```



To disable collection of `advertiser-id`, add the following to your `AndroidManifest.xml` file:

```markup
<application>
  ...
  <meta-data android:name="com.facebook.sdk.AdvertiserIDCollectionEnabled"
           android:value="false"/>
  ...
</application>
```

In some cases, you can delay the collection of `advertiser_id` to obtain user consent or fulfill any legal obligations instead of disabling it entirely. To do so, call the `setAdvertiserIDCollectionEnabled()` method of the `FacebookSDK` class and set it to `true` to re-enable collection of `advertiser_id` after the end-user provides consent, as shown:

```java
setAdvertiserIDCollectionEnabled(true);
```

To suspend collection for any reason, set the `setAdvertiserIDCollectionEnabled()` method to `false`.

```java
setAdvertiserIDCollectionEnabled(false)
```

### Disable Automatic SDK Initialization

To disable automatic SDK initialization in case of the Android SDK, add the following to your `AndroidManifest.xml` file:

```markup
<application>
  ...
  <meta-data android:name="com.facebook.sdk.AutoInitEnabled"
           android:value="false"/>
  ...
</application>
```

In some cases, you can delay the SDK initialization to obtain user consent or fulfill any legal obligations instead of disabling it entirely. In this case, call the class method `setAutoInitEnabled` and set it to `true` to manually initialize the SDK after the end-user provides the required consent.

```java
FacebookSdk.setAutoInitEnabled(true)
FacebookSdk.fullyInitialize()
```

## FAQs

### Where do I get the Facebook App ID?

You can find the **Facebook App ID** by logging into your Facebook Developer account, and navigating to the **Home** page of your Application dashboard.

### Where do I get the Facebook Client Token?

You can find the **Facebook Client Token** by logging into your Facebook Developer account, and navigating to the `Settings > Advanced > Client Token` in your App Dashboard.

## Contact Us

If you come across any issues while configuring Facebook App Events with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

