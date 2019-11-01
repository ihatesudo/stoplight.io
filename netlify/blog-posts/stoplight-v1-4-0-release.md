---
path: /blog/stoplight-v1-4-0-release
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2019-10-31T21:09:50.335Z
author: Robert Wallach
title: Stoplight v1.4.0 Release
subtitle: Studio and Platform
listSubtitle: Studio and Platform Releases | Stoplight API Corner
image: /images/changelog-stock.jpg
color: black
includeToc: true
actionBar:
  ctas: []
  enabled: false
meta:
  description: Studio and Platform Releases | Stoplight API Corner
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stoplight v1.4.0 Release | Stoplight API Corner
  image: /images/changelog-stock.jpg
  twitter:
    description: Studio and Platform Releases | Stoplight API Corner
    title: Stoplight v1.4.0 Release | Stoplight API Corner
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
disqus:
  enabled: true
---
# Studio v1.4.0

Stoplight Studio v1.4.0 is now available! Included in this release is removal of a previously-required directory structure and several bug fixes. Read more below.

To download the latest version of Studio Desktop, visit the download page [here](https://stoplight.io/studio/). Studio Web is included in the latest release of Stoplight Platform.

## Features Included in this Release

No More Folder Structure Requirements!

Prior to the v1.4.0 release, Studio required APIs and related models to be located under a "reference" folder at the root of the project repository. Starting with this release, the "reference" folder requirement has been lifted, allowing users to store APIs and JSON schema models wherever they choose. ([\#57](https://github.com/stoplightio/studio/issues/57))

## Fixes Included in this Release

An issue where certain JSON schema objects would not be properly recognized as JSON schema has been resolved ([\#211](https://github.com/stoplightio/studio/issues/211))

An issue where removing an API from the "API" sidebar would also remove extraneous files in the API's "reference" directory has been resolved ([\#197](https://github.com/stoplightio/studio/issues/197))

An issue where changes to security schemas would not be properly reflected in the operation data has been resolved ([\#187](https://github.com/stoplightio/studio/issues/187))

An issue where using the "Discard all changes" button to discard project changes didn't properly update the sidebar has been resolved ([\#184](https://github.com/stoplightio/studio/issues/184))

An issue where switching Git branches would not remove empty directories has been resolved ([\#14](https://github.com/stoplightio/studio/issues/14))



# Platform v1.4.0

Stoplight v1.4.0 is now available! Included in this release are improvements to project permissions and several bug fixes. Read more below.

To download the latest version of Stoplight Platform with Docker, use the "1.4.0" image tag. Stoplight's production and managed environments are automatically upgraded to the latest release.

## Features Included in this Release

Project Visibility Settings

A visibility toggle is now present under the project settings, allowing users to make documentation public. Previously this would require updating the permissions on the VCS project itself.

## Fixes Included in this Release

An issue preventing users from properly authenticating to Stoplight with Bitbucket Server credentials has been resolved.

Administrators are now warned about data loss when attempting to remove an external service.

Administrators are now warned if they are attempting to disable all authentication services.

The **SL_APP_SECRET** environment variable no longer requires being exactly 32 characters in length.
