import cn from 'classnames';
import * as React from 'react';

export interface ISimpleCardTag {
  tag: string;
  className?: string;
  color?: string;
}

export const SimpleCardTag: React.FunctionComponent<ISimpleCardTag> = ({ className, tag, color }) => {
  return (
    <div
      className={cn(
        className,
        `flex items-center px-4 py-1 text-sm text-${color} font-semibold uppercase border rounded-full border-${color}-lighter bg-${color}-lightest`
      )}
    >
      {tag}
    </div>
  );
};
