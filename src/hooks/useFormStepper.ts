import { useState } from 'react';

export interface NavigationActionsInterface {
  hasPrev: () => boolean;
  hasNext: () => boolean;
  isFirst: () => boolean;
  isLast: () => boolean;
  gotoNext: () => void;
  gotoPrev: () => void;
}
export const useFormStepper = <T>(data: T, totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<T>(data);

  const gotoPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev: number) => prev + 1);
    }
  };

  const gotoNext = () => {
    setCurrentStep((prev: number) => prev + 1);
  };

  const isFirst = () => {
    return currentStep === 0;
  };

  const isLast = () => {
    return currentStep === totalSteps - 1;
  };

  const hasPrev = (): boolean => {
    return currentStep > 0;
  };

  const hasNext = (): boolean => {
    return currentStep < totalSteps - 1;
  };

  const navigationActions: NavigationActionsInterface = {
    hasPrev,
    hasNext,
    isFirst,
    isLast,
    gotoNext,
    gotoPrev,
  };

  return {
    navigationActions: navigationActions,
    currentStep: currentStep,
    formData: formData,
    setFormData: setFormData,
  };
};
