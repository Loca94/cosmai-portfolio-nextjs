import Container from '@/components/Container';
import { PackageIcon } from '@/components/Icons';
import StickyProjectNavigator from '@/components/caseStudy/StickyProjectNavigator';
import { TagList, TagListItem } from '@/components/caseStudy/TagList';
import Balancer from 'react-wrap-balancer';

export default function WineryWebsite() {
  return (
    <>
      <StickyProjectNavigator />
      <Container className="min-h-screen pt-28">
        <PageIntro
          title={`Designing a Storybrand Website for a family-owned winery`}
          tools={['Figma', 'Photoshop']}
        />
        <MobileOverlappingImages className="mt-9 md:hidden" />
        <DesktopBentoGrid className="mt-12 hidden md:block" />
      </Container>
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
    <div className="flex flex-col max-md:space-y-6 md:flex-row md:justify-between">
      <h1 className="text-4xl font-bold text-slate-600 md:w-3/5">
        <Balancer>{title}</Balancer>
      </h1>
      <aside className="flex flex-col items-end md:w-2/5">
        <h2 className="mb-2 flex items-center text-xl font-semibold text-slate-600">
          <PackageIcon className="h-6 w-6" />
          <span className="ml-2">Toolbox</span>
        </h2>
        <TagList>
          {tools.map((tool) => (
            <TagListItem key={tool}>{tool}</TagListItem>
          ))}
        </TagList>
      </aside>
    </div>
  );
}

export function MobileOverlappingImages({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="h-52 w-full max-w-sm rotate-[4deg] rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
        <div className="h-full w-full rounded border-2 border-slate-600">
          {/* Image Here */}
        </div>
      </div>
      <div className="-mt-20 h-52 w-full max-w-sm -rotate-[4deg] rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
        <div className="h-full w-full rounded border-2 border-slate-600">
          {/* Image Here */}
        </div>
      </div>
    </div>
  );
}

export function DesktopBentoGrid({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid auto-rows-[330px] grid-cols-3 gap-4">
        <div className="col-span-2 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100">
          {/* Image Here  */}
        </div>
        <div className="col-span-1 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
          <div className="h-full w-full rounded border-2 border-slate-600">
            {/* Image Here */}
          </div>
        </div>

        <div className="col-span-1 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
          <div className="h-full w-full rounded border-2 border-slate-600">
            {/* Image Here */}
          </div>
        </div>
        <div className="col-span-2 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100">
          {/* Image Here */}
        </div>
      </div>
    </div>
  );
}
