import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import '@dronten/components-css/button/index.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={clsx('dronten-button', className)} {...restProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
