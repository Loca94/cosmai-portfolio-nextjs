'use client';

import RichTextEditor from '@/components/ui/RichTextEditor';
import { Skeleton } from '@/components/ui/Skeleton';
import { SearchIcon } from '@/components/Icons';
import ButtonSkeleton from './ui/ButtonSkeleton';
import ProfileDropdownSkeleton from './ui/ProfileDropdownSkeleton';
import { MenuBarSkeleton } from './ui/MenuBarSkeleton';
import SelectSkeleton from './ui/SelectSkeleton';
import { TabsSkeleton } from './ui/TabsSkeleton';

export default function HeroComponents({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-rows-[auto_auto_auto] gap-4 md:grid-cols-2 md:grid-rows-[auto_auto]">
        <div className="row flex w-full space-x-2">
          <ButtonSkeleton asInput>
            <SearchIcon className="h-4 w-4 text-slate-200 transition group-hover:text-slate-200" />
            <Skeleton className="w-1/4" />
          </ButtonSkeleton>
          <ProfileDropdownSkeleton />
        </div>
        <div className="flex w-full space-x-2">
          <MenuBarSkeleton />
          <SelectSkeleton
            optionsWidth={['w-20', 'w-32', 'w-16', 'w-14', 'w-24']}
          />
        </div>
        <div>
          <TabsSkeleton />
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
