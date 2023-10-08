import { CSSProperties, useEffect, useState } from 'react';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};
export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    const computeProgressPercent = () => {
      return Math.floor(((currentStep + 1) * 100) / totalSteps);
    };

    const progression = computeProgressPercent();
    setProgressValue(progression);
  }, [currentStep, totalSteps]);

  return (
    <div className={'w-full bg-gray-700 h-6 border-4 border-gray-500'}>
      <div className={'bg-monza-600 h-4'} style={{ width: `${progressValue}%` } as CSSProperties}></div>
    </div>
  );
};
