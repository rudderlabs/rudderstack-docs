---
description: Step-by-step guide to send your event data from RudderStack to Braze
---

# Braze

Braze is an industry-leading customer engagement platform. It allows you to better understand your customers' in-app behavior and use the insights to improve your overall app experience, and increase engagement with them.

With RudderStack's SDK for mobile and web platforms, you can send your in-app event data to Braze directly for contextual analysis.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/braze)**.**
{% endhint %}

## Getting Started

Before getting started, please determine whether the platform you are sending your event data from is supported. Refer to the following table for the supported source types and connection modes:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | **Supported** | **Supported** | - |
| **Cloud mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

In order to start sending data to Braze, you will first need to add it as a destination to the source from which you are sending the event data.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

Please follow these steps once you have added a source in the RudderStack app:

![RudderStack connection settings for adding Braze as a destination](../../.gitbook/assets/braze.png)

* Once you have added the source, please register on Braze complete the setup.
* You should then be able to access the Braze API key in your Braze dashboard under **App Settings** - **Manage App Group**
* A REST API key needs to be created in the Braze dashboard under App Settings - Developer Console - API Settings. You can find the detailed instructions [here](https://www.braze.com/docs/api/basics/?redirected=true#creating-and-managing-rest-api-keys).

{% hint style="info" %}
For the above App Group REST API Key, you will only need to select the **users.track**, **users.identify**, and **users.alias.new** endpoints under **User Data**
{% endhint %}

* Please enter the **Data Center** details provided by Braze. It is of the format **INSTANCE**, as explained clearly in this [Braze Instances](https://www.braze.com/docs/user_guide/administrative/access_braze/braze_instances/) guide. An example of a Data Instance would be `US-01`.

## Adding Device Mode Integration

Depending on your platform of integration, follow the steps below to add Braze to your project:

{% tabs %}
{% tab title="iOS" %}
Please follow these steps to add Braze to your iOS project:

* Open the `Podfile` of your project and add the following line:

  ```text
  pod 'Rudder-Braze'
  ```

  followed by the command as shown:

  ```text
  $ pod install
  ```

* Finally change the SDK initialization to the following snippet:

  ```text
  RudderConfigBuilder *builder = [[RudderConfigBuilder alloc] init];
  [builder withDataPlaneUrl:<YOUR_DATA_PLANE_URL>];
  [builder withFactory:[RudderBrazeFactory instance]];
  [RudderClient getInstance:<YOUR_WRITE_KEY> config:[builder build]];
  ```
{% endtab %}

{% tab title="Android" %}
To add Braze to your Android project, please follow these steps:

* Open your `app/build.gradle` \(Module: app\) file, and add the following:

  ```text
  repositories {
    maven { url "https://dl.bintray.com/rudderstack/rudderstack" }
    maven { url "https://appboy.github.io/appboy-android-sdk/sdk" }
  }
  ```

* Add the following under `dependencies` section:

  \`\`\`text implementation 'com.rudderstack.android.sdk:core:1.0.1' implementation 'com.rudderstack.android.integration:braze:0.1.1' implementation 'com.appboy:android-sdk-ui:6.0.+'

// if you don't have Gson included already implementation 'com.google.code.gson:gson:2.8.6'

```text
* Finally change the initialization of the SDK to the following:

  ```text
  val rudderClient: RudderClient = RudderClient.getInstance(
      this,
      <WRITE_KEY>,
      RudderConfig.Builder()
          .withDataPlaneUrl(<DATA_PLANE_URL>)
          .withLogLevel(RudderLogger.RudderLogLevel.DEBUG)
          .withFactory(BrazeIntegrationFactory.FACTORY)
          .build()
  )
```
{% endtab %}
{% endtabs %}

## Identify

The `identify` call is used to associate a user to their actions. Apart from capturing a unique user ID, RudderStack also captures optional traits associated with that user, such as name, email, IP address, etc.

A sample `identify`call captured from the RudderStack Android SDK looks like the following code snippet:

```javascript
rudderanalytics.identify("userid", {
  name: "John Doe",
  title: "CEO",
  email: "name.surname@domain.com",
  company: "Company123",
  phone: "123-456-7890",
  state: "Texas",
  rating: "Hot",
  city: "Austin",
  postalCode: "12345",
  country: "US",
  street: "Sample Address",
  state: "TX",
});
```

{% hint style="info" %}
Ideally, the `identify` method is called when the user registers to the app for the first time. It can also be called after the user logs into the app, or updates their information.
{% endhint %}

## Track

The `track` call captures all the activities that the user performs, along with any other properties that are associated with those activities. Each of these activities or actions is considered by RudderStack as an **event**. For more information on the `track` call, please refer to the [RudderStack API Specification](https://docs.rudderstack.com/getting-started/rudderstack-api-spec) guide.

A sample `track` call looks like the following code snippet:

```javascript
rudderanalytics.track("Track me", {
  category: "category",
  label: "label",
  value: "value",
});
```

For example, consider the following code snippet for a `track` event `Order Completed` from your JavaScript SDK:

```javascript
rudderanalytics.track("Order Completed", {
  checkout_id: "fksdjfsdjfisjf9sdfjsd9f",
  order_id: "50314b8e9bcf000000000000",
  affiliation: "Google Store",
  total: 27.5,
  subtotal: 22.5,
  revenue: 25.0,
  shipping: 3,
  tax: 2,
  discount: 2.5,
  coupon: "hasbros",
  currency: "USD",
  products: [
    {
      product_id: "507f1f77bcf86cd799439011",
      sku: "45790-32",
      name: "Monopoly: 3rd Edition",
      price: 19,
      quantity: 1,
      category: "Games",
      url: "https://www.example.com/product/path",
      image_url: "https:///www.example.com/product/path.jpg",
    },
    {
      product_id: "505bd76785ebb509fc183733",
      sku: "46493-32",
      name: "Uno Card Game",
      price: 3,
      quantity: 2,
      category: "Games",
    },
  ],
});
```

### Order Completed

When you call the `track` method for an event with the name `Order Completed` using the eCommerce API, RudderStack sends the products listed in the event to Braze as purchases.

## Page

The `page` call allows you to record your website's page views, with the additional relevant information about the page being viewed. For more information on the `page` call, please refer to the [RudderStack API Specification](https://docs.rudderstack.com/getting-started/rudderstack-api-spec) guide.

A sample`page` call is as shown below:

```javascript
rudderanalytics.page("PublicFacingCategory", "HomePage", {
  title: "Welcome RudderStack",
  url: "http://www.rudderstack.com",
  time: "2020-02-11T13:16:23.858Z",
});
```

The above call is made through the RudderStack JavaScript SDK, and sent to Braze as a track event with name set to the page name.

## Group

The `group` call is made to associate the user with a group. The example of a `group` call is as shown below:

```javascript
rudderanalytics.group("test_group_id", {
  name: "Group Name"
});
```

Once you send the `group` event, RudderStack will send a custom attribute to Braze with the name as `ab_rudder_group_<groupId>` where `groupId` is the ID you've passed in the `group` call, and will set the value to `true`.

For example, if the `groupId` is `test_group_id` then RudderStack will create a custom attribute to Braze with the name `ab_rudder_group_test_group_id` and set the value to `true`.

## Contact Us

If you come across any issues while configuring Braze with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

