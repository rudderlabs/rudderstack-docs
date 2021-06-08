---
description: >-
  Detailed documentation on installing and setting up RudderStack on your
  platform of choice.
---

# Install and Set Up RudderStack

This guide is helpful if you want to install and set up RudderStack on your platform of choice.

{% hint style="success" %}
The easiest way to get started with RudderStack is to sign up for free on [**RudderStack Cloud** **Free**](https://app.rudderlabs.com/signup?type=freetrial).
{% endhint %}

## Setup Instructions

Feel free to [**contact us**](mailto:%20docs@rudderstack.com) in case you are stuck anywhere in the process, or want more information on any of the topics covered below.

* Setup instructions for [**Docker**](docker.md)\*\*\*\*
* Setup instructions for [**Kubernetes**](kubernetes.md)\*\*\*\*
* Setup instructions for a [**Native Installation**](native-installation.md)\*\*\*\*
* Setup instructions for a [**Developer Machine Setup**](developer-machine-setup.md)\*\*\*\*

{% hint style="info" %}
If you are planning to use RudderStack in production, we strongly recommend using the [**Kubernetes**](kubernetes.md) Helm charts. We update our Docker images with bug fixes much more frequently than our [**GitHub repository**](https://github.com/rudderlabs/rudder-server).
{% endhint %}

## Sending Test Events to Verify the Installation

Before sending test events to verify your RudderStack installation, you will first need to clone our GitHub repository.

```bash
git clone https://github.com/rudderlabs/rudder-server.git
```

Once you have installed and set up RudderStack on your target machine, follow the steps below to test your RudderStack installation:

* Set up a source and a destination in RudderStack by following this [**guide**](../../connections/adding-source-and-destination-rudderstack.md). 
* Get the source write key from the RudderStack dashboard, as shown below:

![](../../.gitbook/assets/screen-shot-2021-06-01-at-3.45.51-pm.png)

{% hint style="warning" %}
The **write key** is different from your **workspace token**. The write key is associated with the source, while the workspace token is associated with your RudderStack workspace.
{% endhint %}

![Workspace Token vs Write Key](../../.gitbook/assets/image%20%28102%29.png)

* We have bundled a shell script that can generate test events. Navigate to the folder where RudderStack is installed using the `cd` command.  
* Then, run the following command after replacing `<YOUR_WRITE_KEY>` with the source write key copied above:

```bash
./scripts/generate-event <YOUR_WRITE_KEY> https://hosted.rudderlabs.com/v1/batch
```

* You can then check your destination to verify that events are delivered. Alternatively, you can use RudderStack's [**Live Events Debugger**](../../user-guides/how-to-guides/live-destination-event-debugger.md) to view the live events.

## FAQs

### 1. What is a Data Plane URL? Where do I get it?

{% hint style="info" %}
Refer to the [**RudderStack Architecture**](../rudderstack-architecture.md) guide for more information the RudderStack data plane.
{% endhint %}

For routing and processing the events to the RudderStack backend, a **Data Plane URL** is required. 

Here's how to get the data plane URL:

* If you're using the **open-source** version of RudderStack, you are required to set up your own data plane by installing and setting up RudderStack in your preferred dev environment. 
* If you're using the **enterprise** version of RudderStack, please contact us for the data plane URL with the email ID you used to sign up for RudderStack.

### 2. How to Check the Data Plane Status?

To check your data plane status, run the following command:

```bash
CURL <DATA_PLANE_URL>/health
```

A sample command to check the data plane status is as shown:

```bash
CURL https://hosted.rudderlabs.com/health
```

You will get the following output:

```text
{"server":"UP", "db":"UP","acceptingEvents":"TRUE","routingEvents":"TRUE","mode":"NORMAL","goroutines":"15364", "backendConfigMode": "API", "lastSync":"2020-12-01T04:20:33Z", "lastRegulationSync":"2020-11-30T21:40:27Z"}
```

The RudderStack server supports two running modes:

* **Normal** \(`"mode": "NORMAL"`\): In this mode, the RudderStack server runs as expected, and there are no issues. 
* **Degraded** \(`"mode": "DEGRADED"`\): The RudderStack server enters the degraded mode if it keeps crashing while processing the events after a threshold number of restarts is reached. RudderStack still receives and stores the events in this mode but does not process them and route them to your specified destinations.

{% hint style="info" %}
For more information on the RudderStack Server running modes, refer to our [**High Availability**](../../user-guides/administrators-guide/high-availability.md) guide.
{% endhint %}

### 4. Why Do I Need a RudderStack Account?

RudderStack's self-hosted dashboard \([**Control Plane**](https://docs.rudderstack.com/get-started/rudderstack-architecture#control-plane)\) is the easiest way to set up and manage your event data sources, destinations and transformations.

{% hint style="info" %}
The hosted control plane is only used for configuration and does not have access to your data. The Live Events Debugger console can temporarily stream events from your data plane for debugging but only for a limited time. It does not persist any of your data.
{% endhint %}

If you don't wish to sign up for RudderStack and want to self-host the control plane, you can use the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). However, note that the control plane generated using the Config Generator does not have features like Transformations and Live Events Debugger.

## Contact Us

To know more about installing and setting up RudderStack, please feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel - we will be happy to talk to you.

