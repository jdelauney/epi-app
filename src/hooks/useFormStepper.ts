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

export type GetStepsFunc<T> = (
  inputHandleChange: ChangeEventHandler,
  formDataValues: T,
  formDataErrors: ErrorsType
) => StepList;

export type useFormStepperResponse = {
  navigationActions: NavigationActionsInterface;
  currentStep: number;
  steps: StepList;
};

export function useFormStepper<T>({
  inputHandleChange,
  formDataValues,
  formDataErrors,
  getStepsFunc,
}: {
  inputHandleChange: ChangeEventHandler;
  formDataValues: T;
  formDataErrors: ErrorsType;
  getStepsFunc: GetStepsFunc<T>;
}): useFormStepperResponse {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [steps, setSteps] = useState<StepList>([]);
  const totalSteps = useRef<number>(0);

  useEffect(() => {
    const loadSteps = async (): Promise<StepList> => {
      return getStepsFunc(inputHandleChange, formDataValues, formDataErrors);
    };

    loadSteps().then(steps => {
      totalSteps.current = steps.length;
      setSteps([...steps]);
    });
  }, []);

  //

  const gotoPrev = (): void => {
    if (currentStep > 0) {
      setCurrentStep((prev: number) => prev - 1);
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
    return currentStep > 0;
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
}
