---
path: /blog/API-development-demystified
tags:
  - blog
  - blog-general
  - blog-design
relatedTags:
  - blog-general
  - blog-design
publishedDate: 2020-01-27
author: Adam DuVander
title: >-
  API Development Demystified
subtitle: >-
  A Real-World Look at Building Great APIs
image: /images/sasha-stories-unsplash-resized.png
includeToc: false
actionBar:
  enabled: false
meta:
  url: https://stoplight.io/blog/api-development-demystified/
  description: >-
    In this post, we’ll look at the benefits of a forward-thinking API approach and how it is impacted across the full lifecycle.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    API Development Demystified
  image: /images/sasha-stories-unsplash-resized.png
  twitter:
    title: >-
      Stoplight Blog: API Development Demystified
    image: /images/sasha-stories-unsplash-resized.png
    username: '@stoplightio'
---

It’s clear that APIs are an important part of modern software. Companies frequently develop APIs to share data, functionality, and business processes. However, it’s not always clear where the backend API development ends and work begins on the website, app, or other clients to use the API.

In fact, the most efficient organizations don’t require such a distinct hand-off. When your APIs are built thoughtfully, teams can work in parallel. In this post, we’ll look at the benefits of a forward-thinking API approach and how it is impacted across the full lifecycle.

## Why Build APIs?

It’s important to remember the benefits that APIs provide for enterprises. The alternative is large, all-knowing applications, which are slow to develop. In many cases, teams duplicate efforts, because there is not a method to communicate that a problem has already been solved elsewhere. This lack of knowledge limits a company’s ability to work with external parties, as well.

APIs enable collaboration at all levels. A simple example is the interaction between frontend and backend teams. With an interface defined, neither team needs to wait on the other’s work. Rather than sequential efforts, they can work simultaneously. And, in true collaboration, the process can be iterative, sharing what they’ve learned to inform the next version. The same approach works within departments, across business units, and with partner companies.

You can also stop reinventing the wheel. When an API already exists, teams can build upon others’ work. For example, an API to access a customer’s account details could be useful for a website, a mobile app, and many other consumers. With appropriate permissions controls in place, the same API could even be used in a partner’s application.

Indeed, empowering partnerships is a major benefit to public APIs. However, internal API development can even enable external collaboration. Once you make internal teams aware of an API, they may see opportunities with partner companies.

## The API Lifecycle

Depending on the terminology you use, API development may refer to the entire lifecycle of an API or one phase within it. Either way, you’ll want to understand each phase and how they work together. While APIs help you move faster as an organization, that doesn’t mean you should create APIs without a thoughtful process. Plus, even hurried APIs will go through the API lifecycle, possibly with more headaches along the way.

<img src="/images/api-lifecycle.png" alt="API Lifecycle"
title="API Lifecycle" style="box-shadow: none; background-color: transparent"/>

Gartner defines the API development process as three major phases: Design, Build, and Run. Too often, teams will think of API development as only the build phase. It’s a natural misconception because that’s when the bulk of the code is written. However, that skips over the important design phase. There’s a lot more than code that goes into developing an API for the long term.

As discussed in [testing across your API lifecycle](https://stoplight.io/blog/api-integration-testing/), there are three other important phases: Maintain, Support, and Update. While not necessarily sequential, every API will need these additional phases after it is pushed to production.

As you look to update an API, you end up back where any API development should start: with API design.

## Design-First API Development

In the [API design guide](https://stoplight.io/api-design-guide/basics/) we discuss the “design-second oxymoron.” It’s during the design phase that important decisions are made about how your API works and what it makes possible. Good API development practices will start with a collaborative design phase.

When designing an API, you’ll need to keep teams on the same page about the decisions you make. The industry has rallied around the OpenAPI specification as a way to detail REST APIs. Sometimes referred to by the outdated term Swagger, OpenAPI is a document format to describe API endpoints and their related data.

![Stoplight Studio](/images/studio/hero.png)

[Stoplight Studio](https://stoplight.io/studio/) is a visual API design editor, which helps you quickly produce OpenAPI documents without memorizing syntax or writing any code. By describing an API during the design phase, teams can make important decisions about reusable data models, which HTTP methods to support, and how to handle error conditions.

OpenAPI is a machine-readable format that can help you in the later phases of your API development, as well. As you build your API, you can [generate mock servers](https://stoplight.io/p/docs/gh/stoplightio/prism/docs/guides/01-mocking.md) using your OpenAPI document as the source of truth for decisions made during design. These definitions can also create documentation and serve as a central object when discussing updates to your APIs.

[Get started with API design](https://stoplight.io/studio/) and create your first OpenAPI document or start with an existing repository. You’ll build and run better APIs as a result.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@sanfrancisco?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Sasha • Stories"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Photo by Sasha • Stories</span></a>

---
