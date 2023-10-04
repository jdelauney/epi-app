import { ChangeEvent, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { InputDataFieldType } from './InputFields/inputDataField.type';
import { InputFields } from './InputFields/InputFields';

type FormProps = PropsWithChildren<{
  className?: string;  
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}> &
  HTMLAttributes<HTMLFormElement>;

export const Form = forwardRef(
  ({ className, onSubmit, children, ...restOfProps }: FormProps, ref) => {
    return (
      <form className={className} onSubmit={onSubmit} {...restOfProps}>        
        {children}
      </form>
    );
  }
);
Form.displayName = 'Form';