import * as React from 'react';
import { withRouteData } from 'react-static';
import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { FeatureIconStrip, IFeatureIconStrip } from 'src/components/FeatureIconStrip';
import { LandingHero } from 'src/components/Hero/LandingHero';
import { ILargeCard, LargeCard } from 'src/components/LargeCard';

import { IHero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';

// const Sandbox = React.lazy(() => import('../../components/Sandbox'));
interface IFeatures {
  title: string;
  description: string;
  features: ILargeCard[];
}
export interface ILanding {
  color: string;
  hero: IHero;
  featureIconStrip?: IFeatureIconStrip;
  features: IFeatures;
  integrations: any;
  actionBar?: IActionBar;
  solutionsNav?: IFeatureIconStrip;
  hasSandbox?: boolean;
}

export const Landing: React.FunctionComponent<ILanding> = ({
  color,
  hero,
  features,
  integrations,
  featureIconStrip,
  actionBar,
  solutionsNav,
  hasSandbox,
  ...sectionProps
}) => {
  return (
    <Layout>
      {hero && <LandingHero bgColor={color} {...hero} />}
      {featureIconStrip && <FeatureIconStrip {...featureIconStrip} />}
      {features && features.description && (
        <Section id="features" noPadding>
          <h2 className="p-0 text-3xl font-bold text-center text-black sm:mx-12 md:px-10">{features?.title}</h2>

          <div
            className="container max-w-2xl pt-5 text-xl leading-loose text-center opacity-75"
            dangerouslySetInnerHTML={{ __html: features?.description }}
          />

          {/* {hasSandbox && (
            <div>
              <h2 className="pb-10 text-5xl text-center text-black text-normal">Try it out</h2>
              <div className="container shadow-lg">
                <NoSSR>
                  <React.Suspense fallback={<div />}>
                    {/* <Sandbox /> */}
          {/* </React.Suspense> */}
          {/* </NoSSR> */}
          {/* </div> */}
          {/* </div> */}
          {/* )} */}
          <Container className="flex flex-wrap justify-center py-20 md:block md:w-full sm:p-0">
            {features?.features && features?.features?.map((feature, index) => <LargeCard key={index} {...feature} />)}
          </Container>
        </Section>
      )}
      {actionBar && (
        <Section id="action" {...sectionProps} noPadding>
          <ActionBar {...actionBar} />
        </Section>
      )}
      {solutionsNav && <FeatureIconStrip {...solutionsNav} />}
    </Layout>
  );
};

export default withRouteData(Landing);
