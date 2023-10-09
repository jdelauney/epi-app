import { Dispatch, PropsWithChildren, SetStateAction, createContext } from 'react';
import { StepList } from '../components/steps/steps.type';
import { UserProfilDataType, ErrorsType } from '../components/UserProfilSteps/userProfilesSteps.types';

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

export const UserProfilFormContextProvider = ({children}: PropsWithChildren) => {
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


  const userProfileFormContextValue: UserProfileFormContextType = useMemo(() => {
    return {
      formData: formData,
      setFormData: setFormData,
      formDataErrors: formDataErrors,
      setFormDataErrors: setFormDataErrors,
      steps: steps,
      currentStep: currentStep,
      setCurrentStep: setCurrentStep,
      totalSteps: totalSteps.current,
    };
  }, [formData, setFormData, formDataErrors, setFormDataErrors, steps, currentStep, setCurrentStep]);


  return (
<UserProfileFormContext.Provider value={userProfileFormContextValue}>
  )

}
