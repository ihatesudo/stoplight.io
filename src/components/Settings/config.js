export default {
  label: 'Site Settings',
  name: 'settings',
  create: false,
  delete: false,
  files: [
    {
      label: 'Site Settings',
      name: 'settings',
      file: 'netlify/settings.yaml',
      fields: [
        {
          label: 'Banners',
          name: 'banners',
          widget: 'list',
          fields: [
            {
              hint: 'When should the banner start showing?',
              name: 'starts',
              widget: 'datetime',
              format: 'x',
            },
            {
              hint: 'When should the banner stop showing?',
              name: 'ends',
              widget: 'datetime',
              format: 'x',
            },
            {
              name: 'markdown',
              widget: 'markdown',
            },
          ],
        },
        {
          label: 'Stoplight Info',
          name: 'info',
          widget: 'object',
          fields: [
            {
              name: 'email',
              label: 'email',
              widget: 'string',
            },
            {
              name: 'address',
              label: 'address',
              widget: 'object',
              fields: [
                {
                  name: 'addressLocality',
                  label: 'city',
                  widget: 'string',
                },
                {
                  name: 'addressRegion',
                  label: 'state',
                  widget: 'string',
                },
                {
                  name: 'postalCode',
                  label: 'zip',
                  widget: 'string',
                },
                {
                  name: 'streetAddress',
                  label: 'street address',
                  widget: 'string',
                },
                {
                  name: 'email',
                  label: 'email',
                  widget: 'string',
                },
                {
                  name: 'alternateName',
                  label: 'Alternate Name',
                  widget: 'string',
                },
                {
                  name: 'name',
                  label: 'name',
                  widget: 'string',
                },
                {
                  name: 'description',
                  label: 'description',
                  widget: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'header',
          label: 'Header',
          widget: 'object',
          fields: [
            {
              name: 'items',
              label: 'Items',
              widget: 'list',
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  widget: 'string',
                },
                {
                  name: 'width',
                  label: 'Width',
                  widget: 'number',
                  default: 400,
                },
                {
                  name: 'href',
                  label: 'Link',
                  widget: 'string',
                  required: false,
                },
                {
                  name: 'isButton',
                  label: 'Is it a button?',
                  widget: 'boolean',
                  required: false,
                },
                {
                  name: 'hideMobile',
                  label: 'Hide this link in the mobile menu?',
                  widget: 'boolean',
                  required: false,
                },
                {
                  name: 'icon',
                  label: 'Icon (button only)',
                  widget: 'string',
                  required: false,
                },
                {
                  name: 'onClick',
                  label: 'Action',
                  widget: 'select',
                  required: false,
                  options: [{ label: 'Open Intercom', value: 'intercom' }],
                },
                {
                  name: 'links',
                  label: 'Links',
                  widget: 'list',
                  required: false,
                  fields: [
                    {
                      name: 'title',
                      label: 'Title',
                      widget: 'string',
                    },
                    {
                      name: 'subtitle',
                      label: 'Subtitle',
                      widget: 'string',
                      required: false,
                    },
                    {
                      name: 'href',
                      label: 'Link',
                      widget: 'string',
                      required: false,
                    },
                    {
                      name: 'onClick',
                      label: 'Action',
                      widget: 'select',
                      required: false,
                      options: [{ label: 'Open Intercom', value: 'intercom' }],
                    },
                    {
                      name: 'titleColor',
                      label: 'Color',
                      widget: 'string',
                      required: false,
                    },
                    {
                      name: 'icon',
                      label: 'Icon',
                      widget: 'string',
                      required: false,
                    },
                  ],
                },
                {
                  name: 'altTitle',
                  label: 'Alternate Title',
                  widget: 'string',
                  hint: 'Title shown after scrolling the page. (Example: Sign In -> Sign Up FREE)',
                  required: false,
                },
                {
                  name: 'altBg',
                  label: 'Alternate Background Color',
                  hint: 'Background color shown after scrolling the page. (Only valid for buttons)',
                  widget: 'string',
                  default: 'green',
                  required: false,
                },
              ],
            },
          ],
        },
        {
          name: 'actionBar',
          label: 'Action Bar',
          widget: 'object',
          required: false,
          fields: [
            {
              name: 'ctas',
              label: 'CTAs',
              widget: 'list',
              required: false,
              fields: [
                {
                  name: 'href',
                  label: 'Link',
                  widget: 'string',
                  required: false,
                },
                {
                  name: 'title',
                  label: 'Title',
                  widget: 'string',
                  required: false,
                },
              ],
            },
            {
              name: 'enabled',
              label: 'Enabled',
              widget: 'boolean',
              required: false,
            },
            {
              name: 'text',
              label: 'Text',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          name: 'footer',
          label: 'footer',
          widget: 'object',
          required: false,
          fields: [
            {
              name: 'columns',
              label: 'Columns',
              widget: 'list',
              required: false,
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  widget: 'string',
                },
                {
                  name: 'links',
                  label: 'Links',
                  widget: 'list',
                  required: false,
                  fields: [
                    {
                      name: 'title',
                      label: 'Title',
                      widget: 'string',
                    },
                    {
                      name: 'href',
                      label: 'Link',
                      widget: 'string',
                      required: false,
                    },
                    {
                      name: 'onClick',
                      label: 'Action',
                      widget: 'select',
                      required: false,
                      options: [{ label: 'Open Intercom', value: 'intercom' }],
                    },
                  ],
                },
              ],
            },
            {
              name: 'legal',
              label: 'Legal links',
              widget: 'list',
              required: false,
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  widget: 'string',
                },
                {
                  name: 'href',
                  label: 'Link',
                  widget: 'string',
                },
              ],
            },
            {
              name: 'social',
              label: 'Social Media',
              widget: 'list',
              required: false,
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  widget: 'string',
                },
                {
                  name: 'icon',
                  label: 'Icon',
                  widget: 'string',
                  required: false,
                  hint: 'Must be a fontawesome icon like check-circle',
                },
                {
                  name: 'href',
                  label: 'Link',
                  widget: 'string',
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Meta Tags',
          name: 'meta',
          widget: 'object',
          required: false,
          hint: 'Defaults to the meta tags defined in Site Settings',
          fields: [
            {
              label: 'Favicon',
              name: 'favicon',
              widget: 'image',
              required: false,
            },
            {
              name: 'title',
              label: 'Site Name',
              widget: 'string',
              required: false,
            },
            {
              label: 'description',
              name: 'description',
              widget: 'string',
              required: false,
            },
            {
              label: 'URL',
              name: 'url',
              widget: 'string',
              required: false,
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
              required: false,
            },
            {
              label: 'Robots',
              name: 'robots',
              widget: 'string',
              default: 'index, follow',
              required: false,
            },
            {
              label: 'Canonical',
              name: 'canonical',
              widget: 'string',
              required: false,
            },
            {
              label: 'Twitter',
              name: 'twitter',
              widget: 'object',
              required: false,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                  required: false,
                },
                {
                  label: 'Username',
                  name: 'username',
                  widget: 'string',
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Integrations',
          name: 'integrations',
          widget: 'object',
          fields: [
            {
              name: 'googleTagManager',
              label: 'Google Tag Manager',
              widget: 'string',
              required: false,
            },
            {
              name: 'hubspot',
              label: 'HubSpot ID',
              widget: 'string',
              required: false,
            },
            {
              name: 'intercom',
              label: 'Intercom App ID',
              widget: 'string',
              required: false,
            },
          ],
        },
      ],
    },
  ],
};
