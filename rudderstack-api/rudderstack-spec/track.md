---
description: Detailed technical description of the Track API call.
---

# Track

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any properties associated with them.

{% hint style="info" %}
Each user action is called an event. Every event has a name associated with it, e.g. **Product Reviewed**. This event might also have some properties associated with it, like `review_id` and `rating`.
{% endhint %}

{% hint style="success" %}
For E-Commerce specific events, refer to our [**E-Commerce Events Specification**](../rudderstack-ecommerce-events-specification/) guide.
{% endhint %}

## Sample Payload

A sample payload for the `track` event after removing the common fields mentioned in the [**Common Fields**](common-fields.md) section is as shown:

```javascript
{
  "type": "track",
  "event": "Product Reviewed",
  "properties": {
    "review_id": "12345",
    "product_id" : "123",
    "rating" : 3.0,
    "review_body" : "Average product, expected much more."
  }
}
```

The corresponding event that generates the above payload via the [**JavaScript SDK**](../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) is as shown:

```javascript
rudderanalytics.track("Product Reviewed", {
  review_id: "12345",
  product_id: "123",
  rating: 3.0,
  review_body: "Average product, expected much more."
});
```

## Track Fields

Apart from the [**Common Fields**](common-fields.md), the `track` call accepts the following fields:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `event` | String | Required | Name of the user action. |
| `properties` | Object | Optional | Includes the properties associated  with the event. For more information, check the **Properties** section below. |

## Properties

Properties are additional contextual information that are associated with a `track` event, that give more clarity of your users' actions.

RudderStack has reserved some standard properties listed in the table below and handles them in special ways.

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Property</b>
      </th>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>revenue</code>
      </td>
      <td style="text-align:left">Number</td>
      <td style="text-align:left">
        <p>The revenue amount as a</p>
        <p>result of an event. For e.g., a</p>
        <p>product worth $20.00 would</p>
        <p>result in a <code>revenue</code> of <code>20.00</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>currency</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>The currency of the revenue as</p>
        <p>a result of the event, set in</p>
        <p>ISO 4127 format. If this is not set,</p>
        <p>RudderStack assumes the revenue</p>
        <p>is in USD.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>value</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>An abstract value associated with an</p>
        <p>event, to be used by various teams.</p>
      </td>
    </tr>
  </tbody>
</table>

{% hint style="success" %}
Different destinations recognize some of the above traits differently. For example, Mixpanel has a `track_charges` method for tracking revenue. With RudderStack, you don't have to worry about these inconsistencies. In this case, you can pass the `revenue` property and RudderStack will handle the conversion automatically.
{% endhint %}

## Contact Us

For more information on any of the sections covered in this doc, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

