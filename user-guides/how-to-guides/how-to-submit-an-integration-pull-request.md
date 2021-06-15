---
description: >-
  Step-by-step guide on the different repositories that you need to submit a PR
  to, when creating a new integration.
---

# How to Submit an Integration Pull Request

When contributing to our open-source code by creating your own RudderStack integration, this guide will help you ensure that you have completed the required steps. It will also help you make sure that your integration code will fit with our pre-existing code base without any issues.

For your integration to be reviewed and considered, there are three repositories that you must contribute to:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Repository</b>
      </th>
      <th style="text-align:left"><b>Link</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p>RudderStack Transformer
          <br />
        </p>
        <p><b><code>rudder-transformer</code></b>
        </p>
      </td>
      <td style="text-align:left">
        <p></p>
        <p><a href="https://github.com/rudderlabs/rudder-transformer"><b>GitHub Repo</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left">Responsible for transforming the standard RudderStack payload from the
        source into the required payload format needed for a given downstream destination.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>RudderStack Config Generator</p>
        <p></p>
        <p><b><code>config-generator</code></b>
        </p>
      </td>
      <td style="text-align:left">
        <p></p>
        <p><a href="https://github.com/rudderlabs/config-generator"><b>GitHub Repo</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left">Responsible for gathering the required configuration details that will
        be specific to each user, i.e. API keys, event mappings, metrics, etc.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>RudderStack Documentation</p>
        <p></p>
        <p><b><code>rudderstack-docs</code></b>
        </p>
      </td>
      <td style="text-align:left">
        <p></p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="https://github.com/rudderlabs/rudderstack-docs"><b>GitHub Repo</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left">Includes the relevant instructions on setting up, configuring, and using
        the integration you have created.</td>
    </tr>
  </tbody>
</table>

## Creating a Pull Request

For each of the three repositories listed above, it is necessary to fork each one and clone them to your local machine. Ensure that you are updating your local repositories regularly to limit any merge conflicts. It is important to create a branch with a descriptive name and ensure that your commit messages are clear. 

When you are ready to create a pull request, follow the steps below:

1. Push your changes to your remote origin.
2. Then, go to the RudderStack's repository and click on **New pull request**.
3. Click the link the says **Compare across forks**.
4. Change the **Head Repository** to be your forked repository and change **Compare** to be the associated branch name.
5. Make any necessary title or descriptions changes. Add any tags such as WIP \(work in progress\), etc. to help add clarity on what is needed.
6. Finally, click on **Create pull request**.

{% hint style="success" %}
Repeat the steps above for each of the repositories - **`rudder-transformer`**, **`config-generator`**, and **`rudderstack-docs`**`.`
{% endhint %}

## RudderStack Contributor Agreement

{% hint style="warning" %}
To contribute to this project, we need you to sign to [**Contributor License Agreement \(“CLA”\)**](https://rudderlabs.wufoo.com/forms/rudderlabs-contributor-license-agreement) for the first commit you make. By agreeing to the [**CLA**](https://rudderlabs.wufoo.com/forms/rudderlabs-contributor-license-agreement), ****we can add you to list of approved contributors and review the changes proposed by you.
{% endhint %}

## RudderStack Transformer

[**GitHub Repository Link**](https://github.com/rudderlabs/rudder-transformer)\*\*\*\*

The `rudder-transformer` repository is responsible for transforming __the source payload into the required payload for the downstream destination. This is where the bulk of the code will need to be written. Therefore, the following should be considered when contributing to this repository.

* There is a big emphasis on formatting the code to match current project structure. If there are any questions or issues regarding this, reach out to our team; see [**Contact Us**](https://docs.rudderstack.com/user-guides/how-to-guides/how-to-submit-an-integration-pull-request#contact-us) section below.
* Include any `eslint` logic in the top of the file.
* Include test cases that cover around 80% code coverage.

## RudderStack Config Generator

[**GitHub Repository Link**](https://github.com/rudderlabs/config-generator)\*\*\*\*

The `config-generator` repository allows the user to upload the necessary settings needed for configuring the integration. Follow the pre-existing structure to the best of your ability and please reach out to us via the [**Contact Us**](https://docs.rudderstack.com/user-guides/how-to-guides/how-to-submit-an-integration-pull-request#contact-us) ****section with any questions or concerns. 

Please note the following when creating the config generator:

* Documentation should be in `.md` format
* Include proper `regex` validation rules for all of the text input fields.
* The Icon file must be an `svg`.

## RudderStack Documentation

[**GitHub Repository Link**](https://github.com/rudderlabs/rudderstack-docs)\*\*\*\*

The `rudderstack-docs` repository houses all the relevant documentation for instructing the users on using the integration you have created. Remember to be thorough with your documentation to avoid confusion and any errors. Although we will review the documentation and get in touch with you in case of any clarification, it will certainly be very helpful to ensure clear, concise steps on setting up, configuring, and using your integration.

{% hint style="warning" %}
Please do not include any of your screenshots. We will include them after merging the changes.
{% endhint %}

## Contact Us

For more information on any of the sections in this guide, feel free to [**contact us**](mailto:%20docs@rudderstack.com) ****or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

