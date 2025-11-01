import Container from '@/components/layout/Container';
import StickyProjectNavigator from './StickyProjectNavigator';

export default function CaseStudyLayout({
  projectUrl,
  prevUrl,
  nextUrl,
  children,
}: {
  projectUrl: string;
  prevUrl: string;
  nextUrl: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyProjectNavigator
        projectUrl={projectUrl}
        prevUrl={prevUrl}
        nextUrl={nextUrl}
      />
      <Container className="py-12 sm:py-24 lg:py-28">{children}</Container>
    </>
  );
}
