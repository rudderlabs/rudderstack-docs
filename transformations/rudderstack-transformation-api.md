---
description: API Specification to manage your RudderStack Transformations and Libraries.
---

# Transformations  API

RudderStack's Transformations API allows you to create, read, update and delete transformations and libraries programmatically by making HTTP calls.

This guide describes the various API operations, related request and response structures, and error codes associated with this API.

## Basic Authentication

The Transformations API is authenticated via HTTP Basic Authentication.

You can authenticate your account when using the API by including your **email address** in the username field and the secret **access token** in the password field in Authorization, if you're using Postman.

{% hint style="warning" %}
It is mandatory to generate your access token before you make any API calls. If you have not generated your access token visit our [**Access Token**](api-access-token.md) page.
{% endhint %}

{% hint style="danger" %}
Any API requests without the authentication will fail.
{% endhint %}

You can also pass your access token in the authorization headers, as shown:

```markup
Authorization: Basic {Base64Encoded(emailaddress:AccessToken)}
```

The basic auth contains three parts:

* Basic
* Base64Encoded \(Token\)
* Token = _`emailaddress`_ + _`colon`_ + _`access token`_

Some examples are as shown: 

* Email Address: **`myemailaddressis@gmail.com`**
* Access Token **- `1pHxUIA3jmxS2ip01zY696F80j7`**
* Headers **- `Basic {Base64Encoded(myemailaddressis@gmail.com:1pHxUIA3jmxS2ip01zY696F80j7)}`**

{% hint style="success" %}
To make a successful request all of the upcoming endpoints should include this header.
{% endhint %}

## Transformations

RudderStack transformations are responsible for converting the received event data into a suitable destination-specific format. All the transformation codes are written in JavaScript.

{% hint style="success" %}
We also support [user-specific transformations](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack) for real-time operations, such as aggregation and sampling.
{% endhint %}

Transformations help you to create a user-defined code that allow you to route your events in a manner that is suitable for your destinations.

#### Transformer Payload:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `name` | String | Required | Sets the name of Transformer |
| `description` | String | Optional | Gives a description for a transformer |
| `code` | String | Optional | User-defined code that maps event data to destinations as defined by the user |
| `codeVersion` | String | Optional | This is an integer data always set to version 1 for API calls. |
| `createdAt` | Date | Optional | The timestamp of the transformer when it is created |
| `updatedAt` | Date | Optional | The timestamp of the transformer when it is updated |
| `versionId` | String | Optional | Maintains a version of transformer every time it is updated |
| `workspaceId` | Object | Optional | Workspace ID on which this transformation is created |
| `destinations` | Array | Optional | List of all Destination IDs to which your transformation is connected |

{% api-method method="post" host="https://api.rudderstack.com" path="/transformations" %}
{% api-method-summary %}
Create a transformation
{% endapi-method-summary %}

{% api-method-description %}
Creates a transformation and get its object as response.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="publish" type="boolean" required=false %}
By default this flag is `false`. It publishes your transformer to the latest version if set to `true` and its code is made live for incoming traffic.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="events" type="object" required=false %}
Pass a set of JSON events to be tested for your code. This should be an array of JSON data.
{% endapi-method-parameter %}

{% api-method-parameter name="destinationIds" type="array" required=false %}
Pass an array of `destinationIds` that you wish to connect with this transformation. You can connect only if publish is set to `true`.
{% endapi-method-parameter %}

{% api-method-parameter name="name" type="string" required=true %}
Name of transformer that you wish to create.
{% endapi-method-parameter %}

{% api-method-parameter name="description " type="string" required=false %}
Description of transformer goes here.
{% endapi-method-parameter %}

{% api-method-parameter name="code" type="string" required=true %}
Code of transformer goes here.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
When publish is false we create a transformation revisions and you cannot connect a destination.
{% endapi-method-response-example-description %}

