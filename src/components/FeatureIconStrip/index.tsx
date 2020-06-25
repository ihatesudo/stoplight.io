import cn from 'classnames';
import * as React from 'react';
import { IContainer } from 'src/components/Container';
import { Section } from 'src/components/Section';

import { slugify } from '../../utils/slugify';
import { Icon, IconProp } from '../Icon';
import { Image } from '../Image';

interface IFeatureIcon {
  title: string;
  icon?: IconProp;
  image?: string;
  color?: string;
  href?: string;
}

export interface IFeatureIconStrip {
  icons: IFeatureIcon[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
  description?: string;
}

export const FeatureIconStrip: React.FunctionComponent<IFeatureIconStrip> = ({
  icons,
  title,
  cta,
  description,
  ...sectionProps
}) => {
  if (!icons || !icons.length) {
    return null;
  }

  return (
    <Section {...sectionProps}>
      <div className="container">
        {title && <h2 className="pb-10 text-3xl text-center text-black text-normal">{title}</h2>}

        <div className="flex flex-wrap justify-center w-full p-4 bg-grey-lightest">
          {icons && icons.length > 1
            ? icons.map(icon => (
                <a
                  key={slugify(icon.title)}
                  href={icon.title && icon.href ? icon.href : `#${slugify(icon.title)}`}
                  className="flex flex-col items-center mx-4 p-4 text-lg font-normal text-center text-black sm:w-1/2 sm:p-6"
                >
                  {icon?.icon && (
                    <div className="h-18 flex-1 flex items-center justify-center pb-4 text-4xl">
                      <Icon className={cn('fa-fw', { [`text-${icon.color}`]: icon.color })} icon={icon.icon} />
                    </div>
                  )}

                  {icon?.image && <Image className={cn('h-18 pb-4')} src={icon.image} />}

                  {icon?.title}
                </a>
              ))
            : null}
        </div>

        {description && (
          <div className="text-lg text-center text-black" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </Section>
  );
};
