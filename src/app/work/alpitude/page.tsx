import AnimatedBadgeList from '@/components/animations/AnimatedBadgeList';
import { FadeInReverse } from '@/components/animations/FadeIn';
import Chapter from '@/components/case-study/content/Chapter';
import ChapterTitle from '@/components/case-study/content/ChapterTitle';
import Paragraph from '@/components/case-study/content/Paragraph';
import Prose from '@/components/case-study/content/Prose';
import CaseStudyLayout from '@/components/case-study/layout/CaseStudyLayout';
import PageIntro from '@/components/case-study/layout/PageIntro';
import CaseStudyImage from '@/components/case-study/media/CaseStudyImage';
import DesktopBentoGrid from '@/components/case-study/media/DesktopBentoGrid';
import Tabs, { Tab } from '@/components/case-study/ui/Tabs';

import heroImg1 from '@/images/case-study/alpitude/hero-1.webp';
import heroImg2 from '@/images/case-study/alpitude/hero-2.webp';
import heroImg3 from '@/images/case-study/alpitude/hero-3.webp';
import heroImg4 from '@/images/case-study/alpitude/hero-4.webp';

import theLogoImg from '@/images/case-study/alpitude/logos/the-logo.webp';
import logoFirstBatchImg from '@/images/case-study/alpitude/logos/logo-first-batch.webp';
import logoSecondBatchImg from '@/images/case-study/alpitude/logos/logo-second-batch.webp';
import logoThirdBatchImg from '@/images/case-study/alpitude/logos/logo-third-batch.webp';
import logoFinalBatchImg from '@/images/case-study/alpitude/logos/logo-final-batch.webp';
import logoSparesImg from '@/images/case-study/alpitude/logos/logo-spares.webp';

import brandColorsImg from '@/images/case-study/alpitude/brand-colors/brand-colors.webp';
import otherColorsImg from '@/images/case-study/alpitude/brand-colors/other-colors.webp';
import colorVariationsImg from '@/images/case-study/alpitude/brand-colors/color-variations.webp';

import extraAvatarsImg from '@/images/case-study/alpitude/avatars/extra-avatars.webp';
import someAvatarsImg from '@/images/case-study/alpitude/avatars/some-avatars.webp';

import mapAostaValleyImg from '@/images/case-study/alpitude/illustrations/map-aosta-valley.webp';
import heroImageSummerImg from '@/images/case-study/alpitude/illustrations/hero-image-summer.webp';
import heroImageWinterImg from '@/images/case-study/alpitude/illustrations/hero-image-winter.webp';
import illustration1Img from '@/images/case-study/alpitude/illustrations/illustration-1.webp';
import illustration2Img from '@/images/case-study/alpitude/illustrations/illustration-2.webp';
import illustration3Img from '@/images/case-study/alpitude/illustrations/illustration-3.webp';
import illustration4Img from '@/images/case-study/alpitude/illustrations/illustration-4.webp';
import illustration5Img from '@/images/case-study/alpitude/illustrations/illustration-5.webp';

import googleSlideThemeImg from '@/images/case-study/alpitude/google-slide/google-slide-theme.webp';
import googleSlideLayoutImg from '@/images/case-study/alpitude/google-slide/google-slide-layout.webp';
import googleSlideGraphicsImg from '@/images/case-study/alpitude/google-slide/google-slide-graphics.webp';

import mailImg from '@/images/case-study/alpitude/mail/mail.webp';
import mailLayoutsImg from '@/images/case-study/alpitude/mail/mail-layouts.webp';
import mailGraphicsImg from '@/images/case-study/alpitude/mail/mail-graphics.webp';
import mailIllustrationsImg from '@/images/case-study/alpitude/mail/mail-illustrations.webp';

import designSystemImg from '@/images/case-study/alpitude/product-design/design-system.webp';
import prototypeImg from '@/images/case-study/alpitude/product-design/prototype.webp';

