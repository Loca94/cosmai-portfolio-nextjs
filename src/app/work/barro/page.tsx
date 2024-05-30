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
import heroImage1 from '@/images/dibarro-casestudy-hero-1.png';
import heroImage2 from '@/images/dibarro-casestudy-hero-2.png';
import heroImage3 from '@/images/dibarro-casestudy-hero-3.png';
import heroImage4 from '@/images/dibarro-casestudy-hero-4.png';
import uxProcessImg from '@/images/dibarro-ux-process.png';
import uxProcessMobileImg from '@/images/dibarro-ux-process-mobile.png';
import userPersonaMatteo from '@/images/dibarro-avatar-matteo.png';
import exampleImage from '@/images/example-image.jpeg';
import exampleImage2 from '@/images/example-image-2.avif';
import exampleImage3 from '@/images/example-image-3.avif';
import exampleImage4 from '@/images/example-image-4.avif';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { UserPersona } from '@/lib/types';

export default function WineryWebsite() {
  const challengeImages = [
    {
      src: exampleImage3,
      alt: 'Old website flaws and outdated design',
    },
    {
      src: exampleImage4,
      alt: 'New website design for Di Barròs winery',
    },
  ];

  const userPersona: UserPersona = {
    fullName: 'Matteo Rossi',
    avatarSrc: userPersonaMatteo,
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

  return (
    <>
      <CaseStudyLayout>
        <PageIntro
          title={`Designing a Storybrand Website for a family-owned winery`}
          tools={['Figma', 'Photoshop']}
        />
        <MobileOverlappingImages className="mt-9 md:hidden" />
        <DesktopBentoGrid
          className="mt-12 hidden md:block"
          images={[
            { src: heroImage1, alt: 'Hero section of About page' },
            { src: heroImage2, alt: 'Philosophy section from mobile device' },
            { src: heroImage3, alt: 'Zoom in on the map in the Contact page' },
            { src: heroImage4, alt: 'Select wines page' },
          ]}
        />

        <Chapter className="mt-15">
          <Prose>
            <ChapterTitle>Project</ChapterTitle>
            <Paragraph>
              I had the chance to create a new website for Di Barrò, a family
              owned winery based in Italy. Their previous website, dating back
              to 2011, was outdated and did not meet modern web standards.
            </Paragraph>
          </Prose>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Unresponsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-sm">
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
                <CardDescription className="text-base md:text-sm">
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
                <CardDescription className="text-base md:text-sm">
                  Despite the expected influx of French and English tourists in
                  the territory, the previous website was only available in
                  Italian. <br />
                  This language barrier limited the website reach, engagement
                  and interactions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Challenge</ChapterTitle>
            <Paragraph>
              The new website had to be responsive, well structured and
              translated in multiple languages. I implemented some key
              strategies to ensure a comprehensive improvement over the old
              website:
            </Paragraph>
            <Paragraph>
              To <BoldText>enhance responsiveness</BoldText>, I designed a clean
              and adaptive interface that provides a seamless experience for
              smaller screens and easy access to the content without pinching.
            </Paragraph>
            <Paragraph>
              To <BoldText>update and strengthen the content</BoldText>, I
              restructured the information architecture and established a clear
              typography hierarchy. This overhaul included refreshing outdated
              information and creating a coherent narrative that effectively
              communicates the winery’s story and brand's identity.
            </Paragraph>
            <Paragraph>
              To provide easy comprehension for French and English tourists, the
              website had to be <BoldText>multilingual</BoldText>. This addition
              broadens the reach, improves the engagement by breaking down
              language barriers and makes it accessible to a wider audience.
            </Paragraph>
            <Paragraph>
              To improve <BoldText>accessibility</BoldText>, I ensured the
              website followed the best practices, such as incorporating alt
              text for images and using accessible colors, providing easy
              navigation for users with disabilities. This inclusive approach
              ensures that all visitors can access and enjoy the website's
              content.
            </Paragraph>
          </Prose>
          <CaseStudyCarousel images={challengeImages} />
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Role & Design Process</ChapterTitle>
            <Paragraph>
              My role was to understand the client’s needs as well as their
              niche in order to deliver a website with an easy experience for
              the end user.
            </Paragraph>
            <Paragraph>
              I was responsible for the entire design process, from the initial
              research phase to the final development of the user interface.
              After some meetings with the client, I took time to review all the
              information gathered about the brand identity, user target and
              communicative intents. I felt that it was the perfect opportunity
              to discover more about their world, and gain experience through
              new design challenges.
            </Paragraph>
            <Paragraph>
              I conducted a heuristic UX analysis on the old webpage and the
              competitors’ websites identifying usability and accessibility
              issues thinking of solutions accordingly.
            </Paragraph>
          </Prose>
          <div className="md:hidden">
            <CaseStudyImage
              className="w-full md:hidden"
              src={uxProcessMobileImg}
              alt="New website design for Di Barrò's winery"
              captionContent="UX Design Process"
            />
          </div>
          <div className="hidden md:block">
            <CaseStudyImage
              className="w-full"
              src={uxProcessImg}
              alt="New website design for Di Barrò's winery"
              captionContent="UX Design Process"
            />
          </div>
          <Prose>
            <Paragraph>
              Designing wireframes and prototypes was an iterative process that
              evolved with each meeting as I had to consider the client
              standpoint and concerns. During the development process, I
              collaborated closely with a developer, ensuring that accessibility
              was our top priority.
            </Paragraph>
          </Prose>
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Users</ChapterTitle>
            <Paragraph>
              The UX was designed for turists, people interested in visiting the
              winery and wine enthusiasts. After leading Face To Face surveys
              with (Oenophiles) some wine connoisseurs. I was able to distill
              some user objectives.
            </Paragraph>
          </Prose>
          <UserObjectivesGrid
            objectives={[
              'View the product',
              'Contact the winery',
              'The winemaking process',
            ]}
          />
          <Prose>
            <Paragraph>
              Taking into account all the information gathered I fabricated a
              user persona for the target user, a ”wine lover visiting Valle
              d’Aosta”, who would be both viewing the products and trying to
              contact the winery to purchase or visit.
            </Paragraph>
          </Prose>
          <UserPersonaCard userPersona={userPersona} />
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Information Architecture & User Flow</ChapterTitle>
            <Paragraph>
              The information architecture was designed to be intuitive and easy
              to navigate. I created a clear hierarchy that guides the user
              through the website, ensuring that they can easily find the
              information they need.
            </Paragraph>
          </Prose>
          <CaseStudyImage
            className="w-full !invert"
            src={exampleImage}
            alt="Information architecture for Di Barrò's winery"
          />
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>User Interface & Visual Design</ChapterTitle>
            <Paragraph>
              In order to create a seamless experience for users the paragraphs
              required to stand out and be easy to read. With the brand
              guidelines in mind, I chose a serif font for headings and a sans
              font for paragraphs to join a monochromatic design where colors
              stuck out from photos.
            </Paragraph>
          </Prose>
          <CaseStudyImage
            className="w-full"
            src={exampleImage}
            alt="TODO: Add alt description"
          />
          <CaseStudyImage
            className="w-full"
            src={exampleImage2}
            alt="TODO: Add alt description"
          />
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
