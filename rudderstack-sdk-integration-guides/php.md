---
description: >-
  Detailed technical documentation on using RudderStack’s PHP SDK to send events
  to various destinations
---

# PHP

RudderStack’s PHP SDK allows you to track your customer event data from your PHP code. Once enabled, the event requests hit the RudderStack servers. RudderStack then routes the events to the specified destination platforms as configured by you.

You can find this SDK in our [GitHub repository](https://github.com/rudderlabs/rudder-sdk-php).

## Installing the RudderStack PHP SDK

Install the RudderStack PHP SDK using the [composer](https://packagist.org/packages/rudderstack/rudder-sdk-php). You can also do so by running the following command:

```bash
git clone https://github.com/rudderlabs/rudder-sdk-php /my/app/folders/
```

## Initializing the RudderStack Client

To initialize the RudderStack client, run the following code snippet:

```php
require_once("/path/to/lib/Rudder.php");

Rudder::init(WRITE_KEY, array(
  "data_plane_url" => DATA_PLANE_URL,
  "consumer"       => "lib_curl", // fork_curl
  "debug"          => true,
  "max_queue_size" => 10000,
  "batch_size"     => 100
));
```

## Sending Events from RudderStack

Once the RudderStack client is initialized, you can use it to send relevant customer events from the RudderStack client. An example `track` call is as shown in the following code snippet:

```php
Rudder::track(array(
  "userId" => "f4ca124298",
  "event" => "Signed Up",
  "properties" => array(
    "plan" => "Enterprise"
  )
));
```

## Identify

The `identify` call lets you associate a user to their actions as well as captures the relevant traits or properties related to that user.

{% hint style="info" %}
For a detailed explanation of the `identify` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `identify` call is as shown:

```php
Rudder::identify(array(
  "userId" => "2sfjej334",
  "traits" => array(
    "email" => "test@test.com",
    "name" => "test name",
    "friends" => 25
  )
));
```

The `identify` method parameters are as described below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `traits` | Object | Optional | Dictionary of the traits associated with the user, such as `name`or `email` |

## Track

The `track` call lets you record the users' actions along with their associated properties. Each triggered action is called as an 'event'.

{% hint style="info" %}
For a detailed explanation of the `track` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `track` call is as shown:

```php
Rudder::track(array(
  "userId" => "f4ca124298",
  "event" => "Article Bookmarked",
  "properties" => array(
    "title" => "Snow Fall",
    "subtitle" => "The Avalanche at Tunnel Creek",
    "author" => "John Branch"
  )
));
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
For a detailed explanation of the `page` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `page` call is as shown:

```php
Rudder::page(array(
  "userId" => "f4ca124298",
  "category" => "Docs",
  "name" => "PHP library",
  "properties" => array(
    "url" => "https://segment.com/libraries/php/"
  )
));
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

## Screen

The `screen` call is the mobile equivalent of the page call. It allows you to record the screen views on your mobile app along with the other relevant information about the app screen.

{% hint style="info" %}
For a detailed explanation of the `screen` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `screen` call is as shown:

```php
Rudder::screen(array(
  "userId" => "f4ca124298",
  "category" => "Docs",
  "name" => "PHP library",
  "properties" => array(
    "name" => "HomeScreen"
  )
));
```

The `screen` method parameters are as described below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the screen being viewed. |
| `properties` | Object | Optional | Dictionary of the properties associated with the page being viewed, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Group

The `group` call allows you to associate an identified user to a group - either a company, project or a team. You can also record custom traits or properties associated with that group.

{% hint style="info" %}
For a detailed explanation of the `group` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `group` call is as shown:

```php
Rudder::group(array(
  "userId" => "2sfjej334",
  "groupId" => "2sfjej334erresd",
  "traits" => array(
    "email" => "test@test.com",
    "name" => "test name",
    "friends" => 25
  )
));
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

```php
Rudder::alias(array(
  "previousId" => "previousId",
  "userId" => "2sfjej334",
));
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
For a detailed explanation of the `alias` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

## Contact Us

To know more about the RudderStack PHP SDK, you can [contact us](mailto:%20contact@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

In case you come across any issues while using this SDK, please feel free to start a new issue on our [GitHub repository](https://github.com/rudderlabs/rudder-sdk-php).

