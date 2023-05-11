import React from "react";
import Todo from "../modules/todo";
import TodoElem from "./TodoElem";
import styles from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoElem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
