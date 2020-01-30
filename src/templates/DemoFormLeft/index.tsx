import * as React from 'react';
import { withRouteData } from 'react-static';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { Chips } from 'src/components/Chip';
import { Container } from 'src/components/Container';
import { Icon } from 'src/components/Icon';
import { Collage, ICollage } from '../../components/Collage';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Layout } from '../../components/Layout';
import { ITestimonials, Testimonial } from '../../components/Testimonials';

interface IFeature {
  name: string;
  icon: IconName;
  iconStyle: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
  summary: string;
  href?: string;
}

export interface IDemoFormLeft {
  hubspot: IHubSpotForm;
  hero: IHero;
  collage: ICollage;
  testimonials: ITestimonials;
  features: IFeature[];
}

export const DemoFormLeft: React.FunctionComponent<IDemoFormLeft> = ({
  hero,
  features,
  testimonials,
  hubspot,
  collage,
}) => {
  return (
    <Layout>
      <div className="flex flex-col">
        {hero && (
          <Hero
            {...hero}
            bottomElem={
              <div className="container relative z-5">
                <div className="flex flex-row sm:flex-col">
                  <div className="pb-16 text-left text-white sm:text-center md:ml-14">
                    <h1 className="text-5xl">Accelerate API Development by 36%</h1>
                    <h3 className="mt-12 font-bold">
                      Discover governance features found only in our Enterprise Platform.
                    </h3>
                  </div>
                  <div className="w-full h-full max-w-lg mt-2 bg-white rounded-lg shadow-lg md:w-full md:content-center -mb-96 sm:mb-32">
                    <h2 className="py-12 text-4xl text-center">Request a Demo</h2>
                    <HubSpotForm
                      className="max-w-lg px-8 px-16 pb-5 bg-white md:content-center"
                      portalId={hubspot.portalId}
                      formId={hubspot.formId}
                      style={{ top: 100 }}
                    ></HubSpotForm>
                  </div>
                </div>
              </div>
            }
          />
        )}
      </div>
      <div className="container mt-16 md:mx-14 md:w-80 sm:inline">
        <h2 className="mb-10 text-4xl sm:text-center"> Talk to a Solutions Engineer</h2>
        {features &&
          features.map((feature, index) => (
            <div className="flex flex-row mb-10 sm:mx-10" key={index}>
              <Icon icon={['fad', feature.icon]} size="lg" style={feature.iconStyle} className="mt-1" />
              <h3 className="ml-4">{feature.summary}</h3>
            </div>
          ))}
      </div>
      <Chips
        className="justify-center my-32 md:mb-20"
        segments={[
          { color: 'orange-light', length: 2 },
          { color: 'orange-dark', length: 3 },
        ]}
      />
      <Container title="API First Companies Love Us">
        <div className="flex flex-wrap">
          {testimonials &&
            testimonials.testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                image={testimonial.image}
                author={testimonial.author}
                company={testimonial.company}
                quote={testimonial.quote}
                role={testimonial.role}
              />
            ))}
        </div>
      </Container>
      <Chips
        className="justify-center pt-28"
        segments={[{ color: 'blue-light', length: 2 }, { color: 'blue-dark', length: 4 }, { color: 'blue' }]}
      />
      <Collage id="customers" {...collage} />
    </Layout>
  );
};

export default withRouteData(DemoFormLeft);
