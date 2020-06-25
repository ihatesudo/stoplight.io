import * as React from 'react';
import { withRouteData } from 'react-static';
import { LandingHero } from 'src/components/Hero/LandingHero';
import { Section } from 'src/components/Section';

import { Collage, ICollage } from '../../components/Collage';
import { IHero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { ITestimonials, Testimonials } from '../../components/Testimonials';

export interface IDemoFormLeft {
  hero: IHero;
  collage: ICollage;
  testimonials: ITestimonials;
}

export const DemoFormLeft: React.FunctionComponent<IDemoFormLeft> = ({ hero, testimonials, collage }) => {
  return (
    <Layout>
      <div className="flex flex-col">{hero && <LandingHero {...hero} />}</div>

      <Section id="features" noPaddingB>
        {testimonials && (
          <>
            <h2 className="p-0 text-4xl text-center text-black text-normal">API-First Companies Love Stoplight</h2>
            <Testimonials {...testimonials} />
          </>
        )}
      </Section>

      {collage && <Collage id="customers" {...collage} />}
    </Layout>
  );
};

export default withRouteData(DemoFormLeft);
