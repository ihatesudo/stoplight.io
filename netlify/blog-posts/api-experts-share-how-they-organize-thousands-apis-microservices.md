---
path: /blog/API-experts-share-how-to-organize-thousands-of-apis-and-microservices
tags:
  - blog
  - blog-general
  - blog-design
  - blog-governance
  - blog-visibility 
relatedTags:
  - blog-general
  - blog-design
  - blog-governance
  - blog-visibility
publishedDate: 2020-02-20
author: Adam DuVander
title: >-
  API Experts Share How They Organize Thousands of APIs and Microservices
subtitle: >-
  We asked four API experts how they approach API governance, internal discovery, and the entire API lifecycle.
image: /images/shipping-container.png
includeToc: false
actionBar:
  enabled: true
meta:
  url: https://stoplight.io/blog/API-experts-share-how-to-organize-thousands-of-apis-and-microservices/
  description: >-
    We asked four API experts how they approach API governance, internal discovery, and the entire API lifecycle.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    API Experts Share How They Organize Thousands of APIs and Microservices
  image: /images/shipping-container.png
  twitter:
    title: >-
      Stoplight Blog: API Experts Share How They Organize Thousands of APIs and Microservices
    image: /images/shipping-container.png
    username: '@stoplightio'
---

The APIs you see publicly are just a small part of the overall picture. In enterprises worldwide, especially those who have adopted [microservices API architecture](https://stoplight.io/blog/designing-apis-for-microservices/), it's common to see teams maintaining hundreds or even thousands of APIs. These engineering interfaces power apps, websites, internal tools, and other software built by the company, and their partners.

We asked four API experts how they approach API governance, internal discovery, and the entire API lifecycle:

- [Sophie Rutard](https://www.linkedin.com/in/sophie-rutard-7081baab/), Head of API, Euler Hermes
- [Matthew Reinbold](https://twitter.com/libel_vox), Director, Platform Services Center of Excellence, Capital One
- [Isabelle Mauny](https://twitter.com/isamauny), Field CTO and Founder, [42Crunch](https://42crunch.com/)
- [Jason Harmon](https://twitter.com/jharmn), Platform Evangelist, Expedia Group

With a range of perspectives and backgrounds, you will see there are multiple approaches. Together, their voices provide experience that is worthy of consideration for any API practitioner.

![Left to Right: Sophie Rutard, Matthew Reinbold, Isabelle Mauny, Jason Harmon](/images/api-experts.png)
*Left to Right: Sophie Rutard, Matthew Reinbold, Isabelle Mauny, Jason Harmon*

## Maintain Consistency in New APIs

With different business units and engineering teams working on isolated projects, most enterprises are frequently creating new APIs. At that kind of scale, maintaining consistent interfaces could require a team of full-time engineers. From API servers to endpoints, to how your fields are capitalized, there are a lot of different ways to design an API. How do you ensure new APIs meet guidelines?

For **Matthew Reinbold**, it starts with his organization's goals. *"Guidelines without a destination, that don't drive an organization to a better place than where they are today, will be forgotten or ignored."* For example, if integrations are taking too long to produce, that's *"an outcome to work from and create meaningful guidance towards."*

*"We have a governance team for [API consistency],"* said **Sophie Rutard**. *"They share and manage a design guideline that every squad is supposed to stick to; They also do a lot of coaching to the internal squads and validate all merge requests."*

**Jason Harmon** previously worked at PayPal and helped [open source its API standards](https://github.com/paypal/api-standards). As part of the process of new APIs at PayPal, each was given a *"maturity model evaluation to produce a score 1-5."*

At Expedia, Harmon said there are different processes for each division or team. In the future, they plan to create a community-driven standard.

Indeed, there's a spectrum of enforcement, as Reinbold points out. And before you can have consistent APIs, you need to be consistent with the language around that enforcement. *"Are the words, policy, guidance, and standards all used interchangeably in regards to APIs? Or do they have different meanings?"* he asked.

> "Automation can help. Tools like [Spectral](https://stoplight.io/open-source/spectral) can detect deterministic rules. For example, notifying a team that they shouldn't be submitting a body as part of a GET operation, because it is poor HTTP form, is straightforward to automate. However, more subjective determinations, like whether 'chAccPwChangeId' is a self-describing field name to the target audience, require human engagement." — **Matthew Reinbold, Capital One**

**Isabelle Mauny** reminds us to consider more than consistency at this very early stage. *"Start worrying about security, basically as soon as you design your APIs!"* she said. *"API security is a vast topic encompassing threat protection, authentication, authorization, servers lockdown and frameworks/libraries validation, network security, and container security. You need to start planning for each of those aspects as early as possible."*

With so many aspects to include in each new API design, it's easiest to enforce consistency and security practices with a gatekeeper, a process, or a group to approve each API. An alternative is discussed in the book [Team Topologies](https://teamtopologies.com/book). *"Rather than mandating a gate, the intent is to create a desire of mastery across all constituents and then help them get there,"* said Reinbold.

Regardless of where you fall on the spectrum of enforcement, all our API experts emphasized the importance of feedback to evolve your approach over time. Technology and market changes are constant and worthy of reconsideration periodically.

## Internal API Discovery

Let's say you develop the most standards-compliant, consistent, and secure API you can. Now, how do others within your company know that it exists? Of course, you should initially develop an API based on at least one immediate use case. But the long-term power of APIs comes from exposing them to the rest of your organization—and even externally, on a selective basis.

*"Ideally, an engineer would just need to know about a single URL where all APIs are properly documented,"* said Mauny. *"While many enterprises understand that this is a requirement for open APIs, consumed by external consumers, internal usage should be developed and documented with the same diligence, no matter who is going to consume them."*

At Expedia, Harmon points to Confluence as the primary way to expose the APIs available, as well as internal evangelism. However, he plans an internal portal, something that was also available to engineers at PayPal.

For **Euler Hermes**, an internal portal is also in the works. Notably, it will become part of the company's external portal. *"In the end, the experience should become pretty much the same for internal and external developers,"* Rutard said. *"The internal developers just get to see more."*

Enterprises are paying more attention to [long-ignored internal documentation](https://stoplight.io/blog/internal-api-documentation/), in part because tooling is making it easier. API definition formats allow for machine-readable descriptions of each API. Those documents can then be used to produce lists of APIs, generate documentation for each one, as well as streamline the design and development process.

> "A key aspect of documentation is to provide developers with an OpenAPI/Swagger file that describes the API. The specification is very rich and allows you to thoroughly describe how the API is secured and how all the data flows through it." — **Isabelle Mauny, 42Crunch**

The tools are there, but enterprise teams still need to use them. It can take many forms, including portals, but *"it is vital that enterprises maintain a centralized API registry,"* Reinbold said. *"This catalog should be the sole source of truth."*

*"Whether it is one portal or many, relying on 'good faith' efforts isn't scalable,"* added Reinbold. *"Pleading for harried development teams to 'do the right thing' will result in the stale documentation that plagues any company CMS. The process for data entry to the registry should be as automated as possible."*

## How to Handle Legacy APIs

Internal API discovery and consistency are two of the major API issues for enterprises today. Looming as perhaps an even bigger issue, are older APIs that companies must still support. Frequently, these interfaces were created before any existing governance guidelines, often using outdated technology. This sort of technical debt cannot be tackled at once. Still, organizations should have a plan for their legacy codebase.

In Harmon's various roles (which included CTO at Typeform, in addition to PayPal and Expedia), API design happens before any new development on legacy APIs. *"Generally, a facade with a newer design is drafted to be the desired future state,"* Harmon said. *"This acts as a new interface to Legacy APIs, so clients can start using a somewhat improved form factor, although there are usually short-term compromises."*

At **Euler Hermes**, *"any new version should go through the governance process,"* Rutard said. *"Sometimes you make an exception if there's an API that definitely won't have an external usage. Then we may simply accept that its design stays ugly, as long as the consuming developers get along with the API."*

*"When it comes to our catalog management, our **first** priority, even above adherence to standards, is being listed,"* said Reinbold. *"Once something is cataloged, we can begin 'eventual consistency' with our guidelines. This is where the API is discoverable but listed as out of compliance. When the team begins work on the next breaking version, we begin reconciling some of those incompatibilities."*

Mauny again stressed the importance of security across all APIs, new and legacy. *"Continuously test for potential vulnerabilities, making security testing fully part of the API testing,"* she said. *"In other words, test the 'hacky' path, not just the happy path. Bombard your APIs with wrong data (such as in a bad format), bad tokens, and malicious content."*

## Manage API Design Across the Lifecycle

As Mauny mentioned, there's a place for [testing at every stage](https://stoplight.io/blog/api-integration-testing/), whether it's from a security perspective, to confirm that APIs match their descriptions, or as a way to ensure consistency. 

[Stoplight Studio](https://stoplight.io/studio/) is an API design management platform that connects to your existing Git repository of OpenAPI, Swagger documents, and other documentation. It also allows you to visually create OpenAPI documents and maintain consistency across dozens, hundreds, or thousands of APIs.
