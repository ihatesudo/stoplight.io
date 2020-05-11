---
path: /blog/how-to-create-an-API-in-three-steps
tags:
  - blog
  - blog-general
  - blog-design
relatedTags:
  - blog-general
  - blog-design
publishedDate: 2020-05-11
author: Luke Russell
title: >-
  How to Create an API in Three Steps
subtitle: >-
  Design, verify, and code your way to a robust API
image: /images/three-multicolored-jellyfishes.jpg
includeToc: false
actionBar:
  enabled: false
meta:
  url: https://stoplight.io/blog/how-to-create-an-API-in-three-steps/
  description: >-
    Design, verify, and code your way to a robust API
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    How to Create an API in Three Steps
  image: /images/three-multicolored-jellyfishes.jpg
  twitter:
    title: >-
      Stoplight Blog: How to Create an API in Three Steps
    image: /images/three-multicolored-jellyfishes.jpg
    username: '@stoplightio'
---

So you’ve [ventured into the mystical realm of APIs](https://stoplight.io/blog/api-development-demystified/) and would like to create your own. While it can certainly feel like a daunting task, with a methodical design-first approach, you’re sure to come away with a useful API of your own. This post will cover the three basic steps when creating an API:

1. Design
2. Verify
3. Code

Follow this approach and you’ll create a great API that developers want to use. Even better, much like any planning you do before coding, it will save you a considerable amount of time.

## Step 1: Design The API Interface

The first step in creating an API is *designing* the API. You want to know what problems your API needs to solve, then determine what endpoints and data are needed. The decisions you make during the design phase must be documented somewhere. Describing REST APIs is most commonly done with the OpenAPI definition, so designing your API means creating an OpenAPI document for it.

While it may be tempting to write the code for the API and then generate the OpenAPI from the code, that’s about as effective as laying the bricks down for a new house before creating the blueprints. Planning the API beforehand allows you to receive input and feedback from those who will use it before it’s too late to change. Designing the API first will ensure you’re solving the right problems in the right way.

So, with your team by your side, you begin to plan out your API. The endpoints (or resources) you choose are the foundation of an API. You’ll need to decide what the API needs to expose and what descriptive names you should use. There are definitely [API URL best practices](https://stoplight.io/blog/crud-api-design/) to follow, but most important is that you maintain consistency throughout your entire API.

Each resource made into an endpoint can have actions performed upon them using HTTP methods. For example, you may access contacts from your API. To retrieve a list of people, you could use the GET HTTP method on an endpoint called `contacts`. To add new contacts, use the POST method on the same endpoint, along with predetermined contact fields.

It can be helpful to visualize these endpoints, fields, and other details. [Stoplight Studio](https://stoplight.io/studio/) helps you create OpenAPI documents without memorizing syntax. Quickly specify and describe the available HTTP methods and responses for each of your endpoints.

## Step 2: Mock Your API Server

One of the most important aspects of designing an API is incorporating feedback into that design and then tweaking it. For many people, seeing endpoints isn’t enough to provide feedback; ideally, they would look at example responses and may even start prototyping how the API will be consumed.

A mock API server is an imitation of how your final API server will look. The server itself is real, but temporary, and is meant to respond with fake data. It can be utilized during the design process by providing responses to requests. You can even have dynamic mock data, with the mock server returning data aligned with the expected type of the response field. It’s also possible to fully stage mock APIs on public servers, allowing you to get feedback from a greater number of people.

To see what a mock API server looks like, check out this [Stoplight Todos example](https://todos.stoplight.io/), which returns data like this:

```
{
  "id": 66226,
  "name": "new todo",
  "completed": false,
  "completed_at": null,
  "created_at": "2020-11-03T09:20:47.035Z",
  "updated_at": "2020-11-03T09:20:47.035Z"
}
```

After you have your OpenAPI document for your new API, create a mock server. There are a few ways to do this, one of which involves using an open-source command-line utility like the Prism API server. It takes your OpenAPI document to determine the endpoints, methods, and data. Then it serves mock data that fits the types specified in the API. Using Stoplight’s mock API servers, you can connect Prism to your API design and testing process.

## Step 3: Build Your Real API

Once you’ve carefully constructed your OpenAPI document with feedback from those that matter most via a mock API server, it’s time to build the real API. This is where many would start, but you’re much more confident about how the API will be used than those approaching code-first.

You can use your preferred language to code the API. For readability, we’ll show Python using the Flask framework. The point here is to give you an idea of what API code would look like. If you’d like, you can see a mode in-depth explanation in our [Python REST API tutorial](https://stoplight.io/blog/python-rest-api/).

The general format of an endpoint method using Flask looks like this:

```
@api.route('/YOUR-ENDPOINT', methods=['YOUR-HTTP-ACTION'])
def YOUR-HTTP-ACTION_YOUR-ENDPOINT():
  return json.dumps(RELEVANT_RESOURCE)
```

Below is the text of a file, named `flaskapi.py`, that can be run from the command line with `python flaskapi.py` to make the `GET /companies` request.

```
from flask import Flask, json

companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]

api = Flask(__name__)

@api.route('/companies', methods=['GET'])
def get_companies():
  return json.dumps(companies)

if __name__ == '__main__':
    api.run()
```

It’s here that you would connect to your database, as well. Since this is in Python, you could use [SQLite](https://www.sqlite.org/index.html), a popular SQL database engine. Any of your additional application logic would also work with Flask (or any other framework you may prefer).

One other possible option is to use [Connexion](https://github.com/zalando/connexion) to map the endpoints from your OpenAPI document to Python functions. One advantage to machine-readable definitions is you can use them for many tools throughout the lifecycle, such as mocking, [server-side validation](https://apisyouwonthate.com/blog/server-side-validation-with-api-descriptions), [contract testing](https://apisyouwonthate.com/blog/writing-documentation-via-contract-testing), and generating documentation. For a variety of other tools to assist you along the way,  like SDK generators, check out [OpenAPI.Tools](https://openapi.tools/)"

## Summary

Instead of diving headfirst into code, flopping out a half-useful API which doesn’t hold up with its first interactions in the real world, then ending up writing a v2 a few months later, try taking a little time to design and verify the API. You can use [Stoplight Studio](https://stoplight.io/studio/) (totally free and works with your existing repos) to create your OpenAPI documents with a visual editor. Then create your mock servers and even publish documentation to get feedback from your team. With a steady design plan and the right tools, any of your API visions are within your reach.
