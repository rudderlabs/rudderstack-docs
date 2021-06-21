---
description: Step-by-step guide to ingest data from your Mixpanel account into RudderStack.
---

# Mixpanel

[Mixpanel](https://mixpanel.com/) is an analytics platform that helps you to track user actions with your application. It also provides specific tools for targeted business communication and engagement with your customers. In-app A/B testing, user survey forms, and custom reports to measure customer retention are some of the other features offered by Mixpanel.

This document guides you in setting up Mixpanel as a source in RudderStack. Once configured, RudderStack automatically ingests your specified Mixpanel data, which can then be routed to your data warehouse destination supported by RudderStack.

{% hint style="info" %}
**All the Cloud Extract sources support sending data only to a data warehouse destination.**
{% endhint %}

## Getting Started

To add Mixpanel as a source in RudderStack, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Sources**. Then, click on **Add Source**, as shown:

![](../.gitbook/assets/1%20%284%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%282%29%20%283%29.png)

* Next, navigate to **Cloud Extract** within the **Sources** directory and select **Mixpanel**.

![](../.gitbook/assets/2%20%2810%29.png)

* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/3%20%288%29.png)

### Setting Up the Connection

* Under **Create new account**, fill in the relevant connection credentials.

![](../.gitbook/assets/4%20%289%29.png)

* The connection settings are: 
  * **Account Name** : Your Mixpanel account name goes here.
  * **API Key** : Enter your Mixpanel API Key, which can be obtained from the **Project Settings** option in your Mixpanel header bar. 
  * **API Secret** : Enter your Mixpanel API Secret, which can be obtained from the Project Settings option as mentioned above.
  * **Project timezone** : This can be obtained within the **Access URL** section in your Mixpanel **Project Settings** option.

{% hint style="info" %}
More information on how to obtain the above credentials can be found [here](https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings).
{% endhint %}

{% hint style="success" %}
If you have already connected RudderStack to your Mixpanel account, your credentials should appear automatically under **Use existing credentials**.
{% endhint %}

### Configuring the Source

* In the next screen, choose the **Start Date** under **Source Settings**. This is the date from which RudderStack ingests the data from Mixpanel.

![](../.gitbook/assets/5%20%2810%29.png)

### Setting the Data Update Schedule

* Next, you will be required to set the **Run Frequency** to schedule the data import from your Mixpanel account to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option, as shown:

![](../.gitbook/assets/6%20%2810%29.png)

That's it! Mixpanel is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start importing data from your Mixpanel source as per the specified frequency. You can further connect this source to your data warehouse by clicking on **Connect Destinations** or **Add Destination**, as shown:

![](../.gitbook/assets/7%20%286%29.png)

{% hint style="success" %}
Use the **Connect Destinations** option if you have already configured a data warehouse destination in RudderStack. To configure a data warehouse destination from scratch, click on the **Add Destination** button.
{% endhint %}

## FAQs

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us

If you come across any issues while configuring Mixpanel as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

