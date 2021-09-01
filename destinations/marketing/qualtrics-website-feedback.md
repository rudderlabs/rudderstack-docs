---
description: >-
  Step-by-step guide to send your event data from RudderStack to Qualtrics
  Website Feedback.
---

# Qualtrics Website Feedback

[**Qualtrics**](https://www.qualtrics.com/au/core-xm/survey-software/) is a popular survey software that lets you create intelligent, real-time user surveys. It lets you get cutting-edge insights into your customers and use them to boost your brand value.

RudderStack supports Qualtrics as a [**website feedback destination**](https://api.qualtrics.com/sdks/docs/SDKs/Web%20Intercept%20SDK/web-feedback-javascript-api-reference-1.md) to which you can send your event data directly.

## Getting Started

Before configuring Qualtrics as a destination in RudderStack, verify if Qualtrics supports the source platform you are sending the events from. Refer to the following table:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | **Supported** | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the source platform supports sending events to Qualtrics, follow these steps:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source and select **Qualtrics** from the list of destinations.

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

![Configuration Settings for Qualtrics](https://user-images.githubusercontent.com/59817155/128999630-37a8cac7-cd8c-4ba8-8b15-1435afeff4ca.png)

### Configuration Settings

To successfully configure Qualtrics as a destination, you will need to configure the following settings:

* **Project ID:** Enter your Qualtrics Project ID here.
* **Brand ID:** Enter your Qualtrics Brand ID here.

{% hint style="info" %}
Refer to the **FAQ** section below for steps on how to get your Qualtrics Project ID and Brand ID.
{% endhint %}

* **Enable Generic Page Title:** If this field is enabled, RudderStack sends every `page` call with the name `Viewed a Page`.

{% hint style="info" %}
This field is useful only when using the `page` call.
{% endhint %}

{% hint style="info" %}
If this option is disabled, RudderStack will search for the category and name of the `page` call and send the event as `Viewed <category_field> <name_field> Page`. If any of the two fields is absent, RudderStack sends the `page` call as `Viewed <category_field>/<name_field> Page`.
{% endhint %}

## Adding Device Mode Integration

{% tabs %}
{% tab title="iOS" %}
Follow these steps to add Qualtrics to your iOS project:

* In your `Podfile`, add the `Rudder-Qualtrics` extension:

```ruby
pod 'Rudder-Qualtrics'
```

* After adding the dependency followed by `pod install`, add the imports to your `AppDelegate.m` file as shown:

```objectivec
#import <Rudder/Rudder.h>
#import <RudderQualtricsFactory.h>
```

* Then, add the initialization of your `RSClient` as shown:

```objectivec
RSConfigBuilder *configBuilder = [[RSConfigBuilder alloc] init];
    [configBuilder withDataPlaneUrl:DATA_PLANE_URL];
    [configBuilder withFactory:[RudderQualtricsFactory instance]];
    [RSClient getInstance:<YOUR_WRITE_KEY> config:[configBuilder build]];
```

* Add the below snippet to display the qualified intercept on your ViewController:

```objectivec
[Qualtrics.shared evaluateProjectWithCompletion:^(NSDictionary<NSString *,TargetingResult *>* targetingResults){
    for (NSString* interceptID in targetingResults) {
      TargetingResult *result = targetingResults[interceptID];
          if ([result passed]) {
            [[Qualtrics shared] displayWithViewController:self];
          }
    }
}];
```

For more information refer to [**Qualtrics iOS doc**](https://api.qualtrics.com/sdks/ZG9jOjgwNTgzNjY-getting-started-with-the-mobile-app-sdk-on-i-os).
{% endtab %}

{% tab title="Android" %}
To add Qualtrics to your Android Project please follow these steps :

* Open your `app/build.gradle` \(Module: app\) file, and add the following under the `dependencies` section :

```groovy
implementation 'com.rudderstack.android.sdk:core:1.+'
implementation 'com.rudderstack.android.integration:qualtrics:1.0.0'
implementation 'com.google.code.gson:gson:2.8.6'

// Qualtrics
implementation 'com.qualtrics:digital:2.0.0'
```

* Add a new maven repository for the App Feedback package. Your `allprojects` section should appear similar to below :

```groovy
allprojects {
    repositories {
        google()
        jcenter()
        maven {
            url "https://s3-us-west-2.amazonaws.com/si-mobile-sdks/android/"
        }
    }
}
```

* Open the AndroidManifest.xml file from the src/main folder in the project root and add the following XML snippet after the existing activity:

```xml
<activity android:name=
    "com.qualtrics.digital.QualtricsSurveyActivity"/>
<activity android:name=
    "com.qualtrics.digital.QualtricsPopOverActivity" 
          android:theme="@style/Qualtrics.Theme.Transparent"/>
```

* Initialize the Rudder SDK in the `Application` class's  `onCreate()` method as following:

```kotlin
// initializing Rudder SDK
val rudderClient = RudderClient.getInstance(
  this,
  WRITE_KEY,
  RudderConfig.Builder()
          .withDataPlaneUrl(DATA_PLANE_URL)
          .withFactory(QualtricsIntegrationFactory.FACTORY)
          .build()
)
```

* Add a MyCallback Subclass

You need to implement a callback for the Qualtrics APIs. This will be used to call the displayIntercept() method based on the evaluateIntercept() result. A good place is before the last closing brace (}) in your MainActivity.Java class. Add the following code:

```java
private class MyCallback implements IQualtricsProjectEvaluationCallback {
   @Override
   public void run(Map<String, TargetingResult> targetingResults) {
       for (Map.Entry<String,TargetingResult> result: targetingResults.entrySet())
           if (result.getValue().passed()) {
               Qualtrics.instance().displayIntercept(MainActivity.this, result.getKey());
           }
   }
}
```

* Add the below snippet to display the qualified intercept on your Activity class:

```java
Qualtrics.instance().evaluateProject(new MyCallback());
```

* For information refer to [**Qualtrics Android doc**](https://api.qualtrics.com/sdks/ZG9jOjgwNTgzNjE-getting-started-with-mobile-app-sdk-on-android).

{% endtab %}
{% endtabs %}

{% hint style="info" %}
In iOS, if the user qualifies for multiple intercepts, only one will be shown, whereas in Android all the intercept will be shown.
{% endhint %}

## Page

The `page` call lets you track how many times a user performs certain actions. RudderStack passes any tracked events as embedded data to the Qualtrics [**intercept**](https://www.qualtrics.com/support/website-app-feedback/getting-started-with-website-app-feedback/step-4-setting-up-your-intercept/) target. After the `page` call, the Qualtrics survey is loaded.

{% hint style="success" %}
You can set the intercepts when a user creates the project or after they have created the project.
{% endhint %}

A sample `page` call is as shown:

```javascript
rudderanalytics.page("category", "name", {
  path: "path",
  url: "url",
  title: "title",
  search: "search",
  referrer: "referrer",
  testDimension: "true"
});
```

For the above example, The event will be sent as `Viewed category name Page`, if the **Generic Page Title** option is disabled in the RudderStack dashboard. If this option is enabled, the event will be sent as `Viewed a Page`.

If the category field is not mentioned in the `page` call but specified inside the properties, RudderStack still includes the field while sending the event. For example, refer to the following snippet:

```javascript
rudderanalytics.page("name", {
  category: "category",
  path: "path",
  url: "url",
  title: "title",
  search: "search",
  referrer: "referrer",
  testDimension: "true"
});
```

For the above example, the event will be sent as `Viewed category name Page`, if the **Generic Page Title** option is disabled in the RudderStack dashboard. If it is enabled, the event will be sent as `Viewed a Page`.

If `category` is not specified in the event at all, RudderStack sends the event with only the page name, as shown below:

```javascript
rudderanalytics.page("name", {
  path: "path",
  url: "url",
  title: "title",
  search: "search",
  referrer: "referrer",
  testDimension: "true"
});
```

For the above example, The event will be sent as `Viewed name Page`, if the **Generic Page Title** option is disabled in the RudderStack dashboard. If enabled, the event will be sent as `Viewed a Page`.

{% hint style="warning" %}
If both the name and category fields are absent in the `page` call and the **Generic Page Title** option is disabled, RudderStack will not send the event to Qualtrics.
{% endhint %}

## Track

The `track` call lets you track how many times a user performs certain actions. RudderStack passes any tracked events as embedded data to the Qualtrics [**intercept**](https://www.qualtrics.com/support/website-app-feedback/getting-started-with-website-app-feedback/step-4-setting-up-your-intercept/) target. After the `track` call, the Qualtrics survey is loaded.

{% hint style="info" %}
At the destination end, i.e. Qualtrics, both `page` and `track` calls have the same functionality.
{% endhint %}

{% hint style="success" %}
You can set the intercepts when a user creates the project or after they have created the project.
{% endhint %}

In this case, the value of event field of the `track` call will be used as the event name while sending it to Qualtrics.

A sample `track` call is as shown:

```javascript
rudderanalytics.track("Test Event");
```

In the above example, the event will be sent to Qualtrics as `Test Event`.

## Identify

When you make an `identify` call, RudderStack sets the `traits` passed for that user using the `property` API of Qualtrics. This `traits` values could be used as a custom property while setting the `Target Logic` or `Embedded Data` for any Intercept in Qualtrics dashboard.

{% tabs %}
{% tab title="iOS" %}
```objectivec
[[RSClient sharedInstance] identify:@"test_user_id"
        traits: @{ @"property_key": @"property_value" }];
```
{% endtab %}

{% tab title="Android" %}
```kotlin
MainApplication.rudderClient.identify(
                    RudderTraits()
                        .put("property_key", "property_value")
                )
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
* `Identify` call is supported only by Mobile Device Mode Integration.
{% endhint %}

## FAQ

### How do I get my Project ID and Brand ID?

To get your Qualtrics Project ID and Brand ID, follow these steps:

* Log into your [**Qualtrics account**](https://login.qualtrics.com/login?lang=au).
* Click on the project you will be using.
* Click on **Settings** tab, followed by **Manage Project** option \(the right-most dropdown menu in the dashboard\).

![](https://user-images.githubusercontent.com/59817155/128864100-05ef5c5a-8c04-4607-b742-633938f440ac.png)

* Click on **Project ID's**. Here you will find both your Project ID and Brand ID, as shown:

![](https://user-images.githubusercontent.com/59817155/128864303-2660ccb8-a91d-4633-b6bf-eef4253cb381.png)

### How do I know if the SDK has loaded successfully?

Once RudderStack loads the web SDK successfully, you will be able to see the survey options chosen in the Qualtrics dashboard, e.g., a survey button, survey form, etc.

An example is shown below:

![](https://user-images.githubusercontent.com/59817155/128988678-5f108062-6072-47e0-94d1-d3e7bee15fe5.png)

### In Mobile Device Mode Integration could we set the logic manually?

Yes, using Qualtrics `property` API you could set the logic. Click to know more for [**iOS**](https://api.qualtrics.com/sdks/ZG9jOjgwNTgzNjY-getting-started-with-the-mobile-app-sdk-on-i-os) and [**Android**](https://api.qualtrics.com/sdks/ZG9jOjgwNTgzNjE-getting-started-with-mobile-app-sdk-on-android).

## Contact Us

For questions on any of the sections covered in this guide, feel free to [**contact us**](mailto:docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

