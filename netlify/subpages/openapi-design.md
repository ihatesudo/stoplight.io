---
path: /openapi/design
tags:
  - 'OpenAPI'
  - 'design'
relatedTags:
  - 'design'
  - 'OpenAPI'
  - 'api types'
publishedDate:
title: OpenAPI Design & Specification
subtitle: >-
 Discussing API design, contract testing, and reference documentation using the OpenAPI specification standard.
color: indigo-darker
tabs:
  - href: /openapi
    title: What is OpenAPI?
actionBar:
  enabled: false
meta:
  description: >-
   Discussing API design, contract testing, and reference documentation using the OpenAPI specification standard.
  title: OpenAPI Specification & UI Standards | OpenAPI Designer & Editor
  twitter:
    description: >-
      Discussing API design, contract testing, and reference documentation using the OpenAPI specification standard.
    title: OpenAPI Specification & UI Standards | OpenAPI Designer & Editor
    username: '@stoplightio'
---

## Why Design an API with OpenAPI?

As the de facto standard for REST APIs, [OpenAPI](http://www.stoplight.io/openapi) (formerly known as Swagger) provides a human and machine-readable structure and syntax for defining your APIs that are easy to understand and supported by a range of software tools.

While in the past development teams tended to create an API specification document after the API had been built, in recent years there has been a shift towards design-driven development with OpenAPI being used to design the API upfront. This design-first approach has a number of advantages that can help teams deliver a better product more efficiently than an implementation-first method.

## Focus on the Product

Writing the API design document up-front allows teams to focus on the problem they’re trying to solve, free from the limitations of existing code or any particular framework. OpenAPI provides a simple, consistent structure for the API design, which is easy for non-technical stakeholders to comprehend, so teams can collaborate on meeting their users’ needs without getting caught up in the implementation details. Working out the design before implementation shortens the feedback loop during the design stage and ensures everyone understands the product’s use cases before development starts. The design document forms the single source of truth for all teams involved in the development phase.

## Loosely Coupled Systems

Starting the development of a system with the design of the API encourages teams to build a loosely coupled system. Rather than starting with a tightly integrated server and client implementation and adding the API later as an afterthought, beginning with API design means all client interfaces consume the same API. Not only is this approach more efficient, but it also ensures consistent functionality.

## Prototyping and Parallel Development

Although it’s possible to generate an OpenAPI-compliant definition for an existing API (the method often adopted with an implementation-first strategy), the machine readability of the design document provides several benefits when the document is written at the outset.

Generating a mock API server from an OpenAPI design document allows you to prototype the API before writing any code. Using a prototype to validate use cases and test with existing functionality shortens the feedback loop and helps ensure the team gets the design right from the beginning. By contrast, an implementation-first approach can result in multiple rewrites because feedback comes much later in the process.

Once the API design is agreed, front-end teams can test their code against a realistic test double without waiting for the backend team to build the real thing. This allows development teams to work in parallel, confident that they are all working to the same set of constraints, speeding up time to production. For projects that involve collaboration with external customers, agreeing the design first is far more efficient and makes for a smoother implementation process.

## Contract Testing with OpenAPI

With an implementation-first approach, the team responsible for maintaining the API needs to be strict about updating the API spec when modifying the code or fixing bugs to avoid introducing breaking changes that will impact the API consumers.

A design document provides a contract that consumers can rely on when developing applications that call the API. Front-end teams can write automated contract tests using the API definition document and mock API servers to test the integration between their application and the API, without any dependencies on the team responsible for building the API. Basing automated tests on the design document ensures that the teams relying on those tests are notified if changes are made to the API definition.

Similarly, if a team requires changes to the API design to accommodate a new use case, the definition document can form the basis of the discussion, with pull requests submitted against it rather than the implementation itself.

## Comprehensive Reference Documentation

Accurate documentation is essential for developers to be able to use your API, but very often it’s an afterthought, generated from comments in code of varying quality or thrown over the wall to the technical documentation team to glean what they can from the codebase. Designing your API with an OpenAPI-compliant definition prompts the team to include descriptions for all API endpoints, parameters, request data, response formats, and error messages. By generating documentation from the single source of truth, you can produce an accurate API reference at the outset to enable front-end teams to get started before the API itself is ready.

## Tools and Best Practices for API Design

As a machine-readable format, OpenAPI has given rise to a whole host of [open source tools](https://github.com/OAI/OpenAPI-Specification/blob/master/IMPLEMENTATIONS.md) for generating documentation, spinning up mock servers, and writing contract tests.

When it comes to writing an OpenAPI-compliant definition, options range from hand-crafting the document and running it through a validator to check for errors, to using a dedicated editor that facilitates the process of describing your API design. Whichever option you choose, it’s good practice to treat the design document like you would any other piece of code, using a version control system and inviting feedback using pull requests.

[Stoplight Studio’s](https://stoplight.io/studio/) intuitive UI for building and editing API design documents means you don’t need to be an expert to create an OpenAPI-compliant spec. Non-technical stakeholders, such as product owners and usability specialists, can contribute changes from the editor, which validates all contributions. Consistency can be enforced with the customizable style guide powered by [Spectral](https://stoplight.io/open-source/spectral/) and Git integration ensures a complete changelog.

Once published, keeping the design document up to date and sharing it with consumers, both internal and external, is essential. With design-driven API development, referring to and updating the design before implementing changes not only keeps it, and any documentation derived from it, current, but also avoids unintentional breaking changes being introduced. Teams both implementing or consuming the API can use tools such as [Prism](https://stoplight.io/open-source/prism/) to generate mock servers for prototyping and contract testing against the design document. Finally, integrating an API documentation tool into your CI/CD process ensures everyone has access to accurate reference documentation based on the OpenAPI description.
