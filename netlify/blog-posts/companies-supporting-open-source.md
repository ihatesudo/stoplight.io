---
path: /blog/companies-supporting-open-source
tags:
  - blog
  - blog-general
relatedTags:
  - blog-general
publishedDate: 2020-02-11
author: Phil Sturgeon
title: >-
  Companies Supporting Open-Source
subtitle: >-
  A look at the ways companies use and support open-source projects.
image: /images/supporting-open-source.jpg
includeToc: false
actionBar:
  enabled: false
meta:
  url: https://stoplight.io/blog/companies-supporting-open-source/
  description: >-
    A look at the ways companies use and support open-source projects.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    Companies Supporting Open-Source
  image: /images/supporting-open-source.jpg
  twitter:
    title: >-
      Stoplight Blog: Companies Supporting Open-Source
    image: /images/supporting-open-source.jpg
    username: '@stoplightio'
---

Companies like Stoplight stand on the shoulders of giants, by combining existing open-source tooling, built around freely available open standards, to produce a combination of open and closed source code. We don't want to just take from open-source, we want to support the projects we use, and there are three main ways that companies can do that.

- Give Money
- Give Time
- Give Thanks

Why? Well, other than being the right thing to do, not supporting projects can lead to them going unmaintained. This happens for a whole variety of reasons, including burnout, amongst other things. We don't want anyone suffering from that, but even if the feelings of strangers on the internet don't motivate you, consider what you will do if that project shuts down. Rewriting a bunch of code, or *having to build your own replacement*, can take a lot of time and money out of your hands that could be spent on working on your core business.

Whether you pick altruism or self-preservation, the solutions to supporting open-source projects remain very much the same.

## Give Money

### Sponsorship

Open-source projects are a lot of work. Some projects are maintained by companies that have an income stream already. Many more are managed by volunteers in their spare time. Giving them money for their work - especially when it's something you make money from - makes sense.

