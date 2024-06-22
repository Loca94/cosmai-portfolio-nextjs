import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import StickyProjectNavigator from '@/components/StickyProjectNavigator';
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn';
import { GrayscaleTransitionImage } from '@/components/animations/GrayscaleTransitionImage';
import { Card, CardContent, CardDescription } from '@/components/ui/Card';
import { Badge, BadgeList, BadgeListItem } from '@/components/ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { UserPersona } from '@/lib/types';

export type ImgProp = {
  src: string | StaticImageData;
  alt?: string;
};

function CaseStudyLayout({
  projectUrl,
  prevUrl,
  nextUrl,
  children,
}: {
  projectUrl: string;
  prevUrl: string;
  nextUrl: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyProjectNavigator
        projectUrl={projectUrl}
        prevUrl={prevUrl}
        nextUrl={nextUrl}
      />
      <Container className="py-12 sm:py-24 lg:py-28">{children}</Container>
    </>
  );
}

function PageIntro({ title, tools }: { title: string; tools: string[] }) {
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
        <BadgeList>
          {tools.map((tool) => (
            <BadgeListItem key={tool}>{tool}</BadgeListItem>
          ))}
        </BadgeList>
      </aside>
    </FadeIn>
  );
}

function MobileOverlappingImages({
  className,
  images,
}: {
  className?: string;
  images: ImgProp[];
}) {
  return (
    <FadeInStagger>
      <div className={cn('flex flex-col items-center', className)}>
        <FadeIn className="z-10 w-full">
          <div className="h-52 w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded border border-slate-700">
              <CaseStudyImage
                className="h-48 w-full object-cover object-top"
                src={images[0].src}
                alt={images[0].alt}
                margins={false}
                rounded={false}
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn className="z-20 w-full">
          <div className="-mt-8 h-52 w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded border border-slate-700">
              <CaseStudyImage
                className="h-48 w-full object-cover"
                src={images[1].src}
                alt={images[1].alt}
                margins={false}
                rounded={false}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeInStagger>
  );
}

function DesktopBentoGrid({
  className,
  images,
}: {
  className?: string;
  images: ImgProp[];
}) {
  return (
    <div className={className}>
      <FadeInStagger faster>
        <div className="grid auto-rows-[270px] grid-cols-3 gap-4 lg:auto-rows-[330px]">
          <FadeIn className="col-span-2 row-span-1 overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
            <SafariBrowserHeaderSkeleton />
            {/* TODO: add priority to image? */}
            <CaseStudyImage
              className="object-cover md:h-[238px] lg:h-[295px]"
              src={images[0].src}
              alt={images[0].alt}
              margins={false}
              rounded={false}
            />
          </FadeIn>
          <FadeIn className="col-span-1 row-span-1 rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded border border-slate-700">
              {/* TODO: add priority to image? */}
              <CaseStudyImage
                className="object-cover md:h-[250px] lg:h-[310px]"
                src={images[1].src}
                alt={images[1].alt}
                margins={false}
                rounded={false}
              />
            </div>
          </FadeIn>

          <FadeIn className="col-span-1 row-span-1 rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded border border-slate-700">
              {/* Image Here with priority */}
              <CaseStudyImage
                className="object-cover md:h-[250px] lg:h-[310px]"
                src={images[2].src}
                alt={images[2].alt}
                margins={false}
                rounded={false}
              />
            </div>
          </FadeIn>
          <FadeIn className="col-span-2 row-span-1 overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
            <SafariBrowserHeaderSkeleton />
            {/* Image Here with priority */}
            <CaseStudyImage
              className="object-cover md:h-[238px] lg:h-[295px]"
              src={images[3].src}
              alt={images[3].alt}
              margins={false}
              rounded={false}
            />
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
          'mt-10 space-y-6 md:space-y-8 lg:mt-15 lg:space-y-12',
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
    <h2 className="mb-6 flex items-center text-2xl font-medium tracking-tight text-slate-200">
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
    <p className="mb-4 text-base leading-relaxed text-slate-400">{children}</p>
  );
}

