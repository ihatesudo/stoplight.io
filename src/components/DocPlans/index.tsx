import cn from 'classnames';
import * as React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Section } from '../Section';

export interface IDocPlanFeature {
  title: string;
  bold?: boolean;
  toolTip?: string;
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
}

export const DocPlans: React.FunctionComponent<IDocPlans> = ({
  title,
  description,
  features,
  plans,
  buttonUrl,
  buttonText,
}) => {
  return (
    <Section id="docPlans" noPaddingT>
      <Container className="mx-auto ">
        <div className="mb-20 text-center">
          <div className="text-4xl font-bold">{title}</div>
        </div>

        <div className="sticky-pricing">
          <div className="container flex flex-row justify-end w-3/4 h-32 bg-white border-b-2 rounded-lg shadow-lg">
            {plans &&
              plans.length > 0 &&
              plans.map((p, index) => (
                <div
                  key={index}
                  className={cn('text-2xl uppercase font-bold py-12', {
                    'text-green px-10': p.title === 'Free',
                    'text-indigo px-10': p.title === 'Team',
                    'text-purple pl-10': p.title === 'Enterprise',
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
                {/* {plans &&
                  plans.length > 0 &&
                  plans.map((plan, index) => (
                    <th key={index}>
                      <div className="py-12 bg-white ">
                        <div
                          className={cn('text-2xl uppercase font-bold text-green border-b', {
                            'border-r ': plan.title === 'Free',
                            'border-r': plan.title === 'Team',
                            'border-b': plan.title === 'Enterprise',
                          })}
                        >
                          {plan.title}
                        </div>
                      </div>
                    </th>
                  ))} */}
              </tr>
            </thead>

            <tbody>
              {features &&
                features.length > 0 &&
                features.map((feature, index) => {
                  return (
                    <tr key={index} className="">
                      {feature.bold ? (
                        <h3 className="pt-10 pl-6 font-xl">{feature.title}</h3>
                      ) : (
                        <div className="">
                          <td>
                            {feature.toolTip && (
                              <>
                                <div className="tooltip">
                                  <div className="relative">
                                    <div className="right-0 px-4 py-1 text-sm text-white bg-black rounded bottom-full">
                                      {feature.toolTip}
                                      <svg
                                        className="absolute left-0 w-full h-2 text-black top-full"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 255 255"
                                      >
                                        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                            {feature.title}
                            {feature.toolTip && <Icon icon="question-circle" size="sm" className="ml-2" />}
                          </td>
                        </div>
                      )}

                      {plans.map((plan, planIndex) => {
                        return (
                          <td key={planIndex}>
                            {feature.plans && feature.plans.includes(plan.title) && (
                              <Icon className="text-green" icon="check" size="lg" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
};
