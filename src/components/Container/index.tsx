import cn from 'classnames';
import * as React from 'react';

import { CallToAction, ICallToAction } from '../CallToAction';
import { Chips, IChips } from '../Chip';

export interface IContainer {
  chips?: IChips;
  className?: string;
  title?: string;
  description?: string;
  cta?: ICallToAction;
  style?: object;
}

export const Container: React.FunctionComponent<IContainer> = ({ chips, className, children, title, style, cta }) => {
  return (
    <div className={cn('container', className)} style={style}>
      {chips && <Chips {...chips} />}

      {title && <h3 className="mb-20 text-4xl text-center md:mb-14">{title}</h3>}

      {children}

      {cta && (
        <div className="flex justify-center mt-24 md:mt-14">
          <CallToAction {...cta} />
        </div>
      )}
    </div>
  );
};
