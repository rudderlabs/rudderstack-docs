---
description: >-
  Detailed technical description of the alerting feature in the open-source and
  enterprise version of RudderStack.
---

# Alerting Guide

Real-time alerts are critical to every system. You need to be notified if the system is not working as per your expectation. Categorizing all possible alerts and being able to identify a given alert helps helps you resolve any issue quickly. This way, you can maximize high availability of your system, and not worry about unknown downtime.

## Open-source Alerting

The open-source version of RudderStack has support for the following alerts:

### RudderStack Crash Alerts 

If you configure the variable `BUGSNAG_KEY` environment variable, the crashes are automatically sent to the Bugsnag destination.

### RudderStack Running Mode Alert

If the RudderStack server starts in a degraded or maintenance mode, you will be alerted. We support [**PagerDuty**](https://www.pagerduty.com/) and [**VictorOps**](https://victorops.com/) integrations for this alert. 

{% hint style="info" %}
To learn more about the different running modes in RudderStack, please check our guide on the [RudderStack Server Running Modes](https://docs.rudderstack.com/administrators-guide/high-availability#normal-mode).
{% endhint %}

## Configuring PagerDuty

Please follow these steps to configure PagerDuty:

* Add a new **Events API v2 Integration** in your PagerDuty dashboard.
* Copy the `Integration Key`
* Add the following environment variables:

```text
ALERT_PROVIDER=pagerduty
PG_ROUTING_KEY=<your_integration_key>
```

## Configuring VictorOps

In order to configure VictorOps, please follow these steps:

* Create a new **REST generic integration** in VictorOps dashboard
* The URL would then look like the following: 

`https://alert.victorops.com/integrations/generic/20131114/alert/<YOUR_INTEGRATION_KEY`

* Copy the `Integration Key`
* Add the following environment variables:

```text
ALERT_PROVIDER=victorops
VICTOROPS_ROUTING_KEY=<your_victorops_routing_key>
```

## Enterprise Alerting

In addition to the default open-source alerts, the enterprise version of RudderStack comes with over 30 built-in warnings and critical alerts. These alerts are customizable and can be configured according to your infrastructure requirements.

This alerting system is designed to help you identify and debug the problems quickly and efficiently, before things start to go wrong in the system.

The following are a few examples where the alerts would be triggered:

* Request Latency - 99 percentile, 95 percentile values
* Blocked requests / Invalid requests
* Warehouse upload failures
* PostgreSQL Disk usage
* Transformations execution time
* Degraded / Maintenance mode
* Jobs DB table count \(This is a metric to measure the unprocessed events\)
* Control Plane API errors

### Warning Alerts

You can setup warnings to check if RudderStack is not behaving as expected. Warnings are better for the acceptable anomalies in the system.

For example - The disk usage reaching 40% for a short duration due a sudden spike in your customer activity might be acceptable. But consistent disk usage of 80% is something that needs your immediate attention.

### Critical Alerts

These are the alerts that need to be immediately paged to your engineering or ops teams. Our runbooks will help you understand the problem and suggest possible remedies for each alert.

For example - Warehouse upload failures - There could be a possible change in access to the warehouse.

RudderStack provides default values for alert configurations that would work well for most of the cases. It is recommended to set up the thresholds based on your event volume and the acceptable values as per your requirements.

A sample alert configuration in a RudderStack Enterprise Kubernetes deployment is as shown:

```text
tasks:
      processor-transformer-request-time:
        vars:
          crit:
            value: '"mean" > 1500.0'
          warn:
            value: '"mean" > 500.0'
```

### Integrations

Enterprise alerting has native integrations with various third-party incident management tools like PagerDuty, VictorOps and OpsGenie, as well as notification tools such as Slack and Mattermost. It also supports webhooks, so that you can easily integrate any third-party tool that has HTTP API endpoints.

![A Sample Enterprise Alert Integrated with Slack](../.gitbook/assets/image%20%2856%29.png)

## Contact Us

To know more about the alerting feature of RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.





