import cn from 'classnames';
import * as React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { IImage, Image } from '../Image';
import { VideoPlayerModal } from '../VideoPlayerModal';
import { VideoPlayer } from '../VideoPlayer';

export interface IHeroImage extends IImage {
  className?: string;
  video?: string;
  shadow?: boolean;
}

export const HeroImage: React.FunctionComponent<IHeroImage> = ({ className, video, src, alt, shadow = true }) => {
  if (!src) {
    return null;
  }
  return (
    <Container className={className}>
      <div
        className={cn('relative text-center -mb-1 rounded-t-lg overflow-hidden', { 'shadow-lg-intense': shadow })}
        style={{ borderBottom: 'none' }}
      >
        {video&&(<VideoPlayer href={video} playing={true} />)}
        {/* {
          <VideoPlayerModal href="https://www.youtube.com/watch?v=iHzFoc4ls8E">
            {({ onClick }) => (
              <div className="absolute pin flex items-center justify-center cursor-pointer" onClick={onClick}>
                <Icon icon="play-circle" size="5x" />
              </div>
            )}
          </VideoPlayerModal>
        } */}

        {/* <Image className={'rounded-t-lg bg-cover bg-position-top absolute pin'} src={src} alt={alt} useDiv size="lg" /> */}
      </div>
    </Container>
  );
};
