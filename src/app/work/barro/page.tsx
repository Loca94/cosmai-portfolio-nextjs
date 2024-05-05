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
} from '@/components/CaseStudyComponents';
import exampleImage from '@/images/example-image.jpeg';
import exampleImage2 from '@/images/example-image-2.avif';
import exampleImage3 from '@/images/example-image-3.avif';
import exampleImage4 from '@/images/example-image-4.avif';

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

  return (
    <>
      <CaseStudyLayout>
        <PageIntro
          title={`Designing a Storybrand Website for a family-owned winery`}
          tools={['Figma', 'Photoshop']}
        />
        <MobileOverlappingImages className="mt-9 md:hidden" />
        <DesktopBentoGrid className="mt-12 hidden md:block" />

        <Chapter className="mt-15">
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
            <CaseStudyImage
              src={exampleImage}
              alt="Old website flaws and outdated design"
            />
            <CaseStudyImage
              src={exampleImage2}
              alt="New website design for Di Barrò's winery"
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
          <CaseStudyCarousel images={challengeImages} />
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Role & Design Process</ChapterTitle>
            <Paragraph>
              I was responsible for the UX design process, researching,
              diagramming user flow, diagramming IA, producing exploratory
              wireframes and finally crafting high definition prototypes. After
              some meetings with client, I took time to review all the
              information gathered about the brand identity, user target and
              communicative intents.
            </Paragraph>
            <Paragraph>
              I conducted a heuristic UX analysis on the old webpage and the
              competitors’ websites identifying usability and accessibility
              issues thinking of solutions accordingly.
            </Paragraph>
          </Prose>
          <CaseStudyImage
            className="w-full"
            src={exampleImage4}
            alt="New website design for Di Barrò's winery"
          />
          <Prose>
            <Paragraph>
              Designing wireframes and prototypes was an iterative process that
              evolved with each meeting as I had to consider the client
              standpoint and concerns. Through the whole process I
              cross-pollinated with the developer sharing my progresses.
            </Paragraph>
          </Prose>
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
