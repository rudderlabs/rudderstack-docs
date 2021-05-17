---
description: >-
  Generally asked questions about RudderStack - including the platform, as well
  as its features and functionalities.
---

# FAQs

This section aims to address the common as well as not-so-common queries and issues you might encounter while using the RudderStack platform.

{% hint style="success" %}
To quickly find the solution you are looking for, we recommend using the **Contents** panel on the right hand side of this guide to quickly navigate to the section you are looking for. 

Alternatively, you can use the search feature at the top-right hand side of this page with the relevant keywords to look for solutions on a specific topic.
{% endhint %}

{% hint style="info" %}
If you come across any issue that is not listed in this guide, please feel free to  [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.
{% endhint %}

## RudderStack Setup

This section contains some commonly asked questions about the RudderStack installation and setup procedure.

#### How do I quickly get started with RudderStack?

To quickly get started, you can use our [hosted control plane](https://app.rudderstack.com/). Here you can configure your sources and destinations with ease. Alternatively, you can use the open-source [RudderStack Config Generator](https://github.com/rudderlabs/rudder-server/wiki/RudderStack-Config-Generator). The hosted control plane has some additional features like Live Event Debugger and Transformations so we highly recommend you use that.

#### What is a Data Plane URL? Where do I get it?

Simply put, the Data Plane URL is used to connect to the RudderStack backend for processing and routing your events. 

{% hint style="info" %}
 To get the **Data Plane URL**: ****

* If you're using the **open-source** version of RudderStack, you are required to set up your own data plane by [installing and setting up RudderStack](get-started/installing-and-setting-up-rudderstack/) in your preferred dev environment.
* If you're using the **enterprise** version of RudderStack, please contact us for the data plane URL with the email ID used to sign up for RudderStack.
{% endhint %}

#### How to check the status of the RudderStack Data Plane?

To check the status of the data plane, simply run the following command:

```bash
CURL <DATA_PLANE_URL>/health
```

So, a sample command would look something like:

```c
CURL https://hosted.rudderlabs.com/health
```

For more information, check out our installation and setup guide.

#### In order to get started with RudderStack on my local machine, is it mandatory to get the token from RudderStack dashboard?

The token is when you use the hosted control plane. It is a unique identifier for your configuration setting which the RudderStack data plane can pull. Hence it is required.

#### Can I generate a token on my own? Can I self-host RudderStack?

Yes, you can. Many people who don't want to sign up on our SaaS control plane use the [RudderStack Config Generator](https://github.com/rudderlabs/rudder-server/wiki/RudderStack-Config-Generator) to configure their sources and destinations. Please follow this [setup guide](get-started/installing-and-setting-up-rudderstack/) to install and set up RudderStack in no time.

#### I don't want to configure my API keys and secrets with RudderStack's control plane. But I want to use its features like Transformations. What should I do?

RudderStack lets you fill in the values with variable names. These variables should be prepended with `env.`. You can populate these secrets as environment variables and run the data plane. This is an Enterprise only feature.  
  
For example, you are configuring Amazon S3 as a destination. But you don't want to enter the AWS access key credentials in the destination settings. Fill the value with a placeholder that starts with `env.`  It should look like this `env.MY_AWS_ACCESS_KEY`. Then set the value of the environment variable`MY_AWS_ACCESS_KEY`while running the data plane.

## RudderStack Server

This section contains some commonly asked questions about the RudderStack Server.

#### What cloud infrastructure is the RudderStack hosted solution running on? Do you have failover to alternate availability zones?

RudderStack's hosted solution is running on AWS. We run on AWS EKS, and our EKS cluster spans 3 availability zones \(east-1a, east-1b, east-1c\).

#### How many events can a single RudderStack node handle?

The number of events that a single RudderStack node can handle will depend on the destinations that you are sending the event data to. It depends on the transformations that you are running. However, here are some ballpark figures:

* **Dumping to S3** - Approximately 1.5K events/sec
* **Dumping to Warehouse** - Approximately 1K events/sec 
* **Dumping to Warehouse + a couple of cloud destinations** - Approximately 750 events/sec 

Please note that these are conservative numbers. A single RudderStack Node can handle 5x+ event load at the peak, just that those events will get cached locally and then drained as per regular throughput.

#### I created an account with RudderStack but did not find any server-side sources, only client-side sources. Is this in the roadmap?

Yes, you are right. We don't explicitly list out any server-side sources, though all sources are pretty much the same. When you create a source, you get a `writeKey` which you can use to send events to RudderStack Data Plane. The `writeKey`is what identifies the source, the name \(iOS, Android, or JavaScript\) and can be used by the server-side SDKs. We kept the sources separate mainly to be consistent with Segment.

#### Is there any solution to speed up the number of events?

There is a [config variable](https://github.com/rudderlabs/rudder-server/blob/403adb3576eb57b65dcab3111d1e40caa99ef2af/config/config.toml#L123) to configure the number of workers that send data to destinations. The default value is 64, which itself is an aggressive number. You can increase the number of workers, but some destinations generally throttle the number of requests per account.

#### How I can know the number of events that are being sent to a destination?

You can login to PostgreSQL and check the tables and the number of rows in each table. That should give you a rough idea of the number of events that are being sent.

## RudderStack Config Generator

This section contains some commonly-asked questions about the RudderStack Config Generator.

#### I am using the RudderStack Config Generator to generate the `workspaceConfig.json` file. But when I am importing this file, I get an error: "**TypeError: Cannot read property 'name' of undefined"**. What should I do?

This issue can occur when you have some old data left in your browser's local storage. Please try using the latest version of the RudderStack Config Generator after clearing the browser cache and local storage. In case it still does not work, please feel free to contact us.

#### How do I self-host the UI configuration?

For self-hosting the UI, you can use the [RudderStack Config Generator](https://github.com/rudderlabs/config-generator). 

Please note that the open-source config-generator will only generate the source-destination configurations which are required by RudderStack. RudderStack's hosted control plane has more features like event transformations, source and destination live events debuggers which is free to use.

## RudderStack Transformations

This section aims to address the commonly asked questions about RudderStack's Transformation feature.

#### What is a RudderStack Transformation?

The RudderStack transformation module converts the received event data into a suitable destination-specific format. You can also write your own user-specific transformation function in JavaScript to perform tasks such as aggregation and sampling of your event data, prior to routing it to the destination platform.

#### How do transformations handle batching? 

#### The transformation functions are given a list of events, but the events are also pushed out in real-time. What's the logic behind that?

The batching is done on a per end-user level. All the events from a given end-user are batched and then sent to the transformation function. The batching process is controlled via the following three parameters in [`config.yaml`](https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml)\( or `config.toml` in case of older RudderStack deployments\):

* `processSessions = False` \(make it `True` for batching\) 
* `sessionThresholdEvents = 100` 
* `sessionInactivityThresholdInS = 120` 

Events from an end-user are batched till we have 100 events or 120 seconds of inactivity since the last event. This list is then passed to the transformation function.

#### How do transformations affect the pipeline? If RudderStack is connected to the database and transformation is used to enrich the data, will it slow everything down?

There is parallelism in calling the transformation function, so ideally it should not slow the system. However, if you have a really slow transformation, you can increase the number of transformation workers by tweaking `numTransformWorker`.

#### Are there configurations that control how many events are grouped together so that we can minimize the number of database calls? 

Number of user events that are batched together can be configured with `sessionThresholdEvents` and `sessionInactivityThresholdInS`. Higher the numbers, longer the events are grouped into a session. It is important to note that these will increase the memory footprint proportionally.

#### Can we share connections across transformations?

Each execution of a transformation happens in a sandboxed V8 isolate. We do not support sharing data or connections across executions.

#### Looking at this [example](https://github.com/rudderlabs/sample-user-transformers/blob/master/IP2LocationEnrichment.jstransform), I see it references `e.request_ip` . But when I look at the live event stream for the `page` calls we have coming in, I do not see that key in the payload. Is it just not shown or is it not there?

`e.request_ip` is populated by the RudderStack data plane. It’ll always be there, but we don’t show that parameter in our **Live Events** tab. The **Live Events** tab is to get the information you are passing to the data plane, whereas `request_ip` is something that data plane populates. So, we don’t show it in the live events.

#### How do I add custom user transformations in RudderStack?

RudderStack allows you to implement your own custom transformation functions that leverage the event data, to implement specific use-cases based on your business requirements. For more information, you can refer to our [documentation](https://docs.rudderstack.com/how-to-guides/adding-a-new-user-transformation-in-rudderstack#accessing-metadata) on adding custom transformations.

## RudderStack SDKs

This section aims to address the commonly asked questions about RudderStack's SDKs for your web and mobile apps.

#### I want to use the RudderStack JavaScript SDK to track impressions in an eCommerce site, such as product impression. How can I send the impression data in batches? I could not find the `batch` method in the SDK.

You should use the `track` method in the SDK instead. For JavaScript SDK's `track` method parameters specific to eCommerce, you can refer our Google Analytics [Enhanced eCommerce](https://docs.rudderstack.com/destinations/google-analytics-ga#enhanced-e-commerce) guide.

## RudderStack Integrations

RudderStack currently supports integrations with over 70 marketing and analytics platforms. This section aims to address the commonly asked questions about these integrations.

#### Would a destination connected with a source work if connected to a new source? Or would we need to do anything else for that?

Yes, you can use the same destination. It should work without any problem.

#### How to force RudderStack to push all the data to a data warehouse in real-time with no delay? During the implementation, it would be better to see how the data is collected in real-time, rather than 30 minutes later.

You can override the UI set sync frequency by setting `warehouseSyncFreqIgnore` to true in [`config.yaml`](https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml) \(or `config.toml`, in case you don't have an older RudderStack deployment\). You can set your desired frequency by changing the `uploadFreqInS` parameter.

## RudderStack Failover, Hardening and Security

#### What sort of hardening is in place to ensure up-times with a single RudderStack node?

* At the infrastructure layer, RudderStack runs on a multi-availability zone EKS cluster. So hardware failures, if any, are handled by Kubernetes by relocating pods.
* At an application level, RudderStack operates in either of the following 3 modes:
  * **Normal** mode, where everything is normal and there are no issues.
  * If for some reason the system fails \(e.g. because of a bug\), it enters the **Degraded** mode, where RudderStack processes incoming requests but doesn't send it to destinations. 
  * If the system continues to fail to process the data \(e.g. internal database corruption\), it enters the **Maintenance** mode where we save the previous state \(which can be debugged and processed\) and start from scratch - still receiving requests. 
* All of RudderStack's SDKs also have failure handling. They can store events in local storage and retry on failure.
* RudderStack provides isolation between the data and control planes. For example, if the control plane \(where you manage the source and destination configurations\) goes offline, the data plane continues to operate.

All this is done to ensure that RudderStack can always receive events, and no events are lost.

#### Would adding an additional node to RudderStack cause an outage, and if so what is the expected downtime? How long would it take to recover from backup?

Adding a new node requires a bit of downtime. However, we have built RudderStack it to minimize this downtime as much as possible. When a new node is added, we need to re-balance users across nodes \(to keep event ordering\). While the re-balancing is happening \(can take a few minutes\), RudderStack does not send events to downstream destinations, but continues to receive events so that your SDKs won't see any failures \(ignoring the small ELB switch over time\). Also, the SDKs have local caching capability & retries built-in. So even if they see a failure, no events are lost.

## Retry behavior

#### Destination HTTP APIs

The final downstream destination APIs \(Amplitude, Braze etc\) can be unavailable or send a failure code for any number of reasons. RudderStack retries these kind of jobs depending on the type of failure

| Failure Code | Retry Behavior |
| :--- | :--- |
| 5XX | Retry for a time window of 3 hours with exponential backoff and a minimum of 3 times |
| 429 | Retry for a time window of 3 hours with exponential backoff and a minimum of 3 times |
| 4XX | Retry for a minimum of 3 times without any backoff  |

The above behavior is configurable via config variables in `config.yaml` \(Refer [here](https://docs.rudderstack.com/administrators-guide/config-parameters#router)\)

```c
[Router]
retryTimeWindowInMins = 180
minRetryBackoffInS = 10
maxRetryBackoffInS = 300
maxFailedCountForJob = 8
```

{% hint style="info" %}
Note that if a user's event fails, the others are not sent until the failed one is successful or aborted \(as per above behavior\). This is to ensure event ordering for all events of a single user
{% endhint %}

## Throttling behavior

#### Destination HTTP APIs

The final downstream destination APIs \(Amplitude, Customer.io etc\) have limits on the number of events they accept at an account level or at an user/device level. We try to throttle the API requests as per the final destination limits.

Some examples are:

* [https://customer.io/docs/api/\#api-documentationlimits](https://customer.io/docs/api/#api-documentationlimits)
* [https://help.amplitude.com/hc/en-us/articles/360032842391-HTTP-API-V2\#upload-limit](https://help.amplitude.com/hc/en-us/articles/360032842391-HTTP-API-V2#upload-limit)

These limits can also be configured using config variables in `config.yaml` or using environment variables as described in comments [here](https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml#L1-L32).

```c
# Below configuration throttles request to Amplitude at 1000 req/s for the account 
# and 10 req/s for individual user/device  

[Router.throttler.AM]
limit = 1000
timeWindowInS = 1
userLevelThrottling = true
userLevelLimit = 10
userLevelTimeWindowInS = 1
```

## Contact Us

If you come across any issue that is not listed in this guide, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you.











