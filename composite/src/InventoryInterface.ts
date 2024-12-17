export type Weight = {
  grams: number;
}

export interface InventoryComponent {
  getName(): string,
  getWeight(): Weight,
  add(child: InventoryComponent): void,
  remove(child: InventoryComponent): void,
  getChild(index: number): InventoryComponent
}
