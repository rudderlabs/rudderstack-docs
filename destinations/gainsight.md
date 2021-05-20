---
description: Step-by-step guide to send your event data from RudderStack to Gainsight
---

# Gaisight CS

[Gainsight CS](https://www.gainsight.com/customer-success/) makes customers a growth engine. With the help of Gainsight CS, get a comprehensive view of your customers, understand trends and risks, and empower your team to scale with proven actions that deliver outcomes.

RudderStack allows you to send your event data from a variety of sources to Gainsight.

{% hint style="warning" %}
**Please note that this documentation is written for Gainsight CS NXT Edition.**
{% endhint %}

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/dest-gainsight)**.**
{% endhint %}

## Getting Started

To enable sending events to Gainsight, you will first need to add it as a destination to the source from which you are sending event data. Please check if the source platform is supported by Intercom by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | -| - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and select **Gainsight** from the list of supported destinations.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination, and click on **Next**. You should then see the following screen:

![Connection screen for Gainsight](../.gitbook/assets/gainsightcs-settings.png)

Enter the relevant keys in the Connection Settings fields:

* **Accesskey**: This is required for Identify and Group calls. To generate Access key in Gainsight goto Administration > Connectors 2.0 > Connectors tab > [Click Gainsight API].

* **Domain or Subdomain Name**: Sub-domain or custom domain is required to work with the Gainsight API. This is a required field.
Information about setting up a Gainsight Custom domain can be found [here](https://support.gainsight.com/Gainsight_NXT/06Surveys/02Admin_Guides/Setup_a_Gainsight_Domain)

* **Gainsight Event Settings**: This part is related to Gainsight Events Framework. More information can be found on the track section of this documentation.

## Supported Methods

* Identify
* Group
* Track

## Identify

We create a Person Object in Gainsight for an identify call. The `Email` field is used by Gainsight as an identifier and is mandatory for upserting a Person Object.
Hence, for a RudderStack Identify call, the `email` field is used as a required field. For the default fields in Gainsight Person Object, camelCase notation is used in the RudderStack payload traits.

Mapping from RudderStack Payload traits to Gainsight Person Object Fields:

| Gainsight Person Field | RudderStack Trait Name |
| :--- | :--- |
| `Email` | `email` |
| `Name` | `name` |
| `FirstName` | `firstName` |
| `MiddleName` | `middleName` |
| `LastName` | `lastName` |
| `LinkedinUrl` | `linkedinUrl` |
| `Location` | `location` |
| `ExternalRecordID__gc` | `externalRecordId` |
| `EmailOptOut` | `emailOptOut` |
| `DynamicResolutionKey` | `dynamicResolutionKey` |
| `Comments` | `comments` |
| `Timezone` | `timezone` |
| `MasterRecordID` | `masterRecordId` |
| `MasterAvatarTypeCode` | `masterAvatarTypeCode` |

Exmaple usage of Identify Call:

```
  rudderanalytics.identify(
    "sample-user-id",
    { 
      email: "user@email.com",
      firstName: "John",
      lastName: "Doe",
      comments: "example identify call",
    },
    () => console.log("identify callback")
  );
```

{% hint style="info" %}
**Custom Fields are supported for identify.**
{% endhint %}

### Custom Fields

First create Custom Fields in Gainsight Schema for `Person` as show in the image below.

![gainsightcs-custom-field-person](../.gitbook/assets/gainsightcs-custom-field-person.png)

Next add the RudderStack Trait name VS Gainsight Custom Field mapping in the RudderStack dashboard as shown below.

![gainsightcs-field-map-person](../.gitbook/assets/gainsightcs-person-map.png)

{% hint style="info" %}
**Note: For custom fields, `__gc` is suffixed at the end by Gainsight. Provide the field name including the suffix in the Dashboard.**
{% endhint %}

## Group

The group call associates a Person with a Company. The Company Object is created, if not present or updated with the provided traits in a group call.

The `Name` field in Company is used as the unique identifier.

{% hint style="info" %}
**Note: For making a group call, the Person `email` should be present in `context.traits` of the RudderStack HTTP Payload.**
{% endhint %}

Mapping from RudderStack Payload traits to Gainsight Company Object Fields:

| Gainsight Compant Field | RudderStack Trait Name |
| :--- | :--- |
| `Name` | `name` |
| `Employees` | `employees` |
| `Arr` | `arr` |
| `BillingAddress` | `billingAddress` |
| `Summary` | `summary` |
| `Csm` | `csm` |
| `CustomerlifetimeInMonths` | `customerLifetimeInMonths` |
| `Industry` | `industry` |
| `LifecycleInWeeks` | `lifecycleInWeeks` |
| `ManagedAs` | `managedAs` |
| `Mrr` | `mrr` |
| `OriginalContractDate` | `originalContractDate` |
| `ParentCompany` | `parentCompany` |
| `RenewalDate` | `renewalDate` |
| `Stage` | `stage` |
| `Status` | `status` |
| `Tags` | `tags` |
| `TickerSymbol` | `tickerSymbol` |
| `Users` | `users` |
| `SfdcAccountId` | `sfdcAccountId` |
| `IndustryNew` | `industryNew` |

Exmaple usage of Group Call:

```
  rudderanalytics.group(
    "sample-group-id",
    { 
      name: "Example Company",
      employees: 1000,
      industry: "Software"
    },
    () => console.log("group callback")
  );
```

{% hint style="info" %}
**Custom Fields are supported for group.**
{% endhint %}

### Custom Fields

First create Custom Fields in Gainsight Schema for `Company` as show in the image below.

![gainsightcs-custom-field-company](../.gitbook/assets/gainsightcs-custom-field-company.png)

Next add the RudderStack Trait name VS Gainsight Custom Field mapping in the RudderStack dashboard as shown below.

![gainsightcs-field-map-company](../.gitbook/assets/gainsightcs-company-map.png)

{% hint style="info" %}
**Note: For custom fields, `__gc` is suffixed at the end by Gainsight. Provide the field name including the suffix in the Dashboard.**
{% endhint %}

### Track

The track call is used to work with the Gainsight Events Framework.
Gainsight Events Framework allows you to create events, which can be used in Programs and Rules Engine.

Gainsight Events are identified with `Event Name` and `Event Version`. Events are grouped under `Topics`. There can be multiple events under a topic.

To start sending Events, first register as a publisher in Gainsight under Administration > Events. After that, the shared secret is generated which is unique and required for working with Gainsight Events Framework.

{% hint style="info" %}
More information on the setup for Gainsight Events can be found [here](https://support.gainsight.com/Gainsight_NXT/Journey_Orchestrator_and_Email_Templates/
Programs/Events_Framework#Event_API_Contract)
{% endhint %}

Provide the required Event settings in the RudderStack dashboard as in the image below.

![gainsight-event-main-settings](../.gitbook/assets/gainsightcs-event-main-settings.png)

* **Shared Secret**: This is a `required` field. Copy the shared secret from the Events Section in Gainsight.
* **TenantId**: Tenant id of publisher. This is a `required` field. Copy this from the Gainsight Application settings. 
* **Contract ID**: This field is `optional`. If subscriber subscribes to contracts, only those subscribers with matching contract will get this event.
* **Topic Name**: This is a `required` field. Events are grouped under topic.

**Note**: Both the Event `name` and `version` are needed.

Example for using RudderStack track call with Gainsight Events is shown below.

First create a New Event under a particular topic in Gainsight.

![gainsightcs-event-map-sample](../.gitbook/assets/gainsightcs-event-create.png)

Next provide the Event Name and version mapping in RudderStack dashboard as shown in the image below:

![gainsightcs-event-map-sample](../.gitbook/assets/gainsightcs-event-map-sample.png)

Now, you are ready to send events to Gainsight using the track method.

Example track call:
```
rudderanalytics.track(
  "Ticket Closure",
  {
    name: "John Doe",
    status: "resolved"
  },
  () => console.log("track callback")
);
```

{% hint style="warning" %}
**Note: For sending Gainsight Events to more than one topic, create new RudderStack destinations for each Topic.
{% endhint %}

## Contact Us

If you come across any issues while configuring Customer.io with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
