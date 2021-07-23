---
description: >-
  Step-by-step guide to send event data from RudderStack to Facebook Custom
  Audience.
---

# Facebook Custom Audience

[**Facebook Custom Audience**](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences) is a popular targeting tool that lets you find people on Facebook, who are interested in your business. It lets you create custom audiences through customer lists, Facebook engagement, and website/app traffic.

RudderStack lets you send your customer events for creating custom audiences by leveraging the Facebook Marketing API.

You can now send your customer events data list directly for adding them to already created Facebook Custom Audience through RudderStack.

{% hint style="info" %}
The user information in your events may include email, phone number, gender, etc. For more information on the supported fields, refer the documentation [**here**](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences#hash).
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

* From your [**RudderStack dashboard**](https://app.rudderlabs.com/), add the source. Then, select **Facebook Custom Audience** from the list of destinations.

{% hint style="info" %}
Please follow our guide on [**How to Add a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Assign a name to the destination and click on **Next**. You will then see the following screen:

![](../../.gitbook/assets/facebook_custom_audience_setup.png)


## Custom Audience Connection Settings

To add Custom Audience as a destination in RudderStack, you will need to configure the following settings:

* **Access Token** Enter the access token of your business application set up for accessing the Facebook Marketing API.

{% hint style="info" %}
Check the **FAQ** section for more information on how to find your User Access Token.
{% endhint %}

* **Audience ID** Custom Audience ID to which the audiences will be added to/removed from.

{% hint style="info" %}
Check the **FAQ** section for more information on how to find your Audience ID.
{% endhint %}


* **Schema Fields** Choose your schema fields \(at least one\) from the available options. **This is a mandatory field**. RudderStack expects the user events to consist of **every** schema field that has been chosen on the dashboard, in the same order.

{% hint style="info" %}
RudderStack will ignore any user information which does not adhere to the specified schema fields in the dashboard settings.
{% endhint %}

* Some other important settings are: 
  * **Enable Hashing**: Facebook expects the user data to be hash encoded using `SHA256`. if this option is enabled, RudderStack will hash encode the user data irrespective of the schema type chosen in the RudderStack dashboard. 
  * **Is The Data Raw**: As rudderstack does not support combinational schema fields, this field will be ignored if kept disabled.
  
  {% hint style="warning" %}
   When it is enabled, it will not support the schema fields:`EMAIL_SHA256`,`PHONE_SHA256`.
  {% endhint %}

  * **Disable Formatting**: Facebook has fixed data formats for all the allowed schema fields. If this option is enabled, RudderStack will not format the user data before sending it to Custom Audience.
  * **Type**: Type of the custom audience, will be ignored if left as `NA`.
  * **Sub Type**: Subtype of the custom audience, will be ignored if left as `NA`.

##  The `audiencelist` Event Structure to Send User Data to Custom Audience

{% hint style="warning" %}
**The Facebook Custom Audience destination supports only `audiencelist` calls.**
{% endhint %}

The `add` and `remove` arrays containing the user data objects are expected inside the properties field of the `audiencelist` event. These arrays are wrapped inside the object `listData`.

* **add**: Refers to the user information that needs to be added to the custom audience.
* **remove**: Refers to the user information that needs to be deleted from the custom audience.

## Schema Fields Mapping

The following table details the mapping of the schema fields specified in the [**RudderStack dashboard**](https://app.rudderlabs.com/) and the Facebook Marketing API.

| **Dashboard Field Name** | **Marketing API Schema Field \(Rudderstack Supported Field Name\)** | **Field Guidelines** |
| :--- | :--- | :--- |
| `EMAIL` | `EMAIL` | Trim any leading or trailing whitespaces and convert all the characters to lower case. |
| `EMAIL_SHA256` | `EMAIL_SHA256` | In case you are already hashing your emails, they will be double-hashed and sent to Facebook if the **Enable Hashing** option is enabled in the RudderStack dashboard. |
| `PHONE` | `PHONE` | Remove symbols, letters, and any leading zeroes. The country code is needed as a prefix, if the `COUNTRY` field is not specified in the dashboard. |
| `PHONE_SHA256` | `PHONE_SHA256` | In case you are already hashing the phone numbers, they will be double-hashed and sent to Facebook if the **Enable Hashing** option is enabled in the RudderStack dashboard. |
| `GENDER` | `GEN` | Use these values: `m` or `male` for male and `f` or `female` for female. |
| `MOBILE ADVERTISER ID` | `MOBILE_ADVERTISER_ID` | Use lowercase and keep the hyphens. This information will not be hashed. |
| `MADID` | `MADID` | Use lowercase and keep the hyphens. This information will not be hashed. |
| `EXTERN_ID` | `EXTERN_ID` | This information will not be hashed. |
| `DOB YEAR (YYYY)` | `DOBY` | Use the YYYY format from `1900` to the current year. |
| `DOB MONTH (MM)` | `DOBM` | Use the MM format from `01` to `12`. |
| `DOB DATE (DD)` | `DOBD` | Use the DD format from `01` to `31`. |
| `LAST NAME` | `LN` | Use a-z only. Lower case only, no punctuation. Use special characters in the UTF-8 format. |
| `FIRST NAME` | `FN` | Use a-z only. Lower case only, no punctuation. Use special characters in the UTF-8 format. |
| `FIRST NAME INITIAL` | `FI` | Use a-z only. Lower case only. Use special characters in the UTF-8 format. |
| `CITY` | `CT` | Use a-z only. Lower case only, with no punctuation, no special characters, and no whitespace. |
| `US STATES` | `ST` | Use the 2-character ANSI abbreviation code in lower case. Normalize the states outside the US in lowercase, with no punctuation, no special characters, and no white space. |
| `ZIP` | `ZIP` | Use lower case and no white space. For the US, use only the first 5 digits. For the UK, use the Area/District/Sector format. |
| `COUNTRY` | `COUNTRY` | Use lower case, 2-letter ISO 3166-1 alpha-2 country codes. |

{% hint style="warning" %}
RudderStack modifies the schema names visible in the dashboard to ensure better readability. However, during the event call, the field names **must be exactly the same as** the schema names specified by Facebook Marketing API, as mentioned in the table above.
{% endhint %}

## Explicit Formatting Feature

If the **Disable Formatting** option is enabled in the RudderStack dashboard, RudderStack will not format the user data in the format prescribed by the Facebook Marketing API. If it is disabled, RudderStack formats the schema fields input by the user as shown in the table below:

| **Schema Field Name** | **Example Input** | **Formatted Output \(Before Hashing\)** |
| :--- | :--- | :--- |
| `EMAIL` | `ABC@gmail.com` | `abc@gmail.com` |
| `PHONE` | `0@96346895` | `96346895` |
| `GEN` | `FEMALE` | `f` |
| `DOBD` | `2` | `02` |
| `DOBM` | `1` | `01` |
| `LN & FN` | `Abc,@` | `abc@` |
| `FI` | `Mr.` | `mr.` |
| `CT` | `HN#` | `hn` |
| `ST` | `? AL ?` | `al` |
| `ZIP` | `11502 @bc` | `11502@bc` |
| `COUNTRY` | `IN` | `in` |

The following code snippet shows a `audiencelist` event with the schema fields \(e.g.`EMAIL`,`FIRST NAME`\) specified in the RudderStack dashboard:

```python
import rudder_analytics

rudder_analytics.write_key = WRITE_KEY
rudder_analytics.data_plane_url = DATA_PLANE_URL

rudder_analytics.audiencelist('USER-ID', 'EVENT-NAME', {

  'listData': {
 'add': [
       {
         'EMAIL': 'name1@abc.com',
         'FN': 'name1'
       },
       {
         'EMAIL': 'name2@abc.com',
         'FN': 'name2'
       }
     ],
     'remove': [
       {
         'Email': 'name3@abc.com',
         'FN': 'name3'
       },
       {
         'Email': 'name4@abc.com',
         'FN': 'name4'
       }
     ]
  }
})
```

## Facebook Custom Audience Payload Restrictions

| **Payload Field Name** | **Transformed?** |
| :--- | :--- |
| Using only `add` | Yes |
| Using only `remove` | Yes |
| Using both `add` and `remove` | Yes |
| Not using both `add` and `remove` | No |


The following code snippet shows a `audiencelist` event having only `add` with the schema fields \(e.g.`EMAIL`,`FIRST NAME`\) specified in the RudderStack dashboard:

```python
rudder_analytics.audiencelist('USER-ID', 'EVENT-NAME', {
 
 'listData': {
  'add': [
    {
      'EMAIL': 'name1@abc.com',
      'FN': 'name1',
    },
    {
      'EMAIL': 'name2@abc.com',
      'FN': 'name2',
    },
  ]
 },
})
```

{% hint style="info" %}
Similarly, you can use `remove` in order to remove users from a particular custom audience without creating a session.
{% endhint %}

{% hint style="warning" %}
The event payload must include `add` or `remove` . Otherwise, the user data won’t be transformed and sent to Custom Audience.
{% endhint %}

### FAQs

### Where can I find the Custom Audience ID?\*\*

* To get your Custom Audience ID, go to your Facebook Ads Manager account. On the left navigation bar, select **Audiences** and choose the Ad account you have created the custom audience for.

![](https://user-images.githubusercontent.com/59817155/123789893-4ae75e80-d8fb-11eb-879f-825b7b6662b7.png)

* Then, click on **All Audience** and select the specific custom audience from the list.
* Finally, click on **History** tab. Here, you will find the audience ID under the **Item Changed** column, as shown:

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

* Then, click on the **Access Token Tool** as shown:

![](https://user-images.githubusercontent.com/59817155/123789885-4622aa80-d8fb-11eb-9488-20e7d4c5414c.png)

* Find your app and click on the **need to grant permissions** link in the **User Token** row. This will generate the user access token, as shown:

![](https://user-images.githubusercontent.com/59817155/123802258-c00d6080-d908-11eb-8edf-72211dd39cfd.png)

{% hint style="info" %}
For more information on using this access token or generating the access token via your app, check out Facebook's [**developer documentation**](https://developers.facebook.com/docs/marketing-apis/overview/authentication).
{% endhint %}
## Contact Us

If you come across any issues while configuring Facebook Custom Audience with RudderStack, feel free to [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

