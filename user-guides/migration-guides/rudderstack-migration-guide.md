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

## Backfilling Segment AnonymousIds

When migrating from Segment or a similar analytics tool, you likely already have some amount of anonymous traffic that has not yet been identified. When Segment or RudderStack track events for non-identified users, both assign a random UUID as an `anonymousId`. This ID is used to track an unknown user until they are identified and allows us to stitch together user behavior, journeys, and first touch attribution before and after they are identified. 

To avoid duplicating these previously assigned anonymous users, we recommend loading the RudderStack SDK in the `ready` callback of the segment SDK for a period of time. By loading RudderStack in the callback, we can retrieve the previously assigned `anonymousId` from the segment cookie and assign that same `anonymousId` to the RudderStack user while initializing the RudderStack SDK. After we have overlapped the SDKs enough to feel confident that the majority of our anonymousId have been backfilled, we can remove the Segment SDK and begin using only the RudderStack SDK.

A code snippet for loading the SDKs in parallel is shown below:

```javascript
<script type="text/javascript">
        !function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)}}()
        !(function(){
          // Create a queue, but don't obliterate an existing one!
          var analtics = window.analytics = window.analytics || [];
          // If the real analytics.js is already on the page return.
          if (analytics.initialize) return;
          // If the snippet was invoked already show an error.
          if (analytics.invoked) {
            if (window.console && console.error) {
              console.error('Segment snippet included twice.');
            }
            return;
          }
          // Invoked flag, to make sure the snippet
          // is never invoked twice.
          analytics.invoked = true;
          // A list of the methods in Analytics.js to stub.
          analytics.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on',
            'addSourceMiddleware',
            'addIntegrationMiddleware',
            'setAnonymousId',
            'addDestinationMiddleware'
          ];
          // Define a factory to create stubs. These are placeholders
          // for methods in Analytics.js so that you never have to wait
          // for it to load to actually record data. The `method` is
          // stored as the first argument, so we can replay the data.
          analytics.factory = function(method){
            return function(){
              var args = Array.prototype.slice.call(arguments);
              args.unshift(method);
              analytics.push(args);
              return analytics;
            };
          };
          // For each of our methods, generate a queueing stub.
          for (var i = 0; i < analytics.methods.length; i++) {
            var key = analytics.methods[i];
            analytics[key] = analytics.factory(key);
          }
          // Define a method to load Analytics.js from our CDN,
          // and that will be sure to only ever load it once.
          analytics.load = function(key, options){
            // Create an async script element based on your key.
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://cdn.segment.com/analytics.js/v1/'
              + key + '/analytics.min.js';
            // Insert our script next to the first script element.
            var first = document.getElementsByTagName('script')[0];
            first.parentNode.insertBefore(script, first);
            analytics._loadOptions = options;
          };
          // Add a version to keep track of what's in the wild.
          analytics.SNIPPET_VERSION = '4.1.0';
          // Load Analytics.js with your key, which will automatically
          // load the tools you've enabled for your account. Boosh!
          analytics.load("SEGMENT_WRITE_KEY");
          // Make the first page call to load the integrations. If
          // you'd like to manually name or tag the page, edit or
          // move this call however you'd like.
          analytics.page();
          // analytics ready callback
          analytics.ready(function() {
            // INITIALIZE RUDDER SDK with setAnonymousId
            window.rudderanalytics.unshift(["setAnonymousId", window.analytics.user().anonymousId()])
            window.rudderanalytics.unshift(["load", "RUDDERSTACK_WRITE_KEY", "RUDDERSTACK_DATAPLANE_URL"])
            window.rudderanalytics.page()
            window.rudderanalytics.loadJS()
        })})();
      </script>
```

{% hint style="info" %}
Note that you will need to enter your `SEGMENT_WRITE_KEY`, `RUDDERSTACK_WRITE_KEY`, and `RUDDERSTACK_DATAPLANE_URL` in the above example.
{% endhint %}

## Contact Us

Are you stuck somewhere in the migration process? Feel free to [contact us](mailto:%20docs@rudderstack.com). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