function BoldText({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-slate-200">{children}</strong>;
}

function CaseStudyLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-400 hover:underline"
    >
      {children}
    </a>
  );
}

// TODO: Add GrayscaleTransitionImage component to every image
function CaseStudyImage({
  src,
  alt,
  sizes,
  margins = true,
  rounded = true,
  captionContent,
  className,
}: {
  src: string | StaticImageData;
  alt?: string;
  sizes?: string;
  margins?: boolean;
  rounded?: boolean;
  captionContent?: string;
  className?: string;
}) {
  return (
    <div className={margins ? 'my-6 md:my-8 lg:my-10' : 'm-0'}>
      <div
        className={cn(
          'group isolate overflow-hidden bg-slate-900',
          rounded ? 'rounded-lg' : 'rounded-none',
        )}
      >
        <GrayscaleTransitionImage
          className={className}
          src={src}
          alt={alt}
          quality={90}
          sizes={sizes}
        />
      </div>
      {captionContent && (
        <div className="mt-4 flex items-center justify-end space-x-4 text-sm text-slate-500">
          <span>{captionContent}</span>
          <Badge>Img</Badge>
        </div>
      )}
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
        <p className={`text-center font-semibold leading-tight text-slate-700`}>
          {content}
        </p>
      ) : (
        <ProfileIcon className={`h-6 w-6 text-slate-400`} />
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
            <GridItem
              key={`${content}-${index}`}
              content={content}
              toHighlight={isHighlight}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full">
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

function UserPersonaCard({ userPersona }: { userPersona: UserPersona }) {
  return (
    <FadeInStagger faster>
      <div className="grid gap-4 md:grid-cols-2">
        <FadeIn>
          <Card className="h-full">
            <CardContent className="flex h-full items-center pt-4">
              <div className="flex flex-col justify-center space-y-4">
                {/* User Persona */}
                <div className="flex">
                  <CaseStudyImage
                    src={userPersona.avatarSrc}
                    alt="User Persona Matteo"
                    className="h-32 w-32"
                    margins={false}
                  />
                  <div className="flex flex-col items-center justify-center p-4">
                    <h3 className="mb-2 text-2xl font-bold">User Persona</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="darker" className="text-slate-400">
                        Name
                      </Badge>
                      <CardDescription>{userPersona.fullName}</CardDescription>
                    </div>
                  </div>
                </div>

                {/* User Persona Background */}
                <div className="flex h-full">
                  <div className="space-y-4">
                    <Badge variant="darker" className="text-slate-400">
                      Background
                    </Badge>
                    <CardDescription>{userPersona.background}</CardDescription>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
        <div className="flex flex-col space-y-4">
          {/* User Persona Goals */}
          <FadeIn>
            <Card>
              <CardContent className="pt-4 text-slate-400">
                <div className="flex flex-col space-y-4">
                  <Badge variant="darker" className="w-fit text-slate-400">
                    Goals
                  </Badge>
                  <ul className="list-disc space-y-2 [&>*]:ml-4">
                    {userPersona.goals.map((item) => (
                      <li key={item}>
                        <CardDescription>{item}</CardDescription>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* User Persona Frustrations */}
          <FadeIn>
            <Card>
              <CardContent className="pt-4 text-slate-400">
                <div className="flex flex-col space-y-4">
                  <Badge variant="darker" className="w-fit text-slate-400">
                    Frustrations
                  </Badge>
                  <ul className="list-disc space-y-2 [&>*]:ml-4">
                    {userPersona.frustrations.map((item) => (
                      <li key={item}>
                        <CardDescription>{item}</CardDescription>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </FadeInStagger>
  );
}

export {
  BoldText,
  CaseStudyCarousel,
  CaseStudyImage,
  CaseStudyLayout,
  CaseStudyLink,
  Chapter,
  ChapterTitle,
  DesktopBentoGrid,
  MobileOverlappingImages,
  PageIntro,
  Paragraph,
  Prose,
  SafariBrowserHeaderSkeleton,
  UserObjectivesGrid,
  UserPersonaCard,
};
