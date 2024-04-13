import clsx from 'clsx';

export function TagList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-2')}>
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
        'inline-flex items-center rounded-full bg-slate-200 px-2 py-1 text-sm font-medium text-slate-600',
        className,
      )}
    >
      {children}
    </li>
  );
}
