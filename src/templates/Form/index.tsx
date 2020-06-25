import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';
import { LandingHero } from 'src/components/Hero/LandingHero';
import { Section } from 'src/components/Section';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { Container } from '../../components/Container';
import { IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Layout } from '../../components/Layout';
import { IRelatedPage, RelatedPages } from '../../components/RelatedPages';
import { ITestimonials, Testimonials } from '../../components/Testimonials';

export interface IForm {
  hero: IHero;
  hubspot: IHubSpotForm;
  collage: ICollage;
  testimonials: ITestimonials;
  relatedPages?: IRelatedPage[];
  actionBar?: IActionBar;
  leftContent?: {
    title: string;
    description: string;
  };
  centerContent?: {
    title: string;
    description: string;
  };
}

export const Form: React.FunctionComponent<IForm> = ({
  leftContent,
  hubspot,
  collage,
  testimonials,
  relatedPages,
  actionBar,
  centerContent,
  hero,
}) => {
  const hasLeftContent = leftContent && leftContent.description ? true : false;
  const hasCenterContent = centerContent && centerContent.description ? true : false;
  return (
    <Layout>
      {hero && <LandingHero {...hero} />}

      <Container className="relative z-20 flex md:flex-wrap-reverse">
        {hasLeftContent && (
          <div className="flex-1 w-2/3 pt-20 pr-4 md:w-full md:pr-0">
            {leftContent && leftContent.title && (
              <div className="text-3xl" dangerouslySetInnerHTML={{ __html: leftContent.title }} />
            )}

            {leftContent && leftContent.description && (
              <div
                className={cn('markdown-body', leftContent.title ? 'mt-10' : '')}
                dangerouslySetInnerHTML={{ __html: leftContent.description }}
              />
            )}
          </div>
        )}

        {hasCenterContent && (
          <div className="flex mx-auto md:pr-0 md:w-full">
            {centerContent && centerContent.description && (
              <div className={'markdown-body mt-10'} dangerouslySetInnerHTML={{ __html: centerContent.description }} />
            )}
          </div>
        )}

        {hubspot && hasLeftContent && (
          <div className={'z-10 relative md:w-full pt-20'}>
            <HubSpotForm
              className={'p-8 w-128 sm:w-auto sticky shadow-lg'}
              portalId={hubspot.portalId}
              formId={hubspot.formId}
              style={{ top: 100 }}
            />
          </div>
        )}

        {hubspot && !hasLeftContent && !hasCenterContent && (
          <div className={'flex-1 mt-20'}>
            <HubSpotForm
              className={'p-8 sticky shadow-lg'}
              portalId={hubspot.portalId}
              formId={hubspot.formId}
              style={{ top: 100 }}
            />
          </div>
        )}
      </Container>

      <section />

      {testimonials && (
        <Section id="testimonials" noPaddingB>
          <h2 className="text-5xl font-semibold leading-tight text-center text-black sm:pr-0 md:text-5xl">
            API-First Companies Love Stoplight
          </h2>
          <Testimonials {...testimonials} />
        </Section>
      )}

      {collage && <Collage id="customers" {...collage} />}

      {actionBar && <ActionBar className="my-24" {...actionBar} />}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </Layout>
  );
};

export default withRouteData(Form);