Some open-source projects are on [Patreon](https://www.patreon.com/), some are on [Open Collective](http://opencollective.com), and more recently, many have enabled [GitHub Sponsorship](https://github.com/sponsors).

At Stoplight, we are constructing a list of projects which matter to us, and figuring out how we can pay them an appropriate amount.

Sometimes I bribe people to merge my PR by clicking the "Buy me a coffee" button. This is small stuff, but it’s appreciated a little, I'm sure. For massively important projects like [JSON Schema](https://opencollective.com/json-schema), we set up monthly donations, which helps them cover admin fees, domain costs, email hosting, whatever it is they gotta pay for, including a part-time stipend if they want. Whatever keeps the project running smoothly, it's up to them.

Sometimes project contributions can become enough that the contributors stop doing things on the side, and turn it into a day job. This has rarely (if ever) been bad for a community.

If you need help figuring out which projects you can fund, and you're using npm, you can type `npm fund`.

### Jobs & Contracting

We had one developer using Spectral at their day job, and like many others in that position, they were reporting bugs and requesting features. Unlike many, they were also contributing pull requests, and not just that but were updating documentation as they did it, tidying up the codebase as they want, and just being awesome.

There would have been an argument for letting them just keep going (essentially having their day-job pick up a bit of our developer payroll!), but we decided instead to contract that developer part-time.

If you ever need to hire new developers, looking at your GitHub contributor list is an excellent place to start. After all, you know they know the codebase, you know they are passionate about the domain, so if they're up for it: welcome aboard!

## Give Time

There are a lot of ways companies can give time to open-source projects, but I'm gonna talk about a few we've done here at Stoplight.

### Contribute Changes Upstream

We used to maintain a lot of our own forks, but over the last year, we've gone on an upstreaming expedition.

For example, we use JSON Schema Faker in our [open-source HTTP mocking server Prism](https://stoplight.io/open-source/prism), and [Vincenzo Chianese](https://github.com/XVincentX) sent two PRs in order to remove the need for our fork.

- [Keep required properties in `allOf` selection](https://github.com/json-schema-faker/json-schema-faker/pull/524)
- [Swapped jsonpath for jsonpath-plus](https://github.com/json-schema-faker/json-schema-faker/pull/518) (which was considerably quicker in our benchmarks)

[Jakub Rożek](https://github.com/P0lip) sent a few PRs to [microsoft/node-jsonc-parser](https://github.com/microsoft/node-jsonc-parser) ([#17](https://github.com/microsoft/node-jsonc-parser/pull/17) and [#24](https://github.com/microsoft/node-jsonc-parser/pull/24)).

[Karol Maciaszek](https://github.com/karol-maciaszek) has a few tweaks for sorting out Python and PowerShell code examples for [kong/httpsnippet](https://github.com/Kong/httpsnippet) ([#133](https://github.com/Kong/httpsnippet/pull/138) and [#138](https://github.com/Kong/httpsnippet/pull/138)).

Doing this, we managed to axe a bunch of repos from our organization, taking us from 240 (😱) down to 197 (😅). _More work to be done_.

If you need a sales pitch to get your boss to approve this, and "it's the right thing to do" isn't landing, you can explain that your team will no longer have to maintain these forks. Keeping an in-house fork up-to-date with features, security patches, possible conflicts, etc. is a time suck.

Getting your changes accepted and merged seems like it will take a long time, but one of those PRs to JSON Schema Faker was merged in 6 hours, and a new release was tagged minutes later.

On the rare occasion that the maintainer flatly refuses your change, and no amount of reasoning or cooperation will solve the disagreement... well, you have some options. If the project is some sort of library and your change is mostly a convenience method, you could just abstract that library a little, and add the convenience method to your layer instead. If it is more fundamental than that, and you *know* it's a good change, then that's what forks are for! Come up with a new name, make a sweet logo, do the whole thing, and publish that fork under your company name. Make them wish they'd accepted it! 😋

### Contribute to Standards

Groups like [The OpenAPI Initiative](https://openapis.org) and [JSON Schema](https://json-schema.org/) are massively important to the API ecosystem and are disproportionately crucial to Stoplight as we build tooling directly on top of them.

Thanks to Stoplight giving me time to get on the OpenAPI TSC calls, various cool things have happened, like us finally getting [OpenAPI v3.1 to use proper JSON Schema](https://apisyouwonthate.com/blog/openapi-v31-and-json-schema-2019-09).

Us tooling vendors have a crucial role in standards bodies like OpenAPI, as somebody needs to try implementing proposed new functionality to see if it's any good.

Recently we tried out the [Alternative Schemas proposal](https://github.com/OAI/OpenAPI-Specification/blob/master/proposals/001_Alternative%20Schema%20Proposal.md), and it did not go too well. It would have been almost impossible for us to implement and would have provided very little value. After we [shared our feedback](https://github.com/OAI/OpenAPI-Specification/issues/1943), the group focused efforts on the OpenAPI == JSON Schema resolution, which *did* solve the problems for our users, and *does* have a very clear path to implementation.

### Work with Contributors

Nothing is better for fostering a thriving open-source community than welcome contributions from first-timers. They could be new to open-source in general, new to the language/framework your projects are in, or new to your projects. Maybe these users need help sending pull requests, running the test suite, understanding test output, solving conflicts, etc.

Whatever type of new they are, if your maintainers can spend a little time ramping these new contributors up, you can benefit along with the whole open-source community.

I'm not suggesting heroic efforts here, a lot of the time it is just a case of pleasantly pointing folks to a blog post, or Git guide. Some maintainers can get grumpy, even hostile, but if your company can teach patience as a virtue, you'll see growth in contributions, and occasionally get lovely feedback like this.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Made my first <a href="https://twitter.com/hashtag/OSS?src=hash&amp;ref_src=twsrc%5Etfw">#OSS</a> contributions to <a href="https://twitter.com/stoplightio?ref_src=twsrc%5Etfw">@stoplightio</a>. Their maintainers are the sorts of folks that make me want to contribute even more! Thank you! <a href="https://twitter.com/hashtag/Hacktoberfest?src=hash&amp;ref_src=twsrc%5Etfw">#Hacktoberfest</a></p>&mdash; Doc (@stl_dev) <a href="https://twitter.com/stl_dev/status/1179787407157350400?ref_src=twsrc%5Etfw">October 3, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

😎

## Give Thanks

You can give people and projects a shout-out in a **Thanks** section of the readme.

For example, in Spectral, we talk about some of the [people who did awesome work](https://github.com/stoplightio/spectral#thanks).

If you can't spare the money, this is the least you can do.

## Summary

Open-source is hard work. A lot of people get stuck in situations where they no longer use something they've open-sourced, and are stuck maintaining it with hordes of people making demands on their time.

![Supporting Open-Source Meme by @markdalgleish](/images/open-source-support-meme.png)

<a style="background-color:#1DA1F2;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://twitter.com/markdalgleish/status/1225938204605341696?s=20" target="_blank" rel="noopener noreferrer" title="Tweet From Mark Dalgleish"><span style="display:inline-block;padding:2px 3px">Meme by @markdalgleish</span></a>

---
