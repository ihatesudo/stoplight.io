import * as React from 'react';
import { Section } from '../../components/Section';
import { IImage, Image } from '../Image';

export interface IIntegrationsBar {
  title: string;
  description: string;
  images: IImage[];
}

export const IntegrationsBar: React.FunctionComponent<IIntegrationsBar> = props => {
  const { title, description, images } = props;
  return (
    <Section id="integrations" className="bg-grey-lightest" noPadding>
      <h2 className="py-10 text-5xl text-center text-black text-normal">{title}</h2>

      <div className="flex justify-center">
        {images &&
          images.map((image, index) => (
            <div className="px-12 " key={index}>
              <Image src={image.src} className="h-32" size="sm" />
            </div>
          ))}
      </div>
      <div
        className="container w-2/3 py-10 pb-20 text-lg text-center text-black sm:pb-0"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Section>
  );
};
