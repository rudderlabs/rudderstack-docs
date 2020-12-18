---
description: Step-by-step guide to set up Redis as a destination in RudderStack.
---

# Redis

Redis is an open-source, in-memory data structure store, which can be used as a database, and a message broker.

RudderStack stores all the traits of your user as a [Redis hash](https://redis.io/commands/hset), allowing you to access user profiles in real-time. 

{% hint style="info" %}
Redis destination only processes **`identify`** API calls. Other event types are ignored.
{% endhint %}

{% hint style="warning" %}
It is highly recommended that you keep your Redis instance inside a private network and make it accessible to RudderStack. 
{% endhint %}

## Getting Started

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Select the destination as **Redis** to your source. Give your destination a name and then click on **Next**.
* Next, in the **Connection Settings**, ****fill all the fields with the relevant information and click on **Next**.

![Redis Destination Settings on the RudderStack Dashboard](../.gitbook/assets/screenshot-2020-11-02-at-1.51.36-pm.png)

**Prefix**  
By default, RudderStack stores user traits with the key `user:<user_id>`. An extra prefix can be added in the destination configuration to distinguish all RudderStack-stored keys with a prefix.

  
**Database**  
RudderStack stores the user traits in the default database of the Redis instance. A different database inside the Redis instance can be configured from the destination configuration.

**Secure**  
Switch this on to enable secure TLS communication between RudderStack redis client and your redis server

**Skip Verify**  
Switch this on to skip the client's verification of  the server's certificate chain and host name. In this mode, TLS is susceptible to man-in-the-middle attacks. This should be used only for testing.

**CA certificate**  
Certificate which needs to be verified while establishing a secure connection.  Skip setting this if Root CA of your server can be verified with any client eg. Elasticache



## Identify

The **`identify`** call lets you associate the actions to a user and record their traits like name, email, etc. 

{% hint style="info" %}
For more information on the **`identify`** method, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

RudderStack stores the user traits in the configured Redis instance. You can access the latest user traits by querying Redis for the key `user:<user_id>`.  
  
Here is an example of an **`identify`** event ****with traits from [RudderStack JavaScript SDK](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk) and how it is stored in Redis.

```javascript
// Identify a user with name and title as traits

rudderanalytics.identify('user-1', {
  name: 'John Doe',
  title: 'CEO'
});
```

```bash
// redis-cli
redis> HGETALL user:user-1
1) "name"
2) "John Doe"
3) "title"
4) "CEO"
```

  
**Nested Properties**  
If your user traits have nested properties, they will be flattened out with `.` as the separator.

```javascript
// Identify a user with location as a trait

rudderanalytics.identify('user-2', {
  location: {
     state: 'Texas',
     city: 'Austin'
  }
});
```

```bash
// redis-cli
redis> HGETALL user:user-2
1) "location.state"
2) "Texas"
3) "location.city"
4) "Austin"

```

**Custom Prefix**  
If you configure a Redis destination with a prefix `rudderstack`,  then all the keys will be prefixed in the same manner.

Here's an example of how it works:

```javascript
// Identify a user with name and title as traits

rudderanalytics.identify('user-3', {
  age: 23
});
```

```bash
// redis-cli
redis> HGETALL rudderstack:user:user-3
1) "age"
2) 23

```

## FAQ's <a id="contact-us"></a>

### How to setup redis on docker with TLS support?

One way to enable a TLS endpoint for accessing redis is to run a `redis-stunnel` container with a link to the `redis` container and exposing the TLS port. More instructions can be found [here](https://hub.docker.com/r/runnable/redis-stunnel/)

{% hint style="info" %}
Set Common Name to `localhost` while generating CA certificate and server certificates
{% endhint %}

Set the TLS endpoint of the `redis-stunnel` container as the address in the RudderStack Redis destination settings. Eg. `127.0.0.1:6380` while running containers locally with defaults. Set the `ca.pem` file generated above as the CA certificate in the settings

![](../.gitbook/assets/image%20%2837%29.png)

## Contact Us <a id="contact-us"></a>

If you come across any issues while configuring Redis with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

