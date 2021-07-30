---
description: Step-by-step guide to send your event data from RudderStack to Criteo.
---

# Criteo

[Criteo](https://www.criteo.com/) is a an advertising platform providing online display advertisement. It helps to generate brand awareness. It helps to increase website traffic and encourage interested people to make purchases by increasing website conversions.

You can now send your event data directly to Criteo through RudderStack.

{% hint style="success" %}
**Find the open-source code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-sdk-js/tree/production/integrations)**.**
{% endhint %}

## Getting Started

Before configuring your source and destination on the RudderStack, please check whether the platform you are sending the events from is supported by Criteo. Please refer the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | - | - |
| **Cloud mode** | -| - | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Criteo, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderstack.com/), add the source and Criteo as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

![Configuration Settings for Criteo](../../.gitbook/assets/Criteo.png)

## Criteo Configuration Settings on the RudderStack Dashboard

To successfully configure Criteo as a destination, you will need to configure the following settings:

* **Criteo Account ID:** Account ID or Partner ID of your Criteo account.
* **Home Page URL:** The full URL of your website’s Home page. This is useful when Homepage Tag needs to be fired to add visitors to your target audience.
{% hint style="info" %}
This field needs to be filled out mandatorily when the event name of `page` call is anything other than `home`and still the homepage tag needs to be fired.
{% endhint %}
* **Email Hashing Method:** Criteo allows users to use email address as both hashed and non hashed pattern. If `md5` is chosen as an option, Rudderstack will hash encode the email address. 
* **Map specific fields to Criteo fields:** In this section, enter the `Payload Field` that will be used while sending the event. Also enter the corresponding `Mapped Field` that will be used to send the event data to Criteo.


## Page

The `page` call allows you to track the Home page that a user is viewing, along with its associated properties.

Use, this call only when it is needed to track the home page and add the users to target audience. Home page tag will be fired in three scenarios.

* When name field of the `page` call is `home`.
* When the current URL of the web page is same as the URL entered in the **Home Page URL** field in RudderStack dashboard. 
* When the URL mentioned inside `properties` of the `page` call is same as the URL entered in the **Home Page URL** field in RudderStack dashboard. 

An example of such `page` call is shown below.

```javascript
window.rudderanalytics.page("category", "home", {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer",
        testDimension: "true"
});
```

{% hint style="info" %}
Note that `HomePage Tag` will **not** be fired in any other scenario arises than what stated above.
{% endhint %}


## Track

The `track` call allows you to capture any action that the user might perform, and the properties associated with that action. Each action is considered to be an event. 


A sample `track` call looks like the following:

```javascript
   rudderanalytics.track('Product Viewed', {
            product_id: 'P123',
            quantity: 1,
            price: 24.75,
            name: 'my product',
            category: 'cat 1',
            sku: 'p-298',
            list: 'Apparel Gallery',
            testDimension: true,
            testMetric: true
          });
```

In the above snippet, RudderStack captures the information related to the `Product Viewed` event, along with any additional info about that event - in this case the details of the `Product Viewed` event.

The following table details the mapping of the Rudderstack E-Commerce events specified  [**here**](https://docs.rudderstack.com/rudderstack-api/rudderstack-ecommerce-events-specification) and the [**Criteo OneTag events**](https://support.criteo.com/s/article?article=All-Criteo-OneTag-events-and-parameters&language=en_US).

| **Rudderstack E-Commerce Events** | **Criteo OneTag Events** | **OneTag Event Names Used By Criteo**|
| :--- | :--- | :--- |
|`Product Viewed`| `Product Tag`| `viewItem`|
|`Cart Viewed`| `Basket/cart tag`|`viewBasket`|
|`Order Completed`| `Sales Tag`| `trackTransaction`|
|`Product List Viewed`|`Category/keyword search/listing Tag`| `viewList`|

{% hint style="info" %}
If `Category/keyword search/listing Tag` needs to be fired with filters it has to be entered within `filters` field within `properties` inside the `Product List Viewed` tag. The `filters` field is an array of objects that consists of each filter category in a single object. Criteo expects, `name`, `operator` and `value` field for every filter that needs to be passed to Criteo.
{% endhint %}

A simple `Product List Viewed` call to fire `Category/keyword search/listing Tag` is the following:

```javascript
 rudderanalytics.track(
          'Product List Viewed', {
          email: 'name@domain.com',
          zipCode: '12345',
          category: 'abc',
          keywords: 'key',
          page_number: 1,
          filters : [
              {
             name: 'processor',
             operator: 'eq',
             value:'snapdragon',
              }
          ],
          products: [
            {
              product_id: '223344ffdds3ff3'
            },
            {
              product_id: '343344ff5567ff3'
            }
          ]
        }
        );
```


## Contact Us

If you come across any issues while configuring Criteo with RudderStack, please feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

