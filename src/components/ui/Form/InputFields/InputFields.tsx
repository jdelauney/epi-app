import { HTMLAttributes, forwardRef, ChangeEvent } from 'react';
import { InputDataFieldType } from './inputDataField.type';
import { InputField } from './InputField';


type InputFieldsProps = {
  fields: InputDataFieldType[];
  onInputChange: (e: ChangeEvent) => void;
  //onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  //onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>;

export const InputFields = forwardRef((props: InputFieldsProps, ref) => {
  const { fields, onInputChange } = props;

  return (
    <div className={'flex flex-col w-full gap-2'}>
      {fields.map((field: InputDataFieldType) => (
        <InputField ref={ref} key={field.name} inputDataField={field} onInputChange={onInputChange} />
      ))}
    </div>
  );
});
InputFields.displayName = 'InputFields';