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
} from '@/components/CaseStudyComponents';
import { AnimatedBadgeList } from '@/components/animations/AnimatedBadgeList';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/Card';
import heroImage1 from '@/images/case-study/vierin/hero-1.webp';
import heroImage2 from '@/images/case-study/vierin/hero-2.webp';
import heroImage3 from '@/images/case-study/vierin/hero-3.webp';
import heroImage4 from '@/images/case-study/vierin/hero-4.webp';
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
import exampleImage from '@/images/example-image.jpeg';
import { UserPersona } from '@/lib/types';
import userPersonaMatteo from '@/images/case-study/barro/dibarro-avatar-matteo.png';
import UserPersonaTabs from '@/components/UserPersonaTabs';
import { Badge } from '@/components/ui/Badge';

const userPersonas: UserPersona[] = [
  {
    fullName: 'Monica Petti',
    avatarSrc: userPersonaMatteo,
    background:
      "Monica is a working mum, she is usually really tired, constantly divided among job, household chores and childcare. She is overprotective towards her children therefore she doesn’t trust a service in information's absence or inaccessibility. She needs to quickly understand because she lacks time and energies. Her son has a tooth decay.",
    goals: ['goal 1', 'goal 2', 'goal 3'],
    frustrations: ['frustration 1', 'frustration 2', 'frustration 3'],
  },
  {
    fullName: 'Giorgio',
    avatarSrc: userPersonaMatteo,
    background:
      "Monica is a working mum, she is usually really tired, constantly divided among job, household chores and childcare. She is overprotective towards her children therefore she doesn’t trust a service in information's absence or inaccessibility. She needs to quickly understand because she lacks time and energies. Her son has a tooth decay.",
    goals: ['goal 1', 'goal 2', 'goal 3'],
    frustrations: ['frustration 1', 'frustration 2', 'frustration 3'],
  },
  {
    fullName: 'Lorenzo',
    avatarSrc: userPersonaMatteo,
    background:
      "Monica is a working mum, she is usually really tired, constantly divided among job, household chores and childcare. She is overprotective towards her children therefore she doesn’t trust a service in information's absence or inaccessibility. She needs to quickly understand because she lacks time and energies. Her son has a tooth decay.",
    goals: ['goal 1', 'goal 2', 'goal 3'],
    frustrations: ['frustration 1', 'frustration 2', 'frustration 3'],
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
            { src: heroImage2, alt: 'Hero section of the website' },
            { src: heroImage3, alt: 'Conservative Dental treatment card' },
          ]}
        />
        <DesktopBentoGrid
          className="mt-12 hidden md:block"
          images={[
            { src: heroImage1, alt: 'Hero section of Vierin website' },
            { src: heroImage2, alt: "Happy customer's reviews" },
            { src: heroImage3, alt: 'Esay contact section' },
            { src: heroImage4, alt: 'Dental office treatments sections' },
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
              Meeting with the client to gather all technical information was
              crucial in defining the target audience and visual elements. The
              client wanted to have an original approach, evincing the style he
              was looking for.
            </Paragraph>
            <Paragraph>
              After conducting a competitor’s analysis, I discovered some common
              traits among their websites. All of them shared a large number of
              pages and an old forum-like layout, with a lot of explanatory text
              surrounded by stock photos. This type of website usually draws the
              self-diagnosed users but not necessarily costumers.
            </Paragraph>
            <Paragraph>
              The website was designed for patients seeking oral hygiene,
              individuals in urgent need of dental procedures, parents bringing
              their children, and those interested in cosmetic treatments like
              lip fillers. All of them aim for quick answers and effortless
              solutions, due either to a great pain or a lack of time.
            </Paragraph>
            <Paragraph>
              Utilising the personal interview survey method I was able to
              gather in-depth information by exploring the detailed responses of
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
              Running the heuristic research, I thought through possible
              usability choices accordingly. The way people perceive a
              website is influenced by strategic text’s usage, the terminology,
              its visual style and the amount of visuals elements. To achieve a
              reassuring website, I needed to carefully balance the text and the
              visuals, providing context, narration, demonstration and emotions.
            </Paragraph>
            <Paragraph>
              Deciding the narration’s tone, I considered to use whether
              detailed descriptions or concise explanations, evaluating their
              pros and cons.
            </Paragraph>
          </Prose>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Detailed descriptions */}
            <div className="space-y-4">
              <h3 className="text-sm text-slate-400">Detailed descriptions</h3>
              <Card inverted>
                <CardHeader>
                  <Badge>Pros</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The texts become precise and in-depth descriptions of the
                    treatment process
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
              <h3 className="text-sm text-slate-400">Concise explanations</h3>
              <Card inverted>
                <CardHeader>
                  <Badge>Pros</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The texts define the treatments in few completely
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
                    healthcare professional takes
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <Prose>
            <Paragraph>
              Contemplating the advantages and disadvantages with a regard for
              intelligibility, concise explanations were the most viable option
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

          <CaseStudyImage src={rankingKeywordsImg} />

          <Prose>
            <Paragraph>
              After reviewing the client’s and target user’ aim, realistic
              photos couldn’t possibly be used as visuals; dental surgery's
              photos are harsh, in many cases blood can be visible and some
              people find it disturbing. Customised illustrations could
              pleasantly represent each treatment through expressive characters
              and simple actions.
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
                'Iconography',
                'Color Theory',
                'Wireframes',
              ]}
            />
          </div>

          <Prose>
            <Paragraph>
              I needed to understand the clinic’s target audience and their
              needs. I conducted a competitive analysis to identify the
              strengths and weaknesses of other dental clinics. This helped me
              to understand the market and the expectations of potential
              patients.
            </Paragraph>
            <Paragraph>
              The image below illustrates the Information Architecture and User
              Flow diagrams developed for the project:
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={userFlowImg}
            alt="User Flow of the website"
            captionContent="User Flow"
          />

          <CaseStudyImage
            src={balanceTextVisualImg}
            alt="Skeleton prototype of the homepage where is presented the balance between text and visual"
            captionContent="Balance between text and visual"
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
          />

          <Prose>
            <Paragraph>
              To enable users to build familiarity with who will assist them,
              the Dental Office introduces its team, providing each practitioner
              with a profile card.
            </Paragraph>
            <Paragraph>
              <span className="text-indigo-400">
                Given my expertise with the Adobe suite, I edited the photos
                using Adobe Photoshop.
                <br />
                <br />
                What I did
                <br />
                - Color correction of each profile photo.
                <br />
                - Ensure uniform lighting across all images.
                <br />
                - Retouch minor imperfections to maintain a professional
                appearance.
                <br />
              </span>
            </Paragraph>
          </Prose>

          <CaseStudyImage
            src={photoshopColorCorrectionImg}
            alt="Photoshop application while doing color correction"
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
