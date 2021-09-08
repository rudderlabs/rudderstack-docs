---
description: Detailed technical description of the Alias API call.
---

# Alias

The `alias` call lets you merge different identities of a known user.

{% hint style="info" %}
`alias` is an advanced method that lets you change the tracked user's ID explicitly. This method is useful when managing identities for some of the downstream destinations.
{% endhint %}

{% hint style="success" %}
The following destinations support the `alias` call:

* \*\*\*\*[**MoEngage**](../../../destinations/marketing/moengage.md)\*\*\*\*
* \*\*\*\*[**Kissmetrics**](../../../destinations/analytics/kissmetrics.md)\*\*\*\*
* \*\*\*\*[**Amplitude**](../../../destinations/analytics/amplitude.md) ****\(only supported by the [**JavaScript SDK**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) via [**Cloud Mode**](https://docs.rudderstack.com/connections/rudderstack-connection-modes#cloud-mode)\)
{% endhint %}

## Sample Payload

A sample payload of an `alias` call with most of the **Common Fields** removed is as shown:

```javascript
{
  "type": "alias",
  "previousId": "name@surname.com",
  "userId": "12345"
}
```

The corresponding event that generates the above payload via the [**JavaScript SDK**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) is as shown:

```javascript
rudderanalytics.alias("12345");
```

{% hint style="success" %}
The RudderStack SDK automatically passes the user's `anonymousId` as `previousId` in the payload, as seen above.
{% endhint %}

{% hint style="warning" %}
When instrumenting a website with the JavaScript SDK, making the `alias` call via the client-side is important as the `anonymousId` is generated via the browser. Similarly, if you're using a server-side SDK, the `alias`call must be made from the server-side as the session ID is set as the `anonymousId`.
{% endhint %}

## Alias Fields

Apart from the **Common Fields**, the `alias` call accepts the following fields:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `previousId` | String | **See below** | The user's current identifier. |
| `userId` | String | Required | The user's new identifier. |

* RudderStack does not require `previousId` mandatorily in case of the SDKs that offer persistence \([**JavaScript**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/), [**Flutter**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-flutter-sdk.md), [**iOS**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk.md), [**Android**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-android-sdk/), [**React Native**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-react-native-sdk.md)\) as they will automatically set the previous `userId`/`anonymousId` as the `previousId` during an `alias` call. 
* For SDKs that do not offer persistence support \(server-side SDKs like [**Node.js**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-node-sdk.md), [**Python**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-python-sdk.md), [**Java**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-java-sdk.md), [**.NET**](../../../stream-sources/rudderstack-sdk-integration-guides/.net.md), [**PHP**](../../../stream-sources/rudderstack-sdk-integration-guides/php.md), [**Ruby**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-ruby-sdk.md)\), `previousId` needs to be specified explicitly during the `alias` call.

## `userId` vs `previousId`

* The `previousId` attribute refers to the previous user identifier. It could be either: 
  * An `anonymousId` assigned to the user \(by the browser if the user is a new visitor or has not logged in yet, or the session ID if you're using a server-side SDK\). 
  * A previously set `userId` to identify the user via the `identify` call. 
* The `userId` is the user's new identity or an existing identity that you want to merge with `previousId`.

## Contact Us

For more information on any section covered in this doc, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

