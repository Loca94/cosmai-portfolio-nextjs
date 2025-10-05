import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface HTMLParagraphElementProp
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}

interface HTMLHeadingElementProp
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { inverted?: boolean }
>(({ inverted = false, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border text-slate-200 shadow-sm',
      inverted
        ? 'border-slate-400 bg-slate-950'
        : 'border-transparent bg-slate-900',
      className,
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-4', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  HTMLHeadingElementProp
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h3';

  return (
    <Comp
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-snug tracking-tight',
        className,
      )}
      {...props}
    />
  );
});
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  HTMLParagraphElementProp
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp
      ref={ref}
      className={cn('text-sm text-slate-400', className)}
      {...props}
    />
  );
});
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-4 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-4 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
