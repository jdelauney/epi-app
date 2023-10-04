import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';

export type StepperContextType = {
  hasPrev: () => boolean;
  hasNext: () => boolean;
  isFirst: () => boolean;
  isLast: () => boolean;
  gotoPrev: () => void;
  gotoNext: () => void;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  getCurrentStep: () => ReactNode;
};

export const StepperContext = createContext<StepperContextType>({
  currentStep: 0,
  setCurrentStep: () => {},
  hasPrev: () => {
    return false;
  },
  hasNext: () => {
    return false;
  },
  isFirst: () => {
    return false;
  },
  isLast: () => {
    return false;
  },
  gotoPrev: () => {},
  gotoNext: () => {},
  getCurrentStep: () => {
    return null;
  },
});
