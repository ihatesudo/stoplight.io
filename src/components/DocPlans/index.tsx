import Tippy from '@tippyjs/react';
import cn from 'classnames';
import * as React from 'react';
import 'tippy.js/dist/tippy.css';
import { slugify } from '../../utils/slugify';


import { Button } from '../Button';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Section } from '../Section';

export interface IDocPlanFeature {
  featureTitle: string;
  tooltip?: string;
  plans?: Array<IDocPlan['title']>;
}

export interface IDocPlan {
  title: string;
  price: string;
  domains: string;
  link?: string;
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
export const DocPlans: React.FunctionComponent<IDocPlans> = ({
  title,
  description,
  features,
  plans,
  buttonUrl,
  buttonText,
  categories,
  ctas,
}) => {
  return (
    <Section id={slugify('Feature Breakdown by Plan')} className="sm:hidden" noPaddingB>
      <Container className="mx-auto">
        <div className="mb-20 text-center">
          <div className="text-4xl font-bold">{title}</div>
        </div>
        <div className="mx-auto shadow-lg ">
          <div className="container h-2 rounded-t-lg shadow-md bg-blue"></div>
          <div className="sticky-pricing">
            <div className="flex justify-end h-32 bg-white border-b">
              <div className="shadow-lg"></div>
              {plans &&
                plans.length > 0 &&
                plans.map((p, index) => (
                  <div className="flex flex-col">
                    <div
                      key={index}
                      className={cn('text-2xl py-12 font-bold md:text-lg', {
                        'px-14 md:px-16': p.title === 'Enterprise',
                        '-mr-3': p.title === 'Professional',
                        'px-16 md:px-20': p.title === 'Starter',
                        'pr-10 md:-mr-3': p.title === 'Free',
                      })}
                    >
                      {p.title}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="container bg-white rounded-lg shadow-lg">
            <table className="bg-white hubs-table">
              <thead>
                <tr>
                  <th className="w-1/2"></th>
                </tr>
              </thead>

              <tbody>
                {categories &&
                  categories.length > 0 &&
                  categories.map((c, index) => {
                    return (
                      <>
                        <h3 key={index} className="pb-5 ml-6 bg-white pt-14 font-xl">
                          {c.category}
                        </h3>
                        {c.features &&
                          c.features.map((f, i) => {
                            return (
                              <tr className="cat-tr">
                                {f.featureTitle && f.tooltip ? (
                                  <td key={i} className="underline">
                                    <Tippy content={f.tooltip} placement="top">
                                      <span>{f.featureTitle}</span>
                                    </Tippy>
                                  </td>
                                ) : (
                                  <td>
                                    <span>{f.featureTitle}</span>
                                  </td>
                                )}

                                {plans.map((plan, planIndex) => {
                                  return (
                                    <>
                                      {f.plans && f.plans.includes(plan.title) ? (
                                        <td key={planIndex}>
                                          <Icon
                                            className={cn({
                                              'text-orange': plan.title === 'Enterprise',
                                              'text-purple': plan.title === 'Professional',
                                              'text-indigo': plan.title === 'Starter',
                                              'text-green': plan.title === 'Free',
                                            })}
                                            icon="check"
                                            size="lg"
                                          />
                                        </td>
                                      ) : (
                                        <td></td>
                                      )}
                                    </>
                                  );
                                })}
                              </tr>
                            );
                          })}
                      </>
                    );
                  })}
              </tbody>
              <div className="h-10"></div>
            </table>
            
            <tr className="flex justify-center">
              <td className="pb-10">
                <Button
                  href={`#${slugify('Sign Up')}`}
                  title="Request Early Access"
                  large
                  color="blue"
                  className="font-bold text-center ease-in active-depress"
                />
              </td>
            </tr>
          </div>
          <div className="container flex justify-end w-3/4"></div>
        </div>
      </Container>
    </Section>
  );
};
