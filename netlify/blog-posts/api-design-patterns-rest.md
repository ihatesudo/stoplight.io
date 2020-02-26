---
path: /blog/API-design-patterns-for-rest-web-services
tags:
  - blog
  - blog-general
  - blog-design 
relatedTags:
  - blog-general
  - blog-design
publishedDate: 2020-02-25
author: Adam DuVander
title: >-
  API Design Patterns for REST Web Services
subtitle: >-
  Best Practices for Designing and Developing RESTful APIs
image: /images/api-design-trees.png
includeToc: false
actionBar:
  enabled: true
meta:
  url: https://stoplight.io/blog/API-design-patterns-for-rest-web-services
  description: >-
    Best Practices for Designing and Developing RESTful APIs
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    API Design Patterns for REST Web Services
  image: /images/api-design-trees.png
  twitter:
    title: >-
      Stoplight Blog: API Design Patterns for REST Web Services
    image: /images/api-design-trees.png
    username: '@stoplightio'
---

REST turns 20 years old this year. In addition to the architecture and recommendations outlined in Roy Fielding’s dissertation, we now have two decades of practical application. When designing APIs, it makes sense to build upon the best practices already implemented by countless others.

This post identifies the most common REST API design patterns across several categories. Rather than start anew, build upon this foundation of API guidelines from thousands of successful API companies.

## HTTP Methods and Status Codes

By the strict definition of REST, you don’t need to use the HTTP protocol. However, the two developed alongside each other, and almost every RESTful API relies upon HTTP. For that reason, it makes sense to structure your API around the built-in methods and status codes that are already well-defined in HTTP.

Each HTTP request includes a method, sometimes called “HTTP verbs,” that provides a lot of context for each call. Here’s a look at the most common HTTP methods:

- **GET**: read data from your API
- **POST**: add _new data_ to your API
- **PUT**: update _existing data_ with your API
- **PATCH**: updates a _subset of existing data_ with your API
- **DELETE**: remove data (usually a single resource) from your API

As you design your API, you’ll want to rely on the methods to express the primary purpose of a call. For that reason, you don’t want to use a POST to simply retrieve data. Nor would you want a GET to create or remove data.

Much as these methods provide the request context from client to server, HTTP status codes help describe the response in the reverse direction.

Some common HTTP status codes include:

- **200**: Successful request, often a GET
- **201**: Successful request after a create, usually a POST
- **204**: Successful request with no content returned, usually a PUT or PATCH
- **301**: Permanently redirect to another endpoint
- **400**: Bad request (client should modify the request)
- **401**: Unauthorized, credentials not recognized  
- **403**: Forbidden, credentials accepted but don’t have permission
- **404**: Not found, the resource does not exist
- **410**: Gone, the resource previously existed but does not now
- **429**: Too many requests, used for rate limiting and should include retry headers
- **500**: Server error, generic and worth looking at other 500-level errors instead
- **503**: Service unavailable, another where retry headers are useful

There are many more HTTP status codes and methods to consider, but the above lists should get you well on your way for most APIs.

## Use Friendly Endpoint Names

A typical design pattern with REST APIs is to build your endpoints around resources. These are the “nouns” to HTTP method verbs. Your API design will be much easier to understand if these names are descriptive.

For example, if you’re working on a cookbook API, you might include the following endpoint:
`/recipes/`

As you add new recipes, you would POST them to the endpoint. To get a list, you use the GET method on the same endpoint. To retrieve a specific recipe, you could call it by its identifier in the URL:
`/recipes/42`

One thing to specifically avoid with friendly REST endpoint names is describing actions. For example, a verb within the endpoint (i.e., `/getRecipes/`) would run counter to relying on HTTP to provide that context.

