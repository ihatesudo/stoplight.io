import cn from 'classnames';
import * as React from 'react';

import { Icon } from '../Icon';
import { Link } from '../Link';

export const Mobile = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="justify-end flex-1 hidden sm:flex">
      <div onClick={() => setShowMenu(!showMenu)}>
        <div className={cn('cursor-pointer ml-3 text-blue2', { hidden: !showMenu })}>
          <Icon icon={['fad', 'times']} size="2x" />
        </div>

        <div className={cn('cursor-pointer ml-3 text-blue2', { hidden: showMenu })}>
          <Icon icon={['fad', 'bars']} size="2x" />
        </div>
      </div>

      {showMenu && (
        <div className="fixed inset-0 z-50 flex flex-col mt-16 overflow-y-auto">
          <div className="relative m-4 bg-white rounded shadow-md" onClick={() => setShowMenu(false)}>
            <div className="flex flex-wrap pt-10 pl-10">
              <Section
                title="Use Cases"
                links={[
                  {
                    to: '/api-design/',
                    title: 'Design',
                  },
                  {
                    to: '/api-development/',
                    title: 'Development',
                  },
                  {
                    to: '/api-mocking/',
                    title: 'Mocking',
                  },
                  {
                    to: '/api-documentation/',
                    title: 'Documentation',
                  },
                  {
                    to: '/api-visibility/',
                    title: 'Visibility',
                  },
                  {
                    to: '/api-governance/',
                    title: 'Governance',
                  },
                  {
                    to: '/api-collaboration/',
                    title: 'Collaboration',
                  },
                ]}
              />

              <Section
                title="Learn"
                links={[
                  {
                    to: '/enterprise',
                    title: 'Enterprise',
                  },
                  {
                    to: '/pricing',
                    title: 'Pricing',
                  },
                  {
                    to: '/blog',
                    title: 'Blog',
                  },
                  {
                    to: '/video',
                    title: 'Videos',
                  },
                  {
                    to: '/case-studies',
                    title: 'Case Studies',
                  },

                  {
                    to: 'https://meta.stoplight.io/docs/platform/a.getting-started.md',
                    title: 'Read The Docs',
                  },
                ]}
              />

              <Section
                title="Open Source"
                links={[
                  {
                    to: '/open-source/spectral',
                    title: 'Spectral',
                  },
                  {
                    to: '/open-source/prism',
                    title: 'Prism',
                  },
                ]}
              />

              <Section
                title="Guides"
                links={[
                  {
                    to: '/api-design-guide/basics',
                    title: 'API Design Guide',
                  },
                  {
                    to: '/mock-api-guide/basics',
                    title: 'API Mocking Guide',
                  },
                  {
                    to: '/api-documentation-guide/basics',
                    title: 'API Documentation Guide',
                  },
                ]}
              />
            </div>

            <Link
              to="/demo?utm_source=mobile_site&utm_medium=nav&utm_campaign=v2_launch"
              className="block w-full p-4 mt-10 font-bold text-center text-white bg-primary"
            >
              Book a Demo
            </Link>
          </div>

          <div className="flex-grow" onClick={() => setShowMenu(false)} />
        </div>
      )}
    </div>
  );
};

const Section = ({ title, links }) => {
  return (
    <div className="flex flex-col flex-1 mb-10 mr-10" style={{ minWidth: 125 }}>
      <div className="pb-2 font-bold uppercase border-b text-grey-darker">{title}</div>

      {links.map((link, key) => (
        <Link key={key} className="block mt-4 font-medium text-grey-darker" to={link.to}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};
