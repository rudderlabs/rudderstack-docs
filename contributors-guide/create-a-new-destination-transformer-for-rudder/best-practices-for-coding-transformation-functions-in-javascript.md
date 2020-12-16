---
description: Pointers for developers while coding their custom transformation functions
---

# Best Practices for Coding Transformation Functions in JavaScript

## RudderStack Transformation Overview

The **RudderStack Transformation** function is a key feature of the RudderStack platform, and can be a powerful tool for the enterprises. It offers two key benefits:

* It can be used for **spend optimization** by reducing the number of messages directed to a platform and leveraging aggregated events.
* It can be used for **gaining better business insights** by altering the message types for facilitating better classification.

The choice of JavaScript is intended to make these transformation functions easy to write for the developers, and easy for us to integrate into the RudderStack hub, as the hub internally already has a pipeline in place for consuming dynamic JavaScript functions.

## Best Practices for Coding RudderStack Transformation Functions

The following are some things to keep in mind while coding your transformation functions for RudderStack:

* All of your code should go inside a **single** transformation function
* The transformation function receives a collection of event messages which is a JSON structure. The following are few key fields of the structure:
  * `rl_context`
  * `rl_anonymous_id`
  * `rl_message_id`
  * `rl_event`
  * `rl_type`
  * `rl_properties`
  * `rl_user_properties`
* The transformation function iterates through the collection and for each message, generates one or more messages \(keeping the structure unchanged\) for further processing.
* You can import and use any JavaScript library within your code as long as the license associated with said library permits the special use as applicable in the case of authoring a transformation function __on the RudderStack platform.
* You **must not** alter the structure of the event messages. There is a possibility that the message might get rejected in case the required fields are missing.
* You must maintain the **semantic integrity** of the message payload.
* You should **ideally** leave the structures like `rl_context` and `rl_traits` **unchanged** as they are concerned with the application and are user-specific. Manipulating them may lead to erroneous results. That said, there can be specific requirements for undertaking such manipulation. For example, a business might be interested to find out the distribution of their customers across Android OS variants. In such case, if the `os_name` is `Android` and `os_version` is anything between 5.0 and 5.1.1 – then the developer might want to replace the `os_version` with just `Lollipop`

## Examples of RudderStack Transformations

The following are some typical examples of transformations that developers might choose to employ:

* Suppose that an original message type is `pageview`, but maybe such events have been enlisted as `track` messages with event category `Page Viewed` in the analytics tool for some reason. In such a scenario, the transformation function can be used to generate a 1:1 message for each such message in the collection, with the message type changed to `track` and `rl_event` set to `Page Viewed` and the appropriate event category populated in the message.
* If the enterprise generates a large number of events, and the target analytics platform charges by volume - then only a certain number of samples can be sent for the purpose of analytics. In such a case, we can resort to a sampling strategy where we include every `n`th message from the original set in the collection to be returned.
* Do a user-wide aggregation of `total_payments` field from within messages in the batch received having type `track` and event as `spin` – and generate a single event with the summed up `total_payments` per user. Again, on a platform that charges by volume – such aggregation to find metrics such as average revenue per user can be handy.
* For each Product included in a `track` message for event `Product List Viewed` – generate individual messages that might be flowing into, say, Google Analytics with the event action as `detail`. This is typically done when the target platform offers a high free volume threshold and at the same time sufficient ability for granular level analysis \(like Google Analytics\). These are situations where one input message can give rise to more than one messages.

