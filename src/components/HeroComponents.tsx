'use client';

import SkeletonProfileDropdown from '@/components/SkeletonProfileDropdown';
import SkeletonInput from '@/components/SkeletonInput';
import { SkeletonMenuBar } from '@/components/SkeletonMenuBar';
import { SkeletonSelect } from '@/components/SkeletonSelect';
import { SkeletonTabs } from '@/components/SkeletonTabs';
import RichTextEditor from '@/components/ui/RichTextEditor';

export default function HeroComponents({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-rows-[auto_auto_auto] gap-4 md:grid-cols-2 md:grid-rows-[auto_auto]">
        <div className="row flex w-full space-x-2">
          <SkeletonInput />
          <SkeletonProfileDropdown />
        </div>
        <div className="flex w-full space-x-2">
          <SkeletonMenuBar />
          <SkeletonSelect />
        </div>
        <div>
          <SkeletonTabs />
        </div>
        <div className="hidden md:block">
          <RichTextEditor />
        </div>
      </div>
    </div>
  );
}
