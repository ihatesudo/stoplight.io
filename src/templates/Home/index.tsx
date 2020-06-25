import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';
import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Collage, ICollage } from 'src/components/Collage';
import { IIntegrationsBar, IntegrationsBar } from 'src/components/IntegrationsBar';
import { ILargeCard, LargeCard } from 'src/components/LargeCard';
import { Link } from 'src/components/Link';
import { SimpleCard } from 'src/components/SimpleCard';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';

import { Container } from '../../components/Container';
import { IHero } from '../../components/Hero';
import { LandingHero } from '../../components/Hero/LandingHero';
import { Icon } from '../../components/Icon';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';

interface IFeatures {
  title?: string;
  description?: string;
  features: ILargeCard[];
}

interface IHome {
  color: string;
  hero: IHero;
  collage: ICollage;
  features: IFeatures;
  subFeatures: IFeatures;
  integrations: IIntegrationsBar;
  actionBar?: IActionBar;
}

export const Home: React.FunctionComponent<IHome> = ({
  color,
  hero,
  features,
  subFeatures,
  actionBar,
  integrations,
  collage,
  ...sectionProps
}) => {
  return (
    <Layout>
      {hero && <LandingHero bgColor={color} {...hero} />}

      {collage && <Collage {...collage} />}

      {features && features.description && (
        <Section id="features" noPaddingT>
          <h2 className="p-0 text-3xl font-bold text-center text-black sm:mx-12 md:px-10">{features?.title}</h2>

          <div
            className="container max-w-2xl pt-5 text-xl leading-loose text-center opacity-75"
            dangerouslySetInnerHTML={{ __html: features?.description }}
          />

          <Container className="flex flex-wrap justify-center pt-20 md:pt-12 sm:pt-4 md:block md:w-full sm:p-0">
            {features?.features && features?.features?.map((feature, index) => <LargeCard key={index} {...feature} />)}
          </Container>

          {subFeatures && (
            <Container className="flex flex-wrap justify-center pt-20 sm:w-full">
              {subFeatures.features &&
                subFeatures.features.map((subFeature, index) => (
                  <SimpleCard key={index} className="flex w-1/3 p-8 pb-20 bg-white sm:w-full sm:items-center">
                    <SimpleCardTop className="flex items-start pb-4 sm:items-center">
                      <Image src={subFeature?.image} className="flex items-center h-32 pb-5 sm:items-center" />

                      <h2 className="pb-5 text-lg font-semibold uppercase text-accent">{subFeature.category}</h2>
                      <h3 className={cn('text-xl md:h-12', `text-${subFeature.titleColor || 'black'}`)}>
                        {subFeature.title}
                      </h3>
                    </SimpleCardTop>
                    <SimpleCardBody
                      className="flex items-start pb-4 sm:text-center sm:items-center SEO"
                      {...subFeature}
                    />
                    <Link to={subFeature.href} className="font-semibold text-blue2 sm:pt-5">
                      Learn More
                      <Icon icon="arrow-right" className="ml-3" />
                    </Link>
                  </SimpleCard>
                ))}
            </Container>
          )}
        </Section>
      )}

      {integrations && <IntegrationsBar {...integrations} />}

      {actionBar && (
        <Section id="action" {...sectionProps}>
          <ActionBar {...actionBar} />
        </Section>
      )}
    </Layout>
  );
};

export default withSiteData(withRouteData(Home));
