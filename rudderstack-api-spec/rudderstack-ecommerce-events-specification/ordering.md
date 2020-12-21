---
description: >-
  Detailed description of the ecommerce lifecycle events related to the
  customer's ordering activity
---

# Ordering

## Introduction

These lifecycle events are associated with the key interactions that a customer has with the app or website while placing an order for a product.

## Product Clicked

This event is triggered whenever a visitor clicks on a product. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `product_id` | String | Contains the database ID of the product being viewed |
| `sku` | String | Contains the SKU of the product |
| `category` | String | Contains the category of the product |
| `name` | String | Contains the name of the product being viewed |
| `brand` | String | Contains the name of the brand associated with the product |
| `variant` | String | Contains information of the variant associated with the product |
| `price` | Number | Contains the price of the product being viewed |
| `quantity` | Number | Contains the quantity of the product |
| `coupon` | String | Contains information on the coupon code associated with a product |
| `position` | Number | Contains the position of the product in the product list |
| `url` | String | Contains the URL of the product page |
| `image_url` | String | Contains the image URL of the product |

An example of the **Product Clicked** event is as shown:

```javascript
rudderanalytics.track('Product Clicked', {
  product_id: '123',
  sku: 'F15',
  category: 'Games',
  name: 'Game',
  brand: 'Gamepro',
  variant: '111',
  price: 13.49,
  quantity: 11,
  coupon: 'DISC21',
  position: 1,
  url: 'https://www.website.com/product/path',
  image_url: 'https://www.website.com/product/path.png'
});
```

## Product Viewed

This event is triggered whenever a visitor views a product. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `product_id` | String | Contains the database ID of the product being viewed |
| `sku` | String | Contains the SKU of the product |
| `category` | String | Contains the category of the product |
| `name` | String | Contains the name of the product being viewed |
| `brand` | String | Contains the name of the brand associated with the product |
| `variant` | String | Contains information of the variant associated with the product |
| `price` | Number | Contains the price of the product being viewed |
| `quantity` | Number | Contains the quantity of the product |
| `coupon` | String | Contains information on the coupon code associated with a product |
| `currency` | String | Contains the currency of the transaction |
| `position` | Number | Contains the position of the product in the product list |
| `url` | String | Contains the URL of the product page |
| `image_url` | String | Contains the image URL of the product |

An example of the **Product Viewed** event is as shown:

```javascript
rudderanalytics.track('Product Viewed', {
  product_id: '123',
  sku: 'F15',
  category: 'Games',
  name: 'Game',
  brand: 'Gamepro',
  variant: '111',
  price: 13.49,
  quantity: 11,
  coupon: 'DISC21',
  currency: 'USD',
  position: 1,
  url: 'https://www.website.com/product/path',
  image_url: 'https://www.website.com/product/path.png'
});
```

## Product Added

This event is triggered whenever a visitor/customer adds a product to their shopping cart. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `cart_id` | String | Contains the cart ID of the cart to which the product was added |
| `product_id` | String | Contains the database ID of the product being viewed |
| `sku` | String | Contains the SKU of the product |
| `category` | String | Contains the category of the product |
| `name` | String | Contains the name of the product being viewed |
| `brand` | String | Contains the name of the brand associated with the product |
| `variant` | String | Contains information of the variant associated with the product |
| `price` | Number | Contains the price of the product being viewed |
| `quantity` | Number | Contains the quantity of the product |
| `coupon` | String | Contains information on the coupon code associated with a product |
| `position` | Number | Contains the position of the product in the product list |
| `url` | String | Contains the URL of the product page |
| `image_url` | String | Contains the image URL of the product |

An example of the **Product Added** event is as shown:

```javascript
rudderanalytics.track('Product Added', {
  product_id: '123',
  sku: 'F15',
  category: 'Games',
  name: 'Game',
  brand: 'Gamepro',
  variant: '111',
  price: 13.49,
  quantity: 11,
  coupon: 'DISC21',
  position: 1,
  url: 'https://www.website.com/product/path',
  image_url: 'https://www.website.com/product/path.png'
});
```