```json
publish = true :: 
{
  "id": "1puvbvMW2mxWvfFFnPIv5TTv4wL",
  "versionId": "1puvbyk8adHTxWHYre4GwZbrMGL",
  "name": "Create Transformation Tested-4",
  "description": "Descriptrion 1",
  "code": "function transform(events) {return events;}",
  "codeVersion": "1",
  "createdAt": "2021-03-04T04:48:27.288Z",
  "updatedAt": "2021-03-04T04:48:27.288Z",
  "destinations": [
    {
      "id": "xdcfvgbvfcdvfgbhgvf",
      "name": "Destination 1",
      "enabled": true
    }
  ]
}

publish = false ::
{
  "id": "1puu7XFWgbwObDY4nbJdF0cgeTC",
  "versionId": "1puu7e4DXYMPJrLglIICgFK75fD",
  "name": "new Transformation 3",
  "description": "Some Description",
  "code": "function transformEvent(events) { return events.context; } ",
  "createdAt": "2021-03-04T04:48:27.288Z",
  "updatedAt": "2021-03-04T04:48:27.288Z"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="info" %}
**Events Parameters : Passing events in our API accepts a  JSON format.**

```json
[
  {
    "anonymousId": "8d872292709c6fbe",
    "channel": "mobile",
    "context": {
      "traits": {
        "address": {
          "city": "Kolkata",
          "country": "India",
          "postalcode": "700096",
          "state": "West bengal",
          "street": "Park Street"
        }
      }
    },
    "properties": {
      "revenue": "30",
      "currency": "USD",
      "quantity": "5",
      "price": "58.0"
    }
  }
]
```
{% endhint %}

Creating a transformation can be done in one of the two ways:

**`publish: true` -** In this case, we maintain two copies of the transformer. Among these, one is published and other is used for revisions. With the published version, you can connect a destination and its code is made live for incoming traffic.

**`publish: false` -** In this case, we only create revisions for the transformation, which means you cannot connect any destinations to it. It cannot be used for any incoming event traffic. However, if you wish to publish some revisions of transformations you can do so using our **Publish API**.

{% hint style="success" %}
We will be using these two terms **Published** and **Revisions** for transformations and libraries throughout our docs.
{% endhint %}

An example is as shown:

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X POST 'https://api.rudderstack.com/transformations' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json' \
-d '{
    "name": "Create Transformation Tested-4",
    "code": "function transformEvent(events) { return events; } ",
    "description": "Descriptrion 1"
}'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
 http POST 'https://api.rudderstack.com/transformations' \
 name='Create Transformation Tested-4' code='function transformEvent(events) { return events; }' description='Descriptrion 1' \
 Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
 Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/transformations" %}
{% api-method-summary %}
List all the transformations
{% endapi-method-summary %}

{% api-method-description %}
Get all **published transformations** for a workspace.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
This will give an array of published transformations.
{% endapi-method-response-example-description %}

```bash
{
  "transformations": [
    {
      "id": "sedrftg",
      "versionId": "edrtv",
      "name": "new Transformations-2",
      "description": "",
      "code": "function transformEvent(events) { return events; }",
      "codeVersion": "1",
      "createdAt": "2021-03-04T04:48:27.288Z",
      "updatedAt": "2021-03-04T04:48:27.288Z",
      "destinations": []
    },
    {
      "id": "xcgvhcfdx",
      "versionId": "dtvbyutbvc",
      "name": "Update Transformations and Publish",
      "description": "",
      "code": "function transformEvent(events) { return events; } ",
      "codeVersion": "1",
      "createdAt": "2021-03-04T10:07:25.513Z",
      "updatedAt": "2021-03-04T10:07:25.513Z",
      "destinations": []
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X GET 'https://api.rudderstack.com/transformations' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)
```
{% endtab %}

{% tab title="Httpie" %}
```bash
 http GET 'https://api.rudderstack.com/transformations' \
 Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/transformations/{id}" %}
{% api-method-summary %}
Retrieve a single Transformation
{% endapi-method-summary %}

{% api-method-description %}
Retrieve the **published transformations** from an ID.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
This will give a transformation object on basis of the ID.
{% endapi-method-response-example-description %}

```json
{
  "id": "swderftgy",
  "versionId": "edftgyhu",
  "name": "new Transformations-2",
  "description": "",
  "code": "function transform(events) { return events; } ",
  "codeVersion": "1",
  "createdAt": "2021-03-04T04:48:27.288Z",
  "updatedAt": "2021-03-04T04:48:27.288Z",
  "destinations": []
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X GET 'https://api.rudderstack.com/transformations/1pSvMXr651E1gWeErQNQlSQU5Bg' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http GET 'https://api.rudderstack.com/transformations/1pSvMXr651E1gWeErQNQlSQU5Bg' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)'
```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.rudderstack.com" path="/transformations/{id}" %}
{% api-method-summary %}
Update a transformation
{% endapi-method-summary %}

{% api-method-description %}
Updating a transformation creates a new **revision** and sets it as **published** if the `publish` flag is set is `true`, and its code becomes live for upcoming traffic. If the `publish` flag is `false`, it only creates a new **revision** for that transformation.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="publish" type="boolean" required=false %}
By default this flag is set to `false`. When set to `true` it will publish your transformation and make it live for the incoming traffic.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="events" type="object" required=false %}
Pass a set of JSON object to test your code.
{% endapi-method-parameter %}

