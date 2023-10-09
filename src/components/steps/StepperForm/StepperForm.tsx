import { ChangeEvent, forwardRef, HTMLAttributes } from 'react';
import { StepperNavigation } from './StepperNavigation/StepperNavigation';
import { useUserProfileFormContext } from '../../../hooks/useUserProfileFormContext';
import { Step } from './Step/Step';

type FormProps = {
  className?: string;
  /*steps: StepList;
  currentStep: number;
  navigationActions: NavigationActionsInterface;*/
  onInputChange: (e: ChangeEvent) => void;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
} & HTMLAttributes<HTMLFormElement>;

export const StepperForm = forwardRef(({ className, onInputChange, onSubmit, ...restOfProps }: FormProps, ref) => {
  const { steps, currentStep } = useUserProfileFormContext();
  console.log('StepperForm');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  /* useEffect(() => {
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
    }, [currentStep, steps]);*/

  return (
    <form className={className} onSubmit={handleSubmit} {...restOfProps}>
      {/* {currentStepElementRef.current} */}
      {steps.map((step, index) => {
        return (
          <div key={'step-' + step.id} className={currentStep === index ? 'block' : 'hidden'}>
            {step.formConfig ? (
              <Step fields={step.formConfig} onInputChange={onInputChange} />
            ) : step.element ? (
              step.element
            ) : null}
          </div>
        );
      })}
      <StepperNavigation />
    </form>
  );
});
StepperForm.displayName = 'StepperForm';
