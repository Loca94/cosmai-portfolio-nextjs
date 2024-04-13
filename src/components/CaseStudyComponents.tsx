import Container from '@/components/Container';
import { CheckIcon, PackageIcon } from '@/components/Icons';
import StickyProjectNavigator from '@/components/StickyProjectNavigator';
import { TagList, TagListItem } from '@/components/TagList';
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './animations/FadeIn';
import { cn } from '@/lib/utils';

export function CaseStudyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StickyProjectNavigator />
      <Container className="py-28">{children}</Container>
    </>
  );
}

export function PageIntro({
  title,
  tools,
}: {
  title: string;
  tools: string[];
}) {
  return (
    <FadeIn className="flex flex-col max-lg:space-y-6 lg:flex-row lg:justify-between">
      <h1 className="text-4xl font-bold text-slate-600 lg:w-3/5">
        <Balancer>{title}</Balancer>
      </h1>
      <aside className="flex flex-col items-end justify-center lg:w-2/5">
        <h2 className="mb-2 flex items-center text-xl font-semibold text-slate-600">
          <PackageIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">Toolbox</span>
        </h2>
        <TagList>
          {tools.map((tool) => (
            <TagListItem key={tool}>{tool}</TagListItem>
          ))}
        </TagList>
      </aside>
    </FadeIn>
  );
}

export function MobileOverlappingImages({ className }: { className?: string }) {
  return (
    <FadeInStagger>
      <div className={cn('flex flex-col items-center', className)}>
        <FadeIn className="w-full">
          <div className="h-52 w-full max-w-sm rotate-[4deg] rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
            <div className="h-full w-full rounded border-2 border-slate-600">
              {/* Image Here */}
            </div>
          </div>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="-mt-20 h-52 w-full max-w-sm -rotate-[4deg] rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
            <div className="h-full w-full rounded border-2 border-slate-600">
              {/* Image Here */}
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeInStagger>
  );
}

export function DesktopBentoGrid({ className }: { className?: string }) {
  return (
    <div className={className}>
      <FadeInStagger faster>
        <div className="grid auto-rows-[270px] grid-cols-3 gap-4 lg:auto-rows-[330px]">
          <FadeIn className="col-span-2 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100">
            {/* Image Here  */}
          </FadeIn>
          <FadeIn className="col-span-1 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
            <div className="h-full w-full rounded border-2 border-slate-600">
              {/* Image Here */}
            </div>
          </FadeIn>

          <FadeIn className="col-span-1 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
            <div className="h-full w-full rounded border-2 border-slate-600">
              {/* Image Here */}
            </div>
          </FadeIn>
          <FadeIn className="col-span-2 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100">
            {/* Image Here */}
          </FadeIn>
        </div>
      </FadeInStagger>
    </div>
  );
}

export function Chapter({ children }: { children: React.ReactNode }) {
  return (
    <FadeIn>
      <section className="mt-15 space-y-12 text-slate-600">{children}</section>
    </FadeIn>
  );
}

export function ChapterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex text-[32px] font-bold leading-9">
      <CheckIcon className="mr-2 h-8 w-8" />
      {children}
    </h2>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-prose">{children}</div>;
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-lg leading-relaxed">{children}</p>;
}
