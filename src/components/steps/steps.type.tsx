import { ReactNode } from 'react';

export type StepItem = {
  title: string;
  content: ReactNode;
};

export type StepList = StepItem[] | null;
