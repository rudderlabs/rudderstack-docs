---
description: >-
  Detailed description of the ecommerce lifecycle events related to the
  customer's product reviewing activity
---

# Reviewing

## Introduction

The product reviewing lifecycle events are associated with the key activities that a customer might perform while adding a product review on your app or website.

## Product Reviewed

This event is triggered whenever a customer reviews a product. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `product_id` | String | Contains the ID of the product being reviewed |
| `review_id` | String | Contains the unique ID of the review being posted by the customer |
| `review_body` | String | Contains the body or the content of the review posted by the customer |
| `rating` | String | Contains the rating of the product added by the customer in the review |

An example of the **Product Reviewed** event is as shown:

```javascript
rudderanalytics.track('Product Reviewed', {
  product_id: '12345',
  review_id: 'review12',
  review_body: 'Good product, delivered in excellent condition',
  rating: '5'
});
```

## Contact Us

To know more about the RudderStack eCommerce spec, feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. You can also [request a demo](https://rudderstack.com/request-a-demo/) to see RudderStack in action.

