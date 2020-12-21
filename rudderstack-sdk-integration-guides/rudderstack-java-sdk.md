---
description: >-
  Detailed technical documentation on using RudderStack’s Java SDK to send
  events to various destinations
---

# Java

RudderStack’s Java SDK allows you to track your customer event data from your Java code. Once enabled, the event requests hit the RudderStack servers. RudderStack then routes the events to the specified destination platforms as configured by you.

You can find this SDK in our [GitHub repository](https://github.com/rudderlabs/rudder-sdk-java).

## Installing the RudderStack Java SDK

To install the RudderStack Java SDK, add the following lines of code to `pom.xml`:

```markup
<repositories>
   <repository>
       <id>bintray</id>
       <name>rudderstack</name>
       <url>https://dl.bintray.com/rudderstack/rudderstack</url>
   </repository>
</repositories>

...

<dependency>
   <groupId>com.rudderstack.sdk.java</groupId>
     <artifactId>rudderanalytics-client</artifactId>
   <version>1.0.1</version>
</dependency>
```

## Initialising the RudderStack Client

To initialize the RudderStack client, run the following code snippet:

```java
RudderAnalytics analytics = RudderAnalytics.builder(
        WRITE_KEY,
        DATA_PLANE_URL
).build();
```

## Sending Events from RudderStack

Once the RudderStack client is initialised, you can use it to send relevant customer events from the RudderStack client. An example `track` call is as shown in the following code snippet:

```java
Map<String, Object> properties = new LinkedHashMap<>();
    properties.put("key1", "value1");
    properties.put("key2", "value2");
    analytics.enqueue(
       TrackMessage.builder("Java Test")
           .properties(properties)
           .anonymousId(anonymousId)
           .userId(userId)
);
```

## Identify

The `identify` call lets you associate a user to their actions as well as captures the relevant traits or properties related to that user.

{% hint style="info" %}
For a detailed explanation of the `identify` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

An example `identify` call is as shown:

```java
analytics.enqueue(IdentifyMessage.builder()
    .userId("f4ca124298")
    .traits(ImmutableMap.builder()
        .put("name", "Sample Name")
        .put("email", "sample@abc.com")
        .build()
    )
);
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

```java
Map<String, Object> properties = new LinkedHashMap<>();
    properties.put("key1", "value1");
    properties.put("key2", "value2");
    analytics.enqueue(
       TrackMessage.builder("Java Test")
           .properties(properties)
           .anonymousId(anonymousId)
           .userId(userId)
);
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

```java
analytics.enqueue(PageMessage.builder("Schedule")
    .userId("abcfgrg")
    .properties(ImmutableMap.builder()
        .put("category", "Cultural")
        .put("path", "/a/b")
        .build()
    )
);
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

```java
analytics.enqueue(ScreenMessage.builder("Schedule")
    .userId("f4ca124298")
    .properties(ImmutableMap.builder()
        .put("category", "Sports")
        .put("path", "/sports/schedule")
        .build()
    )
);
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

```python
analytics.enqueue(GroupMessage.builder("group123")
    .userId("f4ca124298")
    .traits(ImmutableMap.builder()
        .put("name", "Rudder")
        .put("size", 19)
        .build()
    )
);
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

```java
analytics.enqueue(AliasMessage.builder("previousId")
    .userId("newId")
);
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

## Block Flush

{% hint style="info" %}
Only available on version `1.0.1` onwards.
{% endhint %}

If you want to block the `flush` until all the events are uploaded , JAVA SDK has one builder method `synchronize()` with default value `false` . It needs to be set as `true` .

An example for Blocking the `flush` is shown:

```java
RudderAnalytics analytics = RudderAnalytics.builder(
        WRITE_KEY,
        DATA_PLANE_URL
)
// optional (default : false).
// It is required to block further method invocation until the flush completes.
.synchronize(true) 
.plugin(new PluginLog()) // optional. Used for Logging 
.build();

// ...YOUR CODE...

// optional. Triggers a flush and block until the flush completes. 
// Required in case of Synchronize. 
// It calls implicitly the `flush` method. 
// So, explicit `flush` call is not required.
analytics.blockFlush(); 
analytics.shutdown(); // Shut down after the flush is complete.
```

## FAQ

### Can I use the ImmutableMap class?

Yes. You need to use the Guava library. You can use plain old Java Maps instead.

## Contact Us

To know more about the RudderStack Java SDK, you can [contact us](mailto:%20contact@rudderstack.com) or see the SDK [in action](https://rudderstack.com/request-a-demo). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

In case you come across any issues while using this SDK, please feel free to contact us.

