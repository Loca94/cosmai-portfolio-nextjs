import {
  CopyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  SideBarIcon,
  ShareIcon,
} from '@/components/Icons';

export default function SafariBrowserHeaderSkeleton() {
  return (
    <div className="flex h-8 w-full items-center justify-between space-x-6 border-b-2 border-slate-700 px-2 text-slate-500">
      <div className="flex space-x-3">
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-slate-200"></div>
          <div className="h-2 w-2 rounded-full bg-slate-400"></div>
          <div className="h-2 w-2 rounded-full bg-slate-700"></div>
        </div>
        <div className="flex items-center">
          <SideBarIcon className="size-4" />
          <span className="mx-1">|</span>
          <ChevronRightIcon className="size-2 rotate-90" strokeWidth="3" />
        </div>
        <div className="flex items-center">
          <ChevronLeftIcon className="size-4" />
          <ChevronRightIcon className="size-4" />
        </div>
      </div>
      {/* Search Bar */}
      <div className="h-4 max-w-[60%] flex-1 rounded-lg border border-slate-700"></div>
      <div className="flex items-center space-x-1">
        <ShareIcon className="size-4" />
        <PlusIcon className="size-4" />
        {/* TODO: Technically this is not the right icon to use, I have to change it! */}
        <CopyIcon className="size-4" />
      </div>
    </div>
  );
}