{% api-method-parameter name="code" type="string" required=false %}
Update the code of an existing transformation.
{% endapi-method-parameter %}

{% api-method-parameter name="description" type="string" required=false %}
Update the description of a transformation.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
This will update transformation object on basis of id.
{% endapi-method-response-example-description %}

```json
{
  "id": "swderftgy",
  "versionId": "edftgyhu",
  "name": "new Transformations-2",
  "description": "",
  "code": "function transform(events) { return events; } ",
  "codeVersion": "1",
  "createdAt": "2021-03-04T04:48:27.288Z",
  "updatedAt": "2021-03-04T04:48:27.288Z",
  "destinations": []
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

An example request is as shown:

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X POST 'https://api.rudderstack.com/transformations/1pSvMXr651E1gWeErQNQlSQU5Bg' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json' \
-d  '{
    "name": "name updated"
}'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
 http POST 'https://api.rudderstack.com/transformations/1pSvMXr651E1gWeErQNQlSQU5Bg' \
 name='name updated'
 Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
 Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% api-method method="delete" host="https://api.rudderstack.com" path="/transformations/{id}" %}
{% api-method-summary %}
Delete a transformation
{% endapi-method-summary %}

{% api-method-description %}
Delete a **published** transformations by ID. Note that RudderStack never deletes a transformation revisions. An example request and response is as shown:
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```json
{
  "success": true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X DELETE 'https://api.rudderstack.com/transformations/1pSvMXr651E1gWeErQNQlSQU5Bg' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http DELETE 'https://api.rudderstack.com/transformations/1pSvMXr651E1gWeErQNQlSQU5Bg' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/transformations/{id}/versions" %}
{% api-method-summary %}
List all transformation versions
{% endapi-method-summary %}

{% api-method-description %}
Get all your transformation revisions by passing an ID.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="count" type="number" required=false %}
Gets the number of objects in your array. By default it always returns the first 5 objects.
{% endapi-method-parameter %}

{% api-method-parameter name="orderBy" type="string" required=false %}
You can pass it either as **`ASC`** for ascending or **`DESC`** as descending. By default, it sets the order as ascending on **`createdAt`**.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
This gets an array of transformations revisions.
{% endapi-method-response-example-description %}

```json
{
  "TransformationVersions": [
    {
      "id": "1pIYoILGZTNYZP4YYkeyNIKlitl",
      "versionId": "1pIYoLfEzcMK3D3M1ihjqI02wnx",
      "name": "Update Transformations and Publish",
      "description": "",
      "code": "",
      "codeVersion": "1",
      "createdAt": "2021-03-04T10:07:24.562Z",
      "updatedAt": "2021-03-04T10:07:24.562Z"
    },
    {
      "id": "1pIYoILGZTNYZP4YYkeyNIKlitl",
      "versionId": "1pIhxFXd7NR7XDA914rLAn5f7wq",
      "name": "Update Transformations and Publish",
      "description": "Hey I am updated again",
      "code": "export default function cube(x) { return x * x * x ; }",
      "codeVersion": "1",
      "createdAt": "2021-03-04T11:22:36.102Z",
      "updatedAt": "2021-03-08T04:22:42.646Z"
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

An example request is as shown:

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X GET 'https://api.rudderstack.com/transformations/1pIYoILGZTNYZP4YYkeyNIKlitl/versions' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http GET 'https://api.rudderstack.com/transformations/1pIYoILGZTNYZP4YYkeyNIKlitl/versions' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/transformations/{id}/versions/{versionId}" %}
{% api-method-summary %}
Retrieve a single transformation version
{% endapi-method-summary %}

{% api-method-description %}
Get a single transformation revision.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
This gets a single transformation version.
{% endapi-method-response-example-description %}

```json
{
  "id": "1pIYoILGZTNYZP4YYkeyNIKlitl",
  "versionId": "1pIYoLfEzcMK3D3M1ihjqI02wnx",
  "name": "Update Transformations and Publish",
  "description": "",
  "code": "",
  "codeVersion": "1",
  "createdAt": "2021-03-04T10:07:24.562Z",
  "updatedAt": "2021-03-04T10:07:24.562Z"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location --request GET 'https://api.rudderstack.com/transformations/1pIYoILGZTNYZP4YYkeyNIKlitl/versions/1pIhxFXd7NR7XDA914rLAn5f7wq' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http GET 'https://api.rudderstack.com/transformations/1pIYoILGZTNYZP4YYkeyNIKlitl/versions/1pIhxFXd7NR7XDA914rLAn5f7wq' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)'
