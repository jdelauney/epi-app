import { InputDataFieldType } from '../inputDataField.type.ts';
import { ChangeEvent, ForwardedRef } from 'react';
import { Textarea } from '../../Input/Textarea/Textarea.tsx';

export const TextareaProvider = (
  dataField: InputDataFieldType,
  onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  ref: ForwardedRef<unknown>
) => {
  const { value, hasRef, customOptions, ...restOfAttributes } = dataField;
  return (
    <Textarea
      {...restOfAttributes}
      {...customOptions}
      value={value as string}
      ref={hasRef ? ref : undefined}
      onChange={onInputChange}
    />
  );
};