---
description: Detailed technical documentation on the web device mode settings for Drip destination.
---

# Web Device Mode Settings

{% hint style="success" %}
**Find the open-source JavaScript SDK code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-sdk-js/tree/production/integrations/Drip)**.**
{% endhint %}

## Identify

The `identify` method pushes subscriber data into Drip. If the subscriber is not yet in your account, we will create a new record for them; otherwise, we update their record with the information you pass in. To update a subscriber's email address, use the `new_email` property.

For more information on the `identify` call, check out the [**RudderStack API spec**](https://docs.rudderstack.com/rudderstack-api/rudderstack-spec/identify).

A sample `identify` call is as shown:

```javascript
rudderanalytics.identify(
  "6781206",
  {
    email: "sampleUser@testmail.com",
    tags: ["Customer", "Data", "Customer2"],
    euConsent: "granted",
    doubleOptin: true,
  },
  {
    externalId: [
      {
        type: "dripCampaignId",
        id: "846314760",
      },
    ],
  }
);
```

RudderStack transforms the following properties to Drip's Standard properties:

| **RudderStack Property Names** | **Drip Standard Properties** |
| :----------------------------- | :--------------------------- |
| email                          | email                        |
| newEmail                       | new_email                    |
| userId                         | user_id                      |
| anonymousId                    | user_id                      |
| tags                           | tags                         |
| removeTags                     | remove_tags                  |
| prospect                       | prospect                     |
| euConsent                      | eu_consent                   |
| euConsentMessage               | eu_consent_message           |

We can Subscribe to an Email Series Campaign by providing **Campaign ID**, it will add a subscriber directly to an Email Series Campaign. If you would like to add a subscriber to your account without subscribing them to an Email Series Campaign, use simply an `identify` call instead. Some additional properties can also be sent with the `identify` call mentioned below.

| **RudderStack Property Names** | **Drip Standard Properties** |
| :----------------------------- | :--------------------------- |
| externalId                     | campaign_id                  |
| doubleOptin                    | double_optin                 |

## Track

The `track` method is appropriate when you cannot trigger conversions by URL or you simply wish to record an particular action that the user has taken.

For more information on the `track` call, check out the [**RudderStack API spec**](https://docs.rudderstack.com/rudderstack-api/rudderstack-spec/track).

A sample `track` call is as shown:

```javascript
rudderanalytics.track("randomProduct", {
  email: "sampleUser@rudderstackdrip.com",
  user_id: "90008254005",
  revenue: 100,
  occurred_at: "2019-10-15T09:35:31.288Z",
  product_id: 123,
});
```

RudderStack transforms the following properties to Drip's Standard properties:

| **RudderStack Property Names** | **Drip Standard Properties** |
| :----------------------------- | :--------------------------- |
| email                          | email                        |
| revenue                        | value                        |
| originalTimestamp              | occurred_at                  |
| occurred_at                    | occurred_at                  |
| product_id                     | product_id                   |
| product_variant_id             | product_variant_id           |
| sku                            | sku                          |
| name                           | name                         |
| brand                          | brand                        |
| categories                     | categories                   |
| price                          | price                        |

## Contact Us

If you come across any issues while configuring Drip with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel. we will be happy to talk to you!