## Product Removed

This event is triggered whenever a product is removed from the shopping cart by the customer. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `cart_id` | String | Contains the cart ID of the cart to which the product was added |
| `product_id` | String | Contains the database ID of the product being viewed |
| `sku` | String | Contains the SKU of the product |
| `category` | String | Contains the category of the product |
| `name` | String | Contains the name of the product being viewed |
| `brand` | String | Contains the name of the brand associated with the product |
| `variant` | String | Contains information of the variant associated with the product |
| `price` | Number | Contains the price of the product being viewed |
| `quantity` | Number | Contains the quantity of the product |
| `coupon` | String | Contains information on the coupon code associated with a product |
| `position` | Number | Contains the position of the product in the product list |
| `url` | String | Contains the URL of the product page |
| `image_url` | String | Contains the image URL of the product |

An example of the **Product Removed** event is as shown:

```javascript
rudderanalytics.track('Product Removed', {
  product_id: '123',
  sku: 'F15',
  category: 'Games',
  name: 'Game',
  brand: 'Gamepro',
  variant: '111',
  price: 13.49,
  quantity: 11,
  coupon: 'DISC21',
  position: 1,
  url: 'https://www.website.com/product/path',
  image_url: 'https://www.website.com/product/path.png'
});
```

## Cart Viewed

This event is triggered whenever a visitor or customer views their shopping cart. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `cart_id` | String | Contains the cart ID of the cart to which the product was added |
| `products` | Array | Contains the list of products displayed in the product list |
| `products.$.product_id` | String | Contains the product ID displayed on the list |
| `products.$.sku` | String | Contains the SKU of the product being viewed |
| `products.$.category` | String | Contains the category of the product being viewed |
| `products.$.name` | String | Contains the name of the product being viewed |
| `products.$.brand` | String | Contains the name of the brand associated with the product |
| `products.$.variant` | String | Contains information of the variant associated with the product |
| `products.$.price` | Number | Contains the price of the product being viewed |
| `products.$.quantity` | Number | Contains the quantity of the product |
| `products.$.coupon` | String | Contains information on the coupon code associated with a product |
| `products.$.position` | Number | Contains the position of the product in the product list |
| `products.$.url` | String | Contains the URL of the product page |
| `products.$.image_url` | String | Contains the image URL of the product |

An example of the **Cart Viewed** event is as shown:

```javascript
rudderanalytics.track('Cart Viewed', {
  cart_id: '12345',
  products: [
    {
      product_id: '123',
      sku: 'G-14',
      name: 'Cards',
      price: 14.99,
      position: 1,
      category: 'Games',
      url: 'https://www.website.com/product/path',
      image_url: 'https://www.website.com/product/path.jpg'
    },
    {
      product_id: '345',
      sku: 'G-32',
      name: 'UNO',
      price: 3.99,
      position: 2,
      category: 'Games'
    }
  ]
});
```

## Checkout Started

This event is triggered whenever an order or transaction is initiated after the customer or visitor clicks on the checkout button. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `order_id` | String | Contains the order ID or transaction ID, whichever is applicable |
| `affiliation` | String | Contains the store or affiliation details from where the transaction was started |
| `value` | Number | Contains the details of the revenue with the discount and coupons factored in |
| `revenue` | Number | Contains the revenue associated with the transaction, excluding the shipping and tax details |
| `shipping` | Number | Contains the shipping cost associated with the order or transaction |
| `tax` | Number | Contains the total tax associated with the order or the transaction |
| `discount` | Number | Contains the total discount associated with the transaction |
| `coupon` | String | Contains details of the transaction coupon which can be redeemed with the transaction |
| `currency` | String | Contains the currency code associated with an order or transaction |
| `products` | Array | Contains the list of products in the order or transaction |
| `products.$.product_id` | String | Contains the product ID displayed on the list |
| `products.$.sku` | String | Contains the SKU of the product being viewed |
| `products.$.category` | String | Contains the category of the product being viewed |
| `products.$.name` | String | Contains the name of the product being viewed |
| `products.$.brand` | String | Contains the name of the brand associated with the product |
| `products.$.variant` | String | Contains information of the variant associated with the product |
| `products.$.price` | Number | Contains the price of the product being viewed |
| `products.$.quantity` | Number | Contains the quantity of the product |
| `products.$.coupon` | String | Contains information on the coupon code associated with a product |
| `products.$.position` | Number | Contains the position of the product in the product list |
| `products.$.url` | String | Contains the URL of the product page |
| `products.$.image_url` | String | Contains the image URL of the product |

