import React from "react";
import Todo from "../modules/todo";
import TodoElem from "./TodoElem";
import styles from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (TodoID: number) => void;
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoElem
          key={item.id}
          text={item.text}
          onClickTodo={props.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
