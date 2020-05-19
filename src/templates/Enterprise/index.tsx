import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { Chips } from 'src/components/Chip';
import { Icon } from 'src/components/Icon';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTag } from 'src/components/SimpleCard/SimpleCardTag';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';
import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container, IContainer } from '../../components/Container';
import { GartnerCoolVendor, IGartnerCoolVendor } from '../../components/GartnerCoolVendor';
import { Hero, IHero } from '../../components/Hero';
import { IImage, Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ISection, Section } from '../../components/Section';
import { SimpleCard } from '../../components/SimpleCard';

export interface IEnterprise {
  color: string;
  customers: ICustomerSection;
  hero: IHero;
  image: IImage;
  gartnerCoolVendor: IGartnerCoolVendor;
  features: IFeature[];
  caseStudies?: ICaseStudyCard[];
  actionBar?: IActionBar;
}

interface ICustomerSection extends ISection {
  images: IImage[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
  cardBg?: string;
}

interface ICaseStudyCard {
  href: string;
  company: string;
  image: string;
  tag: string;
  description: string;
  color: string;
}

interface IFeature {
  name: string;
  icon: IconName;
  iconStyle: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
  description: string;
  href?: string;
}

export const Enterprise: React.FunctionComponent<IEnterprise> = ({
  color,
  hero,
  image,
  caseStudies,
  gartnerCoolVendor,
  actionBar,
  features,
  customers,
  ...sectionProps
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} aligned="center" image={hero.image && { ...hero.image, shadow: false }} />

      {features && (
        <Section id="features" className="pt-32 sm:pt-0" noPaddingT>
          <Container className="flex flex-wrap justify-around">
            {features.map((feature, index) => (
              <SimpleCard key={index} className="items-center px-5 text-center w-80 mt-14 sm:pt-14">
                <Icon icon={['fad', feature.icon]} className="text-center" size="3x" style={feature.iconStyle} />
                <SimpleCardTop className="mt-5 text-xl font-bold text-grey-darkest">
                  <SimpleCardTitle title={feature.name} />
                </SimpleCardTop>
                <SimpleCardBody
                  className="my-2 font-medium leading-loose text-grey-dark"
                  description={feature.description}
                />
              </SimpleCard>
            ))}
          </Container>
        </Section>
      )}
      <div className="container w-3/4 border-b"></div>
      {image && (
        <Section>
          <Container>
            <Image src={image.src} alt={image.alt} />
          </Container>
        </Section>
      )}
      <div className="container w-3/4 border-b"></div>
      {caseStudies && (
        <Section id="case-studies" {...sectionProps}>
          <Container title="Stoplight Powers Some of the World's Leading API First Companies">
            <div className="flex flex-wrap justify-between md:justify-center mt-14">
              {caseStudies.map((caseStudy, index) => (
                <SimpleCard key={index} className="p-8 m-8 bg-white w-96 h-80" hoverable href={caseStudy.href}>
                  <SimpleCardTop>
                    <div>
                      <Image
                        src={caseStudy.image}
                        title={`${caseStudy.company} Logo`}
                        alt={caseStudy.company}
                        className="h-10"
                      />
                    </div>
                  </SimpleCardTop>
                  <SimpleCardBody description={caseStudy.description} className="mt-4 leading-loose text-grey-darker" />
                  <SimpleCardBottom className="flex flex-row items-center justify-between mt-6 mb-3 border-t">
                    <SimpleCardTag tag={caseStudy.tag} color={caseStudy.color} className="mt-8" />
                    <div className="flex items-center mt-8 text-blue">
                      Read <Icon icon={['fad', 'arrow-right']} className="ml-3" />
                    </div>
                  </SimpleCardBottom>
                </SimpleCard>
              ))}
            </div>
          </Container>
          <div className="container flex flex-wrap justify-between px-20 mt-10">
            {customers.images.map((image, key) => (
              <div key={key} className="py-8 sm:w-1/2 sm:p-6">
                <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} />
              </div>
            ))}
          </div>
        </Section>
      )}
      <div className="container w-3/4 border-b"></div>

      {gartnerCoolVendor && <GartnerCoolVendor className="pt-32" noPadding {...gartnerCoolVendor} />}

      {actionBar && (
        <Section>
          <ActionBar {...actionBar} />
        </Section>
      )}
    </Layout>
  );
};

export default withSiteData(withRouteData(Enterprise));
