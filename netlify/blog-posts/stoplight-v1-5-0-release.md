---
path: /blog/stoplight-v1-5-0-release
tags:
  - blog
publishedDate: 2019-11-12T19:26:13.173Z
author: Robert Wallach
title: Stoplight v1.5.0 Release
subtitle: Studio and Platform
listSubtitle: Studio and Platform v1.5.0 Releases | Stoplight API Intersection
image: /images/changelog-stock.jpg
includeToc: true
actionBar:
  ctas: []
  enabled: false
meta:
  description: 'November 8, 2019 Releases for Stoplight Studio and Platform'
  url: https://stoplight.io/blog/stoplight-v1-5-0-release/
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Studio and Platform v1.5.0 Releases | Stoplight API Intersection
  image: /images/changelog-stock.jpg
  twitter:
    description: 'November 8, 2019 Releases for Stoplight Studio and Platform'
    title: Studio and Platform v1.5.0 Releases | Stoplight API Intersection
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
---

## Studio v1.5.0

Stoplight Studio v1.5.0 is now available! Included in this release are several bug fixes.

To download the latest version of Studio Desktop, visit the download page [here](https://github.com/stoplightio/studio/releases). Studio Web is included in the latest release of Stoplight Platform.

### Features Included in this Release

**Export OpenAPI Files with References Included**

Right-clicking on an API in the sidebar now includes the **Export OpenAPI** option, which copies a version of the API with JSON Schema references resolved to your clipboard. This allows you to quickly retrieve your API in a single, self-contained file, which you can then use for other purposes (code generation, gateway integration, etc). ([\#126](https://github.com/stoplightio/studio/issues/126))

**"Try It" Tab Now Supports Multiple Servers**

The "Try It" tabs in Studio's Read view now support server selection, allowing users to send requests to any of the servers included in the API description. ([\#242](https://github.com/stoplightio/studio/issues/242))

### Fixes Included in this Release

- An issue where creating examples in the Forms editor would include an extra "value" property has been resolved. ([\#176](https://github.com/stoplightio/studio/issues/176))
- An issue where switching branches would not remove empty folders has been resolved.
- An issue where creating a new Spectral rule set would display "Currently form view can be rendered only for the default ruleset" in the Forms editor has been resolved.

## Platform v1.5.0

Stoplight v1.5.0 is now available! Included in this release are a few minor improvements and enhancements.

To download the latest version of Stoplight Platform with Docker, use the "1.5.0" image tag. Stoplight's production and managed environments are automatically upgraded to the latest release.

### Fixes Included in this Release

- **Dependency Graph** - An issue where inner definitions of a JSON Schema model would display as orphaned leaf nodes has been resolved.
- **Dependency Graph** - An issue where a model graph would not stop re-balancing for very large or complicated models has been resolved.
- An issue where proxied Git requests would sometimes return an incorrect Content-Type has been resolved.
- The **repo** scope is no longer required for Github OAuth applications.
- The embedded version of Studio has been updated to the v1.5.0 release.
