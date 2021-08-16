---
description: Step-by-step instructions for setting up RudderStack on Docker.
---

# Docker

This guide lists the steps required to set up RudderStack in your Docker environment.

{% hint style="success" %}
**The Docker setup is the easiest and the fastest way to get up and running with RudderStack.**
{% endhint %}

## Introduction

Installing and setting up RudderStack involves two key steps:

* Control Plane setup
* Data Plane setup

{% hint style="info" %}
Refer to the [**RudderStack Architecture**](../rudderstack-architecture.md) to know more about the RudderStack Control Plane and Data Plane.
{% endhint %}

## Control Plane Setup

There are two ways you can set up the Control Plane. This section lists the steps involved in each of them.

### **Use RudderStack-Hosted Control Plane**

* Sign up and log into the [**RudderStack dashboard**](https://app.rudderlabs.com/signup).

{% hint style="info" %}
**Why do I need to sign up for RudderStack?** 

RudderStack's dashboard lets you easily set up your data pipelines by configuring your sources and destinations. It is fully hosted by RudderStack and is free for open-source users. You also get access to some important features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and a [**Live Events** ](../../user-guides/how-to-guides/live-destination-event-debugger.md)tab.
{% endhint %}

* Note and copy your workspace **Token** from the top of the page, as shown below. This will be required for setting up the Data Plane.

![](../../.gitbook/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29%20%281%29.png)

### Self-Host the Control Plane

{% hint style="warning" %}
Use this option if you don't wish to sign up for RudderStack.
{% endhint %}

You can self-host your own Control Plane using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). 

{% hint style="danger" %}
Note that the Control Plane set up using the RudderStack Config Generator lacks certain features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and [**Live Events**](../../user-guides/how-to-guides/live-destination-event-debugger.md) tab.
{% endhint %}

## Data Plane Setup

### For **RudderStack-Hosted Control Plane**

{% hint style="info" %}
This section assumes you have the following tools installed already:

* [**Go 1.13**](https://golang.org/dl/) or above
* [**Node.js 10.6**](https://nodejs.org/en/download/) or above
{% endhint %}

To set up the RudderStack Data Plane in your Docker environment, follow these steps:

* Download the `rudder-docker.yml` [**docker-compose**](https://raw.githubusercontent.com/rudderlabs/rudder-server/master/rudder-docker.yml) file.
* Replace `<your_workspace_token>` in this file with the token you copied in the previous section.
* Then, open your terminal, navigate to the directory where you want to install RudderStack, and run the following command:

```text
docker-compose -f rudder-docker.yml up
```

* Once you have successfully followed the steps above, [**send test events**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#sending-test-events-to-verify-the-installation) to verify the installation.

### For **Self-Hosted Control Plane**

If you have self-hosted the Control Plane using the open-source Config Generator, follow [**these**](https://docs.rudderstack.com/get-started/config-generator#docker) instructions to set up the RudderStack Data Plane on Docker. 

Once you have successfully followed the steps above, [**send test events**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#sending-test-events-to-verify-the-installation) to verify the installation.

## Contact Us

If you come across any issues while setting up RudderStack on Docker, you can [**contact us**](mailto:%20docs@rudderstack.com) ****or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) ****channel.

