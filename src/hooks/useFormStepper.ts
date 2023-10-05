import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { StepList } from '../components/steps/steps.type';

export interface NavigationActionsInterface {
  hasPrev: () => boolean;
  hasNext: () => boolean;
  isFirst: () => boolean;
  isLast: () => boolean;
  gotoNext: () => void;
  gotoPrev: () => void;
}

export type ErrorsType = Record<string, string>;

export type GetStepsFunc = (
  inputHandleChange: ChangeEventHandler,
  formDataValues: unknown,
  formDataErrors: ErrorsType
) => StepList;

export type useFormStepperResponse = {
  navigationActions: NavigationActionsInterface;
  currentStep: number;
  steps: StepList;
};

export const useFormStepper = <T>(
  inputHandleChange: ChangeEventHandler,
  formDataValues: T,
  formDataErrors: ErrorsType,
  getStepsFunc: GetStepsFunc
): useFormStepperResponse => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [steps, setSteps] = useState<StepList>(null);
  const totalSteps = useRef<number>(0);

  useEffect(() => {
    const loadedSteps = getStepsFunc(inputHandleChange, formDataValues, formDataErrors);
    setSteps(loadedSteps);
  }, [getStepsFunc, inputHandleChange, formDataValues, formDataErrors]);

  const gotoPrev = (): void => {
    if (currentStep > 0) {
      setCurrentStep((prev: number) => prev + 1);
    }
  };

  const gotoNext = (): void => {
    setCurrentStep((prev: number) => prev + 1);
  };

  const isFirst = (): boolean => {
    return currentStep === 0;
  };

  const isLast = (): boolean => {
    return currentStep === totalSteps.current - 1;
  };

  const hasPrev = (): boolean => {
    return currentStep.current > 0;
  };

  const hasNext = (): boolean => {
    return currentStep < totalSteps.current - 1;
  };

  const navigationActions: NavigationActionsInterface = {
    hasPrev: hasPrev,
    hasNext: hasNext,
    isFirst: isFirst,
    isLast: isLast,
    gotoNext: gotoNext,
    gotoPrev: gotoPrev,
  };

  return {
    navigationActions: navigationActions,
    currentStep: currentStep,
    steps,
  };
};
