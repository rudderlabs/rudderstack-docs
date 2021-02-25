---
description: Step-by-step guide to ingest event data from PostHog into RudderStack
---

# PostHog

[PostHog](https://posthog.com/) is a complete product analytics stack that you can seamlessly deploy on your infrastructure. Built for both data analysts and managers, PostHog gives you easy access to product analytics which you can perform at scale. It also gives you full control over all your user data.

RudderStack now supports PostHog as an Event Streams source. We've built a[ RudderStack PostHog plugin](https://github.com/rudderlabs/rudderstack-posthog-plugin) that lets you send events from your PostHog instance to RudderStack.

## ‌Getting Started

In order to add PostHog as a source in RudderStack, please follow these steps:

* Log into your[ RudderStack dashboard](https://app.rudderlabs.com/signup?type=freetrial).
* From the left panel, select Sources. Then, click on **Add Source**, as shown:

![](https://lh3.googleusercontent.com/btm9bvnoW8qs7XZXIfuQzmlaQPcD_JLg8y4ZdorBviunWfN_U9hk6WpYPQ-kp4HwCy6kJBvW60ygQHZznLkFVB-vQc7rGYlYrRMAzbpnBgLgJD9S3_pYoicqo40jLQs-YrHYNT5L)

* From the list of sources, select **PostHog**.

![](https://lh3.googleusercontent.com/14nVKvM9SPVw14PzhFiSOIeEYzrNx4q1B6peEJSgkATHvnIbL3HB1GhamZ7D67IbGjDuXHqo9OcAR45THgz5TKKaszxAcv2sIccXRSBTlRi2KtUO1P0NTMwfmAgPN_h-wTJdBLOo)

* Enter the name of your source, and click on **Next**.

![](https://lh6.googleusercontent.com/75vmkKpFW__QIMSJzvmeHAPJCd0pDQirRKqVPTNaD8I6e2kpExhzBt-tXikuLkbMaLtXOhPS_7VPG1GsU3a-mSOAlv4-qMVr0EzxKUpoZAbPyIdcagZlbBEymNfIlr4FdW34UcR6)

* In the **Connection Settings** screen, enter your PostHog credentials and complete the source configuration. Once you've successfully set up the source, you should see the following screen:

![](https://lh6.googleusercontent.com/5CFx_A3Y22COve2AV4VlCGCce72Zgxk-CJpmF3JQhWFP0_9kc61JxBY4xETvocm5cuU17TqTCF0KgqW_SNQ2U6pI02Lj8np_RDN1Omwp1gjq4Ckuk6_ZYVmczIg28W_E5Tj6NUQQ)

## Setting up the RudderStack PostHog plugin

Once you've successfully set up PostHog as a source on the RudderStack dashboard, follow these steps to configure and set up the[ RudderStack PostHog plugin](https://github.com/rudderlabs/rudderstack-posthog-plugin) which allows you to ingest PostHog data into RudderStack:

* Get your PostHog source **Write Key** and your RudderStack server URL \(also called as **Data Plane URL**\).

![](https://lh3.googleusercontent.com/LHvXgYmzGup4gJyoF9XxWa-T4qOZVl0-dxcDJJwzS2RD9_lYzKcua7s-n2CvxSFXPvTNdloOgCl4HtKPfD5gFKdzqoVv3fus9DJyj-5n_OSk_LRKPc1mF3wpawWQ4NuwQw8g8SvA)

![](https://lh6.googleusercontent.com/NRC7NyzhAOAz7MZaZ5BMmCulMMxgtebMEzmviCpk32WKzBLwNU-amEzwVqNlwla1htHKdi9yGZGBDXi8wfLLr31Hi977GVNTuBcigN-des0agnYgA2Iz5WjS_gwUCCMQQDlefupA)

* Copy the[ RudderStack-PostHog Plugin repository URL](https://github.com/rudderlabs/rudderstack-posthog-plugin).
* Go to your PostHog dashboard, and add a custom plugin using this URL, as shown:

![](https://lh6.googleusercontent.com/p1bRif3M9QbNEecaXtsjHhgUgn7Oy-CBbjyd6TfaTFaOjOutKy-_Dkzrne8NqqD4i8HbrImjfX7Q-le1yDOfTusuw4nbyj6frrvl4SsDngsAoFtDMPj-1xl_r1XfsJ69KvjGVcPt)

* Once added successfully, configure this plugin using the source write key and RudderStack server URL that you copied above. The default RudderStack server URL is configured to[ https://hosted.rudderlabs.com/v1/batch](https://hosted.rudderlabs.com/v1/batch). Append **`v1/batch`** to this URL, as shown:

![](https://lh4.googleusercontent.com/39z8-W6pm_ly0lgyoek5ywofd2qtGp3-fl3BfXnuQFoqEfEWv0_ytHMxKiTMjGjB5Sceqr_ksSfarQHfZIIzpMHK4eOe64fI-xp3JGM6_-o6xWp7_Os2kO0q7Ochh6PiV2gy6CjJ)

* Finally, enable this plugin. You should now start to see the events sent to your PostHog instance flowing to this RudderStack source.

## License

The RudderStack PostHog Plugin is released under the[ MIT License](https://opensource.org/licenses/MIT).

## Contact Us

If you come across any issues while configuring PostHog as an Event Stream source with RudderStack, please feel free to contact us. You can also start a conversation on our[ Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel - we will be happy to talk to you!  


