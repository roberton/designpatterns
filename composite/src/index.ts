type Weight = {
  grams: number;
}

interface InventoryComponent {
  getName(): string,
  getWeight(): Weight,
  add(child: InventoryComponent): void,
  remove(child: InventoryComponent): void,
  getChild(index: number): InventoryComponent
}

// concrete item class that explicitly implements the interface
class Item implements InventoryComponent {
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

class Container implements InventoryComponent {
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


// Create some people with different inventories
function createCommuter() {
  const inventory = new Container('Inventory', { grams: 0 });
  const wallet = new Item('Wallet', { grams: 100} );
  const phone = new Item('Phone', { grams: 171 });

  inventory.add(wallet);
  inventory.add(phone);

  console.log(`The commuter has:`);
  console.log(`${inventory.getName()}`);
  console.log(`In total, the commuter is carrying ${inventory.getWeight().grams / 1000} kg of stuff.\n`);
}

function createDayTripper() {
  const inventory = new Container('Inventory', { grams: 0 } );
  const phone = new Item('Phone', { grams: 171 });
  inventory.add(phone);

  const backpack = new Container('Back Pack', { grams: 1000 } );
  const wallet = new Item('Wallet', { grams: 100 } );
  const waterBottle = new Item('Water Bottle', { grams: 600 } );
  const sandwiches = new Item('Sandwiches', { grams: 200 } );
  backpack.add(wallet);
  backpack.add(waterBottle);
  backpack.add(sandwiches);

  inventory.add(backpack);

  console.log(`The day tripper has:`);
  console.log(`${inventory.getName()}`);
  console.log(`In total, the day tripper is carrying ${inventory.getWeight().grams / 1000} kg of stuff.\n`);
}

// Test them all out
createCommuter();
createDayTripper();
