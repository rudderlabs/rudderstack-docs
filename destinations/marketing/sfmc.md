---
description: >-
  Step-by-step guide to set up Salesforce Marketing Cloud as a destination in
  RudderStack
---

# Salesforce Marketing Cloud

[Salesforce Marketing Cloud](https://www.salesforce.com/in/products/marketing-cloud/overview/) is a digital marketing automation and analytics tool. It allows you to understand your customers better, and design personalized digital marketing campaigns to engage them throughout their product journey.

RudderStack allows you to integrate your source to Salesforce Marketing Cloud and send data to Salesforce Marketing Data Extensions.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/sfmc)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Salesforce Marketing Cloud by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud** **mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Salesforce Marketing, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select Salesforce.

{% hint style="info" %}
Follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Salesforce Connection Settings](../../.gitbook/assets/sfmc-1.png)

## Settings

* **Client Id, Client Secret:** To get the `clientId` and `clientSecret`, follow these steps.
  * After logging in to your Salesforce marketing account, go to the **Setup** page.
  * Under **Platform Tools**, you will find **Apps** where you can select **Installed Packages**.
  * Click **New** to create a new package. We recommend giving it a name such as **RudderStack**.
  * Click **Add Component** and select **API Integration**.
  * Select the **Server-to-Server Integration Type**.
  * The following permissions are needed to configure the destination correctly. Otherwise, you'll get the insufficient Privileges error from SFMC: 
    * `Email`: Read, Write
    * `Web`: Read, Write
    * `Automations`: Read, Write, Execute
    * `Journeys`: Read
    * `List And Subscribers`: Read, Write
    * `Data Extensions`: Read, Write
    * `Tracking Events`: Read
    * `Webhooks`: Read, Write 
  * Click **Save**. 
