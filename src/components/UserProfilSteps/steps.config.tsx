import { ChangeEvent } from 'react';
import { StepList } from '../steps/steps.type';
import { InputDataFieldType } from '../ui/Form/InputFields/inputDataField.type';
import { ErrorsType } from '../../hooks/useUserProfileFormContext';
import { UserProfilDataType } from './UserProfileSteps';
import { Step } from '../steps/StepperForm/Step/Step';
import { getRegisterFormConfig } from './registerForm.config';
import { getFullnameFormConfig } from './fullnameForm.config';

export const getSteps = (
  inputHandleChange: (e: ChangeEvent) => void,
  formDataValues: UserProfilDataType,
  formDataErrors: ErrorsType
): StepList => {
  const stepOneRegisterFormDataFields: InputDataFieldType[] = getRegisterFormConfig(formDataValues, formDataErrors);
  const stepTwoFullnameFormDataFields: InputDataFieldType[] = getFullnameFormConfig(formDataValues, formDataErrors);
  return [
    {
      id: 'register',
      title: 'Enregistrement',
      content: <Step fields={stepOneRegisterFormDataFields} onInputChange={inputHandleChange} />,
    },
    {
      id: 'fullname',
      title: 'Qui êtes-vous ?',
      content: <Step fields={stepTwoFullnameFormDataFields} onInputChange={inputHandleChange} />,
    },
  ];
};
