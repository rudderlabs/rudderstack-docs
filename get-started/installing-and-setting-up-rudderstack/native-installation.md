---
description: Step-by-step instructions on setting up a native RudderStack installation.
---

# Native Installation

{% hint style="warning" %}
This is **not** the easiest way of installing RudderStack. Use this method only if you want to know more about the RudderStack internals.
{% endhint %}

## Prerequisites

To set up a native installation of RudderStack, you will need to set up and install the following tools in your development environment:

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

  ![](../../.gitbook/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29.png)

{% hint style="info" %}
**Why do I need to sign up on RudderStack?**

RudderStack's dashboard \([**Control Plane**](https://docs.rudderstack.com/get-started/rudderstack-architecture#control-plane)\) lets you set up your data pipelines by configuring event data sources and destinations. This dashboard is hosted by RudderStack and is free for open-source users.

If you don't wish to sign up for RudderStack, you can also set up your own control plane using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). However, note that the control plane set up using the RudderStack Config Generator lacks certain features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and [**Live Events Debugger**](../../user-guides/how-to-guides/live-destination-event-debugger.md).
{% endhint %}

* Create a directory for the RudderStack server using the following command:

  ```bash
  mkdir rudder-server
  ```

* Go to the RudderStack GitHub repository, [**download**](https://github.com/rudderlabs/rudder-server/releases) the latest binary for your target system, and move it to the `rudder-server` directory. 
* Create a directory for the RudderStack transformer using the following command:

  ```bash
  mkdir rudder-transformer
  ```

* Go to the RudderStack Transformer page in the GitHub repo and [**download**](https://github.com/rudderlabs/rudder-transformer/releases) the latest release package. Then, extract it in the `rudder-transformer` directory. 
* Navigate to the transformer directory using the following command:

  ```bash
  cd rudder-transformer
  ```

* Then, install the dependencies using the command `npm i`.
* Next, start the destination transformer using the following command:

  ```bash
  node destTransformer.js
  ```

* Navigate back to the main directory using the command `cd rudder-server`.
* Then, create a `.env` file, and copy the contents of the [`sample.env`](https://github.com/rudderlabs/rudder-server/blob/master/config/sample.env) file into this `.env` file.
* Update the `WORKSPACE_TOKEN` environment variable in this `.env` file with the token that you copied from your RudderStack dashboard.
* Finally, run the RudderStack server using the following command:

  ```bash
  ./rudder-server
  ```

Once you have completed these steps above successfully, [**send test events**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#sending-test-events-to-verify-the-installation) to verify the installation.

## Contact Us

If you come across any issues while setting up your native RudderStack installation, feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

