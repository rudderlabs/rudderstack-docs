---
description: Step-by-step guide to ingest your event data from App Center into RudderStack.
---

# App Center

[App Center](https://appcenter.ms/) is Microsoft's cross-platform build automation and management platform that lets you seamlessly manage your app's lifecycle. With App Center, you can easily manage and automate your builds, effectively test your apps in the cloud, and monitor their real-time usage with the help of crash data and analytics.

This document guides you in setting up App Center as a source in RudderStack. App Center can send various events that you trigger to Rudderstack by simply adding a webhook endpoint that points to RudderStack. App Center sends events to the Rudderstack on a Build Success (or) Failure, on release of new version of an app, on an app crash and it also lets you to configure what events to be sent as per you wish on the its dashboard.

## Getting Started

In order to add App Center as a source in RudderStack, please follow these steps:

* From your [RudderStack dashboard](https://app.rudderstack.com/), click on **Add Source**. From the list of sources, select **App Center**, as shown:

![Choose App Center as a source](../.gitbook/assets/AppcenterSource.png)

* Enter the name of your source, and click on **Next**.

![Provide source name](../.gitbook/assets/AppcenterCreation.png)

* Head over to your App Center account and select the `app` you wanted to configure and then navigate to the **Webhooks** section under **Settings** from the sidebar and then create a new Webhook in the view as shown below:

![](../.gitbook/assets/AppcenterWebhookConfig.png)

* In the **URL** textbox, add an URL pointing to RudderStack in the following format:`<DATA_PLANE_URL>/v1/webhook?writeKey=<your_App Center_source_write_key>`



An example URL should like the following:

```http
https://hosted.rudderlabs.com/v1/webhook?writeKey=1bCenS7ynqHh8ETX8s5Crjh22J
```

{% hint style="warning" %}
Make sure you add the `writeKey` as query parameter to the URL. This is required to prevent the webhook from failing for the lack of a valid write key.
{% endhint %}

{% hint style="info" %}
You can validate the endpoint using the **Send Test** button.
{% endhint %}

![Endpoint Configuration](../.gitbook/assets/AppcenterWebhookTest.png)

* Finally, save the endpoint.


## RudderStack Event Transformation

The events from App Center are ingested into RudderStack after converting it into the RudderStack event format. For example, the `app_name` set by App Center is set as `context.app.name`.

The event sent by App Center on various events are converted into a Rudderstack `track` call with a designated name and its properties as the entire event recieved from App Center.
You can look at the table below to understand how various events from App Center are converted into Rudderstack track calls.

| App Center Event | RudderStack Track Event Name |
| :--- | :--- |
| `On Success of a Build` | `Build Succeeded` |
| `On Failure of a Build` | `Build Failed` |
| `On Release of a new version` | `Released Version <X.YY>` |
| `On an App Crash` | `App Crashed` |

Also, RudderStack populates the following properties from App Center event payload to the RudderStack event:

| App Center Property | RudderStack Property |
| :--- | :--- |
| `app_name`, `app_display_name` | `context.app.name` |
| `build_id` | `context.app.build` |
| `os`, `platform` | `context.device.type`, `context.os.name` |
| `start_time` | `originalTimeStamp` |
| `sent_at` | `sentAt` |
| `short_version`, `app_version` | `context.app.version` |
| `bundle_identifier` | `context.app.namespace` |


## Contact Us

If you come across any issues while configuring App Center as a source with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel - we will be happy to talk to you!

