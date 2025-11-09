import Link from 'next/link';
import Container from '@/components/layout/Container';
import HeroComponents from '@/components/HeroComponents';
import WordsTimeline from '@/components/animations/WordsTimeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Balancer from 'react-wrap-balancer';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon } from '@/components/Icons';

function SelectedProjects({ className, ...props }: { className?: string }) {
  const projects = [
    {
      projectName: 'DiBarro',
      href: 'barro',
      title:
        'Redesigning a winery’s website with an effortless detail-oriented experience for users',
      images: [
        {
          src: 'dibarro-preview-1.png',
          alt: 'Homepage call to action section of DiBarro website',
        },
        {
          src: 'dibarro-preview-2.png',
          alt: 'Address map section of DiBarro website',
        },
        {
          src: 'dibarro-preview-3.png',
          alt: 'Bottle of wine of DiBarro website',
        },
        {
          src: 'dibarro-preview-4.png',
          alt: 'Philosophy section of DiBarro website',
        },
      ],
    },
    {
      projectName: 'Vierin',
      href: 'vierin',
      title:
        "Ideating a Dentist's website to promptly present the clinic and positively impact users",
      images: [
        {
          src: 'vierin-preview-1.png',
          alt: 'Service card filler animation of Vierin website',
        },
        {
          src: 'vierin-preview-2.png',
          alt: 'Direct call section of Vierin website',
        },
        {
          src: 'vierin-preview-3.png',
          alt: 'Hero section of Vierin website',
        },
        {
          src: 'vierin-preview-4.png',
          alt: 'Reviews section of Vierin website',
        },
      ],
    },
    {
      projectName: 'Alpitude',
      href: 'alpitude',
      title:
        'Creating visual identity, design system and user expericence for a Digital Startup',
      images: [
        {
          src: 'alpitude-preview-1.png',
          alt: 'Hero section of Alpitude website',
        },
        {
          src: 'alpitude-preview-2.png',
          alt: 'Profile section of Alpitude website',
        },
        {
          src: 'alpitude-preview-3.png',
          alt: 'Activity search section of Alpitude website',
        },
        {
          src: 'alpitude-preview-4.png',
          alt: 'Profile avatars section of Alpitude website',
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.projectName}
          href={`/work/${project.href}`}
          className="group"
          passHref
        >
          <Card className="border-transparent pt-3 md:transition-[filter] md:duration-200 md:ease-out md:will-change-transform md:group-hover:brightness-110">
            <CardHeader className="flex !flex-row items-center justify-between">
              <CardTitle className="mb-2">
                <Balancer ratio={0.5}>{project.title}</Balancer>
              </CardTitle>
              <Button
                className="flex-shrink-0 rounded-full bg-inherit"
                variant="outline"
                size="icon"
              >
                <ChevronRightIcon className="size-3" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-slate-700 p-1">
                <div className="h-full w-full overflow-hidden rounded-lg border border-slate-700">
                  <figure className="hover-gallery">
                    {project.images.map((image) => (
                      <img
                        key={image.src}
                        src={`/homepage/${image.src}`}
                        alt={image.alt}
                      />
                    ))}
                  </figure>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Container className="mt-14">
        <div className="mb-8 md:mb-12">
          <h1 className="mb-6 max-w-2xl text-[32px] leading-tight font-medium text-slate-400">
            <Balancer>
              I transform ideas into{' '}
              <span className="font-bold text-slate-200 italic">tailored</span>,{' '}
              <span className="font-bold text-slate-200 italic">appealing</span>{' '}
              and{' '}
              <span className="font-bold text-slate-200 italic">
                accessible
              </span>{' '}
              digital experiences.
            </Balancer>
          </h1>
        </div>

        <div className="ms:mb-12 mb-8 text-slate-400">
          <p className="text-xl font-bold">Designer based in Italy</p>
          <p className="text-base font-semibold">
            Product &middot; Visual &middot; Motion
          </p>
        </div>

        {/* HeroTimeline */}
        <WordsTimeline words={['Connect', 'Craft', 'Polish', 'Deliver']} />

        <HeroComponents className="mb-14" />

        <div>
          <div className="mb-10">
            <h2 className="mb-2 text-xl font-semibold text-slate-200">
              Some Projects
            </h2>
            <p className="text-base text-slate-400">
              Below you'll be able to checkout some UX/UI projects I've worked
              on.
            </p>
          </div>

          <SelectedProjects />
        </div>
      </Container>
    </>
  );
}
