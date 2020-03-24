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
  solutions?: IPageSubject[];
}

interface IPageSubject {
  title: string;
  description: string;
  cta: string;
  href: string;
  tag: string;
  color: string;
  icon: IconName;
  iconStyle: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
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
  solutions,
  ...sectionProps
}) => {
  return (
    <Layout>
      <HomeHero bgColor={color} {...hero} />

      {pageSubjects && (
        <Section id="subjects" {...sectionProps} noPaddingB>
          <Container title="Quality APIs Don't Just Happen" className="pt-64 sm:pt-0">
            <div className="flex flex-wrap justify-between">
              {pageSubjects.map((subject, index) => (
                <div className="flex text-grey-darker hover:bg-grey-lightest w-80">
                  <SimpleCard key={index} className="p-8 bg-white h-96" href={subject.href} hoverable>
                    <SimpleCardTop className="pb-8">
                      <h3 className="text-2xl font-bold text-grey-darker">{subject.title}</h3>
                    </SimpleCardTop>
                    <SimpleCardBody
                      description={subject.description}
                      className="flex-1 mb-8 text-lg text-grey-darker"
                    />

                    <SimpleCardBottom className="flex flex-row items-center justify-between mt-6 mb-3 border-t ">
                      <SimpleCardTag tag={subject.tag} color={subject.color} className="mt-8" />
                      <div className="flex items-center mt-8 text-blue">
                        {subject.cta} <Icon icon={['fad', 'arrow-right']} className="ml-1" />
                      </div>
                    </SimpleCardBottom>
                  </SimpleCard>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}
      <Container className="flex flex-row">
        <div className="w-1/2">
          {solutions &&
            solutions.slice(0, 2).map((solution, index) => (
              <SimpleCard
                key={index}
                className="p-8 my-8 mr-4 bg-white h-80"
                hoverable
                href={solution && solution.href}
              >
                <SimpleCardTop className="pb-8">
                  <div className="flex">
                    <Icon icon={['fad', solution.icon]} className="text-center" size="2x" style={solution.iconStyle} />
                    <h3 className="ml-3 text-xl font-bold text-grey-darker">{solution.title}</h3>
                  </div>
                </SimpleCardTop>
                <SimpleCardBody
                  description={solution && solution.description}
                  className="text-lg font-normal text-grey-darker"
                />
                <SimpleCardBottom className="flex flex-row items-start justify-between my-3 ">
                  <div className="flex items-center text-xl font-bold text-blue">
                    Learn More <Icon icon={['fad', 'arrow-right']} className="ml-3" />
                  </div>
                </SimpleCardBottom>
              </SimpleCard>
            ))}
        </div>
        <div className="w-1/2">
          {solutions &&
            solutions.slice(2).map((solution, index) => (
              <SimpleCard
                key={index}
                className="p-8 my-8 ml-4 bg-white h-80"
                hoverable
                href={solution && solution.href}
              >
                <SimpleCardTop className="pb-8">
                  <div className="flex">
                    <Icon icon={['fad', solution.icon]} className="text-center" size="2x" style={solution.iconStyle} />
                    <h3 className="ml-3 text-xl font-bold text-grey-darker">{solution.title}</h3>
                  </div>
                </SimpleCardTop>
                <SimpleCardBody
                  description={solution && solution.description}
                  className="text-lg font-normal text-grey-darker"
                />
                <SimpleCardBottom className="flex flex-row items-center justify-between mt-6 mb-3">
                  <div className="flex items-center text-xl font-bold text-blue">
                    Learn More <Icon icon={['fad', 'arrow-right']} className="ml-3" />
                  </div>
                </SimpleCardBottom>
              </SimpleCard>
            ))}
        </div>
      </Container>

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

          <Container className="flex flex-wrap justify-between px-20 pb-32 mt-10 sm:justify-center ">
            {customers.images.map((image, key) => (
              <div key={key} className="py-8 sm:p-3">
                <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} />
              </div>
            ))}
          </Container>
          <div className="container w-3/4 border-b"></div>
        </Section>
      )}
    </Layout>
  );
};

export default withSiteData(withRouteData(Home));
