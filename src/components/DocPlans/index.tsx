import cn from 'classnames';
import * as React from 'react';

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
}) => {
  return (
    <Section id="docPlans">
      <Container className="mx-auto ">
        <div className="mb-20 text-center">
          <div className="text-3xl font-bold">{title}</div>
        </div>
        <div className="container w-3/4 h-2 rounded-t-lg shadow-md bg-blue"></div>
        <div className="sticky-pricing">
          <div className="container flex justify-end w-3/4 h-32 bg-white border-b-8 shadow-md">
            {plans &&
              plans.length > 0 &&
              plans.map((p, index) => (
                <div
                  key={index}
                  className={cn('text-2xl py-12 font-bold', {
                    'pr-0': p.title === 'Enterprise',
                    'pr-8': p.title === 'Team',
                    'pr-14': p.title === 'Free',
                  })}
                >
                  {p.title}
                </div>
              ))}
          </div>
        </div>

        <div className="container w-3/4 bg-white rounded-lg shadow-lg">
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
                      <h3 className="pt-10 pl-6 bg-white font-xl">{c.category}</h3>

                      {c.features &&
                        c.features.map((f, i) => {
                          console.log(f.plans);
                          return (
                            <tr className="cat-tr">
                              {f.featureTitle ? <td>{f.featureTitle}</td> : <td></td>}

                              {f.tooltip ? (
                                <td>
                                  <div className="absolute z-50 w-1/6 -ml-24 -mt-14 tooltip">
                                    <div className="px-2 py-2 text-white bg-black rounded-xl bottom-full">
                                      {f.tooltip}
                                    </div>
                                    <svg
                                      className="left-0 h-4 text-green top-full"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 255 255"
                                    >
                                      <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                                    </svg>
                                  </div>
                                  <Icon icon="question-circle" size="sm" />
                                </td>
                              ) : (
                                <td></td>
                              )}

                              {plans.map((plan, planIndex) => {
                                return (
                                  <>
                                    {f.plans && f.plans.includes(plan.title) ? (
                                      <td key={planIndex}>
                                        <Icon className="text-green" icon="check" size="lg" />
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
        </div>
      </Container>
    </Section>
  );
};
