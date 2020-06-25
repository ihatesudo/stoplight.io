import * as React from 'react';

import { Button, IButton } from '../Button';
import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';
import { ISubmit, Submit } from '../Submit';
import { VideoPlayerModal } from '../VideoPlayerModal';

export interface ICallToAction extends Omit<IButton, 'href' | 'type' | 'download'> {
  type?: 'link' | 'video' | 'submit' | 'arrow-link';
  submit?: ISubmit;
  href?: string;
  icon?: IconProp;
}

export const CallToAction: React.FunctionComponent<ICallToAction> = ({ type, href = '/', submit, ...rest }) => {
  if (!rest.title) {
    return null;
  }
  const cta = <Button href={href} {...rest} />;

  let ctaComponent = cta;
  if (submit) {
    ctaComponent = <Submit {...submit} />;
  } else if (type === 'video') {
    ctaComponent = (
      <VideoPlayerModal href={href}>{({ onClick }) => <Button onClick={onClick} {...rest} />}</VideoPlayerModal>
    );
  } else if (type === 'link') {
    ctaComponent = <Link to={href}>{rest.title}</Link>;
  } else if (type === 'arrow-link') {
    ctaComponent = (
      <Link
        to={href}
        className="inline-flex items-center justify-center font-semibold cursor-pointer select-none text-blue2 md:pt-4 md:pl-1"
      >
        {rest.title}
        <Icon icon="arrow-right" {...rest.icon} className="ml-3" />
      </Link>
    );
  }

  return ctaComponent;
};
