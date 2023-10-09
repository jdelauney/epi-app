import { ChangeEvent } from 'react';
import { InputDataFieldType } from '../../../ui/Form/InputFields/inputDataField.type';
import { InputFields } from '../../../ui/Form/InputFields/InputFields';

type StepProps = {
  fields: InputDataFieldType[];
  onInputChange: (e: ChangeEvent) => void;
  //onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  //onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const Step = ({ fields, onInputChange }: StepProps) => {
  console.log('Step');
  return <InputFields fields={fields} onInputChange={onInputChange} />;
};
