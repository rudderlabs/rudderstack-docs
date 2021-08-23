---
description: >-
  Detailed technical documentation on using RudderStack’s Node.js SDK to send
  server-side events to various destinations.
---

# Node.js

RudderStack’s Node.js SDK lets you track your customer event data from your Node.js app and route them to your specified destination platforms.

{% hint style="success" %}
Find the code for this SDK in our [**GitHub repository**](https://github.com/rudderlabs/rudder-sdk-node).
{% endhint %}

## Installing the Node.js SDK

To install the RudderStack Node.js SDK using [**npm**](https://www.npmjs.com/), run the following command:

```bash
npm install @rudderstack/rudder-sdk-node
```

## Using the SDK

To use the Node.js SDK, run the following code snippet:

```javascript
const Analytics = require("@rudderstack/rudder-sdk-node");

// RudderStack requires the batch endpoint of the server you are running
const client = new Analytics(WRITE_KEY, `${DATA_PLANE_URL}/v1/batch`);
```

Running the above snippet creates a global RudderStack client object that can be used for all the subsequent event requests.

## Supported Events

The RudderStack Node.js SDK supports the following API calls:

* Identify
* Track
* Page
* Group
* Alias

For a detailed information on each of these calls, refer to our [**RudderStack API Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec) guide.

{% hint style="info" %}
RudderStack does not store the user state in any of the server-side SDKs. Unlike the client-side SDKs that deal with only a single user at a given time, the server-side SDKs deal with multiple users at the same time. Therefore, for any of the calls supported by the Node.js SDK, you need to specify either `userId` or `anonymousId` every time.
{% endhint %}

## Identify

The `identify` call lets you associate a user to their actions as well as captures the relevant traits or properties related to that user.

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

The `identify` parameters are as described below:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | A user identifier for cases where there is no `userId` set for the user. **Either `userId` or `anonymousId` is required.** |
| `userId` | String | Required, if `anonymousId` is not present | The unique identifier for a user in your database. |
| `context` | Object | Optional | The dictionary of information that provides context about a message. Note that it is not directly related to the API call. |
| `integrations` | Object | Optional | The dictionary of destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| \`\`[`traits`](https://docs.rudderstack.com/rudderstack-api/rudderstack-spec/identify#identify-traits)\`\` | Object | Optional | The dictionary of the traits associated with the user, such as `name`or `email.` |

## Track

The `track` call lets you record the users' actions along with their associated properties. Each user  action is called an 'event'.

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
| `userId` | String | Required, if `anonymousId` is not present. | The unique identifier for a user in your database. |
| `anonymousId` | String | Optional | A user identifier for cases where there is no `userId` set for the user. **Either `userId` or `anonymousId` is required.** |
| `event` | String | Required | Name of the user event. |
| `properties` | Object | Optional | The dictionary of the properties associated with the particular event. |
| `context` | Object | Optional | The dictionary of information that provides context about a message. Note that it is not directly related to the API call. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `integrations` | Object | Optional | A dictionary of destinations to be either enabled or disabled. |

## Page

The `page` call allows you to record the page views on your website. It also records the other relevant information about the page that is being viewed.

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
| `anonymousId` | String | Optional | A user identifier for cases where there is no `userId` set for the user. **Either `userId` or `anonymousId` is required.** |
| `userId` | String | Required, if `anonymousId` is not present.| The unique identifier for a user in your database. |
| `context` | Object | Optional | The dictionary of information that provides context about a message. Note that it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary of destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the viewed page. |
| `properties` | Object | Optional | A dictionary of the properties associated with the viewed page, like `url` and `referrer`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Group

The `group` call allows you to link an identified user with a group, such as a company, organization, or an account. It also lets you record any custom traits associated with that group, such as the name of the company, the number of employees, etc.

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
| `anonymousId` | String | Optional | A user identifier for cases where there is no `userId` set for the user. **Either `userId` or `anonymousId` is required.** |
| `userId` | String | Required, if `anonymousId` is not present. | The unique identifier for a user in your database. |
| `context` | Object | Optional | A dictionary of information that provides context about a message. Note that it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary of the destinations to be either enabled or disabled. |
| `groupId` | String | Required | Unique identifier for the group present in your database. |
| `traits` | Object | Optional | A dictionary of the group's properties or traits, like `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Alias

The `alias` call lets you merge different identities of a known user.

{% hint style="info" %}
`alias` is an advanced method that lets you change the tracked user's ID explicitly. This method is useful when managing identities for some of the downstream destinations.
{% endhint %}

{% hint style="info" %}
For a detailed explanation of the `alias` call, refer to our [**RudderStack API Specification**](https://docs.rudderstack.com/rudderstack-api/rudderstack-spec/alias) guide.
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
| `userId` | String | Required, if `anonymousId` is not present. | The unique identifier for a user in your database. |
| `context` | Object | Optional | A dictionary of information that provides context about a message. Note that it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary of the destinations to be either enabled or disabled. |
| `previousId` | String | Required | The previous unique identifier of the user. |
| `traits` | Object | Optional | The dictionary of the traits associated with the user, like `name`or `email.` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## Node.js SDK Data Persistence

{% hint style="warning" %}
This feature is still in beta. Contact us on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel if you face any issues.
{% endhint %}

If the Node.js SDK fails to successfully deliver the event data to RudderStack at the first attempt, it retries the event delivery. However, if, for some reason, RudderStack is unavailable for a longer duration, there is a possibility of data loss.

To prevent the data loss from the Node.js SDK to RudderStack while it is unavailable, RudderStack has a data persistence feature to persist the event data in **Redis**, leading to better event delivery guarantees. Also, the SDK can retry multiple times as the queue is maintained in a different process space \(in this case, Redis\).

{% hint style="info" %}
You will need to host a Redis server and use it as the intermediary data storage queue to use this feature.
{% endhint %}

{% hint style="info" %}
RudderStack uses [**Bull**](https://github.com/OptimalBits/bull) as the interface layer between the Node.js SDK and Redis.
{% endhint %}

A sample initialization of the SDK is as below:

```jsx
const client = new Analytics(WRITE_KEY,`${DATA_PLANE_URL}/v1/batch`,{
    flushAt: <number> = 20,
    flushInterval: <ms> = 20000
    // the max number of elements that the SDK can hold in memory 
    // this is different than the Redis list created when persistence is enabled.
    // This restricts the data in-memory when Redis is down, unreachable etc.
    maxInternalQueueSize: <number> = 20000 
});

client.createPersistenceQueue({ redisOpts: { host: "localhost" } }, err => {})
```

To achieve the data persistence, you need to call the `createPersistenceQueue` method which takes two parameters as input - `queueOpts` and a `callback`. This will initialize the persistent queue. The specifications of these parameters are as follows:

### `queueOpts`

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

{% hint style="info" %}
More information on this parameter can be found in the [**Bull docs**](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queue).
{% endhint %}

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
    maxAttempts?: number = 10
}
```

### `callback`

```jsx
// createPersistenceQueue calls this with error or nothing(in case of success), // user should retry in case of error
callback: function(error) || function()
```

Calling the `createPersistenceQueue` method will initialize a Redis list by calling [**Bull's**](https://github.com/OptimalBits/bull) utility methods. It will also add a **single** job processor for  the processing \(making requests to RudderStack\) jobs that are pushed into the list. Any error encountered while doing this leads to calling `callback` with the error.

{% hint style="info" %}
It is recommended to retry calling `createPersistenceQueue` with a backoff, if the callback returns with an error.
{% endhint %}

{% hint style="warning" %}
If the `createPersistenceQueue` method is not called after initializing the SDK, the SDK will work without any persistence.
{% endhint %}

### **Configurable Parameters**

* **`flush()`**: You can use this method to ensure that all the events in the queue are processed. The following snippet highlights the user of `flush()` with a callback:

```jsx
client.flush(function(err, batch){
  console.log('Flushing done');
}
)
```

* **`flushAt`** : The maximum number of events to batch and send to the server. The default value is **20**. 
* **`flushInterval`** : The maximum timespan after which the events from the in-memory queue is flushed to Redis' persistence queue. The default value is **20 seconds**. 
* **`maxInternalQueueSize`** - The maximum size of the in-memory queue. The default value is **20000**. 
* **`JobOpts.maxAttempts`** - The maximum number of retry attempts. The default value is **10**. 
* **`isMultiProcessor`** - Determines whether to handle previously active jobs. If set to `false`, the previously active job will be picked up first by the processor. Otherwise, Bull moves this job to the back of the Redis queue to be picked up after the already pushed event. 

{% hint style="warning" %}
If the same queue \(RudderStack SDK initialized with the same queue name\) is used in multiple servers, set this value to `true`as event ordering is not present in this case.
{% endhint %}

### **Flow**

* Calling the SDK methods like `track`, `page`, `identify`, etc. pushes the events to an in-memory array. 
* The events from the array are flushed as a `batch` to the Redis persistence based on the `flushAt` and `flushInterval` settings. The in-memory array has a maximum size of `maxInternalQueueSize`. **Once this size limit is reached,**  _****_**the events won't be accepted if not drained to the other side \(cases where Redis connection is slow or the Redis server is not reachable\).** 
* The processor will take the batch from the Redis list and make a request to RudderStack. In case of an error, the processor will retry sending the data again if the error can be retried \(errors with status code `5xx and 429`\). **The retry will go up to `JobOpts.maxAttempts` with an** **exponential backoff of power 2 with max backoff of 30 seconds**. 
* If the job fails even after `JobOpts.maxAttempts`, it will not be retried again and pushed to a `failed queue`. **You can retry them later manually using Bull’s utility methods** [**listed here**](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetfailed) **or get them from Redis directly**. 
* There might be a scenario where the node process dies with the jobs still in active state \(not completed nor failed but in the process of sending/retrying\). Since the RudderStack SDK has only **1 processor for sending events** \(this count should always be **1**\), the next time the SDK is initialized and `createPersistenceQueue` is called, **the jobs will be picked up first by the processor to get processed to maintain event ordering based on the value of `QueueOpts.isMultiProcessor`**. 
* For multiple servers \(SDK\) connecting to the same queue \(`QueueOpts.queueName`\), there will be multiple processors fetching events from the same queue and event ordering won’t be implemented. Hence, `QueueOpts.isMultiProcessor` should be set to **`true`.**

## Contact Us

For more information on any of the sections covered in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
