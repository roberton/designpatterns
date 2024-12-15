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


// Create some people with different inventories
function createCommuter() {
  const wallet = new Item('wallet', 0.1);

  console.log(`Commuter's inventory is: ${wallet.getName()}`);
  console.log(`The total weight is: ${wallet.getWeight()}`);
}

// Test them all out
createCommuter();
