import CaseStudyLayout from '@/components/case-study/layout/CaseStudyLayout';
import PageIntro from '@/components/case-study/layout/PageIntro';
import DesktopBentoGrid from '@/components/case-study/media/DesktopBentoGrid';

import heroImg1 from '@/images/case-study/alpitude/hero-1.webp';
import heroImg2 from '@/images/case-study/alpitude/hero-2.webp';
import heroImg3 from '@/images/case-study/alpitude/hero-3.webp';
import heroImg4 from '@/images/case-study/alpitude/hero-4.webp';

export default function DigitalStartupWebsite() {
  return (
    <>
      <CaseStudyLayout
        projectUrl="https://www.dibarro.com"
        prevUrl="/work/alpitude"
        nextUrl="/work/vierin"
      >
        <PageIntro
          title="Creating visual identity, design system and user expericence for a Digital Startup"
          tools={['Sketch/Figma', 'Photoshop', 'Illustrator']}
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
      </CaseStudyLayout>
    </>
  );
}
