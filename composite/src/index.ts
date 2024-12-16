interface InventoryComponent {
  getName(): string,
  getWeight(): number,
  add(child: InventoryComponent): void,
  remove(child: InventoryComponent): void,
  getChild(index: number): InventoryComponent
}

// concrete item class that explicitly implements the interface
class Item implements InventoryComponent {
  private name: string;
  private weight: number;

  constructor(name: string, weight: number) {
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

class Container implements InventoryComponent {
  private name: string;
  private weight: number;
  private contents: InventoryComponent[];

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
    this.contents = [];
  }

  getName() {
    const contentsNames = this.contents.map(item => item.getName()).join(',\n\t');
    return `${this.name} which contains:\n\t${contentsNames}`;
  }

  getWeight() {
    const weightOfContents = this.contents.reduce(
      (total, child) => total + child.getWeight(),
      0);
    return this.weight + weightOfContents;
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


// Create some people with different inventories
function createCommuter() {
  const inventory = new Container('Inventory', 0);
  const wallet = new Item('Wallet', 0.1);
  const phone = new Item('Phone', 0.3);

  inventory.add(wallet);
  inventory.add(phone);

  console.log(`The commuter has:`);
  console.log(`${inventory.getName()}`);
  console.log(`In total, the commuter is carrying ${inventory.getWeight()}kg of stuff.`);
}


// Test them all out
createCommuter();

