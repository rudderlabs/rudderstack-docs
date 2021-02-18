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

## Data Persistence in Node.js SDK

{% hint style="info" %}
This feature is still in beta. Contact us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel for any issue.
{% endhint %}

Presently, the Node.js SDK retries event delivery for `n` times, if it fails to deliver the event data to RudderStack.

Since the data is in-memory, it is expected that `n` is a small number, failing which there is a possibility of data loss in case RudderStack is available for larger duration.

To prevent data loss from the SDK to the RudderStack server while the server is not ready to accept data, or if it is is temporarily not reachable, we have introduced a feature to persist the event data in Redis. This will lead to better event delivery guarantees. Also, the retries can now be done multiple times as the queue is maintained in a different process space (in this case, Redis).

To leverage this feature, you will, therefore, need to host a Redis server and use that one as the intermediary data storage queue. We recommend using [Bull](https://github.com/OptimalBits/bull) as the interface layer between the Node.js SDK and Redis.

The initialization of the SDK is as follows:

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

To achieve the data persistence, you need to call the API `createPersistenceQueue` which takes two parameters as input - `queueOpts` and a `callback`. This will initialize the persistent queue. The specifications of these parameters are as below:

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
```
More on this here: [Bull docs](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queue).

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

Calling the `createPersistenceQueue` api will initialize a Redis list by calling [Bull's](https://github.com/OptimalBits/bull) utility methods. It will also add a *single* job processor for processing(making requests to the RudderStack server) jobs that are pushed into the list. Error in doing this will lead to calling the callback with the error parameter. 

**Note**: It is recommended to retry calling `createPersistenceQueue` with backoff, if the callback returns with an error.

**If the `createPersistenceQueue` method is not called after initializing the SDK by the user, the SDK will work with no persistence and the behaviour will be the same as at present.**

### **Flow**

1. Calling the SDK APIs like `track`, `page`, `identify`, etc will push the events to an in-memory array.

2. The events from the array are flushed as a `batch` to the Redis persistence based on the `flushAt and flushInterval` settings. The in-memory array has a maximum size of `maxInternalQueueSize`, *after which the events won't be accepted if not drained to the other side (cases where Redis connection is slow or the Redis server is not reachable.)*.

3. The processor will take the batch formed in the above step from Redis list and make a request to RudderStack. In case of an error, the processor will retry to send data again if the error can be retried (errors with status code `5xx and 429`). The retry will go up to `JobOpts.maxAttempts` time with an **exponential backoff of power 2 with max backoff of 30secs**.

4. If the job fails even after `JobOpts.maxAttempts`, it will not be retried again and pushed to a `failed queue`. ***You can retry them later manually using Bull’s utility methods [listed here](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetfailed) or get them from Redis directly***.

5. If the node process dies with the jobs still in active state (not completed nor failed but in the process of sending/retrying, since the RudderStack SDK has only **one processor for sending events**, and this count should always be 1), the next time the SDK is initialized and `createPersistenceQueue` is called, the ***jobs will be picked up first by the processor to get processed to maintain event ordering based on the `QueueOpts.isMultiProcessor` value***.

6. For multiple servers(SDK) connecting to the same queue (`QueueOpts.queueName`), there will be multiple processors fetching events from the same queue, event ordering won’t be implemented and hence `QueueOpts.isMultiProcessor` should be set to **`*true*`.**


### **Important Configurable Parameters**

- **`flushAt`** - The maximum number of events that a batch can contain to be sent to the server. The default value is **20**.

- **`flushInterval`** - The maximum timespan after which the events from in memory queue is flushed to Redis' persistence queue. The default value is **20 seconds**.

- **`maxInternalQueueSize`** - The maximum size of the in-memory queue. The default value is **20000**.

- **`JobOpts.maxAttempts`** - The maximum number of retry attempts. The default value is **10**.

- **`isMultiProcessor`** - Determines whether to handle previously active jobs. If set to false, the previously active job will be picked up first by the processor. Otherwise, Bull moves this job to the back of the Redis queue to be picked up after the already pushed event. **If the same queue(RudderStack SDK initialized with the same queue name) is used in multiple servers, set this value to `true`, because event ordering is not present in this case.**


## Contact Us

To know more about the RudderStack Node.js SDK, you can [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

