import { useState, useEffect, ChangeEvent } from 'react';
import { NavigationActionsInterface } from '../../hooks/useFormStepper';
import { ProgressBar } from '../ui/ProgressBar/ProgessBar';
import { StepList } from './steps.type';
import { StepperForm } from '../ui/StepperForm/StepperForm';

type StepsProps = {
  steps: StepList;
  currentStep: number;
  navigationActions: NavigationActionsInterface;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
};
export const Steps = ({ steps, currentStep, navigationActions, onSubmit }: StepsProps) => {
  const [stepTitle, setStepTitle] = useState('');

  useEffect(() => {
    setStepTitle(steps[currentStep].title);
  }, [currentStep, steps]);

  return (
    <section className={'flex flex-col gap-3'}>
      <ProgressBar totalSteps={steps.length} currentStep={currentStep} />
      <h2 className={'text-3xl md:text-5xl font-serif text-center mt-5'}>{stepTitle}</h2>
      <StepperForm steps={steps} currentStep={currentStep} navigationActions={navigationActions} onSubmit={onSubmit} />
    </section>
  );
};
