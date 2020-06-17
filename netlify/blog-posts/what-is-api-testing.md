---
path: /blog/what-is-api-testing
tags:
  - blog-api-testing
  - blog
relatedTags:
  - blog-api-testing
publishedDate: 2020-06-16T17:11:30
author: Phil Sturgeon
title: What is the Meaning of API Testing?
subtitle: How and why to use various types of API testing
image: /images/formulas-and-equations.jpg
color: green-light
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  ctas:
    - color: purple
  enabled: false
meta:
  description: How and why to use various types of API testing
  url: https://stoplight.io/blog/what-is-api-testing/
  robots: 'index, follow'
  title: What is the Meaning of API Testing? | Stoplight API Intersection
  image: /images/formulas-and-equations.jpg
  twitter:
    description: How and why to use OpenAPI contract testing for your API
    title: What is the Meaning of API Testing? | Stoplight API Intersection
    image: /images/formulas-and-equations.jpg
---

API testing is a software process which validates that an API is working as expected. Once declared, API tests can run automatically, such as part of a test suite on a continuos integration server, a development environment, or even done in production.

Ok, sure, but what does "working as expected" mean? 

- Does it accept the same data your API design/documentation says it does?
- Does it output the same data your API design/documentation says it does?
- Does it create good error objects or blow up with a 500? 
- Does it perform quickly? 
- Does it perform quickly under pressure?
- Does it have gaping security holes? 

This topic is further confused by producers and consumers wanting to test different things in different contexts. 

Settle in, grab a beverage, and I promise we'll unravel this mess.

## Producers & Consumers

When people talk about "API testing", a consumer might be speaking about testing the API calls they are making to another API, and producers might be talking about making sure their API works.

A consumer needs to know if it is sending information that the API will not understand, and maybe they want to be sure that the API continues to give them the information they expect. 

A producer needs to know if their API is working according to the API design they initially created, the documentation that has been shared since, and that changes to the code do not accidentally change the API interface or wreck expectations that the consumers now have. 

