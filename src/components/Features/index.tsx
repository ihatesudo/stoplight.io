import cn from 'classnames';
import * as React from 'react';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';

export interface IFeatures {
  features: IFeature[];
  className?: string;
}

export interface IFeature {
  name: string;
  icon: IconName;
  iconStyle: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
  summary: string;
  href?: string;
}

export const Features: React.FunctionComponent<IFeatures> = ({ features, className }) => {
  return (
    <div className={cn(className, 'flex justify-around flex-wrap')}>
      {features.map((feature, index) => {
        return <Feature {...feature} key={index} />;
      })}
    </div>
  );
};

export const Feature: React.FunctionComponent<IFeature> = ({ name, summary, icon, href, iconStyle }) => {
  return (
    <div className="w-80 text-center px-5 mt-14 sm:pt-14">
      <Icon icon={['fad', icon]} size="3x" style={iconStyle} />
      <div className="font-bold text-xl mt-5">{name}</div>
      <div className="text-grey-dark font-medium my-2 leading-loose">{summary}</div>

      {href && (
        <div className="items-center">
          <Link className="font-semibold" to={href}>
            Learn More
            <Icon className="pl-2" size="lg" icon={['fad', 'arrow-right']} />
          </Link>
        </div>
      )}
    </div>
  );
};
