---
description: Step-by-step guide to send event data from RudderStack to HubSpot
---

# HubSpot

[HubSpot](https://www.hubspot.com/) is a leading marketing and sales platform that helps you track leads, as well as inbound marketing and sales. It offers state-of-the-art tools for efficient marketing, tracking sales and offering better customer support.

RudderStack supports HubSpot as a destination to send your event data through our APIs.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/hs)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination in RudderStack, please check whether the platform you are working on is supported by HubSpot. Refer the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to HubSpot, perform the steps below:

Once you have confirmed that the platform supports sending events to HubSpot, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and select **HubSpot** as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Connection Settings for HubSpot in RudderStack](../.gitbook/assets/hubspot.png)

* Provide your HubSpot **API key** and **Hub ID** in the required fields. Please find [**API Key**](https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key) and  [**Hub ID**](https://knowledge.hubspot.com/account/manage-multiple-hubspot-accounts#identify-the-current-account-s-hub-id) in your Hubspot Account.

{% hint style="warning" %}
API Key is mandatory if you need to send data to Hubspot using `cloud-mode`
{% endhint %}

* Provide your preference to flow the data to HubSpot through native SDK or through the RudderStack backend. Click on **Next** to finish the configuration.

{% hint style="info" %}
The setting to enable / disable native SDK to send events can be changed later. However, for that to reflect in your website, you will need to refresh the web page.
{% endhint %}

## Page

{% tabs %}
{% tab title="Cloud Mode" %}
{% hint style="warning" %}
The `page` call is not supported in cloud mode for HubSpot.
{% endhint %}
{% endtab %}

{% tab title="Device Mode" %}
To send the data to HubSpot, an initial `page` call is required. For more information on the `page` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

The following snippet is an example of a `page` call:

```javascript
rudderanalytics.page();
```
{% endtab %}
{% endtabs %}

## Identify

The `identify` call is used to create or update a contact in HubSpot.

You need to provide an email id of that user under the `traits` of the `identify` call.

{% tabs %}
{% tab title="Cloud Mode" %}
In cloud mode, the `identify` call will create or update a contact in HubSpot. You are not required to call `page` or `track` after to create the contact.
{% endtab %}

{% tab title="Device Mode" %}
In Device mode, you must call either `page` or `track` after the identify call to create a contact. Previous `page` and `track` calls will also become associated with that contact once identified.
{% endtab %}
{% endtabs %}

Here is an example `identify` call:

```javascript
rudderanalytics.identify(
  {
    firstName: "Tintin",
    city: "Brussels",
    country: "Belgium",
    phone: "1234567890",
    email: "tintin@twentiethcentury.com",
    custom_flavor: "chocolate",
    custom_date: 1574769933368,
    custom_date1: new Date("2019-10-14T11:15:53.296Z")
  }
);
```

### Special fields

HubSpot supports the following traits as special fields:

* `address`
* `city`
* `companyName`
* `email`
* `firstName`
* `lastName`
* `position`
* `phone`
* `zip`

### Custom properties

Hubspot also supports custom properties. You can update values of the `contact` property that you have created in HubSpot.

{% hint style="warning" %}
* Note that when you provide any custom property, it automatically converts to lower case and any space will be replaced with an underscore. HubSpot does not accept properties in upper case and spaces.
* HubSpot discards any property which doesn't exists and returns `400 Bad Request`.
{% endhint %}

### Dates

For sending properties of type `date` send the date as the epoch time, or as a `date` object. We convert it to the required HubSpot format \(midnight UTC\).

## Track

A `track` call is used to record any action the user performs. For more information on the `track` call, refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.

To associate a `track` call with a user, you need to specify the user's `email` under `traits` under `context` . Additionally, we associate the `track` events called after an `identify` request with the same contact.

The following code snippet shows a sample `track` event:

```javascript
rudderanalytics.track(
  "Purchase",
  {
    value: 30
  },
  {
    context: {
      traits: {
        firstname: "Tintin",
        city: "Brussels",
        country: "Belgium",
        phone: "1234567890",
        email: "tintin@twentiethcentury.com"
      }
    }
  }
);
```

### Revenue events

For revenue events, a `value` or `revenue` key should be included in the properties of the event to be recorded in Hubspot.

## Screen

The `screen` call records the screen views of the user in your App. If you have turned on the screen views in your App implementation from the [iOS](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk) or [Android](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk) SDK it will register in your dashboard. We forward the `properties` you've passed along with the `screen` call as it is.

Here is a sample `screen` call in using RudderStack iOS SDK:

```text
[[RSClient sharedInstance] screen:@"Main"
            properties:@{@"prop_key" : @"prop_value"}];
```

## HubSpot CRM Custom Object

We support [HubSpot CRM Custom Object](https://developers.hubspot.com/docs/api/crm/crm-custom-objects) thorugh our `identify` call. We expect an object with the name `hubspot` and following properties under it.

* `contactId`
* `qualifiedName`
* `objects`

The `objects` should be an array containing the objects with two properties, `objectId` and `objectType`. Also, the `contactId` is the HubSpot ID of your HubSpot contact. We associate the contact with the objects you provided in the `objects` array.

Here is an example of the `identify` call for HubSpot CRM Custom Object

```javascript
rudderanalytics.identify(
  "userId",
   {
     email: "name@domain.com",
     hubspot: {
       contactId: "512",
       qualifiedName: "p99688696_car",
       objects: [
         {
           objectId: "32921360",
           objectType: "car"
         }
       ]
     }
   }
);
```

## FAQs

### Where do I get the API Key and Hub ID for Hubspot?

You can get the API Key and Hub ID for Hubspot by logging into your [Hubspot account](https://app.hubspot.com/login/).

Please refer to the following documentations offered by Hubspot for more details:

* Obtaining the [API Key](https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key)
* Obtaining the [Hub ID](https://knowledge.hubspot.com/account/manage-multiple-hubspot-accounts#identify-the-current-account-s-hub-id)

### Can we use Hubspot website analytics?

Yes - `page` calls are supported in Device mode and can be used for Hubspot website analytics.

## Contact Us

If you come across any issues while configuring HubSpot with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

