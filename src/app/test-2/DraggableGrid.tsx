import { cn } from '@/lib/utils/tw-utils';
import { useEffect, useReducer, useRef, useState } from 'react';
import { reducer } from './reducer';
import DragOverlay from './DragOverlay';
import DraggableItem from './DraggableItem';
import { HorizontalGridLines, VerticalGridLines } from './GridLines';
import { CellSize, DraggableItemType, GridLayout } from './types';

export default function DraggableGrid({
  layout,
  className,
}: {
  layout: GridLayout;
  className?: string;
}) {
  const { rows, cols, items: layoutItems } = layout;

  const initial = {
    items: [],
    cells: Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 'none'),
    ),
    dragging: undefined,
  };

  const [state, dispatch] = useReducer(reducer, initial);

  const gridRef = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState<CellSize>({ width: 0, height: 0 });

  useEffect(() => {
    const calculateCellSize = () => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      setCellSize({
        width: rect.width / cols,
        height: rect.height / rows,
      });
    };

    calculateCellSize();

    window.addEventListener('resize', calculateCellSize);
    return () => window.removeEventListener('resize', calculateCellSize);
  }, []);

  useEffect(() => {
    layoutItems.forEach((item) =>
      dispatch({
        type: 'ADD_ITEM',
        payload: { item },
      }),
    );
  }, [layoutItems]);

  const draggingItem: DraggableItemType | undefined = state.items.find(
    (i) => i.id === state.dragging?.id,
  );

  return (
    <div
      className={cn(
        'size-full border border-slate-300 bg-slate-800',
        className,
      )}
    >
      <div
        ref={gridRef}
        className="relative grid w-full items-center"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          aspectRatio: `${cols} / ${rows}`,
        }}
      >
        {/* Grid Lines */}
        <div className="absolute inset-0 *:*:text-slate-700">
          <VerticalGridLines count={cols - 1} />
          <HorizontalGridLines count={rows - 1} />
        </div>

        <DragOverlay
          state={state}
          draggingItem={draggingItem}
          cellSize={cellSize}
        />

        {state.items.map((item) => (
          <DraggableItem
            key={item.id}
            item={item}
            state={state}
            cellSize={cellSize}
            cols={cols}
            rows={rows}
            dispatch={dispatch}
          >
            <div className="group relative size-full [perspective:800px]">
              <div className="size-full">{item.component}</div>
              <div className="pointer-events-none absolute inset-0 bg-slate-800 opacity-0 mix-blend-plus-lighter transition-opacity duration-150 ease-in-out group-hover:opacity-20 group-active:opacity-0"></div>{' '}
            </div>
          </DraggableItem>
        ))}
      </div>
    </div>
  );
}
