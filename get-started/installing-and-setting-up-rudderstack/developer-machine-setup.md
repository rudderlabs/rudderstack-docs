---
description: Step-by-step instructions to set up RudderStack on your developer machine.
---

# Developer Machine Setup

This guide lists the steps required to set up RudderStack in your development environment.

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

RudderStack's dashboard lets you easily set up your data pipelines by configuring your sources and destinations. It is fully hosted by RudderStack and is free for open-source users. You also get access to some important features like [**Transformations**](../../transformations/) and a [**Live Events** ](../../user-guides/how-to-guides/live-destination-event-debugger.md)tab.
{% endhint %}

* Note and copy your workspace **Token** from the top of the page, as shown below. This will be required for setting up the Data Plane.

  ![](../../.gitbook/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29%20%281%29.png)

### Self-Host the Control Plane

{% hint style="warning" %}
Use this option if you don't wish to sign up for RudderStack.
{% endhint %}

You can self-host your own Control Plane using the open-source [**Control Plane Lite**](../control-plane-lite.md) utility.

{% hint style="danger" %}
Note that the Control Plane set up using [**Control Plane Lite**](../control-plane-lite.md) lacks certain features like [**Transformations**](../../transformations/) and [**Live Events**](../../user-guides/how-to-guides/live-destination-event-debugger.md) tab.
{% endhint %}

## Data Plane Setup

This section lists the steps to set up the RudderStack Data Plane in your preferred development environment.

### Prerequisites

To set up RudderStack, you will need to set up and install the following tools:

* [**Go 1.13**](https://golang.org/dl/) or above.
* [**Node.js 10.6**](https://nodejs.org/en/download/) or above.
* [**PostgreSQL 10**](https://www.postgresql.org/download/) or above

### For **RudderStack-Hosted Control Plane**

* First, set up the database in your preferred directory using the following commands:

  ```bash
  createdb jobsdb
  createuser --superuser rudder
  psql "jobsdb" -c "alter user rudder with encrypted password 'rudder'";
  psql "jobsdb" -c "grant all privileges on database jobsdb to rudder";
  ```

* Next, clone the [**RudderStack server**](https://github.com/rudderlabs/rudder-server) repository.  
* Then, run `git submodule init` and `git submodule update` to fetch the `rudder-transformer` repository.  
* Next, navigate to the Transformer directory using the following command:

  ```bash
  cd rudder-transformer
  ```

* Install dependencies using the command `npm i` . Then, start the destination transformer using the following command:

  ```bash
  node destTransformer.js
  ```

* Navigate back to the main directory using the command `cd rudder-server`.  
* Next, copy the `sample.env` to the main directory using the following command:

  ```bash
  cp config/sample.env .env
  ```

* Update the `WORKSPACE_TOKEN` environment variable in this file with the workspace token you copied from the RudderStack dashboard. 
* Finally, run the RudderStack server using the following command:

  ```bash
  go run -mod=vendor main.go
  ```

* Once you have completed these steps above successfully, [**send test events**](sending-test-events.md) to verify the installation.

### For **Self-Hosted Control Plane**

If you have self-hosted the Control Plane using the open-source [**Control Plane Lite**](../control-plane-lite.md) utility, follow [**these**](https://docs.rudderstack.com/get-started/config-generator#developer-machine-setup) instructions to set up the RudderStack Data Plane in your development environment. 

Once you have successfully followed the steps above, [**send test events**](sending-test-events.md) to verify the installation.

## Contact Us

If you come across any issues while setting up RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://rudderstack.com/join-rudderstack-slack-community) channel.

