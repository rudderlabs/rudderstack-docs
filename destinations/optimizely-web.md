---
description: Step-by-step guide to send event data from RudderStack to Optimizely Web
---

# Optimizely Web

[Optimizely Web](https://www.optimizely.com/platform/experimentation/) is a web experimentation platform that allows you test and experiment new features on your website across any channel or device. It is typically used by marketing teams and product managers to learn more about the customers' product journey, and test new features to boost conversion rates and overall customer engagement.

RudderStack allows you to configure Optimizely Web as a destination to which you can send your event data seamlessly.

## Getting Started

On order to send data to Optimizely Web, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from RudderStack will start to flow to Optimizely Web. 

Before configuring your source and destination on the RudderStack app, please check whether the platform you are working on is supported by Optimizely Web. Please refer to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | **-** | **-** |
| **Cloud mode** | **-** | **-** | **-** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Optimizely Web, perform the steps below:

* Define [custom events in the Optimizely Dashboard](https://help.optimizely.com/Build_Campaigns_and_Experiments/Custom_events_in_Optimizely_X) and add those events as metrics in the corresponding experiments.
* Add the Optimizely Web snippet to your web page immediately after the opening `<head>` tag. Then, include the RudderStack JavaScript snippet.
*  Choose a source to which you would like to add **Optimizely Web** as a destination.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* Select the destination as **Optimizely Web** to your source. Give your destination a name and then click on **Next**. You should see the following screen:

![Connection Settings for RudderStack Web](../.gitbook/assets/image%20%2850%29.png)

* In the **Connection Settings**, ****configure the settings you want to apply for the destination. The settings are explained in more detail below: 
  * **Send experiment data to other tools:** By enabling this setting, you can send your experiment or campaign data to other destinations configured by you, such as Google Analytics.
    * **As a track call**: When this setting is enabled, an `Experiment Viewed` `track` event will be sent to RudderStack along with other configured destinations for each active experiments per page load. The `properties` of this event will be Optimizely's experiment metadata.
    * **As identify call:** When this setting is enabled, an `identify` call will be sent to RudderStack and other configured destinations, with the traits as `experiment name` and `variation name` . 
  * **Send experiment viewed event as non-interaction event**: In case you want to send the 

    `Experiment Viewed` track event to Google Analytics, please enable this setting. The `track`event will then be sent to Google Analytics as a non-interaction event, i.e. an additional property `nonInteraction` with value `1` will be appended to the properties of that event.  

  * **Revenue on Order Completed event:** Enabling this setting will send `revenue` as a property of the `track`only for the events with event name `Order Completed`. 
  * **Track categorized pages:** Enabling this setting will send `page` calls to Optimizely Web having `category` as `track` events. 
  * **Track named pages:** Enabling this will send `page` calls having `name` as `track` events to Optimizely Web. 
  * **Custom campaign properties:** In this section, provide the mapping of the campaign metadata to the RudderStack `track` event properties for the `Experiment Viewed`  event. Please note that the `event property` should be the `track` event property and the `campaign property` should be the corresponding metadata of the campaign.

## Page

If you have enabled `Track Categorized Pages` or `Track Named Pages` , then a `page` call having `category` or `name` will send a `track` event with event name `Viewed ${category} page` or `Viewed ${name} page` to Optimizely.

A sample `page` call is as shown in the snippet below:

```text
// "home" is the name of the page. 
rudderanalytics.page("home");
```

## Track

A `track` call with a valid `event name` associated with an active experiment will be sent to Optimizely. 

If you have enabled the option of sending `Revenue on Order Completed event` , then revenue will be sent only on `Order Completed` event and not in any other event. This should be part of event property. RudderStack will convert the value to cents and pass it. Thus, $5 will be converted to 500 cents.

If the option `Revenue on Order Completed event` is disabled, then the property will be passed as it is.

A sample `track` call is as shown below:

```javascript
rudderanalytics.track(
  "Order Completed",
  {
    revenue: 30,
    value: 30.0
  }
);
```

## Sending Experiment Data

### Track

If the **Send experiment data as track call** setting is enabled while configuring the Optimizely Web destination on the RudderStack app, one `Experiment Viewed` track event is sent to other configured destinations for each active experiment. Here Optimizely Web acts as both source and destination. This event includes the campaign metadata.

This `track` event call consists of the following properties:

* `campaignName` 
* `campaignId` 
* `experimentId` 
* `experimentName` 
* `variationName` 
* `variationId` 
* `audienceId` 
* `audienceName` 
* `nonInteraction` 

{% hint style="info" %}
If you provide the `custom campaign properties` in the destination settings, then the campaign metadata key will be overridden by the corresponding event property. 
{% endhint %}

A sample `track` call made on a page load is as shown:

```javascript
rudderanalytics.track('Experiment Viewed', {
  campaignName: 'test campaign',
  campaignId: '1234567890',
  experimentId: '0123456789',
  experimentName: 'test experiment',
  variationId: '1122334455',
  variationName: 'test variation',
  audienceId: '1212121212',
  audienceName: 'sample audience',
  nonInteraction: 1
});
```

### Identify

If the setting **Send experiment data as identify call** is enabled, one `identify` event will be sent to other configured destinations with the following traits for each active experiment:

* `experimentName` 
* `variationName`

{% hint style="info" %}
The `identify` traits are appended with the subsequent calls. In case multiple experiments are active, then multiple `identify` calls will be made and the subsequent `identify` calls will contain traits of previous `identify` calls as well.
{% endhint %}

A sample `identify` call made on a page load is as shown:

```javascript
rudderanalytics.identify({
    `Experiment: ${experimentName}` : variationName
});
```

## FAQs

**Do I need to add Optimizely Web's JavaScript snippet to my website?**  
Yes. You need to add the Optimizely Web snippet immediately after the opening `<head>` tag of your web page. Then, include the JavaScript snippet of RudderStack.

**Why I am not able to see the events in my experiments**?  
Define the `custom events` in Optimizely Web's dashboard and add those events as `metrics` in corresponding Optimizely 's `experiment`. 

While defining the custom event, you need to provide an `API Name` and while using RudderStack's `track` API, use this `API name` as the `event name` .

## Contact Us

If you come across any issues while configuring Optimizely Web with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

