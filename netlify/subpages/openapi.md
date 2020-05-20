---
path: /openapi
tags:
  - 'OpenAPI'
relatedTags:
  - 'soap'
  - 'xml-rpc'
  - 'json-rpc'
  - 'restful' 
  - 'api types'
publishedDate:
title: What is OpenAPI?
subtitle: >-
 Discussing the OpenAPI specification standard, what benefits OpenAPI provides to development, and what OpenAPI tools are available.  
color: indigo-darker
tabs:
  - href: /openapi/design
    title: OpenAPI Design
actionBar:
  enabled: false
meta:
  description: >-
   Discussing the OpenAPI specification standard, what benefits OpenAPI provides to development, and what OpenAPI tools are available.
  title: Open APIs | OpenAPI Definition & Online Tools | OpenAPI Guide
  twitter:
    description: >-
      Discussing the OpenAPI specification standard, what benefits OpenAPI provides to development, and what OpenAPI tools are available. 
    title: Open APIs | OpenAPI Definition & Online Tools | OpenAPI Guide
    username: '@stoplightio'
---

In the last few years, web API development has exploded, with over 2000 new APIs released on average each year [since 2015](https://www.programmableweb.com/news/apis-show-faster-growth-rate-2019-previous-years/research/2019/07/17). As the interfaces that enable applications to talk to each other over the internet, it’s no surprise that more and more developers are creating and consuming APIs. With high growth comes the need for standardization to keep developing and moving quickly.  The OpenAPI Specification provides that standardization with a structure and syntax for describing REST APIs that are both machine and human-readable.

Adopting the OpenAPI Specification means creating a document that defines your REST API in OpenAPI’s standard format. As an open source project that is language agnostic and vendor-neutral, the [OpenAPI specification](https://www.openapis.org/) has been widely adopted by the industry and is supported by a range of open source and proprietary tools.

## What are the Benefits of OpenAPI?

OpenAPI is known to many developers as a standard that enables API reference documentation to be generated automatically from the specification document. While accurate, comprehensive documentation is essential for any public API and for many internal APIs (particularly where multiple development teams rely on it). This is not the only benefit of the standard.

The OpenAPI standard encourages API developers to write the document at the outset, before writing any code, bringing huge benefits for [API design](https://stoplight.io/openapi/design). API consumers can create mock servers and write automated tests based on the document, speeding up the development process. As a structure that has been widely adopted by the industry, developers can get started with an API based on the OpenAPI standard with relative ease.

## Who’s using OpenAPI?

OpenAPI was first launched in its initial guise as the Swagger Specification in 2011 and since then it’s been adopted by leading technology companies and start-ups alike. In 2015 the OpenAPI Initiative, formed of companies that wanted a standard format for describing APIs, took over the specification, and version 3.0 was released in 2017.

While many organizations use OpenAPI specifications for their private APIs, technology companies are also turning to the standard for their public web APIs, making it easier for developers to build apps that integrate with their platforms. Twitter’s developer platform includes a number of public APIs, defined using OpenAPI, to enable third-party applications and websites to integrate with the social media platform. E-commerce site eBay uses the OpenAPI specification for its public-facing REST APIs and provides API contracts to facilitate integration tests for developers building applications that consume the eBay APIs.

## What does an OpenAPI document look like?

A document written to the OpenAPI specification can be written in either JSON or YAML, and consists of three main parts:

- Meta information, including the title, version, and description of the API, authentication method, and location of the API servers.
- The available endpoints (i.e. paths appended to the server URL) and the HTTP methods they support. For each method, any parameters that may or must be included in the request and the response formats for the possible HTTP response codes are specified.
- Reusable components that can be used across multiple endpoints in the API, such as common request parameters and response formats.

For a comprehensive list of all supported elements, have a look at the [full OpenAPI specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md).

## What tools are available for OpenAPI?

An ecosystem of open source and proprietary software has developed around OpenAPI to leverage the machine-readable format of OpenAPI documents. These include tools for generating API reference documentation, creating mock servers, and defining API contracts for automated integration tests, together with validators and linters to ensure specifications adhere to the OpenAPI structure and syntax.

[Stoplight Studio](https://stoplight.io/studio/), a free OpenAPI editor, makes it easy to get started with OpenAPI. The intuitive UI guides you through the process so you don’t have to be an expert to create an OpenAPI-compliant design, while the source view gives experienced developers the freedom to code directly with the support of automated validation and linting from [Spectral](https://stoplight.io/open-source/spectral/). With [Prism](https://stoplight.io/open-source/prism/), you can generate mock servers from your OpenAPI spec to prototype your design or to run integration tests. A full list of open-source tools that implement the OpenAPI specification is provided on the [OpenAPI Github project](https://github.com/OAI/OpenAPI-Specification/blob/master/IMPLEMENTATIONS.md).
