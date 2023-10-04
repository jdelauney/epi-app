import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  className?: string;
  isLink?: boolean;
  to?: string;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ className, children, isLink, to, ...restOfProps }: ButtonProps) => {
  const buttonClasses = `flex justify-center items-center select-none border border-monza-200 rounded-md text-normal pt-2 pb-3 px-3 no-underline bg-monza-600 text-white hover:bg-monza-500 ${className}`;
  if (isLink) {
    return (
      <a href={to!} className={buttonClasses}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={buttonClasses} {...restOfProps}>
        {children}
      </button>
    );
  }
};
