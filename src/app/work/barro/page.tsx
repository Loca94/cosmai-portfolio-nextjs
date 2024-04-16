import {
  Chapter,
  ChapterTitle,
  DesktopBentoGrid,
  MobileOverlappingImages,
  PageIntro,
  Paragraph,
  Prose,
  CaseStudyLayout,
} from '@/components/CaseStudyComponents';
import { GrayscaleTransitionImage } from '@/components/animations/GrayscaleTransitionImage';
import exampleImage from '@/images/example-image.jpeg';
import exampleImage2 from '@/images/example-image-2.avif';

export default function WineryWebsite() {
  return (
    <>
      <CaseStudyLayout>
        <PageIntro
          title={`Designing a Storybrand Website for a family-owned winery`}
          tools={['Figma', 'Photoshop']}
        />
        <MobileOverlappingImages className="mt-9 md:hidden" />
        <DesktopBentoGrid className="mt-12 hidden md:block" />

        <Chapter>
          <Prose>
            <ChapterTitle>Project</ChapterTitle>
            <Paragraph>
              Lately I had the chance of working on Di Barrò’s new website as a
              UI UX designer. This family-owned winery had an outdated webpage
              that was located under a subdomain of a larger website, focused on
              promoting local wine products. The client was seeking a
              transformation in order to establish a new digital identity and
              achieve autonomy. Throughout the process, I maintained a close
              collaboration with a Web Developer during the development stage.
            </Paragraph>
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-6">
            <GrayscaleTransitionImage
              src={exampleImage}
              alt="Di Barrò's winery website hero"
              quality={90}
              sizes="(min-width: 1216px) 76rem, 100vw"
            />
            <GrayscaleTransitionImage
              src={exampleImage2}
              alt="Di Barrò's winery website hero"
              quality={90}
              sizes="(min-width: 1216px) 76rem, 100vw"
            />
          </div>
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Challenge</ChapterTitle>
            <Paragraph>
              Since 2011, their digital presence was linked to others. The
              necessity was to properly tell their story, embracing their brand
              identity through a new website. I felt that it was the perfect
              opportunity to discover more about their world, and gain
              experience through new design challenges.
            </Paragraph>
          </Prose>
          <div className="h-96">
            <img
              className="pointer-events-none"
              src="/images/case-studies/winery-website/hero.jpg"
              alt="Di Barrò's winery website hero"
            />
          </div>
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
