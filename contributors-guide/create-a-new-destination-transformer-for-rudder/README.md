---
description: >-
  This guide is aimed at enabling contributors to develop transformation modules
  for various destination analytics platforms
---

# How to Create a New Destination Transformation for RudderStack

## What are destination transformers? <a id="what-are-destination-transformers"></a>

The core promise of platforms like RudderStack is **generate-once-analyse-anywhere**.

This essentially means that organizations need to transmit an event once to the RudderStack platform and the platform would suitably **transform** and **route** the event data to the various target analytics platforms. This is where **destination transformers** come into action.

Every analytics platform defines its own protocol for communication along with semantics for the business objects that can be included in a message sent to the platform. **Destination transformers** are responsible for ingesting the RudderStack canonical object and emit a payload that provides the subsequent **router** programs in the data pipeline along with the information regarding:

a\) Protocol for communicating with the destination \(analytics platform\) \(e.g. REST, parameterized HTTP query etc.\)

b\) Payload intelligible to the destination and conformant to the protocol mentioned in a\)

c\) Additionally, authorization credentials can also be a part of the emitted package, wherever applicable

The RudderStack platform comes with destination transformers for a plethora of popular analytics platforms like Google Analytics, Amplitude, AppsFlyer, MixPanel, Facebook App Events, HubSpot, and many more. We also welcome contributors to add to this ever growing collection of transformers.

Destination Transformers are REST services developed using Node.js that

* Expose a single interface that accepts a JSON payload formatted as per the canonical object model used by Rudder \(detailed examples follow\)
* Map the inputs from the canonical object model to the fields of the payload intelligible to the destination
* Emit an enriched payload as described in points a\), b\) and c\) above

## How data flows to the destination transformer? <a id="how-data-flows-to-the-destination-transformer"></a>

The **processor** component of the RudderStack server routes individual messages to the transformation ecosystem. Essentially, the processor would make POST request with a JSON payload to endpoints like **http\(s\)://&lt;IP&gt;:9090/v0/ga.** Here, **v0** signifies version of the transformer to be used and **ga** represents the destination.

There can be situations wherein a target analytics platform updates/upgrades its endpoints and RudderStack also updates its transformations to match. However, backward compatibility is needed to be maintained for organizations who might not be in a position to deploy updated code into production.

The concept of version comes in handy to deal with such situations. Depending on the configurations in the RudderStack **control plane**, messages for one organization can get routed to one version of the transformer, while those for another organization can get routed to another version.

The **transformerServer** is the entry point to the transformation ecosystem. It leverages the **transformerRouter,** which routes the message to the intended recipient following the **&lt;version&gt;/&lt;destination acronym&gt;** component of the endpoint URL described above. Essentially, transformerRouter would look for a file ga.js \(say\) under a sub-directory v0 relative to its own directory.

So a new transformer entry point code needs to be in a file that should be named &lt;transformer acronym&gt;.js and placed under a &lt;version&gt; sub-directory relative to the path where transformerServer.js and transformerRouter.js are located. Sample below:

```javascript
var jsonQ = require('jsonq');
var gat = require("./GATransform.js");

module.exports = {

    get: async function(req, res, body) {
        console.log("ga:get() starting");

        var requestJson = JSON.parse(body);
        return gat.process(jsonQ(requestJson));

    },
    post: async function(req, res, body) {
        console.log("ga:post() starting");

        var requestJson = JSON.parse(body);
        return gat.process(jsonQ(requestJson));

    },
    put: async function(req, res, body) {
        console.log("ga:put() starting");

        var requestJson = JSON.parse(body);
        return gat.process(jsonQ(requestJson));

    },
    delete: async function(req, res, body) {
        console.log("ga:delete() starting");

        var requestJson = JSON.parse(body);
        return gat.process(jsonQ(requestJson));

    }
};
```

