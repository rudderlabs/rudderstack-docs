---
description: >-
  Step-by-step guide on adding a source and destination in RudderStack to track
  and route your customer events.
---

# How to Add a Source and Destination in RudderStack

RudderStack's Control Plane manages the configuration of your sources and destinations.

{% hint style="info" %}
For more information on the Control Plane, refer to RudderStack's [**architecture**](../get-started/rudderstack-architecture.md).
{% endhint %}

The easiest way to manage these configurations is through RudderStack's [**self-hosted Control Plane**](https://app.rudderstack.com/). It is free, requires no setup, and has some advanced features like [**Live Events Debugger**](../user-guides/how-to-guides/live-destination-event-debugger.md) and [**Transformations**](../adding-a-new-user-transformation-in-rudderstack/).

However, if you want to self-host these configurations, you can use the open-source RudderStack Config Generator to set up your Control Plane. You can then manage the source and destination configurations locally by exporting to or importing them from a JSON file.

## Setting up the Config Generator

Before setting up the Config Generator, make sure you have RudderStack installed locally. You can find the instructions for setting up RudderStack in the [**Install and Set Up RudderStack**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack) guide.

{% hint style="warning" %}
Make sure you have [**Node.js**](https://nodejs.org/en/download/) installed before setting up the Config Generator.
{% endhint %}

In order to set up the RudderStack Config Generator, navigate to the folder where you have installed RudderStack. Then, run the following commands in the specified order:

1. `cd utils/config-gen`
2. `npm install`
3. `npm start`

{% hint style="info" %}
The Config Generator can be accessed at [**http://localhost:3000**](https://github.com/ameypv-rudder/rudder-server/wiki/RudderStack-Config-Generator) by default.
{% endhint %}

On successful setup, you should be able to see the following UI:

![Control Plane set up using Config Generator](../.gitbook/assets/image%20%2822%29.png)

## Exporting Workspace Configuration

After adding the required sources and destinations in the dashboard shown above, you can export your workspace configuration by simply clicking the **EXPORT** button. The configuration is then exported and saved as a JSON file. This workspace configuration is required to start the RudderStack server.

{% hint style="info" %}
For more information on adding sources and destinations in RudderStack, refer to the [**Adding a Source and Destination in RudderStack**](adding-source-and-destination-rudderstack.md) guide.
{% endhint %}

To read the workspace configuration from the exported JSON file, you can update the config variables `configFromFile` and `configJSONPath`.

## Starting RudderStack with the Workspace Configuration File

For RudderStack to pick up the exported workspace configuration file, please follow the steps below:

If you are running [RudderStack on Docker](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/docker):

* Open `rudder-docker.yml`.
* Uncomment `volumes` section under `backend` service. Replace `<absolute_path_to_workspace_config>` with the absolute path of the downloaded workspace configuration file location.
* In `environment` section under `backend` service, uncomment the environment variable `RSERVER_BACKEND_CONFIG_CONFIG_FROM_FILE=true`.

For a [Native RudderStack Installation](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/native-installation):

* Open `.env` file.
* Add `RSERVER_BACKEND_CONFIG_CONFIG_FROM_FILE=true` to the file
* Also add `RSERVER_BACKEND_CONFIG_CONFIG_JSONPATH=<absolute_path_to_workspace_config>`. Replace `<absolute_path_to_workspace_config>` with the absolute path of the downloaded workspace configuration file location.

If you have set up [RudderStack on a developer machine](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/developer-machine-setup):

* Open `config/config.yaml`. Look for `configFromFile` and `configJSONPath` under `[BackendConfig]`. Set `configFromFile` to true and `configJSONPath` to the absolute path of the downloaded workspace configuration file location.

## Using RudderStack Config Generator for Device Mode Destinations

{% hint style="info" %}
To know more about the difference between **Cloud mode** and **Device mode** in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

RudderStack's [web](https://app.gitbook.com/@rudderlabs/s/rudderlabs-1/~/drafts/-MJRY7Fz5shtM06WXlym/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk), [android](https://app.gitbook.com/@rudderlabs/s/rudderlabs-1/~/drafts/-MJRY7Fz5shtM06WXlym/rudderstack-sdk-integration-guides/rudderstack-android-sdk) and [iOS](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk) SDKs expect the source configurations and the associated [device mode](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) destination configurations for initialization.

{% hint style="info" %}
By default, RudderStack SDKs fetch the source config \(for the write key provided during the initialization of RudderStack SDKs\) from [**https://api.rudderlabs.com/sourceConfig**](https://api.rudderlabs.com/sourceConfig).
{% endhint %}

### What is the Control Plane URL?

Since SDKs need the source configuration and RudderStack's hosted Control Plane is not aware of it, you must serve the configuration on your web servers and point the SDKs to the same. This configuration must be available at `<CONTROL_PLANE_URL>/sourceConfig`

Follow these steps:

* Set up the RudderStack Config Generator by following the steps [here](https://docs.rudderstack.com/how-to-guides/rudderstack-config-generator#setting-up-the-rudderstack-config-generator).
* Go to **RudderStack Config Generator UI** and export the source config from the source details page by clicking the **EXPORT SOURCE CONFIG** button, as shown:

![Test source with one device mode destination.](../.gitbook/assets/screenshot-2020-10-12-at-4.51.52-pm.png)

* Host the exported file on your own server at `/sourceConfig`. Provide the base URL of your server that is serving this file in SDK initialization code snippet: 
  * **JavaScript SDK**: Instructions [here](https://github.com/rudderlabs/rudder-sdk-js#self-hosted-config-plane). 
  * **Android SDK**: Instructions [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-android-sdk#configuring-your-rudderstack-client). 
  * **iOS SDK**: Instructions [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-ios-sdk#configuring-the-rudderstack-client).
  * **Flutter SDK**: Instructions [here](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-flutter-sdk#configuring-the-rudderstack-client).

{% hint style="info" %}
RudderStack SDKs fetch the configuration by appending the `/sourceConfig` path to the base URL provided above.
{% endhint %}

* The SDKs will fetch the config from `<CONTROL_PLANE_URL>/sourceConfig`. 

Shown below is a sample of the exported source config:

```text
{
  "source": {
    "config": {},
    "id": "1im8yfXQsocRBGcQLXAaq5M8dYV",
    "name": "test-JS",
    "writeKey": "1im8yk2sz8oyHVCGVqViSNfKVDF",
    "enabled": true,
    "sourceDefinitionId": "1TW48i2bIzEl1HPf825cEznfIM8",
    "deleted": false,
    "createdAt": "Mon Oct 12 2020 16:51:54 GMT+0530 (India Standard Time)",
    "updatedAt": "Mon Oct 12 2020 16:51:54 GMT+0530 (India Standard Time)",
    "sourceDefinition": {
      "id": "1TW48i2bIzEl1HPf825cEznfIM8",
      "name": "Javascript",
      "displayName": "Javascript",
      "category": null,
      "createdAt": "2019-11-12T12:39:19.885Z",
      "updatedAt": "2020-06-18T11:54:06.114Z"
    },
    "destinations": [
      {
        "id": "1im927dBatOkbj1oPCV5JntGMj7",
        "name": "test-HJ",
        "enabled": true,
        "config": {
          "siteID": "dd41289"
        },
        "destinationDefinition": {
          "config": {
            "destConfig": {
              "web": [
                "useNativeSDK"
              ],
              "defaultConfig": [
                "siteID"
              ]
            },
            "secretKeys": [],
            "excludeKeys": [],
            "includeKeys": [
              "siteID"
            ],
            "supportedSourceTypes": [
              "web"
            ]
          },
          "id": "1SxbQXdfQ2NzIdqNO3GceshF4V0",
          "name": "HOTJAR",
          "displayName": "Hotjar",
          "createdAt": "2019-10-31T07:49:37.450Z",
          "updatedAt": "2020-09-05T10:02:39.744Z"
        }
      }
    ]
  },
  "metadata": {
    "version": "1.0.2"
  }
}
```

## FAQs

#### For a self-hosted environment, how to get the Control Plane URL?

To use the Control Plane URL to initialize your SDKs, follow these steps:

* [Set up](https://docs.rudderstack.com/how-to-guides/rudderstack-config-generator#setting-up-the-rudderstack-config-generator) the RudderStack Config Generator.
* Go to RudderStack Config Generator UI and export the source config from the source details page by clicking the **EXPORT SOURCE CONFIG** button.
* Host the exported file on your own server such that the config is available at  `<CONTROL_PLANE_URL>/sourceConfig`. 

{% hint style="info" %}
This solution assumes that you have already set up RudderStack locally and are hosting your own RudderStack backend \(data plane\).
{% endhint %}

## Contact Us

In case you come across any issues while setting up or using the RudderStack Config Generator, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you!

