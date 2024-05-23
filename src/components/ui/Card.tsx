import * as React from 'react';
import { DynamicElement } from '@/components/DynamicElement';

import { cn } from '@/lib/utils';

interface HTMLParagraphElementProp
  extends React.HTMLAttributes<HTMLParagraphElement> {
  tag?: React.ElementType;
}

interface HTMLHeadingElementProp
  extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: React.ElementType;
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-xl bg-slate-900 text-slate-200 shadow', className)}
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
>(({ className, tag = 'h3', ...props }, ref) => (
  <DynamicElement
    tag={tag}
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-snug tracking-tight',
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  HTMLParagraphElementProp
>(({ className, tag = 'p', ...props }, ref) => (
  <DynamicElement
    tag={tag}
    ref={ref}
    className={cn('text-sm text-slate-400', className)}
    {...props}
  />
));
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
