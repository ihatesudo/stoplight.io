import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';
import { Collage, ICollage } from 'src/components/Collage';
import { IFeatureIconStrip } from 'src/components/FeatureIconStrip';
import { LandingHero } from 'src/components/Hero/LandingHero';
import { Icon } from 'src/components/Icon';
import { IIntegrationsBar, IntegrationsBar } from 'src/components/IntegrationsBar';
import { ILargeCard } from 'src/components/LargeCard';
import { Link } from 'src/components/Link';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container } from '../../components/Container';
import { IHero } from '../../components/Hero';
import { IImage, Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';
import { SimpleCard } from '../../components/SimpleCard';

interface IFeatures {
  title?: string;
  description?: string;
  features: ILargeCard[];
}

export interface IEnterprise {
  color: string;
  hero: IHero;
  collage: ICollage;
  subFeatures: IFeatures;
  integrations: IIntegrationsBar;
  featureIcons: IFeatureIconStrip;
  growthNeeds: any;
  security: any;
  gartnerCoolVendor: any;
  caseStudy: any;
  support: any;
  actionBar?: IActionBar;
  image: IImage;
}

export const Enterprise: React.FunctionComponent<IEnterprise> = ({
  color,
  hero,
  collage,
  subFeatures,
  integrations,
  actionBar,
  featureIcons,
  growthNeeds,
  security,
  gartnerCoolVendor,
  caseStudy,
  support,
  image,
  ...sectionProps
}) => {
  return (
    <Layout>
      {hero && <LandingHero bgColor={color} {...hero} />}

      {subFeatures && subFeatures?.description && (
        <Section id="enterprise-features" {...sectionProps} noPadding>
          <h2 className="text-4xl text-center text-black text-semibold text-normal">{subFeatures?.title}</h2>
          <div
            className="container max-w-xl pt-10 text-xl text-center text-black"
            dangerouslySetInnerHTML={{ __html: subFeatures?.description }}
          />
          <Container className="flex flex-wrap justify-center pt-20 sm:w-full">
            {subFeatures.features &&
              subFeatures.features.map((subFeature, index) => (
                <SimpleCard key={index} className="flex items-center w-1/3 p-8 pb-20 bg-white sm:w-full">
                  <SimpleCardTop className="flex items-center pb-4">
                    <Image src={subFeature?.image} className="flex items-center h-20 pb-5 " />
                    <h2 className="pb-5 text-lg font-semibold text-center uppercase text-grey-darker">
                      {subFeature.category}
                    </h2>
                    <h3 className={cn('text-xl  text-center md:h-12', `text-${subFeature.titleColor || 'black'}`)}>
                      {subFeature.title}
                    </h3>
                  </SimpleCardTop>
                  <SimpleCardBody className="flex pb-4 text-center " {...subFeature} />
                  <Link to={subFeature.href} className="font-semibold text-blue2 sm:pt-5">
                    Learn More
                    <Icon icon="arrow-right" className="ml-3" />
                  </Link>
                </SimpleCard>
              ))}
          </Container>
        </Section>
      )}
      {integrations && <IntegrationsBar {...integrations} className="bg-white" />}
      {growthNeeds && (
        <Section {...sectionProps} className="text-center text-white bg-black">
          <h2 className="pb-16 text-4xl text-center text-white md:px-6 text-normal">{growthNeeds.title}</h2>
          <div className="flex justify-center sm:flex-wrap">
            <Image src="/images/enterprise/infinity.svg" alt="infinity" className="h-40 pb-16" />
          </div>
          <div
            className="container max-w-lg pt-16 text-xl text-center"
            dangerouslySetInnerHTML={{
              __html:
                'Expand your use without a cap on changelogs, projects or guests. Our pricing structure scales with your needs.',
            }}
          />
        </Section>
      )}
      {security && (
        <Section id={security.title}>
          <h2 className="py-16 text-4xl text-center text-black text-normal md:px-6">{security.title}</h2>
          <div className="flex justify-center sm:flex-wrap">
            {security.images &&
              security.images.map((image, index) => (
                <div className="flex-row" key={index}>
                  <div className="flex justify-center pb-16" key={index}>
                    <Image src={image.src} className="h-32" size="sm" />
                  </div>
                  <div className="container pb-4 text-2xl text-center text-black text-semibold">
                    <h4>{image.title}</h4>
                  </div>
                  <div className="container max-w-md text-xl text-center text-black">
                    <p>{image.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </Section>
      )}
      {caseStudy && (
        <Section id={caseStudy.company} className={cn('bg-black')}>
          <div className="flex justify-center pb-10">
            <Image src={caseStudy.image} className="h-24" size="sm" />
          </div>
          <div className="container max-w-xl pb-10 text-center">
            <p className="text-xl text-white">{caseStudy.desc}</p>
          </div>
          <div className="container max-w-xl pb-16 text-xl text-center">
            <p className="text-white">{caseStudy.name}</p>
          </div>
          <div className="flex justify-center">
            <Image src={caseStudy.logo} className="h-12" size="sm" />
          </div>
        </Section>
      )}
      {support && (
        <Section id={support.title}>
          <h2 className="py-16 text-4xl text-center text-black text-normal">{support.title}</h2>
          <div className="flex justify-center sm:flex-wrap">
            {support.images &&
              support.images.map((image, index) => (
                <div className="flex-row" key={index}>
                  <div className="flex justify-center pb-16" key={index}>
                    <Image src={image.src} className="h-32" size="sm" />
                  </div>
                  <div className="container max-w-sm pb-4 text-2xl text-center text-black text-semibold">
                    <h4>{image.title}</h4>
                  </div>
                </div>
              ))}
          </div>
        </Section>
      )}
      {gartnerCoolVendor && (
        <Section id={gartnerCoolVendor.title} noPadding>
          <h2 className="py-16 text-4xl text-center text-black text-normal">{gartnerCoolVendor.title}</h2>
          <div className="flex justify-center sm:flex-wrap">
            {gartnerCoolVendor.images &&
              gartnerCoolVendor.images.map((image, index) => (
                <div className="px-12 sm:py-10" key={index}>
                  <Image src={image.src} className="h-48" size="sm" />
                </div>
              ))}
          </div>
          <div
            className="container w-2/3 pt-16 pb-10 text-xl text-center text-grey-darker "
            dangerouslySetInnerHTML={{ __html: gartnerCoolVendor.description }}
          />
          <div className="container text-lg text-center text-black">
            <Link to={gartnerCoolVendor.href} className="font-bold text-blue2">
              Learn More
              <Icon icon="arrow-right" className="ml-3" />
            </Link>
          </div>
        </Section>
      )}
      {collage && <Collage {...collage} />}
      {actionBar && (
        <Section id="action" {...sectionProps} noPaddingT>
          <ActionBar {...actionBar} />
        </Section>
      )}
    </Layout>
  );
};

export default withSiteData(withRouteData(Enterprise));
