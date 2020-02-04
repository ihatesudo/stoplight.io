---
path: /blog/prism-open-source-mock-server-gets-smarter
tags:
  - blog
  - blog-featured
  - blog-general
  - blog-mocking
relatedTags:
  - blog
  - blog-featured
  - blog-general
  - blog-mocking
publishedDate: 2020-02-04
author: Vincenzo Chianese
title: >-
  Open Source Mock Server Gets Smarter
subtitle: >-
  Stoplight's Prism supports callbacks, proxies, and even more validations.
image: /images/prism-zetong-li-unsplash.jpg
includeToc: false
actionBar:
  enabled: false
meta:
  url: https://stoplight.io/blog/prism-open-source-mock-server-gets-smarter
  description: >-
    Stoplight's Prism supports callbacks, proxies, and even more validations.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    Open Source Mock Server Gets Smarter
  image: /images/prism-zetong-li-unsplash.jpg
  twitter:
    title: >-
      Stoplight Blog: Open Source Mock Server Gets Smarter
    image: /images/prism-zetong-li-unsplash.jpg
    username: '@stoplightio'
---

Generated mock servers are an integral part of [API design](https://stoplight.io/design/). API consumers can interact with your API before you build it, catching issues before you've invested a lot of time writing code.

Near the end of 2019, we made some major improvements to our [open source mock server](https://stoplight.io/open-source/prism/), Prism. You can now use a proxy server to validate requests and responses, allowing for contract testing against live APIs. In addition, webhook support and live reloading features allow you to mock more APIs even faster.

## Proxy Traffic to Build Prism into Testing

In the design-first workflow, mocking gives your team something to use before the API exists. Then, when enough feedback has come in and the team has decided to build the API, you hope the real API matches the mock API. Subtle differences can go unnoticed, with properties changing slightly, or being removed completely.

Prism v3.2 lets API consumers funnel their development traffic through a proxy server, such as your API-in-progress. It will report any mistakes it notices along the way, either with the requests you're sending or the responses coming back from the server.

The proxy feature will help you identify discrepancies between your OpenAPI document (your source of truth) and any other server you designate as the proxy. This can help frontend developers integrating with your API, or other backend developers, who might want to channel their requests through Prism to see if they are making valid requests. The proxy can also be enabled in staging or any other pre-production environment, like a dress rehearsal before the opening night of a play.

This can help out folks not just working in development but can be a handy way to sniff traffic in an end to end test suite, with all the servers talking to each other through Prism and blowing up the calls if there is a mismatch in any of them. You can add contract testing to an existing test suite for very little work.

## Validate Request and Response Data

In order to support the proxy feature, Prism also needed to provide full validation. While earlier Prism versions could validate input, Prism 3.2 can also validate the **response** data. There is now full callback support for OpenAPI response validation. As mentioned above, you can now use Prism's mock server for complete contract validation. For example:

Say you have an invalid request in your API or are receiving an invalid response that does not match the rules of your OpenAPI specification document. Prism 3.2 will handle both and return an error message.

The mismatches it detects may be subtle, such as a minor schema difference (expected an integer, but a float number gets returned):

```json
{
  "type": "number",
  "format": "integer"
}
```

Returned data: 3.2

or the issue could cause a major error, like a missing field in the expected payload:

```json
{
 "type": "object",
 "properties": {
   "name": {
     "type": "string"
   },
   "surname": {
     "type": "string"
   }
 },
"required": ["name","surname"]
}
```

If the data coming from the server only had a name, it would cause a warning.

```json
{
 "name": "Clark"
}
```

Here is the warning you would see in Prism:
`[5:55:28 PM] >     [VALIDATOR]. Violation: response.body should have required property 'surname'`

## Support Webhooks in Your Mock Servers

In addition to validating requests and proxy servers, Prism added support for webhooks, which aren't always easy to test. An API follows instructions when you make a request. Similarly, webhooks or web callbacks fire a request to a URL you specify. The request occurs when a defined state is met, such as a new record added to a system.

Creating and using webhooks in APIs has become a common practice, so community members flagged an issue for callback/webhook support in Prism. The Stoplight team built it into the 3.2 release. Here's an example of how this might work when building an API to handle payment requests:

Let's say that you want to build and test an API that is a part of a SaaS system. With Prism 3.2 verifying responses *and* requests, you can test when a secure transaction is sent by a user's account and when your company account responds with a confirmation of receiving payment. Prism 3.2 also validates that response to be true and, using a webhook specification on an API endpoint you have created, sends the user a key to use your service in the form of an HTTP request that will include the data they need to get started.  

## Automatically Reload Your Prism Servers

Finally, Prism 3.2 will save you a bit more time with its live reload feature. There is no longer any need to shut down the server manually and start it back up again when you make changes. Any changes to your OpenAPI document will now reload automatically. This saves you time and, more importantly, gives you or your team the ability to make rapid iterations such as adding new endpoints or changing out example responses.

Stoplight continues to work to make Prism smarter and more efficient for API mocking and testing. While automatically reloading is a small feature, we think it will make Prism even easier to use.

## Generate Your Own Mock Servers

These brief examples show how Prism 3.2's four new features can help you throughout the entire lifecycle of your API. We want to make Prism the best tool for mocking your APIs as part of your API design process.

[Try Prism today](https://stoplight.io/open-source/prism/) to generate mock servers for your OpenAPI documents.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@zetong?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Zetong Li"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px"> Photo by Zetong Li</span></a>
---
