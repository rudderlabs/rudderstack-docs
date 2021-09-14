---
description: >-
  Detailed technical documentation on RudderStack’s Cordova SDK to send events from your Cordova apps to various destinations.
---

# Cordova

## What is the RudderStack Cordova SDK?

[**Apache Cordova**](https://cordova.apache.org/) is an open-source, cross-platform application development framework. The RudderStack Cordova SDK lets you track event data from your Cordova app and send it to your preferred destination platforms via RudderStack.

Refer to the [**GitHub repository**](https://github.com/rudderlabs/rudder-sdk-cordova) to access the SDK's codebase and the sample implementation.

## SDK Setup Requirements

To set up the Cordova SDK, follow these steps:

* Sign up and log into your [**RudderStack account**](https://app.rudderstack.com/login?type=freetrial).

* Add a new **Cordova** source and note the source write key, as shown:

![Adding Cordova SDK](../../.gitbook/assets/Cordova_Source.png)

* You will also need your Data Plane URL. Follow [**this section**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it) for more information.

## Installing the SDK

To add the SDK as a dependency, navigate to the root folder of your application and execute the following command:

```bash
cordova plugin add rudder-sdk-cordova
```

## Initializing the RudderStack Client

After adding the SDK as a dependency, you need to set up the SDK. Add the following code in the `onDeviceReady()` function of your Home page to initialize the SDK.

A sample Cordova SDK initialization is as shown:

```javascript
RudderClient.initialize( <SOURCE_WRITE_KEY> , {
  "dataPlaneUrl": <YOUR_DATA_PLANE_URL> ,
  "flushQueueSize": 30,
  "dbCountThreshold": 10000,
  "configRefreshInterval": 2,
  "logLevel": 0,
  "sleepTimeOut": 10,
  "trackLifecycleEvents": true,
  "controlPlaneUrl": "https://api.rudderstack.com"
}, {
  "integrations": {
    "MixPanel": true,
    "Amplitude": true
  }
})
 ```

{% hint style="success" %}
Make sure to use the `await` keyword with the `initialize` call.
{% endhint %}

The `setup` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `writeKey` | `string` | Yes | Your Cordova Source `writeKey` |
| `configuration` | `JSON Object` | No | Contains the RudderStack Client configuration |
| `options` | `JSON Object` | No | Extra options to be passed along. |

Check the [Configuring your RudderStack Client](#configuring-your-rudderstack-client) section below for a detailed information about the parameters you can send in `configuration` object.

Check the [Configuring your Options object](#configuring-your-options-object) section below for a detailed information about the parameters you can send in `options` object.


## Identify

The `identify` call lets you identify a visiting user and associate them to their actions. It also lets you record the traits about them like their name, email address, etc.

{% hint style="info" %}
For more information on the `identify` call and the supported fields, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/identify) guide.
{% endhint %}

{% hint style="success" %}
As a best practice, make sure `identify` is called at the start of every session or page load for logged-in users, if possible. This will ensure all their latest traits are captured.
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
  },
  "integrations": {
    "MixPanel": false,
    "Amplitude": true
  }
})
```
The `identify` method has the following signatures:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` | `string` | Yes | Developer identity for the user |
| `traits` | `JSON Object` | No | Traits information for user |
| `options` | `JSON Object` | No | Extra options for the `identify` event |

{% hint style="info" %}
For more information on the behavior of the `integrations` property, refer to the **Enabling/Disabling Events for Specific Destinations** section below.
{% endhint %}

## Group

The `group` call allows you to link an identified user with a group, such as a company, organization, or an account. It also lets you record any custom traits associated with that group, such as the name of the company, the number of employees, etc.

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
}, {
  "integrations": {
    "All": false,
    "Amplitude": true
  }
})
```

The `group` method has the following signatures:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `groupId` | `string` | Yes | An ID of the organization with which you want to associate your user |
| `groupTraits` | `JSON Object` | No | Any other property of the organization you want to pass along with the call |
| `options` | `JSON Object` | No | Extra options for the `group` event |

## Track

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any properties associated with them.

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
}, {
  "integrations": {
    "All": false,
    "Amplitude": true
  }
})
```

The `track` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `String` | Yes | Contains the name of the event you want to track |
| `properties` | `JSON Object` | No | Contains the extra data properties you want to send along with the event |
| `options` | `JSON Object` | No | Contains the extra event options |

{% hint style="info" %}
We automatically track the following optional events:

1. `Application Installed`
2. `Application Opened`

