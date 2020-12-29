---
description: Step-by-step guide to migrating from Segment to RudderStack
---

# Migrating from Segment to RudderStack

## Introduction

This document explains the step-by-step process of migrating from [Segment](https://segment.com/) to RudderStack. Our primary goal is to lay out the necessary actions for replacing your instrumentation code for generating the events from using the Segment SDK to RudderStack SDK with minimal changes.

## Migrating the Workspace

Start with creating an account on the RudderStack [dashboard](https://app.rudderlabs.com/signup?type=freetrial). Similar to Segment, you will need to create sources and destinations in the dashboard. This will help you create the necessary connections for the event data to flow from your sources to the destination. 

{% hint style="info" %}
You can also check our guide on how to [add sources and destinations in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack).
{% endhint %}

## Setting up the RudderStack Data Plane

RudderStack requires a data plane for the events to flow through. You can choose to set it up yourself within your cloud computing environment. Please check our [installation guide](https://docs.rudderstack.com/administrators-guide/installing-and-setting-up-rudderstack) to set up RudderStack. 

We also offer a version of the data plane where we host it within our VPC. You can turn on the **RudderStack Hosted Service** button on the **Connections** page of your dashboard to get started with it. ‌

If you need more support or you want us to manage your hosting, please feel free to [contact us](mailto:contact@rudderstack.com).

## Updating SDK implementation

Depending on the platform, please follow these steps to move your existing SDK implementation to RudderStack:

{% tabs %}
{% tab title="Android" %}
* Change the dependencies in your `app/build.gradle` file add the following:

```groovy
repositories {
    maven { url "https://dl.bintray.com/rudderstack/rudderstack" }
}
```

* Under dependencies, add the following:

```groovy
implementation 'com.rudderstack.android.sdk:core:1.0.1'
implementation 'com.google.code.gson:gson:2.8.6'
```

* Update your SDK initialization to the following:

```java
RudderClient rudderClient = RudderClient.getInstance(
        this,
        <YOUR_WRITE_KEY>,
        new RudderConfig.Builder()
                .withDataPlaneUrl(<DATA_PLANE_URL>)
                .withLogLevel(RudderLogger.RudderLogLevel.DEBUG)
                .withTrackLifecycleEvents(true)
                .withRecordScreenViews(true)
                .build()
);
```

* Update the use of the classes according to the table below:

| Segment | RudderStack |
| :--- | :--- |
| `Analytics` | `RudderClient` |
| `Traits` | `RudderTraits` |
| `Property` | `RudderProperty` |

{% hint style="success" %}
You can use the rest of your code as is, as RudderStack SDK is API-compatible with Segment.
{% endhint %}
{% endtab %}

{% tab title="iOS" %}
* Change the dependencies in the `Podfile` of your project:

```ruby
pod 'Rudder'
```

* Update your SDK initialization to the following:

```objectivec
RudderConfigBuilder *builder = [[RudderConfigBuilder alloc]init];
[builder withDataPlaneUrl:<DATA_PLANE_URL>];
[RudderClient getInstance:<WRITE_KEY> config:[builder build]];
```

{% hint style="info" %}
The instance of the `RudderClient` is available at `[RudderClient sharedInstance]` whereas Segment Instance is available at `[Analytics sharedAnalytics]`
{% endhint %}

* Update the imports from `Analytics.h` to `Rudder.h` wherever necessary
* Update the use of the classes according to the table below:

| Segment | RudderStack |
| :--- | :--- |
| `Analytics` | `RudderClient` |
| `Traits` | `RudderTraits` |
| `Property` | `RudderProperty` |

{% hint style="success" %}
You can use the rest of your code as is, as RudderStack SDK is API compatible with Segment
{% endhint %}
{% endtab %}

{% tab title="JavaScript" %}
* Add the SDK to your web application:

```markup
<script>
	rudderanalytics = window.rudderanalytics = [];
	
	var methods = [
		"load",
		"page",
		"track",
		"identify",
		"reset"
	];
	for (var i=0; i<methods.length; i++) {
		var method = methods[i];
		rudderanalytics[method] = function(methodName) {
			return function() {
				rudderanalytics.push([methodName, ...arguments]);
			}
		} (method)
	}
	rudderanalytics.load(<YOUR_WRITE_KEY>, <DATA_PLANE_URI>);
	rudderanalytics.page();
</script>
<script src="https://cdn.rudderlabs.com/rudder-analytics.min.js"></script>
```

{% hint style="info" %}
For the minified version of the above script please refer to the [RudderStack JavaScript SDK](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk) guide.
{% endhint %}

* Update the object. We use `rudderanalytics` as the global object library in comparison to Segment's `analytics` object

{% hint style="success" %}
You can use the rest of your code as is, as the RudderStack SDK is fully API-compatible with Segment
{% endhint %}
{% endtab %}
{% endtabs %}

## Contact Us

Are you stuck somewhere in the migration process? Feel free to [contact us](mailto:%20docs@rudderstack.com). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

