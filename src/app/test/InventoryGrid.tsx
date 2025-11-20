import React from 'react';
import { GRID_SIZE } from '@/lib/constants';

export function InventoryGrid() {
  return (
    <div
      className="absolute top-0 left-0 grid gap-[2px]"
      style={{
        gridAutoRows: '42px',
        gridTemplateColumns: `repeat(${GRID_SIZE}, 42px)`,
      }}
    >
      {Array.from({ length: GRID_SIZE }).map((_, y) =>
        Array.from({ length: GRID_SIZE }).map((_, x) => (
          <div
            key={`${y}_${x}`}
            className="border border-gray-300 bg-white/20"
          />
        )),
      )}
    </div>
  );
}
