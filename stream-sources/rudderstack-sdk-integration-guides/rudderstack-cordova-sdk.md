---
description: >-
  Detailed technical documentation on RudderStack’s Cordova SDK to send events from your Cordova apps to various destinations.
---

# Cordova

## What is the RudderStack Cordova SDK?

[**Apache Cordova**](https://cordova.apache.org/) is an open-source, cross-platform application development framework. The RudderStack Cordova SDK lets you track event data from your Cordova app and send it to your preferred destination platforms via RudderStack.

Refer to the [**GitHub repository**](https://github.com/rudderlabs/rudder-sdk-cordova) to access the SDK's codebase and the [**sample implementation**](https://github.com/rudderlabs/rudder-sdk-cordova/blob/develop/sample-cordova/www/js/index.js).

## SDK setup requirements

To set up the Cordova SDK, follow these steps:

* Sign up and log into your [**RudderStack account**](https://app.rudderstack.com/login?type=freetrial).

* Add a new **Cordova** source and note the source write key, as shown:

![Adding Cordova SDK](../../.gitbook/assets/Cordova_Source.png)

* You will also need your Data Plane URL. Follow [**this section**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it) for more information.

## Installing the SDK

To add the Cordova SDK as a dependency, navigate to the root folder of your application and run the following command:

```bash
cordova plugin add rudder-sdk-cordova
```

## Initializing the RudderStack client

After adding the SDK as a dependency, you need to set up the SDK. Add the following code in the `onDeviceReady()` function of your home page to initialize the SDK.

A sample Cordova SDK initialization is as shown:

```javascript
RudderClient.initialize( <WRITE_KEY> , {
  "dataPlaneUrl": <DATA_PLANE_URL> ,
  "trackLifecycleEvents": true,
  "controlPlaneUrl": "https://api.rudderstack.com"
})
 ```

{% hint style="success" %}
Make sure to use the `await` keyword with the `initialize` call.
{% endhint %}

The `setup` method has the following signature:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `writeKey` | `string` | Required | Your Cordova source `writeKey` from the dashboard. |
| `configuration` | `JSON Object` | Optional | Contains the RudderStack client configuration. |
| `options` | `JSON Object` | Optional | Extra options to be pass along with the event. |

{% hint style="info" %}
* Check the **Configuring your RudderStack Client** section below for detailed information on the parameters you can send in the `configuration` object.

* Check the **Configuring your Options object** section below for detailed information on the parameters you can send in the `options` object.
{% endhint %}

## Identify

The `identify` call lets you identify a visiting user and associate them to their actions. It also lets you record the traits about them like their name, email address, etc.

{% hint style="info" %}
For more information on the `identify` call and the supported fields, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/identify) guide.
{% endhint %}

{% hint style="success" %}
As a best practice, we recommend calling `identify` at the start of every session or page load for logged-in users. This will ensure all their latest traits are captured in all the subsequent events.
{% endhint %}

A sample `identify` call is as shown below:

```javascript
RudderClient.identify("userId", {
  "address": {
    "city": "Hyderabad",
    "country": "India",
    "state": "Telangana",
  },
  "birthday": "17/07/1984",
  "company": {
    "name": "RudderStack",
    "id": "RS",
    "industry": "IT"
  },
  "email": "john@rudderstack.com",
  "firstName": "john",
}, {
  "externalIds": {
    "brazeExternalId": "externalId1"
  }
})
```
The `identify` method has the following signatures:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `userId` | `string` | Required | User identifier in your database. |
| `traits` | `JSON Object` | Optional | Information related to the user traits. |
| `options` | `JSON Object` | Optional | Extra options for the `identify` event. |

{% hint style="info" %}
For more information on the behavior of the `integrations` property, refer to the **Enabling/Disabling Events for Specific Destinations** section below.
{% endhint %}

## Group

The `group` call lets you link an identified user with a group, such as a company, organization, or an account. It also lets you record any custom traits associated with that group, such as the name of the company, the number of employees, etc.

{% hint style="info" %}
An identified user can be a part of more than one group. 
{% endhint %}

{% hint style="info" %}
For more information on the `group` call and the supported fields, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/group) guide.
{% endhint %}

A sample `group` call is shown below:

```javascript
RudderClient.group("group1", {
  "groupname": "RS",
  "groupwork": "Mobile dev"
})
```

The `group` method has the following signatures:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `groupId` | `string` | Required | The organization ID with which you want to associate the user. |
| `groupTraits` | `JSON Object` | Optional | Any other property of the organization that you want to pass along with the call. |
| `options` | `JSON Object` | Optional | Extra options for the `group` event. |

## Track

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any properties associated with the action.

Each user action is called an **event**. Every event has a name associated with it, e.g. `Product Reviewed`. This event might also have some properties associated with it, like `review_id` and `rating`.

{% hint style="info" %}
For more information on the `track` call and the supported fields, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/track) guide.
{% endhint %}

