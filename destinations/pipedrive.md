---
description: Step-by-step guide to send your event data from RudderStack to Pipedrive.
---

# Pipedrive

[Pipedrive](https://www.pipedrive.com/) is a popular sales CRM and pipeline management tool that lets you manage your leads, track all your customer communications, automate administrative tasks, and more. With Pipedrive, you can efficiently track and manage your sales funnel, and also integrate it with hundreds of popular apps like Slack, Mailchimp, etc.

You can now send your event data directly to Pipedrive through RudderStack.

To check the Pipedrive API documentation, click [here](https://developers.pipedrive.com/docs/api/v1/#/).

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/dest-pipedrive)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please check the supported connection modes by referring to the following table:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| Device mode | -| -| - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Pipedrive, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderstack.com/), add the source and select **Pipedrive** as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

![Configuration Settings for Pipedrive](../.gitbook/assets/pipedrive-main-settings.png)

## Pipedrive Configuration Settings in RudderStack

To successfully configure Pipedrive as a destination, you will need to configure the following settings:

* **API Token:** Your API token is a unique token generated for your account. It can be found in your Pipedrive account by navigating to **Company Settings** -**Personal Preferences** - **API**.

{% hint style="info" %}
`GroupId Token` and `UserId Token` fields are related to the Custom Field tokens in Pipedrive.{% endhint %}

{% hint style="info" %}
**Note:** Pipedrive does not support mapping userId or groupId. Instead they create these IDs internally. Therefore, in order for RudderStack calls to work with Pipedrive, you will need to create custom fields for `userId` and `groupId` in Pipedrive to which the provided userId and groupId values will be mapped.
{% endhint %}.

**Note:** For cases where user already has the list of pipedrive IDs, events can be sent using those IDs as as external IDs. For more details, refer the section **Using External IDs** section.

{% hint style="info" %} **Note:** `GroupId Token` and `UserId Token` are required only if calls like `identify`, `group`, etc. are made. In that case, RudderStack needs a way to map the provided `userId` and `groupId` in the destination.
{% endhint %}

**Note:** For creating `Leads` or `Organization` in Pipedrive, the `person_id` parameter is required. Since anonymous tracking is not available, UserId or External Id is required for all events.

## Enable User Creation

If the **Enable User Creation** option is enabled, Rudderstack will create a new user with the provided userId value, in case the user does not already exist. This will work for `identify`, `track`, and `group` calls.

{% hint style="info" %}
**Note:** For `identify` calls, it is recommended to enable this option to enable RudderStack to create new users. In case this option is disabled, Rudderstack will only search for and update the existing users.
{% endhint %}

![Configuration Settings for Pipedrive](../.gitbook/assets/pipedrive-flag.png)

## Using External ID

Already existing Pipedrive IDs can also be used with Rudderstack. In this case, provide the Pipedrive ID in `context.enternalId` in the required format.

An example of a payload with `externalId` present is as shown:

```
{
    "userId": "sample-user-id",
    "anonymousId": "sample-anon-id",
    "context": {
        "externalId": [
            {
                "type": "person_id",
                "id": 261
            }
        ],
        "traits": {
            "name": " New User",
            "email": "user@email.com"
        },
        "ip": "0.0.0.0",
        "library": {
            "name": "http"
        }
    },
    "timestamp": "2020-02-02T00:23:09.544Z"
}
```
{% hint style="info" %}
An External ID can be provided for `alias` calls, and can be associated with a `Person`or a `Group` only.
{% endhint %}

* For `Person`, the `externalId` type is `person_id`.
* For `Group`, the `externalId` type is `org_id`.
* For the RudderStack `alias` call, the external IDs are mapped as shown in the table below:

| **RudderStack Key** | **External ID Key**
| :--- | :--- |
| previousId| prev_person_id|
| userId | curr_person_id |

## Using Custom Fields

**Custom fields** can be created in Pipedrive. User can pass values for created custom fields in rudderstack payload. The mapping, however needs to be configured in the Rudderstack Dashboard.

In order to create custom fields and provide the mappings in Rudderstack, please follow the steps below.

* To create Custom fields go to **CompanySettings** --> **Data Fields** --> **Add Custom Field**.
* Create new Field under the desired section (Leads/Person/Organization/Product).

![Configuration Settings for Pipedrive](../.gitbook/assets/pipedrive-apikey-copy.png)

* Next provide the Custom field name and the token under the respective section in the Rudderstack dashboard as seen in the image below.

![Configuration Settings for Pipedrive](../.gitbook/assets/pipedrive-fields-mapping.png)

**Note:**  Field names are case sensitive.

* For `userId` and `groupId` tokens, create a Custom Field under Persons and Organizations respectively.
* In the dashboard, just provide the Tokens. The actual field name can be anything and is not required by Rudderstack.
* For all other cases, provide both the exact Field name and token in the dashboard.