An application could absolutely be both a producer and a consumer, because it might be calling an upstream dependency to find information which it then sends back to another system. This could be a [Backend for Frontend](https://samnewman.io/patterns/architectural/bff/), [submitting a payment to Stripe](https://stripe.com/docs/api), or [sending a SMS with Twilio](https://www.twilio.com/docs/usage/api). 

Mistakes by either producers or consumers can set off expensive alarm bells which cause headaches for your support staff, on-call engineers, and ram up your corporate Twitter feed with complaints.

## Different Types of Testing

There is no one thing that is "API testing", but there are lots of different bits of code and functionality to test at various points in the API lifecycle. Let's learn about unit testing, integration testing, acceptance testing, end-to-end testing, contract testing, and let's keep in mind that the terms are different for producers and consumers.

### Unit Testing

Testing that some sort of unit of code is working as expected. This could be a function, class, module, etc. Maybe you have an `add()` function, so check that when you call `add(1, 2)` it returns `3`. If you throw in `1` and `"HELLO THERE"` you get a NaN or an exception.

If the function contains a call to some other function, class, or library, you may well "isolate" that unit of code you are trying to test by replacing the other code with a fake: known as a "mock" or "stub".

#### Producers
#### Consumers

Unit tests almost always live in the repository with the functionality they are testing.

### Integration Testing

This type of testing checks that multiple bits of code play nicely together. 

> Integration tests check small sections of your product and it’s interaction with external tools or systems e.g. databases or external APIs. 
> 
> **-- [Kayleigh Oliver](http://kayleigholiver.com/difference-acceptance-integration-tests/)**

Instead of focusing purely on one piece of code and stubbing out any of its dependencies, you let them talk to each other and you see if things blow up or work as expected.

Involving more layers of code and dependencies results in slower tests, but this does not make them worse or less valuable. It's common to write more unit tests to cover subtle variations, trying to trigger every error condition or possible output, then write a smaller number of integration tests just to check that errors are handled and a few positive and negative outcomes work as expected.

Integration tests almost always live in the repository with functionality they are testing.

### Acceptance Tests

Acceptance and Integration are often throw around interchangeably, but a common difference is the way they're written and who is writing them.

> Acceptance tests give feedback to the state of a system in from a user’s perspective.
> 
> Acceptance tests can be written for the integration or system/end-to-end testing level of your product.
> 
> Acceptance tests are very business focused meaning that the name of the test and it’s result should be very easy to understand, even by someone that’s not part of the development team.
> 
> **-- [Kayleigh Oliver](http://kayleigholiver.com/difference-acceptance-integration-tests/)

Whilst an integration test might be making sure that various bits of code are working the things it's expected to as far as a developer is concerned, the acceptance test is checking that things work as a user expects. 

Sometimes developers will write tests that are very similar to integration tests but they'll test important workflows, chaining various requests and responses together, using the data from the response to try the next bit, following HATEOAS links to see if the REST API is working like the state machine it's designed to be. 

Acceptance tests also often describe automated business rules, maybe written by a developer, but could be written by folks in the business. To make this easier, instead of writing tests in a programming language like Go or Ruby, acceptance tests are often written with a more text-based syntax like [Cucumber](https://cucumber.io/docs/guides/overview/):

```
Feature: Link Click
  Scenario: User clicks the link
    Given I am on the homepage
    When I click the provided link
    Then I should see the link click confirmation
```

This might be used for some easy interface testing, but could be used for really complex stuff like testing all sorts of pricing logic for tax codes, VAT, partial refunds, coupons  and discounts, which a business person would know better than the average developer.

Acceptance tests may or may not live in the repository with the functionality they are testing.

## End-to-End Testing

These don't interact at a code level, they're usually far more about making sure critical paths through the ecosystem are supported, touching multiple applications and APIs.

The interactions are real, maybe a few settings are different so its using "Test" keys for sending emails and making payments that are semi real, but everything else is actually happening. 

These sorts of tests are slow and hard to set up, they need to have real records created in the database and real users need to exist to do that. If the tests are run in a QA environment maybe they can do a big reset script to make all the APIs start from scratch, or its creating a new user every time - which can make the database giiiiant if these tests run hourly.

As always end-to-end tests are different for producers and consumers.

### E2E Testing for API Consumers

For frontend development end-to-end testing usually involves running the entire application, and also running all of its dependencies. For web apps the tests are run in a [headless browser](https://www.keycdn.com/blog/headless-browsers) pretending to be a human clicking around, and mobile apps use a [simulator to automate tests](https://www.browserstack.com/app-automate) in a similar way.

To run those APIs it's pretty common to use Docker or Kubernetes to run the services, then the frontend application can talk to those APIs for real. This can be complex to orchestrate and time consuming, but it's crucial for making sure your application actually works in the real world, not just in the repos test suites. 

These end-to-end tests probably live in the repository for the frontend application they are testing, and can be run in CI on pull requests, after merges to master, and/or nightly.

### E2E Testing for API Producers

Similarly to E2E for API consumers, you could have a E2E test suite for every single API testing it directly and seeing how it plays with other APIs, but that might be better handled with Integration Testing for API Producers (with tools like VCR). 

E2E for API producers is commonly higher level than any one particular project, and is testing the ecosystem itself, through making real calls to real APIs. Seeing as multiple APIs could be involved, it is hard to put end-to-end tests in with the functionality it is targeting, unless your APIs are all in a [monorepo](https://www.atlassian.com/git/tutorials/monorepos). For the vast majority of people not using a monorepo, the "E2E tests" will live on their own, either in their repository, or in some external test suite system. 

The tests could be triggered every time any producer in the entire ecosystem wants to deploy, or if the API ecosystem is huge it could be any time something in that particular context boundary changes.

TODO Context Boundary

Developers often find this jarring at first, because they are mostly used to having their tests under their control in their repo. Having them in another system means things need to be updated in another repo or testing application when changes occur, but that is actually a benefit. 

When tests are owned by the API, the tests can be changed to show that the API is "all good", but that might involve a change that would break expectations of other consumers. Having these tests under the control of a Software Testing or Quality Assurance team means these sort of accidental or unintentional breakages cannot slip through. If a breaking change is made to an API and the E2E testing is being run before deployments can go to production, then this breaking change will be caught safely. 

Finding out which consumers could or would be effected by the change can be tricky, but it could be a case of running the Consumers E2E tests with that API updated in their test suite to see if it all works.

## Contract Testing

In API, the I stands for interface, and it's surprising how often that part is overlooked. Some companies just bash out new functionality, throw some tests in for certain functionality, but the interface is generally considered to be whatever they're spitting out at the time, and code changes over time, so... consumers break.

Let me mention a scenario, see if it sounds familiar to you. Working on a new API integration between the frontend consumer and a new API in development. The frontend developer writes their side of the code, and the backend developer writes theirs. As they go, the fields and types are explained verbally, DMed over Slack, dumped into a Google Doc somewhere, shoved in a Wiki, or written up in HTML.

> **Fred:** Hey Sarah, there's a new "fudge" field and it can be "blah" or "whatever"

> **Sarah:** Great! Thanks I'll chuck that in now.

Telling somebody about it on Slack is not particularly scaleable, and writing it into a Google Doc is not exactly "machine readable", so these approaches to writing down the contract are just a snapshot of the contract at a certain point in time, and they're usually not kept up to date.

Contract testing solves this, by writing down what the contract should be: the URLs, HTTP statuses expected, the JSON properties expected, which are required, optional, nullable, which could be strings or binary data, some validation rules, etc.. 
    
As always, the term can be used differently by different people.

### Producer Contract Testing

Most of the time when talking to API people, when they say "contract testing" they're talking about Producer Contract Testing. The API producer will create a test which records all the parts of the interface, and run these tests on pull requests to the API repository, to make sure that the code didn't accidentally change.

Sometimes people will try and use whole other test suites for contract testing, but there's no need. Your existing integration or acceptance tests are a great home for this sort of assertion.

Some people will spend a bunch of time writing out rules like this:

```
Feature: User API

Scenario: Show action
    When I visit "/users/1"
    Then the JSON response at "first_name" should be "John"
    And the JSON response at "last_name" should be "Smith"
    And the JSON response should have "username"
    And the JSON response at "email" should be a string
    And the JSON response at "email" should be an email
    And the JSON response should have "created_at"
    And the JSON response at "created_at" should be a string
```

This can be rather frustrating to write out, but there's no need to do it. Producers with OpenAPI or JSON Schema can use those API descriptions to provide contract testing! Maybe you only created API descriptions so that you'd have documentation, or maybe it was to generate SDKs, or maybe it was to provide client-side and server-side validation which works from the same set of rules to avoid repetition. 

Whatever the reason, anyone with API descriptions can have contract testing almost for free. Instead of writing all the properties, data formats, validations, etc again into a test suite, you can just take the JSON Schema and assert it against the API response:

```rb
# specs/test_helper.rb
require "json_matchers/rspec"

JsonMatchers.schema_root = "api/schemas"

# specs/users_spec.rb
it 'should return HTTP OK (200)' do
  get "/users/#{subject.id}"
  expect(response).to have_http_status(:ok)
end

it 'should conform to user schema' do
  get "/users/#{subject.id}"
  expect(response).to match_json_schema('user')
end
```

That'll go looking for `api/schemas/user.json` which might look this.

```json
{
  "type": "object",
  "properties": {
    "id": {
      "readOnly": true,
      "type": "string",
      "example": "123"
    },
     "first_name": {
       "type": "string",
       "example": "John"
     },
     "last_name": {
       "type": "string",
       "example": "Smith"
     },
     "email": {
       "type": "string",
       "format": "email",
       "example": "john@example.com"
     },
     "created_at": {
       "type": ["string", "null"],
       "format": "date-time",
       "example": "2018-04-09T15:45:44.358Z"
     },
  },
  "required": [
    "email",
    "name",
    "uuid"
  ]
}
```

One of many handy side-effects to using OpenAPI and JSON Schema files for contract testing your API responses, is that not only does it make sure the code is doing what the API description says it should be doing, but you can make sure the API descriptions are correct against what the code is doing. 

After all, if you are using JSON Schema files and `$ref`, then the same schema files can be used for both documentation and contract testing. 

```yaml
  responses:
    "200":
      description: OK
      content:
        application/json:
          schema:
            $ref: ./schemas/user.json
```

Read more about producer contract testing on APIs You Won't Hate's _[Writing Documentation via Contract Testing](https://apisyouwonthate.com/blog/writing-documentation-via-contract-testing)_.
 
### Consumer Contract Testing

-  built in close contact with a specific client, with the backend and frontend developers sitting together to hash out the functionality.




This is often talked about like it's some separate step from the others, and various tools exist with the sole purpose of providing contract testing, but the basics are:

- Does the API return a JSON response?
- Does the JSON contain a field called foo which is a string with an email address?
- Does the API return a 500 error with an [error object](https://apisyouwonthate.com/blog/creating-good-api-errors-in-rest-graphql-and-grpc) if I skip the authentication token?
- Does the API return me different responses for regular users or super users?

In the past I have wasted a whole bunch of time writing contract tests into multiple places in multiple forms. They went into acceptance tests and looked like this:

```
Scenario: Finding a specific place
    When I request "GET /places/1"
    Then I get a "200" response
    And scope into the "data" property
        And the properties exist:
            """
            id
            name
            lat
            lon
            address1
            address2
            city
            state
            zip
            """
        And the "id" property is an integer
        And the "name" property is a string
        And the "address1" property is required
        ...
```

OpenAPI Specification (formerly known as Swagger Specification) is a machine-readable format that describes what’s possible with an API. Your testing process can use your OpenAPI documents to determine the endpoints to check, what HTTP methods to use, the type of data to send, and what data to expect in return.

API testing with OpenAPI is sometimes referred to as contract testing, because the OpenAPI document acts as an agreement between API provider and consumer. Even when an API is only for internal use, you’ll want to have an OpenAPI document for each API to serve as this contract. Then build your tests off this source of truth based on example API calls and assertions against expected results.





## Test Use Cases, Not Endpoints

While it’s useful to think of coverage in terms of endpoints, developers will only use the part of your API that makes sense for their use cases. In all stages of an API lifecycle, it’s important to think about how your API is actually used. In testing, you want to convert use cases to a series of API calls.

For example, if you have an e-commerce API, there may be a handful of API calls behind each order:

1. Create customer
2. Create order
3. Add customer to order
4. Add first item to order
5. Add second item to order
6. Change status of order to pending

Depending on your API design, that may be six POST/PUT calls to at least two endpoints. And you may want to add a GET at the end to be certain the order has all the data you expect.

In order to sequence these requests, you need a way to describe the order and use the data from one step in subsequent calls. In Stoplight, these are called [Scenarios](https://docs.stoplight.io/testing/introduction) and are connected to your OpenAPI document. You can rely on your definition for automatic tests, and use variables (such as customer ID) from data that is returned.

## API Testing Tools

With the industry rallying behind the OpenAPI Initiative, tooling is following suit. You’ll find various helper applications throughout the API lifecycle. The [API Design Guide](https://stoplight.io/api-design-guide/basics/) describes the design-first approach to APIs, where OpenAPI is an early artifact around which a team can refine an API. That same document, as we’ve seen, becomes a contract that you can test against.

Community website [OpenAPI.Tools](https://openapi.tools/) provides a categorized list of open source and SaaS tools to use with OpenAPI documents. You’ll find various API testing examples and many other useful resources for building robust APIs.

Among the open source tools is [Prism](https://github.com/stoplightio/prism), which creates mock servers for API testing. Once your API is in production, Prism allows you to compare upstream API responses to what it expects to receive based on your OpenAPI description. You can run contract testing against a Live API, including during development, to make sure the results meet expectations.

Stoplight also runs Prism as-a-service within the OpenAPI testing platform. Upload an OpenAPI document to get started, or design your own based on an existing API. Then run tests to make sure your API operates as expected. -->
