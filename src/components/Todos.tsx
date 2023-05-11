import React from "react";
import Todo from "../modules/todo";
import TodoElem from "./TodoElem";
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoElem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
