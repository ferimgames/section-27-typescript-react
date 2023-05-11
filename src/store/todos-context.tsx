import React, { useState } from "react";
import Todo from "../modules/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

const todosInitialState = {
  items: [],
  addTodo: () => {},
  removeTodo: (id: number) => {},
};

export const TodosContext =
  React.createContext<TodosContextObj>(todosInitialState);

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (TodoID: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== TodoID);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
