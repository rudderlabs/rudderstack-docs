---
description: >-
  Step-by-step guide to set up Optimizely Full Stack as a destination in
  RudderStack
---

# Optimizely Full Stack

[Optimizely Full Stack](https://www.optimizely.com/products/full-stack/) is a powerful A/B testing, feature flagging and experimentation platform. It allows you to track every aspect of your customer's overall product journey, and experiment with various application features. 

With a fully-functional cross-platform support, Optimizely Full Stack allows you to roll out product features that best suit your application, and in turn boost your overall sales and customer engagement.

RudderStack supports Optimizely Full Stack as a destination to which you can send your event data in real-time.

## Getting Started

To enable sending data to Optimizely Full Stack, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Optimizely Full Stack. 

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Optimizely Full Stack, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **-** | **Supported** | **-** |
| **Cloud mode** | **-** | **-** | **-** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Optimizely Full Stack, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select Optimizely Full Stack**.**

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Connection Settings for Optimizely Full Stack](../.gitbook/assets/image.png)

The connection settings are explained in more detail below:

* **Track Known Users**: Optimizely does not alias known and unknown users. Therefore, RudderStack will send the `anonymousId` to Optimizely by default if this setting is disabled. Otherwise, the `userId` will be sent.
* **Send the  experiment and variation information as properties on a track call**: By enabling this setting, the experiment data can be sent to the other destinations as a `track` call. This is done by triggering the `Experiment Viewed` event every time an Optimizely live variable is accessed.
*  **Specifies the experiment viewed as non interaction event for Google Analytics**: Enabling this option sends `Experiment Viewed` as a non-interaction event.

Configure the settings according to your requirements and click on **Next** to complete the setup. Optimizely Full Stack should now be added and enabled as a destination in RudderStack.

### Implementation Prerequisites <a id="implementation-prerequisite"></a>

Unlike other destinations, Optimizely Full Stack for the mobile integration works a little differently. You will have to implement some Optimizely functions natively to make sure the experiment logic runs correctly.

{% hint style="info" %}
RudderStack maps the `track` calls with Optimizely's `track` calls. You need to implement all the Optimizely's decision-based methods like `activate` and `isFeatureEnabled` natively. 

For more details please checkout [Easy Event Tracking](https://blog.optimizely.com/2019/02/26/introducing-easy-event-tracking-the-easier-way-to-understand-and-optimize-the-customer-journey/) and the [Optimizely SDK reference Guide](https://docs.developers.optimizely.com/full-stack/docs/sdk-reference-guides#section-ios-and-tvos). 
{% endhint %}

## Adding Optimizely to Your Mobile Project

{% tabs %}
{% tab title="Android" %}
Please follow these steps to add Optimizely to your Android Project:

1. Add the following `repository` to your `app/build.gradle` file.

```text
repositories {
    maven { url "https://dl.bintray.com/rudderstack/rudderstack" }
}
```

   2.   After that, add the following `dependency` in the same file:

```text
implementation 'com.rudderstack.android.integration:optimizely:0.1.1'
implementation 'com.optimizely.ab:android-sdk:3.0.0'
```

  3. Initialize the Optimizely Manager:

{% hint style="success" %}
Optimizely recommends initializing their SDK as soon as possible. You need to initialize the Optimizely Manager before proceeding to the next step \(Step 4\) . 

Please refer to the Optimizely [Initializing the SDK](https://docs.developers.optimizely.com/full-stack/docs/initialize-sdk-android) guide for more information.
{% endhint %}

```text
val optimizelyManager =  OptimizelyManager.builder()
            .withSDKKey(<YOUR OPTIMIZELY SDK KEY>)
            .build(this)
```

  4. Finally, change the initialization of your `RudderClient` in your `Application` class:

```text
val rudderClient = RudderClient.getInstance(
    this,
    <YOUT_WRITE_KEY>,
    RudderConfig.Builder()
        .withEndPointUri(<YOUR_DATA_PLANE_URL>)
        .withFactory(OptimizelyIntegrationFactory.FACTORY(optimizelyManager)
        .build()
)
```

{% hint style="warning" %}
Make sure you pass the Optimizely manager instance you created \(in Step 3\) to the factory as shown in the snippet above.
{% endhint %}
{% endtab %}

{% tab title="iOS" %}
Follow these steps to add Optimizely to your iOS project:

1. Go your `Podfile` and add the `Rudder-Optimizely` extension

```text
pod 'Rudder-Optimizely'
```

    2.  After adding the dependency followed by `pod install` , you can add the imports to your `AppDelegate.m` file as shown:  


```text
#import "RudderOptimizelyFactory.h"
```

    3. Finally, change the initialization of your `RudderClient` as shown:

```text
RSConfigBuilder *builder = [[RSConfigBuilder alloc] init];
[builder withDataPlaneUrl:DATA_PLANE_URL];
// Setup optimizely logger.
OPTLYLoggerDefault *optlyLogger = [[OPTLYLoggerDefault alloc] initWithLogLevel:OptimizelyLogLevelAll];
// Create an Optimizely manager
 self.optlyManager = [[OPTLYManager alloc] initWithBuilder:[OPTLYManagerBuilder  builderWithBlock:^(OPTLYManagerBuilder * _Nullable builder) {
        builder.sdkKey = @<SDK KEY>;
        builder.logger = optlyLogger;
    }]];  
[builder withFactory:[RudderOptimizelyFactory instanceWithOptimizely:self.optlyManager]];
[builder withLoglevel:RSLogLevelDebug];
[RSClient getInstance:WRITE_KEY config:[builder build]];
```
{% endtab %}
{% endtabs %}

## Contact Us

If you come across any issues while configuring or using Optimizely Full Stack with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

