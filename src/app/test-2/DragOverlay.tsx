import { motion } from 'motion/react';
import { CellSize, DragState, DraggableItemType } from './types';

export default function DragOverlay({
  state,
  cellSize,
  draggingItem,
}: {
  state: DragState;
  cellSize: CellSize;
  draggingItem?: DraggableItemType;
}) {
  if (!state.dragging || !draggingItem) return null;

  const { initialPoint, nextPoint, valid } = state.dragging;

  return (
    <>
      {/* translucent shadow of initial position */}
      <motion.div
        className="absolute bg-[rgba(239,239,239,0.2)]"
        style={{
          top: 0,
          left: 0,
          x: initialPoint.x * cellSize.width,
          y: initialPoint.y * cellSize.height,
          width: draggingItem.width * cellSize.width,
          height: draggingItem.height * cellSize.height,
        }}
      />
      {/* colored overlay showing valid/invalid drop area */}
      <motion.div
        className="absolute z-10 border border-black"
        style={{
          top: 0,
          left: 0,
          border: valid
            ? '2px solid rgb(76,175,80,0.8)'
            : '2px solid rgb(244,67,54,0.8)',
          backgroundColor: valid
            ? 'rgb(152,195,121,0.2)'
            : 'rgb(224,109,118,0.2)',
          x: nextPoint.x * cellSize.width,
          y: nextPoint.y * cellSize.height,
          width: draggingItem.width * cellSize.width,
          height: draggingItem.height * cellSize.height,
        }}
      />
    </>
  );
}
