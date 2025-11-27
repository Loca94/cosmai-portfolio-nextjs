import { DragState, DraggableItemType, Cells, Point } from './types';

export type Action =
  | { type: 'ADD_ITEM'; payload: { item: DraggableItemType } }
  | { type: 'DRAG_STARTED'; payload: { item: DraggableItemType } }
  | { type: 'DRAG_MOVED'; payload: { item: DraggableItemType; point: Point } }
  | { type: 'DRAG_ENDED'; payload: { item: DraggableItemType } }
  | { type: 'ANIMATION_ENDED' };

function clearItemFromCells(item: DraggableItemType, cells: Cells) {
  const next = cells.map((r) => [...r]);
  for (let y = 0; y < item.height; y++) {
    for (let x = 0; x < item.width; x++) {
      next[item.y + y][item.x + x] = 'none';
    }
  }
  return next;
}

function setItemToCells(item: DraggableItemType, cells: Cells) {
  const next = cells.map((r) => [...r]);
  console.log({ item, cells, next });
  for (let y = 0; y < item.height; y++) {
    for (let x = 0; x < item.width; x++) {
      console.log(`Setting cell next[${item.y + y}][${item.x + x}]`, {
        item,
        x,
        y,
      });
      next[item.y + y][item.x + x] = item.id;
    }
  }
  return next;
}

function itemWillFit(item: DraggableItemType, point: Point, cells: Cells) {
  for (let y = 0; y < item.height; y++) {
    for (let x = 0; x < item.width; x++) {
      if (
        point.y + y < 0 ||
        point.y + y >= cells.length ||
        point.x + x < 0 ||
        point.x + x >= cells[0].length
      ) {
        return false;
      }

      const cell = cells[point.y + y][point.x + x];

      if (cell !== 'none' && cell !== item.id) return false;
    }
  }
  return true;
}

export const reducer = (state: DragState, action: Action): DragState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const nextState = { ...state };
      const { item } = action.payload;

      nextState.items.push(item);
      nextState.cells = setItemToCells(item, nextState.cells);

      return nextState;
    }
    case 'DRAG_STARTED': {
      const { item } = action.payload;
      return {
        ...state,
        dragging: {
          id: item.id,
          initialPoint: { x: item.x, y: item.y },
          nextPoint: { x: item.x, y: item.y },
          valid: true,
        },
      };
    }
    case 'DRAG_MOVED': {
      if (!state.dragging) return state;

      const { item, point } = action.payload;

      const valid = itemWillFit(item, point, state.cells);

      return {
        ...state,
        dragging: {
          ...state.dragging,
          nextPoint: point,
          valid,
        },
      };
    }
    case 'DRAG_ENDED': {
      if (!state.dragging) return state;

      const { item } = action.payload;
      const { valid, nextPoint, initialPoint } = state.dragging;

      const finalPoint = valid ? nextPoint : initialPoint;

      const updatedItem: DraggableItemType = {
        ...item,
        x: finalPoint.x,
        y: finalPoint.y,
      };

      const itemsCopy = state.items.map((i) =>
        i.id === item.id ? updatedItem : i,
      );

      const cellsClean = clearItemFromCells(item, state.cells);
      const newCells = setItemToCells(updatedItem, cellsClean);

      return {
        ...state,
        items: itemsCopy,
        cells: newCells,
        dragging: undefined,
      };
    }
    case 'ANIMATION_ENDED':
      return { ...state, dragging: undefined };

    default:
      return state;
  }
};
