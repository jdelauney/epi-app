import { ChangeEvent, forwardRef, HTMLAttributes } from 'react';
import { StepperNavigation } from './StepperNavigation/StepperNavigation';
import { useUserProfileFormContext } from '../../../hooks/useUserProfileFormContext';
import { Step } from './Step/Step';
import { InputDataFieldType } from '../../ui/Form/InputFields/inputDataField.type';

type FormProps = {
  className?: string;
  /*steps: StepList;
  currentStep: number;
  navigationActions: NavigationActionsInterface;*/
  onInputChange: (e: ChangeEvent) => void;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
} & HTMLAttributes<HTMLFormElement>;

export const StepperForm = forwardRef(({ className, onInputChange, onSubmit, ...restOfProps }: FormProps, ref) => {
  const { steps, currentStep, formData, formDataErrors } = useUserProfileFormContext();

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

  const updateInputValues = (formConfig: InputDataFieldType[]): InputDataFieldType[] => {
    const result: InputDataFieldType[] = formConfig.map((input: InputDataFieldType) => {
      return { ...input, value: formData[input.name], messageError: formDataErrors[input.name] };
    });
    return result;
  };
  return (
    <form
      className={`flex flex-col justify-between grow ${className && className}`}
      onSubmit={handleSubmit}
      {...restOfProps}
    >
      {/* {currentStepElementRef.current} */}
      {steps!.map((step, index) => {
        return (
          <div key={'step-' + step.id} className={currentStep === index ? 'block' : 'hidden'}>
            {step.formConfig ? (
              <Step fields={updateInputValues(step.formConfig)} onInputChange={onInputChange} />
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
