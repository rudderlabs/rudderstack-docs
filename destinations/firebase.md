---
description: Step-by-step guide to send your event data from RudderStack to Firebase
---

# Firebase

[Firebase](https://firebase.google.com/) a popular mobile platform powered by Google that helps you to quickly develop high quality, enterprise-grade applications and grow your business. It is tightly integrated with Google Analytics, a powerful analytics solution, and offers unlimited reporting for up to 500 events defined using the Firebase SDK. You can check the code for Firebase destination on [GitHub](https://github.com/firebase/) for Android and iOS.

RudderStack allows you to send your event data from your source mobile apps to Firebase through our Android, iOS and Unity SDKs. This guide will help you set up, configure and use Firebase for your project.

## Getting Started

To get started, please check whether the platform you are working with is supported by Firebase. The following table lists the supported connection modes across various platforms:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | **Supported** | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Then, from your [RudderStack dashboard](https://app.rudderlabs.com/) you can easily add **Firebase** as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

Depending on your platform of integration follow the steps below to enable Firebase in your project:

{% tabs %}
{% tab title="Android" %}
Follow these steps to add Firebase to your Android project:

* Register your mobile application in the [Firebase console](https://console.firebase.google.com/).
* Once you have successfully created the application in Firebase console, you will be prompted to download the `google-services.json` file.
* Copy this file in your `app` folder of your project. The file contains all the necessary information about the project and the integration.
* Add the `classpath` under `dependencies` to your project level `build.gradle`

```text
buildscript {
    repositories {
        google()
    }
    dependencies {
        // add this line
        classpath 'com.google.gms:google-services:4.3.3'
    }
}

```

* Once you have completed the steps above, you can add the `plugins` and `dependencies` to your `app/build.gradle` file as shown:

```text
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services'
```

* Then, add the repository as shown:

```text
repositories {
    maven { url "https://dl.bintray.com/rudderstack/rudderstack" }
}
```

* Add the RudderStack-Firebase SDK extension along with `core` SDK under `dependencies`:

```text
implementation 'com.rudderstack.android.sdk:core:1.0.1'
implementation 'com.rudderstack.android.integration:firebase:0.1.1'
```

* Then, add the necessary `permissions` under `AndroidManifest.xml`

```text
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

* Finally change the initialization of your `RudderClient` in your `Application` class.

```text
val rudderClient = RudderClient.getInstance(
    this,
    <YOUT_WRITE_KEY>,
    RudderConfig.Builder()
        .withDataPlaneUrl(<YOUR_DATA_PLANE_URL>)
        .withFactory(FirebaseIntegrationFactory.FACTORY)
        .build()
)
```
{% endtab %}

{% tab title="iOS" %}
Follow these steps to add Firebase to your iOS project:

* Register your app to [Firebase Console](https://console.firebase.google.com). It will then prompt you to download the `GoogleServices-Info.plist` file.
* Add the file to the root of your XCode project.
* Go your `Podfile` and add the `Rudder-Firebase` extension along with `Core` SDK using the following code:

```text
pod 'Rudder-Firebase'
```

* After adding the dependency followed by `pod install` ,you can add the imports to your `AppDelegate.m` file as shown:

```text
#import "RudderFirebaseFactory.h"
```

* Finally change the intialization of your `RudderClient` as shown:

```text
RSConfigBuilder *builder = [[RSConfigBuilder alloc] init];
[builder withDataPlaneUrl:DATA_PLANE_URL];
[builder withFactory:[RudderFirebaseFactory instance]];
[builder withLoglevel:RSLogLevelDebug];
[RSClient getInstance:WRITE_KEY config:[builder build]];
```

{% hint style="info" %}
RudderStack will bundle the `Firebase/Core` and `FirebaseAnalytics` by default with `Rudder-Firebase` pod.
{% endhint %}
{% endtab %}

{% tab title="Unity" %}
Follow these steps to add Firebase to your Unity project:

* Register your project in [Firebase Console](https://console.firebase.google.com). We support only `Android` and `iOS` for Unity.
* After adding the project, Firebase will prompt you to download the `google-services.json` for Android and `GoogleServices-Info.plist` for iOS. 
* Add those two files to your `Assets` folder.
* Integrate the RudderStack `core` SDK with your project. To know more, please refer to our [Getting Started with Unity SDK](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/getting-started-with-unity-sdk) guide.
* Download and import the Firebase Unity SDK and follow these instructions on [adding Firebase SDK to your project](https://firebase.google.com/docs/unity/setup). Specifically `FirebaseAnalytics.unitypackage`.
* Download [Firebase Extension for RudderStack](https://github.com/rudderlabs/rudder-sdk-unity/raw/master/Integrations/Firebase/rudder-integration-firebase-unity.unitypackage) from our GitHub page and import into your project.
* Attach `RudderPreferbs.prefab`  file from `Rudder` to your Main `GameObject`
* Finally, change the SDK initialization using the following code snippet:

```text
// Build your config
RudderConfigBuilder configBuilder = new RudderConfigBuilder()
    .WithEndPointUrl(<YOUR_DATA_PLANE_URL>)
    .WithFactory(RudderFirebaseIntegrationFactory.GetFactory());

// get instance for RudderClient
RudderClient rudderClient = RudderClient.GetInstance(
    <YOUR_WRITE_KEY>,
    configBuilder.Build()
);
```
{% endtab %}

{% tab title="ReactNative" %}
Follow these steps to add Firebase to your ReactNative project:

* Register your Android and iOS applications in the [Firebase console](https://console.firebase.google.com/).
* Once you have successfully created the applications in the Firebase console, you will be prompted to download the `google-services.json` and `GoogleServices-Info.plist` files.
* Add the RudderStack react native SDK to your app - refer  [Getting Started with the ReactNative SDK](../rudderstack-sdk-integration-guides/rudderstack-react-native-sdk.md).
* Add the RudderStack-Firebase react native module to your app using :

  ```text
  npm install @rudderstack/rudder-integration-firebase-react-native
  // OR // 
  yarn add @rudderstack/rudder-integration-firebase-react-native
  ```

* Import the module you added above and add it to your SDK initialization code in the following manner:

  ```text
  import rudderClient from '@rudderstack/rudder-sdk-react-native';
  import firebase from "@rudderstack/rudder-integration-firebase-react-native";

  const config = {
      dataPlaneUrl: <DATAPLANE_URL>,
      trackAppLifecycleEvents: true,
      withFactories: [firebase]
  };

  rudderClient.setup(<WRITE_KEY>, config);
  ```

* Navigate to your app's `android` folder and follow the following steps:

  * Copy the `google-services.json` file in the `app` folder of your android project. The file contains all the necessary information about the project and the integration.
  * Add the `classpath` under `dependencies` to your project level `build.gradle`

  ```text
  buildscript {
      repositories {
          google()
      }
      dependencies {
          // add this line
          classpath 'com.google.gms:google-services:4.3.3'
      }
  }

  ```

  * Once you have completed the steps above, you can add the `plugins` and `dependencies` to your `app/build.gradle` file as shown:

  ```text
  apply plugin: 'com.android.application'
  apply plugin: 'com.google.gms.google-services'
  ```

  * Then, add the necessary `permissions` under `AndroidManifest.xml`

  ```text
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  ```

* Navigate to your app's `iOS` folder and follow the following steps:
  * Install all required pods using `pod install`
  * Add the `GoogleServices-Info.plist`file to the root of your XCode project.
{% endtab %}
{% endtabs %}

## Identify

The `identify` call from RudderStack sets the `userId` through `setUserId` method from `FirebaseAnalytics` . We set other user properties from `RudderTraits` to Firebase using the `setUserProperty` method. We ignore `age`, `gender` and `interest` as these are reserved by Google for their own purpose.

```text
[[RSClient sharedInstance] identify:@"test_user_id"
                             traits:@{@"foo": @"bar",
                                      @"foo1": @"bar1",
                                      @"email": @"test@gmail.com",
                                      @"key_1" : @"value_1",
                                      @"key_2" : @"value_2"
                             }
];
```

## Track

The `track` call from RudderStack is mapped to the appropriate standard events of Firebase wherever possible. We map the events as per the following table:

| RudderStack Event | Firebase Event |
| :--- | :--- |
| `Payment Info Entered` | `add_payment_info` |
| `Product Added` | `add_to_cart` |
| `Application Opened`  | `app_open` |
| `Checkout Started` | `begin_checkout` |
| `Order Completed` | `ecommerce_purchase` |
| `Order Refunded` | `purchase_refund` |
| `Product Searched` | `search` |
| `Product Shared` | `share` |
| `Product Viewed` | `view_item` |
| `Product List Viewed` | `view_item_list` |
| `Product Removed` | `remove_from_cart` |
| `Checkout Step Viewed` | `checkout_progress` |
| `Product Clicked` | `select_content` |
| `Promotion Viewed` | `present_offer` |

Apart form the above mentioned events, the following standard events of Firebase are not mapped from any RudderStack event. You can mention the exact names from the following list to be perceived as the standard event in Firebase. 

* `campaign_details` 
* `generate_lead` 
* `join_group` 
* `level_end` 
* `level_start` 
* `level_up` 
* `login` 
* `post_score` 
* `sign_up` 
* `spend_virtual_currency` 
* `tutorial_begin` 
* `tutorial_complete` 
* `unlock_achievement` 
* `view_search_results` 
* `earn_virtual_currency` 
* `set_checkout_option` 

We pass all the `properties` from the event to Firebase. The nested value in the properties are converted to JSON using [GSON](https://github.com/google/gson).

We modify the event property parameter names as per the following table.

| Standard Rudder Name | Standard Firebase Name |
| :--- | :--- |
| `step` | `checkout_step` |
| `category` | `item_category` |
| `cart_id`,`product_id` | `item_id` |
| `share_via` | `method` |
| `query` | `search_term` |
| `value` | `value` |
| `currency` | `currency` |
| `order_id` | `transaction_id` |
| `tax` | `tax` |
| `shipping` | `shipping` |
| `coupon` | `coupon` |
| `name` | `name` |
| `quantity` | `quantity` |
| `price` | `price` |

Along with the above list of the standard property key names, we do the following things in Android:

* Convert names to lower case
* Trim the white spaces from the start and the end.
* Replace `space` with `underscore` 
* If the length of the key is more than 40, we take the substring of length 40 from the beginning

Firebase enforces to have the value of length less than 100. RudderStack takes the substring of length 100 from the beginning if the length exceeds the permitted value.

A sample `track` call from the iOS SDK will look like the below

```text
[[RSClient sharedInstance] track:@"simple_track_with_props" properties:@{
    @"key_1" : @"value_1",
    @"key_2" : @"value_2"
}];
```

## Screen

RudderStack does not send the screen view events to Firebase from the Firebase SDK, as automatic screens views work out of the box from the SDK. There is no option to turn off this feature in Android. 

## Debugging

You can check the events and the properties along with it in the Firebase Debug View. To enable it for Android, fire the command below from your terminal:

```text
$ adb shell setprop debug.firebase.analytics.app <your_package_name>
```

For iOS, specify the following in your command line argument in XCode:

```text
-FIRDebugEnabled
```

## Contact Us

If you come across any issues while configuring Firebase with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

