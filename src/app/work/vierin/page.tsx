import {
  BoldText,
  BulletList,
  BulletListItem,
  CaseStudyLayout,
  CaseStudyImage,
  CaseStudyLink,
  Chapter,
  ChapterTitle,
  DesktopBentoGrid,
  MobileOverlappingImages,
  PageIntro,
  Paragraph,
  Prose,
} from '@/components/CaseStudyComponents';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { UserPersona } from '@/lib/types';
import { AnimatedBadgeList } from '@/components/animations/AnimatedBadgeList';
import UserPersonaTabs from '@/components/UserPersonaTabs';
import { Badge } from '@/components/ui/Badge';
import heroImg1 from '@/images/case-study/vierin/hero-1.webp';
import heroImg2 from '@/images/case-study/vierin/hero-2.webp';
import heroImg3 from '@/images/case-study/vierin/hero-3.webp';
import heroImg4 from '@/images/case-study/vierin/hero-4.webp';
import heroMobileImg1 from '@/images/case-study/vierin/hero-mobile-1.webp';
import heroMobileImg2 from '@/images/case-study/vierin/hero-mobile-2.webp';
import monicaImg from '@/images/case-study/vierin/monica.webp';
import georgeImg from '@/images/case-study/vierin/george.webp';
import matildaImg from '@/images/case-study/vierin/matilda.webp';
import userFlowImg from '@/images/case-study/vierin/user-flow.webp';
import balanceTextVisualImg from '@/images/case-study/vierin/balance-text-visual.webp';
import heroVisualImg from '@/images/case-study/vierin/hero-visual.webp';
import photoshopColorCorrectionImg from '@/images/case-study/vierin/photoshop-color-correction.webp';
import treatmentCardsImg from '@/images/case-study/vierin/treatment-cards.webp';
import treatmentIconsImg from '@/images/case-study/vierin/treatment-icons.webp';
import animationStepsImg from '@/images/case-study/vierin/animation-steps.webp';
import afterEffectsPluginImg from '@/images/case-study/vierin/after-effects-plugin.webp';
import afterEffectsFeaturesImg from '@/images/case-study/vierin/after-effects-features.webp';
import fontsUsedImg from '@/images/case-study/vierin/fonts-used.webp';
import contactImg from '@/images/case-study/vierin/contact.webp';
import floatingBtnImg from '@/images/case-study/vierin/floating-button.webp';
import goalsFrustrationsImg from '@/images/case-study/vierin/goals-frustrations-objectives.webp';
import reviewsImg from '@/images/case-study/vierin/reviews.webp';
import rankingKeywordsImg from '@/images/case-study/vierin/ranking-keywords.webp';

const userPersonas: UserPersona[] = [
  {
    fullName: 'Monica Petti',
    avatarSrc: monicaImg,
    background:
      "Monica is a working mum, she is usually really tired, constantly divided among job, household chores and childcare. She is overprotective towards her children therefore she doesn’t trust a service in information's absence or inaccessibility. She needs to quickly understand because she lacks time and energies. Her son has a tooth decay.",
    goals: [
      'Quickly find dental services available',
      'Schedule an appointment for her son',
      'Directly communicate with the dentist',
    ],
    frustrations: [
      'Navigate through multiple pages',
      'Too much text is overwhelming',
      'Time consuming activities',
    ],
  },
  {
    fullName: 'Giorgio Meier',
    avatarSrc: georgeImg,
    background:
      'George is a Swiss architect. He’s often travelling among Italy, France and Germany. He has a second home in Valle d’Aosta. He loves eating crunchy foods and mountain-biking. He has an irrational fear of blood. During his holidays he accidentally broke one of his front tooth. He needs urgent treatment/care.',
    goals: [
      'Quickly make an appointment',
      'Send tooth’s photo via WhatsApp',
      'Get prompt advices',
    ],
    frustrations: ['Anxious about dental procedures', 'Get delayed responses'],
  },
  {
    fullName: 'Matilda Lorenzi',
    avatarSrc: matildaImg,
    background:
      'Matilda is a university student. She is young, self-absorbed and social network addicted. She spends most of her time doing self-care or studying. She thinks that her lips are too thin. She recently discovered about the lip filler treatment and she wants to try it. She needs to find a place where this service is provided.',
    goals: [
      'Ensure there is a qualified team',
      'Book appointments via WhatsApp',
      'Lip filler effect duration info',
    ],
    frustrations: ['Not finding reviews', 'Book appointments by phone call'],
  },
];

