---
path: /blog/stoplight-platform
tags:
  - blog
  - blog-featured
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2020-06-25T00:19:11.840Z
author: Marc MacLeod
title: Rethinking API Design at Scale with the Stoplight Platform
image: /images/dayne-topkin-cxruh7pmmsu-unsplash.jpg
includeToc: true
actionBar:
  ctas:
    - color: blue2
      href: 'https://stoplight.io/welcome'
      title: Get Started
  enabled: true
  text: Get Started with the Stoplight Platform For Free
meta:
  description: Rethinking API Design at Scale with the Stoplight Platform
  url: https://stoplight.io/blog/stoplight-platform/
  robots: 'index, follow'
  title: Rethinking API Design at Scale with the Stoplight Platform
  image: /images/home/thumbnail.png
  twitter:
    description: 'Rethinking API Design at Scale with the Stoplight Platform'
    title: Rethinking API Design at Scale with the Stoplight Platform
    image: /images/home/thumbnail.png
    username: '@stoplightio'
---

In 2016 Stoplight released the industry’s first form-based OpenAPI designer, and since then we have helped developers,
architects, and even product managers design tens of thousands of APIs. Over the last few years, we focused on adding
features to take advantage of these OpenAPI documents, such as hosted API documentation and automatic mock servers.
However, as we engaged with our customers, we realized that a new set of problems was cropping up as the number of APIs
under management grew.

Creating a process to design and develop a handful of APIs at your company is difficult but doable. On the other hand,
creating a process to design and develop tens, hundreds, or thousands of APIs at your company, spread across dozens of
teams, is a Herculean task. In conversation after conversation, we learned that this is the situation many of our
customers find themselves in as development patterns shift toward building and deploying smaller, more specific APIs
(microservices).

Managing APIs at this scale introduces a number of new challenges - consistency, governance/compliance, discoverability,
and quality become difficult to manage as the number of APIs increases. When we look around at the options for solving
these problems, we see a lot of solutions that ask companies and developers to add a completely new workflow to their
process. This is a big ask, and one that can stifle attempts at rolling out a more modern API design first program at
your company.

What we realized is that most of these problems can be solved in the context of the workflows and tooling that already
exist at your company. Your Git repositories are the obvious place to store API design assets. The process you have
today to drive code reviews is a great foundation to drive design reviews. The automation you have in place to run test
suites is a perfect spot to add API style guide/consistency checks. And so on.

By enriching the tools and workflows that exist at your company today, Stoplight becomes easier to roll out across your
entire company, bringing the goal of affecting meaningful improvements to your API development processes one step
closer.

## The New Stoplight Platform

A primary goal with the Stoplight Platform was to make it as easy as possible to integrate Stoplight into your existing
workflows. Stoplight should enrich - not replace - these workflows, thus reducing the friction involved with rolling out
a modern API development strategy at your company.

To that end, the Stoplight Platform was built to act as a layer on top of the version control system(s) at your
company - GitHub, GitLab, Bitbucket, etc.

This shift yields a number of benefits right off the bat:

1. **No lock-in:** Your data is your own, stored in your Git repositories.
2. **Tooling flexibility:** Convincing developers to adopt a new tool can be difficult. With our new approach,
   developers can continue to use the tools that they're most comfortable with - all they need to do is commit
   design/docs files to your Git repos. If some of them prefer to write OpenAPI by hand in VS Code rather than using
   Stoplight Studio, no problem!
3. **Workflow flexibility:** Since Stoplight is built on your VCS, it's easy to leverage the development workflows that
   already exist at your company - PR reviews, CI, GitHub actions, custom VCS integrations, you name it.
4. **Co-locate alongside implementation:** In previous versions of Stoplight, you were forced to store your design/docs
   files in a flat list, separate from the implementation they are meant to describe. In our new Platform you are free
   to organize your files however you like, including managing them in the same repo as the actual API implementation!
   This has a number of benefits, such as reviewing changes to design and implementation in a single Pull Request.

![The Stoplight Platform](/images/product/v5.gif)

## What Comes Next

Today we unveiled our vision for the Stoplight product ecosystem - one in which you own your data, and you choose how
and when to incrementally layer Stoplight into your existing workflows. Over the next few months we'll work with
customers on our legacy products to help you through the migration process. _Please note that you do not have to migrate
until you are ready - we are not sunsetting our legacy products at this time, and will provide at least 6 months notice
before we do so._

Moving forward we will build on this foundation with shared API style guides, rich design reviews, and more
collaboration features. Oh, and Studio desktop is getting an update soon, stay tuned!

You can explore what we're working on, and make suggestions, on our [public roadmap](https://roadmap.stoplight.io) - we
look forward to working together.
