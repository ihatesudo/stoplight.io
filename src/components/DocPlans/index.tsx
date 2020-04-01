import Tippy from '@tippyjs/react';
import cn from 'classnames';
import * as React from 'react';
import 'tippy.js/dist/tippy.css';

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
    <Section id="docPlans" className="sm:hidden">
      <Container className="mx-auto ">
        <div className="mb-20 text-center">
          <div className="text-4xl font-bold">{title}</div>
        </div>
        <div className="w-3/4 mx-auto shadow-lg">
          <div className="container h-2 rounded-t-lg shadow-md bg-blue"></div>
          <div className="sticky-pricing">
            <div className="container flex justify-end h-32 bg-white border-b">
              <div className="shadow-lg test"></div>
              {plans &&
                plans.length > 0 &&
                plans.map((p, index) => (
                  <div
                    key={index}
                    className={cn('text-2xl py-12 font-bold', {
                      'pr-0': p.title === 'Enterprise',
                      'pr-20': p.title === 'Team',
                      'pr-24': p.title === 'Free',
                    })}
                  >
                    {p.title}
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
                        <h3 className="pb-5 ml-6 bg-white pt-14 font-xl">{c.category}</h3>
                        {c.features &&
                          c.features.map((f, i) => {
                            return (
                              <tr className="cat-tr">
                                {f.featureTitle && f.tooltip ? (
                                  <td className="underline">
                                    <Tippy content={f.tooltip} placement="top">
                                      <span>{f.featureTitle}</span>
                                    </Tippy>
                                  </td>
                                ) : (
                                  <td></td>
                                )}

                                {plans.map((plan, planIndex) => {
                                  return (
                                    <>
                                      {f.plans && f.plans.includes(plan.title) ? (
                                        <td key={planIndex}>
                                          <Icon
                                            className={cn({
                                              'text-purple': plan.title === 'Enterprise',
                                              'text-indigo': plan.title === 'Team',
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
            <tr className="flex justify-end">
              {ctas &&
                ctas.map((cta, index) => (
                  <td className="pb-10">
                    <Button
                      key={index}
                      color={cta.color}
                      title={cta.title}
                      href={cta.href}
                      large={true}
                      className={cn('font-bold ease-in active-depress', {
                        'ml-8': cta.color === 'purple',
                        'ml-10': cta.color === 'indigo',
                        'ml-12': cta.color === 'green',
                      })}
                    />
                  </td>
                ))}
            </tr>
          </div>
          <div className="container flex justify-end w-3/4"></div>
        </div>
      </Container>
    </Section>
  );
};
