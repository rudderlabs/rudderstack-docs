---
description: >-
  Detailed technical description of the RudderStack's Querystring API.
---

# Querystring API

RudderStack's Querystring API lets you trigger the `track` and `identify` calls using the query parameters.

## Query parameters

The query parameters are listed in the following table:

| Parameter             | Action                                  |
| :-------------------- | :---------------------------------------|
| `ajs_uid`             | Triggers a `rudderanalytics.identify()` call with `userId` having the parameter value. |
| `ajs_aid`             | Triggers a `rudderanalytics.setAnonymousId()` call with `anonymousId` having the parameter value. |
| `ajs_event`           | Triggers a `rudderanalytics.track()` call with `event` name as the parameter value.   |
| `ajs_prop_<property>` | If `ajs_event` is passed as a query string, the value of this parameter populates the `properties` of the corresponding event in the `track` call. |
| `ajs_trait_<trait>`   | If `ajs_uid` is provided as a query sting, the value of this parameter will populate the `traits` of the `identify` call made. |

## Use-case

For the following URL containing the querystring parameters:

```javascript
http://hostname.com/?ajs_uid=12345&ajs_event=test%20event&ajs_aid=abcde&ajs_prop_testProp=prop1&ajs_trait_name=Firstname+Lastname
```

The following API calls will be triggered:

```javascript
rudderanalytics.setAnonymousId("abcde");
rudderanalytics.identify("12345", { name: "Firstname Lastname" });
rudderanalytics.track("test event", { testProp: "prop1" });
```

## Contact Us

For more information on any of the sections covered in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

If you come across any issues while using this SDK, feel free to submit them on our [**GitHub issues page**](https://github.com/rudderlabs/rudder-sdk-js/issues).
