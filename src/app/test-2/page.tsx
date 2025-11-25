'use client';

import { useEffect, useReducer, useRef, useState } from 'react';
import Container from '@/components/layout/Container';
import DraggableItem from './DraggableItem';
import { AttioSvg } from './AttioSvg';
import { HorizontalGridLines, VerticalGridLines } from './GridLines';
import { DragOverlay } from './DragOverlay';
import { CellSize, DraggableItemType } from './types';
import { reducer } from './reducer';
import { COLS_COUNT, ROWS_COUNT } from './constants';

const components = {
  attioSvg: {
    id: 'attioSvg',
    width: 4,
    height: 4,
  },
};

export default function Test2Page() {
  const initial = {
    items: [],
    cells: Array.from({ length: ROWS_COUNT }, () =>
      Array.from({ length: COLS_COUNT }, () => 'none'),
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
        width: rect.width / COLS_COUNT,
        height: rect.height / ROWS_COUNT,
      });
    };

    calculateCellSize();

    dispatch({
      type: 'ADD_ITEM',
      payload: { item: { ...components.attioSvg, x: 2, y: 1 } },
    });

    window.addEventListener('resize', calculateCellSize);
    return () => window.removeEventListener('resize', calculateCellSize);
  }, []);

  const draggingItem: DraggableItemType | undefined = state.items.find(
    (i) => i.id === state.dragging?.id,
  );

  return (
    <Container>
      <div className="size-full border border-slate-300">
        <div
          ref={gridRef}
          className="relative grid w-full items-center"
          style={{
            gridTemplateColumns: `repeat(${COLS_COUNT}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS_COUNT}, 1fr)`,
            aspectRatio: `${COLS_COUNT} / ${ROWS_COUNT}`,
          }}
        >
          {/* Grid Lines */}
          <div className="absolute inset-0 *:*:text-slate-700">
            <VerticalGridLines count={COLS_COUNT - 1} />
            <HorizontalGridLines count={ROWS_COUNT - 1} />
          </div>

          <DragOverlay
            state={state}
            draggingItem={draggingItem}
            cellSize={cellSize}
          />

          {state.items.map((item) => (
            <DraggableItem
              key={item.id}
              colStart={3}
              rowStart={2}
              colEnd={7}
              rowEnd={6}
              item={item}
              state={state}
              cellSize={cellSize}
              dispatch={dispatch}
            >
              <div className="group relative size-full [perspective:800px]">
                <div className="size-full">
                  <AttioSvg />
                </div>
                <div className="bg-primary-background pointer-events-none absolute inset-0 opacity-0 mix-blend-plus-lighter transition-opacity duration-150 ease-in-out group-hover:opacity-20 group-active:opacity-0"></div>
              </div>
            </DraggableItem>
          ))}
        </div>
      </div>
    </Container>
  );
}
