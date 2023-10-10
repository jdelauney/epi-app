import { NavigationActionsInterface, useUserProfileFormContext } from '../../../../hooks/useUserProfileFormContext';
import { Button } from '../../../ui/Button/Button';

type StepperNavigationProps = {
  // navigationActions: NavigationActionsInterface;
  onNext?: () => void;
  onPrev?: () => void;
  onComplete?: () => void;
};

export const StepperNavigation = ({ onPrev, onNext, onComplete }: StepperNavigationProps) => {
  const { navigationActions } = useUserProfileFormContext();
  const { hasPrev, hasNext, isLast, gotoPrev, gotoNext } = navigationActions;

  const handlePrevClick = () => {
    gotoPrev();
    if (onPrev) {
      onPrev();
    }
  };

  const handleNextClick = () => {
    gotoNext();
    if (onNext) {
      onNext();
    }
  };

  const handleCompleteClick = () => {
    console.log('complete click');
    if (onComplete) {
      onComplete();
    }
  };

  const footerStyle: string = `flex p-6 border-t border-gray-200 ${
    hasPrev() || isLast() ? 'justify-between' : 'justify-end'
  }`;

  return (
    <footer className={footerStyle}>
      {hasPrev() && <Button onClick={handlePrevClick}>Retour</Button>}
      {hasNext() && <Button onClick={handleNextClick}>Suivant</Button>}
      {isLast() && (
        <Button type={'submit'} onClick={handleCompleteClick}>
          Valider
        </Button>
      )}
    </footer>
  );
};
