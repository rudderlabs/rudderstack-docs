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

* \*\*\*\*[**MoEngage**](../../destinations/marketing/moengage.md)\*\*\*\*
* \*\*\*\*[**Kissmetrics**](../../destinations/analytics/kissmetrics.md)\*\*\*\*
* \*\*\*\*[**Amplitude**](../../destinations/analytics/amplitude.md) ****\(only supported by the [**JavaScript SDK**](../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) via [**Cloud Mode**](https://docs.rudderstack.com/connections/rudderstack-connection-modes#cloud-mode)\)
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

The corresponding event that generates the above payload via the [**JavaScript SDK**](../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) is as shown:

```javascript
rudderanalytics.alias("12345");
```

{% hint style="success" %}
The RudderStack SDK automatically passes the user's `anonymousId` as `previousId` in the payload, as seen above.
{% endhint %}

{% hint style="warning" %}
When instrumenting a website with the JavaScript SDK, making the `alias` call via the client-side is important as the `anonymousId` is generated via the browser. Similarly, if you're using a server-side SDK, the `alias`call must be made from the server-side as the session ID is set as the `anonymousId`.
{% endhint %}

## Page Fields

Apart from the **Common Fields**, the `alias` call accepts the following fields:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Field</b>
      </th>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left"><b>Presence</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>previousId</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">Required</td>
      <td style="text-align:left">The user&apos;s previous identifier.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>userId</code>
      </td>
      <td style="text-align:left">Object</td>
      <td style="text-align:left">
        <p>Optional</p>
        <p>(<b>if</b>  <code>anonymousId</code> is</p>
        <p>already set)</p>
      </td>
      <td style="text-align:left">
        <p>The user&apos;s identifier in your database.</p>
        <p>Either of <code>userId</code> or <code>anonymousId</code> should be present.</p>
      </td>
    </tr>
  </tbody>
</table>

## `userId` vs `previousId`

* The `previousId` attribute refers to the previous user identifier. It could be either: 
  * An `anonymousId` assigned to the user \(by the browser if the user is a new visitor or has not logged in yet, or the session ID if you're using a server-side SDK\). 
  * A previously set `userId` to identify the user via the `identify` call. 
* The `userId` is the user's new identity or an existing identity that you want to merge with `previousId`.

## Contact Us

For more information on any section covered in this doc, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

