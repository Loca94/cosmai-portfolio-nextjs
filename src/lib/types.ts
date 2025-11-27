import { StaticImageData } from 'next/image';

export type UserPersona = {
  fullName: string;
  avatarSrc: string | StaticImageData;
  background: string;
  goals: string[];
  frustrations: string[];
};

export type ImgProp = {
  src: string | StaticImageData;
  alt?: string;
};
