import { StepList } from '../steps/steps.type';
import { InputDataFieldType } from '../ui/Form/InputFields/inputDataField.type';
import { getRegisterFormConfig } from './registerForm.config';
import { getFullnameFormConfig } from './fullnameForm.config';
import { UserProfilDataType, ErrorsType } from './userProfilesSteps.types';

export const getSteps = (
  //inputHandleChange: (e: ChangeEvent) => void,
  formDataValues: UserProfilDataType,
  formDataErrors: ErrorsType
): StepList => {
  const stepOneRegisterFormDataFields: InputDataFieldType[] = getRegisterFormConfig(formDataValues, formDataErrors);
  const stepTwoFullnameFormDataFields: InputDataFieldType[] = getFullnameFormConfig(formDataValues, formDataErrors);
  return [
    {
      id: 'register',
      title: 'Enregistrement',
      formConfig: stepOneRegisterFormDataFields,
    },
    {
      id: 'fullname',
      title: 'Qui êtes-vous ?',
      formConfig: stepTwoFullnameFormDataFields,
    },
  ];
};
