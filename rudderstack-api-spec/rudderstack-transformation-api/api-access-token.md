---
description: >-
  Detailed description on managing your access token required to use the
  RudderStack Transformation API.
---

# Access Token

To consume the RudderStack Transformation API you need access to it. This guide details the steps required to generate an access token and the operations associated with it.

## Operations on the Access Token

In order to use the Transformation API, you will need an Access Token associated with your account. You can create your own Access Token by following steps below: 

{% hint style="success" %}
You can use Postman, Fiddler or any other API client to make your request.
{% endhint %}

Use HTTP Basic authentication and pass the workspace token as the user name and empty string as password.

{% api-method method="post" host="https://api.rudderstack.com" path="/accessTokens" %}
{% api-method-summary %}
Generate Access Token
{% endapi-method-summary %}

{% api-method-description %}
Generates a new access token.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorisation" type="string" required=true %}
Base64encoded **workspace token** to generate your access token**.**
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=true %}
Name of access token
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "success": true,
  "data": {
    "token": "1pHxUIA3jmxS2ip01zY696F80j7"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

A sample request is as shown:

{% tabs %}
{% tab title="Curl" %}
```text
curl --location -X POST 'https://api.rudderstack.com/accessTokens' \
-H 'Authorization: Basic Base64Enc(workspacetoken:)' \
-H 'Content-Type: application/json' \
-d '{
    "name": "some-test-access-token",
    "description": "some-description"
}'
```
{% endtab %}

{% tab title="Httpie" %}
```text
 http POST 'https://api.rudderstack.com/accessTokens' \
 name=some-test-access-token description=some-description \
 Authorization:'Basic MXBUbGc2MlpZcUgycWtDMDVmc1hUZlJQRWZyOg==' \
 Content-Type:'application/json'
```
{% endtab %}
{% endtabs %}

We use Basic Auth consisting of three parts: 

* `Basic`
* `Base64Encoded(Token)`
* Token = _`workspace token` + `colon`_

You can get the workspace token by logging into your RudderStack dashboard, as shown:

![](../../.gitbook/assets/1-copy.png)

**An example is as shown :** 

* Workspace Token **- abcd1234**
* Headers **- Basic {Base64Encoded\(abcd1234:\)}**

{% hint style="danger" %}
Copy your access token and keep it safely with you. You won't be able to get it back once lost. Your AccessToken carry many privileges, so be sure to keep them secret.
{% endhint %}

{% api-method method="get" host="https://api.rudderstack.com" path="/accessTokens" %}
{% api-method-summary %}
List all Access Tokens
{% endapi-method-summary %}

{% api-method-description %}
Get all access tokens associated with a workspace.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="" type="string" required=true %}
Base64encoded **workspace token.**
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "name": "Access Token 1",
        "description": "",
        "userId": "1pTjNPbjnUy6nlWZH78FtcTtBtD"
    },
    {
        "name": "Access Token 2",
        "description": "number 2",
        "userId": "1pTjNPbjnUy6nlWZH78FtcTtBtD"
    },
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="info" %}
Here you will get a list of objects. Note that RudderStack does not send your access token.
{% endhint %}

{% tabs %}
{% tab title="Curl" %}
```text
curl --location -X GET 'https://api.rudderstack.com/accessTokens' \
-H 'Authorization: Basic MXBUbGc2MlpZcUgycWtDMDVmc1hUZlJQRWZyOg==' \
```
{% endtab %}

{% tab title="Httpie" %}
```text
http GET 'https://api.rudderstack.com/accessTokens' \
'Authorization: Basic Base64Enc(workspacetoken:)'
```
{% endtab %}
{% endtabs %}

{% api-method method="delete" host="https://api.rudderstack.com" path="/accessTokens" %}
{% api-method-summary %}
Delete access token
{% endapi-method-summary %}

{% api-method-description %}
Delete an access token by name.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Base64encoded **workspace token**.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="name" type="string" required=true %}
Name of the access token to delete
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
All access token will be deleted with given name.
{% endapi-method-response-example-description %}

```
{
    success: true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title="Curl" %}
```text
curl --location -X DELETE 'https://api.rudderstack.com/accessTokens?name=some-test-access-token' \
-H 'Authorization: Basic MXBUbGc2MlpZcUgycWtDMDVmc1hUZlJQRWZyOg==' \
```
{% endtab %}

{% tab title="Httpie" %}
```text
http DELETE 'http://api.rudderstack.com/accessTokens?name=sdc' \
'Authorization: Basic Base64Enc(workspacetoken:)'
```
{% endtab %}
{% endtabs %}

## Errors

RudderStack uses standard HTTP response codes to indicate the success or failure of an API request. 

| **Http Response Code** | **Description** |
| :--- | :--- |
| **200 - OK** | **Everything worked as expected.** |
| **400 - Bad Request** | **The request was unacceptable. This often happens due to a missing required field.** |
| **401 – Unauthorized** | **No valid Access Token was provided, or the user does not have the required access to the resource.** |
| **403 – Forbidden** | **User does not have the permission to create or access the data.** |
| **404 - Not Found** | **The requested resource does not exist.** |
| **500 - Internal Server Error** | **Something went wrong on RudderStack's end.** |

## Contact Us

For more information on the access tokens, or if face any issues related to accessing it, you can [contact us](mailto:%20docs@rudderstack.com) or you can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

