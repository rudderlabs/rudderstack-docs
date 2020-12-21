---
description: >-
  Detailed description of the ecommerce lifecycle events related to the customer
  browsing activity
---

# Browsing

## Introduction

The browsing lifecycle events are associated with the key activities that a customer might perform while browsing through your website or mobile app.

## Products Searched

This event is triggered whenever a visitor searches for a particular product on your app/website. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `query` | String / Object | Contains the query that has been searched by the user |

An example of the **Products Searched** event is as shown:

```javascript
rudderanalytics.track('Products Searched', {
  query: 'HDMI cable'
});
```

## Product List Viewed

This event is triggered whenever a visitor views a list or category of products on your website or app. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `list_id` | String | Contains the name of the product list being viewed |
| `category` | String | Contains the category of the product being viewed |
| `products` | Array | Contains the array of products displayed in the product list |
| `products.$.product_id` | String | Contains the product ID displayed on the list |
| `products.$.sku` | String | Contains the SKU \(Stock Keeping Unit\) of the product being viewed |
| `products.$.category` | String | Contains the category of the product being viewed |
| `products.$.name` | String | Contains the name of the product being viewed |
| `products.$.brand` | String | Contains the name of the brand associated with the product |
| `products.$.variant` | String | Contains the name of the variant of the product |
| `products.$.price` | Number | Contains the price of the product being viewed \(in USD\) |
| `products.$.quantity` | Number | Contains the quantity of the product |
| `products.$.coupon` | String | Contains the coupon code associated with a product |
| `products.$.position` | Number | Contains the position of the product in the product list |
| `products.$.url` | String | Contains the URL of the product page |
| `products.$.image_url` | String | Contains the image URL of the product |

An example of the **Product List Viewed** event is as shown:

```javascript
rudderanalytics.track('Product List Viewed', {
  list_id: 'list1',
  category: 'What's New',
  products: [
    {
      product_id: '223344ffdds3ff3',
      sku: '12345',
      name: 'Just Another Game',
      price: 22,
      position: 2,
      category: 'Games and Entertainment',
      url: 'https://www.myecommercewebsite.com/product',
      image_url: 'https://www.myecommercewebsite.com/product/path.jpg'
    },
    {
      product_id: '343344ff5567ff3',
      sku: '12346',
      name: 'Wrestling Trump Cards',
      price: 4,
      position: 21,
      category: 'Card Games'
    }
  ]
});
```

## Product List Filtered

This event is triggered whenever a visitor filters a list or category of products on your website or app. The following properties are supported by this event:

| **Property Name** | **Type** | **Description of the Property** |
| :--- | :--- | :--- |
| `list_id` | String | Contains the name of the product list being viewed |
| `category` | String | Contains the name of the product category being viewed |
| `filters` | Array | Contain the product filters that the customer has applied |
| `filters.$.type` | String | Contains the ID of the filter type that the customer is using |
| `filters.$.value` | String | Contains the ID of the selection chosen by the customer |
| `sorts` | Array | Represents the product sorting used by the customer |
| `sorts.$.type` | String | Contains the ID of the sort type used by the customer |
| `sorts.$.value` | String | Contains the ID of the selection-type the customer is using |
| `products` | Array | Contains the products displayed in the product list |
| `products.$.product_id` | String | Contains the product ID displayed in the product list |
| `products.$.sku` | String | Contains the SKU of the viewed product |
| `products.$.category` | String | Contains the product category viewed by the customer |
| `products.$.name` | String | Contains the name of the product being viewed by the user |
| `products.$.brand` | String | Indicates the brand name associated with the product |
| `products.$.variant` | String | Contains the name of the product variant |
| `products.$.price` | Number | Contains the price of the product being viewed \(in USD\) |
| `products.$.quantity` | Number | Indicates the quantity of a product |
| `products.$.coupon` | String | Contains the coupon code associated with a product |
| `products.$.position` | Number | Indicates the position of the product in the product list |
| `products.$.url` | String | Contains the URL of the product page |
| `products.$.image_url` | String | Contains the image URL of the product |

An example of the **Product List Filtered** event is as shown:

```javascript
rudderanalytics.track('Product List Filtered', {
  list_id: 'dealoftheday',
  filters: [
    {
      type: 'department',
      value: 'health'
    },
    {
      type: 'price',
      value: 'under-$75'
    },
  ],
  sorts: [
    {
      type: 'price',
      value: 'asc'
    }
  ],
  products: [
    {
      product_id: '5034221345ffcd672315011',
      sku: '12345',
      name: 'Whey Protein',
      price: 55.45,
      position: 1,
      category: 'health',
      url: 'https://www.myecommercewebsite.com/product/product1123',
      image_url: 'https://www.example.com/product/1123.jpg'
    },
    {
      product_id: '121244455323232326677232',
      sku: '345667',
      name: 'Boost',
      price: 47.85,
      position: 12,
      category: 'health'
    }
  ]
});
```

## Contact Us

To know more about the RudderStack eCommerce spec, feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. You can also [request a demo](https://rudderstack.com/request-a-demo/) to see RudderStack in action.

