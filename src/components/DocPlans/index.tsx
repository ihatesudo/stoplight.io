import Tippy from '@tippyjs/react';
import cn from 'classnames';
import * as React from 'react';
import 'tippy.js/dist/tippy.css';
import { slugify } from '../../utils/slugify';

import { Button } from '../Button';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Section } from '../Section';

export interface IDocPlanFeature {
  featureTitle: string;
  tooltip?: string;
  roadmap?: boolean;
  plans?: Array<IDocPlan['title'] | { title: IDocPlan['title']; display: string }>;
}

export interface IDocPlan {
  title: string;
  price: string;
  domains: string;
}

export interface IDocPlans {
  title: string;
  description: string;
  features: IDocPlanFeature[];
  plans: IDocPlan[];
  buttonUrl: string;
  buttonText: string;
  categories?: ICategory[];
  ctas?: any[];
}
export interface ICategory {
  category: string;
  features: IDocPlanFeature[];
}
export const DocPlans: React.FunctionComponent<IDocPlans> = ({ title, plans, categories, ctas }) => {
  return (
    <Section id={slugify('Feature Breakdown by Plan')} className="sm:hidden" noPaddingB>
      <Container className="mx-auto text-black">
        <div className="mb-20 text-center">
          <div className="text-4xl font-bold">{title}</div>
        </div>
        <div className="mx-auto shadow-lg ">
          <div className="container h-2 rounded-t-lg shadow-md bg-blue2"></div>
          <div className="sticky-pricing">
            <div className="container bg-white border-b">
              <div className="flex px-6">
                <div className="flex w-1/2" />
                <div className="flex w-1/2">
                  {plans &&
                    plans.length > 0 &&
                    plans.map((p, index) => (
                      <div key={index} className="flex flex-col flex-1">
                        <div className={cn('flex justify-center text-xl py-10 font-bold md:text-lg')}>{p.title}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container bg-white rounded-lg shadow-lg">
            {categories?.map((c, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="p-5 mt-10 text-lg font-semibold">{c.category}</div>

                  {c.features?.map((f, i) => {
                    return (
                      <div key={i} className={cn('px-5 py-3 flex items-center', { 'bg-grey-lighter': !(i % 2) })}>
                        <div className="w-1/2">
                          {f.featureTitle && f.tooltip ? (
                            <div>
                              <Tippy content={f.tooltip} placement="top">
                                <span>{f.featureTitle}</span>
                              </Tippy>
                            </div>
                          ) : (
                            <div>{f.featureTitle}</div>
                          )}
                        </div>

                        <div className="flex items-center w-1/2">
                          {f.roadmap && (
                            <div className="flex-1 text-base font-semibold text-center text-grey-dark">coming soon</div>
                          )}

                          {!f.roadmap &&
                            plans.map((plan, planIndex) => {
                              const fp = f.plans?.find(featurePlan =>
                                typeof featurePlan === 'string'
                                  ? featurePlan === plan.title
                                  : featurePlan.title === plan.title
                              );

                              if (!fp) return <div className="flex-1" />;

                              return (
                                <div key={planIndex} className="flex-1 text-center">
                                  {typeof fp === 'string' ? (
                                    <Icon
                                      className={cn({
                                        'text-orange': plan.title === 'Enterprise',
                                        'text-lavender': plan.title === 'Professional',
                                        'text-green': plan.title === 'Starter',
                                        'text-blue2': plan.title === 'Free',
                                      })}
                                      icon="check"
                                      size="lg"
                                    />
                                  ) : (
                                    <div className="text-base font-semibold text-grey-dark">{fp.display}</div>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <div className="flex justify-center pt-10 pb-10">
              <Button
                href={`#${slugify('Sign Up')}`}
                title="View Plans"
                large
                color="blue2"
                className="font-bold text-center ease-in active-depress"
              />
            </div>
          </div>

          <div className="container flex justify-end w-3/4"></div>
        </div>
      </Container>
    </Section>
  );
};
