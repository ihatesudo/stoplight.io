import * as React from 'react';
import { withRouteData } from 'react-static';
import { Desktop } from 'src/components/Header/Desktop';
import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { DocPlans, IDocPlans } from '../../components/DocPlans';
import { FAQ, IFAQ } from '../../components/FAQ';
import { Hero, IHero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { IPricingPlan, PricingPlans } from '../../components/PricingPlans';
import { Section } from '../../components/Section';

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
      <Hero bgColor={color} {...hero} containerClassName="pb-64" />
      <PricingPlans color={color} plans={plans} />
      <Collage {...collage} />
      <div className="container w-3/4 border-b"></div>
      <DocPlans {...docPlans} />
      <ActionBar
        text={actionBar.text}
        ctas={actionBar.ctas}
        enabled={actionBar.enabled}
        className="mx-40 sm:flex-col sm:justify-center sm:mx-0"
      />
      <FAQ {...faq} />
    </Layout>
  );
};

export default withRouteData(Pricing);
