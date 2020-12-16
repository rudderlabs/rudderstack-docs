---
description: >-
  Detailed description of the ecommerce lifecycle events related to the
  customer's wishlisting activity
---

# Wishlist

## Introduction

The product wishlisting events are associated with the key activities that a customer might perform while adding a product to their shopping wishlist. This is useful if your website/app supports the wishlisting feature.

## Product Added to Wishlist

This event is triggered whenever a customer adds a product to their shopping wishlist. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `wishlist_id` | String | Contains the wishlist ID to which the product was added |
| `wishlist_name` | String | Contains the name of the wishlist to which the product was added |
| `product_id` | String | Contains the database ID of the product being viewed |
| `sku` | String | Contains the SKU of the product |
| `category` | String | Contains the category of the product being viewed |
| `name` | String | Contains the name of the product |
| `brand` | String | Contains the name of the brand associated with the product |
| `variant` | String | Contains the name of the variant associated with the product |
| `price` | Number | Contains the price of the product being viewed \(in USD\) |
| `quantity` | Number | Contains information on the quantity of the product |
| `coupon` | String | Contains information about the coupon code associated with the product |
| `position` | Number | Contains the position of the product in the product list |
| `url` | String | Contains the URL of the product page |
| `image_url` | String | Contains the image URL of the product |

An example of the **Product Added to Wishlist** event is as shown:

```javascript
rudderanalytics.track('Product Added to Wishlist', {
  wishlist_id: '12345',
  wishlist_name: 'Games',
  product_id: '235564423234',
  sku: 'F-17',
  category: 'Games',
  name: 'Cards',
  brand: 'Imagepro',
  variant: '123',
  price: 8.99,
  quantity: 1,
  coupon: 'COUPON',
  position: 1,
  url: 'https://www.site.com/product/path',
  image_url: 'https://www.site.com/product/path.jpg'
});
```

## Product Removed from Wishlist

This event is triggered whenever a customer removes a product from their shopping wishlist. The following properties are supported by this event:

| **Property** | **Type** | **Description** |
| :--- | :--- | :--- |
| `wishlist_id` | String | Contains the wishlist ID to which the product was added |
| `wishlist_name` | String | Contains the name of the wishlist to which the product was added |
| `product_id` | String | Contains the database ID of the product being viewed |
| `sku` | String | Contains the SKU of the product |
| `category` | String | Contains the category of the product being viewed |
| `name` | String | Contains the name of the product |
| `brand` | String | Contains the name of the brand associated with the product |
| `variant` | String | Contains the name of the variant associated with the product |
| `price` | Number | Contains the price of the product being viewed \(in USD\) |
| `quantity` | Number | Contains information on the quantity of the product |
| `coupon` | String | Contains information about the coupon code associated with the product |
| `position` | Number | Contains the position of the product in the product list |
| `url` | String | Contains the URL of the product page |
| `image_url` | String | Contains the image URL of the product |

An example of the **Product Removed from Wishlist** event is as shown:

```javascript
rudderanalytics.track('Product Removed from Wishlist', {
  wishlist_id: '12345',
  wishlist_name: 'Games',
  product_id: '235564423234',
  sku: 'F-17',
  category: 'Games',
  name: 'Cards',
  brand: 'Imagepro',
  variant: '123',
  price: 8.99,
  quantity: 1,
  coupon: 'COUPON',
  position: 1,
  url: 'https://www.site.com/product/path',
  image_url: 'https://www.site.com/product/path.jpg'
});
```

## Wishlist Product Added to Cart

This event is triggered whenever a wishlisted product is added to the shopping cart by the customer. The following properties are supported by this event:

| **Property** | **Type** | **Description** |
| :--- | :--- | :--- |
| `wishlist_id` | String | Contains the wishlist ID to which the product was added |
| `wishlist_name` | String | Contains the name of the wishlist to which the product was added |
| `product_id` | String | Contains the database ID of the product being viewed |
| `sku` | String | Contains the SKU of the product |
| `category` | String | Contains the category of the product being viewed |
| `name` | String | Contains the name of the product |
| `brand` | String | Contains the name of the brand associated with the product |
| `variant` | String | Contains the name of the variant associated with the product |
| `price` | Number | Contains the price of the product being viewed \(in USD\) |
| `quantity` | Number | Contains information on the quantity of the product |
| `coupon` | String | Contains information about the coupon code associated with the product |
| `position` | Number | Contains the position of the product in the product list |
| `url` | String | Contains the URL of the product page |
| `image_url` | String | Contains the image URL of the product |

An example of the **Wishlist Product Added to Cart** event is as shown:

```javascript
rudderanalytics.track('Wishlist Product Added to Cart', {
  wishlist_id: '12345',
  wishlist_name: 'Games',
  product_id: '235564423234',
  sku: 'F-17',
  category: 'Games',
  name: 'Cards',
  brand: 'Imagepro',
  variant: '123',
  price: 8.99,
  quantity: 1,
  coupon: 'COUPON',
  position: 1,
  url: 'https://www.site.com/product/path',
  image_url: 'https://www.site.com/product/path.jpg'
});
```

## Contact Us

To know more about the RudderStack eCommerce spec, feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. You can also [request a demo](https://rudderstack.com/request-a-demo/) to see RudderStack in action.

