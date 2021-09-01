---
description: Step-by-step guide to send your leads data from RudderStack to Marketo.
---

# Marketo

[**Marketo**](https://marketo.com) is a leading marketing automation platform that lets you identify the right audiences through effective behavioral tracking. It also lets you enhance their overall product experience through personalized marketing campaigns. Marketo offers cutting-edge email marketing, lead management, and revenue attribution solutions across all major businesses verticals.

RudderStack supports **Marketo Lead Import** as a destination to which you can send your leads seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/marketo_bulk_upload)**.**
{% endhint %}

## Getting Started

To enable sending your leads data to **Marketo Lead Import**, you will need to add it as a destination in RudderStack. 

{% hint style="success" %}
The most common source can be a [**Warehouse Actions**](https://docs.rudderstack.com/warehouse-actions) source, as RudderStack only accepts `identify` events for this destination.
{% endhint %}

Before configuring your source and destination on the RudderStack, verify if Marketo supports the source platform by referring to the following table:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **-** | **-** | **-** |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Marketo Lead Import, follow these steps:

* Choose a source to which you would like to add Marketo Lead Import as a destination.

{% hint style="info" %}
Follow our guide on [**Adding a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

* From the list of destinations, select **Marketo Lead Import**. Assign a name to your destination and then click on **Next**.

* You should then see the following **Connection Settings** page, where you can fill the relevant information and click on **Next** to proceed.

![Marketo Connection Settings in RudderStack](../../.gitbook/assets/marketo_lead_import.png)

### Connection Settings

The settings to set up Marketo Lead Import as a destination are:

* **Munchkin Account ID**: You can find the Munchkin Account ID on the Munchkin page by clicking on Admin in the navigation bar. Then, in the menu on the left, under Integration, click on Munchkin. The Munchkin Account Id will be listed in the Tracking Code section on the main screen.

* **Client ID**: To get the Client ID, go to the your Admin settings page following the instructions above. Then, in the menu on the left, under Integration, click on LaunchPoint. Then select the API service and click on "View Details".

* **Client Secret**: You can find the secret next to the ID from the previous step.

* **Column Fields Mapping**: Map your Leads table's columns' Api key values with key in your traits object of the incoming events. The values of those keys will be sent correspondingly to the columns.

You can find your columns api key names from [here](https://developers.marketo.com/rest-api/bulk-import/bulk-custom-object-import/)

Eg. You want to send data to the columns with api key names: `name`, `Email` and from traits keys `firstName`, `email` then the mapping should be done as:

| **Column Field Name** | **Traits** |
| :--- | :--- |
| name | firstName |
| Email | email |


{% hint style="info" %}
RudderStack supports only `identify` event type for this destination.
{% endhint %}


## Identify

A sample `identify` call is as shown:

```javascript
rudderanalytics.identify("name123", {
  name: "Name Surname",
  firstName: "Name",
  lastName: "Surname",
  email: "name@surname.com",
  createdAt: "Thu Mar 24 2020 17:46:45 GMT+0000 (UTC)",
});
```
And the mapping is :

| **Column Field Name** | **Traits** |
| :--- | :--- |
| name | firstName |
| Email | email |
| birthday | birthday |
| phone | phone_number |
| timestamp | createdAt | 

The values that will be sent to marketo: 

name,Email,birthday,phone,timestamp

Name,name@surname.com,,,Thu Mar 24 2020 17:46:45 GMT+0000 (UTC)


## Contact Us

If you come across any issues while configuring or using Marketo Lead Import with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
