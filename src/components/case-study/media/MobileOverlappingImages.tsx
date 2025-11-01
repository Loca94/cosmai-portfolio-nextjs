import { cn } from '@/lib/utils';
import { ImgProp } from '@/lib/types';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import CaseStudyImage from '@/components/case-study/media/CaseStudyImage';

export default function MobileOverlappingImages({
  className,
  images,
}: {
  className?: string;
  images: ImgProp[];
}) {
  return (
    <FadeInStagger>
      <div className={cn('flex flex-col items-center', className)}>
        <FadeIn className="z-10 w-full">
          <div className="h-52 w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded-sm border border-slate-700">
              <CaseStudyImage
                className="h-48 w-full object-cover object-top"
                src={images[0].src}
                alt={images[0].alt}
                margins={false}
                rounded={false}
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn className="z-20 w-full">
          <div className="-mt-8 h-52 w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded-sm border border-slate-700">
              <CaseStudyImage
                className="h-48 w-full object-cover"
                src={images[1].src}
                alt={images[1].alt}
                margins={false}
                rounded={false}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeInStagger>
  );
}
