import { HTMLProps } from 'react';
import clsx from 'clsx';

export const Container = ({ children, className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
};
