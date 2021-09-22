---
description: Step-by-step guide to send your event data from RudderStack to Sentry.
---

# Sentry

[**Sentry**](https://sentry.io/about/)Sentry is open-source error tracking that helps developers monitor and fix crashes in real time.

RudderStack supports Sentry as a destination to which you can send your event data directly.

## Getting Started

Before configuring Sentry as a destination in RudderStack, verify if Sentry supports the source platform you are sending the events from. Refer to the following table:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | - | - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the source platform supports sending events to Sentry, follow these steps:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source and select **Sentry** from the list of destinations.

{% hint style="info" %}
Follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}


![Configuration Settings for Sentry](../../.gitbook/assets/sentry.png)

### Configuration Settings

To successfully configure Sentry as a destination, you will need to configure the following settings:

* **Public DSN:** Enter the public DSN of your Sentry project here. This a mandatory field.

{% hint style="info" %}
Refer to the **FAQ** section below for more information on getting your public DSN.
{% endhint %}

* **Environment:** Enter the value you want Rudderstack to set as the environment configuration in your Sentry dashboard.

* **Set Release By Property:** This field helps to track the version of your application in Sentry dynamically. The property set here will be searched in the global window object. If found, RudderStack will use that particular version. Otherwise, the value set in the `Release` field will be used as default.

* **Release:** Used for tracking the version of your application in Sentry.

* **Server Name:** It can be used to track the host on which the client is running. User can input the server name or even the Device ID as well.

* **Logger:** The name you want Sentry to use as logger.

* **Ignore Errors:** A list of error messages you do not want Sentry to notify you for. It can be entered as string or regular expression.

* **Include Paths:** This field should contain the regex patterns of urls that are part of the app in the stack trace. The other frames will appear as collapsed in the Sentry dashboard.

* **Allow URLs:** List of regex patterns or exact url strings, error from which needs to be exclusively sent to Sentry. The url of actual javascript files should match the whitelist urls.

* **Deny URLs:** The inverse of Allow Urls and similar to ignoreErrors. It is the list of regex patterns or exact url strings, error from which needs to be ignored while sending to sentry.

* **Debug Mode:** This is set to false by default. Set this to “true” to enable Sentry’s debug mode. Remember, in debug mode, no events are sent to your sentry instance.


## Identify

When an `identify` call is made, `Sentry.setUser` is called by passing the traits.

{% hint style="info" %}
The identify call will be discarded if none of the userId, userName, email or ip_address is present. Atleast one of these four fields are needed to capture a user information.
{% endhint %}

{% hint style="info" %}
The userId is mapped to `id` while setting the user in Sentry.
{% endhint %}


A sample `identify` call is as shown below:

```javascript
rudderanalytics.identify("userid", {
  name: "Name",
  email: "name@website.com",
});
```

## FAQ

### How do I get my Public DSN
To get your Public DSN, follow these steps:

* Log into your [**Sentry account**](https://sentry.io/auth/login/).
* In the left navigation bar, go to **Projects** .
* Click on the right most settings icon. This will open the settings window.
* Click on `Client Keys (DSN)` under SDK Setup.
* Copy the DSN and use it in RudderStack destination configuration.

## Contact Us

If you come across any issues while configuring Sentry with RudderStack, feel free to [**contact us**](mailto:docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

