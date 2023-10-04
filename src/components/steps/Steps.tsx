import { ProgressBar } from '../ui/ProgressBar/ProgessBar';
import { StepList } from './steps.type';

type StepsProps = {
  steps: StepList;
  currentStep: number;
};
export const Steps = ({ steps, currentStep }: StepsProps) => {
  return (
    <section className={'flex flex-col gap-3'}>
      <ProgressBar totalSteps={steps.length} currentStep={currentStep} />
      <h2 className={'text-3xl md:text-5xl font-serif text-center mt-5'}>{steps[currentStep].title}</h2>
      {steps[currentStep].content}
    </section>
  );
};
