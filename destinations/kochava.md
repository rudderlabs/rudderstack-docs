---
description: Step-by-step guide to send event data from RudderStack to Kochava.
---

# Kochava

[Kochava](https://www.kochava.com/) is a leading mobile measurement and app analytics platform that offers unique dynamic deep linking, audience segmenting and data accessibility features for your business.

RudderStack allows you to send relevant events to Kochava through a S2S \(Server-to-Server\) integration with the platform.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/kochava)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack app, please check whether the platform you are working on is supported by Kochava. Refer the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | **Supported** | - |
| **Cloud mode** | - | **Supported** | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Kochava, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source from which you want to send the event data.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Once you have added the source, select Kochava from the list of destinations.
* In the **Connection Settings** page, please enter the relevant information in the fields shown in the following screen:

![Destination Settings for Kochava](../.gitbook/assets/kochava.png)

## Kochava Configuration Settings in RudderStack

To successfully configure Kochava as a destination, you will need to configure the following settings:

* **App GUID:** App GUID is an unique ID generated for your app by Kochava. It can be found in your account Under **Apps & Assets** -> **All Apps** and then select your app to view `App GUID`.

{% hint style="info" %}
The below two settings are applicable for `iOS Device Mode` only.
{% endhint %}

* **Enable AppTrackingTransparency (ATT):** Turn this on if you want to enable the `AppTrackingTransparency` feature provided by Kochava iOS SDK. Make sure to include in your info.plist the key `NSUserTrackingUsageDescription` and a string value explaining why you are requesting authorization to track. 

* **Enable skAdNetwork:** Turn this on if you want to enable the `skAdNetwork` feature provided by Kochava iOS SDK.

## Adding Device Mode Integration

{% tabs %}
{% tab title="Android" %}
To add Kochava to your Android project and enable functionalities like push notifications, follow these steps :

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

* Also, add the following under the `dependencies` section:

```kotlin
// ruddder core sdk
implementation 'com.rudderstack.android.sdk:core:1.+'
// rudder-kochava integration
implementation 'com.rudderstack.android.integration:kochava:1.0.0'
// Kochava native sdk
implementation 'com.kochava.base:tracker:3.10.0'
// if you don't have Gson included already
implementation 'com.google.code.gson:gson:2.8.6'
```

* Initialize the RudderStack SDK in the `Application` class's `onCreate()` method as shown:

```kotlin
import com.rudderstack.android.integrations.kochava.KochavaIntegrationFactory
import com.rudderstack.android.sdk.core.RudderClient
import com.rudderstack.android.sdk.core.RudderConfig

// initializing Rudder SDK
val rudderClient = RudderClient.getInstance(
    this,
    WRITE_KEY,
    RudderConfig.Builder()
        .withDataPlaneUrl(DATA_PLANE_URL)
        .withFactory(kochavaIntegration.FACTORY)
        .build()
)
```
{% endtab %}

{% tab title="iOS" %}
Follow these steps to add Kochava to your iOS project:

* Go your `Podfile` and add the `Rudder-Kochava` extension as shown below:

```objectivec
pod 'Rudder-Kochava'
```

* After adding the dependency followed by `pod install` , you can add the imports to your `AppDelegate.m` file as shown:

```objectivec
#import "RudderKochavaFactory.h"
```

* Finally, change the initialization of your `RudderClient` as shown:

```objectivec
RudderConfigBuilder *builder = [[RudderConfigBuilder alloc] init];
[builder withDataPlaneUrl:DATA_PLANE_URL];
[builder withFactory:[RudderKochavaFactory instance]];
[RudderClient getInstance:WRITE_KEY config:[builder build]];
```
{% endtab %}
{% endtabs %}

## Track

