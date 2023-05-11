import { useContext, useRef } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {

  const todoCtx = useContext(TodosContext);
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHanlder = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodoText = todoTextInput.current!.value;

    if (enteredTodoText.trim().length !== 0) {
      todoCtx.addTodo(enteredTodoText);
      return;
    }
  };

  return (
    <form onSubmit={submitHanlder} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button type="submit">Add todo</button>
    </form>
  );
};
export default NewTodo;
