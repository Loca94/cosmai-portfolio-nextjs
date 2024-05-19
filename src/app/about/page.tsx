import Container from '@/components/Container';
import {
  BGIcon,
  CheckBadgeIcon,
  HeartIcon,
  PackageIcon,
  ProfileIcon,
} from '@/components/Icons';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Separator } from '@/components/ui/Separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Metadata } from 'next';
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Sara Cosmai. I live in Italy, where I design the future.',
};

export default function About() {
  return (
    <Container className="mt-14">
      <h1 className="sr-only">About</h1>

      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-12">
        <MissionSection />
        <ToolboxSection />
      </div>
    </Container>
  );
}

function MissionSection() {
  return (
    <section>
      <FadeInStagger>
        <FadeIn>
          <h2 className="mb-2 flex items-center text-xl font-semibold text-slate-200">
            <CheckBadgeIcon className="h-6 w-6" />
            <span className="ml-2">Mission</span>
          </h2>
          <p className="text-base text-slate-400">
            Help people enjoy using apps and websites
          </p>
        </FadeIn>
        <FadeIn>
          <div className="mt-10">
            <Card>
              <CardHeader>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/about/personal-photo-desktop.png"
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet="/about/personal-photo-tablet.png"
                  />
                  <img
                    className="pointer-events-none min-h-44 w-full rounded-lg object-cover"
                    src="/about/personal-photo-mobile.png"
                    alt="Profile picture of Sara Cosmai"
                  />
                </picture>{' '}
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="background">
                  <TabsList className="grid h-11 w-fit grid-cols-3 [&>*]:h-10">
                    <TabsTrigger
                      value="background"
                      className="rounded-l border-r border-slate-700"
                    >
                      <span className="sr-only">Background</span>
                      <BGIcon className="h-6 w-6" />
                    </TabsTrigger>
                    <TabsTrigger value="interests">
                      <span className="sr-only">Interests</span>
                      <HeartIcon className="h-6 w-6" />
                    </TabsTrigger>
                    <TabsTrigger
                      value="profile"
                      className="rounded-r border-l border-slate-700"
                    >
                      <span className="sr-only">Profile</span>
                      <ProfileIcon className="h-6 w-6" />
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="background">
                    <p className="text-base text-slate-400">
                      I’m a design enthusiast, an optimistic visionary who
                      thrives on challenges and sees opportunities in
                      problem-solving. I’m curious, an avid learner and a
                      tireless worker searching for a good company environment
                      to help me turn good ideas into reality.
                    </p>
                  </TabsContent>
                  <TabsContent value="interests">
                    <p className="text-base text-slate-400">
                      Music fuels my creativity and fosters a productive
                      atmosphere. Japanese culture captivates me, I even embrace
                      their culinary tradition of eating with chopsticks.
                      Moreover, cinema holds a special place in my heart, as it
                      enhances my powers of observation and inspires me.
                    </p>
                  </TabsContent>
                  <TabsContent value="profile">
                    <p className="text-base text-slate-400">
                      Since my bachelor's degree in Communication Design from
                      IAAD University in Turin, my design journey brought me to
                      fall in love with After Effects, to deeply enjoy Visual
                      design and last but not least to discover Figma ♥️ which
                      carried me to UI-UX.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </FadeInStagger>
    </section>
  );
}

function ToolboxSection() {
  const tools = [
    {
      name: 'Figma',
      description: 'Used to build high fidelity prototypes',
      categories: ['Wireframes', 'Prototyping', 'Components'],
      startDate: 2019,
    },
    {
      name: 'Adobe Creative Suite',
      description: 'Used to create animations and illustrations',
      categories: ['Illustration', 'Animation', 'Photo Editing'],
      startDate: 2017,
    },
    {
      name: 'Webflow',
      description: 'Used to build custom and responsive websites',
      categories: ['Web Design', 'Web Development', 'CMS'],
      startDate: 2023,
    },
    {
      name: 'Spline',
      description: 'Used to build and animate 3D objects',
      categories: ['3D Design', '3D Animation', '3D Prototyping'],
      startDate: 2022,
    },
  ];

  function getYearsOfExperience(startDate: number) {
    const currentYear = new Date().getFullYear();
    return currentYear - startDate;
  }

  return (
    <section>
      <FadeInStagger faster>
        <FadeIn>
          <h2 className="mb-2 flex items-center text-xl font-semibold text-slate-200">
            <PackageIcon className="h-6 w-6" />
            <span className="ml-2">Toolbox</span>
          </h2>
          <p className="text-base text-slate-400">
            I use a variety of tools, enabling effective and creative design
            solutions
          </p>
        </FadeIn>
        <ul role="list" className="mt-10">
          {/* TODO: Add FadeInStagger component to see the effects, pass the element type as input, if not it will be a div */}
          {tools.map((tool, idx) => (
            <li key={idx} className="mb-4 w-full">
              <FadeIn>
                <Card>
                  <CardHeader>
                    <div className="mb-4 flex justify-between">
                      <div>
                        <h3 className="text-base font-medium text-slate-200">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {tool.description}
                        </p>
                      </div>
                      <div className="group relative flex size-10 flex-col items-center justify-center rounded border border-slate-500 leading-tight text-slate-400 transition-colors hover:border-slate-200">
                        {/* Add star SVG */}
                        <span className="text-base font-medium leading-3 group-hover:text-slate-200">
                          {getYearsOfExperience(tool.startDate)}
                        </span>
                        <span className="text-xs group-hover:text-slate-200">
                          yrs
                        </span>
                      </div>
                    </div>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="flex h-5 items-center space-x-4 text-sm font-medium text-slate-400">
                      {tool.categories.map((category, idx) => (
                        <>
                          <div key={category}>{category}</div>
                          {idx < tool.categories.length - 1 && (
                            <Separator orientation="vertical" />
                          )}
                        </>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </section>
  );
}