The `track` event captures information related to the actions performed by the user. For more information, refer to the the [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

RudderStack transforms the following events to Kochava's Standard Events, as shown in the table below:

| RudderStack Event Name | Kochava Standard Event |
| :--- | :--- |
| `Product Added` | `Add to Cart` |
| `Add To Wishlist` | `Add to Wishlist` |
| `Checkout Started` | `Checkout Start` |
| `Order Completed` | `Purchase` |
| `Product Reviewed` | `Rating` |
| `Products Searched` | `Search` |

{% hint style="info" %}
Rest of the events are sent to Kochava as custom events.
{% endhint %}

{% hint style="info" %}
You can send an event with the name same as that of an Kochava's standard event to get perceived as `Standard Event` in Kochava.
{% endhint %}

A sample `track` event for sending event data to Kochava looks like the following code snippet:

```text
[[RudderClient sharedInstance] track:@"Product Added" properties:@{
@"price": @2.0, 
@"product_id": @"product_id_a", 
@"product_name": @"Product Name A"
}];
```

According to the table above, this will change the `Product Added` event to `Add to Cart` event in Kochava dashboard and pass the properties along with this.

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. This call is similar to the `page` call, but is exclusive to your mobile device.

A sample `screen` call looks like the following code snippet:

```text
MainApplication.rudderClient.screen("Sample Screen Name",
            RudderProperty()
                .putValue("prop_key","prop_value"));
```

In the above snippet, RudderStack captures all the information related to the screen being viewed, along with any additional info associated with that screen view event. In Kochava, the above `screen` call will be shown as - **"screen view `Sample Screen Name` "** along with the properties.

{% hint style="info" %}
Note that `screen` call will send the event as custom events.
{% endhint %}

## Configuring Push Notifications

The steps to configure push notifications for Kochava for the platform of your choice are as mentioned below:

{% tabs %}
{% tab title="Android" %}
* Register push notifications for Android devices on your Kochava dashboard.
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
    implementation 'com.google.firebase:firebase-messaging:21.1.0'
}
apply plugin: 'com.google.gms.google-services'
```

* Place the `google-services.json` downloaded from the `Firebase console` into the root folder of your `app`.

* Passing the new Push Token received fron FCM to the Kochava-sdk. For more information, look into the sample-kotlin app.

```text
import com.google.firebase.messaging.FirebaseMessagingService
import com.rudderstack.android.integrations.kochava.KochavaIntegrationFactory.registeredForPushNotificationsWithFCMToken

// Extending FirebaseMessagingService class
class MyFirebaseMessagingService : FirebaseMessagingService() {

    // The onNewToken callback fires whenever a new token is generated.
    override fun onNewToken(token: String) {
        super.onNewToken(token)

        // Method to pass the push token to the Kochava native sdk
        registeredForPushNotificationsWithFCMToken(token)
    }
}
```
{% endtab %}

{% tab title="iOS" %}
* Add Push Notification as a capability by navigating to Target - `Signing & Capabilities` of your app when opened in Xcode.
* Enable `Background Modes/Remote notifications` by navigating to **Targets** -&gt; **Your App** -&gt; **Capabilities** -&gt; **Background Modes** and then check `Remote notifications`
* Register the push notifications for the iOS devices on your Kochava dashboard.
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
#import <RudderKochavaIntegration.h>

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
    [[RudderKochavaIntegration alloc] registeredForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler
{
    completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler
{
    [[RudderKochavaIntegration alloc] receivedRemoteNotification:response.notification.request.content.userInfo withActionString:response.actionIdentifier];
}
```
{% endtab %}
{% endtabs %}
## FAQs

### Where do I get the Kochava APP GUID?

In order to obtain the Kochava APP GUID, please follow these steps:

1. [Log in to Kochava](https://go.kochava.com/session) and select the desired account and app for the specific campaign.
2. Under **Apps & Assets**, select **All Apps**
3. Click on the desired app for which you want the procure the APP GUID
4. You will be able to see the APP GUID under the title of the app, within the details.

For more information, please check the [Kochava support guide](https://support.kochava.com/reference-information/locating-an-app-guid/).

## Contact Us

If you come across any issues while configuring Kochava with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

