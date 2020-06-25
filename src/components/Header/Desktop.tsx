import cn from 'classnames';
import * as React from 'react';

import { IHeaderItem } from '.';
import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';
import { Popup } from '../Popup';

const DropdownItem = (item, index) => {
  if (item.divider) {
    return <div key={index} style={{ height: 1 }} className="my-3 bg-grey-light" />;
  }

  return (
    <Link
      key={index}
      to={item.href}
      className={cn('flex items-center pr-6 pl-3 py-2 rounded-lg text-black hover:bg-white hover:shadow', {
        'pl-3': !item.icon,
      })}
    >
      {item.icon && (
        <Icon className={cn('fa-fw mr-3', { [`text-${item.titleColor}`]: item.titleColor })} icon={item.icon} />
      )}

      {item.title}
    </Link>
  );
};

const HeaderDropdown: React.FunctionComponent<IHeaderItem> = ({
  width,
  title,
  links,
  aboutLinks,
  content,
  className,
}) => {
  if (!content && (!links || !links.length) && (!aboutLinks || !aboutLinks.length)) {
    return null;
  }
  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={(attributes, { isVisible }) => (
        <div
          className={cn(
            className,
            'flex items-center select-none cursor-default text-black rounded-lg px-3 py-1 mx-3 hover:bg-lighten-50 opacity-85 relative',
            {
              'opacity-100 bg-lighten-50': isVisible,
            }
          )}
          {...attributes}
        >
          {title}
          <Icon icon="angle-down" className="ml-2" />

          {isVisible && (
            <div className="HeaderPopover__caret text-grey-lighter">
              <Icon icon={['fad', 'caret-up']} />
            </div>
          )}
        </div>
      )}
      renderContent={() => (
        <div className="relative rounded-lg shadow-lg HeaderPopover bg-grey-lighter">
          {links && <div className="p-3">{links.map(DropdownItem)}</div>}
          {aboutLinks && <div className="p-3">{aboutLinks.map(DropdownItem)}</div>}
          {content && content()}
        </div>
      )}
    />
  );
};

const HeaderButton: React.FunctionComponent<IHeaderItem> = ({ title, href, icon, className }) => {
  return (
    <Link
      key="2"
      to={href}
      className={cn(
        'active-depress px-5 py-2 md:px-4 md:py-2 ml-5 md:ml-2 font-medium flex items-center border rounded-lg text-white hover:text-white border-lighten-300 hover:border-lighten-500 bg-lighten-50 whitespace-no-wrap',
        className
      )}
    >
      {title} {icon && <Icon icon={icon} className="ml-3" />}
    </Link>
  );
};

const ProductLink = ({
  name,
  description,
  className,
  color,
  tag,
  href,
  icon,
}: {
  name: string;
  description: string;
  className?: string;
  color: string;
  tag?: string;
  href: string;
  icon?: IconProp;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        className,
        `active-depress text-black border flex-1 rounded-lg p-6 bg-white hover:border-${color} hover:shadow-md cursor-pointer`
      )}
      style={{ width: 275 }}
    >
      {tag && (
        <div
          className={`inline-block rounded-full bg-${color}-lightest text-${color} text-sm font-semibold uppercase px-3 py-1 mb-2`}
        >
          {tag}
        </div>
      )}

      <div className="flex items-center">
        {icon && <Icon icon={icon} className={`text-lg mr-3 text-${color}`} />}
        <div className="text-lg font-medium whitespace-no-wrap">{name}</div>
        <Icon icon={['fad', 'arrow-right']} className="ml-4 text-grey-dark" />
      </div>

      <div className="mt-1 text-grey-dark">{description}</div>
    </Link>
  );
};

const OpenSourceLinks = () => {
  return (
    <div className="p-6">
      <div className="flex">
        <ProductLink
          name="Spectral"
          description="Create API style guides to increase API consistency and quality."
          color="blue"
          href="/open-source/spectral"
          icon={['fad', 'badge-check']}
          tag="Validation"
        />

        <ProductLink
          name="Prism"
          description="Powerful mock servers, driven by your OpenAPI design documents."
          className="ml-4"
          color="purple"
          href="/open-source/prism"
          icon={['fad', 'database']}
          tag="Mocking"
        />
      </div>
    </div>
  );
};

export const Desktop: React.FunctionComponent<{ items: IHeaderItem[]; unpinned: boolean }> = ({ items, unpinned }) => {
  if (!items || !items.length) return null;

  const aboutMenu = items.filter(i => i.aboutLinks);
  const nonButtons = items.filter(i => !i.isButton && i.title !== 'About');
  const buttons = items.filter(i => i.isButton);

  const nonButtonElems = nonButtons.map((item, index) => {
    const { title, href, links, altTitle } = item;

    if (links && links.length) {
      return <HeaderDropdown key={index} className="text-lg sm:hidden" {...item} />;
    }

    return (
      <Link
        key={index}
        to={href}
        className="px-3 py-1 mx-4 text-lg text-black rounded-lg opacity-85 hover:opacity-100 sm:hidden hover:text-black hover:bg-lighten-50"
      >
        {unpinned ? altTitle || title : title}
      </Link>
    );
  });

  const aboutDropDown = aboutMenu.map((item, index) => {
    const { title, href, aboutLinks, altTitle } = item;

    if (aboutLinks && aboutLinks.length) {
      return <HeaderDropdown key={index} className="text-lg sm:hidden" {...item} />;
    }

    return (
      <Link
        key={index}
        to={href}
        className="px-3 py-1 mx-4 text-lg text-white rounded-lg opacity-85 hover:opacity-100 sm:hidden hover:text-white hover:bg-lighten-50"
      >
        {unpinned ? altTitle || title : title}
      </Link>
    );
  });
  const buttonElems = buttons.map((item, index) => {
    const { title, href, icon, altTitle, bg, outlined } = item;
    return (
      <HeaderButton
        key={index}
        title={unpinned ? altTitle || title : title}
        href={href}
        icon={icon}
        className={cn(
          'sm:hidden',
          `border-blue2`,
          `hover:border-blue2-dark`,
          `focus:border-blue2-dark`,
          `sm:w-full inline-flex justify-center items-center select-none border cursor-pointer`,
          {
            [`bg-${bg} hover:bg-blue2-dark text-white`]: !outlined,
            [`text-blue2 hover:text-blue2-dark opacity-85 hover:opacity-100`]: outlined,
          }
        )}
      />
    );
  });

  return (
    <>
      <div className="flex-1" />
      {nonButtonElems}
      <HeaderDropdown title="Open Source" className="text-lg sm:hidden" content={() => <OpenSourceLinks />} />
      {buttonElems}
    </>
  );
};
