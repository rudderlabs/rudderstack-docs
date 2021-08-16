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

The commands are listed below:

```bash
$ git clone git@github.com:rudderlabs/rudderstack-helm.git
$ cd rudderstack-helm/

# If you're using the RudderStack-hosted Control Plane:

$ helm install my-release ./ --set rudderWorkspaceToken="<your_workspace_token>"

# If you're using the self-hosted Control Plane:

$ helm install my-release ./ --set backend.controlPlaneJSON=true
```

## Introduction

Installing and setting up RudderStack involves two key steps:

* Control Plane setup
* Data Plane setup

{% hint style="info" %}
Refer to the [**RudderStack Architecture**](../rudderstack-architecture.md) to know more about the RudderStack Control Plane and Data Plane.
{% endhint %}

## Control Plane Setup

There are two ways you can set up the Control Plane. This section lists the steps involved in each of them.

### **Use RudderStack-hosted Control Plane**

* Sign up and log into the [**RudderStack dashboard**](https://app.rudderlabs.com/signup).

{% hint style="info" %}
**Why do I need to sign up for RudderStack?** 

RudderStack's dashboard lets you easily set up your data pipelines by configuring your sources and destinations. It is fully hosted by RudderStack and is free for open-source users. You also get access to some important features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and a [**Live Events** ](../../user-guides/how-to-guides/live-destination-event-debugger.md)tab.
{% endhint %}

* Note and copy your workspace **Token** from the top of the page, as shown below. This will be required for setting up the Data Plane.

![](../../.gitbook/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29%20%281%29.png)

### Self-host the Control Plane

{% hint style="warning" %}
Use this option if you don't wish to sign up for RudderStack.
{% endhint %}

You can self-host your own Control Plane using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md). 

{% hint style="danger" %}
Note that the Control Plane set up using the RudderStack Config Generator lacks certain features like [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) and [**Live Events**](../../user-guides/how-to-guides/live-destination-event-debugger.md) tab.
{% endhint %}

## Data Plane Setup

This section lists the steps to set up the RudderStack Data Plane in your Kubernetes environment. 

### Prerequisites

* \*\*\*\*[**Kubectl**](https://kubernetes.io/docs/tasks/tools/) installed and connected to your Kubernetes cluster
* \*\*\*\*[**Helm**](https://helm.sh/) installed

### For **RudderStack-Hosted Control Plane**

* Clone the [**repository**](https://github.com/rudderlabs/rudderstack-helm) containing the RudderStack Helm chart by running the following command:

  ```bash
  $ git clone git@github.com:rudderlabs/rudderstack-helm.git
  ```

* Navigate to the folder containing the Helm chart.

  ```bash
  $ cd rudderstack-helm/
  ```

* To install the chart with the release name `my-release`, run the following command after replacing `<your_workspace_token>` with the workspace token copied from the RudderStack dashboard.

```bash
$ helm install my-release ./ --set rudderWorkspaceToken="<your_workspace_token>"
```

The above command deploys RudderStack on your default Kubernetes cluster configured with `kubectl`. 

{% hint style="info" %}
Refer to the [**Configuration**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/kubernetes#configuration) section below for information on the parameters that can be configured during deployment.
{% endhint %}

* Once you have successfully followed the steps above, [**send test events**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#sending-test-events-to-verify-the-installation) to verify the installation.

### For **Self-Hosted Control Plane**

If you have self-hosted the Control Plane, follow [**these**](https://docs.rudderstack.com/get-started/config-generator#kubernetes) instructions to set up the RudderStack Data Plane in your Kubernetes cluster. 

Once you have successfully followed the steps above, [**send test events**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#sending-test-events-to-verify-the-installation) to verify the installation.

## Upgrading the Chart

### For **RudderStack-Hosted Control Plane**

Update the configuration or version of the images and run the following command:

```bash
$ helm upgrade my-release ./ --set rudderWorkspaceToken="<your_workspace_token>"
```

### For **Self-Hosted Control Plane**

Update the configuration or version of the images and run the following command:

```bash
$ helm upgrade my-release ./ --set backend.controlPlaneJSON=true
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
| `backend.controlPlaneJSON` | Set this to `true` for the Data Plane to read the configuration from the `workspaceConfig.json` file in case you have a self-hosted Control Plane. | `false` |

Each of these parameters can be changed in `values.yaml`. You can also specify each parameter using the `--set key=value[,key=value]` argument while running the `helm install` command. 

For example:

```bash
$ helm install --name my-release \
  --set backend.image.version=v0.1.6 \
  ./
```

{% hint style="info" %}
Note that:

* The configuration specific to the Data Plane can be edited in[`config.yaml`](https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml).
* The configuration specific to PostgreSQL can be configured in `pg_hba.conf`, and `postgresql.conf`.
{% endhint %}

## Instructions for GCP

Make sure you replace the contents of the file [**rudder-google-application-credentials.json**](https://github.com/rudderlabs/rudderstack-helm/blob/master/rudder-google-application-credentials.json) in the repository with the details of your Google service account if you are using Google Cloud Storage or BigQuery for the following cases:

* \*\*\*\*[**Google Cloud Storage**](../../destinations/storage-platforms/google-cloud-storage.md) as a destination
* Google Cloud Storage for dumping jobs
* \*\*\*\*[**BigQuery**](../../data-warehouse-integrations/google-bigquery.md) as a warehouse destination

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

