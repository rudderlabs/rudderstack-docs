---
description: >-
  An easy-to-follow guide on adding source and destination to transport your
  event data in RudderStack
---

# How to Add a Source and Destination in RudderStack

RudderStack allows you to send your event data from either your website or a mobile device \(Android and iOS\) to a destination platform of your choice. A destination is a platform that uses your event data for analytics. However, in order to so, it is important to correctly add and configure your source and destination on the RudderStack platform.

## Adding a source

To add a source, please follow these steps:

* Log in to the [RudderStack app](https://app.rudderlabs.com/login). Once logged in, your home page should look like the following:

  ![RudderStack Dashboard](../.gitbook/assets/source1.png)

* Click on **ADD SOURCE.**
* Choose the source from which you want to collect the event data. We support JavaScript \(web app\), as well as Android and iOS.

  ![The Add Source Menu](../.gitbook/assets/source2.png)

* Once you choose the source, please type the name you want to assign to that source.

  ![The Name your source screen](../.gitbook/assets/source3.png)

* Once you have added the source, you should see the following screen, with an option to add a destination. That's it, you are good to go!

  ![The Source Details screen](../.gitbook/assets/source4.png)

{% hint style="info" %}
You can note the **write key** and use it to configure the SDK, in order to send the event data from it.
{% endhint %}

## Adding a destination

Please follow the steps below to add a destination to which you want to send your event data:

{% hint style="info" %}
Make sure you have added a source before you add a destination.
{% endhint %}

* Click on the **ADD DESTINATION** option as shown:

  ![The Add Destination option after configuring the source](../.gitbook/assets/dest1.png)

* Choose the appropriate destination from the list of destinations shown in the following screen and then click on **Next**:

  ![Choosing a destination](../.gitbook/assets/dest2.png)

* Name your destination. In case you are adding multiple destinations for various sources, ensure that the destination names are unique.

  ![Naming your destination](../.gitbook/assets/dest3.png)

* The source you have configured initially will automatically appear at this stage. Click on **Next**.
* You will now be required to enter **Tracking ID** associated with the destination. Ideally, you should be able to retrieve this from the admin dashboard of that destination. In case of Google Analytics, as an example, you can retrieve it as shown below:

  ![Google Analytics dashboard for retrieving Tracking ID](../.gitbook/assets/dest5%20%281%29.png)

* Once you have retrieved Tracking ID, enter it in the **RudderStack Connection Settings** page as shown:

  ![RudderStack Connection Settings](../.gitbook/assets/dest6%20%281%29.png)

* If you want to transform your source event data, you can select the **Create New Transformation** option. Otherwise, select the **No transformation needed** option to send the event data as is, to the destination. Then, click **Next**.

And that's it! You have successfully added a destination and configured it to receive the event data from your source! Your dashboard should now look like the following:

![RudderStack dashboard after adding source and destination](../.gitbook/assets/dest8.png)

## Contact Us

Have you encountered any issues while configuring your source and destination? Please feel free to [contact us](mailto:%20docs@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, and we will be happy to help you!

