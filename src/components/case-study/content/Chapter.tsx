import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

export default function Chapter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <section
        className={cn(
          'mt-10 space-y-6 md:space-y-8 lg:mt-15 lg:space-y-12',
          className,
        )}
      >
        {children}
      </section>
    </FadeIn>
  );
}
