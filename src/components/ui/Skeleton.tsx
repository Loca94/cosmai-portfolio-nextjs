import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary';
}

function Skeleton({ className, color = 'secondary', ...props }: Props) {
  const backgroundColor = {
    primary: 'bg-slate-200',
    secondary: 'bg-slate-700',
  };

  return (
    <div
      className={cn(
        'h-2.5 rounded-md transition-colors',
        className,
        backgroundColor[color],
      )}
      {...props}
    />
  );
}

export { Skeleton };
