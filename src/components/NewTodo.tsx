import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = (
  props
) => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHanlder = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodoText = todoTextInput.current!.value;

    if (enteredTodoText.trim().length !== 0) {
      props.onAddTodo(enteredTodoText);
      return;
    }
  };

  return (
    <form onSubmit={submitHanlder}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button type="submit">Add todo</button>
    </form>
  );
};
export default NewTodo;
