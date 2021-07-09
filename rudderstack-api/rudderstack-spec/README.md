---
description: >-
  Detailed technical description and semantic definitions of the event data
  captured by the various RudderStack APIs.
---

# RudderStack API Specification

The **RudderStack API Spec** helps you plan your event data and provides various options for tracking your events across all the RudderStack SDKs and APIs. 

{% hint style="success" %}
RudderStack has a unified event semantic for different destination platforms. You can easily translate your event data to different downstream tools by following this spec.
{% endhint %}

## Supported API Calls

The RudderStack API Spec supports the following calls, each answering a pertinent question about the user:

| **API Call** | **Description** |
| :--- | :--- |
| \*\*\*\*[**Identify**](identify.md)            **** | Captures the details about the user. |
| \*\*\*\*[**Page**](page.md) **** | Captures the details related to the web page that the user is currently on. |
| \*\*\*\*[**Screen**](screen.md)\*\*\*\* | Captures the details related to the app screen that the user is currently viewing. |
| \*\*\*\*[**Track**](track.md)\*\*\*\* | Captures information related to the user's actions. |
| \*\*\*\*[**Group**](group.md)\*\*\*\* | Captures the relevant details about the group or organization that the user is a part of. |
| \*\*\*\*[**Alias**](alias.md)\*\*\*\* | Captures any relevant details about the user's alternate/past identity. |
| **Reset** | Resets the information related to the previously identified user. |

## How the API Calls Work

Here's a quick overview of how the API calls mentioned above work:

1. When the user makes the API calls, the event data is sent to the RudderStack backend.
2. RudderStack transforms this event data into a destination-specific format.
3. The transformed data is then forwarded to the required destination.

## Event Data Format

The event data collected by RudderStack has a JSON structure, which has [**common fields**](common-fields.md) and an API-specific payload.

## Contact Us

For more information on the RudderStack API spec, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.







