---
description: Detailed instructions to set up RudderStack on your developer machine
---

# Developer Machine Setup

Please follow these steps to set up RudderStack on your developer machine:

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

* Clone the [RudderStack server](https://github.com/rudderlabs/rudder-server) repository. Run `git submodule init` and `git submodule update` to fetch the `rudder-transformer` repository. Then, navigate to the transformer directory using the following command:

```bash
cd rudder-transformer
```

* Install dependencies using the command `npm i` and start the destination transformer using the following command:

```bash
node destTransformer.js
```

* Navigate back to the main directory using the following command:

```bash
cd rudder-server
```

* Copy the `sample.env` to the main directory using the following command:

```bash
cp config/sample.env .env
```

* Update the`WORKSPACE_TOKEN` environment variable with the workspace token fetched from the RudderStack dashboard.
* Run the backend server using the following command:

```bash
go run -mod=vendor main.go
```

{% hint style="info" %}
Once you have successfully followed the steps above, follow our guide on [**How to Send Test Events**](https://docs.rudderstack.com/getting-started/installing-and-setting-up-rudderstack#how-to-send-test-events) in order to test if there are any issues with the installation.
{% endhint %}

