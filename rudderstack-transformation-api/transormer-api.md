---
description: >-
  Detailed description of the RudderStack Transformation HTTP API to perform
  CRUD Operation on Transformations and Libraries.
---

# TRANSFORMATION HTTP API

TRANSFORMATION HTTP API allows you to create, read, update and delete transformations and libraries simply by making HTTP API call. It describes various API operations, related request and response structures, and error codes. The Transformation API is organized around REST. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which is understood by off-the-shelf clients. JSON is returned by all API responses, including errors.

## 1. Authorization

To consume Transformations API you need Access to it. If you don't have an access to it, you can [contact us](mailto:%20docs@rudderstack.com) or you can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

Your AccessToken carry many privileges, so be sure to keep them secret.

## 2. Generate AccessToken

In order to use the Transformation API you will need an AccessToken associated with your account. You can create your own AccessToken by following steps below. 
You can either use Postman, Fiddler or any other API client to make your request.

* Copy your workspace token and within Authorization section select type as Basic Auth and paste it into password field. 
{% hint style="success" %}
`""`is the _user name_ \(empty string\)_

`workspace token` is the _password
{% endhint %}

```markup
Request URL: https://api.rudderstack.com/accessToken
Request METHOD: POST
Response Headers:
{
  "success": true,
  "data": {
    "token": "1pHxUIA3jmxS2ip01zY696F80j7"
  }
}
```

If your workspace token is 1Xk5DChfJAol3xtW7qNnK1apo5p, your HTTP Request Header will be
Authorization: Basic Base64Enc(1Xk5DChfJAol3xtW7qNnK1apo5p).

## 3. Errors

Rudderstack uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in 2xx range indicate success, codes in 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted), and codes in the 5xx range indicates an error with Rudderstack's server (these are rare).

| **Http Response Code** | **Description** |
| :--- | :--- |
| **200 - OK** | **Everything worked as expected** |
| **400 - Bad Request** | **The request was unacceptable, often due to a missing required field** |
| **401 – Unauthorized** | **No valid API key provided or user doesn’t have access to the resource.** |
| **403 – Forbidden** | **User doesn’t have permission to create/access data** |
| **404 - Not Found** | **The requested resource doesn’t exist** |
| **500 - Internal Server Error** | **Something went wrong on Rudderstack's end** |

## 4. Transformations
 
The transformation is responsible for converting the received event data into a suitable destination-specific format. All the transformation codes are written in JavaScript. We also supports user-specific transformations for real-time operations, such as aggregation and sampling. Transformer helps you to create a user defined code that will route your events in the way you wish to see it on your destinations.

```markup
URL: https://api.rudderstack.com/transformations
```

### Transformer Payload:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `name` | String | Required | Sets the name of Transformer. |
| `description` | String | Optional | Gives a description for a transformer. |
| `code` | String | Optional | User defined code that maps events data to destinations as defined by user.|
| `createdBy` | Date | Optional | The timestamp of the transformer created. |
| `modifiedBy` | Date | Optional | The timestamp of the transformer updated. |
| `isPublished` | Boolean | Optional | By default this flag is false. If set to true then that is latest transformer through which all events gets processed before reaching to destinations. |
| `codeVersion` | Integer | Optional | If you wish to use API you must set this latest version i.e, 1. |
| `versionId` | String | Optional | Maintains a version of transformer everytime it is updated.  |
| `workspace` | Object | Optional | Dictionary of information that provides workspace data where any transformation is used. |
| `destinations` | Array | Optional | List of all destinations where current transformer is used. |


### 4.1. Create a Transformation

Creates a transformer and send its object as response.

```markup
Request URL: https://api.rudderstack.com/transformations
Request METHOD: POST
Request Body: 
{
    "name": "Update Transformations and Publish",
    "code": "function transform(events) { return events; } ",
}
Response Headers:
{
    "name": "Update Transformations and Publish",
    "description": "",
    "code": "function transform(events) { return events; } ",
    "createdBy": "sdcfvg",
    "codeVersion": "0",
    "workspaceId": "sdfvg",
    "creator": {
        "id": "sdcfv",
        "name": "No One",
        "email": "myemailaddressis@gmail.com",
        "verified": true,
        "organization": "Rudder",
        "clerkId": null,
        "createdAt": "2021-03-04T02:12:39.873Z",
        "updatedAt": "2021-03-04T02:13:11.185Z",
        "hasApiAccess": true
    },
    "workspace": {
        "id": "swderft",
        "name": "rudderstack-shivam",
        "token": "swderfgt",
        "hosted": false,
        "organizationId": "aswderf",
        "dataPlaneURL": null,
        "createdAt": "2021-03-04T02:13:11.241Z",
        "updatedAt": "2021-03-04T02:13:11.241Z",
        "owner": {
            "id": "sdcfvgb",
            "name": "No One",
            "email": "myemailaddressis@gmail.com",
            "verified": true,
            "organization": "Rudder",
            "clerkId": null,
            "createdAt": "2021-03-04T02:12:39.873Z",
            "updatedAt": "2021-03-04T02:13:11.185Z",
            "hasApiAccess": true
        }
    },
    "id": "sderfgthy",
    "versionId": "asxdc",
    "createdAt": "2021-03-04T10:07:24.513Z",
    "updatedAt": "2021-03-04T10:07:24.513Z",
    "destinations": []
}
```

