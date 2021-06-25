---
description: >-
  Step-by-step guide to send your event data from RudderStack to LinkedIn
  Insight Tag.
---

# LinkedIn Insight Tag

The [**LinkedIn Insight Tag**](https://business.linkedin.com/marketing-solutions/insight-tag) is a JavaScript code for your website that lets you learn more about your customers and optimize your marketing campaigns. You can also use the LinkedIn Insight Tag to track your conversions and retarget your website visitors and customers who interact with your ads.

RudderStack lets you send your user events directly to LinkedIn by supporting LinkedIn Insight Tag as a destination.

{% hint style="success" %}
**Find the open-source code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-sdk-js/tree/production/integrations)**.**
{% endhint %}

## Integration Workflow

The following flow explains how this integration works:

* The user configures **LinkedIn Insight Tag** as a destination in RudderStack.
* The user loads the RudderStack JavaScript SDK on their website.
* The JavaScript SDK automatically loads the Insight Tag tracking code.

{% hint style="warning" %}
If you are already using LinkedIn Insight Tag on your website, we highly recommend you remove it.
{% endhint %}

{% hint style="info" %}
The LinkedIn Insight Tag lets you collect the data related to your members' website visit, including the URL, IP Address, referrer, device and browser characteristics, and timestamp.
{% endhint %}

{% hint style="success" %}
**The RudderStack SDK loads asynchronously with your website. When loading the LinkedIn Insight Tag tracking snippet, it will not slow down your website's performance at all.**
{% endhint %}

## Getting started

To enable sending your event data to LinkedIn Insight Tag, you will first need to add it as a destination in RudderStack.

{% hint style="warning" %}
This integration is a Device mode-only destination for the web \(JavaScript\) source. For more information on what a Device mode is, refer to the [**RudderStack Connection Modes**](https://docs.rudderstack.com/connections/rudderstack-connection-modes) guide.
{% endhint %}

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | - | - | - |

Once you have confirmed that the platform supports sending events to LinkedIn, perform the steps below:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source and **LinkedIn Insight Tag** as a destination.

{% hint style="info" %}
Follow our [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more details.
{% endhint %}

* Assign a name to your destination and click on **Next**. You should now see the following **Connection Settings** page.

![Configuration Settings](https://user-images.githubusercontent.com/59817155/123381912-f36d8980-d5ae-11eb-9f4c-cb75fb42ba47.png)

## LinkedIn Insight Tag Configuration Settings

To successfully configure LinkedIn Insight Tag as a destination, you will need a **Partner ID**. To get the Partner ID, follow the steps below:

* Sign in to [**LinkedIn Campaign Manager**](https://www.linkedin.com/campaignmanager/login).
* Then, you will need to create an ad account. Enter your account name, an optional LinkedIn page, and currency information. As of now, no payment is required.

![Campaign Manager ad Account](https://user-images.githubusercontent.com/59817155/123381910-f23c5c80-d5ae-11eb-843c-5b1a0e4dedd2.png)

* Next, you will need the **Partner ID**. Click on your account name and locate the **Account Assets** dropdown menu. Select **Insight Tag** as shown:

![Account Assets](https://user-images.githubusercontent.com/59817155/123381898-f0729900-d5ae-11eb-9cfa-f5063eeebb81.png)

* If you are using the LinkedIn Insight Tag for the first time, you will see the **Install my Insight Tag** option.

![Insight Tag](https://user-images.githubusercontent.com/59817155/123381916-f4062000-d5ae-11eb-945a-960e2dce869e.png)

{% hint style="info" %}
If you have already set up your Insight Tag before, you will see the **Manage Insight Tag** option. Click on it and choose **See Tag**.
{% endhint %}

* Next, click on **I will use a tag manager**. You should now be able to see your **Partner ID**.

![Partner ID](https://user-images.githubusercontent.com/59817155/123381921-f49eb680-d5ae-11eb-9135-48b3e6f7aac7.png)

* Copy and paste this **Partner ID** in the RudderStack dashboard to complete the configuration.

You should now be able to see the website domains on which the Insight Tag is loaded.

![Domains](https://user-images.githubusercontent.com/59817155/123381914-f36d8980-d5ae-11eb-91a1-31f90e7e3557.png)

## FAQs

### Will the LinkedIn Insight Tag slow down my website?

The RudderStack SDK loads asynchronously with your website. When loading the LinkedIn Insight Tag tracking snippet, it will not slow down your website's performance at all.

## Contact Us

If you come across any issues while configuring LinkedIn Insight Tag with RudderStack, feel free to [**contact us**](mailto:docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

