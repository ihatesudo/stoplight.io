import cn from 'classnames';
import * as React from 'react';
import { useRouteData } from 'react-static';

import { Link } from '../Link';

export interface ITab {
  href: string;
  title: string;
  isActive?: boolean;
}

export interface ITabs {
  tabs: ITab[];
  className?: string;
}

export const Tab: React.FunctionComponent<ITab> = ({ isActive, href, title }) => {
  return (
    <Link
      className={cn('pt-3 pb-4 px-6 font-semibold whitespace-no-wrap mr-3 relative rounded-t-lg', {
        'text-grey-dark border-grey-lighter hover:border-grey-light': !isActive,
        'bg-grey-lighter text-blue border-grey-light z-5': isActive,
      })}
      style={{ top: 4, borderTopWidth: 4, borderLeftWidth: 4, borderRightWidth: 4 }}
      to={href}
    >
      {title}
    </Link>
  );
};

export const Tabs = ({ tabs, className }) => {
  const { path } = useRouteData();
  const reg = new RegExp(`^${path}$`);

  return (
    <div className={cn(className, 'relative z-5')}>
      <div className="container flex flex-no-wrap w-full md:flex-col md:text-center">
        {tabs.map(tab => (
          <Tab key={tab.href} isActive={reg.test(tab.href)} {...tab} />
        ))}
      </div>
      <div className="h-1 bg-grey-light relative z-1" />
    </div>
  );
};
