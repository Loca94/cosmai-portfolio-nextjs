import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-1 text-base font-medium',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-slate-400',
        darker: 'bg-slate-950 text-slate-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function BadgeList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul role="list" className={cn('flex flex-wrap gap-2', className)}>
      {children}
    </ul>
  );
}

function BadgeListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li>
      <Badge className={className}>{children}</Badge>
    </li>
  );
}

function Badge({
  className,
  variant = 'default',
  children,
}: {
  className?: string;
  variant?: 'default' | 'darker';
  children: React.ReactNode;
}) {
  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      {children}
    </span>
  );
}

export { Badge, BadgeList, BadgeListItem };
