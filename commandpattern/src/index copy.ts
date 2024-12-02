// Command Interface
interface Command {
  execute(): void;
  undo(): void;
}

// Receiver (The actual logic for operations)
class TextEditor {
  private content: string = "";

  public addText(text: string): void {
    this.content += text;
  }

  public removeText(count: number): void {
    this.content = this.content.slice(0, -count);
  }

  public getContent(): string {
    return this.content;
  }
}

// Concrete Command for typing text
class TypeCommand implements Command {
  private editor: TextEditor;
  private text: string;

  constructor(editor: TextEditor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  public execute(): void {
    this.editor.addText(this.text);
  }

  public undo(): void {
    this.editor.removeText(this.text.length);
  }
}

// Invoker (Handles execution and undo/redo)
class CommandManager {
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
const editor = new TextEditor();
const manager = new CommandManager();

// Typing commands
const typeHello = new TypeCommand(editor, "Hello ");
const typeWorld = new TypeCommand(editor, "World!");

// Execute commands
manager.executeCommand(typeHello);
manager.executeCommand(typeWorld);
console.log("Content after typing:", editor.getContent()); // Hello World!

// Undo last command
manager.undo();
console.log("Content after undo:", editor.getContent()); // Hello

// Redo last undone command
manager.redo();
console.log("Content after redo:", editor.getContent()); // Hello World!