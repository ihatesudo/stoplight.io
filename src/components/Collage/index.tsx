import * as React from 'react';

import { IContainer } from 'src/components/Container';
import { IImage, Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface ICollage extends ISection {
  images: IImage[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export const Collage: React.FunctionComponent<ICollage> = ({ images, title, cta, ...sectionProps }) => {
  if (!images || !images.length) {
    return null;
  }

  return (
    <Section {...sectionProps}>
      <div className="text-lg font-semibold leading-loose text-center uppercase text-grey-dark">{title}</div>
      <div className="flex flex-wrap items-center justify-center mt-4">
        {images.map((image, key) => (
          <div key={key} className="px-8 pt-8 text-center sm:w-1/2 sm:px-6 sm:pt-6">
            <Image className="h-8 inline-block" src={image.src} alt={image.alt} size="sm" />
          </div>
        ))}
      </div>
    </Section>
  );
};
