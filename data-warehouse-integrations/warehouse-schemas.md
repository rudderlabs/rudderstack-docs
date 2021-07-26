---
description: >-
  Detailed technical description of the various tables created when sending
  events to the data warehouse.
---

# Warehouse Schemas

When sending your events to a data warehouse via RudderStack, you don't need to define a schema for the event data before sending it from your source. Instead, RudderStack automatically does that for you by following a predefined warehouse schema.

This guide details the structure of this warehouse schema and the columns created in different tables based on different events.

## Schema

RudderStack uses the source name \(**written in snake case**, for example, `source_name`\) to create a schema in your data warehouse \(also called a dataset, in the case of Google BigQuery\).

The following is a list of tables created for each RudderStack source that is connected to the warehouse:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Table Name</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.tracks</code>
      </td>
      <td style="text-align:left">Every <code>track</code> call sent to RudderStack is stored in this table.
        <br
        />
        <br />It <b>does not include</b> the custom properties sent under the <code>properties</code> key
        in the event but has some standard properties (listed in the <a href="https://docs.rudderstack.com/data-warehouse-integration-guides/warehouse-schemas#standard-rudderstack-properties"><b>Standard Properties</b></a> section
        below) such as <code>received_at</code>, <code>anonymous_id</code>, <code>context_device_info</code>,
        etc.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.&lt;track_event_name&gt;</code>
      </td>
      <td style="text-align:left">All the standard properties, along with the custom properties for a <code>track</code> call,
        are stored in this table.
        <br />
        <br />The table name is the event name specified in the <code>track</code> call.
        For example: <code>Added to Cart</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.identifies</code>
      </td>
      <td style="text-align:left">
        <p>Every <code>identify</code> call sent to RudderStack is stored in this table.</p>
        <p></p>
        <p>It also includes all the properties passed as <code>traits</code> in the <code>identify</code> call.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.users</code>
      </td>
      <td style="text-align:left">RudderStack stores all the unique users in this table.
        <br />
        <br />Only the latest properties used to identify a user are stored in it, including
        the latest <code>anonymousId</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.pages</code>
      </td>
      <td style="text-align:left">Every <code>page</code> call sent to RudderStack is stored in this table.
        <br
        />
        <br />This includes all the <code>properties</code> sent in the <code>page</code> event.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.screens</code>
      </td>
      <td style="text-align:left">Every <code>screen</code> call sent to RudderStack is stored in this table.
        <br
        />
        <br />This includes all the <code>properties</code> sent in the <code>screen</code> event.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.groups</code>
      </td>
      <td style="text-align:left">Every <code>group</code> call sent to RudderStack is stored in this table.
        <br
        />
        <br />This includes all the <code>properties</code> sent in the <code>group</code> event.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;test_source_name&gt;.aliases</code>
      </td>
      <td style="text-align:left">Every <code>alias</code> call sent to RudderStack is stored in this table.
        <br
        />
        <br />This includes all the properties sent in the <code>alias</code> event.</td>
    </tr>
  </tbody>
</table>

{% hint style="info" %}
All the properties in the event are stored as top-level columns in the corresponding table. Nested properties will be prefixed with the parent key. For example, an event with properties as shown:  
  
**`{  
  product: {  
    name: iPhone,  
    version: 11  
  }`** 

will results in the columns **`product_name`** and **`product_version`**`.`
{% endhint %}

## Standard RudderStack Properties

RudderStack sets the following standard properties on all the above mentioned tables:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Column Name</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>anonymous_id</code>
      </td>
      <td style="text-align:left">The anonymous ID of the user.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>context_&lt;prop&gt;</code>
      </td>
      <td style="text-align:left">Context properties set in the event.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>id</code>
      </td>
      <td style="text-align:left">
        <p>The unique message ID of the event, except for the <code>users</code> table.</p>
        <p></p>
        <p>The field will be the user ID in case of <code>users</code> table.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>sent_at</code>
      </td>
      <td style="text-align:left">Timestamp set by the RudderStack SDK when the event was sent from the
        client to RudderStack.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>received_at</code>
      </td>
      <td style="text-align:left">Timestamp registered by RudderStack when the event was ingested (received).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>original_timestamp</code>
      </td>
      <td style="text-align:left">Timestamp registered by the RudderStack SDK when the event call was invoked
        (event was emitted in the SDK).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>timestamp</code>
      </td>
      <td style="text-align:left">This is calculated by RudderStack to account for the client clock skew.
        The formula used is: <code>timestamp</code> = <code>receivedAt</code> - (<code>sentAt</code> - <code>originalTimestamp</code>).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>event_text</code>
      </td>
      <td style="text-align:left">Name of the event mapped from the <code>event</code> key in the payload
        for the <code>track</code> events.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>event</code>
      </td>
      <td style="text-align:left">The name of the event table for the <code>track</code> calls.</td>
    </tr>
  </tbody>
