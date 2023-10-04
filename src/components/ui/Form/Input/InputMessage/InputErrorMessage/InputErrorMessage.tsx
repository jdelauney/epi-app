import { InputMessage } from '../InputMessage.tsx';

type InputErrorMessageProps = {
  message: string;
};

export const InputErrorMessage = ({ message }: InputErrorMessageProps) => {
  return <InputMessage message={message} className={'text-[0.6em] font-bold text-red-500'} />;
};