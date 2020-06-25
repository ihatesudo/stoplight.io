import cn from 'classnames';
import { features } from 'process';
import * as React from 'react';
import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { headerHeightClass } from 'src/components/Header';
import { Image } from 'src/components/Image';
import { ITab, Tabs } from 'src/components/Tabs';

import { HubSpotForm, IHubSpotForm } from '../HubSpotForm';
import { Icon } from '../Icon';

export interface ILandingHero {
  title: string;
  subtitle: string;
  bgColor?: string;
  contentBgImage?: string;
  contentBgOverlay?: string;
  greyBg?: boolean;
  aligned?: 'center' | 'right' | 'left';
  ctas?: ICallToAction[];
  containerClassName?: string;
  wrapperClassName?: string;
  titleImage?: string;
  titleDemo?: IHubSpotForm;
  titleForm?: IHubSpotForm;
  list?: any;
  tabs?: ITab[];
  forceTabsAlign?: boolean;
}

export const LandingHero: React.FunctionComponent<ILandingHero> = ({
  aligned = 'center',
  title,
  subtitle,
  ctas,
  bgColor = 'white',
  containerClassName,
  wrapperClassName,
  titleImage,
  titleDemo,
  titleForm,
  list,
  tabs = [],
  forceTabsAlign,
}) => {
  // Filter out any empty button objects
  const heroTabs = tabs.filter(tab => {
    return tab.href;
  });

  // Force left alignment with hero tabs
  if (heroTabs.length) {
    aligned = 'left';
  }

  // Force center alignment only if both hero tabs and submit form are present
  if (forceTabsAlign) {
    aligned = 'center';
  }

  return (
    <React.Fragment>
      <div key="main" className={cn(wrapperClassName, 'relative pb-16')}>
        <div className={cn(headerHeightClass, 'w-100', { [`bg-${bgColor}`]: bgColor })} />
        <div
          className={cn(
            containerClassName,
            {
              [`flex`]: aligned === 'left',
            },
            `container text-black pt-24 mr:auto sm:pt-14 relative z-5 sm:text-center text-${aligned} relative md:w-full sm:mx-auto sm:flex-col`,
          )}
        >
          <div className="flex flex-col max-w-2xl pt-12 mx-auto">
            <h1
              className={cn(' text-5xl font-bold leading-tight sm:pr-0', {
                'pr-20': aligned === 'left',
              })}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={cn('font-default text-xl leading-loose text-black mt-8 md:mt-4 sm:pr-0', {
                  'mx-auto': !aligned || aligned === 'center',
                  'ml-auto': aligned === 'right',
                  'mr-auto sm:mx-auto pr-20': aligned === 'left',
                })}
              >
                {subtitle}
              </p>
            )}

            {ctas && (
              <div
                className={cn('flex sm:flex-col mt-14 sm:mt-8 whitespace-no-wrap sm:w-100', {
                  '-mx-40 sm:mx-0': ctas && ctas.length > 2,
                  'mx-auto justify-center sm:mx-auto': aligned === 'center',
                  'ml-auto': aligned === 'right',
                  'mr-auto sm:mx-auto': aligned === 'left',
                })}
              >
                {ctas.map((action, i) => (
                  <CallToAction
                    key={i}
                    className={cn('sm:w-full sm:mx-auto sm:mt-10', {
                      'ml-4': i > 0,
                    })}
                    {...action}
                  />
                ))}
              </div>
            )}

            {list && (
              <div className="pt-20">
                <h2>{list.title}</h2>
                <div className={cn('flex flex-col sm:flex-col mt-8 sm:mt-8  sm:w-100', {})}>
                  {list?.items?.map((item, i) => (
                    <div className="flex flex-row mb-10 sm:mx-10" key={i}>
                      <Icon icon="arrow-right" size="lg" style={{ color: 'blue2' }} />
                      <h3 className="ml-4">{item.summary}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {titleImage && (
            <div className="w-full pt-12 text-right sm:mt-8 sm:w-full">
              <Image src={titleImage} />
            </div>
          )}

          {heroTabs.length > 0 ? <Tabs tabs={heroTabs} className="pt-24" /> : null}

          {titleDemo && (
            <div className="w-full h-full max-w-lg pt-12 mt-2 bg-white rounded-lg shadow-lg md:w-full md:content-center -mb-96 sm:mb-32">
              <h2 className="py-12 text-4xl text-center">Request A Demo</h2>

              <HubSpotForm
                className="max-w-lg px-8 px-16 pb-5 bg-white md:content-center"
                portalId={titleDemo.portalId}
                formId={titleDemo.formId}
                style={{ top: 100 }}
              ></HubSpotForm>
            </div>
          )}
          {titleForm && (
            <div className="w-full h-full max-w-lg pt-12 mt-2 bg-white rounded-lg shadow-lg md:w-full md:content-center -mb-96 sm:mb-32">
              <h2 className="py-12 text-4xl text-center">Contact Stoplight</h2>

              <HubSpotForm
                className="max-w-lg px-8 px-16 pb-5 bg-white md:content-center"
                portalId={titleForm.portalId}
                formId={titleForm.formId}
                style={{ top: 100 }}
              ></HubSpotForm>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
