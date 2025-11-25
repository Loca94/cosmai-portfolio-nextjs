export type Point = { x: number; y: number };

export interface DraggableItemType extends Point {
  id: string;
  width: number;
  height: number;
}

export type Cells = string[][];

export type DragState = {
  items: DraggableItemType[];
  cells: Cells;
  dragging?: {
    id: string;
    initialPoint: Point;
    nextPoint: Point;
    valid: boolean;
  };
};

export type CellSize = {
  width: number;
  height: number;
};
