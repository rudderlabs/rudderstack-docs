## Settings

1. Tracking Server URL

The trackingServer variable determines the location an image request is sent. If this variable is not defined correctly, your implementation can experience data loss
For more Info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/trackingserver.html?lang=en

2. Tracking Server Secure URL

The trackingServerSecure variable determines the location an image request is sent over HTTPS. If this variable is not defined correctly, your implementation can experience data loss
For more Info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/trackingserversecure.html?lang=en

3. Report Suite ID(s)

Report Suite ID can be found in your Adobe Analytics Settings page.
Multiple report suite ids can be separated by commas: ab.cd,ef.gh,ij.kl.

4. Check for Heartbeat calls to be made over https

If this is on and Heartbeat Tracking Server URL is present ssl value will be set as true so that calls go over https.

5. Heartbeat Tracking Server URL

If a value is present here this will be used as tracking server url instead of the value in Tracking Server URL. 
Rudder will set all heartbeat configurations if this value is present.

For more Info: https://experienceleague.adobe.com/docs/media-analytics/using/sdk-implement/setup/setup-overview.html?lang=en

6. Adobe Heartbeat Settings

Map your rudder events (video) to Adobe Heartbeat Events.
More information on how the mapping is done is under adobe analytics heartbeat information page.

7. Identity Resolution
   a. Marketing Cloud Organization Id
      If you want to use visitorAPI.js please enter this field. 
      It will be something like'99887766ABC@AdobeOrg'.
   b. Drop Visitor Id
      If this is on It does not set userId to visitorID.
    
   For more Info: https://experienceleague.adobe.com/docs/id-service/using/implementation/setup-analytics.html?lang=en#section-6053a6b7c16c466a9f9fdbf9cb9db3df

8. Timestamps
   a. Timestamp Option
    Adobe Analytics  have Report Suites that can accept timestamped, non-timestamped or hybrid data. 
    window.s.timestamp will be affected and also depending on this visitorID will be set if drop visitor id is off.

    If timestamp option is disabled visitorID will be set.
    If timestamp option is hybrid and prefer visitor id is on then also visitorID will be set.
    For all othr cases visitorID will not be set.

    If timestamp option is enabled timestamp will be set. 
    If timestamp option is hybrid and prefer visitor id is off then also timestamp will be set.

   b. Prefer Visitor Id
      
      As Adobe does not allow to send both visitorID and timestamp this option will be used when the timestamp option is set as hybrid. 
      If this is on visitorID will be set otherwise timestamp will be set.
   
   For more Info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/timestamp.html?lang=en

9. Enable pageName for Track Events
   
   Only track events by sending pageName when this is on.

10. Mappings
    a. Map Rudder Events to Adobe Custom Eevnts

       Add one event or many events for adobe custom events separated by comma.
       Eg: RudderEvent --> event1,event2,event3

    b. Map Rudder Context data to Adobe Context Data
       
       Context data variables let you define custom variables on each page that processing rules can read. Instead of explicitly assigning values to Analytics variables in your code, you can send data in context data variables. Processing rules then take context data variable values and pass them into respective Analytics variables.

       Map the key which will be present under context of rudder message to the property name you want to send to adobe context data.

       Eg: 
       ```JSON
       "context":{
           "contextProperties": {
               "prop1": "val1",
               "prop2": "val2"
           }
       }
       ```

       If you want to set prop1 to adobe context data property1 
       Map with contextProperties.prop1 -- > property1

       For more Info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html?lang=en

    c. Add Prefix for Context Data
      
       If you would like to prefix your Rudder properties before sending them as contextData you can enter a prefix here which will be appended.

    d. Map Rudder Properties to Adobe eVars

       eVars are custom variables that you can use however you’d like.
       Each eVar is a string that contains custom values specific to your organization. Their max length is 255 bytes; values longer than 255 bytes are automatically truncated when sent to Adobe.

       Map any rudder property with the eVar you want to set it to.
       Only enter the index number of the eVar you want to set.
       
       For more info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/evar.html?lang=en
    e. Map Rudder Properties to Adobe Hierarchy properties
       
       Hierarchy variables are custom variables that let you see a site’s structure.
       Adobe supports up to 5 hierarchy variables in your implementation.

       Map any rudder property with the hier you want to set it to.
       Only enter the index number of the hier you want to set.

       For more info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/hier.html?lang=en

    f. Map Rudder Properties to Adobe list properties
       
       List variables are custom variables that you can use however you’d like. They work similarly to eVars, except they can contain multiple values in the same hit. List variables do not have a character limit.

       Map any rudder property with the list you want to set it to.
       Only enter the index number of the list you want to set.

       The list properties should be an array/string separated by commas otherwise it will be dropped.

       For more info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/list.html?lang=en

    g. Map Rudder Property with Delimiters for list properties
       
       List variables needs to be sent as string so if there is a list of properties it need to be delimited. You can set any of the delimiters from , ; / : | 

    h. Map Rudder Properties to Adobe Custom properties

       Props are custom variables that you can use however you’d like. They do not persist beyond the hit that they are set.

       Map any rudder property with the prop you want to set it to.
       Only enter the index number of the prop you want to set.

       For more info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/prop.html?lang=en

    i. Map Rudder Property with Delimiters for Adobe Custom properties
       
       Prop variables needs to be sent as string so if there is a list of properties it need to be delimited. You can set any of the delimiters from , ; / : | 

11. Merchandise Event Level Settings
    a. Map Rudder Events to Adobe Merchandise events
       
       Map the rudder event with a currency/purchase type of adobe event eg. event5.

    b. Increment or Currency Properties to add to merchandise events at event level
       
       Rudder property that has currency/counter value should be added.
       This will be used to create the event string like "pruchase,event5=19.9".
       Rudder sets the currencyCode value. (Default value is USD). 

    For more info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/events/events-overview.html?lang=en

12. Merchandise Product Level Settings
    a. Map Rudder Events to Adobe Merchandise events
       
       Map the rudder event with a currency/purchase type of adobe event eg. event5.

    b. Properties to add to merchandise events at product level
       
       Rudder property that has currency/counter value should be added.
       This will be used to create the product string like [category][item][quantity][total][incrementor][merchString]

    c. Map Rudder Properties to eVars at product level
       
       Map the rudder properties you want to set to eVars. 
       Set only the index.
       These eVars will be appended with | and sent along with the product string as mentioned above

       For more info: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/evar-merchandising.html?lang=en

    d. Product Identifier
       
       Only a single product identifier is accepted by Adobe Analytics.
       You can choose from sku/id/name of the products.
    