import cn from 'classnames';
import * as React from 'react';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { Link } from '../Link';
import { SimpleCardBottom } from '../SimpleCard/SimpleCardBottom';

export interface ILargeCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta?: string;
  titleURL?: string;
  titleColor?: string;
  index: number;
}

export const LargeCard: React.FunctionComponent<ILargeCard> = props => {
  const { title, subtitle, description, image, cta, titleURL, titleColor, index } = props;

  return (
    <div id={title} key="content" className={cn('flex py-12 sm:pb-0 flex-row')}>
      {!(index % 2) &&
        <div className="relative sm:hidden">
          <Image src={image} size="sm" className="w-128" />
        </div>
      }
      <div
        className={cn('flex leading-loose flex-col pl-24 pr-24 sm:pr-0 flex-1 w-1/2 sm:w-100 sm:items-center sm:text-center')}
      >
        <h2 className="text-2xl uppercase text-grey">{title}</h2>
        <h3 className={cn('text-4xl', `text-${titleColor || 'black'}`)}>{subtitle}</h3>
        <div className={cn(' sm:pb-0 max-w-ld  text-xl')} dangerouslySetInnerHTML={{ __html: description }} />
        {titleURL && (
          <Link to={titleURL}>
            <SimpleCardBottom className="flex flex-row items-center justify-between mt-1">
              <div className="flex items-center text-lg font-bold uppercase text-blue2">
                {cta} <Icon icon={['fad', 'arrow-right']} className="ml-3" />
              </div>
            </SimpleCardBottom>
          </Link>
        )}
      </div>
      {index % 2 &&
        <div className="relative sm:hidden">
          <Image src={image} size="sm" className="w-128" />
        </div>
      }
    </div>
  );
};
