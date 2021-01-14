---
description: Step-by-step guide to send your event data from RudderStack to Active Campaign
---

# Active Campaign

[Active Campaign](https://www.activecampaign.com/) is a popular platform which provides email marketing, marketing automation and CRM tools platform that makes it easy for you to deliver scalable customer experiences and accelerate your business growth. With Active Campaign all-in-one growth platform, you can effectively monitor your customers' product behavior, and design personalized customer experiences and in no time.


## Getting Started

Before configuring your source and destination on the RudderStack, please check whether the platform you are sending the events from is supported by Active Campaign. Please refer the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud mode** | **Supported**  | **Supported**  | **Supported**  |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Active Campaign, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and Active Campaign as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

{% hint style="warning" %}
Do not add native Adjust SDK to your project as it will prevent you from successful integration. Please refer to the screenshot below for more details:
{% endhint %}

![Configuration Settings for Adjust](../.gitbook/assets/Active_Campaign.png)

## Active Campaign Configuration Settings on the RudderStack Dashboard

To successfully configure Amplitude as a destination, you will need to configure the following settings:

* **API Url:** Your API URL is the unique url generated against your account and it can be found in your account on the Settings page under the "Developer" tab.
* **API Key:** Your API key can be found in your account on the Settings page under the "Developer" tab. Each user in your ActiveCampaign account has their own unique API key.
* **Event Key:** This value is unique to your ActiveCampaign account and can be found named "Event Key" on Settings > Tracking > Event Tracking inside your ActiveCampaign account.
* **ActID:** This value is unique to your ActiveCampaign account and can be found named "actid" on Settings > Tracking > Event Tracking API.

## Page

The `page` call allows you to record information whenever a user sees a web page, along with the associated optional properties of that page. This method must be called at least once per page load.

When you call page, we will send that event to ActiveCampaign as a `site tracking event`. This will add your domain to whitelist for tracking.

A sample `page` call looks like the following:

```javascript
rudderanalytics.page("home", {
        path: "path",
        url: "url",
        title: "title",
        search: "search",
        referrer: "referrer"
});
```
In the above sample, we capture information related to the page being viewed, the url `property` will is used to whiltelist the website in the destination

{% hint style="info" %}
A Page call will only work if `Site Tracking is enabled`. You can enable this by visiting the Tracking tab on the Settings page in your ActiveCampaign account.
{% endhint %}

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. This call is similar to the `page` call, but is exclusive to your mobile device.

A sample `screen` call looks like the following code snippet:

```javascript
rudderanalytics.screen("Screen Viewed", {
        category: "category",
        label: "label",
        value: "value",
        url: "www.rudderlabs.com",
        info:"Rudder_Event_Screen_Test"
 });
```

In the above snippet, we capture information related to the screen being viewed, and info about that screen view event.

## Track

The `track` call allows you to capture any action that the user might perform, and the properties associated with that action. Each action is considered to be an event.

A sample `track` call looks like the following:

```javascript
rudderanalytics.track("Product Purchased", {
      category: "category",
      label: "label",
      name: "Rubik's Cube"
 });
```

In the above snippet, we capture information related to the `Product Purchased` event, and info about that event, like name of that event.

## Identify

The `identify` call lets you associate a user with their actions and capture all the relevant traits about them. This information includes unique `userid` as well as any optional information such as name, email address, etc.

A sample `identify` call looks like the following:

```javascript
rudderanalytics.identify({
  "userId": "userid",
  "anonymousId": "d80b66d5-b33d-412d-866f-r4fft5841af",
  "traits": {
    "email": "name@surname.com",
    "name": "John Doe",
    "phone": "2364556"
  }
})
```
In the above snippet, we capture informations about a user.

{% hint style="info" %}
The `email` trait is a mandatory trait for mapping a user to Active Campaign. If user already exists the user will be updated with new values.
{% endhint %}

### Custom tags

You can associate a user with custom tags by passing in `tags` trait
```javascript
rudderanalytics.identify({
  "userId": "userid",
  "anonymousId": "d80b66d5-b33d-412d-866f-r4fft5841af",
  "traits": {
    "email": "name@surname.com",
    "name": "John Doe",
    "phone": "2364556",
    "tags": ["Returning User", "Coupon Used"]
  }
})
```
{% hint style="info" %}
The `tags` property should contain an array of tags which you want to associate with the user. If any tag is already created previously in the destination Rudder will skip creation of that tag automatically.
{% endhint %}

### Custom fields

ActiveCampaign also supports updating a contact’s custom fields with this integration. To send custom fields to ActiveCampaign you need to create the custom field first in ActiveCampaign for each custom field you want to send. Then when you call identify with keys that match those traits, those custom fields for the contact will be updated. Use the `fieldInfo` trait to set values to custom fields.

```javascript
rudderanalytics.identify({
  "userId": "userid",
  "anonymousId": "d80b66d5-b33d-412d-866f-r4fft5841af",
  "traits": {
    "email": "name@surname.com",
    "name": "John Doe",
    "phone": "2364556",
    "tags": ["Returning User", "Coupon Used"],
    "fieldInfo": {
        "Interest": "Electronics",
        "Country": "USA",
      }
  }
})
```

{% hint style="info" %}
The `fieldInfo` property contains the value of  filed information you want to store for that contact. For using this feature you have to create the fields from the dashboard (Example - `Interest, Country`) before passing in values for a user.
{% endhint %}


## Contact Us

If you come across any issues while configuring Amplitude with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
