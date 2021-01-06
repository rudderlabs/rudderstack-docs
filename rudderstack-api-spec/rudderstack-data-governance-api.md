---
description: >-
  Detailed technical documentation of the RudderStack Data Governance API calls
  and properties of the returned objects.
---

# RudderStack Data Governance API

The RudderStack Data Governance API gives you full access to all your events' metadata. This includes information such as the schema of the event payload, data types, versions of event payload, etc.

This documentation describes all of the available calls in the Data Governance API, as well as the properties of the returned objects as a result.

## Getting Started - Obtaining the Credentials

You can start your RudderStack backend \(data plane\) with the environment variables `RUDDER_ADMIN_USER` and `RUDDER_ADMIN_PASSWORD` . If you are using the RudderStack-managed hosting service, [contact us](mailto:%20docs@rudderstack.com) for the necessary credentials.

Anyone with these credentials can use the same Data Governance API. In case it is compromised, please restart your data plane with different credentials.

### API Authentication

You will need to use HTTP Basic Authentication for authenticating the APIs.

{% hint style="info" %}
You can send the API calls using CURL/HTTPie from the command line, or with any programming language of your choice.
{% endhint %}

### Understanding API responses

All successful requests will respond with a 200 HTTP status code. If the authentication fails, you will get a 400 HTTP status code with the appropriate error message.

## API Reference

Please note that the base URL for all the API requests will be your RudderStack data plane URL.

### schemas/event-models

| **Description** | **Arguments** | **Supported Method Types** |
| :--- | :--- | :--- |
| Gets the event models for your data plane | None required. **\*\*You may** optionally **add** `writeKey`\*\* as a query parameter to get event-models for only one source | `GET` |

#### **Example Request**

To get all event models for your data plane, run the following command:

```text
curl -u <RUDDER_ADMIN_USER>:<RUDDER_ADMIN_PASSWORD> https://<DATA_PLANE_URL>/schemas/event-models
```

**Example Response**

```text
[
    {
        "ID": 40,
        "EventID": "1b02d5ec-83b9-405e-ba86-7693d0a2b52b",
        "WriteKey": "1Xbp2IIhsZcwqENLgSEJusU70GH",
        "EventType": "track",
        "EventIdentifier": "Product Purchased",
        "CreatedAt": "2020-12-07T22:10:13.945156Z",
        "Schema": {
            "type": "string",
            "event": "string",
            "sentAt": "string",
            "userId": "string",
            "rudderId": "string",
            "messageId": "string",
            "timestamp": "string",
            "context.ip": "string",
            "anonymousId": "string",
            "properties.name": "string",
            "originalTimestamp": "string",
            "properties.revenue": "float64",
            "context.library.name": "string"
        },
        "LastSeen": "2020-12-07T22:10:09.247534Z",
        "TotalCount": 5
    },
    {
        "ID": 41,
        "EventID": "96f10d53-3a94-47a2-95e7-6cca99daed1e",
        "WriteKey": "1cUFbgdRJj8LYpA6zGV3O5dGpAq",
        "EventType": "page",
        "EventIdentifier": "Product Viewed",
        "CreatedAt": "2020-12-06T20:17:43.945156Z",
        "Schema": {
            "type": "string",
            "name": "string",
            "sentAt": "string",
            "userId": "string",
            "rudderId": "string",
            "messageId": "string",
            "timestamp": "string",
            "context.ip": "string",
            "anonymousId": "string",
            "properties.name": "string",
            "originalTimestamp": "string",
            "context.library.name": "string"
        },
        "LastSeen": "2020-12-07T22:10:09.247534Z",
        "TotalCount": 20
    }

]
```

#### Getting All Event Models for a Specific Source

To get all event models for a specific source, pass the write key as a query parameter, as shown:

```text
curl -u <RUDDER_ADMIN_USER>:<RUDDER_ADMIN_PASSWORD> https://<DATA_PLANE_URL>/schemas/event-models?writeKey=1Xbp2IIhsZcwqENLgSEJusU70GH
```

**Example Response**

