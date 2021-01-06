---
description: Answers to the generally asked questions related to the RudderStack SDKs
---

# SDK FAQs

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

The set anonymousId, use the `setAnonymousId` call after the SDK snippet as below:

```text
rudderanalytics.setAnonymousId("my-anon-id");
```

To get the anonymousId stored in Rudder cookie, use the `getAnonymousId` call inside the ready callback, this ensures that the method is available and returns the previously set anonymousId value.

```text
rudderanalytics.ready(
	() => {
	  var anonId = window.rudderanalytics.getAnonymousId();
		console.log(anonId);
	}
);
```

