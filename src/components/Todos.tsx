import React, { useContext } from "react";
import TodoElem from "./TodoElem";
import styles from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoElem
          key={item.id}
          text={item.text}
          onClickTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
