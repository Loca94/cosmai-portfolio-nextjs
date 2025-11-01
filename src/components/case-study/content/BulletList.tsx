import { cn } from '@/lib/utils';

function BulletList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <ul className={cn('list-inside list-disc', className)}>{children}</ul>;
}

function BulletListItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <li className={cn('mb-2 text-slate-400', className)}>{children}</li>;
}

export { BulletList, BulletListItem };
