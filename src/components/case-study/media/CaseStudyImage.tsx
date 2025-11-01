import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { GrayscaleTransitionImage } from '@/components/animations/GrayscaleTransitionImage';

export default function CaseStudyImage({
  src,
  alt,
  sizes,
  margins = true,
  rounded = true,
  captionContent,
  imgNumber,
  priority = false,
  className,
}: {
  src: string | StaticImageData;
  alt?: string;
  sizes?: string;
  margins?: boolean;
  rounded?: boolean;
  captionContent?: string;
  imgNumber?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={margins ? 'my-6 md:my-8 lg:my-10' : 'm-0'}>
      <div
        className={cn(
          'group isolate overflow-hidden bg-slate-900',
          rounded ? 'rounded-lg' : 'rounded-none',
        )}
      >
        <GrayscaleTransitionImage
          className={className}
          src={src}
          alt={alt}
          quality={90}
          sizes={sizes}
          priority={priority}
        />
      </div>
      {captionContent && (
        <div className="mt-2 flex items-center justify-end space-x-2 text-xs text-slate-500 sm:mt-4 sm:text-sm">
          <span>{captionContent}</span>
          <Badge className="text-xs">img {imgNumber}</Badge>
        </div>
      )}
    </div>
  );
}
