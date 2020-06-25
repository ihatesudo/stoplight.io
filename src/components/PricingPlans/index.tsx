import cn from 'classnames';
import * as React from 'react';

import { slugify } from '../../utils/slugify';
import { Button, IButton } from '../Button';
import { CallToAction, ICallToAction } from '../CallToAction';
import { Container } from '../Container';
import { Icon } from '../Icon';

export interface IPlanFeature {
  name: string;
}

export interface IPricingPlan {
  title: string;
  summary: string;
  price: IPrice;
  unit: string;
  features: IPlanFeature[];
  titleColor: string;
  button: IButton;
  ctas?: ICallToAction[];
  addInfo?: string;
}
export interface IPrice {
  title?: string;
  button?: IButton;
}
export interface IPricingPlans {
  color: string;
  plans: IPricingPlan[];
}

export const PlanFeature: React.FunctionComponent<IPlanFeature> = ({ name }) => {
  if (name.includes('Everything in')) {
    return (
      <div className="flex items-center py-3 text-base">
        <Icon icon={['fad', 'arrow-left']} className={`fa-fw mr-3 text-blue`} />

        <div>{name}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center py-3 text-base">
      {(name && name.includes('No User Cap')) || name.includes('Unlimited') ? (
        <Icon icon={['fad', 'infinity']} className={`fa-fw mr-3 text-blue`} />
      ) : (
        <Icon icon={['fad', 'check-circle']} className={`fa-fw mr-3 text-blue`} />
      )}

      <div>{name}</div>
    </div>
  );
};

export const PricingPlan: React.FunctionComponent<IPricingPlan> = ({
  title,
  summary,
  addInfo,
  price,
  features,
  titleColor,
  ctas,
}) => {
  return (
    <div className={cn(`flex flex-col mx-3 h-full w-80 rounded-lg border md:my-6 md:flex-auto sm:flex-wrap bg-${titleColor}`)}>
      <div className="flex flex-col h-full p-10 mt-2 bg-white">
        <div className="h-64 py-8 mb-10 -mx-10 -mt-10 border-b bg-grey-lightest">
          <div className="items-center text-lg font-semibold text-center">{title}</div>
          <div className="items-center mx-8 mt-8 text-lg text-center">{summary}</div>

          {price.title === 'Contact Us' ? (
            <div className="flex justify-center mt-5 mb-12 text-2xl">{price.title}</div>
          ) : (
            <div className="pt-8 text-center">
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">{price.title}</div>
                <div className="ml-1 text-lg font-normal leading-tight text-left">
                  <p className="text-lg opacity-75">/ month</p>
                </div>
              </div>
              {addInfo && <div className={cn('text-lg text-center mx-8 mt-2 opacity-75')}>{`+ ${addInfo}`}</div>}
            </div>
          )}
        </div>

        <div id={slugify('sign up')} className="flex flex-col flex-1">
          {features.map((feature, key) => (
            <PlanFeature key={key} name={feature.name} />
          ))}
        </div>

        <div className=" h-30 md:justify-center">
          {ctas &&
            ctas.map((action, key) => (
              <div
                key={key}
                className={cn('flex pt-10 justify-center', {
                  'pt-10': action.title === 'Request Early Access Professional',
                })}
              >
                <CallToAction {...action} className='w-full' shadow='none' />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const PricingPlans: React.FunctionComponent<IPricingPlans> = ({ color, plans }) => {
  if (!plans || !plans.length) {
    return null;
  }

  return (
    <>
      <Container className="relative pb-16 -mt-64 text-black z-5 md:flex md:justify-center">
        <div className="flex justify-center mx-auto mt-24 md:flex-col sm:flex-wrap">
          {plans.map((pricingPlan, key) => (
            <div key={key} className="pt-2">
              <PricingPlan {...pricingPlan} />
            </div>
          ))}
        </div>
      </Container>

      <div className="flex justify-center pb-16 mx-4 sm:hidden">
        <Button
          href={`#${slugify('Feature Breakdown by Plan')}`}
          title="Compare Features"
          large
          color="blue"
          outlined
        />
      </div>
    </>
  );
};
