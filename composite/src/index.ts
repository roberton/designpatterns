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

// Test them all out
printInventory("Commuter", createCommuter());
printInventory("Walker", createSomeoneNippingOutForAWalk());
printInventory("Day Tripper", createDayTripper());
