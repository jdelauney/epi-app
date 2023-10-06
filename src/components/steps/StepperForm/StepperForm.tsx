import { ChangeEvent, forwardRef, HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { StepperNavigation } from './StepperNavigation/StepperNavigation';
import { StepList } from '../../steps/steps.type';
import { NavigationActionsInterface } from '../../../hooks/useFormStepper';

type FormProps = {
  className?: string;
  steps: StepList;
  currentStep: number;
  navigationActions: NavigationActionsInterface;
  //onInputChange: (e: ChangeEvent) => void;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
} & HTMLAttributes<HTMLFormElement>;

export const StepperForm = forwardRef(
  ({ className, steps, currentStep, navigationActions, onSubmit, ...restOfProps }: FormProps, ref) => {
    const currentStepElementRef = useRef<ReactNode>(null);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(e);
    };

    useEffect(() => {
      const getCurrentStep = async (): Promise<ReactNode> => {
        // Suppose loadSteps is your asynchronous function that loads the data

        if (steps && steps[currentStep]) {
          return steps[currentStep].content;
        } else {
          return null;
        }
      };

      getCurrentStep().then(content => {
        currentStepElementRef.current = content;
      });
    }, [currentStep, steps]);

    return (
      <form className={className} onSubmit={handleSubmit} {...restOfProps}>
        {currentStepElementRef.current}
        <StepperNavigation navigationActions={navigationActions} />
      </form>
    );
  }
);
StepperForm.displayName = 'StepperForm';
