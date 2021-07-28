---
description: Step-by-step instructions for setting up RudderStack on Docker.
---

# Docker

{% hint style="success" %}
The Docker setup is the easiest and the fastest way to get up and running with RudderStack.
{% endhint %}

## Installation

To install RudderStack on Docker, follow these steps:

* Sign up and log into the [**RudderStack dashboard**](https://app.rudderlabs.com/signup). Copy your workspace **Token** from the top of the page, as shown:

![](../../.gitbook/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29%20%281%29.png)

{% hint style="info" %}
**Why do I need to sign up on RudderStack?** 

RudderStack's dashboard \([**Control Plane**](https://docs.rudderstack.com/get-started/rudderstack-architecture#control-plane)\) lets you set up your data pipelines by configuring event data sources and destinations. This dashboard is hosted by RudderStack and is free for open-source users. 

If you don't wish to sign up for RudderStack, you can also set up your own control plane using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). However, note that the control plane set up using the RudderStack Config Generator lacks certain features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and [**Live Events Debugger**](../../user-guides/how-to-guides/live-destination-event-debugger.md).
{% endhint %}

* Download the `rudder-docker.yml` [**docker-compose**](https://raw.githubusercontent.com/rudderlabs/rudder-server/master/rudder-docker.yml) file.
* Replace `<your_workspace_token>` in the above file with the copied token.
* Go to the directory where you want to install RudderStack and run the following command:

```text
docker-compose -f rudder-docker.yml up
```

* Once you have successfully followed the steps above, [**send test events**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#sending-test-events-to-verify-the-installation) to verify the installation.

## Contact Us

In case you come across any issues while setting up RudderStack on Docker, feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) ****channel.