</table>

{% hint style="info" %}
RudderStack reserves the above-mentioned standard properties. In the case of any conflict, RudderStack automatically discards the properties  set by the user.
{% endhint %}

## Table Schemas

This section covers the major table schemas for different types of events.

### Track

RudderStack creates a record in both the `tracks` and `<event_name>` tables for every `track` call. 

A sample `Add to Cart` event made from the JavaScript SDK is as shown below:

```javascript
// track call using JavaScript SDK
rudderanalytics.track(
  "Add to Cart",
  {
    price:  5,
    currency:  "USD",
    product_id:  "P12345",
    product_name: "N95 Mask"
  },
  {
    context: {
      ip:  "0.0.0.0"
    },
    anonymousId:  "59b703e3-467a-4a1d-9fe6-da27ed319619",
  }
);
```

The corresponding schemas created for the `tracks` and `add_to_cart` tables is as shown:

#### **Table: `tracks`**

| Column | Type | Value | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | e.g.`4d5a7681-e596-40ea-a81c-bf69f9b297f1` | Unique `messageId` generated by RudderStack. |
| `anonymous_id` | String | e.g.`59b703e3-467a-4a1d-9fe6-da27ed319619` | The anonymous ID of the user. |
| `received_at` | Timestamp | e.g.`2020-04-26 07:00:45.558` | Timestamp registered by RudderStack when the event was ingested \(received\). |
| `sent_at` | Timestamp | e.g.`2020-04-26 07:00:45.124` | Timestamp set by the SDK when the event was sent from the client to RudderStack. |
| `original_timestamp` | Timestamp | e.g.`2020-04-26 07:00:43.400` | Timestamp registered by the SDK when the event call was invoked \(event was emitted in the SDK\). |
| `timestamp` | Timestamp | e.g.`2020-04-26 07:00:44.834` | Calculated by RudderStack to account for the client clock skew. The formula used is: `timestamp` =  `receivedAt` - \(`sentAt` - `originalTimestamp`\). |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | String, Int | e.g.`context_app_version: 1.2.3, context_screen_density: 2` | - |
| `event` | String | `add_to_cart` | The name of the corresponding event table. |
| `event_text` | String | `Add to Cart` | The name of the event. |
| `uuid_ts` | Timestamp | e.g.`2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics. |

#### **Table: `add_to_cart`**

| Column | Type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | String | e.g. `4d5a7681-e596-40ea-a81c-bf69f9b297f1` | Unique `messageId`generated by RudderStack |
| `anonymous_id` | String | e.g. `59b703e3-467a-4a1d-9fe6-da27ed319619` | - |
| `received_at` | Timestamp | e.g. `2020-04-26 07:00:45.558` | - |
| `sent_at` | Timestamp | e.g. `2020-04-26 07:00:45.124` | - |
| `original_timestamp` | Timestamp | e.g.`2020-04-26 07:00:43.400` | - |
| `timestamp` | Timestamp | e.g. `2020-04-26 07:00:44.834` | - |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | String, Int | e.g. `context_app_version: 1.2.3, context_screen_density: 2` | - |
| `event` | String | `add_to_cart` | The name of the event table |
| `event_text` | String | `Add to Cart` | The name of the event |
| `price` | Int | `5` | - |
| `currency` | String | `USD` | - |
| `product_id` | String | `P12345` | - |
| `product_name` | String | `N95 Mask` | - |
| `uuid_ts` | Timestamp | e.g. `2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

{% hint style="info" %}
The event table `add_to_cart` has all the columns as the `tracks` table. It also has the properties set by the user inside the key `properties.`
{% endhint %}

### Identify

RudderStack creates a record in the `identifies` table and upserts the records in the `users` table for every `identify` call, based on the `userId`. 