An example of the **Checkout Started** event is as shown:

```javascript
rudderanalytics.track('Checkout Started', {
  order_id: '1234',
  affiliation: 'Apple Store',
  value: 20,
  revenue: 15.00,
  shipping: 22,
  tax: 1,
  discount: 1.5,
  coupon: 'ImagePro',
  currency: 'USD',
  products: [
    {
      product_id: '123',
      sku: 'G-32',
      name: 'Monopoly',
      price: 14,
      quantity: 1,
      category: 'Games',
      url: 'https://www.website.com/product/path',
      image_url: 'https://www.website.com/product/path.jpg'
    },
    {
      product_id: '345',
      sku: 'F-32',
      name: 'UNO',
      price: 3.45,
      quantity: 2,
      category: 'Games'
    }
  ]
});
```

## Checkout Step Viewed

This event is triggered whenever a checkout step is viewed. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `checkout_id` | String | Contains the checkout transaction ID |
| `step` | Number | Contains the number associated with the checkout process step |
| `shipping_method` | String | Contains the information associated with the chosen shipping method |
| `payment_method` | String | Contains the payment method information |

An example of the **Checkout Step Viewed** event is as shown:

```javascript
rudderanalytics.track('Checkout Step Viewed', {
  checkout_id: '123',
  step: 1,
  shipping_method: 'DHL',
  payment_method: 'Mastercard'
});
```

## Checkout Step Completed

This event is triggered whenever a checkout step is completed. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `checkout_id` | String | Contains the checkout transaction ID |
| `step` | Number | Contains the number associated with the checkout process step |
| `shipping_method` | String | Contains the information associated with the chosen shipping method |
| `payment_method` | String | Contains the payment method information |

An example of the **Checkout Step Completed** event is as shown:

```javascript
rudderanalytics.track('Checkout Step Completed', {
  checkout_id: '123',
  step: 1,
  shipping_method: 'DHL',
  payment_method: 'Mastercard'
});
```

## Payment Info Entered

This event is triggered whenever payment information is successfully entered to complete an order or transaction. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `checkout_id` | String | Contains the checkout transaction ID |
| `order_id` | String | An optional string that contains the order ID |
| `step` | Number | Contains the number associated with the checkout process step |
| `shipping_method` | String | Contains the information associated with the chosen shipping method |
| `payment_method` | String | Contains the payment method information |

An example of the **Payment Info Entered** event is as shown:

```javascript
rudderanalytics.track('Payment Info Entered', {
  checkout_id: '12344',
  order_id: '123'
});
```

## Order Updated

