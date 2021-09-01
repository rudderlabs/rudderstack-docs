---
description: Detailed technical description of the Identify API call.
---

# Identify

The `identify` call lets you identify a visiting user and associate them to their actions. It also lets you record the traits about them like their name, email address, etc.

{% hint style="info" %}
As a best practice, make sure `identify` is called at the start of every session or page load for logged-in users, if possible. This will ensure all their latest traits are captured.
{% endhint %}

## When Should I Call `identify`?

Ideally, you should call `identify` in the following scenarios:

* After a user registers on your website or app
* After a user logs in to your site or app
* When a user updates their information, e.g., residential address, email ID
* When you load a page accessible by a logged-in user: Although this is optional, many tools \(such as Intercom, for example\) require an initial identify call to know who the user is when they first start the session.

## Sample Payload

A sample payload for the `identify` event after removing the common fields mentioned in the [**Common Fields**](common-fields.md) section is as shown:

```javascript
{
  "type": "identify",
  "traits": {
    "name": "Name Surname",
    "email": "sample@example.com"
  },
  "userId": "hashed_user_id"
}
```

The corresponding event that generates the above payload via the JavaScript SDK is as shown:

```javascript
rudderanalytics.identify("hashed_user_id", {
  name: "Name Surname",
  email: "sample@example.com"
});
```

## Identify Fields

The `identify` call has the following fields in addition to the [**Common Fields**](common-fields.md):

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `userId` | String | Optional, **if** `anonymousId` is set. | Your user's unique identifier. Every `identify` call requires a `userId` or an `anonymousId`. |
| `traits` | Object | Optional | Includes the traits of the user such as their `name`, `email`, etc. For more more information, check the **Traits** section below. |

## User ID vs Anonymous ID

RudderStack requires every `identify` call to have either a `userId` or an `anonymousId`. This section highlights the difference between the two.

### User ID

A user ID \(`userId`\) uniquely identifies your user present in your database. It is a permanent identifier of your customer which never changes - like a database ID. 

{% hint style="info" %}
For `identify` calls, you should include a `userId` as often as possible to identify the most up to date traits of the customer.
{% endhint %}

{% hint style="success" %}
We strongly recommend using a database ID as the `userId` instead of usernames or email addresses. This is because the user may update their username or email address at any point in the future. Instead, you can pass them as **traits**.
{% endhint %}

### Anonymous ID

There are instances where you may get a visitor on your website/app who may or may not be your customer. Nonetheless, you still want to track their actions and tie them to various events, page views, and traits. In such cases, you should use an Anonymous ID \(`anonymousId`\) to identify this user.

{% hint style="info" %}
An anonymousId can be any identifier. For instance, you can use a session ID corresponding to the visitor's session. If you don't have a readily available identifier, we recommend generating a **UUID**.
{% endhint %}

{% hint style="success" %}
RudderStack's web and mobile [**SDKs**](../../../stream-sources/rudderstack-sdk-integration-guides/) automatically use anonymous IDs to track unknown users on your website or mobile apps, so you don't have to worry about including an `anonymousId` explicitly.
{% endhint %}

## Identify Traits

Traits are bits of user information included in an `identify` call. Some example of traits include age, gender, or some specific details, e.g. if a user has a premium or a basic plan.

RudderStack has some reserved traits that it handles in special ways. These are listed in the table below:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Trait</b>
      </th>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>id</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">Your user&apos;s unique ID.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>firstName</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">User&apos;s first name.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>lastName</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">User&apos;s last name.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>name</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>Full name of the user. If you have</p>
        <p>already passed the <code>firstName</code> and</p>
        <p><code>lastName</code>, RudderStack will</p>
        <p>automatically fill this field.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>age</code>
      </td>
      <td style="text-align:left">Number</td>
      <td style="text-align:left">User&apos;s age.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>email</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">User&apos;s email address.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>phone</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">User&apos;s phone number.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>address</code>
      </td>
      <td style="text-align:left">Object</td>
      <td style="text-align:left">
        <p>User&apos;s street address. This can</p>
        <p>optionally contain either / all of
          <br />the following fields:</p>
        <p></p>
        <ul>
          <li><code>city</code>
          </li>
          <li><code>country</code>
          </li>
          <li><code>postalCode</code>
          </li>
          <li><code>state</code>
          </li>
          <li><code>street</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>birthday</code>
      </td>
      <td style="text-align:left">Date</td>
      <td style="text-align:left">User&apos;s date of birth.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>company</code>
      </td>
      <td style="text-align:left">Object</td>
      <td style="text-align:left">
        <p>User&apos;s company. This can</p>
        <p>optionally contain either / all of
          <br />the following fields:</p>
        <p></p>
        <ul>
          <li><code>name</code> (String)</li>
          <li><code>id</code> (String / Number)</li>
          <li><code>industry</code> (String)</li>
          <li><code>employee_count</code> (Number)</li>
          <li><code>plan</code> (String)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>createdAt</code>
      </td>
      <td style="text-align:left">Date</td>
      <td style="text-align:left">
        <p>Date of user&apos;s account creation.</p>
        <p>We recommend using the <b>ISO-8601</b>
        </p>
        <p>date string format.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>description</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">User&apos;s description.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>gender</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">User&apos;s gender.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>title</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>User&apos;s title related to their position</p>
        <p>in their company.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>username</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>User&apos;s username. This should be</p>
        <p>unique for every user.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>website</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">User&apos;s website.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>avatar</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">URL of the user&apos;s avatar image.</td>
    </tr>
  </tbody>
</table>

{% hint style="success" %}
Different destinations recognize some of the above traits differently. For example, Mixpanel recognizes `createdAt` as `$created`, while Intercom recognizes it as `created_at`.

With RudderStack, you don't have to worry about these inconsistencies at all, as it handles these destination-specific conversions automatically.
{% endhint %}

## Passing Traits to an `identify` Call

RudderStack lets you pass traits to an `identify` call. These traits will be stored in a cookie on your browser or mobile device and will be passed automatically to all the subsequent calls.

An example of how you can pass traits to an `identify` call from our [**JavaScript SDK**](../../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) is shown in the following code snippet. You can check our other [**SDKs**](../../../stream-sources/rudderstack-sdk-integration-guides/) for more examples.

```javascript
rudderanalytics.identify("user-id", {
  name: "username",
  gender: "male"
});
```

In the above example, `{name: "username", gender: "male"}` are the traits stored in a cookie and passed along all the subsequent calls.

## Contact Us

For more information on any of the sections covered in this doc, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.







