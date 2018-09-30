import React from 'react';
import cn from 'classnames';
import { withSiteData, Link } from 'react-static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

import { sizes, colors, Icon, Popup } from '@stoplight/ui';

import Intercom from '@utils/intercom';

export const headerHeightClass = 'h-20';

const Header = ({ headerProps }) => {
  const { products } = headerProps || {};

  return (
    <header className="absolute z-10 pin-t pin-l pin-r">
      <div className="container">
        <nav className={cn(headerHeightClass, 'flex items-center')}>
          <Link to="/" className="text-white hover:opacity-75 hover:text-white text-2xl font-bold">
            Stoplight
          </Link>

          <div className="flex flex-1 justify-end items-center text-lg">
            {products && (
              <Popup
                width={300}
                posX="center"
                posY="bottom"
                renderTrigger={attributes => (
                  <div
                    className="flex select-none cursor-pointer ml-3 text-white hover:opacity-85 hover:text-white py-2 px-4 mx-2"
                    {...attributes}
                  >
                    <div className="flex-1 mr-2">Products</div>
                  </div>
                )}
                renderContent={() => (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    {products.map((product, index) => {
                      return (
                        <Link
                          key={index}
                          to={product.path}
                          className="flex text-black hover:text-accent-light"
                        >
                          <span className="flex w-12 items-center">
                            {product.icon && <FontAwesomeIcon icon={['fas', product.icon]} />}
                          </span>
                          <span className="flex-1">
                            <span className="text-xl font-bold block">{product.title}</span>
                            <span className="block opacity-75">{product.description}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              />
            )}

            <Popup
              width={300}
              posX="center"
              posY="bottom"
              renderTrigger={attributes => (
                <div
                  className="flex select-none cursor-pointer ml-3 text-white hover:opacity-85 hover:text-white py-2 px-4 mx-2"
                  {...attributes}
                >
                  <div className="flex-1 mr-2">Resources</div>
                </div>
              )}
              renderContent={() => (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <a
                    className="flex text-black hover:text-accent-light"
                    href="http://docs.stoplight.io/"
                  >
                    <span className="flex w-12 items-center">
                      <Icon icon={faBook} size={sizes.xl} color={colors.accent} />
                    </span>
                    <span className="flex-1">
                      <span className="text-xl font-bold block">Docs</span>
                      <span className="block opacity-75">Learn how to use Stoplight</span>
                    </span>
                  </a>

                  <a
                    className="flex text-black hover:text-accent-light mt-6"
                    href="https://community.stoplight.io/"
                  >
                    <span className="flex w-12 items-center">
                      <Icon icon={faUsers} size={sizes.xl} color={colors.accent} />
                    </span>
                    <span className="flex-1">
                      <span className="text-xl font-bold block">Community</span>
                      <span className="block opacity-75">Join the Stoplight community</span>
                    </span>
                  </a>

                  <a
                    className="flex text-black hover:text-accent-light mt-6"
                    href="https://blog.stoplight.io"
                  >
                    <span className="flex w-12 items-center">
                      <Icon icon={faRss} size={sizes.xl} color={colors.accent} />
                    </span>
                    <span className="flex-1">
                      <span className="text-xl font-bold block">Blog</span>
                      <span className="block opacity-75">Stay up to date on Stoplight</span>
                    </span>
                  </a>

                  <a
                    className="flex text-black hover:text-accent-light mt-6 cursor-pointer"
                    onClick={e => {
                      e.preventDefault();

                      if (Intercom.sdk()) {
                        Intercom.show();
                      }
                    }}
                  >
                    <span className="flex w-12 items-center">
                      <Icon icon={faComments} size={sizes.xl} color={colors.accent} />
                    </span>
                    <span className="flex-1">
                      <span className="text-xl font-bold block">Chat</span>
                      <span className="block opacity-75">Ask us anything</span>
                    </span>
                  </a>
                </div>
              )}
            />
            <Link
              to="/pricing"
              className="text-white hover:opacity-85 hover:text-white py-2 px-4 mx-2"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center text-lg">
            <Link
              to="https://next.stoplight.io/login"
              className="text-white hover:opacity-85 hover:text-white py-4 px-4 mx-2"
            >
              Log In
            </Link>

            <Link
              to="https://next.stoplight.io/join"
              className="text-white hover:opacity-85 hover:text-white py-4 pl-4 pr-2 ml-2 flex items-center"
            >
              Join <Icon icon={faArrowRight} color={colors.white} className="ml-3" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withSiteData(Header);
