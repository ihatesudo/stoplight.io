import cn from 'classnames';
import * as React from 'react';
import { Manager, Popper, Reference } from 'react-popper';

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
    <Section id="docPlans" className="sm:hidden">
      <Container className="mx-auto ">
        <div className="mb-20 text-center">
          <div className="text-4xl font-bold">{title}</div>
        </div>
        <div className="container w-3/4 h-2 rounded-t-lg shadow-md bg-blue"></div>
        <div className="sticky-pricing">
          <div className="container flex justify-end w-3/4 h-32 bg-white border-b">
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
                      <h3 className="pt-10 pb-2 bg-white font-xl">{c.category}</h3>

                      {c.features &&
                        c.features.map((f, i) => {
                          return (
                            <tr className="cat-tr">
                              {f.featureTitle && f.tooltip ? (
                                <td className="underline">
                                  <Manager>
                                    <Popper placement="bottom-start">
                                      {({ ref, style, placement, arrowProps, ...args }) => (
                                        <div ref={ref} data-placement={placement}>
                                          <div className="tooltip" ref={arrowProps.ref} style={arrowProps.style}>
                                            {f.tooltip}

                                            <div className="popper" ref={arrowProps.ref} style={arrowProps.style} />
                                          </div>
                                        </div>
                                      )}
                                    </Popper>
                                    <Reference>
                                      {({ ref }) => (
                                        <p ref={ref} style={{}}>
                                          {f.featureTitle}
                                        </p>
                                      )}
                                    </Reference>
                                  </Manager>
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
        </div>
      </Container>
    </Section>
  );
};
