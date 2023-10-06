import { ChangeEventHandler } from 'react';
import { StepList } from '../steps/steps.type';
import { InputDataFieldType } from '../ui/Form/InputFields/inputDataField.type';
import { ErrorsType } from '../../hooks/useFormStepper';
import { UserProfilDataType } from './UseProfileSteps';
import { Step } from '../steps/StepperForm/Step/Step';
import { getRegisterFormConfig } from './registerForm.config';
import { getFullnameFormConfig } from './fullnameForm.config';

export const getSteps = (
  inputHandleChange: ChangeEventHandler,
  formDataValues: UserProfilDataType,
  formDataErrors: ErrorsType
): StepList => {
  const stepOneRegisterFormDataFields: InputDataFieldType[] = getRegisterFormConfig(formDataValues, formDataErrors);
  const stepTwoFullnameFormDataFields: InputDataFieldType[] = getFullnameFormConfig(formDataValues, formDataErrors);
  return [
    {
      title: 'Enregistrement',
      content: <Step fields={stepOneRegisterFormDataFields} onInputChange={inputHandleChange} />,
    },
    {
      title: 'Qui êtes-vous ?',
      content: <Step fields={stepTwoFullnameFormDataFields} onInputChange={inputHandleChange} />,
    },
  ];
};
