---
description: Detailed instructions for deploying RudderStack on Kubernetes
---

# Kubernetes

You can deploy RudderStack on your [Kubernetes](http://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager. 

The repository for this Helm chart can be found [here](https://github.com/rudderlabs/rudderstack-helm).

## Quick Overview

{% hint style="info" %}
`helm install` deploys to the Kubernetes cluster configured with `kubectl`
{% endhint %}

```bash
$ git clone git@github.com:rudderlabs/rudderstack-helm.git
$ cd rudderstack-helm/
$ helm install my-release ./ --set rudderWorkspaceToken="<workspace token from the dashboard>"
```

## Prerequisites

* **Kubectl** installed and connected to your Kubernetes cluster
* Helm installed
* Workspace token from the [RudderStack](https://app.rudderlabs.com/signup) [dashboard](https://app.rudderlabs.com/signup). Set up your account and copy your workspace token from the top of the home page.

![Workspace Token](../.gitbook/assets/write-key-vs-token%20%282%29%20%281%29%20%282%29%20%283%29%20%283%29.png)

## Installing the Chart

To install the chart with the release name `my-release`, from the root directory of this repository:

```bash
$ helm install my-release ./ --set rudderWorkspaceToken="<workspace token from the dashboard>"
```

The above command deploys RudderStack on your default Kubernetes cluster configured with `kubectl`. The configuration section lists the most significant parameters that can be configured during deployment.

## Upgrading the Chart

To update configuration or version of the images used, change the configuration, and run the following command:

```bash
$ helm upgrade my-release ./ --set rudderWorkspaceToken="<workspace token from the dashboard>"
```

## Uninstalling the Chart

To uninstall or delete the `my-release` deployment, run the following command:

```bash
$ helm uninstall my-release
```

This removes all the components created by this chart.

## Configuration

The following table lists the configurable parameters of the RudderStack chart and their default values:

| Parameter | Description | Default |
| :--- | :--- | :--- |
| `rudderWorkspaceToken` | Workspace token from the dashboard | `-` |
| `backend.image.repository` | Container image repository for the backend | `rudderlabs/rudder-server` |
| `backend.image.version` | Container image tag for the backend. Check the   [Available versions](https://hub.docker.com/r/rudderlabs/rudder-server/tags) | `0.1.9` |
| `backend.image.pullPolicy` | Container image pull policy for the backend image | `Always` |
| `transformer.image.repository` | Container image repository for the transformer | `rudderlabs/transformer` |
| `transformer.image.version` | Container image tag for the transformer. Check the  [Available versions](https://hub.docker.com/r/rudderlabs/rudder-transformer/tags) | `0.1.4` |
| `transformer.image.imagePullPolicy` | Container image pull policy for the transformer image | `Always` |
| `backend.extraEnvVars` | Extra environments variables to be used by the backend in the deployments | Refer `values.yaml` file |

Each of these parameters can be changed in `values.yaml`. You can also specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example:

```bash
$ helm install --name my-release \
  --set backend.image.version=v0.1.6 \
  ./
```

{% hint style="info" %}
Configuration specific to:

* The backend can be edited in [`rudder-config.toml`](https://docs.rudderlabs.com/administrators-guide/config-parameters)
* PostgreSQL can be configured in `pg_hba.conf`, and `postgresql.conf`
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

If you come across any queries or issues while setting up your RudderStack installation on Kubernetes, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.

