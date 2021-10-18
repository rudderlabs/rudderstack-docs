---
description: >-
  Useful tips for developers who wish to send events to their own destination
  platforms via RudderStack.
---

# How to Develop Integrations for RudderStack

RudderStack currently supports over 80 [**destinations**](../../destinations/). This guide is useful if you wish to send events to a target platform **not supported by us currently.**

## What is an integration?

‌A RudderStack integration is a package that includes the client-side (**SDK**) enhancements as well as the server-side (**Transformer**) additions required to support a new destination platform. 

## How does an integration work?

The RudderStack [**SDKs**](../../stream-sources/rudderstack-sdk-integration-guides/) help the developers capture business events within their enterprise systems and route them to RudderStack. The events sent from the SDKs to RudderStack follow a canonical model and are independent of the programming language or the source platform. 

The RudderStack engine is message-agnostic and performs resilient but optimized routing functions. The [**transformer**](https://github.com/rudderlabs/rudder-transformer) service is responsible for the final mapping from the canonical message to the destination-specific semantics.

## Why not just develop the transformer, then?

Given the above high-level distribution of responsibilities among the various RudderStack components, it might first appear that developing a new integration should involve only the development of the transformer, since the canonical payload that undergoes the transformation would already be part of the existing SDK. 

However, this is not the case due to a few underlying reasons:

* Most destination platforms provide their own SDKs. While RudderStack relies on the destinations to offer some means of server-to-server communication, this communication support might not always be there or might not provide all the functionalities offered by the destination SDK. In such cases, the RudderStack SDK has to rely on the destination SDK to support the events not addressed as part of the platform's server-side APIs.\

* Certain platforms (especially attribution) rely on establishing a cross-device identifier for delivering actionable insights. The proprietary systems typically generate such an identifier within the platform that leverages cross-references from various other sources. To integrate with such platforms, RudderStack leverages the platform SDK for establishing the identifier.\

* In certain cases, the destination SDK captures events over and above its advertised APIs. In such cases, the RudderStack SDK has no option but to include the destination SDK.

‌The following sections familiarize you with the RudderStack SDK components and then delve into the details of enhancing** **the SDKs.

## RudderStack SDK components

The RudderStack SDKs have two major components‌:

* The **Core SDK** provides the APIs that application developers need to use to route events via RudderStack. Apart from routing events to the RudderStack backend, the core SDK also implements a factory pattern wherein the concrete implementations are the wrappers for the supported destination SDKs.\

* The **integration sub-component** combines the wrapper implementation and the actual destination SDK that the wrapper adapts to the RudderStack framework.

### Enhancing the core SDKs

You can control the inclusion of a platform during development by including or excluding the corresponding **integration** **sub-component** in the build. The core SDK prepares an inventory of the supported integration modules and includes only those in the factory calls. Using this approach, you can restrict the application size to include only the required components.

‌Even after an integration component has been included in the build, you can control its usage at runtime through appropriate server-side configurations which the client SDK downloads and uses. Using this approach, the developers can enable or disable the direct flow of events to the destination.

## Submitting an integration pull request

When developing a new integration for RudderStack, there are a couple of repositories you need a submit a new PR to. For more details, refer to our [**step-by-step guide**](https://docs.rudderstack.com/user-guides/how-to-guides/how-to-submit-an-integration-pull-request) on submitting a new integration PR.

## Contact us <a href="docs-internal-guid-a89efda1-7fff-16e0-53f3-fc73af7d3e3a" id="docs-internal-guid-a89efda1-7fff-16e0-53f3-fc73af7d3e3a"></a>

To know more about how to develop Integrations or any queries related to them, feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you!
