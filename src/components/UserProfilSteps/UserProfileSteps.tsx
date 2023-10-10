import { ChangeEvent, FormEvent } from 'react';

import { Steps } from '../steps/Steps';
import { extractZodErrorToMessage } from '../../utils/zod';
import { useUserProfileFormContext } from '../../hooks/useUserProfileFormContext';
import { userProfileSchema } from './userProfilesSteps.types';

export const UserProfileSteps = () => {
  const { formData, setFormData, steps, formDataErrors, setFormDataErrors } = useUserProfileFormContext();
  
  const handleInputChange = async (e: ChangeEvent): void => {
  
    const { name, value } = (e as ChangeEvent<HTMLFormElement>).target;
  
    const newData = { ...formData, [name]: value };

    /*await setFormData(prev => {
      return {
        ...prev,
        ...newData,
      };
    });*/
    /*setFormData(prev => ({
      ...prev,
      [name]: value,
    }));*/
    await setFormData(newData);
    
    userProfileSchema
      .parseAsync(formData)
      .then(() =>
        setFormDataErrors(prev => {
          return { ...prev, [name]: '' };
        })
      )
      .catch(error => {
        const newErrors = {
          ...formDataErrors,
          [name]: extractZodErrorToMessage(error, name),
        };
        setFormDataErrors(newErrors);
        //
      });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit', formData);
  };

  return <>{steps ? <Steps onInputChange={handleInputChange} onSubmit={handleSubmit} /> : null}</>;
};
