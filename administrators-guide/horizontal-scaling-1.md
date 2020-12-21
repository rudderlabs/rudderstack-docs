---
description: >-
  Detailed technical description of the horizontal scaling options for the
  open-source as well as enterprise version of RudderStack.
---

# Horizontal Scaling

RudderStack makes it easier for you to add more nodes to your Kubernetes cluster, to process the events in a timely and effective manner. This guide shows you how to effectively configure your [Helm charts](https://github.com/rudderlabs/rudderstack-helm) to trigger a horizontal scale up/down, based on the version of RudderStack you are using. 

## RudderStack Open-source Version

Each RudderStack node consists of a backend pod and a PostgreSQL pod. In case a RudderStack cluster is not able to process the events, it is advisable to add more more nodes to it. By changing the **`backendReplicaCount`** in the [Helm configuration](https://github.com/rudderlabs/rudderstack-helm/blob/master/values.yaml), you can trigger horizontal scale up/down. If you set this value to any positive number, helm charts will create as many RudderStack nodes.

{% hint style="success" %}
The `values.yaml` file can be found [here](https://github.com/rudderlabs/rudderstack-helm/blob/master/values.yaml).
{% endhint %}

There are, however, a couple of challenges in scaling up or down this way.

### Event Ordering

In a single-node cluster, all events are routed to the same RudderStack node. This guarantees the  ordering of all events it has received for a given user. In case of a multi-node cluster, since the events of a same user can go to different nodes, the event ordering is not guaranteed by the cluster.

![Event Ordering While Scaling Up from 1 Node to 2 Nodes](../.gitbook/assets/image%20%2852%29.png)

### Scale Down

If you scale down, all the pending events in the terminated node will not be delivered to the destination. You will need to make sure that all the events in a node are drained before terminating it.

![Scaling Down from 2 Nodes to 1 Node](../.gitbook/assets/image%20%2884%29.png)

{% hint style="info" %}
To understand how RudderStack handles hardware failures and guarantees High Availability, please go through our [High Availability guide](https://docs.rudderstack.com/administrators-guide/high-availability).
{% endhint %}

## RudderStack Enterprise Version

The Enterprise version of RudderStack makes horizontal scaling seamless, while maintaining the event ordering and guaranteeing the delivery of all events.

### Event Ordering

RudderStack Enterprise has a proxy service that implements a routing algorithm. It forwards a given set of user events to the same RudderStack node every time. Each node then guarantees the event ordering while delivering to the specified destinations. This proxy service is highly available and scalable.

![Event Ordering in RudderStack Enterprise](../.gitbook/assets/image%20%2828%29.png)

### Scale Down

RudderStack Enterprise includes a separate process named **Jobs DB Migrator**. This process is responsible for moving all pending events from the existing nodes to the new nodes after scaling up or down. It makes sure all the events are migrated to the new nodes and the event ordering is maintained during and after the migration process.

![Scaling Down in RudderStack Enterprise](../.gitbook/assets/image%20%2872%29.png)

## Contact Us

If you want to know more about horizontal scaling in RudderStack, or if you have any queries or concerns on how to implement it effectively, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also [request a demo](https://rudderstack.com/request-a-demo/) to see the feature in action, or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel to know more about this feature.

