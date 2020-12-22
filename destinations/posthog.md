---
description: Step-by-step guide to send event data from RudderStack to PostHog.
---

# PostHog

[PostHog](https://posthog.com/) is a complete product analytics stack that you can seamlessly deploy on your infrastructure. Built for both data analysts and managers, PostHog gives you easy access to product analytics which you can perform at scale. It also gives you full control over all your user data.

RudderStack allows you to seamlessly configure PostHog as a destination to which you can send your event data seamlessly.

## Getting Started

To enable sending data to **PostHog**, you will first need to add it as a destination to the source from which you are sending your event data. Once the destination is enabled, events from RudderStack will start flowing to PostHog.

Before configuring your source and destination on the RudderStack, please verify if the source platform is supported by PostHog, by referring to the table below:

| **Connection Mode** | Web | Mobile | Server |
| :--- | :--- | :--- | :--- |
| **Device Mode** | **-** | **-** | **-** |
| **Cloud Mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to PostHog, please perform the steps below:

* Choose a source to which you would like to add PostHog as a destination.

{% hint style="info" %}
Please follow our [Adding a Source and Destination](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) guide to add a source in RudderStack.
{% endhint %}

* Select the destination as **PostHog** to your source. Give your destination a name and then click on **Next**.
* On the **Connection Settings** page, fill all the fields with the relevant information and click **Next**.

![PostHog Connection Settings in RudderStack](../.gitbook/assets/screenshot-2020-11-12-at-2.32.04-pm.png)

In the **Connection Settings**, please enter the your **Team API Key** and **Your-Instance** URL as shown above.

{% hint style="info" %}
If you’re hosting your own PostHog instance, add the URL of your instance without the trailing slash in the **PostHog instance** setting. The URL will thus look something like**`https://[your-instance].com`**
{% endhint %}

## Identify

To identify a user to PostHog, you need to call the `identify` API.

{% hint style="info" %}
For information on the identify call, please refer to our [RudderStack API Specification](https://docs.rudderstack.com/rudderstack-api-spec) guide.
{% endhint %}

{% hint style="info" %}
A user is identified by `userId`. If the field_\(first parameter\)_ is not passed in the call, the event is not sent.
{% endhint %}

A sample `identify` call is as shown below:

```text
rudderanalytics.identify({
  "userId": "userid",
  "anonymousId": "d80b66d5-b33d-412d-866f-r4fft5841af",
  "traits": {
    "email": "name@surname.com",
    "name": "John Doe",
    "profession": "Student"
  }
})
```

We pass the user traits passed along with the `identify` call to PostHog as `$set`.

## Page

The `page` call allows you to record information whenever a user sees a web page, along with the associated optional properties of that page. 

{% hint style="warning" %}
This method must be called at least once per page load.
{% endhint %}

```text
rudderanalytics.page({
  userId: "user_id",
  category: "Category",
  name: "Sample",
})
```

{% hint style="info" %}
For page call, we send `$pageview` as an event on PostHog. 
{% endhint %}

In the above sample, we capture information related to the page being viewed such as the category of the page \(`Category`\), as well as the name of the page \(`Sample`\) along with the unique user ID.

## Screen

The `screen` method allows you to record whenever a user sees the mobile screen, along with any associated optional properties. 

{% hint style="info" %}
The `screen` call is similar to the `page` call, but it is exclusive to your mobile device.
{% endhint %}

A sample `screen` call looks like the following code snippet:

```text
rudderanalytics.screen({
  userId: "user_id",
  category: "Category",
  name: "Sample",
})
```

{% hint style="info" %}
For screen call we send `$screen` as an event to PostHog.
{% endhint %}

In the above snippet, we capture information related to the screen being viewed, such as the name and category.

## Track

The `track` call allows you to capture any action that the user might perform, along with the properties that are associated with that action. Each action is considered to be an event.

A sample `track` call looks like the following:

```text
rudderanalytics.track("Track me")
```

{% hint style="info" %}
PostHog support`track` call as type`capture.` It send user behaviour/action as an event.
{% endhint %}

## Alias

Calling `rudderanalytics.alias()` ****passes an `alias`call with `userId` and `previousId` to the PostHog queue.

The following code snippet shows a sample `alias` call in RudderStack:

```text
rudderanalytics.alias(
{
  "userId": "user123",
  "previousId": "previd1",
  "context": {
    "traits": {
       "trait1": "new-val"  
    }
  }
});
```

{% hint style="info" %}
For alias call we send `$create_alias` as an event to PostHog.
{% endhint %}

Here, `userId` gets mapped to _alias_ and `previousId` to _distinct id_ in PostHog.

## Group

The `group` call lets you associate a particular identified user with a group, such as a company, organisation, or an account.

{% hint style="info" %}
The group call sends `$group` as an event to PostHog.
{% endhint %}

```text
rudderanalytics.group("sample_group_id", {
  name: "CompanyA",
  location: "USA",
});
```

## FAQs

### **How do you get the PostHog Team API Key?**

* Login to PostHog dashboard.
* Go to **Settings** tab under **Project** section on left sidebar.
* You will find your key written as Project API Key or Team API key. 

## Contact Us

If you come across any issues while configuring PostHog with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

