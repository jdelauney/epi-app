import { Button } from '../../Button/Button';

type StepperNavigationProps = {
  onNext?: () => void;
  onPrev?: () => void;
  onComplete?: () => void;
};

export const StepperNavigation = ({ onPrev, onNext, onComplete }: StepperNavigationProps) => {
  const handlePrevClick = () => {
    console.log('prev click');
    gotoPrev();
    if (onPrev) {
      onPrev();
    }
  };

  const handleNextClick = () => {
    console.log('next click');
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
      <Button onClick={handlePrevClick}>Retour</Button>
      <Button onClick={handleNextClick}>Suivant</Button>
      <Button type={'submit'} onClick={handleCompleteClick}>
        Valider
      </Button>
    </footer>
  );
};