```
{% endtab %}
{% endtabs %}

## Libraries

Libraries are JavaScript codes that you can write and export to be used in your transformations. They give you the flexibility for reusing and maintaining different versions of the transformation code. 

Suppose you write an aggregation function. You can easily export them and use it within different transformations just by importing that module by the library name.

#### Libraries Payload:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `name` | String | Required | Sets the name of Library. This name is used as modules when it is imported in the transformation code. |
| `description` | String | Optional | Gives a description for a library. |
| `code` | String | Optional | User-defined code. |
| `importName` | String | Optional | This is library name that user can use in his transformation code while importing that library. |
| `createdAt` | Date | Optional | The timestamp when the transformer is created. |
| `updatedAt` | Date | Optional | The timestamp when the transformer is updated. |
| `versionId` | String | Optional | Maintains a version of library every time it is updated. |
| `workspace` | Object | Optional | Dictionary of information that provides workspace data where any transformation is used. |

{% api-method method="post" host="https://api.rudderstack.com" path="/libraries" %}
{% api-method-summary %}
Create a library
{% endapi-method-summary %}

{% api-method-description %}
Create a library and get its object as a response.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="publish" type="boolean" required=false %}
By default this flag is `false`. It publishes your library to the latest version if set to `true`.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=true %}
Name of library that you wish to create
{% endapi-method-parameter %}

{% api-method-parameter name="code" type="string" required=true %}
Code of library goes here
{% endapi-method-parameter %}

{% api-method-parameter name="description" type="string" required=false %}
Description of the library goes here
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```json
{
  "id": "1pT7qGNwZfGkSqne8OE1EAcRvgK",
  "versionId": "1pT7qEnXP8Dn9tQGiKnKNY0Qwmw",
  "name": "User Defined Library4",
  "description": "Get User context",
  "code": "export default function cube(x) { return x * x * x; }",
  "updatedAt": "2021-03-08T03:53:34.468Z",
  "createdAt": "2021-03-08T03:53:34.468Z",
  "importName": "userDefinedLibrary4"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="success" %}
The `publish` flag for a library works in the same way as for destinations.
{% endhint %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X POST 'https://api.rudderstack.com/libraries' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json' \
-d '{
    "name": "User Defined Library",
    "description": "Get User context",
    "code": "export default function cube(x) { return x * x * x; }"
}'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
 http POST 'https://api.rudderstack.com/libraries' \
 name='User Defined Library' description='Get User context' code='export default function cube(x) { return x * x * x; }' \ 
 Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
 Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/libraries" %}
{% api-method-summary %}
List all libraries
{% endapi-method-summary %}

{% api-method-description %}
Get all the **published** libraries.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```json
{
  "libraries": [
    {
      "id": "1pHx15j5rXvmmQUIMBaQdIyrpr2",
      "versionId": "1pHxdlGL8IyoP7WfvRil4Qs88cp",
      "name": "Get Cube",
      "description": "First Library using apiCall",
      "code": "export default function cube(x) { return x * x ; }",
      "createdAt": "2021-03-04T05:01:46.985Z",
      "updatedAt": "2021-03-04T05:01:47.141Z",
      "importName": "getCube"
    },
    {
      "id": "1pT7933tHRBPlEMIZt5Zi3VIht1",
      "versionId": "1pT793mcqQkcyHdqwXkxHmtgMMg",
      "name": "User Defined Library",
      "description": "Get User context",
      "code": "    export default function cube(x) { return x * x * x; }",
      "createdAt": "2021-03-08T03:47:51.512Z",
      "updatedAt": "2021-03-08T03:47:51.512Z",
      "importName": "userDefinedLibrary"
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X GET 'https://api.rudderstack.com/libraries' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http GET 'https://api.rudderstack.com/libraries' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/libraries/{id}" %}
{% api-method-summary %}
Retrieve a library
{% endapi-method-summary %}

{% api-method-description %}
Get a single **published** library by ID.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```json
{
  "id": "1pT7933tHRBPlEMIZt5Zi3VIht1",
  "versionId": "1pT793mcqQkcyHdqwXkxHmtgMMg",
  "name": "User Defined Library",
  "description": "Get User context",
  "code": "    export default function cube(x) { return x * x * x; }",
  "createdAt": "2021-03-08T03:47:51.512Z",
  "updatedAt": "2021-03-08T03:47:51.512Z",
  "importName": "userDefinedLibrary"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X GET 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http GET 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.rudderstack.com" path="/libraries/{id}" %}
{% api-method-summary %}
Update a library
{% endapi-method-summary %}

{% api-method-description %}
Update a library by ID.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="publish" type="string" required=false %}
This will publish your library and make it live for the upcoming traffic.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="description" type="string" required=false %}
Description of the library.
{% endapi-method-parameter %}

