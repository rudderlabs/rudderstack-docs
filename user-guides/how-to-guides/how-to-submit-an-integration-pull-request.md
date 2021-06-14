---
description: >-
  Step-by-step guide on the different repositories that need to have a pull
  request submitted to when creating an integration.
---

# How to Submit an Integration Pull Request

When contributing to our open source code by creating your own Integration to RudderStack, this guide will help make sure that you have completed the proper steps and that your integration code will fit with our pre-existing code base.

There are three repositories that you must contribute to in order for your integration to be reviewed and considered.

* RudderStack Transformer - `rudder-transformer` - [GitHub Repo](https://github.com/rudderlabs/rudder-transformer)
  * responsible for transforming the standard RudderStack payload from the source into the required formatted payload needed for a given downstream destination
* RudderStack Config Generator - `config-generator` - [GitHub Repo](https://github.com/rudderlabs/config-generator)
  * responsible for gathering the configuration details needed that will be specific from user to user i.e. API keys, event mappings, metrics, etc.
* RudderStack Documentation - `rudderstack-docs` - [GitHub Repo](https://github.com/rudderlabs/rudderstack-docs)
  * responsible for instructing how the user should set up, configure, and use the integration you create

## Creating a Pull Request

For each of the three repositories listed above, it is necessary to fork each one and clone them to your local machine. Ensure that you are updating your local repositories regularly to limit merge conflicts. It is important to create a branch with a descriptive name and also ensure that your commit messages are clear as well. When you are ready to create a pull request, follow the steps below.

1. Push your changes to your remote origin. 
2. Then go to RudderStack's repo and click `New pull request`
3. Click the link the says `compare across forks`
4. Change the `head repository` to be your forked repository and change the `compare` to be the associated branch name
5. Make any necessary title or descriptions changes. Add any tags such as WIP \(work in progress\), etc. to help add clarity on what is needed.
6. Click `Create pull request`

Repeat the steps above for each of the repositories - `rudder-transformer`, `config-generator`, and `rudderstack-docs`

## RudderStack Contributor Agreement

{% hint style="warning" %}
To contribute to this project, we need you to sign to [Contributor License Agreement \(“CLA”\)](https://rudderlabs.wufoo.com/forms/rudderlabs-contributor-license-agreement) for the first commit you make. By agreeing to the [CLA](https://rudderlabs.wufoo.com/forms/rudderlabs-contributor-license-agreement) we can add you to list of approved contributors and review the changes proposed by you.
{% endhint %}

## RudderStack Transformer

[GitHub Repository Link](https://github.com/rudderlabs/rudder-transformer)

The `rudder-transformer` repository is responsible for _transforming_ the payload from the source to the required payload for the downstream destination. This is where the bulk of the code will need to be written. Therefore, the following should be considered when contributing to this repository.

* There is a big emphasis on formatting the code to match current project structure. If there are any questions or issues regarding this, reach out to our team; see **Contact Us** section below.
* Include any `eslint` logic in the top of the file.
* Include test cases that cover around 80% code coverage.

## RudderStack Config Generator

[GitHub Repository Link](https://github.com/rudderlabs/config-generator)

The `config-generator` repository is responsible for allowing the user to upload the necessary settings needed for configuring the integration. Follow the pre-existing structure to the best of your ability and please reach out to us via the **Contact Us** section with any questions or concerns. The following notes should be considered when creating the config generator.

* Documentation should be in `.md` format
* Include proper `regex` validation rules for all of the text input fields
* The Icon file must be an `svg`

## RudderStack Documentation

[GitHub Repository Link](https://github.com/rudderlabs/rudderstack-docs)

The `rudderstack-docs` repository is responsible for instructing users on how to use the integration you are creating. Remember to be thorough and clear with your documentation to avoid user confusion and errors. Note the following while contributing to this repository.

* Do not include any of your screenshots. We will include them after the changes have been merged.

## Contact Us

For more information on any of the sections in this guide, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel, we will be happy to help you.

