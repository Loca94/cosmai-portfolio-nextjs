import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('relative px-4 sm:px-8 lg:px-12', className)} {...props}>
      <div className="mx-auto max-w-3xl lg:max-w-6xl">{children}</div>
    </div>
  );
}
