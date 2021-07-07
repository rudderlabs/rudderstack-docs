---
description: >-
  Detailed technical description of the RudderStack Pixel API to track and
  capture event data efficiently.
---

# Pixel API

The RudderStack Pixel API allows you to track your customer event data from anywhere and route it to your desired destinations. 

This API is very useful in scenarios where making a POST request is not possible. Some examples include tracking email addresses and page views where POST requests don't add or append any value.

## Sending a `page` call to RudderStack

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">URL</td>
      <td style="text-align:left"><em><code>/pixel/v1/page</code></em>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Method</td>
      <td style="text-align:left"><code>GET</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL Parameters:</b>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Required</td>
      <td style="text-align:left">
        <p></p>
        <p><code>writeKey=${writeKey}</code>
        </p>
        <p><code>anonymousId=${anonymousId}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Optional</td>
      <td style="text-align:left">
        <p></p>
        <p><code>userId=${userId}</code>
        </p>
        <p><code>name=${page_name}</code>
        </p>
        <p><code>context.library.name</code>
        </p>
        <p><code>context.library.version</code>
        </p>
        <p><code>context.platform</code>
        </p>
        <p><code>context.locale</code>
        </p>
        <p><code>context.userAgent</code>
        </p>
        <p><code>context.screen.width</code>
        </p>
        <p><code>context.screen.height</code>
        </p>
        <p><code>context.page.path</code>
        </p>
        <p><code>context.page.url</code>
        </p>
        <p><code>context.page.referrer</code>
        </p>
        <p><code>context.page.title</code>
        </p>
        <p><code>properties.&lt;*key1*&gt;=${value}</code>
        </p>
        <p><code>properties.&lt;*key2*&gt;=${value}</code>
        </p>
        <p><code>properties. ...</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Data Parameters</td>
      <td style="text-align:left">None</td>
    </tr>
    <tr>
      <td style="text-align:left">Success Response</td>
      <td style="text-align:left">
        <ul>
          <li>Code: <code>200</code>
          </li>
          <li>Content: <code>OK</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Error Response</td>
      <td style="text-align:left">
        <ul>
          <li>Code: <code>400 Bad Request</code>
          </li>
          <li>Content: <code>error string</code>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

A sample call is as shown below:

```text
https://hosted.rudderlabs.com/pixel/v1/page?writeKey=${writeKey}&context.library.name=Rudderstack AMP SDK&context.library.version=1.0.0&context.platform=AMP&anonymousId=${anonymousId}&context.locale=${browserLanguage}&context.userAgent=${userAgent}&context.page.path=${canonicalPath}&context.page.url=${canonicalUrl}&context.page.referrer=${documentReferrer}&context.page.title=${title}&context.screen.width=${screenWidth}&context.screen.height=${screenHeight}&properties.path=${canonicalPath}&properties.url=${canonicalUrl}&properties.referrer=${documentReferrer}&properties.title=${title}&name=${pageName}
```

{% hint style="warning" %}
For this endpoint, RudderStack expects that the basic page view properties like `path`, `url`, `referrer`, `title` be passed either with `context.page.<page_basic_properties>` or with `properties.<page_basic_properties>`.
{% endhint %}

{% hint style="info" %}
The dot ****\(`.`\) separated query parameters are mapped by RudderStack to a familiar [`page`](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#8-1-page-payload) payload before sending them to the destinations.
{% endhint %}

{% hint style="warning" %}
Note that for this endpoint, RudderStack does not currently support overriding the `integration` key for sending data to selective destinations.
{% endhint %}

## Sending a `track` call to RudderStack

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">URL</td>
      <td style="text-align:left"><em><code>/pixel/v1/track</code></em>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Method</td>
      <td style="text-align:left"><code>GET</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL Parameters:</b>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Required</td>
      <td style="text-align:left">
        <p></p>
        <p><code>writeKey=${writeKey}</code>
        </p>
        <p><code>anonymousId=${anonymousId}</code>
        </p>
        <p><code>event=${event_name}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Optional</td>
      <td style="text-align:left">
        <p><code>userId=${userId}</code>
        </p>
        <p><code>context.library.name</code>
        </p>
        <p><code>context.library.version</code>
        </p>
        <p><code>context.platform</code>
        </p>
        <p><code>context.locale</code>
        </p>
        <p><code>context.userAgent</code>
        </p>
        <p><code>context.screen.width</code>
        </p>
        <p><code>context.screen.height</code>
        </p>
        <p><code>context.page.path</code>
        </p>
        <p><code>context.page.url</code>
        </p>
        <p><code>context.page.referrer</code>
        </p>
        <p><code>context.page.title</code>
        </p>
        <p><code>properties.&lt;*key1*&gt;=${value}</code>
        </p>
        <p><code>properties.&lt;*key2*&gt;=${value}</code>
        </p>
        <p><code>properties. ...</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Data Parameters</td>
      <td style="text-align:left">None</td>
    </tr>
    <tr>
      <td style="text-align:left">Success Response</td>
      <td style="text-align:left">
        <ul>
          <li>Code: <code>200</code>
          </li>
          <li>Content: <code>OK</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Error Response</td>
      <td style="text-align:left">
        <ul>
          <li>Code: <code>400 Bad Request</code>
          </li>
          <li>Content: <code>error string</code>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

A sample call is as shown below:

```text
https://hosted.rudderlabs.com/pixel/v1/track?writeKey=${writeKey}&context.library.name=Rudderstack AMP SDK&context.library.version=1.0.0&context.platform=AMP&anonymousId=${anonymousId}&context.locale=${browserLanguage}&context.userAgent=${userAgent}&context.page.path=${canonicalPath}&context.page.url=${canonicalUrl}&context.page.referrer=${documentReferrer}&context.page.title=${title}&context.screen.width=${screenWidth}&context.screen.height=${screenHeight}&event=${eventName}&properties.key1=value1&properties.key2=value2
```

{% hint style="warning" %}
For this endpoint, RudderStack expects the basic `page` view properties like `path`, `url`, `referrer`, and `title` to be passed with `context.page.<page_basic_properties>`. The event-related properties should be sent as `properties.<*key1*>=${value}`.
{% endhint %}

{% hint style="info" %}
The dot \(`.`\) separated query parameters are mapped by RudderStack to a familiar [`track`](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#7-2-track-usage) payload before being sent to destinations. 
{% endhint %}

{% hint style="warning" %}
Note that for this endpoint, RudderStack currently does not support overriding the `integration` key for sending the data to selective destination.
{% endhint %}

## Contact Us

To know more about the Pixel API spec, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

