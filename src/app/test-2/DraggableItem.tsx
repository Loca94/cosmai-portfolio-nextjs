'use client';

import { useEffect } from 'react';
import {
  animate,
  motion,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  PanInfo,
  MotionValue,
} from 'motion/react';
import { Action } from './reducer';
import { DraggableItemType, DragState } from './types';
import { FadeInScaleUp } from '@/components/animations/FadeIn';

interface TiltProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  children: React.ReactNode;
}

export function TiltFromVelocity({ x, y, children }: TiltProps) {
  const xVelocity = useVelocity(x);
  const yVelocity = useVelocity(y);

  const MAX_ROTATION = 15;

  const rotateYRaw = useTransform(
    xVelocity,
    [-500, 0, 500],
    [MAX_ROTATION, 0, -MAX_ROTATION],
    { clamp: true },
  );

  const rotateXRaw = useTransform(
    yVelocity,
    [-500, 0, 500],
    [-MAX_ROTATION, 0, MAX_ROTATION],
    { clamp: true },
  );

  // Smooth the rotation values using springs
  const rotateY = useSpring(rotateYRaw, {
    stiffness: 300,
    damping: 30,
  });
  const rotateX = useSpring(rotateXRaw, {
    stiffness: 300,
    damping: 30,
  });

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="size-full"
    >
      {children}
    </motion.div>
  );
}

interface DraggableItemProps {
  index: number;
  item: DraggableItemType;
  state: DragState;
  cellSize: { width: number; height: number };
  dispatch: React.Dispatch<Action>;
  cols: number;
  rows: number;
}

export default function DraggableItem({
  index,
  item,
  state,
  cellSize,
  dispatch,
  cols,
  rows,
}: DraggableItemProps) {
  const isDragging = item.id === state.dragging?.id;

  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);

  const { colStart, rowStart, colEnd, rowEnd } = item.gridPlacement;
  const width = (colEnd - colStart) * cellSize.width;
  const height = (rowEnd - rowStart) * cellSize.height;

  useEffect(() => {
    const localX = (item.x - colStart + 1) * cellSize.width;
    const localY = (item.y - rowStart + 1) * cellSize.height;

    animate(x, localX, { duration: 0.15, ease: 'easeOut' });
    animate(y, localY, { duration: 0.15, ease: 'easeOut' });
  }, [cellSize.width, cellSize.height, item]);

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const currentCoordinates = {
      x: Math.min(
        Math.max(item.x + Math.round(info.offset.x / cellSize.width), 0),
        cols - item.width,
      ),
      y: Math.min(
        Math.max(item.y + Math.round(info.offset.y / cellSize.height), 0),
        rows - item.height,
      ),
    };

    if (state.dragging) {
      const { nextPoint } = state.dragging;
      if (
        currentCoordinates.x !== nextPoint.x ||
        currentCoordinates.y !== nextPoint.y
      ) {
        dispatch({
          type: 'DRAG_MOVED',
          payload: { item, point: currentCoordinates },
        });
      }
    }
  };

  return (
    <FadeInScaleUp
      delay={0.5 + index * 0.2}
      className="size-full"
      style={{ gridArea: `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}` }}
    >
      <motion.div
        className="relative isolate z-10 size-full cursor-grab will-change-transform active:cursor-grabbing"
        drag
        dragMomentum={false}
        onDragStart={() =>
          dispatch({ type: 'DRAG_STARTED', payload: { item } })
        }
        onDrag={handleDrag}
        onDragEnd={() => dispatch({ type: 'DRAG_ENDED', payload: { item } })}
        onAnimationComplete={() => dispatch({ type: 'ANIMATION_ENDED' })}
        style={{
          x,
          y,
          width,
          height,
          touchAction: 'none',
          zIndex: isDragging ? 99 : 1,
        }}
      >
        <div className="group relative size-full [perspective:800px]">
          <TiltFromVelocity x={x} y={y}>
            {item.component}
          </TiltFromVelocity>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-slate-800 opacity-0 mix-blend-plus-lighter transition-opacity duration-150 ease-in-out group-hover:opacity-20 group-active:opacity-0"></div>{' '}
      </motion.div>
    </FadeInScaleUp>
  );
}
