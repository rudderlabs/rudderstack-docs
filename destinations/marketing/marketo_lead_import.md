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

The settings to configure Marketo Lead Import as a destination are listed below:

* **Munchkin Account ID**: Enter your Munchkin ID. To get your Munchkin Account ID, log into your Marketo instance and navigate to the **Admin** section. Then, in the left menu, under **Integration**, click on the **Munchkin** option. Your Munchkin Account ID will be listed in the **Tracking Code** section on the main screen.

{% hint style="info" %}
For more information on finding your Munchkin Account ID, refer to the [**Marketo knowledgebase**](https://nation.marketo.com/t5/knowledgebase/how-to-find-your-munchkin-id-for-a-marketo-instance/ta-p/248432).
{% endhint %}


* **Client ID**: To get your **Client ID**, go to the the **Admin** section as mentioned above. Then, in the left menu, under **Integration**, click on **LaunchPoint**. Finally, select the API service and click on **View Details** to get your client ID.

{% hint style="info" %}
For more information on finding your Client ID, refer to the [**Marketo knowledgebase**](https://developers.marketo.com/rest-api/authentication/).
{% endhint %}

* **Client Secret**: You can find your Marketo client secret next to the **Client ID** obtained in the previous step.

* **Column Fields Mapping**: This option lets you map your **Leads** table columns' API key values with keys in your incoming events' traits. The values of those traits will be sent correspondingly to the columns.

You can find your columns API key names by following this [**documentation**](https://developers.marketo.com/rest-api/bulk-import/bulk-custom-object-import/).

For instance, if you want to send data from the event traits set as `firstName`, `email` to the columns with API key names `name` and `Email`, then the mapping should be done as shown in the following table:

| **Column Field Name** | **Traits** |
| :-------------------- | :--------- |
| `name`                | `firstName`|
| `Email`               | `email`    |


## Identify

{% hint style="info" %}
RudderStack supports only `identify` event type for this destination.
{% endhint %}

The `identify` call lets you identify a visiting user and associate them to their actions. It also lets you record the traits about them like their name, email address, etc.

{% hint style="info" %}
For more information on the `identify` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/identify) guide.
{% endhint %}

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
The corresponding mapping to the Marketo traits in case of the above event is shown in the following table:

| **Marketo Field Name**  | **Traits**     |
| :---------------------- | :------------- |
| `name`                  | `firstName`    |
| `Email`                 | `email`        |
| `birthday`              | `birthday`     |
| `phone`                 | `phone_number` |
| `timestamp`             | `createdAt`    | 

The values that will be sent to Marketo (corresponding to the sample `identify` call above) are listed in the following table:

| **Marketo Field Name**  | **Value**                                |
| :---------------------- | :--------------------------------------- |
| `name`                  | `Name`                                   |
| `Email`                 | `name@surname.com`                       |
| `birthday`              | ` `                                      |
| `phone`                 | ` `                                      |
| `timestamp`             | `Thu Mar 24 2020 17:46:45 GMT+0000 (UTC)`|


## Contact Us

If you come across any issues while configuring or using Marketo Lead Import with RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
