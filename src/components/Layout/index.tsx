import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';
import Analytics from 'src/components/Analytics';
import Footer, { IFooterProps } from 'src/components/Footer';
import Header, { IHeader } from 'src/components/Header';

import { BannerVisibilityProvider } from '../../hooks/useBanner';

export interface ILayout {
  color?: string;
  header?: Partial<IHeader>;
  footer?: Partial<IFooterProps>;
}

const _Layout: React.FunctionComponent<ILayout> = ({ children, header, footer, color }) => {
  // console.log(foo);

  return (
    <BannerVisibilityProvider>
      <Analytics>
        <Header {...header} />

        <div className={cn('relative', { [`bg-${color}`]: color })}>{children}</div>

        <Footer {...footer} />
      </Analytics>
    </BannerVisibilityProvider>
  );
};

export const Layout = withSiteData<any, any>(withRouteData<any, ILayout>(_Layout));