This event is triggered whenever an order or transaction is updated. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `order_id` | String | Contains the order ID or transaction ID, whichever is applicable |
| `affiliation` | String | Contains the store or affiliation details from where the transaction was started |
| `total` | Number | Contains the details of the revenue with the discount and coupons factored in |
| `revenue` | Number | Contains the revenue associated with the transaction, excluding the shipping and tax details |
| `shipping` | Number | Contains the shipping cost associated with the order or transaction |
| `tax` | Number | Contains the total tax associated with the order or the transaction |
| `discount` | Number | Contains the total discount associated with the transaction |
| `coupon` | String | Contains details of the transaction coupon which can be redeemed with the transaction |
| `currency` | String | Contains the currency code associated with an order or transaction |
| `products` | Array | Contains the list of products in the order or transaction |
| `products.$.product_id` | String | Contains the product ID displayed on the list |
| `products.$.sku` | String | Contains the SKU of the product being viewed |
| `products.$.category` | String | Contains the category of the product being viewed |
| `products.$.name` | String | Contains the name of the product being viewed |
| `products.$.brand` | String | Contains the name of the brand associated with the product |
| `products.$.variant` | String | Contains information of the variant associated with the product |
| `products.$.price` | Number | Contains the price of the product being viewed |
| `products.$.quantity` | Number | Contains the quantity of the product |
| `products.$.coupon` | String | Contains information on the coupon code associated with a product |
| `products.$.position` | Number | Contains the position of the product in the product list |
| `products.$.url` | String | Contains the URL of the product page |
| `products.$.image_url` | String | Contains the image URL of the product |

An example of the **Order Updated** event is as shown:

```javascript
rudderanalytics.track('Order Updated', {
  order_id: '1234',
  affiliation: 'Apple Store',
  value: 20,
  revenue: 15.00,
  shipping: 22,
  tax: 1,
  discount: 1.5,
  coupon: 'ImagePro',
  currency: 'USD',
  products: [
    {
      product_id: '123',
      sku: 'G-32',
      name: 'Monopoly',
      price: 14,
      quantity: 1,
      category: 'Games',
      url: 'https://www.website.com/product/path',
      image_url: 'https://www.website.com/product/path.jpg'
    },
    {
      product_id: '345',
      sku: 'F-32',
      name: 'UNO',
      price: 3.45,
      quantity: 2,
      category: 'Games'
    }
  ]
});
```

## Order Completed

This event is triggered whenever an order is completed successfully. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `checkout_id` | String | Contains the checkout ID |
| `order_id` | String | Contains the order ID or transaction ID, whichever is applicable |
| `affiliation` | String | Contains the store or affiliation details from where the transaction was started |
| `subtotal` | Number | Contains the order total after discounts but not including the taxes and shipping charges |
| `total` | Number | Contains the details of the revenue with the discount and coupons factored in |
| `revenue` | Number | Contains the revenue associated with the transaction, excluding the shipping and tax details |
| `shipping` | Number | Contains the shipping cost associated with the order or transaction |
| `tax` | Number | Contains the total tax associated with the order or the transaction |
| `discount` | Number | Contains the total discount associated with the transaction |
| `coupon` | String | Contains details of the transaction coupon which can be redeemed with the transaction |
| `currency` | String | Contains the currency code associated with an order or transaction |
| `products` | Array | Contains the list of products in the order or transaction |
| `products.$.product_id` | String | Contains the product ID displayed on the list |
| `products.$.sku` | String | Contains the SKU of the product being viewed |
| `products.$.category` | String | Contains the category of the product being viewed |
| `products.$.name` | String | Contains the name of the product being viewed |
| `products.$.brand` | String | Contains the name of the brand associated with the product |
| `products.$.variant` | String | Contains information of the variant associated with the product |
| `products.$.price` | Number | Contains the price of the product being viewed |
| `products.$.quantity` | Number | Contains the quantity of the product |
| `products.$.coupon` | String | Contains information on the coupon code associated with a product |
| `products.$.position` | Number | Contains the position of the product in the product list |
| `products.$.url` | String | Contains the URL of the product page |
| `products.$.image_url` | String | Contains the image URL of the product |

An example of the **Order Completed** event is as shown:

