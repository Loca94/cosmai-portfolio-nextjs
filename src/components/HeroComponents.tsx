'use client';

import SkeletonProfileDropdown from '@/components/SkeletonProfileDropdown';
import SkeletonButton from '@/components/SkeletonButton';
import { SkeletonMenuBar } from '@/components/SkeletonMenuBar';
import { SkeletonSelect } from '@/components/SkeletonSelect';
import { SkeletonTabs } from '@/components/SkeletonTabs';
import RichTextEditor from '@/components/ui/RichTextEditor';
import { Skeleton } from '@/components/ui/Skeleton';
import { SearchIcon } from '@/components/Icons';

export default function HeroComponents({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-rows-[auto_auto_auto] gap-4 md:grid-cols-2 md:grid-rows-[auto_auto]">
        <div className="row flex w-full space-x-2">
          <SkeletonButton asInput>
            <SearchIcon className="h-4 w-4 text-slate-300 transition group-hover:text-slate-200" />
            <Skeleton className="w-1/4" />
          </SkeletonButton>
          <SkeletonProfileDropdown />
        </div>
        <div className="flex w-full space-x-2">
          <SkeletonMenuBar />
          <SkeletonSelect
            optionsWidth={['w-20', 'w-32', 'w-16', 'w-14', 'w-24']}
          />
        </div>
        <div>
          <SkeletonTabs />
        </div>
        <div className="hidden md:block">
          <RichTextEditor />
        </div>
      </div>

      <div className="mt-2 text-right text-sm text-slate-500">
        Made some Skeleton 💀 Components to try out
      </div>
    </div>
  );
}
