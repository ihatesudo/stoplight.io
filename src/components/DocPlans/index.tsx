import * as React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Section } from '../Section';

export interface IDocPlanFeature {
  title: string;
  bold?: boolean;
  plans?: Array<IDocPlan['title']>;
}

export interface ITitle {
  bold?: boolean;
  hoverable?: boolean;
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
    <Section id="docPlans">
      <Container className="mx-auto">
        <div className="mb-20 text-center">
          <div className="text-4xl font-bold">{title}</div>
          <div
            className="max-w-lg mx-auto mt-10 text-xl leading-loose opacity-50"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="container w-3/4 bg-white shadow-lg">
          <table className="bg-white hubs-table">
            <thead>
              <tr>
                <th />
                {plans &&
                  plans.length > 0 &&
                  plans.map((plan, index) => (
                    <th key={index}>
                      <div className="flex flex-col pb-0">
                        <p className="text-2xl font-bold text-accent">{plan.title}</p>
                        <Link className="flex-1 mt-2 text-lg font-bold" to={plan.link}>
                          {plan.price}
                        </Link>
                        <p className="mt-2">{plan.domains}</p>
                      </div>
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {features &&
                features.length > 0 &&
                features.map((feature, index) => {
                  return (
                    <tr key={index}>
                      {feature.bold ? (
                        <h3 className="pt-10 pl-6 font-xl">{feature.title}</h3>
                      ) : (
                        <td>{feature.title}</td>
                      )}

                      {plans.map((plan, planIndex) => {
                        return (
                          <td key={planIndex}>
                            {feature.plans && feature.plans.includes(plan.title) && (
                              <Icon className="text-green" icon="check-circle" size="lg" />
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
