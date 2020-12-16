---
description: >-
  Step-by-step guide for sending your event data from your AMP page to
  RudderStack
---

# AMP Analytics

The RudderStack AMP component makes it easy to send the event data from your AMP page to numerous destinations through RudderStack. Now you don't need to implement or test multiple components for different destinations for your event data. This component collects the default properties and sends a `page` event to RudderStack.

{% hint style="info" %}
Since the AMP source sends the data directly to the RudderStack data plane, we support only `cloud-mode` destinations for AMP projects.
{% endhint %}

## Getting Started

{% hint style="info" %}
You can learn more about the AMP project from their [official website](https://amp.dev/) if you are new to this domain. To get started and set up your AMP project, you might want to check out their [Quick Start guide](https://amp.dev/documentation/guides-and-tutorials/start/create/). 
{% endhint %}

Once you are done with the initial setup of your AMP project, follow the steps below to start sending your event data to RudderStack:

* Start with adding an AMP source to your RudderStack [dashboard](https://app.rudderstack.com). 

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) tutorial guide to learn how to add a source in RudderStack.
{% endhint %}

* Include the RudderStack AMP component before the closing `</head>` tag, as shown:

```markup
<script async custom-element="amp-analytics" 
src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
```

* Start sending the event data to RudderStack by adding the following script inside of your `<body>` tag.
* You can fetch the AMP config JSON from our [CDN](https://cdn.rudderlabs.com/amp/rudderstack.json). The following example shows you how to do this:

```markup
<amp-analytics config="https://cdn.rudderlabs.com/amp/rudderstack.json">
  <script type="application/json">
    {
      "vars": {
        "writeKey": <YOUR_WRITE_KEY>,
        "dataPlaneUrl": <DATA_PLANE_URL>,
        "pageName": "Your Page Name"
      }
    }
  </script>
</amp-analytics>
```

## Page

You can record the page views on your website using the `page` request. You can also add custom properties to your page request using the `extraUrlParams` object. Refer to the section on [adding custom properties](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/getting-started-with-javascript-sdk/amp-analytics#custom-properties) for more details.

RudderStack's AMP analytics component includes an automatic page view. You can set the name of the automatic page view through the `pageName` var.

{% hint style="warning" %}
If you fail to provide the value for the `pageName` variable, RudderStack automatically sets the page name to `Unknown Page`
{% endhint %}

```markup
<amp-analytics config="https://cdn.rudderlabs.com/amp/rudderstack.json">
<script type="application/json">
  {
    "vars": {
      "writeKey": <YOUR_WRITE_KEY>,
      "dataPlaneUrl": <DATA_PLANE_URL>,
      "pageName": "Your Page Name"
    }
  }
</script>
</amp-analytics>
```

## Track

You can record any user event on your website using the `track` request, or create a [trigger](https://amp.dev/documentation/components/amp-analytics/#triggers) to do so. You need to set the event's name in the trigger's variables, as shown in the code snippet below:

```markup
<body>
<amp-analytics config="https://cdn.rudderlabs.com/amp/rudderstack.json">
  <script type="application/json">
  {
    "vars": {
      "writeKey": <YOUR_WRITE_KEY>,
      "dataPlaneUrl": <DATA_PLANE_URL>,
      "pageName": "My AMP Page"
    },
    "triggers": {
      "clickEvent": {
        "on": "click",
        "selector":"#clickTrigger",
        "request": "track",
        "vars": {
          "eventName": "new click event"
        },
        "extraUrlParams": {
          "properties.clickType": "href"
        }
      }   
    }
  }
  </script>
</amp-analytics>
Track - Click <a href="#" id="clickTrigger">here</a> to send
</body>
```

## Properties

You can send extra properties for your `page` or `track` event to add more information along with the request. Once you mention the properties as `extraUrlParams` to the `amp-analytics` tag of your implementation, it will be passed to RudderStack for further processing.

{% hint style="warning" %}
Prepend `properties.` with the `extraUrlParams` so that it can be parsed as the property value in RudderStack
{% endhint %}

### Default Properties

We collect the following properties with each `track` and `page` view:

```javascript
{
  "anonymousId": "amp-<unique-id>",
  "context.locale": "en-US",
  "context.page.path": "/article",
  "context.page.url": "http://example.com/article",
  "context.page.referrer": "referrer",
  "context.page.title": "My Article",
  "context.screen.width": 600,
  "context.screen.height": 800
}
```

### Custom Properties

You can choose to send the custom properties by adding the `extraUrlParams` object. Every property name should be prefixed with `properties`.

A sample call with custom properties is as shown:

```markup
<amp-analytics config="https://cdn.rudderlabs.com/amp/rudderstack.json">
<script type="application/json">
  {
    "vars": {
      "writeKey": <YOUR_WRITE_KEY>,
      "dataPlaneUrl": <DATA_PLANE_URL>,
      "pageName": "Your Page Name"
    },
    "extraUrlParams": {
      "properties.type": "article",
      "properties.published_at": "2016-06-28",
      "properties.author": "John Doe",
      "properties.button_type": "read-more",
      "properties.article_id": "my-article-id"
    }
  }
</script>
</amp-analytics>
```

Any property set at the top-level `extraUrlParams` object will be sent with each request. For example, the property `article_id` will be sent for all the requests triggered by this snippet. If you want to add custom properties to a specific event or a `page` call, you need to add an `extraUrlParams` object within your trigger configuration. The following code snippet shows an example of how to do so:

```markup
<body>
  <amp-analytics config="https://cdn.rudderlabs.com/amp/rudderstack.json">
    <script type="application/json">
    {
      "vars": {
        "writeKey": <YOUR_WRITE_KEY>,
        "dataPlaneUrl": <DATA_PLANE_URL>,
        "pageName": "My AMP Page"
      },
      "triggers": {
        "clickEvent": {
          "on": "click",
          "selector":"#clickTrigger",
          "request": "track",
          "vars": {
            "eventName": "new click event"
          },
          "extraUrlParams": {
            "properties.clickType":"href"
          }
        }   
      },
      "extraUrlParams": {
        "properties.type": "article",
        "properties.published_at": "2016-06-28",
        "properties.author": "John Doe",
        "properties.button_type": "read-more",
        "properties.article_id": "my-article-id"
      }
    }
    </script>
  </amp-analytics>
  Track - Click <a href="#" id="clickTrigger">here</a> to send
</body>
```

The property `clickType` will be sent only for the `track` request, whereas the property `article_id` will be sent for both the requests \(the automatic `page` call and `track`\).

### UTM Parameters

We do not collect the UTM information from our SDK. Instead, we encourage you to send the properties as `extraUrlParams`.

An example of using `extraUrlParams` is as shown:

```markup
<amp-analytics config="https://cdn.rudderlabs.com/amp/rudderstack.json">
  <script type="application/json">
    {
    "vars": {
      "writeKey": <YOUR_WRITE_KEY>,
      "dataPlaneUrl": <DATA_PLANE_URL>,
      "pageName": "Your Page Name"
    },
    "extraUrlParams": {
      "properties.utm_source": "google",
      "properties.utm_campaign": "2016-06-28",
      "properties.utm_medium": "email"
    }
  }
  </script>
</amp-analytics>
```

## AMP Linker

You can use the [AMP Linker](https://amp.dev/documentation/examples/advertising-analytics/joining_analytics_sessions/) feature to ensure a merged session for users navigating from cached AMP pages\(on an AMP cache\) to AMP pages on your domain. When a user navigates from a cached AMP page to an AMP page on your domain, the linker forwards\(sends\) the current `AMP ClientID` by adding a URL parameter to the outgoing link. The AMP page on your domain receives this parameter and uses it to set a first-party cookie. Once this cookie is set, both AMP and NON-AMP pages on your domain would use this cookie's value to identify the user uniquely. In this way, the same AMP Client ID\(set by the cached AMP page\) is used to identify the user in all contexts.

The code snippet below demonstrates how to enable this feature.

```markup
<body>
  <amp-analytics config="https://cdn.rudderlabs.com/amp/rudderstack.json">
    <script type="application/json">
      {
        "vars": {
          "writeKey": WRITE_KEY,
          "dataPlaneUrl": DATA_PLANE_URL,
          "pageName": "Your Page Name"
        },
        "linkers": {
          "enabled": true
        }
      }
    </script>
  </amp-analytics>
</body>
```

## Contact us

In case of any queries, please feel free to [reach out to us](mailto:%20contact@rudderstack.com). In case of any bugs or discrepancies, please feel free to open an issue on our [GitHub Issues](https://github.com/rudderlabs/rudder-sdk-amp/issues) page, or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

