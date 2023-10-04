import { InputDataFieldType } from './inputDataField.type.ts';
import { ChangeEvent, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { InputTextProvider } from './providers/InputTextProvider.tsx';
import { TextareaProvider } from './providers/TextareaProvider.tsx';
import { FormGroup } from '../FormGroup/FormGroup.tsx';

type InputFieldProps = PropsWithChildren<{
  inputDataField: InputDataFieldType;
  onInputChange: (e: ChangeEvent) => void;
}>;
export const InputField = forwardRef(({ inputDataField, onInputChange, children }: InputFieldProps, ref) => {
  const { type, label, name } = inputDataField;
  const { messageHelp, messageError, ...dataField } = inputDataField;
  let inputElement: ReactNode;
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'url':
    case 'tel':
    case 'number':
    case 'date':
    case 'time':
    case 'datetime':
    case 'color':
      inputElement = InputTextProvider(dataField, onInputChange, ref);
      break;
    case 'textarea':
      inputElement = TextareaProvider(dataField, onInputChange, ref);
      break;
    default:
      throw new Error('InputField: type is not valid');
  }

  return (
    <>
      <FormGroup
        inputElement={inputElement}
        label={label}
        inputName={name}
        inputErrorMessage={messageError}
        inputHelpMessage={messageHelp}
      >
        {children}
      </FormGroup>
    </>
  );
});
InputField.displayName = 'InputField';