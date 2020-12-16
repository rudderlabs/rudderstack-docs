---
description: >-
  Detailed technical documentation on using RudderStack’s Go SDK to send events
  to various destinations
---

# Go

RudderStack’s Go SDK allows you to track your customer event data from your Go code. Once enabled, the event requests hit the RudderStack servers. RudderStack then routes the events to the specified destination platforms as configured by you.

You can find this SDK in our [GitHub repository](https://github.com/rudderlabs/analytics-go).

## Installing the RudderStack Go SDK

The RudderStack Go SDK package can be simply installed via the `go get` command. It is recommended that you use a tool like Godep to avoid issues related to the breaking API changes introduced between major versions of the library.

To install it in the `GOPATH`, run the following:

```go
go get github.com/rudderlabs/analytics-go
```

## Using the RudderStack Go SDK

To use the SDK, run the following code snippet:

```go
package main

import (
    "github.com/rudderlabs/analytics-go"
)

func main() {
    // Instantiates a client to use send messages to the Rudder API.
    client := analytics.New(WRITE_KEY, DATA_PLANE_URL)

    // Enqueues a track event that will be sent asynchronously.
    client.Enqueue(analytics.Track{
        UserId: "test-user",
        Event:  "test-snippet",
    })

    // Flushes any queued messages and closes the client.
    client.Close()
}
```

Alternatively,

```go
package main

import (
    "github.com/rudderlabs/analytics-go"
)

func main() {
    // Instantiates a client to use send messages to the Rudder API.
    client, _ := analytics.NewWithConfig(WRITE_KEY, DATA_PLANE_URL,
		analytics.Config{
			Interval:  30 * time.Second,
			BatchSize: 100,
			Verbose:   true,
		})

    // Enqueues a track event that will be sent asynchronously.
    client.Enqueue(analytics.Track{
        UserId: "test-user",
        Event:  "test-snippet",
    })

    // Flushes any queued messages and closes the client.
    client.Close()
}
```

## Identify

The `identify` call lets you associate a user to their actions as well as captures the relevant traits or properties related to that user.

{% hint style="info" %}
For a detailed explanation of the `identify` call, please refer to our [RudderStack API specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `identify` call is as shown:

```go
client.Enqueue(analytics.Identify{
  UserId: "123",
  Traits: analytics.NewTraits().
    SetName("Name Surname").
    SetEmail("name@example.com").
    Set("plan", "Free").
    Set("manager", 12),
})
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

The `track` call lets you record the users' actions along with their associated properties. Each triggered action is called an 'event'.

{% hint style="info" %}
For a detailed explanation of the `track` call, please refer to our [RudderStack API specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `track` call is as shown:

```go
client.Enqueue(analytics.Track{
  UserId: "123",
  Event:  "Signed Up",
  Properties: analytics.NewProperties().
    Set("plan", "Free"),
})
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
For a detailed explanation of the `page` call, please refer to our [RudderStack API specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `page` call is as shown:

```go
client.Enqueue(analytics.Page{
  UserId: "12345",
  Name:   "Pizza",
  Properties: analytics.NewProperties().
    SetURL("https://dominos.com"),
})
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
For a detailed explanation of the `group` call, please refer to our [RudderStack API specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `group` call is as shown:

```go
client.Enqueue(analytics.Group{
  UserId:  "12345",
  GroupId: "1",
  Traits: map[string]interface{}{
    "name": "Company",
    "description": "Facebook",
  },
})
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

```go
client.Enqueue(analytics.Alias{
  PreviousId: "12345",
  UserId:     "45678",
})
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
For a detailed explanation of the `alias` call, please refer to our [RudderStack API specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

## Contact Us

To know more about the RudderStack Go SDK, you can [contact us](mailto:%20contact@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

In case you come across any issues while using this SDK, please feel free to contact us.

