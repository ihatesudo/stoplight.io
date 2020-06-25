import cn from 'classnames';
import * as React from 'react';

import { Section } from '../../components/Section';
import { slugify } from '../../utils/slugify';
import { IImage, Image } from '../Image';

export interface IIntegrationsBar {
  title: string;
  shortTitle?: string;
  className?: string;
  description: string;
  images: IImage[];
}

export const IntegrationsBar: React.FunctionComponent<IIntegrationsBar> = props => {
  const { title, shortTitle, className, description, images } = props;
  return (
    <Section id={slugify(shortTitle)} className={cn(className, 'bg-grey-lightest')} noPadding>
      <h2 className="pt-20 text-3xl text-center text-black font-bold sm:mx-12">{title}</h2>

      <div className="flex justify-center pt-16 sm:flex-wrap">
        {images &&
          images.map((image, index) => (
            <div className="px-12 sm:py-10" key={index}>
              <Image src={image.src} className="h-16" size="sm" />
            </div>
          ))}
      </div>
      <div
        className="container max-w-lg pt-16 pb-20 text-xl text-center text-black "
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Section>
  );
};
