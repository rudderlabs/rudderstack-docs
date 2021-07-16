---
description: Answers to the generally asked questions related to the RudderStack SDKs
---

# SDK FAQs

## FAQs

### How does RudderStack handle **`anonymousId` ?**

The following are the different ways in which RudderStack handles **`anonymousId`** across different SDKs:

#### **For the JavaScript SDK**

The RudderStack JavaScript SDK automatically generates one unique `anonymousId` to identify a user uniquely. It then stores it in a cookie named `rl_anonymous_id` and attaches it to every subsequent event. This helps in identifying the users from other sites that are hosted under a sub-domain.

{% hint style="info" %}
If `anonymousId` is explicitly provided by the user using the **`setAnonymousId`** method,  the user-specified `anonymousId` overrides the SDK-generated one.
{% endhint %}

{% hint style="success" %}
For more information on how RudderStack handles overriding `anonymousId`, please refer to our [docs](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#3-2-2-overriding-anonymousid-in-the-options-parameter).
{% endhint %}

**For the Android SDK**

RudderStack captures your `deviceId` and uses that as `anonymousId` for identifying the user. It is used to track the users across the application installation. To attach more information to the user, you can use the `identify` method.

You can use the `setAnonymousId` method to override and use your own `anonymousId` with the SDK.

{% hint style="info" %}
On the Android devices, the `deviceId` is assigned during the first boot. It remains consistent across the applications and installs. It changes only after a factory reset.
{% endhint %}

{% hint style="success" %}
For more information on how RudderStack handles `anonymousId` in the iOS SDK, please refer to our [docs](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk#anonymous-id).
{% endhint %}

**For the iOS SDK**

RudderStack captures `deviceId` and uses that as `anonymousId` for identifying the user. To attach more information to the user, you can use the `identify` method.

You can use the `setAnonymousId` method to override and use your own `anonymousId` with the SDK.

{% hint style="info" %}
According to the Apple [documentation](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor), if the device has multiple apps from the same vendor, all those apps will be assigned the same `deviceId`. If all these apps are uninstalled, then on the next install, the apps will be assigned a new `deviceId`.
{% endhint %}

{% hint style="success" %}
For more information on how RudderStack handles `anonymousId` in the iOS SDK, please refer to our [docs](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk#anonymous-id).
{% endhint %}

### How do I identify anonymous users across client-side and server-side?

To identify anonymous users across both client-side and server-side, **it is advisable to use a separate, new cookie at your end**.

During the user's first visit, your server generates a new `anonymousId` to make the event calls using the server-side SDKs and sends the `set_cookie` response to the browser to set the `visitor_id` cookie. 

* If the RudderStack JavaScript SDK is **not blocked**, you can use the `setAnonymousId` method to set the same value as the `visitor_id`. 
* In case the RudderStack JavaScript SDK **is blocked**, still the next requests to the server will have the `visitor_id` cookie which can be used by the server-side events for `anonymousId`.

{% hint style="info" %}
The RudderStack JavaScript SDK generates a unique `anonymousId` for every unique user visit. It then stores this value in a cookie named `rl_anonymous_id` and attaches it to every subsequent event. 

Users sometimes try to directly use the browser APIs to get or set the value for this cookie. However, this is not advisable since the RudderStack cookies are encrypted, and the cookie may not be present altogether \(if the SDK is blocked\). 

It is, therefore, always advisable to use RudderStack's `getAnonymousId` and `setAnonymousId` methods to update the cookie value.
{% endhint %}

To set `anonymousId`, use the `setAnonymousId` call after the SDK snippet as below:

```text
rudderanalytics.setAnonymousId("my-anon-id");
```

To get the `anonymousId` stored in a RudderStack cookie, use the `getAnonymousId` call inside the `ready` callback - this ensures that the method is available and returns the previously set `anonymousId` value.

```text
rudderanalytics.ready(
	() => {
	  var anonId = window.rudderanalytics.getAnonymousId();
		console.log(anonId);
	}
);
```

### What is the RudderStack retry and backoff logic after the connection fails?

When the dataplane gets disconnected from the SDK and events are no longer able to be sent to Rudder Server, then some of the SDK's will store events and retry sending them to Rudder Server with a certain backoff logic.

{% hint style="warning" %}
**NOTE:** The retry of failed events is not supported by all SDKs. Please see table below for support.
{% endhint %}

#### General Support and Logic

| SDK | Supported | Event Storage | Retry limit |
| :--- | :--- | :--- | :--- |
| JavaScript SDK | Yes | 100 events in Local Storage | 10 times |
| Android SDK | Yes | 10k events in sqlite db | Infinity |
| iOS SDK | Yes | 10k events in sqlite db | Infinity |
| Node SDK | Yes | 20k events in-memory | 10 times |
| All Other SDKs | No | N/A | N/A |

#### JavaScript SDK

This SDK can be configured to match your requirements for retry and backoff logic. By default, if the dataplane goes down and the JS SDK cannot send events to the Rudder Server, up to 100 events will be stored. While still disconnected from the dataplane, the JS SDK will try to resend the stored events to the Rudder Server. However, for each retry, the delay duration will grow. The equation to get the duration of delay is as follows

$$
dt = md * (F^n)
$$

Where, $$dt$$ is the delay time in ms, $$md$$ is the `minRetryDelay` \(configurable; default is 1000 ms\), $$F$$ is the `backoffFactor` \(configurable; default is 2\), and $$n$$ is the current retry attempt. The SDK will retry until the attempts surpass the `maxAttempts` value. This is by default set to 10 attempts but is configurable. Each retry attempt, the delay time grows exponentially. However, it will max out at whatever the `maxRetryDelay` is. By default, this value is set at 360000 ms, but it is configurable.

#### iOS SDK and Android SDK

Both the iOS and Android SDKs share similar retry and backoff logic for when the dataplane connection fails. If the dataplane goes down, up to 10,000 events will be stored. There is no limit to how many times the SDK will try to send failed events. However, the delay duration in between the attempts will grow by 1 second after each retry. For example, after the first failed attempt, there will be a delay of 1 second. After the second failed attempt, the SDK will wait 2 seconds before it retries. The third failed attempt will cause a delay of 3 seconds, and this behavior will repeat until the connection is re-established.

#### Node SDK

Currently the Node SDK is the only server-side SDK that supports event retry and backoff logic. The logic is quite similar to the JavaScript SDK. If the connection fails, up to 20,000 events will be stored. However, this is in-memory storage and can result in data loss. The SDK will retry a maximum of 10 times, by default. For each retry the delay duration between retries will grow and can be calculated using the following equation.

$$
dt = 1000 * (2^n)
$$

Where, $$dt$$ is the delay time in ms and $$n$$ is the current retry attempt. The SDK will retry until the attempts surpass the `maxAttempts` value which is set to 10 attempts. With each retry attempt, the delay time will grow exponentially. However, it will never be greater than the maximum delay duration which is 30 seconds.

{% hint style="info" %}
The Node SDK does have a feature to persist the event data in Redis for more event storage and better guarantees of failed event delivery. Instructions on how to configure the Redis solution can be found[ here](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-node-sdk#data-persistence-in-node-js-sdk). 
{% endhint %}

## Contact Us

For more information on the RudderStack SDKs, you can [contact us](mailto:%20docs@rudderstack.com). You can also talk to us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel - we will be happy to help you!

