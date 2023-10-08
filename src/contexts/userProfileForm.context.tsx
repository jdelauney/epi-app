import { ChangeEvent, Dispatch, SetStateAction, createContext, useContext, useMemo } from 'react';
import { StepList } from '../components/steps/steps.type';
import { UserProfilDataType } from '../components/UserProfilSteps/UserProfileSteps';

export type ErrorsType = Record<string, string>;

export type UserProfileFormContextType = {
  formData: UserProfilDataType;
  setFormData: Dispatch<SetStateAction<UserProfilDataType>>;
  formDataErrors: ErrorsType;
  setFormDataErrors: Dispatch<SetStateAction<ErrorsType>>;
  steps: StepList;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  totalSteps: number;
};

export const UserProfileFormContext = createContext<UserProfileFormContextType | null>(null);
