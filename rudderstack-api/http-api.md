---
description: >-
  Detailed technical description of the RudderStack HTTP API for sending your
  event data from your sources to the specified destinations.
---

# HTTP API

{% hint style="info" %}
We recommend using the [**RudderStack SDKs**](../stream-sources/rudderstack-sdk-integration-guides/) for tracking and routing user events from your sources. The SDKs also offer automatic tagging of user context, event batching, and a retry functionality during delivery failure.
{% endhint %}

RudderStack offers an easy-to-use **HTTP API** that you can use to send your events if you cannot use the SDKs.

{% hint style="success" %}
The RudderStack HTTP API is fully Segment-compatible.
{% endhint %}

This document details various aspects of the HTTP API.

## 1. Prerequisites

The following prerequisites must be met to send events via the HTTP API:

* The RudderStack HTTP server must be accessible from your HTTP client. Refer to [**this guide**](../get-started/installing-and-setting-up-rudderstack/) to install and set up RudderStack in your preferred environment. 
* Set up a source and destination in RudderStack by following [**this guide**](../connections/adding-source-and-destination-rudderstack.md). 
* Import the Postman collection using using this [**URL**](https://www.getpostman.com/collections/480307c55ad2b9dd4e27) and edit the variables `source_write_key` and `data_plane_url`with the [**source write key**](https://docs.rudderstack.com/connections#source-details) and the [**Data Plane URL**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it).

{% hint style="success" %}
If you are using RudderStack Cloud, set the Data Plane URL to [**`https://hosted.rudderlabs.com`**](https://hosted.rudderlabs.com).
{% endhint %}

## 2. API Authorization

RudderStack uses Basic Authentication for authenticating all the HTTP requests.

{% hint style="success" %}
All the popular HTTP clients \(e.g. CURL, Postman, HTTPie\) have default support for Basic Authentication.
{% endhint %}

The Basic Authentication for this API requires a username and password where:

* The username is the **source write key**
* The password is an empty string \(`""`\)

For example, if the source write key is `1Xk5DChfJAol3xtW7qNnK1apo5p`, your HTTP request must have the following HTTP header `Authorization: Basic MVhrNURDaGZKQW9sM3h0VzdxTm5LMWFwbzVwOg==`

{% hint style="success" %}
You can use this [**Basic Authentication Header Generator**](https://www.blitter.se/utils/basic-authentication-header-generator/) ****to generate the HTTP header.
{% endhint %}

{% hint style="warning" %}
**Important**: To send the events via the RudderStack HTTP API, the **Content-Type** header must be set to **`application/json`**.
{% endhint %}

## 3. HTTP Responses

* The HTTP API returns a `200` response for successful API requests.  
* The API returns a `400` response for invalid requests with an appropriate error message in the response. Some possible invalid requests include: 
  * Request size too large
  * Invalid JSON
  * Missing Authorization Header
  * Invalid Authorization Header

{% hint style="info" %}
In case of the Invalid Authorization Header error, verify if the source write key and the Basic Auth Header is valid.
{% endhint %}

## 4. Maximum Allowed Request Size

RudderStack allows messages with a maximum size of `32 KB` per call. The [**`batch`**](https://docs.rudderstack.com/rudderstack-api/http-api-specification#11-batch) endpoint accepts a maximum call size of `4 MB` per batch, and `32 KB` per call. RudderStack responds with a `400 Bad Request` if these limits are exceeded.

## 5. Identify

The `identify` call lets you associate a visiting user to their actions and record any associated traits.

* Request Type: **POST**
* Request Format**:** 

```javascript
<DATA_PLANE_URL>/v1/identify
```

### **5**.1. Sample Payload

{% code title="identify.json" %}
```javascript
{
  "userId": "identified user id",
  "anonymousId":"anon-id-new",
  "context": {
    "traits": {
       "trait1": "new-val"  
    },
    "ip": "14.5.67.21",
    "library": {
        "name": "http"
    }
  },
  "timestamp": "2020-02-02T00:23:09.544Z"
}
```
{% endcode %}

### 5.2. Usage

{% tabs %}
{% tab title="CURL" %}
```bash
curl -u <source_write_key>: -X POST <DATA_PLANE_URL>/v1/identify \
-d @identify.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="HTTPie" %}
```bash
http -a <source_write_key>: <DATA_PLANE_URL>/v1/identify < identify.json
```
{% endtab %}
{% endtabs %}

### 5.3. Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is not present. | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `traits` | Object | Optional | Dictionary of the traits associated with the user, such as `name`or `email` |

{% hint style="success" %}
For more details on the `identify` call, refer to the [**RudderStack Events Specification**](api-specification/rudderstack-spec/)**.**
{% endhint %}

## 6. Track

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any properties associated with them.

* Request Type: **POST**
* Request Format**:** 

```javascript
<DATA_PLANE_URL>/v1/track
```

### 6.1. Sample Payload

{% code title="track.json" %}
```javascript
{
  "userId": "identified user id",
  "anonymousId":"anon-id-new",
  "event": "Product Purchased new",
  "properties": {
    "name": "Shirt",
    "revenue": 4.99
  },
  "context": {
    "ip": "14.5.67.21",
    "library": {
        "name": "http"
    }
  },
  "timestamp": "2020-02-02T00:23:09.544Z"
}
```
{% endcode %}

### 6.2. Usage

{% tabs %}
{% tab title="CURL" %}
```bash
curl -u <source_write_key>: -X POST <DATA_PLANE_URL>/v1/track \
-d @track.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="HTTPie" %}
```bash
http -a <source_write_key>: <DATA_PLANE_URL>/v1/track < track.json
```
{% endtab %}
{% endtabs %}

### 6.3. Accepted fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is not present. | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `event` | String | Required | Name of the event being performed by the user |
| `properties` | Object | Optional | Dictionary of the properties associated with a particular event. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

{% hint style="success" %}
For more details on the `track` call, refer to the [**RudderStack Events Specification**](api-specification/rudderstack-spec/)**.**
{% endhint %}

## 7. Page

The `page` call lets you record your website's page views with any additional relevant information about the viewed page.

* Request Type: **POST**
* Request Format**:** 

```javascript
<DATA_PLANE_URL>/v1/page
```

### 7.1. Sample Payload

{% code title="page.json" %}
```javascript
{
  "userId": "identified user id",
  "anonymousId":"anon-id-new",
  "name": "Page View",
  "properties": {
    "title": "Home",
    "path": "/"
  },
  "context": {
    "ip": "14.5.67.21",
    "library": {
        "name": "http"
    }
  },
  "timestamp": "2020-02-02T00:23:09.544Z"
}
```
{% endcode %}

### 7.2. Usage

{% tabs %}
{% tab title="CURL" %}
```bash
curl -u <source_write_key>: -X POST <DATA_PLANE_URL>/v1/page \
-d @page.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="HTTPie" %}
```bash
http -a <your_write_key>: <DATA_PLANE_URL>/v1/page < page.json
```
{% endtab %}
{% endtabs %}

### 7.3. Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is  not present. | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the page being viewed. |
| `properties` | Object | Optional | Dictionary of the properties associated with the page being viewed, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

{% hint style="success" %}
For more details on the `page` call, refer to the [**RudderStack Events Specification**](api-specification/rudderstack-spec/)**.**
{% endhint %}

## 8. Screen

The `screen` call lets you record whenever your user views their mobile screen with any additional relevant information about the screen. 

{% hint style="success" %}
The `screen` call is the mobile equivalent of the `page` call.
{% endhint %}

* Request Type: **POST**
* Request Format**:** 

```javascript
<DATA_PLANE_URL>/v1/screen
```

### 8.1. Sample Payload

{% code title="screen.json" %}
```javascript
{
  "userId": "identified user id",
  "anonymousId":"anon-id-new",
  "name": "Screen View",
  "properties": {
    "prop1": "5"
  },
  "context": {
    "ip": "14.5.67.21",
    "library": {
        "name": "http"
    }
  },
  "timestamp": "2020-02-02T00:23:09.544Z"
}
```
{% endcode %}

### 8.2. Usage

{% tabs %}
{% tab title="CURL" %}
```bash
curl -u <source_write_key>: -X POST <DATA_PLANE_URL>/v1/screen \
-d @screen.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="HTTPie" %}
```bash
http -a <source_write_key>: <DATA_PLANE_URL>/v1/screen < screen.json
```
{% endtab %}
{% endtabs %}

### 8.3. Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is  not present. | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the screen being viewed. |
| `properties` | Object | Optional | Dictionary of the properties associated with the page being viewed, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

{% hint style="success" %}
For more details on the `screen` call, refer to the [**RudderStack Events Specification**](api-specification/rudderstack-spec/)**.**
{% endhint %}

## 9. Group

The `group` call lets you link an identified user with a group such as a company, organization, or an account. It also lets you record any custom traits associated with that group, like the name of the company, the number of employees, etc.

* Request Type: **POST**
* Request Format**:** 

```javascript
<DATA_PLANE_URL>/v1/group
```

### 9.1. Sample Payload

{% code title="group.json" %}
```javascript
{
  "userId": "user123",
  "groupId": "group1",
  "traits": {
    "name": "Company",
    "industry": "Industry",
    "employees": 123
  },
  "context": {
    "traits": {
       "trait1": "new-val"  
    },
    "ip": "14.5.67.21",
    "library": {
        "name": "http"
    }
  },
  "timestamp": "2020-01-21T00:21:34.208Z"
}
```
{% endcode %}

### 9.2. Usage

{% tabs %}
{% tab title="CURL" %}
```bash
curl -u <source_write_key>: -X POST <DATA_PLANE_URL>/v1/group \
-d @group.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="HTTPie" %}
```bash
http -a <source_write_key>: <DATA_PLANE_URL>/v1/group < group.json
```
{% endtab %}
{% endtabs %}

### 9.3. Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Required, if `anonymousId` is  not present. | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `groupId` | String | Required | Unique identifier of the group, as present in your database. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

{% hint style="success" %}
For more details on the `group` call, refer to the [**RudderStack Events Specification**](api-specification/rudderstack-spec/)**.**
{% endhint %}

## 10. Alias

The `alias` call lets you merge different identities of a known user.

{% hint style="info" %}
`alias` is an advanced method that lets you change the tracked user's ID explicitly. This method is useful when managing identities for some of the downstream destinations.
{% endhint %}

{% hint style="success" %}
The following destinations support the `alias` call:

* \*\*\*\*[**MoEngage**](../destinations/marketing/moengage.md)\*\*\*\*
* \*\*\*\*[**Kissmetrics**](../destinations/analytics/kissmetrics.md)\*\*\*\*
* \*\*\*\*[**Amplitude**](../destinations/analytics/amplitude.md) ****\(only supported by the [**JavaScript SDK**](../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) via [**Cloud Mode**](https://docs.rudderstack.com/connections/rudderstack-connection-modes#cloud-mode)\)
{% endhint %}

* Request Type: **POST**
* Request Format**:** 

```javascript
<DATA_PLANE_URL>/v1/alias
```

### 10.1. Sample Payload

{% code title="alias.json" %}
```javascript
{
  "userId": "user123",
  "previousId": "previd1",
  "context": {
    "traits": {
       "trait1": "new-val"  
    },
    "ip": "14.5.67.21",
    "library": {
        "name": "http"
    }
  },
  "timestamp": "2020-01-21T00:21:34.208Z"
}
```
{% endcode %}

### 10.2. Usage

{% tabs %}
{% tab title="CURL" %}
```bash
curl -u <source_write_key>: -X POST <DATA_PLANE_URL>/v1/alias \
-d @alias.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="HTTPie" %}
```bash
http -a <source_write_key>: <DATA_PLANE_URL>/v1/alias < alias.json
```
{% endtab %}
{% endtabs %}

### 10.3. Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `userId` | String | Required, if `anonymousId` is  not present. | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `previousId` | String | Required | The previous unique identifier of the user. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

{% hint style="success" %}
For more details on the `alias` call, refer to the [**RudderStack Events Specification**](api-specification/rudderstack-spec/)**.**
{% endhint %}

## 11. Batch

The `batch` call allows you to send a series of `identify`, `track`, `page`, `group` and `screen` requests in a single batch. This call helps you minimize the number of outbound requests, thus enabling better performance.

As mentioned earlier, RudderStack sets a maximum limit of `4 MB` per batch request and `32 KB` per call.

* Request Type: **POST**
* Request Format**:** 

```javascript
<DATA_PLANE_URL>/v1/batch
```

### 11.1. Sample Payload

{% code title="batch.json" %}
```javascript
{
    "batch": [{
            "userId": "identified user id",
            "anonymousId": "anon-id-new",
            "type": "identify",
            "context": {
                "traits": {
                    "trait1": "new-val"
                },
                "ip": "14.5.67.21",
                "library": {
                    "name": "http"
                }
            },
            "timestamp": "2020-02-02T00:23:09.544Z"
        },
        {
            "userId": "identified user id",
            "anonymousId": "anon-id-new",
            "event": "Product Purchased new",
            "type": "track",
            "properties": {
                "name": "Shirt",
                "revenue": 4.99
            },
            "context": {
                "ip": "14.5.67.21",
                "library": {
                    "name": "http"
                }
            },
            "timestamp": "2020-02-02T00:23:09.544Z"
        },
        {
            "userId": "identified user id",
            "anonymousId": "anon-id-new",
            "name": "Page View",
            "type": "page",
            "properties": {
                "title": "Home",
                "path": "/"
            },
            "context": {
                "ip": "14.5.67.21",
                "library": {
                    "name": "http"
                }
            },
            "timestamp": "2020-02-02T00:23:09.544Z"
        },
        {
            "userId": "identified user id",
            "anonymousId": "anon-id-new",
            "name": "Screen View",
            "type": "screen",
            "properties": {
                "prop1": "5"
            },
            "context": {
                "ip": "14.5.67.21",
                "library": {
                    "name": "http"
                }
            },
            "timestamp": "2020-02-02T00:23:09.544Z"
        },
        {
            "userId": "user123",
            "type": "group",
            "groupId": "group1",
            "traits": {
                "name": "Company",
                "industry": "Industry",
                "employees": 123
            },
            "context": {
                "traits": {
                    "trait1": "new-val"
                },
                "ip": "14.5.67.21",
                "library": {
                    "name": "http"
                }
            },
            "timestamp": "2020-01-21T00:21:34.208Z"
        },
        {
            "userId": "user123",
            "previousId": "previd1",
            "type":"alias",
            "context": {
                "traits": {
                    "trait1": "new-val"
                },
                "ip": "14.5.67.21",
                "library": {
                    "name": "http"
                }
            },
            "timestamp": "2020-01-21T00:21:34.208Z"
        }

    ]
}
```
{% endcode %}

### 11.2. Usage

{% tabs %}
{% tab title="CURL" %}
```bash
curl -u <source_write_key>: -X POST <DATA_PLANE_URL>/v1/batch \
-d @batch.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="HTTPie" %}
```bash
http -a <source_write_key>: <DATA_PLANE_URL>/v1/batch < batch.json
```
{% endtab %}
{% endtabs %}

### 11.3. Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `batch` | Array | Required | An array of `identify`, `track`, `page`, `group` and `screen` calls. It is mandatory that each call has a `type` property and a valid method name. |
| `context` | Object | Optional | This is the same as the `context` field in case of other calls. However, it is merged with the context \(if any\) inside each of the items within the batch. |
| `integrations` | Object | Optional | This is the same as the `integrations` field in case of other calls. However, it is merged with the integrations \(if any\) inside each of the items within the batch. |

## 12. Historical Imports

RudderStack lets you import any historical data by simply adding the `timestamp` argument to any of your API calls. However, this can be done only for the destinations that accept historical time-stamped data, like Amplitude, Mixpanel, etc. 

{% hint style="info" %}
If you are tracking current events, leave out the `timestamp` field. RudderStack will automatically add the timestamps to the event requests.
{% endhint %}

## Contact Us

For more information on the HTTP API, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) ****channel.

