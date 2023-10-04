import { ChangeEvent, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { InputDataFieldType } from './InputFields/inputDataField.type';
import { InputFields } from './InputFields/InputFields';

type FormProps = PropsWithChildren<{
  className?: string;
  fields: InputDataFieldType[];
  onInputChange: (e: ChangeEvent) => void;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}> &
  HTMLAttributes<HTMLFormElement>;

export const DynamicForm = forwardRef(
  ({ className, fields, onSubmit, onInputChange, children, ...restOfProps }: FormProps, ref) => {
    return (
      <form className={className} onSubmit={onSubmit} {...restOfProps}>
        <InputFields fields={fields} onInputChange={onInputChange} ref={ref} />
        <>{children}</>
      </form>
    );
  }
);
DynamicForm.displayName = 'DynamicForm';
