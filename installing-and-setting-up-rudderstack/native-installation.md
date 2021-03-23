---
description: Detailed instructions on setting up a native RudderStack installation
---

# Native Installation

{% hint style="warning" %}
This is **not** the easiest way of installing RudderStack. Please use this method only if you want to know more about the RudderStack internals.
{% endhint %}

Please follow these steps to set up a native installation of RudderStack:

* Download and install [Golang 1.13](https://golang.org/dl/) or above.
* Download and install [Node.js 10.6](https://nodejs.org/en/download/) or above.
* Download and install [PostgreSQL 10 or above](https://www.postgresql.org/download/), and set up the database using the following commands:

```bash
createdb jobsdb
createuser --superuser rudder
psql "jobsdb" -c "alter user rudder with encrypted password 'rudder'";
psql "jobsdb" -c "grant all privileges on database jobsdb to rudder";

```

* Go to the [RudderStack dashboard](https://app.rudderlabs.com/signup) and set up your account. Copy your workspace token from the top of the home page.

{% hint style="info" %}
**Why do I need this?** RudderStack's dashboard (control plane) is where you can setup sources, destinations, and transformations. RudderStack hosts the control plane and is free for OSS users. You can also use our open-source [config-generator](https://github.com/rudderlabs/config-generator) if you don't want to use the hosted control plane (the config generator lacks certain features like Transformations and LiveDebugger.)
{% endhint %}

* Create a directory for the RudderStack server using the following command:

```bash
mkdir rudder-server
```

* Go to the RudderStack server page and [download](https://github.com/rudderlabs/rudder-server/releases) the latest binary for your target system. Then, move it to the `rudder-server` directory.
* Create a directory for the RudderStack transformer using the following command:

```bash
mkdir rudder-transformer
```

* Go to the RudderStack transformer page and [download](https://github.com/rudderlabs/rudder-transformer/releases) the latest release package. Then, extract it in the `rudder-transformer` directory.
* Navigate to the transformer directory using the following command:

```bash
cd rudder-transformer
```

* Install the dependencies using the command `npm i` . Then, start the destination transformer using the following command:

```bash
node destTransformer.js
```

* Navigate back to the main directory using the command `cd rudder-server`. Then, create a `.env` file, and copy the contents of the file [`sample.env`](https://github.com/rudderlabs/rudder-server/blob/master/config/sample.env) into the previously created `.env` file.
* Update the`WORKSPACE_TOKEN` environment variable with the token fetched from your RudderStack dashboard.
* Run the backend server using the following command:

```bash
./rudder-server
```

{% hint style="info" %}
Once you have successfully followed the steps above, follow our guide on [**How to Send Test Events**](https://docs.rudderstack.com/getting-started/installing-and-setting-up-rudderstack#how-to-send-test-events) in order to test if there are any issues with the installation.
{% endhint %}

## Contact Us

If you come across any queries or issues while setting up your native RudderStack installation, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel.


