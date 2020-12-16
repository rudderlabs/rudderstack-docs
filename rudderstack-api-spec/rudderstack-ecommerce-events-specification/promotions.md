---
description: >-
  Detailed description of the ecommerce lifecycle events related to the
  promotions/offers
---

# Promotions

## Introduction

Events related to viewing or clicking of promotions help you get useful information on how the customers are interacting with the product offers within your website or mobile app.

## Promotion Viewed

This event is fired whenever a user views a website promotion or offer. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `promotion_id` | String | Contains the ID of the promotion |
| `creative` | String | Contains the creative details of the promotion |
| `name` | String | Contains the name of the promotion |
| `position` | String | Contains information about the promotion’s position on the website/app |

An example of the **Promotion Viewed** event is as shown:

```javascript
rudderanalytics.track('Promotion Viewed', {
  promotion_id: 'promo1',
  creative: 'banner1',
  name: 'sale',
  position: 'home_top'
});
```

## Promotion Clicked

This event is fired whenever a visitor clicks on a promotional offer on the website or mobile app. The following properties are supported by this event:

| **Property** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `promotion_id` | String | Contains the ID of the promotion |
| `creative` | String | Contains the creative details of the promotion |
| `name` | String | Contains the name of the promotion |
| `position` | String | Contains information about the promotion’s position on the website/app |

An example of the **Promotion Clicked** event is as shown:

```javascript
rudderanalytics.track('Promotion Clicked', {
  promotion_id: 'promo1',
  creative: 'banner1',
  name: 'sale',
  position: 'home_top'
});
```

## Contact Us

To know more about the RudderStack eCommerce spec, feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. You can also [request a demo](https://rudderstack.com/request-a-demo/) to see RudderStack in action.

