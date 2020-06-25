import cn from 'classnames';
import * as React from 'react';

import { slugify } from 'src/utils/slugify';

export interface ISection {
  id?: string;
  className?: string;
  noPadding?: boolean;
  noPaddingT?: boolean;
  noPaddingB?: boolean;
  style?: object;
}

export const Section: React.FunctionComponent<ISection> = ({
  id,
  children,
  className,
  noPadding,
  noPaddingT,
  noPaddingB,
  style,
}) => {
  return (
    <section
      id={slugify(id)}
      className={cn(className, 'relative md:px-0 z-5', {
        'pt-40 md:pt-20': !noPadding && !noPaddingT,
        'pb-40 md:pb-20': !noPadding && !noPaddingB,
      })}
      style={style}
    >
      {children}
    </section>
  );
};
