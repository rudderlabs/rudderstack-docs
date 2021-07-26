---
description: Step-by-step guide to send your app event data from RudderStack to Bugsnag.
---

# Bugsnag

Bugsnag provides error reporting libraries for [every major software platform](https://docs.bugsnag.com/platforms/) which automatically detect and report errors in your applications, and capture diagnostic data required to help you reproduce and fix each error.

Bugsnag monitors application stability so you can make data-driven decisions on whether you should be building new features, or fixing bugs.

## Getting Started

To enable sending data when application crashes to Bugsnag, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Bugsnag.

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | **Supported** | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Bugsnag, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Bugsnag.**

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Connection settings for Bugsnag](../../.gitbook/assets/bugsnag.png)

* Add your API key to your connection settings. You can find your API key in your Bugsnag dashboard under “Settings”, which is located in the upper left-hand corner.
* Click on **Next** to complete the configuration. Bugsnag should now be added and enabled as a destination in RudderStack.

## Adding Bugsnag to your Mobile project

{% tabs %}
{% tab title="Android" %}
Please follow the steps below to add Bugsnag to your Android Project:

* Add the following `repository` to your `app/build.gradle` file.

```text
repositories {
    mavenCentral()
}
```

* After that, add the following `dependencies` in the same file:

```text
implementation 'com.rudderstack.android.sdk:core:1.0.1-beta.1'
implementation 'com.rudderstack.android.integration:bugsnag:0.1.0-beta.1'
```

* Finally, change the initialization of your `RudderClient` in your `Application` class

```text
val rudderClient = RudderClient.getInstance(
    this,
    <YOUT_WRITE_KEY>,
    RudderConfig.Builder()
        .withDataPlaneUrl(<YOUR_DATA_PLANE_URL>)
        .withFactory(BugsnagIntegrationFactory.FACTORY)
        .build()
)
```
{% endtab %}

{% tab title="IOS" %}
Follow these steps to add Bugsnag to your iOS project:

* Go your `Podfile` and add the `Rudder-Bugsnag` extension

```text
pod 'Rudder-Bugsnag', '0.1.0-beta.1'
```

* After adding the dependency followed by `pod install` , you can add the imports to your `AppDelegate.m` file as shown:

```text
#import "RudderBugsnagFactory.h"
```

* Finally, change the initialization of your `RudderClient` as shown:

```text
RudderConfigBuilder *builder = [[RudderConfigBuilder alloc] init];
[builder withDataPlaneUrl:<YOUR_DATA_PLANE_URL>];
[builder withFactory:[RudderBugsnagFactory instance]];
[RudderClient getInstance:<YOUR_WRITE_KEY> config:[builder build]];
```
{% endtab %}
{% endtabs %}

## Identify

The `identify` call lets you associate a user to their actions and capture all the relevant traits about them. This information includes a unique `userid` as well as any optional information such as name, email address, etc.

An example `identify` call from our JS source looks like this:

```text
rudderanalytics.identify("abc123", {
        name: "Foo Bar",
        email: "foo@bar.com",
});
```

Bugsnag will show you the `userId` and `traits` in the Users tab of each error.

## Error Reporting

Along with user-specific information, you can also use Bugsnag to track handled exceptions data to your dashboard using Bugsnag’s native methods. You can find the documentation for these functions [on their website](https://docs.bugsnag.com/platforms/browsers/#reporting-handled-exceptions).

## FAQ

#### Where do I find the API Key? <a id="api-key"></a>

You can find your API Key on your Bugsnag [Project Settings page](https://bugsnag.com/dashboard).

#### What is meant by Release Stage? <a id="release-stage"></a>

You can distinguish errors that happen in different stages of your app’s release process e.g `production`, `development`, etc.

#### Do I need to use SSL? <a id="use-ssl"></a>

You should definitely use SSL When Sending Data to Bugsnag specifically from JS source.

## Contact Us

If you come across any issues while configuring Bugsnag with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

