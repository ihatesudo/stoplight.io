import hero from 'src/components/Hero/config';
import metaTags from 'src/components/MetaTags/config';
import pricingPlans from 'src/components/PricingPlans/config';
import docPlans from 'src/components/DocPlans/config';

export default {
  label: 'Pricing',
  name: 'pricing',
  file: 'netlify/pages/pricing.yaml',
  fields: [
    {
      name: 'path',
      label: 'path',
      widget: 'string',
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'string',
      default: 'black',
      required: false,
    },
    hero,
    pricingPlans,
    docPlans,
    metaTags,
  ],
};
