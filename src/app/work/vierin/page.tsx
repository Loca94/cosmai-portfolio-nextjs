import {
  Chapter,
  ChapterTitle,
  DesktopBentoGrid,
  MobileOverlappingImages,
  PageIntro,
  Paragraph,
  Prose,
  CaseStudyLayout,
  BoldText,
  CaseStudyImage,
} from '@/components/CaseStudyComponents';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import heroImage1 from '@/images/vierin-casestudy-hero-1.png';
import heroImage2 from '@/images/vierin-casestudy-hero-2.png';
import heroImage3 from '@/images/vierin-casestudy-hero-3.png';
import heroImage4 from '@/images/vierin-casestudy-hero-4.png';
import exampleImage from '@/images/example-image.jpeg';

export default function DentalWebsite() {
  return (
    <>
      <CaseStudyLayout>
        <PageIntro
          title={`Ideating a mobile-first website for a Dental Clinic`}
          tools={['Figma', 'After Effects', 'Photoshop', 'Illustrator']}
        />
        <MobileOverlappingImages className="mt-9 md:hidden" />
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
            <ChapterTitle>Project</ChapterTitle>
            <Paragraph>
              I had the opportunity to work on Viérin’s showcase website, facing
              a new design challenge and learning more about the healthcare
              industry. Viérin is a dental clinic known for its high standards
              in dental treatments and patient care. Despite their reputation,
              they acknowledged the need to reach a broader audience. The clinic
              sought a new website to attract more patients by enhancing its
              online impact and compete effectively with other dental clinics.
            </Paragraph>
          </Prose>
          <CaseStudyImage
            className="w-full !invert"
            src={exampleImage}
            alt="New website design for Di Barrò's winery"
          />
        </Chapter>

        <Chapter>
          <Prose>
            <ChapterTitle>Challenge</ChapterTitle>
            <Paragraph>
              In order to create greater value for customers it was mandatory to
              deliver a reassuring website showcasing the dental clinic’s
              prestige and clarifying treatments. Aiming for an effortless user
              experience, everything needed to be easy to understand.
            </Paragraph>
            <Paragraph>My objectives for the project were:</Paragraph>
          </Prose>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Showcasing Prestige</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-sm">
                  Demonstrating the dental office's prestige to{' '}
                  <BoldText>build trust</BoldText> is essential. The primary
                  reason users visit this website is to learn about the dental
                  clinic, gain reassurance of its effectiveness, and feel
                  confident in its ability to{' '}
                  <BoldText>meet their needs</BoldText>.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Clarifying Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-sm">
                  Visiting the hospital or dentist can be a frightening
                  experience for many. To alleviate this fear,{' '}
                  <BoldText>providing comprehensive information</BoldText> can
                  help shift their perspective. Users want to{' '}
                  <BoldText>understand</BoldText> what is happening.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>SEO Optimizations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-sm">
                  To assist users in finding what they need, the{' '}
                  <BoldText>information must be clear</BoldText>, and the
                  content should be optimised for relevance. This ensures the
                  website is <BoldText>easily discoverable</BoldText>, and ranks
                  higher in search engine results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Prose>
            <Paragraph>
              I needed to understand the clinic’s target audience and their
              needs. I conducted a competitive analysis to identify the
              strengths and weaknesses of other dental clinics. This helped me
              to understand the market and the expectations of potential
              patients.
            </Paragraph>
            <Paragraph>To achieve the project’s objectives:</Paragraph>
          </Prose>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Showcasing Prestige</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-sm">
                  We encouraged patients to <BoldText>leave reviews</BoldText>,
                  resulting in a current rating of 4.9 on Google Maps. We
                  carefully selected some of the most positive reviews and
                  featured them on the website to emphasise{' '}
                  <BoldText>customer satisfaction</BoldText> and build trust.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Clarifying Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-sm">
                  I designed a grid displaying the 12 services offered by the
                  dental office. Each service included an{' '}
                  <BoldText>animated sequence</BoldText> and a concise
                  <BoldText>explanation of the dental procedure</BoldText> to
                  ensure users’ comprehension.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>SEO Optimizations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-sm">
                  I conducted thorough research using tools like Google Trends
                  to identify the most relevant and frequently searched keywords
                  related to dental services. Then I optimised the website
                  content, including meta descriptions, headings and body text,
                  to align with these high-traffic keywords.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </Chapter>
      </CaseStudyLayout>
    </>
  );
}
