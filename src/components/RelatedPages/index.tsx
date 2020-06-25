import cn from 'classnames';
import * as React from 'react';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { Link } from 'src/components/Link';
import { Section } from 'src/components/Section';

export interface IRelatedPage {
  href: string;
  title?: string;
  subtitle?: string;
  listSubtitle?: string;
  image?: string;
  color?: string;
  publishedDate?: string;
  tag: string;
  backgroundSize: 'cover' | 'contain';
}

export const ArticleCard: React.FunctionComponent<IRelatedPage> = ({
  href,
  title,
  subtitle,
  listSubtitle,
  image,
  color = 'black',
  tag,
  backgroundSize = 'cover',
}) => {
  return (
    <Link
      to={href}
      className="flex flex-col w-full h-full overflow-hidden bg-white rounded-lg shadow hover:shadow-lg text-grey-darkest"
    >
      <Image
        src={image || ''}
        className={cn(`h-40 w-100 relative bg-center bg-no-repeat bg-${backgroundSize}`, { [`bg-${color}`]: !image })}
        size="sm"
        useDiv
      />

      <div className="flex flex-col flex-1 p-4 ">
        <h3 className="font-bold mt-5">{title}</h3>

        <p className="flex-1 mt-4">{listSubtitle || subtitle}</p>

        {tag && (
          <div className="flex text-sm text-grey-darker">
            <div className="flex-1 font-bold text-right text-muted">{tag}</div>
          </div>
        )}
      </div>
    </Link>
  );
};

export const RelatedPages: React.FunctionComponent<{ pages: IRelatedPage[]; title?: string }> = ({ pages, title }) => {
  if (!pages || !pages.length) return null;

  return (
    <Section id="related-pages" noPaddingT>
      <Container title={title || 'Related Articles'} className="text-black">
        <div className="flex flex-wrap justify-center -mb-12">
          {pages.map((page, key) => {
            return (
              <div key={key} className="w-1/3 px-6 mb-12 sm:w-full">
                <ArticleCard {...page} />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
