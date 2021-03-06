import cn from 'classnames';
import * as React from 'react';

import { slugify } from '../../utils/slugify';
import { ActionBar, IActionBar } from '../ActionBar';
import { Button, IButton } from '../Button';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { Link } from '../Link';
import { ISection, Section } from '../Section';

export interface IFeature {
  title: string;
  description: string;
  image: string;
  shortName?: string;
  titleURL?: string;
  isReversed?: boolean;
  titleColor?: string;
  isLast?: boolean;
  overlayImage?: boolean;
  isRound?: boolean;
}

export interface IFeatureSection extends ISection {
  title: string;
  description: string;
  color: string;
  features: IFeature[];
  actionBar: IActionBar;
  buttons: IButton[];
}

export const Feature: React.FunctionComponent<IFeature> = props => {
  const { title, titleURL, description, image, isReversed, titleColor, isLast, overlayImage, isRound } = props;

  return (
    <div
      id={slugify(title)}
      key="content"
      className={cn('Feature flex py-12 sm:pb-0', {
        'flex-row': !isReversed,
        'flex-row-reverse': isReversed,
      })}
    >
      <div
        className={cn('flex flex-col flex-1 w-1/3 sm:w-100 sm:items-center sm:text-center', {
          'pr-16 sm:pr-0': !isReversed,
          'pl-16 sm:pl-0': isReversed,
        })}
      >
        <h2 className={cn('mb-10 text-4xl', `text-${titleColor || 'black'}`)}>
          {titleURL ? (
            <Link to={titleURL} className={`text-${titleColor || 'black'}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div
          className={cn('mb-12 pb-12 sm:pb-0 max-w-md leading-loose text-xl', {
            'sm:mb-0': isLast,
          })}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {overlayImage ? (
        <div className="relative w-1/2 -mr-10 sm:hidden">
          <Image src="/images/studio/hero.png" className="mt-1 rounded-lg shadow-lg" />
          <Image src="/images/studio/hero.png" className="relative -mt-64 -ml-16 rounded-lg shadow-lg" />
        </div>
      ) : (
        <div className="relative w-1/2 sm:hidden">
          {isRound ? (
            <Image
              src={image}
              className={cn(' bg-no-repeat rounded-lg shadow-lg mt-1 bg-center bg-cover h-128 w-128 rounded-full', {
                'ml-auto': !isReversed,
              })}
              style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)' }}
              useDiv
            />
          ) : (
            <Image
              src={image}
              className={cn(' bg-no-repeat bg-contain ml-auto rounded-lg shadow-lg mt-1', {
                'ml-auto': !isReversed,
              })}
              style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)' }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export interface IFeatureStrip {
  features: IFeature[];
}

export const FeatureStrip = ({ features }: IFeatureStrip) => {
  return (
    <div className="FeatureStrip py-4 overflow-auto text-black whitespace-no-wrap bg-black shadow">
      <div className="container flex flex-no-wrap items-center justify-around sm:justify-start">
        {features.map((feature, key) => (
          <a
            key={key}
            href={`#${slugify(feature.title)}`}
            className="flex items-center justify-center px-4 py-2 text-lg font-normal text-white rounded-xl hover:bg-lighten-50"
          >
            <Icon className="text-lg" icon={['fad', 'check-circle']} />
            <div className="ml-3">{feature.shortName}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const FeatureSection: React.FunctionComponent<IFeatureSection> = ({
  title,
  description,
  color,
  features,
  actionBar,
  buttons = [],
  ...sectionProps
}) => {
  if (!features || !features.length) {
    return null;
  }

  return (
    <Section id="product" {...sectionProps} className="FeatureSection pb-32" noPadding>
      {(title || description) && (
        <Container title={title} className={cn(!buttons || !buttons.length ? 'py-32 border-b' : null)}>
          {description && (
            <div
              className="flex max-w-full mx-auto text-xl leading-loose text-center"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </Container>
      )}

      {buttons && buttons.length ? (
        <Container className="mt-20 border-b">
          <div className="flex flex-1 lg:justify-center lg:items-between lg:flex-wrap">
            {buttons.map((button, index) => (
              <Button key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...button} />
            ))}
          </div>
        </Container>
      ) : null}

      <Container className="pt-16 mx-auto">
        {features.map((feature, index) => (
          <Feature
            key={index}
            titleColor={color}
            {...feature}
            isReversed={index % 2 !== 0}
            isLast={index === features.length - 1}
          />
        ))}
      </Container>

      <ActionBar className="mt-20 sm:mt-14" {...actionBar} />
    </Section>
  );
};
