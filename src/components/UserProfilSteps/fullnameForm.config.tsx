import { InputDataFieldType } from '../ui/Form/InputFields/inputDataField.type';

type InputValuesType = { [key: string]: string | number | boolean };
type InputErrorsType = { [key: string]: string };

export const getFullnameFormConfig = (values: InputValuesType, errors: InputErrorsType): InputDataFieldType[] => {
  return [
    {
      id: 'userprofile-firstname',
      name: 'firstName',
      type: 'text',
      label: 'Prénom',
      placeholder: 'Entrez votre prénom',
      value: values['firstName'],
      hasRef: false,
      customOptions: {
        required: true,
      },
      messageError: errors['firstName'],
    },
    {
      id: 'userprofile-lastname',
      name: 'lastName',
      type: 'text',
      label: 'Nom',
      placeholder: 'Entrez votre nom de famille',
      value: values['lastName'],
      hasRef: false,
      customOptions: {
        required: true,
      },
      messageError: errors['lastName'],
    },
  ];
};
