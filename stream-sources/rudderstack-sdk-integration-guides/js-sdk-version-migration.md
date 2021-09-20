---
description: >-
  Step-by-step guide on migrating from the RudderStack JavaScript SDK v1 to v1.1.
---

# Version Migration Guide

The **JavaScript SDK  v1.1** is a lightweight, more efficient, and optimized version of the [**RudderStack JavaScript SDK**](https://app.gitbook.com/@rudderlabs/s/rudderlabs-1/~/drafts/-Mk11o4G5XjKtMEp6R0o/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk).

v1.1 offers the following features:

* The size of the SDK is reduced by approximately **70%**, thus reducing its loading time consideraby.
* The destination SDKs are separated from the core JavaScript SDK. They are published as individual plugins.
* The [**device mode**](https://docs.rudderstack.com/connections/rudderstack-connection-modes#device-mode) destinations will be loaded dynamically as per your specified dashboard configurations.

## Comparing v1 and v1.1

|Parameter|v1|v1.1|
|---------|--|----|
|**Size**|112 KB|32.2 KB|
|**Destination SDKs**|All the device mode destination SDKs are bundled with the core SDK.|The device mode destination SDKs are dynamically loaded per the source configuration in the dashboard.|

## Migrating to v1.1

This section covers the steps to migrate to v1.1 of the JavaScript SDK, depending on your previous installation of the JavaScript SDK (v1).

### Case 1: Loading the SDK from the RudderStack CDN

If you are loading the JavaScript SDK from RudderStack's CDN, simply update the script tag in your website.

For **v1**:

```html
<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js" />
```

For **v1.1**:

```html
<script src="https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js" />
```

### Case 2: Forwarding/proxying the RudderStack CDN

If you are forwarding or proxying RudderStack's CDN, follow these steps:

* Log into your CDN provider account.
* Go to the distribution whose origin is set to RudderStack's CDN. Ensure that the entire domain (**`https://cdn.rudderlabs.com`**) is set as the origin.
* Then, go to **Behaviors**, and check that the sub-path `/v1.1/*` is **not configured to be blocked** in any way. 

{% hint style="info" %}
This step is required to ensure that both the core SDK and destination SDKs are forwarded properly.
{% endhint %}

* Finally, update the script tag in your website:

For **v1**:

```html
<script src="https://<subdomain>.<yourdomain>.com/v1/rudder-analytics.min.js" />
```

For **v1.1**:

```html
<script src="https://<subdomain>.<yourdomain>.com/v1.1/rudder-analytics.min.js" />
```

### Case 3: Self-hosting RudderStack's CDN

If you have cloned RudderStack's JavaScript SDK and are self-hosting it via your own CDN, follow the steps below:

* Download the core JavaScript SDK v1.1 - [**https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js**](https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js).
* Download all the destination SDKs as listed [**here**]().
* Move all the downloaded files in your preferred location.

{% hint style="info" %}
We recommend maintaining the following structure:

`<BASE_LOCATION>` <br>
---> `<CORE_JS_SDK_v1.1>` <br>
-------> `<js-integrations>`<br>
-------------> `<*.min.js>` - the destination SDK file
{% endhint %}

* Next, check if the core SDK filename is different than `rudder-analytics.min.js`. If **yes**, update the script tag in your website as shown below:

```html
<script>
// rudderanalytics object initialization
// ...
// ...
// provide the location of the destination SDKs in the load options
rudderanalytics.load(<your_write_key>, <your_data_plane_url>, {
    destSDKBaseURL: "https://cdn.customer.com/js-integrations"
});
// ...
// ...
</script>

<script src="https://cdn.customer.com/custom-analytics.js"></script>
```

* If the core SDK filename **is** `rudder-analytics.min.js`, verify if the destination SDKs are located next to the core SDK file under the `js-integrations` directory (as highlighted in the tip above). If **yes**, update the script tag in your website as shown:

```html
<script src="https://cdn.customer.com/rudder-analytics.js"></script>
```

* If the destination SDKs are **not** located next to the core SDK file under the `js-integrations` directory, then update the script tag as shown:

```html
<script>
// rudderanalytics object initialization
// ...
// ...
// provide the location of the destination SDKs in the load options
rudderanalytics.load(<your_write_key>, <your_data_plane_url>, {
    destSDKBaseURL: "https://cdn.customer.com/custom-js-integrations"
});
// ...
// ...
</script>

<script src="https://cdn.customer.com/rudder-analytics.js"></script>
```

## FAQs

### How are the destination SDKs loaded in v1.1?

In v1.1, the core JavaScript SDK does not contain any destination-specific SDKs by default. Depending on the device mode destinations configured in your dashboard (control plane), the necessary SDKs are dynamically fetched from the hosted location.

The hosted location can be either of:

* RudderStack's CDN
* Your CDN that proxies the RudderStack CDN, or
* A self-hosted domain

{% hint style="info" %}
Refer to the **Migrating to v1.1** section above for more details.
{% endhint %}

### How does RudderStack determine the destination SDKs' root location?

RudderStack follows the below precedence order while determining the root location of the destination SDKs:

1. RudderStack refers to the `destSDKBaseURL` value in the `options` parameter of the `load` API call.
2. If absent, RudderStack then checks the `src` attribute of the `<script>` tag that adds the core JavaScript SDK to your website. `/js-integrations` is automatically appended to the root location.
3. If none of the two options above are applicable, RudderStack uses the default CDN URL ([**https://cdn.rudderlabs.com/v1.1/js-integrations/**](https://cdn.rudderlabs.com/v1.1/js-integrations/)).

The above approach ensures that minimal changes are required from your end.

## Contact us

In case of any issues or questions on any of the sections covered in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://rudderstack.com/join-rudderstack-slack-community) channel.
