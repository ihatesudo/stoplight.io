import * as React from 'react';
import { withRouteData } from 'react-static';
import { LandingHero } from 'src/components/Hero/LandingHero';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { DocPlans, IDocPlans } from '../../components/DocPlans';
import { FAQ, IFAQ } from '../../components/FAQ';
import { IHero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { IPricingPlan, PricingPlans } from '../../components/PricingPlans';

export interface IPricing {
  color: string;
  hero: IHero;
  plans: IPricingPlan[];
  docPlans: IDocPlans;
  faq: IFAQ;
  collage: ICollage;
  actionBar: IActionBar;
}

export const Pricing: React.FunctionComponent<IPricing> = ({
  color,
  hero,
  plans,
  docPlans,
  collage,
  faq,
  actionBar,
}) => {
  return (
    <Layout>
      {hero && <LandingHero bgColor={color} {...hero} containerClassName="pb-64" />}
      {plans && <PricingPlans color={color} plans={plans} />}
      <div className="container w-3/4 border-b"></div>
      {collage && <Collage {...collage} />}
      <div className="container w-3/4 border-b"></div>
      {docPlans && <DocPlans {...docPlans} />}
      <div className="container w-3/4 pt-32 border-b sm:hidden"></div>
      {faq && <FAQ {...faq} />}
      <div className="pb-32">
        {actionBar && <ActionBar {...actionBar} className=" sm:flex-col sm:justify-center sm:mx-0" />}
      </div>
    </Layout>
  );
};

export default withRouteData(Pricing);
