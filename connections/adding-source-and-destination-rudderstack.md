---
description: >-
  Step-by-step guide on adding a source and destination in RudderStack to track
  and route your customer events.
---

# How to Add a Source and Destination in RudderStack

{% hint style="success" %}
Refer to the [**Connections**](./) guide to read more about sources and destinations in RudderStack.
{% endhint %}

## How to Add a Source

Follow these steps to add an event data source in RudderStack:

* Log in to the [RudderStack app](https://app.rudderlabs.com/login).
* Once logged in, you should see the following dashboard:

![](../.gitbook/assets/1%20%2821%29.png)

* Click on the **ADD SOURCE** option under **Sources**.
* You will be presented with a list of sources. Select the source you want to configure.

![](../.gitbook/assets/2%20%2825%29.png)

{% hint style="info" %}
All the RudderStack sources are classified into the following categories. Read their respective documentation for more information.

* \*\*\*\*[**Event Streams**](../stream-sources/)\*\*\*\*
* \*\*\*\*[**Cloud Extract**](../cloud-extract-sources/)\*\*\*\*
* \*\*\*\*[**Warehouse Actions**](../warehouse-actions/)\*\*\*\*
{% endhint %}

* Assign a name to the source and click on **Next**.

![](../.gitbook/assets/3%20%2822%29.png)

* Your source should now be configured. Click on the **ADD DESTINATION** button to connect this source to a destination.

![](../.gitbook/assets/4%20%2822%29.png)

{% hint style="warning" %}
Setting up the event streams to ingest data from your cloud apps might require some additional configuration. Refer to the relevant [**source documentation**](../stream-sources/rudderstack-event-streams/) ****for more details.
{% endhint %}

{% hint style="info" %}
Note the **WRITE KEY**. This is required to configure the SDK in the source platform for RudderStack to track and collect events.
{% endhint %}

![](../.gitbook/assets/screen-shot-2021-05-19-at-4.23.46-pm.png)

## How to Add a Destination

To add a destination in RudderStack, follow these steps:

* On your dashboard home page, click on the **ADD DESTINATION** option under **Destinations**, as shown. 

![](../.gitbook/assets/1%20%2821%29%20%281%29.png)

{% hint style="success" %}
Alternatively, you can also click on the **Destinations** option in the left navigation bar and click on **ADD DESTINATION**.
{% endhint %}

* From the list, select the destination to configure.

![](../.gitbook/assets/screen-shot-2021-05-19-at-4.53.08-pm.png)

* Assign a name to this destination and click on **Next**.

![](../.gitbook/assets/screen-shot-2021-05-19-at-4.54.15-pm.png)

* Select the event data source for this destination and click on **Next**.

![](../.gitbook/assets/screen-shot-2021-05-19-at-4.54.45-pm.png)

* Configure the destination with the relevant connection settings. Refer to the specific [**destination documentation**](../destinations/) ****for more ****details. 

![](../.gitbook/assets/screen-shot-2021-05-19-at-4.55.08-pm.png)

* RudderStack allows you to transform your source events in a destination-specific format through the [**Transformations**](../adding-a-new-user-transformation-in-rudderstack/) feature. Click on the **CREATE NEW TRANSFORMATION** option to add a transformation. Otherwise, click on **Next**. 

![](../.gitbook/assets/screen-shot-2021-05-19-at-5.01.56-pm.png)

* Your destination should now be configured successfully.

![](../.gitbook/assets/screen-shot-2021-05-19-at-5.07.08-pm.png)

{% hint style="success" %}
* To change the settings of the configured destination, click on the **SETTINGS** button. 
* To view the live events sent to the destination, click on the **Live Events** tab on the top right. 
* To disconnect your destination from the source, click on the **DISCONNECT** button.
{% endhint %}

{% hint style="warning" %}
Before deleting a destination, make sure it is disconnected from the source.
{% endhint %}

## Contact Us

For more information or support on adding a source and destination in RudderStack, [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