### 4.2. Retrieve a Transformation

```markup
Request URL: https://api.rudderstack.com/transformations/{id}
Request METHOD: GET
Response Headers:
{
    "transformations": {
        "id": "swderftgy",
        "versionId": "edftgyhu",
        "name": "new Transformations-2",
        "description": "",
        "code": "function transform(events) { return events; } ",
        "createdBy": "edrftg",
        "codeVersion": "0",
        "workspaceId": "edrftgy",
        "createdAt": "2021-03-04T04:48:27.288Z",
        "updatedAt": "2021-03-04T04:48:27.288Z",
        "destinations": []
    }
}
```

### 4.3. List all Transformation

```markup
Request URL: https://api.rudderstack.com/transformations
Request METHOD: GET
Response Headers:
{
    "transformations": [
        {
            "id": "sedrftg",
            "versionId": "edrtv",
            "name": "new Transformations-2",
            "description": "",
            "code": "",
            "createdBy": "dvgbvfcd",
            "codeVersion": "0",
            "workspaceId": "cgvbvcfdv",
            "createdAt": "2021-03-04T04:48:27.288Z",
            "updatedAt": "2021-03-04T04:48:27.288Z",
            "destinations": []
        },
        {
            "id": "xcgvhcfdx",
            "versionId": "dtvbyutbvc",
            "name": "Update Transformations and Publish",
            "description": "",
            "code": "function transform(events) { return events; } ",
            "createdBy": "dcvgb",
            "codeVersion": "0",
            "workspaceId": "cdfvgbytvc",
            "createdAt": "2021-03-04T10:07:24.513Z",
            "updatedAt": "2021-03-04T10:07:24.513Z",
            "destinations": []
        }
    ]
}
```


### 4.4. Update a Transformation

```markup
Request URL: https://api.rudderstack.com/transformations/{id}
Request METHOD: POST
Request Body: 
{
    "code": "export default function cube(x) { return x * x ; }",
    "description": "Hey I am updated"
}
Response Headers:
{
    "id": "1pHw1RmzAqKpRCNupzHjTGfTrPJ",
    "versionId": "1pIfjTI5cOMnSgutkXjTRldt1n3",
    "name": "new Transformations-2",
    "description": "Hey I am updated",
    "code": "export default function cube(x) { return x * x ; }",
    "codeVersion": "0",
    "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
}
```

### 4.5. Delete a Transformation
Request URL: https://api.rudderstack.com/transformations/{id}
Request METHOD: DELETE
Response Headers:
OK

### 4.6. List all Transformation Versions
```markup
Request URL: https://api.rudderstack.com/transformations/{id}/versions
Request METHOD: GET
Response Headers:
{
    "transformations": [
        {
            "id": "wderftg",
            "versionId": "sdrgv",
            "name": "Update Transformations and Publish",
            "description": "",
            "code": "function transform(events) { return events; } ",
            "workspaceId": "sdcfvg",
            "isPublished": false
        },
        {
            "id": "sdf",
            "versionId": "sdfg",
            "name": "Update Transformations and Publish",
            "description": "Hey I am updated again",
            "code": "",
            "workspaceId": "sdfg",
            "isPublished": false
        }
    ]
}
```

### 4.7. Retrieve a single Transformation Version

```markup
Request URL: https://api.rudderstack.com/transformations/{id}/versions/{versionId}
Request METHOD: GET
Response Headers:
{
    "transformations": {
        "id": "1pIYoILGZTNYZP4YYkeyNIKlitl",
        "versionId": "1pIYoLfEzcMK3D3M1ihjqI02wnx",
        "name": "Update Transformations and Publish",
        "description": "",
        "code": "function transform(events) { return events; } ",
        "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
        "isPublished": false
    }
}
```


## 5 Libraries

Libraries are javascript code that you write and export to be used in your transformations. It gives you flexibility of code reusability and maintainibility at different versions.
Suppose you write a aggregation function sum and difference. One can export them and use it within different transformers just by importing that module by library name.


```markup
URL: https://api.rudderstack.com/libraries
```   

### Libraries Payload:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `name` | String | Required | Sets the name of Library. This name is used as modules when it is imported in transformation code. Make sure to use camelCase(recommended) format without space-seperated. |
| `description` | String | Optional | Gives a description for a library. |
| `code` | String | Optional | User defined code.|
| `createdBy` | Date | Optional | The timestamp of the transformer created. |
| `modifiedBy` | Date | Optional | The timestamp of the transformer updated. |
| `isPublished` | Boolean | Optional | By default this flag is false. If set to true then that is latest libraries all published transformer will use if it is present in that transformer. |
| `versionId` | String | Optional | Maintains a version of library everytime it is updated.  |
| `workspace` | Object | Optional | Dictionary of information that provides workspace data where any transformation is used. |


### 5.1. Create a Library

