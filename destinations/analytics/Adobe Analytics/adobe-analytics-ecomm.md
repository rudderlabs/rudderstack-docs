## Ecommerce Events

Rudder broadly classifies Ecommerce Events (Merchendising) in the following:

1. ## Product Viewed
    Adobe Event Name: prodView
    Rudder Events: Product Viewed, Product List Viewed

    Properties that are used
           | Rudder property| Adobe Property |
           | :--- | :--- |
           | currency | currencyCode. Default Value "USD" |

2. ## Product Added
    Adobe Event Name: scAdd
    Rudder Events: Product Added

    Properties that are used
           | Rudder property| Adobe Property |
           | :--- | :--- |
           | currency | currencyCode. Default Value "USD" |

3. ## Product Removed
    Adobe Event Name: scRemove
    Rudder Events: Product Removed

    Properties that are used
           | Rudder property| Adobe Property |
           | :--- | :--- |
           | currency | currencyCode. Default Value "USD" |

4. ## Order Completed
    Adobe Event Name: purchase
    Rudder Events: Order Completed

    Properties that are used
           | Rudder property| Adobe Property |
           | :--- | :--- |
           | currency | currencyCode. Default Value "USD" |
           | purchaseId | purchaseID |
           | transactionId | transactionID |
           | order_id | purchaseID/transactionID. If purchaseId or transactionId is not present |

5. ## Cart Viewed
    Adobe Event Name: scView
    Rudder Events: Cart Viewed

    Properties that are used
           | Rudder property| Adobe Property |
           | :--- | :--- |
           | currency | currencyCode. Default Value "USD" |

6. ## Checkout Started
    Adobe Event Name: scCheckout
    Rudder Events: Checkout Started

    Properties that are used
           | Rudder property| Adobe Property |
           | :--- | :--- |
           | currency | currencyCode. Default Value "USD" |
           | purchaseId | purchaseID |
           | transactionId | transactionID |
           | order_id | purchaseID/transactionID. If purchaseId or transactionId is not present |

7. ## Cart Opened 
    Adobe Event Name: scOpen
    Rudder Events: Cart Opened

    Properties that are used
           | Rudder property| Adobe Property |
           | :--- | :--- |
           | currency | currencyCode. Default Value "USD" |


Steps for sending Ecomm events to adobe.

1. Channel, Campaign, state, zip window properties are updated.
2. Sets timestamp according to dashboard settings.
3. currencyCode window property is set.
4. Event string if mapped on dashboard is set.
5. Product string if mapped on dashboard is set.
6. contextData, eVars, lists, hiers, props are set.
7. linkTrackVars is set.
8. Mapped adobe event is set.
9. tl() is called. The tl() method is an important core component to Adobe Analytics. It takes all Analytics variables defined on the page, compiles them into an image request,and sends that data to Adobe data collection servers. It works similarly to the t() method, however this method does not increment page views. It is useful for tracking links and other elements that wouldn’t be considered a full page load.
     