Our [CRUD API Design Recommendations](https://stoplight.io/blog/crud-api-design/) goes into more detail, including popular topics like plurals and versioning.

## Support Use Cases with API Parameters

Naive or simplistic API design can follow all the guidelines above and still not support the use cases that developers will need. It’s important to thoroughly understand how an API will be used and get feedback from collaborators, such as with [mock API servers](https://stoplight.io/mocking).

Often, when use cases are discovered after an API is built, engineers will create new endpoints to support these unearthed requirements. For example, your cookbook API may need to return only recipes from a specific category, or you want to show the recipes with the least prep time. Rather than create redundant endpoints, plan for smart parameters from the start.

There are three common types of parameters to consider for your API:

- **Filtering**: Return only results that match a filter by using field names as parameters. For example: `/recipes/?category=Cookies`
- **Pagination**: Don’t overload clients and servers by providing everything. Instead, set a limit and provide `prev` and `next` links in your response. Example: `/recipes/?limit=100&page=3`
- **Sorting**: Provide a way to sort or some use cases will still require paging through all results to find what’s needed. Example: `/recipes/?sort=prep_time`

These three approaches can be used together to support very specific queries. For example, this API request would retrieve one cookie recipe with the shortest preparation time: `/recipes/?category=Cookies&sort=prep_time&limit=1`

In some cases, you’ll need additional parameters or a special syntax to fully support API consumer expectations. You will likely want to provide a sort direction (i.e., `order=desc` or `sort=prep_time:asc`), and may have times when you want to filter or sort by multiple fields. Understanding your use cases will help determine the complexity of your parameters.

## Borrow From Existing Conventions

While this post does its best to cover overall API design patterns, you’ll want to look at standards and conventions specific to your industry or a specific feature. Very few of us are building completely unique APIs, so there is a lot to learn from others.

[Many API standards](https://stoplight.io/blog/rest-api-standards-do-they-even-exist/) are built around REST APIs. When you implement authentication for your API, for example, don’t blaze a new trail. There are many options, including the well-trod OAuth path, when providing user-associated data. You’ll find standards for API headers and a handful around data formats like JSON and XML, among others.

You may be [designing microservices APIs](https://stoplight.io/blog/designing-apis-for-microservices/), which has its own set of considerations. Everything covered in this post likely still applies, but you’ll want to pay extra careful attention when designing microservices. Each will need to make sense on its own, yet benefit from a combination (loose coupling).

On the other hand, [open banking APIs](https://stoplight.io/blog/open-banking-guide/) require their own treatment. European standards are the most mature and have a set of design patterns based around those regulations.

Your industry may have its own set of standards or conventions. Even if they aren’t as strict as banking regulations, it’s worth giving proper consideration to a pattern with which developers will already be familiar.

## Document with An OpenAPI Definition

As you design your API, it will be extremely useful to maintain an OpenAPI definition as the source of truth. This format, the next generation of the older Swagger file, describes endpoints, request data, responses, error codes, and more. In addition, it can be used to automate with tooling across the API lifecycle.

Perhaps the most common use of an OpenAPI document is to [generate API documentation](https://stoplight.io/documentation/), especially an API reference. Since the format outlines the ways an API can be called, it contains all the information a developer needs to integrate with the API. Plus, some API references don’t include essential details like error codes, so OpenAPI encourages accurate documentation. Further, you can generate new docs every time your API changes, so they’ll always be up-to-date.

You can also use your OpenAPI definition to [create mock HTTP servers](https://stoplight.io/mocking/), which allows you to try out your API before you write any code. Circulate the interface amongst your team for early feedback, or validate the requests from your API client.

Those are just two potential uses for your machine-readable API definition, which you can create OpenAPI definition files using YAML or JSON. Or, create them much faster with a visual OpenAPI editor. [Stoplight Studio](https://stoplight.io/studio/) can read existing OpenAPI files from any git repo, and you can make edits—or start from scratch—within a beautiful editing environment.

## Use Style Guides for Consistency

Some design patterns are a matter of preference. Ideally, you can codify your organization’s approach once, rather than revisiting it each time you create an API. A style guide can keep your company on the same page with API design. In addition to being consistent between APIs, it’s even more important to maintain consistency within a single API.

Some organizations will create a written API style guide. A document that is easily accessible within your intranet helps everyone understand the design patterns you’ve already adopted. However, you can go even farther by enforcing your style guide programmatically. Using a tool like an [open source linter](https://stoplight.io/open-source/spectral), you can define rulesets for your OpenAPI documents.

When you [automate your API style guide](https://stoplight.io/blog/api-style-guide/), you can look for any number of API characteristics: resource and field names, capitalization formats, how you use punctuation, and versioning, among others.

Your style guide, whether written or programmatic, becomes your own guidelines for the design patterns covered here. Help ensure your organization uses HTTP methods correctly, returns appropriate status codes, implements friendly endpoint names, uses smart parameters, and borrows from the existing conventions you’ve already identified.

Now you’re ready to create fantastic APIs, so join the world’s leading API-first companies on [Stoplight’s API design management platform](https://stoplight.io/).

---
