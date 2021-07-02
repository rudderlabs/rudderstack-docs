---
description: Step-by-step instructions for deploying RudderStack on Kubernetes.
---

# Kubernetes

You can deploy RudderStack on your Kubernetes cluster using the [**Helm**](https://helm.sh) package manager.

The repository for this Helm chart can be found [**here**](https://github.com/rudderlabs/rudderstack-helm).

{% hint style="info" %}
If you are planning to use RudderStack in production, we strongly recommend using the Kubernetes Helm charts.
{% endhint %}

## Quick Overview

{% hint style="info" %}
`helm install` deploys RudderStack on the Kubernetes cluster configured with `kubectl`.
{% endhint %}

The commands are as shown below:

```bash
$ git clone git@github.com:rudderlabs/rudderstack-helm.git
$ cd rudderstack-helm/
$ helm install my-release ./ --set rudderWorkspaceToken="<your_workspace_token>"
```

## Prerequisites

* **Kubectl** installed and connected to your Kubernetes cluster
* Helm installed
* Sign up and log into the [**RudderStack dashboard**](https://app.rudderlabs.com/signup). Copy your workspace **Token** from the top of the page, as shown:

![](../../.gitbook/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%282%29.png)

{% hint style="info" %}
**Why do I need to sign up on RudderStack?** 

RudderStack's dashboard \([**Control Plane**](https://docs.rudderstack.com/get-started/rudderstack-architecture#control-plane)\) lets you set up your data pipelines by configuring event data sources and destinations. This dashboard is hosted by RudderStack and is free for open-source users. 

If you don't wish to sign up for RudderStack, you can also set up your own control plane using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). However, note that the control plane set up using the RudderStack Config Generator lacks certain features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and [**Live Events Debugger**](../../user-guides/how-to-guides/live-destination-event-debugger.md).
{% endhint %}

## Installing the Chart

To install the chart with the release name `my-release` from the root directory of this repository, run the following command:

```bash
$ helm install my-release ./ --set rudderWorkspaceToken="<your_workspace_token>"
```

The above command deploys RudderStack on your default Kubernetes cluster configured with `kubectl`. 

{% hint style="info" %}
Refer to the [**Configuration**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/kubernetes#configuration) section below for information on the parameters that can be configured during deployment.
{% endhint %}

## Upgrading the Chart

To update the configuration or version of the images used, change the configuration and run the following command:

```bash
$ helm upgrade my-release ./ --set rudderWorkspaceToken="<your_workspace_token>"
```

## Uninstalling the Chart

To uninstall or delete the `my-release` deployment, run the following command:

```bash
$ helm uninstall my-release
```

This removes all the components created by the chart.

## Configuration

The following table lists the configurable parameters of the RudderStack chart and their default values:

| Parameter | Description | Default |
| :--- | :--- | :--- |
| `rudderWorkspaceToken` | Workspace token from the dashboard | `-` |
| `backend.image.repository` | Container image repository for the backend | `rudderlabs/rudder-server` |
| `backend.image.version` | Container image tag for the backend. Check the   [**Available versions**](https://hub.docker.com/r/rudderlabs/rudder-server/tags)\*\*\*\* | `0.1.9` |
| `backend.image.pullPolicy` | Container image pull policy for the backend image | `Always` |
| `transformer.image.repository` | Container image repository for the transformer | `rudderlabs/transformer` |
| `transformer.image.version` | Container image tag for the transformer. Check the  [**Available versions**](https://hub.docker.com/r/rudderlabs/rudder-transformer/tags)\*\*\*\* | `0.1.4` |
| `transformer.image.imagePullPolicy` | Container image pull policy for the transformer image | `Always` |
| `backend.extraEnvVars` | Extra environments variables to be used by the backend in the deployments | Refer the `values.yaml` file |

Each of these parameters can be changed in `values.yaml`. You can also specify each parameter using the `--set key=value[,key=value]` argument while running the `helm install` command. 

For example:

```bash
$ helm install --name my-release \
  --set backend.image.version=v0.1.6 \
  ./
```

{% hint style="info" %}
Note that:

* The configuration specific to the backend can be edited in [`config.yaml`](https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml).
* The configuration specific to PostgreSQL can be configured in `pg_hba.conf`, and `postgresql.conf`.
{% endhint %}

## Components

Installing this Helm chart will deploy the following pods and containers in the configured cluster:

**POD - {Release name}-rudderstack-0 :**

* `rudderstack-backend`
* `rudderstack-telegraf-sidecar`

**POD - {Release name}-rudderstack-postgresql-0 :**

* `{Release name}-rudderstack-postgresql`

**POD - {Release name}-rudderstack-transformer-xxxxxxxxxx-xxxxx:**

* `transformer`

## Contact Us

If you come across any issues while setting up RudderStack on your Kubernetes cluster, please feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

