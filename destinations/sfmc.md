---
description: Step-by-step guide to set up Salesforce Marketing Cloud as a destination in RudderStack
---

# Salesforce Marketing Cloud

[Salesforce Marketing Cloud](https://www.salesforce.com/in/products/marketing-cloud/overview/) is a provider of digital marketing automation and analytics software and services. It was founded in 2000 under the name ExactTarget. It 

RudderStack allows you to integrate your source to Salesforce Marketing Cloud and send data to sfmc data extensions.

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
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You should then see the following screen:

![Salesforce Connection Settings](../.gitbook/assets/sfmc-1.png)
(../.gitbook/assets/sfmc-2.png)

* Settings:
Client Id, Client Secret:
To get the client id and secret you need to follow these steps.
1. Log in to your Salesforce Marketing Cloud account and go to the Setup settings.
2. Under Platform Tools, expand Apps and select Installed Packages.
3. Click New to create a new package. We recommend giving it a name like “RudderStack”.
4. Click Add Component and select API Integration.
5. Select the Server-to-Server Integration Type.
6. Enable the following permissions. If you don’t add these permissions, you’ll see an Insufficient Privileges error from SFMC.
Email: Read, Write
Web: Read, Write
Automations: Read, Write, Execute
Journeys: Read
List And Subscribers: Read, Write
Data Extensions: Read, Write
Tracking Events: Read
Webhooks: Read, Write
7. Click Save.

Subdomain: From the uri received eg: https://mxxxxxxxxxxxxxxxxxxxx.rest.marketingcloudapis.com/ , mxxxxxxxxxxxxxxxxxxxx is the subdomain
Identify Call Settings
Do not create or update contacts: To disable creating or updating contacts during an identify call, set this option to true.
Identify Data External Key: Use this setting if you would like Rudder identify events to create or update Data Extensions in SFMC. The External Key of the Salesforce Marketing Cloud Data Extension to which you'd like to send Identify data. You can find this in the SFMC interface by navigating to Data & Analytics > Contact Builder > Data Extensions; the extension's name will appear in the External Key column.
Track Call Settings
Map events to External Key: Use this setting if you would like Rudder track events to create or update Data Extensions in SFMC. The External Key of the Salesforce Marketing Cloud Data Extension to which you'd like to send track data. You can find this in the SFMC interface by navigating to Data & Analytics > Contact Builder > Data Extensions; the extension's name will appear in the External Key column.
Map events to Primary Key: The target Data Extension's Primary Key. If a value is not provided, defaults to Contact Key. You can add multiple primary keys by separating them with commas.
Event Name to UUID: If this is checked then we will generate a UUID and pass it through to SMC as the value for Primary Key for this event called 'Uuid'. This will override the above Primary Key field.

## Creating Data Extensions in SFMC

You need to create a Data Extension in SFMC to store the Identify and Track calls coming from Rudder. For each trait( for identify calls) or properties (for track calls) you want to send to SFMC, you must manually create an attribute on the Data Extension in SFMC. When you create a Data Extension in SFMC, you can set up as many (or as few) attributes as you need.

SFMC ignores keys that don’t exist in the target data extension, so you must create attributes before you send the data to SFMC. Attributes created in the Data Extension cannot be applied retroactively. If you send a trait/property "phone": "99999" with your data, but there’s no matching phone column in SFMC’s table, that trait/property is ignored.

You do not need to create attributes for all of the traits/properties in an Identify/Track call. If you don’t need a specific trait in SFMC, don’t create an attribute for it, and Segmrudderent ignores the trait/property when it sends data to SFMC.

All attributes you create in the Data Extension must be in Title Case, regardless of the casing used in your Rudder Identify/Tracl calls. When Rudder sends Identify/Track calls to SFMC it first transforms the data to use Title Case, but you still need to set the attributes up in SFMC in the correct format.

Set up a Primary Key in the Identify Data Extension called **Contact Key**. Rudder uses this to link users to SFMC’s built-in Contact Key property. This field is populated with userId by default in Identify calls. If no userId exists, Rudder uses the email instead.

For setting up Primary Keys in Track calls you can set up different primary keys for different events. If no primary key is set he default primary key will be Contact Key. You can set multiple comma separated primary keys if you have multiple primary keys in your data extension.

If you want to use this data to send emails or push notifications, check the Is Sendable box. (If you need to do this later, the box will be called “Used for Sending”.)

If you will be using this data to send emails, set up any Email attributes so they are of the “EmailAddress” type.

Before you leave this screen, copy the External Key for the Data Extension. You’ll need it to set up the destination in Rudder.

The example below shows a Data Extension for Identify calls that stores Email, Name, and Last Name traits. Note the external key in the left column.

(../.gitbook/assets/sfmc-1.png)


## Identify

The following code snippet demonstrates a sample `identify` call in RudderStack:

```javascript
rudderanalytics.identify('userid', {
  name: 'John Doe',
  title: 'CEO',
  email: 'name.surname@domain.com',
  company: 'Company123',
  phone: '123-456-7890',
  state: 'Texas',
  rating: 'Hot',
  city: 'Austin',
  postalCode: '12345',
  country: 'US',
  street: 'Sample Address',
  state: 'TX',
  createdAt: new Date().toJSON().slice(0,10).replace(/-/g,'/')
}
});
```
{% hint style="info" %}
 By default, identify events create or update contacts in SFMC. To prevent Identify calls from creating or updating a Contact when they update a Data Extension, enable the “Do Not Create or Update Contacts” option in the Destination Settings.
{% endhint %}

Add your data extension external key on our dashboard. 

You must include a userId or email trait in every Identify call. Rudder does not forward Identify calls to SFMC if both are missing.

If userId is present in the Identify call, Rudder sends it to SFMC as the Contact Key

If no userId is present, Rudder sends the email in the Identify to SFMC as the Contact Key

SFMC does not allow colon characters (“:”) in the Contact Key field, so you must remove those characters from any userId fields.

SFMC doesn’t handle nested objects gracefully.

SFMC accepts ISO-8601-formatted dates, and rejects any calls that include dates not in that format. Make sure you send all dates in ISO format. Eg: createdAt trait in the above snippet.

## Track

The following code snippet demonstrates a sample `track` call in RudderStack:

```javascript
rudderanalytics.identify('Event Name', {
 Plan: "plan value"
}
});
```
Enter you external key, primary key against each event. 
If no primary key is set, default value of Contact Key is taken. 
Multiple primary keys can be set by separating them with commas.
You can turn on uuid for particular events. If it is on set Uuid as a primary key in your data extensions. messageId is set as the uuid.

## Data Formatting and Mapping

Camel cases and snake cases will be formatted to title cases.

The Rudder SDKs and libraries automatically collect many context properties, and you can pass these properties into SFMC as Data Extension attributes.
To use context properties, you must create attributes in the Data Extensions that use specific naming conventions. The table below lists the Rudder context properties available for SFMC, and the Data Extension attribute names they map to.

| **Rudder context Properties** | **SFMC Attribute name** | 
| app.name | App Name |
| app.version | App Version |
| app.build | App Build |
| campaign.name | UTM Campaign |
| campaign.source | UTM Source |
| campaign.medium | UTM Medium |
| campaign.term | UTM Term |
| campaign.content | UTM Content |
| locale | Locale |
| userAgent | User Agent |
| ip | IP Address |
| device.adTrackingEnabled | Ad Tracking Enabled |
| device.manufacturer | Device Manufacturer |
| device.model| Device-model |
| device.name | Device Name |
| device.type | Device Type |
| network.bluetooth | Bluetooth Enabled |
| network.carrier | Network Carrier |
| network.cellular| Cellular Enabled |
| network.wifi | Wifi Enabled |
| screen.density | Screen Density |
| screen.height | Screen Height |
| screen.width | Screen Width |



## FAQs


## Contact Us

If you come across any issues while configuring Salesforce with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

