---
description: >-
  Detailed technical documentation on using RudderStack’s Python SDK to send
  events to various destinations.
---

# Python

RudderStack’s Python SDK lets you track events from your Python application. Once enabled, the event requests hit the RudderStack servers. RudderStack then transforms and routes these events to your specified destination platforms.

{% hint style="success" %}
Find this SDK in our [**GitHub repository**](https://github.com/rudderlabs/rudder-sdk-python).
{% endhint %}

## Installing the RudderStack Python SDK

To install the RudderStack Python SDK using [**pip**](https://pip.pypa.io/en/stable/), run the following command:

```bash
pip install rudder-sdk-python
```

## Initializing the RudderStack Client

To initialize the RudderStack client, run the following code snippet:

```python
import rudder_analytics

rudder_analytics.write_key = <SOURCE_WRITE_KEY>
rudder_analytics.data_plane_url = <YOUR_DATA_PLANE_URL>
```

{% hint style="success" %}
* For more information on how to get the source write key, refer to [**this section**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/sending-test-events#get-the-source-write-key).
* For more information on how to get your data plane URL, refer to [**this section**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it).
{% endhint %}

## Sending Events from RudderStack

Once the RudderStack client is initialized, you can use it to send relevant customer events from the RudderStack client. An example `track` call is as shown in the following code snippet:

```python
rudder_analytics.track('developer_user_id', 'Simple Track Event', {
  'key1': 'val1'
})
```

## Identify

The `identify` call lets you identify a visiting user and associate them to their actions.

{% hint style="info" %}
For more information on the `identify` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/identify) guide.
{% endhint %}

An example `identify` call is as shown:

```python
rudder_analytics.identify('123456', {
    'email': 'name@surname.com',
    'name': 'John Doe',
    'friends': 16
})
```

The `identify` method parameters are as described below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is not present. | Unique identifier for a user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `traits` | Object | Optional | Dictionary of the traits associated with the user, such as `name`or `email`. |

## Track

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any properties associated with them.

{% hint style="info" %}
For more information on the `track` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/track) guide.
{% endhint %}

An example `track` call is as shown:

```python
rudder_analytics.track('123456', 'Article Read', {
    'title': 'The Independence',
    'subtitle': 'Story of the Weak',
    'author': 'John Doe'
})
```

The `track` method parameters are as described below:

| Name | Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `userId` | String | Required, if `anonymousId` is not present. | Unique identifier for a user in your database. |
| `event` | String | Required | Name of the user event. |
| `properties` | Object | Optional | Dictionary of the properties associated with the event. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |

## Page

The `page` call lets you record your page views with any additional relevant information about the viewed page. 

{% hint style="info" %}
For more information on the `page` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/page) guide.
{% endhint %}

An example `page` call is as shown:

```python
rudder_analytics.page('userId', 'Documentation', 'Sample Doc', {
    'url': 'http://rudderstack.com'
})
```

The `page` method parameters are as described below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is not present. | Unique identifier for the user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the viewed page. |
| `properties` | Object | Optional | Dictionary of the properties associated with the page being viewed, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Screen

The `screen` call lets you record whenever your user views their mobile screen with any additional relevant information about the screen.

{% hint style="info" %}
For more information on the `screen` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/screen) guide.
{% endhint %}

An example `screen` call is as shown:

```python
rudder_analytics.screen('userid', 'Settings', 'Brightness', {
    'from': 'Settings Screen'
})
```

The `screen` method parameters are as described below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is not present. | Unique identifier for a the user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the viewed screen. |
| `properties` | Object | Optional | Dictionary of the properties associated with the screen, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Group

The `group` call allows you to link an identified user with a group, such as a company, organization, or an account. It also lets you record any custom traits associated with that group, such as the name of the company, the number of employees, etc.

{% hint style="info" %}
For more information on the `group` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/group) guide.
{% endhint %}

An example `group` call is as shown:

```python
rudder_analytics.group('userid', 'groupid', {
    'name': 'Company',
    'domain': 'IT'
})
```

The `group` method parameters are as follows:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is not present | Unique identifier for a the user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `groupId` | String | Required | Unique identifier of the group, as present in your database. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Alias

The `alias` call lets you merge different identities of a known user.

{% hint style="info" %}
`alias` is an advanced method. However, it is required when managing user identities in some destinations.
{% endhint %}

{% hint style="success" %}
The following downstream destinations support the `alias` call:

* \*\*\*\*[**MoEngage**](../../destinations/marketing/moengage.md)\*\*\*\*
* \*\*\*\*[**Kissmetrics**](../../destinations/analytics/kissmetrics.md)\*\*\*\*
* \*\*\*\*[**Amplitude**](../../destinations/analytics/amplitude.md) ****\(only supported by the [**JavaScript SDK**](rudderstack-javascript-sdk/) via [**Cloud Mode**](https://docs.rudderstack.com/connections/rudderstack-connection-modes#cloud-mode)\)
{% endhint %}

{% hint style="info" %}
For more information on the `alias` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/alias) guide.
{% endhint %}

A sample `alias` call is as shown:

```python
rudder_analytics.alias('previousid', 'userid')
```

The `alias` method parameters are as mentioned below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `userId` | String | Required, if `anonymousId` is not present. | Unique identifier for a the user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `previousId` | String | Required | The previous unique identifier of the user. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Error Handling

To handle the errors that may occur while sending events using the RudderStack client, you can declare a callback called `on_error`.

```text
def on_error(error, events):
    print("Error response:", error)

rudder_analytics.on_error = on_error
```

{% hint style="warning" %}
This callback will only return the errors that may occur with the HTTP requests to RudderStack. Any errors that occur downstream will not be returned.
{% endhint %}

The common request responses from the RudderStack server are listed below:

| Status | Code |
| :--- | :--- |
| Ok | 200 |
| Request neither has `anonymousId` nor `userId` | 400 |
| Invalid source write key | 401 |
| Invalid JSON | 400 |

## Contact Us

For more information on the RudderStack Python SDK, you can [**contact us**](mailto:%20docs@rudderstack.com) ****or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

