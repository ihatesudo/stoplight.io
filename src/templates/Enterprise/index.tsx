import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container } from '../../components/Container';
import { CustomerSection } from '../../components/CustomerSection';
import { Features, IFeature } from '../../components/Features';
import { GartnerCoolVendor, IGartnerCoolVendor } from '../../components/GartnerCoolVendor';
import { Hero, IHero } from '../../components/Hero';
import { IImage } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';

export interface IEnterprise {
  customers?: {
    images: IImage[];
  };
  color: string;
  hero: IHero;
  gartnerCoolVendor: IGartnerCoolVendor;
  actionBar?: IActionBar;
  features: IFeature[];
}

export const Enterprise: React.FunctionComponent<IEnterprise> = ({
  color,
  hero,
  customers,
  gartnerCoolVendor,
  actionBar,
  features,
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} aligned="center" image={hero.image && { ...hero.image, shadow: false }} />
      {features && (
        <Section id="features" className="pt-32 sm:pt-0" noPadding>
          <Container>
            <Features features={features} className="mt-2 sm:mt-6" />
          </Container>
        </Section>
      )}

      {customers && <CustomerSection className="pt-32" noPadding images={customers.images} cardBg="white" />}

      {gartnerCoolVendor && <GartnerCoolVendor className="pt-32" noPadding {...gartnerCoolVendor} />}

      {actionBar && (
        <Section>
          <ActionBar {...actionBar} />
        </Section>
      )}
    </Layout>
  );
};

export default withSiteData(withRouteData(Enterprise));
