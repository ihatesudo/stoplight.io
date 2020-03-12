import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { Chips } from 'src/components/Chip';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTag } from 'src/components/SimpleCard/SimpleCardTag';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';
import { ITestimonials, Testimonials } from 'src/components/Testimonials';
import { Container, IContainer } from '../../components/Container';
import { Hero, IHero } from '../../components/Hero';
import { Icon } from '../../components/Icon';
import { IImage, Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ProductCard } from '../../components/ProductCard';
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
      <Hero bgColor={color} {...hero} bottomElem={<ProductCards className="pt-64 sm:pt-6" />} />

      {pageSubjects && (
        <Section id="subjects" {...sectionProps}>
          <Container title="Quality APIs Don't Just Happen">
            <div className="flex flex-wrap justify-center md:justify-center mt-14">
              {pageSubjects.map((subject, index) => (
                <SimpleCard key={index} className="p-8 m-4 bg-white w-96 h-96" hoverable href={subject.href}>
                  <SimpleCardTop>
                    <div className="items-start text-lg font-semibold uppercase text-grey-darkest">{subject.title}</div>
                  </SimpleCardTop>
                  <SimpleCardBody description={subject.description} className="mt-4 leading-loose text-grey-darker" />
                  <SimpleCardBottom className="flex items-center mt-6 mb-3 border-t">
                    <div className="flex items-center flex-1 mt-8 text-blue">
                      {subject.cta} <Icon icon={['fad', 'arrow-right']} className="ml-3" />
                    </div>
                  </SimpleCardBottom>
                </SimpleCard>
              ))}
            </div>
          </Container>
        </Section>
      )}
      <div className="container w-3/4 border-b"></div>

      {caseStudies && (
        <Section id="case-studies" {...sectionProps}>
          <Container title="Stoplight powers some of the world's leading API first companies">
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

          <Container className="flex flex-wrap justify-between px-20 pb-32 mt-10 border-b">
            {customers.images.map((image, key) => (
              <div key={key} className="py-8 sm:w-1/2 sm:p-6">
                <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} />
              </div>
            ))}
          </Container>
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

const ProductCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'container relative z-5 flex justify-between text-left sm:flex-col sm:items-center')}>
      {/* <ProductCard
        tag="design"
        name="Stoplight Studio"
        title="Next gen editor for API design & technical docs"
        description="Stoplight Studio turns you into an API Design superhero. Create OpenAPI 10x faster, with no prior knowledge and fewer mistakes."
        color="blue"
        icon={['fad', 'paint-brush-alt']}
        className="w-1/2 mx-3 bg-white bg-grey-lightest sm:w-full sm:mb-6"
        href="/studio"
        image="/images/studio-glimpse.png"
      />

      <ProductCard
        tag="scale"
        name="Stoplight Enterprise"
        title="API design management at scale"
        description="The Stoplight Platform increases consistency, visibility, and quality across your internal and external APIs."
        color="orange"
        icon={['fad', 'chart-network']}
        className="w-1/2 mx-3 bg-white sm:w-full"
        href="/enterprise"
        image="/images/platform-glimpse.png"
      /> */}
    </div>
  );
};
