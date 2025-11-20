import { motion } from 'motion/react';
import { CELL_SIZE } from '@/lib/constants';
import { Inventory, DraggableItem } from '@/lib/types';

export function DragOverlay({
  state,
  draggingItem,
}: {
  state: Inventory;
  draggingItem?: DraggableItem;
}) {
  if (!state.dragging || !draggingItem) return null;

  const { initialPoint, nextPoint, valid } = state.dragging;

  return (
    <>
      {/* translucent shadow of initial position */}
      <motion.div
        className="absolute bg-[rgba(239,239,239,0.8)]"
        style={{
          top: 0,
          left: 0,
          x: initialPoint.x * CELL_SIZE,
          y: initialPoint.y * CELL_SIZE,
          width: draggingItem.width * CELL_SIZE - 2,
          height: draggingItem.height * CELL_SIZE - 2,
        }}
      />
      {/* colored overlay showing valid/invalid drop area */}
      <motion.div
        className="absolute border border-black"
        style={{
          top: 0,
          left: 0,
          backgroundColor: valid
            ? 'rgb(152,195,121)' // green
            : 'rgb(224,109,118)', // red
          x: nextPoint.x * CELL_SIZE,
          y: nextPoint.y * CELL_SIZE,
          width: draggingItem.width * CELL_SIZE - 2,
          height: draggingItem.height * CELL_SIZE - 2,
        }}
      />
    </>
  );
}
