import { ChangeEvent, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { InputDataFieldType } from './InputFields/inputDataField.type';
import { InputFields } from './InputFields/InputFields';
import { StepList } from '../../steps/steps.type';

type FormProps = PropsWithChildren<{
  className?: string;
  steps: StepList;
  onInputChange: (e: ChangeEvent) => void;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}> &
  HTMLAttributes<HTMLFormElement>;

export const StepperForm = forwardRef(
  ({ className, steps,  onSubmit, onInputChange, children, ...restOfProps }: FormProps, ref) => {
    return (
      <form className={className} onSubmit={onSubmit} {...restOfProps}>            
        <>{children}</>
      </form>
    );
  }
);
DynamicForm.displayName = 'DynamicForm';
