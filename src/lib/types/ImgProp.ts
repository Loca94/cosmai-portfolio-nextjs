import { StaticImageData } from 'next/image';

export type ImgProp = {
  src: string | StaticImageData;
  alt?: string;
};
