import { InputDataFieldType } from '../inputDataField.type';
import { ChangeEvent, ForwardedRef } from 'react';
import { Textarea } from '../../Input/Textarea/Textarea';

export const TextareaProvider = (
  dataField: Omit<InputDataFieldType, 'label' | 'messageError' | 'messageHelp'>,
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
