import cn from 'classnames';
import * as React from 'react';

import { IContainer } from 'src/components/Container';
import { Section } from 'src/components/Section';
import { slugify } from '../../utils/slugify';
import { Icon, IIcon } from '../Icon';

interface IFeatureIcon extends IIcon {
  title: string;
  color: string;
  href?: string;
}
export interface IFeatureIconStrip {
  icons: IFeatureIcon[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export const FeatureIconStrip: React.FunctionComponent<IFeatureIconStrip> = ({
  icons,
  title,
  cta,
  ...sectionProps
}) => {
  if (!icons || !icons.length) {
    return null;
  }

  return (
    <Section {...sectionProps}>
      <h2 className="text-5xl text-center text-black text-normal">{title}</h2>
      <div className="container flex flex-wrap items-center justify-around pt-10">
        {icons.map((icon, key) => (
          <a
            key={key}
            href={icon.title && icon.href ? icon.href : `#${slugify(icon.title)}`}
            className="flex flex-col items-center p-8 text-lg font-normal text-center text-black sm:w-1/2 sm:p-6"
          >
            <Icon
              className={cn('fa-fw mr-3 pb-4', { [`text-${icon.color}`]: icon.color })}
              icon={icon.icon}
              size="5x"
            />
            {icon?.title}
          </a>
        ))}
      </div>
    </Section>
  );
};
