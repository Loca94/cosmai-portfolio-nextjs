import { AttioSvg } from './AttioSvg';
import { AttioSvg2 } from './AttioSvg2';
import { GridLayout } from './types';

export const desktopGridLayout: GridLayout = {
  rows: 13,
  cols: 24,
  items: [
    {
      id: 'attioSvg',
      width: 4,
      height: 4,
      x: 2,
      y: 1,
      gridPlacement: { rowStart: 2, colStart: 3, rowEnd: 6, colEnd: 7 },
      component: <AttioSvg />,
    },
    {
      id: 'attioSvg2',
      width: 5,
      height: 3,
      x: 17,
      y: 2,
      gridPlacement: { rowStart: 3, colStart: 18, rowEnd: 6, colEnd: 23 },
      component: <AttioSvg2 />,
    },
  ],
};

export const mobileGridLayout: GridLayout = {
  rows: 19,
  cols: 12,
  items: [
    {
      id: 'attioSvg',
      width: 4,
      height: 4,
      x: 1,
      y: 7,
      gridPlacement: { rowStart: 8, colStart: 2, rowEnd: 12, colEnd: 6 },
      component: <AttioSvg />,
    },
    {
      id: 'attioSvg2',
      width: 5,
      height: 3,
      x: 1,
      y: 15,
      gridPlacement: { rowStart: 16, colStart: 2, rowEnd: 19, colEnd: 7 },
      component: <AttioSvg2 />,
    },
  ],
};
