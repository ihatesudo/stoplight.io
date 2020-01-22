import * as React from 'react';
import { withRouteData } from 'react-static';

import { Container, IContainer } from 'src/components/Container';
import { SimpleCard } from 'src/components/SimpleCard';
import { Author } from 'src/components/SimpleCard/Author';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { Feature } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';

import { Chips } from '../../components/Chip';
import { IMember, Member } from '../../components/MemberCard';
import { Section } from '../../components/Section';
import { IValue, Value } from '../../components/Value';

export interface IAbout {
  color: string;
  hero: IHero;
  mission: ISection;
  coreValues: ICoreValues;
  socialGood: ISection;
  careers: ISection;
  team: ITeamSection;
  businesses: IBusinesses;
  press: IPressSection;
  collage: ICollage;
}

interface ISection {
  title: string;
  description: string;
  image: string;
}

interface ICoreValues extends ISection {
  values: IValue[];
}

interface ITeamSection extends ISection {
  members: IMember[];
  actionBar: IActionBar;
}

interface IPressSection extends ISection {
  articles: IPress[];
  cta?: IContainer['cta'];
}

interface IPress {
  image: string;
  date: string;
  description: string;
  publication: string;
  href: string;
}

interface IBusinesses extends ISection {
  quotes: IQuote[];
}

interface IQuote {
  company: string;
  image: string;
  description: string;
  author: string;
  role: string;
}

export const About: React.FunctionComponent<IAbout> = ({
  color,
  hero,
  mission,
  coreValues,
  socialGood,
  careers,
  team,
  press,
  businesses,
  collage,
  ...sectionProps
}) => {
  return (
    <Layout header={{ pinnedColor: 'black' }}>
      <Hero key="hero" bgColor={color} title={hero.title} subtitle={hero.subtitle} ctas={hero.ctas} />

      <Section id="mission" noPaddingB>
        <Container className="pb-32 border-b" title={mission.title}>
          <div
            className="flex max-w-lg mx-auto text-lg leading-loose text-center"
            dangerouslySetInnerHTML={{ __html: mission.description }}
          />
        </Container>
      </Section>

      <Section id="core-values" noPaddingB>
        <Container className="pb-32 border-b" title={coreValues.title}>
          <div
            className="flex max-w-lg mx-auto mb-20 text-lg leading-loose text-center"
            dangerouslySetInnerHTML={{ __html: coreValues.description }}
          />

          <div className="flex flex-wrap justify-around">
            {coreValues.values.map((value, index) => (
              <Value
                key={index}
                icon={value.icon}
                iconStyle={value.iconStyle}
                title={value.title}
                summary={value.summary}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="social-good" noPaddingB>
        <Container className="pb-32 border-b">
          <Feature title={socialGood.title} description={socialGood.description} image={socialGood.image} />

          <Feature title={careers.title} description={careers.description} image={careers.image} isReversed />
        </Container>
      </Section>

      <Section id="team">
        <Container title={team.title}>
          <div
            className="flex max-w-lg mx-auto mb-20 text-lg leading-loose text-center"
            dangerouslySetInnerHTML={{ __html: team.description }}
          />

          <Image src={team.image} className="mb-40 bg-cover rounded-lg shadow" useDiv style={{ height: 500 }} />

          <div className="flex flex-wrap">
            {team.members.map((member, index) => (
              <Member
                key={index}
                isLast={index === team.members.length - 1}
                image={member.image}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>

          {team.actionBar && (
            <div className="md:pb-24">
              <ActionBar text={team.actionBar.text} ctas={team.actionBar.ctas} enabled={team.actionBar.enabled} />
            </div>
          )}
        </Container>
      </Section>

      {press.articles && (
        <Section id="press" {...sectionProps}>
          <Container cta={press.cta} title={press.title}>
            <div className="flex flex-wrap justify-center">
              {press.articles.map((article, index) => (
                <div className="flex px-6 mb-6 text-grey-darker hover:bg-grey-lightest w-80">
                  <SimpleCard key={index} className="h-64 p-8 bg-white" href={article.href} hoverable>
                    <SimpleCardTop className="items-start pb-4">
                      <div className="flex justify-center">
                        <Image
                          src={article.image}
                          title={`${article.publication} Logo`}
                          alt={article.publication}
                          className="h-10"
                        />
                      </div>

                      <SimpleCardTitle subtitle={article.date} className="mt-3 font-bold uppercase text-grey-darker" />
                    </SimpleCardTop>
                    <SimpleCardBody description={article.description} className="text-grey-darker" />
                  </SimpleCard>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Chips
        segments={[
          { color: 'blue', length: 3 },
          { color: 'blue-lighter', length: 2 },
        ]}
        className="justify-center"
      />

      {businesses.quotes && (
        <Section id="businesses" {...sectionProps}>
          <Container title={businesses.title}>
            <div className="flex flex-wrap justify-between md:justify-center">
              {businesses.quotes.map((business, index) => (
                <SimpleCard key={index} className="p-8 m-8 bg-white w-96" elevated>
                  <SimpleCardTop className="p-2">
                    <div className="flex justify-center">
                      <Image
                        src={business.image}
                        title={`${business.company} Logo`}
                        alt={business.company}
                        size="sm"
                        className="h-12"
                      />
                    </div>
                  </SimpleCardTop>

                  <SimpleCardBody className="my-4" description={business.description} />
                  <SimpleCardBottom className="mb-4">
                    <Author name={business.author} meta={business.role} />
                  </SimpleCardBottom>
                </SimpleCard>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Chips
        segments={[
          { color: 'orange-dark', length: 1 },
          { color: 'orange', length: 2 },
          { color: 'orange-lighter', length: 3 },
        ]}
        className="justify-center"
      />

      <Collage id="investors" className="pb-64" {...collage} />
    </Layout>
  );
};

export default withRouteData(About);