export default function DigitalStartupWebsite() {
  const visualIdentityLogoTabs: Tab[] = [
    {
      id: 'img1',
      label: 'The Logo',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={theLogoImg}
            alt="The logo design, for both the Winter and the Summer seasons"
            captionContent="The Logo, the end of the process."
            imgNumber="1.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'First Batch',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={logoFirstBatchImg}
            alt="Logo first batch, brainstorming evolution."
            captionContent="Logo first batch, brainstorming evolution."
            imgNumber="1.1"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img3',
      label: 'Second Batch',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={logoSecondBatchImg}
            alt="Logo second batch, brainstorming evolution."
            captionContent="Logo second batch, brainstorming evolution."
            imgNumber="1.2"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img4',
      label: 'Third Batch',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={logoThirdBatchImg}
            alt="Logo third batch, brainstorming evolution."
            captionContent="Logo third batch, brainstorming evolution."
            imgNumber="1.3"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img5',
      label: 'Final Batch',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={logoFinalBatchImg}
            alt="Logo final batch, brainstorming evolution."
            captionContent="Logo final batch, brainstorming evolution."
            imgNumber="1.4"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img6',
      label: 'Spares',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={logoSparesImg}
            alt="Logo spares, brainstorming other shapes and testing possible colors."
            captionContent="Logo spares, brainstorming other shapes and testing possible colors."
            imgNumber="1.5"
          />
        </FadeInReverse>
      ),
    },
  ];
  const visualIdentityBrandColorsTabs: Tab[] = [
    {
      id: 'img1',
      label: 'Brand Colors',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={brandColorsImg}
            alt="Defining the primary colors."
            captionContent="Defining the primary colors."
            imgNumber="2.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'Variations',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={otherColorsImg}
            alt="Defining the primary color variations for a possible dark mode."
            captionContent="Defining the primary color variations for a possible dark mode."
            imgNumber="2.1"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img3',
      label: 'Others',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={colorVariationsImg}
            alt="Other colors used for highlights and brand assets."
            captionContent="Other colors used for highlights and brand assets."
            imgNumber="2.2"
          />
        </FadeInReverse>
      ),
    },
  ];
  const visualIdentityAvatarsTabs: Tab[] = [
    {
      id: 'img1',
      label: 'Extra Avatars',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={extraAvatarsImg}
            alt="Some of the extra avatars — pre and post coloring."
            captionContent="Some of the extra avatars — pre and post coloring."
            imgNumber="3.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'Some Avatars',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={someAvatarsImg}
            alt="Some of the 135 avatars."
            captionContent="Some of the 135 avatars."
            imgNumber="3.1"
          />
        </FadeInReverse>
      ),
    },
  ];
  const visualIdentityIllustrations1Tabs: Tab[] = [
    {
      id: 'img1',
      label: 'Aosta Valley Map',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={mapAostaValleyImg}
            alt="The map representing Aosta Valley to show and help explain the different zones."
            captionContent="The map representing Aosta Valley to show and help explain the different zones."
            imgNumber="4.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'Hero Image — Summer',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={heroImageSummerImg}
            alt="Hero Image — Summer"
            captionContent="Hero Image — Summer"
            imgNumber="4.1"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img3',
      label: 'Hero Image — Winter',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={heroImageWinterImg}
            alt="Hero Image — Winter"
            captionContent="Hero Image — Winter"
            imgNumber="4.2"
          />
        </FadeInReverse>
      ),
    },
  ];
  const visualIdentityIllustrations2Tabs: Tab[] = [
    {
      id: 'img1',
      label: 'Illustration 1',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={illustration1Img}
            alt="Illustration 1."
            captionContent="Illustration 1."
            imgNumber="5.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'Illustration 2',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={illustration2Img}
            alt="Illustration 2."
            captionContent="Illustration 2."
            imgNumber="5.1"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img3',
      label: 'Illustration 3',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={illustration3Img}
            alt="Illustration 3."
            captionContent="Illustration 3."
            imgNumber="5.2"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img4',
      label: 'Illustration 4',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={illustration4Img}
            alt="Illustration 4."
            captionContent="Illustration 4."
            imgNumber="5.3"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img5',
      label: 'Illustration 5',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={illustration5Img}
            alt="Illustration 5."
            captionContent="Illustration 5."
            imgNumber="5.4"
          />
        </FadeInReverse>
      ),
    },
  ];
  const visualIdentityGoogleSlideTabs: Tab[] = [
    {
      id: 'img1',
      label: 'Google Slide Theme',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={googleSlideThemeImg}
            alt="Custom Google Slides theme created for the startup to ensure clear communication and consistent brand alignment."
            captionContent="Custom Google Slides theme created for the startup to ensure clear communication and consistent brand alignment."
            imgNumber="6.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'Layouts Creation',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={googleSlideLayoutImg}
            alt="Custom Google Slides theme layouts creation."
            captionContent="Custom Google Slides theme layouts creation."
            imgNumber="6.1"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img3',
      label: 'Graphics',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={googleSlideGraphicsImg}
            alt="Some of the graphics of the custom Google Slides theme."
            captionContent="Some of the graphics of the custom Google Slides theme."
            imgNumber="6.2"
          />
        </FadeInReverse>
      ),
    },
  ];
  const visualIdentityMailTabs: Tab[] = [
    {
      id: 'img1',
      label: 'Mail',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={mailImg}
            alt="BigMailer example mail sent to users."
            captionContent="BigMailer example mail sent to users."
            imgNumber="7.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'Mail Layouts',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={mailLayoutsImg}
            alt="Some of the mail formats designed on Figma and built with BigMailer."
            captionContent="Some of the mail formats designed on Figma and built with BigMailer."
            imgNumber="7.1"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img3',
      label: 'Mail Graphics',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={mailGraphicsImg}
            alt="Some of the graphics created for the mails."
            captionContent="Some of the graphics created for the mails."
            imgNumber="7.2"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img4',
      label: 'Illustrations',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={mailIllustrationsImg}
            alt="Some of the illustrations created for the mails."
            captionContent="Some of the illustrations created for the mails."
            imgNumber="7.3"
          />
        </FadeInReverse>
      ),
    },
  ];
  const productDesignTabs: Tab[] = [
    {
      id: 'img1',
      label: 'Design System',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={designSystemImg}
            alt="The design system created with the developer."
            captionContent="The design system created with the developer."
            imgNumber="8.0"
          />
        </FadeInReverse>
      ),
    },
    {
      id: 'img2',
      label: 'Prototypes',
      content: (
        <FadeInReverse>
          <CaseStudyImage
            src={prototypeImg}
            alt="High fidelity prototype designed in Figma."
            captionContent="High fidelity prototype designed in Figma."
            imgNumber="8.1"
          />
        </FadeInReverse>
      ),
    },
  ];

  return (
    <>
      <CaseStudyLayout
        projectUrl="https://www.dibarro.com"
        prevUrl="/work/alpitude"
        nextUrl="/work/vierin"
      >
        <PageIntro
          title="Creating visual identity, design system and user expericence for a Digital Startup"
          tools={['Figma', 'Photoshop', 'Sketch', 'Illustrator']}
        />
        <DesktopBentoGrid
          className="mt-12 hidden md:block"
          images={[
            { src: heroImg1, alt: '' },
            { src: heroImg2, alt: '' },
            { src: heroImg3, alt: '' },
            { src: heroImg4, alt: '' },
          ]}
        />

        <Chapter className="mt-15">
          <Prose>
            <ChapterTitle>Overview</ChapterTitle>
            <Paragraph>
              The digital startup’s aim was to provide informations about
              outdoor sports activities in Aosta Valley through a website both
              mobile-first and user-friendly.
            </Paragraph>
            <Paragraph>
              The website needed to show multiple options for tourists and
              sports enthusiasts, allowing them to quickly access informations,
              even on mobile devices with low connectivity in mountainous areas.
            </Paragraph>
            <Paragraph>
              The team working on this project was cross-functional and I was
              responsible for the visual identity creation and website
              development with the developer.{' '}
            </Paragraph>
          </Prose>
        </Chapter>

        <Chapter>
          <div>
            <Prose>
              <ChapterTitle>Visual Identity</ChapterTitle>
            </Prose>
            <AnimatedBadgeList badges={['Logo', 'Colors', 'Imagery']} />
          </div>

          <Prose>
            <Paragraph>
              The startup’s identity centered around five key concepts: digital,
              sport, mountains, and guidance. Balancing these visually was a
              creative challenge that led to an iterative and engaging process,
              one that pushed me to shift perspectives, test bold directions,
              and refine forms and colors along the way.
            </Paragraph>
          </Prose>

          <Tabs tabs={visualIdentityLogoTabs} defaultActiveId="img1" />
          <Tabs tabs={visualIdentityBrandColorsTabs} defaultActiveId="img1" />
          <Tabs tabs={visualIdentityAvatarsTabs} defaultActiveId="img1" />
          <Tabs
            tabs={visualIdentityIllustrations1Tabs}
            defaultActiveId="img1"
          />
          <Tabs
            tabs={visualIdentityIllustrations2Tabs}
            defaultActiveId="img1"
          />
          <Tabs tabs={visualIdentityGoogleSlideTabs} defaultActiveId="img1" />
          <Tabs tabs={visualIdentityMailTabs} defaultActiveId="img1" />

          <Prose>
            <Paragraph>
              As the project evolved, each design choice and asset built upon
              the last, gradually transformed the startup’s mission into a
              cohesive visual language and identity resonating consistently
              across the digital experience.
            </Paragraph>
          </Prose>
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Product Design</ChapterTitle>
            <AnimatedBadgeList badges={['Design system', 'Prototype']} />
          </Prose>

          <Prose>
            <Paragraph>
              Focused on usability and accessibility, I refined the
              application’s UX and crafted high-fidelity UI designs in Figma to
              deliver a smooth, intuitive experience for users. Collaborating
              closely with the developer throughout the design and
              implementation phases I built a design system that maintained
              consistency as the product evolved.
            </Paragraph>
          </Prose>

          <Tabs tabs={productDesignTabs} defaultActiveId="img1" />
        </Chapter>

        {/*<Chapter>
          <Prose>
            <ChapterTitle>The Released Product</ChapterTitle>
            <AnimatedBadgeList badges={['Videos']} />
          </Prose>

          <Prose>
            <Paragraph>
              The final website was successfully deployed and brought together
              all aspects of the project into a unified digital experience.
              Although the startup is no longer operating and the website has
              been taken offline, these videos capture the final live version,
              showcasing the design, interactions, and overall digital
              experience as it was originally deployed.
            </Paragraph>
          </Prose>
        </Chapter>*/}
      </CaseStudyLayout>
    </>
  );
}
