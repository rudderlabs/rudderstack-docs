---
description: Step-by-step guide to ingest event data from Looker into RudderStack
---

# Looker

[Looker](https://looker.com/) is a popular Business Intelligence and data analytics platform, that allows you to explore your data for actionable, business-oriented insights. 

You can now use Looker as a source of data, where it can be used to send user-related looks to RudderStack. Looker sends the enriched user activities and their associated properties over a period of time to RudderStack. RudderStack can then forward this data to the desired destinations for real-time syncing of the newly created properties and actions.

## Getting Started

After creating your views in Looker, you need to set-up [Looker actions](https://docs.looker.com/admin-options/platform/actions). Go to your Looker Actions dashboard to do this. 

{% hint style="warning" %}
While RudderStack supports teams and individual workspaces in its **Enterprise** **edition** - Looker does not allow for individual Action Hub configurations for different members of the same organization.
{% endhint %}

{% hint style="info" %}
If you want to send the output of different Looks to different RudderStack sources, you will need to host custom instances of Looker Action Hub. Looker themselves provide direction for doing this - please refer to their [documentation](https://docs.looker.com/sharing-and-publishing/action-hub#setting_up_a_local_action_hub_server).
{% endhint %}

One can enable [RudderStack Actions](https://github.com/rudderlabs/actions) on Looker as below:

### **Adding RudderStack Action Hub Server**

RudderStack hosts a Looker [Action Hub Server](https://docs.looker.com/sharing-and-publishing/action-hub#writing_an_action) that communicates with your Looker instance. Once you connect the Action Hub Server to your Looker instance by clicking on the **Add Action Hub** button present at the bottom of Looker Actions dashboard, you can start viewing the three RudderStack actions as above**.** 

{% hint style="info" %}
The RudderStack Action Hub Server can be found at [https://looker-action-hub.rudderstack.com](https://looker-action-hub.rudderstack.com)
{% endhint %}

{% hint style="info" %}
#### **The authorization token to be used is:**

`75805209b45a55494d0c27d4eb91fbf6bc7fb1a63dfcd9260fe65daee584737b/ea4e074e71c1af9c07bf71f69c1addf7b9a30d458bd7aea4b4e60d6a6a122277b59210186edb7cf21a5ff53a29c68fb89ff5aaf5019570c8a5131484a11e2e3e`
{% endhint %}

![RudderStack-hosted Action Hub](../.gitbook/assets/image%20%2829%29.png)

To enable any of the above actions, go to its **Settings** page where you need to give the **Rudder Write Key** from your [RudderStack](https://app.rudderstack.com) [dashboard](https://app.rudderstack.com/), which can be obtained as shown:

![Looker Source Write Key](../.gitbook/assets/screen-shot-2020-12-04-at-11.02.19-am.png)

In addition, you also need to specify the **Rudder Server URL** to which the RudderStack actions will be forwarding the user looks data:

![Configuring the Write Key and the RudderStack Server URL](../.gitbook/assets/image%20%2812%29.png)

Once the connection is successful, you should start seeing the RudderStack actions.

## RudderStack Actions Overview

Once configured, RudderStack Actions support sending query results to RudderStack. 

When defining your columns for the Looker models attached to the look that you will be sending to RudderStack, it's important to tag the user identifier column as `email` ****or `user_id` ****or ****`rudder_anonymous_id`**.** Additionally, to use the **RudderStack Group** action, you need to tag your group identifier column as `rudder_group_id`**.**

{% hint style="info" %}
In **some** specific cases - e.g. Redis - the `user_id` field always needs to be present, even if the `email` field is present.
{% endhint %}

{% hint style="info" %}
The other user and activity columns will be sent as traits or properties along with the payload that is being sent to RudderStack by the above three actions. 
{% endhint %}

A sample `track` payload from the look's row data sent by the **RudderStack Track** action ****is as below:

```javascript
{
  "userId": "test@rcomp.es",
  "anonymousId": null,
  "properties": {
    "tracks_flow.event_2": "Destination_Clicked",
    "tracks_flow.event_3": [
      
    ],
    "tracks_flow.event_4": [
      
    ],
    "tracks_flow.event_5": [
      
    ],
    "tracks_flow.event": "User_Logged_In"
  },
  "event": "single",
  "context": {
    "library": {
      "name": "analytics-node",
      "version": "0.0.3"
    },
    "app": {
      "name": "looker/actions",
      "version": "dev"
    }
  },
  "timestamp": "2020-06-18T08:21:01.644Z",
  "type": "track",
  "_metadata": {
    "nodeVersion": "12.13.0"
  },
  "originalTimestamp": "2020-06-18T08:21:03.049Z",
  "messageId": "node-c33eb51666f6470bf4aa415c7431aba4-ffd5e198-05a1-477a-9c2c-85be30749b8b",
  "sentAt": "2020-06-18T08:21:03.050Z"
}
```

{% hint style="info" %}
The column names in your looks are transformed as `<Looker view name>.<column name>`  
in the payload sent to RudderStack by the RudderStack  actions. If you want to change the names to your end destination needs, you can use our User-Transformer feature to transform them.
{% endhint %}

## Contact Us

If you come across any issues while configuring Looker as a source with RudderStack, please feel free to [contact us](mailto:%20contact@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

