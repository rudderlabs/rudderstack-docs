---
description: Step-by-step guide to send your event data from RudderStack to Branch.io
---

# Branch

\*\*\*\*[**Branch.io**](https://branch.io) is an industry leader in cross-platform attribution, mobile app measurement, and deep linking. Many top-ranking apps use Branch to increase their performance and revenue through better performance and engagement.

RudderStack supports Branch as a destination to which you can seamlessly send customer events.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/branch)**.**
{% endhint %}

## Getting Started

Before configuring Branch as a destination in RudderStack, verify if the source platform is supported by Branch by referring to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | **Supported** | - |
| **Cloud mode** | - | **Supported** | - |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [**RudderStack connection modes**](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) ****guide.
{% endhint %}

Once you have confirmed that your source platform supports sending events to Branch, follow these steps:

* From your [**RudderStack dashboard**](https://app.rudderstack.com/), add a compatible source. From the list of destinations, select **Branch Metrics**.

{% hint style="warning" %}
This destination currently supports [**Android**](../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-android-sdk/), [**iOS**](../../stream-sources/rudderstack-sdk-integration-guides/rudderstack-ios-sdk.md), and [**Unity**](../../stream-sources/rudderstack-sdk-integration-guides/getting-started-with-unity-sdk.md) as sources. 

RudderStack does not support sending data to Branch via the web \(JavaScript\) SDK on both Device and Cloud mode.
{% endhint %}

{% hint style="info" %}
Follow our guide on [**Adding a Source and Destination in RudderStack**](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) for more information.
{% endhint %}

* Assign a name to the destination and click on **Next**. You should then see the following screen: 

![](../../.gitbook/assets/1%20%2827%29.png)

### Connection Settings

* **Branch Key**: Enter your Branch key here.

{% hint style="info" %}
To get your Branch key, log into to your Branch [**dashboard**](https://dashboard.branch.io/#/settings). You should be able to access the Branch key from the settings page of the dashboard. For more information on the Branch key, refer to their [**documentation**](https://help.branch.io/using-branch/docs/profile-settings#branch-key-and-secret).
{% endhint %}

* Enable the **Use device-mode to send events** option if you wish to send events to the destination via the native SDK.

## Adding Device Mode Integration

Depending on your source platform, follow the steps below to send events to Branch via the Device Mode .

{% tabs %}
{% tab title="iOS" %}
* Open the `Podfile` of your project and add the following line:

```text
pod 'Rudder-Branch'
```

* Then, run the following:

```text
$ pod install
```

* Finally, change the SDK initialization as shown:

```text
RudderConfigBuilder *builder = [[RudderConfigBuilder alloc] init];
[builder withDataPlaneUrl:<DATA_PLANE_URL>];
[builder withFactory:[RudderBranchFactory instance]];
[builder withLoglevel:RudderLogLevelDebug];
[RudderClient getInstance:<WRITE_KEY> config:[builder build]];
```
{% endtab %}

{% tab title="Android" %}
* Open your `app/build.gradle` \(Module: `app`\) file and add the following lines:

```text
repositories {
    mavenCentral()
}
```

* Add the following  under `dependencies` section:

```text
implementation 'com.rudderstack.android.sdk:core:1.0.1'
implementation 'com.rudderstack.android.integration:branch:0.1.3'

// branch SDK requirements
implementation 'io.branch.sdk.android:library:4.3.2'
implementation'com.android.installreferrer:installreferrer:1.1.2'
implementation 'com.google.firebase:firebase-appindexing:19.1.0'
implementation 'com.google.android.gms:play-services-ads:16+'
```

* Finally, change the initialization of the SDK as shown:

```text
val rudderClient: RudderClient = RudderClient.getInstance(
    this,
    <WRITE_KEY>,
    RudderConfig.Builder()
        .withDataPlaneUrl(<DATA_PLANE_URL>)
        .withLogLevel(RudderLogger.RudderLogLevel.DEBUG)
        .withFactory(BranchIntegrationFactory.FACTORY)
        .build()
)
```
{% endtab %}
{% endtabs %}

## Identify

The `identify` call lets you identify a visiting user and associate them to their actions.

{% hint style="success" %}
For more information on the `identify` call, refer to the [**RudderStack Events Specification**](../../rudderstack-api/api-specification/rudderstack-spec/) guide.
{% endhint %}

A sample `identify` call captured from the RudderStack iOS SDK is as shown:

```text
[[RudderClient sharedInstance] identify:@"developer_user_id"
                                 traits:@{@"foo": @"bar", @"foo1": @"bar1"}];
```

{% hint style="info" %}
Ideally, this call is made when the user registers on the app, after login, or after they update their information on the app.
{% endhint %}

## Track

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any properties associated with them.

{% hint style="success" %}
For more information on the `track` call, refer to the [**RudderStack Events Specification**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/track) guide.
{% endhint %}

A sample `track` call looks like the following:

```text
[[RudderClient sharedInstance] track:@"test_event"
                          properties:@{@"key":@"value", @"foo": @"bar"}]
```

All the trackable events in RudderStack are divided into three major Branch event categories:

* E-Commerce Events
* Content Events
* Lifecycle Events

### E-Commerce Events

The following table lists the mapping between the accepted names of the Commerce events:

| RudderStack Event | Branch Event |
| :--- | :--- |
| `Product Added` | `ADD_TO_CART` |
| `Product Added to Wishlist` | `ADD_TO_WISHLIST` |
| `Cart Viewed` | `VIEW_CART` |
| `Checkout Started` | `INITIATE_PURCHASE` |
| `Payment Info Entered` | `ADD_PAYMENT_INFO` |
| `Order Completed` | `ADD_PAYMENT_INFO` |
| `Spend Credits` | `SPEND_CREDITS` |
| `Promotion Viewed` | `VIEW_AD` |
| `Promotion Clicked` | `CLICK_AD` |
| `Checkout Started` | `PURCHASE` |
| `Order Completed` | `PURCHASE` |
| `Reserve` | `RESERVE` |

{% hint style="info" %}
RudderStack also maps the `Spend Credits` event to Branch's `SPEND_CREDITS` , although it is not directly a part of the E-Commerce Events.
{% endhint %}

### Content Events

The following table lists the mapping between the accepted names of the Content events:

| RudderStack Event | Branch Event |
| :--- | :--- |
| `Products Searched` | `SEARCH` |
| `Product Viewed` | `VIEW_ITEM` |
| `Product List Viewed` | `VIEW_ITEMS` |
| `Product Reviewed` | `RATE` |
| `Product Shared` | `SHARE` |
| `Initiate Stream` | `INITIATE_STREAM` |
| `Complete Stream` | `COMPLETE_STREAM` |

{% hint style="info" %}
The above mentioned events are a part of the RudderStack E-Commerce events, but are mapped to Branch's Content Events.
{% endhint %}

### Lifecycle Events

RudderStack also supports mapping the following events:

| RudderStack Event | Branch Event |
| :--- | :--- |
| `Complete Registration` | `COMPLETE_REGISTRATION` |
| `Complete Tutorial` | `COMPLETE_TUTORIAL` |
| `Achieve Level` | `ACHIEVE_LEVEL` |
| `Unlock Achievement` | `UNLOCK_ACHIEVEMENT` |
| `Invite` | `INVITE` |
| `Login` | `LOGIN` |
| `Start Trial` | `START_TRIAL` |
| `Subscribe` | `SUBSCRIBE` |

### Common Fields Mapping

The following table lists the mapping of the accepted property keys common to all events:

| RudderStack Property Key | Branch Property Key |
| :--- | :--- |
| `title` | `$og_title` |
| `description` | `$og_description` |
| `image_url` | `$og_image_url` |
| `canonical_identifier` | `$canonical_identifier` |
| `publicly_indexable` | `$publicly_indexable` |
| `price` | `$price` |
| `locally_indexable` | `$locally_indexable` |
| `quantity` | `$quantity` |
| `sku` | `$sku` |
| `name` | `$product_name` |
| `brand` | `$product_brand` |
| `category` | `$product_category` |
| `variant` | `$product_variant` |
| `rating_average` | `$rating_average` |
| `rating_count` | `$rating_count` |
| `rating_max` | `$rating_max` |
| `creating_timestamp` | `$creation_timestamp` |
| `exp_date` | `$exp_date` |
| `keywords` | `$keywords` |
| `address_street` | `$address_street` |
| `address_city` | `$address_city` |
| `address_region` | `$address_region` |
| `address_country` | `$address_country` |
| `address_postal_code` | `$address_postal_code` |
| `latitude` | `$latitude` |
| `longitude` | `$longitude` |
| `image_captions` | `$image_captions` |
| `condition` | `$condition` |

## FAQs

### Where can I get the Branch Key?

You can retrieve the Branch key from the settings page of the [**Branch dashboard**](https://dashboard.branch.io/#/settings).

## Contact Us

If you come across any issues while configuring Branch with RudderStack, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) ****channel.

