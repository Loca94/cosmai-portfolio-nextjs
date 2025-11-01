import { cn } from '@/lib/utils';

export default function ButtonSkeleton({
  className,
  asInput,
  children,
}: {
  className?: string;
  asInput?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        'group inline-flex h-9 w-full items-center gap-x-4 rounded-sm border border-slate-700 px-4 transition hover:cursor-pointer hover:border-slate-600',
        asInput ? 'justify-start' : 'justify-center',
        className,
      )}
    >
      {children}
    </button>
  );
}
