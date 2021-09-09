---
description: Step-by-step guide to send your event data from RudderStack to CleverTap.
---

# CleverTap

[CleverTap](https://clevertap.com/) is a popular customer engagement and retention platform. Its in-app analytics and marketing capabilities allow you to get real-time insights into your customers and build valuable, long-term relationships with them. With CleverTap, you can easily your users' actions and understand how they are using your product. You can also segment users based on their behavior and run targeted campaigns to boost your user engagement and retention metrics.

You can now send your event data directly to CleverTap through RudderStack.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/clevertap)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please check whether the platform you are sending the events from is supported by CleverTap. Please refer the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | **Supported** | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to CleverTap, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderstack.com/), add the source and CleverTap as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

![Configuration Settings for Clevertap](https://user-images.githubusercontent.com/59817155/132536986-22a68f68-6055-4b8d-82dd-168baf92ccb2.png)

## CleverTap Configuration Settings in RudderStack

To successfully configure CleverTap as a destination, you will need to configure the following settings:

* **Account ID:** Your account ID is an unique ID generated for your account. It can be found in your account in the **Settings** as your **Project ID**.
* **Passcode:** Your account passcode is an unique code generated for your account. It can be found in the **Settings** as **Passcode**.
* **Enable track for anonymous user:** Enable this option to track anonymous users in CleverTap.
* **Use Clevertap ObjectId for Mapping:** Enable this option to use both CleverTap `objectId` along with `identity` for mapping events from RudderStack to CleverTap.
* **Region:** Server Only: This is your dedicated CleverTap region.
* **Use Native SDK to send Events:** Enable this option if you want to send events using device mode.

{% hint style="info" %}
All server-side destination requests require either a `anonymousId` or a `userId` in the payload.
{% endhint %}

## Adding Device Mode Integration

{% tabs %}
{% tab title="Android" %}
To add CleverTap to your Android project and enable functionalities like push notifications, follow these steps :

* Open your project level `build.gradle` file, and add the following:

```groovy
buildscript {
  repositories {
    mavenCentral()
  }
}

allprojects {
  repositories {
    mavenCentral()
  }
}
```

* Ensure that `android.useAndroidX` is set to `true` in your `gradle.properties` file.
* Also, add the following under the `dependencies` section:

```kotlin
// ruddder core sdk
implementation 'com.rudderstack.android.sdk:core:1.+'
// rudder-clevertap integration
implementation 'com.rudderstack.android.integration:clevertap:1.+'
// clevertap native sdk
implementation 'com.clevertap.android:clevertap-android-sdk:4.+'
// if you don't have Gson included already
implementation 'com.google.code.gson:gson:2.8.6'
```

* Initialize the RudderStack SDK in the `Application` class's `onCreate()` method as shown:

```kotlin
import com.rudderstack.android.integrations.clevertap.CleverTapIntegrationFactory
import com.rudderstack.android.sdk.core.RudderClient
import com.rudderstack.android.sdk.core.RudderConfig

// initializing Rudder SDK
val rudderClient = RudderClient.getInstance(
    this,
    WRITE_KEY,
    RudderConfig.Builder()
        .withDataPlaneUrl(DATA_PLANE_URL)
        .withFactory(CleverTapIntegrationFactory.FACTORY)
        .build()
    )
```
{% endtab %}

{% tab title="iOS" %}
Follow these steps to add CleverTap to your iOS project:

* Go your `Podfile` and add the `Rudder-CleverTap` extension as shown below:

```objectivec
pod 'Rudder-CleverTap'
```

* After adding the dependency followed by `pod install` , you can add the imports to your `AppDelegate.m` file as shown:

```objectivec
#import "RudderCleverTapFactory.h"
```

* Finally, change the initialization of your `RudderClient` as shown:

```objectivec
RudderConfigBuilder *builder = [[RudderConfigBuilder alloc] init];
[builder withDataPlaneUrl:DATA_PLANE_URL];
[builder withFactory:[RudderCleverTapFactory instance]];
[RudderClient getInstance:WRITE_KEY config:[builder build]];
```
{% endtab %}

{% tab title="React Native" %}
To add CleverTap to your React Native project:

Add the RudderStack-CleverTap module to your app using :

```bash
npm install @rudderstack/rudder-integration-clevertap-react-native
## OR ##
yarn add @rudderstack/rudder-integration-clevertap-react-native
```

Run `pod install` inside the `ios` directory of your project adding `@rudderstack/rudder-integration-clevertap-react-native` to your project.

Import the module you added above and add it to your SDK initialization code as shown below:

```typescript
import rudderClient from '@rudderstack/rudder-sdk-react-native';
import clevertap from "@rudderstack/rudder-integration-clevertap-react-native";

const config = {
    dataPlaneUrl: DATA_PLANE_URL,
    trackAppLifecycleEvents: true,
    withFactories: [clevertap]
};
rudderClient.setup(WRITE_KEY, config);
```
{% endtab %}
{% endtabs %}

## Configuring Push Notifications and In-App Messages

The steps to configure push notifications for CleverTap for the platform of your choice are as mentioned below:

{% tabs %}
{% tab title="Android" %}
* Register push notifications for Android devices on your CleverTap dashboard either by uploading your FCM credentials or any other supported credentials by navigating to **Settings** - **Channels** - **Mobile Push** - **Android**.
* Add the following dependency in your project level `build.gradle` file inside the `buildscript`:

```groovy
dependencies {
  classpath 'com.google.gms:google-services:4.3.5'
}
```

* Next, add the following dependencies and plugin to your app level `build.gradle` file:

```groovy
dependencies {
  // for push notifications
  implementation 'com.clevertap.android:clevertap-android-sdk:4.0.0'
  implementation 'com.google.firebase:firebase-messaging:20.2.4'
}
apply plugin: 'com.google.gms.google-services'
```

* Place the `google-services.json` downloaded from the `Firebase console` into the root folder of your `app`.
* Add your `CLEVERTAP_ACCOUNT_ID` , `CLEVERTAP_TOKEN` & `FcmMessageListenerService` to the `application` tag of your app's `AndroidManifest.xml`, as below:

```markup
<meta-data
  android:name="CLEVERTAP_ACCOUNT_ID"
  android:value="XXX-XXX-XXXX"/>
<meta-data
  android:name="CLEVERTAP_TOKEN"
  android:value="XXX-XXX"/>
<service android:name="com.clevertap.android.sdk.pushnotification.fcm.FcmMessageListenerService">
  <intent-filter>
    <action android:name="com.google.firebase.MESSAGING_EVENT"/>
  </intent-filter>
</service>
```

* Finally, create a notification channel anywhere in your application using the following block of code. You can then use this `channel Id` while creating any campaign on your CleverTap Dashboard.

```kotlin
import android.app.Application;
import com.clevertap.android.sdk.CleverTapAPI;

CleverTapAPI.createNotificationChannel(
    getApplicationContext(),
    "yourChannelId",
    "Your Channel Name",
    "Your Channel Description",
    NotificationManager.IMPORTANCE_MAX,
    true
);
```

{% hint style="info" %}
For the Push Notification and In-App messages function correctly, CleverTap needs to know the `Application` status as early as possible. You can either set the `android:name` in your `AndroidManifest.xml` tag to `com.clevertap.android.sdk.Application`. Or, if you have a custom Application class, call `ActivityLifecycleCallback.register(this);` before `super.onCreate()` in your Application class.

To know more on this you can check the [CleverTap documentation on push notifications](https://github.com/CleverTap/clevertap-android-sdk#setup-the-lifecycle-callback---important).
{% endhint %}
{% endtab %}

{% tab title="iOS" %}
* Add Push Notification as a capability by navigating to Target - `Signing & Capabilities` of your app when opened in Xcode.
* Enable `Background Modes/Remote notifications` by navigating to **Targets** -&gt; **Your App** -&gt; **Capabilities** -&gt; **Background Modes** and then check `Remote notifications`
* Register the push notifications for the iOS devices on your CleverTap dashboard either by uploading Auth Key or APNS Push Certificate by navigating to **Settings** -&gt; **Channels** -&gt; **Mobile Push** -&gt; **iOS**.
* Then, add the following code in your app just after initializing RudderStack's iOS SDK to register the push notifications.

```objectivec
#import <UserNotifications/UserNotifications.h>

// register for push notifications
UNUserNotificationCenter* center = [UNUserNotificationCenter currentNotificationCenter];
center.delegate = self;
[center requestAuthorizationWithOptions:(UNAuthorizationOptionAlert | UNAuthorizationOptionSound | UNAuthorizationOptionBadge)
completionHandler:^(BOOL granted, NSError * _Nullable error) {
  if (granted) {
    dispatch_async(dispatch_get_main_queue(), ^(void) {
        [[UIApplication sharedApplication] registerForRemoteNotifications];
        });
  }
}];
```

* Finally, add the below handlers to handle the tokens and push notifications accordingly:

```objectivec
#import "RudderCleverTapIntegration.h"

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [[RudderCleverTapIntegration alloc] registeredForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
  [[RudderCleverTapIntegration alloc] receivedRemoteNotification:userInfo];
  completionHandler(UIBackgroundFetchResultNoData);
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
  [[RudderCleverTapIntegration alloc] receivedRemoteNotification:response.notification.request.content.userInfo];
}
```
{% endtab %}

{% tab title="React Native" %}
* Open `android` folder of your React Native app and do follow all the steps mentioned in `Android` tab of [Configuring Push Notifications](clevertap.md#configuring-push-notifications)
* Open `ios` folder of your React Native app and do follow all the steps mentioned in `iOS` tab of [Configuring Push Notifications](clevertap.md#configuring-push-notifications)
{% endtab %}
{% endtabs %}

## Using CleverTap ObjectId and Identity for Mapping \(Cloud Mode Only\)

CleverTap uniquely identifies each user with two main identifiers, namely `objectId` and `identity`. When the **Use Clevertap ObjectId for Mapping** option is enabled in the dashboard, both `objectId` and `identity` are used for mapping.

When the **Use Clevertap ObjectId for Mapping** setting is disabled in the dashboard, RudderStack expects the the following mapping for identifying users and tracking events \(`track`/`page`/`screen`\):

| RudderStack | CleverTap |
| :--- | :--- |
| `userId` or `anonymousId` | `identity` |

When the **Use Clevertap ObjectId for Mapping** setting is enabled in the dashboard, the following mapping is expected:

* For `identify` events:

| RudderStack | RudderStack | CleverTap | CleverTap |
| :--- | :--- | :--- | :--- |
| **`anonymousId` present** | **`userId` present** | **`objectId`** | **identity** |
| true | true | anonymousId | userId |
| true | false | anonymousId | - |
| false | true | userId | userId |

* For `track` events:

| RudderStack | RudderStack | CleverTap | CleverTap |
| :--- | :--- | :--- | :--- |
| **`anonymousId` present** | **`userId` present** | **tracking with** | **value** |
| true | true | identity | userId |
| true | false | objectId | anonymousId |
| false | true | identity | userId |

## Why enable the Use Clevertap ObjectId for Mapping setting?

When you track an unidentified user in CleverTap, a user profile is created with minimal details, along with the details of the user's activity. When the same user is then identified with a `userId` without the **Use CleverTap ObjectId for Mapping** option enabled, RudderStack creates another profile for the user with the identifier `userId` \(in case of RudderStack\) which maps to `identity` \(in case of CleverTap\).

One way to solve this problem is to track users only in cases where a `userId` is present. To do so, you can disable the **Enable tracking for anonymous users** option in the RudderStack dashboard. Alternatively, you can enable the **Use Clevertap ObjectId for Mapping** option in the dashboard which allows you to track the anonymous users and when they are later identified, merge their `anonymousId` with their `userId`.

## Device token upload using cloud mode

{% hint style="info" %}
This section is applicable for the Android and iOS sources when sending events via the Cloud Mode.
{% endhint %}

When the device token is present in `context.device.token` in `identify` calls, RudderStack will use the [CleverTap Device Token Upload API](https://developer.clevertap.com/docs/upload-device-tokens-api) to upload the device token for the identified user. For Android, RudderStack sets the token type as `fcm`. For iOS, it is set as `apns`.

{% hint style="warning" %}
To use this feature you should have enabled the **Use Clevertap ObjectId for Mapping** option in the dashboard, as RudderStack needs the `objectId` to upload the device token.
{% endhint %}

## Page

The `page` call allows you to record information whenever a user sees a web page, along with its associated properties.

When you send a `page` event , RudderStack sends that event to CleverTap as a **"Web Page Viewed `Page Name`** event.

An example of a `page` call is shown below:

```javascript
rudderanalytics.page("Cart", "Cart Viewed", {
  path: "/cart",
  referrer: "test.com",
  search: "term",
  title: "test_item",
  url: "http://test.in",
});
```

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. This call is similar to the `page` call, but is exclusive to your mobile device.

A sample `screen` call looks like the following code snippet:

```text
[[RSClient sharedInstance] screen:@"Sample Screen Name"
        properties:@{@"prop_key" : @"prop_value"}];
```

In the above snippet, RudderStack captures all the information related to the screen being viewed, along with any additional info associated with that screen view event. In CleverTap, the above `screen` call will be shown as - **"Screen Viewed: `Sample Screen Name` "** along with the properties.

{% hint style="info" %}
Note that **`screen` calls are only supported in the RudderStack cloud mode** integration. To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

## Track

The `track` call allows you to capture any action that the user might perform, along with the properties associated with that action. Each action is considered to be an event. It is similar to `screen` event, and the user is by default associated with `userId` or `anonymousId`.

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Checked Out", {
  Clicked_Rush_delivery_Button: true,
  total_value: 2000,
  revenue: 2000,
});
```

In the above snippet, RudderStack captures the information related to the `Checked Out` event, along with any additional info about that event - in this case the details of the `Checked out` event.

{% hint style="info" %}
To set a specific value to the `screen` or `track` type event, you need to pass the `event` related property in the `properties` field.
{% endhint %}

{% hint style="info" %}
Note: For `track`, `page` and `screen` events CleverTap does not support arrays or nested objects for custom event properties.
{% endhint %}

### Order Completed

When you track an event with the name `Order Completed` using the using Rudderstack's [e-commerce](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-ecommerce-events-specification/ordering#order-completed) tracking API , Rudderstack maps that event to CleverTap’s [Charged](https://developer.clevertap.com/docs/concepts-events#recording-customer-purchases) event.

A number of Rudderstack's specific fields map to CleverTap’s standard `Charged` event fields

| **Rudderstack** | **CleverTap** |
| :--- | :--- |
| `checkout_id` | `Charged ID` |
| `revenue` | `Amount` |
| `products` | `Items` |

A sample `Order Completed` event looks like the following:

```javascript
 rudderanalytics.track("Order Completed", {
   checkout_id: "12345",
   order_id: "1234",
   affiliation: "Apple Store",
   "Payment mode": "Credit Card",
   total: 20,
   revenue: 15.0,
   shipping: 22,
   tax: 1,
   discount: 1.5,
   coupon: "Games",
   currency: "USD",
   products: [
     {
       product_id: "123",
       sku: "G-32",
       name: "Monopoly",
       price: 14,
       quantity: 1,
       category: "Games",
       url: "https://www.website.com/product/path",
       image_url: "https://www.website.com/product/path.jpg",
     },
     {
       product_id: "345",
       sku: "F-32",
       name: "UNO",
       price: 3.45,
       quantity: 2,
       category: "Games",
     },
     {
       product_id: "125",
       sku: "S-32",
       name: "Ludo",
       price: 14,
       quantity: 7,
       category: "Games",
       brand: "Ludo King",
     },
   ],
 });
```

{% hint style="info" %}
The `Order Completed` E-Commerce event is free flowing event, if you are setting extra fields for example: `discount`, `coupon` `currency` etc these will be automatically set to `Charged` event properties.
{% endhint %}

## Identify

The `identify` call lets you associate a user with their actions and capture all the relevant traits about them. This information includes unique `userid` as well as any optional information such as `name`, `email`, etc.

A number of Rudderstack's special traits map to CleverTap’s standard user profile fields, as shown in the table below. You will be required to pass the key on the left into Rudderstack and RudderStack will transform it to the key on the right before sending to CleverTap.

| **Rudderstack** | **Clevertap** |
| :--- | :--- |
| `name` | `Name` |
| `birthday` | `DOB` |
| `avatar` | `Photo` |
| `gender` | `Gender` |
| `phone` | `Phone` |
| `email` | `Email` |
| `employed` | `Employed` |
| `education` | `Education` |
| `married` | `Married` |
| `customerType` | `Customer Type` |

All other traits will be sent to CleverTap as custom attributes.

A sample `identify` call looks like the following:

```javascript
rudderanalytics.identify("userid", {
  name: "Name Surname",
  email: "name@website.com",
  phone: "phone",
  birthday: "birthday",
  gender: "M",
  avatar: "link to image",
  title: "Owner",
  organization: "Company",
  city: "Tokyo",
  region: "ABC",
  country: "JP",
  zip: "100-0001",
  Flagged: false,
  Residence: "Shibuya",
  MSG-email: false
});
```

In the above snippet, RudderStack captures relevant information about the user such as the `email`, `phone` as well as the associated traits of that user.

{% hint style="info" %}
If a user already exists, the new values will be updated for that user. Rudderstack automatically maps the `userId` \(or `anoymousId`\) to CleverTap user's `identity`.
{% endhint %}

{% hint style="info" %}
Note: For `identify` events CleverTap does not support nested objects for user's `traits`.
{% endhint %}

{% hint style="info" %}
Profile properties `MSG-email`, `MSG-push`, `MSG-sms` and `MSG-whatsapp` are used to set the Do-Not-Disturb status for the user. Unless these are explicitly set to `false`, they are always `true`.

Example: To disable push notifications for a user, set `MSG-push` to `false`
{% endhint %}

## Contact Us

If you come across any issues while configuring CleverTap with RudderStack, feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

