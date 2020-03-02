import cn from 'classnames';
import * as React from 'react';

import { Button, IButton } from '../Button';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Link } from '../Link';

export interface IPlanFeature {
  name: string;
}

export interface IPricingPlan {
  title: string;
  description: string;
  price: IPrice;
  unit: string;
  features: IPlanFeature[];
  titleColor: string;
  button: IButton;
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
  return (
    <div className="flex items-center py-2">
      <Icon icon={['fad', 'check-circle']} className={`mr-3 text-xl text-blue`} /> <div className="text-xl">{name}</div>
    </div>
  );
};

export const PricingPlan: React.FunctionComponent<IPricingPlan> = ({
  title,
  description,
  price,
  unit,
  features,
  titleColor,
  button,
}) => {
  return (
    <div className={`flex-1 mx-6 rounded-lg md:my-6 md:flex-auto md:w-full bg-${titleColor}`}>
      <div className="p-10 mt-2 bg-white rounded-lg shadow-md">
        <div className="px-8 py-8 mb-10 -mx-10 -mt-10 bg-grey-lightest ">
          <div className="flex items-center mb-2 text-3xl font-extrabold">{title}</div>
          {price.button ? (
            <>
              <Link className="text-xl leading-loose" to={price.button.href}>
                <Icon icon={['fad', 'arrow-right']} className="mr-4 text-blue" />

                {price.title}
              </Link>
            </>
          ) : (
            <div className="text-xl font-bold leading-loose">{price.title}</div>
          )}
        </div>

        <div className="flex items-center mb-4 text-xl font-bold">
          {unit && <span className="ml-3 text-base font-default">{unit}</span>}
        </div>

        <div className="mb-10">
          {features.map((feature, key) => (
            <PlanFeature key={key} name={feature.name} />
          ))}
        </div>

        {button && (
          <div className="-mx-10 -mb-10">
            <Button className="w-full" {...button} />
          </div>
        )}
      </div>
    </div>
  );
};

export const PricingPlans: React.FunctionComponent<IPricingPlans> = ({ color, plans }) => {
  if (!plans || !plans.length) {
    return null;
  }

  return (
    <Container className="relative -mt-40 z-5">
      <div className="flex flex-wrap -mx-6 md:mx-0">
        {plans.map((pricingPlan, key) => (
          <PricingPlan key={key} titleColor={color} {...pricingPlan} />
        ))}
      </div>
    </Container>
  );
};