```text
[
    {
        "ID": 40,
        "EventID": "1b02d5ec-83b9-405e-ba86-7693d0a2b52b",
        "WriteKey": "1Xbp2IIhsZcwqENLgSEJusU70GH",
        "EventType": "track",
        "EventIdentifier": "Product Purchased",
        "CreatedAt": "2020-12-07T22:10:13.945156Z",
        "Schema": {
            "type": "string",
            "event": "string",
            "sentAt": "string",
            "userId": "string",
            "rudderId": "string",
            "messageId": "string",
            "timestamp": "string",
            "context.ip": "string",
            "anonymousId": "string",
            "properties.name": "string",
            "originalTimestamp": "string",
            "properties.revenue": "float64",
            "context.library.name": "string"
        },
        "LastSeen": "2020-12-07T22:10:09.247534Z",
        "TotalCount": 5
    }
]
```

### schemas/event-versions

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Description</b>
      </th>
      <th style="text-align:left"><b>Arguments</b>
      </th>
      <th style="text-align:left"><b>Supported Method Types</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Gets the schema versions for an event type.</td>
      <td style="text-align:left">
        <p><b><code>EventID</code></b> is a <b>mandatory</b> query parameter to get
          the schema
          <br />versions for an event model. This is obtained from the above API</p>
        <p>(<b>event-models</b>).</p>
      </td>
      <td style="text-align:left"><code>GET</code>
      </td>
    </tr>
  </tbody>
</table>

**Example Request**

To get the schema versions for your event type, run the following command:

```text
curl -u <RUDDER_ADMIN_USER>:<RUDDER_ADMIN_PASSWORD> https://<DATA_PLANE_URL>/schemas/event-versions?EventID=1b02d5ec-83b9-405e-ba86-7693d0a2b52b
```

**Example Response**

```text
[
    {
        "ID": 39,
        "VersionID": "9e9e6da4-24b7-4cf9-a194-8acb040d7422",
        "EventModelID": "1b02d5ec-83b9-405e-ba86-7693d0a2b52b",
        "Schema": {
            "type": "string",
            "event": "string",
            "sentAt": "string",
            "userId": "string",
            "rudderId": "string",
            "messageId": "string",
            "context.ip": "string",
            "anonymousId": "string",
            "properties.name": "string",
            "originalTimestamp": "string",
            "properties.revenue": "float64",
            "context.library.name": "string"
        },
        "FirstSeen": "2020-12-07T22:00:38.437051Z",
        "LastSeen": "2020-12-07T22:08:04.036091Z",
        "TotalCount": 4
    },
    {
        "ID": 40,
        "VersionID": "b39800d9-55d5-4163-b859-1bca04c4003b",
        "EventModelID": "1b02d5ec-83b9-405e-ba86-7693d0a2b52b",
        "Schema": {
            "type": "string",
            "event": "string",
            "userId": "string",
            "rudderId": "string",
            "messageId": "string",
            "timestamp": "string",
            "context.ip": "string",
            "anonymousId": "string",
            "properties.name": "string",
            "properties.revenue": "float64",
            "context.library.name": "string"
        },
        "FirstSeen": "2020-12-07T22:10:09.247629Z",
        "LastSeen": "2020-12-07T22:10:09.247698Z",
        "TotalCount": 1
    }
]
```

### schemas/event-model/{EventID}/metadata

| **Description** | **Arguments** | **Supported Method Types** |
| :--- | :--- | :--- |
| Gets the metadata for an event-model | **`EventID`**is a mandatory url parameter to get metadata for an event-model. This is obtained from the above API. | `GET` |

The metadata of given event-model comes with three information points:

* **`SampledEvents`**: This includes the sample events that belong to the given event-model
* **`TotalCount`**: Represents the number of events collected for the event-model
* **`FrequentValues`**: This is a list of all values that frequently appear for each key in the master-schema along with their frequencies. By default, we consider any value that is seen once every hundred samples as a frequent value

**Example Request**

To get metadata for your event-model, run the following command:

```text
curl -u <RUDDER_ADMIN_USER>:<RUDDER_ADMIN_PASSWORD> https://<DATA_PLANE_URL>/schemas/event-model/96f10d53-3a94-47a2-95e7-6cca99daed1e/metadata
```

