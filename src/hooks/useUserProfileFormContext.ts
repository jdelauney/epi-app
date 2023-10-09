import { useContext, useMemo } from 'react';
import { UserProfileFormContext } from '../contexts/userProfileForm.context';

export interface NavigationActionsInterface {
  hasPrev: () => boolean;
  hasNext: () => boolean;
  isFirst: () => boolean;
  isLast: () => boolean;
  gotoNext: () => void;
  gotoPrev: () => void;
}

export const useUserProfileFormContext = () => {
  const context = useContext(UserProfileFormContext);
  if (!context || context === undefined) {
    throw new Error('useUserProfileFormContext must be used within a UserProfileFormProvider');
  }

  const { steps, currentStep, setCurrentStep, setFormData, formData, formDataErrors, setFormDataErrors, totalSteps } =
    context;

  const navigationActions: NavigationActionsInterface = useMemo(() => {
    const gotoPrev = (): void => {
      if (currentStep > 0) {
        setCurrentStep((prev: number) => prev - 1);
      }
    };

    const gotoNext = (): void => {
      setCurrentStep((prev: number) => prev + 1);
    };

    const isFirst = (): boolean => {
      return currentStep === 0;
    };

    const isLast = (): boolean => {
      return currentStep === totalSteps - 1;
    };

    const hasPrev = (): boolean => {
      return currentStep > 0;
    };

    const hasNext = (): boolean => {
      return currentStep < totalSteps - 1;
    };
    return {
      hasPrev: hasPrev,
      hasNext: hasNext,
      isFirst: isFirst,
      isLast: isLast,
      gotoNext: gotoNext,
      gotoPrev: gotoPrev,
    };
  }, [currentStep, setCurrentStep, totalSteps]);

  return {
    formData: formData,
    setFormData: setFormData,
    formDataErrors: formDataErrors,
    setFormDataErrors: setFormDataErrors,
    steps: steps,
    currentStep: currentStep,
    totalSteps: totalSteps,
    navigationActions: navigationActions,
  };
};
