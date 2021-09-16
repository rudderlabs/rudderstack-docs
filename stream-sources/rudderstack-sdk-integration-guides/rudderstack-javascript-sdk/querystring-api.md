---
description: >-
  This page provides information on how to leverage the RudderStack's Querystring API using the query parameters.
---

# **Querystring API**

RudderStack's Querystring API allows you to trigger `track` and `identify` calls using the query parameters.

You may use the below parameters as a query string parameters and trigger the corresponding call.

| Parameter             | Action                                                                                                                                             |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ajs_uid`             | Makes a `rudderanalytics.identify()` call with `userId` having the parameter value.                                                                |
| `ajs_aid`             | Makes a `rudderanalytics.setAnonymousId()` call with `anonymousId` having the parameter value.                                                     |
| `ajs_event`           | Makes a `rudderanalytics.track()` call with `event` name as the parameter value.                                                                   |
| `ajs_prop_<property>` | If `ajs_event` is passed as a query string, value of this parameter will populate the `properties` of the corresponding event in the `track` call. |
| `ajs_trait_<trait>`   | If `ajs_uid` is provided as a query sting, the value of this parameter will populate the `traits` of the `identify` call made.                     |

As an example, if you pass the following parameters in the URL as shown:

```javascript
http://hostname.com/?ajs_uid=12345&ajs_event=test%20event&ajs_aid=abcde&ajs_prop_testProp=prop1&ajs_trait_name=Firstname+Lastname
```

The following API calls will be triggered:

```javascript
rudderanalytics.setAnonymousId("abcde");
rudderanalytics.identify("userId", { name: "Firstname Lastname" });
rudderanalytics.track("test event", { testProp: "prop1" });
```
