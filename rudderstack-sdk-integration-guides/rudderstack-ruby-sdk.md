---
description: >-
  Detailed technical documentation on using RudderStack’s Ruby SDK to send
  events to various destinations
---

# Ruby

RudderStack’s Ruby SDK allows you to track your customer event data from your Ruby code. Once enabled, the event requests hit the RudderStack servers. RudderStack then routes the events to the specified destination platforms as configured by you.

You can find this SDK in our [GitHub repository](https://github.com/rudderlabs/rudder-sdk-ruby-sync).

## Installing the RudderStack Ruby SDK

To install the RudderStack Ruby SDK, add this line to your application's Gem file:

```ruby
gem 'rudder_analytics_sync'
```

You can also install it yourself, as below:

```bash
gem install rudder_analytics_sync
```

## Using the RudderStack Ruby SDK

To use the SDK, create a client instance as shown:

```ruby
analytics = RudderAnalyticsSync::Client.new(
  write_key: WRITE_KEY, # required
  data_plane_url: DATA_PLANE_URL
  on_error: proc { |error_code, error_body, exception, response|
    # defaults to an empty proc
  }
)
```

You can use it as shown in the following snippet:

```ruby
analytics.track(
  user_id: user.id,
  event: 'Created Account'
)
```

### Manually batching the events

You can manually batch events with `analytics.batch` as shown:

```ruby
analytics.batch do |batch|
  batch.context = {...}       # shared context for all events
  batch.integrations = {...}  # shared integrations hash for all events
  batch.identify(...)
  batch.track(...)
  batch.track(...)
  ...
end
```

## Identify

The `identify` call lets you associate a user to their actions as well as captures the relevant traits or properties related to that user.

{% hint style="info" %}
For a detailed explanation of the `identify` call, please refer to our RudderStack API specification guide.
{% endhint %}

An example `identify` call is as shown:

```ruby
Analytics.identify(
    user_id: '12345',
    traits: { email: "#{ username.email }", friends: 1 },
    context: {ip: '10.81.20.10'}
)
```

The `identify` method parameters are as shown:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `traits` | Object | Optional | Dictionary of the traits associated with the user, such as `name`or `email` |

## Track

The `track` call lets you record the users' actions along with their associated properties. Each triggered action is called an 'event'.

{% hint style="info" %}
For a detailed explanation of the `track` call, please refer to our RudderStack API specification guide.
{% endhint %}

An example `track` call is as shown:

```ruby
Analytics.track(
    user_id: '12345',
    event: 'Item Sold',
    properties: { revenue: 9.95, shipping: 'Free' }
)
```

The `track` method parameters are as described below:

| Name | Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `user_id` | String | Required | The developer identification for your user |
| `event` | String | Required | Name of the event being performed by the user |
| `properties` | Object | Optional | Dictionary of the properties associated with a particular event. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `anonymous_id` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |

## Page

The `page` call allows you to record the page views on your website. It also records the other relevant information about the page that is being viewed. 

{% hint style="info" %}
For a detailed explanation of the `page` call, please refer to our RudderStack API specification guide.
{% endhint %}

An example `page` call is as shown:

```ruby
Analytics.page(
  user_id: userid,
  category: 'Food',
  name: 'Pizza',
  properties: { url: 'https://dominos.com' }
)
```

The `page` method parameters are as described below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the page being viewed. |
| `properties` | Object | Optional | Dictionary of the properties associated with the page being viewed, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Group

The `group` call allows you to associate an identified user to a group - either a company, project, or a team. You can also record custom traits or properties associated with that group.

{% hint style="info" %}
For a detailed explanation of the `group` call, please refer to our RudderStack API specification guide.
{% endhint %}

An example `group` call is as shown:

```ruby
Analytics.group(
  user_id: '12345',
  group_id: '12',
  traits: { name: 'Company', description: 'Software'}
)
```

The `group` method parameters are as follows:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `groupId` | String | Required | Unique identifier of the group, as present in your database. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Alias

The `alias` call allows you to associate one identity with another.

{% hint style="info" %}
`alias` is an advanced method. However, it is required when managing user identities in some destinations.
{% endhint %}

An example `alias` call is as shown:

```ruby
Analytics.alias(previous_id: '12345', user_id: '123')
```

The `alias` method parameters are as mentioned below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `previousId` | String | Required | The previous unique identifier of the user. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

{% hint style="info" %}
For a detailed explanation of the `alias` call, please refer to our RudderStack API specification guide.
{% endhint %}

## Contact Us

To know more about the RudderStack Node.js SDK, you can [contact us](mailto:%20contact@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

In case you come across any issues while using this SDK, please feel free to contact us.

