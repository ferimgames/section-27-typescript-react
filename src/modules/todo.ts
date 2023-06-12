import hashCode from "../tools/hash";
class Todo {
  id: number;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = hashCode(todoText) + Math.random();
  }
}

export default Todo;
