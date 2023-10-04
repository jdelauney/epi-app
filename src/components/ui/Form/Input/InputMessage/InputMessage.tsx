type InputMessageProps = {
  message: string;
  className?: string;
};
export const InputMessage = ({ message, className }: InputMessageProps) => {
  return <div className={className}>{message ? message : <>&nbsp;</>}</div>;
};