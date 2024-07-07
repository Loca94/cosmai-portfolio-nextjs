import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from '@/components/Icons';
import Link from 'next/link';

export default function StickyProjectNavigator({
  projectUrl,
  prevUrl,
  nextUrl,
}: {
  projectUrl: string;
  prevUrl: string;
  nextUrl: string;
}) {
  return (
    <div className="sticky top-0 z-50 sm:top-4 sm:-mb-[4.5rem] sm:mt-4">
      <div className="flex w-full justify-center">
        <div className="relative w-full border-b-2 border-slate-900 bg-slate-950 sm:w-fit sm:rounded sm:border-2">
          <div className="flex justify-center text-sm text-slate-400">
            <Link
              href={prevUrl}
              className="flex items-center px-4 py-3 font-semibold transition-colors hover:bg-slate-900 focus:bg-slate-900"
            >
              <ChevronLeftIcon className="mr-1.5 h-4 w-4" />
              Prev
            </Link>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 font-semibold transition-colors hover:bg-slate-900 focus:bg-slate-900"
            >
              <ExternalLinkIcon className="mr-1.5 h-4 w-4" />
              View website
            </a>
            <Link
              href={nextUrl}
              className="flex items-center px-4 py-3 font-semibold transition-colors hover:bg-slate-900 focus:bg-slate-900"
            >
              Next
              <ChevronRightIcon className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
