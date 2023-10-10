import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { InputErrorMessage } from '../Input/InputMessage/InputErrorMessage/InputErrorMessage.tsx';
import { InputHelpMessage } from '../Input/InputMessage/InputHelpMessage/InputHelpMessage.tsx';

type FormGroupProps = PropsWithChildren<{
  className?: string;
  label?: string;
  inputName?: string;
  inputElement: ReactNode;
  inputHelpMessage?: string;
  inputErrorMessage?: string;
}> &
  HTMLAttributes<HTMLDivElement>;
export const FormGroup = ({
  className,
  label,
  inputName,
  inputElement,
  inputHelpMessage,
  inputErrorMessage,
  children,
  ...restOfProps
}: FormGroupProps) => {
  return (
    <div
      className={`flex flex-col items-start md:flex-row md:flex-wrap md:items-center my-3 px-7 ${className ?? ''}`}
      {...restOfProps}
    >
      {label && (
        <label htmlFor={inputName} className={'mb-0  font-bold leading-normal sm:w-1/3 md:text-right'}>
          {label}
        </label>
      )}
      <div className={'w-full md:w-2/3 my-2  flex flex-col'}>
        {inputElement}
        {inputErrorMessage ? <InputErrorMessage message={inputErrorMessage} /> : null}
        {inputHelpMessage ? <InputHelpMessage message={inputHelpMessage} /> : null}
      </div>
      {children}
    </div>
  );
};
