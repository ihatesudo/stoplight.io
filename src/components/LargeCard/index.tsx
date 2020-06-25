import cn from 'classnames';
import * as React from 'react';

import { slugify } from '../../utils/slugify';
import { CallToAction, ICallToAction } from '../CallToAction';
import { Image } from '../Image';

export interface ILargeCard {
  description: string;
  image: string;
  category?: string;
  title?: string;
  shortName?: string;
  ctas?: ICallToAction[];
  titleColor?: string;
  isReversed?: boolean;
  href?: string;
}

export const LargeCard: React.FunctionComponent<ILargeCard> = props => {
  const { title, category, description, image, ctas, titleColor, isReversed, shortName } = props;

  return (
    <div
      id={slugify(shortName)}
      key="content"
      className={cn('flex items-center py-28 sm:pb-0 sm:py-10', {
        'flex-row': !isReversed,
        'flex-row-reverse': isReversed,
      })}
    >
      <div
        className={cn('flex flex-col flex-1 w-2/5 sm:w-100 sm:text-center', {
          'pl-20 sm:px-12': isReversed,
          'pr-20 sm:px-12': !isReversed,
        })}
      >
        <h2 className="font-sans text-lg font-semibold uppercase text-accent">{category}</h2>
        <h3 className={cn('text-3xl font-bold pt-1', `text-${titleColor || 'black'}`)}>{title}</h3>
        <div
          className={cn('pt-5 sm:pb-0 text-xl leading-relaxed sm:text-center opacity-75 SEO')}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {ctas && (
          <div className="flex items-baseline mt-8 mr-auto whitespace-no-wrap sm:items-center sm:flex-col sm:mt-8 sm:w-100 sm:mx-auto">
            {ctas.map((cta, index) => (
              <CallToAction key={index} {...cta} className="mt-2 mr-4 sm:w-full sm:mx-auto " />
            ))}
          </div>
        )}
      </div>

      <div
        className={cn('w-3/5 sm:hidden md:w-auto md:inline-block', {
          '-ml-5': isReversed,
          '-mr-5': !isReversed,
        })}
      >
        <Image src={image} size="sm" className="w-full md:w-128 sm:hidden" />
      </div>
    </div>
  );
};
