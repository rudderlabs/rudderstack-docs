---
description: >-
  Detailed documentation on installing and setting up RudderStack in your
  preferred environment.
---

# Install and Set Up RudderStack

{% hint style="success" %}
The easiest way to get started with RudderStack is to sign up for free on [**RudderStack Cloud** **Free**](https://app.rudderlabs.com/signup?type=freetrial).
{% endhint %}

## Setup Instructions

* Setup instructions for [**Docker**](docker.md)\*\*\*\*
* Setup instructions for [**Kubernetes**](kubernetes.md)\*\*\*\*
* Instructions for a [**Developer Machine Setup**](developer-machine-setup.md)\*\*\*\*

{% hint style="warning" %}
If you are planning to use RudderStack in production, we strongly recommend using the [**Kubernetes**](kubernetes.md) Helm charts. We update our Docker images with bug fixes much more frequently than our [**GitHub repository**](https://github.com/rudderlabs/rudder-server).
{% endhint %}

## Send Test Events

Once you have installed RudderStack, follow [**this guide**](sending-test-events.md) to send test events to verify your installation.

{% hint style="success" %}
You can [**contact us**](https://rudderstack.com/join-rudderstack-slack-community) for help if you're stuck at any stage of the setup process.
{% endhint %}

## FAQs

### What is a Data Plane URL? Where do I get it?

{% hint style="info" %}
Refer to the [**RudderStack Architecture**](../rudderstack-architecture.md) guide for more information the RudderStack Data Plane.
{% endhint %}

For routing and processing the events to the RudderStack backend, a **Data Plane URL** is required. 

Here's how to get the Data Plane URL:

* If you're using the **open-source** version of RudderStack, you are required to set up your own Data Plane by [**installing and setting up RudderStack**](./) in your preferred environment. 

{% hint style="success" %}
An open-source Data Plane URL looks like `http:localhost:8080` where `8080` is typically the port where your RudderStack Data Plane is hosted.  
{% endhint %}

* If you're using [**RudderStack Cloud** **Free**](https://app.rudderlabs.com/signup?type=freetrial), the data plane URL is provided in the dashboard. 
* If you're using the [**pro or enterprise**](https://rudderstack.com/pricing) version of RudderStack, [**contact us**](https://rudderstack.com/join-rudderstack-slack-community) for the Data Plane URL with the email ID you used to sign up for RudderStack.

### How to Check the Data Plane Status?

To check your Data Plane status, run the following command:

```bash
CURL <DATA_PLANE_URL>/health
```

A sample command to check the Data Plane status is as shown:

```bash
CURL https://hosted.rudderlabs.com/health
```

You will get the following output:

```text
{"server":"UP", "db":"UP","acceptingEvents":"TRUE","routingEvents":"TRUE","mode":"NORMAL","goroutines":"15364", "backendConfigMode": "API", "lastSync":"2020-12-01T04:20:33Z", "lastRegulationSync":"2020-11-30T21:40:27Z"}
```

The RudderStack server supports two running modes:

* **Normal** \(`"mode": "NORMAL"`\): In this mode, the RudderStack server runs as expected, and there are no issues. 
* **Degraded** \(`"mode": "DEGRADED"`\): RudderStack enters the degraded mode if it keeps crashing while processing the events after a threshold number of restarts is reached. RudderStack still receives and stores the events in this mode but does not process them and route them to your specified destinations.

{% hint style="info" %}
For more information on the RudderStack Server running modes, refer to our [**High Availability**](../../user-guides/administrators-guide/high-availability.md) guide.
{% endhint %}

### Why Do I Need a RudderStack Account?

Using the [**RudderStack web app**](https://app.rudderstack.com/) is the easiest way to set up and manage your event data sources, destinations and transformations.

{% hint style="info" %}
The web app is only used for source/destination configuration and does not have access to your data.   
  
The [**Live Events**](../live-events.md) console can be used to temporarily stream events for debugging purposes, but only for a limited time. **RudderStack does not persist any of your data**.
{% endhint %}

If you do not wish to sign up for RudderStack and want to self-host the Control Plane, you can do so using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). 

{% hint style="warning" %}
Note that the Control Plane set up using the Config Generator does not have features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and [**Live Events**](../live-events.md).
{% endhint %}

## Contact Us

For any questions on installing and setting up RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://rudderstack.com/join-rudderstack-slack-community) channel.