```markup
Request URL: https://api.rudderstack.com/libraries
Request METHOD: POST
Request Body: 
{
    "name": "getCube",
    "code": "    export default function cube(x) { return x * x * x; }",
    "description": "First Library using apiCall"
}
Response Headers:
{
    "name": "getCube",
    "description": "First Library using apiCall",
    "code": "    export default function cube(x) { return x * x * x; }",
    "createdBy": "1pHd4eqnCfzBbssUxGxwBjDfhn7",
    "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
    "creator": {
        "id": "1pHd4eqnCfzBbssUxGxwBjDfhn7",
        "name": "Shivam Gupta",
        "email": "shivam@rudderstack.com",
        "verified": true,
        "organization": "Rudder",
        "hash": "$2a$10$nkuEprTloWHD46Pyg/BNFON8G9Vz.WzV3VBEdu63wuVZleLLshMAe",
        "verificationToken": "C4EDnEtWCeNI857WqDYhCOxqzBgoYDz7rFgHvTdEpJY",
        "clerkId": null,
        "createdAt": "2021-03-04T02:12:39.873Z",
        "updatedAt": "2021-03-04T02:13:11.185Z",
        "hasApiAccess": true
    },
    "workspace": {
        "id": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
        "name": "rudderstack-shivam",
        "token": "1pHd8kXYaH0vRyBPSAj1pfJYGQi",
        "hosted": false,
        "organizationId": "1pHd8kac7sUjXq2sz3PNeTgK5Es",
        "dataPlaneURL": null,
        "createdAt": "2021-03-04T02:13:11.241Z",
        "updatedAt": "2021-03-04T02:13:11.241Z"
    },
    "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
    "versionId": "1pHx19CKjIgraiBWcRVJVjdu0LS",
    "createdAt": "2021-03-04T04:56:38.369Z",
    "updatedAt": "2021-03-04T04:56:38.369Z"
}
```

### 5.2. Retrieve a Library

```markup
Request URL: https://api.rudderstack.com/libraries/{id}
Request METHOD: GET
Response Headers:
{
    "libraries": {
        "id": "1pHxUHNwf6gj7duaQgPdRMi1Rj1",
        "versionId": "1pHxUIAd6MxS2ip01zY160F80j7",
        "name": "getCube2",
        "description": "Create Library",
        "code": "export default function cube(x) { return x * x * x; }",
        "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
    }
}
```

### 5.3. List all Libraries

```markup
Request URL: https://api.rudderstack.com/libraries
Request METHOD: GET
Response Headers:
{
    "libraries": [
        {
            "id": "1pHxUHNwf6gj7duaQgPdRMi1Rj1",
            "versionId": "1pHxUIAd6MxS2ip01zY160F80j7",
            "name": "getCube2",
            "description": "Create Library and Publish",
            "code": "export default function cube(x) { return x * x * x; }",
            "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
        },
        {
            "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
            "versionId": "1pHxdlGL8IyoP7WfvRil4Qs88cp",
            "name": "getCube",
            "description": "First Library using apiCall",
            "code": "export default function cube(x) { return x * x ; }",
            "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
        }
    ]
}
```


### 5.4. Update a Library

```markup
Request URL: https://api.rudderstack.com/libraries/{id}
Request METHOD: POST
Request Headers: 
{
    "name": "getCube",
    "code": "export default function cube(x) { return x * x ; }"
}
Response Headers:
{
    "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
    "versionId": "1pHxdlGL8IyoP7WfvRil4Qs88cp",
    "name": "getCube",
    "description": "First Library using apiCall",
    "code": "export default function cube(x) { return x * x ; }",
    "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
    "isPublished": false
}
```

### 5.5. List all Library Versions
```markup
Request URL: https://api.rudderstack.com/transformations/{id}/versions
Request METHOD: GET
Response Headers:
{
    "libraries": [
        {
            "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
            "versionId": "1pHx19CKjIgraiBWcRVJVjdu0LS",
            "name": "getCube",
            "description": "First Library using apiCall",
            "code": "    export default function cube(x) { return x * x * x; }",
            "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
            "isPublished": true
        },
        {
            "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
            "versionId": "1pHxLn5jJQVGofT4SDvC5PSUb2K",
            "name": "getCube",
            "description": "First Library using apiCall",
            "code": "export default function cube(x) { return x * x * x; }",
            "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
            "isPublished": false
        },
        {
            "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
            "versionId": "1pHxdlGL8IyoP7WfvRil4Qs88cp",
            "name": "getCube",
            "description": "First Library using apiCall",
            "code": "export default function cube(x) { return x * x ; }",
            "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
            "isPublished": false
        }
    ]
}
```

### 5.6. Retrieve a single Library Version

```markup
Request URL: https://api.rudderstack.com/libraries/{id}/versions/{versionId}
Request METHOD: GET
Response Headers:
{
    "libraries": {
        "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
        "versionId": "1pHx19CKjIgraiBWcRVJVjdu0LS",
        "name": "getCube",
        "description": "First Library using apiCall",
        "code": "    export default function cube(x) { return x * x * x; }",
        "workspaceId": "1pHd8jh2YUut1Uf6K0VJGH34YBa",
        "isPublished": false
    }
}
```

