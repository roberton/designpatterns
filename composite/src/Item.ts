import { Weight, InventoryComponent } from './InventoryInterface';

// concrete item class that explicitly implements the interface for a simple item
export class Item implements InventoryComponent {
  private name: string;
  private weight: Weight;

  constructor(name: string, weight: Weight) {
    this.name = name;
    this.weight = weight;
  }

  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }

  add() {
    throw "Unsupport Operation";
  }

  remove() {
    throw "Unsupport Operation";
  }

  getChild(index: number): InventoryComponent {
    throw "Unsupport Operation";
  }
}
