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

export interface DraggableItem {
  id: string;
  name: string;
  x: number;
  y: number;
  height: number;
  width: number;
}

export type Cells = string[][];

export type Inventory = {
  items: DraggableItem[];
  cells: string[][];
  dragging?: {
    id: string;
    initialPoint: Point;
    nextPoint: Point;
    valid: boolean;
  };
};

export type Point = { x: number; y: number };
