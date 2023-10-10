import { useState, useEffect, ChangeEvent } from 'react';
import { useUserProfileFormContext } from '../../hooks/useUserProfileFormContext';
import { ProgressBar } from '../ui/ProgressBar/ProgressBar';
import { StepperForm } from './StepperForm/StepperForm';

type StepsProps = {
  /*steps: StepList;
  currentStep: number;
  navigationActions: NavigationActionsInterface; */
  onInputChange: (e: ChangeEvent) => void;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
};
export const Steps = ({ onInputChange, onSubmit }: StepsProps) => {
  const [stepTitle, setStepTitle] = useState('');
  const { steps, currentStep } = useUserProfileFormContext();

  useEffect(() => {
    const getCurrentStep = async (): Promise<string> => {
      // Suppose loadSteps is your asynchronous function that loads the data

      return steps?.[currentStep]?.title ?? '';
    };

    getCurrentStep().then(title => {
      setStepTitle(title);
    });
  }, [currentStep, steps]);

  return (
    <section className={'flex flex-col gap-3'}>
      <ProgressBar />
      <h2 className={'text-3xl md:text-5xl font-serif text-center mt-5'}>{stepTitle}</h2>
      <StepperForm onInputChange={onInputChange} onSubmit={onSubmit} />
    </section>
  );
};
