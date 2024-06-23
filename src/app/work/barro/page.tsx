import {
  Chapter,
  ChapterTitle,
  DesktopBentoGrid,
  MobileOverlappingImages,
  PageIntro,
  Paragraph,
  Prose,
  CaseStudyLayout,
  CaseStudyImage,
  CaseStudyCarousel,
  UserObjectivesGrid,
  BoldText,
  UserPersonaCard,
} from '@/components/CaseStudyComponents';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { UserPersona } from '@/lib/types';
import { AnimatedBadgeList } from '@/components/animations/AnimatedBadgeList';
import heroImg1 from '@/images/case-study/barro/hero-1.webp';
import heroImg2 from '@/images/case-study/barro/hero-2.webp';
import heroImg3 from '@/images/case-study/barro/hero-3.webp';
import heroImg4 from '@/images/case-study/barro/hero-4.webp';
import heroMobileImg1 from '@/images/case-study/barro/hero-mobile-1.webp';
import heroMobileImg2 from '@/images/case-study/barro/hero-mobile-2.webp';
import oldWebsiteIssuesImg from '@/images/case-study/barro/old-website-issues.webp';
import newWebsiteImprovementsImg from '@/images/case-study/barro/new-website-improvements.webp';
import matteoImg from '@/images/case-study/barro/matteo.webp';
import informationArchitectureImg from '@/images/case-study/barro/information-architecture-flow.webp';

// const challengeImages = [
//   {
//     src: exampleImage3,
//     alt: 'Old website flaws and outdated design',
//   },
//   {
//     src: exampleImage4,
//     alt: 'New website design for Di Barròs winery',
//   },
// ];

const userPersona: UserPersona = {
  fullName: 'Matteo Rossi',
  avatarSrc: matteoImg,
  background:
    'Matteo is wine enthusiast and a restaurant chef in Milan. He usually plans menus, ensuring that the high-quality food is well paired with a wine.',
  goals: [
    'Discover new and exceptional wines to feature in his restaurant and pair with his menus.',
    'Build relationships with reputable winemakers and vineyard owners.',
  ],
  frustrations: [
    'Difficulty finding unique, high-quality wines that stand out from the competition.',
    'Limited time to research and taste new wines due to demanding work schedule.',
  ],
};

