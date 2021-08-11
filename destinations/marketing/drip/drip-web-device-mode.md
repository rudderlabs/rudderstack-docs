---
description: Detailed technical documentation on sending events to Drip using the RudderStack Web Device mode.
---

# Sending Events to Drip via Web Device Mode

{% hint style="success" %}
**Find the open-source JavaScript SDK code for this destination in our [GitHub repo](https://github.com/rudderlabs/rudder-sdk-js/tree/production/integrations/Drip).**
{% endhint %}

## Identify

The `identify` method pushes the subscriber data to Drip. If the subscriber is not present in your account, RudderStack will create a new record for them. Otherwise, RudderStack updates the user records with the latest information.

{% hint style="info" %}
To update a subscriber's email address, use the `new_email` property.
{% endhint %}

{% hint style="info" %}
For more information on the `identify` call, check out the [**RudderStack API spec**](https://docs.rudderstack.com/rudderstack-api/rudderstack-spec/identify).
{% endhint %}

A sample `identify` call is as shown:

```javascript
rudderanalytics.identify(
  "6781206",
  {
    email: "sampleUser@testmail.com",
    tags: ["Customer"],
  },
  {
    externalId: [
      {
        type: "dripCampaignId",
        id: "846616660",
      },
    ],
  }
);
```

The following table lists the properties that RudderStack transforms and maps to Drip's standard properties:

| **RudderStack Property Name** | **Drip Standard Property** |
| :---------------------------- | :------------------------- |
| `email`                       | `email`                    |
| `newEmail`                    | `new_email`                |
| `userId or anonymousId`       | `user_id`                  |
| `tags`                        | `tags`                     |
| `removeTags`                  | `remove_tags`              |
| `prospect`                    | `prospect`                 |
| `euConsent`                   | `eu_consent`               |
| `euConsentMessage`            | `eu_consent_message`       |

**Note**: All other fields in `context.traits`, will be passed as custom fields.

You can subscribe a user to a [**Email Series Campaign**](https://www.drip.com/learn/docs/guides/overview-of-drip) by providing the associated **Campaign ID**. Doing so will add the subscriber directly to that email series campaign.

If you want to add a subscriber to your account without subscribing them to an email series campaign, use the `identify` call instead. You can also send some additional properties with the `identify`call. These are listed in the following table:

| **RudderStack Property Name** | **Drip Standard Property** |
| :---------------------------- | :------------------------- |
| `doubleOptin`                 | `double_optin`             |

## Track

When you call the `track` API, RudderStack sends the event to Drip along with its name and all of the specified properties. If you include `revenue` as a property, it will get passed to Drip as the conversion value of the event.

{% hint style="info" %}
For more information on the `track` call, check out the [**RudderStack API spec**](https://docs.rudderstack.com/rudderstack-api/rudderstack-spec/track).
{% endhint %}

A sample `track` call is as shown:

```javascript
rudderanalytics.track("randomProduct", {
  email: "sampleUser@rudderstackdrip.com",
  revenue: 100,
});
```

The following table lists the properties that RudderStack transforms and maps to Drip's standard properties:

| **RudderStack Property Name**      | **Drip Standard Property** |
| :--------------------------------- | :-------------------------- |
| `email`                            | `email`                     |
| `revenue`                          | `value`                     |
| `occurred_at or originalTimestamp` | `occurred_at`               |

## Contact Us

For any questions related to any of the sections covered in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
