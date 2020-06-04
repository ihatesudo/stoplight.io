---
path: /api-modeling-tools
hero:
  particles: true
publishedDate: 2019-10-25T18:57:06.777Z
title: API Modeling Tools | Stoplight
subtitle: What is API modeling and how do you do it?
listSubtitle: >-
  API modeling is part of the API design process. Thorough API modeling and
  design gives you a blueprint for your API, before you start coding.
includeToc: true
actionBar:
  ctas: []
  enabled: false
meta:
  description: >-
    API modeling is part of the API design process. Thorough API modeling and
    design gives you a blueprint for your API, before you start coding.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: API Modeling Tools | Stoplight
  image: /images/create-model.png
  twitter:
    description: >-
      API modeling is part of the API design process. Thorough API modeling and
      design gives you a blueprint for your API, before you start coding.
    title: API Modeling Tools | Stoplight
    image: /images/create-model.png
    username: '@stoplightio'
---
## What is API Modeling?

API modeling is part of the API design process. Accurate API modeling and design gives you a blueprint for your API before you start coding. You can evaluate, test, and demo it, ensuring that your API fulfills requirements. This avoids costly rewrites or late-stage changes of direction.

## The API Modeling and Design Process

The API modeling process begins with goals similar to requirements gathering and user story creation. Identify who will interact with your API, what they will do and what they want to achieve, and the specific steps they will take. Based on that information, you can outline your API methods and endpoints and validate the API with test scenarios.

The API model forms the basis of the API design process. Knowing your users’ goals and actions, you can make informed decisions about the structure of your API, including resource grouping and relationships. You can also design documentation for key use cases, and even feed this information into marketing materials, ensuring you reach potential users.

## Modeling Web APIs

You can model REST APIs for the web using the OpenAPI specification. This is an API description format that offers a standardized way of modeling APIs, using either JSON or YAML.

Let’s consider a todo list API. Who will use it, and what actions will they take? Todo lists have a wide range of users, but they tend to have common objectives: record lists of tasks and check them off when done.

This means we need several endpoints:

●    Get a single task

●    Get all tasks.

●    Mark a task as completed.

●    Add a new task

The above is a simplified example. A real todo list API would need to allow users to edit and delete tasks and perhaps group, sort, and share them.

You can already see that some of these descriptions map directly to HTTP verbs: GET requests to retrieve tasks. We would use POST to create a new task, and PUT to modify one when the user completes it.

The next step is to turn this outline into a defined model in the Open API format. Doing this by hand is possible, but requires deep familiarity with the spec, and with JSON or YAML formatting.

Here is where a REST API modeling tool can help. Stoplight Studio provides a graphical editor for creating your endpoints. Studio makes it easier to design an API, even if you’re not familiar with all the details of the Open API spec. You can add and configure endpoints, then auto-generate an Open API format JSON or YAML file.

The Open API spec integrates documentation into the modeling process with the endpoint description field. Stoplight Studio can take the descriptions from your API paths and auto-generate documentation. This is useful through the entire API design and creation process, providing support to both your developers and end-users.

To see the todo list example in action, create a new project in Stoplight Studio, and select the option to include tutorial files. Take a look at the GUI editor on the APIs tab, and dive into the Files tab to review the generated spec file. [Studio Getting Started Documentation can be found here, with everything you need to, well, get started.](https://stoplight.io/p/docs/gh/stoplightio/studio/docs/01-getting-started.md)
