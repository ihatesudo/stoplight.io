import * as React from 'react';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface IGartnerCoolVendor extends ISection {
  title: string;
  cta: ICallToAction;
  description: string;
  image?: string;
}

export const GartnerCoolVendor: React.FunctionComponent<IGartnerCoolVendor> = ({
  title,
  cta,
  description,
  image,
  ...sectionProps
}) => {
  if (!title && !description && !cta) {
    return null;
  }

  return (
    <Section id="gartner-cool-vendor" {...sectionProps}>
      <Container
        className="md:flex-wrap md:justify-center"
        chips={{
          className: 'justify-center mb-28',
          segments: [
            { color: 'orange-light', length: 3 },
            { color: 'orange-dark', length: 3 },
            { color: 'orange-dark' },
          ],
        }}
      >
        <div className="flex flex-wrap justify-center relative pl-16 md:p-10 md:ml-6">
          {image && (
            <div className="flex relative pl-16 md:p-10 md:ml-6">
              <Image src={image} className="pr-20 sm:p-0" style={{ maxHeight: '250px' }} />
            </div>
          )}

          <div className="max-w-md flex flex-col items-center ml-auto md:m-auto">
            <h2 className="text-center text-3xl mb-10 md:my-7">{title}</h2>
            <div
              className="mb-12 pb-12 leading-loose text-lg border-b border-darken-50 md:border-none sm:px-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {cta && <CallToAction {...cta} className="md:mx-auto" />}
          </div>
        </div>
      </Container>
    </Section>
  );
};
