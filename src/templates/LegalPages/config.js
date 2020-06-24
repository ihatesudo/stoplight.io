// import info from 'src/components/Info/config';
import metaTags from 'src/components/MetaTags/config';
import actionBar from 'src/components/ActionBar/config';
// import quote from 'src/components/Quote/config';

// import { addFields } from '../../utils/netlify';

export const LegalPageConfig = {
  label: 'Legal',
  label_singular: 'Legal',
  name: 'legal-pages',
  folder: 'netlify/legal-pages',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'md',
  format: 'yaml-frontmatter',
  fields: [
    {
      label: 'URL path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Publish Date',
      name: 'publishedDate',
      widget: 'date',
      dateFormat: 'MMM DD, YYYY',
      required: false,
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'SubTitle',
      name: 'subtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'string',
      default: 'black',
      required: false,
    },
    {
      name: 'tabs',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          name: 'href',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Include table of contents? (default: true)',
      name: 'includeToc',
      widget: 'boolean',
      required: false,
      default: true,
    },
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown',
      required: false,
    },
    actionBar,
    metaTags,
  ],
};



