# stoplight.io

[stoplight.io](https://stoplight.io), Best in class API Design, Docs, Mocking, and Testing.

[![Netlify Status](https://api.netlify.com/api/v1/badges/dce90519-4481-4982-b239-afe64fd2f01a/deploy-status)](https://app.netlify.com/sites/stoplightio/deploys)

## Features

- [React Static](https://github.com/nozzle/react-static) - A progressive static site generator for React
- [Tailwind](https://tailwindcss.com/docs/what-is-tailwind) - A utility-first CSS framework for
  rapidly building custom designs
- [Fontawesome](https://fontawesome.com) - Vector icons and social logos
- [Netlify](https://www.netlify.com/) - Continuous deployment and hosting
- [Netlify CMS](https://www.netlifycms.org/) - Open source content management for your Git workflow

## Project Structure

- [netlify](./netlify): Content files created in NetlifyCMS that power the [src/templates](./src/templates)
- [public](./public): Static files that are copied into `dist` at build time such as images
- [src/templates](./src/templates): Templates receive data from content files in [/netlify](./netlify) and are rendered into static HTML pages
- [src/components](./src/components): Reusable React components that are used by [src/templates](./src/templates)
- [src/utils](./src/utils): Utility functions used by components and the build process
- [static.config.js](./static.config.js): The [react-static](https://github.com/nozzle/react-static) configuration file used to build the site

## Getting Started

### Installation

1. Run `yarn install` to install the sites dependencies
2. Run `yarn start` to start the local development server
3. Go to http://localhost:3000

### Create a Route

A route is a combination of a content file in [./netlify](./netlify), a template in [./src/templates](./src/templates), and a browser path.

1. Read the react-static docs on [adding a route](https://github.com/nozzle/react-static/blob/master/docs/config.md#getroutes).
2. Add a route to [getRoutes function](./src/utils/getRoutes.js).

Here's an example:

```ts
{
  path: '/enterprise', // Creates a route for /enterprise
  template: 'src/templates/Enterprise', // Loads the Enterprise template whenever a user lands on /enterprise
  getData: () => getFile(`./netlify/pages/enterprise.yaml`), // Reads the file data from the enterprise.yaml file and passes it into the Template
},
```

### Create a Template

1. Create a new folder in `src/templates/{page name}`.
2. Add an `index.tsx` file that default exports a React component.
3. Add a `config.js` that exports the [NetlifyCMS configuration](https://www.netlifycms.org/docs/configuration-options/#collections) for the page.

### Useful Commands

```bash
# starts the local development server
yarn start

# build for a staging environment
yarn build

# build the production environment
yarn build.production

# outputs an analysis of the build
yarn build.analyze

# starts a local server running a build in /dist
yarn serve

# runs the typescript linter
yarn lint
```

### Environment Variables

- `RELEASE_STAGE`: determines which environment to run: development, staging or production
- `CLOUDINARY_API_KEY`: used by the admin portal for uploading images to [Cloudinary](https://cloudinary.com/)

### License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
