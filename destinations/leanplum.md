---
description: Step-by-step guide to send event data from RudderStack to Leanplum.
---

# Leanplum

[Leanplum](https://www.leanplum.com/) is a popular mobile marketing and customer engagement platform. It allows you to boost customer engagement and thereby drive retention, better conversion and increased business revenue.

RudderStack allows you to configure Leanplum as a destination and send your event data to it directly.

## Getting Started

To enable sending data to Leanplum, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Leanplum.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Leanplum, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **-** | **Supported** | - |
| **Cloud mode** | **-** | **-** | **-** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Leanplum, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Leanplum**.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Leanplum Connection Settings in RudderStack](../.gitbook/assets/image%20%2832%29%20%281%29%20%281%29%20%281%29%20%281%29.png)

* Enter the Leanplum **Application ID** as well as **Client Key**.  
* Click on **Next** to complete the configuration. 

Leanplum should now be added and enabled as a destination in RudderStack.

{% hint style="warning" %}
If you choose to keep the **Use in Development Environment** flag as on, then please put your `developmentKey` in the `Client Key` field. Failing to do so will result to faulty initialization of the SDK and events will not be passed.
{% endhint %}

## Adding Leanplum to your project

Depending on your platform of integration, follow these steps below to add Leanplum to your project:

{% tabs %}
{% tab title="Android" %}
Please follow the steps below to add Leanplum to your Android Project:

* Add the following `repository` to your `app/build.gradle` file. 

```groovy
repositories {
    maven { url "https://dl.bintray.com/rudderstack/rudderstack" }
}
```

* After that, add the following `dependencies` in the same file:

```groovy
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.rudderstack.android.integration:leanplum:1.+'
implementation 'com.leanplum:leanplum-core:5+'
```

* Finally, change the initialization of your `RudderClient` in your `Application` class.

```kotlin
val rudderClient = RudderClient.getInstance(
    this,
    WRITE_KEY,
    RudderConfig.Builder()
        .withDataPlaneUrl(DATA_PLANE_URL)
        .withFactory(LeanplumIntegrationFactory.FACTORY)
        .build()
)
```
{% endtab %}

{% tab title="iOS" %}
Follow these steps to add Leanplum to your iOS project:

* Go your `Podfile` and add the `Rudder-Leanplum` extension:

```ruby
pod 'Rudder-Leanplum'
```

* After adding the dependency followed by `pod install` , you can add the imports to your `AppDelegate.m` file as shown:

```objectivec
#import "RudderLeanplumFactory.h"
```

* Finally, change the initialization of your `RudderClient` as shown:

```objectivec
RudderConfigBuilder *builder = [[RudderConfigBuilder alloc] init];
[builder withEndPointUrl:DATA_PLANE_URL];
[builder withFactory:[RudderLeanplumFactory instance]];
[RudderClient getInstance:WRITE_KEY config:[builder build]];
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
The RudderStack SDKs store the `traits` information from the `identify` call in `SharedPreference` and `NSUserDefaults` for Android and iOS respectively. If RudderStack detects the `userId` in the persisted traits information, it starts the native SDK along with the `userId` . On the other hand, if it can't find the `userId` , it starts the SDK normally without it. This activity helps to build a better session. 

The code for Android is the same as below:

`Leanplum.start(applicationContext, userId)` for a persisted `userId` and `Leanplum.start(applicationContext)` if it is not present. 

RudderStack follows a similar pattern for iOS as well.

While searching for `userId` in the persisted traits, RudderStack looks for either of these fields: `userId` and `id`.
{% endhint %}

## Identify

RudderStack sets the `userId` of the user to the Leanplum SDK via the `setUserId` method, and passes all the properties under `context.traits` to the `setUserAttributes` method, to get populated in Leanplum. 

The following is an example of an `identify`call:

```text
[[RudderClient sharedInstance] identify:@"developer_user_id"
                                 traits:@{@"email": @"bar@foo.com"}];
```

## Track

Leanplum accepts any free-flowing property and event name. So, we forward the event as is to the Leanplum SDK without any modification to the payload, as long as the  `eventName` is not `null`. 

The following is an example of a `track` call in RudderStack:

```text
[[RudderClient sharedInstance] track:@"Accepted Terms of Service" 
                          properties:@{
                                  @"foo": @"bar",
                              @"foo_int": @134
}];
```

## Screen

Leanplum supports tracking the user-states. We use the `screen` calls to advance the states of the user to LeanPlum. For every `screen` event we are calling the `advanceTo` method of LeanPlum SDK along with the screen name and the `properties` along with it. 

We also send the automatically tracked `screen` events to LeanPlum.

The following is an example of a `screen` call in RudderStack:

```text
[[RudderClient sharedInstance] screen:@"Main"];
```

## Reset

RudderStack calls `clearUserContent` method of the Leanplum SDK to clear the persisted data.

The following code snippet shows a sample `reset` call:

```text
[[RudderClient sharedInstance] reset];
```

## Debugging

RudderStack sets the verbose logging for development mode for the Leanplum Native SDK, based on the `logLevel` of the `RudderClient`. If the `logLevel` is set as `DEBUG` or more, RudderStack will turn on logging using the `enableVerboseLoggingInDevelopmentMode` method of the Leanplum SDK.

## FAQs

### Where do I get the Application ID and the Client Key?

You can find your **Application ID** and **Client Key** by logging on to your Leanplum account and navigating to **More** - **App Settings** . Then, click on the **Keys & Settings** button for the application you want to integrate with, and you should get the required credentials.

## Contact Us

If you come across any issues while configuring Leanplum with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

