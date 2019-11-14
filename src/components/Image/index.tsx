import * as React from 'react';

export interface IImage {
  src: string;
  alt?: string;
  className?: string;
  title?: string;
  size?: 'sm' | 'lg';
  style?: any;
  background?: boolean;
  useDiv?: boolean;
}

export const Image: React.FunctionComponent<IImage> = ({
  className,
  title,
  src,
  alt,
  style,
  size,
  background,
  useDiv,
}) => {
  if (background || useDiv) {
    style = {
      backgroundImage: src ? `url(${src})` : 'none',
      ...style,
    };

    if (!useDiv) {
      // Hide the actual src image so the background image is displayed
      style.objectPosition = '-99999px 99999px';
    }
  }

  if (useDiv) {
    return <div className={className} title={title} style={style} />;
  }

  return <img className={className} title={title} src={src} alt={alt || src} style={style} />;
};
