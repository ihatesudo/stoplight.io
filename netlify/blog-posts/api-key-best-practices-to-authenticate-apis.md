---
path: /blog/API-keys-best-practices-to-authenticate-apis
tags:
  - blog
  - blog-general
  - blog-design
relatedTags:
  - blog-general
  - blog-design
publishedDate: 2020-03-25
author: Maggie Summers
title: >-
  API Keys: Best Practices to Authenticate APIs
subtitle: >-
  When and Where to Use API Keys
image: /images/api-key-best-practices.jpg
includeToc: true
actionBar:
  enabled: false
meta:
  url: https://stoplight.io/blog/API-keys-best-practices-to-authenticate-apis/
  description: >-
    When and Where to Use API Keys
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    API Keys: Best Practices to Authenticate APIs
  image: /images/api-key-best-practices.jpg
  twitter:
    title: >-
      Stoplight Blog: API Keys: Best Practices to Authenticate APIs
    image: /images/api-key-best-practices.jpg
    username: '@stoplightio'
---


"How am I going to keep this secure?" is a crucial question when building any piece of software. This question is especially critical for APIs, which provide programmatic access to important systems. Authentication shouldn't be an afterthought but rather built into the very fabric of your API.

Simply put, authentication is the act of verifying that you are who you claim to be. Think of it as needing a key to open a locked house. The key confirms who you are and grants you access to what's inside.  

There are many methods of API authentication, such as basic auth (username and password) and OAuth (a standard for accessing user permissions without a password). In this post, we'll cover an old favorite, the API Key.

Many early APIs used API Keys, which were often an improvement on passing other credentials in code. There are drawbacks to API Keys, but it's also a simple way to secure access. However, not everyone agrees on how to pass keys to an API. We'll cover that, as well as some examples. But first, why would you want—or not want—to choose API authentication?

## Pros and Cons of API Key Authentication

Like most topics, you'll find varying opinions about using API key authentication over other authentication methods. It remains a popular method, though developers should be aware of the tradeoffs.

One of the clear advantages of using API key authentication is its inherent simplicity. It's a single key that allows you to authenticate just by including the key. This simplicity also allows a user to make calls easily, with cURL, interactive docs, or even in their browser.

Another advantage comes along with its popularity. Developers are familiar with API keys. The easier and quicker it is to authenticate to your API, the more likely the developer will find success. Whether that developer is within your own company or an external partner, you want your API to be easy to use.

On the other hand, simplicity may raise security concerns. What happens if someone else comes upon an API key that is not their own? In most cases, they can use the API key with all the privileges of the rightful owner. Depending on the API, they may be able to retrieve all the data, add incorrect content, or delete everything.

One precaution that some API designers take is to use API keys for read-only data. For APIs that don't need write permissions, this is especially useful, while limiting risk. However, this approach limits the APIs that may require more granular permissions.

API keys may not be the best choice for accessing user-specific data, especially when the credentials also give write permissions. API key authentication is just that, a method for authentication; *not* of authorization (though sometimes it's used this way). OAuth is a better choice for authorizing levels of access. If end users grant permissions, OAuth is the only modern approach, as it does not require a user to copy and paste a strange looking token.

However, many use cases remain that make sense for the simplicity of API keys. And there are several places where API keys may be passed during your API design.

## X-API-Key and Other HTTP Headers

The most popular API key location for modern APIs is in headers. However, that's not enough information. It raises the question, "_Where_ in the headers should you include the API key?" There are many ways to include API keys in an HTTP header.

Before we show the various choices, an important note: as with all API requests, use HTTPS (TLS, the successor to SSL) to ensure the data is encrypted in transit.

### x-api-key

The most popular choice, perhaps due to its usage by AWS API Gateway, `x-api-key` is a custom header convention for passing your API key.

```
GET / HTTP/1.1
Host: example.com
X-API-KEY:  abcdef12345

```

### Basic Authentication

Earlier, we suggested Basic Auth as an alternative to API keys. They can also be used together. You can pass the API key via Basic Auth as either the username or password. Most implementations pair the API key with a blank value for the unused field (username or password).  

```
GET / HTTP/1.1
Host: example.com
Authorization: Basic bWFnZ2llOnN1bW1lcnM=
```

You will need to base64-encode the 'username:password' content, but most request libraries do this for you.

### Bearer Authentication

Some APIs use the `Authorization` header to include the API key, usually with the Bearer keyword. This method is also used for other tokens, such as those generated by OAuth.  

```
Authorization: Bearer abcdef12345
```

What about non-header locations for API keys? You can find them in query strings or even the data body.

## Other API Key Locations

Though the header has become the preferred location for API keys, there are non-header methods still used by many APIs. As a developer using APIs, you can look out for these methods. As an API designer, you'll probably want to stick to the headers, as we'll explain in each section.

### Query String

The popular method for early APIs, it's certainly easy to pass an API key through a query string in a URL. However, this method can risk API key exposure since, despite encryption, the parameters can be stored in web server logs.  

```
curl -X GET "https://example.com/endpoint/?api_key=abcdef12345"

```

If you use the query string method, you'll want to make sure that there's a low risk of the API key being shared.

### Request Body Parameter

Another method we've seen, especially in older APIs, is to pass an API key in the POST body as JSON:

```
curl -X POST
	`https://example.com/endpoint/’ \
	-H ‘content-type: application/json’ \
	-d ‘ {
		“api_key”: abcdef12345”
	}’
```

The most significant drawback to this method is that authentication is mixed in with other data. It also encourages poor REST practices, as simple reads from the API would need to be sent a POST request instead of GET.

### JavaScript API

Finally, you may see API keys used with frontend JavaScript APIs, which provide in-browser access to API functionality. In these cases, the API key is passed one of two ways. Either the key is passed with the call to the script or in the JavaScript itself.

For example, Google Maps passes the key in the query string to the JavaScript:

```
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script>
```

Keen Dataviz, on the other hand, passes the API in a constructor:

```
const client = new KeenAnalysis({
  projectId: 'YOUR_PROJECT_ID',
  readKey: 'YOUR_READ_KEY'
});
```

In both cases, the companies take additional steps to secure the API calls, since the API keys are essentially public (easily discoverable if you view source). Google Maps allows developers to restrict its usage on certain websites. Keen has separate read and write API keys.

## API Key Authentication using OpenAPI

In addition to human-readable API documentation, an OpenAPI definition is a must when designing APIs. You can describe your entire API in a  machine-readable file (YAML or JSON). The format is meant to cover the many ways developers create REST APIs, so it is flexible enough for the various API Key methods we discussed.

For example, here is the security section of Stripe's OpenAPI document, showing the two header approaches supported for its API keys:

```
  securitySchemes:
    basicAuth:
      description: 'Basic HTTP authentication. Allowed headers-- Authorization: Basic
        <api_key> | Authorization: Basic <base64 hash of `api_key:`>'
      scheme: basic
      type: http
    bearerAuth:
      bearerFormat: auth-scheme
      description: 'Bearer HTTP authentication. Allowed headers-- Authorization: Bearer
        <api_key>'
      scheme: bearer
      type: http
```

Ultimately, having a machine-readable API specification allows you to test the implementation against the specification throughout your API development lifecycle without extensive effort.

[Stoplight Studio](https://stoplight.io/studio/) makes it easy to design your API visually—including security definitions around any authentication—with OpenAPI.
