'use client';

import { animate, motion, useMotionValue, useTransform } from 'motion/react';

interface DraggableItemProps {
  colStart: number;
  rowStart: number;
  colEnd: number;
  rowEnd: number;
  colWidth: number; // in px
  rowHeight: number; // in px
  children: React.ReactNode;
}

export default function DraggableItem({
  colStart,
  rowStart,
  colEnd,
  rowEnd,
  colWidth,
  rowHeight,
  children,
}: DraggableItemProps) {
  const x = useMotionValue((colStart - 1) * colWidth);
  const y = useMotionValue((rowStart - 1) * rowHeight);

  const width = (colEnd - colStart) * colWidth;
  const height = (rowEnd - rowStart) * rowHeight;

  const snap = (value: number, size: number) => Math.round(value / size) * size;

  const handleDragEnd = () => {
    const snapX = snap(x.get(), colWidth);
    const snapY = snap(y.get(), rowHeight);

    animate(x, snapX, { duration: 0.15, ease: 'easeOut' });
    animate(y, snapY, { duration: 0.15, ease: 'easeOut' });
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      style={{
        x,
        y,
        width,
        height,
        touchAction: 'none',
        cursor: 'grab',
        gridArea: `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`,
      }}
      onDragEnd={handleDragEnd}
      className="absolute z-10"
    >
      {children}
    </motion.div>
  );
}
