import { InputText } from '../../Input/InputText/InputText';
import { InputDataFieldType } from '../inputDataField.type';
import { ChangeEvent, ForwardedRef } from 'react';

export const InputTextProvider = (
  dataField: Omit<InputDataFieldType, 'label'>,
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  ref: ForwardedRef<unknown>
) => {
  const { value, hasRef, customOptions, isUncontrolled, ...restOfAttributes } = dataField;
  let valueProp;
  if (isUncontrolled && onInputChange === undefined) {
    valueProp = { defaultValue: value as string };
  } else {
    valueProp = { value: value as string };
  }
  return (
    <InputText
      {...restOfAttributes}
      {...customOptions}
      {...valueProp}
      //value={value as string}
      ref={hasRef ? ref : undefined}
      onChange={onInputChange}
    />
  );
};
