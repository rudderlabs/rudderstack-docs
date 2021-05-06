---
description: Step-by-step guide to send event data from RudderStack to Google Sheets.
---

# Google Sheets

[Google Sheets](https://www.google.com/sheets/about/) is a popular spreadsheet program that is bundled as a part of the free, cloud-based office suite offered by Google. With Google Sheets you can seamlessly create spreadsheets that update and save automatically and are easy to access from your Google Drive.

RudderStack allows you to configure Google Sheets as a destination and send your event data to it directly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/googlesheets)**.**
{% endhint %}

## Getting Started

To enable sending data to Google Sheets, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Google Sheets.

| **Connection Mode** | **Web**       | **Mobile**    | **Server**    |
| :------------------ | :------------ | :------------ | :------------ |
| Device mode         | **-**         | **-**         | **-**         |
| Cloud mode          | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Google Sheets, perform the steps below:

- From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Google Sheets.**

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/getting-started/adding-source-and-destination-rudderstack) guide to add a source and destination in RudderStack.
{% endhint %}

- Give a name to the destination and click on **Next**. You should then see the following screen:

![Google Sheets Connection Settings](../.gitbook/assets/google-sheetsv2-config.png)

- Enter the following details:

  - **Connection Settings**

    - **Credentials**: Follow these steps to obtain the credentials for connecting Google Sheets:

      - Create a service account in from your Google Cloud Console account.![Create Service Account](../.gitbook/assets/service-account.png)
      - A JSON file with the credentials will be generated against your service account.![Credentials](../.gitbook/assets/credentials.png)
      - Paste this downloaded JSON in the **Credentials** field.
        {% hint style="warning" %}Once you have completed the conncetion, make sure you have enabled [Google-Sheets-API](https://console.cloud.google.com/apis/library/sheets.googleapis.com?q=sheets&id=739c20c5-5641-41e8-a938-e55ddc082ad1&project=rudder-integration&supportedpurview=project) in the project of your service account
        {% endhint %}

    - **Sheet ID**: Add the Google Sheet ID to which you want to send your event data. You need add the email address of the service account as an editor for that specific Google Sheet.
    - **Sheet Name**: Add the Sheet Name to which you want to send your data, you can find the Sheet-Name at the bottom left corner the spreadsheet as shown below: ![Google Sheets Sheet](../.gitbook/assets/sheet-name.png)

    - Enter the **Event Properties** corresponding to **Column Name**. For mapping `attributes` from `traits` or `properties` you can directly enter the `attribute` name (Example: `productName`, `firstName`, or `address.city`) and map it to desired Column, for other `contextual` `attributes` you need to enter the absolute path to the `attribute` using dot notation. (Example `context.app.build`)
      {% hint style="warning" %} If you have **Nested Attributes** inside `properties` or `traits` please use **dot** notation for mapping to respective Column (Example: `address.zip`, `address.city`..)
      {% endhint %}

{% hint style="info" %}
You can send `page`, `identify`, and `track` events with this integration.
{% endhint %}

{% hint style="warning" %}
The **Sheet Name** is **case-sensitive** and has to be exactly as seen in Google Sheets.
{% endhint %}

- Finally, click on **Next** to complete the configuration.

Google Sheets should now be added and enabled as a destination in RudderStack.

## Page

The `page` call contains information related to the page, such as the URL of the web page visited by the user.

{% hint style="info" %}
For more information on the `page` method, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

A sample `page` payload is as shown in the snippet below:

```javascript
rudderanalytics.page({
  path: "path",
  url: "url",
  title: "title",
  search: "search",
  referrer: "referrer",
});
```

## Identify

The `identify` call captures the relevant details about the visiting user.

{% hint style="info" %}
For more information on the `identify` method, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

A sample `identify` payload is as shown in the snippet below:

```javascript
rudderanalytics.identify("userId", {
  name: "FirstName LastName",
  email: "example@email.com",
  phone: "phone",
});
```

## Track

The `track` call captures the information related to the actions performed by the user along with their properties or traits.

{% hint style="info" %}
For more information on the `track` method, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

A sample `track` payload is as shown in the snippet below:

```javascript
rudderanalytics.track("Track Event", {
  category: "category",
  label: "label",
  value: "value",
});
```

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen along with any associated optional properties. This call is similar to the `page` call but is exclusive to your mobile device.

A sample `screen` call looks like the following code snippet:

```text
[[RSClient sharedInstance] screen:@"Sample Screen Name" properties:@{@"prop_key" : @"prop_value"}];
```

## FAQs <a id="faqs"></a>

### I have added my Service Account Credentials, still my events are not sent to Google-Sheets?

- Verify if you have enabled Google-Sheets-API in the project of your service account.

- Verify if you have added edit access to your Sheet with your service account.

- Verfiy if you have added correct Sheet-Id and Sheet name in RudderStack dashboard.

- Verify if you have added event `attribute` mapping for the Sheet.

### Where do I find my Google-Sheet-ID?

- You can find the Google-Sheet-Id within the Google-Sheet-Url

![Google Sheet ID](../.gitbook/assets/Google-Sheet-ID.png)

## Contact Us

If you come across any issues while configuring or using Google Sheets with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
