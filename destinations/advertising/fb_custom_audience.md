---
description: Step-by-step guide to send event data from RudderStack to Facebook Custom Audience.
---

# Facebook Custom Audience

[**Facebook Custom Audience**](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences) is a popular targeting tool that lets you find people on Facebook interested in your business. It lets you create custom audiences through customer lists, Facebook engagement, and website/app traffic.

RudderStack lets you send your customer events for creating custom audiences by leveraging the Facebook Marketing API.

You can now send your customer events data list directly for adding them to already created Facebook Custom Audience through RudderStack.

{% hint style="info" %}
The user information in your events may include email, phone number, gender, etc. For more information on the supported fields, refer the documentation [here] (https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences#hash)
{% endhint %}


{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/fb_custom_audience)**.**
{% endhint %}

## Getting Started

To enable sending your event data to Facebook Custom Audience, you will first need to add it as a destination in RudderStack.Once the destination is configured and enabled, events from RudderStack will start flowing to Custom Audience.

Before configuring Facebook Custom Audience as a destination, verify if the source platform supports sending events to Custom Audience by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud mode** | - | - | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Custom Audience, perform the steps below:

* From your [**RudderStack dashboard**](https://app.rudderlabs.com/), add the source. From the list of destinations, select **Facebook Custom Audience**.

{% hint style="info" %}
Please follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and click on **Next**. You will then see the following screen:

![Facebook Custom Audience Setup](https://user-images.githubusercontent.com/59817155/123789892-4a4ec800-d8fb-11eb-8ac4-480f7acbf7ef.png)

## Custom Audience Connection Settings

To add Custom Audience as a destination in RudderStack, you will need to configure the following settings:

* **Access Token** Enter the access token of your business application set up for accessing the Facebook Marketing API.

{% hint style="info" %}
Check the **FAQ** section for more information on how to find your User Access Token.
{% endhint %}

* **Schema Fields** Choose your schema fields (at least one) from the available options. **This is a mandatory field**. RudderStack expects the user information to consist of **every** schema field that has been chosen on the dashboard, in the same order. 

{% hint style="info" %}
Any other information sent without choosing the specified schema field on the dashboard will be ignored by RudderStack. 
{% endhint %}

* **Map Specific Events To Audience ID**: Enter the **Event Name(s)** you are going to use to send your user data to Rudderstack (for e.g.`uploadingCustomAudience`,`trimmingCustomAudience` etc.\). Also, specify the corresponding **Custom Audience ID(s)** to which the audiences will be added to/removed from.

{% hint style="info" %}
Check the **FAQ** section for more information on how to find your Audience ID.
{% endhint %}

{% hint style="info" %}
You can only send `track` events with the event names specified in the dashboard.
{% endhint %}

* Some other important settings are: 

  * **Enable Hashing**: Facebook expects the user data to be hash encoded using `SHA256`. if this option is enabled, RudderStack will hash encode the user data irrespective of the schema type chosen in the RudderStack dashboard.

  * **Disable Formatting**: Facebook has fixed data formats for all the allowed schema fields. If this option is enabled, RudderStack will not format the user data before sending it to Custom Audience.

## Updated `track` Event Structure to Send User Data to Custom Audience

The `userListAdd` and `userListDelete` arrays containing the user data objects are expected inside the properties field of the `track` event.


 * **userListAdd**: Refers to the user information that needs to be added to the custom audience.
 * **userListDelete**: Refers to the user information that needs to be deleted from the custom audience.
 
{% hint style="warning" %}
You cannot add or remove users from a custom audience using the same `session_id`.
{% endhint %}


{% hint style="info" %}
For adding the session information to any user addition/deletion operation, the Facebook Marketing API expects the `session_id`, `batch_seq`, `last_batch_flag` fields to be present. **However, note that the data additon and deletion operations are possible without explicitly specifying the session information.**
{% endhint %}

A detailed description of the session fields is documented in the table below (Source: [here](https://developers.facebook.com/docs/marketing-api/reference/custom-audience/users/#parameters)):

|**Rudderstack Supported Field Name**| **Marketing API Field Name** | **Data Type** |  **Description**|
| :--- | :--- | :--- |:--- |
|`sessionIdAdd`| `session_id` | `int64` | `Advertiser generated session identifier, used to track the session. It has to be unique in a single ad account. You need to include this while tracking the session for adding users to a custom audience.` |
|`sessionIdDelete`| `session_id` | `int64` | `Advertiser generated session identifier, used to track the session. It has to be unique in a single ad account. You need to include this while tracking the session for removing users from a custom audience.` |
|`batch_seq,batchSeq,batchSequence`| `batch_seq` | `int64` | `A 1 based sequence number, used to identify the request in the session.` |
|`last_batch_flag,lastBatchFlag`|`last_batch_flag`|`boolean`|`true when sending the last request`|
|`estimated_num_total,estimatedNumTotal`|`estimated_num_total`|`int64`|`Estimated total number of users to be uploaded in a particular session`|

# Mapping of Schema fields between Facebook Marketing API and [**RudderStack dashboard**](https://app.rudderlabs.com/)

| **Dashboard Field Name** | **Marketing API Schema Field (Rudderstack Supported Field Name)** | **Field Guidelines**|
| :--- | :--- | :--- |
|`EMAIL`|`EMAIL`| `Trim leading, trail whitespace, and convert all characters to lowercase.`|
|`EMAIL_SHA256`|`EMAIL_SHA256`| `In case you are already hashed emails, and also Enable Hashing is switched on in Rudderstack dashboard, emails will get sent to Facebook double-hashed.`|
|`PHONE`|`PHONE`| `Remove symbols, letters, and any leading zeroes. The country code is needed as prefix, if COUNTRY field is not specified.`|
|`PHONE_SHA256`|`PHONE_SHA256`|`In case you are already hashed Phone numbers, and also Enable Hashing is switched on in Rudderstack dashboard, Phone numbers will get sent to Facebook double-hashed.`|
|`GENDER`|`GEN`|`Use these values: m or male for Male and f or female for Female.`|
|`MOBILE ADVERTISER ID`|`MOBILE_ADVERTISER_ID`|`Use all lowercase, and keep hyphens. This information will not be hashed.`|
|`MADID`|`MADID`|`Use all lowercase, and keep hyphens. This information will not be hashed.`|
|`EXTERN_ID`|`EXTERN_ID`|`This information will not be hashed.`|
|`DOB YEAR (YYYY)`|`DOBY`| `Use the YYYY format from 1900 to current year.`|
|`DOB MONTH (MM)`|`DOBM`|`Use the MM format from 01 to 12.`|
|`DOB DATE (DD)`| `DOBD`|`Use the DD format from 01 to 31.`|
|`LAST NAME` |`LN`|`Use a-z only. Lowercase only, no punctuation. Special characters in UTF-8 format.`|
|`FIRST NAME` |`FN`|`Use a-z only. Lowercase only, no punctuation. Special characters in UTF-8 format.`|
|`FIRST NAME INITIAL`|`FI`|`Use a-z only. Lowercase only. Special characters in UTF-8 format.`|
|`CITY`|`CT`|`Use a-z only. Lowercase only, with no punctuation, no special characters, and no white space.`|
|`US STATES`|`ST`|`Use the 2-character ANSI abbreviation code, lowercase. Normalize states outside the US in lowercase, with no punctuation, no special characters, and no white space.`|
|`ZIP`|`ZIP`|`Use lowercase, and no white space. For the US, use only the first 5 digits. For the UK, use the Area/District/Sector format.`|
|`COUNTRY`|`COUNTRY`|`Use lowercase, 2-letter country codes in ISO 3166-1 alpha-2.`|

{% hint style="warning" %}

Rudderstack has modified the schema names in dashboard to ensure better readability. However, during the event call, the field names **must** be aligned with the schema names permitted by Facebook Marketing API, as mentioned above.

{% endhint %}

## Explicit Formatting Feature

When the formatting is enabled in Rudderstack dashboard, the following behaviour can be expected for schema fields listed below:

 | **Schema Field Name** | **Example Input** | **Formatted Output ( Before hashing )** |
 | :--- | :--- | :--- |
 | `EMAIL`|`ABC@gmail.com `|`abc@gmail.com`|
 | `PHONE`|`0@96346895`| `96346895`|
 | `GEN`| `FEMALE`| `f`|
 | `DOBD`|`2`|`02`|
 | `DOBM`|`1`|`01`|
 |`LN & FN`|`Abc,@`|`abc@`|
 |`FI`|`Mr.`|`mr.`|
 |`CT`|`HN# `|`hn`|
 |`ST`|`? AL ?`|`al`|
 |`ZIP`|`11502 @bc`|`11502@bc`|
 |`COUNTRY`|`IN `|`in`|

 


The following snippet demonstrates how to send a `track` event with the schema fields \(e.g.`EMAIL`,`FIRST NAME`\) specified in the RudderStack dashboard:


 ```javascript
rudderanalytics.track("USER_ADD", {

  "sessionIdAdd": 123,
  "sessionIdDelete":456,
  "batchSequence": 10,
  "lastBatchFlag": true,

  "userListAdd": [
        {
          "EMAIL": "name1@abc.com",
          "FN": "name1"
        },
        {
          "EMAIL": "name2@abc.com",
          "FN": "name2"
        }
      ],
      "userListDelete": [
        {
          "Email": "name3@abc.com",
          "FN": "name3"
        },
        {
          "Email": "name4@abc.com",
          "FN": "name4"
        }
      ]
});
```

## Facebook Custom Audience Payload Restrictions

| **Payload Field Name** | **Transformed?** |
| :--- | :--- | 
| `Using only userListAdd` | `yes`|
| `Using only userListDelete`| `yes`|
| `Using both userListAdd and userListDelete` | `yes`|
| `Not using both userListAdd and userListDelete` | `no`|
| `not using only sessionIdAdd` | `yes ( Rudderstack will not create session for add operation explicitly)`|
| `Not using only sessionIdDelete` | `yes ( Rudderstack will not create session for delete operation explicitly)`|
| `Not using both sessionIdAdd and sessionIdDelete` | `yes ( Rudderstack will not create session for both delete and add operation explicitly)`|

### FAQs

### Where can I find the Custom Audience ID?**

- To get your Custom Audience ID, go to your Facebook Ads Manager account. On the left navigation bar, select **Audiences** and choose the Ad account you have created the custom audience for. 

![](https://user-images.githubusercontent.com/59817155/123789893-4ae75e80-d8fb-11eb-879f-825b7b6662b7.png)

- Then, click on **All Audience** and select the specific custom audience from the list.


- Finally, click on **History** tab. Here, you will find the audience ID under the **Item Changed** column, as shown:

![](https://user-images.githubusercontent.com/59817155/123789891-49b63180-d8fb-11eb-8c60-0232bfedaffe.png)


### Where can I find the user Access Token for the application?

To use the Facebook Marketing API, you need to generate a user access token. Follow these steps to generate a user access token using your [**Facebook Developer account**](https://developers.facebook.com/):

* Log into your Facebook Developer account.

* If you haven't created an app already, do so with the type **Business**, as shown:

![](https://user-images.githubusercontent.com/59817155/123803294-cc45ed80-d909-11eb-9ff6-9839c29005fa.png)

* Set your app up with the **Marketing API** as the product, as shown:

![](https://user-images.githubusercontent.com/59817155/123803479-f697ab00-d909-11eb-8df9-d003c0803d7e.png)

* Next, click on the **Tools** tab , followed by the **View All Tools** link. 

![](https://user-images.githubusercontent.com/59817155/123803114-9f91d600-d909-11eb-82cc-271469d3f27b.png)

*  Then, click on the **Access Token Tool** as shown:

![](https://user-images.githubusercontent.com/59817155/123789885-4622aa80-d8fb-11eb-9488-20e7d4c5414c.png)

* Find your app and click on the **need to grant permissions** link in the **User Token** row. This will generate the user access token, as shown:

![](https://user-images.githubusercontent.com/59817155/123802258-c00d6080-d908-11eb-8edf-72211dd39cfd.png)


{% hint style="info" %}
For more information on using this access token or generating the access token via your app, check out Facebook's [**developer documentation**](https://developers.facebook.com/docs/marketing-apis/overview/authentication).
{% endhint %}

##  Contact Us

If you come across any issues while configuring Facebook Custom Audience with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
