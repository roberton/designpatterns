export class Beverage {
  description: string

  cost(): number {
    return 0
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "Our classic blend, as good now as it always way";
  }

  cost() {
    return 2.5;
  }
}

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Most excellent dark roast";
  }

  cost() {
    return 3.0;
  }
}

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Small but powerful!";
    console.log("espresson");
  }

  cost() {
    console.log('it called cost')
    return 1.5;
  }
}

