---
description: >-
  Detailed technical documentation on RudderStack’s Flutter SDK to send
  events from your Flutter application to various destinations.
---

# Flutter

## What is the RudderStack Flutter SDK?

The RudderStack Flutter SDK allows you to track event data from your app. It can be easily integrated into your Flutter application. After integrating this SDK, you will also send the event data to your preferred analytics destination/s, such as Google Analytics, Amplitude, and more. 

You can check the [GitHub codebase](https://github.com/rudderlabs/rudder-sdk-flutter) if you want to get more hands-on or keen to know more about the SDK architecture.

## SDK Setup Requirements

To set up the RudderStack Flutter SDK, there are a few prerequisites as mentioned below:

* You will need to set up a [RudderStack Account](https://app.rudderstack.com).
* Once signed up, your `Flutter` source `writeKey` will appear in the Dashboard, as shown:

![Adding Flutter SDK](../.gitbook/assets/flutter_setup.png)

* You will also need your `Data-Plane URL`. The following screenshot shows the data plane URL for the managed hosting mode:

![Data Plane URL](../.gitbook/assets/android-2%20%281%29%20%281%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29.png)

* It would help if you also had the [Flutter Development Environment](https://flutter.dev/docs/get-started/install) setup on your system.

## Installing the RudderStack Flutter SDK

The recommended way to install the Flutter SDK is through [`pub`](https://url_to_be_added_after_publishing).

To add the SDK as a dependency, perform the following steps:

* Open `pubspec.yaml`  and add `rudder_sdk_flutter` under `dependencies` section:

```groovy
dependencies:
  rudder_sdk_flutter: ^1.0.0
```

* Navigate to your Application's root folder and install all the required dependencies with:

```bash
flutter pub get
```

## Initializing the RudderStack Client

After adding the SDK as a dependency, you need to set up the SDK.

* Make sure to import the SDK wherever you use it with:

```dart
import 'package:rudder_sdk_flutter/RudderClient.dart';
```

* Add the following code somewhere in your application.

```dart
    RudderConfigBuilder builder = RudderConfigBuilder();
    builder.withDataPlaneUrl(DATA_PLANE_URL);
    builder.withTrackLifecycleEvents(true);
    builder.withRecordScreenViews(true);
    RudderClient.getInstance(WRITE_KEY,config: builder.build());
```

The `setup` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `writeKey` | `String` | Yes | Your Flutter `writeKey` |
| `config` | `RudderConfig` | No | Contains the RudderStack Client configuration |

Check the [Configuring your RudderStack Client](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-flutter-sdk#configuring-your-rudderstack-client) section below for a full list of configurable parameters.

## Track

You can record the users' activity through the `track` method. Every action performed by the user is called an event.

An example of the `track` event is as shown:

```dart
    RudderProperty property = RudderProperty();
    property.put("test_key_1", "test_key_1");
    RudderProperty childProperty = RudderProperty();
    childProperty.put("test_child_key_1", "test_child_value_1");
    property.put("test_key_2",childProperty);
    RudderClient.track("test_track_event", properties: property);
```

The `track` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `String` | Yes | Name of the event you want to track |
| `properties` | `RudderProperty` | No | Extra data properties you want to send along with the event  |
| `options` | `RudderOption` | No | Extra event options |

{% hint style="info" %}
We automatically track the following optional events:

1. `Application Installed` 
2. `Application Updated`
3. `Application Opened` 
4. `Application Backgrounded`  

You can disable these events by calling `withTrackLifeCycleEvents(false)` on `RudderConfigBuilder` object while initializing `RudderClient`. But it is highly recommended to keep them enabled.
{% endhint %}

## Identify

We capture `deviceId` and use that as `anonymousId` for identifying the user. It helps to track the users across the application installation. To attach more information to the user, you can use the `identify` method. Once you set the `identify` information to the user, those will be passed to the successive `track` or `screen` calls. To reset the user identification, you can use the `reset` method.

{% hint style="info" %}
On the Android devices, the `deviceId` is assigned during the first boot. It remains consistent across the applications and installs. It changes only after factory reset.
{% endhint %}

{% hint style="info" %}
On the iOS devices, According to the Apple [documentation](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor), if the device has multiple apps from the same vendors, all those apps will be assigned the same `deviceId`. If all the applications from a vendor are uninstalled, then on next install the app will be assigned a new `deviceId`.
{% endhint %}

An example `identify` event is as shown:

```dart
    RudderTraits traits = RudderTraits();
    traits.putBirthdayDate(new DateTime.now());
    traits.putEmail("abc@123.com");
    traits.putFirstName("First");
    traits.putLastName("Last");
    traits.putGender("m");
    traits.putPhone("5555555555");

    Address address = Address();
    address.putCity("City");
    address.putCountry("USA");
    traits.putAddress(address);

    traits.put("boolean", true);
    traits.put("integer", 50);
    traits.put("float", 120.4);
    traits.put("long", 1234);
    traits.put("string", "hello");
    traits.put("date", new DateTime.now().millisecondsSinceEpoch);

    RudderClient.identify("test_user_id", traits: traits, options: null);
```
The `identify` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` | `String` | Yes | Developer identity for the user |
| `traits` | `RudderTraits` | No | Traits information for user |
| `options` | `RudderOption` | No | Extra options for the `identify` event |

## Screen

You can use the `screen` call to record whenever the user sees a screen on the mobile device. You can also send some extra properties along with this event.

An example of the `screen` event is as shown:

```dart
    RudderProperty screenProperty = new RudderProperty();
    screenProperty.put("foo", "bar");
    RudderClient.screen("Main Activity",
        properties: screenProperty, options: null);
```

The `screen` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `screenName` | `String` | Yes | Name of the screen viewed. |
| `properties` | `RudderProperty` | No | Extra property object that you want to pass along with the `screen` call. |
| `options` | `RudderOption` | No | Extra options to be passed along with `screen` event. |

{% hint style="info" %}
You can disable these events by calling `withRecordScreenViews(true)` on `RudderConfigBuilder` object while initializing `RudderClient`.
The default value for `recordScreenViews` is `false`.
{% endhint %}

## Group

The `group` call associates a user to a specific organization.

An example of `group` event is as shown:

```dart
    RudderTraits groupTraits = RudderTraits();
    groupTraits.put("foo", "bar");
    groupTraits.put("foo1", "bar1");
    RudderClient.group("sample_group_id",
        groupTraits: groupTraits, options: null);
```

The `group` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `groupId` | `String` | Yes | An ID of the organization with which you want to associate your user |
| `groupTraits` | `RudderTraits` | No | Any other traits of the organization you want to pass along with the `group` call |
| `options` | `RudderOption` | No | Extra options to be passed along with `group` event. |

We don't persist the traits for the group across the sessions.

## Alias

The `alias` call associates the user with a new identification.

An example of `alias` event is as shown:

```dart
    RudderClient.alias("new_user_id", options: null);
```

The `alias` method has the following signature:

| Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `newId` | `String` | Yes | The new `userId` you want to assign to the user |
| `options` | `RudderOption` | No | Extra options to be passed along with `alias` event. |

We replace the old `userId` with the `newUserId` and we persist that identification across the sessions.

## Reset

You can use the `reset` method to clear the persisted `traits` for the `identify` call. This is required for `Logout` operations.

```dart
    RudderClient.reset();
```

## External ID

You can pass your custom `userId` along with standard `userId` in your `identify` calls. We add those values under `context.externalId`. The following code snippet shows a way to add `externalId` to your `identify` request.

```dart
    RudderOption option = RudderOption();
    option.putExternalId("externalId", "some_external_id_1");
    RudderClient.identify("testUserId", options: option);
```

## Anonymous ID

We use the `deviceId` as `anonymousId` by default. You can use the following method to override and use your own `anonymousId` with the SDK.

{% hint style="warning" %}
You need to call `setAnonymousId` method before calling `getInstance`
{% endhint %}

An example of setting the `anonymousId` is as below

```dart
   RudderClient.setAnonymousId(<ANONYMOUS_ID>);
```

## Advertising ID

You can use the `setAdvertisingId` method to pass your Android and iOS AAID and IDFA respectively. The `setAdvertisingId` method accepts a `string` argument :

* `id` : Your Android `advertisingId` \(AAID\) (or) Your iOS `advertisingId` \(IDFA\)

{% hint style="warning" %}
On `Android` device you need to call `setAdvertisingId` method before calling `getInstance`
{% endhint %}

Example Usage:

```dart
   RudderClient.setAdvertisingId(<ADVERTISING_ID>);
``` 

{% hint style="info" %}
 The `id` parameter you pass to the above method is assigned as `AAID` if you are on `android` device and as `IDFA` if you are on a `iOS` device. 
{% endhint %}

## Setting Device Token

You can pass your `device-token` for Push Notifications to be passed to the destinations which support Push Notification. We set the `token` under `context.device.token`.

An example of setting the `device-token` is as below

```dart
   RudderClient.putDeviceToken(<DEVICE_TOKEN>);
```

## Configuring your RudderStack Client

You can configure your client based on the following parameters by passing them in the `RudderConfigBuilder` object of your `RudderClient.getInstance()` call.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>logLevel</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">
        <p>Controls how much of the log you want to see from the SDK.</p>
        <p>Refer to the Debugging section to get a list of all supported values.</p>
      </td>
      <td style="text-align:left"><code>RUDDER_LOG_LEVEL.ERROR</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>dataPlaneUrl</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">URL of your <code>data-plane</code>. Please refer above to see how to fetch
        the data plane URL.</td>
      <td style="text-align:left"><code>https://hosted.rudderlabs.com</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>flushQueueSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Number of events in a batch request to the server.</td>
      <td style="text-align:left"><code>30</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>dbThresholdCount</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The number of events to be saved in the <code>SQLite</code> database. Once
        the limit is reached, older events are deleted from the DB.</td>
      <td style="text-align:left"><code>10000</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>sleepTimeout</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Minimum waiting time to flush the events to the server.</td>
      <td style="text-align:left"><code>10 seconds</code> 
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>configRefreshInterval</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">It will fetch the config from <code>dashboard</code> after this many hours.</td>
      <td
      style="text-align:left"><code>2</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>trackLifecycleEvents</code>
      </td>
      <td style="text-align:left"><code>boolean</code>
      </td>
      <td style="text-align:left">Whether SDK will capture application life cycle events automatically.</td>
      <td
      style="text-align:left"><code>true</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>recordScreenViews</code>
      </td>
      <td style="text-align:left"><code>boolean</code>
      </td>
      <td style="text-align:left">Whether SDK will capture screen view events automatically.</td>
      <td style="text-align:left"><code>false</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>controlPlaneUrl</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">If you are using our open-source config generator, use this option to
        point to your hosted <code>sourceConfig</code>. SDK will add <code>/sourceConfig</code> along
        with this URL</td>
      <td style="text-align:left"><code>https://api.rudderlabs.com</code>
      </td>
    </tr>
  </tbody>
</table>

## Debugging

If you run into any issues regarding the RudderStack Flutter SDK, you can turn on the `VERBOSE` or `DEBUG` logging to find out what the issue is. 

First, make sure you import `RudderLogger` with the below command:

```dart
import 'package:rudder_sdk_flutter/RudderLogger.dart';
```

Then to turn on the logging, change your `RudderClient` initialization to the following:

```dart
RudderConfigBuilder builder = RudderConfigBuilder();
builder.withDataPlaneUrl(DATA_PLANE_URL);
builder.withLogLevel(RudderLogger.VERBOSE);
RudderClient.getInstance(WRITE_KEY,
                           config: builder.build());

```

You can set the log level to one of the following values:

1. `NONE`
2. `ERROR`
3. `WARN`
4. `INFO`
5. `DEBUG`
6. `VERBOSE`



## Contact us

In case of any queries, you can always [contact us](mailto:%20docs@rudderstack.com), or feel free to open an issue [on our GitHub Issues page](https://github.com/rudderlabs/rudder-sdk-flutter/issues) in case of any discrepancy. You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!