{% api-method-parameter name="code" type="string" required=false %}
Code of the library.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```json
{
  "id": "1pT7933tHRBPlEMIZt5Zi3VIht1",
  "versionId": "1pT8KDAD66mQxnaUQxJpNs9qLFn",
  "name": "User Defined Library",
  "description": "Get Divisible by 2",
  "code": "export default function cube(x) { return 2 * x; }",
  "createdAt": "2021-03-08T03:47:51.512Z",
  "updatedAt": "2021-03-08T03:57:33.689Z",
  "importName": "userDefinedLibrary"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="warning" %}
Updating a library with publish has same flow as for transformations.
{% endhint %}

A sample request is as shown:

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X POST 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json' \
-d '{
    "description": "Get Divisible by 2",
    "code": "export default function cube(x) { return 2 * x; }"
}'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
description='Get Divisible by 2' code='export default function cube(x) { return 2 * x; }'
http POST 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/libraries/{id}/versions" %}
{% api-method-summary %}
List all library versions.
{% endapi-method-summary %}

{% api-method-description %}
Get all the library **revisions** for an ID.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="count" type="number" required=false %}
By passing count it gets number of object in your array. By default it always returns first 5
{% endapi-method-parameter %}

{% api-method-parameter name="orderBy" type="string" required=false %}
You can pass it either as **ASC** to get an ascending order or **DESC** for descending. By default it returns the ascending order on **createdAt**.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```json
{
  "libraryVersions": [
    {
      "id": "1pT7933tHRBPlEMIZt5Zi3VIht1",
      "versionId": "1pT793mcqQkcyHdqwXkxHmtgMMg",
      "name": "userDefinedLibrary",
      "description": "Get User context",
      "code": "    export default function cube(x) { return x * x * x; }",
      "createdAt": "2021-03-08T03:47:51.686Z",
      "updatedAt": "2021-03-08T03:47:51.686Z",
      "isPublished": false
    },
    {
      "id": "1pT7933tHRBPlEMIZt5Zi3VIht1",
      "versionId": "1pT8KDAD66mQxnaUQxJpNs9qLFn",
      "name": "userDefinedLibrary",
      "description": "Get Divisible by 2",
      "code": "export default function cube(x) { return 2 * x; }",
      "createdAt": "2021-03-08T03:57:33.738Z",
      "updatedAt": "2021-03-08T03:57:33.738Z",
      "isPublished": true
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location --request GET 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1/versions' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http GET 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1/versions' \
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.rudderstack.com" path="/libraries/{id}/versions/{versionId}" %}
{% api-method-summary %}
Retrieve a single library versions
{% endapi-method-summary %}

{% api-method-description %}
Get a single library revision.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```json
{
  "id": "1pT7933tHRBPlEMIZt5Zi3VIht1",
  "versionId": "1pT8KDAD66mQxnaUQxJpNs9qLFn",
  "name": "userDefinedLibrary",
  "description": "Get Divisible by 2",
  "code": "export default function cube(x) { return 2 * x; }",
  "createdAt": "2021-03-08T03:57:33.738Z",
  "updatedAt": "2021-03-08T03:57:33.738Z",
  "isPublished": false
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X GET 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1/versions/1pT8KDAD66mQxnaUQxJpNs9qLFn' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
 http GET 'https://api.rudderstack.com/libraries/1pT7933tHRBPlEMIZt5Zi3VIht1/versions/1pT8KDAD66mQxnaUQxJpNs9qLFn' \
 Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
 Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

## Publish the API

As an end user you can create a transformer/library and perform several edits on it. Note that  **publishing is optional at `create`**.

If you perform some edits on this version of transformer, RudderStack takes your latest update as the published version, creates a copy of the older version, and saves it as revisions. Let's assume that after creating some 7 to 8 such revisions of your transformer,  you finally decide to use the second or third version of the transformer.

This is where the RudderStack **Publish API** comes into play.

#### Publish Payload:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `transformations` | Array | Optional | Pass an array of transformer `versionIds` that you wish to publish. |
| `libraries` | Array | Optional | Pass an array of library `versionIds` you wish to publish. |

Any one of above payload must be present to make a successful `publish` call.

{% api-method method="post" host="https://api.rudderstack.com" path="/transformations/libraries/publish" %}
{% api-method-summary %}
Publish a transformation or library
{% endapi-method-summary %}

{% api-method-description %}
Publish any transformation revisions or library revisions.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="versionId" type="string" required=true %}
Transformation `versionId` that needs to be published.
{% endapi-method-parameter %}

{% api-method-parameter name="testInput" type="string" required=false %}
This is an array of JSON object in a string format.
{% endapi-method-parameter %}

{% api-method-parameter name="transformations" type="array" required=false %}
An array of object with the property as **`versionId`** and **`testInput`.**
{% endapi-method-parameter %}

{% api-method-parameter name="libraries" type="array" required=false %}
An array of object with property as **`versionId`.**
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Sends published as true if versions is successfully published.
{% endapi-method-response-example-description %}

```json
{
  "published": true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

The sample request is as shown:

```json
Request Payload :: 
{
  "transformations": [
    {
      "versionId": "publishTransformerVersionId",
      "testInput": [
        {
          "anonymousId": "8d872292709c6fbe",
          "channel": "mobile"
        },
        {
          "anonymousId": "8d872292709c6fbe",
          "channel": "mobile"
        }
      ]
    }
  ],
  "libraries": [
    {
      "versionId": "publishLibraryVersionId1"
    },
    {
      "versionId": "publishLibraryVersionId1"
    }
  ]
}
```

{% tabs %}
{% tab title="Curl" %}
```bash
curl --location -X POST 'https://api.rudderstack.com/transformations/libraries/publish' \
-H 'Authorization: Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN) \
-H 'Content-Type: application/json' \
-d '{
  "transformations": [
    {
      "versionId": "publishTransformerVersionId",
      "testInput": [
        {
          "anonymousId": "8d872292709c6fbe",
          "channel": "mobile"
        },
        {
          "anonymousId": "8d872292709c6fbe",
          "channel": "mobile"
        }
      ]
    }
  ],
  "libraries": [
    {
      "versionId": "publishLibraryVersionId1"
    },
    {
      "versionId": "publishLibraryVersionId1"
    }
  ]
}'
```
{% endtab %}

{% tab title="Httpie" %}
```bash
http POST 'https://api.rudderstack.com/transformations/libraries/publish' \
transformations='[{versionId: publishTransformerVersionId, testInput:'[{"anonymousId":"8d872292709c6fbe","channel":"mobile"},{"anonymousId":"8d872292709c6fbe","channel":"mobile"}] libraries='[{versionId: publishLibraryVersionId1,},{versionId: publishLibraryVersionId1}]' \ 
Authorization: 'Basic Base64Enc(EMAIL_ADDRESS:ACCESS_TOKEN)' \
Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
A few things to note:

* You can choose to publish some revisions transformer without the libraries.
* You can choose to publish some revisions libraries without the transformers.
* You can publish both library and transformation revisions.
{% endhint %}

{% hint style="warning" %}
Whenever you call the `publish` API, we run tests in our server to make sure you won't save any transformation/libraries code that can lead to any exceptions.

In case if your publish is failing, make sure to check your transformation code and the libraries that it is referring to.
{% endhint %}

## Contact Us

To know more about the Transformations API, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.