{% hint type="info"%}
Pipedrive allows passing in owner_id in most cases. However, that owner_id is related to the Pipedrive account owner and not a user. So, owner_fields are not taken by Rudderstack for any of the events.
{% endhint %}

**Note:** `External Id's` are given the `highest Precedence`, i.e if both external Id and custom Id's are provided, external id will be used for that event.

## Supported Events

RudderStack supports the following events for Pipedrive:

* [Identify](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#6-identify)
* [Alias](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#11-alias)
* [Group](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#10-group)
* [Track](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#7-track)

### Identify

The `identify` method allows you to link the users and their actions to a specific user ID. You can also add additional information as traits to that user. Once you associate the `identify` information to the user, it will also be passed to the subsequent `track` or `page` calls. To reset the user identification, you can use the `reset` method.

The `identify()` method definition is as follows:

``` 
rudderanalytics.identify([userid], [traits], [options], [callback]);
```

{% hint style="info" %}
For an `identify` call, a `Person` object is created in Pipedrive.
{% endhint %}

A sample `identify` call is as shown:

```
rudderanalytics.identify(
"sample-user-id",
{
  "name": "John Doe",
  "email": "john@doe.com"
});
```

The fields that can be passed in the `identify` method are as follows:

* `name`
* `email`
* `phone`
* `visible_to`
* `add_time`

You can also pass custom fields in the `identify` call. However, make sure that you provide the field name and token in the Rudderstack dashboard under the **Persons** section. Otherwise, the random-key value pairs will be dropped.

Note that for the `identify` call, the userId token is required. Please refer to the **Connection Settings** section above for more details.

An example of the `identify` method with custom fields included is as shown:

```
rudderanalytics.identify(
"sample-user-id",
{
  "name": "John Doe",
  "email": "john@doe.com",
  "role": "Software Developer"
});
```
The `role` field and corresponding Pipedrive API key needs to be provided in the Rudderstack dashboard while configuring the Pipedrive destination.

### Group

The `group` call associates a user to a specific organization.

The format of a `group` call is as shown:

```
rudderanalytics.group("groupId", traits, options, callback);
```

{% hint style="info" %} For a `group` call, the `Person` object in Pipedrive is added to an organization. 
{% endhint %}

Note that a `GroupId` token is required for `group` call. Please provide the token in Rudderstack dashboard under `Connection Settings`.

{% hint style="info" %}
This Custom Group Id field is required by Rudderstack to map `groupId` with Pipedrive's `internal org_id` field.
{% endhint %}

The fields that can be passed in the `group` method are:

* `name`
* `add_time`
* `visible_to`

You can also pass custom fields in the `group` call. Simply provide the custom field name and token under the **Organization Field Mapping** section in Rudderstack dashboard while configuring your Pipedrive destination.

### Alias

The `alias` method is used to merge two users, or map an already identified user to a new identifier.

A sample `alias` call is as shown:

```
rudderanalytics.alias("to", "from", options, callback);
```

Note: `to` denotes the new identifier and is required.

You can also supply external IDs your `alias` call, as shown:

```
{
    "anonymousId": "sample-anon-id",
    "previousId": "",
    "userId": "",
    "context": {
        "externalId": [
            {
                "type": "prev_person_id",
                "id": 271
            },
            {
                "type": "curr_person_id",
                "id": 272
            }
        ],
        "traits": {
            "name": "Updated Username"
        },
        "ip": "14.5.67.21",
        "library": {
            "name": "http"
        }
    },
    "timestamp": "2020-01-21T00:21:34.208Z"
}
```

Note that in cases where both the previous and current users exist, the [Pipedrive merge](https://developers.pipedrive.com/docs/api/v1/#!/Persons/mergePersons) endpoint is called.

### Track

The `track` method allows you to track potential leads/deals and send this information to Pipedrive. More details on how to work with leads in Pipedrive can be found in the [Pipedrive docs](https://developers.pipedrive.com/docs/api/v1/#!/Leads/addLead).

A sample example of how to use the `track()` method is as shown:

```
rudderanalytics.track(
  "Potential Lead",
  {
    "value": 1000,
    "currency": "USD",
    "expected_close_date": "2021-04-27"
  },
);
```

The fields that can be passed in the `track` method are:

* `currency`
* `expected_close_date` (In ISO 8601 format: YYYY-MM-DD)
* `label_ids`
* `revenue`/`value`/`total`/`amount`

You can also pass custom fields in your `track`call. Simply provide the name of the custom field and the token in the **Leads Field Mapping** section while configuring your Pipedrive destination in the RudderStack dashboard.

{% hint style="info"%}
**Note:** Pipedrive requires valid `person_id` or `organization_id` ID fields to be present for lead creation. So, in order to map the track event to a Lead object correctly, a valid `userId` is required with the `track event`, i.e a user should exist for that `userId`.
{% endhint %}

## Contact Us

If you come across any issues while configuring Pipedrive with RudderStack, please feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
