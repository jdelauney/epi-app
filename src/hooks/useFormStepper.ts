import { ReactNode, useState } from 'react';
import { StepperContextType } from '../contexts/StepperContext';
import { StepList } from '../components/steps/steps.type';

export const useFormStepper = (dataSteps: StepList) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [steps] = useState<StepList>(dataSteps);

  //const stepperContext = useContext(StepContext);

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
    return currentStep === steps.length - 1;
  };

  const hasPrev = (): boolean => {
    return currentStep > 0;
  };

  const hasNext = (): boolean => {
    return currentStep < steps.length - 1;
  };

  const getCurrentStep = (): ReactNode => {
    return steps[currentStep].content;
  };

  const initialStepperContextValue: StepperContextType = {
    currentStep: currentStep,
    setCurrentStep: setCurrentStep,
    isFirst: isFirst,
    isLast: isLast,
    hasPrev: hasPrev,
    hasNext: hasNext,
    gotoNext: gotoNext,
    gotoPrev: gotoPrev,
    getCurrentStep: getCurrentStep,
  };

  return [initialStepperContextValue];
};
