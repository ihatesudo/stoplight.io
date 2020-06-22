
import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Hero, IHero, IHeroBreadCrumb } from 'src/components/Hero';
import { IHeroAuthor } from 'src/components/Hero/HeroAuthor';
import { Image } from 'src/components/Image';
import { IInfo, Info } from 'src/components/Info';
import { Section } from 'src/components/Section';
import { ITab } from 'src/components/Tabs';
import { convertMarkdownToHTML } from 'src/utils/markdown/index.js';
import { Layout } from '../../components/Layout';

export interface IPage {
  path: string;
  title: string;
  subtitle: string;
  className?: string;
  pageName?: string;
  breadCrumbs?: IHeroBreadCrumb[];
  bodyImage?: string;
  author?: IHeroAuthor;
  publishedDate?: string;
  color?: string;
  hero: Partial<IHero>;
  actionBar?: IActionBar;
  sidebar?: {
    info?: IInfo;
  };
  tabs?: ITab[];
  body: string;
  includeToc?: boolean;
}

/**
 * SUBPAGE
 */

export const Subpage: React.FunctionComponent<IPage> = ({
  path,
  title,
  subtitle,
  pageName,
  breadCrumbs,
  bodyImage,
  author,
  publishedDate,
  color,
  hero,
  sidebar,
  actionBar,
  tabs,
  className,
  body,
  includeToc = true,
}) => {
  const heroProps: IHero = {
    ...hero,
    title,
    subtitle,
    pageName,
    bgColor: color,
    breadCrumbs,
  };

  if (author && author.name) {
    heroProps.author = { ...author, meta: publishedDate };
  }

  let url = path;
  if (typeof window !== 'undefined') {
    url = window.location.origin + path;
  }

  const html = convertMarkdownToHTML(body, { includeToc: !sidebar && includeToc });

  return (
    <Layout>
      <Hero {...heroProps} tabs={tabs} />

      <Section noPadding>
        <Container className="mx-auto my-10 sm:-mb-1">
          <div className="relative pb-20">
            {sidebar && (
              <div className="float-right w-1/3 mb-12 ml-12 -mt-32 sm:mt-0 sm:ml-0 sm:mb-24 sm:w-full sm:float-none">
                {sidebar.info ? <Info {...sidebar.info} /> : null}
              </div>
            )}

            {bodyImage && (
              <div
                className="text-center"
                style={{
                  marginTop: -120,
                }}
              >
                <Image className="rounded-lg shadow bodyImage" src={bodyImage} alt={bodyImage} />
              </div>
            )}

<div className={cn('markdown-body', className)} dangerouslySetInnerHTML={{ __html: html }} />

          </div>
        </Container>
      </Section>

      {actionBar && (
        <Section className="-mt-20">
          <ActionBar className="my-24" {...actionBar} />
        </Section>
      )}

    </Layout>
  );
};

export default withRouteData(Subpage);
