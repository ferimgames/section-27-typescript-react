import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoModule from "./modules/todo";

const DUMMY_ITEMS = [
  new TodoModule("Learn React"),
  new TodoModule("Learn JS"),
  new TodoModule("Learn TW"),
];

function App() {
  const [todos, setTodos] = useState<TodoModule[]>(DUMMY_ITEMS);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoModule(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const deteleTodoHandler = (TodoID: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== TodoID);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deteleTodoHandler} />
    </div>
  );
}

export default App;