**Example Response**

```text
{
    "SampledEvents": [
        {
            "anonymousId": "1hg89d6hvskmygt83nst",
            "context": {
                "ip": "1.2.3.4",
                "library": {
                    "name": "http"
                }
            },
            "event": "Product Purchased",
            "messageId": "messageID",
            "originalTimestamp": "2020-02-02T00:23:09.544Z",
            "properties": {
                "name": "Shirt",
                "revenue": 14.99
            },
            "rudderId": "d2c78239-ffb7-46b9-9bf9-e995465873b1",
            "sentAt": "2020-02-02T00:23:09.544Z",
            "type": "track",
            "userId": "user12345"
        },
        {
            "anonymousId": "1hg89d6hvskmygt83nst",
            "context": {
                "ip": "1.2.3.4",
                "library": {
                    "name": "http"
                }
            },
            "event": "Product Purchased",
            "messageId": "messageID",
            "properties": {
                "name": "Shirt",
                "revenue": 14.99
            },
            "rudderId": "d2c78239-ffb7-46b9-9bf9-e995465873b1",
            "timestamp": "2020-02-02T00:23:09.544Z",
            "type": "track",
            "userId": "user12345"
        }
    ],
    "TotalCount": 5,
    "FrequentValues": {
        "anonymousId": [
            {
                "Value": "1hg89d6hvskmygt83nst",
                "Frequency": 1
            }
        ],
        "context.ip": [
            {
                "Value": "1.2.3.4",
                "Frequency": 1
            }
        ],
        "context.library.name": [
            {
                "Value": "http",
                "Frequency": 1
            }
        ],
        "event": [
            {
                "Value": "Product Purchased",
                "Frequency": 1
            }
        ],
        "messageId": [
            {
                "Value": "messageID",
                "Frequency": 1
            }
        ],
        "originalTimestamp": [
            {
                "Value": "2020-02-02T00:23:09.544Z",
                "Frequency": 1
            }
        ],
        "properties.name": [
            {
                "Value": "Shirt",
                "Frequency": 1
            }
        ],
        "properties.revenue": [
            {
                "Value": "14.99",
                "Frequency": 1
            }
        ],
        "rudderId": [
            {
                "Value": "d2c78239-ffb7-46b9-9bf9-e995465873b1",
                "Frequency": 1
            }
        ],
        "sentAt": [
            {
                "Value": "2020-02-02T00:23:09.544Z",
                "Frequency": 1
            }
        ],
        "timestamp": [
            {
                "Value": "2020-02-02T00:23:09.544Z",
                "Frequency": 1
            }
        ],
        "type": [
            {
                "Value": "track",
                "Frequency": 1
            }
        ],
        "userId": [
            {
                "Value": "user12345",
                "Frequency": 1
            }
        ]
    }
}
```

### schemas/event-version/{VersionID}/metadata

| **Description** | **Arguments** | **Supported Method Types** |
| :--- | :--- | :--- |
| Gets the metadata for a schema-version | **`VersionID`**a mandatory url parameter to get metadata for a schema-version. This is obtained from the above API. | `GET` |

The metadata of given schema-version comes with three information points:

* **`SampledEvents`**: This includes the sample events that follow the given schema-version
* **`TotalCount`**: Represents the number of events collected with the given schema-version
* **`FrequentValues`**: This is a list of all values that frequently appear for each key in the schema along with their frequencies. By default, we consider any value that is seen once every hundred samples as a frequent value

**Example Request**

To get metadata for your schema-versions, run the following command:

```text
curl -u <RUDDER_ADMIN_USER>:<RUDDER_ADMIN_PASSWORD> https://<DATA_PLANE_URL>/schemas/event-version/96f10d53-3a94-47a2-95e7-6cca99daed1e/metadata
```

**Example Response**

