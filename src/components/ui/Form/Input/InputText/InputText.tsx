import { ChangeEvent, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export type InputTextProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;
export const InputText = forwardRef(
  ({ type, name, className, placeholder, onChange, label, ...restOfProps }: InputTextProps, ref) => {
    console.log('Rest of props : ', restOfProps);
    return (
      <>
        <input
          className={`block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded ${className} focus:outline-none focus:border-blue-300`}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref ? (ref as ForwardedRef<HTMLInputElement>) : undefined}
          {...restOfProps}
        />
      </>
    );
  }
);
InputText.displayName = 'InputText';
