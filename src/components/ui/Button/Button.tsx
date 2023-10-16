import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = PropsWithChildren<{
  disabled?: boolean;
}> &
  VariantProps<typeof variants> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  intent,
  fill,
  disabled,
  ...props
}: ButtonProps): ReactNode => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={variants({ intent, fill, disabled })}
      {...props}
    >
      {children}
    </button>
  );
};

const variants = cva(
  'rounded-md px-4 py-2 text-sm font-medium transition-all',
  {
    variants: {
      intent: {
        primary: [
          'bg-blue-500 text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
        ],
        secondary: [
          'bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        ],
      },
      fill: {
        true: 'w-full',
      },
      disabled: {
        true: 'pointer-events-none',
      },
    },
    compoundVariants: [
      {
        disabled: true,
        intent: 'primary',
        class: 'bg-slate-300 text-slate-400 dark:text-slate-500',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      disabled: false,
    },
  },
);