{% hint style="success" %}
In case of Google BigQuery, you can use the views created over the tables to query for unique users in the dataset. Refer to the [**BigQuery documentation**](https://docs.rudderstack.com/data-warehouse-integrations/google-bigquery#schema-partitioned-tables-and-views) ****for more details.
{% endhint %}

A sample `identify` event made from the JavaScript SDK is as shown below:

```javascript
rudderanalytics.identify(
  "U-12345",
  {
    email: "john@rudderstack.com",
    first_name: "John",
    last_name: "Doe",
    age: 35
  },
  {
    context: {
      ip: "0.0.0.0"
    },
    anonymousId: "59b703e3-467a-4a1d-9fe6-da27ed319619"
  }
);
```

The corresponding schemas created for the `identifies` and `users` tables is as shown:

#### **Table: `identifies`**

| Column | Type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | String | e.g. `4d5a7681-e596-40ea-a81c-bf69f9b297f1` | Unique `messageId` generated by RudderStack. |
| `user_id` | String | `U-12345` | The `userId` in the `identify` call. |
| `anonymous_id` | String | `59b703e3-467a-4a1d-9fe6-da27ed319619` | - |
| `received_at` | Timestamp | e.g. `2020-04-26 07:00:45.558` | - |
| `sent_at` | Timestamp | e.g. `2020-04-26 07:00:45.124` | - |
| `original_timestamp` | Timestamp | e.g. `2020-04-26 07:00:43.400` | - |
| `timestamp` | Timestamp | e.g. `2020-04-26 07:00:44.834` | - |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | String, Int | e.g. `context_app_version: 1.2.3`, `context_screen_density: 2` | - |
| `email` | String | `john@rudderstack.com` | - |
| `first_name` | String | `John` | - |
| `last_name` | String | `Doe` | - |
| `age` | Int | `35` | - |
| `uuid_ts` | Timestamp | e.g. `2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics. |

#### **Table: `users`**

| Column | Type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | String | `U-12345` | The unique user ID. |
| `received_at` | Timestamp | e.g. `2020-04-26 07:00:45.558` | - |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | e.g. String, Int | e.g. `context_app_version: 1.2.3`, `context_screen_density: 2` | - |
| `email` | String | `john@rudderstack.com` | - |
| `first_name` | String | `John` | - |
| `last_name` | String | `Doe` | - |
| `age` | Int | `35` | - |
| `uuid_ts` | Timestamp | e.g. `2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

{% hint style="info" %}
The `users` table has the properties from the latest `identify` call made for an user.  It only has the `id` column \(same as `user_id` in `identifies` table\)  and does not have the `anonymous_id` column. 
{% endhint %}

{% hint style="success" %}
To get at a user’s `anonymous_id`, you can query the `identifies` table by grouping on the `user_id` column.
{% endhint %}

### Page & Screen

RudderStack creates a record in the `pages` or `screen` table for every `page`/`screen` call.

A sample `page` event is as shown below:

```javascript
rudderanalytics.page(
  "Cart",
  "Cart Viewed",
  {
    path:  "/cart",
    title:  "Shopping Cart",
    url:  "https://rudderstack.com"
  },
  {
    context: {
      ip:  "0.0.0.0"
    },
    anonymousId:  "59b703e3-467a-4a1d-9fe6-da27ed319619"
  }
);
```

The corresponding schema created for the `pages` table is as shown:

#### **Table: `pages/screens`**

| Column | Type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | String | e.g. `4d5a7681-e596-40ea-a81c-bf69f9b297f1` | - |
| `anonymous_id` | String | `59b703e3-467a-4a1d-9fe6-da27ed319619` | - |
| `received_at` | Timestamp | e.g. `2020-04-26 07:00:45.558` | - |
| `sent_at` | Timestamp | e.g. `2020-04-26 07:00:45.124` | - |
| `original_timestamp` | Timestamp | e.g. `2020-04-26 07:00:43.400` | - |
| `timestamp` | Timestamp | e.g. `2020-04-26 07:00:44.834` | - |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | e.g. String, Int | e.g. `context_app_version: 1.2.3`, `context_screen_density: 2` | - |
| `name` | String | `Cart Viewed` | The page name. |
| `category` | String | `Cart` | The page category. |
| `path` | String | `/cart` | - |
| `title` | String | `Shopping Cart` | - |
| `url` | String | [`https://rudderstack.com`](https://rudderstack.com)\`\` | - |
| `uuid_ts` | Timestamp | eg. `2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics. |

### Group

RudderStack creates a record in the `groups` table for every `group` call.

A sample `group` call is as shown below:

```javascript
rudderanalytics.group(
  "DevOps",
  {
    email: "john@rudderstack.com",
    first_name: "John",
    last_name: "Doe",
    age: 35
  },
  {
    context: {
      ip: "0.0.0.0"
    },
    anonymousId: "59b703e3-467a-4a1d-9fe6-da27ed319619"
  }
);
```

The corresponding schemas created for the `groups` table is as shown:

#### **Table: `groups`**

| Column | Type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | String | e.g. `4d5a7681-e596-40ea-a81c-bf69f9b297f1` | The group ID associated with the current user. |
| `anonymous_id` | String | `59b703e3-467a-4a1d-9fe6-da27ed319619` | - |
| `group_id` | String | `DevOps` | - |
| `received_at` | Timestamp | e.g. `2020-04-26 07:00:45.558` | - |
| `sent_at` | Timestamp | e.g. `2020-04-26 07:00:45.124` | - |
| `original_timestamp` | Timestamp | e.g. `2020-04-26 07:00:43.400` | - |
| `timestamp` | Timestamp | e.g. `2020-04-26 07:00:44.834` | - |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | e.g. String, Int | e.g. `context_app_version: 1.2.3`, `context_screen_density: 2` | - |
| `uuid_ts` | Timestamp | e.g. `2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics. |

## Accepted Timestamp Formats

RudderStack only recognizes a subset of the ISO 8601 timestamp formats as a timestamp. Listed below are the accepted timestamp formats:

* `2019-09-26`
* `2009-05-19 14:39:22`
* `2019-09-26T06:30:12.984Z`
* `2020-02-11 04:56:55.175116`
* `2019-09-26T06:30:12.984+0530`
* `2019-09-26T06:30:12.984+05:30`

{% hint style="warning" %}
RudderStack **does not recognize** any other timestamp format apart from the formats mentioned above.
{% endhint %}

## Reserved Keywords

Note that there are some limitations when it comes to using the reserved words in a schema, table, or column names. If these words are used in the event names, traits or properties, RudderStack automatically prefixes a `_` when creating tables or columns for them in your schema.

Also, note that integers are not allowed at the start of the schema or table name. Such schema, column, or table names will be prefixed with a `_`. For instance, `25dollarpurchase` will be changed to `_25dollarpurchase`.

Find more details about the list of reserved keywords in the following warehouse-specific docs.

| Warehouse | Reference |
| :--- | :--- |
| Amazon Redshift | [**Link**](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html)\*\*\*\* |
| Google BigQuery | [**Link**](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#reserved-keywords)\*\*\*\* |
| Snowflake | \*\*\*\*[**Link**](https://docs.snowflake.net/manuals/sql-reference/reserved-keywords.html)\*\*\*\* |

## How RudderStack Handles Data Type Mismatch

Once RudderStack recognizes and sets a data type for a table column, it will not accept any values for the column that cannot be cast to the specified data type.

{% hint style="warning" %}
The values which cannot be cast are set as `NULL` in the table and stored in the `rudder_discards` table.
{% endhint %}

The schema of the `rudder_discards table` is as shown below:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Column</th>
      <th style="text-align:left">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>row_id</code>
      </td>
      <td style="text-align:left">
        <p>Unique Identifier (ID) associated with each record in the table.</p>
        <p>This corresponds to the unique <code>messageId</code> for all the tables
          except for <code>users</code> table, where it is <code>userId</code>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>table_name</code>
      </td>
      <td style="text-align:left">The table name where the full record is inserted, like <code>tracks</code>, <code>add_to_cart</code>, <code>identifies</code> ,
        etc.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>column_name</code>
      </td>
      <td style="text-align:left">The column name corresponding to the property to be added.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>column_value</code>
      </td>
      <td style="text-align:left">The column value which caused the data type mismatch and is discarded.</td>
    </tr>
  </tbody>
</table>

{% hint style="info" %}
The `row_id` is the column which users can use to join with original table and update it as required. It is set to `messageId` for all tables except the `users` table, where it corresponds to `userId`.
{% endhint %}

Shown below is a sample event whose properties are discarded due to a mismatch in the data type of the previous events: 

```javascript
// intial track call using the RudderStack JavaScript SDK
rudderanalytics.track(
  "Add to Cart",
  {
    price:  5, // originally a int value
    currency:  "USD",
    product_id:  "P12345",
    product_name: "N95 Mask",
    added_at: "2020-05-19 14:39:22" // originally a datetime value
  },
  {
    context: {
      ip:  "0.0.0.0"
    },
    anonymousId:  "59b703e3-467a-4a1d-9fe6-da27ed319619",
  }
);


// subsequent track call using the RudderStack JavaScript SDK
rudderanalytics.track(
  "Add to Cart",
  {
    price:  "NA", // sent as a string in latest event
    currency:  "USD",
    product_id:  789, // sent as int but can be casted into original string data type
    product_name: "N95 Mask",
    added_at: "05/25/2020" // sent as invalid datetime value
  },
  {
    context: {
      ip:  "0.0.0.0"
    },
    anonymousId:  "59b703e3-467a-4a1d-9fe6-da27ed319619",
  }
);
```

The subsequent records created in the `rudder_discards` table for the discarded properties from the second event listed in the example above are as shown:

| Row ID | Table Name | Column Name | Column Value |
| :--- | :--- | :--- | :--- |
| `a21620be-6502-44d6-941d-78209a386d58` | `add_to_cart` | `price` | `NA` |
| `1e42b2b3-8b6a-49da-8502-83a8db334375` | `add_to_cart` | `added_at` | `05/25/2020` |

## FAQs



## Contact Us

For any queries on any of the sections covered in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

