export type ColumnDragItem = {
	index: number;
	id: string;
	text: string;
	type: "COLUMN";
};

export type CardDragItem = {
	index: number;
	id: string;
	text: string;
	type: "CARD";
	columnId: string;
};

export type DragItem = ColumnDragItem | CardDragItem;
