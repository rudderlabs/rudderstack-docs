---
description: Step-by-step guide to set up Sendgrid as a destination in RudderStack.
---

# Sendgrid

[**Sendgrid**](https://sendgrid.com/) is a proven cloud-based customer communication platform that successfully delivers over 45 billion emails each month for Internet and mobile-based customers like Airbnb, Pandora, Hubspot, Spotify, Uber, and FourSquare, as well as more traditional enterprises like Taco Bell, Intuit and Costco.

RudderStack supports Sendgrid as a destination to which you can seamlessly send your customer data.

## Getting Started

Before configuring Sendgrid as a destination in RudderStack, verify if the source platform is supported by Sendgrid by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud** **mode** | **Supported** | - | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that your source platform supports sending events to Sendgrid, follow these steps:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add the source. From the list of destinations, select **Sendgrid**.

{% hint style="info" %}
Follow our guide on [**Adding a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

* Assign a name to the destination and click on **Next**. You should then see the following screen:

![Sendgrid Connection Settings](../../.gitbook/assets/Sendgrid1.png)
![Sendgrid Connection Settings](../../.gitbook/assets/Sendgrid2.png)
![Sendgrid Connection Settings](../../.gitbook/assets/Sendgrid3.png)
![Sendgrid Connection Settings](../../.gitbook/assets/Sendgrid4.png)

### Connection Settings

This section details the connection settings required to configure Sendgrid as a destination in RudderStack.

* Enter your Sendgrid **API Key**.

{% hint style="info" %}
To get the Sendgrid API Key, click [here](https://app.sendgrid.com/settings/api_keys).
{% endhint %}

* Enter the **subject**. You can additionally send **subject** via **integrations** object.

* Enter **template ID**. 

{% hint style="info" %}
To get your template ID or create a new one, visit your [Sendgrid Dashboard](https://app.sendgrid.com/). Click `Email API` and go to `Dynamic Templates`.
This field can also be sent via `integrations` object, which will have higher priority.
{% endhint %}

```javascript
"templateId": "valueHere"
```

* **Get mail by traits** allows to search `email` inside `traits`. If it is found then event can be sent to Sendgrid without `integration` object.

{% hint style="info" %}
Note that this is only useful when `integration` object is empty. Sendgrid also requires that either `template ID` or `content` should be provided for a successful event.  
{% endhint %}


* Enter the email address in **Reply To Email** where replies or bounces will be returned.

* In **Reply To Name** , enter the name associated with the above email address.

{% hint style="info" %}
Note that Sendgrid doesn't allow only `name` to be sent in `reply to`  object, `email` must be there else `reply to` object will be ignored.
You can send email and name inside an `replyTo` object via `integrations` object which will have higher priority.
{% endhint %}

```javascript
replyTo:{
    "email": "test@email.com",
    "name": "test"
}
```

* Enter **IP Pool Name**.

{% hint style="info" %}
Length of IP Pool Name should be between 2 and 64. To check out the steps to create **IP Pool Name**, click [here](https://docs.sendgrid.com/ui/account-and-settings/ip-pools#create-an-ip-pool).
{% endhint %}

* Enter the **email** address via which email will be sent.

{% hint style="info" %}
To create a verified sender identity click [here](https://docs.sendgrid.com/ui/sending-email/sender-verification).
{% endhint %}

* Enter the **name** associated with above email.

{% hint style="info" %}
You can additionally send `email` and `name` inside `from` object via `integration` object, which will have higher priority.
{% endhint %}

```javascript
from:{
    "email": "test@email.com",
    "name": "test"
}
```

* Create the list of **events** for which `track` calls will be made. If `track` call is made with event not in the list, call will be **dropped**.

* To specify the **content** of your email, enter the **type** and **value**.

{% hint style="info" %}
`type` field contains the type of value that is to be included in value.
`value` field contains the actual value that is to included in email.
`content` array can also be sent via `integrations` object, which will have higher priority.
{% endhint %}

```javascript
content: [
    {
        "type": "text/plain",
        "value": "sample text"
    }
]
```

* Enter **Attachments** to specify any attachements you want to include in your email. `content` should be base64 encoded string. `type` contains the type of content you are attaching e.g. `"text/plain"` . `filename` contains attachment's filename. `disposition` specifies how you would like the attachment to be displayed. `content ID` is used when disposition is set to `inline` and `attachment` is image.

{% hint style="info" %}
Sendgrid requires that each attachment element must contain `content` and `filename`. `Attachments` can also be sent via `integrations` which will have higher priority.
{% endhint %}

```javascript
attachments:[
    {
        "content": "base64encodedString",
        "filename": "index.html",
        "type": "text/html",
        "disposition": "attachment"
    }
]
```

* **ASM** allows you to handle unsubscribes. `group ID` specifies the unsubscribe group to associate with this email. `groups` contains the array of unsubscribing groups that would be displayed in unsusbcribe preferences page.

{% hint style="info" %}
Sendgrid requires that `group ID` should always be present if `asm` object is to be sent.
{% endhint %}

* To include default **Footer** in every mail, enable **footer**. **text** contains the plain content of footer. **HTML** contains the HTML content of footer.

{% hint style="info" %}
`Footer` can also be sent via `integrations` object which wil have higher priority.
{% endhint %}

```javascript
mailSettings:{
    "footer": true,
    "footerText": "plain text",
    "footerHtml": "html content"
}
```

* To send a test mail and ensure everything is correct, you can enable **Sandbox Mode**.

{% hint style="info" %}
`Sandbox mode` can also be enabled/disabled via `integrations` object which will have higher priority.
{% endhint %}

```javascript
mailSettings:{
    "sandboxMode": true
}
```

* **Click Tracking** allows you to track if a recipient clicked a link in your email. 

* **Click Tracking enable text** indicates if this setting should be included in text/plain portion of your email.

* **Open Tracking** allows you  to track if the email was opened by including a single pixel image in the body of the content. 

* **Substitution Tag** allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire.

* **Subscription Tracking** allows you to insert a subscription management link at the bottom of the text and HTML bodies of your email. 

* **Text** is the string to be appended to the email with the subscription tracking link.

* **HTML** to be appended to the email with the subscription tracking link.

* **Substitution Tag** is the tag that will be replaced with the unsubscribe URL.

* **GAnalytics** allows you to enable tracking provided by Google Analytics.

* **utm source** is name of the referrer source. e.g. Google

* **utm medium** is name of the marketing medium. e.g. Email

* **utm term** is used to identify any paid keywords.

* **utm content** is used to differentiate your campaign from advertisements.

* **utm campaign** is name of the campaign.

* Finally, click on **Next**. Sendgrid will now be enabled as a destination in RudderStack.

## Track

`Track` call allows you to send event to Sendgrid with properties inside `integration` object which will override dashboard properties.

{% hint style="warning" %}
Note that Sendgrid requires either `template ID` or `content` to be present in body else event will be discarded.
{% endhint %}

A sample `track` call is as shown:

```javascript
rudderanalytics.track('testing',{ "someField": "value" },
      {
        "integrations": {
          "Sendgrid": {
          "personalizations": [
          {
            "to": [
              {
                "email": "recipient@email.com",
                "name": "Name"
              }
            ],
            "cc": [
                {
                    "email": "ccUser@gmail.com",
                    "name": "CCUser"
                },
                {
                    "email": "ccUser2@gmail.com",
                    "name": "CCUser2"
                }
            ],
            "subject": "subject"
          }
        ],
        "from": {
            "email": "test@email.com",
            "name": "Name here"
        },
        "attachments":[
            {
                "content": "base64encodedString",
                "filename": "index.html",
                "type": "text/html",
                "disposition": "attachment"
            }
        ],
        "content":[
            {
                "type": "text/html",
                "value": "<p>Hello</p>"
            }
        ],
        "templateId": "value",
        "headers":{
            "key": "value"
        },
        "customArgs":{
            "key": "value"
        }
        "categories": ["sample","values","here"],
        "sendAt": 1617260400,
        "batchId": "a valid batch Id here",
        "subject": "Subject Value",
        "mailSettings":{
          "bypassBounceManagement": true,
          "bypassSpamManagement": true,
          "bypassUnsubscribeManagement": true
          "footer": true
          "footerText": "text",
          "footerHtml": "html",
          "sandboxMode": true
        },
        "replyTo":{
          "email": "testingreplyto@email.com",
          "name": "Name"
        },
        "field1": "value"
      }
    }
  });
```
A few things to note: 

* Sendgrid allows `categories` array to have maximum of 10 values.
* If `customArgs` is not provided, the non-default fields are taken as custom fields. In the above example, `field1` will be mapped inside `customArgs`.
* Sendgrid requires that in `mailSettings`, `bypassListManagement` cannot be combined with `bypassBounceManagement`, `bypassSpamManagement`, `bypassUnsubscribeManagement`. If `bypassListManagement` is present then neither `bypassSpamManagement`, `bypassBounceManagement` nor `bypassUnsubscribeManagement` can be present.
* Sendgrid requires that `personalizations` array should be present in every event and atleast each object must contain field `to`. If `Get mail from traits` is enabled in dashboard and `integrations` object is not sent, Rudderstack will look for `email` in traits, if found `personalizations` object will be created and email will be assigned to the `to` field. In case both `template ID` and `content` are not assigned in dashboard, event will not be sent as either of `template ID` or `content` is required.
* `email` field inside `replyTo` object is mandatory.
* `groupId` field inside `asm` object is mandatory.
* In the above example `testing` is the event name and it should be configured ins dashboard, else the track call will be dropped.
* Each object inside `content` array must contain `type` and `value`. If not found that object will be dropped. However call will `not` be dropped.
* Each object inside attachments array must atleast contain `content` and `filename`. If not found that object will be dropped. However call will `not` be dropped.

## Contact Us

If you come across any issues while configuring or using Senddgrid with RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
