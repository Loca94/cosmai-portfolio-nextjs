import { cn } from '@/lib/utils';

function CustomOrderedList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <ol className={cn('list-none', className)}>{children}</ol>;
}

function CustomOrderedListItem({
  className,
  index,
  children,
}: {
  className?: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        'group hover:border-orange-accent flex border-b border-dashed border-slate-700 py-4 text-sm text-slate-400 transition duration-200 last:border-b-0 sm:text-base',
        className,
      )}
    >
      <span className="group-hover:bg-orange-accent mt-0.5 mr-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-slate-700 text-[0.625rem] font-bold text-slate-900 transition-colors duration-200">
        {index}
      </span>
      <span>{children}</span>
    </li>
  );
}

export { CustomOrderedList, CustomOrderedListItem };
