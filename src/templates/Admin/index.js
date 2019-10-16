import React from 'react';
import ReactDOM from 'react-dom';
import CMS from 'netlify-cms-app';
import { Portal } from '../../components/Portal';

// import { About } from 'src/templates/About';
// import { Form } from 'src/templates/Form';
// import { Home } from 'src/templates/Home';
// import { Landing } from 'src/templates/Landing';
// import { Pricing } from 'src/templates/Pricing';
// import { Subpage } from 'src/templates/Subpage';
// import { List } from 'src/templates/Lists';
// import Settings from 'src/components/Settings';
// import { convertMarkdownToHTML } from 'src/utils/markdown';

import { config } from './config';

// import previewStyles from '!css-loader!./styles.css';

// const templates = {
//   settings: Settings,

//   form: Form,
//   about: About,
//   home: Home,
//   pricing: Pricing,

//   lists: List,
//   author: List,
//   landings: Landing,

//   subpage: Subpage,
//   caseStudy: Subpage,
//   blogPost: Subpage,
// };

export default () => {
  React.useEffect(() => {
    console.log(`CMS [${process.env.NODE_ENV}]`, CMS, config);

    // CMS.registerPreviewStyle(previewStyles, { raw: true });

    // Object.keys(templates).forEach(collectionName => {
    //   const Template = templates[collectionName];

    //   if (Template) {
    //     CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
    //       const props = entry.getIn(['data']).toJS();

    //       return <Template {...convertMarkdownToHTML(props, { includeToc: props.includeToc })} />;
    //     });
    //   }
    // });
    // ReactDOM.createPortal(<div id="nc-root"></div>, document.getElementById('root'));

    CMS.init({ config });
  }, []);

  return null;
};
