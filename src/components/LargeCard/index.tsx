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
}

export const LargeCard: React.FunctionComponent<ILargeCard> = props => {
  const { title, subtitle, description, image, cta, titleURL, titleColor } = props;

  return (
    <div id={title} key="content" className={cn('flex py-12 sm:pb-0 flex-row')}>
      <div
        className={cn('flex leading-loose flex-col pr-24 sm:pr-0 flex-1 w-1/2 sm:w-100 sm:items-center sm:text-center')}
      >
        <h2 className="text-2xl font-semibold uppercase text-grey">{title}</h2>
        <h3 className={cn('text-xl', `text-${titleColor || 'grey-darkest'}`)}>{subtitle}</h3>
        <div className={cn(' sm:pb-0 max-w-md  text-xl')} dangerouslySetInnerHTML={{ __html: description }} />
        {titleURL && (
          <Link to={titleURL}>
            <SimpleCardBottom className="flex flex-row items-center justify-between mt-1">
              <div className="flex items-center text-lg font-bold uppercase text-blue">
                {cta} <Icon icon={['fad', 'arrow-right']} className="ml-3" />
              </div>
            </SimpleCardBottom>
          </Link>
        )}
      </div>

      <div className="relative sm:hidden">
        <Image src={image} size="sm" className="w-64 h-64" />
      </div>
    </div>
  );
};
