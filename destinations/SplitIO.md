---
description: Step-by-step guide to set up Split.io as a destination in RudderStack.
---

# Split.io

[Split.io](https://www.split.io/) is a feature experimentation and continuous delivery tool that enables you to maximize the impact of your product features by combining feature flags and data. With Split, you can test new features through rigorous A/B testing and deploy them seamlessly while ensuring data privacy and maximum performance.

RudderStack allows you to configure Split.io as a destination to which you can send your event data for building better software.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/splitio)**.**
{% endhint %}

## **Getting Started**

In order to enable dumping data to Split.io, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from RudderStack will start to flow to Split.io.

Before configuring your source and destination on the RudderStack app, please check whether the platform you are working on is supported by Split.io. Refer to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Split.io, perform the steps below:

{% hint style="success" %}
Keep the API Key of the particular workspace in your Split.io dashboard handy as it is used later to configure Split.io as a destination.
{% endhint %}

* Go to the [RudderStack dashboard](https://app.rudderstack.com/), and choose a source to which you would like to add Split.io as a destination.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* Select the destination as **Split.io**. Give your destination a name and then click on **Next**. You should then see the following screen:

![Destination Settings for Split.io](../.gitbook/assets/SplitIO.png)

* Next, in the **Settings** section, fill all the fields with the relevant information and click **Next.** A brief description of each of these fields is mentioned below:

  * **Connection Credentials**
    * **API Key**: Enter the API Key for the appropriate workspace.
    * **Environment**: Enter the corresponding environment available in the dashboard. Note that this field is not mandatory.
 
  * **Information on Traffic**
    * **Traffic Type**: Enter the correct traffic type listed in your account.

{% hint style="info" %}
All the calls are sent as an `event` to Split.io.
{% endhint %}

## Identify

The `identify` call is used to uniquely identify a user. For more information on the `identify` call, please refer to the [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

A sample `identify` call looks like the following:

```javascript
rudderanalytics.identify("userId", {
     name: 'ABC ROBERT',
     email: 'abc@website.com',
     plan: 'GOLD',
     age: 24
});
```

## Track

A `track` call lets you track custom events as they occur in your web application. For more information on the `track` call, please refer to the [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Clicked button", {
  color: "red",
  buttonText: "Get started",
});
```

## Page

A `page` call contains information such as the URL or the name of the web page visited by the user. For more information on the `page` call, please refer to the [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) documentation.

A sample `page` call looks like the following:

```javascript
rudderanalytics.page("homepage",
"home",
{
     url: 'https://abc.com',
     title: 'Test',
     referrer: 'https://google.com'
   }
);
```


{% hint style="info" %}
In the cloud mode, the above `page` call is sent with the name as `Viewed_Page_name_page`, along with any additional properties passed to it.
{% endhint %}

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties.

A sample `screen` call looks like the following code snippet:

```javascript
[[RSClient sharedInstance] screen:@"Main" properties:@{@"prop_key" : @"prop_value"}];
```

In the above snippet, we capture information related to the screen being viewed, such as screen's name and category.

{% hint style="info" %}
The above call is sent with the name `Viewed_Screen_name_screen`, along with any additional properties passed to it.
{% endhint %}




## Contact Us

If you come across any issues while configuring Split.io as a destination with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

