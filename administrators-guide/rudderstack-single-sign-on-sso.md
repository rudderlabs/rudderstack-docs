---
description: Step-by-step guide to setting up the RudderStack SSO feature.
---

# RudderStack Single Sign-On \(SSO\)

The [RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial) now allows you to log in with SSO. This document lists the steps to follow in order to configure the SSO \(Single Sign-On\) feature.

## Configuring SSO

* Navigate to your OneLogin administration page after logging in:

![OneLogin Administration Page](../.gitbook/assets/1%20%2811%29.png)

* From the top menu, choose **Applications** - **Applications**, as shown:

![Application Tab in OneLogin](../.gitbook/assets/2%20%286%29.png)

* Click the **Add App** button in the top-right hand corner, as shown:

![Add App Option in OneLogin](../.gitbook/assets/3.png)

* Search and select **RudderStack**.

![](../.gitbook/assets/image%20%2875%29.png)

* Then, click the **Save** button in the top-right corner, as shown:

![](../.gitbook/assets/4%20%284%29.png)

* Choose **Configuration** from the menu on the left, as shown:

![Configuration Menu](../.gitbook/assets/image%20%2859%29.png)

* Provide a login URL in the following format:**`https://auth.rudderstack.com/v1/start_sso?domain=example.com`** . Here, replace **`example.com`** with the domain you use for your employee email addresses. For example, if your employee email address is **`john@mywebsite.com`**, enter **`mywebsite.com`**.
* Click on **Save** in the top right corner as shown above.
* Then, click on the **SSO** option in the menu on the left.

{% hint style="success" %}
This **SSO** section contains information which you will be required to share with us so that we can enable the SSO for your organization.
{% endhint %}

* Retrieve the contents of the following two data fields:
  * **Issuer URL**
  * **SAML 2.0 Endpoint \(HTTP\)**
* Now, look for the field **X.509 Certificate** and click on **View Details** underneath, as shown:

![X.509 Certificate Option](../.gitbook/assets/image%20%2835%29.png)

* Retrieve the certificate by clicking on **Download**. It should start with **`-----BEGIN CERTIFICATE-----`** and end with **`-----END CERTIFICATE-----`** , as shown:

![](../.gitbook/assets/5%20%288%29.png)

* Please share the **Issuer URL**, **SAML 2.0 Endpoint \(HTTP\)** and **X.509 Certificate** with us. We will then enable SSO for your organization and get back to you.

## Contact Us

If you need more clarity in following any of the steps in the guide, please feel free to [contact us](mailto:%20contact@rudderstack.com) or start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.

