'use client';

import { animate, motion, MotionValue, useMotionValue } from 'motion/react';
import { Action } from './reducer';
import { DraggableItemType, DragState } from './types';
import { COLS_COUNT, ROWS_COUNT } from './constants';

interface Props {
  colStart: number;
  rowStart: number;
  colEnd: number;
  rowEnd: number;
  item: DraggableItemType;
  state: DragState;
  cellSize: { width: number; height: number };
  children: React.ReactNode;
  dispatch: React.Dispatch<Action>;
}

export default function DraggableItem({
  colStart,
  rowStart,
  colEnd,
  rowEnd,
  item,
  state,
  cellSize,
  children,
  dispatch,
}: Props) {
  const isDragging = item.id === state.dragging?.id;
  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);
  const width = (colEnd - colStart) * cellSize.width;
  const height = (rowEnd - rowStart) * cellSize.height;

  const snap = (value: number, size: number) => Math.round(value / size) * size;

  const handleDragEnd = () => {
    const snapX = snap(x.get(), cellSize?.width);
    const snapY = snap(y.get(), cellSize.height);

    animate(x, snapX, { duration: 0.15, ease: 'easeOut' });
    animate(y, snapY, { duration: 0.15, ease: 'easeOut' });

    dispatch({ type: 'DRAG_ENDED', payload: { item } });
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
        onDrag={(_, info) => {
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
        }}
        onDragEnd={handleDragEnd}
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
