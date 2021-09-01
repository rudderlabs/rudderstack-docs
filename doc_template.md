---
description: Include relevant metadescription here.Keep it simple - do not include any semicolons.
---

# X (Name of your integration)

[**X**]() is a..... 

<Don't spend a lot of time on writing this intro. In fact, it's fine if you don't write it at all. Just mention the name of the integration and its website, if possible.>

RudderStack supports X as a destination to which you can send your leads seamlessly.


**Note**: In case of a cloud mode destination, include the following hint.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repository**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/marketo_bulk_upload)**.**
{% endhint %}

## Getting Started

To enable sending your events to X, you will need to add it as a destination in RudderStack. Before configuring your source and destination in RudderStack, verify if X supports the source platform by referring to the following table:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **-** | **-** | **-** |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, refer to the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to X, follow these steps:

* Choose a source to which you would like to add X as a destination.

{% hint style="info" %}
Follow our guide on [**Adding a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

* From the list of destinations, select **X**. Assign a name to your destination and then click on **Next**.

* You should then see the following **Connection Settings** page, where you can fill the relevant information and click on **Next** to proceed.

**Note**: **Add the relevant connection settings screenshot here. Example shown below.**.

![X Connection Settings in RudderStack](../../.gitbook/assets/marketo_lead_import.png)

### Connection Settings


**Note**: **Include all the required connection settings in as much detail as possible. Don't worry if anything is unclear though, there's another round of review where anything, if unclear, is discussed and clarified. An example of how connection settings can be presented is shown:**

The settings to configure X as a destination are listed below:

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


## Track

## Page

## Identify

**Note**: **Include the necessary information on all the supported calls. An example below will help you understand how these sections should be written.**

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
The following table lists the user traits and their corresponding mapping to the Marketo fields, in case of the above event:

| **Marketo Field Name**  | **User Traits**|
| :---------------------- | :------------- |
| `name`                  | `firstName`    |
| `Email`                 | `email`        |
| `birthday`              | `birthday`     |
| `phone`                 | `phone_number` |
| `timestamp`             | `createdAt`    | 

RudderStack sends the following comma-separated values to Marketo (corresponding to the sample `identify` call above):

`name`,`Email`,`birthday`,`phone`,`timestamp`
`Name`,`name@surname.com`,,,`Thu Mar 24 2020 17:46:45 GMT+0000 (UTC)`

## FAQs

If you think the reader is likely to encounter any issues or queries while setting up or using the integration, feel free to add an FAQ.

## Contact Us

If you come across any issues while configuring or using X with RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
