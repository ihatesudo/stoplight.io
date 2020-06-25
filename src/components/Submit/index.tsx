import cn from 'classnames';
import * as React from 'react';
import { useSiteData } from 'react-static';

import { Button, IButton } from 'src/components/Button';
import { IInput, Input } from 'src/components/Input';
import { useSubmitEmailForm } from 'src/hooks/useSubmitEmailForm';

export interface ISubmit {
  button: IButton;
  input: IInput;
  formId: string;
  className?: string;
  centered?: boolean;
}

export const Submit: React.FunctionComponent<ISubmit> = ({ button, className, input, formId, centered }) => {
  const { integrations } = useSiteData();

  let defaultValue = '';

  if (typeof window !== 'undefined') {
    defaultValue = window.localStorage.getItem('email') || '';
  }

  const [value, setValue] = React.useState(defaultValue);
  const [loading, response, submitForm] = useSubmitEmailForm(integrations.hubspot, formId);

  const handleSubmit = React.useCallback(
    e => {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }

      submitForm([{ name: 'email', value }]);
      window.localStorage.setItem('email', value);
    },
    [submitForm, value]
  );

  if (!formId || !integrations.hubspot) return null;

  return (
    <div
      className={cn(className, '', {
        'flex flex-col items-center max-w-2xl sm:max-w-full sm:flex-col sm:justify-center sm:items-between':
          centered === true,
      })}
    >
      {response.success ? (
        <div
          className="successMessage"
          dangerouslySetInnerHTML={{
            __html: response.success,
          }}
        />
      ) : (
        <div
          className={cn('flex ', {
            'flex-row border-2 border-blue2 rounded-xl sm:border-0': !centered,
            'flex flex-col items-center max-w-2xl sm:max-w-full sm:flex-col sm:justify-center sm:items-between sm:flex-wrap sm:justify-center sm:py-4': centered,
          })}
        >
          <Input {...input} value={value} onChange={setValue} onEnter={handleSubmit} />

          <div
            className={cn({
              'flex justify-center flex-1 pt-4 text-lg font-bold sm:justify-center sm:items-between sm:flex-wrap sm:py-2 sm:w-full sm:px-0': centered,
            })}
          >
            <Button
              className={cn({ 'rounded-r-md rounded-l-none': !centered }, 'w-full')}
              onClick={handleSubmit}
              {...button}
              title={button.title}
              loading={loading}
            />
          </div>
        </div>
      )}
      {response.error && (
        <div
          className="flex w-3/5 mt-3 whitespace-normal sm:w-2/3 text-red"
          dangerouslySetInnerHTML={{
            __html: response.error,
          }}
        />
      )}
    </div>
  );
};
