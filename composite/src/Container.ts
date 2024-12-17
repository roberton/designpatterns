import { Weight, InventoryComponent } from './InventoryInterface';

// concrete item class that explicitly implements the interface for a collection of items
export class Container implements InventoryComponent {
  private name: string;
  private weight: Weight;
  private contents: InventoryComponent[];

  constructor(name: string, weight: Weight) {
    this.name = name;
    this.weight = weight;
    this.contents = [];
  }

  getName() {
    const contentsNames = this.contents.map(item => item.getName()).join(',\n\t');
    return `${this.name}, which contains:\n\t${contentsNames}`;
  }

  getWeight(): Weight {
    const weightOfContents = this.contents.reduce(
      (total, child) => total + child.getWeight().grams,
      0 );
    return { grams: this.weight.grams + weightOfContents };
  }

  add(child: InventoryComponent) {
    this.contents.push(child);
  }

  remove(child: InventoryComponent): void {
    const indexOfChild = this.contents.indexOf(child);
    this.contents.splice(indexOfChild, 1);
  }

  getChild(index: number): InventoryComponent {
    return this.contents[index];
  }
}
