---
description: Technical description of the Identity Resolution feature in RudderStack
---

# Identity Resolution

Understanding your users is crucial to every behavioral analysis. Hence, it is quite essential to tie the events or activities to the individual users generating those events. 

There are various analytics platforms that help you collect this event data. Unfortunately, this is not trivial in a world where users often browse anonymously, or use multiple identities \(e.g., email ID, phone, etc.\) with the same product, or access your app/website from different devices and channels. 

With Identity Resolution, you can tie these different identities together whenever required, in a way that preserves your users' privacy.

{% hint style="info" %}
Identity Resolution is available as a part of RudderStack's Enterprise plan.
{% endhint %}

[![Plan: Enterprise](https://img.shields.io/static/v1?label=PLAN&message=ENTERPRISE&color=blueviolet&style=for-the-badge)](https://rudderstack.com/enterprise-quote)

## Identity Resolution Explained

In this section, we walk you through a user's journey - Alice, in this case - in the context of an e-commerce company using RudderStack. 

After integrating RudderStack, you can collect events from sources to build a profile for every user. All this is done on top of your data warehouse without sharing the data with a third-party vendor.

First, Alice searches for the latest iPhone in her mobile app, and signs up with her phone number.

![](../.gitbook/assets/image%20%2880%29.png)

Later, she signs up on the website with her email, verifies her mobile number and then purchases the iPhone. The flow of events is as shown:

![](../.gitbook/assets/image%20%2893%29.png)

Alice then reports an issue via her phone and a ticket for the same is created using Zendesk. This ticket confirmation email is sent to Alice using CustomerIO. 

This data can be collected using the RudderStack cloud sources, as shown:

![](../.gitbook/assets/image%20%2812%29.png)

RudderStack has a **merge API** which takes two different identities and connects them. For example, Stripe is integrated for payments and you would want to merge Alice's Stripe identifier with your internal identifier.

{% hint style="success" %}
Check out [our blog](https://rudderstack.com/blog/identity-graph-and-identity-resolution-in-sql/) which talks about the internal algorithm used to merge user identities.
{% endhint %}

This gives you the flexibility to run your own algorithms or machine learning models internally and send the final identity merge events to RudderStack.

![](../.gitbook/assets/image%20%2887%29.png)

RudderStack then applies the identity merges on all events and generates a table that includes the identity mappings of all users. A `rudder_id` is the unique identifier for all merged identities.

The following `rudder_identity_mappings` table is an example of how the identity mappings look like in Alice's user journey:

![](../.gitbook/assets/image%20%2864%29.png)

## Querying with Identities

The following SQL queries use the `rudder_identity_mappings` table to generate the results using identity resolution:

```sql
-- get all tracks of user u1 --

WITH user_id_to_rudder_id_to_anonymous_id_mapping AS (
  SELECT
    DISTINCT(merge_property_value)
  FROM
    rudder_identity_mappings
  WHERE
    rudder_identity_mappings.merge_property_type = 'anonymous_id'
    AND rudder_identity_mappings.rudder_id IN (
      SELECT
        rudder_identity_mappings.rudder_id
      FROM
        rudder_identity_mappings
      WHERE
        rudder_identity_mappings.merge_property_type = 'user_id'
        AND rudder_identity_mappings.merge_property_value = 'u1'
    )
)
SELECT
  *
FROM
  tracks
WHERE
  tracks.anonymous_id IN (
    SELECT
      *
    FROM
      user_id_to_rudder_id_to_anonymous_id_mapping
  )

-- get all users with an added_to_cart event in last 7 days ---

WITH anonymous_id_to_rudder_id_to_user_id_mapping AS (
  SELECT
    DISTINCT(merge_property_value)
  FROM
    rudder_identity_mappings
  WHERE
    merge_property_type = 'user_id'
    AND rudder_id in (
      (
        SELECT
          DISTINCT(rudder_id)
        FROM
          rudder_identity_mappings
        WHERE
          merge_property_type = 'anonymous_id'
          AND merge_property_value IN (
            SELECT
              DISTINCT(anonymous_id)
            FROM
              added_to_cart
						WHERE
							DATE(timestamp) > DATEADD(day, -7, getdate())
          )
      )
    )
)
SELECT
  *
FROM
  users
WHERE
  id IN (
    SELECT
      *
    FROM
      anonymous_id_to_rudder_id_to_user_id_mapping
  )
```

## Contact Us

For more information on identity mapping and how we have implemented it at RudderStack, feel free to [contact us](mailto:%20docs@rudderstack.com). You can also contact us on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you!

