import { Item } from './Item';
import { Container } from './Container';

function printInventory(name: string, inventory: Container) {
  console.log(`The ${name} has:`);
  console.log(`${inventory.getName()}`);
  console.log(`In total, the ${name} is carrying ${inventory.getWeight().grams / 1000} kg of stuff.\n`);
}

// Create some people with different inventories
function createCommuter() {
  const inventory = new Container('Inventory', { grams: 0 });
  const wallet = new Item('Wallet', { grams: 100} );
  const phone = new Item('Phone', { grams: 171 });

  inventory.add(wallet);
  inventory.add(phone);

  return inventory;
}

function createSomeoneNippingOutForAWalk() {
  const inventory = new Container('Inventory', { grams: 0 });

  // show we can (if we wanted!) create an inventory item without using the type (the unhandled functions make it messy)
  const keys = {
    getName: () => 'Keys',
    getWeight: () => { return {grams: 50} },
    add: () => { throw 'Unsupport Operation' },
    remove: () => { throw 'Unsupport Operation' },
    getChild: ()  => { throw 'Unsupport Operation' }
  }
  inventory.add(keys);

  return inventory;
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

  return inventory;
}

function createAdventurer() {
  const inventory = new Container('Inventory', { grams: 0 } );
  const sword = new Item('Sword', { grams: 800 });
  const shield = new Item('Shield', { grams: 1500 });
  const armour = new Item('Leather Armour', { grams: 2500 });
  const helmet = new Item('Iron Helm', { grams: 600 });
  inventory.add(sword);
  inventory.add(shield);
  inventory.add(armour);
  inventory.add(helmet);

  const bagOfHolding = new Container('Bag of Holding', { grams: 200 } );
  const gold = new Item('Gold', { grams: 100 } );
  const silver = new Item('Gold', { grams: 200 } );
  const rations = new Item('Rations', { grams: 400 } );
  const diamonds = new Item('Diamonds', { grams: 50 } );
  const rubies = new Item('Rubies', { grams: 100 } );
  bagOfHolding.add(gold);
  bagOfHolding.add(silver);
  bagOfHolding.add(diamonds);
  bagOfHolding.add(rubies);
  bagOfHolding.add(rations);

  const sack = new Container('Sack', { grams: 500 } );
  const potion = new Item('Potion of Healing', { grams: 400 } );
  const garlic = new Item('Garlic', { grams: 100 } );
  sack.add(potion);
  sack.add(garlic);
  sack.add(bagOfHolding);

  inventory.add(sack);

  return inventory;
}

// Test them all out
printInventory("Commuter", createCommuter());
printInventory("Walker", createSomeoneNippingOutForAWalk());
printInventory("Day Tripper", createDayTripper());
printInventory("Adventurer", createAdventurer());
