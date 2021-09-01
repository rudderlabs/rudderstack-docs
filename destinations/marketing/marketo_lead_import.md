---
description: Step-by-step guide to send leads data from RudderStack to Marketo.
---

# Marketo

[Marketo](https://marketo.com) is a leading marketing automation platform that allows you to identify the right audiences through effective behavioral tracking, and deliver automated, personalized marketing campaigns to enhance their overall product experience. It also offers cutting-edge email marketing, lead management, and revenue attribution solutions. With Marketo, you can deliver enhanced customer experiences and build customized products for businesses across all spectrum - including tech, healthcare, media, manufacturing, and education.

RudderStack allows you to seamlessly configure Marketo Lead Import as a destination to which you can send your leads data seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/marketo_bulk_upload)**.**
{% endhint %}

## Getting Started

To enable sending leads data to **Marketo Lead Import**, you will first need to add it as a destination to the source from which you are sending your event data. Most common source will be a warehouse actions as source as Rudder only accepts identify events for this destination.
Once the destination is enabled, events from RudderStack will start flowing to Marketo Lead Import.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Marketo, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **-** | **-** | **-** |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Marketo Lead Import, please perform the steps below:

* Choose a source to which you would like to add Marketo Lead Import as a destination.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to know how to add a source in RudderStack.
{% endhint %}

* Select the destination as **Marketo Lead Import** to your source. Give your destination a name and then click on **Next**.
* On the **Connection Settings** page, fill all the fields with the relevant information and click **Next**

![Marketo Connection Settings in RudderStack](../../.gitbook/assets/marketo_lead_import.png)

### Configurable Settings

The following are the settings to be configured:

* **Munchkin Account ID**: You can find the Munchkin Account ID on the Munchkin page by clicking on Admin in the navigation bar. Then, in the menu on the left, under Integration, click on Munchkin. The Munchkin Account Id will be listed in the Tracking Code section on the main screen.
* **Client ID**: To get the Client ID, go to the your Admin settings page following the instructions above. Then, in the menu on the left, under Integration, click on LaunchPoint. Then select the API service and click on "View Details".
* **Client Secret**: You can find the secret next to the ID from the previous step
* **Column Fields Mapping**: Map your Leads table's columns' Api key values with key in your traits object of the incoming events. The values of those keys will be sent correspondingly to the columns.
You can find your columns api key names from [here](https://developers.marketo.com/rest-api/bulk-import/bulk-custom-object-import/)

Eg. You want to send data to the columns with api key names: `name`, `Email` and from traits keys `firstName`, `email` then the mapping should be done as:
| **Column Field Name** | **Traits** |
| name | firstName |
| Email | email |


We only accept identify types of calls.

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
| name | firstName |
| Email | email |
| birthday | birthday |
| phone | phone_number |
| timestamp | createdAt | 

The values that will be sent to marketo: 
name,Email,birthday,phone,timestamp
Name,name@surname.com,,,Thu Mar 24 2020 17:46:45 GMT+0000 (UTC)


## Contact Us

If you come across any issues while configuring or using Marketo with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

