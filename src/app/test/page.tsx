'use client';

import { useEffect, useReducer } from 'react';
import { initial, reducer } from './reducer';
import { DragOverlay } from './DragOverlay';
import { InventoryGrid } from './InventoryGrid';
import { InventoryItem } from './InventoryItem';
import Container from '@/components/layout/Container';
import { DraggableItem } from '@/lib/types';

const fruit = {
  apple: {
    id: 'apple',
    name: 'Apple',
    width: 1,
    height: 1,
  },
  melon: {
    id: 'melon',
    name: 'Melon',
    width: 2,
    height: 2,
  },
  banana: {
    id: 'banana',
    name: 'Banana',
    width: 1,
    height: 3,
  },
};

export default function TestPage() {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { item: { ...fruit.melon, x: 2, y: 2 } },
    });
    dispatch({
      type: 'ADD_ITEM',
      payload: { item: { ...fruit.apple, x: 5, y: 6 } },
    });
    dispatch({
      type: 'ADD_ITEM',
      payload: { item: { ...fruit.banana, x: 6, y: 1 } },
    });
  }, []);

  const draggingItem: DraggableItem | undefined = state.items.find(
    (i) => i.id === state.dragging?.id,
  );

  return (
    <Container>
      <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden border border-gray-300 p-5">
        {/* Grid Background */}
        <InventoryGrid />

        {/* Drag Visual Overlays */}
        <DragOverlay state={state} draggingItem={draggingItem} />

        {/* Inventory Items */}
        {state.items.map((item) => (
          <InventoryItem
            key={item.id}
            item={item}
            state={state}
            dispatch={dispatch}
          />
        ))}
      </div>
    </Container>
  );
}
