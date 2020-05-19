import cn from 'classnames';
import * as React from 'react';

import { slugify } from '../../utils/slugify';
import { Button, IButton } from '../Button';
import { CallToAction, ICallToAction } from '../CallToAction';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { IInput, Input } from '../Input';
import { Link } from '../Link';
import { Submit } from '../Submit';

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
      <div className="flex py-3">
        <Icon icon={['fad', 'arrow-left']} className={` mr-2 mt-1 text-blue`} /> <div>{name}</div>
      </div>
    );
  }
  return (
    <div className="flex py-3">
      {(name && name.includes('No User Cap')) || name.includes('Unlimited') ? (
        <Icon icon={['fad', 'infinity']} className={` mr-2 mt-1 text-blue`} />
      ) : (
        <Icon icon={['fad', 'check-circle']} className={` mr-2 mt-1 text-blue`} />
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
  unit,
  features,
  titleColor,
  ctas,
  button,
}) => {
  return (
    <div
      className={cn(`flex flex-col mx-3 h-full rounded-lg md:my-6 md:flex-auto sm:flex-wrap bg-${titleColor}`, {
        'price-box': titleColor === 'purple',
      })}
    >
      <div className="flex flex-col h-full p-10 mt-2 bg-white shadow-md ">
        <div className="py-8 mb-10 -mx-10 -mt-10 border-b h-80 bg-grey-lightest">
          <div className="items-center text-4xl font-extrabold text-center">{title}</div>
          <div className="items-center mx-8 mt-4 text-lg text-center">{summary}</div>
          {price.title === 'Contact Us' ? (
            <div className="flex justify-center mt-5 text-4xl">{price.title}</div>
          ) : (
            <div className="pt-1 font-bold leading-loose text-center">
              <div className="flex justify-center text-5xl font-bold">
                {price.title}
                <div className="my-8 ml-1 text-lg font-normal leading-tight text-left">
                  <p className="text-lg">/month</p>
                </div>
              </div>
              <div
                className={cn('items-center font-normal', {
                  'text-lg text-center mx-8': addInfo,
                  'mb-8': !addInfo,
                })}
              >
                {addInfo && (
                  <>
                    {/* <div className="text-center">
                      <Icon icon={'plus'} className="mb-4" />
                    </div> */}
                    <Icon icon={['fal', 'plus']} className="mr-1" size="sm" />
                    {addInfo}
                  </>
                )}
              </div>
              {/* {addInfo ? (
                <div className="items-center mx-8 font-normal text-center">{addInfo}</div>
              ) : (
                <div className="mt-8"></div>
              )} */}
            </div>
          )}
        </div>
        <div id={slugify('sign up')} className="flex flex-col flex-1">
          {features.map((feature, key) => (
            <PlanFeature key={key} name={feature.name} />
          ))}
        </div>
        <div className=" h-30 md:flex md:justify-center">
          {ctas &&
            ctas.map((action, key) => (
              <div
                className={cn('flex pt-3', {
                  'pt-10': action.title === 'Request Early Access Professional',
                })}
              >
                <CallToAction {...action} />
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
      <Container className="relative pb-16 -mt-96 z-5 md:flex md:justify-center">
        <div className="flex justify-center mt-32 md:flex-col sm:flex-wrap">
          {plans.map((pricingPlan, key) => (
            <div
              className={cn(' pt-2', {
                'shadow-xl': pricingPlan.title === 'Professional',
              })}
            >
              <PricingPlan key={key} titleColor={color} {...pricingPlan} />
            </div>
          ))}
        </div>
      </Container>
      <div className="flex justify-center pb-16 mx-4 sm:hidden">
        <Button href={`#${slugify('Feature Breakdown by Plan')}`} title="Compare Plans" large color="blue" outlined />
      </div>
    </>
  );
};
