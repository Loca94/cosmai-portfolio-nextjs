import { StaticImageData } from 'next/image';

type UserPersona = {
  fullName: string;
  avatarSrc: string | StaticImageData;
  background: string;
  goals: string[];
  frustrations: string[];
};

export type { UserPersona };
