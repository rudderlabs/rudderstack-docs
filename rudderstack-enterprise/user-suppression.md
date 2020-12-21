---
description: >-
  Detailed technical description of the RudderStack HTTP API for suppressing
  user data.
---

# User Suppression in RudderStack

RudderStack's User Suppression feature allows you to suppress user data identified by a `userId`. It will block all the user data on all the sources as well as destinations in the RudderStack workspace.

This guide covers the user suppression feature in detail.

![](https://img.shields.io/static/v1?label=PLAN&message=ENTERPRISE&color=blueviolet&style=for-the-badge)

{% hint style="info" %}
For all the requests mentioned in this guide, we use the basic HTTP authorization.
{% endhint %}

## What is User Suppression?

RudderStack is completely GDPR and CCPA compliant. We respect the users' privacy and are committed to keeping their data secure at all times.

When a user is suppressed, RudderStack will drop the events from that user. Those events will not be shown in any of the debuggers, will not be forwarded to any destinations and will not be backed up.

{% hint style="warning" %}
Please note that once suppressed, replaying of these events will not be possible.
{% endhint %}

## HTTP Authorization

RudderStack uses Basic Authentication for authenticating all the HTTP requests as mentioned below. HTTP Basic Authentication requires a user name and password.

{% hint style="success" %}
* `workspaceToken`is the user name
* `""` is the password \(empty string\)
{% endhint %}

All the popular HTTP clients \(e.g. CURL, Postman, HTTPie\) have default support for Basic Authentication.

## Create a Suppress Regulation

To suppress a given user's data, you will need to create a suppress regulation.

A sample payload looks like the following snippet. You can provide a list of user IDs in the `values` array, as shown:

### Payload

{% code title="suppress.json" %}
```javascript
{
    "regulation_type": "Suppress",
    "attributes": {
        "name": "userId",
        "values": [
            "user-id1",
            "user-id2"
        ]
    }
}
```
{% endcode %}

### Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_workspace_token>: \
-X POST https://api.rudderlabs.com/workspaces/regulations \
-d @suppress.json \
--header "Content-Type: application/json"
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_workspace_token>: \
https://api.rudderlabs.com/workspaces/regulations < suppress.json
```
{% endtab %}
{% endtabs %}

## Get a Regulation

To get a regulation, you can send a `GET` request as shown:

{% hint style="info" %}
Pass `regulation_id` in the URL. The `regulation_id` is received in the response when a regulation is created.
{% endhint %}

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_workspace_token>: \
https://api.rudderlabs.com/workspaces/regulations/<regulation_id>
```
{% endtab %}

{% tab title="httpie" %}
```text
http -a <your_workspace_token>: \
https://api.rudderlabs.com/workspaces/regulations/<regulation_id>
```
{% endtab %}
{% endtabs %}

## List All Regulations

To get all the regulations, you can send a `GET` request as shown:

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_workspace_token>: \
https://api.rudderlabs.com/workspaces/regulations?start=0&limit=10
```
{% endtab %}

{% tab title="httpie" %}
```text
http -a <your_workspace_token>: \
https://api.rudderlabs.com/workspaces/regulations?start=0&limit=10
```
{% endtab %}
{% endtabs %}

## Delete a Regulation

To delete a regulation, you can send a `DELETE` request as shown below:

{% hint style="info" %}
Pass the `regulation_id` in the URL. The `regulation_id` is received in the response when a regulation is created.
{% endhint %}

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_workspace_token>: \
-X DELETE https://api.rudderlabs.com/workspaces/regulations/<regulation_id>
```
{% endtab %}

{% tab title="httpie" %}
```text
http -a <your_workspace_token>: DELETE \
https://api.rudderlabs.com/workspaces/regulations/<regulation_id>
```
{% endtab %}
{% endtabs %}

## Create a Suppress Regulation on a Source

You can suppress a user's data on a particular source too. A sample payload is as shown in the snippet below:

{% hint style="info" %}
You need to pass `source_id` in the URL. You can provide a list of user ids in the `values` array.
{% endhint %}

### Payload

{% code title="suppress.json" %}
```javascript
{
    "regulation_type": "Suppress",
    "attributes": {
        "name": "userId",
        "values": [
            "user-id1",
            "user-id2"
        ]
    }
}
```
{% endcode %}

### Usage

{% tabs %}
{% tab title="curl" %}
```bash
curl -u <your_workspace_token>: \
-X POST https://api.rudderlabs.com/workspaces/sources/<source_id>/regulations \
-d @suppress.json \
--header "Content-Type: application/json"
```
{% endtab %}

{% tab title="httpie" %}
```bash
http -a <your_workspace_token>: \
https://api.rudderlabs.com/workspaces/sources/<source_id>/regulations < suppress.json
```
{% endtab %}
{% endtabs %}

## Contact Us

To know more about the HTTP API spec, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.

