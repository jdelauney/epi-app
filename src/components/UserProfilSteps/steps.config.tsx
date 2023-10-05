import { ChangeEventHandler } from 'react';
import { StepList } from '../steps/steps.type';
import { InputDataFieldType } from '../ui/Form/InputFields/inputDataField.type';
import { ErrorsType } from '../../hooks/useFormStepper';
import { UserProfilDataType } from './UseProfileSteps';
import { getRegisterFormConfig } from './registerForm.config';
import { Step } from '../steps/StepperForm/Step/Step';

export const getSteps = (
  inputHandleChange: ChangeEventHandler,
  formDataValues: UserProfilDataType,
  formDataErrors: ErrorsType
): StepList => {
  const stepOneFormDataFields: InputDataFieldType[] = getRegisterFormConfig(formDataValues, formDataErrors);

  return [
    {
      title: "Bienvenue au cours d'introduction",
      content: <Step fields={stepOneFormDataFields} onInputChange={inputHandleChange} />,
    },
    {
      title: "Bienvenue au cours d'introduction",
      content: <Step fields={stepOneFormDataFields} onInputChange={inputHandleChange} />,
    },
    {
      title: "Bienvenue au cours d'introduction",
      content: <Step fields={stepOneFormDataFields} onInputChange={inputHandleChange} />,
    },
    {
      title: "Bienvenue au cours d'introduction",
      content: <Step fields={stepOneFormDataFields} onInputChange={inputHandleChange} />,
    },
    {
      title: "Bienvenue au cours d'introduction",
      content: <Step fields={stepOneFormDataFields} onInputChange={inputHandleChange} />,
    },
  ];
};
