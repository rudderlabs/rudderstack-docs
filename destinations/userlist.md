---
description: Step-by-step guide to send your event data from RudderStack to Userlist
---

# Userlist

Userlist allows you to send behavior-based messages to your SaaS users. It’s great for onboarding users as well as nurturing them throughout their journey.

RudderStack supports sending your events to Userlist from the cloud mode S2S \(Server to Server\) by calling the relevant RudderStack APIs.

## Getting Started

Before configuring your source and destination on the RudderStack app, please check whether the platform you are working on is supported. You can refer the following table to do so:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Userlist, perform the steps below:

* From your [RudderStack dashboard](https://app.rudderlabs.com/), add the source and Userlist as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Enter the “Push API Key” which you can find from your [Userlist Push API settings](https://app.userlist.com/settings/push).

Once the destination is enabled, events from our SDK will start to flow to Userlist.

{% hint style="info" %}
NOTE: The Userlist Destination does not support tracking of anonymous users, so make sure to call identify before calling track.
{% endhint %}

## Identify

The `identify` call sends the event data to Userlist along with the properties that you pass as the RudderStack traits. For more information on the identify call, please refer our [RudderStack API specification](https://docs.rudderstack.com/getting-started/rudderstack-api-spec) documentation.

If the `userId` is already known, it’ll update the user record, otherwise it’ll create a new one. Userlist will only process messages with a `userId`. Messages with only an `anonymousId` will be ignored.

The following code snippet is an example of an `identify` call in RudderStack:

```javascript
rudderanalytics.identify("test-user-id", {
  name: "Tintin",
  city: "Brussels",
  country: "Belgium",
  email: "tintin@herge.com"
});
```

## Group

The `group` call is made to associate the user with a company in Userlist. An example of a `group` call is as shown below:

```javascript
rudderanalytics.group("test-group-id", {
  name: "Example, Inc.",
  industry: "Testing",
  employees: 42
});
```

Userlist supports adding properties to the relationship between user and group. As this isn't officially supported by RudderStack's message format, you can specify the relationship properties by providing additional data for Userlist specifically.

The following example will associate the currently identified user with the given group (company) and set their `role` for that particular group (company) to `owner`.

```javascript
rudderanalytics.group("test-group-id", {
  name: "Example, Inc.",
  industry: "Testing",
  employees: 42,
  integrations: {
    Userlist: {
      extensions: {
        relationship: {
          properties: {
            role: 'owner'
          }
        }
      }
    }
  }
});
```

## Track

The `track` call will pass the event properties to Userlist. You may call `rudderanalytics.track()` with or without event properties. For more information on how `track` call works, please refer to our [RudderStack API specification](https://docs.rudderstack.com/getting-started/rudderstack-api-spec) documentation.

The following code snippet shows how a sample `track` call is made in RudderStack:

```javascript
rudderanalytics.track("Project created", {
  project_name: "Demo Project"
});
```

Track calls will be sent to Userlist as a new event. You may send additional properties to describe the event in more detail. Both the event name and additional properties will be stored with the event and normalized to snake case (`project_created` and `project_name`) automatically within Userlist.

To track an event in the context of a group (company), please specify the `groupId` in the `context`.

```javascript
rudderanalytics.track("Project created", {
  project_name: "Demo Project",
  context: {
    groupId: 'test-group-id'
  }
});
```

## Contact Us

If you come across any issues while configuring Userlist with RudderStack, please feel free to [contact us](mailto:docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!
