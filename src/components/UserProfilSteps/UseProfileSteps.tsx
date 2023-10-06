import { ChangeEvent, FormEvent, useState } from 'react';
import { GetStepsFunc, useFormStepper } from '../../hooks/useFormStepper';
import { Steps } from '../steps/Steps';
import { z } from 'zod';
import { extractZodErrorToMessage } from '../../utils/zod';
import { getSteps } from './steps.config';

const userProfileSchema = z.object({
  email: z.string({ required_error: 'un email est obligatoire' }).email({ message: 'Adresse email invalide' }),
  password: z
    .string({ required_error: 'mot de passe obligatoire' })
    .min(8, { message: 'Mot de passe trop court. Minimum 8 caractères' }),
  firstName: z.string(),
  lastName: z.string(),
});

export type UserProfilDataType = z.infer<typeof userProfileSchema>;

const initialUserProfileFormData: UserProfilDataType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

export const UseProfileSteps = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit', formData);
  };

  const [formData, setFormData] = useState<UserProfilDataType>(initialUserProfileFormData);
  const [errors, setErrors] = useState<Record<string, string>>(initialUserProfileFormData);

  const handleInputChange = (e: ChangeEvent) => {
    console.log('handleInputChange');
    const { name, value } = (e as ChangeEvent<HTMLFormElement>).target;
    console.log('name == ', name);
    console.log('Value == ', value);

    const newData = { ...formData, [name]: value };
    console.log('newData == ', newData);
    setFormData(prev => {
      return {
        ...prev,
        ...newData,
      };
    });

    //setFormData(newData);

    // Validate the field
    userProfileSchema
      .parseAsync(newData)
      .then(() =>
        setErrors(prev => {
          return { ...prev, [name]: '' };
        })
      )
      .catch(error => {
        const newErrors = {
          ...errors,
          [name]: extractZodErrorToMessage(error, name),
        };
        setErrors(newErrors);
        //
      });
  };

  const { navigationActions, currentStep, steps } = useFormStepper<UserProfilDataType>({
    inputHandleChange: handleInputChange,
    formDataValues: { ...formData },
    formDataErrors: errors,
    getStepsFunc: getSteps as GetStepsFunc,
  });

  return (
    <Steps steps={steps} currentStep={currentStep} navigationActions={navigationActions} onSubmit={handleSubmit} />
  );
};
