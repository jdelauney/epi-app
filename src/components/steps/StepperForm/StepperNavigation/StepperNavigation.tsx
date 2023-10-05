import { NavigationActionsInterface } from '../../../../hooks/useFormStepper';
import { Button } from '../../Button/Button';

type StepperNavigationProps = {
  navigationActions: NavigationActionsInterface;
  onNext?: () => void;
  onPrev?: () => void;
  onComplete?: () => void;
};

export const StepperNavigation = ({ navigationActions, onPrev, onNext, onComplete }: StepperNavigationProps) => {
  const { hasPrev, hasNext, isLast, gotoPrev, gotoNext } = navigationActions;

  const handlePrevClick = () => {
    console.log('prev click');
    gotoPrev();
    if (onPrev) {
      onPrev();
    }
  };

  const handleNextClick = () => {
    console.log('next click');
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
  return (
    <footer className={'flex justify-between p-3'}>
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
