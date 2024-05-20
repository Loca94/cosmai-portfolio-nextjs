import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary';
}

function Skeleton({ className, color = 'secondary', ...props }: Props) {
  console.log('Skeleton color', color);
  const backgroundColor = {
    primary: 'bg-slate-50/40',
    secondary: 'bg-slate-50/20',
  };
  return (
    <div
      className={cn(
        'animate-pulse rounded-md',
        className,
        backgroundColor[color],
      )}
      {...props}
    />
  );
}

export { Skeleton };
