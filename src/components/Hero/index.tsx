import cn from 'classnames';
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { headerHeightClass } from 'src/components/Header';
import { IImage, Image } from 'src/components/Image';
import { Link } from 'src/components/Link';

let Particles;
if (typeof window !== 'undefined') {
  Particles = require('react-particles-js').default;
}

const indexMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
};

interface IHeroCard {
  // TODO
}

export interface IHeroButton {
  title: string;
  href: string;
  icon?: string;
  color?: string;
}

export interface IHeroAuthor {
  className?: string;
  name: string;
  path: string;
  image: string;
}

export interface IHero {
  pageName: string;
  aligned: 'center' | 'right' | 'left';
  title: string;
  subtitle: string;
  author?: IHeroAuthor;
  cta: ICallToAction;
  bgColor: string;
  cards: IHeroCard[];
  buttons: IHeroButton[];
  particles: boolean;
  image: IImage;
  skew: 'rounded' | string;
  containerClassName: string;
}

export const HeroAuthor: React.FunctionComponent<IHeroAuthor> = ({ className, name, path, image }) => {
  if (!image || !name) return null;

  return (
    <Link to={path} disabled={!path} className={cn(className, 'flex items-center')}>
      <Image className="mr-2 rounded-full h-16 w-16" src={image} alt="author" />
      {name}
    </Link>
  );
};

const HeroCard = ({ index, title, subtitle, href, bgColor, icon, image }) => {
  return (
    <Link
      to={href}
      className={cn(
        'HeroBlock',
        'md:mb-6',
        'shadow relative flex flex-col flex-1 h-48 md:h-40 overflow-hidden rounded-md p-6 mx-3 text-left z-10 text-white',
        `block-${indexMap[index]}`,
        {
          [`bg-${bgColor}`]: bgColor,
          'cursor-pointer': href,
        }
      )}
    >
      <div className="flex items-center">
        {icon && <FontAwesomeIcon icon={['fas', icon.name]} className="mr-3" />} <h3>{title}</h3>
      </div>
      {subtitle && <div className="mt-4 leading-loose">{subtitle}</div>}

      {image && (
        <div
          className="rounded-full bg-cover h-48 w-32"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}
      <div className={cn(`triangle-${indexMap[index]}`, 'platform-block-triangle')} />
    </Link>
  );
};

const HeroButton: React.FunctionComponent<IHeroButton> = ({ title, icon, href, color }) => {
  const className = cn('flex items-center py-3 text-grey-darkest pl-4 pr-6 sm:m-3 mx-3 shadow-md bg-white rounded-md', {
    'hover:opacity-93 cursor-pointer': href,
    'cursor-default': !href,
  });

  const elems = [];

  if (icon) {
    elems.push(
      <FontAwesomeIcon key="1" icon={['fas', icon]} className={cn('mr-2 text-lg', `text-${color || 'green'}`)} />
    );
  }

  if (title) {
    elems.push(
      <div key="2" className="font-semibold">
        {title}
      </div>
    );
  }

  let elem;
  if (href) {
    elem = (
      <Link to={href} className={className}>
        {elems}
      </Link>
    );
  } else {
    elem = <div className={className}>{elems}</div>;
  }

  return <div className="sm:w-1/2">{elem}</div>;
};

export const Hero: React.FunctionComponent<IHero> = ({
  pageName,
  aligned = 'center',
  title,
  subtitle,
  author,
  cta,
  bgColor = 'black',
  cards = [],
  buttons = [],
  particles,
  image,
  skew,
  containerClassName,
}) => {
  return (
    <React.Fragment>
      <div key="main" className="relative">
        <div className={cn(headerHeightClass, 'w-100')} />
        <div
          className={cn(
            containerClassName,
            `container text-white flex flex-col pt-32 md:pt-24 relative z-5 text-${aligned}`
          )}
        >
          <div
            className={cn(!cta && !buttons.length && !cards.length ? 'mb-48 md:mb-24' : 'mb-24', {
              'mx-auto': !aligned || aligned === 'center',
              'ml-auto w-2/3 md:w-full': aligned === 'right',
              'mr-auto w-2/3 md:w-full': aligned === 'left',
            })}
          >
            {pageName && <div className="uppercase text-white opacity-75 font-semibold mb-4">{pageName}</div>}

            <h1>{title}</h1>

            {subtitle && (
              <div
                className={cn('font-default opacity-75 text-xl max-w-lg mt-4 md:mt-6', {
                  'mx-auto': !aligned || aligned === 'center',
                  'ml-auto': aligned === 'right',
                  'mr-auto': aligned === 'left',
                })}
              >
                {subtitle}
              </div>
            )}

            {author && (
              <div>
                <HeroAuthor className="mt-6 text-white opacity-75" {...author} />
              </div>
            )}
          </div>

          {cta && (
            <CallToAction
              className={cn('pb-24 md:pb-4', {
                'mx-auto': aligned === 'center',
                'ml-auto': aligned === 'right',
                'mr-auto': aligned === 'left',
              })}
              {...cta}
            />
          )}

          {!cards.length && buttons.length ? (
            <div className="flex flex-wrap mx-auto pb-24 md:pt-16">
              {buttons.map((button, i) => (
                <HeroButton key={i} color={bgColor} {...button} />
              ))}
            </div>
          ) : null}

          {cards.length ? (
            <div className="flex mx-auto md:flex-col md:pt-16">
              {cards.map((card, i) => (
                <HeroCard key={i} index={parseInt(i) + 1} {...card} />
              ))}
            </div>
          ) : null}
        </div>

        {particles && (
          <div className="absolute z-1 sm:hidden" style={{ left: -100, top: -100, right: -100, bottom: -100 }}>
            {Particles && (
              <Particles
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                params={{
                  fps_limit: 15,
                  retina_detect: false, // possible performance issues when true
                  particles: {
                    number: {
                      value: 160,
                      density: {
                        enable: false,
                      },
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        speed: 4,
                        size_min: 0.3,
                      },
                    },
                    line_linked: {
                      enable: false,
                    },
                    move: {
                      random: true,
                      speed: 1,
                      direction: 'top',
                      out_mode: 'out',
                    },
                  },
                }}
              />
            )}
          </div>
        )}

        <div
          className={cn('absolute z-0 border-4 border-lighten-300 overflow-hidden sm:hidden', {
            [`bg-${bgColor}`]: bgColor,
            'background-repeat': !particles,
          })}
          style={{
            width: 8000,
            height: 8000,
            left: '50%',
            bottom: image ? -150 : cards.length ? 50 : 0,
            marginLeft: -4000,
            borderRadius: skew === 'rounded' ? '50%' : '0',
            backgroundImage: !particles ? `url(/images/patterns/diagonal-stripes.png)` : undefined,
            transform: skew && skew !== 'rounded' ? `skew(0, ${skew})` : undefined,
          }}
        />

        <div
          className={cn('absolute pin overflow-hidden sm:block hidden', {
            [`bg-${bgColor}`]: bgColor,
            'background-repeat': true,
          })}
          style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(/images/patterns/diagonal-stripes.png)`,
          }}
        />

        <div
          className={cn('absolute pin z-0')}
          style={{
            background: 'linear-gradient(to right top, transparent, rgba(134, 218, 254, 0.1))',
            bottom: image ? -200 : 0,
          }}
        />
      </div>

      {image && (
        <div key="image" className="sm:hidden container mx-auto relative" style={{ height: 500 }}>
          <Image className="absolute pin" {...image} />
        </div>
      )}
    </React.Fragment>
  );
};