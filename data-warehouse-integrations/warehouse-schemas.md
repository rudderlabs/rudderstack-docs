---
description: >-
  Detailed technical description of the tables created for various sources
  connected to the warehouse
---

# Warehouse Schemas

With RudderStack, you need not define a schema for your event data before sending it from your source device. RudderStack automatically does that for you, before dumping the data into the warehouse.

This document covers the structure of this warehouse schema in detail, and the columns created in different tables based on different events.

## Schema

The source name \(written in snake case, e.g. `source_name`\) is used by RudderStack to create a schema in the warehouse \(called dataset in case of BigQuery\).

Below is a comprehensive list of tables that are created for each RudderStack source which is connected to the warehouse:

| Table | Description |
| :--- | :--- |
| `<test_source_name>.tracks` | Every `track` call sent to RudderStack is stored here.   This table **does not include** the custom properties sent under the properties key in the event, but has some standard properties \(listed in the [Standard Properties](https://docs.rudderstack.com/data-warehouse-integration-guides/warehouse-schemas#standard-rudderstack-properties) section below\) such as `received_at`, `anonymous_id`, `context_device_info`, etc. |
| `<test_source_name>.<track_event_name>` | All the standard properties along with the custom properties for a `track` call are store in this table.  The table name is the event name specified in the track call, for example: `Added to Cart` |
| `<test_source_name>.identifies` | Every `identify` call sent to RudderStack is stored here.   This also includes all the properties passed as traits in the `identify` call. |
| `<test_source_name>.users` | All the unique users are stored in this table.   Only the latest properties used to `identify` a user are stored here, including the latest `anonymousId` |
| `<test_source_name>.pages` | Every `page` call sent to RudderStack is stored here.   This will include all the properties sent in the `page` event. |
| `<test_source_name>.screens` | Every `screen` call sent to RudderStack is stored here.   This will include all the properties sent in the `screen` event. |
| `<test_source_name>.groups` | Every `group` call sent to RudderStack is stored here.   This will include all the properties sent in the `group` event. |
| `<test_source_name>.aliases` | Every `alias` call sent to RudderStack is stored here.   This will include all the properties sent in the `alias` event. |

{% hint style="info" %}
All the properties in the event are stored as top level columns in the corresponding table. Nested properties will be prefixed with the parent key. For example, an event with properties such as`{product: {name: iPhone, version: 11}` will result in columns `product_name` and `product_version).`
{% endhint %}

## Standard RudderStack Properties

Below are the list of the standard properties set on all the tables mentioned above:

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
      <td style="text-align:left">Anonymous ID of the user</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>context_&lt;prop&gt;</code>
      </td>
      <td style="text-align:left">Context properties set in the event</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>id</code>
      </td>
      <td style="text-align:left">
        <p>Unique message ID of the event, except for the <code>users</code> table.</p>
        <p>The field will be the user ID in case of <code>users</code> table.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>sent_at</code>
      </td>
      <td style="text-align:left">Timestamp set by the RudderStack SDK when the event call was sent</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>received_at</code>
      </td>
      <td style="text-align:left">Timestamp registered by RudderStack at the time of event ingestion</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>timestamp</code>
      </td>
      <td style="text-align:left">Calculated by RudderStack to account for the client clock skew. The formula
        used: <code>timestamp</code> = <code>receivedAt</code> - (<code>sentAt</code> - <code>originalTimestamp</code>)</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>original_timestamp</code>
      </td>
      <td style="text-align:left">Timestamp registered by RudderStack SDK when call was invoked</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>event_text</code>
      </td>
      <td style="text-align:left">Name of the event mapped from <code>event</code> key in the payload for
        track events</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>event</code>
      </td>
      <td style="text-align:left">The name of the event table for track calls</td>
    </tr>
  </tbody>
</table>

{% hint style="danger" %}
The common properties are reserved by RudderStack and in any scenario of conflict, the properties set by the user are automatically discarded.
{% endhint %}

## Table Schemas

The following are the major table schemas:

### Track

Every `track` call made results in one record each in `tracks` and `<event_name>` tables. Shown below is the schema created in the tables for an `Add to Cart` track call made from JavaScript SDK.

**Sample Event:**

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

#### **Table: `tracks`**

| Column | Data type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | String | `E.g. 4d5a7681-e596-40ea-a81c-bf69f9b297f1` | Unique `messageId` generated by RudderStack |
| `anonymous_id` | String | `E.g. 59b703e3-467a-4a1d-9fe6-da27ed319619` | - |
| `received_at` | Timestamp | `E.g. 2020-04-26 07:00:45.558` | - |
| `sent_at` | Timestamp | `E.g. 2020-04-26 07:00:45.124` | - |
| `original_timestamp` | Timestamp | `E.g. 2020-04-26 07:00:43.400` | - |
| `timestamp` | Timestamp | `E.g. 2020-04-26 07:00:44.834` | - |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | String, Int | `E.g. context_app_version: 1.2.3, context_screen_density: 2` | - |
| `event` | String | `add_to_cart` | The name of the corresponding event table |
| `event_text` | String | `Add to Cart` | The name of the event |
| `uuid_ts` | Timestamp | `E.g. 2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

#### **Table: `add_to_cart`**

| Column | Data type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | String | `E.g. 4d5a7681-e596-40ea-a81c-bf69f9b297f1` | Unique `messageId`generated by RudderStack |
| `anonymous_id` | String | `E.g. 59b703e3-467a-4a1d-9fe6-da27ed319619` | - |
| `received_at` | Timestamp | `E.g. 2020-04-26 07:00:45.558` | - |
| `sent_at` | Timestamp | `E.g. 2020-04-26 07:00:45.124` | - |
| `original_timestamp` | Timestamp | `E.g. 2020-04-26 07:00:43.400` | - |
| `timestamp` | Timestamp | `E.g. 2020-04-26 07:00:44.834` | - |
| `context_ip` | String | `0.0.0.0` | - |
| `context_<prop>` | String, Int | `E.g. context_app_version: 1.2.3, context_screen_density: 2` | - |
| `event` | String | `add_to_cart` | The name of the event table |
| `event_text` | String | `Add to Cart` | The name of the event |
| `price` | Int | `5` | - |
| `currency` | String | `USD` | - |
| `product_id` | String | `P12345` | - |
| `product_name` | String | `N95 Mask` | - |
| `uuid_ts` | Timestamp | `E.g. 2020-04-26 07:31:54:735` | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

{% hint style="info" %}
Event table `add_to_cart` has all the columns as `tracks` table in addition to the keys set by user inside the key `properties.`
{% endhint %}

### Identify

Every `identify` call made results in one record in `identifies` table and upsert record in `users` table based on `user_id`. Shown below is the schema created in the tables for an identify call made from JavaScript SDK.

**Sample Event:**

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

#### **Table: `identifies`**

| Column | Data type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | string | eg. 4d5a7681-e596-40ea-a81c-bf69f9b297f1 | Unique `messageId` generated by RudderStack |
| `user_id` | string | U-12345 | The ID of the user in the identify call |
| `anonymous_id` | string | 59b703e3-467a-4a1d-9fe6-da27ed319619 |  |
| `received_at` | timestamp | eg. 2020-04-26 07:00:45.558 |  |
| `sent_at` | timestamp | eg. 2020-04-26 07:00:45.124 |  |
| `original_timestamp` | timestamp | eg. 2020-04-26 07:00:43.400 |  |
| `timestamp` | timestamp | eg. 2020-04-26 07:00:44.834 |  |
| `context_ip` | string | 0.0.0.0 |  |
| `context_<prop>` | eg. string, int | eg. context\_app\_version: 1.2.3, context\_screen\_density: 2 |  |
| `email` | string | john@rudderstack.com |  |
| `first_name` | string | John |  |
| `last_name` | string | Doe |  |
| `age` | int | 35 |  |
| `uuid_ts` | timestamp | eg. 2020-04-26 07:31:54:735 | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

#### **Table: `users`**

| Column | Data type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | string | U-12345 | The unique ID of the user |
| `received_at` | timestamp | eg. 2020-04-26 07:00:45.558 |  |
| `context_ip` | string | 0.0.0.0 |  |
| `context_<prop>` | eg. string, int | eg. context\_app\_version: 1.2.3, context\_screen\_density: 2 |  |
| `email` | string | john@rudderstack.com |  |
| `first_name` | string | John |  |
| `last_name` | string | Doe |  |
| `age` | int | 35 |  |
| `uuid_ts` | timestamp | eg. 2020-04-26 07:31:54:735 | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

{% hint style="info" %}
`users` table has the properties from the latest `identify` call made for an user. It only has the `id` column \(same as `user_id` in `identifies` table\) and does not have `anonymous_id` column. To get at a user’s anonymous\_id's, you’ll need to query the identifies table by grouping on `user_id` column.
{% endhint %}

### Page & Screen

Every `page/screen` call made results in a record in `pages/screens` table.

#### Sample Event:

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

#### **Table: `pages/screens`**

| Column | Data type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | string | eg. 4d5a7681-e596-40ea-a81c-bf69f9b297f1 |  |
| `anonymous_id` | string | 59b703e3-467a-4a1d-9fe6-da27ed319619 |  |
| `received_at` | timestamp | eg. 2020-04-26 07:00:45.558 |  |
| `sent_at` | timestamp | eg. 2020-04-26 07:00:45.124 |  |
| `original_timestamp` | timestamp | eg. 2020-04-26 07:00:43.400 |  |
| `timestamp` | timestamp | eg. 2020-04-26 07:00:44.834 |  |
| `context_ip` | string | 0.0.0.0 |  |
| `context_<prop>` | eg. string, int | eg. context\_app\_version: 1.2.3, context\_screen\_density: 2 |  |
| `name` | string | Cart Viewed | The name of the page |
| `category` | string | Cart | The category of the page |
| `path` | string | /cart |  |
| `title` | string | Shopping Cart |  |
| `url` | string | [https://rudderstack.com](https://rudderstack.com) |  |
| `uuid_ts` | timestamp | eg. 2020-04-26 07:31:54:735 | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

### Group

Every `group` call made results in a record in `groups` table.

#### Sample Event:

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

#### **Table: `groups`**

| Column | Data type | Value | Note |
| :--- | :--- | :--- | :--- |
| `id` | string | eg. 4d5a7681-e596-40ea-a81c-bf69f9b297f1 | The Group ID associated with the current user |
| `anonymous_id` | string | 59b703e3-467a-4a1d-9fe6-da27ed319619 |  |
| `group_id` | string | DevOps |  |
| `received_at` | timestamp | eg. 2020-04-26 07:00:45.558 |  |
| `sent_at` | timestamp | eg. 2020-04-26 07:00:45.124 |  |
| `original_timestamp` | timestamp | eg. 2020-04-26 07:00:43.400 |  |
| `timestamp` | timestamp | eg. 2020-04-26 07:00:44.834 |  |
| `context_ip` | string | 0.0.0.0 |  |
| `context_<prop>` | eg. string, int | eg. context\_app\_version: 1.2.3, context\_screen\_density: 2 |  |
| `uuid_ts` | timestamp | eg. 2020-04-26 07:31:54:735 | Added by RudderStack for debugging purposes. Can be ignored for analytics purposes |

## Accepted Timestamp Formats

A subset of the ISO 8601 timestamp formats are recognized as timestamp. Anything else is not recognized as timestamp. Listed below are the accepted timestamp formats.

* `2019-09-26`
* `2009-05-19 14:39:22`
* `2019-09-26T06:30:12.984Z`
* `2020-02-11 04:56:55.175116`
* `2019-09-26T06:30:12.984+0530`
* `2019-09-26T06:30:12.984+05:30`

## Reserved Keywords

There are some limitations when it comes to using reserved words in a schema, table, or column names. If such words are used in event names, traits or properties, they will be prefixed with a `_`when RudderStack creates tables or columns for them in your schema.

Besides, integers are not allowed at the start of the schema or table name. Hence, such schema, column or table names will be prefixed with a `_`.

For instance, `'25dollarpurchase`' will be changed to `'_25dollarpurchase`'.

More details about the list of reserved keywords can be found in the warehouse specific docs.

| Warehouse | Reference |
| :--- | :--- |
| Amazon Redshift | [\[link\]](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) |
| Google BigQuery | [\[link\]](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#reserved-keywords) |
| Snowflake | [\[link\]](https://docs.snowflake.net/manuals/sql-reference/reserved-keywords.html) |

## Data Type Mismatch Handling

A column in a table once recognized and set as a specific data type by RudderStack will not accept values that cannot be cast to the original data type. Such values which could not be cast are set as `NULL` in the table, and stored in the `rudder_discards` table.

**Schema of the `rudder_discards` table:**

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
        <p>Unique identifier (ID) associated with each record in the tables</p>
        <p>This will correspond to unique messageId for all the table except for
          users table where it is the unique user ID</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>table_name</code>
      </td>
      <td style="text-align:left">Table name where the full record is inserted. Eg. <code>tracks</code>, <code>add_to_cart</code>, <code>identifies</code> etc.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>column_name</code>
      </td>
      <td style="text-align:left">Column name corresponding to the property to be added</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>column_value</code>
      </td>
      <td style="text-align:left">Column value which caused the data type mismatch and is discarded</td>
    </tr>
  </tbody>
</table>

The `row_id` is the column which users can use to join with original table and update it as required. It is set to `messageId` for all tables except `users` table where it corresponds to `userId`

Below is an example event whose properties are discarded due to mismatch in data types with the previous events.

```javascript
// intial track call using JavaScript SDK
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


// subsequent track call using JavaScript SDK
rudderanalytics.track(
  "Add to Cart",
  {
    price:  "NA", // sent as string in latest event
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

Records created in `rudder_discards` table for the discarded properties from the second event listed above:

| row\_id | table\_name | column\_name | column\_value |
| :--- | :--- | :--- | :--- |
| a21620be-6502-44d6-941d-78209a386d58 | `add_to_cart` | `price` | `NA` |
| 1e42b2b3-8b6a-49da-8502-83a8db334375 | `add_to_cart` | `added_at` | 05/25/2020 |

## Contact Us

For any issues or queries that you might come across, please feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