* **Subdomain:** From the URL received, such as the following: [`https://mxxxxxxxxxxxxxxxxxxxx.rest.marketingcloudapis.com/`](https://mxxxxxxxxxxxxxxxxxxxx.rest.marketingcloudapis.com/) , **`mxxxxxxxxxxxxxxxxxxxx`** is the subdomain. 
* **Do not create or update contacts:** To disable creating or updating contacts during an `identify` call, set this option to `true`. 
* **Identify Data External Key:** Use this setting if you would like RudderStack to send `identify` events for creating or updating data extensions in Salesforce Marketing. The External Key of the data extension is needed for mapping the data. 

{% hint style="info" %}
You can find the external key in the SFMC interface by going to **Data & Analytics**, and navigating to **Contact Builder** - **Data Extensions**. The extension's name can be found in the **External Key** column.
{% endhint %}

![Salesforce Connection Settings for Track](../../.gitbook/assets/sfmc-2.png)

\*\*\*\*

* **Map events to External Key:** Use this setting if you would like RudderStack `track` events for creating or updating data extensions in Salesforce Marketing. The External Key of the Data Extension is needed for mapping the data.

{% hint style="info" %}
You can find the external key in the SFMC interface by going to **Data & Analytics**, and navigating to **Contact Builder** - **Data Extensions**. The extension's name can be found in the **External Key** column.
{% endhint %}

* **Map events to Primary Key:** This is the target data extension's **Primary Key**. If a value is not provided, it defaults to **Contact Key**. You can add multiple primary keys by separating them with commas. ****
* **Event Name to UUID:** If this is checked, we will generate a UUID and pass it through to SMC as the value for Primary Key for this event called 'Uuid'. It will override the above Primary Key field.

## Creating Data Extensions in SFMC

We recommend creating a **Data Extension** in SFMC to store the `identify` and `track` calls coming from RudderStack. For each trait \(in case of  `identify` calls\) or properties \(in case of `track` calls\) that you want to send to Salesforce Marketing Cloud, you should create an attribute on the Data Extension in the interface.

In SFMC, keys that are not present in the selected data extension are ignored, so those attributes must be created before you send them to SFMC. If you send a trait/property `"phone": "99999"` with your data, but there's no matching phone column in SFMC's table, that trait or property will be ignored. All of the traits/properties in an `identify` or `track` call are not needed to be created as attributes in data extensions only the required ones should be created.

{% hint style="warning" %}
All attributes in the Data Extension should be created in title case, regardless of the casing used in your RudderStack `identify` or `track` calls. When RudderStack sends these calls to SFMC, they are first transformed into title case.
{% endhint %}

{% hint style="info" %}
A Primary Key for the Identify Data Extension called **Contact Key** is required to be created. RudderStack will use this to link the users to SFMC's built-in **Contact Key** key. This field will be populated with `userId` or `email` by default during the `identify` calls.
{% endhint %}

For setting up Primary Keys in Track calls, you can set up different primary keys for various events. If no primary key is set, the default primary key will be **Contact Key**. You can specify multiple, comma-separated primary keys if you have multiple primary keys in your data extension. 

When creating data extensions, the **Is Sendable** box should be checked if you want to send emails or push notifications based on this data. If this data is used to send emails, email attributes will be set, which will be called **`EmailAddress`**. Copy the External Key for the particular Data Extension, which you will set in the destination setting of RudderStack.

Here is an example of a Data Extension for an `identify` call that will store email, first name, and last name, and phone traits. 

## Identify

The following code snippet demonstrates a sample `identify` call in RudderStack:

```javascript
rudderanalytics.identify("userid", {
  name: "John Doe",
  title: "CEO",
  email: "name.surname@domain.com",
  company: "Company123",
  phone: "123-456-7890",
  state: "Texas",
  rating: "Hot",
  city: "Austin",
  postalCode: "12345",
  country: "US",
  street: "Sample Address",
  state: "TX",
  createdAt: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
});
```

{% hint style="info" %}
Identify events will create or update the contacts in Salesforce marketing cloud if **Do Not Create or Update Contacts** is turned off. Otherwise, no creation or updating of contacts will occur.
{% endhint %}

{% hint style="warning" %}
`UserId` or `email` trait is required in every `identify` call, otherwise the event will not be triggered. 
{% endhint %}

{% hint style="warning" %}
Salesforce marketing cloud does not allow colon characters \(":"\) in the **Contact Key** field, so they must be removed from any `userId` fields. SFMC doesn't handle nested objects. 
{% endhint %}

{% hint style="warning" %}
SFMC only accepts ISO-8601 type dates and rejects any other types if the attribute is of DateTime. For example, refer to the `createdAt` trait in the above snippet.
{% endhint %}

## Track

The following code snippet demonstrates a sample `track` call in RudderStack:

```javascript
rudderanalytics.identify("Event Name", {
  Plan: "plan value",
});
```

Enter your external key and the primary key against each event. If no primary key is set, the default value of the **Contact Key** is taken. Multiple primary keys can be set by separating them with commas. 

{% hint style="info" %}
You can also turn on UUID for particular events. If it is on, you can set UUID as a primary key in your data extensions. The `messageId` is then set as the UUID.
{% endhint %}

## Data Formatting and Mapping

The RudderStack SDKs and libraries will automatically collect context properties which can be passed as properties in SFMC as attributes for the data extension. To use `context` properties, the attributes in the Data Extensions with specific naming conventions should be set. 

The table below lists the RudderStack context properties available for SFMC and the Data Extension attribute names that they map to. 

{% hint style="info" %}
Note that camel cases and snake cases will be formatted to title cases.
{% endhint %}

| **RudderStack Context Properties** | **SFMC Attribute name** |
| :--- | :--- |
| `app.name` | `App Name` |
| `app.version` | `App Version` |
| `app.build` | `App Build` |
| `campaign.name` | `UTM Campaign` |
| `campaign.source` | `UTM Source` |
| `campaign.medium` | `UTM Medium` |
| `campaign.term` | `UTM Term` |
| `campaign.content` | `UTM Content` |
| `locale` | `Locale` |
| `userAgent` | `User Agent` |
| `ip` | `IP Address` |
| `device.adTrackingEnabled` | `Ad Tracking Enabled` |
| `device.manufacturer` | `Device Manufacturer` |
| `device.model` | `Device-model` |
| `device.name` | `Device Name` |
| `device.type` | `Device Type` |
| `network.bluetooth` | `Bluetooth Enabled` |
| `network.carrier` | `Network Carrier` |
| `network.cellular` | `Cellular Enabled` |
| `network.wifi` | `Wifi Enabled` |
| `screen.density` | `Screen Density` |
| `screen.height` | `Screen Height` |
| `screen.width` | `Screen Width` |

## Contact Us

If you come across any issues while configuring Salesforce with RudderStack, please feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

