import * as React from 'react';
import { withRouteData } from 'react-static';
import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { FeatureIconStrip, IFeatureIconStrip } from 'src/components/FeatureIconStrip';
import { LandingHero } from 'src/components/Hero/LandingHero';
import { IntegrationsBar } from 'src/components/IntegrationsBar';
import { ILargeCard, LargeCard } from 'src/components/LargeCard';

import { Container } from '../../components/Container';
import { IHero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';

interface IFeatures {
  title: string;
  description: string;
  features: ILargeCard[];
}

interface ILanding {
  color: string;
  hero: IHero;
  featureIconStrip?: IFeatureIconStrip;
  features: IFeatures;
  integrations: any;
  actionBar?: IActionBar;
  solutionsNav?: IFeatureIconStrip;
}

export const Landing: React.FunctionComponent<ILanding> = ({
  color,
  hero,
  features,
  integrations,
  featureIconStrip,
  actionBar,
  solutionsNav,
  ...sectionProps
}) => {
  return (
    <Layout>
      {hero && <LandingHero bgColor={color} {...hero} />}
      {featureIconStrip && <FeatureIconStrip {...featureIconStrip} />}
      {features && (
        <Section id="features" noPadding>
          {features.title && (
            <h2 className="p-0 text-3xl font-bold text-center text-black sm:mx-12 md:px-10">{features?.title}</h2>
          )}

          {features.description && (
            <div
              className="container max-w-2xl pt-5 text-xl leading-loose text-center opacity-75"
              dangerouslySetInnerHTML={{ __html: features?.description }}
            />
          )}

          <Container className="flex flex-wrap justify-center pt-20 md:block md:w-full sm:p-0">
            {features?.features && features?.features?.map((feature, index) => <LargeCard key={index} {...feature} />)}
          </Container>
        </Section>
      )}
      {integrations && <IntegrationsBar {...integrations} />}

      {actionBar && (
        <Section id="action" {...sectionProps} noPaddingB>
          <ActionBar {...actionBar} />
        </Section>
      )}
      <Section id="solutions" {...sectionProps} noPadding>
        {solutionsNav && <FeatureIconStrip {...solutionsNav} />}
      </Section>
    </Layout>
  );
};

export default withRouteData(Landing);