export default function WineryWebsite() {
  return (
    <>
      <CaseStudyLayout
        projectUrl="https://www.dibarro.com"
        prevUrl="/work/vierin"
        nextUrl="/work/vierin"
      >
        <PageIntro
          title={`Designing a Storybrand Website for a family-owned winery`}
          tools={['Figma', 'Photoshop']}
        />
        <MobileOverlappingImages
          className="mt-9 md:hidden"
          images={[
            { src: heroMobileImg1, alt: 'About page hero section' },
            { src: heroMobileImg2, alt: 'Slice of a wine bottle' },
          ]}
        />
        <DesktopBentoGrid
          className="mt-12 hidden md:block"
          images={[
            { src: heroImg1, alt: 'Hero section of About page' },
            { src: heroImg2, alt: 'Philosophy section from mobile device' },
            { src: heroImg3, alt: 'Zoom in on the map in the Contact page' },
            { src: heroImg4, alt: 'Select wines page' },
          ]}
        />

        <Chapter className="mt-15">
          <Prose>
            <ChapterTitle>Overview</ChapterTitle>
            <Paragraph>
              The <BoldText>Cantina Di Barrò</BoldText> is a family owned winery
              based in the Western Alps, Italy. This local producer offers high
              quality wines and annually stores around 20,000 bottles, all
              sourced from the grape variety growing in their 4 hectares
              vineyards. Their delicious wines can be enjoyed during gastronomic
              events, by visiting their cellars and vineyards, in local
              restaurants, or alternatively purchased, though there’s a limited
              amount.
            </Paragraph>
            <Paragraph>
              Their previous webpage, dating back to 2011, was outdated and did
              not meet modern web standards. They needed a new website and
              sought to communicate their presence and the story behind this
              family tradition.
            </Paragraph>
            <Paragraph>
              I was the sole designer in this project and I was responsible for
              the whole design process, from learning about the client’s goals
              to helping them get there with the developer’s help.
            </Paragraph>
          </Prose>
        </Chapter>

        <Chapter>
          <div>
            <Prose>
              <ChapterTitle>Connect</ChapterTitle>
            </Prose>
            <AnimatedBadgeList
              badges={[
                'Meetings with client',
                'Old webpage analysis',
                'Face To Face survey',
                'User persona',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>
              After some meetings with the client, I took time to review all the
              information gathered about the brand identity, user target and
              communicative intents.
            </Paragraph>
            <Paragraph>
              I conducted a heuristic UX analysis on the competitors’ websites
              and the old webpage identifying usability and accessibility issues
              such as{' '}
              <BoldText>
                unresponsive design, obsolete content and language limitation
              </BoldText>
              .
            </Paragraph>
          </Prose>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Unresponsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  The webpage from 2011 wasn't optimised for smaller devices,
                  like tablets and phones. The design was scaled down to fit the
                  smaller screens. This led to pinching, zooming and frustration
                  while interacting with the site.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Obsolete Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Through the web page there were informations no longer
                  helpful, non reusable. <br />
                  Moreover, the combination of a bad information architecture
                  and an absent hierarchy in typography turned into a huge
                  impediment.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Language Limitation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Despite the expected influx of French and English tourists in
                  the territory, the previous website was only available in
                  Italian. <br />
                  This language barrier limited the website reach, engagement
                  and interactions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Prose>
            <Paragraph>
              The new website had to be responsive, well structured and
              translated in multiple languages. I implemented some key
              strategies to ensure a comprehensive improvement over the old
              website:
            </Paragraph>
          </Prose>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
            <Card inverted>
              <CardHeader>
                <CardTitle>Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To enhance responsiveness, I chose 4 breakpoints to control
                  and adapt the layout on different devices, providing a
                  seamless experience for smaller screens and easy access to the
                  content without pinching.
                </CardDescription>
              </CardContent>
            </Card>
            <Card inverted>
              <CardHeader>
                <CardTitle>Updated Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  By collaborating with the client, we created a coherent
                  narrative that effectively communicated the winery’s identity.
                  As a consequence, the information architecture has been
                  restructured for the new content.
                </CardDescription>
              </CardContent>
            </Card>
            <Card inverted>
              <CardHeader>
                <CardTitle>Language Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To provide easy comprehension for tourists, the website had to
                  be multilingual. This addition broadens the reach, improves
                  the engagement by breaking down language barriers and makes it
                  accessible to a wider audience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CaseStudyImage
              src={oldWebsiteIssuesImg}
              alt="Old website issues"
            />
            <CaseStudyImage
              src={newWebsiteImprovementsImg}
              alt="New website improvements"
            />
          </div>

          <Prose>
            <Paragraph>
              The website would be used by tourists, people interested in the
              winery and wine enthusiasts. Face to face surveys with some wine
              connoisseurs led me to consider different needs and helped me
              distill some user objectives.
            </Paragraph>
          </Prose>

          <UserObjectivesGrid
            objectives={[
              'Discover the products available',
              'Contact and locate the winery',
              'Uncover the winemaking process',
            ]}
          />

          <Prose>
            <Paragraph>
              Taking into account all the information gathered I fabricated a
              user persona for the target user, a ”wine enthusiast visiting
              Valle d’Aosta”, who would be both viewing the products and trying
              to contact the winery to purchase or visit.
            </Paragraph>
          </Prose>
          <UserPersonaCard userPersona={userPersona} />
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Craft</ChapterTitle>
          </Prose>
          <AnimatedBadgeList
            badges={[
              'Information architecture',
              'User flows',
              'Typography',
              'Visual design',
              'Wireframes',
            ]}
          />

          <Prose>
            <Paragraph>
              The information architecture and user flow were designed to be
              intuitive and easy to navigate. A clear hierarchy had to guide the
              user through the website, ensuring that he could easily find the
              information needed.
            </Paragraph>
          </Prose>
          <CaseStudyImage
            className="w-full md:hidden"
            src={informationArchitectureImg}
            alt="Information architecture of the website"
            captionContent="UX Design Process"
          />
          <Paragraph>
            The most challenging page was the Wine Detail page; I needed to
            balance all the informations. Tasting sensations, product aesthetics
            and winemaking curiosities had to be displayed within the viewport
            or be reachable with a minimal scrolling.
          </Paragraph>
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
