import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from '@/components/Icons';

export default function StickyProjectNavigator() {
  return (
    <div className="sticky top-0 z-50 -mb-8 mt-2 sm:top-4 sm:-mb-[4.5rem] sm:mt-6">
      <div className="flex w-full justify-center">
        <div className="relative w-full border-2 border-slate-200 bg-slate-100 transition-colors hover:border-slate-300 sm:w-fit sm:rounded">
          <div className="flex divide-x-2 divide-slate-200 text-slate-600">
            <a
              href="/dentist-vierin"
              className="flex items-center px-4 py-3 font-bold transition-colors hover:bg-slate-200 focus:bg-slate-200"
            >
              <ChevronLeftIcon className="mr-1 h-5 w-5" />
              Prev
            </a>
            <a
              href="https://www.dibarro.com"
              className="flex items-center justify-center px-4 py-3 font-bold transition-colors hover:bg-slate-200 focus:bg-slate-200"
            >
              <ExternalLinkIcon className="mr-1.5 h-5 w-5" />
              View website
            </a>
            <a
              href="/dentist-vierin"
              className="flex items-center px-4 py-3 font-bold transition-colors hover:bg-slate-200 focus:bg-slate-200"
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
