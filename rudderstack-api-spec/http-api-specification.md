---
description: >-
  Detailed technical description of the RudderStack HTTP Tracking API for
  recording your event data from any website or application.
---

# HTTP API Specification

The RudderStack HTTP API allows you to track your customer event data from anywhere, and route it to your desired destinations. We recommend using our SDKs for automatic tagging of the `identify` context, batching the events, and retrying the functionality. If you cannot use our SDKs, it is possible to send your event data using the HTTP API.

{% hint style="success" %}
RudderStack HTTP API is compatible with Segment.
{% endhint %}

## 1. RudderStack Data Plane

To send HTTP requests, you should have a RudderStack server configured with your workspace token. Please refer to [this section](https://docs.rudderstack.com/getting-started/installing-and-setting-up-rudderstack) for setting up and running RudderStack.  The RudderStack's HTTP server should be accessible from your HTTP client.

## 2. Postman Collection

Import the Postman collection using this [**URL**](https://www.getpostman.com/collections/480307c55ad2b9dd4e27) and edit the variables `source_write_key` and `data_plane_url`with your write key and RudderStack data plane URL. Now you can test all supported requests.

{% hint style="info" %}
If you are using RudderStack Cloud, the data plane URL should be set to: [https://hosted.rudderlabs.com](https://hosted.rudderlabs.com).
{% endhint %}

## 3. HTTP Authorization

RudderStack uses Basic Authentication for authenticating all the HTTP requests. HTTP Basic Authentication requires a user name and password.

{% hint style="success" %}
`writeKey`is the _user name_ 

`""` is the _password \(empty string\)_
{% endhint %}

All the popular HTTP clients \(eg. CURL, Postman, HTTPie\) have default support for Basic Authentication.  
  
If your`writeKey` is `1Xk5DChfJAol3xtW7qNnK1apo5p`, your HTTP request must have the following HTTP header `Authorization: Basic MVhrNURDaGZKQW9sM3h0VzdxTm5LMWFwbzVwOg==`

This is a sample [basic auth header generator](https://www.blitter.se/utils/basic-authentication-header-generator/) to verify your header.

{% hint style="info" %}
In order to send the event data to our RudderStack HTTP API, the `content-type` header must be set to `application/json`
{% endhint %}

## 4. HTTP Responses

* Server returns a `200` response for successful API requests. 
* Server returns a `400` response for invalid requests with an appropriate error message in the response. Some possible invalid requests include: _`Request size too large Invalid JSON Missing Authorization header Invalid Authorization header`_

## 5. Maximum Allowed Request Size

RudderStack allows a maximum of `32KB` message size per call, while the batch endpoint accepts a maximum call size of `500KB` per batch, and `32KB` per call. If these limits are exceeded, RudderStack responds with a `400 Bad Request`.

## 6. Identify

The `identify` call allows you to associate a visiting user to their actions. It also lets you record the traits associated with them.

{% hint style="info" %}
As a best practice, please make sure that the `identify`call is made at the start of every session or page load for logged-in users, if possible. This will ensure all the latest traits are captured.
{% endhint %}

### 6.1. `identify` Payload

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

### 6.2. `identify` Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_write_key>: -X POST https://your-data-plane/v1/identify \
-d @identify.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_write_key>: https://your-data-plane/v1/identify < identify.json
```
{% endtab %}
{% endtabs %}

### 6.3. Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |
| `traits` | Object | Optional | Dictionary of the traits associated with the user, such as `name`or `email` |

For more details, please refer to the payload related to the `identify` call.

## 7. Track

The `track` call allows you to record the customer events, i.e. the actions that they perform, along with their associated properties. 

### 7.1. `track` Payload

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

### 7.2. `track` Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_write_key>: -X POST https://your-data-plane/v1/track \
-d @track.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_write_key>: https://your-data-plane/v1/track < track.json
```
{% endtab %}
{% endtabs %}

### 7.3. `track` Accepted fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `event` | String | Required | Name of the event being performed by the user |
| `properties` | Object | Optional | Dictionary of the properties associated with a particular event. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

For more details, please refer to the payload related to the `track` call.

## 8. Page

The `page` call allows you to record your website's page views, with the additional relevant information about the page being viewed.

### 8.1. `page` Payload

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

### 8.2. `page` Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_write_key>: -X POST https://your-data-plane/v1/page \
-d @page.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_write_key>: https://your-data-plane/v1/page < page.json
```
{% endtab %}
{% endtabs %}

### 8.3. `page` Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the page being viewed. |
| `properties` | Object | Optional | Dictionary of the properties associated with the page being viewed, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

For more details, please refer to the payload related to the `page` call.

## 9. Screen

The `screen` call allows you to record whenever a mobile app user sees the screen of their mobile device.

### 9.1. `screen` Payload

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

### 9.2. `screen` Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_write_key>: -X POST https://your-data-plane/v1/screen \
-d @screen.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_write_key>: https://your-data-plane/v1/screen < screen.json
```
{% endtab %}
{% endtabs %}

### 9.3. `screen` Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `name` | String | Required | Name of the screen being viewed. |
| `properties` | Object | Optional | Dictionary of the properties associated with the page being viewed, such as `url` and `referrer` |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

For more details, please refer to the payload related to the `screen` call. 

## 10. Group

The `group` call lets you associate a particular identified user with a group, such as a company, organization, or an account. It also allows you to record the custom traits associated with that group, such as the name of the industry, or the number of employees in the organization.

### 10.1. `group` Payload

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

### 10.2. `group` Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_write_key>: -X POST https://your-data-plane/v1/group \
-d @group.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_write_key>: https://your-data-plane/v1/group < group.json
```
{% endtab %}
{% endtabs %}

### 10.3. `group` Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `anonymousId` | String | Optional | Sets the user ID for cases where there is no unique identifier for the user. Either `userId` or `anonymousId` is required. |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `groupId` | String | Required | Unique identifier of the group, as present in your database. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## 11. Alias

The alias call allows you to associate one user identity with another. This is quite useful in case of some destinations such as Mixpanel \(associating `anonymousId` with an identified user on signup\)  or Kissmetrics \(when the user switches IDs\).

### 11.1. `alias` Payload

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

### 11.2. `alias` Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_write_key>: -X POST https://your-data-plane/v1/alias \
-d @alias.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_write_key>: https://your-data-plane/v1/alias < alias.json
```
{% endtab %}
{% endtabs %}

### 11.3. `alias` Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `userId` | String | Optional, if `anonymousId` is already set | Unique identifier for a particular user in your database. |
| `context` | Object | Optional | Dictionary of information that provides context about a message. However, it is not directly related to the API call. |
| `integrations` | Object | Optional | A dictionary containing the destinations to be either enabled or disabled. |
| `previousId` | String | Required | The previous unique identifier of the user. |
| `traits` | Object | Optional | Dictionary of the properties or traits associated with the group, such as `email` or `name`. |
| `timestamp` | Date | Optional | The timestamp of the message's arrival. |

## 12. Batch

The `batch` call allows you to send a series of `identify`, `track`, `page`, `group` and `screen` requests in a single batch. This call helps you minimize the number of outbound requests, thus enabling better performance.

As mentioned earlier, RudderStack sets a maximum limit of `500KB` per batch request and `32KB` per call.

### 12.1. `batch` Payload

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

### 12.2. `batch` Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_write_key>: -X POST https://your-data-plane/v1/batch \
-d @batch.json \
--header "Content-Type: application/json" 
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_write_key>: https://your-data-plane/v1/batch < batch.json
```
{% endtab %}
{% endtabs %}

### 12.3. `batch` Accepted Fields

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `batch` | Array | Required | An array of `identify`, `track`, `page`, `group` and `screen` calls. It is mandatory that each call has a `type` property and a valid method name. |
| `context` | Object | Optional | This is the same as the `context` field in case of other calls. However, it is merged with the context \(if any\) inside each of the items within the batch. |
| `integrations` | Object | Optional | This is the same as the `integrations` field in case of other calls. However, it is merged with the integrations \(if any\) inside each of the items within the batch. |

## 13. Historical Imports

RudderStack allows you to import any historical data by simply adding the `timestamp` argument to any of your API calls. However, this can be done only for the destinations that accept historical, time-stamped data, such as Amplitude, Mixpanel, etc. 

{% hint style="warning" %}
In case you are tracking current events, it is advisable to leave out the `timestamp` field. RudderStack will automatically add the timestamps to the event requests.
{% endhint %}

## Contact Us

To know more about the HTTP API spec, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.

