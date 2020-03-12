---
path: /blog/keeping-OpenAPI-DRY-and-portable
tags:
  - blog
  - blog-featured
  - blog-general
  - blog-design
relatedTags:
  - blog-featured
  - blog-general
  - blog-design
publishedDate: 2020-03-11
author: Phil Sturgeon
title: >-
  Keeping OpenAPI DRY and Portable
subtitle: >-
  Bundling, dereferencing, and how to use them in Stoplight Studio and CLI workflows.
image: /images/keep-open-api-dry.png
includeToc: false
actionBar:
  enabled: true
meta:
  url: https://stoplight.io/blog/keeping-openapi-dry-and-portable/
  description: >-
    Bundling, dereferencing, and how to use them in Stoplight Studio and CLI workflows.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    Keeping OpenAPI DRY and Portable
  image: /images/keep-open-api-dry.png
  twitter:
    title: >-
      Stoplight Blog: Keeping OpenAPI DRY and Portable
    image: /images/keep-open-api-dry.png
    username: '@stoplightio'
---

If you mention OpenAPI (or use its old name "Swagger") to an API developer, there's a chance they groan or make some other funny noise. When you ask why, you'll often hear a terrible tale of 10,000 line YAML files, repeated content, and never-ending git conflicts. Problems like these have been a thing of the past for a while, thanks to editors like [Stoplight Studio](https://stoplight.io/studio) making it easier to work with referenced and split files into manageable chunks. However, to transport these separated OpenAPI documents, you'll need to know two terms: bundling and dereferencing!

We've written before about [using reference objects to avoid repeating yourself](https://stoplight.io/blog/reuse-openapi-descriptions/), but to briefly catch everyone up, we'll need to repeat ourselves juuuust a bit.

## Background Reference

In OpenAPI v2.0, there was a `definitions` keyword, which would go in the root of the file. Any examples, parameters, or schemas would be plonked in there all together, and then operations, path items, and other schemas could reference them.

```yaml
swagger: 2.0
info:
  # ...
paths:
  # ...
definitions:
  Category:
    type: object
    properties:
      id:
        type: integer
        format: int64
      name:
        type: string
    Tag:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
```

Definitions could then be referenced with the `$ref` keyword, and it would be just like they had been defined in place.

```yaml
'200':
  schema:
    $ref: '#/definitions/Category
```

In OpenAPI v3.0, even more things could have a reference:

```yaml
paths:
  /customers/{CustomerId}:
    put:
      requestBody:
        $ref: '#/components/requestBodies/CreateCustomer'
      parameters:
        - $ref: '#/components/parameters/CustomerId'
      responses:
        '204':
          description: Updated
```

This reuse helped avoid repetition, but OpenAPI documents could still get pretty big. Having every endpoint, every schema, every parameter, every example… woof.

## Splitting into Multiple Files

To avoid mega YAML, many folks recommend [splitting API descriptions into multiple files](https://apihandyman.io/writing-openapi-swagger-specification-tutorial-part-8-splitting-specification-file/). This has other benefits like letting developers use those same schema files for [contract testing](https://apisyouwonthate.com/blog/writing-documentation-via-contract-testing) - using the same source of truth as the descriptions that are eventually rendered as [beautiful documentation](https://stoplight.io/docs/).

```yaml
  Person:
    $ref: "../schemas/person.yaml"
```

The downside to splitting OpenAPI documents up is that many tools don't understand how to read these files. Some tools ask you to upload a single `openapi.yaml` document, and when you upload that single document to the web server, their code has no idea what a `../schemas/person.yaml` is.

Some tooling simply refuses to follow a $ref to an "external file" because it could be a security issue. Others support an external file if it's on the file system but fail to follow a URL for a variety of reasons… Stoplight tooling supports external files and external URLs, but your mileage may vary in the greater world of [OpenAPI tooling](https://openapi.tools/).

Solutions to this are many; some tools allow you to upload a ZIP file, at which point they sniff all the file contents to figure out which is the "main file", then support references to other documents. This functionality is pretty rare, a lot of the time tools just break.

## Bundling Multiple Documents into One

If your tool-chain relies on a tool that cannot handle external $refs, one solution can be to "bundle" multiple files into one.

[Bundling](https://github.com/openapi-contrib/glossary#bundle) (also sometimes known as "External Inlining") is the process of moving the contents of an external $ref into the `components` object of the main file in question.

For example, let's take a look at some OpenAPI for the [Giphy API](https://developers.giphy.com/docs/api/). The entire [giphy.yaml](https://github.com/stoplightio/sample-specs/blob/master/reference/giphy/giphy.yaml) is a little large, even split across multiple files, so let's look at one operation:

```yaml
paths:
  /gifs:
    get:
      description: |
        A multiget version of the get GIF by ID endpoint.
      operationId: getGifsById
      parameters:
        - $ref: '#/parameters/gifIds'
      responses:
        '200':
          description: 'ok'
          schema:
            properties:
              data:
                items:
                  $ref: './schemas/gif.v1.yaml'
                type: array
              meta:
                $ref: './schemas/meta.v1.yaml'
              pagination:
                $ref: './schemas/pagination.v1.yaml'
            type: object
        '400':
          $ref: '#/responses/BadRequest'
```

They’ve still got some common responses saved in the main file, but multiple schemas are split into different files in the schemas directory. Stoplight Studio users can right-click on any OpenAPI document, "Export > Bundled" then choose from "Copy to Clipboard" or "Save to File".

![Exporting Bundled from Stoplight Studio](/images/export-bundled-from-studio.png)

The results of this bundled file look a bit like this:

```yaml
paths:
  /gifs:
    get:
      description: |
        A multiget version of the get GIF by ID endpoint.
      operationId: getGifsById
      parameters:
        - $ref: '#/parameters/gifIds'
      responses:
        '200':
          description: ''
          schema:
            properties:
              data:
                items:
                  $ref: '#/paths/~1gifs~1random/get/responses/200/schema/properties/data'
                type: array
              meta:
                type: object
                description: |
                  The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different circumstances.
                properties:
                  msg:
                    description: HTTP Response Message
                    example: OK
                    type: string
                  response_id:
                    description: A unique ID paired with this response from the API.
                    example: 57eea03c72381f86e05c35d2
                    type: string
                  status:
                    description: HTTP Response Code
                    example: 200
                    format: int32
                    type: integer
              pagination:
                type: object
                description: |
                  The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
                properties:
                  count:
                    description: Total number of items returned.
                    example: 25
                    format: int32
                    type: integer
                  offset:
                    description: Position in pagination.
                    example: 75
                    format: int32
                    type: integer
                  total_count:
                    description: Total number of items available.
                    example: 250
                    format: int32
                    type: integer
            type: object
        '400':
          $ref: '#/responses/BadRequest'
```

The output here is a little funny looking at first, but what it's doing is rather smart. It loops through all the references, and the first time it finds one, it'll replace it with the contents of the $ref target, then the next time it finds one, it'll just change the $ref to target that first definition. In this example, it put `meta` and `pagination` directly into this operation, but the data has a $ref to elsewhere.

```yaml
  data:
    type: array
    items:
      $ref: '#/paths/~1gifs~1random/get/responses/200/schema/properties/data'
```

## Bundling Outside of Studio

We added this functionality to Studio using a NodeJS module called [APIDevTools/json-schema-ref-parser](https://github.com/APIDevTools/json-schema-ref-parser). This battle-hardened module handles all $ref logic in Studio, Docs, Prism, and everything else in the Stoplight ecosystem.

Until recently, we maintained a similar NodeJS module [stoplightio/json-ref-parser](https://github.com/stoplightio/json-ref-resolver), but we've combined efforts with this one so we can all solve more significant, more interesting problems, quicker.

Another benefit is that it has a [CLI wrapper swagger-cli](https://github.com/APIDevTools/swagger-cli) available. If you're using another OpenAPI editor, are muddling through with Vim, or need to bundle as part of an automated workflow via the CLI, you can use swagger-cli on the command line to get the same result as if you clicked the button in Studio.

## No $ref Support At All?

Bundling helps when tools only support some types of references, but what if the tool cannot handle the `$ref` keyword at all? If you come across one of these tools, the best thing to do is to run away and [find a replacement](https://openapi.tools/). If there is no alternative tool, try supporting that open-source project with a pull request (via json-schema-ref-parser or an equivalent [JSON Schema tool](https://json-schema.org/implementations.html) in the appropriate programming language).

Sometimes you are truly stuck with this tool, and for this scenario, there is dereferencing. When using this strategy, $refs are replaced with their values, as though somebody went through doing copy & paste on each one. No more `$ref` keywords exist at all. If you have 10 operations referencing the same model 10 times, you now have 10 copies of that model embedded in different parts of the document.

This strategy is something you only want to use as a last resort.

In Studio, the process is the same:

![Exporting Dereferenced from Stoplight Studio](/images/export-dereferenced-from-studio.png)

Looking at the contents of this file, it looks quite different, but… it's giant, and I'm not even going to paste a chunk in here. The bundled file was 676 lines, but the dereferenced file is 10,123 lines long!
Take a look at [giphy.deref.yaml](https://gist.github.com/philsturgeon/42b5bf7f8f775fdfab5410579423ceb2#file-giphy-deref-yaml).

## Summary

Ideally, all tooling would be compliant with the OpenAPI and JSON Schema specifications, implementing 100% of the expected functionality in the intended fashion. Unfortunately, the real world is never so simple as the ideal. If you need to use some tooling that cannot handle $ref properly, give one of these two approaches a try, either right from [Stoplight Studio](https://stoplight.io/studio), [swagger-cli](https://github.com/APIDevTools/swagger-cli), or a low-level JSON Schema $ref aware utility. You'll keep your OpenAPI documents nicely organized in source control, but share simple, portable documents.
