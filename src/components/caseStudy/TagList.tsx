import clsx from 'clsx';

export function TagList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  );
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={clsx(
        'inline-flex items-center rounded-full border border-slate-200 bg-slate-200 px-2 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-slate-300',
        className,
      )}
    >
      {children}
    </li>
  );
}
