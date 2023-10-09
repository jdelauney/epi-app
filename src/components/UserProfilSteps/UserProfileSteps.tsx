import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';

import { Steps } from '../steps/Steps';
import { extractZodErrorToMessage } from '../../utils/zod';
import { getSteps } from './steps.config';
import {
  ErrorsType,
  UserProfilDataType,
  UserProfileFormContext,
  UserProfileFormContextType,
  userProfileSchema,
} from '../../contexts/userProfileForm.context';
import { StepList } from '../steps/steps.type';

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
  const [formData, setFormData] = useState<UserProfilDataType>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [formDataErrors, setFormDataErrors] = useState<ErrorsType>(INITIAL_USER_PROFILE_FORMDATA_ERRORS);
  const [steps, setSteps] = useState<StepList | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const totalSteps = useRef<number>(0);

  const handleInputChange = (e: ChangeEvent): void => {
    console.log('handleInputChange');
    const { name, value } = (e as ChangeEvent<HTMLFormElement>).currentTarget;
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
    /*setFormData(prev => ({
      ...prev,
      [name]: value,
    }));*/
    setFormData(newData);

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

  useEffect(() => {
    const loadSteps = async (): Promise<StepList> => {
      //setFormData(INITIAL_USER_PROFILE_FORMDATA);
      //setFormDataErrors(INITIAL_USER_PROFILE_FORMDATA_ERRORS);
      return getSteps(formData!, formDataErrors!);
    };

    if (!isReady) {
      loadSteps().then(steps => {
        console.log('Steps ===> ', steps);
        totalSteps.current = steps.length;
        setSteps([...steps]);
        setIsReady(true);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <UserProfileFormContext.Provider value={userProfileFormContextValue}>
      {steps && <Steps onInputChange={handleInputChange} onSubmit={handleSubmit} />}
    </UserProfileFormContext.Provider>
  );
};
