import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useRef, useState } from 'react';
import { StepList } from '../components/steps/steps.type';
import { UserProfilDataType, ErrorsType } from '../components/UserProfilSteps/userProfilesSteps.types';
import { getSteps } from '../components/UserProfilSteps/steps.config';

export type UserProfileFormContextType = {
  formData: UserProfilDataType;
  setFormData: Dispatch<SetStateAction<UserProfilDataType>>;
  formDataErrors: ErrorsType;
  setFormDataErrors: Dispatch<SetStateAction<ErrorsType>>;
  steps: StepList | null;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  totalSteps: number;
};

export const UserProfileFormContext = createContext<UserProfileFormContextType | null>(null);

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

export const UserProfilFormContextProvider = ({ children }: PropsWithChildren) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<UserProfilDataType>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [formDataErrors, setFormDataErrors] = useState<ErrorsType>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  //const stepsConfig = getSteps(formData, formDataErrors);
  const [steps, setSteps] = useState<StepList | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const totalSteps = useRef<number>(0);

  useEffect(() => {
    const loadSteps = async (): Promise<StepList> => {
      return getSteps({ ...formData }, { ...formDataErrors });
    };

    if (!isReady) {
      loadSteps().then(steps => {
        totalSteps.current = steps.length;
        setSteps([...steps]);
        setIsReady(true);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userProfileFormContextValue: UserProfileFormContextType = {
    formData: formData,
    setFormData: setFormData,
    formDataErrors: formDataErrors,
    setFormDataErrors: setFormDataErrors,
    steps: steps,
    currentStep: currentStep,
    setCurrentStep: setCurrentStep,
    totalSteps: totalSteps.current,
  };

  //[formData, setFormData, formDataErrors, setFormDataErrors, steps, currentStep, setCurrentStep]);
  return (
    <UserProfileFormContext.Provider value={userProfileFormContextValue}>{children}</UserProfileFormContext.Provider>
  );
};