Above sample uses [jsonQ](http://ignitersworld.com/lab/jsonQ.html) for JSON parsing. However, libraries like [json-ptr](https://github.com/flitbit/json-ptr#readme) can also be used. Core logic for transformation is included in the GATransform.js file in the above sample.

Following is an excerpt of the entry point into the main transformation routine - the **process** method

```javascript
//Iterate over input batch and generate response for each message
function process (jsonQobj){
    var respList = [];
    var counter = 0;
    jsonQobj.find("message").parent().each(function (index, path, value){
        result = processSingleMessage(jsonQ(value));
        respList.push(result);

    });
    return respList;
}

exports.process = process;
```

## How do destination transformers work? <a id="how-do-destination-transformers-work"></a>

Before we continue on the program flow starting with the **processSingleMessage**, let us take a pause and look at the various business event messages that a transformer needs to be able to handle.

Also, note that depending on the destination, the degree of semantic compliance requirement might vary. For e.g., one platform might not pose any restrictions on the payload attributes and would allow display as well as search on free-flowing attribute names \(e.g. Amplitude\) whereas others might allow only fixed nomenclature of payload field names and present only a derived view/report based on such attributes \(e.g. Google Analytics\)

The transformation code needs to enforce any semantic checks required by the destination. For e.g., an "event" Hit Type for Google Analytics mandates that at least an "event action" and an "event category" be specified. Concerned transformation must therefore encapsulate logic that can map and/or derive values for these fields for concerned message

Following are key business event message types:

* **Identify** - typically used to signify the establishment of identity of a user using the application or browsing a website. Would occur once the user logs into the application or the site
* **Page** - applicable for web sites. Represents the event where a web page is opened/visited
* **Screen** - applicable for mobile applications. Represents the event where a screen of the application is opened
* **Track** - the catch-all and most used type. All events can be captured using this. Information related to generic e-Commerce events, with their defined information structures, can be passed using this message type. You can also pass information related to very specific and custom events

The canonical object attributes would get mapped to destination payload fields depending on the above message types. Let us look at a sample such branching logic \(to be emulated in a new transformer in accordance with the destination requirements\)

```javascript
//Generic process function which invokes specific handler functions 
//depending on message type and event type where applicable
  function processSingleMessage(jsonQobj){

    //Route to appropriate process depending on type of message received
    var messageType = String(jsonQobj.find('type').value()).toLowerCase();

    switch (messageType){
        case 'page':
            //console.log('processing page');
            return   processPageviews(jsonQobj);
        case 'screen':
            //console.log('processing screen');
            return   processScreenviews(jsonQobj);
        case 'track':
            var eventType = String(jsonQobj.find('event').value()).toLowerCase();
            //console.log(eventType);    
            //There can be both ECommerce as well as Non-ECommerce 'track' events
            //Need to handle individually
            switch (eventType){
                case 'product list viewed':
                case 'product list filtered':    
                case 'product list clicked':
                    return   processProductListEvent(jsonQobj);
                    break;
                case 'promotion viewed':
                case 'promotion clicked':
                    return   processPromotionEvent(jsonQobj);
                    break;
                case 'product clicked':
                case 'product viewed':
                case 'product added':
                case 'wishlist product added to cart':    
                case 'product removed':
                case 'product removed from wishlist':
                case 'product added to wishlist':    
                    return   processProductEvent(jsonQobj);
                    break;
                case 'checkout started':
                case 'order updated':
                case 'order completed':    
                case 'order cancelled':
                    return   processTransactionEvent(jsonQobj);
                    break;
                case 'checkout step viewed':
                case 'checkout step completed':
                case 'payment info entered':
                    return   processPaymentRelatedEvent(jsonQobj);
                    break;
                case 'order refunded':
                    return   processRefundEvent(jsonQobj);
                    break;
                case 'product shared':
                case 'cart shared':    
                    return   processSharingEvent(jsonQobj);
                    break;
                case 'cart viewed':
                case 'coupon entered':
                case 'coupon applied':
                case 'coupon denied':
                case 'coupon removed':
                case 'product reviewed':
                case 'products searched':    
                    return   processEComGenericEvent(jsonQobj);    
                    break;
                default:
                    return   processNonEComGenericEvent(jsonQobj);        
            }
        default:
            console.log('could not determine type');
            //throw new RangeError('Unexpected value in type field');
            var events = []
            events.push("{\"error\":\"message type not supported\"}");
            return events;
    }

}
```

In the above example, for **track,** a second level check has been introduced to further refine the processing by segregating between eCommerce and non-eCommerce calls.

Within each of the message type-specific processing routines, mapping from the canonical model to the destination data model would occur.

Destination transformers can combine direct field-mapping configurations \(maintained as key-value pairs in a JSON where the key is the canonical object attribute path and the value is the destination payload attribute\) as well as custom mapping logic.

The sample below is that of a direct field-mapping configuration for a generic RudderStack "event" message being mapped to a [Google Analytics Measurement Protocol invocation for Event Tracking](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#events).

```javascript
{
    "anonymousId":"cid",    
    "userId":"cid",
    "event":"ea",
    "properties.category":"ec",
    "properties.label":"el",
    "properties.value":"ev",
    "properties.title":"cd1"
}
```

In the above sample, the _anonymousId_ field within the canonical JSON payload received by the Google Analytics destination transformer is mapped to the _cid_ query parameter that the Measurement Protocol accepts. The _userId_ field is also mapped to the same target. The logic here is that depending on whether a user is logged in or not at the source application or site from where the event is generated - either the _anonymousId_ or the _userId_ would be populated - with the _userId_ getting the precedence since its presence would indicate a more specific identification of the user associated with the event

Similarly, the _label_ field within the _properties_ structure of the canonical payload is mapped to the _el_ query parameter of the Measurement Protocol call

Direct field mapping is possible only for fields in the canonical payload that are not part of a collection. For handling collections, custom coding would be required which is explained subsequently

Now let us examine how the above configuration is used at runtime

```javascript
var nonEcomGenericEventConfigFile = fs.readFileSync(
  "data/GANonEComEventConfig.json"
);
var nonEcomGenericEventConfigJson = JSON.parse(nonEcomGenericEventConfigFile);
```

```javascript
//Basic response builder
//We pass the parameterMap with any processing-specific key-value prepopulated
//We also pass the incoming payload, the hit type to be generated and
//the field mapping and credentials JSONs
function responseBuilderSimple (parameterMap, jsonQobj, hitType, mappingJson, credsJson){

    //Other code 

    //Iterate through each key mapping 
    //the source keys are provided in the format a.b.c.d which means
    //structure a contains structure b contains structure c contains
    //element d. So the path is reconstructed by spltting the source key by dot
    jsonQ.each(mappingJson, function(sourceKey, destinationKey){
        //The structure for page messages is the root, so we have to reset the reference
        //point before traversing for every key
        var tempObj = jsonQobj.find('context').parent();


        //console.log(tempObj.length)

        var pathElements = sourceKey.split('.');

        //console.log(loopCounter++);

        //Now take each path element and traverse the structure
        for (var i=0; i<pathElements.length; i++) {
            //console.log(pathElements[i]);
            tempObj = tempObj.find(pathElements[i]);    
        }

        //Once the entry for the source key has been found, the value needs to be mapped 
        //to the destination key

        tempObj.each(function (index, path, value){
            //Add the derived key-value pair to the response JSON
            parameterMap.set(String(destinationKey),String(value));
        });

    });

    //Other code
}
```

While the above code snippet captures the direct field-mapping implementation, let us take a look at the custom logic implementation below:

```javascript
//Function for processing order refund events
function processRefundEvent(jsonQobj){
    var parameterMap = new Map();
    parameterMap.set("pa","refund"); //pre-populate

    //First we need to check whether we're dealing with full refund or partial refund
    //In case of partial refund, product array will be present in payload
    var productArray = jsonQobj.find("properties").find("products").find("product_id").parent();    
    if (productArray.length > 0){ //partial refund
        //console.log(productArray.length);
        //Now iterate through the products and add parameters accordingly
        var prodIndex = 1; 
        productArray.each(function(index, path, value){
            //If product_id is not provided, then SKU will be used in place of id
            if (!value.product_id || 0 === value.product_id.length){
                parameterMap.set("pr"+prodIndex+"id",value.sku);
            } else {
                parameterMap.set("pr"+prodIndex+"id",value.product_id);
            }

            parameterMap.set("pr"+prodIndex+"nm",value.name);
            parameterMap.set("pr"+prodIndex+"ca",value.category);
            parameterMap.set("pr"+prodIndex+"br",value.brand);
            parameterMap.set("pr"+prodIndex+"va",value.variant);
            parameterMap.set("pr"+prodIndex+"cc",value.coupon);
            parameterMap.set("pr"+prodIndex+"ps",value.position);
            parameterMap.set("pr"+prodIndex+"pr",value.price);
            parameterMap.set("pr"+prodIndex+"qt",value.quantity);
            prodIndex++;
        });
    } else { //full refund, only populate order_id
        parameterMap.set("ti",String(jsonQobj.find("order_id").value()));
    } 
    //Finally fill up with mandatory and directly mapped fields
     return responseBuilderSimple(parameterMap,jsonQobj,'transaction',refundEventConfigJson, customerCredentialsConfigJson);
}
```

In the above example, a list of products can be sent as argument parameters for the **transaction** hit type of Google Analytics Measurement Protocol. Custom logic is used to iterate through the array of JSON structures signifying the **products** and construct parameters following GA's convention of **pr&lt;productIndex&gt;id**, **pr&lt;productIndex&gt;nm** and so on

The last statement in the above code block shows how control is passed to the generic method that uses configuration file for direct mapping to take over after the custom logic-based mapping has completed.

```javascript
return responseBuilderSimple(parameterMap,jsonQobj,'transaction',refundEventConfigJson, customerCredentialsConfigJson);
```

The **responseBuilderSimple** method, shown briefly before, is where the direct mappings are taken care of. Expanded version of the same is provided below. Here one can see parameters \(**endpoint**, **request-format**, **request\_method\)** being set for the configuration corresponding to the request to be made to the destination platform

```javascript
//Basic response builder
//We pass the parameterMap with any processing-specific key-value prepopulated
//We also pass the incoming payload, the hit type to be generated and
//the field mapping and credentials JSONs
function responseBuilderSimple (parameterMap, jsonQobj, hitType, mappingJson, credsJson){

    //We'll keep building a simple key-value JSON structure which will be finally returned
    //We add the static parts as well as the direct mappings from config JSON
    //There will be three keys - endpoint, request-format and payload
    //The payload will be another JSON containing the key-value pairs to be sent
    //finally as query parameters

    //Create a final map to be used for response and populate the static parts first
    var responseMap = new Map();    
    responseMap.set("endpoint","https://www.google-analytics.com/collect");
    //responseMap.set("request-format","PARAMS");

    var requestConfigMap = new Map();
    requestConfigMap.set("request-format","PARAMS");
    requestConfigMap.set("request_method","GET");

    responseMap.set("request_config", mapToObj(requestConfigMap));

    responseMap.set("header",{});

    //Need to set user_id outside of payload
    //Check userId - if not there then check anonymousId
    if(jsonQobj.find('userId').value()[0]){
        responseMap.set("user_id",jsonQobj.find('userId').value()[0]);
    } else if (jsonQobj.find('anonymousId').value()[0]){
        responseMap.set("user_id",jsonQobj.find('anonymousId').value()[0]);
    }

    //Now add static parameters to the parameter map
    parameterMap.set("v","1");
    parameterMap.set("t",String(hitType));

    jsonQobj.find("destination").each((i, p, value) => {
        parameterMap.set("tid", String(value.Config.trackingId));
      });
      //   Add the customer credentials
      //   jsonQ.each(credsJson, function(key, value) {
      //     parameterMap.set('tid', String(value));
      //   });

    var loopCounter = 1;
    //Iterate through each key mapping of pageview type messges
    //the source keys are provided in the format a.b.c.d which means
    //structure a contains structure b contains structure c contains
    //element d. So the path is reconstructed by spltting the source key by dot
    jsonQ.each(mappingJson, function(sourceKey, destinationKey){
        //The structure for page messages is the root, so we have to reset the reference
        //point before traversing for every key
        var tempObj = jsonQobj.find('context').parent();


        //console.log(tempObj.length)

        var pathElements = sourceKey.split('.');

        //console.log(loopCounter++);

        //Now take each path element and traverse the structure
        for (var i=0; i<pathElements.length; i++) {
            //console.log(pathElements[i]);
            tempObj = tempObj.find(pathElements[i]);    
        }

        //Once the entry for the source key has been found, the value needs to be mapped 
        //to the destination key

        tempObj.each(function (index, path, value){
            //Add the derived key-value pair to the response JSON
            parameterMap.set(String(destinationKey),String(value));
        });

    });

    //Assign parameter map against payload key
    responseMap.set("payload",mapToObj(parameterMap));

    //Convert response map to JSON
    var responseJson = JSON.stringify(mapToObj(responseMap));

    var events = []
    events.push(responseJson);
    return events;
}
```

While we hope this guide helps developers understand the basic need, data flow, objects and program structure associated with destination transformers - it is advised that developers consult the existing code at [RudderStack Transformer GitHub page](https://github.com/rudderlabs/rudder-transformer) for gaining greater clarity.

## Contact us

In case of any queries, you can always [reach out to us](mailto:%20contact@rudderstack.com), or feel free to open an issue [on our GitHub Issues page](https://github.com/rudderlabs/rudder-sdk-android/issues) in case of any discrepancy. You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

