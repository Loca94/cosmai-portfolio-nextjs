import Container from '@/components/Container';
import { CheckIcon, PackageIcon } from '@/components/Icons';
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
import { ImgProp } from '@/lib/types/ImgProp';

export function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StickyProjectNavigator />
      <Container className="py-12 sm:py-24 lg:py-28">{children}</Container>
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
      <h1 className="text-3xl font-bold text-slate-600 md:text-4xl lg:w-3/5">
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
              {/* Image Here with priority */}
            </div>
          </div>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="-mt-20 h-52 w-full max-w-sm -rotate-[4deg] rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
            <div className="h-full w-full rounded border-2 border-slate-600">
              {/* Image Here with priority */}
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
            {/* Image Here with priority  */}
          </FadeIn>
          <FadeIn className="col-span-1 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
            <div className="h-full w-full rounded border-2 border-slate-600">
              {/* Image Here with priority */}
            </div>
          </FadeIn>

          <FadeIn className="col-span-1 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100 p-2">
            <div className="h-full w-full rounded border-2 border-slate-600">
              {/* Image Here with priority */}
            </div>
          </FadeIn>
          <FadeIn className="col-span-2 row-span-1 rounded-lg border-2 border-slate-600 bg-slate-100">
            {/* Image Here with priority */}
          </FadeIn>
        </div>
      </FadeInStagger>
    </div>
  );
}

export function Chapter({
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
          'mt-8 space-y-6 text-slate-600 md:mt-10 md:space-y-8 lg:mt-15 lg:space-y-12',
          className,
        )}
      >
        {children}
      </section>
    </FadeIn>
  );
}

export function ChapterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center text-2xl font-bold">
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

// TODO: Add GrayscaleTransitionImage component to every image
export function CaseStudyImage({
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
    <div className="group isolate my-6 overflow-hidden rounded-lg bg-slate-200/70 md:my-8 lg:my-10">
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

export function CaseStudyCarousel({
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
