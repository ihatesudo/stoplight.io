import cn from 'classnames';
import * as React from 'react';

import { CallToAction, ICallToAction } from '../CallToAction';
import { Container } from '../Container';

export interface IActionBar {
  enabled: boolean;
  text: string;
  ctas: ICallToAction[];
  subtext?: string;
  className?: string;
  centered?: boolean;
}

export const ActionBar: React.FunctionComponent<IActionBar> = props => {
  const { enabled, text, ctas, className, centered, subtext } = props;

  if (!enabled) {
    return null;
  }

  return (
    <Container>
      <div
        className={cn(
          className,
          'ActionBar flex flex-col p-12 flex-wrap items-center sm:flex-col sm:justify-center bg-black rounded-lg shadow-md'
        )}
      >
        {text && (
          <div
            className={cn(
              'flex flex-1 font-semibold text-3xl pb-5 justify-center sm:pb-10 text-white sm:text-lg sm:text-center',
              { 'text-center': centered }
            )}
          >
            {text}
          </div>
        )}

        {subtext && (
          <div
            className={cn(
              'flex flex-1 font-semibold text-xl pb-5 -mt-3 justify-center text-white sm:pb-4 sm:text-lg sm:text-center'
            )}
          >
            {subtext}
          </div>
        )}

        {ctas && (
          <div className={cn('flex-1 flex mt-5 sm:justify-center sm:content-between sm:flex-wrap sm:mt-3')}>
            {ctas.map((cta, index) => (
              <CallToAction key={index} className={cn(index > 0 ? 'ml-4 sm:ml-0' : '', 'sm:my-3')} {...cta} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