```javascript
rudderanalytics.track('Order Completed', {
  checkout_id: '12345',
  order_id: '1234',
  affiliation: 'Apple Store',
  total: 20,
  revenue: 15.00,
  shipping: 22,
  tax: 1,
  discount: 1.5,
  coupon: 'ImagePro',
  currency: 'USD',
  products: [
    {
      product_id: '123',
      sku: 'G-32',
      name: 'Monopoly',
      price: 14,
      quantity: 1,
      category: 'Games',
      url: 'https://www.website.com/product/path',
      image_url: 'https://www.website.com/product/path.jpg'
    },
    {
      product_id: '345',
      sku: 'F-32',
      name: 'UNO',
      price: 3.45,
      quantity: 2,
      category: 'Games'
    }
  ]
});
```

## Order Refunded

This event is triggered whenever an order is refunded. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `order_id` | String | Contains the order or transaction ID |

An example of the **Order Refunded** event is as shown:

```javascript
rudderanalytics.track('Order Refunded', {
  order_id: '1234',
  total: 20,
  currency: 'USD',
  products: [
    {
      product_id: '123',
      sku: 'G-32',
      name: 'Monopoly',
      price: 17,
      quantity: 1,
      category: 'Games',
      url: 'https://www.website.com/product/path',
      image_url: 'https://www.website.com/product/path.jpg'
    },
    {
      product_id: '345',
      sku: 'F-32',
      name: 'UNO',
      price: 3,
      quantity: 1,
      category: 'Games'
    }
  ]
});
```

## Order Cancelled

This event is triggered whenever an order is canceled. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `order_id` | String | Contains the order ID or transaction ID, whichever is applicable |
| `affiliation` | String | Contains the store or affiliation details from where the transaction was started |
| `total` | Number | Contains the details of the revenue with the discount and coupons factored in |
| `revenue` | Number | Contains the revenue associated with the transaction, excluding the shipping and tax details |
| `shipping` | Number | Contains the shipping cost associated with the order or transaction |
| `tax` | Number | Contains the total tax associated with the order or the transaction |
| `discount` | Number | Contains the total discount associated with the transaction |
| `coupon` | String | Contains details of the transaction coupon which can be redeemed with the transaction |
| `currency` | String | Contains the currency code associated with an order or transaction |
| `products` | Array | Contains the list of products in the order or transaction |
| `products.$.product_id` | String | Contains the product ID displayed on the list |
| `products.$.sku` | String | Contains the SKU of the product being viewed |
| `products.$.category` | String | Contains the category of the product being viewed |
| `products.$.name` | String | Contains the name of the product being viewed |
| `products.$.brand` | String | Contains the name of the brand associated with the product |
| `products.$.variant` | String | Contains information of the variant associated with the product |
| `products.$.price` | Number | Contains the price of the product being viewed |
| `products.$.quantity` | Number | Contains the quantity of the product |
| `products.$.coupon` | String | Contains information on the coupon code associated with a product |
| `products.$.position` | Number | Contains the position of the product in the product list |
| `products.$.url` | String | Contains the URL of the product page |
| `products.$.image_url` | String | Contains the image URL of the product |

An example of the **Order Cancelled** event is as shown:

```javascript
rudderanalytics.track('Order Cancelled', {
  order_id: '1234',
  affiliation: 'Apple Store',
  total: 20,
  revenue: 15.00,
  shipping: 22,
  tax: 1,
  discount: 1.5,
  coupon: 'ImagePro',
  currency: 'USD',
  products: [
    {
      product_id: '123',
      sku: 'G-32',
      name: 'Monopoly',
      price: 14,
      quantity: 1,
      category: 'Games',
      url: 'https://www.website.com/product/path',
      image_url: 'https://www.website.com/product/path.jpg'
    },
    {
      product_id: '345',
      sku: 'F-32',
      name: 'UNO',
      price: 3.45,
      quantity: 2,
      category: 'Games'
    }
  ]
});
```

## Contact Us

To know more about the RudderStack eCommerce spec, feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. You can also [request a demo](https://rudderstack.com/request-a-demo/) to see RudderStack in action.

