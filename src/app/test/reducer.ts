import range from 'lodash-es/range';
import { DraggableItem, Cells, Point, Inventory } from '@/lib/types';

export const initial: Inventory = {
  items: [],
  cells: range(10).map((y) => range(10).map((x) => 'none')),
  dragging: undefined,
};

export type Action =
  | { type: 'ADD_ITEM'; payload: { item: DraggableItem } }
  | { type: 'MOVE_ITEM'; payload: { item: DraggableItem; point: Point } }
  | { type: 'DRAG_STARTED'; payload: { item: DraggableItem } }
  | { type: 'DRAG_MOVED'; payload: { item: DraggableItem; point: Point } }
  | { type: 'DRAG_ENDED'; payload: { item: DraggableItem } }
  | { type: 'ANIMATION_ENDED' };

export const reducer = (state: Inventory, action: Action) => {
  function clearItemFromCells(item: DraggableItem, cells: Cells) {
    const next = [...cells];

    for (let y = 0; y < item.height; y++) {
      for (let x = 0; x < item.width; x++) {
        next[y + item.y][x + item.x] = 'none';
      }
    }
    return next;
  }

  function setItemToCells(item: DraggableItem, cells: Cells) {
    const next = [...cells];

    for (let y = 0; y < item.height; y++) {
      for (let x = 0; x < item.width; x++) {
        next[y + item.y][x + item.x] = item.id;
      }
    }
    return next;
  }

  function itemWillFit(item: DraggableItem, point: Point, cells: Cells) {
    for (let y = 0; y < item.height; y++) {
      for (let x = 0; x < item.width; x++) {
        const cell = cells[y + point.y][x + point.x];
        if (cell !== 'none' && cell !== item.id) {
          return false;
        }
      }
    }

    return true;
  }

  switch (action.type) {
    case 'ADD_ITEM': {
      const nextState = { ...state };
      const { item } = action.payload;

      nextState.items.push(item);
      nextState.cells = setItemToCells(item, nextState.cells);

      return nextState;
    }
    case 'MOVE_ITEM': {
      const nextState = { ...state };
      const { item, point } = action.payload;

      const updatedItem = { ...item, x: point.x, y: point.y };

      const cellsCopy = state.cells.map((r) => [...r]);

      nextState.cells = clearItemFromCells(item, cellsCopy);
      nextState.cells = setItemToCells(updatedItem, nextState.cells);

      const index = nextState.items.findIndex((i) => i.id === item.id);
      nextState.items = [...nextState.items];
      nextState.items[index] = updatedItem;

      return nextState;
    }
    case 'DRAG_STARTED': {
      const nextState = { ...state };
      const { item } = action.payload;
      const { x, y } = item;

      nextState.dragging = {
        id: item.id,
        initialPoint: { x, y },
        nextPoint: { x, y },
        valid: true,
      };

      return nextState;
    }
    case 'DRAG_MOVED': {
      const nextState = { ...state };
      const { item, point } = action.payload;

      if (nextState.dragging) {
        nextState.dragging.nextPoint = point;
        nextState.dragging.valid = itemWillFit(item, point, nextState.cells);
      }

      return nextState;
    }
    case 'DRAG_ENDED': {
      const nextState = { ...state };
      const { item } = action.payload;

      if (!nextState.dragging) return nextState;

      const { valid, initialPoint, nextPoint } = nextState.dragging;
      console.log({ valid, initialPoint, nextPoint });

      const point = valid ? nextPoint : initialPoint;

      // Clone items
      nextState.items = [...state.items];

      const index = nextState.items.findIndex((i) => i.id === item.id);

      // Create updated item (do NOT mutate original)
      const updatedItem = { ...item, x: point.x, y: point.y };

      // Replace item
      nextState.items[index] = updatedItem;

      // Deep clone cells
      const cellsClean = state.cells.map((r) => [...r]);

      // Clear old cells + apply new cells
      nextState.cells = setItemToCells(
        updatedItem,
        clearItemFromCells(item, cellsClean),
      );

      return nextState;
    }
    case 'ANIMATION_ENDED': {
      const nextState = { ...state };

      nextState.dragging = undefined;

      return nextState;
    }
    default: {
      return state;
    }
  }
};
