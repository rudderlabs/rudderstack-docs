---
description: Step-by-step guide to ingest data from Intercom into RudderStack.
---

# Intercom

[Intercom](https://www.intercom.com) is an industry-leading, real-time business messaging platform, that allows you to bring together and manage all your customer life cycle activities on a single platform.

This document guides you in setting up Intercom as a source in RudderStack. Once configured, RudderStack automatically ingests your specified Intercom data, which can then be routed to your data warehouse destination supported by RudderStack.

{% hint style="info" %}
**All the Cloud Extract sources support sending data only to a data warehouse destination.**
{% endhint %}

## Getting Started

To set up Intercom as a source on the RudderStack dashboard, follow these steps:

* Log into your [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select **Sources**. Then, click on **Add Source**, as shown:

![](<../.gitbook/assets/1 (4) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2).png>)

* Next, select **Intercom **from the list of **Cloud Sources**, and click on **Next**.

![](<../.gitbook/assets/2 (12).png>)

* Assign a name to your source, and click on **Next**.

![](<../.gitbook/assets/3 (10).png>)

### Specifying Connection Credentials

* Next, authenticate RudderStack with Intercom by clicking on the Connect with Intercom option, as shown: 

![](<../.gitbook/assets/4 (10).png>)

{% hint style="info" %}
If you've already configured Intercom as a source before, you can choose the account visible under the **Use existing credentials** tab.
{% endhint %}

### Setting the Data Update Schedule

* Next, you will be required to set the **Run Frequency** to schedule the data import from your Intercom account to RudderStack. You can also specify the time when you want this synchronization to start, by choosing the time under the **Sync Starting At** option.

![](<../.gitbook/assets/5 (11).png>)

### Selecting the Data to Import

* Finally, choose the Intercom data that you wish to ingest via RudderStack. You can either select all the data, or choose specific Intercom data attributes, as per your requirement.

![](<../.gitbook/assets/6 (12).png>)

That's it! Intercom is now successfully configured as a source on your RudderStack dashboard. 

RudderStack will start ingesting data from Intercom as per the specified frequency. You can further connect this source to your data warehouse by clicking on **Connect Destinations** or **Add Destination**, as shown: 

![](<../.gitbook/assets/7 (7).png>)

{% hint style="success" %}
Use the **Connect Destinations** option if you have already configured a data warehouse destination in RudderStack. To configure a data warehouse destination from scratch, click on the **Add Destination** button.
{% endhint %}

## FAQs

#### Is it possible to have multiple Cloud Extract sources writing to the same schema?

Yes, it is. 

We have implemented a feature wherein RudderStack associates a table prefix for every Cloud Extract source writing to a warehouse schema. This way, multiple Cloud Extract sources can write to the same schema with different table prefixes.

## Contact Us

If you come across any issues while configuring Intercom as a source on the RudderStack dashboard, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
