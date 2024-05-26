import Container from '@/components/Container';
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  PackageIcon,
  PlusIcon,
  ProfileIcon,
  ShareIcon,
  SideBarIcon,
} from '@/components/Icons';
import StickyProjectNavigator from '@/components/StickyProjectNavigator';
import { TagList, TagListItem } from '@/components/TagList';
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './animations/FadeIn';
import { cn } from '@/lib/utils';
import { GrayscaleTransitionImage } from './animations/GrayscaleTransitionImage';
import { StaticImageData } from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import { Card } from './ui/Card';

export type ImgProp = {
  src: string | StaticImageData;
  alt?: string;
};

function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StickyProjectNavigator />
      <Container className="py-12 sm:py-24 lg:py-28">{children}</Container>
    </>
  );
}

function PageIntro({ title, tools }: { title: string; tools: string[] }) {
  return (
    <FadeIn className="flex flex-col max-lg:space-y-6 lg:flex-row lg:justify-between">
      <h1 className="text-3xl font-bold tracking-tight text-slate-200 md:text-4xl lg:w-3/5">
        <Balancer>{title}</Balancer>
      </h1>
      <aside className="flex flex-col items-end justify-center lg:w-2/5">
        <h2 className="mb-2 flex items-center text-xl font-semibold text-slate-200">
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

function MobileOverlappingImages({ className }: { className?: string }) {
  return (
    <FadeInStagger>
      <div className={cn('flex flex-col items-center', className)}>
        <FadeIn className="w-full">
          <div className="h-52 w-full max-w-sm rotate-[4deg] rounded-lg border-2 border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full rounded border-2 border-slate-700">
              {/* Image Here with priority */}
            </div>
          </div>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="-mt-20 h-52 w-full max-w-sm -rotate-[4deg] rounded-lg border-2 border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full rounded border-2 border-slate-700">
              {/* Image Here with priority */}
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeInStagger>
  );
}

function DesktopBentoGrid({ className }: { className?: string }) {
  return (
    <div className={className}>
      <FadeInStagger faster>
        <div className="grid auto-rows-[270px] grid-cols-3 gap-4 lg:auto-rows-[330px]">
          <FadeIn className="col-span-2 row-span-1 rounded-lg border-2 border-slate-700 bg-slate-900">
            <SafariBrowserHeaderSkeleton />
            {/* Image Here with priority  */}
          </FadeIn>
          <FadeIn className="col-span-1 row-span-1 rounded-lg border-2 border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full rounded border-2 border-slate-700">
              {/* Image Here with priority */}
            </div>
          </FadeIn>

          <FadeIn className="col-span-1 row-span-1 rounded-lg border-2 border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full rounded border-2 border-slate-700">
              {/* Image Here with priority */}
            </div>
          </FadeIn>
          <FadeIn className="col-span-2 row-span-1 rounded-lg border-2 border-slate-700 bg-slate-900">
            <SafariBrowserHeaderSkeleton />
            {/* Image Here with priority */}
          </FadeIn>
        </div>
      </FadeInStagger>
    </div>
  );
}

function SafariBrowserHeaderSkeleton() {
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
      <div className="h-4 max-w-[60%] flex-1 rounded-lg border-2 border-slate-700"></div>
      <div className="flex items-center space-x-1">
        <ShareIcon className="size-4" />
        <PlusIcon className="size-4" />
        {/* TODO: Technically this is not the right icon to use, I have to change it! */}
        <CopyIcon className="size-4" />
      </div>
    </div>
  );
}

function Chapter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <section
        className={cn(
          'mt-8 space-y-6 md:mt-10 md:space-y-8 lg:mt-15 lg:space-y-12',
          className,
        )}
      >
        {children}
      </section>
    </FadeIn>
  );
}

function ChapterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center text-2xl font-bold tracking-tight text-slate-200">
      <CheckIcon className="mr-2 h-8 w-8" />
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-prose">{children}</div>;
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-lg leading-relaxed text-slate-400">{children}</p>
  );
}

function BoldText({ children }: { children: React.ReactNode }) {
  return <b className="text-slate-200">{children}</b>;
}

// TODO: Add GrayscaleTransitionImage component to every image
function CaseStudyImage({
  src,
  alt,
  sizes,
  className,
}: {
  src: string | StaticImageData;
  alt?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className="group isolate my-6 overflow-hidden rounded-lg bg-slate-900 md:my-8 lg:my-10">
      <GrayscaleTransitionImage
        className={className}
        src={src}
        alt={alt}
        quality={90}
        sizes={sizes}
      />
    </div>
  );
}

function CaseStudyCarousel({
  images,
  className,
}: {
  images: ImgProp[];
  className?: string;
}) {
  return (
    <Carousel className={cn('w-full', className)}>
      <CarouselPrevious />
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem>
            <CaseStudyImage src={image.src} alt={image.alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}

function UserObjectivesGrid({ objectives }: { objectives: string[] }) {
  const GridItem = ({
    toHighlight,
    content,
  }: {
    toHighlight: boolean;
    content?: string;
  }) => (
    <Card
      className={`flex aspect-square items-center justify-center rounded p-4 ${toHighlight ? 'bg-slate-200' : ''}`}
    >
      {toHighlight ? (
        <p className={`text-center font-semibold text-slate-700`}>{content}</p>
      ) : (
        <ProfileIcon className={`h-5 w-5 text-slate-400`} />
      )}
    </Card>
  );

  const ResponsiveGrid = ({
    objectives,
    indexesToHighlight,
    numberOfItems,
  }: {
    objectives: string[];
    indexesToHighlight: number[];
    numberOfItems: number;
  }) => {
    let highlightCount = 0;

    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {Array.from({ length: numberOfItems }, (_, index) => {
          const isHighlight = indexesToHighlight.includes(index);
          const content = isHighlight
            ? objectives[highlightCount++]
            : undefined;

          return (
            <GridItem key={index} content={content} toHighlight={isHighlight} />
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full p-4">
      <div className="block sm:hidden">
        <ResponsiveGrid
          objectives={objectives}
          numberOfItems={6}
          indexesToHighlight={[0, 2, 5]}
        />
      </div>
      <div className="hidden sm:block md:hidden">
        <ResponsiveGrid
          objectives={objectives}
          numberOfItems={6}
          indexesToHighlight={[0, 2, 4]}
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <ResponsiveGrid
          objectives={objectives}
          numberOfItems={10}
          indexesToHighlight={[0, 4, 7]}
        />
      </div>
      <div className="hidden lg:block xl:hidden">
        <ResponsiveGrid
          objectives={objectives}
          numberOfItems={12}
          indexesToHighlight={[0, 5, 8]}
        />
      </div>
      <div className="hidden xl:block">
        <ResponsiveGrid
          objectives={objectives}
          numberOfItems={16}
          indexesToHighlight={[0, 6, 11]}
        />
      </div>
    </div>
  );
}

export {
  BoldText,
  CaseStudyCarousel,
  CaseStudyImage,
  CaseStudyLayout,
  Chapter,
  ChapterTitle,
  DesktopBentoGrid,
  MobileOverlappingImages,
  PageIntro,
  Paragraph,
  Prose,
  SafariBrowserHeaderSkeleton,
  UserObjectivesGrid,
};
