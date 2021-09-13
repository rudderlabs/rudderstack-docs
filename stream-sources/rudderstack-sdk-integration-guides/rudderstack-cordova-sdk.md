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

**<screenshot_here>**

* You will also need your Data Plane URL. Follow [**this section**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it) for more information.

## Installing the SDK



## Initializing the RudderStack Client




A sample Cordova SDK initialization is as shown:

```javascript
RudderClient.initialize( < SOURCE_WRITE_KEY > , {
  "dataPlaneUrl": < YOUR_DATA_PLANE_URL > ,
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

## Reset

Use the `reset` method to clear the persisted user traits.

A sample `reset` call is as shown:

```javascript
RudderClient.reset()
```

## Flushing the Events



A sample `flush` usage is as shown:

```javascript
RudderClient.flush()
```

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

## Advertisement ID

RudderStack collects the advertisement ID if it is enabled by the user. To set the advertising ID yourself, you can use the `setAdvertisingId` method as shown:

```javascript
RudderClient.setAdvertisingId("SampleAdvertisingId")
```

## Contact Us
In case of any queries while setting up or using the Cordova SDK, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
