---
description: Step-by-step guide to send event data from RudderStack to TVSquared.
---

# TVSquared

[TVSquared](https://tvsquared.com/) is a television attribution platform that specializes in enterprise-scale cross-screen and multi-touch TV attribution and measurement. They empower the advertising companies to quantify and attribute responses generated across televisions everywhere, and deliver meaningful business insights from the linear and digital TV content.

RudderStack supports TVSquared as a destination to which you can send your event data in real-time.

## Getting Started

To enable sending data to TVSquared, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from the RudderStack SDK will automatically start flowing to TVSquared. 

Before configuring your source and destination on the RudderStack, verify if the source platform is supported by TVSquared, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | **-** | **-** |
| **Cloud mode** | **-** | **-** | **-** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to TVSquared, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select TVSquared**.**

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![](../.gitbook/assets/image%20%2873%29.png)

![TVSquared Connection Settings in the RudderStack Dashboard](../.gitbook/assets/image%20%2834%29.png)

* The above connection settings are explained in more detail below: 
  * **Brand Id \(Site ID\)**: This is a unique identifier that indicates the TVSquared client to which the traffic belongs. This parameter will always carry the form of `TV-XXXXXXX-1` with a variable-length numeric value replacing the `X`.
  * **Client Id \(Collector Id\)**: The Client ID allows us to distribute the traffic and manage the load on our servers effectively. It is numeric and can contain one or more values.
  * **Event Whitelist**: You can add the events you want to send to TVSquared in this field. If the list is empty, all the events will be sent. Otherwise, only the events mentioned in this whitelist will be sent.
  * **Custom Metrics**: The **Property Name** values added in this field will be sent to TVSquared for the events containing those event properties, along with the other defined properties of TVSquared. For example, if the property added in the dashboard is `shipping` , then the shipping value will be sent to TVSquared. A sample code snippet for this is as shown:

    ```text
    rudderanalytics.track('Order Completed',
    {
      order_id: '5d4c7cb5',
      revenue: 99.9,
      shipping: 13.99,
      tax: 20.99,
      products: [
    
      ]
    });
    ```
* Configure the above settings according to your requirements, and click on **Next** to complete the setup. TVSquared should now be added and enabled as a destination in RudderStack.

## Page

When a `page` call occurs, RudderStack makes a call to TVSquared to record a page view. 

For more information on the `page` call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.

```text
rudderanalytics.page('new category',
'page name',
{
  url: 'url',
  path: '/path'
});
```

## Track

Calling the `track` method causes TVSquared's  `Action Tracker` method to be triggered.

For more information on how the `track` call works, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.

By default, TVSquared can take the following parameters:

* `revenue`
* `product type (category)`
* `action id (order_id)`
* `promo (promotion_id)`

{% hint style="info" %}
All the mentioned parameters are optional. There is no requirement to add these to measure the uplift from TV. However, this data can be used for more detailed analysis as required. If there is no value to pass an empty string will be set by RudderStack.
{% endhint %}

A sample `track` call is as shown:

```text
rudderanalytics.track('Order Completed',
{
  order_id: '5d4c7cb5',
  category: 'category',
  revenue: 99.9,
  shipping: 13.99,
  tax: 20.99,
  products: [
    
  ],
  promotion_id: 'PROMO_1234'
});
```

## Contact Us

If you come across any issues while configuring TVSquared with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!