You can disable these events by sending property `trackLifecycleEvents` as `false` within `configuration` object while initializing the `RudderClient`. However, it is highly recommended to keep them enabled.
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
}, {
  "integrations": {
    "All": false,
    "Amplitude": true
  }
})
```

The `screen` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `screenName` | `string` | Yes | Name of the screen viewed. |
| `property` | `JSON Object` | No | Extra property object that you want to pass along with the `screen` call. |
| `option` | `JSON Object` | No | Extra options to be passed along with `screen` event. |


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
RudderClient.alias("userId", {
  "integrations": {
    "All": false,
    "Amplitude": true
  }
})
```

The `alias` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `newId` | `String` | Yes | The new `userId` you want to assign to the user |
| `options` | `JSON Object` | No | Event level option |


## Reset

You can use the `reset` method to clear the persisted `traits` for the `identify` call. This is required for `Logout` operations.

A sample `reset` call is as shown:

```javascript
RudderClient.reset()
```
## Configuring your RudderStack Client

You can configure your client based on the following parameters by passing them in the `configuration` object of your `RudderClient.initialize()` call.

| Parameter | Type | Description | Default Value |
| :--- | :--- | :--- | :--- |
| `logLevel` | `int` | Controls how much of the log you want to see from the Cordova SDK. | `0`  |
| `dataPlaneUrl` | `string` | URL of your `data-plane`. Please refer above to see how to fetch the data plane URL. | [https://api.rudderlabs.com](https://api.rudderlabs.com) |
| `flushQueueSize` | `int` | Number of events in a batch request to the server. | `30` |
| `dbThresholdCount` | `int` | Number of events to be saved in the `SQLite` database. Once the limit is reached, older events are deleted from the DB. | `10000` |
| `sleepTimeout` | `int` | Minimum waiting time to flush the events to the server. | `10 seconds` |
| `configRefreshInterval` | `int` | It will fetch the config from `dashboard` after this many hours. | `2` |
| `trackLifecycleEvents` | `boolean` | Whether SDK will capture application life cycle events automatically. | `true` |
| `controlPlaneUrl` | `string` | This parameter should be changed **only if** you are self-hosting the Control Plane. Check the section **Self-Hosted Control Plane** below for more information. The SDK will add `/sourceConfig` along with this URL to fetch the configuration. | [https://api.rudderlabs.com](https://api.rudderlabs.com) |

## Log Level

You can set the `logLevel` in the configuration object by referring to the table below: 

| Log Level | Integer |
| :--- | :--- |
| `VERBOSE` | `5` |
| `DEBUG` | `4` |
| `INFO` | `3` |
| `WARN` | `2` |
| `ERROR` | `1` |
| `NONE` | `0` |

## Configuring your Options Object

The sample format of the `options` object that you are sending along with all the api calls looks like below:

```json
{
  "externalIds": {
    "brazeExternalId": "externalId1"
  },
  "integrations": {
    "MixPanel": false,
    "Amplitude": true
  }
}
```
The `options` object has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `externalIds` | `JSON Object` | NO | Each key within `externalIds` object should define the type of external Id and its value should be a `String` / `Integer`. |
| `integrations` | `JSON Object` | No | Each key within the `integrations` object should hold the display name of your desired destination and its value should be a `boolean` indicating whether you want to send that event or not.  |

### Self-Hosted Control Plane

If you are using a device mode destination like Adjust, Firebase, etc., the Cordova SDK needs to fetch the required configuration from the Control Plane. If you are using the RudderStack Config Generator to host your own Control Plane, then follow [this guide](https://docs.rudderstack.com/how-to-guides/rudderstack-config-generator#what-is-the-control-plane-url) and specify `controlPlaneUrl` in your`RudderConfig.Builder` that points to your hosted source configuration file.

{% hint style="warning" %}
You shouldn't pass the `controlPlaneUrl` parameter during SDK initialization if you are using the dashboard from [https://app.rudderstack.com](https://app.rudderstack.com). This parameter is supported only if you are using our open-source [RudderStack Config Generator](https://docs.rudderstack.com/how-to-guides/rudderstack-config-generator).
{% endhint %}
## Enabling/Disabling Events for Specific Destinations

RudderStack lets you send your event data only to the explicitly specified destinations and filtering out the rest. You can do this in one of the following two ways:

* While initializing the Cordova SDK
* While making any event call

### Passing Destinations During SDK Initialization

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

### Passing Destinations During Event Calls

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

## Setting Device Token

You can pass your `device-token` for push notifications to be passed to the destinations which support the Push Notification feature. We set the `token` under `context.device.token`.

An example of setting the `device-token` is as below:

```javascript
RudderClient.putDeviceToken("sampleDeviceToken");
```


## Contact Us
In case of any queries while setting up or using the Cordova SDK, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
