import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from '@/components/Icons';

export default function StickyProjectNavigator() {
  return (
    <div className="sticky top-0 z-50 sm:top-4 sm:-mb-[4.5rem] sm:mt-4">
      <div className="flex w-full justify-center">
        <div className="relative w-full border-2 border-slate-700 bg-slate-950 sm:w-fit sm:rounded">
          <div className="flex justify-center divide-x-2 divide-slate-700 text-slate-400">
            <a
              href="/dentist-vierin"
              className="flex items-center px-4 py-3 font-bold transition-colors hover:bg-slate-900 focus:bg-slate-900"
            >
              <ChevronLeftIcon className="mr-1 h-5 w-5" />
              Prev
            </a>
            <a
              href="https://www.dibarro.com"
              className="flex items-center justify-center px-4 py-3 font-bold transition-colors hover:bg-slate-900 focus:bg-slate-900"
            >
              <ExternalLinkIcon className="mr-1.5 h-5 w-5" />
              View website
            </a>
            <a
              href="/dentist-vierin"
              className="flex items-center px-4 py-3 font-bold transition-colors hover:bg-slate-900 focus:bg-slate-900"
            >
              Next
              <ChevronRightIcon className="ml-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
