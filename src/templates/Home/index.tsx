import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Collage, ICollage } from 'src/components/Collage';
import { Feature, IFeature } from 'src/components/FeatureSection';
import { ILargeCard, LargeCard } from 'src/components/LargeCard';
import { Link } from 'src/components/Link';

import { ITestimonials, Testimonials } from 'src/components/Testimonials';
import { Container, IContainer } from '../../components/Container';
import { Hero, IHero } from '../../components/Hero';
import { HomeHero } from '../../components/Hero/HomeHero';
import { Icon } from '../../components/Icon';
import { IImage, Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ISection, Section } from '../../components/Section';

export interface IHome {
  color: string;
  hero: IHero;
  testimonials: ITestimonials;
  features: ILargeCard[];
  customers: ICustomerSection;
  collage: ICollage;
  caseStudies?: ICaseStudyCard[];
  pageSubjects?: IPageSubject[];
  solutions?: IPageSubject[];
  actionBar?: IActionBar;
  vcs: any;
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

export const Home: React.FunctionComponent<IHome> = ({
  color,
  hero,
  caseStudies,
  testimonials,
  features,
  customers,
  pageSubjects,
  solutions,
  actionBar,
  vcs,
  collage,
  ...sectionProps
}) => {
  return (
    <Layout>
      <HomeHero bgColor={color} {...hero} />
      <Section id="features">
        <div className="text-center">
          <h2 className="text-4xl text-black">A Solution for Every Part of the API Design Lifecycle</h2>
        </div>
        <Container className="flex flex-wrap justify-center pt-20 md:block md:w-96">
          {features && features.map((feature, index) => <LargeCard key={index} {...feature} />)}
        </Container>
        <div className="container w-3/4 mt-20 border-t"></div>
      </Section>
      <Section id="VCS" noPadding>
        <div className="text-center">
          <h3 className="text-4xl">All this while integrating seamlessly with your favorite VCS</h3>
        </div>
        <Container className="pt-20 text-center ">
          <div className="flex justify-center">
            {vcs.images &&
              vcs.images.map((image, index) => (
                <div className="px-8" key={index}>
                  <Image src={image.img} className="h-32" />
                </div>
              ))}
          </div>
          <div
            className={cn(' container sm:pb-0 w-3/4 text-xl py-10')}
            dangerouslySetInnerHTML={{ __html: vcs.description }}
          />
          <Link to={vcs.href}>
            <div className="flex items-center justify-center text-lg font-bold text-blue">
              {vcs.cta} <Icon icon={['fad', 'arrow-right']} className="ml-3" />
            </div>
          </Link>
        </Container>
        <div className="container w-3/4 my-32 border-t"></div>
      </Section>

      {collage && (
        <Container>
          <div className="text-center">
            <Container title={collage.title}>
              <div className="flex flex-wrap justify-between">
                {collage.images.map((image, key) => (
                  <div key={key} className="p-8 text-center sm:w-1/2 sm:p-6">
                    <Image className="h-12" src={image.src} alt={image.alt} size="sm" />
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </Container>
      )}
      {testimonials && <Testimonials {...testimonials} />}

      <Section noPaddingT>
        {actionBar && <ActionBar enabled={actionBar.enabled} ctas={actionBar.ctas} text={actionBar.text} />}
      </Section>
    </Layout>
  );
};

export default withSiteData(withRouteData(Home));
