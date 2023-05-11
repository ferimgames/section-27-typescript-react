import hashCode from "../tools/hash";
import styles from "./TodoElem.module.css";

const TodoElem: React.FC<{
  text: string;
  onClickTodo: (todoID: number) => void;
}> = (props) => {
  const TodoID = hashCode(props.text);
  const onClickHandler = () => {
    props.onClickTodo(TodoID);
  };
  return (
    <li className={styles.item} onClick={onClickHandler}>
      {props.text}
    </li>
  );
};

export default TodoElem;
