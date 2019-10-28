---
path: /blog/studio-webinar-q-a
tags:
  - blog
  - blog-design
  - blog-general
  - blog-studio
relatedTags:
  - blog-design
  - blog-studio
publishedDate: 2019-10-28T22:15:58.693Z
author: Chris Lott
title: Using Studio OpenAPI GUI Designer - Your Webinar Questions Answered
subtitle: >-
  Answers to your questions that we weren't able to cover in our live webinar
  earlier this month.
listSubtitle: >-
  Answers to your questions from the October '19 Webinar on Stoplight Studio
  OpenAPI GUI Designer.
image: /images/studio-desktop.png
color: blue-darkest
tabs: []
includeToc: true
actionBar:
  ctas: []
  enabled: false
meta:
  description: >-
    Answers to your questions from the October '19 Webinar on Stoplight Studio
    OpenAPI GUI Designer.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Using Studio OpenAPI GUI Designer - Your Webinar Questions Answered
  image: /images/studio-desktop.png
  twitter:
    description: >-
      Answers to your questions from the October '19 Webinar on Stoplight Studio
      OpenAPI GUI Designer.
    title: Using Studio OpenAPI GUI Designer - Your Webinar Questions Answered
    image: /images/studio-desktop.png
    username: '@stoplightio'
---
At the beginning of October, the Stoplight team hosted a webinar covering Stoplight Studio, the latest generation of our OpenAPI GUI designer. If you haven't already, you can [watch it here](https://stoplight.io/video/studio-webinar).

Some attendee questions were answered live, but time ran too short to answer everything. Here are some answers to your questions that we weren't able to cover live. 

## Is there a way to extend the mock server with custom steps?

You sent in feedback that Prism v2 was a bit confusing. With  help and input from Prism users, we’ve stripped it back and are planning out features.

The Proxy Server should hopefully solve most of the contract testing needs: <https://github.com/stoplightio/prism/issues/473>

And figuring out how custom middlewares can be enabled should also solve many customization needs: <https://github.com/stoplightio/prism/issues/435>

As for other more general testing, there are tools designed for that sort of thing, which are pretty great, like Strest. <https://github.com/eykrehbein/strest>

## In the previous generation of Stoplight, I can export an API with resolved references. Do you plan to support this feature in Studio as well?

Absolutely! At the time of publishing this piece, it's a planned item on our roadmap. [Click here to vote for it](https://bit.ly/2pU1PFc).  More votes = higher priority for our product team. Keep an eye on our roadmap and change log to stay informed on features as they're released. 

## Do you have any recommendations for Code Gen? Both Swagger API Gen and OpenAPI Spec Generator “kinda” work, but in different ways.

There are quite a few floating around, check out OpenAPI.Tools <https://openapi.tools/#sdk>

## Do you have a recommendation for keeping endpoint documentation “close” to the codebase so that the docs and implementation don’t get out of sync, without lots of developer overhead?

There are a few ways you can go about this. One is to implement tooling which double-checks your docs, things like Dredd can help: <https://apisyouwonthate.com/blog/keeping-documentation-honest>

This is less popular these days, and many folks just use their API Descriptions for contract testing responses: <https://apisyouwonthate.com/blog/writing-documentation-via-contract-testing>

You can also use your descriptions as server-side validation: <https://www.apisyouwonthate.com/blog/server-side-validation-with-api-descriptions/>

## We are adding documentation to existing JSON APIs that we pull from AWS API Gateway. Can we use JSON instead of YAML for adding documentation?

The API Reference Documentation is automatically built from your API description documents, so you just write OpenAPI v2/v3 in YAML or JSON, and when you publish, you’ll have docs. 

The demo was showing off the markdown articles, which can have code samples and embed Try it Now, but those are more for showing off workflows or more tailored Guides. 

Check it out: <https://stoplight.io/docs/>

## What is the pricing model for the Studio OpenAPI Designer? Currently it’s free, but probably not forever?

Stand-alone Studio is free, forever! Our paid Platform incorporates Studio with other tools, and unlocks the collaboration and governance that companies typically need. That being said, if the free Studio designer plan meets your company's needs, you're welcome to use it.



Still have questions? We're here to help!

* [Add a feature request to our roadmap](https://stoplight.io/p/roadmap) - other users can upvote your requests, which helps us maintain user-driven development.
* Check out our [Community Forum](https://community.stoplight.io) - the same question might have already been asked, or could benefit future users down the line.
* [Visit our support page](https://support.stoplight.io).