export default function DentalWebsite() {
  return (
    <>
      <CaseStudyLayout
        projectUrl="https://www.dentista-aosta.com/"
        prevUrl="/work/barro"
        nextUrl="/work/barro"
      >
        <PageIntro
          title={`Ideating a "mobile-first" website for a Dental Clinic`}
          tools={['Figma', 'After Effects', 'Photoshop', 'Illustrator']}
        />
        <MobileOverlappingImages
          className="mt-9 md:hidden"
          images={[
            { src: heroMobileImg1, alt: 'Hero section of the website' },
            { src: heroMobileImg2, alt: 'Conservative Dental treatment card' },
          ]}
        />
        <DesktopBentoGrid
          className="mt-12 hidden md:block"
          images={[
            { src: heroImg1, alt: 'Hero section of Vierin website' },
            { src: heroImg2, alt: "Happy customer's reviews" },
            { src: heroImg3, alt: 'Esay contact section' },
            { src: heroImg4, alt: 'Dental office treatments sections' },
          ]}
        />

        <Chapter className="mt-15">
          <Prose>
            <ChapterTitle>Overview</ChapterTitle>
            <Paragraph>
              After several years in business, the dentist’s son took over the
              family’s dental clinic, known for its high standards in dental
              treatments and patient care.
            </Paragraph>
            <Paragraph>
              He wanted to reach a broader audience and sought a new website to
              attract more patients and compete effectively with other dental
              clinics.
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
                'Competitors’ analysis',
                'Heuristic research',
                'User persona',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>
              The website was intended for{' '}
              <BoldText>reaching and attracting new possible patients</BoldText>
              , since the dental clinic offers mostly an in-person service, the
              user needs to be physically there to access the service. Thus we
              were aiming for Google’s impressions and clicks of a selected
              target user.
            </Paragraph>
            <Paragraph>
              Meeting with the client to gather all technical information was
              crucial in{' '}
              <BoldText>
                defining the client objectives, target user and visual style
              </BoldText>
              . The client wanted to differentiate his website
              from competitor's, trying an original approach and stand out,
              evincing the style he was looking for.
            </Paragraph>
            <Paragraph>
              While analysing competitor websites I identified their content
              strategy and{' '}
              <BoldText>
                discovered some common traits among their websites
              </BoldText>
              . All of them shared a large number of pages and an old forum-like
              layout, with a lot of explanatory text surrounded by stock photos.
              This type of website usually draws users trying to identify their
              medical conditions reading resources on the Internet but not
              necessarily searching for a dentist appointment.
            </Paragraph>
          </Prose>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
            {/* Strengths */}
            <Card inverted>
              <CardHeader>
                <Badge>Strengths</Badge>
              </CardHeader>
              <CardContent>
                <BulletList className="text-sm">
                  <BulletListItem>
                    Find precise descriptions of the treatment process
                  </BulletListItem>
                  <BulletListItem>
                    Educates patients about benefits and potential risks of
                    treatments
                  </BulletListItem>
                  <BulletListItem>
                    Increase the time users spend on the website
                  </BulletListItem>
                </BulletList>
              </CardContent>
            </Card>
            {/* Weaknesses */}
            <Card inverted>
              <CardHeader>
                <Badge>Weaknesses</Badge>
              </CardHeader>
              <CardContent>
                <BulletList className="text-sm">
                  <BulletListItem>
                    Need medical terms’ knowledge to understand
                  </BulletListItem>
                  <BulletListItem>
                    Risk to skim the content and miss key points
                  </BulletListItem>
                  <BulletListItem>
                    Harder to read, especially on mobile
                  </BulletListItem>
                </BulletList>
              </CardContent>
            </Card>
          </div>

          <Prose>
            <Paragraph>
              Narrowing down the target user, our selection was composed of
              patients seeking oral hygiene, individuals in urgent need of
              dental procedures, parents bringing their children and those
              interested in cosmetic treatments like lip fillers. By
              interviewing and{' '}
              <BoldText>
                analysing the responses of the diverse users involved
              </BoldText>{' '}
              I was able to build 3 user persona.
            </Paragraph>
          </Prose>

          <UserPersonaTabs userPersonas={userPersonas} />

          <Prose>
            <Paragraph>
              I could assess{' '}
              <BoldText>
                most of them aimed for quick answers and effortless solutions
              </BoldText>
              , due either to a great pain or a lack of time. Thus I needed to
              lower cognitive load on users avoiding to compromise their
              reasoning and decision making. Using a concise jargon-free
              language and breaking content in short easily digestible
              paragraphs, I could{' '}
              <BoldText>
                prevent users from feeling overwhelmed by improving content’s
                understanding
              </BoldText>
              . Adding consistent and customised illustrations I could provide
              a visual support to texts, evoke users’ positive emotions and make
              the user experience memorable.
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
                'Informations flows',
                'Typography',
                'Visual design',
                'Wireframes',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>
              Once the connection was set and decisions taken, it was time to
              meet{' '}
              <BoldText>
                the client’s and potential patients’ expectations
              </BoldText>
              , designing the informations’ structure and the experience for the
              user.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={userFlowImg}
            alt="User Flow of the website"
            captionContent="User Flow"
            imgNumber="2.0"
          />

          <Prose>
            <Paragraph>
              I carefully balanced strategic text blocks and positive tailored
              visuals, to{' '}
              <BoldText>
                achieve a good content's readability and cohesive visual style
              </BoldText>
              .
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={balanceTextVisualImg}
            alt="Skeleton prototype of the homepage where is presented the balance between text and visuals"
            captionContent="Balancing text and visuals"
            imgNumber="2.1"
          />

          <Prose>
            <Paragraph>
              Upon entering the website, the{' '}
              <BoldText>Hero Section warmly greets the users</BoldText> through
              a relevant captivating headline, speaking directly to their needs,
              apposed to an attention-grabbing visual, showcasing one of their
              most common services. With these decisions, I wanted to prompt the
              users to linger on the website for treatments and appointment
              informations and{' '}
              <BoldText>
                lead them to envision themselves accessing the service
              </BoldText>
              .
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={heroVisualImg}
            alt="Hero image with it's color palette"
            captionContent="Hero visual"
            imgNumber="2.2"
          />

          <Prose>
            <Paragraph>
              To enable users to{' '}
              <BoldText>build familiarity with who will assist them</BoldText>,
              the Dental Clinic introduces its team, providing each practitioner
              with a profile card, comprehensive of role, name and photo.
            </Paragraph>
            <Paragraph>
              Aiming for the best achievable outcome, I edited the profile
              photos in Adobe Photoshop, retouching minor imperfections,
              enhancing them through colour correction and ensuring uniform
              lighting.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={photoshopColorCorrectionImg}
            alt="Photoshop application while doing color correction"
            captionContent="Team profile cards photos' colour correction"
            imgNumber="2.3"
          />

          <Prose>
            <Paragraph>
              A grid was the cleanest choice to organise each service. All 12
              cards contained a customised animated sequence and a concise
              explanation of the dental procedure. While developing
              explanations, I revised all the material gathered and kept the
              core concepts only. Then I identified the most relevant and
              frequently searched keywords related to dental treatments and
              included them in the final content.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={treatmentCardsImg}
            alt="UI of the treatment cards"
            captionContent="Treatment card UI"
            imgNumber="2.4"
          />

          <Prose>
            <Paragraph>
              By searching dental procedures on the internet, many disturbing
              images can pop out and easily scare a patient already anxious and
              in pain. I was intent on making users, rushing on this website
              worried about a sore tooth,{' '}
              <BoldText>
                sparkle with positive emotions while exploring the treatments
                section
              </BoldText>
              .
            </Paragraph>
            <Paragraph>
              Hence to support treatments explanations, I provided customised
              Illustrations graphically conceptualising each scenario and
              allowing users’ imagination to fuel their understanding. These{' '}
              <BoldText>
                images had to be pleasant visual aids to help users grasp
                informations
              </BoldText>
              , present a unique style to be memorable and depict 12 different
              concepts. I tried different visual’s styles, assessing concept to
              clarify and available space in cards’ layout. After many
              considerations and some iterations, I tailored a flat icon-like
              style, elevated but straightforward, showcasing personality and
              aligning with the clinic’s brand. Then I created 4 cute characters
              and a rounded tooth to involve in the scenes as main figures,
              helping me in the representations.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={treatmentIconsImg}
            alt="Group of frames of the treatment's animations"
            captionContent="Illustrations' creation"
            imgNumber="2.5"
          />

          <Prose>
            <Paragraph>
              Transforming all the scenes into animations was definitely
              challenging, due to layout and time constraints previously set. I
              chose which movements and changes over time various elements’ had
              to have,{' '}
              <BoldText>identifying the anchor points for the actions</BoldText>
              .
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={animationStepsImg}
            alt="Four phases of an animations"
            captionContent="Animation 4 states process"
            imgNumber="2.6"
          />

          <Prose>
            <Paragraph>
              I created 4 keyframes for each sequence on Illustrator and then
              developed their animations in After Effects, producing the final
              loops. In order to minimise the file size, I used the Lottie
              plugin{' '}
              <CaseStudyLink href="https://exchange.adobe.com/apps/cc/12557/bodymovin">
                Bodymovin
              </CaseStudyLink>{' '}
              to export each sequence individually as a lightweight JSON file.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={afterEffectsPluginImg}
            alt="Layout fo the Bodymovin plugin"
            captionContent="Bodymovin plugin for After Effects"
            imgNumber="2.7"
          />

          <Prose>
            <Paragraph>
              Unfortunately the plugin doesn’t support many After Effects’
              features yet. It clearly limited my range of action but it{' '}
              <BoldText>
                challenged me to animate all the elements using the path shape
                modifier and the transform features
              </BoldText>
              . All the light weighted animations piled up, each reaching a
              better optimisation’s level for the webpage in the deliver stage.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={afterEffectsFeaturesImg}
            alt="After Effects' features used"
            captionContent="After Effects' features used"
            imgNumber="2.8"
          />

          <Prose>
            <Paragraph>
              When choosing typefaces, I considered possible emotive responses
              to the letterforms and if multiple weights and styles were
              included. I selected a font that aligned with the brand and
              improved overall readability; a rounded sans-serif font meant for
              display typography and its non-rounded terminal version.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={fontsUsedImg}
            alt="Fonts' usage in home screen"
            captionContent="Fonts' usage in home screen"
            imgNumber="2.9"
          />

          <Prose>
            <Paragraph>
              To facilitate user access to informations, I placed on the top nav
              bar quick action links, such as contact. These links on user’s
              click scroll to the relative section,{' '}
              <BoldText>
                saving user’s time in the information’s research
              </BoldText>
              .
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={contactImg}
            alt="Nav bar quick action links"
            captionContent="Nav bar quick action links"
            imgNumber="2.10"
          />

          <Prose>
            <Paragraph>
              For the mobile version, a floating button is consistently visible
              in the lower right corner of the screen. This button serves as a{' '}
              <BoldText>direct call trigger to the Dental Office</BoldText>,
              proving particularly useful in emergency situations.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={floatingBtnImg}
            alt="Mobile floating button style guide"
            captionContent="Mobile floating button style guide"
            imgNumber="2.11"
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
                'Testing Prototypes',
                'Collecting feedbacks',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>
              After testing the prototypes, I reviewed all the user’s goals and
              frustrations one last time,{' '}
              <BoldText>
                making sure the user experience fulfilled expected standards
              </BoldText>
              .
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={goalsFrustrationsImg}
            alt="Recap of all the goals and frustrations solved in the project"
            captionContent="User goals met and frustrations solved"
            imgNumber="3.0"
          />

          <Prose>
            <Paragraph>
              By visiting the website, the user wanted to quickly contact, gain
              informations and reassurance. The primary objectives were met but
              the{' '}
              <BoldText>
                service’s quality wasn’t properly addressed and disclosed
              </BoldText>
              . Featuring a testimonial section could have helped users feel
              confident about the dental clinic’s ability to meet their needs.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={reviewsImg}
            alt="Prototype of the testimonial section"
            captionContent="Testimonial section"
            imgNumber="3.1"
          />

          <Prose>
            <Paragraph>
              Over the years the Dental clinic had encouraged patients to leave
              reviews, reaching a rating of 4.9 on Google Maps. Carefully
              selecting some positive reviews, I designed the new section with
              different patients’ standpoints about the clinic. To this extent I
              depicted different situations,{' '}
              <BoldText>
                fulfilling the user’s sense of belonging and demonstrating the
                dental office's prestige
              </BoldText>
              .
            </Paragraph>
          </Prose>
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
              <BoldText>I collaborated closely with the developer</BoldText>,
              visioned the final figma file, gave support in development and
              discussed various optimisations in order to have faster load times
              and to rank higher in search engine results. To{' '}
              <BoldText>reduce the visual load on users</BoldText> and speed up
              the website's loading, we decided to set the treatments' cards
              animations on play only when the user's cursor is on focus on a
              card otherwise always on pause.
            </Paragraph>
            <Paragraph>
              The website was successfully deployed on the following{' '}
              <CaseStudyLink href="https://www.dentista-aosta.com/">
                link
              </CaseStudyLink>
              .
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={rankingKeywordsImg}
            alt="Steps to find the website on Google"
            captionContent="Keyword's implementation benefits"
            imgNumber="4.0"
          />
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
