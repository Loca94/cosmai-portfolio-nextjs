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
  UserObjectivesGrid,
  BoldText,
  UserPersonaCard,
  CaseStudyLink,
} from '@/components/CaseStudyComponents';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { UserPersona } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
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
import wineDetailPageImg from '@/images/case-study/barro/wine-detail-page.webp';
import fontsImg from '@/images/case-study/barro/fonts.webp';
import homepageContactsIterationImg from '@/images/case-study/barro/homepage-contacts-iteration.webp';
import mapImg from '@/images/case-study/barro/map.webp';
import accessibilityAndPerformanceImg from '@/images/case-study/barro/accessibility-and-performance.webp';

const userPersona: UserPersona = {
  fullName: 'Matteo Rossi',
  avatarSrc: matteoImg,
  background:
    'Matteo is wine enthusiast, a restaurant owner and chef. He usually plans menus, ensuring that the high-quality food is well paired with a wine. He is often searching for new exclusive wines to feature in his restaurant. In order to purchase these products and build relationships with their producers, he usually attends wine fairs and short trips to France and Aosta Valley discovering small local producers.',
  goals: [
    'Discover unique wines to feature in his restaurant',
    'Get in touch easily with winemakers and vineyard owners',
  ],
  frustrations: [
    'Difficulty finding specific aspects of a wine',
    'Limited time to research due to a lack of patience and a rigid work schedule',
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
              not meet modern web standards. They needed a new website and{' '}
              <BoldText>
                sought to communicate their products and the story behind this
                family tradition
              </BoldText>
              .
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
                'Interviews',
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
              I analysed competitor websites to understand their content
              strategy, strengths, and weaknesses in order to benchmark their
              old website against competitors and get ideas for the redesign.
            </Paragraph>
            <Paragraph>
              Evaluating the engagement level of the old website I could assess
              the content didn’t meet user needs and wasn’t up-to-date.
              Furthermore testing the navigation and reviewing content layout I
              identified usability and accessibility issues.
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
                  Through the web page there were informations no longer helpful
                  or non-reusable. <br />
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
              translated in multiple languages to ensure a comprehensive
              improvement over the old website.
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CaseStudyImage
              src={oldWebsiteIssuesImg}
              alt="Old website issues"
              margins={false}
            />
            <CaseStudyImage
              src={newWebsiteImprovementsImg}
              alt="New website improvements"
              margins={false}
              captionContent="Usability and accessibility issues adressed"
              imgNumber="1.0"
            />
          </div>

          <Prose>
            <Paragraph>
              The website would be used by tourists, people interested in the
              winery and wine enthusiasts. To identify the best solutions for
              users I had to learn more about their problems and put myself in
              the their shoes. Collecting some insights could help me understand
              their opinions, feelings and motivations and then empathise with
              their challenges.
            </Paragraph>
            <Paragraph>
              I led some interviews with different costumers paying attention to
              their behaviours as well as their verbal responses. Identifying
              aspects such as discomfort or enthusiasm in the wine connoisseurs
              helped me consider their different needs and distill some user
              objectives.
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
              Taking into account all the information gathered, I fabricated an
              archetype representative of most target users who would be both
              viewing the products and trying to contact the winery to purchase
              or visit. Creating this concrete instance was effective, as it
              constantly reminded me the user’s standpoint value which
              sometimes, to content the client, can be left behind.
            </Paragraph>
          </Prose>
          <UserPersonaCard userPersona={userPersona} />
        </Chapter>

        <Chapter>
          <div>
            <Prose>
              <ChapterTitle>Craft</ChapterTitle>
            </Prose>
            <AnimatedBadgeList
              badges={[
                'Informations flow',
                'Typography',
                'Visual design',
                'Wireframes',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>
              The persona targeted was clearly detail-oriented but valued speed
              too. These aspects helped me taking decisions easier while
              designing the Contacts, Wines and Detail wine page content.
            </Paragraph>
            <Paragraph>
              Focusing on the defined set of target users, I needed to create an
              enjoyable interface with an efficient and streamlined design. A
              clear hierarchy and architecture had to guide the user through the
              website, ensuring that he could easily find the information
              needed.
            </Paragraph>
          </Prose>
          <CaseStudyImage
            src={informationArchitectureImg}
            alt="General-IA flow of the website"
            captionContent="General-IA flow"
            imgNumber="2.0"
          />
          <Prose>
            <Paragraph>
              Product pages had to contain all the informations useful for the
              customer but with a fast and easy access due to the short amount
              of time to spark his interest. A good balance and hierarchy helped
              with that, but it was challenging to achieve.
            </Paragraph>
            <Paragraph>
              Once clicked on a wine link, users were directed on the Detail
              wine page, where they could find tasting sensations, product
              aesthetics and winemaking curiosities within the viewport, or else
              reachable with a minimal scrolling. The wine had to resonate with
              the customer, be remembered and perceived as high-quality.
            </Paragraph>
          </Prose>

          <Prose>
            <div className="rounded border border-dashed border-orange-accent px-6 py-2 text-sm sm:px-8 sm:py-4">
              <ol
                role="list"
                className="divide-y divide-dashed divide-orange-accent"
              >
                <li className="flex items-start py-4">
                  <span className="mt-0.5 flex h-4 w-4 min-w-4 items-center justify-center rounded-full bg-orange-accent text-xs font-bold text-slate-950">
                    1
                  </span>
                  <span className="ml-4 text-slate-400">
                    <BoldText>Present the product</BoldText> with concise
                    tasting notes, well depicting each wine flavours and aromas
                    and attracting interested customers
                  </span>
                </li>
                <li className="flex items-start py-4">
                  <span className="mt-0.5 flex h-4 w-4 min-w-4 items-center justify-center rounded-full bg-orange-accent text-xs font-bold text-slate-950">
                    2
                  </span>
                  <span className="ml-4 text-slate-400">
                    <BoldText>Show the product</BoldText> and highlight it with
                    a subtle animated stroke beneath the bottle in order to make
                    the label rememberable
                  </span>
                </li>
                <li className="flex items-start py-4">
                  <span className="mt-0.5 flex h-4 w-4 min-w-4 items-center justify-center rounded-full bg-orange-accent text-xs font-bold text-slate-950">
                    3
                  </span>
                  <span className="ml-4 text-slate-400">
                    <BoldText>Allow the user to learn more</BoldText> through
                    collapsible sections, expandable as needed
                  </span>
                </li>
              </ol>
            </div>
          </Prose>

          <Prose>
            <Paragraph>
              Since most people instinctively read the page from left to right,
              I laid out the readable contents on the left and the product’s
              image on the right. Through these decisions I ensured an efficient
              use of space and a clear information navigation.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={wineDetailPageImg}
            alt="Wine detail page"
            captionContent="Nav bar quick action links"
            imgNumber="2.1"
          />

          <Prose>
            <Paragraph>
              Taking into account the fonts used on the wine bottle labels, I
              looked for display fonts that suited their style. I used a Serif
              for headings and a Sans for paragraphs to create a good balance.
              In order to create a seamless experience for users the paragraphs
              required to stand out: a{' '}
              <BoldText>grayscale colour palette</BoldText> and{' '}
              <BoldText>above-average text dimensions</BoldText> ensured a
              comfortable and smooth reading; ample spacing between each block
              made each section appear shorter and approachable. In a mainly
              monochromatic design, colours stuck out from supporting photos.
            </Paragraph>
          </Prose>

          <div className="flex flex-col space-y-2">
            <Badge>Palette</Badge>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              <div className="flex h-16 w-full items-center justify-center rounded bg-white text-slate-600">
                #FFFFF
              </div>
              <div className="flex h-16 w-full items-center justify-center rounded bg-zinc-100 text-slate-600">
                #F4F4F5
              </div>
              <div className="flex h-16 w-full items-center justify-center rounded bg-zinc-300 text-slate-600">
                #D4D4D8
              </div>
              <div className="flex h-16 w-full items-center justify-center rounded bg-zinc-400 text-white">
                #A1A1AA
              </div>
              <div className="flex h-16 w-full items-center justify-center rounded bg-zinc-600 text-white">
                #52525B
              </div>
              <div className="flex h-16 w-full items-center justify-center rounded bg-zinc-700 text-white">
                #3F3F46
              </div>
              <div className="flex h-16 w-full items-center justify-center rounded bg-[#1C1C20] text-white">
                #1C1C20
              </div>
              <div className="flex h-16 w-full items-center justify-center rounded bg-[#0A0A0C] text-white">
                #0A0A0C
              </div>
            </div>
          </div>

          <CaseStudyImage
            src={fontsImg}
            alt="Typography"
            captionContent="Typography"
            imgNumber="2.2"
          />
        </Chapter>

        <Chapter>
          <div>
            <Prose>
              <ChapterTitle>Polish</ChapterTitle>
            </Prose>
            <AnimatedBadgeList
              badges={[
                'Prototyping',
                'Testing prototypes',
                'Face To Face survey',
                'User persona',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>
              Designing prototypes was an iterative process that evolved with
              each meeting as I had to consider the client concerns. Below a few
              examples on how the Homepage and the Contact page changed over
              time.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={homepageContactsIterationImg}
            alt="Homepage and contacts prototypes’ iteration"
            captionContent="Homepage and contacts prototypes’ iteration"
            imgNumber="3.0"
          />

          <Prose>
            <Paragraph>
              During the test phase and after other confrontations with the
              client, a recurring issue emerged;{' '}
              <BoldText>
                the winery location wasn’t easy to reach, causing many visitors
                to get lost
              </BoldText>
              . To address this, I implemented both written directions and a map
              with the correct route highlighted in the contact page.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={mapImg}
            alt="Map custom illustration"
            captionContent="Creating the map"
            imgNumber="3.1"
          />
        </Chapter>

        <Chapter>
          <div>
            <Prose>
              <ChapterTitle>Deliver</ChapterTitle>
            </Prose>
            <AnimatedBadgeList
              badges={['Testing Demo', 'Website deployment']}
            />
          </div>

          <Prose>
            <Paragraph>
              When the prototypes were finalised, I shared the Figma project
              with the frontend developer. We worked closely throughout the
              development process with accessibility as top priority. We ensured
              the website followed the best practices, such as incorporating alt
              text for images and testing the colours’ contrast with
              accessibility checkers. We aimed to pass the WCAG contrast
              criteria providing an easy navigation for users with disabilities.
            </Paragraph>
            <Paragraph>
              The website has been deployed at the following{' '}
              <CaseStudyLink href="https://www.dibarro.com">link</CaseStudyLink>
              .
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={accessibilityAndPerformanceImg}
            alt="Accessibility and performance metrics by Google Lighthouse"
            captionContent="Testing contrasts with accessibility checkers"
            imgNumber="4.0"
          />
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
