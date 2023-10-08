import { ReactNode } from 'react';

export type StepItem = {
  id: string;
  title: string;
  content: ReactNode;
};

export type StepList = StepItem[];
