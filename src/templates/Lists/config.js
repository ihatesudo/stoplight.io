import metaTags from 'src/components/MetaTags/config';
import actionBar from 'src/components/ActionBar/config';
import pagination from 'src/components/Pagination/config';

export const ListsConfig = {
  label: 'Lists',
  label_singular: 'List',
  name: 'lists',
  folder: 'netlify/lists',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      label: 'URL Path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'string',
    },
    {
      name: 'title',
      widget: 'string',
    },
    {
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
    actionBar,
    metaTags,
    pagination,
  ],
};

export const AuthorConfig = {
  label: 'Authors',
  label_singular: 'Author',
  name: 'author',
  folder: 'netlify/authors',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      label: 'URL Path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'string',
    },
    {
      name: 'title',
      widget: 'string',
    },
    {
      name: 'subtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Author Title',
      name: 'pageName',
      widget: 'string',
      required: false,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
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
    actionBar,
    metaTags,
    pagination,
  ],
};
