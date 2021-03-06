---
description: Detailed technical description of the Screen API call.
---

# Screen

The `screen` call lets you record whenever your user views their mobile screen with any additional relevant information about the screen. 

{% hint style="success" %}
The `screen` call is the mobile equivalent of the `page` call.
{% endhint %}

## Sample Payload

A sample payload of a `screen` call with most of the [**Common Fields**](common-fields.md) removed is as shown:

```javascript
{
  "type": "screen",
  "name": "Main",
  "properties": {
    "prop_key": "prop_value"
  }
}
```

The corresponding event that generates the above payload via the [**iOS SDK**](../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk.md) is as shown:

```javascript
[[RSClient sharedInstance] screen:@"Main" 
                properties:@{@"prop_key" : @"prop_value"}];
```

## Screen Fields

Apart from the [**Common Fields**](common-fields.md), the `screen` call accepts the following fields:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `name` | String | Optional | The name of the screen. |
| `properties` | Object | Optional | Includes the properties of the screen such as the `url`, `referrer`, etc. For more more information, check the **Properties** section below. |

## Properties

Properties are additional information that describe the viewed screen. 

RudderStack has reserved some standard properties listed in the table below and handles them in special ways.

| **Property** | **Type** | **Description** |
| :--- | :--- | :--- |
| `name` | String | You can tag each screen with a `name`.  This is a reserved property for future use. |

## Contact Us

For more information on any of the sections covered in this doc, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

