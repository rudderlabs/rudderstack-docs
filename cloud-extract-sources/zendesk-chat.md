---
description: >-
  Step-by-step guide to ingest data from your Zendesk Chat account into
  RudderStack.
---

# Zendesk Chat

Zendesk Chat is a cross-platform live chat software that allows you to reach out to your customers  in real-time via live chats and instant messaging. It also gives you the flexibility to have instant access to your ongoing as well as historical chats to get a full context of your conversations with your customers at all times. With Zendesk Chat, you can deliver rich, personalized user experiences across web and mobile. In addition, it is very easy to automate, and highly scalable for all your customer needs.

This document guides you in setting up Zendesk Chat as a Cloud Extract source in RudderStack. Once configured, RudderStack automatically ingests your specified Zendesk Chat data, which can then be routed to your data warehouse or any other third-party destination supported by RudderStack.

## Getting Started

To set up Zendesk Chat as a source on the RudderStack dashboard, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Sources**. Then, click on **Add Source**, as shown:

![](../.gitbook/assets/1%20%284%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%282%29%20%281%29.png)

* Next, select **Zendesk Chat** from the list of **Cloud Sources**, and click on **Next**.

![](../.gitbook/assets/2%20%2813%29.png)

* Assign a name to your source, and click on **Next**.

![](../.gitbook/assets/3%20%289%29.png)

### Specifying Connection Credentials

* Next, enter your Zendesk Chat credentials. Enter your Zendesk Chat subdomain, and click on **Connect with Zendesk Chat**. You will be required to authenticate RudderStack on your Zendesk Chat account.

![](../.gitbook/assets/4%20%2811%29.png)

{% hint style="info" %}
More details on how to find your Zendesk Chat subdomain can be found [here](https://support.zendesk.com/hc/en-us/articles/221682747-Where-can-I-find-my-Zendesk-subdomain-).
{% endhint %}

{% hint style="info" %}
If you've already configured Zendesk Chat as a source before, you can choose the account visible under the **Use existing credentials** tab, as shown above.
{% endhint %}

### Setting the Data Update Schedule

* Next, you will be required to set the **Run Frequency** to schedule the data import from your Zendesk Chat account to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option.

![](../.gitbook/assets/5%20%2812%29.png)

### Selecting the Data to Import

* Finally, choose the Zendesk Chat data that you wish to ingest via RudderStack. You can either select all the data, or choose specific Zendesk Chat data attributes, as per your requirement.

![](../.gitbook/assets/6%20%2811%29.png)

That's it! Zendesk Chat is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start ingesting data from Zendesk Chat as per the specified frequency. You can further connect this source to your data warehouse or other third-party destinations by clicking on **Connect Destinations** or **Add Destinations**, as shown: 

![](../.gitbook/assets/7%20%288%29.png)

## FAQs

#### How can I find my Zendesk Chat subdomain?

Your Zendesk Chat's subdomain can be easily identified from your account's URL. It is usually in the format of [`https://[YOUR_ZENDESK_SUBDOMAIN].zendesk.com`](https://[your_subdomain].zendesk.com).

There are a few other ways to find out what your Zendesk Chat subdomain is. Check out [Zendesk's knowledge base](https://support.zendesk.com/hc/en-us/articles/221682747-Where-can-I-find-my-Zendesk-subdomain-) for more information.

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us

If you come across any issues while configuring Zendesk Chat as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

