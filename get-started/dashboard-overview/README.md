---
description: Detailed walkthrough of the RudderStack dashboard
---

# Dashboard Overview

Once you [**sign up**](https://app.rudderlabs.com/signup?type=freetrial) for RudderStack, you are presented with a dashboard that lets you set up and manage all your event data sources, destinations, and connections through an easy-to-use, intuitive UI.

![RudderStack Dashboard](../../.gitbook/assets/1%20%2818%29.png)

## Connections

This option lets you configure and connect different data sources and destinations and build efficient data pipelines across your entire customer data stack.

{% hint style="info" %}
See the [**Connections**](../../connections/) section for more details on setting up your data pipelines in RudderStack.
{% endhint %}

## Sources

This option lists all your configured sources. You can also configure a new source by clicking on the **Add Source** button.

![](../../.gitbook/assets/2%20%2824%29.png)

{% hint style="info" %}
See the [**Connections**](../../connections/) section for more details on setting up sources in RudderStack.
{% endhint %}

## Destinations

This option lists all the configured destinations where you can send your event data. You can also configure a new destination by clicking on the **Add Destination** button.

![](../../.gitbook/assets/3%20%2821%29.png)

{% hint style="info" %}
See the [**Connections**](../../connections/) section for more details on destinations and how to set up a new destination in RudderStack.
{% endhint %}

## Directory

This options lists all the available sources and destinations supported by RudderStack which you can use to set up your data pipelines.

![](../../.gitbook/assets/4%20%2821%29.png)



## Transformations

With this option, you can write your own JavaScript functions to transform your events in a destination-specific format. You can also create your own libraries - a RudderStack feature that allows you to reuse the code written for a transformation in other transformations.

{% hint style="info" %}
See the [**Transformations**](../../adding-a-new-user-transformation-in-rudderstack/) section to learn more about this feature. 
{% endhint %}

![](../../.gitbook/assets/5%20%2821%29.png)

## Teammates

This option lets you invite your teammates to collaborate on the current RudderStack workspace.

![](../../.gitbook/assets/7%20%2814%29.png)

{% hint style="info" %}
See the [**User Management**](user-management.md) section for more details on this option.
{% endhint %}

{% hint style="success" %}
RudderStack Cloud Free allows you to invite up to 3 members in your workspace. To increase this limit, you will be required to upgrade to the Pro or Enterprise plan. Check out our [**pricing page**](https://rudderstack.com/pricing/) for details on these plans, or [**log in**](http://app.rudderstack.com/upgrade) to upgrade now.
{% endhint %}

Your RudderStack workspace also includes other important details like:

## Workspace Token

A workspace token is a unique identifier associated with your current RudderStack workspace. It is useful when you want to install and set up open-source RudderStack or accessing various RudderStack API.

{% hint style="info" %}
See the [**Install and Set up RudderStack**](../installing-and-setting-up-rudderstack/) guide for steps on installing open-source RudderStack in your preferred development environment.

See the [**RudderStack API**](../../rudderstack-api/) guide for details on various available RudderStack API and how to use them.
{% endhint %}

## Data Plane URL

This is the URL required for routing and processing your events to RudderStack.

### **Getting the Data Plane URL**

* If you're using the **open-source** version of RudderStack, you are required to set up your own data plane by installing and setting up RudderStack in your preferred development environment. 
* If you're using the **enterprise** version of RudderStack, contact us for the data plane URL with the email ID you used to sign up for RudderStack.

## Contact Us

For more information on these RudderStack dashboard options, feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also talk to us on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