```text
{
    "SampledEvents": [
        {
            "anonymousId": "1hg89d6hvskmygt83nst",
            "context": {
                "ip": "1.2.3.4",
                "library": {
                    "name": "http"
                }
            },
            "event": "Product Purchased",
            "messageId": "messageID",
            "originalTimestamp": "2020-02-02T00:23:09.544Z",
            "properties": {
                "name": "Shirt",
                "revenue": 14.99
            },
            "rudderId": "d2c78239-ffb7-46b9-9bf9-e995465873b1",
            "sentAt": "2020-02-02T00:23:09.544Z",
            "type": "track",
            "userId": "user12345"
        }
    ],
    "TotalCount": 4,
    "FrequentValues": {
        "anonymousId": [
            {
                "Value": "1hg89d6hvskmygt83nst",
                "Frequency": 1
            }
        ],
        "context.ip": [
            {
                "Value": "1.2.3.4",
                "Frequency": 1
            }
        ],
        "context.library.name": [
            {
                "Value": "http",
                "Frequency": 1
            }
        ],
        "event": [
            {
                "Value": "Product Purchased",
                "Frequency": 1
            }
        ],
        "messageId": [
            {
                "Value": "messageID",
                "Frequency": 1
            }
        ],
        "originalTimestamp": [
            {
                "Value": "2020-02-02T00:23:09.544Z",
                "Frequency": 1
            }
        ],
        "properties.name": [
            {
                "Value": "Shirt",
                "Frequency": 1
            }
        ],
        "properties.revenue": [
            {
                "Value": "14.99",
                "Frequency": 1
            }
        ],
        "rudderId": [
            {
                "Value": "d2c78239-ffb7-46b9-9bf9-e995465873b1",
                "Frequency": 1
            }
        ],
        "sentAt": [
            {
                "Value": "2020-02-02T00:23:09.544Z",
                "Frequency": 1
            }
        ],
        "type": [
            {
                "Value": "track",
                "Frequency": 1
            }
        ],
        "userId": [
            {
                "Value": "user12345",
                "Frequency": 1
            }
        ]
    }
}
```

### schemas/event-model/{EventID}/key-counts

| **Description** | **Arguments** | **Supported Method Types** |
| :--- | :--- | :--- |
| Gets the key-wise counts for an event-model | `EventID` is a mandatory url parameter to get the keys count for an event-model. This is obtained from the above API. | `GET` |

**Example Request**

To get the key-wise counts for any given event-model, run the following command:

```text
curl -u <RUDDER_ADMIN_USER>:<DATA_PLANE_URL> https://<your-data-plane-url>/schemas/event-model/ad00285b-f49f-4d4f-88e0-8ec293bbd5c7/key-counts
```

**Example Response**

```text
{
  "anonymousId": 1234,
  "channel": 1372,
  "context.app.build": 607,
  "context.app.name": 607,
  "context.app.namespace": 607,
  "context.app.version": 607,
  "context.device.id": 1372,
  "context.device.manufacturer": 1372,
  "context.device.model": 1372,
  "context.device.name": 1372,
  "context.library.name": 1372,
  "context.locale": 1372,
  "context.network.carrier": 1372,
  "context.screen.density": 1372,
  "context.screen.height": 1372,
  "context.screen.width": 1372,
  "context.traits.anonymousId": 1372,
  "context.user_agent": 1372,
  "event": 1372,
  "integrations.All": 1372,
  "messageId": 1372,
  "originalTimestamp": 1372,
  "properties.category": 607,
  "properties.label": 607,
  "properties.value": 607,
  "sentAt": 1372,
  "type": 1372
}
```

### schemas/event-version/{VersionID}/missing-keys

| **Description** | **Arguments** | **Supported Method Types** |
| :--- | :--- | :--- |
| Gets the missing keys for an event-version | `VersionID` is a mandatory url parameter to get the missing keys for a schema-version. This is obtained from the above API. | `GET` |

**Example Request**

To get the missing keys for an event-version, run the following command:

```text
curl -u <RUDDER_ADMIN_USER>:<RUDDER_ADMIN_PASSWORD> https://<DATA_PLANE_URL>/schemas/ad00285b-f49f-4d4f-88e0-8ec293bbd5c7/missing-keys
```

**Example Response**

```text
[
  "context.app.version",
  "context.app.name",
  "properties.category",
  "context.app.build",
  "context.app.namespace",
  "properties.value",
  "properties.label"
]
```

## Contact Us

For more information on the RudderStack Data Governance API, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.

