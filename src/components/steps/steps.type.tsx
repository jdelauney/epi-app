import { ReactNode } from 'react';
import { InputDataFieldType } from '../ui/Form/InputFields/inputDataField.type';

export type StepItem = {
  id: string;
  title: string;
  element?: ReactNode;
  formConfig?: InputDataFieldType[]
};

export type StepList = StepItem[];
