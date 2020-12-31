---
description: Step-by-step guide to send event data from RudderStack to Chartbeat.
---

# Chartbeat

[Chartbeat](https://chartbeat.com/) is the industry leader for real-time content and web analytics, based on JavaScript.

RudderStack supports sending your events to Chartbeat from the web native SDK by calling RudderStack's APIs.

## Getting Started

To enable sending events to Chartbeat, you will first need to add it as a destination to the source from which you are sending event data. Please check if the platform is supported by Chartbeat by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have ascertained that the platform is supported by Chartbeat, please follow these steps:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and Chartbeat as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* In the Connection Settings page, please enter the relevant information in the fields shown in the following screen:

![Connection Settings for Chartbeat](../.gitbook/assets/image%20%2818%29.png)

 Each field is as explained below:

* **Domain** - Enter the domain name with which your Chartbeat account was configured. Don't append any extra url parameters to it. For example: `rudderstack-test.com`
* **UID -** Enter your Chartbeat UID here. You can find the UID on the Chartbeat [Adding The Code](https://chartbeat.com/docs/adding_the_code/) page.
* **Send Name and Category as Title** - Enable this setting if you want the RudderStack `page` API to send the page title as visible in Chartbeat dashboard as `page category` + `page name` .

{% hint style="info" %}
If this setting is enabled and the category is not set, RudderStack only sends the name as the page title.
{% endhint %}

* **Use Chartbeat video script** - Enable this setting if you want the RudderStack SDK to download `chartbeat_video.js` . This file is provided by Chartbeat to track and capture video interactions. Once the setting is enabled, the script will start capturing the play and pause events of mainly the HTML5 videos from the `<video ... </video>` tag.

## Page

Making a call to the `page` API will send out an object to Chartbeat containing the information of your page and its related properties. 

A sample `page` call is shown below:

```text
rudderanalytics.page("section-name", "home", {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer",
        author: 'author-name'
});
```

The above code snippet populates the following properties along with the associated values:

| Property | Value |
| :--- | :--- |
| `category` | section-name |
| `name` | home |
| `author` | author-name |
| `path` | path |
| `url` | url |
| `title` | title |
| `search` | search |
| `referrer` | referrer |

### Single Page Applications

For Single Page Applications \(SPAs\), the first `page` call asynchronously loads `chartbeat.js` \(or `chartbeat_video.js`\) with the properties specified in the `page` call. All further `page` calls are sent to Chartbeat by calling Chartbeat's virtual `page` API with the same properties that were passed to the initial `page` call.

## FAQs

### Where do I find the Chartbeat UID?

You can find your Chartbeat UID on Chartbeat's [Adding The Code](https://chartbeat.com/docs/adding_the_code/) page.

## Contact Us

If you come across any issues while configuring Chartbeat with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

