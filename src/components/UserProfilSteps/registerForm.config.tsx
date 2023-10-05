import { InputDataFieldType } from '../ui/Form/InputFields/inputDataField.type';

type InputValuesType = { [key: string]: string | number | boolean };
type InputErrorsType = { [key: string]: string };

export const getRegisterFormConfig = (values: InputValuesType, errors: InputErrorsType): InputDataFieldType[] => {
  return [
    {
      id: 'register-email',
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Entrez votre email',
      value: values['email'],
      hasRef: false,
      customOptions: {
        required: true,
      },
      messageHelp: 'Un email de validation vous sera envoyé',
      messageError: errors['email'],
    },
    {
      id: 'register-password',
      name: 'password',
      type: 'password',
      label: 'Mot de passe',
      placeholder: 'Entrez votre mot de passe',
      value: values['password'],
      hasRef: false,
      customOptions: {
        required: true,
        minLength: 6,
      },
      messageError: errors['password'],
    },
  ];
};
