import hero from 'src/components/Hero/config';
import metaTags from 'src/components/MetaTags/config';
import features from 'src/components/Features/config';

export default {
  label: 'Enterprise',
  name: 'enterprise',
  file: 'netlify/pages/enterprise.yaml',
  fields: [hero, features, metaTags],
};
