'use client';

import {
  animate,
  motion,
  MotionValue,
  PanInfo,
  useMotionValue,
  useMotionValueEvent,
  useVelocity,
} from 'motion/react';
import { Action } from './reducer';
import { DraggableItemType, DragState } from './types';
import { COLS_COUNT, ROWS_COUNT } from './constants';
import { useEffect } from 'react';

interface Props {
  item: DraggableItemType;
  state: DragState;
  cellSize: { width: number; height: number };
  children: React.ReactNode;
  dispatch: React.Dispatch<Action>;
}

export default function DraggableItem({
  item,
  state,
  cellSize,
  children,
  dispatch,
}: Props) {
  const isDragging = item.id === state.dragging?.id;

  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);

  // const xVelocity = useVelocity(x);
  // useMotionValueEvent(xVelocity, 'change', (latest) => {
  //   console.log('Velocity', latest);
  // });
  // const yVelocity = useVelocity(y);
  // useMotionValueEvent(yVelocity, 'change', (latest) => {
  //   console.log('Velocity', latest);
  // });

  const { colStart, rowStart, colEnd, rowEnd } = item.gridPosition;
  const width = (colEnd - colStart) * cellSize.width;
  const height = (rowEnd - rowStart) * cellSize.height;

  useEffect(() => {
    console.log('are you called again?', { item });
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
        COLS_COUNT - item.width,
      ),
      y: Math.min(
        Math.max(item.y + Math.round(info.offset.y / cellSize.height), 0),
        ROWS_COUNT - item.height,
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
    <div
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
        {children}
      </motion.div>
    </div>
  );
}
