'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/layout/Container';
import DraggableItem from './DraggableItem';
import { AttioSvg } from './AttioSvg';
import { HorizontalGridLines, VerticalGridLines } from './GridLines';

export default function Test2Page() {
  const COLS_COUNT = 24;
  const ROWS_COUNT = 13;

  const gridRef = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState({ width: 0, height: 0 });

  // Calculate cell width/height dynamically
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
    window.addEventListener('resize', calculateCellSize);
    return () => window.removeEventListener('resize', calculateCellSize);
  }, []);

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

          {cellSize.width > 0 && cellSize.height > 0 && (
            <DraggableItem
              colStart={3}
              rowStart={2}
              colEnd={7}
              rowEnd={6}
              colWidth={cellSize.width}
              rowHeight={cellSize.height}
            >
              <div className="group relative size-full [perspective:800px]">
                <div className="size-full">
                  <AttioSvg />
                </div>
                <div className="bg-primary-background pointer-events-none absolute inset-0 opacity-0 mix-blend-plus-lighter transition-opacity duration-150 ease-in-out group-hover:opacity-20 group-active:opacity-0"></div>
              </div>
            </DraggableItem>
          )}
        </div>
      </div>
    </Container>
  );
}
