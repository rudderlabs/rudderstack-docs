---
description: Detailed technical description of the Page API call.
---

# Page

The `page` call lets you record your website's page views with any additional relevant information about the viewed page. Many destinations require the `page` events to be called at least once every page load. 

{% hint style="success" %}
The [**RudderStack JavaScript SDK**](../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/) includes a `page` call in its snippet just after the `rudderanalytics.load` method.
{% endhint %}

## Sample Payload

A sample payload of a `page` call with most of the [**Common Fields**](common-fields.md) removed is as shown:

```javascript
{
  "type": "page",
  "name": "Home",
  "properties": {
    "title": "Home | RudderStack",
    "url": "http://www.rudderstack.com"
  }
}
```

The corresponding event that generates the above payload via the JavaScript SDK is as shown:

```javascript
rudderanalytics.page("Home");
```

{% hint style="success" %}
The SDK automatically gathers the page `name` and `url` and passes them into the event payload.
{% endhint %}

## Page Fields

Apart from the [**Common Fields**](common-fields.md), the `page` call accepts the following fields:

| **Field** | **Type** | **Presence** | **Description** |
| :--- | :--- | :--- | :--- |
| `name` | String | Optional | The name of the page. |
| `properties` | Object | Optional | Includes the properties of the page such as the `url`, `referrer`, etc. For more more information, check the **Properties** section below. |

## Properties

Properties are additional information that describe the viewed page. 

RudderStack has reserved some standard properties listed in the table below and handles them in special ways. For instance, the `path` should always be the URL path of the page and the `referrer` should be the URL of the previously viewed page.

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Property</b>
      </th>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>name</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>The page name. This is a reserved</p>
        <p>property for future use.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>path</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">The path component of the page URL.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>url</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>Full page URL. RudderStack first looks for</p>
        <p>the canonical URL. If it is not present,</p>
        <p>RudderStack uses the <code>location.href</code>
        </p>
        <p>component from the DOM API.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>title</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">The page title.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>referrer</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>The full URL of the previous page visited</p>
        <p>by the user.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>search</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>The query string component of the page</p>
        <p>URL.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>keywords</code>
      </td>
      <td style="text-align:left">Array</td>
      <td style="text-align:left">
        <p>A list or array of keywords describing the</p>
        <p>page. These keywords are similar to the
          <br />keywords used for SEO purposes.
          <br />
          <br />This property is not automatically</p>
        <p>collected.</p>
      </td>
    </tr>
  </tbody>
</table>

## Contact Us

For more information on any of the sections covered in this doc, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

 

