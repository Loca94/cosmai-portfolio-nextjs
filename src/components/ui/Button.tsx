import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default: 'shadow bg-slate-50 text-slate-900 hover:bg-slate-50/90',
        destructive: 'shadow-sm bg-red-900 text-slate-50 hover:bg-red-900/90',
        outline:
          'border shadow-sm border-slate-700 bg-slate-950 hover:bg-slate-800 hover:text-slate-50 hover:border-slate-600',
        outlineInverse:
          'border shadow-sm border-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-800',
        secondary: 'shadow-sm bg-slate-800 text-slate-50 hover:bg-slate-800/80',
        ghost: 'hover:bg-slate-800 hover:text-slate-50',
        ghostInverse: 'hover:text-slate-800',
        link: 'text-slate-50',
        empty: 'text-slate-400 hover:text-slate-200',
        richTextEditor:
          '!rounded-none hover:text-slate-50 hover:bg-slate-800 w-full h-full !p-0',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
