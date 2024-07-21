import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

type BadgeVariants = 'default' | 'active' | 'disabled' | 'darker' | 'orange';
type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const badgeVariants = cva(
  'inline-flex w-fit items-center rounded-full px-2.5 py-1 text-base font-medium transition-colors ease-in-out duration-500',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-slate-400',
        active: 'bg-slate-900 text-slate-200',
        disabled: 'bg-slate-900 text-slate-700',
        darker: 'bg-slate-950 text-slate-200',
        orange: 'bg-orange-accent text-slate-950',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
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
  className,
  variant = 'default',
  size = 'md',
  children,
}: {
  children: React.ReactNode;
  variant?: BadgeVariants;
  size?: SizeVariants;
  className?: string;
}) {
  return (
    <li>
      <Badge className={className} variant={variant} size={size}>
        {children}
      </Badge>
    </li>
  );
}

function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
}: {
  className?: string;
  variant?: BadgeVariants;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}

export { Badge, BadgeList, BadgeListItem };
