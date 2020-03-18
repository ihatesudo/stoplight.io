import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTag } from 'src/components/SimpleCard/SimpleCardTag';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';
import { ITestimonials, Testimonials } from 'src/components/Testimonials';
import { Container, IContainer } from '../../components/Container';
import { Hero, IHero } from '../../components/Hero';
import { HomeHero } from '../../components/Hero/HomeHero';
import { Icon } from '../../components/Icon';
import { IImage, Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ISection, Section } from '../../components/Section';
import { SimpleCard } from '../../components/SimpleCard';

export interface IHome {
  color: string;
  hero: IHero;
  testimonials: ITestimonials;
  features: IFeature[];
  customers: ICustomerSection;
  caseStudies?: ICaseStudyCard[];
  pageSubjects?: IPageSubject[];
}

interface IPageSubject {
  title: string;
  description: string;
  cta: string;
  href: string;
  tag: string;
  color: string;
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

export const Home: React.FunctionComponent<IHome> = ({
  color,
  hero,
  caseStudies,
  testimonials,
  features,
  customers,
  pageSubjects,
  ...sectionProps
}) => {
  return (
    <Layout>
      <HomeHero bgColor={color} {...hero} />

      {pageSubjects && (
        <Section id="subjects" {...sectionProps}>
          <Container title="Quality APIs Don't Just Happen" className="pt-64">
            <div className="flex flex-wrap justify-center md:justify-center mt-14">
              {pageSubjects.map((subject, index) => (
                <div className="px-4 mb-6 text-grey-darker hover:bg-grey-lightest w-100 h-100">
                  <SimpleCard
                    key={index}
                    className="flex flex-col p-8 bg-white h-96 w-96"
                    hoverable
                    href={subject.href}
                  >
                    <SimpleCardTop className="items-start pb-4">
                      <SimpleCardTitle
                        subtitle={subject.title}
                        className="mt-3 text-lg font-bold uppercase text-grey-darker"
                      />
                    </SimpleCardTop>
                    <SimpleCardBody
                      description={subject.description}
                      className="items-start mt-4 leading-loose text-grey-darker"
                    />
                    <SimpleCardBottom className="flex items-center mt-6 mb-3 border-t">
                      <div className="flex items-center flex-1 mt-8 text-blue">
                        {subject.cta} <Icon icon={['fad', 'arrow-right']} className="ml-3" />
                      </div>

                      <SimpleCardTag tag={subject.tag} color={subject.color} className="mt-8" />
                    </SimpleCardBottom>
                  </SimpleCard>
                </div>
              ))}
            </div>
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
                  <SimpleCardBottom className="flex items-center mt-6 mb-3 border-t">
                    <div className="flex items-center flex-1 mt-8 text-blue">
                      Read <Icon icon={['fad', 'arrow-right']} className="ml-3" />
                    </div>

                    <SimpleCardTag tag={caseStudy.tag} color={caseStudy.color} className="mt-8" />
                  </SimpleCardBottom>
                </SimpleCard>
              ))}
            </div>
          </Container>

          <Container className="flex flex-wrap justify-between px-20 pb-32 mt-10 ">
            {customers.images.map((image, key) => (
              <div key={key} className="py-8 sm:w-1/2 sm:p-6">
                <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} />
              </div>
            ))}
          </Container>
          <div className="container w-3/4 border-b"></div>
        </Section>
      )}
      <Section id="features" noPadding>
        <Container title="These things are here for SEO" className="pb-32 ">
          {features && (
            <div className="flex flex-wrap justify-around">
              {features.map((feature, index) => (
                <SimpleCard
                  key={index}
                  className="items-center px-5 text-center w-80 mt-14 sm:pt-14"
                  href={feature.href}
                >
                  <Icon icon={['fad', feature.icon]} className="text-center" size="3x" style={feature.iconStyle} />

                  <SimpleCardTop className="mt-5 text-xl font-bold text-grey-darkest">
                    <SimpleCardTitle title={feature.name} />
                  </SimpleCardTop>

                  <SimpleCardBody
                    className="my-2 font-medium leading-loose text-grey-dark"
                    description={feature.description}
                  />

                  <SimpleCardBottom className="text-center">
                    <div className="flex items-center flex-1 font-semibold text-blue">
                      Learn More
                      <Icon icon={['fad', 'arrow-right']} className="ml-3" />
                    </div>
                  </SimpleCardBottom>
                </SimpleCard>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </Layout>
  );
};

export default withSiteData(withRouteData(Home));
