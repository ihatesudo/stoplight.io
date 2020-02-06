---
path: /blog/REST-API-standards-do-they-even-exist
tags:
  - blog
  - blog-general
  - blog-design
relatedTags:
  - blog-general
  - blog-design
publishedDate: 2020-01-22
author: Adam DuVander
title: >-
  REST API Standards: Do They Even Exist?
subtitle: >-
  A Look at API Architecture and Best Practices
image: /images/mendar-bouchali-dragon-unsplash.png
includeToc: false
actionBar:
  enabled: false
meta:
  description: >-
    In this post, we’ll cover the REST architectural style (REST is not a standard), some REST API design conventions, and introduce a standard related to REST that can bring a standard-like rigor to your APIs.
  url: https://stoplight.io/blog/REST-API-standards-do-they-even-exist/
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    REST API Standards: Do They Even Exist?
  image: /images/mendar-bouchali-dragon-unsplash.png
  twitter:
    title: >-
      Stoplight Blog: REST API Standards: Do They Even Exist?
    image: /images/mendar-bouchali-dragon-unsplash.png
    username: '@stoplightio'
---

REST APIs are the primary form of web services, used widely to power websites, mobile applications, and most enterprise integrations. For a technology that is so ubiquitous, there is still confusion around REST standards. Compared to the previous generation of web services, namely SOAP, there is much more flexibility with how companies approach REST. However, there are still best practices and guidelines to consider.

In this post, we’ll cover the REST architectural style (REST is not a standard), some REST API design conventions, and introduce a standard related to REST that can bring a standard-like rigor to your APIs.

## REST is an Architecture, Not a Standard

REST, which stands for REpresentational State Transfer, was introduced by Roy Fielding in his 2000 dissertation. While Fielding described REST outside of HTTP, it was developed alongside the protocol and is most commonly used over HTTP. While HTTP is a standard, REST itself is not. Rather, it’s an architectural style that provides constraints which guide API design.

Many APIs do not conform to every element of REST, which has caused some to use the term RESTful or even HTTP APIs to describe the most common types of APIs. Commonly-adopted principles of REST include:

- **Client-server separation**: the client determines how responses are displayed to the user, allowing the server to parse the request and produce the response.
- **Stateless requests**: the server does not have to store any context between requests—everything needed is within each request.
- **Resource identifiers**: the interface is designed around resources that are identified by URLs.

These criteria are present in most modern REST APIs. You can read more details in [the dissertation](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm), but we’ll focus in the next sections on practical applications of REST in API design.

## REST API Design Guidelines and Conventions

While REST is not a standard, there are some guidelines and conventions that have been widely adopted. These include building atop HTTP’s standards, naming resources as nouns, and popular data formats.

### HTTP Methods

Web developers are likely familiar with GET and POST, along with the other HTTP methods, also sometimes called HTTP verbs. These methods define the type of request being made to a REST API.

Common HTTP methods include:

- **GET**: retrieve data, the equivalent to a [read in CRUD APIs](https://stoplight.io/blog/crud-api-design/)
- **POST**: add _new_ data
- **PUT**: update existing data
- **PATCH**: update a _subset_ of existing data
- **DELETE**: remove data

While there are other methods, they are rarely seen in REST APIs. The method itself does not mean much without the target, the resource.

### Resource Names

Resources are sometimes referred to as the nouns that the HTTP verbs act upon. Earlier web services were built around remote procedure calls, which saw APIs as extensions of the code that called them. By contrast, REST resources can be accessed with multiple HTTP methods, which makes them less analogous to a procedure call.

For example, if your API stored animals, a resource name might be “animals.” And the path to access that resource might be `/api/animals`. The resource would then be combined with HTTP methods like so:

- `GET /api/animals`: retrieve a list of animals
- `POST /api/animals`: add a new animal
- `GET /api/animals/cat`: retrieve a single animal by ID
- `PUT /api/animals/cat`: update a single animal by ID
- `DELETE /api/animals/cat`: delete an animal by ID

Identifiers might be integers, hashes, or other value that is auto-generated. Whether resources are plural or singular is a matter of preference (and hotly debated). Most importantly, remain consistent within your API and across multiple APIs in the same organization.

For more on resources and HTTP methods, see the [API design walkthrough](https://stoplight.io/blog/api-design-example/).

### Data Formats

Most API requests will return content from the server that the client needs to interpret. Rarely is this content plain text—usually, it will use a particular format. While REST does not define any data formats, JSON and XML are the two most common.

A single result in JSON might look like this:

```
{
  "id": "cat",
  "name": "House cat",
  "genus": "Felis",
  "img": "https://cdn2.thecatapi.com/images/MTYxNTQ5Mg.jpg"
}
```

While the same data in XML could be represented like this:

```
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <id>cat</id>
  <name>House cat</name>
  <genus>Felis</genus>
  <img>https://cdn2.thecatapi.com/images/MTYxNTQ5Mg.jpg</img>
</root>
```

Similar structures would be used in the body of requests when passing data, such as with POST, PUT, or PATCH requests. Typically, request and response bodies use the same data format.

Other common formats include: CSV, HTML, RSS, and YAML.

### HTTP Statuses

Since REST APIs depend upon HTTP standards, each request’s status is used to communicate the result of the request, such as success or failure. Each status code provides a machine-readable response, plus a human-readable message. Web developers (and a number of users) will be familiar with many of these.

- **200**: Success
- **201**: Created
- **404**: Not found
- **401**: Unauthorized
- **403**: Forbidden
- **429**: Too many requests

There are more, of course, including 300-level redirection and 500-level server errors. You’ll want to use the right status code for the appropriate situation as you design your REST API.

<div class="convertful-26074"></div>

## OpenAPI Lets You Set Your Own “Standard”

While REST is not a standard, there are many other standards often associated with REST. For example, OAuth covers third-party authorization for resources and JSON PATCH describes a standard approach to the HTTP PATCH method for the JSON data format. An important standard as you design your own APIs is the OpenAPI specification.

OpenAPI is a standard to describe REST APIs and it allows you to declare your API security method, endpoints, request/response data, and HTTP status messages. Together, these define decisions about your own API. These are useful during the design phase, but can also be useful throughout the API lifecycle.

[Create OpenAPI documents now](https://stoplight.io/studio/) using a visual editor, or bring in an existing repository. Help define the API standard for your organization to create consistent, developer-friendly APIs.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@mendarb?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free high-res photos from Mendar Bouchali"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Photo by Mendar Bouchali</span></a>

---
