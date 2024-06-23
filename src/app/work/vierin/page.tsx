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
  CaseStudyLink,
  BoldText,
} from '@/components/CaseStudyComponents';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/Card';
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
import rankingKeywordsImg from '@/images/case-study/vierin/ranking-keywords.webp';
import userFlowImg from '@/images/case-study/vierin/user-flow.webp';
import balanceTextVisualImg from '@/images/case-study/vierin/balance-text-visual.webp';
import heroVisualImg from '@/images/case-study/vierin/hero-visual.webp';
import photoshopColorCorrectionImg from '@/images/case-study/vierin/photoshop-color-correction.webp';
import treatmentCardsImg from '@/images/case-study/vierin/treatment-cards.webp';
import animationStepsImg from '@/images/case-study/vierin/animation-steps.webp';
import afterEffectsPluginImg from '@/images/case-study/vierin/after-effects-plugin.webp';
import afterEffectsFeaturesImg from '@/images/case-study/vierin/after-effects-features.webp';
import fontsUsedImg from '@/images/case-study/vierin/fonts-used.webp';
import contactImg from '@/images/case-study/vierin/contact.webp';
import floatingBtnImg from '@/images/case-study/vierin/floating-button.webp';
import reviewsImg from '@/images/case-study/vierin/fonts-used.webp';

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
      'Quickly make an appointment ',
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
          title={`Ideating a mobile-first website for a Dental Clinic`}
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
              <BoldText>
                Meeting with the client to gather all technical information
              </BoldText>{' '}
              was crucial in defining the target audience and visual elements.
              The client wanted to have an original approach, evincing the style
              he was looking for.
            </Paragraph>
            <Paragraph>
              After conducting a competitor’s analysis, I discovered some{' '}
              <BoldText>common traits among their websites</BoldText>. All of
              them shared a large number of pages and an old forum-like layout,
              with a lot of explanatory text surrounded by stock photos. This
              type of website usually draws the self-diagnosed users but not
              necessarily costumers.
            </Paragraph>
            <Paragraph>
              The website had to be designed for patients seeking oral hygiene,
              individuals in urgent need of dental procedures, parents bringing
              their children, and those interested in cosmetic treatments like
              lip fillers. All of them aim for{' '}
              <BoldText>quick answers and effortless solutions</BoldText>, due
              either to a great pain or a lack of time.
            </Paragraph>
            <Paragraph>
              Utilising the personal interview survey method I was able to
              gather in-depth information by exploring all the responses of
              these diverse user involved.
            </Paragraph>
          </Prose>

          <UserObjectivesGrid
            objectives={[
              'Who will operate me',
              "Others' experience in clinic",
              'How te clinic can help me',
            ]}
          />

          <Prose>
            <Paragraph>
              Using all the information collected, I built 3 user persona for
              the target user.
            </Paragraph>
          </Prose>

          <UserPersonaTabs userPersonas={userPersonas} />

          <Prose>
            <Paragraph>
              Running the heuristic research, I thought through{' '}
              <BoldText>possible usability choices accordingly</BoldText>. The
              way people perceive a website is influenced by strategic text’s
              usage, the terminology, its visual style and the amount of visuals
              elements. To achieve a reassuring website, I needed to{' '}
              <BoldText>carefully balance the text and the visuals</BoldText>,
              providing context, narration, demonstration and emotions.
            </Paragraph>
            <Paragraph>
              Deciding the narration’s tone, I considered to use whether
              detailed descriptions or concise explanations,{' '}
              <BoldText>evaluating their pros and cons</BoldText>.
            </Paragraph>
          </Prose>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
            {/* Detailed descriptions */}
            <div className="space-y-4">
              <h3 className="text-orange-accent text-sm">
                Detailed descriptions
              </h3>
              <Card inverted>
                <CardHeader>
                  <Badge>Pros</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The texts become precise and in-depth descriptions
                    <br className="hidden lg:block" /> of the treatment process
                  </CardDescription>
                </CardContent>
              </Card>
              <Card inverted>
                <CardHeader>
                  <Badge>Cons</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The patients need to know some medical terms to fully
                    understand detailed descriptions, thus they could cause
                    confusion
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            {/* Concise explanations */}
            <div className="space-y-4">
              <h3 className="text-orange-accent text-sm">
                Concise explanations
              </h3>
              <Card inverted>
                <CardHeader>
                  <Badge>Pros</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The texts define the treatments in few completely
                    <br className="hidden lg:block" />
                    understandable paragraphs
                  </CardDescription>
                </CardContent>
              </Card>
              <Card inverted>
                <CardHeader>
                  <Badge>Cons</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Patients aren’t aware of each decision or action the
                    <br className="hidden lg:block" /> healthcare professional
                    takes
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <Prose>
            <Paragraph>
              Contemplating the advantages and disadvantages with a regard for
              intelligibility,{' '}
              <BoldText>
                concise explanations were the most viable option
              </BoldText>{' '}
              for the treatment section.
            </Paragraph>
            <Paragraph>
              While developing them, I revised all the material gathered, kept
              the core concepts only and identified the most relevant and
              frequently searched keywords related to dental services including
              them in the final content. This ensures the website to be easily
              discoverable and rank higher in search engine results.
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={rankingKeywordsImg}
            alt="Step by step process to find the website using Google"
            captionContent="Keyboard's implementation benefits"
            imgNumber={'1.0'}
          />

          <Prose>
            <Paragraph>
              After reviewing the client’s and target users’ aim, I had to
              discard realistic photos as visuals' option in favour of animated
              sequenes; dental surgery's photos are harsh, in many cases blood
              can be visible and some people find it disturbing. On the other
              hand, customised illustrations could pleasantly represent each
              treatment through expressive characters and simple actions.
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
                'Information architecture',
                'User flows',
                'Typography',
                'Visual design',
                'Wireframes',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>PARAGRAFO DA RIVEDERE</Paragraph>
            <Paragraph>PARAGRAFO DA RIVEDERE</Paragraph>
          </Prose>

          <CaseStudyImage
            src={userFlowImg}
            alt="User Flow of the website"
            captionContent="User Flow"
            imgNumber="2.0"
          />

          <CaseStudyImage
            src={balanceTextVisualImg}
            alt="Skeleton prototype of the homepage where is presented the balance between text and visuals"
            captionContent="Balancing text and visuals"
            imgNumber="2.1"
          />

          <Prose>
            <Paragraph>
              Upon entering the website the Hero Section warmly greets users
              through a hero message apposed to an illustration showcasing one
              of their most common services, oral hygiene.
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
              To enable users to build familiarity with who will assist them,
              the Dental Office introduces its team, providing each practitioner
              with a profile card, comprehensive of role, name and photo.
            </Paragraph>
            <Paragraph>
              I edited the photos in Adobe Photoshop, enhancing them through
              colour correction and ensuring uniform lighting.
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
              explanation of the dental procedure.
            </Paragraph>
          </Prose>

          <CaseStudyImage src={treatmentCardsImg} />

          <Prose>
            <Paragraph>
              Trying to balance professionalism and fun, I created flat
              icon-like illustrations. Simplifying the treatments into icons
              posed a hitch. I tackled it by identifying and sketching 4 states
              first, then I developed and looped them in simple movements to
              represent each specific situation.
            </Paragraph>
          </Prose>

          <CaseStudyImage src={animationStepsImg} />

          <Prose>
            <Paragraph>
              <span className="text-indigo-400">
                The icons were designed in Illustrator and their animations were
                developed in After Effects. To minimize file size, I used{' '}
                <CaseStudyLink href="https://exchange.adobe.com/apps/cc/12557/bodymovin">
                  Bodymovin
                </CaseStudyLink>
                , a Lottie plugin, to export each animation individually as a
                lightweight JSON file, ensuring efficient animations on the
                webpage.
              </span>
            </Paragraph>
          </Prose>

          <CaseStudyImage src={afterEffectsPluginImg} />

          <Prose>
            <Paragraph>
              Unfortunately the plugin doesn’t support many After Effects’
              features yet. It clearly limited my range of action but it
              challenged me to animate all the elements using the path shape
              modifier and the transform features.
            </Paragraph>
          </Prose>

          <CaseStudyImage src={afterEffectsFeaturesImg} />

          <Prose>
            <Paragraph>
              <span className="text-orange-400">
                By incorporating a rounded sans-serif font, a color palette
                consisting of blue-gray with hints of light teal, and employing
                a small border radius, I was able to achieve a design that
                closely aligned with my vision.
              </span>
            </Paragraph>
          </Prose>

          <CaseStudyImage src={fontsUsedImg} />

          <Prose>
            <Paragraph>
              To facilitate user interactions, quick action links such as
              contact the Dental Office are conveniently placed on the top nav
              bar.
            </Paragraph>
          </Prose>

          <CaseStudyImage src={contactImg} />

          <Prose>
            <Paragraph>
              For the mobile version, a floating button is consistently visible
              in the lower right corner of the screen. This button serves as a
              direct call trigger to the Dental Office, proving particularly
              useful in emergency situations.
            </Paragraph>
          </Prose>

          <CaseStudyImage src={floatingBtnImg} />
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
            <Paragraph>QUI VA AGGIUNTO IL PARAGRAFO</Paragraph>
          </Prose>

          <CaseStudyImage src={reviewsImg} />
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
