---
description: >-
  Quick solutions to the common and not-so-common problems you are likely to
  encounter as an admin while using RudderStack
---

# Troubleshooting Guide

This section contains solutions to some of the commonly faced issues you are likely to encounter as an Admin.

## The SDK returns success, but I don't see any events in my destination. What **should I do?**

1. Check if the server is running in _normal_ mode in the file `/data/rudderstack/recovery_data.json` or `/tmp/recovery_data.json`.
2. If the server is in "degraded" or "maintenance" mode, RudderStack just stores the events and will not process them.

## My Data Plane does not start. What should I do?

1. Check if you have provided the right backend token
2. Check if the Control Plane is up \([https://api.rudderlabs.com/health](https://api.rudderlabs.com/health)\)

## I can't access the Control Plane. What should I do?

Check your internal firewall rules and edit if needed. You need access to outbound HTTP.

{% hint style="success" %}
If the control plane is accessible from your network but is down, we are already working to fix it. Do leave us a note.
{% endhint %}

## All the destinations receive events except a few. What should I do?

1. Check if those destination are enabled  in Control Plane
2. Verify that the config parameters such as API key, tracking ID, etc. are correct

## Events are lagging in the destination. What should I do?

1. There is a possibility that a destination service \(Google Analytics, S3, etc.\) is down. 
2. Check the number of pending gateway tables \(tables that start with `gw_`\),  router tables \(tables that start with `rt_`\), and batch router tables \(tables that start with `batch_rt_`_\)._
3. If the number for any of the above possibilities is high \(&gt; 5\), then we have incoming requests at a higher rate than what we can process. Consider adding another RudderStack node if possible.
4. If you have access to RudderStack Enterprise edition, check out the Grafana dashboards.

## RudderStack has entered the degraded mode. What should I do?

When RudderStack enters "degraded" mode, it will only log the event and not process the event. If the issue why the server entered the degraded mode is temporary \(Transformer is down\), then fix the issue and restart the server in the normal mode.

{% hint style="success" %}
You can restart the server in the normal mode by updating the `/data/rudderstack/recovery_data.json` or `/tmp/recovery_data.json`. Set Mode to "normal"
{% endhint %}

## RudderStack has entered the maintenance mode. What should I do?

When RudderStack enters "maintenance" mode, we take a back up of the old database and create a new database in the "degraded" mode. RudderStack will only log the event and not process the event in this case. If the issue is fixed, start another instance of RudderStack server in normal mode but in a different port \(say 8081\) pointing to the old DB. That will drain all the events in the old DB.  
Then restart the actual server in the normal mode by updating the `/data/rudderstack/recovery_data.json` or `/tmp/recovery_data.json`. Set the mode to "normal"_._ It will resume routing pending events and the ordering of the events is guaranteed.

## The disk usage is increasing. What should I do?

Check if your system is in the **degraded** or **maintenance** mode. This could result in only logging the events and not processing them. If needed, increase the storage capacity of your machine till there are no issues in the disk usage.

## The memory usage keeps increasing. What should I do?

Ideally, this should not happen. Restarting the service is recommended in such a scenario.  
If you have sessions enabled, RudderStack caches the session information. Please configure `sessionThreshold` and `sessionEvents` in [`config.yaml`](https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml).

## Gateway tables are not getting dumped

* If there are tables that start with _``_`pre_drop```_ but if you don't see them being removed, verify the access credentials to your object storage like S3.
* If you have multiple instances of Data Plane, each table dump will be inside a specific folder named after the `INSTANCE_NAME`.

## How do I check the health of RudderStack daily?

1. If you have access to RudderStack Enterprise, you already have a visualization of the RudderStack server metrics at your disposal for tracking the health of your server. 
2. Ensure that the number of`jobsDB` tables is not increasing.
3. Verify that the server mode is **normal**.

## How do I enable debug logging?

Enable debug logging by setting the following variable in your `.env` file as shown:

```text
LOG_LEVEL=DEBUG
```

{% hint style="info" %}
For any other issues that you might encounter, please feel free to [contact us](https://rudderstack.com/contact/).
{% endhint %}

## How to fix the HTTP connection errors?

We recommend the following configuration for the production deployments. On a Linux machine, add the following lines to `/etc/sysctl.conf`:

```text
net.ipv4.tcp_max_tw_buckets = 65536
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 0
net.ipv4.tcp_max_syn_backlog = 131072
net.ipv4.tcp_syn_retries = 3
net.ipv4.tcp_synack_retries = 3
net.ipv4.tcp_retries1 = 3
net.ipv4.tcp_retries2 = 8
net.ipv4.tcp_rmem = 16384 174760 349520
net.ipv4.tcp_wmem = 16384 131072 262144
net.ipv4.tcp_mem = 262144 524288 1048576
net.ipv4.tcp_max_orphans = 65536
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_low_latency = 1
net.ipv4.tcp_syncookies = 0
```

If your system is hitting TCP limits and returning HTTP errors, the above configuration will help.

## Contact Us

For any other issues or bugs that you might encounter, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help!

