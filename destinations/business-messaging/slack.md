---
description: Step-by-step guide to set up Slack as a destination in RudderStack
---

# Slack

Slack is a popular business communication platform that allows you to organize all your business-related chats by specific topics, groups or direct / personal messaging.

RudderStack supports integration with Slack and allows you to send your business messaging data to Slack seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/slack)**.**
{% endhint %}

## Getting Started

To enable sending data to Slack, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from our SDK will start flowing to Slack in accordance to the destination page settings.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by Slack, by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud** **mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Slack, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/),  select Slack as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Give a name to the destination and select the source to connect this destination, then click on **Next**. You should then see the following screen:

![Add Slack as destination](../../.gitbook/assets/slack-settings.png)

### Settings

* Event Channels 

There are three settings to configure.

| Name | Description |
| :--- | :--- |
| `Event Name` | The event name or regex expression to match the rudder event name.  |
| `Event Channel` | The slack channel to send the event to, specify `#channel_name` or `@user_name`  |
| `Regex Matching` | Enable it if the event name is a regex in the first parameter. |

{% hint style="warning" %}
Add the regex expression without the global\(`g`\) parameter. It is added by Rudder implicitly.
{% endhint %}

* Identify Template ****

Provide the template that you want the identify event to be transformed to when sent to slack. We support [Handlebar expression](https://handlebarsjs.com/guide/expressions.html). The default template is,`Identified {{name}} <traits_key1>:<traits_value1> <traits_key2>:<traits_value2> ....`  
where the traits key and value are the key-value pairs in the traits object of [Identify](https://docs.rudderstack.com/getting-started/rudderstack-api-spec#identifypayload) payload. The `name` field in the template is determined from either of the following:

1. `traits.name`
2. `traits.firstName + traits.lastName`
3. `traits.username`
4. `properties.email`
5. `traits.email`
6. `User userId`
7. `Anonymous user anonymousId`

{% hint style="info" %}
The **whitelisted traits** list is given priority when building the  identify template. Only the traits there will be part of the template, else all the traits will be sent to Slack.
{% endhint %}

* Event Templates

There are three settings to configure.

| Name | Description |
| :--- | :--- |
| `Event Name` | The event name or regex expression to match the rudder event name |
| `Event Template` | The template for the above event name/names matching the regex. We support [Handlebar expression](https://handlebarsjs.com/guide/expressions.html). The default template is `{{name}} did {{event}}` . `name` is determined by the same criteria as above.  |
| `Regex Matching` | Enable it, if the event name is a regex |

* Webhook URL

  ****Add your slack's incoming [Webhook URL](https://my.slack.com/services/new/incoming-webhook/).

## Handlebar Expression

For the Slack destination, RudderStack leverages the Handlebar.js library for including variables into your dynamic Slack messages.

#### Accessible Variables

The available variables that you can select from in your template messages are listed below.

| Handlebar Expression | Output |
| :--- | :--- |
| `{{name}}` | The identity of the user in the priority listed above |
| `{{event}}` | The event name i.e. `product viewed` or `user login` |
| `{{<key_1>}}` or`{{properties.<key_1>}}` | Any of the property values from the event's properties object |
| `{{propertiesList}}` | This will give you a JSON stringified version of your properties object |
| `{{traits}}` | This will give you a JSON stringified version of your traits object |
| `{{traitsList.<key_1>}}` | Any of the trait values from the event's traits object |

#### Escaped Content

For this destination, like Handlebars, the values returned by the `{{variable}}` are HTML-escaped. Meaning, if `variable` has a `&` in its value then it will be returned as `&amp;`. To avoid this behavior make sure to use triple "curly-brackets" instead of double. `{{variable}}` to `{{{varaible}}}`. This will stop Handlebars from escaping a value if there is one.

| Expression | Variable | Result |
| :--- | :--- | :--- |
| `{{variable}}` | `"Marcia & Jan"` | `"Marcia &amp; Jan"` |
| `{{{variable}}}` | `"Marcia & Jan"` | `"Marcia & Jan"` |

For more information regarding escaped content for the Slack destination please read this [Handlebar Doc](https://handlebarsjs.com/guide/expressions.html#html-escaping).

## Identify

For a template like `Identified {{name}} with {{traits}}` and calling Rudder API as below,

```text
 window.rudderanalytics.identify("12345",{
          name: "my-name",
          email: "name@domain.com",
          country: "India"
        }
 );
```

you will see the message as below:

`Identified my-name with country: India email: name@domain.com name: my-name`under the `username` , `RudderStack` to the default slack channel configured by you.

## Track

For a template like  ****`{{name}} performed {{event}} with  {{properties.key1}} {{properties.key2}}` ****and the following track call, after being `identified` as above:

```text
window.rudderanalytics.track("test_event", {
    "key1": "test_val1",
    "key2": "test_val2",
    "key3": "test_val3"
})
```

will send `my-name performed test_event with test_val1 test_val2` to the default or configured Slack channel.

## Contact Us

If you come across any issues while configuring Slack with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