A sample `track` event called `Order Completed` using the Cordova SDK is shown below:

```javascript
RudderClient.track('Order Completed', {
  checkout_id: '12345',
  order_id: '1234',
  affiliation: 'Apple Store',
  total: 20,
  revenue: 15.00,
  shipping: 22,
  tax: 1,
  discount: 1.5,
  coupon: 'ImagePro',
  currency: 'USD',
  products: [{
      product_id: '123',
      sku: 'G-32',
      name: 'Monopoly',
      price: 14,
      quantity: 1,
      category: 'Games',
      url: 'https://www.website.com/product/path',
      image_url: 'https://www.website.com/product/path.jpg'
    },
    {
      product_id: '345',
      sku: 'F-32',
      name: 'UNO',
      price: 3.45,
      quantity: 2,
      category: 'Games'
    }
  ]
})
```

The `track` method has the following signature:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `name` | `String` | Required | Contains the name of the event that you want to track. |
| `properties` | `JSON Object` | Optional | Contains the extra properties to be sent along with the event. |
| `options` | `JSON Object` | Optional | Contains the extra event options. |

{% hint style="info" %}
RudderStack automatically tracks the following optional events:

1. `Application Installed`
2. `Application Opened`

You can disable these events by sending the property `trackLifecycleEvents` as `false` within the `configuration` object while initializing `RudderClient`. **However, it is highly recommended to keep them enabled**.
{% endhint %}

## Screen

The `screen` call lets you record whenever your user views their mobile screen with any additional relevant information about the viewed screen. 

{% hint style="info" %}
For more information on the `screen` call and the supported fields, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/screen) guide.
{% endhint %}

A sample `screen` call is shown below:

```javascript
RudderClient.screen("Home Screen", {
  "mobile": "pixel"
})
```

The `screen` method has the following signature:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `screenName` | `string` | Required | Name of the viewed screen. |
| `property` | `JSON Object` | Optional | Extra properties that you want to pass along with the `screen` call. |
| `option` | `JSON Object` | Optional | Extra options to be passed along with `screen` event. |


## Alias

The `alias` call lets you merge different identities of a known user.

{% hint style="info" %}
`alias` is an advanced method that lets you change the tracked user's ID explicitly. This method is useful when managing identities for some of the downstream destinations.
{% endhint %}

{% hint style="info" %}
For more information on the `alias` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/alias) guide.
{% endhint %}

A sample `alias` call is shown below:

```javascript
RudderClient.alias("userId")
```

The `alias` method has the following signature:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `newId` | `String` | Required | The new `userId` that you want to assign to the user. |
| `options` | `JSON Object` | Optional | Event level options. |


## Reset

You can use the `reset` method to clear the persisted `traits` from the `identify` call. We recommend calling it during the `Logout` operation.

A sample `reset` call is as shown:

```javascript
RudderClient.reset()
```
## Configuring the RudderStack client

You can configure your RudderStack client by passing the following parameters in the `configuration` object of your `RudderClient.initialize()` call:

