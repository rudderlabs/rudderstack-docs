---
description: Step-by-step instructions to set up RudderStack on your developer machine.
---

# Developer Machine Setup

## Prerequisites

To set up RudderStack, you will need to set up and install the following tools in your development environment:

* [**Go 1.13**](https://golang.org/dl/) or above.
* [**Node.js 10.6**](https://nodejs.org/en/download/) or above.
* [**PostgreSQL 10**](https://www.postgresql.org/download/) or above

## Installation

* First, set up the database in your preferred directory using the following commands:

```bash
createdb jobsdb
createuser --superuser rudder
psql "jobsdb" -c "alter user rudder with encrypted password 'rudder'";
psql "jobsdb" -c "grant all privileges on database jobsdb to rudder";
```

* Sign up and log into the [**RudderStack dashboard**](https://app.rudderlabs.com/signup). Copy your workspace **Token** from the top of the page, as shown:

![](../../.gitbook/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29.png)

{% hint style="info" %}
**Why do I need to sign up on RudderStack?** 

RudderStack's dashboard \([**Control Plane**](https://docs.rudderstack.com/get-started/rudderstack-architecture#control-plane)\) lets you set up your data pipelines by configuring event data sources and destinations. This dashboard is hosted by RudderStack and is free for open-source users. 

If you don't wish to sign up for RudderStack, you can also set up your own control plane using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). However, note that the control plane set up using the RudderStack Config Generator lacks certain features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and [**Live Events Debugger**](../../user-guides/how-to-guides/live-destination-event-debugger.md).
{% endhint %}

* Next, clone the [**RudderStack server**](https://github.com/rudderlabs/rudder-server) repository. Then, run `git submodule init` and `git submodule update` to fetch the `rudder-transformer` repository.  
* Next, navigate to the Transformer directory using the following command:

```bash
cd rudder-transformer
```

* Install dependencies using the command `npm i` . Then, start the destination transformer using the following command:

```bash
node destTransformer.js
```

* Navigate back to the main directory using the command `cd rudder-server`. Copy the `sample.env` to the main directory using the following command:

```bash
cp config/sample.env .env
```

* Update the`WORKSPACE_TOKEN` environment variable in this file with the workspace token you copied from the RudderStack dashboard. 
* Finally, run the RudderStack server using the following command:

```bash
go run -mod=vendor main.go
```

Once you have completed these steps above successfully, [**send test events**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#sending-test-events-to-verify-the-installation) to verify the installation.

## Contact Us

If you come across any issues while setting up RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

