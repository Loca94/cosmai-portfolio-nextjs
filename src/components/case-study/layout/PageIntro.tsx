import { FadeIn } from '@/components/animations/FadeIn';
import { PackageIcon } from '@/components/Icons';
import { BadgeList, BadgeListItem } from '@/components/ui/Badge';
import Balancer from 'react-wrap-balancer';

export default function PageIntro({
  title,
  tools,
}: {
  title: string;
  tools: string[];
}) {
  return (
    <FadeIn className="flex flex-col max-lg:space-y-6 lg:flex-row lg:justify-between">
      <h1 className="text-3xl font-medium tracking-tight text-slate-200 md:text-4xl lg:w-3/5">
        <Balancer>{title}</Balancer>
      </h1>
      <aside className="flex flex-col items-end justify-center lg:w-2/5">
        <h2 className="mb-2 flex items-center text-xl font-semibold text-slate-200">
          <PackageIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-medium">Toolbox</span>
        </h2>
        <BadgeList className="flex-row-reverse">
          {tools.map((tool) => (
            <BadgeListItem key={tool} className="lg:text-base" size="sm">
              {tool}
            </BadgeListItem>
          ))}
        </BadgeList>
      </aside>
    </FadeIn>
  );
}
