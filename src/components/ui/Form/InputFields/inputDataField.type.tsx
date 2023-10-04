import { ReactNode } from 'react';

export type InputDataFieldType = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  value: string | number | boolean;
  Icon?: ReactNode;
  customOptions?: { [key: string]: string | number | boolean };
  hasRef?: boolean;
  isUncontrolled?: boolean;
  messageHelp?: string;
  messageError?: string;
};