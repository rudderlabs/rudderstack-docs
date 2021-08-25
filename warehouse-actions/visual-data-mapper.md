---
description: >-
  Detailed technical description of how to use the Visual Data Mapping feature
  for Warehouse Actions sources.
---

# Visual Data Mapper

The **Visual Data Mapper** \(VDM\) offers an intuitive UI to easily map your warehouse columns to specific destination fields. This is useful especially when mapping your warehouse data to custom fields defined in your destination without any second-guessing.

{% hint style="info" %}
This feature is currently available only for the [**HubSpot**](../destinations/crm/hubspot.md), [**Salesforce**](../destinations/crm/salesforce.md), [**Mailchimp**](../destinations/marketing/mailchimp.md), and [**Braze**](../destinations/marketing/braze.md) destinations.
{% endhint %}

{% hint style="success" %}
To use this feature, you can use an existing [**warehouse source**](./) and then connect it to a VDM-supported destination.

However, note that you can connect only one destination to a warehouse source. If you want to send data to multiple destinations, we recommend creating a source with the same settings for each destination.
{% endhint %}

## Using the Visual Data Mapper

To use the Visual Data Mapper, follow these steps:

* Set up a [**Warehouse Actions**](./) source. Then, connect it to a destination. As mentioned above, RudderStack currently supports the visual data mapping feature only for [**HubSpot**](../destinations/crm/hubspot.md), [**Salesforce**](../destinations/crm/salesforce.md), [**Mailchimp**](../destinations/marketing/mailchimp.md), and [**Braze**](../destinations/marketing/braze.md)**.**

{% hint style="info" %}
Follow our guide on [**Adding a Source and Destination in RudderStack**](../connections/adding-source-and-destination-rudderstack.md) for more information.
{% endhint %}

* Configure the destination with the relevant settings and click on **Next**. You should then see the following screen:

  


![](../.gitbook/assets/1%20%2828%29.png)

{% hint style="success" %}
The visual data mapping option is enabled for the supported destinations by default. 
{% endhint %}

{% hint style="warning" %}
Clicking on **Map with JSON** will cause the visual data mapping feature to be disabled - you can then configure the data via JSON.
{% endhint %}

* Choose the source warehouse **Schema** and **Table** from where you want to sync the data.

{% hint style="success" %}
RudderStack automatically loads all the relevant warehouse schemas and tables. If you have added a new schema or table during this configuration process, click on **Reload schemas and tables** to get all the latest schemas and tables.
{% endhint %}

* Also, select the destination **Object** where you want to sync the data. An example in case of the 

  [**HubSpot**](../destinations/crm/hubspot.md) ****destination is as shown:

![](../.gitbook/assets/2%20%2831%29.png)

{% hint style="success" %}
RudderStack automatically loads all the relevant destination objects. If you have added a new destination object during this configuration process, click on **Reload objects** to get all the latest objects.
{% endhint %}

### Choosing the Identifier

In the **Choose Identifier** section, specify the warehouse column to be used as the primary user identifier \(`user_id`\) and mapped to the destination field. An example is shown below:

![](../.gitbook/assets/3%20%2828%29.png)

### Mapping the Fields

In the **Map Fields** section, you can easily configure the source-destination field mappings. Follow these steps:

* Click on the **Map another field** option. From the dropdown, select the **Destination field**. Then, select the **Warehouse column** to want to map to this field.

![](../.gitbook/assets/image%20%2896%29.png)

{% hint style="success" %}
RudderStack gives you full visibility into the name and type of the fields that you are mapping. 
{% endhint %}

In case you are mapping fields that are of a different type or format - e.g., mapping the warehouse column `Phone` of type `string` to a destination field `Company ID` of type `float`, you can use the [**Transformations**](../adding-a-new-user-transformation-in-rudderstack/) feature to ensure there is no type mismatch while sending the events.

![](../.gitbook/assets/6%20%2823%29.png)

Once you have mapped all the source columns to the destination fields, click on **Next** to complete the destination configuration.

## Contact Us

For any questions or issues on the Visual Data Mapper feature, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

