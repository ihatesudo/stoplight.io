import cn from 'classnames';
import * as React from 'react';

export interface IInput {
  value: string;
  onChange(string): void;
  onEnter?: (e: any) => void;
  type?: string;
  placeholder?: string;
  style?: object;
  autoFocus?: boolean;
  centered?: boolean;
}

const style = { minWidth: '250px' };

export const Input: React.FunctionComponent<IInput> = ({
  type,
  placeholder,
  value,
  centered,
  onChange,
  autoFocus,
  onEnter,
}) => {
  const handleChange = React.useCallback(e => onChange(e.target.value), [onChange]);

  const handleEnter = React.useCallback(
    e => {
      if (!onEnter) return;

      if (e.key === 'Enter') {
        onEnter(e);
      }
    },
    [onEnter]
  );

  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [ref]);
  return (
    <input
      className={cn(
        'px-3 leading-loose rounded-lg appearance-none sm:w-full text-grey-darker focus:outline-none focus:shadow-outline',
        {
          'border shadow': centered,
          'rounded-r-none': !centered,
        }
      )}
      type={type}
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onKeyPress={handleEnter}
      style={style}
    />
  );
};
