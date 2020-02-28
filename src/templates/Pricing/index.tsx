import * as React from 'react';
import { withRouteData } from 'react-static';
import { Collage, ICollage } from '../../components/Collage';
import { DocPlans, IDocPlans } from '../../components/DocPlans';
import { FAQ, IFAQ } from '../../components/FAQ';
import { G2Widget } from '../../components/G2Widget';
import { Hero, IHero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { IPricingPlan, PricingPlans } from '../../components/PricingPlans';

export interface IPricing {
  color: string;
  hero: IHero;
  plans: IPricingPlan[];
  docPlans: IDocPlans;
  faq: IFAQ;
  collage: ICollage;
}

export const Pricing: React.FunctionComponent<IPricing> = ({ color, hero, plans, docPlans, collage, faq }) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} skew="10deg" containerClassName="pb-64" />
      <PricingPlans color={color} plans={plans} />
      <Collage id="investors" {...collage} />
      <DocPlans {...docPlans} />
      <FAQ {...faq} />
      <G2Widget />
    </Layout>
  );
};

export default withRouteData(Pricing);
