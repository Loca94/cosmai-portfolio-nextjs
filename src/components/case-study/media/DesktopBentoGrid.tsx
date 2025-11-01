import { ImgProp } from '@/lib/types';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import CaseStudyImage from '@/components/case-study/media/CaseStudyImage';
import SafariBrowserHeaderSkeleton from '@/components/case-study/layout/SafariBrowserHeaderSkeleton';

export default function DesktopBentoGrid({
  className,
  images,
}: {
  className?: string;
  images: ImgProp[];
}) {
  return (
    <div className={className}>
      <FadeInStagger faster>
        <div className="grid auto-rows-[270px] grid-cols-3 gap-4 lg:auto-rows-[330px]">
          <FadeIn className="col-span-2 row-span-1 overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
            <SafariBrowserHeaderSkeleton />
            <CaseStudyImage
              className="object-cover md:h-[238px] lg:h-[295px]"
              src={images[0].src}
              alt={images[0].alt}
              margins={false}
              rounded={false}
              priority={true}
            />
          </FadeIn>
          <FadeIn className="col-span-1 row-span-1 rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded-sm border border-slate-700">
              {/* TODO: add priority to image? */}
              <CaseStudyImage
                className="object-cover md:h-[250px] lg:h-[310px]"
                src={images[1].src}
                alt={images[1].alt}
                margins={false}
                rounded={false}
                priority={true}
              />
            </div>
          </FadeIn>

          <FadeIn className="col-span-1 row-span-1 rounded-lg border border-slate-700 bg-slate-900 p-2">
            <div className="h-full w-full overflow-hidden rounded-sm border border-slate-700">
              {/* Image Here with priority */}
              <CaseStudyImage
                className="object-cover md:h-[250px] lg:h-[310px]"
                src={images[2].src}
                alt={images[2].alt}
                margins={false}
                rounded={false}
                priority={true}
              />
            </div>
          </FadeIn>
          <FadeIn className="col-span-2 row-span-1 overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
            <SafariBrowserHeaderSkeleton />
            {/* Image Here with priority */}
            <CaseStudyImage
              className="object-cover md:h-[238px] lg:h-[295px]"
              src={images[3].src}
              alt={images[3].alt}
              margins={false}
              rounded={false}
              priority={true}
            />
          </FadeIn>
        </div>
      </FadeInStagger>
    </div>
  );
}
