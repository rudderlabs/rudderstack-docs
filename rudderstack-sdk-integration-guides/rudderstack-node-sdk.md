---
description: >-
  Detailed technical documentation on using RudderStack’s Node.js SDK to send
  events to various destinations
---

# Node.js

RudderStack’s Node.js SDK allows you to track your customer event data from your Node.js code. Once enabled, the event requests hit the RudderStack servers. RudderStack then routes the events to the specified destination platforms as configured by you.

You can find this SDK in our [GitHub repository](https://github.com/rudderlabs/rudder-sdk-node).

## Installing the RudderStack Node.js SDK

To install the RudderStack Node.js SDK using [npm](https://www.npmjs.com/), run the following command:

```bash
npm install @rudderstack/rudder-sdk-node
```

## Using the RudderStack Node.js SDK

To use the SDK, run the following code snippet:

```javascript
const Analytics = require("@rudderstack/rudder-sdk-node");

// we need the batch endpoint of the Rudder server you are running
const client = new Analytics(WRITE_KEY, DATA_PLANE_URL/v1/batch); 
```

## Identify

The `identify` call lets you associate a user to their actions as well as captures the relevant traits or properties related to that user.

{% hint style="info" %}
For a detailed explanation of the `identify` call, please refer to our RudderStack API specification guide.
{% endhint %}

An example `identify` call is as shown:

```javascript
client.identify({
  userId: '123456',
  traits: {
    name: 'Name Username',
    email: 'name@website.com',
    plan: 'Free',
    friends: 21
  }
});
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
For a detailed explanation of the `track` call, please refer to our RudderStack API specification guide.
{% endhint %}

An example `track` call is as shown:

```javascript
client.track({
  userId: '123456',
  event: 'Item Viewed',
  properties: {
    revenue: 19.95,
    shippingMethod: 'Premium'
  }
});
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

```javascript
client.page({
  userId: '12345',
  category: 'Food',
  name: 'Pizza',
  properties: {
    url: 'https://dominos.com',
    title: 'Pizza',
    referrer: 'https://google.com'
  }
});
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

```javascript
client.group({
  userId: '12345',
  groupId: '1',
  traits: {
    name: 'Company',
    description: 'Google'
  }
});
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

```javascript
client.alias({
  previousId: 'old_id',
  userId: 'new_id'
});
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

## Node SDK data persistence

{% hint style="info" %}
This feature is still in beta. [Contact Us](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-node-sdk#contact-us) for any issue
{% endhint %}

Presently, Node SDK retries event delivery for `n` times if it fails to deliver the event data to Rudder server.

Since, the data is in-memory, it is expected that `n` needs to be small, which then leads to data loss if the Rudder server is available for larger duration.

To prevent data loss from Node SDK to server while the server is not ready to accept data or if the server is temporarily not reachable, we introduce a feature to persist data in Redis. This will give better guarantees and the `n` can be large as now the queue is maintained in a different process space( Redis here). To achieve this, you need to host a Redis server and use that one as the intermediary data storage queue. We are using [Bull](https://github.com/OptimalBits/bull) as the interface layer between the SDK and Redis.

The initialisation of the SDK is as follows:

```jsx
const client = new Analytics("write_key","server_url/v1/batch",{
	flushAt: <number> = 20,
	flushInterval: <ms> = 20000
	// the max number of elements that the SDK can hold in memory, 
	// this is different than the Redis list created when persistence is enabled.
	// This restricts the data in-memory when Redis is down, unreachable etc.
	maxInternalQueueSize: <number> = 20000 
});

client.createPersistenceQueue({ redisOpts: { host: "localhost" } }, err => {})
```

To achieve the data persistence, you need to call the api `createPersistenceQueue` which takes two parameters as input `queueOpts` and a `callback`. This will initialise the persistent queue. Please find below the specifications of these parameters:

```jsx
QueueOpts {
	queueName ?: string = rudderEventsQueue,
	isMultiProcessor ? : boolean = false
	// pass a value without the {}, this will used as prefix to Redis keys,
	// needed to support Redis cluster slots.
	prefix ? : string = {rudder},  
	redisOpts : RedisOpts,
	jobOpts ?: JobOpts
}

More on this here: [Bull docs](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queue)
```

```jsx
RedisOpts {
	port?: number = 6379;
	host?: string = localhost;
	db?: number = 0;
	password?: string;
}
```

```jsx
JobOpts {
	maxAttempts ? : number = 10
}
```

```jsx
// createPersistenceQueue calls this with error or nothing(in case of success), // user should retry in case of error
callback: function(error) || function() 

```

Calling the `createPersistenceQueue` api will initialize a Redis list by calling [Bull's](https://github.com/OptimalBits/bull) utility methods. It will also add a *single* job processor for processing(making requests to Rudder server) jobs that are pushed into the list. Error in doing this will lead to calling the callback with the error parameter. *Note:* *It is recommended to retry calling createPersistenceQueue with backoff, if the callback returns with an error.*

**If the createPersistenceQueue method is not called after initialising the SDK by the user, the SDK will work with no persistence and the behaviour will be the same as at present.**

### **Flow**

Calling the SDK apis like track, page, identify etc will push the events to an in-memory array. The events from the array are flushed as a `batch` to Redis persistence based on the `flushAt and flushInterval` settings. The in-memory array has a max size of `maxInternalQueueSize`, *after which events won't be accepted if not drained at the other side (cases where Redis connection is slow or redis server is not reachable etc)*. 

The processor will take the batch formed in the above step from Redis list and make a request to Rudder server. If there is some error, the processor will retry to send data again if the error is *retry-able (errors with status code `5xx and 429`)*. The retry will go up to `JobOpts.maxAttempts` time with *exponential backoff of power 2 with max backoff of 30secs*.

If the job is failing even after JobOpts.maxAttempts, it will not be retried again and pushed to a `failed queue`. ***One can retry them later manually using Bull’s utility methods [like](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetfailed) or get them from Redis directly***. 

 If the node process dies with jobs still in active state (not completed nor failed but in the process of sending/retrying, since Rudder SDK has only `one processor for sending events`, this count should always be 1), the next time the SDK is initialised and `createPersistenceQueue` is called, the ***jobs will be picked up first by the processor to get processed to maintain event ordering based on the QueueOpts.isMultiProcessor value***. 

For multiple servers(SDK) connecting to the same queue (`QueueOpts.queueName`), hence there will be multiple processors fetching events from the same queue, *event ordering won’t be there and `QueueOpts.isMultiProcessor` should be set as* **`*true*`.**

### **Important Configurable Parameters**

- **flushAt** - The maximum number of events that a batch can contain and to be sent to the server. The default value is 20.
- **flushInterval** - The maximum timespan after which the events from in memory queue is flushed to redis persistence queue. The default value is 20 seconds.
- **maxInternalQueueSize** - The maximum size of the in-memory queue. The default value is 20000
- **JobOpts.maxAttempts** - The maximum number of retry attempts. The default value is 10.
- **isMultiProcessor** - determines whether to handle previously active jobs, if false the previously active job will be picked up first by the processor, else *Bull handles it by moving it to the back of the Redis queue to picked up after the already pushed event*. **If the same queue(Rudder SDK initialised with the same queue name) is used in multiple servers, set this value as `true` because event ordering is non-present.**


## Contact Us

To know more about the RudderStack Node.js SDK, you can [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

