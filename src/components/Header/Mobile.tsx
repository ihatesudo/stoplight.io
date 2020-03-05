import cn from 'classnames';
import * as React from 'react';

import { Icon } from '../Icon';
import { Link } from '../Link';

export const Mobile = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="justify-end flex-1 hidden sm:flex">
      <div onClick={() => setShowMenu(!showMenu)}>
        <div className={cn('cursor-pointer ml-3 text-white', { hidden: !showMenu })}>
          <Icon icon={['fad', 'times']} size="2x" />
        </div>

        <div className={cn('cursor-pointer ml-3 text-white', { hidden: showMenu })}>
          <Icon icon={['fad', 'bars']} size="2x" />
        </div>
      </div>

      {showMenu && (
        <div className="fixed z-50 flex flex-col mt-16 overflow-y-auto pin">
          <div className="relative m-4 bg-white rounded shadow-md" onClick={() => setShowMenu(false)}>
            <div className="flex flex-wrap pt-10 pl-10">
              <Section
                title="Products"
                links={[
                  {
                    to: '/studio',
                    title: 'Stoplight Studio',
                  },
                  {
                    to: '/docs',
                    title: 'Stoplight Docs',
                  },
                  {
                    to: '/explorer',
                    title: 'Stoplight Explorer',
                  },
                  {
                    to: '/mocking',
                    title: 'Stoplight Mocking',
                  },
                  {
                    to: '/enterprise',
                    title: 'Stoplight Enterprise',
                  },
                ]}
              />

              <Section
                title="Solutions"
                links={[
                  {
                    to: '/design',
                    title: 'Design',
                  },
                  {
                    to: '/development',
                    title: 'Development',
                  },
                  {
                    to: '/mocking',
                    title: 'Mocking',
                  },
                  {
                    to: '/docs',
                    title: 'Documentation',
                  },
                  {
                    to: '/visibility',
                    title: 'Visibility',
                  },
                  {
                    to: '/governance',
                    title: 'Governance',
                  },
                  {
                    to: '/consistency',
                    title: 'Consistency',
                  },
                  {
                    to: '/collaboration',
                    title: 'Collaboration',
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

              <Section
                title="Resources"
                links={[
                  {
                    to: 'https://support.stoplight.io',
                    title: 'Help Center',
                  },
                  {
                    to: '/blog',
                    title: 'Blog',
                  },
                  {
                    to: 'https://community.stoplight.io',
                    title: 'Forum',
                  },
                  {
                    to: '/case-studies',
                    title: 'Case Studies',
                  },
                  {
                    to: '/video',
                    title: 'Webinars',
                  },
                ]}
              />
              <Section
                title="About"
                links={[
                  {
                    to: '/about',
                    title: 'About Us',
                  },
                  {
                    to: '/careers',
                    title: 'Careers',
                  },
                ]}
              />
            </div>

            <Link to="/demo" className="block w-full p-4 mt-10 font-bold text-center text-white bg-primary">
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
