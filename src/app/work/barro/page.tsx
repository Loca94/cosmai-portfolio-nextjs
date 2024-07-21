import {
  BoldText,
  CaseStudyImage,
  CaseStudyLayout,
  CaseStudyLink,
  Chapter,
  ChapterTitle,
  DesktopBentoGrid,
  MobileOverlappingImages,
  CustomOrderedList,
  CustomOrderedListItem,
  PageIntro,
  Paragraph,
  Prose,
  UserPersonaCard,
} from '@/components/CaseStudyComponents';
import { UserPersona } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { AnimatedBadgeList } from '@/components/animations/AnimatedBadgeList';
import heroImg1 from '@/images/case-study/barro/hero-1.webp';
import heroImg2 from '@/images/case-study/barro/hero-2.webp';
import heroImg3 from '@/images/case-study/barro/hero-3.webp';
import heroImg4 from '@/images/case-study/barro/hero-4.webp';
import heroMobileImg1 from '@/images/case-study/barro/hero-mobile-1.webp';
import heroMobileImg2 from '@/images/case-study/barro/hero-mobile-2.webp';
import matteoImg from '@/images/case-study/barro/matteo.webp';
import oldWebsiteProblemsImg from '@/images/case-study/barro/old-website-problems.webp';
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
              communicative intents. Then I analysed competitor websites and
              benchmarked the client’s old website against them,{' '}
              <BoldText>getting ideas for the redesign</BoldText>.
            </Paragraph>
            <Paragraph>
              Considering the engagement level of the old webpage, I could
              assess{' '}
              <BoldText>
                the content didn’t meet user needs and wasn’t up-to-date
              </BoldText>
              . Furthermore the webpage wasn't optimised for smaller devices.
              Testing the navigation and reviewing content layout I identified
              usability and accessibility issues:
            </Paragraph>

            <CustomOrderedList className="mb-4">
              <CustomOrderedListItem index={1}>
                All default scroll behaviour of touchpads, mouse wheels and
                touchscreen were disabled, instead the{' '}
                <BoldText>
                  scroll was triggered by hovering two buttons
                </BoldText>
              </CustomOrderedListItem>
              <CustomOrderedListItem index={2}>
                The two buttons consisted of small icons, a triangle pointing up
                and the other down. They{' '}
                <BoldText>lacked minimum target size</BoldText>, hindering the
                access of users with difficulty in operating small controls or
                with disabilities
              </CustomOrderedListItem>
              <CustomOrderedListItem index={3}>
                The top of the webpage presented two logos, this was misleading
                and built{' '}
                <BoldText>
                  user’s confusion on the business’ brand identity
                </BoldText>
              </CustomOrderedListItem>
              <CustomOrderedListItem index={4}>
                The website's layout was centred with fixed width and height. It
                was a{' '}
                <BoldText>condensed structure misusing whitespace</BoldText>{' '}
              </CustomOrderedListItem>
              <CustomOrderedListItem index={5}>
                Among the seven navbar links, two directed to a blank page on
                user's click.{' '}
                <BoldText>Unused pages should not be reachable</BoldText>
              </CustomOrderedListItem>
              <CustomOrderedListItem index={6}>
                The gallery page depicted a small amount of low resolution
                images, which resulted decorative and useless,{' '}
                <BoldText>without context or informational value</BoldText>
              </CustomOrderedListItem>
              <CustomOrderedListItem index={7}>
                The written content was a block of right-aligned text fixed in a
                column. It was{' '}
                <BoldText>
                  illegible due to font sizes smaller than 12px
                </BoldText>
              </CustomOrderedListItem>
              <CustomOrderedListItem index={8}>
                The webpage was unresponsive. Smaller viewports were not
                considered and this decision led to a scaled down layout,{' '}
                <BoldText>
                  illegible and inapproachable on smaller devices
                </BoldText>
              </CustomOrderedListItem>
            </CustomOrderedList>

            <Paragraph>
              The creation of a new website required{' '}
              <BoldText>
                content revisions and strategic design changes
              </BoldText>
              , ensuring a comprehensive improvement over the old website.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={oldWebsiteProblemsImg}
            alt="Old website problems"
            captionContent="Old website problems"
            imgNumber="1.0"
          />

          <Prose>
            <Paragraph>
              The website would be{' '}
              <BoldText>
                used by tourists, people interested in the winery and wine
                enthusiasts
              </BoldText>
              . To identify the best solutions for users I had to learn more
              about their problems and put myself in the their shoes. Collecting
              some insights could help me understand their opinions, feelings
              and motivations and then empathise with their challenges. I led
              some interviews with different costumers{' '}
              <BoldText>
                paying attention to their behaviours as well as their verbal
                responses
              </BoldText>
              . Identifying aspects such as discomfort or enthusiasm in the wine
              connoisseurs helped me consider their different needs and distill
              a user persona.
            </Paragraph>
            <Paragraph>
              I fabricated an archetype representative of most target users who
              would be both{' '}
              <BoldText>
                viewing the products and trying to contact the winery to
                purchase or visit
              </BoldText>
              . Creating this concrete instance was effective, as it constantly
              reminded me the user’s standpoint value which sometimes, to
              content the client, can be left behind.
            </Paragraph>
          </Prose>

          <UserPersonaCard userPersona={userPersona} />

          <Prose>
            <Paragraph>
              The persona targeted was clearly{' '}
              <BoldText>detail-oriented but valued speed too</BoldText>. These
              aspects helped me taking decisions easier while designing
              the Contacts, Wines and Detail wine page content.
            </Paragraph>
          </Prose>
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
              I needed to create an enjoyable interface with an efficient and
              streamlined design, settling the old website problems, meeting
              target user’s expectations and needs. In order to grant{' '}
              <BoldText>easy access to the content on smaller screens</BoldText>
              , I chose 4 breakpoints letting me control and adapt the layout on
              different devices. Then I{' '}
              <BoldText>
                collaborated with the client and created a coherent narrative
              </BoldText>
              , effectively communicating the winery’s identity. Finally, to
              guide the user through the website we established a clear
              hierarchy and information architecture ensuring a fast research
              for the information needed.
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
              Since entering the website{' '}
              <BoldText>the user is presented with two options</BoldText>; he
              can choose whether to scroll on and follow the business
              presentation or to click on the cta wines and contact. When
              clicking on the button wines, the user can access to the Wines
              page which provides a list of wines divided in categories, each
              name if hovered shows its bottle preview else clicked the user is
              directed on the Detail wine page.
            </Paragraph>
            <Paragraph>
              Detail wine pages had to{' '}
              <BoldText>
                contain all the informations useful for the customer
              </BoldText>
              , but with a fast and easy access, due to the short amount of time
              of the user. A good balance and hierarchy helped with that, but it
              was challenging to achieve. All the content had to be{' '}
              <BoldText>
                organised within the viewport, or else reachable with a minimal
                scrolling
              </BoldText>
              . By breaking it into sections, I could assign different
              positions, layouts and purposes.
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
              I laid out the{' '}
              <BoldText>
                readable contents on the left and the product’s image on the
                right
              </BoldText>
              , since most people instinctively read the page from left to
              right. Following the wine-sensory characteristics section which
              presents the wine, there is a section dedicated to winemaking
              curiosities composed by collapsible blocks individually
              expandable. With this layout I ensured an efficient use of space
              and a clear information navigation for the user, who can{' '}
              <BoldText>
                quickly access to the information needed without feeling
                overwhelmed
              </BoldText>{' '}
              by tons of text.
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
              <BoldText>
                grayscale colour palette and above-average text dimensions
                ensured a comfortable and smooth reading
              </BoldText>
              ; ample spacing between each block made each section appear
              shorter and approachable. In a mainly monochromatic design,{' '}
              <BoldText>colours stuck out from supporting photos</BoldText>.
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
            captionContent="Fonts’ usage in home section"
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
              development process with accessibility as top priority.{' '}
              <BoldText>
                We ensured the website followed the best practices
              </BoldText>
              , such as incorporating alt text for images and testing the
              colours’ contrast with accessibility checkers. We aimed to pass
              the WCAG contrast criteria providing an easy navigation for users
              with disabilities.
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
