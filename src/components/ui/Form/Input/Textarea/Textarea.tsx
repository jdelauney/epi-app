import { ChangeEvent, ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

type TextareaProps = {
  name: string;
  rows?: number;
  placeholder?: string;
  className?: string;
  spellCheck?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef(
  ({ name, rows = 5, placeholder, spellCheck = false, className, onChange, ...restOfProps }: TextareaProps, ref) => {
    return (
      <>
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          spellCheck={spellCheck}
          className={`block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded ${className}`}
          onChange={onChange}
          ref={ref ? (ref as ForwardedRef<HTMLTextAreaElement>) : undefined}
          {...restOfProps}
        ></textarea>
      </>
    );
  }
);
Textarea.displayName = 'Textarea';
