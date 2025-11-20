'use client';

import { motion } from 'motion/react';
import { CELL_SIZE, GRID_SIZE } from '@/lib/constants';
import { DraggableItem, Inventory } from '@/lib/types';

export function InventoryItem({
  item,
  state,
  dispatch,
}: {
  item: DraggableItem;
  state: Inventory;
  dispatch: any /* TODO: add type */;
}) {
  const isDragging = item.id === state.dragging?.id;
  const x = item.x * CELL_SIZE;
  const y = item.y * CELL_SIZE;
  const width = item.width * CELL_SIZE - 2;
  const height = item.height * CELL_SIZE - 2;

  return (
    <motion.div
      key={item.id}
      drag
      dragMomentum={false}
      onDragStart={() => dispatch({ type: 'DRAG_STARTED', payload: { item } })}
      onDragEnd={() => dispatch({ type: 'DRAG_ENDED', payload: { item } })}
      onDrag={(_, info) => {
        const point = {
          x: Math.min(
            Math.max(item.x + Math.round(info.offset.x / CELL_SIZE), 0),
            GRID_SIZE - item.width,
          ),
          y: Math.min(
            Math.max(item.y + Math.round(info.offset.y / CELL_SIZE), 0),
            GRID_SIZE - item.height,
          ),
        };

        if (state.dragging) {
          const { nextPoint } = state.dragging;
          if (point.x !== nextPoint.x || point.y !== nextPoint.y) {
            dispatch({
              type: 'DRAG_MOVED',
              payload: { item, point },
            });
          }
        }
      }}
      onAnimationComplete={() => dispatch({ type: 'ANIMATION_ENDED' })}
      initial={false}
      animate={!isDragging}
      className="absolute border border-black bg-gray-100 px-0.5 py-1 text-right text-[10px]"
      style={{
        top: y,
        left: x,
        width,
        height,
        zIndex: isDragging ? 99 : 1,
      }}
    >
      {item.name}
    </motion.div>
  );
}
