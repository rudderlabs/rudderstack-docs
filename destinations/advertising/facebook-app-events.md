---
description: >-
  Step-by-step guide to send your event data from RudderStack to Facebook App
  Events for analytics
---

# Facebook App Events

[Facebook App Events](https://developers.facebook.com/docs/app-events/) allows you to track events via your app or web page. This includes activities such as a user installing the app, completing a purchase, and more. All these information is then used for analytics for better understanding your customer.

RudderStack supports sending your event data to Facebook App Events by adding it as a destination.

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
{% tab title="iOS" %}
To add Facebook to your iOS project:

* Add the following line to your [CocoaPods](https://cocoapods.org/) `Podfile` 

```groovy
pod 'Rudder-Facebook'
```

* Initialize FB App Events iOS SDK just before intializing Rudder iOS SDK as shown below:

```objectivec
[[FBSDKApplicationDelegate sharedInstance] application:application
                             didFinishLaunchingWithOptions:launchOptions];
```
* Send user's consent to the FB App Events as shown below:

{% tabs %}
{% tab title="Objective-C" %}
```objectivec
// Set AdvertiserTrackingEnabled to YES if a user provides consent
[FBSDKSettings setAdvertiserTrackingEnabled:YES];
// Set AdvertiserTrackingEnabled to NO if a user does not provide consent
[FBSDKSettings setAdvertiserTrackingEnabled:NO];
```
{% end tab %}
{% tab title= "Swift" %}
```swift
// Set AdvertiserTrackingEnabled to true if a user provides consent
Settings.setAdvertiserTrackingEnabled(true)
// Set AdvertiserTrackingEnabled to false if a user does not provide consent
Settings.setAdvertiserTrackingEnabled(false)
```
{% end tab %}
{% end tabs %}

* Configure your project by adding the below lines to the `(<dict>...</dict>)` of your `Info.plist` :

```xml
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
Please make sure you replace `fbAPP-ID` , `APP-ID`, `CLIENT-TOKEN`, `APP-NAME` with your app specific details from the Facebook for Developers Platform.
{% endhint %}

* After adding the dependency, you must register the `RudderFacebookFactory` with your `RudderClient` initialization as a `factory` of `RudderConfig`. To do this, run the following command to import the `RudderFacebookFactory.h` file in your `AppDelegate.m` file.

```objectivec
#import <Rudder-Facebook/RudderFacebookFactory.h>
```

* Then, add the Rudder iOS SDK initialization as the following:

```objectivec
RSConfigBuilder *builder = [[RSConfigBuilder alloc] init];
[builder withDataPlaneUrl:DATA_PLANE_URL];
[builder withFactory:[RudderFacebookFactory instance]];
[RSClient getInstance:WRITE_KEY config:[builder build]];
```
{% endtab %}

{% tab title="Android" %}
To add Facebook App Events to your Android project:

* Add the repository as shown:

```groovy
repositories {
    mavenCentral()
}
```

* Add the following line to your `app/build.gradle` file under `dependencies` section:

```groovy
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.rudderstack.android.integration:facebook:1.0.0'
implementation 'com.facebook.android:facebook-android-sdk:11.1.0'
```

* Open your `/app/res/values/strings.xml` file and add the following lines (remember to replace [APP_ID] with your actual app ID):

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="fb_login_protocol_scheme">fb[APP_ID]</string>
```

* In the app/manifests/AndroidManifest.xml file, add a meta-data element to the application element:

```xml
<application android:label="@string/app_name" ...>
    ...
    <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
    ...
</application>
```



* Finally change the initialization of your `RudderClient` in your `Application` class.

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

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. This call is similar to the `page` call, but is exclusive to your mobile device.

A sample `screen` call using the RudderStack Android SDK looks like the following code snippet:

```text
[[RSClient sharedInstance] screen:@"Home" properties:@{
    @"category" : @"launcher"
}];
```

In the above snippet, RudderStack captures the information related to the screen being viewed, such as screen's name and category.

{% hint style="info" %}
The above `screen` call is directly passed on to Facebook as a `track` event via its `logEvent` API, with event name as `Viewed {screen name} screen` along with the its properties. The above example will be sent as a `track` event with name `Viewed MainActivity screen` along with its properties.
{% endhint %}

## Limited Data Use

In July 2020, Facebook has released [`Limited Data Use`](https://developers.facebook.com/docs/marketing-apis/data-processing-options) feature to give businesses more control over how their data is used in their systems and better support businesses with their California Consumer Privacy Act (CCPA) compliance efforts. 
You can send Limited Data Use data processing parameters to Facebook on each event so that Facebook can appropriately apply the user’s data choice.

You can enable `Limited Data Use` feature for your app by enabling the `Limited Data Use` setting on the dashboard and control how it behaves using the following 
  Data Processing parameters.

| **Parameter** | **Default Value** | **Description** |
| :--- | :--- | :--- |
| **Data Processing Options State** | **`0`** | Use Facebook’s geolocation to determine country. |
| **Data Processing Options Country** | **`0`** | Use Facebook’s geolocation to determine state. |

Learn more about the Data Processing Options Facebook accepts [`here`](https://developers.facebook.com/docs/marketing-apis/data-processing-options)

## Configuring FB App Events SDK based on the End User's Consent

{% tabs %}
{% tab title="iOS" %}
### Disable Automatically Logged Events

To disable automatic event logging, open the application's `.plist` as code in Xcode and add the following XML to the property dictionary:

```xml
<key>FacebookAutoLogAppEventsEnabled</key>
<false/>
```
In some cases, you want to delay the collection of automatically logged events, such as to obtain User consent or fulfill legal obligations, instead of disable it. In this case, call the `setAutoLogAppEventsEnabled` method of the FBSDKSettings class to re-enable auto-logging after the end-user provides consent.

{% tabs %}
{% tab title="Objective-C" %}
```objectivec
[FBSDKSettings setAutoLogAppEventsEnabled:YES];
```
{% end tab %}
{% tab title="Swift" %}
```swift
FBSDKSettings.setAutoLogAppEventsEnabled(true)
```
{% end tab %}
{% end tabs %}

To suspend collection again for any reasons, set the `setAutoLogAppEventsEnabled` method to `NO` for iOS or `false` for Swift.

{% tabs %}
{% tab title="Objective-C" %}
```objectivec
[FBSDKSettings setAutoLogAppEventsEnabled:NO];
```
{% end tab %}
{% tab title="Swift" %}
```swift
FBSDKSettings.setAutoLogAppEventsEnabled(false)
```
{% end tab %}
{% end tabs %}

### Disable Collection of Advertiser IDs

To disable collection of advertiser-id, open the application's `.plist` as code in Xcode and add the following XML to the property dictionary:

```xml
<key>FacebookAdvertiserIDCollectionEnabled</key>
<false/>
```

In some cases, you want to delay the collection of `advertiser_id`, such as to obtain User consent or fulfill legal obligations, instead of disabling it. In this case, call the `setAdvertiserIDCollectionEnabled` method of the FBSDKSettings class and set it to `YES` for iOS or `true` for Swift after the end-user provides consent.

{% tabs %}
{% tab title="Objective-C" %}
```objectivec
[FBSDKSettings setAdvertiserIDCollectionEnabled:@YES];
```
{% end tab %}
{% tab title="Swift" %}
```swift
FBSDKSettings.setAdvertiserIDCollectionEnabled(true);
```
{% end tab %}
{% end tabs %}

To suspend collection for any reason, set the `setAdvertiserIDCollectionEnabled` method to `NO` for iOS or `false` for Swift.


{% tabs %}
{% tab title="Objective-C" %}
```objectivec
[FBSDKSettings setAdvertiserIDCollectionEnabled:@NO];
```
{% end tab %}
{% tab title="Swift" %}
```swift
FBSDKSettings.setAdvertiserIDCollectionEnabled(false)
```
{% end tab %}
{% end tabs %}

{% end tab %}
{% tab title="Android" %}

### Disable Automatically Logged Events

To disable automatically logged events add the following to your `AndroidManifest.xml` file:

```xml
<application>
  ...
  <meta-data android:name="com.facebook.sdk.AutoLogAppEventsEnabled"
           android:value="false"/>
  ...
</application>
```
In some cases, you want to delay the collection of automatically logged events, such as to obtain user consent or fulfill legal obligations, instead of disabling it. In this case, call the `setAutoLogAppEventsEnabled()` method of the FacebookSDK class and set to true to re-enable event logging after the end-user provides consent.

```java
setAutoLogAppEventsEnabled(true);
```
To suspend logging again for any reason, set the `setAutoLogAppEventsEnabled()` method to `false`.

```java
setAutoLogAppEventsEnabled(false);
```

### Disable Collection of Advertiser IDs

To disable collection of `advertiser-id`, add the following to your `AndroidManifest.xml` file:

```xml
<application>
  ...
  <meta-data android:name="com.facebook.sdk.AdvertiserIDCollectionEnabled"
           android:value="false"/>
  ...
</application>
```
In some cases, you want to delay the collection of `advertiser_id`, such as to obtain User consent or fulfill legal obligations, instead of disabling it. In this case, call the `setAdvertiserIDCollectionEnabled()` method of the FacebookSDK class and set it to true to re-enable collection of `advertiser_id` after the end-user provides consent.

```java
setAdvertiserIDCollectionEnabled(true);
```
To suspend collection for any reason, set the `setAdvertiserIDCollectionEnabled()` method to `false`.

```java
setAdvertiserIDCollectionEnabled(false)
```
### Disable Automatic SDK Initialization
To disable automatic SDK initialization, add the following to your `AndroidManifest.xml` file:

```xml
<application>
  ...
  <meta-data android:name="com.facebook.sdk.AutoInitEnabled"
           android:value="false"/>
  ...
</application>
```

In some cases, you want to delay the SDK initialization, such as to obtain user consent or fulfill legal obligations, instead of disabling it. In this case, call the class method `setAutoInitEnabled` and set it to `true` to manually initialize the SDK after the end-user provides consent.

```java
FacebookSdk.setAutoInitEnabled(true)
FacebookSdk.fullyInitialize()
```

{% end tab %}
{% end tabs %}

## FAQs

### Where do I get the Facebook App Id?

You can find the **Facebook App Id** by logging into your Facebook Developer account, and navigating to the **Home** page of your Application dashboard. 

### Where do I get the Facebook Client Token?

You can find the **Facebook Client Token** by logging into your Facebook Developer account, and Navigating to the `Settings > Advanced > Client Token` in your App Dashboard.



## Contact Us

If you come across any issues while configuring Facebook App Events with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

