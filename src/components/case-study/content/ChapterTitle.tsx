import { CheckIcon } from '@/components/Icons';

export default function ChapterTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-6 flex items-center text-2xl font-medium tracking-tight text-slate-200">
      <CheckIcon className="mr-2 h-8 w-8" />
      {children}
    </h2>
  );
}
