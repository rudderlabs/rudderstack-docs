---
description: >-
  Detailed documentation on installing and setting up RudderStack from scratch
  on your platform of choice
---

# Install and Set Up RudderStack

This guide is aimed at helping you install and set up RudderStack correctly on a variety of platforms. Please feel free to [reach out to us](https://rudderstack.com/contact/) in case you are stuck anywhere in the process, or want more information on any of the topics covered below.

{% hint style="success" %}
The easiest way to get started with RudderStack is to [sign up for free](https://app.rudderlabs.com/signup?type=freetrial) on [**RudderStack Cloud** **Free**](https://app.rudderlabs.com/signup?type=freetrial).
{% endhint %}

You can also set up and use RudderStack on your platform of choice:

* Instructions for [Docker](docker.md)
* Instructions for [Kubernetes](kubernetes.md)
* Instructions for a [Native Installation](native-installation.md)
* Instructions for a [Developer Machine Setup](developer-machine-setup.md)

{% hint style="info" %}
If you are planning to use RudderStack in production, we strongly recommend using the [Kubernetes](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/kubernetes) Helm charts. We update our Docker images with bug fixes more frequently than our GitHub repository \(where we release once a month\).
{% endhint %}

{% hint style="info" %}
For routing and processing the events to the RudderStack backend, a **Data Plane URL** is required. _\*\*_Here's how to get the data plane URL:

* If you're using the **open-source** version of RudderStack, you are required to set up your own data plane by installing and setting up RudderStack in your preferred dev environment.
* If you're using the **enterprise** version of RudderStack, please contact us for the data plane URL with the email ID you used to sign up for RudderStack.
{% endhint %}

## How to Check the Status of Your Data Plane

To check the status of your data plane, simply run the following command:

```bash
CURL <DATA_PLANE_URL>/health
```

A sample command to check the data plane status is as shown:

```bash
CURL https://hosted.rudderlabs.com/health
```

The output is as follows:

```text
{"server":"UP", "db":"UP","acceptingEvents":"TRUE","routingEvents":"TRUE","mode":"NORMAL","goroutines":"15364", "backendConfigMode": "API", "lastSync":"2020-12-01T04:20:33Z", "lastRegulationSync":"2020-11-30T21:40:27Z"}
```

The RudderStack server supports two running modes:

* **Normal** \(`"mode": "NORMAL"`\): In this mode, the RudderStack server runs as expected, and there are no issues.
* **Degraded** \(`"mode": "DEGRADED"`\): The RudderStack server enters the degraded mode if it keeps crashing while processing the events, after a threshold number of restarts is reached. In this mode, RudderStack still receives and stores the events but does not process them and route them to your specified destinations.

{% hint style="success" %}
For more information on the RudderStack Server running modes, refer to our [High Availability guide](https://docs.rudderstack.com/administrators-guide/high-availability#rudderstack-server-running-modes).
{% endhint %}

## How to Send Test Events

Before sending test events to verify your RudderStack installation, you will first need to clone our Github repository using the following command:

```bash
git clone https://github.com/rudderlabs/rudder-server.git
```

Once you have installed and set up RudderStack on your target machine, please follow the steps below to test your RudderStack installation:

* If you already have a Google Analytics account, keep the tracking ID handy. If not, please create one and get the tracking ID. The Google Analytics account needs to have a `Web`Property \(`Web+App` doesn't seem to work\)
* Create one source \(Android or iOS\) and configure a Google Analytics destination for the same with the above tracking ID
* We have bundled a shell script that can generate test events. Get the source **`writeKey`** from the [RudderStack dashboard](https://app.rudderlabs.com/signup) and then run the following command:

```bash
./scripts/generate-event <YOUR_WRITE_KEY> https://hosted.rudderlabs.com/v1/batch
```

![Sending Test Events](../.gitbook/assets/send-test-events.png)

{% hint style="warning" %}
The **write key** is different from your **workspace token**. The former is associated with the source, while the latter is for your RudderStack account.
{% endhint %}

![Workspace token vs Write Key](../.gitbook/assets/write-key-vs-token%20%282%29%20%281%29%20%282%29%20%281%29.png)

* You can then login to your Google Analytics account and verify that events are delivered. Go to `MainPage` -&gt; `RealTime` -&gt; `Events`. _RealTime_ view is important as the other dashboards can sometimes take 24 to 48 hours to refresh.
* You can use our [JavaScript](../rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/), [Android](../rudderstack-sdk-integration-guides/rudderstack-android-sdk/), or [iOS](../rudderstack-sdk-integration-guides/rudderstack-ios-sdk.md) SDKs for sending events from your app.

## Contact Us

To know more about installing and setting up RudderStack, please feel free to [reach out to us](https://resources.rudderstack.com/join-rudderstack-slack). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel - we will be happy to talk to you.

