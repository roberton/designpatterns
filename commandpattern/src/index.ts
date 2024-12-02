// Command Interface
interface Command {
  execute(): void;
  undo(): void;
}

// Calculator (The actual logic for operations)
// 
class Calculator {
  private stack: number[] = [];

  public addOperand(operand: number): void {
    this.stack.push(operand)
  }

  public removeOperand(): void {
    this.stack.pop()
  }

  public getResult(): number {
    return this.stack.reduce(
      (total, operand) => total + operand);
  }
}


class OperandCommand implements Command {
  private calculator: Calculator;
  private operand: number;

  constructor(calculator: Calculator, operand: number) {
    this.calculator = calculator;
    this.operand = operand;
  }

  public execute(): void {
    this.calculator.addOperand(this.operand);
  }

  public undo(): void {
    this.calculator.removeOperand();
  }
}

// Invoker (Handles execution and undo/redo)
class CalculatorInterface /*Invoker in pp207? CommandManager*/ {
  private commandHistory: Command[] = [];
  private undoneCommands: Command[] = [];

  public executeCommand(command: Command): void {
    command.execute();
    this.commandHistory.push(command);
    this.undoneCommands = []; // Clear redo stack on new command
  }

  public undo(): void {
    const command = this.commandHistory.pop();
    if (command) {
      command.undo();
      this.undoneCommands.push(command);
    }
  }

  public redo(): void {
    const command = this.undoneCommands.pop();
    if (command) {
      command.execute();
      this.commandHistory.push(command);
    }
  }
}

// Client code
const calculator = new Calculator();
const calculatorInterface = new CalculatorInterface();

// Operand commands
const five = new OperandCommand(calculator, 5);
const two = new OperandCommand(calculator, 2);

// Execute commands
calculatorInterface.executeCommand(five);
calculatorInterface.executeCommand(two);
calculatorInterface.executeCommand(two);

console.log("Content after all operans", calculator.getResult()); // 5 + 2 + 2 = 9

calculatorInterface.undo();
console.log("Content after undo:", calculator.getResult()); // 5 + 2 = 7

calculatorInterface.redo();
console.log("Content after redo:", calculator.getResult()); // 5 + 2 + 2 = 9
