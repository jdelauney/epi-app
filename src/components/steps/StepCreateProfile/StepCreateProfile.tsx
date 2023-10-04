import { Form } from "../../ui/Form/Form"

import { getRegisterFormConfig } from './registerForm.config.ts';

import { ChangeEvent, FormEvent, useState } from 'react';
import { z } from 'zod';

import { Button } from "../../ui/Button/Button";
import { InputDataFieldType } from "../../ui/Form/InputFields/inputDataField.type";
import { extractZodErrorToMessage } from "../../../utils/zod";

const registerSchema = z
  .object({
    email: z.string({ required_error: 'un email est obligatoire' }).email({ message: 'Adresse email invalide' }),
    password: z
      .string({ required_error: 'mot de passe obligatoire' })
      .min(8, { message: 'Mot de passe trop court. Minimum 8 caractères' }),
    repeatPassword: z
      .string({ required_error: 'mot de passe obligatoire' })
      .min(8, { message: 'Mot de passe trop court. Minimum 8 caractères' }),
  })
  .refine(({ password, repeatPassword }) => password === repeatPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['repeatPassword'],
  });

type RegisterFormDataType = z.infer<typeof registerSchema>;
export const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormDataType>({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [errors, setErrors] = useState({ email: '', password: '', repeatPassword: '' });
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit', formData);
  };

  const registerFormConfig: InputDataFieldType[] = getRegisterFormConfig(formData, errors);

  return (
    <Form
      fields={registerFormConfig}
      onSubmit={handleSubmit}
      onInputChange={handleInputChange}
      className={'w-full mt-10 pt-10 border-t border-gray-200'}
    >
      <footer className={'w-full flex justify-center mt-4'}>
        <Button type={'submit'} className={'w-1/2'}>
          Inscription
        </Button>
      </footer>
    </Form>
  );
};
