import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';

import { Steps } from '../steps/Steps';
import { z } from 'zod';
import { extractZodErrorToMessage } from '../../utils/zod';
import { getSteps } from './steps.config';
import { ErrorsType, UserProfileFormContext, UserProfileFormContextType } from '../../contexts/userProfileForm.context';
import { StepList } from '../steps/steps.type';

const userProfileSchema = z.object({
  email: z.string({ required_error: 'un email est obligatoire' }).email({ message: 'Adresse email invalide' }),
  password: z
    .string({ required_error: 'mot de passe obligatoire' })
    .min(8, { message: 'Mot de passe trop court. Minimum 8 caractères' }),
  firstName: z.string(),
  lastName: z.string(),
});

export type UserProfilDataType = z.infer<typeof userProfileSchema>;

const INITIAL_USER_PROFILE_FORMDATA: UserProfilDataType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const INITIAL_USER_PROFILE_FORMDATA_ERRORS: ErrorsType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

export const UserProfileSteps = () => {
  console.log('UseProfileSteps');
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<StepList>([]);
  const [formData, setFormData] = useState<UserProfilDataType>(INITIAL_USER_PROFILE_FORMDATA);
  const [formDataErrors, setFormDataErrors] = useState<ErrorsType>(INITIAL_USER_PROFILE_FORMDATA_ERRORS);

  const totalSteps = useRef<number>(0);

  const handleInputChange = (e: ChangeEvent): void => {
    console.log('handleInputChange');
    const { name, value } = (e as ChangeEvent<HTMLFormElement>).target;
    console.log('name == ', name);
    console.log('Value == ', value);
    console.log('formData == ', formData);
    const newData = { ...formData, [name]: value };
    console.log('newData == ', newData);
    setFormData(prev => {
      return {
        ...prev,
        ...newData,
      };
    });
    userProfileSchema
      .parseAsync(newData)
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

  // const { navigationActions, currentStep, steps, formData, setFormData } = useFormStepper<UserProfilDataType>({
  //   inputHandleChange: handleInputChange,
  //   initialFormDataValues: initialUserProfileFormData,
  //   formDataErrors: errors,
  //   getStepsFunc: getSteps as GetStepsFunc<UserProfilDataType>,
  // });

  useEffect(() => {
    const loadSteps = async (): Promise<StepList> => {
      return getSteps(handleInputChange, formData, formDataErrors);
    };

    loadSteps().then(steps => {
      totalSteps.current = steps.length;
      setSteps([...steps]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userProfileFormContextValue: UserProfileFormContextType = useMemo(() => {
    return {
      formData,
      setFormData,
      formDataErrors,
      setFormDataErrors,
      steps,
      currentStep,
      setCurrentStep,
      totalSteps: totalSteps.current,
    };
  }, [formData, setFormData, formDataErrors, setFormDataErrors, steps, currentStep, setCurrentStep]);

  return (
    <UserProfileFormContext.Provider value={userProfileFormContextValue}>
      <Steps steps={steps} currentStep={currentStep} navigationActions={navigationActions} onSubmit={handleSubmit} />
    </UserProfileFormContext.Provider>
  );
};
