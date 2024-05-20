'use client';

import SkeletonProfileDropdown from '@/components/SkeletonProfileDropdown';
import SkeletonInput from '@/components/ui/SkeletonInput';
import { SkeletonMenuBar } from '@/components/SkeletonMenuBar';

export default function HeroComponents({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 md:gap-4">
        <div className="flex w-full space-x-2">
          <SkeletonInput />
          <SkeletonProfileDropdown />
        </div>
        <div className="flex w-full space-x-2">
          <SkeletonMenuBar />
        </div>
      </div>
    </div>
  );
}
