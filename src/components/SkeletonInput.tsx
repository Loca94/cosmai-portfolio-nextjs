import { SearchIcon } from '@/components/Icons';
import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';

export default function SkeletonInput({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        'group inline-flex h-9 w-full items-center gap-x-4 rounded border border-slate-700 px-4 transition hover:cursor-pointer hover:border-slate-600',
        className,
      )}
    >
      <SearchIcon className="h-6 w-6 text-slate-700 transition group-hover:text-slate-600" />
      <Skeleton className="h-4 w-1/4" />
    </button>
  );
}
