import Container from '@/components/Container';
import HeroComponents from '@/components/HeroComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

function MobileHeroTitle({ className, ...props }: { className?: string }) {
  return (
    <h1
      className={cn(
        'text-[32px] font-bold leading-tight text-slate-200',
        className,
      )}
      {...props}
    >
      <div>Sympathize</div>
      <div>Craft stories</div>
      <div>Engage</div>
    </h1>
  );
}

function DesktopHeroTitle({ className, ...props }: { className?: string }) {
  return (
    <h1
      className={cn(
        'text-[32px] font-bold leading-tight text-slate-200',
        className,
      )}
      {...props}
    >
      TODO: Change the title for desktop and tablet view
    </h1>
  );
}

function SelectedProjects({ className, ...props }: { className?: string }) {
  // TODO: Add alt attribute to every image
  let projects = [
    {
      projectName: 'DiBarro',
      title: 'Designing a Storybrand Website for a family-owned winery',
      images: [
        {
          src: 'dibarro-1.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'dibarro-2.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'dibarro-3.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'dibarro-4.jpg',
          alt: 'Image alt description',
        },
      ],
    },
    {
      projectName: 'Vierin',
      title: 'Ideating a “mobile-first” One Page Website for a Dental Clinic',
      images: [
        {
          src: 'vierin-1.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'vierin-2.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'vierin-3.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'vierin-4.jpg',
          alt: 'Image alt description',
        },
      ],
    },
    {
      projectName: 'Alpitude',
      title: 'Creating a Digital Startup’s Design identity and Website',
      images: [
        {
          src: 'alpitude-1.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'alpitude-2.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'alpitude-3.jpg',
          alt: 'Image alt description',
        },
        {
          src: 'alpitude-4.jpg',
          alt: 'Image alt description',
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card className="pt-3" key={project.projectName}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border-2 border-slate-800 p-1">
              <div className="grid grid-cols-2 gap-1">
                {project.images.map((image) => (
                  <img
                    key={image.src}
                    src={`/homepage/${image.src}`}
                    alt={image.alt}
                    className="h-48 w-full rounded-lg border-2 border-slate-800 object-cover"
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="pt-14">
      <Container>
        <div className="mb-8">
          <MobileHeroTitle className="block md:hidden" />
          <DesktopHeroTitle className="hidden md:block" />
        </div>

        <div className="mb-9">
          <p className="text-lg text-slate-300">
            Sara Cosmai{' - '}
            <span className="font-bold text-slate-200">Designer</span>
          </p>
          <p className="text-lg font-semibold text-slate-300">
            Product &middot; Visual &middot; Motion
          </p>
        </div>

        <HeroComponents className="mb-14" />

        <div>
          <div className="mb-10">
            <h2 className="mb-2 text-lg font-semibold text-slate-200">
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
    </main>
  );
}
