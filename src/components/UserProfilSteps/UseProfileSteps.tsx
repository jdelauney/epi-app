import { ChangeEvent, FormEvent, useState } from 'react';
import { useFormStepper } from '../../hooks/useFormStepper';
import { Steps } from '../steps/Steps';
import { z } from 'zod';
import { extractZodErrorToMessage } from '../../utils/zod';

const userProfileSchema = z.object({
  email: z.string({ required_error: 'un email est obligatoire' }).email({ message: 'Adresse email invalide' }),
  password: z
    .string({ required_error: 'mot de passe obligatoire' })
    .min(8, { message: 'Mot de passe trop court. Minimum 8 caractères' }),
  firstName: z.string(),
  lastName: z.string(),
});

export type UserProfilDataType = z.infer<typeof userProfileSchema>;

export const UseProfileSteps = () => {
  const initialUserProfileFormData: UserProfilDataType = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit', formData);
  };

  const [formData, setFormData] = useState<UserProfilDataType>(initialUserProfileFormData);
  const [errors, setErrors] = useState<Record<string, string>>({ email: '', password: '', repeatPassword: '' });

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = (e as ChangeEvent<HTMLFormElement>).target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);

    // Validate the field
    registerSchema
      .parseAsync(newData)
      .then(() =>
        setErrors(prev => {
          return { ...prev, [name]: '' };
        })
      )
      .catch(error => {
        const newErrors = {
          ...errors,
          email: extractZodErrorToMessage(error, 'email'),
          password: extractZodErrorToMessage(error, 'password'),
          repeatPassword: extractZodErrorToMessage(error, 'repeatPassword'),
        };
        setErrors(newErrors);
        //{ ...errors, [name]: extractZodErrorToMessage(error, name) }
      });
  };

  const { navigationActions, currentStep, steps } = useFormStepper<UserProfilDataType>(
    handleInputChange,
    formData,
    errors
  );

  return (
    <Steps steps={steps} currentStep={currentStep} navigationActions={navigationActions} onSubmit={handleSubmit} />
  );
};
