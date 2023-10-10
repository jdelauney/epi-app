import { ChangeEvent, FormEvent } from 'react';

import { Steps } from '../steps/Steps';
import { extractZodErrorToMessage } from '../../utils/zod';
import { useUserProfileFormContext } from '../../hooks/useUserProfileFormContext';
import { userProfileSchema } from './userProfilesSteps.types';
import { DynamicForm } from '../ui/Form/DynamicForm';

export const UserProfileSteps = () => {
  const { formData, setFormData, steps, formDataErrors, setFormDataErrors } = useUserProfileFormContext();
  console.log('UseProfileSteps ==> ', formData);
  const handleInputChange = async (e: ChangeEvent): void => {
    console.log('handleInputChange');
    const { name, value } = (e as ChangeEvent<HTMLFormElement>).target;
    console.log('name == ', name);
    console.log('Value == ', value);
    console.log('formData == ', formData);
    const newData = { ...formData, [name]: value };
    console.log('newData == ', newData);
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

    console.log('formData after change = ', formData);
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
  /*return (
    <>
      {steps ? (
        <DynamicForm fields={steps[0].formConfig!} onInputChange={handleInputChange} onSubmit={handleSubmit} />
      ) : null}
    </>
  );*/
};