| Parameter | Type | Description | Default Value |
| :--- | :--- | :--- | :--- |
| `logLevel` | `int` | Controls how much of the log you want to see from the Cordova SDK. | `0`  |
| `dataPlaneUrl` | `string` | Your RudderStack Data Plane URL. | [**https://api.rudderlabs.com**](https://api.rudderlabs.com) |
| `flushQueueSize` | `int` | The number of events included in a batch request to the server. | `30` |
| `dbThresholdCount` | `int` | The number of events to be saved in the `SQLite` database. Once the limit is reached, older events are deleted from the database. | `10000` |
| `sleepTimeout` | `int` | Minimum waiting time to flush the events to the server. | `10 seconds` |
| `configRefreshInterval` | `int` | RudderStack will fetch the config after this time interval. | `2` |
| `trackLifecycleEvents` | `boolean` | Determmines whether the SDK should capture the application life cycle events automatically. | `true` |
| `controlPlaneUrl` | `string` | This parameter should be changed **only if** you are self-hosting the Control Plane. Check the section **Self-Hosted Control Plane** below for more information. The SDK will add `/sourceConfig` along with this URL to fetch the configuration. | [**https://api.rudderlabs.com**](https://api.rudderlabs.com) |

## Log level

You can set the `logLevel` in the configuration object by referring to the table below: 

| Log Level | Integer |
| :--- | :--- |
| `VERBOSE` | `5` |
| `DEBUG` | `4` |
| `INFO` | `3` |
| `WARN` | `2` |
| `ERROR` | `1` |
| `NONE` | `0` |

## Configuring your `options` object

The sample format of the `options` object that can send along with all the above-mentioned API calls is shown in the following snippet:

```json
{
  "externalIds": {
    "brazeExternalId": "externalId1"
  }
}
```
The `options` object has the following signature:

| Name | Data Type | Presence | Description |
| :--- | :--- | :--- | :--- |
| `externalIds` | `JSON Object` | Optional | Each key within `externalIds` object should define the type of external ID, and its value should be a `String` or `Integer`. |
| `integrations` | `JSON Object` | Optional | Each key within the `integrations` object should hold the display name of your desired destination. Its value should be a `boolean` indicating whether you want to send that event or not.  |


## Enabling/disabling events for specific destinations

RudderStack lets you send your event data only to the explicitly specified destinations and filtering out the rest. You can do this in one of the following two ways:

* While initializing the Cordova SDK
* While making any event call

### Passing destinations during SDK initialization

This approach is useful when you want to send the events to specific destinations across all the event calls made using the SDK.

A sample SDK initialization is shown below:

```javascript
RudderClient.initialize("1n0JdVPZTRUIkLXYccrWzZwdGSx", {
  "dataPlaneUrl": "https://0ff6-175-101-36-4.ngrok.io",
  "flushQueueSize": 30,
  "dbCountThreshold": 10000,
  "configRefreshInterval": 2,
  "logLevel": 0,
  "sleepTimeOut": 10,
  "trackLifecycleEvents": true,
  "recordScreenViews": true,
  "controlPlaneUrl": "https://api.rudderstack.com"
}, {
  "integrations": {
    "MixPanel": true,
    "Amplitude": true
  }
})
```

### Passing destinations during event calls

This approach is useful when you want to send particular events to specific destinations, or if you want to override the destinations specified during the SDK initialization for a particular event.

An example is shown below:

```javascript
RudderClient.screen("Home Screen", {
  "mobile": "pixel"
}, {
  "integrations": {
    "All": false,
    "Salesforce": true
  }
})
```

In the above example, the values of the `screen` call are passed only to the Salesforce destination.

## Anonymous ID

You can use the `setAnonymousId` method to override the default `anonymousId`, as shown:

```javascript
RudderClient.setAnonymousId("CustomAnonymousId");
```

{% hint style="warning" %}
You need to call `setAnonymousId` method before calling `initialize`
{% endhint %}

## Advertisement ID

RudderStack collects the advertisement ID if it is enabled by the user. To set the advertising ID yourself, you can use the `setAdvertisingId` method as shown:

```javascript
RudderClient.setAdvertisingId("SampleAdvertisingId")
```

## Setting the device token

You can pass your `device-token` for push notifications to be passed to the destinations which support the **Push Notifications** feature. RudderStack sets the `token` under `context.device.token`.

An example of setting the `device-token` is as shown:

```javascript
RudderClient.putDeviceToken("sampleDeviceToken");
```

## Contact us
In case of any queries while setting up or using the Cordova SDK, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
