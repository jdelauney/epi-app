import { InputMessage } from '../InputMessage.tsx';

type InputHelpMessageProps = {
  message: string;
};
export const InputHelpMessage = ({ message }: InputHelpMessageProps) => {
  return <InputMessage message={message} className={'text-[0.6em] italic text-slate-500'} />;
};